import { forwardRef, memo, type ReactNode } from "react";
import { Text, TextInput, View, type TextInputProps } from "react-native";

import { cn } from "@/lib/utils";

export type UnderlinedInputProps = {
  label: string;
  /** Contenido a la izquierda del campo (icono). */
  leftIcon?: ReactNode;
  /** Accesorio alineado a la derecha del label (ej. enlace "Forgot"). */
  labelRightAccessory?: ReactNode;
  containerClassName?: string;
  className?: string;
} & TextInputProps;

/**
 * Campo con borde inferior tipo “underline”, label en mayúsculas y tracking amplio.
 */
export const UnderlinedInput = memo(
  forwardRef<TextInput, UnderlinedInputProps>(function UnderlinedInput(
    {
      label,
      leftIcon,
      labelRightAccessory,
      containerClassName,
      className,
      editable = true,
      ...inputProps
    },
    ref,
  ) {
    return (
      <View className={cn("w-full", containerClassName)}>
        <View className="mb-2 flex-row items-center justify-between">
          <Text
            accessibilityRole="text"
            className="text-label-xs uppercase tracking-widest text-muted-foreground"
          >
            {label}
          </Text>
          {labelRightAccessory}
        </View>
        <View
          className={cn(
            "flex-row items-center border-b border-border pb-1",
            !editable && "opacity-50",
          )}
        >
          {leftIcon ? <View className="mr-3">{leftIcon}</View> : null}
          <TextInput
            ref={ref}
            editable={editable}
            placeholderTextColor="#6B7380"
            className={cn(
              "min-h-[44px] flex-1 py-1 text-body text-foreground",
              className,
            )}
            {...inputProps}
          />
        </View>
      </View>
    );
  }),
);
