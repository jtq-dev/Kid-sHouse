"use client";

import { usePathname, useRouter } from "next/navigation";

function swapLocale(pathname: string, next: "en" | "fr") {
  const parts = pathname.split("/");
  if (parts[1] === "en" || parts[1] === "fr") parts[1] = next;
  else parts.splice(1, 0, next);
  return parts.join("/") || `/${next}`;
}

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const current = pathname.startsWith("/fr") ? "fr" : "en";

  return (
    <button
      onClick={() => {
        const next = current === "en" ? "fr" : "en";
        router.push(swapLocale(pathname, next));
      }}
      className="ml-2 rounded-lg border border-white/20 px-3 py-2 text-xs font-extrabold text-white/90 hover:bg-white/10"
    >
      {current === "en" ? "FR" : "EN"}
    </button>
  );
}
