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

export default async function UpperElementaryPage({
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
    { label: m.upperElementaryPage.bannerKicker, href: withLocale(locale, "/learning/primary") }
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.upperElementaryPage.bannerKicker}
        title={m.upperElementaryPage.bannerTitle}
        subtitle={m.upperElementaryPage.bannerSubtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <p className="text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p1}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2a}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p2}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2b}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p3}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2c}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p4}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2d}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed font-semibold">
              {m.upperElementaryPage.p5b}
            </p>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p5}
            </p>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p6}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2e}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p7}
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p8}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2f}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p9}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.upperElementaryPage.h2g}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.upperElementaryPage.p10}
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              <a
                href={withLocale(locale, "/contact")}
                className="text-rose-700 font-semibold hover:underline"
              >
                {m.upperElementaryPage.contactLink}
              </a>{" "}
              {m.upperElementaryPage.contactTail}
            </p>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/primary/upper-elementary")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.upperElementaryPage.ctaTitle}
        text={m.upperElementaryPage.ctaText}
        buttonLabel={m.upperElementaryPage.ctaButton}
        buttonHref={withLocale(locale, "/contact")}
      />

      <PhotoPair
        left={{
          src: "/images/learning/primary/upper_elementary/elementary-01.png",
          alt: m.upperElementaryPage.photoLeftAlt,
        }}
        right={{
          src: "/images/learning/primary/upper_elementary/elementary-02.png",
          alt: m.upperElementaryPage.photoRightAlt,
        }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
