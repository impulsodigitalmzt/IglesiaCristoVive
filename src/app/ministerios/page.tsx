import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LoopVideo } from "@/components/ui/video";
import { ministries } from "@/data/ministries";
import { pageHeroImages } from "@/data/page-heroes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ministerios",
  description: "Encuentra tu lugar para servir y crecer en Iglesia Cristo Vive.",
  path: "/ministerios",
});

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministerios"
        title="Encuentra tu lugar"
        description="Cada persona tiene un rol en la familia de Cristo Vive. Descubre dónde conectar."
        image={pageHeroImages.ministerios}
      />

      <Section background="default" spacing="lg" ariaLabel="Lista de ministerios">
        <MaxWidthContainer>
          <div className="grid gap-8 md:grid-cols-2">
            {ministries.map((ministry) => (
              <article
                key={ministry.id}
                id={ministry.anchor ?? ministry.slug}
                className="overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background-alt scroll-mt-28"
              >
                {ministry.video ? (
                  <LoopVideo
                    src={ministry.video}
                    title={ministry.title}
                    rounded="none"
                    aspect="wide"
                    wrapperClassName="aspect-[16/10]"
                  />
                ) : null}
                <div className="p-6 md:p-8">
                  <Badge variant="primary">{ministry.category}</Badge>
                  <h2 className="mt-3 font-montserrat text-2xl font-black text-text">
                    {ministry.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {ministry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[var(--radius-card-lg)] border border-border/60 bg-background p-8 text-center md:p-12">
            <h2 className="font-montserrat text-2xl font-black text-text">
              ¿Quieres servir?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Escríbenos y te ayudamos a encontrar el ministerio ideal para ti.
            </p>
            <Button asChild variant="primary" size="lg" className="mt-6">
              <Link href="/contacto">
                Contactar
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
