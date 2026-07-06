export type EntityStatus = "published" | "draft" | "archived";

export interface BaseEntity {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  status: EntityStatus;
}

export interface Pastor extends BaseEntity {
  role: string;
  bio?: string;
}

export interface Ministry extends BaseEntity {
  anchor?: string;
  video?: string;
}

export interface Event extends BaseEntity {
  date: string;
  time: string;
  location: string;
}

export interface Sermon extends BaseEntity {
  speaker: string;
  series: string;
  duration: string;
}

export interface Devotional extends BaseEntity {
  author: string;
  readTime: string;
  verse: string;
  summary: string;
  scriptureQuote?: string;
  publishedLabel?: string;
  bodyParagraphs?: string[];
  subheading?: string;
  bulletPoints?: string[];
  prayer?: string;
  isToday?: boolean;
}

export interface GalleryItem extends BaseEntity {
  type: "photo" | "video";
}

export interface Testimonial {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  status: EntityStatus;
  author: string;
  role: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  label: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavFeatured {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface NavDropdown {
  id: string;
  label: string;
  links: NavLink[];
  featured: NavFeatured;
}

export interface NavDirect {
  id: string;
  label: string;
  href: string;
  variant: "donate";
}

export interface ChurchValue {
  title: string;
  description: string;
}

export interface SocialLink {
  id: string;
  platform: "facebook" | "instagram" | "youtube";
  label: string;
  url: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}
