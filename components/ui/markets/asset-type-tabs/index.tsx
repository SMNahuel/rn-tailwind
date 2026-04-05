import { Pressable } from "react-native";
import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";
import { colors } from "@/theme/colors";
import { assetTypeTabs } from "@/constants";
import { cn } from "@/lib/utils";
import { AssetType } from "@/types";

export default function AssetTypeTabs({
  onTabPress,
  activeTab,
}: {
  onTabPress: (key: AssetType) => void;
  activeTab: AssetType;
}) {
  return (
    <View className="mb-4 flex-row border-b border-border px-6">
      {assetTypeTabs.map(({ key, label }) => {
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
  );
}
