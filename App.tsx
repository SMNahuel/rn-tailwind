import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import "./i18n";
import RootNavigator from "./navigation/root-navigator";
import { useEffect } from "react";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Providers from "./providers";
export default function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 7000);
  }, []);

  if (load) {
    return <SplashScreen />;
  }
  return (
    <SafeAreaProvider>
      <Providers>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </Providers>
    </SafeAreaProvider>
  );
}
