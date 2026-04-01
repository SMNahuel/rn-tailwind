import type en from "./locales/en";
import type { resources } from "./index";

/**
 * Extiende los tipos de react-i18next para habilitar autocompletado
 * en useTranslation y t() en toda la app.
 */
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "auth";
    resources: (typeof resources)["en"];
  }
}

export type Locale = keyof typeof resources;
export type AuthTranslations = typeof en.auth;
