import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { DevotionalArticle } from "@/components/sections/devotionals/devotional-article";
import { DevotionalSidebar } from "@/components/sections/devotionals/devotional-sidebar";
import { devotionals, popularDevotionals } from "@/data/devotionals";
import { pageHeroImages } from "@/data/page-heroes";
import { createPageMetadata } from "@/lib/seo";

type DevotionalPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: DevotionalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const devotional = devotionals.find((item) => item.slug === slug);

  if (!devotional) {
    return createPageMetadata({
      title: "Devocional no encontrado",
      description: "El devocional solicitado no está disponible.",
      path: `/devocionales/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: devotional.title,
    description: devotional.summary,
    path: `/devocionales/${slug}`,
    image: devotional.image,
  });
}

export default async function DevotionalDetailPage({ params }: DevotionalPageProps) {
  const { slug } = await params;
  const devotional = devotionals.find((item) => item.slug === slug);

  if (!devotional) notFound();

  const sidebarItems = popularDevotionals.filter((item) => item.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Devocional"
        title={devotional.title}
        description={devotional.summary}
        image={devotional.image || pageHeroImages.devocionales}
      />

      <Section
        background="default"
        spacing="lg"
        ariaLabel={devotional.title}
        className="bg-[#f7f4ef]"
      >
        <MaxWidthContainer>
          <Link
            href="/devocionales"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeftIcon className="size-4" />
            Volver al devocional de hoy
          </Link>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_360px]">
            <DevotionalArticle devotional={devotional} />
            <DevotionalSidebar popular={sidebarItems} />
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
