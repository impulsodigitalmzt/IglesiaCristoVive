"use client";

import * as React from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";

type AnimatedLinkProps = React.ComponentProps<typeof Link> & {
  underline?: "hover" | "always" | "none";
  external?: boolean;
};

function AnimatedLink({
  className,
  children,
  underline = "hover",
  external = false,
  ...props
}: AnimatedLinkProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Link
      data-slot="animated-link"
      className={cn(
        "group relative inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-[var(--color-primary-dark)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      target={external ? "_blank" : props.target}
      rel={external ? "noopener noreferrer" : props.rel}
      {...props}
    >
      {children}
      {underline !== "none" ? (
        reducedMotion ? (
          <span
            className={cn(
              "absolute -bottom-0.5 left-0 h-0.5 bg-primary",
              underline === "always" ? "w-full" : "w-0 group-hover:w-full",
            )}
          />
        ) : (
          <m.span
            aria-hidden
            className="absolute -bottom-0.5 left-0 h-0.5 bg-primary"
            initial={{ width: underline === "always" ? "100%" : "0%" }}
            whileHover={{ width: "100%" }}
            transition={transitions.fast}
          />
        )
      ) : null}
    </Link>
  );
}

export { AnimatedLink, type AnimatedLinkProps };
