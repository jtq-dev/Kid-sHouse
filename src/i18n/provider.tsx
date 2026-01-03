"use client";

import React, { createContext, useContext } from "react";
import type { Locale } from "./locales";
import type { Messages } from "./messages";

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
};

const I18nCtx = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  return (
    <I18nCtx.Provider value={{ locale, messages }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useT() {
  const { messages } = useI18n();

  return function t(path: string, fallback?: string) {
    const parts = path.split(".");
    let cur: any = messages;
    for (const p of parts) cur = cur?.[p];
    return (cur ?? fallback ?? path) as string;
  };
}
