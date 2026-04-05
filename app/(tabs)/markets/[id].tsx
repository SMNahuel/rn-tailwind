import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import AssetDetailContent from "@/components/asset-detail/asset-detail-content";
import { market$ } from "@/store/asset/asset";

export default function AssetDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const assets = market$.assets.get();


  const asset = useMemo(() => assets.find((a) => a.id === id), [assets, id]);
  if (!asset) {
    return (
      <View>
        <Text className="text-body text-foreground">Asset not found</Text>
      </View>
    );
  }

  return <AssetDetailContent asset={asset} />;
}
