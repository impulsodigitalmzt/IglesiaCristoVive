export const A11Y = {
  skipLinkId: "main-content",
  navLabel: "Navegación principal",
  footerLabel: "Pie de página",
  searchLabel: "Buscar en el sitio",
} as const;

export function getAriaLabel(label: string, context?: string) {
  return context ? `${label} — ${context}` : label;
}
