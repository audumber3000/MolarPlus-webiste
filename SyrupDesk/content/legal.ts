/**
 * Shared facts for the legal pages.
 *
 * ─────────────────────────────────────────────────────────────────────
 * THESE PAGES HAVE NOT BEEN REVIEWED BY A LAWYER.
 *
 * They are drafted around the Digital Personal Data Protection Act 2023
 * and the pharmacy data model, and they are structurally complete — but
 * every `TODO` below is a fact only the business can supply, and several
 * of them are legally required in India rather than nice to have. Ship
 * this to a solicitor before launch, not after.
 * ─────────────────────────────────────────────────────────────────────
 */

/** Shown at the top of both pages. Update whenever the text changes —
 *  a stale date on a privacy policy is itself a compliance problem. */
export const LAST_UPDATED = "12 November 2026";

export const LEGAL = {
  /** The registered company that operates SyrupDesk and takes the
   *  payments. Same wording as the MolarPlus, Clino Health and Curogrid
   *  sites. TODO: add its CIN once confirmed. */
  entity: "Upclick Labs (OPC) Pvt. Ltd.",
  entityTodo: false,

  /** Refund window, for every paid plan. The same 3 days on every site
   *  the company runs; set by the owner on 12 November 2026. */
  refundDays: 3,

  /** TODO (blocks launch): the DPDP Act 2023 requires a published
   *  contact for grievances, and the IT (Reasonable Security Practices)
   *  Rules 2011 require a named Grievance Officer with a working
   *  address. A generic support inbox does not satisfy this. */
  grievanceOfficer: null as string | null,

  /** TODO: confirm where application data physically sits, and name the
   *  sub-processors (hosting, payments, email, analytics). The policy
   *  cannot honestly describe transfers until this list exists. */
  hostingRegion: null as string | null,

  /** TODO: confirm the courts named for jurisdiction. Pune is the
   *  registered address, but this is a commercial decision. */
  jurisdiction: "Pune, Maharashtra",
} as const;
