import type { Ministry } from "@/types";
import { imageAssets } from "./images";
import { videoAssets } from "./videos";

export const ministries: Ministry[] = [
  {
    id: "min-kids",
    slug: "cristo-vive-kids",
    title: "Cristo Vive Kids",
    description: "Un espacio seguro donde los más pequeños descubren a Jesús con alegría.",
    image: imageAssets.kids,
    video: videoAssets.kidsMinistry,
    category: "Niños",
    createdAt: "2024-01-01",
    updatedAt: "2026-01-01",
    featured: true,
    status: "published",
    anchor: "kids",
  },
  {
    id: "min-youth",
    slug: "jovenes",
    title: "Jóvenes",
    description: "Comunidad, propósito y fe para la próxima generación.",
    image: imageAssets.youth,
    video: videoAssets.youthMinistry,
    category: "Jóvenes",
    createdAt: "2024-01-01",
    updatedAt: "2026-01-01",
    featured: true,
    status: "published",
    anchor: "jovenes",
  },
  {
    id: "min-casas",
    slug: "comunidades-en-casa",
    title: "Comunidades en Casa",
    description: "Grupos pequeños que crecen en fe, amistad y servicio.",
    image: imageAssets.family,
    video: videoAssets.personalChurch,
    category: "Comunidad",
    createdAt: "2024-01-01",
    updatedAt: "2026-01-01",
    featured: true,
    status: "published",
    anchor: "casas",
  },
  {
    id: "min-matrimonios",
    slug: "matrimonios",
    title: "Matrimonios",
    description: "Fortalece tu relación con principios bíblicos y acompañamiento pastoral.",
    image: imageAssets.women,
    video: videoAssets.women,
    category: "Familia",
    createdAt: "2024-01-01",
    updatedAt: "2026-01-01",
    featured: false,
    status: "published",
    anchor: "matrimonios",
  },
];

export const featuredMinistries = ministries.filter((item) => item.featured);
