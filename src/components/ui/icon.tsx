import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      default: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
    tone: {
      default: "text-current",
      primary: "text-primary",
      secondary: "text-[var(--color-secondary)]",
      muted: "text-muted-foreground",
      inverse: "text-white",
    },
  },
  defaultVariants: {
    size: "default",
    tone: "default",
  },
});

type IconProps = VariantProps<typeof iconVariants> & {
  icon: LucideIcon;
  label?: string;
  decorative?: boolean;
  className?: string;
};

function IconWrapper({
  icon: IconComponent,
  size,
  tone,
  label,
  decorative = true,
  className,
}: IconProps) {
  return (
    <IconComponent
      data-slot="icon"
      className={cn(iconVariants({ size, tone }), className)}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
    />
  );
}

export { IconWrapper as Icon, iconVariants, type IconProps };
