import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — pharmacy management software for Indian medical stores. By ${SITE.parent}.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Rendered by satori, which does not see our stylesheet — the token
 * values have to be literal here. This file is the one deliberate
 * exception to the no-hardcoded-hex rule, and it is noted in
 * DESIGN.md. Keep these in sync with app/tokens.css.
 */
const GREEN_700 = "#005500";
const GREEN_300 = "#66bf66";
const GREEN_100 = "#d6efd6";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: GREEN_700,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Each of these must hold exactly one child node — satori
              rejects a multi-child element without explicit display. */}
          <div style={{ color: "#ffffff", fontSize: 36, fontWeight: 700 }}>{SITE.name}</div>
          <div style={{ color: GREEN_300, fontSize: 18, fontWeight: 500 }}>
            {`by ${SITE.parent}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Run your whole pharmacy from one screen
          </div>
          <div style={{ color: GREEN_100, fontSize: 30, marginTop: 24, maxWidth: 860 }}>
            Billing, stock, purchases and GST for Indian medical stores.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, color: GREEN_300, fontSize: 24 }}>
          <span>Free plan</span>
          <span>·</span>
          <span>No card needed</span>
          <span>·</span>
          <span>Made in India</span>
        </div>
      </div>
    ),
    size,
  );
}
