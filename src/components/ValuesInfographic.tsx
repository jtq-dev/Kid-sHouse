import {
  Globe,
  Brain,
  Search,
  Sparkles,
  TrendingUp,
  Shield,
  AlertTriangle,
  Megaphone,
} from "lucide-react";

type Tone = "blue" | "red";

type ValueItem = {
  title: string;
  description: string;
  tone: Tone; // "blue" | "red"
};

const ICONS = [
  <Globe key="globe" size={22} />,
  <Brain key="brain" size={22} />,
  <Search key="search" size={22} />,
  <Megaphone key="megaphone" size={22} />,
  <Sparkles key="sparkles" size={22} />,
  <Shield key="shield" size={22} />,
  <AlertTriangle key="alert" size={22} />,
  <TrendingUp key="trend" size={22} />,
];

function toneClasses(tone: Tone) {
  return tone === "blue"
    ? { title: "text-sky-600", badge: "bg-sky-500", badgeRing: "ring-sky-100" }
    : { title: "text-rose-600", badge: "bg-rose-600", badgeRing: "ring-rose-100" };
}

export default function ValuesInfographic({
  kicker,
  items,
}: {
  kicker: string;
  items: ValueItem[];
}) {
  return (
    <section>
      <div className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
        {kicker}
      </div>

      <div className="mt-6 space-y-6">
        {items.map((v, idx) => {
          const isRight = idx % 2 === 1; // alternate
          const t = toneClasses(v.tone);
          const icon = ICONS[idx % ICONS.length];

          return (
            <div key={`${v.title}-${idx}`} className="relative">
              {/* Title aligned to match the bar direction */}
              <div
                className={`mb-2 text-xl md:text-2xl font-extrabold ${t.title} ${
                  isRight ? "text-right" : "text-left"
                }`}
              >
                {v.title.toUpperCase()}
              </div>

              <div className={`relative flex ${isRight ? "justify-end" : "justify-start"}`}>
                {/* BAR */}
                <div
                  className={[
                    "relative w-full md:w-[92%]",
                    "rounded-[18px] bg-slate-900 text-white",
                    "px-6 py-4 md:px-8",
                    "shadow-sm border border-white/10",
                  ].join(" ")}
                >
                  <p className="text-white/85 leading-relaxed">{v.description}</p>

                  {/* Icon badge */}
                  <div
                    className={[
                      "absolute top-1/2 -translate-y-1/2",
                      isRight ? "-right-6 md:-right-8" : "-left-6 md:-left-8",
                      "h-14 w-14 md:h-16 md:w-16 rounded-full",
                      t.badge,
                      "grid place-items-center text-white",
                      "ring-8",
                      t.badgeRing,
                      "shadow-md",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
