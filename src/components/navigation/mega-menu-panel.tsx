"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { m } from "framer-motion";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { isNavItemActive } from "@/data/navigation";
import type { NavDropdown } from "@/types";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";

type MegaMenuPanelProps = {
  item: NavDropdown;
  pathname: string;
  transparent: boolean;
  onNavigate?: () => void;
};

function MegaMenuPanel({
  item,
  pathname,
  transparent,
  onNavigate,
}: MegaMenuPanelProps) {
  const midpoint = Math.ceil(item.links.length / 2);
  const columns = [item.links.slice(0, midpoint), item.links.slice(midpoint)];

  return (
    <m.div
      key={item.id}
      id={`mega-menu-${item.id}`}
      data-slot="mega-menu-panel"
      role="region"
      aria-label={`Menú ${item.label}`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={transitions.normal}
      className={cn(
        "absolute inset-x-0 top-full border-t shadow-xl",
        transparent
          ? "border-white/10 bg-black/35 backdrop-blur-2xl backdrop-saturate-150"
          : "border-border/60 bg-white/85 backdrop-blur-2xl backdrop-saturate-150",
      )}
    >
        <MaxWidthContainer className="py-8 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr_minmax(280px,360px)] lg:gap-10">
            {columns.map((links, columnIndex) => (
              <ul key={columnIndex} className="space-y-1">
                {links.map((link) => {
                  const active = isNavItemActive(pathname, link.href);
                  const external = link.href.startsWith("http");

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex items-center justify-between rounded-[var(--radius-input)] px-4 py-3 text-sm font-medium transition-all duration-300",
                          transparent
                            ? "text-white/85 hover:bg-white/10 hover:text-white"
                            : "text-text/80 hover:bg-background-alt hover:text-primary",
                          active &&
                            (transparent
                              ? "bg-white/10 text-white"
                              : "bg-primary/5 text-primary"),
                        )}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRightIcon
                          aria-hidden
                          className={cn(
                            "size-4 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                            active && "opacity-100",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ))}

            {item.featured.href ? (
              <Link
                href={item.featured.href}
                onClick={onNavigate}
                {...(item.featured.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 shadow-lg"
              >
                <div className="relative aspect-[4/3] min-h-[220px]">
                  <Image
                    src={item.featured.image}
                    alt=""
                    fill
                    sizes="360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="font-montserrat text-lg font-black tracking-tight">
                      {item.featured.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {item.featured.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-wide uppercase">
                      Explorar
                      <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
        </MaxWidthContainer>
    </m.div>
  );
}

export { MegaMenuPanel, type MegaMenuPanelProps };
