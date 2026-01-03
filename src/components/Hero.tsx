import Image from "next/image";
import { Container, Button } from "./UI";
import { ArrowRight } from "lucide-react";

type HeroStat = { k: string; v: string };

export default function Hero({
  badge,
  title,
  subtitle,
  ctaApply,
  ctaAbout,
  stats,
}: {
  badge: string;
  title: string;
  subtitle: string;
  ctaApply: string;
  ctaAbout: string;
  stats: HeroStat[];
}) {
  return (
    <div className="relative">
      {/* Real photo */}
      <div className="relative h-[520px] md:h-[640px] w-full">
        <Image
          src="/images/Hero.jpg"
          alt="School campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="absolute inset-0">
        <Container>
          <div className="h-[520px] md:h-[640px] flex items-center">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/95 px-3 py-1 text-xs font-extrabold text-slate-950">
                {badge}
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                {title}
              </h1>

              <p className="mt-4 text-white/85 text-lg whitespace-pre-line">
                {subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/[locale]/admissions" variant="primary">
                  {ctaApply} <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button href="/[locale]/about" variant="outline">
                  {ctaAbout}
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3"
                  >
                    <div className="text-xl font-extrabold">{x.v}</div>
                    <div className="text-xs text-white/80">{x.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
