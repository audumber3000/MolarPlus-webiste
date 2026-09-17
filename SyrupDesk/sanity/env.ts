// Project id and dataset are public: every browser request to Sanity carries
// them. They are hard-coded as defaults so the Studio bundle works even when
// the Next env vars are not present.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  "eypnm6cy";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || "production";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
