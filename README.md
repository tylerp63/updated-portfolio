# tylerpham — portfolio

Personal portfolio for Tyler Pham. Next.js App Router + TypeScript + Tailwind v4,
Framer Motion for the signature interactions, MDX for project deep-dives,
Lenis for smooth scroll. The site is itself a work sample: same stack as Dropit.

## Design system

- Canvas `#F4F1EA`, ink `#1C1C1A`, muted `#C7C3BA` (inactive list state)
- Two type registers only: Anton display (clamp-scaled, 0.85 leading) and
  11px Inter micro-caps (0.14em tracking). Nothing between those sizes on the
  landing page — the scale gap is the aesthetic. Color comes only from project
  covers and the hero metric cards.

## Structure

- `app/page.tsx` — hero (draggable metric cards), selected work (hover list
  with cursor-following image reveal), experience, stack, contact
- `app/work/[slug]/page.tsx` — MDX deep-dives from `content/*.mdx`
  (problem / approach / architecture / key tradeoff / demo)
- `content/site.ts`, `content/projects.ts` — all copy and project metadata
- `CONTENT-TODO.md` — every placeholder that needs real data before deploy

## Run

```bash
npm run dev
```

## Deploy

Vercel + custom domain. Update `metadataBase` in `app/layout.tsx` and the URLs
in `app/sitemap.ts` / `app/robots.ts` first. See `CONTENT-TODO.md`.
