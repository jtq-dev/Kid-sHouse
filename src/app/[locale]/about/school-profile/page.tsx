import TopBar from "../../../../components/TopBar";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CampusHero from "../../../../components/CampusHero";
import MaroonBanner from "../../../../components/MaroonBanner";
import QuickNavBox from "../../../../components/QuickNavBox";
import PolaroidGallery from "../../../../components/PolaroidGallery";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function SchoolProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? (raw as Locale) : "en";
  const m = getMessages(locale);

  const ABOUT_NAV = [
    { label: m.about.aboutHome, href: withLocale(locale, "/about") },
    { label: m.about.leadership, href: withLocale(locale, "/about#leadership") },
    { label: m.about.boardMembers, href: withLocale(locale, "/about#board") },
    { label: m.about.mission, href: withLocale(locale, "/about/our-mission-and-vision") },
    { label: m.about.history, href: withLocale(locale, "/about#history") },
    { label: m.about.campus, href: withLocale(locale, "/about/our-campus") },
    { label: m.about.calendar, href: withLocale(locale, "/calendar") },
    { label: m.about.childProtection, href: withLocale(locale, "/about/child-protection") },
    { label: m.about.awards, href: withLocale(locale, "/about#awards") },
  ];

  return (
    <div>
      <TopBar />
      <Header />

      <MaroonBanner
        kicker={m.schoolProfile.kicker}
        title={m.schoolProfile.title}
        subtitle={m.schoolProfile.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div className="space-y-10">
            <section id="organization">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.organizationTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.organizationText}
              </p>
            </section>

            <section id="accreditations">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.accreditationsTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.accreditationsText}
              </p>
            </section>

            <section id="school-year">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.schoolYearTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.schoolYearText}
              </p>
            </section>

            <section id="curriculum">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.curriculumTitle}
              </h2>

              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.curriculumIntro}
              </p>

              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                {m.schoolProfile.sections.curriculumBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <p className="mt-3 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.curriculumOutro}
              </p>
            </section>

            <section id="faculty">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.facultyTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.facultyText}
              </p>
            </section>

            <section id="enrollment">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.enrollmentTitle}
              </h2>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.enrollmentText}
              </p>
            </section>

            <section id="facilities">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {m.schoolProfile.sections.facilitiesTitle}
              </h2>

              <p className="mt-2 text-slate-700 leading-relaxed">
                {m.schoolProfile.sections.facilitiesIntro}
              </p>

              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                {m.schoolProfile.sections.facilitiesBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="hidden lg:block">
            <QuickNavBox
              title={m.about.quickNavTitle}
              items={ABOUT_NAV}
              activeHref={withLocale(locale, "/about/school-profile")}
            />
          </div>
        </div>
      </main>

      <section className="bg-slate-200/70 border-t border-slate-300">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
          <h2 className="text-4xl font-extrabold text-rose-700">
            {m.schoolProfile.campusTourTitle}
          </h2>
          <p className="mt-4 max-w-4xl text-slate-700 leading-relaxed">
            {m.schoolProfile.campusTourText}
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
            <div className="aspect-video">
              <video className="h-full w-full" controls>
  <source src="/video.mp4" type="video/mp4" />
</video>

            </div>
          </div>
        </div>
      </section>

      <PolaroidGallery
        items={[
          { src: "/images/school-profile/board.png", alt: m.schoolProfile.galleryAlt1 },
          { src: "/images/school-profile/student.png", alt: m.schoolProfile.galleryAlt2 },
        ]}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
