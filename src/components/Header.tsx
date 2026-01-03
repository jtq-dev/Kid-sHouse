"use client";

import { Button, Container } from "./UI";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useI18n, useT } from "@/i18n/provider";

function withLocale(locale: string, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default function Header() {
  const { locale } = useI18n();
  const t = useT();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href={withLocale(locale, "/")} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500 overflow-hidden">
              <img src="/images/logo.png" alt="school_logo" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-white">Kid's House</div>
              <div className="text-xs text-white/70">Douala, Cameroon</div>
            </div>
          </a>

          <MegaMenu />

          <div className="flex items-center gap-2">
            <a
              className="hidden md:inline-flex text-sm font-semibold text-white/85 hover:text-white"
              href={withLocale(locale, "/calendar")}
            >
              {t("nav.calendar")}
            </a>

            <a
              className="hidden md:inline-flex text-sm font-semibold text-white/85 hover:text-white"
              href={withLocale(locale, "/contact")}
            >
              {t("nav.contact")}
            </a>

            <Button href={withLocale(locale, "/admissions")} variant="primary">
              {t("common.admissionsCta")} <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          <LanguageToggle />
        </div>
      </Container>
    </header>
  );
}
