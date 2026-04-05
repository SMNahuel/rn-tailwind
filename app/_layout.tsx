import "@/i18n";

import SplashScreen from "@/components/SplashScreen";
import Providers from "@/providers";
import { onAppStartup } from "@/utils/startup.utils";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import "./global.css";
import { colors } from "@/theme/colors";

export default function RootLayout() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function prepare() {
      await onAppStartup();
    }
    void prepare();
    const id = setTimeout(() => setLoad(false), 7000);
    return () => clearTimeout(id);
  }, []);

  if (load) {
    return <SplashScreen />;
  }

  return (
    <Providers>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(unauth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" backgroundColor={colors.background} />
      </GestureHandlerRootView>
    </Providers>
  );
}
