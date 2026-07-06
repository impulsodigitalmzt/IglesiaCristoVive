import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const heroWrapperVariants = cva("relative isolate w-full overflow-hidden", {
  variants: {
    minHeight: {
      md: "min-h-[420px] md:min-h-[520px]",
      lg: "min-h-[560px] md:min-h-[680px]",
      screen: "min-h-svh",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
  },
  defaultVariants: {
    minHeight: "screen",
    align: "center",
  },
});

type HeroWrapperProps = React.ComponentProps<"div"> &
  VariantProps<typeof heroWrapperVariants> & {
    media?: React.ReactNode;
    overlay?: React.ReactNode;
  };

function HeroWrapper({
  className,
  minHeight,
  align,
  media,
  overlay,
  children,
  ...props
}: HeroWrapperProps) {
  return (
    <div
      data-slot="hero-wrapper"
      className={cn(
        heroWrapperVariants({ minHeight, align }),
        "flex flex-col justify-center",
        className,
      )}
      {...props}
    >
      {media ? (
        <div data-slot="hero-media" className="absolute inset-0 -z-20" aria-hidden>
          {media}
        </div>
      ) : null}
      {overlay ? (
        <div data-slot="hero-overlay" className="absolute inset-0 -z-10" aria-hidden>
          {overlay}
        </div>
      ) : null}
      <div data-slot="hero-content" className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}

export { HeroWrapper, heroWrapperVariants, type HeroWrapperProps };
