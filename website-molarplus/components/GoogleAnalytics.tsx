'use client';

import Script from 'next/script';

// Google Ads account (Clinohealth Systems LLP). Configuring it on the same
// gtag.js as GA4 stores the ad-click id in a first-party `_gcl_aw` cookie on
// `.molarplus.com`, which the app on app.molarplus.com reads when it reports
// the "MolarPlus Signup Completed" conversion.
const GOOGLE_ADS_ID = 'AW-18548710131';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const id = gaId || 'G-TB31DJC76Y';

  return (
    <>
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
}
