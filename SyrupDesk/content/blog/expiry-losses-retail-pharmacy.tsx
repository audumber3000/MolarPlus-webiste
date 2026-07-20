/**
 * Operational advice only. Deliberately contains no industry-wide
 * loss percentages — the figures floating around for pharmacy expiry
 * write-offs are unsourced, and the brief forbids inventing or
 * laundering statistics. The post teaches the owner to measure their
 * own number instead, which is more useful than a made-up benchmark.
 */
export const meta = {
  slug: "expiry-losses-retail-pharmacy",
  title: "Stop writing off expired stock: a practical routine for retail pharmacies",
  description:
    "Expiry losses are not bad luck, they are a record-keeping problem. Here is the monthly routine that catches batches while the distributor will still take them back.",
  published: "2026-06-25",
  tag: "Operations",
  readingMinutes: 6,
};

export function Body() {
  return (
    <>
      <p>
        Expired stock is the quietest way a pharmacy loses money. Nothing dramatic happens — a strip
        sits at the back of a shelf, the date passes, and at some point you throw it away. There is
        no moment where it feels like a loss, which is exactly why it keeps happening.
      </p>
      <p>
        The fix is not a better memory. It is a routine that surfaces batches early enough to do
        something about them.
      </p>

      <h2>First, find out what it is actually costing you</h2>
      <p>
        Before changing anything, measure. For the next three months, keep every expired strip in a
        box instead of binning it. At the end of each month, add up what you paid for the contents.
      </p>
      <p>
        Most owners are surprised, and the number matters more than any industry benchmark you will
        read online. It tells you how much effort this problem deserves in <em>your</em> shop, and
        it gives you something to compare against once the routine is running.
      </p>

      <h2>The three windows that matter</h2>
      <p>
        Every batch you hold passes through three stages, and your options narrow at each one:
      </p>
      <ul>
        <li>
          <strong>Returnable.</strong> Far enough from expiry that your distributor will still
          accept it. This is the only stage where you recover most of the money.
        </li>
        <li>
          <strong>Sellable.</strong> Past the return window, but there is still time to move it if
          you push it to the front and dispense it first.
        </li>
        <li>
          <strong>Written off.</strong> Nothing left to do but dispose of it correctly.
        </li>
      </ul>
      <p>
        Return windows differ by distributor and by product, so ask each of your suppliers what
        theirs is and write it down. That number is what your alerts should be set against —
        everything in this routine works backwards from it.
      </p>

      <h2>The monthly routine</h2>

      <h3>1. Run a near-expiry list on the same day each month</h3>
      <p>
        Pick a date — the first Monday, the first of the month, whatever you will actually remember
        — and pull a list of every batch expiring inside your longest return window. Doing it on a
        fixed day matters more than which day you pick.
      </p>

      <h3>2. Split the list by what you can still do</h3>
      <p>
        Sort each batch into returnable, push-to-sell, or already lost. Only the first two need
        action, and they need different actions, which is why sorting first saves time.
      </p>

      <h3>3. Raise the returns that week</h3>
      <p>
        Returnable batches go back to the distributor while they still qualify. This is the step
        that recovers real money, and it is the one most often postponed — a return raised three
        weeks late is usually a return refused.
      </p>

      <h3>4. Move the rest to the front</h3>
      <p>
        For anything past the return window but still sellable, put the older batch physically in
        front so it gets picked first. If your software flags near-expiry batches during billing,
        this happens on its own at the counter.
      </p>

      <h2>The habits that prevent it in the first place</h2>
      <p>
        The routine catches problems. These stop them arriving:
      </p>
      <ul>
        <li>
          <strong>Record the batch and expiry at purchase entry, every time.</strong> If the date
          does not go in when the stock arrives, no report can help you later. This is the single
          highest-value habit on the list.
        </li>
        <li>
          <strong>Dispense oldest batch first.</strong> Obvious, universally agreed on, and
          inconsistently done when it is busy — which is why it is worth having the software tell
          you rather than relying on whoever is at the counter.
        </li>
        <li>
          <strong>Buy smaller quantities of slow movers.</strong> A scheme discount that leaves you
          holding fourteen months of stock on a product you sell twice a month is not a discount.
          Check how long the quantity will actually take to sell before taking the offer.
        </li>
        <li>
          <strong>Watch new products closely.</strong> A medicine you have never stocked before has
          no sales history behind it, so the first order is a guess. Order small, then reorder.
        </li>
      </ul>

      <h2>Dispose of what is left properly</h2>
      <p>
        Expired medicines should not go into general waste. Requirements vary by state and by
        product category, so check what applies where you are — your drug inspector or your
        distributor can usually tell you the accepted route, and some manufacturers have their own
        take-back arrangements.
      </p>
      <blockquote>
        <p>
          <strong>TODO before publishing:</strong> confirm the current disposal guidance we want to
          point readers at. This section should name the applicable rule or link an official source
          rather than leaving it vague — but only once someone has checked what is current.
        </p>
      </blockquote>

      <h2>How SyrupDesk handles it</h2>
      <p>
        Batch and expiry are captured when you enter a purchase, near-expiry batches are flagged at
        the counter during billing, and the expiry screen shows what is coming up with the value
        attached so you can see what is worth chasing. The routine above is still yours to run —
        the software just makes sure the list is accurate and waiting for you.
      </p>
    </>
  );
}
