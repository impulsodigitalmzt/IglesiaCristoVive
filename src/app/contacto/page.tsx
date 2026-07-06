import type { Metadata } from "next";
import Link from "next/link";
import { ClockIcon, MailIcon, MapPinIcon, NavigationIcon, PhoneIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { PrayerRequestForm } from "@/components/sections/contact/prayer-request-form";
import { ShareTestimonialForm } from "@/components/sections/home/share-testimonial-form";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";
import { church } from "@/data/church";
import { pageHeroImages } from "@/data/page-heroes";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contáctanos",
  description: "Horarios, ubicación y formas de contactar a Iglesia Cristo Vive en Mazatlán.",
  path: "/contacto",
});

const contactItems = [
  {
    icon: MapPinIcon,
    title: "Dirección",
    lines: [church.address],
  },
  {
    icon: ClockIcon,
    title: "Horarios",
    lines: [church.schedule.sunday, church.schedule.wednesday],
  },
  {
    icon: PhoneIcon,
    title: "Teléfono",
    lines: [church.phone],
  },
  {
    icon: MailIcon,
    title: "Correo",
    lines: [church.email],
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Estamos para ti"
        title="Contáctanos"
        description="Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos. Queremos conocerte y acompañarte en tu camino de fe."
        image={pageHeroImages.contacto}
      />

      <Section background="default" spacing="lg" ariaLabel="Información de contacto y ubicación">
        <MaxWidthContainer>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)] shadow-lg">
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="flex flex-col justify-between bg-[var(--color-surface-dark)] p-8 md:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Cómo encontrarnos
                  </p>
                  <h2 className="mt-4 font-montserrat text-3xl font-black tracking-tight text-white md:text-4xl">
                    Visítanos en Mazatlán
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                    Nuestras puertas están abiertas para ti. Si es tu primera vez, nuestro equipo
                    de bienvenida te recibirá con gusto desde que llegues.
                  </p>
                </div>

                <div className="my-8 space-y-6 lg:my-10">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                          <Icon className="size-4 text-primary" aria-hidden />
                        </div>
                        <div>
                          <p className="font-montserrat text-sm font-bold text-white">
                            {item.title}
                          </p>
                          {item.lines.map((line) => (
                            <p key={line} className="mt-1 text-sm leading-relaxed text-white/70">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="font-montserrat text-sm font-bold text-white">Síguenos</p>
                    <SocialLinks
                      variant="header"
                      transparent
                      className="mt-3"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="primary" size="lg">
                      <Link
                        href={`https://wa.me/${church.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    >
                      <Link href="/planea-tu-visita">Planea tu visita</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <iframe
                  title="Mapa de Iglesia Cristo Vive"
                  src={church.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center px-4 md:bottom-6">
                  <Button
                    asChild
                    variant="primary"
                    size="lg"
                    className="pointer-events-auto shadow-lg"
                  >
                    <a
                      href={church.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NavigationIcon className="size-5" aria-hidden />
                      Cómo llegar en Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="default" spacing="lg" ariaLabel="Pedidos de oración">
        <MaxWidthContainer>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)] bg-[var(--color-surface-dark)] p-8 shadow-lg md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  No estás solo
                </p>
                <h2 className="mt-4 font-montserrat text-3xl font-black tracking-tight text-white md:text-4xl">
                  Pedidos de oración
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                  Sabemos que hay temporadas difíciles: problemas de salud, cargas emocionales,
                  duelo, ansiedad o la sensación de estar solo. En Cristo Vive creemos en el poder de
                  la oración y en acompañarnos como familia.
                </p>
                <blockquote className="mt-8 border-l-2 border-primary pl-4">
                  <p className="text-sm italic leading-relaxed text-white/85 md:text-base">
                    &ldquo;Llevad los unos las cargas de los otros, y cumplid así la ley de
                    Cristo.&rdquo;
                  </p>
                  <cite className="mt-2 block text-sm font-semibold not-italic text-primary">
                    Gálatas 6:2
                  </cite>
                </blockquote>
                <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/70">
                  <li>· Oramos por ti con respeto y confidencialidad</li>
                  <li>· Puedes pedir oración de forma anónima si lo prefieres</li>
                  <li>· Un miembro del equipo puede contactarte si lo necesitas</li>
                </ul>
              </div>

              <PrayerRequestForm />
            </div>
          </div>
        </MaxWidthContainer>
      </Section>

      <Section background="default" spacing="lg" ariaLabel="Comparte tu experiencia">
        <MaxWidthContainer>
          <div className="overflow-hidden rounded-[var(--radius-card-lg)] bg-[var(--color-surface-dark)] p-8 shadow-lg md:p-10 lg:p-12">
            <div className="mx-auto max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Tu voz importa
              </p>
              <h2 className="mt-4 font-montserrat text-3xl font-black tracking-tight text-white md:text-4xl">
                Comparte tu experiencia
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                Si Dios ha hecho algo especial en tu vida en Cristo Vive, cuéntanos. Tu testimonio
                puede animar y bendecir a alguien más.
              </p>
              <div className="mt-8">
                <ShareTestimonialForm />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
