import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "border-white/20 bg-white/10 text-foreground shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-white/10",
  {
    variants: {
      tone: {
        light: "border-white/20 bg-white/10 text-text",
        dark: "border-white/10 bg-black/30 text-white",
        brand: "border-primary/20 bg-primary/10 text-text",
      },
      blur: {
        sm: "backdrop-blur-sm",
        default: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
      },
    },
    defaultVariants: {
      tone: "light",
      blur: "default",
    },
  },
);

type GlassCardProps = React.ComponentProps<"div"> &
  VariantProps<typeof glassCardVariants> & {
    header?: React.ReactNode;
    footer?: React.ReactNode;
  };

function GlassCard({
  className,
  tone,
  blur,
  header,
  footer,
  children,
  ...props
}: GlassCardProps) {
  return (
    <Card
      data-slot="glass-card"
      padding="default"
      className={cn(glassCardVariants({ tone, blur }), className)}
      {...props}
    >
      {header ? <CardHeader>{header}</CardHeader> : null}
      <CardContent>{children}</CardContent>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

export { GlassCard, glassCardVariants, type GlassCardProps };
