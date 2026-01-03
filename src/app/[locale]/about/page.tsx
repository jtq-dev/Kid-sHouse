import TopBar from "../../../components/TopBar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ApplyNowButton from "../../../components/ApplyNowButton";
import { Card, SectionTitle, Button } from "../../../components/UI";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  // ensures "/about" becomes "/en/about" or "/fr/about"
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

function AboutPreviewCard({
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
      <div className="grid md:grid-cols-[220px_1fr]">
        <div className="relative h-44 md:h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
        </div>

        <div className="p-5 md:p-6">
          <div className="text-lg font-extrabold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{text}</p>

          <div className="mt-4">
            <Button href={href} variant="outline">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? (resolved.locale as Locale) : "en";
  const m = getMessages(locale);

  const sidebarLinks = [
    { label: m.aboutPage.sidebar.mission, href: "#mission" },
    { label: m.aboutPage.sidebar.leadership, href: "#leadership" },
    { label: m.aboutPage.sidebar.campus, href: "#campus" },
    { label: m.aboutPage.sidebar.quickFacts, href: "#quickfacts" },
  ];

  const facts = [
    { k: m.aboutPage.facts.locationK, v: m.aboutPage.facts.locationV },
    { k: m.aboutPage.facts.sectionsK, v: m.aboutPage.facts.sectionsV },
    { k: m.aboutPage.facts.levelsK, v: m.aboutPage.facts.levelsV },
    { k: m.aboutPage.facts.focusK, v: m.aboutPage.facts.focusV },
  ];

  return (
    <div>
      <TopBar />
      <Header />
      <ApplyNowButton href={withLocale(locale, "/admissions")} />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        {/* Page Title */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            {m.aboutPage.title}
          </h1>
          <p className="mt-2 text-slate-600">{m.aboutPage.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] items-start">
          {/* LEFT CONTENT */}
          <section className="space-y-10">
            {/* MISSION & VISION */}
            <div id="mission">
              <SectionTitle kicker={m.aboutPage.kicker} title={m.aboutPage.mission.sectionTitle} />
              <AboutPreviewCard
                title={m.aboutPage.mission.cardTitle}
                text={m.aboutPage.mission.cardText}
                imgSrc="/images/mission.webp"
                imgAlt={m.aboutPage.mission.imgAlt}
                href={withLocale(locale, "/about/our-mission-and-vision")}
                buttonLabel={m.aboutPage.mission.button}
              />
            </div>

            {/* LEADERSHIP */}
            <div id="leadership">
              <SectionTitle kicker={m.aboutPage.kicker} title={m.aboutPage.leadership.sectionTitle} />
              <AboutPreviewCard
                title={m.aboutPage.leadership.cardTitle}
                text={m.aboutPage.leadership.cardText}
                imgSrc="/images/lead.webp"
                imgAlt={m.aboutPage.leadership.imgAlt}
                href={withLocale(locale, "/about/leadership")}
                buttonLabel={m.aboutPage.leadership.button}
              />
            </div>

            {/* CAMPUS */}
            <div id="campus">
              <SectionTitle kicker={m.aboutPage.kicker} title={m.aboutPage.campus.sectionTitle} />
              <AboutPreviewCard
                title={m.aboutPage.campus.cardTitle}
                text={m.aboutPage.campus.cardText}
                imgSrc="/images/teachers.png"
                imgAlt={m.aboutPage.campus.imgAlt}
                href={withLocale(locale, "/about/our-campus")}
                buttonLabel={m.aboutPage.campus.button}
              />
            </div>

            {/* QUICK FACTS */}
            <div id="quickfacts">
              <SectionTitle kicker={m.aboutPage.kicker} title={m.aboutPage.facts.sectionTitle} />
              <Card className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {facts.map((x) => (
                    <div key={x.k} className="rounded-xl border border-slate-200 p-4">
                      <div className="text-xs font-extrabold tracking-wide text-slate-500">
                        {x.k.toUpperCase()}
                      </div>
                      <div className="mt-1 font-extrabold text-slate-900">{x.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Button href={withLocale(locale, "/learning")} variant="primary">
                    {m.aboutPage.facts.ctaLearning}
                  </Button>
                  <Button href={withLocale(locale, "/admissions")} variant="outline">
                    {m.aboutPage.facts.ctaAdmissions}
                  </Button>
                  <Button href={withLocale(locale, "/contact")} variant="outline">
                    {m.aboutPage.facts.ctaContact}
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <Card className="p-5">
                <div className="text-xs font-extrabold tracking-wide text-slate-500">
                  {m.aboutPage.sidebar.onThisPage}
                </div>

                <div className="mt-3 space-y-2 text-sm">
                  {sidebarLinks.map((x) => (
                    <a
                      key={x.href}
                      href={x.href}
                      className="block font-semibold text-slate-700 hover:text-slate-900 hover:underline"
                    >
                      {x.label}
                    </a>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="font-extrabold text-slate-900">{m.aboutPage.sidebar.needHelpTitle}</div>
                  <div className="mt-1 text-xs text-slate-600">{m.aboutPage.sidebar.needHelpText}</div>
                  <div className="mt-3">
                    <Button href={withLocale(locale, "/contact")} variant="primary">
                      {m.aboutPage.sidebar.contactAdmissions}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <Footer locale={locale} m={m} />

    </div>
  );
}
