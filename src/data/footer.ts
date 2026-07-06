import type { FooterLinkGroup } from "@/types";

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Nuevo aquí",
    links: [
      { label: "Planea tu visita", href: "/planea-tu-visita" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Ver",
    links: [
      { label: "Predicaciones", href: "/predicaciones" },
      { label: "Devocionales", href: "/devocionales" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  {
    title: "Ministerios",
    links: [
      { label: "Cristo Vive Kids", href: "/ministerios#kids" },
      { label: "Jóvenes", href: "/ministerios#jovenes" },
      { label: "Ver todos", href: "/ministerios" },
      { label: "Donar", href: "/donativos" },
    ],
  },
];
