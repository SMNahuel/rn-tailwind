import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  ScrollView,
  Switch,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/theme/colors";

const LANGUAGES = ["English (US)", "Español", "Português", "Français"];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);
  const [isBiometric, setIsBiometric] = useState(true);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={22}
            color={colors.foreground}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerRight}>
          <View style={styles.initialsChip}>
            <Text style={styles.initialsText}>EF</Text>
          </View>
          <TouchableOpacity style={styles.headerBtn}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={22}
              color={colors.foreground}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 32 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar & user info */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons
                name="account"
                size={52}
                color={colors.muted}
              />
            </View>
            <View style={styles.proBadge}>
              <Text style={styles.proBadgeText}>PRO</Text>
            </View>
          </View>
          <Text style={styles.userName}>Alexander Sterling</Text>
          <Text style={styles.userEmail}>alex@sterling.ai</Text>
          <Text style={styles.memberSince}>MEMBER SINCE OCT 2021</Text>
        </View>

        {/* ACCOUNT */}
        <SectionLabel label="ACCOUNT" />

        <View style={styles.card}>
          <RowItem
            icon="account-outline"
            label="Personal Information"
            subtitle="Manage your identity details"
            rightElement={
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={colors.muted}
              />
            }
          />
          <View style={styles.separator} />
          <RowItem
            icon="shield-check-outline"
            label="Verification Status"
            subtitle="Level 2 Verified"
            rightElement={
              <View style={styles.verifiedBadge}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={13}
                  color={colors.primary.DEFAULT}
                />
                <Text style={styles.verifiedText}>VERIFIED</Text>
              </View>
            }
          />
        </View>

        {/* PREFERENCES */}
        <SectionLabel label="PREFERENCES" />

        <View style={styles.card}>
          {/* Appearance / Dark Mode */}
          <RowItem
            icon="palette-outline"
            label="Appearance"
            rightElement={
              <View style={styles.themeToggleRow}>
                <MaterialCommunityIcons
                  name="white-balance-sunny"
                  size={16}
                  color={isDarkMode ? colors.muted : colors.primary.DEFAULT}
                />
                <Switch
                  value={isDarkMode}
                  onValueChange={setIsDarkMode}
                  trackColor={{
                    false: colors.border,
                    true: colors.primary.DEFAULT,
                  }}
                  thumbColor={colors.foreground}
                  style={styles.switch}
                />
                <MaterialCommunityIcons
                  name="moon-waning-crescent"
                  size={16}
                  color={isDarkMode ? colors.primary.DEFAULT : colors.muted}
                />
              </View>
            }
          />

          <View style={styles.separator} />

          {/* Language */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowLanguagePicker(!showLanguagePicker)}
          >
            <RowItem
              icon="web"
              label="Language"
              rightElement={
                <View style={styles.languageRow}>
                  <Text style={styles.languageValue}>{selectedLanguage}</Text>
                  <MaterialCommunityIcons
                    name={showLanguagePicker ? "chevron-up" : "chevron-down"}
                    size={18}
                    color={colors.primary.DEFAULT}
                  />
                </View>
              }
            />
          </TouchableOpacity>

          {/* Language picker dropdown */}
          {showLanguagePicker && (
            <View style={styles.languagePicker}>
              {LANGUAGES.map((lang) => (
                <TouchableOpacity
                  key={lang}
                  style={[
                    styles.languageOption,
                    lang === selectedLanguage && styles.languageOptionActive,
                  ]}
                  activeOpacity={0.7}
                  onPress={() => {
                    setSelectedLanguage(lang);
                    setShowLanguagePicker(false);
                  }}
                >
                  <Text
                    style={[
                      styles.languageOptionText,
                      lang === selectedLanguage &&
                        styles.languageOptionTextActive,
                    ]}
                  >
                    {lang}
                  </Text>
                  {lang === selectedLanguage && (
                    <MaterialCommunityIcons
                      name="check"
                      size={16}
                      color={colors.primary.DEFAULT}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.separator} />

          {/* Primary Currency */}
          <RowItem
            icon="cash-multiple"
            label="Primary Currency"
            rightElement={
              <View style={styles.languageRow}>
                <Text style={styles.languageValue}>USD ($)</Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={18}
                  color={colors.primary.DEFAULT}
                />
              </View>
            }
          />
        </View>

        {/* SECURITY */}
        <SectionLabel label="SECURITY" />

        <View style={styles.card}>
          <RowItem
            icon="fingerprint"
            label="Biometric Auth"
            subtitle="FaceID or TouchID"
            rightElement={
              <Switch
                value={isBiometric}
                onValueChange={setIsBiometric}
                trackColor={{
                  false: colors.border,
                  true: colors.primary.DEFAULT,
                }}
                thumbColor={colors.foreground}
              />
            }
          />
          <View style={styles.separator} />
          <RowItem
            icon="lock-reset"
            label="Change Passcode"
            rightElement={
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={colors.muted}
              />
            }
          />
        </View>

        {/* Sign Out */}
        <TouchableOpacity activeOpacity={0.8} style={styles.signOutBtn}>
          <MaterialCommunityIcons
            name="logout"
            size={18}
            color={colors.destructive.DEFAULT}
          />
          <Text style={styles.signOutText}>SIGN OUT</Text>
        </TouchableOpacity>

        <Text style={styles.version}>VERSION 4.2.0-ALPHA</Text>
      </ScrollView>
    </View>
  );
}

/* ─── Sub-components ─────────────────────────────────────────── */

function SectionLabel({ label }: { label: string }) {
  return <Text style={styles.sectionLabel}>{label}</Text>;
}

function RowItem({
  icon,
  label,
  subtitle,
  rightElement,
}: {
  icon: string;
  label: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
}) {
  return (
    <View style={styles.rowItem}>
      <View style={styles.rowLeft}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name={icon as any}
            size={20}
            color={colors.muted}
          />
        </View>
        <View style={styles.rowLabels}>
          <Text style={styles.rowLabel}>{label}</Text>
          {subtitle ? (
            <Text style={styles.rowSubtitle}>{subtitle}</Text>
          ) : null}
        </View>
      </View>
      {rightElement && (
        <View style={styles.rowRight}>{rightElement}</View>
      )}
    </View>
  );
}

/* ─── Styles ─────────────────────────────────────────────────── */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.foreground,
    letterSpacing: 0.3,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  initialsChip: {
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  initialsText: {
    color: colors.primary.foreground,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },

  /* Avatar section */
  scrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  avatarSection: {
    alignItems: "center",
    paddingVertical: 24,
    gap: 4,
  },
  avatarWrapper: {
    marginBottom: 12,
    position: "relative",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.neutral[800],
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.primary.DEFAULT,
  },
  proBadge: {
    position: "absolute",
    bottom: -4,
    alignSelf: "center",
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  proBadgeText: {
    color: colors.primary.foreground,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.foreground,
    marginTop: 8,
  },
  userEmail: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },
  memberSince: {
    fontSize: 11,
    color: colors.primary.DEFAULT,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 6,
  },

  /* Section label */
  sectionLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.muted,
    letterSpacing: 1.2,
    marginTop: 12,
    marginBottom: 4,
    marginLeft: 4,
  },

  /* Card */
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors["border-subtle"],
    overflow: "hidden",
  },
  separator: {
    height: 1,
    backgroundColor: colors["border-subtle"],
    marginLeft: 52,
  },

  /* Row item */
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 60,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.neutral[800],
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabels: {
    gap: 2,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.foreground,
  },
  rowSubtitle: {
    fontSize: 12,
    color: colors.muted,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  /* Verified badge */
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(0, 230, 118, 0.12)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  verifiedText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary.DEFAULT,
    letterSpacing: 0.5,
  },

  /* Theme toggle */
  themeToggleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  switch: {
    transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }],
  },

  /* Language */
  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  languageValue: {
    fontSize: 14,
    color: colors.primary.DEFAULT,
    fontWeight: "500",
  },
  languagePicker: {
    borderTopWidth: 1,
    borderTopColor: colors["border-subtle"],
    backgroundColor: colors.neutral[900],
  },
  languageOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: colors["border-subtle"],
  },
  languageOptionActive: {
    backgroundColor: "rgba(0, 230, 118, 0.06)",
  },
  languageOptionText: {
    fontSize: 14,
    color: colors.muted,
    fontWeight: "400",
  },
  languageOptionTextActive: {
    color: colors.primary.DEFAULT,
    fontWeight: "600",
  },

  /* Sign out */
  signOutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.destructive.DEFAULT,
    paddingVertical: 16,
  },
  signOutText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.destructive.DEFAULT,
    letterSpacing: 1.5,
  },

  /* Version */
  version: {
    textAlign: "center",
    fontSize: 11,
    color: colors["muted-foreground"],
    letterSpacing: 0.8,
    marginTop: 12,
  },
});
