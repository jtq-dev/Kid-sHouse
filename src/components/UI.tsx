import clsx from "clsx";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>;
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("rounded-2xl border border-slate-200 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline" | "navy";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
      : variant === "navy"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";
  return (
    <a className={clsx(base, styles)} href={href}>
      {children}
    </a>
  );
}

export function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
        {kicker}
      </div>
      <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">
        {title}
      </h2>
      {desc ? <p className="mt-2 text-slate-600 max-w-3xl">{desc}</p> : null}
    </div>
  );
}
