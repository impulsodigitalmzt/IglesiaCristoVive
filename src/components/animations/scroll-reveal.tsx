"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";

import { fadeUpVariants, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      data-slot="scroll-reveal"
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, once, amount }}
      variants={fadeUpVariants}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

export { ScrollReveal, type ScrollRevealProps };
