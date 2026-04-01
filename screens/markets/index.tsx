import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import { colors } from "@/theme/colors";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Filter = "gainers" | "losers" | "favorites";
type AssetTab = "stocks" | "crypto" | "forex";

type TrendingAsset = {
  id: string;
  initials: string;
  name: string;
  ticker: string;
  price: string;
  change: string;
  positive: boolean;
};

// ─── Static data ──────────────────────────────────────────────────────────────

const TRENDING_DATA: TrendingAsset[] = [
  {
    id: "1",
    initials: "NV",
    name: "NVIDIA Corp.",
    ticker: "NVDA.NAS",
    price: "$903.66",
    change: "+3.12%",
    positive: true,
  },
  {
    id: "2",
    initials: "TS",
    name: "Tesla Motors",
    ticker: "TSLA.NAS",
    price: "$164.22",
    change: "-1.84%",
    positive: false,
  },
  {
    id: "3",
    initials: "MS",
    name: "Microsoft",
    ticker: "MSFT.NAS",
    price: "$421.90",
    change: "+0.67%",
    positive: true,
  },
  {
    id: "4",
    initials: "AM",
    name: "Amazon.com",
    ticker: "AMZN.NAS",
    price: "$178.15",
    change: "+1.22%",
    positive: true,
  },
];

const MARKET_CLOSE_SECONDS = 5 * 3600 + 42 * 60 + 10;

// ─── Sub-components ───────────────────────────────────────────────────────────

const TrendingRow = memo(function TrendingRow({
  item,
  isLast,
}: {
  item: TrendingAsset;
  isLast: boolean;
}) {
  return (
    <View
      className={cn(
        "flex-row items-center justify-between py-3",
        !isLast && "border-b border-border",
      )}
    >
      <View className="flex-row items-center gap-3">
        <View
          className="h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: colors.neutral[800] }}
        >
          <Text className="text-label-xs font-bold text-foreground">
            {item.initials}
          </Text>
        </View>
        <View>
          <Text className="text-body font-semibold text-foreground">
            {item.name}
          </Text>
          <Text className="text-label-xs text-muted">{item.ticker}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-body font-semibold text-foreground">
          {item.price}
        </Text>
        <Text
          className={cn(
            "text-label-xs font-medium",
            item.positive ? "text-primary" : "text-destructive",
          )}
        >
          {item.change}
        </Text>
      </View>
    </View>
  );
});

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function MarketsScreen() {
  const { t } = useTranslation("markets");
  const { top } = useSafeAreaInsets();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("gainers");
  const [activeTab, setActiveTab] = useState<AssetTab>("stocks");
  const [timeLeft, setTimeLeft] = useState(MARKET_CLOSE_SECONDS);

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft((prev) => Math.max(0, prev - 1)),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(() => {
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [timeLeft]);

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
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="h-9 w-9 items-center justify-center rounded-full border border-border">
          <MaterialCommunityIcons
            color={colors.muted}
            name="account-outline"
            size={20}
          />
        </View>
        <Text className="text-base font-bold text-foreground">
          {t("header.title")}
        </Text>
        <Pressable
          accessibilityRole="button"
          className="h-9 w-9 items-center justify-center"
        >
          <MaterialCommunityIcons
            color={colors.primary.DEFAULT}
            name="magnify"
            size={24}
          />
        </Pressable>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero ── */}
        <View className="px-6 pb-5">
          <Text className="text-4xl font-bold leading-tight text-foreground">
            {t("hero.heading")}
            {"\n"}
            <Text className="text-primary">{t("hero.headingAccent")}</Text>
          </Text>
          <Text className="mt-3 text-body leading-5 text-muted">
            {t("hero.subtitle")}
          </Text>
        </View>

        {/* ── Search bar ── */}
        <View className="mx-6 mb-4 flex-row items-center gap-3 rounded-xl border border-border bg-input px-4">
          <MaterialCommunityIcons
            color={colors["muted-foreground"]}
            name="magnify"
            size={18}
          />
          <TextInput
            className="flex-1 py-3 text-body text-foreground"
            placeholder={t("searchPlaceholder")}
            placeholderTextColor={colors["muted-foreground"]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* ── Filter chips ── */}
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

        {/* ── Market status card ── */}
        <View className="mx-6 mb-6 rounded-2xl bg-card p-4">
          <Text className="mb-2 text-label-xs uppercase tracking-widest text-muted">
            {t("status.label")}
          </Text>
          <View className="flex-row items-center gap-2">
            <View className="h-2.5 w-2.5 rounded-full bg-primary" />
            <Text className="text-body font-semibold text-foreground">
              {t("status.open")}
            </Text>
          </View>
          <Text className="mt-1 text-label text-muted">
            {t("status.endsIn")} {formattedTime}
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
          {TRENDING_DATA.map((item, index) => (
            <TrendingRow
              key={item.id}
              isLast={index === TRENDING_DATA.length - 1}
              item={item}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
