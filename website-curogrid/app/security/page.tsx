import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_UPDATED, SECURITY } from "@/content/legal";

// See the header of content/legal.ts before changing this page.
export const metadata: Metadata = buildMetadata({
  title: "Security: Where Your Clinic's Records Are Kept",
  description: "Where Curogrid keeps a clinic's records and how they are protected: hosting in Mumbai, encryption, daily backups, roles and an audit log.",
  path: "/security",
  index: true,
});

export default function Page() {
  return (
    <LegalDoc
      path="/security"
      title="Security"
      lead="Where your clinic's records are kept and what protects them, stated plainly."
      updated={LEGAL_UPDATED}
      sections={SECURITY}
    />
  );
}
