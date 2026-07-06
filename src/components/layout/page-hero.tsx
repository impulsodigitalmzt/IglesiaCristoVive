import Image from "next/image";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
  id?: string;
};

function PageHero({ eyebrow, title, description, image, className, id }: PageHeroProps) {
  if (image) {
    return (
      <section
        id={id}
        data-slot="page-hero"
        aria-label={title}
        className={cn(
          "relative overflow-hidden",
          id ? "scroll-mt-28" : undefined,
          className,
        )}
      >
        <div className="relative min-h-[260px] md:min-h-[320px] lg:min-h-[360px]">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/40" />
          <div className="container-content relative flex min-h-[inherit] flex-col justify-center py-16 md:py-20 lg:py-24">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-4 max-w-3xl text-balance font-montserrat text-3xl font-black tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      data-slot="page-hero"
      aria-label={title}
      className={cn(
        "border-b border-border/60 bg-background-alt py-16 md:py-20",
        id ? "scroll-mt-28" : undefined,
        className,
      )}
    >
      <div className="container-content">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-balance font-montserrat text-3xl font-black tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export { PageHero, type PageHeroProps };
