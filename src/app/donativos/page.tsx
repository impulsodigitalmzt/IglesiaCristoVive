import type { Metadata } from "next";
import { HeartHandshakeIcon, LockIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { DonationCheckout } from "@/components/sections/donations/donation-checkout";
import { donationInfo } from "@/data/donations";
import { pageHeroImages } from "@/data/page-heroes";
import { homeDonations } from "@/data/home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Donativos",
  description: "Tu generosidad impulsa ministerios y transforma vidas en Mazatlán.",
  path: "/donativos",
});

const trustPoints = [
  {
    icon: ShieldCheckIcon,
    title: "Pago seguro",
    description: "Cifrado SSL y procesamiento protegido.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Impacto directo",
    description: "Tu ofrenda impulsa ministerios y familias en Mazatlán.",
  },
  {
    icon: UsersIcon,
    title: "Transparencia",
    description: "Cada donativo se administra con responsabilidad.",
  },
];

export default function DonationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dar"
        title={donationInfo.title}
        description={donationInfo.description}
        image={pageHeroImages.donativos}
      />

      <Section background="default" spacing="lg" ariaLabel="Pasarela de ofrendas">
        <MaxWidthContainer>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Ofrenda en línea
                </p>
                <h2 className="mt-3 font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
                  Da con confianza
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Ofrenda, diezmo o apoyo a misiones. Elige el monto, el método de pago y recibe
                  tu comprobante al instante.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {homeDonations.impact.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[var(--radius-card)] border border-border/60 bg-background-alt px-4 py-5 text-center"
                  >
                    <AnimatedCounter
                      value={Number.parseInt(item.value.replace(/\D/g, ""), 10) || 0}
                      suffix={item.value.includes("+") ? "+" : item.value.includes("%") ? "%" : ""}
                      className="text-2xl text-primary md:text-3xl"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {trustPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-xl border border-border/60 bg-background-alt px-4 py-3.5"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-4" aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text">{item.title}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background-alt px-4 py-3 text-xs text-muted-foreground">
                <LockIcon className="size-4 shrink-0 text-primary" aria-hidden />
                Aceptamos {donationInfo.methods.join(", ")}. Procesamiento seguro para México.
              </div>
            </div>

            <DonationCheckout />
          </div>
        </MaxWidthContainer>
      </Section>

      <Footer />
    </>
  );
}
