"use client";

import { useMemo, useState } from "react";

type FAQItem = { q: string; a: string };

export default function ASDAccordionFAQ({
  items,
  defaultOpenIndex = 0,
}: {
  items: FAQItem[];
  defaultOpenIndex?: number;
}) {
  const safeDefault = useMemo(() => {
    if (items.length === 0) return -1;
    return Math.min(Math.max(defaultOpenIndex, 0), items.length - 1);
  }, [items.length, defaultOpenIndex]);

  const [openIndex, setOpenIndex] = useState<number>(safeDefault);

  return (
    <div className="w-full">
      {items.map((it, idx) => {
        const isOpen = idx === openIndex;

        return (
          <div key={idx} className="border-b border-slate-200">
            {/* Header row */}
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className={[
                "w-full text-left flex items-center justify-between gap-4",
                "px-4 py-3",
                "transition-colors",
                isOpen
                  ? "bg-[#b91c1c] text-white"
                  : "bg-[#d1d1d1] text-slate-900 hover:bg-[#c7c7c7]",
              ].join(" ")}
            >
              <span className="text-sm font-semibold">{it.q}</span>
              <span className="text-xl font-bold leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Body */}
            {isOpen && (
              <div className="bg-white px-4 py-4 text-sm text-slate-700 leading-relaxed">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
