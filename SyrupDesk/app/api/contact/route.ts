import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * There is no delivery provider wired up yet. Rather than accept a
 * message and silently drop it — which looks like success to the
 * person who sent it — this returns 501 until CONTACT_WEBHOOK_URL is
 * configured, and the form tells them to use WhatsApp instead.
 *
 * TODO: set CONTACT_WEBHOOK_URL (or swap in an email provider).
 */
export async function POST(request: Request) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, phone, message } = (payload ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "name_required" }, { status: 400 });
  }
  if (typeof phone !== "string" || !/^[0-9+\s-]{10,15}$/.test(phone.trim())) {
    return NextResponse.json({ error: "phone_invalid" }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length < 5) {
    return NextResponse.json({ error: "message_required" }, { status: 400 });
  }

  if (!webhook) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
