import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_UPDATED, PRIVACY } from "@/content/legal";

// See the header of content/legal.ts before changing this page.
export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Curogrid handles personal information: what this website collects, and how the records a clinic keeps in the software are stored and used.",
  path: "/privacy",
  index: false,
});

export default function Page() {
  return (
    <LegalDoc
      path="/privacy"
      title="Privacy policy"
      lead="How Curogrid handles information on this website, and how it handles the records a clinic keeps in the software."
      updated={LEGAL_UPDATED}
      sections={PRIVACY}
    />
  );
}
