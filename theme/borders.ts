/**
 * Radios y grosores de borde (cards y botones ~ rounded-xl / rounded-2xl, inputs con borde fino 1px).
 */
export const borderRadius = {
  /** Cards y paneles grandes */
  card: "1rem",
  /** Botones y campos */
  button: "0.75rem",
  input: "0.75rem",
  /** Chips / iconos en nav activo */
  pill: "9999px",
} as const;

export const borderWidth = {
  DEFAULT: "1px",
  /** Énfasis sutil */
  0: "0px",
  2: "2px",
} as const;

export type AppBorderRadius = typeof borderRadius;
export type AppBorderWidth = typeof borderWidth;
