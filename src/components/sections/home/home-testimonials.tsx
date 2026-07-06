"use client";

import { StarIcon } from "lucide-react";

import { CoverFlowCarousel } from "@/components/animations/cover-flow-carousel";
import { QuoteCard } from "@/components/cards/quote-card";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Avatar } from "@/components/ui/avatar";
import { church } from "@/data/church";
import { carouselTestimonials } from "@/data/testimonials";

function GoogleRatingBadge() {
  const { rating, count } = church.googleReviews;

  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-sm">
      <div className="flex" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="size-4 fill-secondary text-secondary" />
        ))}
      </div>
      <span className="font-montserrat text-sm font-bold text-white">{rating}</span>
      <span className="text-sm text-white/70">· {count} opiniones en Google</span>
    </div>
  );
}

function HomeTestimonials() {
  return (
    <Section spacing="default" ariaLabel="Testimonios" className="overflow-x-hidden bg-black text-white">
      <MaxWidthContainer>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTitle
              className="[&_[data-slot=heading]]:text-primary [&_[data-slot=eyebrow]]:border-white/20 [&_[data-slot=eyebrow]]:bg-white/10 [&_[data-slot=eyebrow]]:text-white/80"
              eyebrow="Testimonios"
              title="Vidas transformadas"
              titleLevel="h2"
            />
            <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">
              Opiniones reales de quienes forman parte de Cristo Vive en Mazatlán.
            </p>
          </div>
          <GoogleRatingBadge />
        </div>

        <div className="mt-10 md:mt-12">
          <CoverFlowCarousel
            theme="dark"
            items={carouselTestimonials}
            ariaLabel="Testimonios de la iglesia"
            getLabel={(item) => item.author.split(" ")[0] ?? item.author}
            renderItem={(item, isActive) => (
              <QuoteCard
                quote={item.quote}
                author={item.author}
                className={isActive ? "bg-background-alt" : "bg-background-alt/95"}
                avatar={
                  <Avatar
                    name={item.author}
                    size="default"
                    className="bg-primary/10 text-primary"
                  />
                }
              />
            )}
          />
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeTestimonials };
