export default function StillHaveQuestionsBand({
  title,
  text,
  phone,
  email,
  phoneLabel = "Phone",
  emailLabel = "Email",
  buttonLabel,
  buttonHref,
}: {
  title: string;
  text: string[];
  phone?: string;
  email?: string;
  phoneLabel?: string;
  emailLabel?: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="bg-[#c9c9c9]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#b91c1c]">
              {title}
            </h2>

            <div className="mt-4 space-y-3 text-slate-700 leading-relaxed text-sm max-w-3xl">
              {text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>

            {(phone || email) && (
              <div className="mt-5 text-sm text-slate-700 space-y-1">
                {phone && (
                  <div>
                    <span className="font-semibold">{phoneLabel}:</span> {phone}
                  </div>
                )}
                {email && (
                  <div>
                    <span className="font-semibold">{emailLabel}:</span> {email}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex md:justify-end">
            <a
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-md bg-[#b91c1c] px-10 py-3 text-sm font-extrabold text-white hover:bg-[#a11616]"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
