import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusHero from "@/components/CampusHero";
import MaroonBanner from "@/components/MaroonBanner";
import QuickNavBox from "@/components/QuickNavBox";
import GrayBandCTA from "@/components/GrayBandCTA";
import PhotoPair from "@/components/PhotoPair";
import HoverRevealTile from "@/components/HoverRevealTile";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function EarlyYearsPage({
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
    { label: m.learning.primary, href: withLocale(locale, "/learning/primary") },
    { label: m.learning.activities, href: withLocale(locale, "/learning/activities") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.earlyYearsPage.kicker}
        title={m.earlyYearsPage.title}
        subtitle={m.earlyYearsPage.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              {m.earlyYearsPage.heading}
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              {m.earlyYearsPage.intro}
            </p>

            {/* Tiles */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <HoverRevealTile
                title={m.earlyYearsPage.tilePreK2Title}
                href={withLocale(locale, "/learning/early-years/pre-k2")}
                src="/images/learning/early/pre-k2-01.png"
                alt={m.earlyYearsPage.tilePreK2Alt}
              />
              <HoverRevealTile
                title={m.earlyYearsPage.tilePreK34Title}
                href={withLocale(locale, "/learning/early-years/pre-k3-pre-k4")}
                src="/images/learning/early/pre-k2-02.png"
                alt={m.earlyYearsPage.tilePreK34Alt}
              />
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/early-years")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.earlyYearsPage.ctaTitle}
        text={m.earlyYearsPage.ctaText}
        buttonLabel={m.earlyYearsPage.ctaButton}
        buttonHref={withLocale(locale, "/contact")}
      />

      <PhotoPair
        left={{ src: "/images/learning/early/early-01.png", alt: m.earlyYearsPage.photoLeftAlt }}
        right={{ src: "/images/learning/early/early-02.png", alt: m.earlyYearsPage.photoRightAlt }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
