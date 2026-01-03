export default function GrayBandCTA({
  title,
  text,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  text?: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="bg-[#c9c9c9]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-rose-700">
              {title}
            </h2>
            {text ? (
              <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
                {text}
              </p>
            ) : null}
          </div>

          <a
            href={buttonHref}
            className="inline-flex justify-center rounded-md bg-rose-700 px-8 py-3 text-white font-bold hover:bg-rose-600"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
