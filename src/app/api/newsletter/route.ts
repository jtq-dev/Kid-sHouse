import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body?.email || "").trim().toLowerCase();
    const hp = String(body?.company || "").trim(); // honeypot field (should stay empty)

    if (hp) {
      // bots fill hidden fields
      return NextResponse.json({ ok: true });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true") === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const to = process.env.NEWSLETTER_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
    const from = process.env.NEWSLETTER_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

    if (!host || !user || !pass || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "Server config missing (.env.local)." },
        { status: 500 }
      );
    }

    // 1) Save to a CSV file (simple + importable later)
    // Put it in /data so it's easy to find in your repo (don’t commit it if you don't want).
    const dataDir = path.join(process.cwd(), "data");
    const csvPath = path.join(dataDir, "newsletter.csv");

    await fs.mkdir(dataDir, { recursive: true });

    // Deduplicate: read file if exists, check if email already saved
    let existing = "";
    try {
      existing = await fs.readFile(csvPath, "utf8");
    } catch {
      // file doesn't exist yet, that's fine
    }
    if (existing.toLowerCase().includes(`\n${email},`) || existing.toLowerCase().startsWith(`${email},`)) {
      // already subscribed (we still return ok to avoid leaking list info)
      return NextResponse.json({ ok: true });
    }

    const now = new Date().toISOString();
    const line = `${email},${now}\n`;
    await fs.appendFile(csvPath, line, "utf8");

    // 2) Email YOU to notify a new subscriber
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      subject: `New Newsletter Subscriber: ${email}`,
      text: `Newsletter signup\n\nEmail: ${email}\nTime: ${now}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Newsletter Subscriber</h2>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Time:</b> ${escapeHtml(now)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
