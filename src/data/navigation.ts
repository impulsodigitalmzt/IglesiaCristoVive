import type { NavDirect, NavDropdown } from "@/types";
import { imageAssets } from "./images";
import { youtubeChannel } from "./social";

const featuredImages = {
  visit: imageAssets.welcome,
  kids: imageAssets.kids,
  watch: imageAssets.worship,
} as const;

export const megaMenuNavigation: NavDropdown[] = [
  {
    id: "nuevo-aqui",
    label: "Nuevo aquí",
    links: [
      { label: "Planea tu visita", href: "/planea-tu-visita" },
      { label: "Horarios y ubicación", href: "/contacto" },
      { label: "Conócenos", href: "/nosotros" },
      { label: "Nuestra historia", href: "/nosotros#historia" },
      { label: "Misión y visión", href: "/nosotros#mision" },
    ],
    featured: {
      title: "Tu primera vez",
      description: "Descubre cómo es un domingo en Cristo Vive.",
      image: featuredImages.visit,
      href: "/planea-tu-visita",
    },
  },
  {
    id: "ver",
    label: "Ver",
    links: [
      { label: "Último mensaje", href: "/#predicaciones" },
      { label: "Predicaciones", href: "/predicaciones" },
      { label: "Devocionales", href: "/devocionales" },
      { label: "Canal de YouTube", href: youtubeChannel.url },
    ],
    featured: {
      title: "Ver en YouTube",
      description: "Mensajes recientes y transmisiones de Cristo Vive.",
      image: featuredImages.watch,
      href: youtubeChannel.url,
    },
  },
  {
    id: "ministerios",
    label: "Ministerios",
    links: [
      { label: "Cristo Vive Kids", href: "/ministerios#kids" },
      { label: "Jóvenes", href: "/ministerios#jovenes" },
      { label: "Comunidades en Casa", href: "/ministerios#casas" },
      { label: "Matrimonios", href: "/ministerios#matrimonios" },
      { label: "Ver todos", href: "/ministerios" },
    ],
    featured: {
      title: "Cristo Vive Kids",
      description: "Un espacio seguro y divertido para la próxima generación.",
      image: featuredImages.kids,
      href: "/ministerios#kids",
    },
  },
];

export const donateNavItem: NavDirect = {
  id: "donate",
  label: "Dar",
  href: "/donativos",
  variant: "donate",
};

export const contactNavItem = {
  id: "contact",
  label: "Contáctanos",
  href: "/contacto",
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  ...megaMenuNavigation.flatMap((item) => item.links),
  { href: contactNavItem.href, label: contactNavItem.label },
  { href: donateNavItem.href, label: donateNavItem.label },
] as const;

export function isNavItemActive(pathname: string, href: string) {
  if (href.startsWith("http") || href.startsWith("#")) return false;
  if (href === "/") return pathname === "/";

  const basePath = href.split("#")[0] ?? href;
  if (!basePath || basePath === "/") return pathname === "/";

  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}

export function isDropdownActive(pathname: string, item: NavDropdown) {
  return item.links.some((link) => isNavItemActive(pathname, link.href));
}
