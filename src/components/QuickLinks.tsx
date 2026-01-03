import { Container, Card } from "./UI";
import React from "react";

export type QuickLinkItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
};

export default function QuickLinks({ links }: { links: QuickLinkItem[] }) {
  return (
    <div className="bg-white">
      <Container>
        <div className="grid gap-3 py-10 md:grid-cols-4">
          {links.map((x) => (
            <a key={x.href} href={x.href}>
              <Card className="p-5 hover:bg-slate-50 transition">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{x.icon}</div>
                  <div>
                    <div className="font-extrabold text-slate-900">{x.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
