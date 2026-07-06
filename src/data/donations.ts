import type { DonationTier } from "@/types";

export const donationTiers: DonationTier[] = [
  { id: "tier-100", amount: 100, label: "$100", featured: false },
  { id: "tier-200", amount: 200, label: "$200", featured: false },
  { id: "tier-500", amount: 500, label: "$500", featured: true },
  { id: "tier-1000", amount: 1000, label: "$1,000", featured: false },
  { id: "tier-2000", amount: 2000, label: "$2,000", featured: false },
];

export const donationCategories = [
  { id: "ofrenda", label: "Ofrenda general" },
  { id: "diezmo", label: "Diezmo" },
  { id: "misiones", label: "Misiones" },
  { id: "construccion", label: "Construcción y mejoras" },
  { id: "ayuda", label: "Ayuda social" },
] as const;

export const donationInfo = {
  title: "Tu generosidad transforma vidas",
  description:
    "Cada donativo impulsa ministerios, misiones locales y el cuidado de familias en Mazatlán.",
  methods: ["Tarjeta", "Transferencia SPEI", "OXXO Pay"] as const,
} as const;
