import type { FaqItem } from "@/components/ui/Accordion";

/**
 * These answers are also emitted as FAQPage JSON-LD, so they can
 * surface directly in search results. Keep them plain and factual —
 * an answer written as marketing copy reads badly as a rich result.
 */
export const FAQ: ReadonlyArray<FaqItem> = [
  {
    q: "Does it work if my internet goes off?",
    a: "Yes. Billing keeps working when the connection drops — bills are saved on the device and sync to your account as soon as you are back online. You will not have to turn a customer away because the internet is down.",
  },
  {
    q: "Is the billing GST compliant?",
    a: "Yes. Every bill carries your GSTIN, HSN codes, and a rate-wise CGST/SGST or IGST breakup in the format the GST rules require. Your GSTR-1 and GSTR-3B figures are built from those bills, so there is no second round of data entry at filing time.",
  },
  {
    q: "Can I bring my existing stock data across?",
    a: "Yes. Send us whatever you have — an Excel sheet, a backup from your current software, or a printed stock list — and we will import it for you before you start. There is no charge for this and you do not have to type it in yourself.",
  },
  {
    q: "What happens to my data if I stop paying?",
    a: "It stays yours. Your account moves to read-only, you keep access to download your bills, stock and customer data in Excel, and we do not delete anything for 12 months. There is no lock-in that holds your own records hostage.",
  },
  {
    q: "Do I need training to use it?",
    a: "No. If you can bill on paper, you can bill on SyrupDesk. Most owners are printing their first real bill within an hour of signing up, and we will walk you through the setup on WhatsApp if you want a hand.",
  },
  {
    q: "Will it run on the computer I already have?",
    a: "Almost certainly. SyrupDesk runs in a browser, so it works on an old Windows desktop, a laptop, or an Android phone or tablet. It also prints to the thermal and A4 printers pharmacies already use.",
  },
  {
    q: "Can I use it for more than one shop?",
    a: "Yes, on the Chain plan. You get combined and per-branch reports, and you can transfer stock between branches instead of keeping separate books for each shop.",
  },
  {
    q: "How much does it cost?",
    a: "There is a free plan for a single counter that covers GST billing and up to 300 bills a month, with no card required. Paid plans add inventory, expiry alerts, purchase import and GST reports. See the pricing page for the current rates.",
  },
];
