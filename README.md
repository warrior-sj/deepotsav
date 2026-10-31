# DEEPOTSAV

Responsive frontend-only catalogue built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide React. No database, backend, login or payment gateway.

## Run locally

Requires Node.js 20 LTS or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite writes the production site to `dist/`.

## Deploy to Vercel

Import this GitHub repository into Vercel. Use:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

## Catalogue configuration

Edit `src/data/products.ts` to update product names, pack sizes and supplier rates. The storefront calculates a 30% markup rounded to the nearest ₹10, then applies a 10% offer. Verify every rate, pack size, variant and stock status before publishing.

WhatsApp destination is configured in `src/lib/whatsapp.ts`. Cart data is stored in the visitor's browser LocalStorage. Checkout sends an itemised enquiry; it does not process payments, verify stock or confirm orders.

The responsible retailer must verify applicable licences, permitted products, storage, advertising and sale restrictions before publishing or fulfilling enquiries.