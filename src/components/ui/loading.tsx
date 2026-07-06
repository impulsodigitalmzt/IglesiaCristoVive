import * as React from "react";
import { Loader2Icon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const loadingVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      sm: "size-4",
      default: "size-6",
      lg: "size-8",
      xl: "size-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type LoadingProps = React.ComponentProps<"div"> &
  VariantProps<typeof loadingVariants> & {
    label?: string;
    fullscreen?: boolean;
  };

function Loading({
  className,
  size,
  label = "Cargando",
  fullscreen = false,
  ...props
}: LoadingProps) {
  return (
    <div
      data-slot="loading"
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "inline-flex flex-col items-center justify-center gap-3",
        fullscreen && "fixed inset-0 z-[var(--z-overlay)] bg-background/80 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <Loader2Icon className={cn(loadingVariants({ size }))} aria-hidden />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { Loading, loadingVariants, type LoadingProps };
