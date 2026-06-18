# Bir Camps — website

A fast, animated, SEO-strong website for **Bir Camps** — riverside camping &
paragliding in Bir Billing, Himachal Pradesh.

Built with **Next.js 15 (App Router) + TypeScript**. Every page is pre-rendered
to static HTML, so it's quick and ranks well — while staying easy to extend.

```
app/
  layout.tsx              shared shell: nav, footer, glider, SEO + business JSON-LD
  page.tsx                home (hero, stays, paragliding, experiences, gallery…)
  globals.css / ui.css    the "Himalayan dusk" design system
  stay/                   stays overview + /stay/[slug] (7 camp pages)
  fly/                    paragliding (Classic + Prime)
  rentals/                scooty + motorbike
  experiences/            activities + things to do
  blog/                   journal index + 6 MDX posts (under (posts)/)
  about/ contact/         story + WhatsApp enquiry form
  cancellation-policy/ dos-and-donts/ privacy-policy/
  sitemap.ts  robots.ts   auto-generated, no maintenance
components/               Nav, Footer, Glider, Reveal, Counter, cards…
lib/                      site.ts (contact/nav) · data.ts (camps/flights) · posts.ts
public/photos/            real photos (exported from the old bircamps.com)
legacy/                   the original static HTML version, kept for reference
```

## Run it

```bash
npm install      # once
npm run dev      # http://localhost:3000  (live reload)
npm run build    # production build
npm start        # serve the production build
```

## Editing content (no code needed for most of it)

- **Prices, camp names, blurbs** → `lib/data.ts`
- **Phone, email, address, nav links** → `lib/site.ts`
- **Add a blog post** → create `app/blog/(posts)/your-slug/page.mdx` (copy an
  existing one) and add an entry to `lib/posts.ts`. That's it — it's live.
- **Photos** → drop files in `public/photos/`. To set a card photo, the camp
  cards map by `data-tone` in `globals.css`; detail/blog images use the path in
  `lib/data.ts` / the MDX file.

### The new Open Cottage photo
Replace `public/photos/open-cottage.jpg` with your real cottage photo (keep the
same filename) and it appears everywhere automatically — currently a placeholder.

## The paraglider
A site-wide element (`components/Glider.tsx`):
- **Desktop** — follows the mouse pointer and sticks where it goes.
- **Mobile/touch** — always on screen, drifts gently, and descends as you scroll.
It never blocks clicks (pointer-events: none) and respects reduced-motion.

## SEO — what's built in
- Per-page `<title>`, descriptions, canonical, Open Graph & Twitter cards
  (Next.js Metadata API) — every camp and post has its own.
- **JSON-LD**: `LodgingBusiness`/`Campground` site-wide, `Product` + price offers
  on stays/paragliding, and a `FAQPage` on the home.
- Auto **`/sitemap.xml`** and **`/robots.txt`** (regenerate themselves from data).
- `next/image` optimises every photo (modern formats, lazy-load) for Core Web Vitals.
- Real, keyword-rich content on every page (camping & paragliding in Bir Billing,
  Rajgundha, waterfalls, packages…).

### After you deploy
- If you use a domain other than `bircamps.com`, update `SITE.domain` in `lib/site.ts`.
- Add a 1200×630 share image at `public/photos/og-cover.jpg` and point the
  `openGraph.images` / `twitter.images` in `app/layout.tsx` at it (optional).
- Submit the site + `sitemap.xml` in **Google Search Console**, and claim the
  **Google Business Profile** — the biggest local-SEO lever.

## Deploy (free)
- **Vercel** (made by the Next.js team) — import the repo, it just works.
- **Netlify** / **Cloudflare Pages** also support Next.js.
Point the `bircamps.com` domain at whichever you choose.

## Bookings
There's no payment checkout — every "Book"/"Reserve" button opens WhatsApp
(`+91 89888 56055`) with a pre-filled message, matching how bookings actually
happen. The contact form does the same. To add real online payments later, that's
a separate piece (payment gateway + availability) we can build on top.
