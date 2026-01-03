"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company: "", // honeypot (must exist in payload)
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setErr(data?.error || "Could not subscribe. Please try again.");
        return;
      }

      setOk("Thanks! You’re subscribed.");
      setEmail("");
    } catch (e: any) {
      setErr(e?.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form className="mt-3 flex gap-2" onSubmit={onSubmit}>
        {/* Honeypot: hidden field for bots */}
        <input
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          name="company"
        />

        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400/40"
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? "..." : "Join"}
        </button>
      </form>

      {ok ? <div className="mt-2 text-sm text-emerald-700">{ok}</div> : null}
      {err ? <div className="mt-2 text-sm text-rose-700">{err}</div> : null}
    </div>
  );
}
