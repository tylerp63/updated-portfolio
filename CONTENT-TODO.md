# Content TODO

Everything on the site that is placeholder, guessed, or needs your real data.
Nothing here is fabricated.

Unknowns render on the page as **TK markers** — a small highlighted chip
carrying a note about what belongs there ("TK" is the newsroom convention for
"to come"). They're deliberately visible: the alternative is inventing a
plausible number, and a fabricated metric in a portfolio costs far more than
an honest gap. Missing demo videos render as a dashed 16:9 "Demo recording /
To come" box.

To find them all: `grep -rn "<Todo" content/`. To fill one in, delete the
`<Todo>…</Todo>` wrapper and write the real sentence in its place. The
components live in [components/Todo.tsx](components/Todo.tsx); once the last
marker is gone you can delete that file and its two entries in
[mdx-components.tsx](mdx-components.tsx).

## Blocking before deploy

- [x] **Dropit's live URL** — `https://drop-it-lake.vercel.app/` (verified: 200).
      Wired into `links` in [content/projects.ts](content/projects.ts) and into
      the prose in [content/dropit.mdx](content/dropit.mdx). The earlier
      `dropit.io` guess did not resolve and is gone. The project stays titled
      just "Dropit" so the name survives a future custom domain.
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

Each file carries TK markers for the facts only you know. Marker counts are
higher than they were in the first draft — see the de-fabrication note below.

- **dropit.mdx** (9 + demo) — why NextAuth was slow (JWT or database sessions);
  how existing users were transitioned; how the 50% was measured and the
  before/after ms; token lifetime and refresh rotation; what reads and writes
  Postgres; where session verification runs; where authorization is enforced;
  how products enter the tracked set and what the comparison view shows.
- **studymonkey.mdx** (10 + demo) — user count; how document text reaches the
  model and why; whether there's a cost/latency target and what you traded;
  whether an eval setup exists and what it caught; model and provider; what
  Supabase handles and which side talks to it; how the two halves communicate;
  where you landed on hallucination safety; upload vs paste; failure UI.
- **vitaledge.mdx** (7 + demo) — which vitals Presage returns and which you
  use; what the app does about capture conditions; how readiness is computed;
  how you test it; the layers between SDK and views; the in-product
  limitation; whether a degraded capture can be demoed.

> **All three deep-dives were de-fabricated on 2026-08-05.** A review found
> that the drafts asserted engineering Tyler never supplied — Dropit's prose
> invented a root cause for the NextAuth slowness ("database sessions", a
> per-request Postgres round trip), an entire measurement methodology behind
> the real 50% figure, and an RLS-based authorization design; StudyMonkey
> claimed an eval harness existed *and reported a result it produced*;
> VitalEdge invented a capture-coaching screen, a confidence system, CI test
> fixtures, and a core value type, half of it drawn into the architecture
> diagram. The failure pattern was "I did X and here's what it achieved" with
> a marker deferring only X's parameters — which reads as confirmed. Those
> claims are now inside markers or cut, and the two architecture diagrams use
> undirected edges where the topology is unverified. If you re-draft any of
> this, the rule is: a sentence outside a marker must be a fact you supplied,
> generic vendor behavior, or reasoning that asserts no implementation detail.
>
> **vitaledge.mdx was also rewritten on 2026-08-05.** The first draft assumed an
> external device over BLE (pairing, reconnect state machines, CoreBluetooth).
> VitalEdge actually measures vitals from a camera recording via the Presage
> SDK — there is no external hardware — so that entire narrative was wrong and
> has been replaced. The `iOS · Hardware` tag, the project one-liner, the hero
> metric card, and the site meta description were corrected to match.

## Hero metric cards ([content/site.ts](content/site.ts))

Real today: `-50% auth latency` (measured), `3 products in production`,
`1 iOS app reading vitals from video`, `100% shipped to prod` (tongue-in-cheek
but true).
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
