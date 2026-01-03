// src/components/fees/KidsHouseTuitionFeesBlock.tsx

import type { Locale } from "@/i18n/locales";

type FeeRow = {
  classLabel: string;
  registration: string;
  first: string;
  second: string;
};

type FeeTable = {
  title: string;
  subtitle?: string;
  rows: FeeRow[];
  notes?: string[];
};

function FeesTable({
  table,
  locale,
}: {
  table: FeeTable;
  locale: Locale;
}) {
  const L =
    locale === "fr"
      ? {
          defaultKicker: "FRAIS",
          class: "Classe",
          registration: "Inscription",
          first: "1ère tranche",
          second: "2ème tranche",
          notes: "NOTES",
        }
      : {
          defaultKicker: "TUITION",
          class: "Class",
          registration: "Registration",
          first: "1st Installment",
          second: "2nd Installment",
          notes: "NOTES",
        };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200">
        <div className="text-xs font-extrabold tracking-wide text-slate-500">
          {table.subtitle ?? L.defaultKicker}
        </div>
        <h3 className="text-xl font-extrabold text-slate-900">{table.title}</h3>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-left">
              <th className="px-5 py-3 font-extrabold text-slate-700">{L.class}</th>
              <th className="px-5 py-3 font-extrabold text-slate-700">{L.registration}</th>
              <th className="px-5 py-3 font-extrabold text-slate-700">{L.first}</th>
              <th className="px-5 py-3 font-extrabold text-slate-700">{L.second}</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r) => (
              <tr key={r.classLabel} className="border-b border-slate-100">
                <td className="px-5 py-3 font-semibold text-slate-900">{r.classLabel}</td>
                <td className="px-5 py-3 text-slate-700">{r.registration}</td>
                <td className="px-5 py-3 text-slate-700">{r.first}</td>
                <td className="px-5 py-3 text-slate-700">{r.second}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden">
        <div className="divide-y divide-slate-200">
          {table.rows.map((r) => (
            <div key={r.classLabel} className="p-5">
              <div className="font-extrabold text-slate-900">{r.classLabel}</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs font-extrabold text-slate-500">{L.registration}</div>
                  <div className="text-slate-800">{r.registration}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-500">{L.first}</div>
                  <div className="text-slate-800">{r.first}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-500">{L.second}</div>
                  <div className="text-slate-800">{r.second}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {table.notes?.length ? (
        <div className="px-5 py-4 bg-slate-50 border-t border-slate-200">
          <div className="text-xs font-extrabold tracking-wide text-slate-600">{L.notes}</div>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
            {table.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default function KidsHouseTuitionFeesBlock({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const L =
    locale === "fr"
      ? {
          official: "OFFICIEL",
          feeSheetTitle: "Fiche des frais (référence)",
          feeSheetDesc: "Inscription + tranches (sections Anglaise & Française).",
          open: "Ouvrir",
          sheetAlt: "Fiche des frais de scolarité Kids House",
          frenchTitle: "Frais de scolarité (Section Française)",
          englishTitle: "Frais de scolarité (Section Anglaise)",
          frenchSubtitle: "Maternelle / Primaire",
          englishSubtitle: "Maternelle / Primaire",
          notesFrench: [
            "Maternelle : Documents = 10 000 FCFA (selon la fiche des frais).",
            "Primaire : TD = 5 000 FCFA (selon la fiche des frais).",
            "Les frais versés à la Direction ne sont pas remboursables (selon la fiche).",
          ],
          notesEnglish: [
            "Maternelle : Documents = 10 000 FCFA (selon la fiche des frais).",
            "Primaire : TD = 5 000 FCFA (selon la fiche des frais).",
            "Pour les dates limites, veuillez consulter la fiche officielle ou contacter le bureau.",
          ],
        }
      : {
          official: "OFFICIAL",
          feeSheetTitle: "Fee Sheet (Reference)",
          feeSheetDesc: "Registration + installments (English & French sections).",
          open: "Open",
          sheetAlt: "Kids House tuition fees sheet",
          frenchTitle: "Tuition Fees (French Section)",
          englishTitle: "Tuition Fees (English Section)",
          frenchSubtitle: "Kindergarten / Primary",
          englishSubtitle: "Kindergarten / Primary",
          notesFrench: [
            "Kindergarten: Documents = 10 000 FCFA (as per fee sheet).",
            "Primary: TD = 5 000 FCFA (as per fee sheet).",
            "No fees paid to the administration are refundable (as per fee sheet).",
          ],
          notesEnglish: [
            "Kindergarten: Documents = 10 000 FCFA (as per fee sheet).",
            "Primary: TD = 5 000 FCFA (as per fee sheet).",
            "For deadline dates, please refer to the official sheet or contact the office.",
          ],
        };

  const french: FeeTable = {
    title: L.frenchTitle,
    subtitle: L.frenchSubtitle,
    rows: [
      { classLabel: "Crèche / P1 / M1", registration: "30 000 FCFA", first: "30 000 FCFA", second: "5 000 FCFA" },
      { classLabel: "Grande Section", registration: "30 000 FCFA", first: "30 000 FCFA", second: "10 000 FCFA" },
      { classLabel: "SIL → CEI", registration: "30 000 FCFA", first: "20 000 FCFA", second: "5 000 FCFA" },
      { classLabel: "CEII", registration: "30 000 FCFA", first: "20 000 FCFA", second: "5 000 FCFA" },
      { classLabel: "CM1", registration: "35 000 FCFA", first: "30 000 FCFA", second: "—" },
    ],
    notes: L.notesFrench,
  };

  const english: FeeTable = {
    title: L.englishTitle,
    subtitle: L.englishSubtitle,
    rows: [
      { classLabel: "Kindergarten / PN / Nursery I", registration: "30 000 FCFA", first: "30 000 FCFA", second: "10 000 FCFA" },
      { classLabel: "Nursery II", registration: "30 000 FCFA", first: "30 000 FCFA", second: "10 000 FCFA" },
      { classLabel: "Class I → Class IV", registration: "30 000 FCFA", first: "20 000 FCFA", second: "7 000 FCFA" },
      { classLabel: "Class V", registration: "30 000 FCFA", first: "20 000 FCFA", second: "10 000 FCFA" },
      { classLabel: "Class VI", registration: "40 000 FCFA", first: "30 000 FCFA", second: "—" },
    ],
    notes: L.notesEnglish,
  };

  return (
    <div className="space-y-8">
      {/* Official sheet image */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold tracking-wide text-slate-500">{L.official}</div>
            <h3 className="text-xl font-extrabold text-slate-900">{L.feeSheetTitle}</h3>
            <p className="text-sm text-slate-600">{L.feeSheetDesc}</p>
          </div>

          <a
            href="/images/tuition-fees-sheet.png"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-md bg-[#b91c1c] px-4 py-2 text-sm font-extrabold text-white hover:bg-[#a11616]"
          >
            {L.open}
          </a>
        </div>

        <div className="p-4">
          <img
            src="/images/tuition-fees-sheet.png"
            alt={L.sheetAlt}
            className="w-full rounded-xl border border-slate-200"
          />
        </div>
      </div>

      {/* Two tables */}
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <FeesTable table={french} locale={locale} />
        <FeesTable table={english} locale={locale} />
      </div>
    </div>
  );
}
