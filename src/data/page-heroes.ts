import { imageAssets } from "./images";

/** Imágenes de fondo para el hero de cada página interior */
export const pageHeroImages = {
  nosotros: imageAssets.comunidad,
  ministerios: imageAssets.ministerio,
  eventos: imageAssets.evento,
  predicaciones: imageAssets.worship,
  devocionales: imageAssets.bible,
  donativos: imageAssets.hands,
  contacto: imageAssets.welcome,
  visita: imageAssets.building,
  privacidad: imageAssets.nature,
} as const;
