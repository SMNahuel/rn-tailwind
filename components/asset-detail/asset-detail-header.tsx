import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { memo } from "react";
import { Pressable, Text, View } from "react-native";

import { colors } from "@/theme/colors";

type AssetDetailHeaderProps = {
  title: string;
};

const AssetDetailHeader = memo(function AssetDetailHeader({
  title,
}: AssetDetailHeaderProps) {
  const router = useRouter();

  return (
    <View className="relative flex-row items-center justify-between px-6 pb-4">
      <Pressable
        accessibilityLabel="Back"
        accessibilityRole="button"
        className="z-10 py-1"
        hitSlop={12}
        onPress={() => router.back()}
      >
        <MaterialCommunityIcons
          color={colors.foreground}
          name="arrow-left"
          size={24}
        />
      </Pressable>
      <Text
        className="absolute left-0 right-0 text-center text-label font-semibold text-foreground"
        pointerEvents="none"
        numberOfLines={1}
      >
        {title}
      </Text>
      <View className="z-10 flex-row items-center gap-2">
        <Pressable
          accessibilityLabel="Notifications"
          accessibilityRole="button"
          className="h-9 w-9 items-center justify-center rounded-full border border-border bg-card"
          hitSlop={4}
        >
          <MaterialCommunityIcons
            color={colors.foreground}
            name="bell-outline"
            size={20}
          />
        </Pressable>
      </View>
    </View>
  );
});

export default AssetDetailHeader;
