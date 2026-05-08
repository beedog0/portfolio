@AGENTS.md

# Portfolio — Bryan Nguyen

Personal portfolio site for internship applications. Single-page, smooth-scroll sections.

## Stack

- **Next.js 16.2.6** (App Router, Turbopack) — NOT Next 14. Read `node_modules/next/dist/docs/` for any API you're unsure about. The scaffold's AGENTS.md is not paranoia: real breaking changes from training data.
- **Tailwind v4** — config lives in CSS via `@import "tailwindcss"` in `src/app/globals.css`. No `tailwind.config.js`. Use arbitrary values (`bg-[#fafafa]`) — the design uses literal hex tokens.
- **Framer Motion** for entrance animations.
- **TypeScript**, `src/` directory, import alias `@/*`.
- Inter font via `next/font/google` (CSS variable `--font-inter`).

## Where to edit

- **`src/data/projects.ts`** — single source of truth for the `projects` array and `techStack` array. Add/remove/edit projects here; the bento grid renders from this list.
- **`src/components/`** — `Navbar`, `Hero`, `Projects`, `ProjectCard`, `TechStack`, `About`, `Contact`, `Footer`. One component per file. All section components are `"use client"` because of Framer Motion.
- **`src/app/page.tsx`** — composes the sections in order. Don't reorder casually; the section IDs (`#top`, `#projects`, `#about`, `#contact`) are linked from the navbar.
- **`src/app/layout.tsx`** — metadata, OG tags, Inter font.

## Design tokens (literal hex, used as Tailwind arbitrary values)

| Purpose | Value |
|---|---|
| Page background | `#fafafa` |
| Card background | `#ffffff` |
| Card border | `#e5e5e5` |
| Text primary | `#171717` |
| Text secondary | `#525252` |
| Text muted / placeholder | `#a3a3a3` |
| Section label muted | `#737373` |
| Pill background | `#f5f5f5` |
| CTA solid bg / on-dark text | `#171717` / `#fafafa` |
| Card radius | `10px` |
| Pill / button radius | `6px` |

The site is **light only** — no dark mode. If a future change adds `dark:` classes, that's a regression.

## Conventions

- **Section labels** ("Featured projects", "Stack", "About", "Contact") use `text-[11px] font-medium uppercase tracking-[0.28em] text-[#737373]`. Match this if adding new sections.
- **Entrance animations:** hero uses `initial`/`animate` (fires on mount). Everything else uses `whileInView` with `viewport={{ once: true }}` and a small `margin: "-60px"` so cards animate slightly before they enter the viewport. Stick to this pattern.
- **Bento grid** is `md:grid-cols-6`. Featured card spans 4, the rest span 2 each. The "More coming soon" placeholder is a separate dashed-border `motion.div`, not a project entry.
- Cards are `<motion.a>` with `href: "#"` placeholders — replace with real URLs in `projects.ts` as projects ship.

## Assets the user will drop in

- `public/resume.pdf` — the Resume button targets this. Currently 404s.
- `public/og.png` — referenced by metadata as the OG/Twitter card image (1200×630).

## Commands

- `npm run dev` — local dev (Turbopack)
- `npm run build` — production build (currently passes clean, fully static-prerendered)
- `npm run lint`

## Workspace quirk

`/Users/bryannguyen/package-lock.json` exists in the home directory and confuses Next's workspace root detection. `next.config.ts` pins `turbopack.root` to `__dirname` to silence the warning. Don't remove that pin unless the stray lockfile is gone.
