import { borderRadius, borderWidth } from "./borders";
import { colors } from "./colors";
import { fontSizes } from "./typography";

/**
 * Objeto `theme.extend` para Tailwind / NativeWind.
 */
export const themeExtend = {
  colors,
  fontSize: fontSizes,
  borderRadius: {
    ...borderRadius,
  },
  borderWidth: {
    ...borderWidth,
  },
};
