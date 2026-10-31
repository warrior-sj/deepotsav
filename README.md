# DEEPOTSAV

Responsive frontend-only fireworks catalogue built with React, Vite and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy

Import this repository into Vercel with build command `npm run build` and output directory `dist`.

## Catalogue configuration

Edit `src/data/products.ts` to update product names, pack sizes and supplier rates. The storefront calculates a 30% markup rounded to the nearest ₹10, then applies a 10% offer. Verify all prices, pack sizes, variants, stock and applicable legal requirements before publishing.

WhatsApp destination is configured in `src/lib/whatsapp.ts`. The cart is stored in browser LocalStorage; checkout sends an itemised enquiry and does not process payments or confirm stock.

**Project source files are still to be added to this repository.**