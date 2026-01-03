type ContactRow = { name: string; location: string };

export default function ContactTable({
  title,
  rows = [],
}: {
  title: string;
  rows?: ContactRow[];
}) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200">
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
      </div>

      {rows.length === 0 ? (
        <div className="px-5 py-4 text-sm text-slate-600">
          No contacts available yet.
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {rows.map((r, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-2 px-5 py-4 text-sm"
            >
              <div className="font-semibold text-slate-900">{r.name}</div>
              <div className="text-slate-600 md:text-right">{r.location}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
