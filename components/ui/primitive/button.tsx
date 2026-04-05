import React, { useCallback } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { type VariantProps, cva } from "class-variance-authority";

import { colors } from "@/theme/colors";
import { cn } from "@/utils/clx.utils";

import { LeanText as Text } from "./lean-text";

const labelVariants = cva(
  "text-base-m font-medium text-dark-A100 text-center leading-none max-w-[95%]",
  {
    variants: {
      variant: {
        default: "text-dark-A100",
        destructive: "text-red-500",
        outline: "",
        secondary: "text-white",
        ghost: "text-primary-700",
        link: "",
        disabled: "text-grey-300",
        apple: "text-white",
        primary: "text-black",
      },
      size: {
        default: "",
        xs: "text-base-m",
        sm: "text-base-m",
        lg: "text-lg",
        icon: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
const buttonVariants = cva(
  "flex flex-row gap-3 justify-center items-center rounded-lg py-3 max-h-14 px-4",
  {
    variants: {
      variant: {
        default: "bg-green",
        destructive: "bg-red-50 border border-red-500",
        outline: "border border-input bg-white border border-grey-200",
        secondary: "bg-dark-A100",
        ghost: "hover:bg-accent ",
        link: "underline-offset-4 hover:underline",
        disabled: "bg-grey-100",
        apple: "bg-black rounded-3xl",
        primary: "bg-primary rounded-full py-4",
      },
      size: {
        default: "",
        xs: "h-10 rounded-md px-4",
        sm: "rounded-lg py-[6px] px-5",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends TouchableOpacityProps, VariantProps<typeof buttonVariants> {
  labelClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  title?: string;
}

const Button = React.forwardRef<typeof TouchableOpacity, ButtonProps>(
  (
    { className, loading, labelClassName, size, disabled, onPress, ...props },
    ref,
  ) => {
    const variant = disabled ? "disabled" : props.variant || "default";
    const getClassNames = useCallback(
      (className: string | undefined) => {
        return cn(buttonVariants({ variant, size, className }));
      },
      [variant, size, className, props.leftIcon, props.rightIcon],
    );
    const getLabelClassNames = useCallback(
      (className: string | undefined) => {
        const flexClassname =
          !props.leftIcon && !props.rightIcon ? "flex-1" : "";

        return cn(
          labelVariants({
            variant,
            size,
            className: cn(
              flexClassname,
              className,
              disabled && "text-grey-300",
            ),
          }),
        );
      },
      [variant, size, labelClassName, props.leftIcon, props.rightIcon],
    );

    const getLoadingColor = useCallback(() => {
      if (variant === "secondary") {
        return colors.foreground;
      }
      return colors.background;
    }, [variant]);

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}
        className={getClassNames(className)}
        style={variant === "primary" ? styles.primaryGlow : undefined}
      >
        {props.leftIcon && !loading && <View>{props.leftIcon}</View>}

        {loading ? (
          <View className="flex items-center justify-center w-full ">
            <ActivityIndicator
              size="small"
              color={getLoadingColor()}
              className="h-full"
            />
          </View>
        ) : (
          <Text className={getLabelClassNames(labelClassName)}>
            {props.children}
          </Text>
        )}
        {props.rightIcon && (
          <View className="absolute right-4">{props.rightIcon}</View>
        )}
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  primaryGlow: {
    shadowColor: "#00E676",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 18,
    elevation: 10,
  },
});

export { Button as PrimaryButton };
export type { ButtonProps as PrimaryButtonProps };
export default Button;
