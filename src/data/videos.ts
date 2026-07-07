const SUPABASE_VIDEOS_BASE =
  "https://ymzqxpmiuoqbcsovwgaq.supabase.co/storage/v1/object/public/Videos/Videos";

export const HERO_VIDEO_URL =
  "https://ymzqxpmiuoqbcsovwgaq.supabase.co/storage/v1/object/public/Videos/Videos/inicio.mp4";

export const BAPTISMS_VIDEO_URL =
  "https://ymzqxpmiuoqbcsovwgaq.supabase.co/storage/v1/object/public/Videos/Videos/bautismos.mp4";

export const KIDS_MINISTRY_VIDEO_URL =
  "https://ymzqxpmiuoqbcsovwgaq.supabase.co/storage/v1/object/public/Videos/Videos/ninos.mp4";

export const videoAssets = {
  hero: HERO_VIDEO_URL,
  welcome: `${SUPABASE_VIDEOS_BASE}/saludos.mp4`,
  service: `${SUPABASE_VIDEOS_BASE}/servicio.mp4`,
  baptisms: BAPTISMS_VIDEO_URL,
  communityService: `${SUPABASE_VIDEOS_BASE}/serv%20comunitario.mp4`,
  salvation: `${SUPABASE_VIDEOS_BASE}/la%20salvacion.mp4`,
  reflection: `${SUPABASE_VIDEOS_BASE}/reflexion.mp4`,
  women: `${SUPABASE_VIDEOS_BASE}/mujeres.mp4`,
  womenCamp: `${SUPABASE_VIDEOS_BASE}/camp%20mujeres.mp4`,
  congregacion: `${SUPABASE_VIDEOS_BASE}/congregacion.mp4`,
  personalChurch: `${SUPABASE_VIDEOS_BASE}/personal%20iglesia.mp4`,
  kidsMinistry: KIDS_MINISTRY_VIDEO_URL,
  youthMinistry: `${SUPABASE_VIDEOS_BASE}/jovenes.mp4`,
} as const;

/** Misma URL que el hero (versión optimizada para carga). */
export const heroVideoLite = HERO_VIDEO_URL;

export type VideoAssetKey = keyof typeof videoAssets;

export type ChurchVideo = {
  id: VideoAssetKey;
  src: string;
  title: string;
  description: string;
  extendedDescription?: string;
  scripture?: string;
  reference?: string;
};

export const churchVideos: Record<VideoAssetKey, ChurchVideo> = {
  hero: {
    id: "hero",
    src: videoAssets.hero,
    title: "Bienvenida a Cristo Vive",
    description: "Un vistazo a la vida y el corazón de nuestra iglesia en Mazatlán.",
  },
  welcome: {
    id: "welcome",
    src: videoAssets.welcome,
    title: "Saludo de bienvenida",
    description: "Un mensaje personal para quienes nos visitan por primera vez.",
  },
  service: {
    id: "service",
    src: videoAssets.service,
    title: "Nuestro servicio dominical",
    description: "Así se vive un domingo en Cristo Vive: adoración, comunidad y la Palabra.",
  },
  baptisms: {
    id: "baptisms",
    src: videoAssets.baptisms,
    title: "Bautismos",
    description:
      "Celebramos cada bautismo como un momento sagrado: una vida que declara públicamente su fe en Jesucristo y su decisión de seguirle.",
    extendedDescription:
      "El bautismo no es solo una tradición, es un paso de obediencia y gozo. Simboliza que hemos muerto al pecado y resucitado con Cristo. En Cristo Vive acompañamos a cada persona con preparación, oración y una comunidad que celebra junta esta nueva etapa de fe.",
    scripture:
      "De cierto, de cierto os digo: El que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.",
    reference: "Juan 3:5",
  },
  communityService: {
    id: "communityService",
    src: videoAssets.communityService,
    title: "Servicio comunitario",
    description: "Llevando el amor de Cristo a las familias y comunidades de Mazatlán.",
  },
  salvation: {
    id: "salvation",
    src: videoAssets.salvation,
    title: "La salvación en Cristo",
    description: "Un mensaje de esperanza para quien busca un nuevo comienzo en Jesús.",
  },
  reflection: {
    id: "reflection",
    src: videoAssets.reflection,
    title: "Reflexión del día",
    description: "Un momento para meditar en la Palabra y escuchar la voz de Dios.",
  },
  women: {
    id: "women",
    src: videoAssets.women,
    title: "Ministerio de mujeres",
    description: "Mujeres que crecen juntas en fe, amistad y propósito.",
  },
  womenCamp: {
    id: "womenCamp",
    src: videoAssets.womenCamp,
    title: "Campamento de mujeres",
    description: "Un encuentro especial de comunión, adoración y renovación espiritual.",
  },
  congregacion: {
    id: "congregacion",
    src: videoAssets.congregacion,
    title: "Nuestra congregación",
    description: "La familia de Cristo Vive reunida en adoración y comunidad.",
  },
  personalChurch: {
    id: "personalChurch",
    src: videoAssets.personalChurch,
    title: "Vida en comunidad",
    description: "Encuentros cercanos donde crecemos juntos en fe y amistad.",
  },
  kidsMinistry: {
    id: "kidsMinistry",
    src: videoAssets.kidsMinistry,
    title: "Cristo Vive Kids",
    description: "Los más pequeños descubren a Jesús con alegría y creatividad.",
  },
  youthMinistry: {
    id: "youthMinistry",
    src: videoAssets.youthMinistry,
    title: "Ministerio de jóvenes",
    description: "La próxima generación creciendo en fe, propósito y comunidad.",
  },
};
