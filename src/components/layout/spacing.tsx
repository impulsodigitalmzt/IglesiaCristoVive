import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spacingVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
      section: "",
    },
    axis: {
      vertical: "w-full",
      horizontal: "inline-block",
    },
  },
  compoundVariants: [
    { size: "xs", axis: "vertical", className: "h-2" },
    { size: "sm", axis: "vertical", className: "h-4" },
    { size: "md", axis: "vertical", className: "h-6" },
    { size: "lg", axis: "vertical", className: "h-8" },
    { size: "xl", axis: "vertical", className: "h-12" },
    { size: "2xl", axis: "vertical", className: "h-16" },
    { size: "section", axis: "vertical", className: "h-[var(--spacing-section)]" },
    { size: "xs", axis: "horizontal", className: "w-2" },
    { size: "sm", axis: "horizontal", className: "w-4" },
    { size: "md", axis: "horizontal", className: "w-6" },
    { size: "lg", axis: "horizontal", className: "w-8" },
    { size: "xl", axis: "horizontal", className: "w-12" },
    { size: "2xl", axis: "horizontal", className: "w-16" },
    { size: "section", axis: "horizontal", className: "w-[var(--spacing-section)]" },
  ],
  defaultVariants: {
    size: "md",
    axis: "vertical",
  },
});

type SpacingProps = React.ComponentProps<"div"> & VariantProps<typeof spacingVariants>;

function Spacing({ className, size, axis, ...props }: SpacingProps) {
  return (
    <div
      data-slot="spacing"
      aria-hidden
      className={cn(spacingVariants({ size, axis }), className)}
      {...props}
    />
  );
}

export { Spacing, spacingVariants, type SpacingProps };
