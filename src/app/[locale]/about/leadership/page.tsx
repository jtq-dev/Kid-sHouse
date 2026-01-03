import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusHero from "@/components/CampusHero";
import MaroonBanner from "@/components/MaroonBanner";
import QuickNavBox from "@/components/QuickNavBox";
import ApplyNowButton from "@/components/ApplyNowButton";
import BoardStrip from "@/components/BoardStrip";
import LeadershipGrid from "@/components/LeadershipGrid";
import { ADMIN_TEAM } from "@/data/leadership";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolved = await Promise.resolve(params);
  const locale: Locale = isLocale(resolved.locale) ? (resolved.locale as Locale) : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.about.aboutHome, href: withLocale(locale, "/about") },
    { label: m.about.mission, href: withLocale(locale, "/about/our-mission-and-vision") },
    { label: m.about.leadership, href: withLocale(locale, "/about/leadership") },
    { label: m.about.boardMembers, href: `${withLocale(locale, "/about/leadership")}#board` },
    { label: m.about.history, href: `${withLocale(locale, "/about")}#history` },
    { label: m.about.campus, href: withLocale(locale, "/about/our-campus") },
    { label: m.about.calendar, href: withLocale(locale, "/calendar") },
    { label: m.about.childProtection, href: withLocale(locale, "/about/child-protection") },
    { label: m.about.awards, href: `${withLocale(locale, "/about")}#awards` },
  ];

  return (
    <div>
      <TopBar />
      <Header />
      <ApplyNowButton href={withLocale(locale, "/admissions")} />

      <MaroonBanner
        kicker={m.leadership.kicker}
        title={m.leadership.title}
        subtitle={m.leadership.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div className="text-slate-700 leading-relaxed">
            <p className="max-w-3xl">
              <span className="font-extrabold text-slate-900">{m.leadership.managementTitle}</span>
              <br />
              {m.leadership.managementText}
            </p>
          </div>

          <div className="hidden lg:block">
            <QuickNavBox
              title={m.about.quickNavTitle}
              items={QUICK_NAV}
              activeHref={withLocale(locale, "/about/leadership")}
            />
          </div>
        </div>
      </main>

      <BoardStrip
  imageAlt={m.leadership.board.imageAlt}
  title={m.leadership.board.title}
  text={m.leadership.board.text}
  buttonLabel={m.leadership.board.button}
/>


      <LeadershipGrid title={m.leadership.adminTeamTitle} people={ADMIN_TEAM} />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
