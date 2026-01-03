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

export default async function Grade5Page({
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
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.grade5Page.kicker}
        title={m.grade5Page.title}
        subtitle={m.grade5Page.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {m.grade5Page.h1}
            </h2>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.p1}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.grade5Page.expectTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.expectText}
            </p>

            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              <li>
                <b>{m.grade5Page.mathLabel}:</b> {m.grade5Page.mathText}
              </li>
              <li>
                <b>{m.grade5Page.literacyLabel}:</b> {m.grade5Page.literacyText}
              </li>
              <li>
                <b>{m.grade5Page.scienceLabel}:</b> {m.grade5Page.scienceText}
              </li>
            </ul>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.grade5Page.digitalTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.digitalText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.grade5Page.leadersTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.leadersIntro}
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              {m.grade5Page.leadersBullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-4 text-slate-700 leading-relaxed">
              {m.grade5Page.leadersOutro}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.grade5Page.envTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.envIntro}
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              {m.grade5Page.envBullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-4 text-slate-700 leading-relaxed">
              {m.grade5Page.envOutro}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.grade5Page.beyondTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.beyondText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.grade5Page.parentsTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.parentsText}
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              {m.grade5Page.parentsBullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-4 text-slate-700 leading-relaxed">
              {m.grade5Page.parentsOutro}
            </p>

            <h3 className="mt-12 text-xl font-extrabold text-slate-900">
              {m.grade5Page.nextTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.grade5Page.nextText}
            </p>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/primary/grade-5")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.grade5Page.ctaTitle}
        text={m.grade5Page.ctaText}
        buttonLabel={m.grade5Page.ctaButton}
        buttonHref={withLocale(locale, "/contact")}
      />

      <PhotoPair
        left={{
          src: "/images/learning/primary/grade5/grade5-01.png",
          alt: m.grade5Page.photoLeftAlt,
        }}
        right={{
          src: "/images/learning/primary/grade5/grade5-02.png",
          alt: m.grade5Page.photoRightAlt,
        }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
