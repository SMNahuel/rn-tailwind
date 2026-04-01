/**
 * Paleta dark de la app (guía: primary #00E676, secondary #2979FF, tertiary #D4FF00, neutral base #0A0C10).
 * Usar con clases Tailwind (`bg-background`, `text-primary`, etc.) o importar valores para StyleSheet.
 */
export const colors = {
  background: "#0A0C10",
  foreground: "#FFFFFF",

  card: "#14171C",
  "card-foreground": "#FFFFFF",

  /** Texto principal de párrafos (gris claro) */
  muted: "#A8B0BC",
  /** Texto secundario / captions (gris medio) */
  "muted-foreground": "#6B7380",

  /** Superficie de inputs (más oscura que la card) */
  input: "#0E1014",
  "input-foreground": "#E8EBEF",

  border: "#2A333F",
  "border-subtle": "rgba(255, 255, 255, 0.08)",
  ring: "#00E676",

  primary: {
    DEFAULT: "#00E676",
    foreground: "#000000",
    50: "#E8FFF4",
    100: "#C5FFE0",
    200: "#8FFFC4",
    300: "#57E895",
    400: "#2EE87A",
    500: "#00E676",
    600: "#00C965",
    700: "#00A554",
    800: "#008044",
    900: "#005C32",
  },

  secondary: {
    DEFAULT: "#2979FF",
    foreground: "#FFFFFF",
    50: "#E8F1FF",
    100: "#C5DCFF",
    200: "#8FBCFF",
    300: "#5799FF",
    400: "#3D87FF",
    500: "#2979FF",
    600: "#1F63D4",
    700: "#1850AD",
    800: "#123D85",
    900: "#0C2A5C",
  },

  tertiary: {
    DEFAULT: "#D4FF00",
    foreground: "#0A0C10",
    50: "#F9FFE8",
    100: "#F0FFC5",
    200: "#E0FF8F",
    300: "#D4FF57",
    400: "#D4FF20",
    500: "#D4FF00",
    600: "#B8D900",
    700: "#96B000",
    800: "#748700",
    900: "#526000",
  },

  neutral: {
    50: "#F5F6F8",
    100: "#E8EBEF",
    200: "#D1D7DE",
    300: "#B4BDC8",
    400: "#8B97A8",
    500: "#5C6B7F",
    600: "#3D4A5C",
    700: "#2A333F",
    800: "#1F2630",
    900: "#14171C",
    950: "#0A0C10",
  },

  destructive: {
    DEFAULT: "#FF5252",
    foreground: "#0A0C10",
  },

  /** Track de barras de progreso */
  "progress-track": "#1F2630",
} as const;

export type AppColors = typeof colors;
