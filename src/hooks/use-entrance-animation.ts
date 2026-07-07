"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

type EntranceAnimation = {
  /** Whether mount animations should run */
  shouldAnimate: boolean;
  /** True after the client has painted the hidden state */
  ready: boolean;
  initial: false | "hidden";
  animate: "visible" | "hidden";
};

/**
 * Defers entrance animations until after hydration.
 * Without this, Next.js SSR renders the final state and framer-motion skips mount animations.
 */
function useEntranceAnimation(): EntranceAnimation {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (reducedMotion) {
      setReady(true);
      return;
    }

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setReady(true));
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return {
      shouldAnimate: false,
      ready: true,
      initial: false,
      animate: "visible",
    };
  }

  return {
    shouldAnimate: true,
    ready,
    initial: "hidden",
    animate: ready ? "visible" : "hidden",
  };
}

export { useEntranceAnimation, type EntranceAnimation };
