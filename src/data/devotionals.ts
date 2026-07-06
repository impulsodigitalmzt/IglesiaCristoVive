import type { Devotional } from "@/types";
import { imageAssets } from "./images";

export const devotionals: Devotional[] = [
  {
    id: "dev-salmo-91",
    slug: "ningun-mal-te-sobrevendra",
    title: "Ningún mal te sobrevendrá",
    description:
      "Cuando pones tu confianza en Dios, Él se convierte en tu refugio y tu morada segura.",
    image: imageAssets.bible,
    category: "Protección",
    createdAt: "2026-07-06",
    updatedAt: "2026-07-06",
    featured: true,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "4 min",
    verse: "Salmo 91:9-10",
    summary:
      "Dios promete cuidado y protección a quienes habitan bajo su sombra y confían en su nombre.",
    scriptureQuote:
      "Porque al SEÑOR, que es mi refugio, al Altísimo, has puesto como tu morada, no te sobrevendrá mal ni la plaga se acercará a tu tienda. (Salmo 91:9-10)",
    publishedLabel: "LUNES, 6 DE JULIO DE 2026",
    isToday: true,
    bodyParagraphs: [
      "Hay días en que las noticias, las preocupaciones y los problemas parecen acercarse demasiado. En esos momentos, el Salmo 91 nos recuerda una verdad poderosa: **el Señor Dios es nuestro mejor refugio**.",
      "No se trata de negar las dificultades, sino de recordar que no caminamos solos. Cuando elegimos confiar, nuestro corazón deja de vivir atado al miedo y comienza a descansar en la presencia de Dios.",
      "**El resultado de esa confianza es una buena relación con Dios.** Él no solo nos protege; nos acompaña, nos habla y nos fortalece en medio de cada temporada.",
      "La oración no es un ritual vacío. **Una oración verdadera atrae el mover de Dios** en nuestra vida diaria, en nuestra familia y en las decisiones que tomamos cada mañana.",
    ],
    subheading: "El Señor es mi abrigo",
    bulletPoints: [
      "Ora con sinceridad, aunque sean pocas palabras.",
      "Lee la Palabra y permite que Dios te hable primero.",
      "Confía en Él cuando la tormenta aún no ha pasado.",
    ],
    prayer:
      "Señor, gracias porque Tú eres mi refugio y mi morada. Hoy pongo mi confianza en Ti. Guarda mi corazón, mi familia y mi camino. Amén.",
  },
  {
    id: "dev-lagrimas",
    slug: "una-lagrimas-en-su-mejilla",
    title: "Una lágrima en su mejilla",
    description: "Dios ve cada lágrima y responde con compasión.",
    image: imageAssets.hands,
    category: "Consuelo",
    createdAt: "2026-07-03",
    updatedAt: "2026-07-03",
    featured: true,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "3 min",
    verse: "Salmo 56:8",
    summary: "Cuando el dolor es real, Dios no se queda en silencio.",
    scriptureQuote:
      "Mis huidas has contado; pon mis lágrimas en tu redoma. ¿No están ellas en tu libro? (Salmo 56:8)",
    publishedLabel: "VIERNES, 3 DE JULIO DE 2026",
    bodyParagraphs: [
      "A veces una sola lágrima dice más que mil palabras. Dios no la ignora. **Él guarda cada una con ternura** y camina contigo en los días más difíciles.",
    ],
    prayer: "Padre, gracias porque me ves y me consuelas. Amén.",
  },
  {
    id: "dev-palabra",
    slug: "si-leemos-la-palabra-dios-nos-habla",
    title: "Si leemos la palabra, Dios nos habla",
    description: "La Biblia no es solo información; es encuentro con Dios.",
    image: imageAssets.coffee,
    category: "Palabra",
    createdAt: "2026-07-02",
    updatedAt: "2026-07-02",
    featured: false,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "4 min",
    verse: "2 Timoteo 3:16",
    summary: "Cada lectura puede convertirse en una conversación viva con el Señor.",
    publishedLabel: "JUEVES, 2 DE JULIO DE 2026",
    bodyParagraphs: [
      "Cuando abrimos la Escritura con un corazón dispuesto, **Dios responde con dirección, paz y claridad** para el día que estamos viviendo.",
    ],
    prayer: "Señor, habla hoy a mi corazón por medio de tu Palabra. Amén.",
  },
  {
    id: "dev-oracion",
    slug: "viviendo-una-vida-de-oracion",
    title: "Viviendo una vida de oración",
    description: "La oración transforma lo ordinario en sagrado.",
    image: imageAssets.hands,
    category: "Oración",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
    featured: false,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "5 min",
    verse: "1 Tesalonicenses 5:17",
    summary: "Orar sin cesar es aprender a caminar con Dios en cada momento.",
    publishedLabel: "MIÉRCOLES, 1 DE JULIO DE 2026",
    bodyParagraphs: [
      "La oración no empieza cuando cerramos los ojos; empieza cuando reconocemos que **necesitamos a Dios en cada detalle** de la jornada.",
    ],
    prayer: "Jesús, enséñame a conversar contigo durante todo el día. Amén.",
  },
  {
    id: "dev-espiritual",
    slug: "lo-espiritual-se-reaviva",
    title: "Lo espiritual se reaviva",
    description: "Hay temporadas nuevas cuando volvemos al corazón de Dios.",
    image: imageAssets.sunset,
    category: "Renovación",
    createdAt: "2026-06-30",
    updatedAt: "2026-06-30",
    featured: false,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "4 min",
    verse: "Lamentaciones 3:22-23",
    summary: "Las misericordias de Dios se renuevan cada mañana.",
    publishedLabel: "MARTES, 30 DE JUNIO DE 2026",
    bodyParagraphs: [
      "Cuando lo espiritual se enfría, Dios no nos abandona. **Él reaviva, restaura y vuelve a encender el fuego** en quienes regresan a Su presencia.",
    ],
    prayer: "Espíritu Santo, reavíva mi vida y mi amor por Dios. Amén.",
  },
  {
    id: "dev-voluntad",
    slug: "al-despertar-busca-la-voluntad-de-dios",
    title: "Al despertar, busca la voluntad de Dios",
    description: "El primer pensamiento del día puede orientar todo lo demás.",
    image: imageAssets.nature,
    category: "Propósito",
    createdAt: "2026-06-29",
    updatedAt: "2026-06-29",
    featured: false,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "3 min",
    verse: "Salmo 143:8",
    summary: "Comenzar el día con Dios abre el corazón a su dirección.",
    publishedLabel: "LUNES, 29 DE JUNIO DE 2026",
    bodyParagraphs: [
      "Antes de revisar el teléfono o correr con la agenda, **detente un momento y pregunta: Señor, ¿qué quieres de mí hoy?**",
    ],
    prayer: "Dios, guía mis pasos desde esta mañana. Amén.",
  },
  {
    id: "dev-intencion",
    slug: "ingresa-tu-intencion-de-oracion",
    title: "Ingresa tu intención de oración",
    description: "Dios invita a acercarnos con confianza y expectativa.",
    image: imageAssets.bible,
    category: "Oración",
    createdAt: "2026-06-28",
    updatedAt: "2026-06-28",
    featured: false,
    status: "published",
    author: "Equipo Cristo Vive",
    readTime: "3 min",
    verse: "Filipenses 4:6",
    summary: "Presentar nuestras peticiones a Dios es un acto de fe.",
    publishedLabel: "DOMINGO, 28 DE JUNIO DE 2026",
    bodyParagraphs: [
      "No necesitas palabras perfectas. **Solo necesitas un corazón honesto** que confía en que Dios escucha y responde.",
    ],
    prayer: "Señor, pongo en tus manos lo que más necesito hoy. Amén.",
  },
];

export const devotionalCategories = [
  "Fe",
  "Esperanza",
  "Familia",
  "Oración",
  "Amor",
  "Propósito",
] as const;

export const featuredDevotional = devotionals.find((item) => item.isToday) ?? devotionals[0] ?? null;

export const todaysDevotional = featuredDevotional;

export const popularDevotionals = devotionals
  .filter((item) => !item.isToday)
  .slice(0, 6);

export const verseOfTheDay = {
  text: "Porque al SEÑOR, que es mi refugio, al Altísimo, has puesto como tu morada, no te sobrevendrá mal ni la plaga se acercará a tu tienda.",
  reference: "Salmo 91:9-10",
} as const;
