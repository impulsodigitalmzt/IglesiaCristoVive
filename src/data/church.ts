import { imageAssets } from "./images";
import { HERO_VIDEO_URL, videoAssets } from "./videos";

export const church = {
  name: "Iglesia Cristo Vive",
  legalName: "Iglesia Cristo Vive · Asambleas de Dios",
  slogan: "Donde lo imposible se hace posible",
  description:
    "Un lugar donde encontrarás esperanza, propósito y una comunidad que camina contigo.",
  address: "Toma de Agua Prieta 82, Francisco Villa, 82127 Mazatlán, Sin., México",
  city: "Mazatlán, Sinaloa",
  phone: "+52 (669) 982-1040",
  whatsapp: "+526699821040",
  email: "info@cristovive.org",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5841798472684!2d-106.42944012408302!3d23.258213907492436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f53a49c8dc8b3%3A0x549e60e45ac47a7b!2sIglesia%20Cristo%20Vive%20Asambleas%20de%20Dios!5e0!3m2!1ses-419!2smx!4v1783149472291!5m2!1ses-419!2smx",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=23.2582139,-106.4294401&travelmode=driving",
  googleReviews: {
    rating: 5.0,
    count: 11,
    url: "https://www.google.com/maps/place/Iglesia+Cristo+Vive+Asambleas+de+Dios",
  },
  schedule: {
    sunday: "Domingo 10:00 AM y 12:00 PM",
    wednesday: "Miércoles 7:00 PM",
  },
  heroVideo: HERO_VIDEO_URL,
  heroVideoLite: HERO_VIDEO_URL,
  heroPoster: imageAssets.heroVideoPoster,
  logoWhite: imageAssets.logoWhite,
  logoGray: imageAssets.logoGray,
} as const;

export const churchValues = [
  { title: "Amor", description: "Amamos como Cristo nos amó, sin condiciones." },
  { title: "Servicio", description: "Servimos a otros con humildad y generosidad." },
  { title: "Excelencia", description: "Honramos a Dios con lo mejor de nosotros." },
  { title: "Integridad", description: "Vivimos con transparencia y verdad." },
  { title: "Compasión", description: "Acompañamos a quienes más lo necesitan." },
  { title: "Unidad", description: "Somos una familia que camina junta." },
] as const;

export const pastorWelcome = {
  title: "Bienvenido a Cristo Vive",
  message:
    "Creemos que Dios tiene un propósito para cada persona. Nuestra iglesia es un lugar donde las familias crecen, los jóvenes encuentran dirección y cada persona descubre una nueva esperanza.",
  extendedMessage:
    "Sin importar tu pasado, tu edad o lo que hayas vivido, aquí encontrarás un espacio seguro para adorar, aprender y pertenecer. Queremos que te sientas en casa desde el primer momento y que descubras que en Cristo hay vida, perdón y un futuro lleno de sentido.",
  pastorName: "Pastor Principal",
  pastorRole: "Iglesia Cristo Vive",
  image: imageAssets.pastor,
  video: videoAssets.welcome,
  videoPoster: imageAssets.pastor,
} as const;

export const churchHistory = {
  title: "Nuestra historia",
  content:
    "Desde nuestros inicios, hemos sido una comunidad que cree en lo imposible hecho posible.",
} as const;

export const churchMission = {
  mission:
    "Guiar a hombres, mujeres y familias hacia una relación auténtica y personal con Jesucristo, enseñándoles la Palabra de Dios, acompañándolos en su crecimiento espiritual y equipándolos para vivir su fe con propósito cada día.",
  vision:
    "Ser una iglesia viva que transforma comunidades mediante el amor de Cristo: una familia de fe que adora con pasión, sirve con generosidad y lleva esperanza a Mazatlán y más allá.",
  headline: "Enfocados en Jesús · Llenos de fe · Amando a otros",
  summary:
    "Somos una comunidad de seguidores de Jesús que adoran a Dios, crecen como discípulos y alcanzan a Mazatlán y al mundo con el evangelio.",
} as const;

export const churchScripture = {
  text: "Id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo, enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo.",
  reference: "Mateo 28:19-20",
} as const;

export const churchTimeline = [
  {
    year: "2008",
    title: "Los primeros pasos",
    description: "Un grupo pequeño comenzó a reunirse con fe y visión en Mazatlán.",
    image: imageAssets.community,
  },
  {
    year: "2014",
    title: "Nuevo hogar",
    description: "Inauguramos nuestro edificio en Francisco Villa, un espacio para crecer.",
    image: imageAssets.building,
  },
  {
    year: "2019",
    title: "Generaciones unidas",
    description: "Ministerios para niños, jóvenes y familias florecieron en comunidad.",
    image: imageAssets.family,
  },
  {
    year: "2024",
    title: "Impacto en la ciudad",
    description: "Más familias, más esperanza y un compromiso renovado con Mazatlán.",
    image: imageAssets.cosecha,
  },
] as const;
