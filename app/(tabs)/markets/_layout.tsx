import { Stack } from "expo-router";
import { colors } from "@/theme/colors";

export default function MarketsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
