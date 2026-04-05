import { TextInput } from "react-native";
import { useTranslation } from "react-i18next";

import { LeanView as View } from "@/components/ui/primitive/lean-view";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/theme/colors";

export default function SearchBar() {
  const { t } = useTranslation("markets");
  return (
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
        value={"searchQuery"}
        onChangeText={(text) => {
          console.log("searchQuery");
        }}
      />
    </View>
  );
}
