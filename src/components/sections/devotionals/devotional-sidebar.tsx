"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon } from "lucide-react";

import type { Devotional } from "@/types";

type DevotionalSidebarProps = {
  popular: Devotional[];
};

function DevotionalSidebar({ popular }: DevotionalSidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
      <section aria-label="Devocionales populares">
        <h2 className="border-b border-border/70 pb-3 font-montserrat text-sm font-bold tracking-[0.14em] text-[#5c4a3d] uppercase">
          Más populares
        </h2>
        <ul className="mt-1 divide-y divide-border/60">
          {popular.map((item) => (
            <li key={item.id}>
              <Link
                href={`/devocionales/${item.slug}`}
                className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-background-alt">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm leading-snug font-medium text-text group-hover:text-primary">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label="Suscripción al devocional"
        className="rounded-2xl border border-border/70 bg-background-alt p-6 shadow-sm"
      >
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <BookOpenIcon className="size-5" aria-hidden />
        </div>
        <h3 className="mt-4 text-center font-montserrat text-xl font-bold text-text underline decoration-primary/40 underline-offset-4">
          Caminando con Jesús
        </h3>
        <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
          Seguir a Jesús no es una teoría. Es un camino. Ven a caminar con Él, ¡lo haremos juntos!
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Más de 1,900 suscriptores
        </p>

        <form
          className="mt-5 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="devotional-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="devotional-email"
            type="email"
            placeholder="Escribe tu correo electrónico"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-text outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-primary font-semibold text-primary-foreground transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Suscribirse
          </button>
        </form>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
          Al suscribirte, aceptas recibir el devocional diario de Cristo Vive.
        </p>
      </section>
    </aside>
  );
}

export { DevotionalSidebar };
