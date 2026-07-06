import type { Testimonial } from "@/types";

/** Opiniones reales de Google Maps — Iglesia Cristo Vive Asambleas de Dios */
const allGoogleTestimonials: Testimonial[] = [
  {
    id: "google-daniela-bautista",
    slug: "daniela-bautista",
    title: "Como en casa",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
    featured: true,
    status: "published",
    author: "Daniela Bautista",
    role: "",
    quote:
      "Amo Cristo Vive. Desde el primer momento en que llegué, me sentí como en casa. La comunidad es increíble, todos te reciben con los brazos abiertos.",
  },
  {
    id: "google-vianey-lomeli",
    slug: "vianey-lomeli",
    title: "Lugar de restauración",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    featured: true,
    status: "published",
    author: "Vianey Lomeli",
    role: "",
    quote:
      "Me encanta Cristo Vive, porque es un lugar donde realmente puedes encontrarte con la presencia de Dios. Si estás buscando un lugar de restauración donde el Espíritu Santo opere, es este.",
  },
  {
    id: "google-becka-sanchez",
    slug: "becka-sanchez",
    title: "Una casa de milagros",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
    featured: true,
    status: "published",
    author: "Becka Sánchez",
    role: "",
    quote:
      "¡Una casa de milagros! He sido testigo de lo que Dios hace en este lugar. Si resides en Mazatlán, no dudes en ser parte de esta comunidad hermosa.",
  },
  {
    id: "google-neftali-chon",
    slug: "neftali-chon",
    title: "Corazón para servir",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
    featured: true,
    status: "published",
    author: "Neftali Chon",
    role: "",
    quote:
      "Me gusta pertenecer a Cristo Vive. Tienen un corazón para servir, amar y crecer en fe.",
  },
  {
    id: "google-myklo-rodriguez",
    slug: "myklo-rodriguez",
    title: "Presencia de Dios",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2026-05-01",
    updatedAt: "2026-05-01",
    featured: true,
    status: "published",
    author: "Myklo Rodriguez",
    role: "",
    quote: "La presencia de Dios se puede sentir desde que entras al lugar.",
  },
  {
    id: "google-luis-armando-osuna",
    slug: "luis-armando-osuna",
    title: "Gente maravillosa",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
    featured: true,
    status: "published",
    author: "Luis Armando Osuna Durán",
    role: "",
    quote: "Me gusta mucho mi iglesia. Conecté con gente maravillosa.",
  },
  {
    id: "google-ivan-rodriguez",
    slug: "ivan-rodriguez",
    title: "Excelente lugar",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    featured: true,
    status: "published",
    author: "Iván Rodríguez",
    role: "",
    quote:
      "Si estás de paso por Mazatlán y quieres seguir recibiendo la palabra, excelente lugar.",
  },
  {
    id: "google-mia-rodriguez",
    slug: "mia-rodriguez",
    title: "Excelente",
    description: "Opinión en Google Maps.",
    image: "",
    category: "Google",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    featured: true,
    status: "published",
    author: "Mia Rodríguez",
    role: "",
    quote: "Excelente.",
  },
];

export const testimonials = allGoogleTestimonials.filter(
  (item) => item.quote.trim().length > 0,
);

const GENERIC_TESTIMONIAL_QUOTES = new Set([
  "excelente.",
  "excelente",
  "muy bueno.",
  "muy bueno",
  "genial.",
  "genial",
]);

function isExpressiveTestimonial(quote: string) {
  const trimmed = quote.trim();

  if (trimmed.length < 50) return false;
  return !GENERIC_TESTIMONIAL_QUOTES.has(trimmed.toLowerCase());
}

/** Selección curada: testimonios expresivos y completos para el carrusel Cover Flow */
export const carouselTestimonials = allGoogleTestimonials
  .filter((item) => isExpressiveTestimonial(item.quote))
  .sort((a, b) => b.quote.length - a.quote.length);
