import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const verseCardVariants = cva("border-l-4", {
  variants: {
    accent: {
      primary: "border-l-primary",
      secondary: "border-l-[var(--color-secondary)]",
      muted: "border-l-border",
    },
  },
  defaultVariants: {
    accent: "primary",
  },
});

type VerseCardProps = React.ComponentProps<"div"> &
  VariantProps<typeof verseCardVariants> & {
    verse: React.ReactNode;
    reference: React.ReactNode;
    footer?: React.ReactNode;
  };

function VerseCard({
  className,
  accent,
  verse,
  reference,
  footer,
  ...props
}: VerseCardProps) {
  return (
    <Card
      data-slot="verse-card"
      variant="flat"
      className={cn("bg-background-alt", verseCardVariants({ accent }), className)}
      {...props}
    >
      <CardHeader className="gap-4">
        <blockquote className="font-inter text-lg leading-relaxed text-text md:text-xl">
          {verse}
        </blockquote>
        <Text as="p" variant="label" weight="semibold" className="text-primary">
          {reference}
        </Text>
      </CardHeader>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

export { VerseCard, verseCardVariants, type VerseCardProps };
