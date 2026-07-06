import type { Metadata } from "next";
import Link from "next/link";
import { CarIcon, ClockIcon, HeartHandshakeIcon, MapPinIcon, ShirtIcon, UsersIcon } from "lucide-react";

import { GsapReveal } from "@/components/animations/gsap-reveal";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { IconContainer } from "@/components/shared/icon-container";
import { Button } from "@/components/ui/button";
import { LoopVideo } from "@/components/ui/video";
import { church } from "@/data/church";
import { homeVisit } from "@/data/home";
import { pageHeroImages } from "@/data/page-heroes";
import { churchVideos } from "@/data/videos";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Planea tu visita",
  description: homeVisit.description,
  path: "/planea-tu-visita",
});

const highlightIcons = [CarIcon, ShirtIcon, UsersIcon, HeartHandshakeIcon];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow={homeVisit.eyebrow}
        title={homeVisit.title}
        description={homeVisit.description}
        image={pageHeroImages.visita}
      />

      <Section background="default" spacing="lg" ariaLabel="Guía para tu primera visita">
        <MaxWidthContainer>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <GsapReveal>
              <div className="space-y-5">
                {homeVisit.highlights.map((item, index) => {
                  const Icon = highlightIcons[index] ?? HeartHandshakeIcon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <IconContainer icon={Icon} variant="primary" size="sm" shape="circle" />
                      <div>
                        <p className="font-semibold text-text">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 space-y-4 rounded-[var(--radius-card-lg)] border border-border/60 bg-background-alt p-6">
                <div className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-text">Horarios</p>
                    <p className="mt-1 text-sm text-muted-foreground">{church.schedule.sunday}</p>
                    <p className="text-sm text-muted-foreground">{church.schedule.wednesday}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-text">Ubicación</p>
                    <p className="mt-1 text-sm text-muted-foreground">{church.address}</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="primary" size="lg" className="mt-8">
                <Link href={`https://wa.me/${church.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                </Link>
              </Button>
            </GsapReveal>

            <GsapReveal delay={0.08}>
              <div className="overflow-hidden rounded-[var(--radius-card-lg)] shadow-xl">
                <LoopVideo
                  src={churchVideos.welcome.src}
                  poster={church.logoGray}
                  title={churchVideos.welcome.title}
                  rounded="none"
                  aspect="video"
                />
              </div>
            </GsapReveal>
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="alt" spacing="lg" ariaLabel="Así es nuestro servicio">
        <MaxWidthContainer>
          <GsapReveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Vive la experiencia
            </p>
            <h2 className="mt-4 font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
              {churchVideos.service.title}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {churchVideos.service.description}
            </p>
          </GsapReveal>
          <GsapReveal className="mt-8 overflow-hidden rounded-[var(--radius-card-lg)] shadow-xl" delay={0.06}>
            <LoopVideo
              src={churchVideos.service.src}
              title={churchVideos.service.title}
              rounded="none"
              aspect="video"
            />
          </GsapReveal>
        </MaxWidthContainer>
      </Section>

      <Section background="default" spacing="lg" ariaLabel="Mapa de ubicación">
        <MaxWidthContainer>
          <GsapReveal>
            <h2 className="font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
              Cómo llegar
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Estamos en Francisco Villa, Mazatlán. Te esperamos con los brazos abiertos.
            </p>
          </GsapReveal>
          <GsapReveal className="mt-8 overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 shadow-md" delay={0.06}>
            <iframe
              title="Mapa de Iglesia Cristo Vive"
              src={church.mapEmbedUrl}
              className="aspect-[16/10] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </GsapReveal>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
