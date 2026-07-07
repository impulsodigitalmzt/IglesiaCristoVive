import type { Metadata } from "next";

import { Hero } from "@/components/layout/hero";
import { HomeVideoGate } from "@/components/layout/home-video-gate";
import { Footer } from "@/components/layout/footer";
import {
  HomeConnect,
  HomeDonations,
  HomeEvents,
  HomeFinalCta,
  HomeMinistries,
  HomeMission,
  HomeTestimonials,
  HomeVisit,
  HomeWelcome,
  HomeYouTube,
} from "@/components/sections/home";
import { homeHero } from "@/data/home";
import { church } from "@/data/church";
import { HERO_VIDEO_URL } from "@/data/videos";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Inicio",
  description: church.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={church.heroPoster} fetchPriority="high" />
      <link rel="preload" as="video" href={HERO_VIDEO_URL} type="video/mp4" />

      <HomeVideoGate
        videoSrc={church.heroVideo}
        videoSrcLite={church.heroVideoLite}
        poster={church.heroPoster}
      >
        <Hero {...homeHero} />
        <HomeWelcome />
        <HomeYouTube />
        <HomeMission />
        <HomeConnect />
        <HomeMinistries />
        <HomeEvents />
        <HomeTestimonials />
        <HomeVisit />
        <HomeDonations />
        <HomeFinalCta />
        <Footer />
      </HomeVideoGate>
    </>
  );
}
