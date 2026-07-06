import type { Metadata } from "next";
import { APP_DEFAULT_LANGUAGE, APP_LOCALE, APP_NAME, SITE_URL } from "./constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description:
    "Una iglesia donde lo imposible se hace posible. Esperanza, comunidad y vida en Cristo en Mazatlán, Sinaloa.",
  keywords: [
    "iglesia",
    "Cristo Vive",
    "Asambleas de Dios",
    "Mazatlán",
    "comunidad",
    "fe",
    "esperanza",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  publisher: APP_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: APP_LOCALE,
    url: SITE_URL,
    siteName: APP_NAME,
    title: APP_NAME,
    description:
      "Una iglesia donde lo imposible se hace posible. Esperanza, comunidad y vida en Cristo.",
    images: [
      {
        url: "/images/logo-gris.png",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description:
      "Una iglesia donde lo imposible se hace posible. Esperanza, comunidad y vida en Cristo.",
    images: ["/images/logo-gris.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      [APP_DEFAULT_LANGUAGE]: SITE_URL,
    },
  },
  category: "religion",
};
