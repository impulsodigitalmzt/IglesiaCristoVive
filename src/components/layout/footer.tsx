import Image from "next/image";
import Link from "next/link";

import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { ScheduleBar } from "@/components/layout/schedule-bar";
import { Divider } from "@/components/ui/divider";
import { SocialLinks } from "@/components/shared/social-links";
import { church } from "@/data/church";
import { footerLinks } from "@/data/footer";

function Footer() {
  return (
    <footer data-slot="site-footer" className="border-t border-white/10 bg-[var(--color-surface-dark)] text-white">
      <ScheduleBar />
      <MaxWidthContainer className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link href="/" aria-label={`${church.name} — Inicio`}>
              <Image
                src={church.logoWhite}
                alt=""
                width={168}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {church.description}
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/70">
              <p>{church.address}</p>
              <p>{church.phone}</p>
              <p>{church.email}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="font-montserrat text-sm font-black tracking-wide uppercase">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-10 bg-white/10" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {church.legalName}. Todos los derechos reservados.
          </p>
          <SocialLinks variant="footer" />
        </div>
      </MaxWidthContainer>
    </footer>
  );
}

export { Footer };
