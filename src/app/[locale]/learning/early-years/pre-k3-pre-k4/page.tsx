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

export default async function PreK34Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.preK34Page.quickNav.learning, href: withLocale(locale, "/learning") },
    { label: m.preK34Page.quickNav.earlyYears, href: withLocale(locale, "/learning/early-years") },
    { label: m.preK34Page.quickNav.preK2, href: withLocale(locale, "/learning/early-years/pre-k2") },
    { label: m.preK34Page.quickNav.preK34, href: withLocale(locale, "/learning/early-years/pre-k3-pre-k4") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.preK34Page.banner.kicker}
        title={m.preK34Page.banner.title}
        subtitle={m.preK34Page.banner.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {m.preK34Page.main.title}
            </h2>

            <p className="mt-3 text-slate-700 leading-relaxed">
              {m.preK34Page.main.intro}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.philosophyTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.philosophyText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.curriculumTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.curriculumIntro}
            </p>

            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              {m.preK34Page.main.subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <p className="mt-3 text-slate-700 leading-relaxed">
              {m.preK34Page.main.curriculumText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.goalsTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.goalsIntro}
            </p>

            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              {m.preK34Page.main.goals.map((g) => (
                <li key={g.label}>
                  <b>{g.label}:</b> {g.desc}
                </li>
              ))}
            </ul>

            <p className="mt-3 text-slate-700 leading-relaxed">
              {m.preK34Page.main.goalsText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.envTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.envText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.staffTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.staffText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.parentsTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.parentsText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.diversityTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.diversityText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.extraTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.extraText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.familiesTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.familiesText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.preK34Page.main.readyTitle}
            </h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.preK34Page.main.readyText}
            </p>

            <div className="mt-4">
              <a
                href={withLocale(locale, "/contact")}
                className="inline-block text-rose-700 font-semibold hover:underline"
              >
                {m.preK34Page.main.contactLink}
              </a>
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/early-years/pre-k3-pre-k4")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.preK34Page.cta.title}
        text={m.preK34Page.cta.text}
        buttonLabel={m.preK34Page.cta.button}
        buttonHref={withLocale(locale, "/contact")}
      />

      <PhotoPair
        left={{
          src: "/images/learning/early/pre-k2-01.png",
          alt: m.preK34Page.photos.leftAlt,
        }}
        right={{
          src: "/images/learning/early/pre-k2-02.png",
          alt: m.preK34Page.photos.rightAlt,
        }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
