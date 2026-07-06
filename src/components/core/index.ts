/**
 * Core UI — Iglesia Cristo Vive
 * Capa composable reutilizable para todas las páginas.
 */

// Layout
export {
  AnimatedGradient,
  BackgroundPattern,
  Container,
  Divider,
  HeroWrapper,
  MaxWidthContainer,
  PageContainer,
  Section,
  Spacing,
} from "@/components/layout";

// Sections
export {
  CTA,
  SectionContent,
  SectionSubtitle,
  SectionTitle,
} from "@/components/sections";

// Navigation
export { AnimatedLink, Breadcrumb, type BreadcrumbItem } from "@/components/navigation";

// Shared
export { IconContainer } from "@/components/shared";

// Cards
export {
  GlassCard,
  HoverCard,
  QuoteCard,
  StatisticCard,
  VerseCard,
} from "@/components/cards";

// Feedback
export { EmptyState, LoadingState } from "@/components/feedback";

// Animations
export {
  AnimatedCounter,
  FadeIn,
  PageTransition,
  ScrollReveal,
} from "@/components/animations";

// Design System primitives (re-exported for convenience)
export {
  Badge,
  Button,
  Display,
  Eyebrow,
  Heading,
  Icon,
  ImageWrapper,
  Tag,
  Text,
  VideoWrapper,
} from "@/components/ui";

export type { ButtonProps } from "@/components/ui/button";
export type { ImageWrapperProps } from "@/components/ui/image";
export type { VideoWrapperProps } from "@/components/ui/video";
