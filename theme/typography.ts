/**
 * Escala tipográfica dark: headline (blanco, peso fuerte), body (gris claro), label (gris medio).
 * Mapeada a `fontSize` de Tailwind: `text-headline`, `text-body`, `text-label`.
 */
export const fontSizes = {
  headline: ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }] as [
    string,
    { lineHeight: string; fontWeight: string },
  ],
  "headline-sm": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }] as [
    string,
    { lineHeight: string; fontWeight: string },
  ],
  body: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }] as [
    string,
    { lineHeight: string; fontWeight: string },
  ],
  "body-sm": ["0.9375rem", { lineHeight: "1.4375rem", fontWeight: "400" }] as [
    string,
    { lineHeight: string; fontWeight: string },
  ],
  label: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }] as [
    string,
    { lineHeight: string; fontWeight: string },
  ],
  "label-xs": ["0.75rem", { lineHeight: "1rem", fontWeight: "500" }] as [
    string,
    { lineHeight: string; fontWeight: string },
  ],
} as const;

export type AppFontSizes = typeof fontSizes;
