"use client";

import * as React from "react";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { church } from "@/data/church";
import {
  introSplashContainer,
  introSplashGlowVariants,
  introSplashLineVariants,
  introSplashLogoVariants,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroIntroSplashProps = {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  titleLine4: string;
};

const titleLineClass =
  "block font-montserrat text-[clamp(2.25rem,9vw,7rem)] font-black uppercase leading-[0.95] tracking-[0.02em]";

function HeroIntroSplash({
  titleLine1,
  titleLine2,
  titleLine3,
  titleLine4,
}: HeroIntroSplashProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-neutral-950 px-4 pb-24 pt-[calc(var(--header-height)+2rem)] sm:px-6">
      <m.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={reducedMotion ? false : "hidden"}
        animate="visible"
        variants={introSplashGlowVariants}
      >
        <div className="absolute top-1/4 -left-1/4 size-[min(80vw,36rem)] rounded-full bg-primary/25 blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 size-[min(70vw,28rem)] rounded-full bg-primary/15 blur-[90px]" />
        <m.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(232,93,4,0.18),transparent_55%)]"
          animate={reducedMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </m.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
      />

      <MaxWidthContainer className="relative z-10 lg:max-w-[calc(100%-22rem)]">
        <m.div
          className="w-full max-w-3xl text-left xl:max-w-4xl"
          variants={introSplashContainer}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
        >
          <m.div variants={introSplashLineVariants}>
            <h1 className="font-montserrat font-black tracking-tight">
              <div className="flex items-start gap-2 sm:gap-3 lg:block">
                <div className="min-w-0 flex-1">
                  <span className={cn(titleLineClass, "text-white")}>{titleLine1}</span>
                  <span className={cn(titleLineClass, "text-white")}>{titleLine2}</span>
                </div>
                <m.div
                  aria-hidden
                  variants={introSplashLogoVariants}
                  className="relative mt-1 aspect-[5/4] w-[6.75rem] shrink-0 sm:mt-0.5 sm:w-28 lg:hidden"
                >
                  <Image
                    src={church.logoWhite}
                    alt=""
                    fill
                    priority
                    sizes="112px"
                    className="object-contain object-top drop-shadow-[0_8px_28px_rgba(232,93,4,0.35)]"
                  />
                </m.div>
              </div>
              <span className={cn(titleLineClass, "text-primary")}>{titleLine3}</span>
              <span
                className={cn(
                  titleLineClass,
                  "bg-gradient-to-r from-primary via-[#ff8c42] to-primary bg-clip-text text-transparent",
                )}
              >
                {titleLine4}
              </span>
            </h1>
          </m.div>
        </m.div>
      </MaxWidthContainer>

      <m.div
        aria-hidden
        initial={reducedMotion ? false : "hidden"}
        animate="visible"
        variants={introSplashLogoVariants}
        className="pointer-events-none absolute top-[28%] left-[52%] z-10 hidden w-40 opacity-95 lg:block lg:top-[30%] lg:left-[54%] lg:w-52 xl:left-[56%] xl:w-60 2xl:w-72"
      >
        <Image
          src={church.logoWhite}
          alt=""
          width={320}
          height={96}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_12px_36px_rgba(232,93,4,0.4)]"
        />
      </m.div>

      <m.div
        className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="h-0.5 w-28 overflow-hidden rounded-full bg-white/15">
          <m.div
            className="h-full origin-left rounded-full bg-primary"
            animate={reducedMotion ? undefined : { scaleX: [0.15, 0.85, 0.35, 0.95] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] font-medium tracking-[0.28em] text-white/50 uppercase">
          Preparando experiencia
        </span>
      </m.div>
    </div>
  );
}

export { HeroIntroSplash, type HeroIntroSplashProps };
