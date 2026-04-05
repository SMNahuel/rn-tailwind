import { memo } from "react";
import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";

import { cn } from "@/lib/utils";

export type DividerWithLabelProps = {
  label: string;
  className?: string;
};

/**
 * Separador horizontal con texto centrado (ej. “OR CONNECT WITH”).
 */
export const DividerWithLabel = memo(function DividerWithLabel({
  label,
  className,
}: DividerWithLabelProps) {
  return (
    <View className={cn("flex-row items-center gap-3 py-2", className)}>
      <View className="h-px flex-1 bg-border" />
      <Text className="text-label-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </Text>
      <View className="h-px flex-1 bg-border" />
    </View>
  );
});
