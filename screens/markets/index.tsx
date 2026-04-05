import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import { colors } from "@/theme/colors";
import { market$ } from "@/store/asset/asset";

import SearchBar from "@/components/ui/markets/search-bar";
import RowItem from "@/components/ui/markets/row-item";
import Hero from "@/components/ui/markets/hero";
import AssetTypeTabs from "@/components/ui/markets/asset-type-tabs";
import { AssetType, AssetFilterType } from "@/types";
import AssetFiltersTabs from "@/components/ui/markets/asset-filters-tabs";

//import useList from "@/api/crypto/useList";

export default function MarketsScreen() {
  const { t } = useTranslation("markets");
  const { top } = useSafeAreaInsets();
  const assets = market$.assets.get();

  const [activeFilter, setActiveFilter] =
    useState<AssetFilterType>("topGainers");
  const [activeTab, setActiveTab] = useState<AssetType>("stock");

  /*   const { data: cryptoList, isLoading } = useList(); */

  const onFilterPress = useCallback(
    (key: AssetFilterType) => setActiveFilter(key),
    [],
  );
  const onTabPress = useCallback((key: AssetType) => setActiveTab(key), []);

  const filters: { key: AssetFilterType; label: string }[] = [
    { key: "topGainers", label: t("filters.topGainers") },
    { key: "topLosers", label: t("filters.losers") },
    { key: "topFavorites", label: `★  ${t("filters.favorites")}` },
  ];

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: top }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <SearchBar />
        <AssetFiltersTabs
          filters={filters}
          activeFilter={activeFilter}
          onFilterPress={onFilterPress}
        />

        <AssetTypeTabs onTabPress={onTabPress} activeTab={activeTab} />
        {/* ── Featured asset card (Apple) ── */}
        <View className="mx-6 mb-4 rounded-2xl bg-card p-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View
                className="h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: colors.neutral[800] }}
              >
                <MaterialCommunityIcons
                  color={colors.foreground}
                  name="apple"
                  size={24}
                />
              </View>
              <View>
                <Text className="text-base font-bold text-foreground">
                  Apple Inc.
                </Text>
                <Text className="text-label-xs text-muted">AAPL.NAS</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-2xl font-bold text-foreground">
                $189.43
              </Text>
              <Text className="text-body font-medium text-primary">
                ▲ +2.45%
              </Text>
            </View>
          </View>
        </View>

        {/* ── Volatility index card ── */}
        <View className="mx-6 mb-4 rounded-2xl bg-card p-4">
          <View className="mb-2 flex-row items-center gap-2">
            <MaterialCommunityIcons
              color={colors.primary.DEFAULT}
              name="chart-line-variant"
              size={18}
            />
            <Text className="text-label-xs uppercase tracking-widest text-muted">
              {t("volatility.title")}
            </Text>
          </View>
          <Text className="text-4xl font-bold text-foreground">14.22</Text>
          <Text className="mt-1 text-body text-muted">
            {t("volatility.description")}
          </Text>
        </View>

        {/* ── Trending assets ── */}
        <View className="px-6">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-base font-bold text-foreground">
              {t("trending.title")}
            </Text>
            <Pressable accessibilityRole="button">
              <Text className="text-label font-semibold text-primary">
                {t("trending.viewAll")}
              </Text>
            </Pressable>
          </View>
          {assets.map((item, index) => (
            <RowItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
