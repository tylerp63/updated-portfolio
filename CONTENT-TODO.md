# Content TODO

Everything on the site that is placeholder, guessed, or needs your real data.
Nothing here is fabricated — unknowns are marked `[TODO: …]` in the rendered
pages so they're grep-able: `grep -rn "TODO" content/ public/resume.pdf`.

## Blocking before deploy

- [ ] **Dropit's live URL** — `dropit.io` does **not resolve** (verified: no A/AAAA
      records). The `Live ↗` link is removed for now rather than shipping a dead
      link, and the prose claim in [content/dropit.mdx](content/dropit.mdx) is
      marked `[TODO]`. Find the real production URL, then add it back to `links`
      in [content/projects.ts](content/projects.ts) and fix the mdx sentence.
      The project is titled just "Dropit" so the name survives whatever the
      domain turns out to be.
- [ ] **StudyMonkey's live URL** — never supplied; `links` is empty.
- [ ] **Domain** — `tylerpham.dev` is a guess. Update `metadataBase` in
      [app/layout.tsx](app/layout.tsx), [app/sitemap.ts](app/sitemap.ts),
      [app/robots.ts](app/robots.ts).
- [x] **GitHub / LinkedIn URLs** — real URLs supplied and reachable
      (`github.com/tylerp63` returns 200; LinkedIn's 999 is its standard
      anti-bot response to non-browser requests, not a broken link).
- [ ] **Resume** — `public/resume.pdf` is a generated draft placeholder.
      Replace with the real PDF.

## Verified during the review pass (no action needed)

These were checked and are fine — recorded so they don't get re-litigated:
contrast of every microcaps/metric-card combination against WCAG AA, heading
outline (h1 → h2 → h3), no horizontal overflow at 320/375/768/1024/1280px,
keyboard focus no longer triggers the cursor preview, and SVG covers are served
unoptimized by Next (the image optimizer is bypassed for SVG by design).

## Project deep-dives (`content/*.mdx`)

Each file reads well already but has `[TODO: …]` tokens for facts only you know:

- **dropit.mdx** — what Dropit actually does and for whom; how existing users
  were migrated (silent vs re-login); before/after latency in ms; access-token
  lifetime; the core user action for the demo; demo recording.
- **studymonkey.mdx** — what it does for students; user count; prompt-only vs
  retrieval choice + why; latency/cost budget; eval setup; model/provider;
  what Supabase handles; the hallucination mitigation chosen and its cost;
  demo recording.
- **vitaledge.mdx** — what the hardware is and what the app reads from it;
  protocol (BLE?); reconnect behavior specifics; test coverage numbers;
  demo recording.

## Hero metric cards ([content/site.ts](content/site.ts))

Real today: `-50% auth latency` (measured), `3 products in production`,
`1 iOS app on real hardware`, `100% shipped to prod` (tongue-in-cheek but true).
Candidates from the drafts once you have numbers: active users on Dropit,
students on StudyMonkey, p95 latency figures.

## Experience blurbs ([content/site.ts](content/site.ts))

- Handshake AI: verify wording of what the fellowship involved; add dates if
  you want them.
- Aggie Coding Club: role (member? officer?), what you built there.

## Covers (`public/work/*.svg`)

The three SVG covers are intentional placeholders in each project's accent
color. Swap for real product screenshots / demo stills when ready — same
filenames, or update `cover` in [content/projects.ts](content/projects.ts).

## Stack list ([content/site.ts](content/site.ts))

Languages/Frameworks/Tools were derived from the three projects' stacks —
prune or extend to match reality.
