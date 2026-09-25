# Muhammad Abdillah — Personal Website

Portfolio website rebuilt as a **Next.js 16 (App Router) + TypeScript** app. Ported
from the original single-file bundled HTML, with the same design, content, and
interactions.

## Features

- **Bilingual with SEO-friendly URLs** — each language has its own route
  (`/id`, `/en`), prerendered as static HTML. The language switch is a real link
  between locales, and `/` redirects to the default (`/id`).
- **SEO** — per-locale `<title>`/description, `hreflang` alternates + canonical,
  Open Graph / Twitter cards, `schema.org` Person JSON-LD, plus generated
  `sitemap.xml` and `robots.txt`.
- **Dark / light theme** — respects the OS preference on first visit, then persisted.
  Applied before first paint (no flash of the wrong theme).
- **Responsive** — fluid layout (`clamp()` sizing, flex/grid wrapping) from phone to desktop.
- **Lightweight & smooth** — statically prerendered, built with Turbopack.
  Scroll-reveal animations via `IntersectionObserver`, respecting `prefers-reduced-motion`.
- **Interactive sections** — filterable project cards, journey chapter tabs,
  certification filters, a live Jakarta (WIB) clock, a rotating "now" carousel,
  and a copy-to-clipboard email button.
- **All data is hardcoded** and typed in `src/lib/content.ts`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /id)
```

### Site URL for SEO

Canonical links, Open Graph, and the sitemap use a base URL. Set it for your
deployment (defaults to `https://abdillah.me`):

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Build

```bash
npm run build
npm run start
```

## Project structure

```
public/
  profile.jpg                 # profile photo
  CV-Muhammad-Abdillah.pdf     # downloadable CV
src/
  app/
    layout.tsx                 # root pass-through + default metadata
    page.tsx                   # redirects / -> /id
    providers.tsx              # client context wrapper
    globals.css                # theme variables + animation/hover helpers
    sitemap.ts                 # generated sitemap.xml (both locales)
    robots.ts                  # generated robots.txt
    [lang]/
      layout.tsx               # <html lang>, fonts, per-locale metadata + hreflang
      page.tsx                 # page assembly for a locale
  components/                  # Nav, Hero, About, Work, Journey, Toolkit, Contact,
                               # Footer, BottomNav, NavIcon, Reveal, PersonJsonLd
  lib/
    content.ts                 # all hardcoded, typed content (bilingual) + SEO config
    app-context.tsx            # URL-driven language + theme state
    hooks.ts                   # useReveal, useClock, useRotatingIndex, useActiveSection
```

## Editing content

Everything shown on the page comes from `src/lib/content.ts`. Each string is a
bilingual pair `{ id, en }`. To add a project, journey role, or certification,
append to the relevant exported array — types keep the shape consistent.
