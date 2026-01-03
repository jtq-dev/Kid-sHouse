import Image from "next/image";

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[420px]">
      {/* corner accents (ASD style) */}
      <div className="absolute -left-2 -top-2 h-10 w-16 bg-rose-700" />
      <div className="absolute -right-2 -bottom-2 h-10 w-16 bg-rose-700" />

      <div className="relative overflow-hidden rounded-sm border border-slate-300 shadow-md bg-white">
        <div className="relative aspect-[4/3]">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function PhotoPair({
  left,
  right,
}: {
  left: { src: string; alt: string };
  right: { src: string; alt: string };
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <PhotoCard src={left.src} alt={left.alt} />
          <PhotoCard src={right.src} alt={right.alt} />
        </div>
      </div>
    </section>
  );
}
