import { useCallback, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import { market$ } from "@/store/asset/asset";

import SearchBar from "@/components/ui/markets/search-bar";
import RowItem from "@/components/ui/markets/row-item";
import Hero from "@/components/ui/markets/hero";
import AssetTypeTabs from "@/components/ui/markets/asset-type-tabs";
import { AssetType } from "@/types";

export default function MarketsScreen() {
  const { t } = useTranslation("markets");
  const { top } = useSafeAreaInsets();
  const assets = market$.assets.get();

  const [activeTab, setActiveTab] = useState<AssetType>("stock");

  const onTabPress = useCallback((key: AssetType) => setActiveTab(key), []);

  const filteredAssets = useMemo(
    () => assets.filter((item) => item.type === activeTab),
    [assets, activeTab],
  );

  return (
    <View className="flex-1 bg-background " style={{ paddingTop: top }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <SearchBar />

        <AssetTypeTabs onTabPress={onTabPress} activeTab={activeTab} />

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
          {filteredAssets.map((item) => (
            <RowItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
