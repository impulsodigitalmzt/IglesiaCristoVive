import { church } from "./church";
import { imageAssets } from "./images";

export const homeHero = {
  titleLine1: "DONDE LO",
  titleLine2: "IMPOSIBLE",
  titleLine3: "SE HACE",
  titleLine4: "POSIBLE",
  subtitle: church.description,
  primaryCta: { label: "Planear mi visita", href: "/planea-tu-visita" },
  secondaryCta: { label: "Ver transmisión", href: "#predicaciones" },
} as const;

export const homeFinalCta = {
  title: "Queremos conocerte",
  description:
    "Tu historia importa. Ven tal como eres y descubre una comunidad que camina contigo.",
  extendedDescription:
    "En Cristo Vive creemos que cada persona trae algo único. No importa de dónde vengas ni qué hayas vivido: aquí encontrarás un espacio seguro para conocer a Dios, hacer amigos y crecer en fe.",
  closingNote:
    "Los domingos celebramos juntos, los miércoles profundizamos en la Palabra, y durante la semana hay ministerios para niños, jóvenes y familias. Queremos que tu primera visita sea sencilla, acogedora y llena de paz.",
  quote:
    "Los no creyentes no leen la Biblia, te leen a ti. Así que sé un reflejo de Cristo a donde quiera que vayas.",
  buttonLabel: "Planea tu visita",
  buttonHref: "/planea-tu-visita",
  secondaryButtonLabel: "Contáctanos",
  secondaryButtonHref: "/contacto",
  image: imageAssets.community,
} as const;

export const homeDonations = {
  eyebrow: "Generosidad",
  title: "Tu generosidad transforma vidas",
  description:
    "Cada donativo impulsa ministerios, misiones locales y el cuidado de familias en Mazatlán.",
  impact: [
    { value: "120+", label: "Familias apoyadas al año" },
    { value: "8", label: "Ministerios activos" },
    { value: "100%", label: "Transparencia en el uso" },
  ],
  buttonLabel: "Quiero donar",
  buttonHref: "/donativos",
} as const;

export const homeVisit = {
  eyebrow: "Planea tu visita",
  title: "Te esperamos con los brazos abiertos",
  description:
    "Queremos que tu primera visita sea sencilla, acogedora y llena de paz.",
  highlights: [
    {
      title: "Estacionamiento",
      description: "Contamos con estacionamiento gratuito frente al templo.",
    },
    {
      title: "Vístete cómodo",
      description: "Ven como eres. No hay código de vestimenta.",
    },
    {
      title: "Cristo Vive Kids",
      description: "Tus hijos estarán seguros en un ambiente diseñado para ellos.",
    },
    {
      title: "Te recibiremos",
      description: "Nuestro equipo de bienvenida te acompañará desde la puerta.",
    },
  ],
  buttonLabel: "Ver guía completa",
  buttonHref: "/planea-tu-visita",
  image: imageAssets.welcome,
} as const;
