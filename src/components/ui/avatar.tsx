import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-alt font-inter font-semibold text-text uppercase",
  {
    variants: {
      size: {
        xs: "size-7 text-[10px]",
        sm: "size-9 text-xs",
        default: "size-11 text-sm",
        lg: "size-14 text-base",
        xl: "size-20 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type AvatarProps = React.ComponentProps<"div"> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    alt?: string;
    fallback?: string;
    name?: string;
  };

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

function Avatar({
  className,
  size,
  src,
  alt = "",
  fallback,
  name,
  ...props
}: AvatarProps) {
  const initials = fallback ?? (name ? getInitials(name) : "?");

  return (
    <div
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      role="img"
      aria-label={alt || name || initials}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt || name || "Avatar"} fill className="object-cover" />
      ) : (
        <span aria-hidden>{initials}</span>
      )}
    </div>
  );
}

export { Avatar, avatarVariants, type AvatarProps };
