// src/app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { I18nProvider } from "@/i18n/provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params; // ✅ FIX: await params
  const locale: Locale = isLocale(raw) ? (raw as Locale) : "en";
  const messages = getMessages(locale);

  // ✅ DO NOT return <html> here if you already have src/app/layout.tsx with <html><body>
  return <I18nProvider locale={locale} messages={messages}>{children}</I18nProvider>;
}
