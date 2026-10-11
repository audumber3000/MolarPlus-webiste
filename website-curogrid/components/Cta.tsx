"use client";

import { ButtonLink } from "./ui/Button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SIGNUP_URL, whatsappLink } from "@/lib/site";
import { track } from "@/lib/analytics";

/**
 * The three calls to action, as client components so they can report a
 * click. Server pages import these and stay server-rendered themselves.
 * `placement` says where on the site the button was, for the funnel.
 */
type Tone = "light" | "dark";
type Size = "sm" | "md" | "lg";

export function TrialCta({ placement, tone = "light", size = "lg", label = "Start free trial" }: { placement: string; tone?: Tone; size?: Size; label?: string }) {
  return (
    <ButtonLink
      href={SIGNUP_URL}
      size={size}
      variant={tone === "dark" ? "inverse" : "primary"}
      onClick={() => track("cta_start_trial", { placement })}
    >
      {label}
    </ButtonLink>
  );
}

export function DemoCta({ placement, tone = "light", size = "lg", label = "Book a demo" }: { placement: string; tone?: Tone; size?: Size; label?: string }) {
  return (
    <ButtonLink
      href="/book-demo"
      size={size}
      variant={tone === "dark" ? "inverse-outline" : "secondary"}
      onClick={() => track("cta_book_demo", { placement })}
    >
      {label}
    </ButtonLink>
  );
}

export function WhatsAppCta({ placement, tone = "light", size = "lg", message, label = "Ask on WhatsApp" }: { placement: string; tone?: Tone; size?: Size; message?: string; label?: string }) {
  return (
    <ButtonLink
      href={whatsappLink(message)}
      size={size}
      variant={tone === "dark" ? "inverse-outline" : "secondary"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("cta_whatsapp", { placement })}
    >
      <WhatsAppIcon tone={tone === "dark" ? "current" : "brand"} />
      {label}
    </ButtonLink>
  );
}
