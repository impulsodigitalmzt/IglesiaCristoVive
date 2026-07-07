"use client";

import * as React from "react";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { church } from "@/data/church";
import {
  introSplashGlowVariants,
  introSplashLetterVariants,
  introSplashLineStagger,
  introSplashLogoFloat,
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

type AnimatedIntroLineProps = {
  text: string;
  className?: string;
  lineIndex: number;
};

function AnimatedIntroLine({ text, className, lineIndex }: AnimatedIntroLineProps) {
  const reducedMotion = useReducedMotion();
  const letters = Array.from(text);

  if (reducedMotion) {
    return <span className={cn(titleLineClass, className)}>{text}</span>;
  }

  return (
    <m.span
      className={cn(titleLineClass, className, "block")}
      variants={introSplashLineStagger}
      initial="hidden"
      animate="visible"
      custom={lineIndex}
      aria-label={text}
    >
      {letters.map((char, index) => (
        <m.span
          key={`${lineIndex}-${index}-${char}`}
          className="inline-block origin-bottom will-change-transform"
          variants={introSplashLetterVariants}
          aria-hidden
        >
          {char === " " ? "\u00A0" : char}
        </m.span>
      ))}
    </m.span>
  );
}

type IntroLogoProps = {
  className: string;
  imageClassName?: string;
  sizes?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

function IntroLogo({
  className,
  imageClassName,
  sizes,
  width,
  height,
  fill = false,
}: IntroLogoProps) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      aria-hidden
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={introSplashLogoVariants}
      className={className}
    >
      <m.div
        className="size-full"
        animate={reducedMotion ? undefined : introSplashLogoFloat}
      >
        {fill ? (
          <Image
            src={church.logoWhite}
            alt=""
            fill
            priority
            sizes={sizes}
            className={cn(
              "object-contain object-top drop-shadow-[0_8px_28px_rgba(232,93,4,0.35)]",
              imageClassName,
            )}
          />
        ) : (
          <Image
            src={church.logoWhite}
            alt=""
            width={width}
            height={height}
            priority
            className={cn(
              "h-auto w-full object-contain drop-shadow-[0_12px_36px_rgba(232,93,4,0.4)]",
              imageClassName,
            )}
          />
        )}
      </m.div>
    </m.div>
  );
}

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
        <div className="w-full max-w-3xl text-left xl:max-w-4xl">
          <h1 className="font-montserrat font-black tracking-tight">
            <div className="flex items-start gap-2 sm:gap-3 lg:block">
              <div className="min-w-0 flex-1">
                <AnimatedIntroLine text={titleLine1} className="text-white" lineIndex={0} />
                <AnimatedIntroLine text={titleLine2} className="text-white" lineIndex={1} />
              </div>
              <IntroLogo
                className="relative mt-1 aspect-[5/4] w-[6.75rem] shrink-0 sm:mt-0.5 sm:w-28 lg:hidden"
                fill
                sizes="112px"
              />
            </div>
            <AnimatedIntroLine text={titleLine3} className="text-primary" lineIndex={2} />
            <AnimatedIntroLine
              text={titleLine4}
              className="bg-gradient-to-r from-primary via-[#ff8c42] to-primary bg-clip-text text-transparent"
              lineIndex={3}
            />
          </h1>
        </div>
      </MaxWidthContainer>

      <IntroLogo
        className="pointer-events-none absolute top-[28%] left-[52%] z-10 hidden w-40 opacity-95 lg:block lg:top-[30%] lg:left-[54%] lg:w-52 xl:left-[56%] xl:w-60 2xl:w-72"
        width={320}
        height={96}
      />

      <m.div
        className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
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
