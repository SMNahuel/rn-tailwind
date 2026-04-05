import React from "react";
import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";
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
