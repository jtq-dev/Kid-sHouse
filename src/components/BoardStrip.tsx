import Image from "next/image";

export default function BoardStrip({
  title,
  text,
  buttonLabel,
  imageAlt,
}: {
  title: string;
  text: string;
  buttonLabel: string;
  imageAlt: string;
}) {
  return (
    <section className="relative">
      <div className="relative h-[360px] md:h-[420px] w-full overflow-hidden">
        <Image
          src="/images/board-members.jpg"
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-700/35 via-transparent to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto max-w-6xl px-4 md:px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
              <p className="mt-3 text-white/90 leading-relaxed">{text}</p>

              <a
                href="#board"
                className="inline-flex mt-8 items-center justify-center rounded-sm bg-rose-700 px-6 py-3 text-sm font-extrabold text-white hover:bg-rose-600"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
