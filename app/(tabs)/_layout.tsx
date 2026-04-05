import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";

import { colors } from "@/theme/colors";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

const makeIcon =
  (name: IconName) =>
  ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons color={color} name={name} size={size} />
  );

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="markets"
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
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarLabel: "HOME",
          tabBarIcon: makeIcon("home-outline"),
        }}
      />
      <Tabs.Screen
        name="markets"
        options={{
          title: "MARKETS",
          tabBarLabel: "MARKETS",
          tabBarIcon: makeIcon("chart-areaspline"),
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          title: "TRADE",
          tabBarLabel: "TRADE",
          tabBarIcon: makeIcon("swap-horizontal"),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "WALLET",
          tabBarLabel: "WALLET",
          tabBarIcon: makeIcon("wallet-outline"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarLabel: "PROFILE",
          tabBarIcon: makeIcon("account-outline"),
        }}
      />
    </Tabs>
  );
}
