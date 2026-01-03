import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusHero from "@/components/CampusHero";
import MaroonBanner from "@/components/MaroonBanner";
import QuickNavBox from "@/components/QuickNavBox";
import ApplyNowButton from "@/components/ApplyNowButton";
import MiniMonth from "@/components/MiniMonth";
import CalendarLegend from "@/components/CalendarLegend";
import DatesToRemember from "@/components/DatesToRemember";
import { EVENTS } from "@/data/calendar";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.calendarPage.quickNav.about, href: withLocale(locale, "/about") },
    { label: m.calendarPage.quickNav.mission, href: withLocale(locale, "/about/our-mission-and-vision") },
    { label: m.calendarPage.quickNav.leadership, href: withLocale(locale, "/about#leadership") },
    { label: m.calendarPage.quickNav.board, href: withLocale(locale, "/about#board") },
    { label: m.calendarPage.quickNav.history, href: withLocale(locale, "/about#history") },
    { label: m.calendarPage.quickNav.campus, href: withLocale(locale, "/about/our-campus") },
    { label: m.calendarPage.quickNav.calendar, href: withLocale(locale, "/calendar") },
    { label: m.calendarPage.quickNav.childProtection, href: withLocale(locale, "/child-protection") },
    { label: m.calendarPage.quickNav.awards, href: withLocale(locale, "/about#awards") },
  ];

  const start = new Date(2025, 7, 1); // Aug 2025 (month 7)
  const months = Array.from({ length: 12 }).map((_, i) => {
    const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  return (
    <div>
      <TopBar />
      <Header />
      <ApplyNowButton href={withLocale(locale, "/admissions")} />

      <MaroonBanner
        kicker={m.calendarPage.kicker}
        title={m.calendarPage.title}
        subtitle={m.calendarPage.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              {m.calendarPage.yearRange}
            </div>

            <p className="mt-3 text-slate-700 leading-relaxed max-w-3xl">
              {m.calendarPage.intro}
            </p>

            {/* 12 mini-months grid */}
            <div className="mt-10 grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
              {months.map((mo) => (
  <MiniMonth
    key={`${mo.year}-${mo.month}`}
    year={mo.year}
    month={mo.month}
    events={EVENTS}
    locale={locale}
    dowShort={m.calendar.dowShort}
    titleMap={m.calendar.events}
  />
))}

            </div>

            {/* Legend + Dates list */}
            {/* NOTE: these components also need i18n if they contain text */}
            <CalendarLegend labels={m.calendar.categories} />

<DatesToRemember
  events={EVENTS}
  locale={locale}
  title={m.calendar.datesToRememberTitle}
  titleMap={m.calendar.events}
/>

            
          </div>

          <div className="hidden lg:block">
            <QuickNavBox items={QUICK_NAV} activeHref={withLocale(locale, "/calendar")} />
          </div>
        </div>
      </main>

      <section className="bg-slate-300/80 border-t border-slate-300">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
          <h2 className="text-4xl font-extrabold text-rose-700">
            {m.calendarPage.bandTitle}
          </h2>

          <div className="mt-4 max-w-4xl text-sm md:text-base text-slate-700 leading-relaxed space-y-3">
            <p>{m.calendarPage.bandP1}</p>
            <p>{m.calendarPage.bandP2}</p>
          </div>

          <a
            href={withLocale(locale, "/downloads/calendar-2025-2026.pdf")}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-rose-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-rose-600"
          >
            <span className="inline-block h-4 w-4 rounded-sm bg-white/20" />
            {m.calendarPage.bandDownload}
          </a>
        </div>
      </section>

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
