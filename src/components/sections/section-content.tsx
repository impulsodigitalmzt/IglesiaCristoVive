import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionContentVariants = cva("w-full", {
  variants: {
    layout: {
      stack: "flex flex-col",
      grid: "grid grid-cols-1",
      split: "grid grid-cols-1 lg:grid-cols-2",
    },
    gap: {
      sm: "gap-4",
      default: "gap-6 md:gap-8",
      lg: "gap-8 md:gap-12",
      xl: "gap-10 md:gap-16",
    },
    align: {
      start: "items-start",
      center: "items-center",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    layout: "stack",
    gap: "default",
    align: "stretch",
  },
});

type SectionContentProps = React.ComponentProps<"div"> &
  VariantProps<typeof sectionContentVariants>;

function SectionContent({
  className,
  layout,
  gap,
  align,
  ...props
}: SectionContentProps) {
  return (
    <div
      data-slot="section-content"
      className={cn(sectionContentVariants({ layout, gap, align }), className)}
      {...props}
    />
  );
}

export { SectionContent, sectionContentVariants, type SectionContentProps };
