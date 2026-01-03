import { Container } from "./UI";
import QuickNav, { QuickNavItem } from "./QuickNav";

export default function PageShell({
  title,
  subtitle,
  quickNav,
  children,
}: {
  title: string;
  subtitle?: string;
  quickNav?: QuickNavItem[];
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{title}</h1>
        {subtitle ? <p className="mt-3 text-slate-600 max-w-3xl">{subtitle}</p> : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>{children}</div>
          {quickNav ? (
            <aside className="hidden lg:block">
              <QuickNav items={quickNav} />
            </aside>
          ) : (
            <div className="hidden lg:block" />
          )}
        </div>
      </div>
    </Container>
  );
}
