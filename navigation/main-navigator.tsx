import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ComponentProps } from "react";

import MarketsScreen from "@/screens/markets";
import PlaceholderScreen from "@/screens/placeholder";
import { colors } from "@/theme/colors";
import type { MainTabParamList } from "./types";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

const Tab = createBottomTabNavigator<MainTabParamList>();

const makeIcon =
  (name: IconName) =>
  ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons color={color} name={name} size={size} />
  );

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Markets"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: colors.primary.DEFAULT,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          fontSize: 10,
          letterSpacing: 0.5,
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen
        component={PlaceholderScreen}
        name="Home"
        options={{ tabBarLabel: "HOME", tabBarIcon: makeIcon("home-outline") }}
      />
      <Tab.Screen
        component={MarketsScreen}
        name="Markets"
        options={{
          tabBarLabel: "MARKETS",
          tabBarIcon: makeIcon("chart-areaspline"),
        }}
      />
      <Tab.Screen
        component={PlaceholderScreen}
        name="Trade"
        options={{
          tabBarLabel: "TRADE",
          tabBarIcon: makeIcon("swap-horizontal"),
        }}
      />
      <Tab.Screen
        component={PlaceholderScreen}
        name="Wallet"
        options={{
          tabBarLabel: "WALLET",
          tabBarIcon: makeIcon("wallet-outline"),
        }}
      />
      <Tab.Screen
        component={PlaceholderScreen}
        name="Profile"
        options={{
          tabBarLabel: "PROFILE",
          tabBarIcon: makeIcon("account-outline"),
        }}
      />
    </Tab.Navigator>
  );
}
