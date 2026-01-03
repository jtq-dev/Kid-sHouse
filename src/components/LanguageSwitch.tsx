"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname(); // e.g. /en/about or /fr/contact

  function switchTo(lang: "en" | "fr") {
    const parts = pathname.split("/");
    // parts: ["", "en", "about"]
    if (parts.length >= 2) parts[1] = lang;
    const nextPath = parts.join("/") || `/${lang}`;
    return nextPath;
  }

  return (
    <div className="inline-flex rounded-xl border border-white/15 bg-white/10 p-1 text-xs font-bold text-white">
      <a className="rounded-lg px-2 py-1 hover:bg-white/10" href={switchTo("en")}>EN</a>
      <a className="rounded-lg px-2 py-1 hover:bg-white/10" href={switchTo("fr")}>FR</a>
    </div>
  );
}
