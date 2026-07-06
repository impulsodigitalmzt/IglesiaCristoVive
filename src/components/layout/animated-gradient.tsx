"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const animatedGradientVariants = cva(
  "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
  {
    variants: {
      tone: {
        brand: "from-primary/20 via-[var(--color-secondary)]/10 to-transparent",
        warm: "from-primary/30 via-primary/10 to-background-alt",
        dark: "from-black/60 via-black/30 to-black/10",
      },
      direction: {
        diagonal: "bg-gradient-to-br",
        vertical: "bg-gradient-to-b",
        radial: "bg-[radial-gradient(circle_at_top,rgba(234,75,33,0.25),transparent_55%)]",
      },
    },
    defaultVariants: {
      tone: "brand",
      direction: "diagonal",
    },
  },
);

type AnimatedGradientProps = React.ComponentProps<"div"> &
  VariantProps<typeof animatedGradientVariants>;

function AnimatedGradient({
  className,
  tone,
  direction,
  ...props
}: AnimatedGradientProps) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      data-slot="animated-gradient"
      aria-hidden
      className={cn(animatedGradientVariants({ tone, direction }), className)}
      initial={reducedMotion ? false : { opacity: 0.6 }}
      animate={reducedMotion ? undefined : { opacity: [0.6, 0.85, 0.6] }}
      transition={
        reducedMotion
          ? undefined
          : { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
      {...(props as React.ComponentProps<typeof m.div>)}
    />
  );
}

export { AnimatedGradient, animatedGradientVariants, type AnimatedGradientProps };
