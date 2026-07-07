"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Button } from "@/components/ui/button";
import { MegaMenuPanel } from "@/components/navigation/mega-menu-panel";
import { MobileDrawer } from "@/components/navigation/mobile-drawer";
import { NavLogo } from "@/components/navigation/nav-logo";
import { SocialLinks } from "@/components/shared/social-links";
import {
  contactNavItem,
  donateNavItem,
  isDropdownActive,
  isNavItemActive,
  megaMenuNavigation,
} from "@/data/navigation";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
import { useEntranceAnimation } from "@/hooks/use-entrance-animation";
import { Z_INDEX } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { headerEntranceVariants, transitions } from "@/lib/motion";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useHeaderScroll({ threshold: 24 });
  const reducedMotion = useReducedMotion();
  const entrance = useEntranceAnimation();
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);
  const closeTimerRef = React.useRef<number | null>(null);

  const isTransparent = !scrolled;
  const activeDropdown = megaMenuNavigation.find((item) => item.id === activeMenu);

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = React.useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setActiveMenu(null), 120);
  }, [clearCloseTimer]);

  React.useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  React.useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        data-slot="site-header"
        data-transparent={isTransparent ? "true" : "false"}
        className="fixed inset-x-0 top-0 pt-3 md:pt-4"
        style={{ zIndex: Z_INDEX.fixed }}
        onMouseLeave={scheduleClose}
      >
        <MaxWidthContainer>
          <m.div
            initial={isHome ? entrance.initial : false}
            animate={isHome ? entrance.animate : "visible"}
            variants={headerEntranceVariants}
            className={cn(
              "rounded-full border transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-out",
              isTransparent
                ? "border-white/20 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-xl"
                : "border-border/50 bg-white/65 shadow-md backdrop-blur-xl supports-[backdrop-filter]:bg-white/55",
            )}
          >
          <div className="relative flex h-[var(--header-height)] min-w-0 items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5">
            <NavLogo transparent={isTransparent} className="relative z-10 shrink-0" />

            <SocialLinks
              transparent={isTransparent}
              className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 gap-0.5 lg:hidden [&_a]:size-9"
            />

            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-1 lg:flex"
              onMouseEnter={clearCloseTimer}
            >
              {megaMenuNavigation.map((item) => {
                const active = isDropdownActive(pathname, item);
                const open = activeMenu === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      clearCloseTimer();
                      setActiveMenu(item.id);
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      aria-controls={`mega-menu-${item.id}`}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 rounded-[var(--radius-button)] px-4 py-2 text-sm font-semibold transition-colors duration-300",
                        isTransparent
                          ? "text-white/88 hover:bg-white/10 hover:text-white"
                          : "text-text/80 hover:bg-background-alt hover:text-text",
                        (active || open) &&
                          (isTransparent
                            ? "text-white"
                            : "text-primary"),
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        aria-hidden
                        className={cn(
                          "size-4 transition-transform duration-300",
                          open && "rotate-180",
                        )}
                      />
                      {(active || open) && !reducedMotion ? (
                        <m.span
                          layoutId="header-nav-indicator"
                          className={cn(
                            "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                            isTransparent ? "bg-white" : "bg-primary",
                          )}
                          transition={transitions.fast}
                        />
                      ) : null}
                      {(active || open) && reducedMotion ? (
                        <span
                          className={cn(
                            "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                            isTransparent ? "bg-white" : "bg-primary",
                          )}
                        />
                      ) : null}
                    </button>
                  </div>
                );
              })}

              <Link
                href={contactNavItem.href}
                aria-current={isNavItemActive(pathname, contactNavItem.href) ? "page" : undefined}
                className={cn(
                  "inline-flex items-center rounded-[var(--radius-button)] px-4 py-2 text-sm font-semibold transition-colors duration-300",
                  isTransparent
                    ? "text-white/88 hover:bg-white/10 hover:text-white"
                    : "text-text/80 hover:bg-background-alt hover:text-text",
                  isNavItemActive(pathname, contactNavItem.href) &&
                    (isTransparent ? "text-white" : "text-primary"),
                )}
              >
                {contactNavItem.label}
              </Link>

              <SocialLinks transparent={isTransparent} className="ml-2" />

              <Button
                asChild
                variant="primary"
                size="default"
                className={cn(
                  "ml-1 shadow-sm transition-transform duration-300 hover:scale-[1.02]",
                  isTransparent && "shadow-lg shadow-black/10",
                )}
              >
                <Link
                  href={donateNavItem.href}
                  aria-current={isNavItemActive(pathname, donateNavItem.href) ? "page" : undefined}
                >
                  {donateNavItem.label}
                </Link>
              </Button>
            </nav>

            <div className="relative z-10 flex shrink-0 items-center gap-1.5 lg:hidden">
              <Button
                asChild
                variant="primary"
                size="sm"
                className={cn(
                  "hidden min-[380px]:inline-flex shadow-sm",
                  isTransparent && "shadow-lg shadow-black/10",
                )}
              >
                <Link href={donateNavItem.href}>{donateNavItem.label}</Link>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                className={cn(
                  isTransparent
                    ? "text-white hover:bg-white/10 hover:text-white"
                    : "text-text hover:bg-background-alt",
                )}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon className="size-5" />
              </Button>
            </div>
          </div>
          </m.div>
        </MaxWidthContainer>

        <AnimatePresence mode="wait">
          {activeDropdown ? (
            <MegaMenuPanel
              key={activeDropdown.id}
              item={activeDropdown}
              pathname={pathname}
              transparent={isTransparent}
              onNavigate={() => setActiveMenu(null)}
            />
          ) : null}
        </AnimatePresence>
      </header>

      <div aria-hidden className="h-[calc(var(--header-height)+1rem)] md:h-[calc(var(--header-height)+1.25rem)]" />

      <MobileDrawer
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        pathname={pathname}
      />
    </>
  );
}

export { Header };
