import type { Metadata } from "next";

import { Hero } from "@/components/layout/hero";
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
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Inicio",
  description: church.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
