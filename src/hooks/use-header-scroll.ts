"use client";

import * as React from "react";

type UseHeaderScrollOptions = {
  threshold?: number;
};

export function useHeaderScroll({ threshold = 20 }: UseHeaderScrollOptions = {}) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
