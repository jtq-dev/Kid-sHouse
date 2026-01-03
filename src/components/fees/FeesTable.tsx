type Cell = string;

export type FeesRow = {
  label: string;
  aug: [Cell, Cell];
  jan: [Cell, Cell];
  total: [Cell, Cell];
};

export default function FeesTable({
  rows,
  locale = "en",
  titleLeft,
  col1 = "Aug. 31, 25",
  col2 = "Jan. 30, 26",
  col3 = "Total",
  corporateLabel,
  nonCorporateLabel,
}: {
  rows: FeesRow[];
  locale?: "en" | "fr";
  titleLeft?: string;
  col1?: string;
  col2?: string;
  col3?: string;
  corporateLabel?: string;
  nonCorporateLabel?: string;
}) {
  const L =
    locale === "fr"
      ? {
          titleLeftDefault: "Frais de scolarité / Dates d’échéance",
          corporate: "Entreprise",
          nonCorporate: "Particulier",
        }
      : {
          titleLeftDefault: "Tuition Fees / Due dates",
          corporate: "Corporate",
          nonCorporate: "Non Corporate",
        };

  const left = titleLeft ?? L.titleLeftDefault;
  const corp = corporateLabel ?? L.corporate;
  const nonCorp = nonCorporateLabel ?? L.nonCorporate;

  return (
    <div className="mt-4 overflow-hidden rounded-sm border border-slate-200">
      {/* TOP HEADER */}
      <div className="grid grid-cols-[56px_1.6fr_1fr_1fr_1fr] bg-[#b91c1c] text-white text-xs font-extrabold">
        <div className="px-4 py-3">#</div>
        <div className="px-4 py-3">{left}</div>
        <div className="px-4 py-3 text-center">{col1}</div>
        <div className="px-4 py-3 text-center">{col2}</div>
        <div className="px-4 py-3 text-center">{col3}</div>
      </div>

      {/* SUB HEADER */}
      <div className="grid grid-cols-[56px_1.6fr_1fr_1fr_1fr] bg-white text-[11px] text-slate-500">
        <div className="px-4 py-2" />
        <div className="px-4 py-2" />

        <div className="px-4 py-2">
          <div className="flex justify-between">
            <span>{corp}</span>
            <span>{nonCorp}</span>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex justify-between">
            <span>{corp}</span>
            <span>{nonCorp}</span>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex justify-between">
            <span>{corp}</span>
            <span>{nonCorp}</span>
          </div>
        </div>
      </div>

      {/* BODY */}
      {rows.map((r, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-[56px_1.6fr_1fr_1fr_1fr] text-xs ${
            idx % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"
          }`}
        >
          <div className="px-4 py-3 text-slate-500">{idx + 1}</div>

          <div className="px-4 py-3 text-slate-700">
            <span className="font-semibold">{r.label}</span>
          </div>

          <div className="px-4 py-3">
            <div className="flex justify-between gap-6 font-extrabold text-slate-900">
              <span>{r.aug[0]}</span>
              <span>{r.aug[1]}</span>
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="flex justify-between gap-6 font-extrabold text-slate-900">
              <span>{r.jan[0]}</span>
              <span>{r.jan[1]}</span>
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="flex justify-between gap-6 font-extrabold text-slate-900">
              <span>{r.total[0]}</span>
              <span>{r.total[1]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
