import Image from "next/image";
import { Person } from "../data/leadership";

export default function LeadershipGrid({
  title,
  people,
}: {
  title: string;
  people: Person[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
        {title}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <div
            key={p.name}
            className="group relative aspect-square overflow-hidden border-[8px] border-rose-700 bg-slate-900 shadow-sm"
          >
            {/* PHOTO LAYER (default visible, hidden on hover) */}
            {p.image ? (
              <div className="absolute inset-0 opacity-100 transition-opacity duration-200 ease-out group-hover:opacity-0">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
                {/* bottom fade so text is readable */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent" />

                {/* name + role on photo (matches ASD look) */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-extrabold leading-tight drop-shadow">
                    {p.name}
                  </div>
                  <div className="text-white/80 text-xs font-semibold drop-shadow">
                    {p.role}
                  </div>
                </div>
              </div>
            ) : null}

            {/* NAVY INFO LAYER (hidden by default, shows on hover) */}
            <div
              className={[
                "absolute inset-0 flex items-center justify-center text-center",
                "bg-[#0b2545] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100",
                // if no image, keep it visible always (like your navy placeholder tile)
                !p.image ? "opacity-100" : "",
              ].join(" ")}
            >
              <div className="px-6">
                <div className="text-white text-lg font-extrabold">
                  {p.name}
                </div>
                <div className="mt-1 text-white/80 text-sm font-semibold">
                  {p.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
