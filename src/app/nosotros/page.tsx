import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { VerseCard } from "@/components/cards/verse-card";
import { LoopVideo } from "@/components/ui/video";
import {
  church,
  churchHistory,
  churchMission,
  churchScripture,
  churchTimeline,
  churchValues,
  pastorWelcome,
} from "@/data/church";
import { churchVideos } from "@/data/videos";
import { pageHeroImages } from "@/data/page-heroes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Nosotros",
  description: "Conoce la historia, misión, visión y valores de Iglesia Cristo Vive en Mazatlán.",
  path: "/nosotros",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        id="familia"
        eyebrow="Nosotros"
        title="Una familia de fe en Mazatlán"
        description={church.description}
        image={pageHeroImages.nosotros}
      />

      <Section background="default" spacing="lg" ariaLabel="Bienvenida del pastor" id="pastor">
        <MaxWidthContainer>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card-lg)] shadow-lg">
              <Image
                src={pastorWelcome.image}
                alt={pastorWelcome.pastorName}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
                {pastorWelcome.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {pastorWelcome.message}
              </p>
              <div className="mt-8 border-l-2 border-primary pl-4">
                <p className="font-montserrat text-lg font-bold text-text">
                  {pastorWelcome.pastorName}
                </p>
                <p className="text-sm text-muted-foreground">{pastorWelcome.pastorRole}</p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="alt" spacing="lg" ariaLabel="Misión y visión" id="mision">
        <MaxWidthContainer>
          <h2 className="font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
            {churchMission.headline}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--radius-card-lg)] border border-border/60 bg-background p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Misión
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text">{churchMission.mission}</p>
            </div>
            <div className="rounded-[var(--radius-card-lg)] border border-border/60 bg-background p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Visión
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text">{churchMission.vision}</p>
            </div>
          </div>
          <div className="mt-8">
            <VerseCard verse={churchScripture.text} reference={churchScripture.reference} />
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="default" spacing="lg" ariaLabel="Valores">
        <MaxWidthContainer>
          <h2 className="font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
            Nuestros valores
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {churchValues.map((value) => (
              <div
                key={value.title}
                className="rounded-[var(--radius-card-lg)] border border-border/60 bg-background-alt p-6"
              >
                <h3 className="font-montserrat text-lg font-bold text-text">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="default" spacing="lg" ariaLabel="Servicio comunitario">
        <MaxWidthContainer>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                En la ciudad
              </p>
              <h2 className="mt-3 font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
                {churchVideos.communityService.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {churchVideos.communityService.description}
              </p>
            </div>
            <LoopVideo
              src={churchVideos.communityService.src}
              title={churchVideos.communityService.title}
              rounded="card"
              aspect="video"
            />
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="alt" spacing="lg" ariaLabel="Historia" id="historia">
        <MaxWidthContainer>
          <h2 className="font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
            {churchHistory.title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{churchHistory.content}</p>
          <ol className="relative mt-14">
            {churchTimeline.map((item) => (
              <li
                key={item.year}
                className="relative border-l-2 border-primary/30 pb-12 pl-8 last:pb-0 md:pl-10"
              >
                <span
                  aria-hidden
                  className="absolute top-1 left-0 size-3 -translate-x-[7px] rounded-full bg-primary"
                />
                <span className="font-montserrat text-sm font-black tracking-widest text-primary">
                  {item.year}
                </span>
                <h3 className="mt-2 font-montserrat text-2xl font-black text-text">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">{item.description}</p>
                <div className="relative mt-6 aspect-[16/10] max-w-3xl overflow-hidden rounded-[var(--radius-card-lg)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ol>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
