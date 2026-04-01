import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Card from "@/components/ui/primitive/card";
import {
  DividerWithLabel,
  OutlineIconButton,
  PrimaryButton,
  UnderlinedInput,
} from "@/components/ui";
import { colors } from "@/theme/colors";

const GRADIENT_COLORS = ["rgba(0, 230, 118, 0.16)", "transparent"] as const;

export default function AuthScreen() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAuthenticate = useCallback(() => {}, []);
  const onGoogle = useCallback(() => {}, []);
  const onApple = useCallback(() => {}, []);
  const onForgot = useCallback(() => {}, []);
  const onCreateAccount = useCallback(() => {}, []);

  const emailIcon = useMemo(
    () => <MaterialCommunityIcons color={colors.muted} name="at" size={22} />,
    [],
  );

  const keyIcon = useMemo(
    () => (
      <MaterialCommunityIcons
        color={colors.muted}
        name="key-outline"
        size={22}
      />
    ),
    [],
  );

  const googleIcon = useMemo(
    () => (
      <MaterialCommunityIcons
        color={colors.foreground}
        name="google"
        size={22}
      />
    ),
    [],
  );

  const appleIcon = useMemo(
    () => (
      <MaterialCommunityIcons
        color={colors.foreground}
        name="apple"
        size={22}
      />
    ),
    [],
  );

  const forgotAccessory = useMemo(
    () => (
      <Pressable accessibilityRole="button" hitSlop={12} onPress={onForgot}>
        <Text className="text-label-xs font-semibold uppercase tracking-widest text-primary">
          Forgot?
        </Text>
      </Pressable>
    ),
    [onForgot],
  );

  return (
    <View className="flex-1 bg-background">
      <LinearGradient
        colors={GRADIENT_COLORS}
        pointerEvents="none"
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 240 }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View
          className="flex-1 px-6"
          style={{
            paddingTop: insets.top + 8,
            paddingBottom: insets.bottom + 24,
          }}
        >
          <Text className="py-6 text-center text-4xl font-bold tracking-tight text-primary">
            EF
          </Text>

          <Card className="flex-1 justify-between bg-card p-6">
            {/* Header */}
            <View className="items-center gap-2">
              <Text className="text-center text-headline font-bold text-foreground">
                Welcome Back
              </Text>
              <Text className="text-center text-body text-muted">
                Access your secure financial dashboard.
              </Text>
            </View>

            {/* Form */}
            <View className="gap-6">
              <UnderlinedInput
                autoCapitalize="none"
                keyboardType="email-address"
                label="Digital Identity"
                leftIcon={emailIcon}
                onChangeText={setEmail}
                placeholder="name@domain.com"
                returnKeyType="next"
                value={email}
              />
              <UnderlinedInput
                label="Security Token"
                labelRightAccessory={forgotAccessory}
                leftIcon={keyIcon}
                onChangeText={setPassword}
                onSubmitEditing={onAuthenticate}
                placeholder="••••••••••••"
                returnKeyType="done"
                secureTextEntry
                value={password}
              />
            </View>

            {/* Actions */}
            <View className="gap-4">
              <PrimaryButton onPress={onAuthenticate}>
                Authenticate
              </PrimaryButton>
              <DividerWithLabel label="Or connect with" />
              <View className="flex-row gap-3">
                <OutlineIconButton
                  icon={googleIcon}
                  label="Google"
                  onPress={onGoogle}
                />
                <OutlineIconButton
                  icon={appleIcon}
                  label="Apple"
                  onPress={onApple}
                />
              </View>
            </View>

            {/* Footer */}
            <Text className="text-center text-body text-muted-foreground">
              New to the future?{" "}
              <Text
                accessibilityRole="link"
                className="font-semibold text-primary"
                onPress={onCreateAccount}
              >
                Create Account
              </Text>
            </Text>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
