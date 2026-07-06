import * as React from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const imageWrapperVariants = cva(
  "relative overflow-hidden bg-background-alt",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        default: "rounded-[var(--radius-image)]",
        card: "rounded-[var(--radius-card)]",
        full: "rounded-full",
      },
      aspect: {
        auto: "",
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        wide: "aspect-[16/9]",
      },
    },
    defaultVariants: {
      rounded: "default",
      aspect: "auto",
    },
  },
);

type ImageWrapperProps = Omit<NextImageProps, "className"> &
  VariantProps<typeof imageWrapperVariants> & {
    wrapperClassName?: string;
    imageClassName?: string;
  };

function ImageWrapper({
  rounded,
  aspect,
  wrapperClassName,
  imageClassName,
  alt,
  fill,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: ImageWrapperProps) {
  const useFill = fill ?? aspect !== "auto";

  return (
    <div
      data-slot="image-wrapper"
      className={cn(imageWrapperVariants({ rounded, aspect }), wrapperClassName)}
    >
      <NextImage
        alt={alt}
        fill={useFill}
        sizes={sizes}
        className={cn(useFill ? "object-cover" : "h-auto w-full", imageClassName)}
        {...props}
      />
    </div>
  );
}

export { ImageWrapper, imageWrapperVariants, type ImageWrapperProps };
