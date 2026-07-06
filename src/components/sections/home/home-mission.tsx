import { VerseCard } from "@/components/cards/verse-card";
import { Section } from "@/components/layout/section";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { SectionTitle } from "@/components/sections/section-title";
import { LoopVideo } from "@/components/ui/video";
import { churchMission, churchScripture } from "@/data/church";
import { churchVideos } from "@/data/videos";

function HomeMission() {
  return (
    <Section
      background="alt"
      spacing="default"
      ariaLabel="Misión y visión"
      className="pb-8 md:pb-10 lg:pb-12"
    >
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Quiénes somos"
          title={churchMission.headline}
          titleLevel="h2"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[var(--radius-card-lg)] border border-border/60 bg-background p-7 md:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Misión
            </p>
            <p className="mt-4 text-base leading-relaxed text-text md:text-lg md:leading-8">
              {churchMission.mission}
            </p>
          </div>
          <div className="rounded-[var(--radius-card-lg)] border border-border/60 bg-background p-7 md:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Visión
            </p>
            <p className="mt-4 text-base leading-relaxed text-text md:text-lg md:leading-8">
              {churchMission.vision}
            </p>
          </div>
          <VerseCard
            className="h-full"
            verse={churchScripture.text}
            reference={churchScripture.reference}
            accent="secondary"
          />
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {churchMission.summary}
        </p>

        <div className="mt-12 overflow-hidden rounded-[var(--radius-card-lg)] shadow-xl">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="flex h-full min-h-full flex-col justify-between bg-[var(--color-surface-dark)] p-8 md:p-10 lg:p-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                  Vida en la iglesia
                </p>
                <h3 className="mt-4 font-montserrat text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  {churchVideos.baptisms.title}
                </h3>
              </div>

              <div className="my-8 space-y-5 lg:my-10 lg:space-y-6">
                <p className="text-base leading-relaxed text-white/85 md:text-lg md:leading-8 lg:text-xl lg:leading-9">
                  {churchVideos.baptisms.description}
                </p>
                {churchVideos.baptisms.extendedDescription ? (
                  <p className="text-base leading-relaxed text-white/75 md:text-lg md:leading-8 lg:text-xl lg:leading-9">
                    {churchVideos.baptisms.extendedDescription}
                  </p>
                ) : null}
              </div>

              {churchVideos.baptisms.scripture && churchVideos.baptisms.reference ? (
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic leading-relaxed text-white/90 md:text-base lg:text-lg lg:leading-8">
                    &ldquo;{churchVideos.baptisms.scripture}&rdquo;
                  </p>
                  <cite className="mt-2 block text-sm font-semibold not-italic text-primary lg:text-base">
                    {churchVideos.baptisms.reference}
                  </cite>
                </blockquote>
              ) : null}
            </div>

            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
              <LoopVideo
                src={churchVideos.baptisms.src}
                title={churchVideos.baptisms.title}
                rounded="none"
                aspect="auto"
                wrapperClassName="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export { HomeMission };
