import Link from 'next/link';
import LegalLayout, { Bullets, Clause } from '@/components/LegalLayout';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Cookies policy',
  description:
    'Which cookies the Clino Health website and products use, and how to control them.',
  path: '/cookies-policy',
});

/**
 * Written from what this site actually loads: no analytics, no ad tags,
 * no third-party scripts (checked in app/layout.tsx, November 2026). If an
 * analytics or ads script is ever added, section 2 must change with it.
 */
export default function CookiesPolicyPage() {
  return (
    <LegalLayout
      title="Cookies policy"
      intro="Which cookies we use, why, and how to turn them off."
      updated="November 2026"
    >
      <Clause heading="1. What cookies are">
        <p>
          Cookies are small text files a website stores on your computer or phone. They let a
          site remember things, such as that you are signed in.
        </p>
        <p>
          This policy explains how{' '}
          <strong className="font-semibold text-ink">{SITE.legalName}</strong> (&quot;we&quot;,
          &quot;our&quot;, &quot;us&quot;), which operates {SITE.name}, uses cookies on this
          website ({SITE.url.replace('https://', '')}) and in the {SITE.name} products.
        </p>
      </Clause>

      <Clause heading="2. This website">
        <p>
          This website does not set cookies of its own, and it does not load analytics,
          advertising or tracking scripts. You can read every page without any cookie being
          stored.
        </p>
      </Clause>

      <Clause heading="3. Our products">
        <p>
          Once you sign in to a {SITE.name} product, such as MolarPlus, SyrupDesk or Curogrid,
          it uses cookies and your browser&apos;s local storage only for things it cannot work
          without:
        </p>
        <Bullets
          items={[
            'Keeping you signed in during and between visits',
            'Security, such as protecting forms from being submitted by another site',
            'Remembering settings you choose, such as language or layout',
          ]}
        />
        <p>
          We do not use advertising cookies in the products, and none in any screen that shows
          patient information.
        </p>
      </Clause>

      <Clause heading="4. Third parties">
        <p>
          When you pay for a subscription, the payment page is run by our payment provider,
          which may set its own cookies to process the payment safely and prevent fraud. Those
          cookies are covered by the payment provider&apos;s own policy.
        </p>
      </Clause>

      <Clause heading="5. How long they last">
        <Bullets
          items={[
            'Session cookies: deleted when you close the browser',
            'Sign-in cookies: up to 30 days, or until you sign out',
            'Settings: up to 1 year',
          ]}
        />
      </Clause>

      <Clause heading="6. Controlling cookies">
        <p>
          Every browser lets you see, block and delete cookies in its settings: in Chrome,
          Settings, then Privacy and security; in Safari, Settings, then Privacy; in Firefox,
          Settings, then Privacy and Security; in Edge, Settings, then Cookies and site
          permissions. Blocking the cookies in section 3 will sign you out of the products.
        </p>
      </Clause>

      <Clause heading="7. Changes">
        <p>
          If this policy changes, we will post it here and update the date above.
        </p>
      </Clause>

      <Clause heading="8. Contact">
        <p>
          Questions about cookies:{' '}
          <a href={`mailto:${CONTACT.privacy}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.privacy}
          </a>
          . {SITE.legalName}, {CONTACT.address.street}, {CONTACT.address.city},{' '}
          {CONTACT.address.state} {CONTACT.address.postalCode}, {CONTACT.address.countryName}.
        </p>
        <p>
          See also the{' '}
          <Link href="/privacy" className="font-semibold text-clino-medium hover:text-clino-dark">
            privacy policy
          </Link>
          .
        </p>
      </Clause>
    </LegalLayout>
  );
}
