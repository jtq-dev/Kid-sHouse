import { CATEGORY_META, type Category } from "../data/calendar";

export default function CalendarLegend({
  labels,
}: {
  labels: Record<Category, string>;
}) {
  const items = (Object.keys(CATEGORY_META) as Category[]).map((k) => ({
    key: k,
    color: CATEGORY_META[k].color,
    label: labels[k],
  }));

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {items.map((it) => (
        <div key={it.key} className="flex items-center gap-3">
          <div
            className="h-6 w-10 border border-slate-200"
            style={{ background: it.color }}
          />
          <div className="text-sm text-slate-700">{it.label}</div>
        </div>
      ))}
    </div>
  );
}
