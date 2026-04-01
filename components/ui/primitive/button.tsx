import { memo, type ReactNode } from "react";
import { Platform, Pressable, Text, type PressableProps } from "react-native";

import { cn } from "@/lib/utils";
import { colors } from "@/theme/colors";

const glowStyle = Platform.select({
  ios: {
    shadowColor: colors.primary.DEFAULT,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 14,
  },
  android: {
    elevation: 10,
    shadowColor: colors.primary.DEFAULT,
  },
  default: {},
});

export type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
  textClassName?: string;
} & Omit<PressableProps, "children">;

/**
 * Botón principal pill con acento primary y sombra tipo glow (iOS/Android).
 */
export const PrimaryButton = memo(function PrimaryButton({
  children,
  className,
  textClassName,
  disabled,
  ...pressableProps
}: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      className={cn(
        "min-h-[52px] items-center justify-center rounded-full bg-primary px-6 active:opacity-90",
        disabled && "opacity-50",
        className,
      )}
      style={glowStyle}
      {...pressableProps}
    >
      <Text
        className={cn(
          "text-center text-body font-semibold text-primary-foreground",
          textClassName,
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
});
