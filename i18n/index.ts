import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import es from "./locales/es";

export const resources = { en, es } as const;

const deviceLocale = getLocales()[0]?.languageCode ?? "en";
const supportedLocale = deviceLocale in resources ? deviceLocale : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: supportedLocale,
  fallbackLng: "en",
  ns: ["auth", "markets"],
  defaultNS: "auth",
  interpolation: {
    // React already escapes values
    escapeValue: false,
  },
});

export default i18n;
