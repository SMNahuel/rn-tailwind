import { memo } from "react";
import { Text, View } from "react-native";

import type { MarketInsightMock } from "@/data/assetDetailMock";

import MarketInsightCard from "./market-insight-card";

type AssetMarketInsightsSectionProps = {
  title: string;
  insights: MarketInsightMock[];
  textFor: (insight: MarketInsightMock) => {
    category: string;
    headline: string;
    timeAgo: string;
  };
};

const AssetMarketInsightsSection = memo(function AssetMarketInsightsSection({
  title,
  insights,
  textFor,
}: AssetMarketInsightsSectionProps) {
  return (
    <View className="mt-8 px-6">
      <Text className="text-headline-sm font-bold text-foreground">{title}</Text>
      <View className="mt-4">
        {insights.map((insight) => {
          const t = textFor(insight);
          return (
            <MarketInsightCard
              key={insight.id}
              category={t.category}
              headline={t.headline}
              timeAgo={t.timeAgo}
            />
          );
        })}
      </View>
    </View>
  );
});

export default AssetMarketInsightsSection;
