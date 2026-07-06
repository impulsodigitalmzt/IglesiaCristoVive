import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundPatternVariants = cva("pointer-events-none absolute inset-0 -z-10", {
  variants: {
    variant: {
      dots: "bg-[radial-gradient(circle_at_1px_1px,rgba(42,41,41,0.08)_1px,transparent_0)] [background-size:24px_24px]",
      grid: "bg-[linear-gradient(rgba(42,41,41,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(42,41,41,0.04)_1px,transparent_1px)] [background-size:32px_32px]",
      cross: "opacity-40 [background-image:linear-gradient(45deg,rgba(234,75,33,0.06)_25%,transparent_25%,transparent_75%,rgba(234,75,33,0.06)_75%),linear-gradient(45deg,rgba(234,75,33,0.06)_25%,transparent_25%,transparent_75%,rgba(234,75,33,0.06)_75%)] [background-size:20px_20px] [background-position:0_0,10px_10px]",
    },
    opacity: {
      subtle: "opacity-40",
      default: "opacity-60",
      strong: "opacity-80",
    },
  },
  defaultVariants: {
    variant: "dots",
    opacity: "default",
  },
});

type BackgroundPatternProps = React.ComponentProps<"div"> &
  VariantProps<typeof backgroundPatternVariants>;

function BackgroundPattern({
  className,
  variant,
  opacity,
  ...props
}: BackgroundPatternProps) {
  return (
    <div
      data-slot="background-pattern"
      aria-hidden
      className={cn(backgroundPatternVariants({ variant, opacity }), className)}
      {...props}
    />
  );
}

export { BackgroundPattern, backgroundPatternVariants, type BackgroundPatternProps };
