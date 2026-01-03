import FramedImage from "./FramedImage";

type Img = {
  src: string;
  alt: string;
  className?: string;
};

export default function HistoryBlock({
  images,
  text,
}: {
  images: Img[];
  text: string;
}) {
  const gridCols =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <section className="space-y-4">
      <div className={`grid ${gridCols} gap-8`}>
        {images.map((img, idx) => (
          <FramedImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            priority={idx === 0}
            className={img.className ?? "aspect-[4/3] w-full"}
          />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-slate-700">{text}</p>
    </section>
  );
}
