import SplashScreen from "@/components/SplashScreen";
import Providers from "@/providers";
import { onAppStartup } from "@/utils/startup.utils";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "./global.css";
import { useAuth } from "@/hooks/useAuth";
export default function RootLayout() {
  const { isAuthenticated } = useAuth();

  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function prepare() {
      await onAppStartup();
    }

    const timer = () => {
      setTimeout(() => {
        setLoad(false);
      }, 7000);
    };
    prepare();
    timer();
  }, []);

  if (load) {
    // Async font loading only occurs in development.
    return <SplashScreen />;
  }
  console.log(isAuthenticated)

  return (
    <ThemeProvider value={DefaultTheme}>
      <Providers>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="camera" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          <Stack.Screen name="(unauth)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </Providers>
    </ThemeProvider>
  );
}