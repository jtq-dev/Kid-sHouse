export default function GrayCallout({
  title,
  text,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  text: string[];
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="bg-[#c9c9c9]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-700">
          {title}
        </h2>

        <div className="mt-4 max-w-3xl space-y-3 text-slate-700 leading-relaxed">
          {text.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>

        <a
          href={buttonHref}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-rose-700 px-6 py-3 font-extrabold text-white hover:bg-rose-600"
        >
          <span className="inline-block">📄</span>
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
