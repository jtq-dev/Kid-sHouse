"use client";

type Currency = "USD" | "XAF";

export default function CurrencyTabs({
  value,
  onChange,
}: {
  value: Currency;
  onChange: (v: Currency) => void;
}) {
  const base =
    "px-6 py-2 text-xs font-extrabold border transition";
  const active = "bg-[#b91c1c] text-white border-[#b91c1c]";
  const idle = "bg-[#efefef] text-slate-700 border-slate-200 hover:bg-[#e5e5e5]";

  return (
    <div className="inline-flex overflow-hidden rounded-sm border border-slate-200">
      <button
        type="button"
        onClick={() => onChange("USD")}
        className={`${base} border-r ${value === "USD" ? active : idle}`}
      >
        <span className="mr-2">$</span>
        US DOLLARS
      </button>

      <button
        type="button"
        onClick={() => onChange("XAF")}
        className={`${base} ${value === "XAF" ? active : idle}`}
      >
        XAF (CFA FRANCS)
      </button>
    </div>
  );
}
