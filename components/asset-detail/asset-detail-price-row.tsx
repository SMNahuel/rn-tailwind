import { memo } from "react";
import { Text, View } from "react-native";

import { formatUsdPrice } from "@/lib/formatAssetValue";
import { cn } from "@/lib/utils";
import type { Asset } from "@/types";

type AssetDetailPriceRowProps = {
  asset: Asset;
};

const AssetDetailPriceRow = memo(function AssetDetailPriceRow({
  asset,
}: AssetDetailPriceRowProps) {
  const positive = asset.change >= 0;
  const pct = `${positive ? "+" : ""}${asset.change.toFixed(2)}%`;

  return (
    <View className="mt-4 flex-row flex-wrap items-baseline gap-2 px-6">
      <Text className="text-3xl font-bold tracking-tight text-foreground">
        {formatUsdPrice(asset.price, asset)}
      </Text>
      <Text
        className={cn(
          "text-body font-semibold",
          positive ? "text-primary" : "text-destructive",
        )}
      >
        {pct}
      </Text>
    </View>
  );
});

export default AssetDetailPriceRow;
