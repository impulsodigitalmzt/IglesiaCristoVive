import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-montserrat font-bold tracking-tight text-text", {
  variants: {
    level: {
      h1: "text-4xl leading-[var(--line-height-tight)] sm:text-5xl lg:text-6xl",
      h2: "text-3xl leading-[var(--line-height-tight)] sm:text-4xl lg:text-5xl",
      h3: "text-2xl leading-[var(--line-height-snug)] sm:text-3xl",
      h4: "text-xl leading-[var(--line-height-snug)] sm:text-2xl",
      h5: "text-lg leading-[var(--line-height-snug)]",
      h6: "text-base leading-[var(--line-height-snug)]",
    },
    tone: {
      default: "text-text",
      primary: "text-primary",
      muted: "text-muted-foreground",
      inverse: "text-white",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: "h2",
    tone: "default",
    align: "left",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = Omit<React.ComponentProps<"h1">, "color"> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingLevel;
  };

function Heading({
  className,
  level = "h2",
  tone,
  align,
  as,
  ...props
}: HeadingProps) {
  const tag: HeadingLevel = as ?? level ?? "h2";

  if (tag === "h1") return <h1 data-slot="heading" className={cn(headingVariants({ level, tone, align }), className)} {...props} />;
  if (tag === "h2") return <h2 data-slot="heading" className={cn(headingVariants({ level, tone, align }), className)} {...props} />;
  if (tag === "h3") return <h3 data-slot="heading" className={cn(headingVariants({ level, tone, align }), className)} {...props} />;
  if (tag === "h4") return <h4 data-slot="heading" className={cn(headingVariants({ level, tone, align }), className)} {...props} />;
  if (tag === "h5") return <h5 data-slot="heading" className={cn(headingVariants({ level, tone, align }), className)} {...props} />;
  return <h6 data-slot="heading" className={cn(headingVariants({ level, tone, align }), className)} {...props} />;
}

const textVariants = cva("font-inter text-text", {
  variants: {
    variant: {
      body: "text-base leading-[var(--line-height-relaxed)]",
      lead: "text-lg leading-[var(--line-height-relaxed)] text-text/90 sm:text-xl",
      small: "text-sm leading-[var(--line-height-normal)]",
      caption: "text-xs leading-[var(--line-height-normal)] text-muted-foreground",
      muted: "text-sm leading-[var(--line-height-normal)] text-muted-foreground",
      label: "text-sm font-medium leading-none",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "normal",
    align: "left",
  },
});

type TextProps = React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

function Text({
  className,
  variant,
  weight,
  align,
  as: Component = "p",
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      className={cn(textVariants({ variant, weight, align }), className)}
      {...props}
    />
  );
}

function Display({
  className,
  ...props
}: Omit<HeadingProps, "level">) {
  return <Heading level="h1" className={className} {...props} />;
}

function Eyebrow({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="eyebrow"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background-alt px-4 py-1.5 text-xs font-semibold tracking-wide text-text uppercase shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export {
  Display,
  Eyebrow,
  Heading,
  Text,
  headingVariants,
  textVariants,
  type HeadingProps,
  type TextProps,
};
