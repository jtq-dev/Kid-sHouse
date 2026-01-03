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

export default async function BilingualSectionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.nav.learning, href: withLocale(locale, "/learning") },
    { label: m.bilingualSectionsPage.title, href: withLocale(locale, "/learning/bilingual-sections") },
    { label: m.learning.primary, href: withLocale(locale, "/learning/primary") },
    { label: m.learning.bilingual, href: withLocale(locale, "/learning/bilingual-sections") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.bilingualSectionsPage.kicker}
        title={m.bilingualSectionsPage.title}
        subtitle={m.bilingualSectionsPage.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <p className="text-slate-700 leading-relaxed">
              {m.bilingualSectionsPage.intro}
            </p>

            {/* Big bilingual highlight cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* English */}
              <a
                href="#english"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-extrabold text-slate-900">
                    {m.bilingualSectionsPage.highlightEnglishTitle}
                  </h2>
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-700">
                    {m.bilingualSectionsPage.highlightEnglishCta}
                  </span>
                </div>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {m.bilingualSectionsPage.highlightEnglishDesc}
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                  {m.bilingualSectionsPage.highlightEnglishBullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </a>

              {/* French */}
              <a
                href="#french"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-extrabold text-slate-900">
                    {m.bilingualSectionsPage.highlightFrenchTitle}
                  </h2>
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-700">
                    {m.bilingualSectionsPage.highlightFrenchCta}
                  </span>
                </div>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {m.bilingualSectionsPage.highlightFrenchDesc}
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                  {m.bilingualSectionsPage.highlightFrenchBullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </a>
            </div>

            {/* Flyer image */}
            <div className="mt-10 rounded-2xl border border-slate-200 overflow-hidden bg-white">
              <div className="px-5 py-4 border-b border-slate-200">
                <h3 className="font-extrabold text-slate-900">
                  {m.bilingualSectionsPage.flyerTitle}
                </h3>
              </div>
              <div className="p-4">
                <img
                  src="/images/learning/bilingual-section/bilingual.png"
                  alt={m.bilingualSectionsPage.flyerAlt}
                  className="w-full rounded-xl border border-slate-200"
                />
              </div>
            </div>

            {/* ENGLISH SECTION */}
            <div id="english" className="scroll-mt-28">
              <h2 className="mt-12 text-2xl font-extrabold text-slate-900">
                {m.bilingualSectionsPage.englishTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.bilingualSectionsPage.englishText}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-extrabold text-slate-900">
                    {m.bilingualSectionsPage.englishLevelsTitle}
                  </h3>
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                    {m.bilingualSectionsPage.englishLevelsBullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-extrabold text-slate-900">
                    {m.bilingualSectionsPage.englishLoveTitle}
                  </h3>
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                    {m.bilingualSectionsPage.englishLoveBullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FRENCH SECTION */}
            <div id="french" className="scroll-mt-28">
              <h2 className="mt-12 text-2xl font-extrabold text-slate-900">
                {m.bilingualSectionsPage.frenchTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.bilingualSectionsPage.frenchText}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-extrabold text-slate-900">
                    {m.bilingualSectionsPage.frenchLevelsTitle}
                  </h3>
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                    {m.bilingualSectionsPage.frenchLevelsBullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-extrabold text-slate-900">
                    {m.bilingualSectionsPage.frenchStrengthsTitle}
                  </h3>
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                    {m.bilingualSectionsPage.frenchStrengthsBullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* How to choose */}
            <h2 className="mt-12 text-2xl font-extrabold text-slate-900">
              {m.bilingualSectionsPage.chooseTitle}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.bilingualSectionsPage.chooseText}
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 p-5 bg-white">
              <h3 className="font-extrabold text-slate-900">
                {m.bilingualSectionsPage.helpTitle}
              </h3>
              <p className="mt-2 text-slate-700">
                {m.bilingualSectionsPage.helpText}
              </p>
              <a
                href={withLocale(locale, "/contact")}
                className="mt-4 inline-block rounded-xl bg-rose-700 px-5 py-3 text-white font-semibold hover:bg-rose-800"
              >
                {m.bilingualSectionsPage.helpButton}
              </a>
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/bilingual-sections")}
              />

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-extrabold text-slate-900 tracking-wide">
                  {m.bilingualSectionsPage.onThisPage}
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <a className="block text-rose-700 font-semibold hover:underline" href="#english">
                    {m.bilingualSectionsPage.englishTitle}
                  </a>
                  <a className="block text-rose-700 font-semibold hover:underline" href="#french">
                    {m.bilingualSectionsPage.frenchTitle}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.bilingualSectionsPage.ctaTitle}
        text={m.bilingualSectionsPage.ctaText}
        buttonLabel={m.bilingualSectionsPage.ctaButton}
        buttonHref={withLocale(locale, "/admissions")}
      />

      <PhotoPair
        left={{
          src: "/images/learning/bilingual-section/english.jpeg",
          alt: m.bilingualSectionsPage.photoEnglishAlt,
        }}
        right={{
          src: "/images/learning/bilingual-section/french.jpeg",
          alt: m.bilingualSectionsPage.photoFrenchAlt,
        }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
