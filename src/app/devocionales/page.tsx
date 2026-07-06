import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { DevotionalArticle } from "@/components/sections/devotionals/devotional-article";
import { DevotionalSidebar } from "@/components/sections/devotionals/devotional-sidebar";
import { popularDevotionals, todaysDevotional } from "@/data/devotionals";
import { pageHeroImages } from "@/data/page-heroes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Devocional diario",
  description: "Un devocional diario para fortalecer tu relación con Dios.",
  path: "/devocionales",
});

export default function DevotionalsPage() {
  if (!todaysDevotional) return null;

  return (
    <>
      <PageHero
        eyebrow="Ver"
        title="Devocional diario"
        description="Un devocional diario para fortalecer tu relación con Dios."
        image={pageHeroImages.devocionales}
      />

      <Section
        background="default"
        spacing="lg"
        ariaLabel="Devocional del día"
        className="bg-[#f7f4ef]"
      >
        <MaxWidthContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_360px]">
            <DevotionalArticle devotional={todaysDevotional} />
            <DevotionalSidebar popular={popularDevotionals} />
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
