# Somna — landing page

A dusk-to-dawn landing page concept for **Somna Halo**, a contactless bedside
sleep companion. The whole page is one night: the sky starts at sunset, deepens
into a starfield with a rising moon, and ends at sunrise behind the closing
call-to-action — all driven by scroll position on a single canvas.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 ·
shadcn/ui · Motion · Lenis**.

A portfolio concept designed & built by **[Danish Suri](https://github.com/danish93develop/)** (Dandev).
[LinkedIn](https://www.linkedin.com/in/danish-suri-63bab5b4/) ·
[Upwork](https://www.upwork.com/freelancers/~01a9c332ce05d023bc?mp_source=share) ·
[Contra](https://contra.com/danish_suri?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=danish_suri) ·
[Instagram](https://www.instagram.com/builtbydandev/)

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build (type-checked, / prerenders to static)
npm run start   # serve the production build
```

## Deploy

The page prerenders to static content, so it deploys anywhere. Easiest: push to
GitHub and import into **Vercel** — zero config, it auto-detects Next.js.

---

## The night, explained

The signature mechanic lives in `components/SkyScape.tsx` — a fixed
full-viewport canvas behind the content:

- The sky gradient interpolates through six palette keyframes
  (dusk → nightfall → deep night → pre-dawn → sunrise) from smoothed scroll
  progress.
- The sun sinks below the horizon at the top of the page and rises again at
  the bottom; a crescent moon arcs across the sky in between.
- ~220 stars twinkle in and out with the "night amount", and shooting stars
  streak by occasionally in deep night.
- `components/ScrollClock.tsx` renders a bedside-clock chip that advances
  from 21:00 to 07:00 with scroll, labelled with the current phase.

Section copy follows the same arc — "As the sky darkens", "Written in the
stars", "The pre-dawn hours", "Almost morning" — so the story reads top to
bottom as a single slept-through night.

## How it's structured

```
app/
  layout.tsx        Root layout, fonts (Fraunces + Geist), metadata
  page.tsx          Composes every section in order
  globals.css       Tailwind v4 theme tokens, glass/grain/display utilities
components/
  SkyScape.tsx        Scroll-driven canvas sky (sun, moon, stars, meteors)  (client)
  SmoothScroll.tsx    Lenis smooth-scroll provider                          (client)
  ScrollClock.tsx     21:00 → 07:00 clock chip tied to scroll               (client)
  Navbar.tsx          Floating glass nav                                    (client)
  Footer.tsx          Links + freelance card
  icons.tsx           Brand/social SVG glyphs
  sections/
    Hero.tsx          Headline, Halo device render, floating stat chips
    NightIntro.tsx    "Your night has a rhythm" + sensing stats
    Features.tsx      Six feature cards, each with its own constellation
    Hypnogram.tsx     Animated SVG sleep-stage graph of one night
    HowItWorks.tsx    Three-step setup story
    Testimonials.tsx  Quotes from well-rested sleepers
    Pricing.tsx       App / Halo / Somna+ tiers
    Faq.tsx           "Questions people ask at 2 AM" accordion
    DawnCta.tsx       Sunrise closing call-to-action
  ui/               shadcn/ui primitives (button, badge, accordion)
```

The hypnogram, constellations and device render are hand-rolled SVG/CSS — no
charting or 3D dependency.

## Customizing

- **Palette:** the sky's color keyframes sit at the top of
  `components/SkyScape.tsx` (`KEYS`); UI tokens live in `app/globals.css`.
- **Copy & data:** each section's content sits at the top of its component
  (e.g. `features` in `Features.tsx`, `plans` in `Pricing.tsx`, the night's
  sleep stages in `Hypnogram.tsx`).
- **Pace of the night:** the scroll-to-time mapping is `NIGHT_MINUTES` in
  `components/ScrollClock.tsx`; the phase boundaries live next to it.

## Notes

- The canvas draws only via `requestAnimationFrame`, so it pauses automatically
  in background tabs.
- Scroll progress is smoothed (lerp) before it drives the palette, so fast
  scrolling never causes color banding or jumps.
