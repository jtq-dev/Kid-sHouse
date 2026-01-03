import TopBar from "../../../../components/TopBar";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CampusHero from "../../../../components/CampusHero";
import MaroonBanner from "../../../../components/MaroonBanner";
import QuickNavBox from "../../../../components/QuickNavBox";
import GrayBandCTA from "../../../../components/GrayBandCTA";
import PhotoPair from "../../../../components/PhotoPair";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function ApplicationProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.admissionsFaq.quickNav.admission, href: withLocale(locale, "/admissions") },
    { label: m.admissionsFaq.quickNav.criteria, href: withLocale(locale, "/admissions/admissions-criteria") },
    { label: m.admissionsFaq.quickNav.process, href: withLocale(locale, "/admissions/application-process") },
    { label: m.admissionsFaq.quickNav.campus, href: withLocale(locale, "/about/our-campus") },
    { label: m.admissionsFaq.quickNav.fees, href: withLocale(locale, "/admissions/tuition-fees") },
    { label: m.admissionsFaq.quickNav.faqs, href: withLocale(locale, "/admissions/faqs") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.applicationProcess.kicker}
        title={m.applicationProcess.title}
        subtitle={m.applicationProcess.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT CONTENT */}
          <section>
            <p className="text-slate-700 leading-relaxed">
              {m.applicationProcess.intro}
            </p>

            <h3 className="mt-8 font-extrabold text-slate-900">
              {m.applicationProcess.stepsTitle}
            </h3>
            <ol className="mt-3 list-decimal pl-5 text-slate-700 space-y-1">
              {m.applicationProcess.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.applicationProcess.s1Title}
            </h2>
            <p className="mt-2 text-slate-700">{m.applicationProcess.s1Text}</p>
            <a
              href={withLocale(locale, "/contact")}
              className="mt-3 inline-block text-rose-700 font-semibold hover:underline"
            >
              {m.applicationProcess.s1Link}
            </a>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.applicationProcess.s2Title}
            </h2>
            <p className="mt-2 text-slate-700">{m.applicationProcess.s2Text}</p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              {m.applicationProcess.docs.map((d) => (
                <li key={d.label}>
                  <b>{d.label}:</b> {d.desc}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.applicationProcess.s3Title}
            </h2>
            <p className="mt-2 text-slate-700">{m.applicationProcess.s3Text}</p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.applicationProcess.s4Title}
            </h2>
            <p className="mt-2 text-slate-700">{m.applicationProcess.s4Text}</p>

            <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
              {m.applicationProcess.enrollTitle}
            </h2>
            <p className="mt-2 text-slate-700">{m.applicationProcess.enrollText}</p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              {m.applicationProcess.contactTitle}
            </h3>
            <p className="mt-2 text-slate-700">{m.applicationProcess.contactText}</p>
            <div className="mt-2 text-slate-700">
              <div>— {m.applicationProcess.contactEmail}: tchuileng2007@gmail.com</div>
              <div>— {m.applicationProcess.contactPhone}: +237 699038487</div>
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/admissions/application-process")}
                title={m.about.quickNavTitle}
              />
            </div>
          </aside>
        </div>
      </main>

      <GrayBandCTA
        title={m.applicationProcess.ctaTitle}
        text={m.applicationProcess.ctaText}
        buttonLabel={m.applicationProcess.ctaButton}
        buttonHref={withLocale(locale, "/contact")}
      />

      <PhotoPair
        left={{ src: "/images/admissions/apply-01.png", alt: m.applicationProcess.photoAlt1 }}
        right={{ src: "/images/admissions/apply-02.png", alt: m.applicationProcess.photoAlt2 }}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
