"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  type CardProps,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";

type HoverCardProps = CardProps & {
  lift?: boolean;
};

function HoverCard({
  className,
  lift = true,
  children,
  ...props
}: HoverCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      whileHover={reducedMotion || !lift ? undefined : { y: -4 }}
      transition={transitions.normal}
    >
      <Card
        data-slot="hover-card"
        variant="elevated"
        className={cn(
          "transition-shadow duration-[var(--transition-normal)] hover:shadow-hover",
          className,
        )}
        {...props}
      >
        {children}
      </Card>
    </m.div>
  );
}

export {
  HoverCard,
  CardContent as HoverCardContent,
  CardDescription as HoverCardDescription,
  CardFooter as HoverCardFooter,
  CardHeader as HoverCardHeader,
  CardTitle as HoverCardTitle,
  type HoverCardProps,
};
