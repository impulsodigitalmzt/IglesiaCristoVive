"use client";

import * as React from "react";
import Lenis from "lenis";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  React.useEffect(() => {
    registerGsapPlugins();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return children;
}

export { SmoothScrollProvider };
