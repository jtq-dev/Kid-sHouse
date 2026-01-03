import { CATEGORY_META, type CalEvent, type Category } from "../data/calendar";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function ymd(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

type DayCell = { date: Date | null; key: string };

function buildGrid(year: number, month: number): DayCell[] {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const startOffset = first.getDay(); // Sunday-first
  const totalDays = last.getDate();

  const cells: DayCell[] = [];
  for (let i = 0; i < startOffset; i++) cells.push({ date: null, key: `pad-${i}` });
  for (let day = 1; day <= totalDays; day++) cells.push({ date: new Date(year, month, day), key: `d-${day}` });
  while (cells.length % 7 !== 0) cells.push({ date: null, key: `tail-${cells.length}` });

  return cells;
}

function inRange(date: string, start: string, end?: string) {
  if (!end) return date === start;
  return date >= start && date <= end;
}

function eventsForDate(dateStr: string, events: CalEvent[]) {
  return events.filter((e) => inRange(dateStr, e.date, e.endDate));
}

function pickCategory(cats: Category[]): Category | null {
  const priority: Category[] = ["firstlast", "holiday", "ptc", "quarter", "progress", "general"];
  for (const p of priority) if (cats.includes(p)) return p;
  return null;
}

export default function MiniMonth({
  year,
  month,
  events,
  locale,
  dowShort,
  titleMap,
}: {
  year: number;
  month: number; // 0-11
  events: CalEvent[];
  locale: string;
  dowShort: string[];
  titleMap: Record<string, string>;
}) {
  const cells = buildGrid(year, month);

  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long" })
    .format(new Date(year, month, 1))
    .toUpperCase();

  return (
    <div className="w-[260px]">
      <div className="text-center font-extrabold text-sm tracking-wide text-slate-900">
        {monthLabel} {year}
      </div>

      <div className="mt-2 rounded-sm overflow-hidden border border-slate-200 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-7 bg-slate-600 text-white text-[11px] font-bold">
          {dowShort.map((d) => (
            <div key={d} className="py-1 text-center">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 bg-white text-[11px]">
          {cells.map((c) => {
            if (!c.date) return <div key={c.key} className="h-7 bg-slate-100/60" />;

            const dateStr = ymd(c.date);
            const evts = eventsForDate(dateStr, events);
            const cat = pickCategory(evts.map((e) => e.category));
            const color = cat ? CATEGORY_META[cat].color : null;

            const tooltip = evts.length
              ? evts.map((e) => titleMap[e.titleKey] ?? e.titleKey).join(" • ")
              : "";

            return (
              <div
                key={c.key}
                className="h-7 flex items-center justify-center border-t border-l border-slate-100"
                style={{
                  background: color ? color : undefined,
                  color: color ? "white" : undefined,
                }}
                title={tooltip}
              >
                {c.date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
