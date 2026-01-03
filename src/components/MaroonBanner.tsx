export default function MaroonBanner({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-[#8a0f1c] text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="text-sm md:text-base font-semibold text-white/80">
            {kicker}
          </div>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-white/80 leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
