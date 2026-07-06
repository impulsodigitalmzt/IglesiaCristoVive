import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { Eyebrow } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import { LoopVideo } from "@/components/ui/video";
import { pastorWelcome } from "@/data/church";
import { churchVideos } from "@/data/videos";
import { cn } from "@/lib/utils";

function HomeWelcome() {
  return (
    <Section background="default" spacing="default" ariaLabel="Bienvenida" className="relative">
      <BackgroundPattern variant="dots" opacity="subtle" />
      <MaxWidthContainer>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto h-full w-full max-w-lg overflow-hidden rounded-[var(--radius-card-lg)] shadow-xl sm:max-w-xl lg:mx-0 lg:max-w-none">
              <LoopVideo
                src={churchVideos.salvation.src}
                poster={pastorWelcome.videoPoster}
                title={churchVideos.salvation.title}
                rounded="none"
                aspect="auto"
                wrapperClassName="aspect-[3/4] min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]"
              />
            </div>
          </div>

          <div className="relative z-10 order-1 flex h-full flex-col justify-between lg:order-2">
            <div>
              <Eyebrow className="mb-4">Bienvenida</Eyebrow>
              <h2 className="font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl lg:text-5xl">
                {pastorWelcome.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
                {pastorWelcome.message}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
                {pastorWelcome.extendedMessage}
              </p>
              <div className="mt-8 border-l-2 border-primary pl-4">
                <p className="font-montserrat text-lg font-bold text-text">
                  {pastorWelcome.pastorName}
                </p>
                <p className="text-sm text-muted-foreground">{pastorWelcome.pastorRole}</p>
              </div>
            </div>

            <Link
              href="/nosotros#familia"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8 w-fit")}
            >
              Conoce nuestra familia
              <ArrowUpRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeWelcome };
