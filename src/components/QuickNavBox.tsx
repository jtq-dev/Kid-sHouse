import clsx from "clsx";

export default function QuickNavBox({
  title = "QUICK NAVIGATION",
  items,
  activeHref,
}: {
  title?: string;
  items: { label: string; href: string }[];
  activeHref?: string;
}) {
  return (
    <aside className="sticky top-24">
      <div className="rounded-lg border border-slate-300 bg-slate-200/70 shadow-sm">
        <div className="px-4 py-3 text-sm font-extrabold tracking-wide text-slate-900">
          {title}
        </div>
        <div className="border-t border-slate-300" />
        <ul className="p-3 space-y-1">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className={clsx(
                  "block rounded-md px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-white/70",
                  activeHref === it.href && "bg-white/80 text-slate-950"
                )}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
