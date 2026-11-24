export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export type LocalizedContent<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localized<T>(es: T, en: T): LocalizedContent<T> {
  return { es, en };
}
