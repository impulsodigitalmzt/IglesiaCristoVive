import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { focusRingClassName } from "@/lib/component-styles";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 font-inter font-semibold whitespace-nowrap",
    "rounded-[var(--radius-button)] transition-all duration-[var(--transition-normal)]",
    focusRingClassName,
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-[var(--color-primary-dark)] hover:shadow-hover",
        secondary:
          "bg-[var(--color-secondary)] text-[var(--color-text)] shadow-sm hover:bg-[var(--color-secondary-dark)]",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        ghost:
          "text-text hover:bg-background-alt hover:text-text",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg:not([class*='size-'])]:size-4",
        default: "h-11 px-6 text-sm [&_svg:not([class*='size-'])]:size-4",
        lg: "h-12 px-8 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-11 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  };

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...(asChild ? {} : { disabled: disabled || isLoading })}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants, type ButtonProps };
