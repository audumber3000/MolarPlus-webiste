import Link from 'next/link';

/** Shared chrome for the legal and policy pages. */
export default function LegalLayout({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-clino-edge bg-clino-wash">
        <div className="mx-auto max-w-container px-4 py-14 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-clino-medium">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{title}</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-ink md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p>
          <p className="mt-4 text-sm text-ink-muted">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    </>
  );
}

export function Clause({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-ink">{heading}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
