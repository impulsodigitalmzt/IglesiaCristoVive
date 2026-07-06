"use client";

import * as React from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

import { fadeInVariants, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
  transitionKey?: string | number;
};

function PageTransition({
  children,
  className,
  transitionKey = "page",
}: PageTransitionProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={transitionKey}
        data-slot="page-transition"
        className={cn(className)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInVariants}
        transition={transitions.normal}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}

export { PageTransition, type PageTransitionProps };
