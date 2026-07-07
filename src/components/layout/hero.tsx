"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ChevronDownIcon, ClockIcon } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Button } from "@/components/ui/button";
import { church } from "@/data/church";
import {
  heroEntranceContainer,
  heroEntranceItemVariants,
  heroLogoEntranceVariants,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroCta = {
  label: string;
  href: string;
};

type HeroProps = {
  videoSrc?: string;
  videoSrcLite?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  titleLine4?: string;
  subtitle?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  className?: string;
};

const defaultPrimaryCta: HeroCta = {
  label: "Planea tu visita",
  href: "/planea-tu-visita",
};

const defaultSecondaryCta: HeroCta = {
  label: "Ver predicaciones",
  href: "/predicaciones",
};

const titleLineClass =
  "block font-montserrat text-[clamp(2.25rem,9vw,7rem)] font-black uppercase leading-[0.95] tracking-[0.02em]";

type NavigatorConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

function shouldSkipHeroVideo() {
  if (typeof window === "undefined") return true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const connection = (navigator as NavigatorConnection).connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
    return true;
  }

  return false;
}

function pickHeroVideoSrc(fullSrc: string, liteSrc?: string) {
  return liteSrc ?? fullSrc;
}

function HeroVideo({ src, liteSrc }: { src: string; liteSrc?: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoSrc] = React.useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    if (shouldSkipHeroVideo()) return null;
    return pickHeroVideoSrc(src, liteSrc);
  });

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    void video.play().catch(() => {});
  }, [videoSrc]);

  if (!videoSrc) {
    return <div aria-hidden className="absolute inset-0 bg-neutral-950" />;
  }

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
      className="absolute inset-0 size-full object-cover"
    />
  );
}

function HeroOverlay() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15"
      />
    </>
  );
}

function HeroLogoDesktop({ animate }: { animate: boolean }) {
  return (
    <m.div
      aria-hidden
      initial={animate ? "hidden" : false}
      animate="visible"
      variants={heroLogoEntranceVariants}
      className="pointer-events-none absolute top-[28%] left-[52%] z-10 hidden w-40 opacity-90 lg:block lg:top-[30%] lg:left-[54%] lg:w-52 xl:left-[56%] xl:w-60 2xl:w-72"
    >
      <Image
        src={church.logoWhite}
        alt=""
        width={320}
        height={96}
        priority
        className="h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
      />
    </m.div>
  );
}

function HeroLogoMobile() {
  return (
    <m.div
      aria-hidden
      variants={heroLogoEntranceVariants}
      className="relative mt-1 aspect-[5/4] w-[6.75rem] shrink-0 sm:mt-0.5 sm:w-28 lg:hidden"
    >
      <Image
        src={church.logoWhite}
        alt=""
        fill
        priority
        sizes="112px"
        className="object-contain object-top drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
      />
    </m.div>
  );
}

function HeroSchedule() {
  return (
    <div
      className="w-full max-w-[min(100%,20rem)] rounded-2xl border border-primary/50 bg-black/45 px-5 py-4 backdrop-blur-md sm:max-w-xs md:max-w-sm md:px-6 md:py-5"
    >
      <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
        Horarios de predicación
      </p>
      <ul className="space-y-2.5">
        <li className="flex items-start gap-3">
          <CalendarIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
          <span className="font-montserrat text-lg font-bold text-white md:text-xl">
            {church.schedule.sunday}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <ClockIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
          <span className="font-montserrat text-lg font-bold text-white md:text-xl">
            {church.schedule.wednesday}
          </span>
        </li>
      </ul>
    </div>
  );
}

