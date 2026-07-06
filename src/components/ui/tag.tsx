import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { focusRingClassName } from "@/lib/component-styles";

const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-background-alt text-text",
        primary: "border-primary/20 bg-primary/10 text-primary",
        secondary:
          "border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 text-[var(--color-text)]",
        outline: "border-border bg-background text-muted-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        default: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type TagProps = React.ComponentProps<"span"> &
  VariantProps<typeof tagVariants> & {
    onRemove?: () => void;
    removeLabel?: string;
  };

function Tag({
  className,
  variant,
  size,
  children,
  onRemove,
  removeLabel = "Eliminar etiqueta",
  ...props
}: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(tagVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          aria-label={removeLabel}
          className={cn(
            "inline-flex size-4 items-center justify-center rounded-full text-current/70 hover:bg-black/5 hover:text-current",
            focusRingClassName,
          )}
        >
          <XIcon className="size-3" aria-hidden />
        </button>
      ) : null}
    </span>
  );
}

export { Tag, tagVariants, type TagProps };
