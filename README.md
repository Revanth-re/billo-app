# Billo website — usebillo.in

Marketing + SEO site for Billo — positioned as an all-India product. Next.js 16, fully static (34 pages), same teal/gold brand as the app.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
Almost everything lives in **`lib/site.ts`**: phone, email, prices, plans, kit, features, FAQs,
business types (`USE_CASES`) and cities (`CITIES`). Add a city or business type there → a new SEO page
is generated automatically and added to the sitemap.

## Deploy (Vercel)
1. Push this folder to a **new GitHub repo** (separate from the app repo).
2. Vercel → *Add New Project* → import the repo → set the project name to **billo-quick** → Deploy.
   The site goes live at **https://billo-quick.vercel.app** (this address is already set in `lib/site.ts`).
3. Login / Get Billo buttons point to the app at **https://pos-bill-gamma.vercel.app** (`lib/site.ts`).

### Moving to your own domain later (recommended for SEO)
Vercel → Settings → Domains → add `usebillo.in`, then Settings → Environment Variables →
`NEXT_PUBLIC_SITE_URL = https://usebillo.in` → Redeploy. Canonicals, sitemap and share images all switch automatically.

## Google — do these right after launch
1. **Google Search Console** → *Add property* → **URL prefix** → `https://billo-quick.vercel.app/`
   → choose **HTML tag** → copy only the `content="..."` value →
   Vercel → Environment Variables → `NEXT_PUBLIC_GOOGLE_VERIFICATION = <that value>` → Redeploy → click **Verify**.
2. Search Console → Sitemaps → submit `sitemap.xml`.
3. URL Inspection → paste the home page URL → **Request indexing** (repeat for /pricing, /hi, /for/restaurant-billing-software).
4. **Google Business Profile** (business.google.com) → "Billo – Restaurant Billing" → website: your site URL → phone 7670915570.
5. Create **Instagram / Facebook / YouTube** pages named "Billo – Restaurant Billing" linking to the site.

## Backlinks / listings (speed up ranking)
Justdial · IndiaMART · Sulekha · Google Business Profile · Capterra · G2 · GetApp · SoftwareSuggest · Techjockey · Facebook page · YouTube demo video (title: "Billo – restaurant billing app with token printing").

## What's built in for SEO
- Unique `<title>`, description, canonical, OpenGraph/WhatsApp preview image on every page
- JSON-LD: Organization, WebSite, SoftwareApplication (with ₹ prices), FAQPage, BreadcrumbList, Service (city pages)
- `sitemap.xml`, `robots.txt`, web manifest, favicon/apple icon
- Keyword pages: 5 business types (`/for/...`) + 20 cities across India (`/billing-software/...`)
- Language pages: Hindi (`/hi`) and Telugu (`/te`) with hreflang — add Tamil/Kannada/Marathi by copying `app/hi/page.tsx` (layout is shared in `components/LangLanding.tsx`)
- Static HTML, self-hosted fonts, lazy images → fast Core Web Vitals

## Next content to add (monthly)
Blog posts targeting: "best billing machine for hotel", "udhaari app", "GST for small restaurants",
"58mm vs 80mm thermal printer", "tiffin centre business tips" — plus more Telugu pages.
