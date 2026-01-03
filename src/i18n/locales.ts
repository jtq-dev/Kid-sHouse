export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

export const DEFAULT_LOCALE: Locale = "en";
