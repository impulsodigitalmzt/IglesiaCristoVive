"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  XIcon,
} from "lucide-react";
import { AnimatePresence, m } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLogo } from "@/components/navigation/nav-logo";
import { SocialLinks } from "@/components/shared/social-links";
import { church } from "@/data/church";
import {
  contactNavItem,
  donateNavItem,
  isDropdownActive,
  isNavItemActive,
  megaMenuNavigation,
} from "@/data/navigation";
import type { NavDropdown } from "@/types";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";

type MobileDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pathname: string;
};

const navLinkClass = (active: boolean) =>
  cn(
    "flex items-center rounded-xl px-3.5 py-2.5 text-[15px] font-semibold transition-colors",
    active
      ? "bg-primary/10 text-primary"
      : "text-text hover:bg-background-alt",
  );

function MobileDrawer({ open, onOpenChange, pathname }: MobileDrawerProps) {
  const close = () => onOpenChange(false);
  const featuredVisit = megaMenuNavigation[0]?.featured;

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent
        aria-describedby={undefined}
        className="fixed inset-y-0 right-0 left-auto mt-0 flex h-full w-[min(100vw,400px)] max-w-full flex-col rounded-none border-l border-border/60 bg-[var(--color-background-warm)] p-0 data-[vaul-drawer-direction=right]:max-w-[400px]"
      >
        <DrawerHeader className="shrink-0 border-b border-border/50 bg-background px-5 py-4 text-left">
          <div className="flex items-center justify-between gap-3">
            <NavLogo transparent={false} className="origin-left scale-[0.88]" />
            <DrawerClose asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Cerrar menú"
                className="rounded-full border border-border/60 bg-background-alt"
              >
                <XIcon className="size-5" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerTitle className="sr-only">Menú de navegación</DrawerTitle>
        </DrawerHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          {featuredVisit ? (
            <Link
            href={featuredVisit?.href ?? "#"}
              onClick={close}
              className="group relative mb-4 block overflow-hidden rounded-[var(--radius-card)] shadow-md"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={featuredVisit.image}
                  alt=""
                  fill
                  sizes="360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-white/75 uppercase">
                    Tu primera vez
                  </p>
                  <p className="mt-1 font-montserrat text-lg font-bold leading-tight">
                    {featuredVisit.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/80">
                    {featuredVisit.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Conocer más
                    <ArrowUpRightIcon className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ) : null}

          <nav
            aria-label="Navegación principal"
            className="overflow-hidden rounded-[var(--radius-card)] border border-border/60 bg-background shadow-sm"
          >
            <div className="border-b border-border/50 px-2 py-2">
              <Link
                href="/"
                onClick={close}
                aria-current={pathname === "/" ? "page" : undefined}
                className={navLinkClass(pathname === "/")}
              >
                Inicio
              </Link>
            </div>

            <Accordion type="multiple" className="w-full px-1">
              {megaMenuNavigation.map((item) => (
                <MobileNavGroup
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  onNavigate={close}
                />
              ))}
            </Accordion>

            <div className="border-t border-border/50 px-2 py-2">
              <Link
                href={contactNavItem.href}
                onClick={close}
                aria-current={isNavItemActive(pathname, contactNavItem.href) ? "page" : undefined}
                className={navLinkClass(isNavItemActive(pathname, contactNavItem.href))}
              >
                {contactNavItem.label}
              </Link>
            </div>
          </nav>

          <div className="mt-4 rounded-[var(--radius-card)] border border-border/60 bg-background p-4 shadow-sm">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
              Visítanos
            </p>
            <div className="mt-3 space-y-3">
              <div className="flex gap-3">
                <ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div className="text-sm leading-relaxed text-muted-foreground">
                  <p>{church.schedule.sunday}</p>
                  <p>{church.schedule.wednesday}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <p className="text-sm leading-relaxed text-muted-foreground">{church.address}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm" className="h-9 flex-1 min-w-[120px]">
                <a href={`tel:${church.phone.replace(/\s/g, "")}`}>
                  <PhoneIcon className="size-3.5" />
                  Llamar
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="h-9 flex-1 min-w-[120px]">
                <a
                  href={`https://wa.me/${church.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleIcon className="size-3.5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <DrawerFooter className="shrink-0 border-t border-border/50 bg-background px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Síguenos
            </p>
            <SocialLinks variant="header" />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <Button asChild variant="primary" size="lg" className="w-full">
              <Link href={donateNavItem.href} onClick={close}>
                {donateNavItem.label}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/planea-tu-visita" onClick={close}>
                Planea tu visita
              </Link>
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type MobileNavGroupProps = {
  item: NavDropdown;
  pathname: string;
  onNavigate: () => void;
};

function MobileNavGroup({ item, pathname, onNavigate }: MobileNavGroupProps) {
  const active = isDropdownActive(pathname, item);

  return (
    <AccordionItem value={item.id} className="border-border/50">
      <AccordionTrigger
        className={cn(
          "rounded-xl px-3.5 py-2.5 text-[15px] font-semibold hover:no-underline",
          active ? "text-primary" : "text-text",
        )}
      >
        <span className="flex items-center gap-2">
          {item.label}
          {active ? <span className="size-1.5 rounded-full bg-primary" aria-hidden /> : null}
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-2">
        <AnimatePresence initial={false}>
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitions.fast}
            className="space-y-1 px-1"
          >
            {item.featured.href ? (
              <Link
                href={item.featured.href}
                onClick={onNavigate}
                {...(item.featured.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mb-2 flex items-center gap-3 rounded-xl border border-border/50 bg-background-alt/80 p-2.5 transition-colors hover:border-primary/25"
              >
                <div className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.featured.image}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-text">{item.featured.title}</p>
                  <p className="line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                    {item.featured.description}
                  </p>
                </div>
                <ArrowUpRightIcon className="size-3.5 shrink-0 text-primary" aria-hidden />
              </Link>
            ) : null}

            <ul className="space-y-0.5">
              {item.links.map((link) => {
                const linkActive = isNavItemActive(pathname, link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      aria-current={linkActive ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        linkActive
                          ? "bg-primary/10 text-primary"
                          : "text-text/80 hover:bg-background-alt hover:text-text",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </m.div>
        </AnimatePresence>
      </AccordionContent>
    </AccordionItem>
  );
}

export { MobileDrawer, type MobileDrawerProps };
