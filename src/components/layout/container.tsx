import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      default: "max-w-[var(--container-content)] px-6 sm:px-8 md:px-12 lg:px-20",
      narrow: "max-w-3xl px-6 md:px-8",
      wide: "max-w-[var(--container-max)] px-6 sm:px-8 md:px-12 lg:px-20",
      full: "max-w-none px-6 sm:px-8 md:px-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ContainerProps = React.ComponentProps<"div"> & VariantProps<typeof containerVariants>;

function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  );
}

export { Container, containerVariants, type ContainerProps };
