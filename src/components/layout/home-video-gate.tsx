"use client";

import * as React from "react";
import { AnimatePresence, m } from "framer-motion";

import { HeroIntroSplash } from "@/components/layout/hero-intro-splash";
import { Z_INDEX } from "@/lib/constants";
import {
  HERO_VIDEO_BOOT_TIMEOUT_MS,
  pickHeroVideoSrc,
  shouldSkipHeroVideo,
} from "@/lib/hero-video";
import { introSplashExit } from "@/lib/motion";

type HomeIntroContent = {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  titleLine4: string;
};

type HomeVideoGateProps = {
  children: React.ReactNode;
  videoSrc: string;
  videoSrcLite?: string;
  intro: HomeIntroContent;
};

const HomeBootContext = React.createContext(false);

function useHomeBootComplete() {
  return React.useContext(HomeBootContext);
}

function HomeVideoGate({ children, videoSrc, videoSrcLite, intro }: HomeVideoGateProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [bootReady, setBootReady] = React.useState(false);
  const [splashVisible, setSplashVisible] = React.useState(true);

  React.useEffect(() => {
    if (shouldSkipHeroVideo()) {
      setBootReady(true);
      setSplashVisible(false);
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
      setSplashVisible(false);
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
    if (splashVisible) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [splashVisible]);

  return (
    <HomeBootContext.Provider value={bootReady}>
      {bootReady ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
        >
          {children}
        </m.div>
      ) : null}

      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        aria-hidden
        className="pointer-events-none fixed size-0 opacity-0"
      />

      <AnimatePresence>
        {splashVisible ? (
          <m.div
            key="hero-intro-splash"
            exit={introSplashExit}
            className="fixed inset-0"
            style={{ zIndex: Z_INDEX.max }}
            aria-busy="true"
            aria-label="Cargando video de bienvenida"
          >
            <HeroIntroSplash {...intro} />
          </m.div>
        ) : null}
      </AnimatePresence>
    </HomeBootContext.Provider>
  );
}

export {
  HomeVideoGate,
  useHomeBootComplete,
  type HomeIntroContent,
  type HomeVideoGateProps,
};
