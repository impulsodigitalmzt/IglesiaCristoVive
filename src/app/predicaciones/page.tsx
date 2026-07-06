import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ClockIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sermons } from "@/data/sermons";
import { pageHeroImages } from "@/data/page-heroes";
import { youtubeChannel } from "@/data/social";
import { getLatestYouTubeVideo } from "@/lib/youtube";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Predicaciones",
  description: "Escucha los mensajes recientes de Iglesia Cristo Vive en Mazatlán.",
  path: "/predicaciones",
});

export default async function SermonsPage() {
  const latestVideo = await getLatestYouTubeVideo();

  return (
    <>
      <PageHero
        eyebrow="Ver"
        title="Predicaciones"
        description="Mensajes que edifican, fortalecen la fe y acercan corazones a Jesús."
        image={pageHeroImages.predicaciones}
      />

      {latestVideo ? (
        <Section background="default" spacing="lg" ariaLabel="Último mensaje">
          <MaxWidthContainer>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge variant="primary" className="mb-3">
                  Más reciente
                </Badge>
                <h2 className="font-montserrat text-2xl font-black text-text md:text-3xl">
                  {latestVideo.title}
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href={youtubeChannel.url} target="_blank" rel="noopener noreferrer">
                  Ver canal
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-black shadow-lg">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${latestVideo.id}?rel=0`}
                  title={latestVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>
          </MaxWidthContainer>
        </Section>
      ) : null}

      <Section background="alt" spacing="lg" ariaLabel="Biblioteca de mensajes">
        <MaxWidthContainer>
          <h2 className="font-montserrat text-2xl font-black text-text md:text-3xl">
            Mensajes destacados
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sermons.map((sermon) => (
              <article
                key={sermon.id}
                className="overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background"
              >
                <div className="relative aspect-video">
                  <Image
                    src={sermon.image}
                    alt={sermon.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="muted">{sermon.series}</Badge>
                  <h3 className="mt-3 font-montserrat text-xl font-bold text-text">
                    {sermon.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{sermon.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{sermon.speaker}</span>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="size-4" />
                      {sermon.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="primary" size="lg">
              <Link href={youtubeChannel.url} target="_blank" rel="noopener noreferrer">
                Ver todos en YouTube
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
