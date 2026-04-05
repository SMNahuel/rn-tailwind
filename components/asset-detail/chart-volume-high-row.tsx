import { memo } from "react";
import { Text, View } from "react-native";

import { formatUsdPrice } from "@/lib/formatAssetValue";
import type { Asset } from "@/types";

type ChartVolumeHighRowProps = {
  asset: Asset;
  volumeLabel: string;
  highValue: number;
  volumeLabelText: string;
  highLabelText: string;
};

const ChartVolumeHighRow = memo(function ChartVolumeHighRow({
  asset,
  volumeLabel,
  highValue,
  volumeLabelText,
  highLabelText,
}: ChartVolumeHighRowProps) {
  return (
    <View className="mt-5 flex-row px-6">
      <View className="flex-1">
        <Text className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {volumeLabelText}
        </Text>
        <Text className="mt-1 text-body font-semibold text-foreground">
          {volumeLabel}
        </Text>
      </View>
      <View className="flex-1 items-end">
        <Text className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {highLabelText}
        </Text>
        <Text className="mt-1 text-body font-semibold text-foreground">
          {formatUsdPrice(highValue, asset)}
        </Text>
      </View>
    </View>
  );
});

export default ChartVolumeHighRow;
