"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";

import { church } from "@/data/church";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";

type NavLogoProps = {
  transparent: boolean;
  className?: string;
};

function NavLogo({ transparent, className }: NavLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${church.name} — Inicio`}
      className={cn("group relative inline-flex shrink-0 items-center focus-visible:outline-none", className)}
    >
      <m.span
        className="relative block h-10 w-[148px] sm:h-11 sm:w-[168px]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.985 }}
        transition={transitions.fast}
      >
        <Image
          src={church.logoWhite}
          alt=""
          fill
          priority
          sizes="168px"
          className={cn(
            "object-contain object-left transition-opacity duration-500 ease-out",
            transparent ? "opacity-100" : "opacity-0",
          )}
        />
        <Image
          src={church.logoGray}
          alt=""
          fill
          priority
          sizes="168px"
          className={cn(
            "object-contain object-left transition-opacity duration-500 ease-out",
            transparent ? "opacity-0" : "opacity-100",
          )}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-2 -right-2 w-8 translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-[shimmer_1.2s_ease-in-out]"
        />
      </m.span>
    </Link>
  );
}

export { NavLogo, type NavLogoProps };
