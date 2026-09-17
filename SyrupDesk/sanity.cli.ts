import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

/**
 * The Studio runs as its own app (`npm run studio:dev`), not as a route on
 * the marketing site. Embedding it would put the whole Studio bundle in the
 * same project as a site that has a tight JS budget, for the benefit of the
 * two or three people who edit posts.
 */
export default defineCliConfig({ api: { projectId, dataset } });
