/**
 * Licence facts (Form 20 / 21, registered pharmacist, 10 and 15 square
 * metres, refrigeration) checked 2026-09-13 against published licensing
 * guides. Fees, processing times and the exact document list vary by state,
 * so the post deliberately gives none of them as fixed numbers.
 */
export const meta = {
  slug: "how-to-open-medical-store-india",
  title: "How to open a medical store in India: licence, GST and your first month",
  description:
    "The drug licence, the pharmacist, the shop, GST registration and the first stock order, in the order you will actually need them.",
  published: "2026-08-14",
  tag: "Setup",
  readingMinutes: 8,
  coverImage: "/blog/how-to-open-medical-store-india.webp",
  coverAlt: "A man reading the newspaper at the counter of a small medical shop",
};

export function Body() {
  return (
    <>
      <p>
        Opening a medical store is less about money than most people expect and more about
        paperwork in the right order. Get the order wrong and you pay rent on a shop you cannot open
        for two months. This is the sequence that avoids that.
      </p>

      <h2>1. Decide what kind of licence you need</h2>
      <p>
        A retail medical store needs a drug licence from your state drug control department. The two
        you will hear about are:
      </p>
      <ul>
        <li>
          <strong>Form 20</strong>, for retail sale of allopathic medicines other than those in
          Schedules C, C1 and X.
        </li>
        <li>
          <strong>Form 21</strong>, for retail sale of Schedule C and C1 medicines, which include
          many biological products.
        </li>
      </ul>
      <p>
        Most general medical stores apply for both. If you also plan to supply clinics or other
        shops, that is a wholesale licence, applied for separately.
      </p>

      <h2>2. Find your pharmacist before you find your shop</h2>
      <p>
        A retail licence needs a registered pharmacist, someone with a D.Pharm or B.Pharm who is
        registered with the State Pharmacy Council, present while the shop is open. If you are not a
        pharmacist yourself, this is the person your licence depends on. Settle the arrangement in
        writing before you sign a lease.
      </p>

      <h2>3. Choose premises that will pass inspection</h2>
      <ul>
        <li>
          <strong>Area.</strong> The minimum is 10 square metres for a retail licence, and 15 square
          metres if you want retail and wholesale at the same address.
        </li>
        <li>
          <strong>Refrigeration.</strong> If you will stock insulin, vaccines or other cold chain
          medicines, you need a refrigerator and a way to show the temperature was kept.
        </li>
        <li>
          <strong>Proof of the premises.</strong> A rent agreement or ownership papers in the
          applicant name, and a site plan.
        </li>
      </ul>
      <p>
        An inspector usually visits before the licence is issued. A shop that is clean, shelved and
        has the fridge running looks like a business ready to open.
      </p>

      <h2>4. Apply for the drug licence</h2>
      <p>
        Most states now take applications online through the state drug control or FDA portal. Expect
        to upload identity and address proof, the premises documents, the site plan, the pharmacist
        registration and their consent, and to pay a government fee. Fees, the document list and how
        long approval takes all vary by state, so read your own state portal rather than a figure
        from another state.
      </p>

      <h2>5. Register for GST and your shop licence</h2>
      <p>
        Once you know your turnover will cross the threshold, or if you will buy from distributors
        who expect a GSTIN, register for GST. Most shops do this from day one, because distributors
        and input tax credit both work better with it. Many states also require a shops and
        establishments registration from the local authority.
      </p>

      <h2>6. Open accounts with two or three distributors</h2>
      <p>
        Do not rely on one supplier. Ask each distributor about credit days, the minimum order, how
        often they deliver and, most importantly, their <strong>expiry return window</strong>: how
        close to expiry they will still take a batch back. Write it down. It decides how much
        expired stock you end up throwing away.
      </p>

      <h2>7. Your first month</h2>
      <ol>
        <li>
          Start with a narrow range: the medicines local doctors prescribe most, plus everyday OTC
          items. Add as customers ask.
        </li>
        <li>Keep a shortbook from day one, a list of everything asked for that you did not have.</li>
        <li>
          Record the batch number and expiry of every item as it comes in, not later.
        </li>
        <li>Put your shop on Google Maps with correct hours and a phone number.</li>
        <li>Visit the nearby clinics and introduce yourself.</li>
      </ol>

      <blockquote>
        <p>
          Licensing rules are set centrally but applied by each state, and the details change. Treat
          this as a checklist to plan with, and confirm each requirement with your state drug control
          department before you commit money.
        </p>
      </blockquote>

      <h2>How SyrupDesk helps from the first day</h2>
      <p>
        The free plan covers a single counter. Your medicines arrive with their HSN codes, GST rates
        and schedules already filled in, purchase entry records batch and expiry as stock arrives,
        and the shortbook fills itself from what customers ask for, so the habits in this list are
        built in rather than remembered.
      </p>
    </>
  );
}
