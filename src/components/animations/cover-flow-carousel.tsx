"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type CoverFlowCarouselProps<T extends { id: string }> = {
  items: T[];
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  getLabel?: (item: T) => string;
  autoplay?: boolean;
  autoplayDelay?: number;
  theme?: "light" | "dark";
  className?: string;
  ariaLabel?: string;
};

const springTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};

function getWrappedOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;

  return offset;
}

function getCardMotion(offset: number, reducedMotion: boolean, spacing: number) {
  const absOffset = Math.abs(offset);

  if (absOffset > 2) {
    return {
      opacity: 0,
      scale: 0.75,
      x: offset * 180,
      rotateY: 0,
      z: -200,
      filter: "blur(6px)",
      zIndex: 0,
      pointerEvents: "none" as const,
    };
  }

  if (reducedMotion) {
    return {
      opacity: offset === 0 ? 1 : 0.35,
      scale: offset === 0 ? 1 : 0.92,
      x: offset * 40,
      rotateY: 0,
      z: 0,
      filter: "blur(0px)",
      zIndex: 10 - absOffset,
      pointerEvents: (absOffset <= 1 ? "auto" : "none") as "auto" | "none",
    };
  }

  return {
    opacity: offset === 0 ? 1 : absOffset === 1 ? 0.72 : 0.4,
    scale: offset === 0 ? 1 : absOffset === 1 ? 0.82 : 0.68,
    x: offset * spacing,
    rotateY: offset * -38,
    z: -absOffset * 110,
    filter: offset === 0 ? "blur(0px)" : `blur(${absOffset * 1.5}px)`,
    zIndex: 10 - absOffset,
    pointerEvents: (absOffset <= 1 ? "auto" : "none") as "auto" | "none",
  };
}

function useCoverFlowSpacing() {
  const [spacing, setSpacing] = React.useState(280);

  React.useEffect(() => {
    const update = () => setSpacing(window.innerWidth < 640 ? 200 : 280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return spacing;
}

function CoverFlowCarousel<T extends { id: string }>({
  items,
  renderItem,
  getLabel,
  autoplay = true,
  autoplayDelay = 5500,
  theme = "light",
  className,
  ariaLabel = "Carrusel",
}: CoverFlowCarouselProps<T>) {
  const isDark = theme === "dark";
  const reducedMotion = useReducedMotion();
  const spacing = useCoverFlowSpacing();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const dragStartX = React.useRef(0);
  const isDragging = React.useRef(false);

  const total = items.length;

  const goTo = React.useCallback(
    (index: number) => {
      if (total === 0) return;
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = React.useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = React.useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  React.useEffect(() => {
    if (!autoplay || reducedMotion || isPaused || total <= 1) return;

    const timer = window.setInterval(goNext, autoplayDelay);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplayDelay, goNext, isPaused, reducedMotion, total]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  if (total === 0) return null;

  return (
    <div
      className={cn("relative select-none", className)}
      role="region"
      aria-roledescription="carrusel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className="relative mx-auto h-[min(62vw,420px)] max-h-[480px] min-h-[340px] w-full max-w-5xl touch-pan-y sm:h-[420px] md:h-[440px]"
        style={{ perspective: reducedMotion ? undefined : "1400px" }}
        onPointerDown={(event) => {
          dragStartX.current = event.clientX;
          isDragging.current = false;
        }}
        onPointerMove={(event) => {
          if (Math.abs(event.clientX - dragStartX.current) > 8) {
            isDragging.current = true;
          }
        }}
        onPointerUp={(event) => {
          const delta = event.clientX - dragStartX.current;
          if (Math.abs(delta) > 60) {
            if (delta > 0) goPrev();
            else goNext();
          }
          window.setTimeout(() => {
            isDragging.current = false;
          }, 0);
        }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: reducedMotion ? undefined : "preserve-3d" }}
        >
          {items.map((item, index) => {
            const offset = getWrappedOffset(index, activeIndex, total);
            const isActive = offset === 0;
            const motion = getCardMotion(offset, Boolean(reducedMotion), spacing);

            return (
              <m.div
                key={item.id}
                className="absolute top-1/2 left-1/2 w-[min(88vw,340px)] sm:w-[360px] md:w-[400px]"
                style={{
                  transformStyle: reducedMotion ? undefined : "preserve-3d",
                  zIndex: motion.zIndex,
                  pointerEvents: motion.pointerEvents,
                }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${motion.x}px)`,
                  y: "-50%",
                  translateZ: motion.z,
                  rotateY: motion.rotateY,
                  scale: motion.scale,
                  opacity: motion.opacity,
                  filter: motion.filter,
                }}
                transition={reducedMotion ? { duration: 0.2 } : springTransition}
                onClick={() => {
                  if (isDragging.current || isActive) return;
                  goTo(index);
                }}
                aria-hidden={!isActive}
              >
                <div
                  className={cn(
                    "relative transition-shadow duration-500",
                    isActive &&
                      "rounded-[var(--radius-card)] shadow-[0_0_0_1px_rgba(234,75,33,0.25),0_12px_48px_rgba(234,75,33,0.12),0_24px_64px_rgba(20,20,20,0.08)]",
                    !isActive && "rounded-[var(--radius-card)] shadow-lg",
                  )}
                >
                  {renderItem(item, isActive)}

                  {isActive && !reducedMotion ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-[90%] -translate-x-1/2 scale-y-[-1] opacity-20 blur-md"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(20,20,20,0.08), transparent)",
                        maskImage: "linear-gradient(to bottom, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                      }}
                    />
                  ) : null}
                </div>
              </m.div>
            );
          })}
        </div>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute top-1/2 left-0 z-20 hidden -translate-y-1/2 rounded-full border border-border/60 bg-background/90 p-2.5 shadow-md backdrop-blur-sm transition-colors hover:bg-background md:inline-flex"
              aria-label="Testimonio anterior"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 rounded-full border border-border/60 bg-background/90 p-2.5 shadow-md backdrop-blur-sm transition-colors hover:bg-background md:inline-flex"
              aria-label="Siguiente testimonio"
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Seleccionar testimonio"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const label = getLabel?.(item) ?? `Elemento ${index + 1}`;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={label}
                onClick={() => goTo(index)}
                className={cn(
                  "rounded-full px-3 py-1.5 font-inter text-xs font-medium transition-all duration-300 sm:text-sm",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : isDark
                      ? "border border-white/20 bg-white/10 text-white/70 hover:border-primary/40 hover:text-white"
                      : "border border-border/60 bg-background text-muted-foreground hover:border-primary/30 hover:text-text",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export { CoverFlowCarousel, type CoverFlowCarouselProps };
