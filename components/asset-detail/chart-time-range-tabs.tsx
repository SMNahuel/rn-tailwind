import { memo } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { cn } from "@/lib/utils";
import type { ChartTimeRange } from "@/types";

export type TimeRangeTab = { key: ChartTimeRange; label: string };

type ChartTimeRangeTabsProps = {
  ranges: TimeRangeTab[];
  active: ChartTimeRange;
  onChange: (key: ChartTimeRange) => void;
};

const ChartTimeRangeTabs = memo(function ChartTimeRangeTabs({
  ranges,
  active,
  onChange,
}: ChartTimeRangeTabsProps) {
  return (
    <ScrollView
      horizontal
      className="mt-5 max-h-12"
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row gap-2 px-6 pb-1">
        {ranges.map(({ key, label }) => {
          const isActive = active === key;
          return (
            <Pressable
              key={key}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              className={cn(
                "rounded-full px-4 py-2",
                isActive ? "bg-primary" : "border border-border bg-card",
              )}
              onPress={() => onChange(key)}
            >
              <Text
                className={cn(
                  "text-label-xs font-semibold",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground",
                )}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
});

export default ChartTimeRangeTabs;
