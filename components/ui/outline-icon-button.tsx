import { memo, type ReactNode } from "react";
import { Pressable, type PressableProps } from "react-native";
import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";
import { cn } from "@/lib/utils";

export type OutlineIconButtonProps = {
  icon: ReactNode;
  label: string;
  className?: string;
} & Omit<PressableProps, "children">;

/**
 * Botón secundario con borde sutil, icono y texto (OAuth, acciones alternativas).
 */
export const OutlineIconButton = memo(function OutlineIconButton({
  icon,
  label,
  className,
  disabled,
  ...pressableProps
}: OutlineIconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      className={cn(
        "min-h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 active:opacity-90",
        disabled && "opacity-50",
        className,
      )}
      {...pressableProps}
    >
      <View>{icon}</View>
      <Text className="text-body font-medium text-foreground">{label}</Text>
    </Pressable>
  );
});
