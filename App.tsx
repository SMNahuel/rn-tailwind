import { ScreenContent } from "components/ScreenContent";
import { StatusBar } from "expo-status-bar";

import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthScreen from "./screens/auth";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
