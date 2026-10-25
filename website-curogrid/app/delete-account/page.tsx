import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { DELETE_ACCOUNT, LEGAL_UPDATED } from "@/content/legal";

// The account-deletion page the app stores link to. See content/legal.ts.
export const metadata: Metadata = buildMetadata({
  title: "Delete your Curogrid account",
  description: "How to ask for your Curogrid account and your clinic's data to be deleted, what is deleted, and what is kept and for how long.",
  path: "/delete-account",
  index: false,
});

export default function Page() {
  return (
    <LegalDoc
      path="/delete-account"
      title="Delete your account"
      lead="How to ask for your Curogrid account, or your clinic's account and its records, to be deleted."
      updated={LEGAL_UPDATED}
      sections={DELETE_ACCOUNT}
    />
  );
}
