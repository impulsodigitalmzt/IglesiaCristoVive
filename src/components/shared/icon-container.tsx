import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconContainerVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-input)] border transition-colors duration-[var(--transition-normal)]",
  {
    variants: {
      variant: {
        default: "border-border bg-background-alt text-text",
        primary: "border-primary/20 bg-primary/10 text-primary",
        secondary:
          "border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 text-[var(--color-text)]",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        inverse: "border-white/20 bg-white/10 text-white",
      },
      size: {
        sm: "size-9 [&_svg]:size-4",
        default: "size-11 [&_svg]:size-5",
        lg: "size-14 [&_svg]:size-6",
        xl: "size-16 [&_svg]:size-7",
      },
      shape: {
        rounded: "rounded-[var(--radius-input)]",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded",
    },
  },
);

type IconContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof iconContainerVariants> & {
    icon?: LucideIcon;
    label?: string;
  };

function IconContainer({
  className,
  variant,
  size,
  shape,
  icon: IconComponent,
  label,
  children,
  ...props
}: IconContainerProps) {
  return (
    <div
      data-slot="icon-container"
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(iconContainerVariants({ variant, size, shape }), className)}
      {...props}
    >
      {IconComponent ? <IconComponent aria-hidden /> : children}
    </div>
  );
}

export { IconContainer, iconContainerVariants, type IconContainerProps };
