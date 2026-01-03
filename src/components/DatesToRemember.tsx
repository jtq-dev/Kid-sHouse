import { CATEGORY_META, type CalEvent } from "../data/calendar";

function formatRange(locale: string, date: string, endDate?: string) {
  const d = new Date(date + "T00:00:00");

  const fmt = new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!endDate) return fmt.format(d);

  const e = new Date(endDate + "T00:00:00");

  // If same month/year, show like "Oct 27 - 31, 2025" (localized month)
  const sameMonth = d.getFullYear() === e.getFullYear() && d.getMonth() === e.getMonth();
  if (sameMonth) {
    const month = new Intl.DateTimeFormat(locale, { month: "short" }).format(d);
    return `${month} ${d.getDate()} - ${e.getDate()}, ${d.getFullYear()}`;
  }

  return `${fmt.format(d)} - ${fmt.format(e)}`;
}

export default function DatesToRemember({
  events,
  locale,
  title,
  titleMap,
}: {
  events: CalEvent[];
  locale: string;
  title: string;
  titleMap: Record<string, string>;
}) {
  const sorted = [...events].sort((a, b) => (a.date < b.date ? -1 : 1));

  return (
    <section className="mt-10">
      <div className="text-sm font-bold text-slate-900">{title}</div>

      <div className="mt-4 space-y-3">
        {sorted.map((e) => (
          <div
            key={`${e.date}-${e.titleKey}`}
            className="relative rounded-sm border border-slate-200 bg-slate-50 px-4 py-3"
          >
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{ background: CATEGORY_META[e.category].color }}
            />

            <div className="text-[11px] font-semibold text-slate-600">
              {formatRange(locale, e.date, e.endDate)}
            </div>

            <div className="text-sm font-medium text-slate-900">
              {titleMap[e.titleKey] ?? e.titleKey}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
