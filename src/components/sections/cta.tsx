import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { cn } from "@/lib/utils";

const ctaVariants = cva("relative overflow-hidden rounded-[var(--radius-card-lg)] border", {
  variants: {
    variant: {
      default: "border-border bg-background-alt",
      brand: "border-primary/20 bg-primary/5",
      dark: "border-transparent bg-text text-white",
      glass: "border-white/20 bg-white/10 backdrop-blur-md",
    },
    padding: {
      default: "p-8 md:p-12",
      lg: "p-10 md:p-16",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

type CTAProps = React.ComponentProps<"section"> &
  VariantProps<typeof ctaVariants> & {
    background?: React.ComponentProps<typeof Section>["background"];
    spacing?: React.ComponentProps<typeof Section>["spacing"];
    media?: React.ReactNode;
    actions?: React.ReactNode;
    content?: React.ReactNode;
    heading?: React.ReactNode;
    description?: React.ReactNode;
  };

function CTA({
  className,
  variant,
  padding,
  background = "transparent",
  spacing = "default",
  media,
  actions,
  content,
  heading,
  description,
  children,
  ...props
}: CTAProps) {
  return (
    <Section background={background} spacing={spacing} aria-label={props["aria-label"]} {...props}>
      <MaxWidthContainer>
        <div data-slot="cta" className={cn(ctaVariants({ variant, padding }), className)}>
          {media ? (
            <div data-slot="cta-media" className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
              {media}
            </div>
          ) : null}
          {content ?? (
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-2xl flex-col gap-3">
                {heading ? (
                  <div data-slot="cta-heading" className="font-montserrat text-2xl font-black tracking-tight md:text-3xl">
                    {heading}
                  </div>
                ) : null}
                {description ? (
                  <div data-slot="cta-description" className="text-base leading-relaxed text-muted-foreground">
                    {description}
                  </div>
                ) : null}
                {children}
              </div>
              {actions ? (
                <div data-slot="cta-actions" className="flex flex-wrap items-center gap-3">
                  {actions}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { CTA, ctaVariants, type CTAProps };
