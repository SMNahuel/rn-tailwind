import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import { colors } from "@/theme/colors";
import { cn } from "@/lib/utils";
import { market$ } from "@/store/asset/asset";

import SearchBar from "@/components/ui/markets/search-bar";
import RowItem from "@/components/ui/markets/row-item";
import Hero from "@/components/ui/markets/hero";

//import useList from "@/api/crypto/useList";

// ─── Types ────────────────────────────────────────────────────────────────────

type Filter = "gainers" | "losers" | "favorites";
type AssetTab = "stocks" | "crypto" | "forex";

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function MarketsScreen() {
  const { t } = useTranslation("markets");
  const { top } = useSafeAreaInsets();
  const assets = market$.assets.get();

  const [activeFilter, setActiveFilter] = useState<Filter>("gainers");
  const [activeTab, setActiveTab] = useState<AssetTab>("stocks");

  /*   const { data: cryptoList, isLoading } = useList(); */

  const onFilterPress = useCallback((key: Filter) => setActiveFilter(key), []);
  const onTabPress = useCallback((key: AssetTab) => setActiveTab(key), []);

  const filters: { key: Filter; label: string }[] = [
    { key: "gainers", label: t("filters.topGainers") },
    { key: "losers", label: t("filters.losers") },
    { key: "favorites", label: `★  ${t("filters.favorites")}` },
  ];

  const tabs: { key: AssetTab; label: string }[] = [
    { key: "stocks", label: t("tabs.stocks") },
    { key: "crypto", label: t("tabs.crypto") },
    { key: "forex", label: t("tabs.forex") },
  ];

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: top }}>
      {/* ── Header ── */}

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Hero />

        <SearchBar />

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
                  isActive
                    ? "bg-primary"
                    : "border border-border bg-transparent",
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

        {/* ── Asset type tabs ── */}
        <View className="mb-4 flex-row border-b border-border px-6">
          {tabs.map(({ key, label }) => {
            const isActive = activeTab === key;
            return (
              <Pressable
                key={key}
                accessibilityRole="tab"
                onPress={() => onTabPress(key)}
                className="mr-6 pb-3"
                style={
                  isActive
                    ? {
                        borderBottomWidth: 2,
                        borderBottomColor: colors.primary.DEFAULT,
                      }
                    : undefined
                }
              >
                <Text
                  className={cn(
                    "text-body font-medium",
                    isActive ? "text-foreground" : "text-muted",
                  )}
                >
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>

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
