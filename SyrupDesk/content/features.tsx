import type { ReactNode } from "react";
import { ProductShot } from "@/components/mockups/ProductShot";
import billListShot from "@/app/assets/app-billlist.webp";
import expiryShot from "@/app/assets/app-expiry.webp";
import purchasesShot from "@/app/assets/app-purchases.webp";
import customersShot from "@/app/assets/app-customers.webp";
import gstShot from "@/app/assets/app-gst.webp";

export type Feature = {
  id: string;
  /** Names the job, not the feature category — this is also the
   *  H3 that search engines index for the page. */
  title: string;
  body: string;
  points: ReadonlyArray<string>;
  /** Optional: a block without one renders its copy on its own. */
  visual?: ReactNode;
};

export const FEATURES: ReadonlyArray<Feature> = [
  {
    id: "billing",
    title: "Bill a customer in a few seconds",
    body: "Type the first three letters of a medicine and it comes up with its batch, MRP and GST rate already filled in. Print on your existing thermal or A4 printer. The bill is GST-compliant the moment it prints, with no separate entry later.",
    points: [
      "Keyboard-first, so a busy counter never waits on a mouse",
      "Batch and expiry picked automatically, oldest stock first",
      "Part-strip and loose-tablet sales handled properly",
      "Reprint or edit a bill without breaking the GST trail",
    ],
    visual: (
      <ProductShot
        src={billListShot}
        alt="The SyrupDesk bill register: every bill raised, with its bill number, date, patient, net value and status, searchable by number, name, phone or date range."
        caption="Every bill you have raised, searchable by number, name or phone."
      />
    ),
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
    visual: (
      <ProductShot
        src={expiryShot}
        alt="The SyrupDesk expiry screen filtered to stock expiring within 90 days: ₹95,242 across 105 units, listed batch by batch with a countdown on each (17 days, 48 days) and a Create return button."
        caption="Expiry, filtered to the 90 days you can still act on."
      />
    ),
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
      <ProductShot
        src={purchasesShot}
        alt="The SyrupDesk purchase register listing distributor invoices with their invoice number, distributor, date, goods-receipt number and net value."
        caption="Every distributor invoice, with its goods-receipt note against it."
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
      <ProductShot
        src={customersShot}
        alt="The SyrupDesk customer list showing each customer's locality, whether they buy on account or cash only, their credit limit, what they currently owe, and the date they were last in."
        caption="Customers, with what each one owes and when they were last in."
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
      <ProductShot
        src={gstShot}
        alt="The SyrupDesk tax summary report: output tax on sales for a period, grouped by GST rate, showing taxable value, tax and invoice count for each rate with a total, and an Export CSV button."
        caption="Tax collected and tax paid, grouped by rate, for any period."
      />
    ),
  },
];
