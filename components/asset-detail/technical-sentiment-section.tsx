import { memo } from "react";
import { Text, View } from "react-native";

type TechnicalSentimentSectionProps = {
  sectionTitle: string;
  rsiLabel: string;
  rsiValue: number;
  rsiStateLabel: string;
  body: string;
};

const TechnicalSentimentSection = memo(function TechnicalSentimentSection({
  sectionTitle,
  rsiLabel,
  rsiValue,
  rsiStateLabel,
  body,
}: TechnicalSentimentSectionProps) {
  const pct = Math.min(100, Math.max(0, rsiValue));

  return (
    <View className="mt-8 px-6 pb-4">
      <Text className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {sectionTitle}
      </Text>
      <View className="mt-4 rounded-2xl border border-border bg-card p-4">
        <View className="flex-row items-center justify-between gap-2">
          <Text className="flex-1 text-body-sm text-foreground">{rsiLabel}</Text>
          <Text className="text-body-sm font-semibold text-primary">
            {rsiValue.toFixed(1)} ({rsiStateLabel})
          </Text>
        </View>
        <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-progress-track">
          <View
            className="h-full rounded-full bg-primary"
            style={{ width: `${pct}%` }}
          />
        </View>
        <Text className="mt-4 text-label-xs leading-relaxed text-muted-foreground">
          {body}
        </Text>
      </View>
    </View>
  );
});

export default TechnicalSentimentSection;
