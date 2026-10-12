/**
 * Tells Bing (and the other IndexNow search engines) which pages exist
 * or have changed, so they are crawled now and not whenever the crawler
 * next comes by. Google does not use IndexNow; it reads sitemap.xml.
 *
 * Run it AFTER a deploy is live:  npm run indexnow
 *
 * It reads the live sitemap, so it always submits exactly the pages the
 * site is serving. The key is not a secret: IndexNow proves ownership by
 * finding the same key in public/<key>.txt on the site. Do not delete
 * that file or change the key without changing both.
 */
const HOST = "www.molarplus.com";
const KEY = "56a8fe77f12767b144e216b0523fe30d";
const ORIGIN = `https://${HOST}`;

const sitemap = await fetch(`${ORIGIN}/sitemap.xml`);
if (!sitemap.ok) {
  console.error(`Could not read the sitemap: HTTP ${sitemap.status}`);
  process.exit(1);
}
const urlList = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

// The key file must be live first, or the submission is rejected.
const keyFile = await fetch(`${ORIGIN}/${KEY}.txt`);
if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
  console.error(`The key file is not live at ${ORIGIN}/${KEY}.txt. Deploy first, then run this again.`);
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
});

// 200 and 202 both mean accepted; 202 means the key is still being checked.
if (response.status === 200 || response.status === 202) {
  console.log(`Submitted ${urlList.length} pages for ${HOST} (HTTP ${response.status}).`);
} else {
  console.error(`IndexNow refused the submission: HTTP ${response.status} ${await response.text()}`);
  process.exit(1);
}
