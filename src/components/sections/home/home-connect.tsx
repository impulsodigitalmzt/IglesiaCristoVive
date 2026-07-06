import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, BookOpenIcon, CalendarIcon, UsersIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { featuredDevotional } from "@/data/devotionals";
import { featuredEvent } from "@/data/events";
import { imageAssets } from "@/data/images";
import { featuredMinistries } from "@/data/ministries";

const connectCards = [
  {
    title: "Devocional diario",
    description: featuredDevotional?.summary ?? "Crece cada día con la Palabra de Dios.",
    href: "/devocionales",
    icon: BookOpenIcon,
    image: featuredDevotional?.image ?? imageAssets.bible,
  },
  {
    title: "Próximos eventos",
    description: featuredEvent?.description ?? "Celebraciones y encuentros para toda la familia.",
    href: "/eventos",
    icon: CalendarIcon,
    image: featuredEvent?.image ?? imageAssets.evento,
  },
  {
    title: "Únete a un ministerio",
    description:
      featuredMinistries[0]?.description ?? "Encuentra tu lugar para servir y crecer en comunidad.",
    href: "/ministerios",
    icon: UsersIcon,
    image: featuredMinistries[0]?.image ?? imageAssets.ministerio,
  },
] as const;

function HomeConnect() {
  return (
    <Section
      background="alt"
      spacing="default"
      ariaLabel="Conéctate con nosotros"
      className="pt-8 md:pt-10 lg:pt-12"
    >
      <MaxWidthContainer>
        <SectionTitle eyebrow="Conéctate" title="Da tu siguiente paso" titleLevel="h2" />

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {connectCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link key={card.href} href={card.href} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-montserrat text-lg font-bold text-text">{card.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Explorar
                      <ArrowUpRightIcon className="size-4" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeConnect };
