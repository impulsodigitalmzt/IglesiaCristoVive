import type { Transition } from "framer-motion";

export const durations = {
  fast: 0.2,
  normal: 0.35,
  medium: 0.45,
  slow: 0.6,
} as const;

export const easings = {
  default: [0.4, 0, 0.2, 1] as const,
  in: [0.4, 0, 1, 1] as const,
  out: [0, 0, 0.2, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const transitions = {
  fast: { duration: durations.fast, ease: easings.out } satisfies Transition,
  normal: { duration: durations.normal, ease: easings.out } satisfies Transition,
  medium: { duration: durations.medium, ease: easings.out } satisfies Transition,
  slow: { duration: durations.slow, ease: easings.out } satisfies Transition,
} as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

export const motionReduced = {
  initial: false,
  animate: false,
} as const;

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
} as const;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
} as const;

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.normal },
} as const;
