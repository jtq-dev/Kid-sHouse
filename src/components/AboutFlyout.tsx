import Image from "next/image";

const LINKS = [
  { label: "Our Mission and Vision", href: "/about/our-mission-and-vision" },
  { label: "School profile", href: "/about/school-profile" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Board Members", href: "/about/leadership#board" },
  { label: "History", href: "/about#history" },
  { label: "Our Campus", href: "/about/our-campus" },
  { label: "Calendar", href: "/calendar" },
  { label: "Child Protection", href: "/child-protection" },
  { label: "Awards & Accreditations", href: "/about#awards" },
];

export default function AboutFlyout() {
  return (
    <div className="w-[860px] max-w-[90vw] rounded-md bg-white shadow-xl border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-[280px_1fr]">
        {/* Left image card */}
        <div className="relative bg-slate-100">
          <div className="relative h-full min-h-[220px]">
            <Image
              src="/images/about-flyout.jpg"
              alt="About"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-2xl font-extrabold">About</div>
              <div className="mt-1 text-sm text-white/90">
                Who we are. What we represent. Our values.
              </div>
            </div>
          </div>
        </div>

        {/* Right links */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-900 font-semibold hover:text-sky-700"
              >
                {l.label}
                <div className="text-xs text-slate-500 font-normal">
                  {/* optional small description */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
