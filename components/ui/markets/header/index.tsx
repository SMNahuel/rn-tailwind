import { useTranslation } from "react-i18next";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/theme/colors";
import { Pressable } from "react-native";
import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";

export default function Header() {
  const { t } = useTranslation("markets");

  return (
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
  );
}
