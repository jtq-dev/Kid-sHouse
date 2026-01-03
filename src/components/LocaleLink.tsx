"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, withLocale, type Locale } from "@/lib/i18n";

export default function LocaleLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const locale: Locale = isLocale(parts[0] || "") ? (parts[0] as Locale) : "en";

  return (
    <Link href={withLocale(locale, href)} className={className}>
      {children}
    </Link>
  );
}
