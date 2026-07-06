"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast } from "sonner";

import { cn } from "@/lib/utils";

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

function Toaster({ className, ...props }: ToasterProps) {
  return (
    <SonnerToaster
      data-slot="toaster"
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-[var(--radius-card)] border border-border bg-background text-foreground shadow-lg",
          title: "font-semibold text-text",
          description: "text-sm text-muted-foreground",
          actionButton:
            "rounded-[var(--radius-button)] bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground",
          cancelButton:
            "rounded-[var(--radius-button)] border border-border bg-background px-3 py-1.5 text-sm font-medium",
          success: "border-[var(--color-success)]/20 bg-background",
          error: "border-destructive/20 bg-background",
          warning: "border-[var(--color-warning)]/20 bg-background",
          info: "border-[var(--color-info)]/20 bg-background",
        },
      }}
      {...props}
    />
  );
}

export { Toaster, toast };
