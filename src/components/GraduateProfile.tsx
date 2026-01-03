type GPItem = {
  title: string;
  description: string;
};

export default function GraduateProfile({
  kicker,
  title,
  intro,
  items,
}: {
  kicker: string;
  title: string;
  intro: string;
  items: GPItem[];
}) {
  return (
    <section>
      <div className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
        {kicker}
      </div>

      {/* Big title bar */}
      <div className="mt-6">
        <div className="relative">
          <div className="rounded-2xl bg-slate-900 px-6 py-5 md:px-10 md:py-6 text-white">
            <div className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {title}
            </div>
            <p className="mt-2 text-white/80 max-w-3xl">{intro}</p>
          </div>

          {/* Dashed outline effect */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-dashed border-rose-500/80" />
        </div>
      </div>

      {/* Stacked dashed boxes */}
      <div className="mt-8 space-y-6">
        {items.map((item) => (
          <div key={item.title} className="relative">
            {/* Header pill */}
            <div className="relative z-10 mx-auto w-fit rounded-full bg-slate-900 px-6 py-2 text-white text-lg md:text-xl font-extrabold shadow-sm">
              {item.title}
            </div>

            {/* Dashed container */}
            <div className="mt-[-14px] rounded-2xl border-2 border-dashed border-rose-500/80 bg-white px-6 py-6 md:px-10 md:py-8">
              <p className="text-slate-700 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
