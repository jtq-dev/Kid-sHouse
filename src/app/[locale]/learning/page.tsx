import TopBar from "../../../components/TopBar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageShell from "../../../components/PageShell";
import { Card, SectionTitle, Button } from "../../../components/UI";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  // ensures "/en/..." or "/fr/..."
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

function PreviewCard({
  title,
  text,
  imgSrc,
  imgAlt,
  href,
  buttonLabel,
}: {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  buttonLabel: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-[240px_1fr]">
        <div className="relative h-44 md:h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
        </div>

        <div className="p-6">
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{text}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button href={href} variant="outline">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

// ✅ Next (newer) sometimes gives params as a Promise.
// This works safely:
export default async function Learning({
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
        title={m.learning.title}
        subtitle={m.learning.subtitle}
        quickNav={[
          { label: m.learning.early, href: "#early" },
          { label: m.learning.primary, href: "#primary" },
          { label: m.learning.bilingual, href: "#bilingual" },
          { label: m.learning.activities, href: "#activities" },
        ]}
      >
        {/* EARLY YEARS */}
        <section id="early">
          <SectionTitle kicker={m.learning.title} title={m.learning.early} />
          <PreviewCard
            title={m.learning.early}
            text="A warm, playful start where children build confidence, language, routines, and early numeracy through hands-on learning."
            imgSrc="/images/learning/early/early-02.png"
            imgAlt="Kid’s House Early Years"
            href={withLocale(locale, "/learning/early-years")}
            buttonLabel={locale === "fr" ? "Découvrir" : "Explore"}
          />

          <Card className="mt-4 p-6">
            <div className="font-extrabold text-slate-900">
              {locale === "fr" ? "Points clés" : "Highlights"}
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>{locale === "fr" ? "Apprentissage par le jeu + routines" : "Play-based learning + daily routines"}</li>
              <li>{locale === "fr" ? "Pré-lecture, nombres, motricité fine" : "Early literacy, numbers, and fine-motor development"}</li>
              <li>{locale === "fr" ? "Autonomie, confiance, socialisation" : "Social skills, confidence, and independence"}</li>
            </ul>
          </Card>
        </section>

        {/* PRIMARY */}
        <section id="primary" className="mt-10">
          <SectionTitle kicker={m.learning.title} title={m.learning.primary} />
          <PreviewCard
            title={m.learning.primary}
            text="A strong foundation in reading, writing, mathematics, and inquiry—helping learners grow in skill, character, and independence."
            imgSrc="/images/learning/primary/grade5/grade5-02.png"
            imgAlt="Kid’s House Primary"
            href={withLocale(locale, "/learning/primary")}
            buttonLabel={locale === "fr" ? "Découvrir" : "Explore"}
          />
        </section>

        {/* BILINGUAL */}
        <section id="bilingual" className="mt-10">
          <SectionTitle kicker={m.learning.title} title={m.learning.bilingual} />
          <PreviewCard
            title={m.learning.bilingual}
            text="Kid’s House offers two learning pathways—English Section and French Section—so families can choose the program that best fits their child."
            imgSrc="/images/learning/bilingual.webp"
            imgAlt="Kid’s House bilingual sections"
            href={withLocale(locale, "/learning/bilingual-section")}
            buttonLabel={locale === "fr" ? "Voir les sections" : "Explore Bilingual Section"}
          />
        </section>

        {/* ACTIVITIES */}
        <section id="activities" className="mt-10">
          <SectionTitle kicker={m.learning.title} title={m.learning.activities} />
          <Card className="p-6">
            {locale === "fr"
              ? "Clubs, sorties, activités artistiques et sportives pour développer la confiance, l'esprit d’équipe et la créativité."
              : "Clubs, trips, arts, and sports to build confidence, teamwork, and creativity."}
          </Card>
        </section>
      </PageShell>
      <Footer locale={locale} m={m} />
    </div>
  );
}
