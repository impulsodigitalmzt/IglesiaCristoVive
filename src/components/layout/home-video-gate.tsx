"use client";

import * as React from "react";

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
};

function HomeVideoGate({ children, videoSrc, videoSrcLite }: HomeVideoGateProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [bootReady, setBootReady] = React.useState(false);

  React.useEffect(() => {
    if (shouldSkipHeroVideo()) {
      setBootReady(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const resolvedSrc = pickHeroVideoSrc(videoSrc, videoSrcLite);
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
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="size-full object-cover"
        />
      </div>
    );
  }

  return <>{children}</>;
}

export { HomeVideoGate, type HomeVideoGateProps };
