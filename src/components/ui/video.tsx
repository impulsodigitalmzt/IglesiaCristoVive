"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const videoWrapperVariants = cva(
  "relative overflow-hidden bg-black",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        default: "rounded-[var(--radius-image)]",
        card: "rounded-[var(--radius-card)]",
      },
      aspect: {
        auto: "",
        video: "aspect-video",
        wide: "aspect-[16/9]",
        square: "aspect-square",
      },
    },
    defaultVariants: {
      rounded: "default",
      aspect: "video",
    },
  },
);

type VideoWrapperProps = React.ComponentProps<"video"> &
  VariantProps<typeof videoWrapperVariants> & {
    wrapperClassName?: string;
    title?: string;
  };

function VideoWrapper({
  className,
  wrapperClassName,
  rounded,
  aspect,
  title,
  preload = "metadata",
  controls = true,
  playsInline = true,
  ...props
}: VideoWrapperProps) {
  return (
    <div
      data-slot="video-wrapper"
      className={cn(videoWrapperVariants({ rounded, aspect }), wrapperClassName)}
    >
      <video
        data-slot="video"
        className={cn("size-full object-cover", className)}
        preload={preload}
        controls={controls}
        playsInline={playsInline}
        aria-label={title}
        {...props}
      />
    </div>
  );
}

type LoopVideoProps = VariantProps<typeof videoWrapperVariants> & {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  wrapperClassName?: string;
};

function LoopVideo({
  src,
  poster,
  title,
  className,
  wrapperClassName,
  rounded,
  aspect,
}: LoopVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    video.addEventListener("loadeddata", play);
    play();

    return () => video.removeEventListener("loadeddata", play);
  }, [src]);

  return (
    <div
      data-slot="loop-video"
      className={cn(videoWrapperVariants({ rounded, aspect }), wrapperClassName)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        aria-label={title}
        aria-hidden={!title}
        className={cn("size-full object-cover", className)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

function BackgroundVideo({ src, poster, className }: BackgroundVideoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
      className={cn("absolute inset-0 size-full object-cover", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export {
  BackgroundVideo,
  LoopVideo,
  VideoWrapper,
  videoWrapperVariants,
  type BackgroundVideoProps,
  type LoopVideoProps,
  type VideoWrapperProps,
};
