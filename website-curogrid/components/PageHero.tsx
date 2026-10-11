import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./ui/Section";

/**
 * The top of every inner page: breadcrumb, one h1, a lead paragraph and
 * an optional row of buttons, on the dark teal band that continues the
 * header. Page files never write their own h1.
 */
export function PageHero({
  trail,
  title,
  lead,
  children,
}: {
  trail: ReadonlyArray<{ name: string; path: string }>;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark bg-teal-900 pt-8 pb-14 text-teal-100 lg:pt-10 lg:pb-20">
      <Container>
        <Breadcrumbs trail={trail} tone="dark" />
        <h1 className="mt-6 max-w-[20ch] text-[2.125rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-display">
          {title}
        </h1>
        {lead && <p className="measure mt-5 text-body-lg text-teal-100">{lead}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
