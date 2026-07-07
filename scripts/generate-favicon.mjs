import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public", "images", "logo-gris.png");
const appDir = join(root, "src", "app");

/** Fondo del sitio (theme) para el favicon en pestañas claras */
const ICON_BACKGROUND = { r: 245, g: 239, b: 230, alpha: 1 };

async function createEmblemPipeline() {
  const meta = await sharp(logoPath).metadata();
  if (!meta.width || !meta.height) {
    throw new Error("No se pudo leer el logo.");
  }

  const cropHeight = Math.round(meta.height * 0.56);

  return sharp(logoPath)
    .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
    .resize(512, 512, {
      fit: "contain",
      background: ICON_BACKGROUND,
    });
}

async function generateFavicon() {
  await mkdir(appDir, { recursive: true });

  const emblem = await createEmblemPipeline();

  const png16 = await emblem.clone().resize(16, 16).png().toBuffer();
  const png32 = await emblem.clone().resize(32, 32).png().toBuffer();
  const png48 = await emblem.clone().resize(48, 48).png().toBuffer();

  await writeFile(join(appDir, "favicon.ico"), await toIco([png16, png32, png48]));
  await emblem.clone().resize(32, 32).png().toFile(join(appDir, "icon.png"));
  await emblem.clone().resize(180, 180).png().toFile(join(appDir, "apple-icon.png"));

  console.log("Favicon generado en src/app/");
  console.log("  - favicon.ico");
  console.log("  - icon.png");
  console.log("  - apple-icon.png");
}

generateFavicon().catch((error) => {
  console.error(error);
  process.exit(1);
});
