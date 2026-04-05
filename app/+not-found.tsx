import { Link, Stack } from "expo-router";

import { LeanText as Text, LeanView as View } from "@/components/ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center gap-4 bg-background px-6">
        <Text className="text-center text-headline text-foreground">
          Esta pantalla no existe.
        </Text>
        <Link className="text-primary" href="/">
          Volver al inicio
        </Link>
      </View>
    </>
  );
}
