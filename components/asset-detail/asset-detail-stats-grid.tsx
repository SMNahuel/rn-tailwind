import { memo } from "react";
import { View } from "react-native";

import type { DetailStatItem } from "@/data/assetDetailMock";

import DetailStatCard from "./detail-stat-card";

type AssetDetailStatsGridProps = {
  stats: DetailStatItem[];
  labelForKey: (key: string) => string;
};

const AssetDetailStatsGrid = memo(function AssetDetailStatsGrid({
  stats,
  labelForKey,
}: AssetDetailStatsGridProps) {
  return (
    <View className="mt-6 flex-row flex-wrap gap-3 px-6">
      {stats.map((s) => (
        <DetailStatCard
          key={s.labelKey}
          label={labelForKey(s.labelKey)}
          value={s.value}
        />
      ))}
    </View>
  );
});

export default AssetDetailStatsGrid;
