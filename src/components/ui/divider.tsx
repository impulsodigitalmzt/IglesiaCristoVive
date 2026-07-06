"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  label?: string;
  decorative?: boolean;
};

function Divider({
  className,
  orientation = "horizontal",
  label,
  decorative = true,
}: DividerProps) {
  if (label && orientation === "horizontal") {
    return (
      <div
        data-slot="divider"
        role={decorative ? "none" : "separator"}
        aria-orientation="horizontal"
        className={cn("relative flex items-center gap-4", className)}
      >
        <Separator className="flex-1" decorative={decorative} />
        <span className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </span>
        <Separator className="flex-1" decorative={decorative} />
      </div>
    );
  }

  return (
    <Separator
      data-slot="divider"
      orientation={orientation}
      decorative={decorative}
      className={className}
    />
  );
}

export { Divider, type DividerProps };
