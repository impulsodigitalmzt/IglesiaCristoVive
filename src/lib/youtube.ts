import { youtubeChannel } from "@/data/social";

export type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  url: string;
  isLive?: boolean;
};

type RssEntry = {
  id: string;
  title: string;
  publishedAt: string;
};

const SHORTS_TITLE_PATTERN =
  /#\s*shorts?\b|#viralshorts?\b|\bviral\s*shorts?\b|\byoutube\s*shorts?\b/i;

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (compatible; CristoViveBot/1.0; +https://cristovive.org)",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

function decodeXmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function toYouTubeVideo(
  entry: Pick<RssEntry, "id" | "title" | "publishedAt">,
  isLive = false,
): YouTubeVideo {
  return {
    id: entry.id,
    title: entry.title,
    publishedAt: entry.publishedAt,
    url: `https://www.youtube.com/watch?v=${entry.id}`,
    isLive,
  };
}

function looksLikeShortTitle(title: string) {
  return SHORTS_TITLE_PATTERN.test(title);
}

/** Detecta Shorts: /shorts/ID responde 200; si no es Short, suele redirigir a /watch. */
async function isYouTubeShort(videoId: string): Promise<boolean> {
  try {
    const response = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: "HEAD",
      redirect: "manual",
      headers: FETCH_HEADERS,
      next: { revalidate: 3600 },
    });

    const location = response.headers.get("location") ?? "";

    if (response.status >= 300 && response.status < 400) {
      return /\/shorts\//i.test(location);
    }

    return response.ok;
  } catch {
    return false;
  }
}

function parseRssEntries(xml: string): RssEntry[] {
  const blocks = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return blocks
    .map((block) => {
      const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = block.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
      const publishedAt = block.match(/<published>([^<]+)<\/published>/)?.[1]?.trim() ?? "";

      if (!id || !rawTitle) return null;

      return {
        id,
        title: decodeXmlEntities(rawTitle),
        publishedAt,
      };
    })
    .filter((entry): entry is RssEntry => entry !== null);
}

/** Si el canal está transmitiendo, YouTube redirige /channel/ID/live → /watch?v=… */
async function getLiveYouTubeVideo(): Promise<YouTubeVideo | null> {
  try {
    const response = await fetch(
      `https://www.youtube.com/channel/${youtubeChannel.id}/live`,
      {
        redirect: "manual",
        headers: FETCH_HEADERS,
        next: { revalidate: 60 },
      },
    );

    const location = response.headers.get("location") ?? "";
    const redirectedId =
      location.match(/[?&]v=([a-zA-Z0-9_-]{6,})/)?.[1] ??
      location.match(/\/live\/([a-zA-Z0-9_-]{6,})/)?.[1];

    if (redirectedId) {
      return toYouTubeVideo(
        {
          id: redirectedId,
          title: "Transmisión en vivo",
          publishedAt: new Date().toISOString(),
        },
        true,
      );
    }

    if (!response.ok) return null;

    const html = await response.text();
    const isLiveNow =
      /"isLiveNow"\s*:\s*true/i.test(html) ||
      /"isLive"\s*:\s*true/i.test(html) ||
      /itemprop="isLiveBroadcast"\s+content="True"/i.test(html);

    if (!isLiveNow) return null;

    const liveId =
      html.match(/"videoId"\s*:\s*"([a-zA-Z0-9_-]{6,})"/)?.[1] ??
      html.match(/[?&]v=([a-zA-Z0-9_-]{6,})/)?.[1];

    if (!liveId) return null;

    const title =
      html.match(/"title"\s*:\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"') ??
      "Transmisión en vivo";

    return toYouTubeVideo(
      {
        id: liveId,
        title,
        publishedAt: new Date().toISOString(),
      },
      true,
    );
  } catch {
    return null;
  }
}

/** Último video largo del canal (excluye Shorts). */
async function getLatestLongFormYouTubeVideo(): Promise<YouTubeVideo | null> {
  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannel.id}`,
      { next: { revalidate: 1800 } },
    );

    if (!response.ok) return null;

    const xml = await response.text();
    const entries = parseRssEntries(xml);

    for (const entry of entries) {
      if (looksLikeShortTitle(entry.title)) continue;
      if (await isYouTubeShort(entry.id)) continue;
      return toYouTubeVideo(entry);
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Video a mostrar en inicio / predicaciones:
 * 1) Transmisión en vivo si existe
 * 2) Último video largo (no Short)
 */
export async function getLatestYouTubeVideo(): Promise<YouTubeVideo | null> {
  const live = await getLiveYouTubeVideo();
  if (live) return live;
  return getLatestLongFormYouTubeVideo();
}
