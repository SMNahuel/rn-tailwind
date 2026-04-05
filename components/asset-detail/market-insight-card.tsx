import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { memo } from "react";
import { Text, View } from "react-native";

import { colors } from "@/theme/colors";

type MarketInsightCardProps = {
  category: string;
  headline: string;
  timeAgo: string;
};

const MarketInsightCard = memo(function MarketInsightCard({
  category,
  headline,
  timeAgo,
}: MarketInsightCardProps) {
  return (
    <View className="mb-3 flex-row rounded-2xl border border-border bg-card p-3">
      <View className="mr-3 h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
        <MaterialCommunityIcons
          color={colors.primary.DEFAULT}
          name="newspaper-variant-outline"
          size={26}
        />
      </View>
      <View className="min-w-0 flex-1">
        <Text className="text-[10px] font-bold uppercase tracking-wide text-primary">
          {category}
        </Text>
        <Text className="mt-1 text-body-sm font-medium leading-snug text-foreground">
          {headline}
        </Text>
        <Text className="mt-2 text-label-xs text-muted-foreground">{timeAgo}</Text>
      </View>
    </View>
  );
});

export default MarketInsightCard;
