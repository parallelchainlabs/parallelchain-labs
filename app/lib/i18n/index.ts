import { en, type Messages } from "./en";
import { zh } from "./zh";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "pcl-locale";

export const dictionaries: Record<Locale, Messages> = { en, zh };

export { en, zh };
export type { Messages };
