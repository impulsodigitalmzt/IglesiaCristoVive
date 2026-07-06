import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Eyebrow, Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("flex flex-col gap-3", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "mx-auto items-center text-center",
    },
    width: {
      default: "max-w-3xl",
      wide: "max-w-4xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    align: "left",
    width: "default",
  },
});

type SectionTitleProps = React.ComponentProps<"div"> &
  VariantProps<typeof sectionTitleVariants> & {
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    titleAs?: "h1" | "h2" | "h3" | "h4";
    titleLevel?: "h1" | "h2" | "h3" | "h4";
  };

function SectionTitle({
  className,
  align,
  width,
  eyebrow,
  title,
  titleAs,
  titleLevel = "h2",
  ...props
}: SectionTitleProps) {
  return (
    <div
      data-slot="section-title"
      className={cn(sectionTitleVariants({ align, width }), className)}
      {...props}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading level={titleLevel} as={titleAs ?? titleLevel} align={align ?? "left"}>
        {title}
      </Heading>
    </div>
  );
}

export { SectionTitle, sectionTitleVariants, type SectionTitleProps };
