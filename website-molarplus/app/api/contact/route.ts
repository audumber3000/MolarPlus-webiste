import { NextResponse } from 'next/server';

/**
 * Contact form delivery.
 *
 * This route exists because the form previously *pretended* to send: it ran a
 * one-second timer, showed "We'll get back to you within 24 hours", and threw
 * the message away. Every lead through the only assisted path on the site was
 * lost silently.
 *
 * The guiding rule here is therefore: NEVER report success unless the message
 * actually went somewhere. If delivery is not configured or the provider fails,
 * this returns an error and the form tells the visitor to email directly. A
 * visible failure is recoverable; a silent one is not.
 *
 * Delivery uses Resend's REST API over plain fetch, so there is no new
 * dependency. Required environment variables (set these in the Vercel project,
 * not just .env.local — the deployed site cannot see .env.local):
 *
 *   RESEND_API_KEY   from resend.com
 *   CONTACT_TO       optional, defaults to sales@molarplus.com
 *   CONTACT_FROM     optional, must be on a domain verified in Resend
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const TO = process.env.CONTACT_TO || 'sales@molarplus.com';
const FROM = process.env.CONTACT_FROM || 'MolarPlus Website <noreply@molarplus.com>';

/** Generous caps: real enquiries are short, bots are not. */
const LIMITS = { name: 120, email: 200, phone: 40, practice: 160, message: 5000 };

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: a real person never fills a field they cannot see. Return 200 so
  // the bot believes it succeeded and does not retry with a different shape.
  if (clean(payload.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, LIMITS.name);
  const email = clean(payload.email, LIMITS.email);
  const phone = clean(payload.phone, LIMITS.phone);
  const practice = clean(payload.practice, LIMITS.practice);
  const message = clean(payload.message, LIMITS.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in your name, email and message.' },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'That email address looks incomplete.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Loud on the server, honest to the visitor. The alternative — accepting the
    // message and dropping it — is the bug this route was written to remove.
    console.error('[contact] RESEND_API_KEY is not set; message NOT delivered.');
    return NextResponse.json(
      { error: 'Our contact form is temporarily unavailable.' },
      { status: 503 },
    );
  }

  const body = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    phone ? `Phone:    ${phone}` : null,
    practice ? `Practice: ${practice}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email, // replying in the inbox reaches the dentist directly
        subject: `Website enquiry — ${name}${practice ? ` (${practice})` : ''}`,
        text: body,
      }),
    });

    if (!res.ok) {
      // Log the provider's reason but never the enquiry contents.
      console.error('[contact] Resend rejected the message:', res.status, await res.text());
      return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] Network failure calling Resend:', err);
    return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
