import TopBar from "../../../../components/TopBar";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CampusHero from "../../../../components/CampusHero";
import ApplyNowButton from "../../../../components/ApplyNowButton";
import MaroonBanner from "../../../../components/MaroonBanner";
import QuickNavBox from "../../../../components/QuickNavBox";
import ASDAccordionFAQ from "../../../../components/faq/ASDAccordionFAQ";
import StillHaveQuestionsBand from "../../../../components/faq/StillHaveQuestionsBand";

import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";

export default async function FAQsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.admissionsFaq.quickNav.admission, href: `/${locale}/admissions` },
    { label: m.admissionsFaq.quickNav.criteria, href: `/${locale}/admissions/admissions-criteria` },
    { label: m.admissionsFaq.quickNav.process, href: `/${locale}/admissions/application-process` },
    { label: m.admissionsFaq.quickNav.campus, href: `/${locale}/about/our-campus` },
    { label: m.admissionsFaq.quickNav.fees, href: `/${locale}/admissions/tuition-fees` },
    { label: m.admissionsFaq.quickNav.store, href: `/${locale}/admissions/store` },
    { label: m.admissionsFaq.quickNav.faqs, href: `/${locale}/admissions/faqs` },
  ];

  return (
    <div>
      <TopBar />
      <Header />
      <ApplyNowButton href={`/${locale}/admissions`} />

      <MaroonBanner
        kicker={m.admissionsFaq.kicker}
        title={m.admissionsFaq.title}
        subtitle={m.admissionsFaq.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-start">
          {/* LEFT: FAQ Accordion */}
          <div className="flex justify-center">
            <div className="w-full max-w-[560px]">
              <ASDAccordionFAQ items={m.admissionsFaq.faqs} />
            </div>
          </div>

          {/* RIGHT: Quick Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox items={QUICK_NAV} activeHref={`/${locale}/admissions/faqs`} />
            </div>
          </aside>
        </div>
      </main>

      <StillHaveQuestionsBand
        title={m.stillQuestions.title}
        text={[m.stillQuestions.text1, m.stillQuestions.text2]}
        phone="+237 699038487"
        email="tchuileng2007@gmail.com"
        phoneLabel={m.stillQuestions.phoneLabel}
        emailLabel={m.stillQuestions.emailLabel}
        buttonLabel={m.stillQuestions.buttonLabel}
        buttonHref={`/${locale}/admissions`}
      />

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
