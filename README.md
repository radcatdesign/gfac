# Get Fit Athletic Club

Redesign of [getfitathleticclub.com](https://getfitathleticclub.com/). One conversion-focused home page built on BYQ Supply's Fit Trainer sections, recoloured to the club's blue, green and navy.

- Next.js 16 (App Router, static export) and Tailwind CSS v4
- GSAP ScrollTrigger and SplitText for motion, Lenis for smooth scroll
- Styled scrollbars, scroll progress bar, reduced-motion support
- Dark and light mode. Dark is the default; the toggle in the header remembers the visitor's choice. Light values are the `html[data-theme='light']` block in `app/globals.css`

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

Deploys as-is on Vercel, Netlify or any static host.

Every push to `main` also builds a preview to GitHub Pages (`.github/workflows/pages.yml`). It needs Settings, Pages, Source set to **GitHub Actions**. The preview is marked noindex.

## Where things live

| What | Where |
| --- | --- |
| Every fact, price, link and line of list copy | `lib/site.ts` |
| Brand colours, fonts, scrollbar | `app/globals.css` |
| Smooth scroll and scroll reveals | `components/Motion.tsx` |
| Page sections, in order | `app/page.tsx`, `components/sections/` |

## Before launch

1. **Trial form.** Set `NEXT_PUBLIC_TRIAL_FORM_ENDPOINT` to a form handler that accepts a JSON POST (CRM webhook, Formspree, etc.). Until then, submitting sends the visitor to the existing trial pass page.
2. **Photos.** Images load from the current WordPress media library. Copy them into `public/` and update `lib/site.ts` before the old site is retired.
3. **Join links.** Pricing buttons point at the existing `/join-now/` checkout. Keep that path alive on the domain, or update `links` in `lib/site.ts`.
4. **Logo.** The header uses a type wordmark because the current logo is dark blue and built for a white background. Drop in a reversed logo when there is one.
5. **Hours.** The current site lists no opening hours, so none are shown.
