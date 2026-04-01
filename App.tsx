import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "./global.css";
import "./i18n";
import RootNavigator from "./navigation/root-navigator";
import { useEffect } from "react";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
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
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
