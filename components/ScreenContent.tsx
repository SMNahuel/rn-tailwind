import React from "react";
import { Text, View } from "react-native";
type ScreenContentProps = {
  title: string;
  path: string;
};

export function ScreenContent({ title, path }: ScreenContentProps) {
  return (
    <View className="flex-1 items-center justify-center gap-2 p-6">
      <Text className="text-2xl font-bold text-neutral-900">{title}</Text>
      <Text className="text-sm text-neutral-500">{path}</Text>
    </View>
  );
}
