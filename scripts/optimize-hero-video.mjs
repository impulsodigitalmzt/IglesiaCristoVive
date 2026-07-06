/**
 * Comprime el video del hero para carga más rápida.
 * Requiere FFmpeg: https://ffmpeg.org/download.html
 *
 * Uso: npm run optimize:hero-video
 */
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const input = join(root, "public", "videos", "inicio1.mp4");
const output = join(root, "public", "videos", "inicio1-lite.mp4");

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit", shell: true });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (!existsSync(input)) {
  console.error(`No se encontró: ${input}`);
  process.exit(1);
}

console.log("Comprimiendo video del hero (puede tardar unos minutos)...\n");

// ~720p, sin audio, optimizado para fondo web (~5–10 MB típico)
run("ffmpeg", [
  "-y",
  "-i",
  input,
  "-an",
  "-vf",
  "scale='min(1280,iw)':-2",
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-crf",
  "28",
  "-movflags",
  "+faststart",
  "-pix_fmt",
  "yuv420p",
  output,
]);

console.log(`\nListo: public/videos/inicio1-lite.mp4`);
console.log("El sitio usará automáticamente la versión lite cuando exista.");
