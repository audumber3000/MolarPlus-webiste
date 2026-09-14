/**
 * Rates checked 2026-09-13 against the GST Council decision of 3 September
 * 2025 (effective 22 September 2025). Due dates and thresholds change; the
 * post says so and points readers at the portal and their accountant rather
 * than presenting today's numbers as permanent.
 */
export const meta = {
  slug: "gst-for-medical-stores-2026",
  title: "GST for medical stores in 2026: rates, bills and returns in plain language",
  description:
    "Most medicines moved from 12% to 5% GST in September 2025. What that means for your bills, your stock and the two returns you file.",
  published: "2026-09-08",
  tag: "GST",
  readingMinutes: 7,
  coverImage: "/blog/gst-for-medical-stores-2026.webp",
  coverAlt: "A strip of yellow tablets on a blue background",
};

export function Body() {
  return (
    <>
      <p>
        GST is the part of running a medical store that most owners hand to an accountant and hope
        for the best. That works until a notice arrives, or until you find the rate on a medicine
        was wrong for six months. You do not need to become a tax expert. You need to understand
        four things well enough to spot when something is off.
      </p>

      <h2>1. The rates changed in September 2025</h2>
      <p>
        From 22 September 2025, the GST Council moved most medicines from 12% to 5%. The 12% slab
        for medicines no longer exists. A list of 33 lifesaving drugs went from 12% to nil, and
        three more went from 5% to nil, mostly medicines for cancer, rare diseases and serious
        chronic conditions.
      </p>
      <p>What this means at your counter:</p>
      <ul>
        <li>
          <strong>Check the rate on every item in your software.</strong> If a medicine still shows
          12%, every bill for it since 22 September 2025 has charged the customer too much tax.
        </li>
        <li>
          <strong>Your MRP did not change by itself.</strong> Manufacturers had to pass the lower
          tax on. Stock bought before the change may carry old MRPs, so check new batches against
          the old ones before you price them.
        </li>
        <li>
          <strong>Nil rated does not mean you ignore it.</strong> Those sales still go on the bill
          and still appear in your return, just with no tax.
        </li>
      </ul>

      <h2>2. What has to be on every bill</h2>
      <p>
        A retail bill to a customer who is not registered for GST is a B2C invoice. It still has to
        carry certain details, and a bill book filled in by hand is where these usually go missing.
      </p>
      <ul>
        <li>Your shop name, address and GSTIN</li>
        <li>A serial bill number, unique for the financial year, and the date</li>
        <li>
          The HSN code for each item. Most medicines put up in doses fall under heading 3004
        </li>
        <li>The quantity, the value and the GST rate for each line</li>
        <li>
          The tax split: CGST and SGST for a sale inside your state, IGST for a sale to another state
        </li>
      </ul>
      <p>
        If you sell to a clinic or a hospital that is registered for GST, it is a B2B sale. Their
        GSTIN has to be on the bill, and those bills are reported separately in your return.
      </p>

      <h2>3. The two returns, and what goes in each</h2>
      <p>Most medical stores file two returns.</p>
      <h3>GSTR 1: what you sold</h3>
      <p>
        This is your outward supplies: every B2B bill individually, and your B2C sales summarised by
        rate. It is built entirely from your sales bills, which is why a wrong rate on a bill
        becomes a wrong figure here.
      </p>
      <h3>GSTR 3B: the summary and the payment</h3>
      <p>
        This is where you declare total tax collected, claim input tax credit on your purchases and
        pay the difference. The numbers in GSTR 3B should agree with GSTR 1. When they do not, that
        mismatch is one of the most common reasons for a notice.
      </p>
      <p>
        Smaller businesses can choose to file quarterly under the QRMP scheme instead of monthly.
        Due dates and turnover limits are set by the GST Council and do change, so confirm your
        current dates on the GST portal or with your accountant rather than relying on a date you
        remember from last year.
      </p>

      <h2>4. Input tax credit starts with your purchase bills</h2>
      <p>
        The GST you pay your distributor can be set off against the GST you collect from customers.
        That credit is only yours if three things are true: you have a proper tax invoice, the goods
        actually arrived, and your distributor has reported that sale in their own return.
      </p>
      <p>
        That last point catches a lot of shops. If a distributor files late, your credit can show
        as missing even though you paid them in full. Enter every purchase bill with its invoice
        number and date on the day stock arrives, and compare it against what shows on the portal
        each month.
      </p>

      <h2>A monthly routine that keeps it calm</h2>
      <ol>
        <li>In the first week, check that every purchase bill from last month is entered.</li>
        <li>Pull a rate wise sales summary and look for any item still at 12%.</li>
        <li>Compare your purchase credit against what the portal shows from your distributors.</li>
        <li>Send the summary to your accountant, not a drawer of paper bills.</li>
      </ol>

      <blockquote>
        <p>
          This post explains how GST works for a retail pharmacy. It is not tax advice for your shop.
          Rates, limits and due dates change, so confirm anything that affects your filing with a
          qualified accountant or on the GST portal.
        </p>
      </blockquote>

      <h2>How SyrupDesk handles it</h2>
      <p>
        The GST rate and HSN code sit on each medicine, so the bill carries the right tax the moment
        you print it. The tax summary groups what you collected and what you paid by rate for any
        period, and your accountant can take it as a file instead of rebuilding the month by hand.
      </p>
    </>
  );
}
