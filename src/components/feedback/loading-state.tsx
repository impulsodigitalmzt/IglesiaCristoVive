import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Loading } from "@/components/ui/loading";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const loadingStateVariants = cva(
  "flex w-full flex-col items-center justify-center gap-4 rounded-[var(--radius-card)]",
  {
    variants: {
      variant: {
        spinner: "",
        skeleton: "items-stretch gap-6 p-6",
        overlay: "min-h-48 bg-background/80 backdrop-blur-sm",
      },
      size: {
        sm: "py-8",
        default: "py-12",
        lg: "py-16",
      },
    },
    defaultVariants: {
      variant: "spinner",
      size: "default",
    },
  },
);

type LoadingStateProps = React.ComponentProps<"div"> &
  VariantProps<typeof loadingStateVariants> & {
    label?: string;
    skeletonLines?: number;
  };

function LoadingState({
  className,
  variant,
  size,
  label = "Cargando",
  skeletonLines = 3,
  ...props
}: LoadingStateProps) {
  return (
    <div
      data-slot="loading-state"
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(loadingStateVariants({ variant, size }), className)}
      {...props}
    >
      {variant === "skeleton" ? (
        <div className="flex w-full flex-col gap-3" aria-hidden>
          {Array.from({ length: skeletonLines }).map((_, index) => (
            <Skeleton key={index} className={cn("h-4 w-full", index === skeletonLines - 1 && "w-2/3")} />
          ))}
        </div>
      ) : (
        <Loading label={label} size={size === "lg" ? "lg" : "default"} />
      )}
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { LoadingState, loadingStateVariants, type LoadingStateProps };
