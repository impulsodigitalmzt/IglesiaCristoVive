import type { Sermon } from "@/types";
import { imageAssets } from "./images";

export const sermons: Sermon[] = [
  {
    id: "sermon-imposible",
    slug: "donde-lo-imposible-se-hace-posible",
    title: "Donde lo imposible se hace posible",
    description: "Un mensaje sobre fe, esperanza y el poder de Dios en medio de lo incierto.",
    image: imageAssets.stage,
    category: "Serie principal",
    createdAt: "2026-06-22",
    updatedAt: "2026-06-22",
    featured: true,
    status: "published",
    speaker: "Pastor Principal",
    series: "Fe viva",
    duration: "42 min",
  },
];

export const sermonSeries = ["Fe viva", "Familia de fe", "Propósito"] as const;

export const featuredSermon = sermons[0] ?? null;
