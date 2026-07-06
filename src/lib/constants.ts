export const APP_NAME = "Iglesia Cristo Vive";
export const APP_LEGAL_NAME = "Iglesia Cristo Vive · Asambleas de Dios";
export const APP_LOCALE = "es-MX";
export const APP_DEFAULT_LANGUAGE = "es";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cristovive.org";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
  max: 9999,
} as const;
