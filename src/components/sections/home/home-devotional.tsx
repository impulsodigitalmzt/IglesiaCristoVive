import Image from "next/image";
import Link from "next/link";
import { ClockIcon, Share2Icon } from "lucide-react";

import { GsapReveal } from "@/components/animations/gsap-reveal";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VerseCard } from "@/components/cards/verse-card";
import { featuredDevotional, verseOfTheDay } from "@/data/devotionals";

function HomeDevotional() {
  if (!featuredDevotional) return null;

  return (
    <Section background="alt" spacing="lg" ariaLabel="Devocional del día">
      <MaxWidthContainer>
        <GsapReveal>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background shadow-lg">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] lg:min-h-[560px]">
                <Image
                  src={featuredDevotional.image}
                  alt={featuredDevotional.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <Badge variant="primary" className="mb-4 w-fit">
                  {featuredDevotional.category}
                </Badge>
                <p className="text-sm font-medium text-primary">{featuredDevotional.verse}</p>
                <h2 className="mt-3 font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
                  {featuredDevotional.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featuredDevotional.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{featuredDevotional.author}</span>
                  <span className="inline-flex items-center gap-1">
                    <ClockIcon className="size-4" />
                    {featuredDevotional.readTime}
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="primary" size="lg">
                    <Link href={`/devocionales/${featuredDevotional.slug}`}>Leer devocional</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2Icon className="size-4" />
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </GsapReveal>

        <GsapReveal className="mt-10">
          <VerseCard
            verse={verseOfTheDay.text}
            reference={verseOfTheDay.reference}
            accent="secondary"
          />
        </GsapReveal>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeDevotional };
