import { memo } from "react";

import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";

import { cn } from "@/lib/utils";
import { Asset } from "@/types";

const RowItem = memo(function RowItem({ item }: { item: Asset }) {
  const avatarLetters = item.symbol.slice(0, 2).toUpperCase();
  console.log(JSON.stringify(item, null, 2));
  return (
    <View className="flex-row items-center justify-between py-3">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-card">
          <Text className="text-label-xs font-bold text-foreground">
            {avatarLetters}
          </Text>
        </View>
        <View>
          <Text className="text-body font-semibold text-foreground">
            {item.name}
          </Text>
          <Text className="text-label-xs text-muted">
            {item.symbol} · {item.type}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-body font-semibold text-foreground">
          ${item.price.toFixed(2)}
        </Text>
        <Text
          className={cn(
            "text-label-xs font-medium",
            item.change === undefined
              ? "text-muted"
              : item.change >= 0
                ? "text-primary"
                : "text-destructive",
          )}
        >
          {item.change !== undefined
            ? `${item.change >= 0 ? "▲" : "▼"} ${Math.abs(item.change).toFixed(2)}%`
            : "—"}
        </Text>
      </View>
    </View>
  );
});

export default RowItem;