function Hero({
  videoSrc = church.heroVideo,
  videoSrcLite = church.heroVideoLite,
  titleLine1 = "CRISTO",
  titleLine2 = "VIVE",
  titleLine3,
  titleLine4,
  subtitle = "Donde lo imposible se hace posible",
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  className,
}: HeroProps) {
  const reducedMotion = useReducedMotion();
  const shouldAnimate = !reducedMotion;

  const renderTitleBlock = () => {
    if (titleLine3 && titleLine4) {
      return (
        <m.div variants={heroEntranceItemVariants}>
          <h1 className="font-montserrat font-black tracking-tight">
            <div className="flex items-start gap-2 sm:gap-3 lg:block">
              <div className="min-w-0 flex-1">
                <span className={cn(titleLineClass, "text-white")}>{titleLine1}</span>
                <span className={cn(titleLineClass, "text-white")}>{titleLine2}</span>
              </div>
              <HeroLogoMobile />
            </div>
            <span className={cn(titleLineClass, "text-primary")}>{titleLine3}</span>
            <span className={cn(titleLineClass, "text-primary")}>{titleLine4}</span>
          </h1>
        </m.div>
      );
    }

    if (titleLine3) {
      return (
        <m.div variants={heroEntranceItemVariants}>
          <h1 className="font-montserrat font-black tracking-tight">
            <div className="flex items-start gap-2 sm:gap-3 lg:block">
              <div className="min-w-0 flex-1">
                <span className={cn(titleLineClass, "text-white")}>{titleLine1}</span>
                <span className={cn(titleLineClass, "text-white")}>{titleLine2}</span>
              </div>
              <HeroLogoMobile />
            </div>
            <span className={cn(titleLineClass, "text-primary")}>{titleLine3}</span>
          </h1>
        </m.div>
      );
    }

    return (
      <m.div variants={heroEntranceItemVariants}>
        <h1 className="font-montserrat font-black tracking-tight">
          <div className="flex items-start gap-2 sm:gap-3 lg:block">
            <div className="min-w-0 flex-1">
              <span className={cn(titleLineClass, "text-white")}>{titleLine1}</span>
              <span className={cn(titleLineClass, "text-primary")}>{titleLine2}</span>
            </div>
            <HeroLogoMobile />
          </div>
        </h1>
      </m.div>
    );
  };

  return (
    <section
      data-slot="hero"
      aria-label="Presentación principal"
      className={cn(
        "relative -mt-[var(--header-height)] min-h-svh w-full overflow-hidden",
        className,
      )}
    >
      <div data-slot="hero-media" className="absolute inset-0 -z-20 size-full" aria-hidden>
        <HeroVideo src={videoSrc} liteSrc={videoSrcLite} />
      </div>

      <div data-slot="hero-overlay" className="absolute inset-0" aria-hidden>
        <HeroOverlay />
      </div>

      <MaxWidthContainer className="relative z-10 flex min-h-svh flex-col justify-center pb-36 pt-[calc(var(--header-height)+2.5rem)] md:pb-40 md:pt-[calc(var(--header-height)+3.5rem)] lg:max-w-[calc(100%-22rem)]">
        <m.div
          className="w-full max-w-3xl text-left xl:max-w-4xl"
          variants={heroEntranceContainer}
          initial={shouldAnimate ? "hidden" : false}
          animate="visible"
        >
          {renderTitleBlock()}

          {subtitle ? (
            <m.p
              variants={heroEntranceItemVariants}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:mt-10 md:text-xl md:leading-relaxed"
            >
              {subtitle}
            </m.p>
          ) : null}

          <m.div
            variants={heroEntranceItemVariants}
            className="mt-10 flex flex-row items-stretch gap-2 sm:mt-12 sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Button
              asChild
              variant="primary"
              size="lg"
              className="h-11 min-w-0 flex-1 px-3 text-xs leading-tight whitespace-normal shadow-lg shadow-black/20 sm:h-12 sm:flex-none sm:px-8 sm:text-base sm:whitespace-nowrap sm:min-w-[200px]"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 min-w-0 flex-1 border-white/40 bg-white/10 px-3 text-xs leading-tight whitespace-normal text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-text sm:h-12 sm:flex-none sm:px-8 sm:text-base sm:whitespace-nowrap sm:min-w-[200px]"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </m.div>

          <m.div variants={heroEntranceItemVariants} className="mt-10 lg:hidden">
            <HeroSchedule />
          </m.div>
        </m.div>
      </MaxWidthContainer>

      <m.div
        initial={shouldAnimate ? "hidden" : false}
        animate="visible"
        variants={heroEntranceItemVariants}
        transition={{ delay: 0.75 }}
        className="absolute right-4 bottom-28 z-10 hidden lg:block lg:right-14 lg:bottom-32 xl:right-20"
      >
        <HeroSchedule />
      </m.div>

      <HeroLogoDesktop animate={shouldAnimate} />

      <m.div
        className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center md:bottom-10"
        animate={shouldAnimate ? { y: [0, 8, 0] } : undefined}
        transition={
          shouldAnimate
            ? { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
            : undefined
        }
      >
        <div className="flex flex-col items-center gap-2 text-white/70" aria-hidden>
          <span className="text-[11px] font-medium tracking-[0.24em] uppercase">
            Descubre
          </span>
          <ChevronDownIcon className="size-6" />
        </div>
      </m.div>
    </section>
  );
}

export { Hero, type HeroProps };
