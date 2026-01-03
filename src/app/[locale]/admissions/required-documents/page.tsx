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

export default async function RequiredDocumentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.admissionsRequiredDocs.quickNav.admission, href: withLocale(locale, "/admissions") },
    { label: m.admissionsRequiredDocs.quickNav.criteria, href: withLocale(locale, "/admissions/admissions-criteria") },
    { label: m.admissionsRequiredDocs.quickNav.process, href: withLocale(locale, "/admissions/application-process") },
    { label: m.admissionsRequiredDocs.quickNav.required, href: withLocale(locale, "/admissions/required-documents") },
    { label: m.admissionsRequiredDocs.quickNav.campus, href: withLocale(locale, "/about/our-campus") },
    { label: m.admissionsRequiredDocs.quickNav.fees, href: withLocale(locale, "/admissions/tuition-fees") },
    { label: m.admissionsRequiredDocs.quickNav.faqs, href: withLocale(locale, "/admissions/faqs") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.admissionsRequiredDocs.kicker}
        title={m.admissionsRequiredDocs.title}
        subtitle={m.admissionsRequiredDocs.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          {/* LEFT */}
          <section>
            <p className="text-slate-700 leading-relaxed">
              {m.admissionsRequiredDocs.intro}
            </p>

            <div className="mt-10 space-y-10">
              {m.admissionsRequiredDocs.sections.map((sec) => (
                <div key={sec.title}>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    {sec.title}
                  </h2>

                  <div className="mt-4 overflow-hidden rounded-sm border border-slate-300">
                    {sec.items.map((it, idx) => (
                      <div
                        key={it.label}
                        className={`grid gap-2 px-4 py-3 border-b border-slate-200 last:border-b-0 ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <div className="font-semibold text-slate-900">
                          {it.label}
                        </div>
                        <div className="text-sm text-slate-700">
                          {it.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-10 rounded-sm border border-slate-200 bg-slate-50 p-4">
              <div className="font-bold text-slate-900">
                {m.admissionsRequiredDocs.noteTitle}
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {m.admissionsRequiredDocs.noteBullets.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* RIGHT QUICK NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                items={QUICK_NAV}
                activeHref={withLocale(locale, "/admissions/required-documents")}
              />
            </div>
          </aside>
        </div>
      </main>

      <PhotoPair
        left={{ src: "/images/admissions/apply-01.png", alt: m.admissionsRequiredDocs.photos.leftAlt }}
        right={{ src: "/images/admissions/apply-02.png", alt: m.admissionsRequiredDocs.photos.rightAlt }}
      />

      <GrayBandCTA
        title={m.admissionsRequiredDocs.cta.title}
        text={m.admissionsRequiredDocs.cta.text}
        buttonLabel={m.admissionsRequiredDocs.cta.buttonLabel}
        buttonHref={withLocale(locale, "/admissions/contact")}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
