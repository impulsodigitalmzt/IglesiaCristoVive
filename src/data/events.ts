import type { Event } from "@/types";
import { imageAssets } from "./images";

export const events: Event[] = [
  {
    id: "event-adoracion",
    slug: "noche-de-adoracion",
    title: "Noche de Adoración",
    description: "Una noche especial de adoración, oración y presencia de Dios.",
    image: imageAssets.worship,
    category: "Adoración",
    createdAt: "2026-06-01",
    updatedAt: "2026-06-20",
    featured: true,
    status: "published",
    date: "12 Jul 2026",
    time: "7:00 PM",
    location: "Auditorio Principal",
  },
  {
    id: "event-jovenes",
    slug: "encuentro-jovenes",
    title: "Encuentro de Jóvenes",
    description: "Adoración, comunidad y un mensaje diseñado para la próxima generación.",
    image: imageAssets.youth,
    category: "Jóvenes",
    createdAt: "2026-06-05",
    updatedAt: "2026-06-18",
    featured: false,
    status: "published",
    date: "19 Jul 2026",
    time: "6:30 PM",
    location: "Salón Jóvenes",
  },
  {
    id: "event-familia",
    slug: "noche-familiar",
    title: "Noche Familiar",
    description: "Una celebración para toda la familia con actividades y comunión.",
    image: imageAssets.family,
    category: "Familia",
    createdAt: "2026-06-10",
    updatedAt: "2026-06-21",
    featured: false,
    status: "published",
    date: "26 Jul 2026",
    time: "5:00 PM",
    location: "Patio Principal",
  },
];

export const upcomingEvents = events.slice(0, 3);

export const featuredEvent = events.find((event) => event.featured) ?? null;
