import { ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LeanView as View } from "@/components/ui/primitive/lean-view";

import { queryClient } from "./query-client";

interface ProvidersProps {
  children: ReactNode;
  /*   theme: Theme;
  language: string; */
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-white">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </View>
    </SafeAreaProvider>
  );
}
