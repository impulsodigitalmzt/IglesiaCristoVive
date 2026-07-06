import Link from "next/link";

import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Button } from "@/components/ui/button";
import { LoopVideo } from "@/components/ui/video";
import { homeFinalCta } from "@/data/home";
import { churchVideos } from "@/data/videos";

function HomeFinalCta() {
  return (
    <Section background="default" spacing="default" ariaLabel="Invitación a visitarnos">
      <MaxWidthContainer>
        <div className="overflow-hidden rounded-[var(--radius-card-lg)] shadow-lg">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-auto lg:min-h-full">
              <LoopVideo
                src={churchVideos.welcome.src}
                title={churchVideos.welcome.title}
                rounded="none"
                aspect="auto"
                wrapperClassName="relative h-full min-h-[320px] lg:absolute lg:inset-0 lg:min-h-full"
              />
            </div>

            <div className="flex h-full min-h-full flex-col justify-between bg-[var(--color-surface-dark)] p-8 md:p-10 lg:p-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                  Te esperamos
                </p>
                <h2 className="mt-4 font-montserrat text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  {homeFinalCta.title}
                </h2>
              </div>

              <div className="my-8 space-y-5 lg:my-10 lg:space-y-6">
                <p className="text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
                  {homeFinalCta.description}
                </p>
                <p className="text-base leading-relaxed text-white/75 md:text-lg md:leading-8">
                  {homeFinalCta.extendedDescription}
                </p>
                <p className="text-base leading-relaxed text-white/70 md:text-lg md:leading-8">
                  {homeFinalCta.closingNote}
                </p>
              </div>

              <div className="space-y-6">
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic leading-relaxed text-white/90 md:text-base md:leading-7">
                    &ldquo;{homeFinalCta.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="primary" size="lg">
                    <Link href={homeFinalCta.buttonHref}>{homeFinalCta.buttonLabel}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    <Link href={homeFinalCta.secondaryButtonHref}>
                      {homeFinalCta.secondaryButtonLabel}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeFinalCta };
