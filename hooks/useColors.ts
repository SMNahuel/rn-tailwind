import { useColorScheme } from "nativewind";
import { colors } from "@/theme/colors";

/**
 * Hook mínimo para obtener valores de color en JS.
 * Usar SOLO en props que no aceptan className:
 *   - color= de MaterialCommunityIcons
 *   - trackColor / thumbColor de Switch
 *   - placeholderTextColor de TextInput
 *
 * Para todo lo demás usa clases Tailwind (bg-background, text-muted, etc.)
 */
export function useColors() {
  const { colorScheme } = useColorScheme();
  const isLight = colorScheme === "light";

  return {
    foreground: isLight ? colors.foreground : colors.foreground,
    muted: isLight ? colors.muted : colors.muted,
    mutedForeground: isLight
      ? colors["muted-foreground"]
      : colors["muted-foreground"],
    border: isLight ? colors.border : colors.border,
    primary: colors.primary.DEFAULT,
    primaryForeground: colors.primary.foreground,
    destructive: colors.destructive.DEFAULT,
  } as const;
}
