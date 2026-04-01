import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "@/screens/auth";
import MainNavigator from "./main-navigator";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen component={AuthScreen} name="Auth" />
      <Stack.Screen component={MainNavigator} name="Main" />
    </Stack.Navigator>
  );
}
