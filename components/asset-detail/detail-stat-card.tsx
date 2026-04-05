import { memo } from "react";
import { Text, View } from "react-native";

type DetailStatCardProps = {
  label: string;
  value: string;
};

const DetailStatCard = memo(function DetailStatCard({
  label,
  value,
}: DetailStatCardProps) {
  return (
    <View className="min-w-[47%] flex-1 rounded-2xl border border-border bg-card p-4">
      <Text className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </Text>
      <Text className="mt-2 text-body font-bold text-foreground" numberOfLines={2}>
        {value}
      </Text>
    </View>
  );
});

export default DetailStatCard;
