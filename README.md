This is the **L Plus P Driving School** website — Next.js 16 App Router, TypeScript, Tailwind CSS v4.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stripe Setup

To enable online payments:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable key and secret key from the Stripe dashboard
3. Add to `.env.local`:
   ```
   STRIPE_PUBLIC_KEY=your_publishable_key
   STRIPE_SECRET_KEY=your_secret_key
   ```
4. Run: `npm install stripe @stripe/stripe-js`
5. The payment integration point is in `app/book/page.tsx` — replace the form submit handler with a Stripe checkout session

Example checkout session (add to an API route `app/api/checkout/route.ts`):
```ts
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { packageId } = await req.json();
  const prices = { single: 6000, five: 27500, ten: 50000 }; // cents
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price_data: { currency: 'aud', unit_amount: prices[packageId as keyof typeof prices], product_data: { name: 'L Plus P Driving Lesson' } }, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/book?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/book`,
  });
  return Response.json({ url: session.url });
}
```

## Deploying

Push to GitHub then import to [Vercel](https://vercel.com). Vercel auto-detects Next.js.

Add environment variables in Vercel dashboard under Project → Settings → Environment Variables.

## Adding Real Photos

Replace Unsplash URLs in `components/ImageSlideshow.tsx` with real photos. Store photos in `public/` and use `/photo.jpg` paths. Update `next.config.ts` to remove the Unsplash remote pattern if no longer needed.

## Project Structure

```
app/
  layout.tsx          — Navbar, Footer, WhatsApp button on every page
  page.tsx            — Homepage with slideshow, 7 services, pricing, reviews
  book/page.tsx       — 5-step booking quiz
  about/page.tsx      — About, timeline, instructor profiles
  services/page.tsx   — 7 service sections
  faq/page.tsx        — 15 FAQ accordion
  contact/page.tsx    — Contact form + Google Maps
  driving-lessons/[suburb]/page.tsx — 24 suburb pages (pre-rendered)
components/
  Navbar.tsx          — Sticky nav with hamburger mobile menu
  Footer.tsx          — 3-col footer
  WhatsAppButton.tsx  — Fixed WhatsApp button
  Sidebar.tsx         — Sticky booking sidebar (inner pages, xl+ screens)
  ImageSlideshow.tsx  — Auto-rotating hero slideshow
  Services.tsx        — 7 service cards
  Pricing.tsx         — 3-tier pricing
  Reviews.tsx, About.tsx, FAQ.tsx, CTABanner.tsx, TrustStrip.tsx
lib/
  suburbs.ts          — 24 suburb data with slugs and test centres
```
