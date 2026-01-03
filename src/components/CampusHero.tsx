import Image from "next/image";
import type { ReactNode } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

type Social = {
  label: string;
  href: string;
  icon: ReactNode;
};

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default function CampusHero({
  locale = "en",
  paymentTermsHref = "#",
}: {
  locale?: Locale;
  paymentTermsHref?: string;
}) {
  const m = getMessages(locale);

  const SOCIALS: Social[] = [
    { label: m.campusHero.social.facebook, href: "#", icon: <Facebook size={16} /> },
    { label: m.campusHero.social.twitter, href: "#", icon: <Twitter size={16} /> },
    { label: m.campusHero.social.youtube, href: "#", icon: <Youtube size={16} /> },
    { label: m.campusHero.social.instagram, href: "#", icon: <Instagram size={16} /> },
    { label: m.campusHero.social.linkedin, href: "#", icon: <Linkedin size={16} /> },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="h-3 w-full bg-rose-600" />

      <div className="relative bg-gradient-to-b from-sky-500 via-sky-700 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_55%)]" />

        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24 text-center text-white">
          <div className="mx-auto w-[120px] md:w-[150px]">
            <Image
              src="/images/logo.png"
              alt={m.campusHero.crestAlt}
              width={180}
              height={180}
              className="mx-auto drop-shadow"
              priority
            />
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-900 shadow-sm hover:scale-[1.03] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="mt-6 text-xs md:text-sm text-white/90 leading-relaxed">
            <div>{m.campusHero.line1}</div>
            <div className="mt-2 text-white/85">
              {m.campusHero.courierLabel} {m.campusHero.courierAddress}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:text-sm font-semibold">
            <a className="hover:text-white/80" href={withLocale(locale, "/about/child-protection")}>
              {m.campusHero.childProtection}
            </a>
            <span className="text-white/50">|</span>
            <a className="hover:text-white/80" href={withLocale(locale, "/contact")}>
              {m.campusHero.questions}
            </a>
            <span className="text-white/50">|</span>
            <a className="hover:text-white/80" href={paymentTermsHref}>
              {m.campusHero.paymentTerms}
            </a>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-left text-slate-900 shadow-md">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16v10H4V4Zm0 12h10v4H4v-4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 10l2 2 4-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-sm font-extrabold">{m.campusHero.badgeTitle}</div>
                <div className="text-xs text-slate-600">{m.campusHero.badgeDesc}</div>
              </div>
            </div>
          </div>

          <div className="h-2" />
        </div>
      </div>
    </section>
  );
}
