import { memo, type ReactNode } from "react";
import { Text, View } from "react-native";

import { cn } from "@/lib/utils";

export type AuthHeaderProps = {
  /** Marca (ej. logotipo “EF”). */
  brand: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

/**
 * Cabecera de pantallas de auth: marca centrada + título + subtítulo opcional.
 */
export const AuthHeader = memo(function AuthHeader({
  brand,
  title,
  subtitle,
  className,
}: AuthHeaderProps) {
  return (
    <View className={cn("items-center", className)}>
      <View className="mb-6">{brand}</View>
      <Text
        accessibilityRole="header"
        className="mb-2 text-center text-headline-sm text-foreground"
      >
        {title}
      </Text>
      {subtitle ? (
        <Text className="text-center text-body text-muted-foreground">
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
});
