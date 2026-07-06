"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  className?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  ariaLabel?: string;
};

function AnimatedCounter({
  value,
  className,
  duration = 1.2,
  prefix = "",
  suffix = "",
  decimals = 0,
  ariaLabel,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(reducedMotion ? value : 0);

  React.useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return () => controls.stop();
  }, [duration, isInView, reducedMotion, value]);

  const formatted = `${prefix}${displayValue.toFixed(decimals)}${suffix}`;

  return (
    <span
      ref={ref}
      data-slot="animated-counter"
      className={cn("font-montserrat font-black tracking-tight tabular-nums", className)}
      aria-label={ariaLabel ?? String(value)}
    >
      <span aria-hidden>{formatted}</span>
    </span>
  );
}

export { AnimatedCounter, type AnimatedCounterProps };
