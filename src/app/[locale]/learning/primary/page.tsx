import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusHero from "@/components/CampusHero";
import MaroonBanner from "@/components/MaroonBanner";
import QuickNavBox from "@/components/QuickNavBox";
import GrayBandCTA from "@/components/GrayBandCTA";
import ProgramTile from "@/components/ProgramTile";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function PrimaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.nav.learning, href: withLocale(locale, "/learning") },
    { label: m.earlyYearsPage?.title ?? "Early Childhood", href: withLocale(locale, "/learning/early-years") },
    { label: m.primaryPage.title, href: withLocale(locale, "/learning/primary") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.primaryPage.kicker}
        title={m.primaryPage.title}
        subtitle={m.primaryPage.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <p className="text-slate-700 leading-relaxed max-w-2xl">
              {m.primaryPage.intro}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <ProgramTile
                title={m.primaryPage.tiles.lowerTitle}
                subtitle={m.primaryPage.tiles.lowerSubtitle}
                href={withLocale(locale, "/learning/primary/lower-elementary")}
                src="/images/learning/primary/lower.png"
                alt={m.primaryPage.tiles.lowerAlt}
              />
              <ProgramTile
                title={m.primaryPage.tiles.upperTitle}
                subtitle={m.primaryPage.tiles.upperSubtitle}
                href={withLocale(locale, "/learning/primary/upper-elementary")}
                src="/images/learning/primary/grade4.png"
                alt={m.primaryPage.tiles.upperAlt}
              />
              <ProgramTile
                title={m.primaryPage.tiles.grade5Title}
                subtitle={m.primaryPage.tiles.grade5Subtitle}
                href={withLocale(locale, "/learning/primary/grade-5")}
                src="/images/learning/primary/grade5.png"
                alt={m.primaryPage.tiles.grade5Alt}
              />
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/primary")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.primaryPage.ctaTitle}
        text={m.primaryPage.ctaText}
        buttonLabel={m.primaryPage.ctaButton}
        buttonHref={withLocale(locale, "/contact")}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
