import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import { Card, SectionTitle } from "@/components/UI";
import CampusHero from "@/components/CampusHero";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function OurCampusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? (raw as Locale) : "en";
  const m = getMessages(locale);

  return (
    <div>
      <TopBar />
      <Header />

      {/* ASD-like campus panel */}
      <CampusHero />

      <PageShell
        title={m.campus.title}
        subtitle={m.campus.subtitle}
        quickNav={[
          { label: m.campus.navFacilities, href: "#facilities" },
          { label: m.campus.navSafety, href: "#safety" },
          { label: m.campus.navActivities, href: "#activities" },
          { label: m.campus.navLocation, href: "#location" },
        ]}
      >
        <section id="facilities">
          <SectionTitle kicker={m.campus.kicker} title={m.campus.facilitiesTitle} />
          <Card className="p-6">{m.campus.facilitiesText}</Card>
        </section>

        <section id="safety" className="mt-10">
          <SectionTitle kicker={m.campus.kicker} title={m.campus.safetyTitle} />
          <Card className="p-6">{m.campus.safetyText}</Card>
        </section>

        <section id="activities" className="mt-10">
          <SectionTitle kicker={m.campus.kicker} title={m.campus.activitiesTitle} />
          <Card className="p-6">{m.campus.activitiesText}</Card>
        </section>

        <section id="location" className="mt-10">
          <SectionTitle kicker={m.campus.kicker} title={m.campus.locationTitle} />
          <Card className="overflow-hidden">
            <iframe
  title="map"
  className="w-full h-80"
  loading="lazy"
  src="https://www.google.com/maps?q=Groupe%20scolaire%20bilingue%20KID%27s%20House%20Douala&output=embed"
/>
          </Card>
        </section>
      </PageShell>

      <Footer locale={locale} m={m} />

    </div>
  );
}
