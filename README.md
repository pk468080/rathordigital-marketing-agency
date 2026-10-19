# Rathore Digital Marketing Agency — Website

Marketing website for the agency, built with [Next.js](https://nextjs.org) 16 (App Router), TypeScript and Tailwind CSS v4.

## Pages

- `/` — Home
- `/services` — Services overview, plus detail pages:
  `/services/seo`, `/services/meta-ads`, `/services/google-ads`,
  `/services/web-development`, `/services/ecommerce`,
  `/services/video-editing`, `/services/consultation`
- `/about` — About the agency
- `/contact` — Contact details + enquiry form (opens WhatsApp with the message prefilled)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

Brand name, contact details, WhatsApp number and site URL all live in one file:

`src/lib/site.ts`

Update it with the real email, phone, WhatsApp number and domain before launch.

## SEO

Per-page titles/descriptions are set via `metadata` exports. `src/app/robots.ts`
and `src/app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml`
automatically (they use the URL from `src/lib/site.ts`).

## Build

```bash
npm run build
npm start
```
