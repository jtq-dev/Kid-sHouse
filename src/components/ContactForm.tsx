"use client";

import { useState } from "react";

type Props = {
  namePlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  sending: string;
  send: string;
  successMsg: string;
  errorFallback: string;
  errorSendFail: string;
  whatsappLinkText: string;
  whatsappHref?: string;
};

export default function ContactForm({
  namePlaceholder,
  phonePlaceholder,
  messagePlaceholder,
  sending,
  send,
  successMsg,
  errorFallback,
  errorSendFail,
  whatsappLinkText,
  whatsappHref = "https://wa.me/237699038487",
}: Props) {
  const [status, setStatus] = useState<
    { type: "idle" | "loading" | "success" | "error"; msg?: string }
  >({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || errorSendFail);
      }

      form.reset();
      setStatus({ type: "success", msg: successMsg });
    } catch (err: any) {
      setStatus({ type: "error", msg: err?.message || errorFallback });
    }
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <input
        name="name"
        className="w-full rounded-xl border border-slate-300 px-3 py-2"
        placeholder={namePlaceholder}
        required
      />
      <input
        name="phone"
        className="w-full rounded-xl border border-slate-300 px-3 py-2"
        placeholder={phonePlaceholder}
      />
      <textarea
        name="message"
        className="w-full rounded-xl border border-slate-300 px-3 py-2"
        rows={6}
        placeholder={messagePlaceholder}
        required
      />

      <button
        disabled={status.type === "loading"}
        className="w-full rounded-xl bg-amber-500 px-4 py-2.5 font-semibold text-slate-950 hover:bg-amber-400 disabled:opacity-60"
      >
        {status.type === "loading" ? sending : send}
      </button>

      {status.type === "success" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {status.msg}
        </div>
      )}

      {status.type === "error" && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {status.msg}{" "}
          <a className="underline" href={whatsappHref} target="_blank" rel="noreferrer">
            {whatsappLinkText}
          </a>
        </div>
      )}
    </form>
  );
}
