import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_UPDATED, COOKIES } from "@/content/legal";

// See the header of content/legal.ts before changing this page.
export const metadata: Metadata = buildMetadata({
  title: "Cookies Policy",
  description: "Which cookies the Curogrid website and software use, and how to control them.",
  path: "/cookies-policy",
  index: false,
});

export default function Page() {
  return (
    <LegalDoc
      path="/cookies-policy"
      title="Cookies policy"
      lead="Which cookies we use, why, and how to turn them off."
      updated={LEGAL_UPDATED}
      sections={COOKIES}
    />
  );
}
