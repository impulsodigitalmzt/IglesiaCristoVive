import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Button } from "@/components/ui/button";
import { youtubeChannel } from "@/data/social";
import { getLatestYouTubeVideo } from "@/lib/youtube";

async function HomeYouTube() {
  const video = await getLatestYouTubeVideo();

  if (!video) return null;

  return (
    <Section
      id="predicaciones"
      background="default"
      spacing="default"
      ariaLabel="Último mensaje en YouTube"
    >
      <MaxWidthContainer>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Predicaciones"
            title="Último mensaje"
            titleLevel="h2"
          />
          <Button asChild variant="primary" size="default">
            <Link href={youtubeChannel.url} target="_blank" rel="noopener noreferrer">
              Ver canal en YouTube
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-black shadow-lg">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="size-full"
            />
          </div>
        </div>

        <p className="mt-5 font-montserrat text-xl font-bold text-text md:text-2xl">
          {video.title}
        </p>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeYouTube };
