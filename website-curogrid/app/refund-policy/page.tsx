import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_UPDATED, REFUNDS } from "@/content/legal";

// See the header of content/legal.ts before changing this page.
export const metadata: Metadata = buildMetadata({
  title: "Refund and Cancellation Policy",
  description: "How cancelling a Curogrid plan and asking for a refund work, and how the free trial lets you decide before you pay.",
  path: "/refund-policy",
  index: false,
});

export default function Page() {
  return (
    <LegalDoc
      path="/refund-policy"
      title="Refund policy"
      lead="How the free trial, cancelling and refunds work."
      updated={LEGAL_UPDATED}
      sections={REFUNDS}
    />
  );
}
