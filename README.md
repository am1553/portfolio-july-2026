# aryanmehta.dev — portfolio 2026

Personal portfolio, rebuilt in **Next.js 15 (App Router) + TypeScript + CSS Modules**, statically exported. Two routes: `/` and `/blog`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

`next.config.ts` sets `output: "export"`, so `out/` is plain static files — deploy to Vercel, Netlify, or GitHub Pages with no server. (GitHub Pages under a repo subpath: add `basePath: "/<repo-name>"`.)

## Structure

```
app/
  layout.tsx        # metadata, fonts, global CSS
  page.tsx          # home — section composition
  blog/page.tsx     # blog (coming soon)
  globals.css       # design tokens + base styles
components/         # one component + one CSS module per section
lib/data.ts         # ALL content — copy, links, projects, experience
public/images/      # screenshots and photos
```

Content and presentation are separated: updating the CV means editing `lib/data.ts` only.

## Design system

- **Palette** — porcelain `#EEF1F5`, ink navy `#0E1726`, cobalt `#2242E8` (primary accent), signal green `#0DA678` (ok/live), amber `#C47F17` (warn), violet `#7048E8` (trace).
- **Type** — Archivo (variable, expanded) for display · Instrument Sans for body · IBM Plex Mono as the working annotation layer (years, stack tags, statuses).
- **Signatures** — the hero grid is live circuitry: colour-coded signal beams travel the wires, and the stack renders as a request path (`client → api → db`) with a request/response pulse. Every project card carries a layer map showing which layers were built.
- Reduced motion respected globally; keyboard focus visible everywhere; skip link included.

## Tuning the beams

In `components/Hero.module.css`: each beam's colour is one `--beam-c` line on its positional class; speeds/positions live there too. If it ever feels busy, delete `.beamV3` and `.beamH2` first.
# portfolio-july-2026
