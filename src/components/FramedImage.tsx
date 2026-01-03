import Image from "next/image";

export default function FramedImage({
  src,
  alt,
  priority = false,
  className = "aspect-[4/3] w-full",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Red corner accents (top-left + bottom-right) */}
      <div className="absolute -top-3 -left-3 h-10 w-14 bg-rose-700" />
      <div className="absolute -bottom-3 -right-3 h-10 w-14 bg-rose-700" />

      {/* Image frame */}
      <div className="relative h-full w-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 520px"
        />
      </div>
    </div>
  );
}
