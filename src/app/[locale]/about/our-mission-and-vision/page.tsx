import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import { Card, SectionTitle } from "@/components/UI";
import ValuesInfographic from "@/components/ValuesInfographic";
import GraduateProfile from "@/components/GraduateProfile";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function MissionVisionPage({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolved = await Promise.resolve(params);
  const locale = isLocale(resolved.locale) ? (resolved.locale as Locale) : "en";
  const m = getMessages(locale);

  return (
    <div>
      <TopBar />
      <Header />

      <PageShell
        title={m.missionVision.title}
        quickNav={[
          { label: m.missionVision.quickNav.vision, href: "#vision" },
          { label: m.missionVision.quickNav.values, href: "#values" },
          { label: m.missionVision.quickNav.graduateProfile, href: "#graduate-profile" },
        ]}
      >
        <div className="text-sm text-slate-600">
          <a className="font-semibold hover:text-slate-900" href="/about">
            {m.missionVision.breadcrumbAbout}
          </a>{" "}
          <span className="opacity-60">/</span>{" "}
          <span className="font-semibold text-slate-900">
            {m.missionVision.breadcrumbCurrent}
          </span>
        </div>

        {/* Vision */}
        <section id="vision" className="mt-6">
          <SectionTitle
            kicker={m.missionVision.vision.kicker}
            title={m.missionVision.vision.title}
          />
          <Card className="p-7 md:p-9">
            <p className="text-slate-700 leading-relaxed text-lg">
              {m.missionVision.vision.statement}
            </p>
          </Card>
        </section>

        {/* Values infographic */}
        <section id="values" className="mt-12">
          <ValuesInfographic
  kicker={m.valuesInfographic.kicker}
  items={m.valuesInfographic.items}
/>
        </section>

        {/* Graduate profile infographic */}
        <section id="graduate-profile" className="mt-14">
<GraduateProfile
  kicker={m.graduateProfile.kicker}
  title={m.graduateProfile.title}
  intro={m.graduateProfile.intro}
  items={m.graduateProfile.items}
/>
        </section>
      </PageShell>

      <Footer locale={locale} m={m} />

    </div>
  );
}
