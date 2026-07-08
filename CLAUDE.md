# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site (Damian Tabaka, Frontend Developer / React & E2E test automation) built with Vite + React 19 + TypeScript. It renders one scrolling page composed of six sections (`Home`, `About`, `Skills`, `Experience`, `Projects`, `Contact`) with anchor-based smooth-scroll navigation.

## Commands

```
npm run dev       # dev server on http://localhost:3000
npm run build     # tsc type-check, then production build to /dist
npm run preview   # preview the production build locally
npm run lint      # ESLint (flat config, eslint.config.js)
npm test          # vitest
```

There is no separate typecheck script — `npm run build` runs `tsc` (noEmit, via `tsconfig.json`) before `vite build`, so a type error fails the build. Run `npx tsc --noEmit` directly for a faster standalone type-check.

## Architecture

- **Composition root**: `src/main.tsx` mounts `<App />` via `createRoot` (React 18+ API). `src/App.tsx` simply stacks the six section components in scroll order — there is no router and no global state library.
- **Navigation**: in-page anchors via `react-scroll`'s `<Link>` (`to="home"|"about"|"skills"|"experience"|"projects"|"con"`, matching each section's `id`). `Nav.tsx` is the desktop header (shows/hides based on scroll position via a `window scroll` listener). `MobileButton.tsx` + `MobileNav.tsx` are the mobile equivalent — the open/closed flag is plain `useState` owned by `Home.tsx` and passed down as `onToggle`/`onClose` props (no Redux; it was removed as overkill for a single boolean).
- **Animation**: three libraries, each wired up per-component rather than centrally — `gsap` (with `ScrollTrigger`/`CSSRulePlugin`) drives scroll-triggered header/bar animations in `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`; `animejs` draws the SVG logo stroke on mount in `Logo.tsx`; `aos` (`data-aos-*` attributes) drives the About section and project cards. Each gsap-driven component re-registers `ScrollTrigger`/`CSSRulePlugin` at module scope — follow that pattern if adding another gsap-driven section. These effects read `ref.current.children`/`querySelector` results, so refs are typed `useRef<HTMLDivElement>(null)` with an early-return null guard (`if (!wrapper.current) return;`) at the top of each effect.
- **Styling**: one CSS file per component under `src/style/`, imported directly into the matching component in `src/components/` (no CSS modules, no Sass).
- **Contact form**: `Contact.tsx` posts directly to EmailJS via `@emailjs/browser` (`emailjs.sendForm` with hardcoded service/template/public-key IDs) — no backend in this repo.
- **Content as data**: `Skills.tsx`, `Experience.tsx`, and `Projects.tsx` render lists from local typed arrays (`skillTab`, `experienceTab`, `projectsTab`) — add new skills/roles/projects by extending those arrays, not by hand-writing markup.
- **Icons**: `react-icons` (mainly the `si` — Simple Icons — and `fa` sets). Not every tool has a matching brand icon in Simple Icons (e.g. no official Playwright icon exists there); `Skills.tsx` uses `FaTheaterMasks` as a visual stand-in for Playwright.

## TypeScript notes

- `tsconfig.json` is a single non-composite config (`strict: true`, `noUnusedLocals`, `noUnusedParameters`) covering `src/` and `vite.config.ts` — there's no separate node/app split.
- `src/vite-env.d.ts` (`/// <reference types="vite/client" />`) is required for image (`.png`/`.jpg`) and CSS imports to type-check.
- With the `react-jsx` automatic runtime, components don't need `import React from "react"` unless `React.*` is referenced directly (e.g. `React.StrictMode` in `main.tsx`).
