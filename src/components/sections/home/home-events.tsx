import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";

import { GlassCard } from "@/components/cards/glass-card";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { upcomingEvents } from "@/data/events";

function HomeEvents() {
  return (
    <Section background="alt" spacing="default" ariaLabel="Próximos eventos">
      <MaxWidthContainer>
        <SectionTitle eyebrow="Eventos" title="Próximos encuentros" titleLevel="h2" />

        <div className="mt-6 space-y-5">
          {upcomingEvents.slice(0, 2).map((event) => (
            <Link key={event.id} href={`/eventos#${event.slug}`} className="block">
              <GlassCard tone="light" blur="lg" className="overflow-hidden border-border/70 bg-background/80">
                <div className="grid md:grid-cols-[220px_1fr]">
                  <div className="relative min-h-[180px] md:min-h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <Badge variant="muted">{event.category}</Badge>
                    <h3 className="mt-2 font-montserrat text-xl font-black tracking-tight text-text">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarIcon className="size-4 text-primary" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon className="size-4 text-primary" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPinIcon className="size-4 text-primary" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeEvents };
