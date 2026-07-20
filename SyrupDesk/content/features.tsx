import type { ReactNode } from "react";
import { BillingMockup } from "@/components/mockups/BillingMockup";
import { ExpiryMockup } from "@/components/mockups/ExpiryMockup";
import { PanelMockup } from "@/components/mockups/PanelMockup";

export type Feature = {
  id: string;
  /** Names the job, not the feature category — this is also the
   *  H3 that search engines index for the page. */
  title: string;
  body: string;
  points: ReadonlyArray<string>;
  visual: ReactNode;
};

export const FEATURES: ReadonlyArray<Feature> = [
  {
    id: "billing",
    title: "Bill a customer in a few seconds",
    body: "Type the first three letters of a medicine and it comes up with its batch, MRP and GST rate already filled in. Print on your existing thermal or A4 printer. The bill is GST-compliant the moment it prints — no separate entry later.",
    points: [
      "Keyboard-first, so a busy counter never waits on a mouse",
      "Batch and expiry picked automatically, oldest stock first",
      "Part-strip and loose-tablet sales handled properly",
      "Reprint or edit a bill without breaking the GST trail",
    ],
    visual: <BillingMockup />,
  },
  {
    id: "expiry",
    title: "See what is expiring before it is money lost",
    body: "Every batch carries its expiry date, so you can see what is going to expire in the next 30, 60 or 120 days and return it to the distributor while there is still time. Expiry is the quietest way a pharmacy loses money.",
    points: [
      "Alerts by batch, not just by medicine",
      "Value of expiring stock shown in rupees",
      "Return list you can hand to your distributor",
      "Near-expiry batches flagged at the counter during billing",
    ],
    visual: <ExpiryMockup />,
  },
  {
    id: "database",
    title: "A medicine database you do not have to build",
    body: "Your stock list starts filled in with Indian medicine names, packs, compositions, HSN codes and GST rates. You are not typing in twelve thousand items before you can print your first bill.",
    points: [
      "Composition and HSN code on every item",
      "GST rate set correctly per medicine",
      "Substitute suggestions when a brand is out of stock",
      "Add your own items for anything we are missing",
    ],
    visual: (
      <PanelMockup
        title="Medicine database"
        label="The SyrupDesk medicine database showing a search for paracetamol with matching brands, each listing composition, HSN code and GST rate."
        headline="Matches for “paracetamol”"
        headlineValue="18"
        rows={[
          { primary: "Dolo 650 Tablet", secondary: "Paracetamol 650mg · HSN 3004", value: "12%" },
          { primary: "Calpol 500 Tablet", secondary: "Paracetamol 500mg · HSN 3004", value: "12%" },
          { primary: "Crocin Advance", secondary: "Paracetamol 500mg · HSN 3004", value: "12%" },
          { primary: "Sumo Cold Tablet", secondary: "Paracetamol + Cetirizine · HSN 3004", value: "12%" },
        ]}
        footnote="Composition, HSN and GST rate come pre-filled on every item."
      />
    ),
  },
  {
    id: "purchase",
    title: "Stop typing purchase bills by hand",
    body: "Import the bill your distributor already sends you and the stock, batches, expiry dates and rates go straight in. What used to be an hour after closing is a couple of minutes.",
    points: [
      "Reads the common distributor bill formats",
      "Flags rate changes against your last purchase",
      "Catches short supply before you pay for it",
      "Updates your selling price if the MRP has moved",
    ],
    visual: (
      <PanelMockup
        title="Purchase bill import"
        label="The SyrupDesk purchase import screen showing a distributor bill of ₹48,210 read in with 62 items matched automatically and 2 items flagged for a rate change."
        headline="Bill from distributor"
        headlineValue="₹48,210"
        rows={[
          { primary: "62 items matched", secondary: "Batch and expiry read from the bill", value: "OK" },
          { primary: "2 rate changes", secondary: "Purchase rate higher than last time", value: "Check", flag: true },
          { primary: "1 short supply", secondary: "Billed 10, received 8", value: "Check", flag: true },
          { primary: "4 new items", secondary: "Not in your stock list yet", value: "Add" },
        ]}
        footnote="Nothing is added to your stock until you approve it."
      />
    ),
  },
  {
    id: "customers",
    title: "Know which regulars stopped coming",
    body: "A customer on blood pressure tablets buys every month. When they do not, you usually find out never. SyrupDesk keeps the refill dates and sends a reminder on WhatsApp before the strip runs out.",
    points: [
      "Refill reminders sent on WhatsApp, not SMS nobody reads",
      "Chronic customers listed by medicine",
      "See who has not come back in 60 days",
      "Customer purchase history at the counter",
    ],
    visual: (
      <PanelMockup
        title="Refills due"
        label="The SyrupDesk refill screen listing four regular customers whose chronic medicines are due for a refill this week, with the reminder status for each."
        headline="Refills due this week"
        headlineValue="34"
        rows={[
          { primary: "Telmisartan 40mg", secondary: "9 customers · monthly", value: "Sent" },
          { primary: "Metformin 500mg", secondary: "12 customers · monthly", value: "Sent" },
          { primary: "Atorvastatin 10mg", secondary: "7 customers · monthly", value: "Due" },
          { primary: "Thyronorm 50mcg", secondary: "6 customers · monthly", value: "Due" },
        ]}
        footnote="Reminders go out on WhatsApp the day before the strip runs out."
      />
    ),
  },
  {
    id: "gst",
    title: "GST filing without the week-end panic",
    body: "Your GSTR-1 and GSTR-3B figures are ready from the bills you already printed. Download the return in the format your accountant or the portal expects, instead of rebuilding the month from a drawer of paper.",
    points: [
      "GSTR-1 and GSTR-3B ready to file",
      "Rate-wise summary for the month",
      "Purchase register for input credit",
      "Export for your accountant in one click",
    ],
    visual: (
      <PanelMockup
        title="GST summary"
        label="The SyrupDesk GST summary for a month showing total taxable sales of ₹6,42,180 broken down by GST rate, with GSTR-1 and GSTR-3B ready to download."
        headline="Taxable sales this month"
        headlineValue="₹6,42,180"
        rows={[
          { primary: "GST 5%", secondary: "412 bills", value: "₹18,240" },
          { primary: "GST 12%", secondary: "1,904 bills", value: "₹52,110" },
          { primary: "GST 18%", secondary: "266 bills", value: "₹14,880" },
          { primary: "Exempt", secondary: "38 bills", value: "₹0" },
        ]}
        footnote="GSTR-1 and GSTR-3B download in the portal's format."
      />
    ),
  },
];
