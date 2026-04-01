import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";

import Card from "@/components/ui/primitive/card";
import {
  DividerWithLabel,
  OutlineIconButton,
  UnderlinedInput,
} from "@/components/ui";

import {
  LeanView as View,
  LeanText as Text,
  PrimaryButton as Button,
} from "@/components/ui";
import { colors } from "@/theme/colors";

const GRADIENT_COLORS = ["rgba(0, 230, 118, 0.16)", "transparent"] as const;

type AuthNavigation = NativeStackNavigationProp<RootStackParamList, "Auth">;

export default function AuthScreen() {
  const { t } = useTranslation("auth");
  const navigation = useNavigation<AuthNavigation>();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAuthenticate = useCallback(() => {
    navigation.replace("Main");
  }, [navigation]);
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
          {t("form.forgot")}
        </Text>
      </Pressable>
    ),
    [onForgot, t],
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
            {t("logo")}
          </Text>
          <Card className="flex-1 gap-10 bg-card p-6">
            {/* Header */}
            <View className="items-center gap-2 justify-between ">
              <Text className="text-center text-headline font-bold text-foreground">
                {t("title")}
              </Text>
              <Text className="text-center text-body text-muted">
                {t("subtitle")}
              </Text>
            </View>

            {/* Form */}
            <View className="justify-between flex-1">
              <UnderlinedInput
                autoCapitalize="none"
                keyboardType="email-address"
                label={t("form.emailLabel")}
                leftIcon={emailIcon}
                onChangeText={setEmail}
                placeholder={t("form.emailPlaceholder")}
                returnKeyType="next"
                value={email}
              />
              <UnderlinedInput
                label={t("form.passwordLabel")}
                labelRightAccessory={forgotAccessory}
                leftIcon={keyIcon}
                onChangeText={setPassword}
                onSubmitEditing={onAuthenticate}
                placeholder={t("form.passwordPlaceholder")}
                returnKeyType="done"
                secureTextEntry
                value={password}
              />
              <Button variant="primary" onPress={onAuthenticate}>
                {t("actions.authenticate")}
              </Button>
              <DividerWithLabel label={t("actions.divider")} />
              <View className="flex-row gap-3">
                <OutlineIconButton
                  icon={googleIcon}
                  label={t("actions.google")}
                  onPress={onGoogle}
                />
                <OutlineIconButton
                  icon={appleIcon}
                  label={t("actions.apple")}
                  onPress={onApple}
                />
              </View>
              <Text className="text-center text-body text-muted-foreground">
                {t("footer.newUser")}{" "}
                <Text
                  accessibilityRole="link"
                  className="font-semibold text-primary"
                  onPress={onCreateAccount}
                >
                  {t("footer.createAccount")}
                </Text>
              </Text>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
