import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusHero from "@/components/CampusHero";
import MaroonBanner from "@/components/MaroonBanner";
import QuickNavBox from "@/components/QuickNavBox";
import GrayBandCTA from "@/components/GrayBandCTA";
import PhotoPair from "@/components/PhotoPair";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function PreK2Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.nav.learning, href: withLocale(locale, "/learning") },
    { label: m.learning.early, href: withLocale(locale, "/learning/early-years") },
    { label: m.preK2Page.title, href: withLocale(locale, "/learning/early-years/pre-k2") },
    { label: m.earlyYearsPage.tilePreK34Title, href: withLocale(locale, "/learning/early-years/pre-k3-pre-k4") },
  ];

  const bullets = m.preK2Page.s3Bullets;

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.preK2Page.kicker}
        title={m.preK2Page.title}
        subtitle={m.preK2Page.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {m.preK2Page.h1}
            </h2>

            <p className="mt-3 text-slate-700 leading-relaxed">
              {m.preK2Page.p1}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s1Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s1Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s2Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s2Intro}
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              {m.preK2Page.s2List.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-3 text-slate-700 leading-relaxed">
              {m.preK2Page.s2Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s3Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s3Intro}
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              {bullets.map((b) => (
                <li key={b.label}>
                  <b>{b.label}:</b> {b.desc}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-slate-700 leading-relaxed">
              {m.preK2Page.s3Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s4Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s4Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s5Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s5Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s6Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s6Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s7Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s7Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s8Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s8Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s9Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s9Text}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK2Page.s10Title}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK2Page.s10Text}
            </p>

            <div className="mt-4">
              <a
                href={withLocale(locale, "/contact")}
                className="inline-block text-rose-700 font-semibold hover:underline"
              >
                {m.preK2Page.contactLink}
              </a>
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/early-years/pre-k2")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.preK2Page.ctaTitle}
        text={m.preK2Page.ctaText}
        buttonLabel={m.preK2Page.ctaButton}
        buttonHref={withLocale(locale, "/contact")}
      />

      <PhotoPair
        left={{ src: "/images/learning/early/pre-k2-01.png", alt: m.preK2Page.photoLeftAlt }}
        right={{ src: "/images/learning/early/pre-k2-03.png", alt: m.preK2Page.photoRightAlt }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
