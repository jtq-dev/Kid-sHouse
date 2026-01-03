import { Card } from "./UI";

export type QuickNavItem = { label: string; href: string };

export default function QuickNav({
  title = "On this page",
  items,
}: {
  title?: string;
  items: QuickNavItem[];
}) {
  return (
    <div className="sticky top-24">
      <Card className="p-5">
        <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
          {title}
        </div>
        <ul className="mt-3 space-y-2">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="text-sm font-semibold text-slate-800 hover:text-amber-700"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="text-sm font-bold text-slate-900">Need help?</div>
          <div className="text-xs text-slate-600 mt-1">
            Put admissions contact + WhatsApp here.
          </div>
          <a
            href="/contact"
            className="mt-3 inline-flex w-full justify-center rounded-xl bg-slate-900 px-3 py-2 text-xs font-extrabold text-white hover:bg-slate-800"
          >
            Contact Admissions
          </a>
        </div>
      </Card>
    </div>
  );
}
