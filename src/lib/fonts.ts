import { Inter, Montserrat } from "next/font/google";

/** Títulos — geométrica sans-serif alineada al logotipo Cristo Vive */
export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const fontVariables = `${montserrat.variable} ${inter.variable}`;
