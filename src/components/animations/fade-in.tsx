"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";

import { fadeInVariants, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      data-slot="fade-in"
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ ...transitions.normal, delay }}
    >
      {children}
    </m.div>
  );
}

export { FadeIn, type FadeInProps };
