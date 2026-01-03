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

export default async function LowerElementaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.lowerElementaryPage.quickNav.learning, href: withLocale(locale, "/learning") },
    { label: m.lowerElementaryPage.quickNav.earlyChildhood, href: withLocale(locale, "/learning/early-years") },
    { label: m.lowerElementaryPage.quickNav.elementarySchool, href: withLocale(locale, "/learning/primary") },
    { label: m.lowerElementaryPage.quickNav.studentSupport, href: withLocale(locale, "/learning/student-support") },
    { label: m.lowerElementaryPage.quickNav.serviceLearning, href: withLocale(locale, "/learning/service-learning") },
  ];

  const contactHref = withLocale(locale, "/contact");

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.lowerElementaryPage.kicker}
        title={m.lowerElementaryPage.title}
        subtitle={m.lowerElementaryPage.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <p className="text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.intro}
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.curriculumTitle}
            </h2>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.curriculumP1}
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.curriculumP2}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.readingTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.readingText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.mathTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.mathText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.integratedTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.integratedText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.characterTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.characterText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.dynamicTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.dynamicText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.extracurricularTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.extracurricularText}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.parentsTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.parentsIntro}
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="font-extrabold text-slate-900">
                  {m.lowerElementaryPage.readingCardTitle}
                </h4>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                  {m.lowerElementaryPage.readingBullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h4 className="font-extrabold text-slate-900">
                  {m.lowerElementaryPage.mathCardTitle}
                </h4>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                  {m.lowerElementaryPage.mathBullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="mt-12 text-xl font-extrabold text-slate-900">
              {m.lowerElementaryPage.joinTitle}
            </h3>

            <p className="mt-2 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.joinText}
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              {m.lowerElementaryPage.readyTextBeforeLink}{" "}
              <a href={contactHref} className="text-rose-700 font-semibold hover:underline">
                {m.lowerElementaryPage.readyLinkText}
              </a>{" "}
              {m.lowerElementaryPage.readyTextAfterLink}
            </p>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/learning/primary/lower-elementary")}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.lowerElementaryPage.ctaTitle}
        text={m.lowerElementaryPage.ctaText}
        buttonLabel={m.lowerElementaryPage.ctaButton}
        buttonHref={contactHref}
      />

      <PhotoPair
        left={{
          src: "/images/learning/primary/lower_elementary/lower-01.png",
          alt: m.lowerElementaryPage.photoLeftAlt,
        }}
        right={{
          src: "/images/learning/primary/lower_elementary/lower-02.png",
          alt: m.lowerElementaryPage.photoRightAlt,
        }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
