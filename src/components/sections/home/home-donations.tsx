import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { Button } from "@/components/ui/button";
import { homeDonations } from "@/data/home";

function HomeDonations() {
  return (
    <Section background="default" spacing="default" ariaLabel="Donativos">
      <BackgroundPattern variant="cross" opacity="subtle" />
      <MaxWidthContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {homeDonations.eyebrow}
          </p>
          <h2 className="mt-3 font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
            {homeDonations.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {homeDonations.description}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {homeDonations.impact.map((item) => (
            <div
              key={item.label}
              className="rounded-[var(--radius-card)] border border-border/60 bg-background-alt px-5 py-6 text-center"
            >
              <AnimatedCounter
                value={Number.parseInt(item.value.replace(/\D/g, ""), 10) || 0}
                suffix={item.value.includes("+") ? "+" : item.value.includes("%") ? "%" : ""}
                className="text-3xl text-primary md:text-4xl"
              />
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="primary" size="lg">
            <Link href={homeDonations.buttonHref}>
              {homeDonations.buttonLabel}
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeDonations };
