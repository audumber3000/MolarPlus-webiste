"use client";

import { useState } from "react";
import { Button, ButtonLink } from "./ui/Button";
import { track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";

const FIELD =
  "min-h-12 w-full rounded-sm border border-gray-300 bg-gray-0 px-3.5 text-body text-gray-900 placeholder:text-gray-400 hover:border-gray-400 focus:border-teal-600";
const LABEL = "mb-1.5 block text-[0.9375rem] font-semibold text-gray-800";

/**
 * One form for three pages. `topic` travels with the message so the
 * person reading it knows whether it came from Contact, Book a demo or
 * the hospital page. `askClinic` adds the clinic-name field the demo
 * and hospital forms need.
 */
export function ContactForm({
  topic = "contact",
  askClinic = false,
  messageLabel = "What would you like to know?",
  messagePlaceholder = "Tell us about your clinic: your speciality, how many doctors, what you use today.",
  submitLabel = "Request a call back",
}: {
  topic?: "contact" | "demo" | "hospital";
  askClinic?: boolean;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const data = { ...Object.fromEntries(new FormData(event.currentTarget)), topic };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        track("contact_form_submitted", { topic });
        return;
      }
      // 501 means no delivery is configured yet. Say so plainly rather
      // than showing success for a message that went nowhere.
      setStatus(res.status === 501 ? "unavailable" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-teal-200 bg-teal-50 p-6">
        <h3 className="text-h4 text-gray-900">Got it. We will call you back.</h3>
        <p className="mt-2 text-body text-gray-700">
          Someone from our team will reach you on the number you gave, usually the same working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>Your name</label>
          <input id="name" name="name" type="text" required minLength={2} autoComplete="name" className={FIELD} />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL}>Mobile number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-]{10,15}"
            placeholder="10-digit mobile number"
            className={FIELD}
          />
        </div>
      </div>

      {askClinic && (
        <div>
          <label htmlFor="clinic" className={LABEL}>
            {topic === "hospital" ? "Hospital name and city" : "Clinic name and city"}
          </label>
          <input id="clinic" name="clinic" type="text" autoComplete="organization" className={FIELD} />
        </div>
      )}

      <div>
        <label htmlFor="message" className={LABEL}>{messageLabel}</label>
        <textarea id="message" name="message" required minLength={5} rows={4} className={`${FIELD} py-3`} placeholder={messagePlaceholder} />
      </div>

      {status === "unavailable" && (
        <div role="alert" className="rounded-sm border border-gray-300 bg-gray-50 p-4">
          <p className="text-body font-semibold text-gray-900">This form is not connected yet.</p>
          <p className="mt-1 text-body text-gray-700">Message us on WhatsApp instead. It reaches us straight away.</p>
          <ButtonLink href={whatsappLink()} variant="secondary" size="sm" className="mt-3" target="_blank" rel="noopener noreferrer">
            Open WhatsApp
          </ButtonLink>
        </div>
      )}

      {status === "error" && (
        <p role="alert" className="text-body text-danger">
          That did not go through. Please try again, or message us on WhatsApp.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button type="submit" size="lg" loading={status === "sending"}>
          {status === "sending" ? "Sending…" : submitLabel}
        </Button>
        <p className="text-small text-gray-600">We call or message you on WhatsApp. No spam.</p>
      </div>
    </form>
  );
}
