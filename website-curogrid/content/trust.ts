/**
 * The security and compliance marks under the hero of the home page and
 * every speciality page (components/sections/TrustMarks.tsx).
 *
 * Every mark here is a claim about patient records, so each one says
 * where it was checked. Re-check before changing one. Checked against the
 * app repo (~/Developer/curogrid) on 13 November 2026:
 *
 * - aes256: infra/aws/main.tf, `storage_encrypted = true` on the RDS
 *   database and `encrypted = true` on the server's disk, both with a KMS
 *   key. AWS encrypts both with AES-256. Traffic is HTTPS (certbot on the
 *   box, same file).
 * - dpdp: docs/architecture/03-PHASE-2-COMPLIANCE.md marks P2-3
 *   `domains/compliance/` "Built": versioned privacy notices, purpose-bound
 *   consent and withdrawal, the retention engine, data-principal requests
 *   and breach scoping (routes/dpdp.py). It says "built for", never
 *   "compliant": compliance is the clinic's and ours together, and the
 *   legal pages are not yet reviewed (content/legal.ts).
 * - india: infra/aws, region ap-south-1 (Mumbai). The DATABASE only:
 *   patient photos and files are on Cloudflare R2 (deploy/env.production
 *   .example), which has no India jurisdiction, so never widen this to
 *   "data never leaves India". R2 encrypts objects with AES-256 too, so
 *   the aes256 mark covers them.
 * - backups: infra/aws/main.tf, `backup_retention_period = 7`.
 *
 * Kept off on purpose, with `live: false`. Each one turns on only when the
 * thing in `requires` exists. Do not switch one on to fill the row:
 * - abdm: the same doc marks P2-1 `domains/abdm/` "Not started" (11 Nov
 *   2026). An ABHA number can be recorded but is never checked with ABDM,
 *   and the speciality FAQ says "Not yet" (components/speciality/parts.tsx).
 *   Saying "ABDM integrated" before NHA certification is a false claim to
 *   the clinics that rely on it for DHIS incentives.
 * - iso27001: no certificate exists. content/legal.ts says the name is not
 *   used until one does.
 * HIPAA is deliberately not on this list at all. It is a US law, Curogrid
 * serves Indian clinics, and no Business Associate Agreement exists with
 * AWS or any vendor. MolarPlus's /compliance/hipaa makes the same call.
 */
export type TrustMarkKey = "aes256" | "dpdp" | "india" | "backups" | "abdm" | "iso27001";

export type TrustMark = {
  key: TrustMarkKey;
  /** The big word on the seal. */
  seal: string;
  /** The small line round or under it. */
  sealSub: string;
  title: string;
  detail: string;
  live: boolean;
  /** What must exist before `live` may be true. */
  requires?: string;
};

const ALL: ReadonlyArray<TrustMark> = [
  {
    key: "aes256",
    seal: "AES",
    sealSub: "256-bit",
    title: "AES-256 encryption",
    detail: "Records are encrypted where they are stored, and on the way to your screen over HTTPS.",
    live: true,
  },
  {
    key: "dpdp",
    seal: "DPDP",
    sealSub: "Act 2023",
    title: "Built for the DPDP Act",
    detail: "Patient consent, privacy notices, data requests and retention rules are part of Curogrid.",
    live: true,
  },
  {
    key: "india",
    seal: "IN",
    sealSub: "Mumbai",
    title: "Hosted in India",
    detail: "The clinic's database runs on Amazon Web Services in Mumbai.",
    live: true,
  },
  {
    key: "backups",
    seal: "Daily",
    sealSub: "Backups",
    title: "Backed up every day",
    detail: "Automatic daily backups, with the last seven days kept.",
    live: true,
  },
  {
    key: "abdm",
    seal: "ABDM",
    sealSub: "Integrated",
    title: "ABDM integrated",
    detail: "ABHA numbers checked with ABDM, and records linked and shared through it.",
    live: false,
    requires: "domains/abdm built and NHA certification (at least M1) granted",
  },
  {
    key: "iso27001",
    seal: "ISO",
    sealSub: "27001:2022",
    title: "ISO 27001:2022 certified",
    detail: "Certified by an accredited body.",
    live: false,
    requires: "a current ISO/IEC 27001:2022 certificate, with its number and certifying body",
  },
];

export const TRUST_MARKS = ALL.filter((m) => m.live);
