import { Container } from "./UI";
import NewsletterForm from "./NewsLetterForm";
import type { Locale } from "@/i18n/locales";
import type { Messages } from "@/i18n/messages";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default function Footer({
  locale,
  m,
}: {
  locale: Locale;
  m: Messages;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            <div className="font-extrabold text-slate-900">{m.footer.schoolTitle}</div>
            <p className="mt-2 text-sm text-slate-600">{m.footer.schoolDesc}</p>
          </div>

          <div>
            <div className="font-bold text-slate-900">{m.footer.quickLinksTitle}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/about")}>
                  {m.nav.about}
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/admissions")}>
                  {m.nav.admissions}
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/learning")}>
                  {m.nav.learning}
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/calendar")}>
                  {m.nav.calendar}
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/contact")}>
                  {m.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-900">{m.footer.policiesTitle}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/about/child-protection")}>
                  {m.footer.childProtection}
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/about/privacy-notice")}>
                  {m.footer.privacy}
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={withLocale(locale, "/about/payment-terms")}>
                  {m.footer.payments}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-900">{m.footer.newsletterTitle}</div>
            <p className="mt-2 text-sm text-slate-600">{m.footer.newsletterDesc}</p>

            {/* Client Component */}
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-xs text-slate-500">
          © {year} Kid&apos;s House. {m.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
