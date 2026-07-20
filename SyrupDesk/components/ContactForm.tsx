"use client";

import { useState } from "react";
import { Button, ButtonLink } from "./ui/Button";
import { track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";

const FIELD =
  "min-h-12 w-full rounded-sm border border-ink-200 bg-surface px-4 text-body text-ink-900 placeholder:text-ink-400 focus:border-green-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        track("contact_form_submitted");
        return;
      }
      // 501 means no delivery provider is configured yet. Say so
      // plainly rather than showing a success message for a message
      // that went nowhere.
      setStatus(res.status === 501 ? "unavailable" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6">
        <h3 className="text-h4 text-ink-900">Got it — we will call you back</h3>
        <p className="mt-2 text-body text-ink-700">
          Someone from our team will reach you on the number you gave, usually the same working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-body font-medium text-ink-900">
          Your name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={FIELD} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-body font-medium text-ink-900">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className={FIELD}
        />
        <p className="mt-1.5 text-small text-ink-500">We will call or message you on WhatsApp.</p>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-body font-medium text-ink-900">
          What would you like to know?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${FIELD} py-3`}
          placeholder="Tell us about your shop — how many counters, what software you use now."
        />
      </div>

      {status === "unavailable" && (
        <div role="alert" className="rounded-sm border border-ink-200 bg-surface-alt p-4">
          <p className="text-body text-ink-900">This form is not connected yet.</p>
          <p className="mt-1 text-body text-ink-700">
            Message us on WhatsApp instead — it reaches us straight away.
          </p>
          <ButtonLink
            href={whatsappLink()}
            variant="secondary"
            size="sm"
            className="mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp
          </ButtonLink>
        </div>
      )}

      {status === "error" && (
        <p role="alert" className="text-body text-danger">
          That did not go through. Please try again, or message us on WhatsApp.
        </p>
      )}

      <Button type="submit" size="lg" loading={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? "Sending…" : "Request a call back"}
      </Button>
    </form>
  );
}
