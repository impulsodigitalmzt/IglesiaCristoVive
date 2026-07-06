"use client";

import * as React from "react";
import { useRef } from "react";

import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type GsapParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

function GsapParallax({ children, className, speed = 12 }: GsapParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    registerGsapPlugins();
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const tween = gsap.to(element, {
      yPercent: speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("relative will-change-transform", className)}>
      {children}
    </div>
  );
}

export { GsapParallax, type GsapParallaxProps };
