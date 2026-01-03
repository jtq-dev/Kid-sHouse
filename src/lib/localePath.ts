export type Locale = "en" | "fr";

export function getLocaleFromPath(pathname: string): Locale {
  // pathname: "/en/learning" or "/fr/admissions"
  return pathname.startsWith("/fr") ? "fr" : "en";
}

export function withLocale(locale: Locale, href: string) {
  if (!href.startsWith("/")) href = `/${href}`;
  // avoid double-prefix
  if (href.startsWith("/en/") || href === "/en") return href;
  if (href.startsWith("/fr/") || href === "/fr") return href;

  // root "/" becomes "/en" or "/fr"
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}
