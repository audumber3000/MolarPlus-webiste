import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_UPDATED, TERMS } from "@/content/legal";

// See the header of content/legal.ts before changing this page.
export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms for using Curogrid clinic software: accounts, plans and payment, your data, and what the software is and is not.",
  path: "/terms",
  index: false,
});

export default function Page() {
  return (
    <LegalDoc
      path="/terms"
      title="Terms of service"
      lead="The agreement between Curogrid and a clinic that uses it, in plain words."
      updated={LEGAL_UPDATED}
      sections={TERMS}
    />
  );
}
