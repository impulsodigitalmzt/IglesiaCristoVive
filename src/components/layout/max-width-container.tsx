import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Container } from "./container";

const maxWidthVariants = cva("", {
  variants: {
    width: {
      content: "",
      narrow: "",
      wide: "",
      full: "",
    },
  },
  defaultVariants: {
    width: "content",
  },
});

type MaxWidthContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof maxWidthVariants>;

const widthToSize = {
  content: "default",
  narrow: "narrow",
  wide: "wide",
  full: "full",
} as const;

function MaxWidthContainer({
  className,
  width = "content",
  ...props
}: MaxWidthContainerProps) {
  return (
    <Container
      data-slot="max-width-container"
      size={widthToSize[width ?? "content"]}
      className={cn(maxWidthVariants({ width }), className)}
      {...props}
    />
  );
}

export { MaxWidthContainer, maxWidthVariants, type MaxWidthContainerProps };
