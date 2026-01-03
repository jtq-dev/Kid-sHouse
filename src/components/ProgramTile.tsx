import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  href: string;
  src: string;
  alt: string;
};

export default function ProgramTile({ title, subtitle, href, src, alt }: Props) {
  return (
    <Link
      href={href}
      className="
        group relative block
        h-[230px] w-[260px]
        overflow-hidden
        border-2 border-[#0a1f3d]
        shadow-sm
        focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0a1f3d]/30
      "
      aria-label={title}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="260px"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        priority={false}
      />

      {/* dark overlay like screenshot */}
      <div className="absolute inset-0 bg-[#0a1f3d]/35 group-hover:bg-[#0a1f3d]/45 transition-colors" />

      {/* centered text like screenshot */}
      <div className="absolute inset-0 grid place-items-center text-center px-4">
        <div>
          <div className="text-white font-extrabold drop-shadow text-base">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-2 text-white/85 text-xs font-semibold drop-shadow">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
