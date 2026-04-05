import { memo } from "react";
import { Text, View } from "react-native";

import { cn } from "@/lib/utils";
import type { Asset } from "@/types";

type AssetIdentityRowProps = {
  asset: Asset;
};

const AssetIdentityRow = memo(function AssetIdentityRow({
  asset,
}: AssetIdentityRowProps) {
  const badge = asset.symbol.split("/")[0] ?? asset.symbol;
  const initials = badge.slice(0, 2).toUpperCase();

  return (
    <View className="flex-row items-center gap-3 px-6">
      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary">
        <Text className="text-label font-bold text-primary-foreground">
          {initials}
        </Text>
      </View>
      <View className="flex-1">
        <Text className="text-headline-sm font-bold text-foreground">
          {asset.name}
        </Text>
      </View>
      <View
        className={cn(
          "rounded-lg border border-border bg-card px-2.5 py-1",
        )}
      >
        <Text className="text-label-xs font-semibold text-muted-foreground">
          {badge}
        </Text>
      </View>
    </View>
  );
});

export default AssetIdentityRow;
