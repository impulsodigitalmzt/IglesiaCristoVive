import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "py-0",
      sm: "py-10 md:py-12",
      md: "py-16 md:py-20 lg:py-24",
      default: "section-padding",
      lg: "py-20 md:py-24 lg:py-28",
    },
    background: {
      default: "bg-background",
      alt: "bg-background-alt",
      warm: "bg-[var(--color-background-warm)]",
      dark: "bg-[var(--color-surface-dark)] text-white",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    spacing: "default",
    background: "default",
  },
});

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    ariaLabel?: string;
  };

const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { className, spacing, background, ariaLabel, ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      data-slot="section"
      aria-label={ariaLabel}
      className={cn(sectionVariants({ spacing, background }), className)}
      {...props}
    />
  );
});

Section.displayName = "Section";

export { Section, sectionVariants, type SectionProps };
