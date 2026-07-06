import { youtubeChannel } from "@/data/social";

export type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  url: string;
};

export async function getLatestYouTubeVideo(): Promise<YouTubeVideo | null> {
  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannel.id}`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) return null;

    const xml = await response.text();
    const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];

    if (!entry) return null;

    const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
    const publishedAt = entry.match(/<published>([^<]+)<\/published>/)?.[1];

    if (!videoId) return null;

    return {
      id: videoId,
      title: title ?? "Último mensaje",
      publishedAt: publishedAt ?? "",
      url: `https://www.youtube.com/watch?v=${videoId}`,
    };
  } catch {
    return null;
  }
}
