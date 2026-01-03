import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  src: string;
  alt: string;
};

export default function HoverRevealTile({ title, href, src, alt }: Props) {
  return (
    <Link
      href={href}
      className="
        group relative block
        h-[210px] w-[260px]
        overflow-hidden
        border-2 border-[#12284b]
        shadow-sm
        focus:outline-none focus-visible:ring-4 focus-visible:ring-[#12284b]/30
      "
      aria-label={title}
    >
      {/* BACK LAYER (revealed on hover) */}
      <div className="absolute inset-0 grid place-items-center bg-[#0b1f3f]">
        <div className="text-center">
          <div className="text-white font-semibold">{title}</div>
        </div>
      </div>

      {/* FRONT LAYER (image) */}
      <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="260px"
          className="object-cover"
          priority={false}
        />
        {/* same dim overlay vibe as screenshot */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Title on image */}
        <div className="absolute inset-x-0 bottom-10 text-center">
          <span className="text-white font-semibold drop-shadow">{title}</span>
        </div>
      </div>
    </Link>
  );
}
