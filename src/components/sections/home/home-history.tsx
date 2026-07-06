import Image from "next/image";

import { GsapReveal } from "@/components/animations/gsap-reveal";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { churchHistory, churchTimeline } from "@/data/church";

function HomeHistory() {
  return (
    <Section background="alt" spacing="lg" ariaLabel="Historia">
      <MaxWidthContainer>
        <GsapReveal>
          <SectionTitle
            eyebrow="Nuestra historia"
            title={churchHistory.title}
            titleLevel="h2"
          />
        </GsapReveal>

        <ol className="relative mt-14 md:mt-20">
          {churchTimeline.map((item, index) => (
            <GsapReveal key={item.year} delay={index * 0.05}>
              <li className="relative border-l-2 border-primary/30 pb-12 pl-8 last:pb-0 md:pl-10">
                <span
                  aria-hidden
                  className="absolute top-1 left-0 size-3 -translate-x-[7px] rounded-full bg-primary"
                />
                <span className="font-montserrat text-sm font-black tracking-widest text-primary">
                  {item.year}
                </span>
                <h3 className="mt-2 font-montserrat text-2xl font-black tracking-tight text-text md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {item.description}
                </p>
                <div className="relative mt-6 aspect-[16/10] max-w-3xl overflow-hidden rounded-[var(--radius-card-lg)] shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              </li>
            </GsapReveal>
          ))}
        </ol>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeHistory };
