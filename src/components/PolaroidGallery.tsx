import Image from "next/image";

type Item = { src: string; alt: string };

export default function PolaroidGallery({ items }: { items: Item[] }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 place-items-center">
          {items.map((it, idx) => (
            <div key={it.src} className="relative">
              {/* Red corner blocks (top-left and bottom-right) */}
              <div className="absolute -top-3 -left-3 h-10 w-14 bg-rose-700" />
              <div className="absolute -bottom-3 -right-3 h-10 w-14 bg-rose-700" />

              {/* Image frame */}
              <div className="relative w-[360px] md:w-[460px] aspect-[4/3] rounded-sm bg-white shadow-xl border border-slate-200 overflow-hidden">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
