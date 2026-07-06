import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const sectionSubtitleVariants = cva("max-w-2xl", {
  variants: {
    align: {
      left: "text-left",
      center: "mx-auto text-center",
    },
    tone: {
      default: "default",
      muted: "muted",
      lead: "lead",
    },
  },
  defaultVariants: {
    align: "left",
    tone: "lead",
  },
});

type SectionSubtitleProps = React.ComponentProps<"div"> &
  VariantProps<typeof sectionSubtitleVariants> & {
    children: React.ReactNode;
  };

function SectionSubtitle({
  className,
  align,
  tone,
  children,
  ...props
}: SectionSubtitleProps) {
  const textVariant = tone === "muted" ? "muted" : tone === "default" ? "body" : "lead";

  return (
    <div data-slot="section-subtitle" className={cn(sectionSubtitleVariants({ align, tone }), className)} {...props}>
      <Text variant={textVariant} align={align ?? "left"}>
        {children}
      </Text>
    </div>
  );
}

export { SectionSubtitle, sectionSubtitleVariants, type SectionSubtitleProps };
