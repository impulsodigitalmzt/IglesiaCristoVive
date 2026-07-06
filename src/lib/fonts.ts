import { Inter, Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Alias legado — los títulos usan Playfair (estilo Course Stack) */
export const montserrat = playfair;

export const fontVariables = `${playfair.variable} ${inter.variable}`;
