import TopBar from "../../../../components/TopBar";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CampusHero from "../../../../components/CampusHero";
import ApplyNowButton from "../../../../components/ApplyNowButton";
import MaroonBanner from "../../../../components/MaroonBanner";
import QuickNavBox from "../../../../components/QuickNavBox";
import TuitionFeesBlock from "../../../../components/fees/TuitionFeesBlock";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function TuitionFeesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.admissionsTuition.quickNav.admissions, href: withLocale(locale, "/admissions") },
    { label: m.admissionsTuition.quickNav.criteria, href: withLocale(locale, "/admissions/admissions-criteria") },
    { label: m.admissionsTuition.quickNav.process, href: withLocale(locale, "/admissions/application-process") },
    { label: m.admissionsTuition.quickNav.campus, href: withLocale(locale, "/about/our-campus") },
    { label: m.admissionsTuition.quickNav.tuition, href: withLocale(locale, "/admissions/tuition-fees") },
    { label: m.admissionsTuition.quickNav.store, href: withLocale(locale, "/admissions/store") },
    { label: m.admissionsTuition.quickNav.faqs, href: withLocale(locale, "/admissions/faqs") },
  ];

  return (
    <div>
      <TopBar />
      <Header />
      <ApplyNowButton href={withLocale(locale, "/admissions")} />

      <MaroonBanner
        kicker={m.admissionsTuition.kicker}
        title={m.admissionsTuition.title}
        subtitle={m.admissionsTuition.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* NOTE: TuitionFeesBlock itself is not translated yet unless we add messages inside it */}
            <TuitionFeesBlock />
          </div>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/admissions/tuition-fees")}
              />
            </div>
          </aside>
        </div>
      </main>

      {/* Gray band */}
      <section className="bg-[#c9c9c9]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#b91c1c]">
            {m.admissionsTuition.band.title}
          </h2>

          <div className="mt-4 max-w-3xl space-y-3 text-slate-700 leading-relaxed text-sm">
            <p className="font-semibold text-slate-800">
              {m.admissionsTuition.band.importantTitle}
            </p>
            <p>{m.admissionsTuition.band.p1}</p>
            <p className="italic text-slate-600">{m.admissionsTuition.band.p2}</p>
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href={withLocale(locale, "/admissions")}
              className="inline-flex items-center justify-center rounded-md bg-[#b91c1c] px-8 py-3 text-sm font-extrabold text-white hover:bg-[#a11616]"
            >
              {m.admissionsTuition.band.cta}
            </a>
          </div>
        </div>
      </section>

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
