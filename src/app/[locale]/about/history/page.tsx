import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusHero from "@/components/CampusHero";

import MaroonBanner from "@/components/MaroonBanner";
import QuickNavBox from "@/components/QuickNavBox";
import HistoryBlock from "@/components/HistoryBlock";
import FramedImage from "@/components/FramedImage";

import { getMessages } from "@/i18n/messages";
import { isLocale, type Locale } from "@/i18n/locales";

function withLocale(locale: Locale, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`;
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const m = getMessages(locale);

  const ABOUT_NAV = [
    { label: m.about.aboutHome, href: "/about" },
    { label: m.about.mission, href: "/about/our-mission-and-vision" },
    { label: m.about.leadership, href: "/about/leadership" },
    { label: m.about.boardMembers, href: "/about/board-members" },
    { label: m.about.history, href: "/about/history" },
    { label: m.about.campus, href: "/about/our-campus" },
    { label: m.about.calendar, href: "/about/calendar" },
    { label: m.about.childProtection, href: "/about/child-protection" },
    { label: m.about.awards, href: "/about/awards-and-accreditations" },
  ].map((x) => ({ ...x, href: withLocale(locale, x.href) }));

  return (
    <div>
      <TopBar />
      <Header />

      {/* Optional fixed Apply button */}
      <a
        href={withLocale(locale, "/admissions")}
        className="fixed bottom-20 right-10 z-50 hidden rounded bg-[#c81e33] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95 lg:inline-flex"
      >
        {m.historyPage.applyNow}
      </a>

      <MaroonBanner
        kicker={m.historyPage.banner.kicker}
        title={m.historyPage.banner.title}
        subtitle={m.historyPage.banner.subtitle}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div>
            <div className="mx-auto max-w-3xl space-y-12">
              <HistoryBlock
                images={[
                  { src: "/images/history/h-01.png", alt: m.historyPage.blocks.b1Alt1 },
                  { src: "/images/history/h-02.png", alt: m.historyPage.blocks.b1Alt2 },
                ]}
                text={m.historyPage.blocks.b1Text}
              />

              <HistoryBlock
                images={[
                  {
                    src: "/images/history/h-03.png",
                    alt: m.historyPage.blocks.b2Alt1,
                    className: "aspect-[16/10] w-full",
                  },
                  {
                    src: "/images/history/h-04.png",
                    alt: m.historyPage.blocks.b2Alt2,
                    className: "aspect-[16/10] w-full",
                  },
                ]}
                text={m.historyPage.blocks.b2Text}
              />

              <HistoryBlock
                images={[
                  {
                    src: "/images/history/h-05.png",
                    alt: m.historyPage.blocks.b3Alt1,
                    className: "aspect-[16/10] w-full",
                  },
                  {
                    src: "/images/history/h-06.png",
                    alt: m.historyPage.blocks.b3Alt2,
                    className: "aspect-[16/10] w-full",
                  },
                ]}
                text={m.historyPage.blocks.b3Text}
              />

              <HistoryBlock
                images={[
                  {
                    src: "/images/history/h-07.png",
                    alt: m.historyPage.blocks.b4Alt1,
                    className: "aspect-[16/10] w-full",
                  },
                  {
                    src: "/images/history/h-008.png",
                    alt: m.historyPage.blocks.b4Alt2,
                    className: "aspect-[16/10] w-full",
                  },
                  {
                    src: "/images/history/h-09.png",
                    alt: m.historyPage.blocks.b4Alt3,
                    className: "aspect-[16/10] w-full",
                  },
                  {
                    src: "/images/history/h-10.png",
                    alt: m.historyPage.blocks.b4Alt4,
                    className: "aspect-[16/10] w-full",
                  },
                ]}
                text={m.historyPage.blocks.b4Text}
              />

              <HistoryBlock
                images={[
                  {
                    src: "/images/history/h-11.png",
                    alt: m.historyPage.blocks.b5Alt1,
                    className: "aspect-[4/3] w-full",
                  },
                  {
                    src: "/images/history/h-12.png",
                    alt: m.historyPage.blocks.b5Alt2,
                    className: "aspect-[4/3] w-full",
                  },
                  {
                    src: "/images/history/h-13.png",
                    alt: m.historyPage.blocks.b5Alt3,
                    className: "aspect-[4/3] w-full",
                  },
                ]}
                text={m.historyPage.blocks.b5Text}
              />

              <section className="space-y-4">
                <FramedImage
                  src="/images/history/h-14.png"
                  alt={m.historyPage.blocks.endAlt}
                  className="aspect-[4/3] w-full"
                />
                <p className="text-sm leading-relaxed text-slate-700">
                  {m.historyPage.blocks.endText}
                </p>
              </section>
            </div>

            <section className="mt-16 bg-slate-200/70 border-t border-slate-300">
              <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
                <div className="mx-auto max-w-3xl">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-rose-700">
                    {m.historyPage.today.title}
                  </h2>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    {m.historyPage.today.text}
                  </p>

                  <div className="mt-10 grid gap-10 md:grid-cols-2">
                    <FramedImage
                      src="/images/history/h-15.png"
                      alt={m.historyPage.today.alt1}
                      className="aspect-[16/10] w-full"
                    />
                    <FramedImage
                      src="/images/history/h-16.png"
                      alt={m.historyPage.today.alt2}
                      className="aspect-[16/10] w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="hidden lg:block">
            <QuickNavBox
              title={m.about.quickNavTitle}
              items={ABOUT_NAV}
              activeHref={withLocale(locale, "/about/history")}
            />
          </div>
        </div>
      </main>

      <CampusHero />
      <Footer locale={locale} m={m} />

    </div>
  );
}
