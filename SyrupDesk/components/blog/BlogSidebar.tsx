import { ButtonLink } from "@/components/ui/Button";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Blog sidebar. Deliberately carries a tag filter, a short "what this
 * is" panel and a WhatsApp CTA — and deliberately does NOT carry a
 * search box or a trending list.
 *
 * Search and trending are worth adding at roughly ten posts. Below
 * that they filter nothing, and a filter widget taller than the
 * content it filters is the clearest possible signal that a site is
 * scaffolding rather than a real publication.
 */
export function BlogSidebar({
  tags,
  totalPosts,
  selectedTag,
  onSelectTag,
}: {
  tags: Array<{ name: string; count: number }>;
  totalPosts: number;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}) {
  const facets = [{ name: "All posts", count: totalPosts, value: null as string | null }].concat(
    tags.map((tag) => ({ name: tag.name, count: tag.count, value: tag.name })),
  );

  return (
    <aside className="space-y-10">
      <div>
        <h2 className="text-h4 font-semibold text-ink-900">Topics</h2>
        {/* Real buttons in a real list: keyboard operable, and the
            pressed state is announced rather than just coloured. */}
        <ul className="mt-4 space-y-1">
          {facets.map((facet) => {
            const active = selectedTag === facet.value;
            return (
              <li key={facet.name}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSelectTag(facet.value)}
                  className={cn(
                    "flex min-h-11 w-full items-center justify-between gap-3 rounded-sm px-3 text-body transition-colors duration-200 ease-out",
                    active
                      ? "bg-green-50 font-semibold text-green-700"
                      : "text-ink-700 hover:bg-green-50 hover:text-green-700",
                  )}
                >
                  <span>{facet.name}</span>
                  <span className="text-small text-ink-500">{facet.count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-md border border-ink-200 p-6">
        <h2 className="text-h4 font-semibold text-ink-900">What is {SITE.name}?</h2>
        <p className="mt-3 text-body text-ink-700">
          Cloud software for Indian retail pharmacies — GST billing, stock with expiry
          alerts, purchase entry and returns, on one record.
        </p>
        <ButtonLink href="/features" variant="secondary" size="sm" className="mt-5 w-full">
          See what it does
        </ButtonLink>
      </div>

      <div className="rounded-md bg-green-700 p-6 on-dark">
        <h2 className="text-h4 font-semibold text-white">Questions about your shop?</h2>
        <p className="mt-3 text-body text-green-100">
          Message us and we will answer plainly — no callback queue, no demo booking.
        </p>
        <ButtonLink
          href={whatsappLink()}
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full border-white bg-white text-green-700 hover:border-green-100 hover:bg-green-100"
        >
          Talk to us on WhatsApp
        </ButtonLink>
      </div>
    </aside>
  );
}
