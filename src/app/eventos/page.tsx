import type { Metadata } from "next";
import Image from "next/image";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { LoopVideo } from "@/components/ui/video";
import { events } from "@/data/events";
import { pageHeroImages } from "@/data/page-heroes";
import { churchVideos } from "@/data/videos";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Eventos",
  description: "Próximos eventos y actividades de Iglesia Cristo Vive en Mazatlán.",
  path: "/eventos",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conéctate"
        title="Eventos"
        description="Celebraciones, encuentros y momentos especiales para toda la familia."
        image={pageHeroImages.eventos}
      />

      <Section background="default" spacing="lg" ariaLabel="Campamento de mujeres">
        <MaxWidthContainer>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background-alt">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <LoopVideo
                src={churchVideos.womenCamp.src}
                title={churchVideos.womenCamp.title}
                rounded="none"
                aspect="video"
              />
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <Badge variant="primary" className="mb-4 w-fit">
                  Evento destacado
                </Badge>
                <h2 className="font-montserrat text-2xl font-black tracking-tight text-text md:text-3xl">
                  {churchVideos.womenCamp.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {churchVideos.womenCamp.description}
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="alt" spacing="lg" ariaLabel="Próximos eventos">
        <MaxWidthContainer>
          <div className="space-y-8">
            {events.map((event) => (
              <article
                key={event.id}
                id={event.slug}
                className="overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background-alt"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative min-h-[220px] md:min-h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <Badge variant="muted">{event.category}</Badge>
                    <h2 className="mt-3 font-montserrat text-2xl font-black text-text">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{event.description}</p>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarIcon className="size-4 text-primary" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon className="size-4 text-primary" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPinIcon className="size-4 text-primary" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
