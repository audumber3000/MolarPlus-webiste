import { ImageResponse } from "next/og";
import { SITE } from "./site";
import { PLANS, TRIAL_DAYS, rupees } from "@/content/pricing";

/**
 * The share image (Open Graph and Twitter card), drawn once here and
 * used by every `opengraph-image.tsx` on the site, so a link pasted
 * into WhatsApp shows the page's own headline and not a generic card.
 *
 * Rendered by satori, which does not see the stylesheet, so the token
 * values are literal here. This file is a deliberate exception to the
 * no-typed-hex rule. Keep these in step with design/tokens.css.
 */
const TEAL_900 = "#1A3C3E";
const TEAL_300 = "#8AC6C8";
const TEAL_100 = "#DBEEEF";
const WHITE = "#ffffff";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

/** The price line at the foot of every card. Read from the plans, so it
 *  cannot drift from the pricing page. */
export const OG_PRICE_LINE = `From ${rupees(PLANS[0].monthly)} a month for the clinic  ·  ${TRIAL_DAYS}-day free trial`;

export function shareImage({
  title,
  line,
  label,
  foot = OG_PRICE_LINE,
}: {
  /** The page's headline. */
  title: string;
  /** One supporting sentence under it. */
  line?: string;
  /** A short word beside the brand, such as "Blog". */
  label?: string;
  foot?: string;
}) {
  // A long headline steps down so it never runs off the card.
  const titleSize = title.length > 70 ? 50 : title.length > 48 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: TEAL_900,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", color: WHITE, fontSize: 40, fontWeight: 700 }}>
          {SITE.name}
          {label && (
            <div style={{ display: "flex", color: TEAL_300, fontSize: 26, fontWeight: 400, marginLeft: 20 }}>{label}</div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: WHITE,
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {line && (
            <div style={{ display: "flex", color: TEAL_100, fontSize: 30, marginTop: 24, maxWidth: 920 }}>{line}</div>
          )}
        </div>

        <div style={{ display: "flex", color: TEAL_300, fontSize: 26 }}>{foot}</div>
      </div>
    ),
    OG_SIZE,
  );
}
