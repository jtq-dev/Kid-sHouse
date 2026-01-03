import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import QuickLinks from "../../components/QuickLinks";
import { Container, Card, SectionTitle, Button } from "../../components/UI";
import { CheckCircle2, Quote,CalendarDays, ShieldCheck, FileText, GraduationCap } from "lucide-react";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: string, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);
   
  const why = [
    m.home.why1,
    m.home.why2,
    m.home.why3,
    m.home.why4,
    m.home.why5,
    m.home.why6,
  ];

  const pills = [
    m.home.pill1,
    m.home.pill2,
    m.home.pill3,
    m.home.pill4,
    m.home.pill5,
    m.home.pill6,
  ];
   const links = [
  {
    icon: <GraduationCap className="text-amber-600" size={18} />,
    title: m.quickLinks.admissionsTitle,
    desc: m.quickLinks.admissionsDesc,
    href: withLocale(locale, "/admissions"),
  },
  {
    icon: <CalendarDays className="text-amber-600" size={18} />,
    title: m.quickLinks.calendarTitle,
    desc: m.quickLinks.calendarDesc,
    href: withLocale(locale, "/calendar"),
  },
  {
    icon: <ShieldCheck className="text-amber-600" size={18} />,
    title: m.quickLinks.childProtectionTitle,
    desc: m.quickLinks.childProtectionDesc,
    href: withLocale(locale, "/about/child-protection"), // IMPORTANT: your real route
  },
  {
    icon: <FileText className="text-amber-600" size={18} />,
    title: m.quickLinks.learningTitle,
    desc: m.quickLinks.learningDesc,
    href: withLocale(locale, "/learning"),
  },
];

  return (
    <div>
      <TopBar />
      <Header />

      <Hero
        badge={m.hero.badge}
        title={m.hero.title}
        subtitle={m.hero.subtitle}
        ctaApply={m.hero.ctaApply}
        ctaAbout={m.hero.ctaAbout}
        stats={[
          { k: m.hero.stats.grades, v: m.hero.stats.gradesV },
          { k: m.hero.stats.teachers, v: m.hero.stats.teachersV },
          { k: m.hero.stats.campus, v: m.hero.stats.campusV },
          { k: m.hero.stats.learning, v: m.hero.stats.learningV },
        ]}
      />

      <QuickLinks links={links} />

      {/* MESSAGE FROM DIRECTOR / FOUNDER */}
      <Container>
        <div className="mt-12">
          <SectionTitle
            kicker={m.home.welcomeKicker}
            title={m.home.welcomeTitle}
            desc={m.home.welcomeDesc}
          />

          <Card className="p-6 md:p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-700 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-700 blur-3xl" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-[220px_1fr] items-start">
              <div className="flex md:block items-center gap-4">
                <div className="shrink-0">
                  <div className="relative h-20 w-20 md:h-44 md:w-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                    <img
                      src="/images/founder.png"
                      alt="Founder & Director of Kids House"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:mt-4">
                  <div className="font-extrabold text-slate-900 leading-tight">
                    {m.home.founderName}
                  </div>
                  <div className="text-sm text-slate-600">{m.home.founderRole}</div>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {m.home.founderMeta}
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {m.home.since}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 rounded-xl bg-rose-50 p-2 border border-rose-100">
                    <Quote className="text-rose-700" size={18} />
                  </div>

                  <div>
                    <p className="text-slate-700 leading-relaxed">{m.home.msgEn1}</p>
                    <p className="mt-4 text-slate-700 leading-relaxed">{m.home.msgEn2}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {pills.map((x) => (
                        <span
                          key={x}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                        >
                          {x}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <div>
                        <div className="font-semibold text-slate-900">{m.home.founderName}</div>
                        <div className="text-sm text-slate-600">{m.home.founderRole}</div>
                      </div>
                      <div className="text-sm text-slate-600">{m.home.signatureLine}</div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <Button href="/[locale]/contact" variant="primary">
                        {m.home.ctaVisit}
                      </Button>
                      <Button href="/[locale]/learning/bilingual-section" variant="outline">
                        {m.home.ctaBilingual}
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>

      {/* WHY US */}
      <Container>
        <div className="mt-14">
          <SectionTitle kicker={m.home.whyKicker} title={m.home.whyTitle} />
          <div className="grid gap-4 md:grid-cols-2">
            {why.map((txt) => (
              <Card key={txt} className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 mt-0.5" size={20} />
                  <div>
                    <div className="font-extrabold text-slate-900">{txt}</div>
                    <div className="text-sm text-slate-600 mt-1">{m.home.whySub}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      <Footer locale={locale} m={m} />

    </div>
  );
}
