import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { HoverCard, HoverCardContent, HoverCardTitle } from "@/components/cards/hover-card";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { BackgroundVideo, LoopVideo } from "@/components/ui/video";
import { featuredMinistries } from "@/data/ministries";
import { churchVideos } from "@/data/videos";

function HomeMinistries() {
  return (
    <Section background="default" spacing="none" ariaLabel="Ministerios">
      <div className="relative overflow-hidden">
        <div className="relative min-h-[240px] md:min-h-[300px]">
          <BackgroundVideo src={churchVideos.congregacion.src} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <MaxWidthContainer className="relative flex min-h-[inherit] flex-col justify-center py-12 md:py-16 lg:py-20">
            <SectionTitle
              className="[&_[data-slot=heading]]:text-primary [&_[data-slot=eyebrow]]:border-white/20 [&_[data-slot=eyebrow]]:bg-white/10 [&_[data-slot=eyebrow]]:text-white/80"
              eyebrow="Ministerios"
              title="Encuentra tu lugar"
              titleLevel="h2"
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Cada persona tiene un rol en la familia de Cristo Vive. Descubre dónde conectar.
            </p>
          </MaxWidthContainer>
        </div>
      </div>

      <MaxWidthContainer className="section-padding">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredMinistries.map((ministry) => (
            <Link
              key={ministry.id}
              href={`/ministerios#${ministry.anchor ?? ministry.slug}`}
              className="group block h-full"
            >
              <HoverCard padding="none" className="group h-full overflow-hidden">
                <div className="relative min-h-[240px] md:min-h-[260px]">
                  {ministry.video ? (
                    <LoopVideo
                      src={ministry.video}
                      title={ministry.title}
                      rounded="none"
                      aspect="auto"
                      wrapperClassName="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <HoverCardContent className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <Badge variant="secondary" className="mb-2 bg-white/15 text-white">
                      {ministry.category}
                    </Badge>
                    <HoverCardTitle className="text-white">{ministry.title}</HoverCardTitle>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {ministry.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                      Conocer más
                      <ArrowUpRightIcon className="size-4" />
                    </span>
                  </HoverCardContent>
                </div>
              </HoverCard>
            </Link>
          ))}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeMinistries };
