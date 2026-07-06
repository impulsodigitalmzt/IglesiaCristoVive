import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { church } from "@/data/church";
import { pageHeroImages } from "@/data/page-heroes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacidad",
  description: "Política de privacidad de Iglesia Cristo Vive.",
  path: "/privacidad",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de privacidad"
        description={`${church.name} respeta tu privacidad y protege la información que compartes con nosotros.`}
        image={pageHeroImages.privacidad}
      />

      <Section background="default" spacing="lg" ariaLabel="Política de privacidad">
        <MaxWidthContainer>
          <div className="prose prose-neutral max-w-3xl space-y-6 text-muted-foreground">
            <p>
              Recopilamos únicamente la información necesaria para comunicarnos contigo,
              procesar donativos o responder a solicitudes de oración y contacto.
            </p>
            <p>
              No vendemos ni compartimos tus datos con terceros con fines comerciales. Puedes
              solicitar la actualización o eliminación de tu información escribiendo a{" "}
              <a href={`mailto:${church.email}`} className="text-primary hover:underline">
                {church.email}
              </a>
              .
            </p>
            <p>
              Este sitio puede utilizar cookies técnicas para mejorar la experiencia de navegación.
            </p>
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
