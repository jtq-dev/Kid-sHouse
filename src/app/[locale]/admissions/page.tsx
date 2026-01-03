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

export default async function Admissions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  return (
    <div>
      <TopBar />
      <Header />

      <PageShell
        title={m.admissionsHome.title}
        subtitle={m.admissionsHome.subtitle}
        quickNav={[
          { label: m.admissionsHome.quickNav.apply, href: "#apply" },
          { label: m.admissionsHome.quickNav.documents, href: "#documents" },
          { label: m.admissionsHome.quickNav.fees, href: "#fees" },
          { label: m.admissionsHome.quickNav.faqs, href: "#faqs" },
        ]}
      >
        {/* HOW TO APPLY */}
        <section id="apply">
          <SectionTitle kicker={m.admissionsHome.howToApply.kicker} title={m.admissionsHome.howToApply.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: m.admissionsHome.howToApply.step1t, d: m.admissionsHome.howToApply.step1d },
              { t: m.admissionsHome.howToApply.step2t, d: m.admissionsHome.howToApply.step2d },
              { t: m.admissionsHome.howToApply.step3t, d: m.admissionsHome.howToApply.step3d },
            ].map((x) => (
              <Card key={x.t} className="p-6">
                <div className="font-extrabold text-slate-900">{x.t}</div>
                <div className="mt-2 text-sm text-slate-600">{x.d}</div>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button href={withLocale(locale, "/contact")} variant="primary">
              {m.admissionsHome.howToApply.ctaContact}
            </Button>
            <Button href={withLocale(locale, "/admissions/application-process")} variant="outline">
              {m.admissionsHome.howToApply.ctaProcess}
            </Button>
          </div>

          <div className="mt-6">
            <PreviewCard
              title={m.admissionsHome.previewProcess.title}
              text={m.admissionsHome.previewProcess.text}
              imgSrc="/images/admissions/application.webp"
              imgAlt={m.admissionsHome.previewProcess.imgAlt}
              href={withLocale(locale, "/admissions/application-process")}
              buttonLabel={m.admissionsHome.previewProcess.button}
            />
          </div>
        </section>

        {/* REQUIRED DOCUMENTS */}
        <section id="documents" className="mt-10">
          <SectionTitle kicker={m.admissionsHome.documents.kicker} title={m.admissionsHome.documents.title} />
          <PreviewCard
            title={m.admissionsHome.documents.previewTitle}
            text={m.admissionsHome.documents.previewText}
            imgSrc="/images/admissions/require.webp"
            imgAlt={m.admissionsHome.documents.previewImgAlt}
            href={withLocale(locale, "/admissions/required-documents")}
            buttonLabel={m.admissionsHome.documents.previewButton}
          />

          <Card className="mt-4 p-6">
            <div className="font-extrabold text-slate-900">{m.admissionsHome.documents.commonTitle}</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>{m.admissionsHome.documents.item1}</li>
              <li>{m.admissionsHome.documents.item2}</li>
              <li>{m.admissionsHome.documents.item3}</li>
              <li>{m.admissionsHome.documents.item4}</li>
              <li>{m.admissionsHome.documents.item5}</li>
            </ul>
            <div className="mt-4">
              <Button href={withLocale(locale, "/admissions/required-documents")} variant="outline">
                {m.admissionsHome.documents.viewFull}
              </Button>
            </div>
          </Card>
        </section>

        {/* FEES & PAYMENT */}
        <section id="fees" className="mt-10">
          <SectionTitle kicker={m.admissionsHome.fees.kicker} title={m.admissionsHome.fees.title} />
          <PreviewCard
            title={m.admissionsHome.fees.previewTitle}
            text={m.admissionsHome.fees.previewText}
            imgSrc="/images/admissions/fees.webp"
            imgAlt={m.admissionsHome.fees.previewImgAlt}
            href={withLocale(locale, "/admissions/tuition-fees")}
            buttonLabel={m.admissionsHome.fees.previewButton}
          />

          <Card className="mt-4 p-6">
            <div className="text-sm text-slate-700 leading-relaxed">{m.admissionsHome.fees.note}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button href={withLocale(locale, "/admissions/tuition-fees")} variant="outline">
                {m.admissionsHome.fees.ctaOpen}
              </Button>
              <Button href={withLocale(locale, "/contact")} variant="primary">
                {m.admissionsHome.fees.ctaAsk}
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQS */}
        <section id="faqs" className="mt-10">
          <SectionTitle kicker={m.admissionsHome.faqs.kicker} title={m.admissionsHome.faqs.title} />
          <PreviewCard
            title={m.admissionsHome.faqs.previewTitle}
            text={m.admissionsHome.faqs.previewText}
            imgSrc="/images/admissions/faq.webp"
            imgAlt={m.admissionsHome.faqs.previewImgAlt}
            href={withLocale(locale, "/admissions/faqs")}
            buttonLabel={m.admissionsHome.faqs.previewButton}
          />

          <Card className="mt-4 p-6">
            <div className="font-extrabold text-slate-900">{m.admissionsHome.faqs.mostAsked}</div>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <div>
                <div className="font-semibold">{m.admissionsHome.faqs.q1}</div>
                <div className="text-slate-600">{m.admissionsHome.faqs.a1}</div>
              </div>
              <div>
                <div className="font-semibold">{m.admissionsHome.faqs.q2}</div>
                <div className="text-slate-600">{m.admissionsHome.faqs.a2}</div>
              </div>
              <div>
                <div className="font-semibold">{m.admissionsHome.faqs.q3}</div>
                <div className="text-slate-600">{m.admissionsHome.faqs.a3}</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button href={withLocale(locale, "/admissions/faqs")} variant="outline">
                {m.admissionsHome.faqs.viewAll}
              </Button>
            </div>
          </Card>
        </section>
      </PageShell>

      <Footer locale={locale} m={m} />

    </div>
  );
}
