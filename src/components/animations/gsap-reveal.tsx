"use client";

import * as React from "react";
import { useRef } from "react";

import { gsap, gsapEase, registerGsapPlugins } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type GsapRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  blur?: boolean;
};

function GsapReveal({
  children,
  className,
  delay = 0,
  y = 28,
  scale = 1,
  blur = false,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    registerGsapPlugins();
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y,
          scale,
          filter: blur ? "blur(6px)" : "blur(0px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.75,
          delay,
          ease: gsapEase.cinematic,
          scrollTrigger: {
            trigger: element,
            start: "top 96%",
            once: true,
          },
        },
      );

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        tween.progress(1);
      }
    }, element);

    return () => ctx.revert();
  }, [blur, delay, scale, y]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

export { GsapReveal, type GsapRevealProps };
