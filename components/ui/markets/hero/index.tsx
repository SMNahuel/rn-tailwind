import { LeanView as View } from "@/components/ui/primitive/lean-view";
import { LeanText as Text } from "@/components/ui/primitive/lean-text";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const { t } = useTranslation("markets");

  return (
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
  );
}
