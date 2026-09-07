# ArambhHai — Website

A mobile-first marketing website for ArambhHai, a web development studio,
built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (subtle section entrances only)
- React Hook Form + Zod (contact form)
- Resend (enquiry + confirmation emails)
- Lucide React (icons)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the three Resend/contact values
npm run dev
```

Visit http://localhost:3000.

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com), used to send emails from the contact form. |
| `RESEND_FROM_EMAIL` | Verified sender address in Resend, for example `ArambhHai <hello@yourdomain.com>`. |
| `CONTACT_EMAIL` | The inbox that should receive new project enquiries. |

Without these set, the site still builds and runs — the contact form will
return a friendly error when submitted until they're configured.

**Resend setup without a domain:** use `ArambhHai <onboarding@resend.dev>` as
`RESEND_FROM_EMAIL` for testing. Set `CONTACT_EMAIL` to the official ArambhHai
inbox. Resend's sandbox sender has recipient restrictions, so the customer
confirmation may only work for the email address verified in your Resend
account. A verified custom domain is required before sending to arbitrary
customer addresses in production.

Keep `RESEND_API_KEY` server-side in `.env.local` or your hosting provider's
environment settings; never expose it in client code.

Gmail addresses such as `arambhhaiofficial@gmail.com` can receive mail, but
cannot be used as the Resend sender unless Resend verifies that domain. The
sender must be an address such as `hello@arambhhai.com` after that domain's DNS
records are verified in Resend.

## Before you launch — placeholders to replace

- `lib/config.ts`: `email`, `phone`, `fiverrUrl`, `socialLinks`, and `url`
  (production domain, used for metadata + sitemap).
- `lib/data/projects.ts`: swap in real client work as it becomes available;
  everything currently shown is explicitly labeled as a concept project.
- `app/privacy/page.tsx` and `app/terms/page.tsx`: placeholder copy only.
- `.env.local`: real Resend credentials.

## Project structure

```
app/            routes, layouts, metadata, API route
components/
  brand/        ArambhLogo (ported from the original animated logo)
  layout/       Header, Footer, MobileDrawer, StickyMobileCTA
  home/         homepage sections
  contact/      ContactForm
  faq/          FaqAccordion
  ui/           Button, Container, SectionHeading, Badge, FadeIn
lib/
  config.ts     single source of truth for brand/contact/links
  validation.ts shared Zod schema for the contact form
  email.ts      Resend integration (server-only)
  data/         services, projects, process steps, audiences, FAQ content
```

## Deployment

Built for Vercel. Push to GitHub, import the repo in Vercel, and set the
three environment variables above in the project settings.

## Notes

- No database is used — the contact form is stateless and sends email via
  a serverless API route (`app/api/contact/route.ts`).
- The in-memory rate limiter in that route resets on redeploy; fine for a
  low-traffic marketing site, but swap in a durable store (e.g. Upstash
  Redis) if abuse becomes a real problem.
- The ArambhLogo component's tilt-on-hover effect only attaches on
  pointer-capable devices and is skipped under `prefers-reduced-motion`.
