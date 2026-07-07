"use client";

import * as React from "react";
import Image from "next/image";

import { Z_INDEX } from "@/lib/constants";
import {
  HERO_VIDEO_BOOT_TIMEOUT_MS,
  pickHeroVideoSrc,
  shouldSkipHeroVideo,
} from "@/lib/hero-video";

type HomeVideoGateProps = {
  children: React.ReactNode;
  videoSrc: string;
  videoSrcLite?: string;
  poster: string;
};

function HomeVideoGate({
  children,
  videoSrc,
  videoSrcLite,
  poster,
}: HomeVideoGateProps) {
  const [bootReady, setBootReady] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return shouldSkipHeroVideo();
  });

  React.useEffect(() => {
    if (shouldSkipHeroVideo()) {
      setBootReady(true);
      return;
    }

    const resolvedSrc = pickHeroVideoSrc(videoSrc, videoSrcLite);
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = resolvedSrc;

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setBootReady(true);
    };

    const onCanPlay = () => {
      void video.play().then(finish).catch(finish);
    };

    video.addEventListener("canplay", onCanPlay, { once: true });
    video.addEventListener("playing", finish, { once: true });

    const timeout = window.setTimeout(finish, HERO_VIDEO_BOOT_TIMEOUT_MS);
    video.load();

    return () => {
      finished = true;
      window.clearTimeout(timeout);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("playing", finish);
      video.removeAttribute("src");
      video.load();
    };
  }, [videoSrc, videoSrcLite]);

  React.useEffect(() => {
    if (!bootReady) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [bootReady]);

  if (!bootReady) {
    return (
      <div
        className="fixed inset-0 bg-neutral-950"
        style={{ zIndex: Z_INDEX.max }}
        aria-busy="true"
        aria-label="Cargando video de bienvenida"
      >
        <Image
          src={poster}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return <>{children}</>;
}

export { HomeVideoGate, type HomeVideoGateProps };
