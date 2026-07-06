import Link from "next/link";
import { CarIcon, HeartHandshakeIcon, ShirtIcon, UsersIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { IconContainer } from "@/components/shared/icon-container";
import { Button } from "@/components/ui/button";
import { LoopVideo } from "@/components/ui/video";
import { homeVisit } from "@/data/home";
import { churchVideos } from "@/data/videos";

const highlightIcons = [CarIcon, ShirtIcon, UsersIcon, HeartHandshakeIcon];

function HomeVisit() {
  return (
    <Section background="alt" spacing="default" ariaLabel="Planea tu visita">
      <MaxWidthContainer>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {homeVisit.eyebrow}
            </p>
            <h2 className="mt-3 font-montserrat text-3xl font-black tracking-tight text-text md:text-4xl">
              {homeVisit.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {homeVisit.description}
            </p>

            <div className="mt-6 space-y-4">
              {homeVisit.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? HeartHandshakeIcon;

                return (
                  <div key={item.title} className="flex gap-3">
                    <IconContainer icon={Icon} variant="primary" size="sm" shape="circle" />
                    <div>
                      <p className="font-semibold text-text">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button asChild variant="primary" size="lg" className="mt-8">
              <Link href={homeVisit.buttonHref}>{homeVisit.buttonLabel}</Link>
            </Button>
          </div>

          <LoopVideo
            src={churchVideos.service.src}
            title={churchVideos.service.title}
            rounded="card"
            aspect="auto"
            wrapperClassName="relative aspect-[4/5] shadow-xl"
          />        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeVisit };
