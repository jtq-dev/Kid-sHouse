import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageShell from "@/components/PageShell";
import { Card, SectionTitle } from "@/components/UI";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function Contact({
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
        title={m.contactPage.title}
        quickNav={[
          { label: m.contactPage.quickNav.details, href: "#details" },
          { label: m.contactPage.quickNav.map, href: "#map" },
          { label: m.contactPage.quickNav.form, href: "#form" },
        ]}
      >
        <section id="details">
          <SectionTitle
            kicker={m.contactPage.details.kicker}
            title={m.contactPage.details.title}
          />
          <Card className="p-6 space-y-2">
            <div>
              <b>{m.contactPage.details.phoneLabel}:</b> +237 670568146
            </div>
            <div>
              <b>{m.contactPage.details.emailLabel}:</b> tchuileng2007@gmail.com
            </div>
            <div>
              <b>{m.contactPage.details.addressLabel}:</b> Douala, Cameroon
            </div>
          </Card>
        </section>

        <section id="map" className="mt-10">
          <SectionTitle
            kicker={m.contactPage.map.kicker}
            title={m.contactPage.map.title}
          />
          <Card className="overflow-hidden">
            <iframe
              title={m.contactPage.map.iframeTitle}
              className="w-full h-80"
              loading="lazy"
              src="https://www.google.com/maps?q=Douala%20Cameroon&output=embed"
            />
          </Card>
        </section>

        <section id="form" className="mt-10">
          <SectionTitle
            kicker={m.contactPage.form.kicker}
            title={m.contactPage.form.title}
            desc={m.contactPage.form.desc}
          />
          <Card className="p-6">
            <ContactForm
  namePlaceholder={m.contactForm.namePlaceholder}
  phonePlaceholder={m.contactForm.phonePlaceholder}
  messagePlaceholder={m.contactForm.messagePlaceholder}
  sending={m.contactForm.sending}
  send={m.contactForm.send}
  successMsg={m.contactForm.successMsg}
  errorFallback={m.contactForm.errorFallback}
  errorSendFail={m.contactForm.errorSendFail}
  whatsappLinkText={m.contactForm.whatsappLinkText}
/>

          </Card>
        </section>
      </PageShell>

      <Footer locale={locale} m={m} />

    </div>
  );
}
