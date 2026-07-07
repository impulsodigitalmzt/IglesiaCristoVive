type NavigatorConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

export function shouldSkipHeroVideo() {
  if (typeof window === "undefined") return true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const connection = (navigator as NavigatorConnection).connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
    return true;
  }

  return false;
}

export function pickHeroVideoSrc(fullSrc: string, liteSrc?: string) {
  return liteSrc ?? fullSrc;
}

/** Tiempo máximo de espera antes de mostrar la página aunque el video no haya cargado. */
export const HERO_VIDEO_BOOT_TIMEOUT_MS = 8_000;
