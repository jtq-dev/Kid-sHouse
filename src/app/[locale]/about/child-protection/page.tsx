import TopBar from "../../../../components/TopBar";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CampusHero from "../../../../components/CampusHero";
import MaroonBanner from "../../../../components/MaroonBanner";
import QuickNavBox from "../../../../components/QuickNavBox";
import ApplyNowButton from "../../../../components/ApplyNowButton";
import GrayCallout from "../../../../components/GrayCallout";
import PhotoPair from "../../../../components/PhotoPair";
import ContactTable from "../../../../components/ContactTable";

import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";

export default async function ChildProtectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const m = getMessages(locale);

  const QUICK_NAV = [
    { label: m.about.aboutHome, href: `/${locale}/about` },
    { label: m.about.mission, href: `/${locale}/about/our-mission-and-vision` },
    { label: m.about.leadership, href: `/${locale}/about/leadership` },
    { label: m.about.profile, href: `/${locale}/about/school-profile` },
    { label: m.about.campus, href: `/${locale}/about/our-campus` },
    { label: m.about.calendar, href: `/${locale}/calendar` },
    { label: m.about.childProtection, href: `/${locale}/about/child-protection` },
  ];

  return (
    <div>
      <TopBar />
      <Header />
      <ApplyNowButton href={`/${locale}/admissions`} />

      <MaroonBanner
        kicker={m.childProtection.kicker}
        title={m.childProtection.title}
        subtitle={m.childProtection.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div>
            <p className="text-slate-700 leading-relaxed">{m.childProtection.intro1}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{m.childProtection.intro2}</p>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={`/${locale}/about/child-protection`}
              />
            </div>
          </div>
        </div>
      </main>

      <GrayCallout
        title={m.childProtection.manual.title}
        text={m.childProtection.manual.text}
        buttonLabel={m.childProtection.manual.buttonLabel}
        buttonHref="/files/kids-house-child-protection-policy.pdf"
      />

      <PhotoPair
        left={{ src: "/images/child-protection/01.png", alt: m.childProtection.photos.leftAlt }}
        right={{ src: "/images/child-protection/02.png", alt: m.childProtection.photos.rightAlt }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <article className="prose max-w-none prose-slate">
            <h2>{m.childProtection.sections.abuseTitle}</h2>
            <p>{m.childProtection.sections.abuseText}</p>
            <ul>
              {m.childProtection.sections.abuseBullets.map((b) => (
                <li key={b.label}>
                  <strong>{b.label}:</strong> {b.desc}
                </li>
              ))}
            </ul>

            <h2>{m.childProtection.sections.reportingTitle}</h2>
            <p>{m.childProtection.sections.reportingText}</p>
            <ol>
              {m.childProtection.sections.reportingSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <h2>{m.childProtection.sections.afterTitle}</h2>
            <p>{m.childProtection.sections.afterText}</p>

            <h2>{m.childProtection.sections.proactiveTitle}</h2>
            <ul>
              {m.childProtection.sections.proactiveBullets.map((b) => (
                <li key={b.label}>
                  <strong>{b.label}:</strong> {b.desc}
                </li>
              ))}
            </ul>

            <h2>{m.childProtection.sections.cyberTitle}</h2>
            <p>{m.childProtection.sections.cyberText}</p>

            <h2>{m.childProtection.sections.safeTitle}</h2>
            <p>{m.childProtection.sections.safeText}</p>

            <h2>{m.childProtection.sections.contactTitle}</h2>
            <p>{m.childProtection.sections.contactText}</p>

<ContactTable
  title={m.childProtection.sections.teamTitle}
  rows={m.childProtection.sections.teamRows ?? []}
/>



          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <QuickNavBox
                title={m.about.quickNavTitle}
                items={QUICK_NAV}
                activeHref={`/${locale}/about/child-protection`}
              />
            </div>
          </aside>
        </div>
      </section>

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
