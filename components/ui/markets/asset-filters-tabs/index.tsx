import { Pressable, ScrollView } from "react-native";

import { LeanText as Text } from "@/components/ui/primitive/lean-text";
import { cn } from "@/lib/utils";
import { AssetFilterType } from "@/types";

type AssetFiltersTabsProps = {
  filters: { key: AssetFilterType; label: string }[];
  activeFilter: AssetFilterType;
  onFilterPress: (key: AssetFilterType) => void;
};
export default function AssetFiltersTabs({
  filters,
  activeFilter,
  onFilterPress,
}: AssetFiltersTabsProps) {
  return (
    <ScrollView
      horizontal
      className="mb-5"
      contentContainerStyle={{ paddingHorizontal: 24 }}
      showsHorizontalScrollIndicator={false}
    >
      {filters.map(({ key, label }, idx) => {
        const isActive = activeFilter === key;
        return (
          <Pressable
            key={key}
            accessibilityRole="button"
            onPress={() => onFilterPress(key)}
            style={{ marginRight: idx < filters.length - 1 ? 8 : 0 }}
            className={cn(
              "rounded-full px-4 py-2",
              isActive ? "bg-primary" : "border border-border bg-transparent",
            )}
          >
            <Text
              className={cn(
                "text-label font-medium",
                isActive ? "text-primary-foreground" : "text-foreground",
              )}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
