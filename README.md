# TallyBoard

**The financial dashboard for multi-platform content creators.**

Unify your YouTube, TikTok, Twitch, merch, and sponsorship revenue in one view — with expense tracking and tax-ready reports.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR-USERNAME%2Ftallyboard&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,NEXT_PUBLIC_POSTHOG_KEY&envDescription=See%20.env.example%20for%20instructions&project-name=tallyboard&repo-name=tallyboard)

> **Before deploying:** replace `YOUR-USERNAME` in the button URL above with your GitHub username.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Analytics | PostHog |
| Deployment | Vercel |

---

## Local development

### 1. Clone and install

```bash
git clone https://github.com/YOUR-USERNAME/tallyboard.git
cd tallyboard
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the three values (see [Environment variables](#environment-variables) below).

### 3. Create the Supabase table

Open your [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql) and run the contents of [`supabase/schema.sql`](./supabase/schema.sql).

This creates the `waitlist` table with Row Level Security — the anon key can insert but not read emails.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

All three variables must be set in Vercel (or `.env.local` locally) before the app will function correctly.

| Variable | Required | Where to find it |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Yes | Supabase → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Yes | Supabase → Project Settings → API → `anon` `public` key |
| `NEXT_PUBLIC_POSTHOG_KEY` | Optional | PostHog → Project Settings → Project API Key |

`NEXT_PUBLIC_POSTHOG_KEY` is optional — analytics are silently disabled if it's missing, so the app works fine without it in local development.

---

## Deploying to Vercel

### Option A — Deploy button (recommended)

Click the **Deploy with Vercel** button at the top of this file. Vercel will prompt you to set the environment variables during the import flow.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Then add environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**, or via CLI:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_POSTHOG_KEY
```

Redeploy after adding variables:

```bash
vercel --prod
```

---

## Project structure

```
tallyboard/
├── app/
│   ├── api/waitlist/route.ts   # POST — saves email to Supabase
│   ├── globals.css             # Tailwind base + custom utilities
│   ├── layout.tsx              # Root layout, meta tags, PostHog provider
│   ├── not-found.tsx           # Custom 404 page
│   ├── page.tsx                # Landing page (all sections)
│   ├── robots.ts               # /robots.txt
│   └── sitemap.ts              # /sitemap.xml
├── components/
│   ├── AnimateIn.tsx           # Scroll-triggered fade-in wrapper
│   ├── DashboardMockup.tsx     # SVG-based hero dashboard preview
│   ├── PostHogProvider.tsx     # Analytics init + pageview tracking
│   ├── PricingCTA.tsx          # Pricing button with click tracking
│   ├── TrackScrollDepth.tsx    # Scroll depth analytics sentinel
│   └── WaitlistForm.tsx        # Email form with Supabase + toast
├── lib/
│   ├── posthog.ts              # Analytics event helpers
│   └── supabase.ts             # Supabase client singleton
├── supabase/
│   └── schema.sql              # Run once in Supabase SQL Editor
├── public/
│   └── favicon.svg
└── .env.example                # Template for required env vars
```

---

## Analytics events (PostHog)

| Event | Fired when | Properties |
|---|---|---|
| `$pageview` | On every route change | `$current_url` |
| `waitlist_signup` | Successful form submission | `email_domain` |
| `pricing_card_click` | Pricing CTA clicked | `tier`, `price` |
| `scroll_depth` | Final CTA section enters viewport | `section` |

---

## License

MIT
