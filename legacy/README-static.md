# Bir Camps — website

A cinematic, single-page marketing site for **Bir Camps** — riverside camping &
paragliding in Bir Billing, Himachal Pradesh.

Built with plain **HTML + CSS + JavaScript** (no build step, no dependencies),
so it runs anywhere and is trivial to host.

```
bircamps/
├── index.html        # all content + SEO meta + JSON-LD structured data
├── css/styles.css    # the full design system ("Himalayan dusk")
├── js/main.js        # scroll reveals, nav, counters, parallax
├── assets/           # ← drop real photos here (see below)
├── robots.txt
└── sitemap.xml
```

## Run it locally

Just open `index.html` in a browser. Or serve it (nicer for testing):

```bash
cd bircamps
python3 -m http.server 8000
# then visit http://localhost:8000
```

## ⭐ Add the real photos (recommended)

Right now every "photo" area uses a hand-tuned **gradient placeholder** so the
site looks finished out of the box. Swapping in real shots from
[@bircamps](https://www.instagram.com/bircamps/) makes it sing — and helps SEO
(real images + alt text rank in Google Images).

1. Save photos into the `assets/` folder (e.g. `assets/swiss-luxury.jpg`).
   Use landscape ~1600px wide, compressed JPG/WebP.
2. In `css/styles.css`, find the section you want and set a background image.
   Each placeholder is labelled. Example for the cards:

   ```css
   /* was: .card__media[data-tone="luxury"] { background-image: linear-gradient(...) } */
   .card__media[data-tone="luxury"] { background-image: url("../assets/swiss-luxury.jpg"); }
   ```

   The same trick works for `.exp__item[data-tone="..."]::before`,
   `.gframe[data-tone="g1"]::before`, the `.hero` background, and `.fly__bg`.
3. Add a real social-share image at `assets/og-cover.jpg` (1200×630) — it's
   referenced by the Open Graph / Twitter tags for link previews.

> Tip: for the **best** accessibility + SEO, replace the decorative gallery/card
> backgrounds with real `<img>` tags that have descriptive `alt` text
> (e.g. `alt="Swiss luxury tent overlooking the Dhauladhar range at dusk"`).

## SEO — what's already done

- Descriptive `<title>` + meta description packed with target keywords
  (camping in Bir Billing, paragliding in Bir Billing, Swiss tents, etc.).
- `keywords`, `author`, `robots`, `canonical`, geo and theme-color meta tags.
- **Open Graph + Twitter Card** tags for rich link previews.
- **JSON-LD structured data**: `LodgingBusiness` / `Campground`, a paragliding
  `Product` with price `Offer`s, and a `FAQPage` — these can earn rich results
  (price, rating, FAQ accordions) in Google.
- Semantic headings (one `<h1>`, section `<h2>`s), `robots.txt` and `sitemap.xml`.

### After you go live
- Update every `https://bircamps.com/` URL in `index.html`, `robots.txt` and
  `sitemap.xml` if you use a different domain.
- Submit the site + `sitemap.xml` in **Google Search Console**.
- Create / claim a **Google Business Profile** for "Bir Camps" — for a local
  business this is the single biggest ranking lever.
- Confirm the lat/long in the meta tags & JSON-LD matches the exact camp pin.

## Deploy (free options)

- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, or connect
  a Git repo. Point the `bircamps.com` domain at it.
- **GitHub Pages** — push to a repo, enable Pages.

## Editing content

All copy, prices and contact details live in `index.html` and are easy to find
(search for a price like `₹1,600`, the phone `8988856055`, or the email).
WhatsApp links use `https://wa.me/918988856055`.
