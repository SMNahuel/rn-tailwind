import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, usePathname } from "expo-router";
import type { ComponentProps } from "react";

import { colors } from "@/theme/colors";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

const makeIcon =
  (name: IconName) =>
  ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons color={color} name={name} size={size} />
  );

export default function TabLayout() {
  const pathname = usePathname();
  const hideTabBar = /\/markets\/[^/]+/.test(pathname);

  return (
    <Tabs
      initialRouteName="markets"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: hideTabBar ? "none" : "flex",
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
