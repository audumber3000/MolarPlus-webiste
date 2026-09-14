/**
 * The H1 register fields and the three year retention come from Rule 65 of
 * the Drugs and Cosmetics Rules, 1945, checked 2026-09-13. Schedule X is
 * described only in outline and the reader is sent to their drug inspector,
 * because the detail varies by state and we have not verified it line by line.
 */
export const meta = {
  slug: "schedule-h-h1-x-register-guide",
  title: "Schedule H, H1 and X: what a medical store has to record",
  description:
    "Which medicines need a prescription, which need a separate register, what that register must show and how long to keep it.",
  published: "2026-08-27",
  tag: "Compliance",
  readingMinutes: 6,
  coverImage: "/blog/schedule-h-h1-x-register-guide.webp",
  coverAlt: "A pharmacist taking a medicine box down from a stocked shelf",
};

export function Body() {
  return (
    <>
      <p>
        A drug inspector does not usually walk in looking for a big problem. They ask for a register,
        and whether you can produce it in two minutes or twenty tells them most of what they want to
        know. The Schedule H1 register is the one that trips up the most shops, because it is easy to
        skip on a busy evening and hard to rebuild later.
      </p>

      <h2>The three schedules, in one line each</h2>
      <ul>
        <li>
          <strong>Schedule H</strong>: sold only against a prescription from a registered medical
          practitioner.
        </li>
        <li>
          <strong>Schedule H1</strong>: sold only against a prescription, and every sale is written
          into a separate register at the time you sell it.
        </li>
        <li>
          <strong>Schedule X</strong>: the strictest category, with its own prescription and record
          keeping rules on top of H1.
        </li>
      </ul>

      <h2>Schedule H1: what the register must show</h2>
      <p>
        Schedule H1 covers medicines where misuse is a public health risk, including many third and
        fourth generation antibiotics, anti tuberculosis drugs and some habit forming medicines.
        Under Rule 65 of the Drugs and Cosmetics Rules, every supply goes into a separate register
        at the time of sale, with four details:
      </p>
      <ol>
        <li>The name and address of the prescriber</li>
        <li>The name of the patient</li>
        <li>The name of the drug</li>
        <li>The quantity supplied</li>
      </ol>
      <p>
        The register has to be kept for <strong>three years</strong> and must be open for
        inspection. H1 medicines are also marked on the pack, with a boxed warning on the label, so
        your staff can recognise them at the counter.
      </p>

      <h3>Where shops usually go wrong</h3>
      <ul>
        <li>
          <strong>Writing it up at the end of the day.</strong> The rule says at the time of supply.
          By closing time the prescription has gone home with the customer.
        </li>
        <li>
          <strong>Mixing it into the sales register.</strong> It has to be separate, so an
          inspector can see H1 sales on their own.
        </li>
        <li>
          <strong>Leaving out the prescriber address.</strong> A doctor name alone is not enough.
        </li>
        <li>
          <strong>Throwing old registers out.</strong> Three years means three years, including the
          register you finished last March.
        </li>
      </ul>

      <h2>Schedule H: the prescription is the record</h2>
      <p>
        Schedule H medicines do not need the separate register, but they still cannot be sold
        without a prescription. The practical risk is a counter hand who sells a strip because the
        customer is a regular and says the doctor already knows. Make it a shop rule, and make sure
        every person who bills knows which items are H.
      </p>

      <h2>Schedule X: ask before you stock it</h2>
      <p>
        Schedule X covers medicines with a high potential for abuse. The rules around the
        prescription, how long you keep it, storage and the register are stricter again, and the
        detail can vary with your state and your licence. If you plan to stock anything in Schedule
        X, speak to your state drug control office or your drug inspector first and set up the
        record keeping before the first box arrives.
      </p>

      <h2>A routine that survives a busy counter</h2>
      <ol>
        <li>Mark every H1 and X item in your stock list so it is flagged when billed.</li>
        <li>Do not let a bill for an H1 item be saved until the four register details are filled.</li>
        <li>Once a month, check the register against your H1 sales for the same period.</li>
        <li>Keep finished registers together, labelled by year, somewhere dry.</li>
      </ol>

      <blockquote>
        <p>
          This is a plain language summary of the rules as they apply to retail pharmacies, not
          legal advice. Schedules are amended from time to time, so confirm the current position
          with your state drug control department.
        </p>
      </blockquote>

      <h2>How SyrupDesk handles it</h2>
      <p>
        Each medicine carries its schedule. When an H1 item goes onto a bill, SyrupDesk asks for the
        patient and doctor details before the bill will save, and the drug register report is built
        from those bills, so the register is complete because the bill could not be finished without
        it.
      </p>
    </>
  );
}
