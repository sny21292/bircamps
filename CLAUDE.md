# CLAUDE.md — Bir Camps

Project + deployment notes for Claude (and humans). Read this first.

## What this is
Marketing website for **Bir Camps** — riverside camping & paragliding in Bir
Billing, Himachal Pradesh. **Next.js 15 (App Router, TypeScript)**, fully static
pre-rendered pages. Design system = "Himalayan dusk" (`app/globals.css` +
`app/ui.css`). Fonts: Fraunces + Hanken Grotesk.

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content (usually no code)
- Prices / camp names / blurbs → `lib/data.ts`
- Phone, email, address, nav → `lib/site.ts`
- Blog post → add `app/blog/(posts)/<slug>/page.mdx` + an entry in `lib/posts.ts`
- Photos → `public/photos/`. Replace `public/photos/open-cottage.jpg` with the
  real Open Cottage photo (same filename) when available.

## Git / GitHub
- Repo: **`sny21292/bircamps`**.
- The default `git@github.com` SSH key on the dev machine authenticates as
  `sunil21292` (NO access). Push using the SSH host alias **`git@github.com-new`**
  (authenticates as `sny21292`). `origin` already points at
  `git@github.com-new:sny21292/bircamps.git`.
```bash
git add -A && git commit -m "..." && git push
```

## Production server (AWS EC2)
- **Instance:** `i-0f06038b9dddbcbb4` ("Bir Camps"), region `us-east-1`, t3.micro, Ubuntu 26.04.
- **Public IP:** `54.221.154.169`  ·  DNS `ec2-54-221-154-169.compute-1.amazonaws.com`
- **SSH:** `ssh -i /Users/sunilkumar/Documents/pemfiles/linkdinapp.pem ubuntu@54.221.154.169`
  (default `git@github.com` key fails as ec2-user; the **`ubuntu`** user + this .pem works)
- **Stack on the box:** Node 22 (apt) · app run by **pm2** as process `bircamps`
  (`npm start` → Next on :3000) · **nginx** reverse-proxies :80 → :3000. A 2 GB
  swapfile was added so `next build` doesn't OOM on 1 GB RAM. pm2 is set to
  resurrect on reboot (systemd).
- App lives in `~/bircamps` on the instance.

### ⚠️ Security Group
The instance's Security Group must allow inbound **HTTP :80** (and :443 once SSL
is added) from `0.0.0.0/0`. Port 22 is already open. Without the :80 rule the
site is unreachable from the internet even though everything is running.

### Deploy / update the live site
From the local repo root:
```bash
./deploy.sh
```
This tars the source, copies it up, runs `npm install` + `npm run build`, and
`pm2 reload`s the app. Env overrides: `BIRCAMPS_PEM`, `BIRCAMPS_HOST`.

### Useful remote commands
```bash
pm2 status                 # app state
pm2 logs bircamps          # live logs
pm2 reload bircamps        # zero-downtime restart
sudo nginx -t && sudo systemctl reload nginx
```

## Known follow-ups
- **Security:** `next@15.1.6` has CVE-2025-66478 — bump to the latest patched
  15.x (`npm i next@latest`), rebuild, redeploy.
- **HTTPS:** add a domain + Let's Encrypt (`certbot --nginx`) and open :443.
- Add `public/photos/og-cover.jpg` (1200×630) for link previews.

## Bookings
No payment checkout — every Book/Reserve button and the contact form open
WhatsApp (`+91 89888 56055`) prefilled. Real payments would be a separate build.
