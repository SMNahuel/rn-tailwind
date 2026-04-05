import { memo, useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import {
  MOCK_MARKET_INSIGHTS,
  computeRsiFromChange,
  getChartMeta,
  getDetailStats,
  rsiLabelKey,
} from "@/data/assetDetailMock";
import type { MarketInsightMock } from "@/data/assetDetailMock";
import type { Asset, ChartTimeRange } from "@/types";

import AssetDetailHeader from "./asset-detail-header";
import AssetDetailPriceRow from "./asset-detail-price-row";
import AssetDetailStatsGrid from "./asset-detail-stats-grid";
import AssetIdentityRow from "./asset-identity-row";
import AssetMarketInsightsSection from "./asset-market-insights-section";
import AssetPriceChart from "./asset-price-chart";
import ChartTimeRangeTabs from "./chart-time-range-tabs";
import ChartVolumeHighRow from "./chart-volume-high-row";
import TechnicalSentimentSection from "./technical-sentiment-section";

const RANGE_ORDER: ChartTimeRange[] = ["1D", "1W", "1M", "1Y", "ALL"];

type AssetDetailContentProps = {
  asset: Asset;
};

const AssetDetailContent = memo(function AssetDetailContent({
  asset,
}: AssetDetailContentProps) {
  const { t: tMarkets } = useTranslation("markets");
  const tLoose = tMarkets as (key: string) => string;
  const { top } = useSafeAreaInsets();
  const [range, setRange] = useState<ChartTimeRange>("1W");

  const rangeTabs = useMemo(
    () =>
      RANGE_ORDER.map((key) => ({
        key,
        label: tLoose(`assetDetail.ranges.${key}`),
      })),
    [tLoose],
  );

  const chart = useMemo(() => getChartMeta(asset, range), [asset, range]);
  const stats = useMemo(() => getDetailStats(asset), [asset]);
  const rsi = useMemo(
    () => computeRsiFromChange(asset.change),
    [asset.change],
  );
  const rsiMood = rsiLabelKey(rsi);

  const labelForKey = useCallback(
    (key: string) => tLoose(`assetDetail.statsLabels.${key}`),
    [tLoose],
  );

  const insightTextFor = useCallback(
    (insight: MarketInsightMock) => ({
      category: tLoose(`assetDetail.insights.${insight.i18nKey}.category`),
      headline: tLoose(`assetDetail.insights.${insight.i18nKey}.headline`),
      timeAgo: tLoose(`assetDetail.insights.${insight.i18nKey}.time`),
    }),
    [tLoose],
  );

  const rsiStateLabel = tLoose(`assetDetail.rsi.${rsiMood}`);
  const sentimentBody = tMarkets("assetDetail.sentimentBody", {
    name: asset.name,
  });

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: top }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <AssetDetailHeader title={tMarkets("header.title")} />
        <AssetIdentityRow asset={asset} />
        <AssetDetailPriceRow asset={asset} />
        <ChartTimeRangeTabs
          active={range}
          onChange={setRange}
          ranges={rangeTabs}
        />
        <ChartVolumeHighRow
          asset={asset}
          highLabelText={tMarkets("assetDetail.high24h")}
          highValue={chart.high24h}
          volumeLabel={chart.volumeLabel}
          volumeLabelText={tMarkets("assetDetail.volume24h")}
        />
        <AssetPriceChart points={chart.points} />
        <AssetDetailStatsGrid labelForKey={labelForKey} stats={stats} />
        <AssetMarketInsightsSection
          insights={MOCK_MARKET_INSIGHTS}
          textFor={insightTextFor}
          title={tMarkets("assetDetail.marketInsights")}
        />
        <TechnicalSentimentSection
          body={sentimentBody}
          rsiLabel={tMarkets("assetDetail.rsiLabel")}
          rsiStateLabel={rsiStateLabel}
          rsiValue={rsi}
          sectionTitle={tMarkets("assetDetail.technicalTitle")}
        />
      </ScrollView>
    </View>
  );
});

export default AssetDetailContent;
