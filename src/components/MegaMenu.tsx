"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, withLocale } from "@/lib/localePath";
import { NAV } from "../data/nav";
import { getMessages } from "@/i18n/messages"; // ✅ add
import type { Locale } from "@/i18n/locales"; // ✅ add
import {
  Target,
  School,
  Users,
  Landmark,
  History as HistoryIcon,
  Building2,
  CalendarDays,
  ShieldCheck,
  Award,
  ChevronDown,
} from "lucide-react";

const ICONS = {
  target: Target,
  school: School,
  users: Users,
  landmark: Landmark,
  history: HistoryIcon,
  building: Building2,
  calendar: CalendarDays,
  shield: ShieldCheck,
  award: Award,
} as const;

export default function MegaMenu() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale; // "en" | "fr"
  const m = getMessages(locale); // ✅ messages for this locale

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV.map((group) => (
        <Popover key={group.key} className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={clsx(
                  "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 outline-none",
                  open && "bg-white/10"
                )}
              >
                {m.menu.groups[group.key as keyof typeof m.menu.groups]}
                <ChevronDown size={16} className={clsx("opacity-80 transition", open && "rotate-180")} />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-120"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
              >
                <Popover.Panel className="absolute left-0 mt-3 w-[980px]">
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                    <div className="grid grid-cols-[320px_1fr]">
                      {/* LEFT FEATURED CARD */}
                      {group.featured ? (
                        <a
                          href={withLocale(locale, group.featured.href)}
                          onClick={() => close()}
                          className="relative block min-h-[320px] bg-slate-900"
                        >
                          <Image
                            src={group.featured.imageSrc}
                            alt={m.menu.featured[group.featured.key as keyof typeof m.menu.featured].title}
                            fill
                            className="object-cover"
                            priority={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/10" />
                          <div className="absolute bottom-0 p-5">
                            <div className="text-2xl font-extrabold text-white leading-tight">
                              {m.menu.featured[group.featured.key as keyof typeof m.menu.featured].title}
                            </div>
                            <div className="mt-2 text-sm text-white/85">
                              {m.menu.featured[group.featured.key as keyof typeof m.menu.featured].subtitle}
                            </div>
                            <div className="mt-4 inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold text-slate-950">
                              {m.menu.explore}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="min-h-[320px] bg-slate-50" />
                      )}

                      {/* RIGHT LINKS GRID */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                          {group.items.map((item) => {
                            const Icon = ICONS[item.icon];
                            const itemMsg = m.menu.items[item.key as keyof typeof m.menu.items];

                            return (
                              <a
                                key={item.key}
                                href={withLocale(locale, item.href)}
                                onClick={() => close()}
                                className="group flex gap-3 rounded-xl p-3 hover:bg-slate-50"
                              >
                                <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-amber-50 group-hover:text-amber-700">
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <div className="font-extrabold text-slate-900 group-hover:text-slate-950">
                                    {itemMsg.title}
                                  </div>
                                  <div className="mt-1 text-sm text-slate-600">
                                    {itemMsg.desc}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* bottom row */}
                        <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <div className="text-sm text-slate-700">
                            {m.menu.bottomText}
                          </div>
                          <a
                            href={withLocale(locale, "/contact")}
                            onClick={() => close()}
                            className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-extrabold text-white hover:bg-slate-800"
                          >
                            {m.menu.contactCta}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </nav>
  );
}
