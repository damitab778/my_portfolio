# Damian Tabaka — Portfolio

Personal portfolio site for Damian Tabaka, Frontend Developer specializing in React and E2E test automation. A single-page site with smooth-scroll navigation between Home, About, Skills, Experience and Projects sections.

## Tech stack

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vitejs.dev/) for dev server and build
- [GSAP](https://gsap.com/) (ScrollTrigger) and [AOS](https://michalsnik.github.io/aos/) for scroll animations, [anime.js](https://animejs.com/) for the logo stroke animation
- [react-scroll](https://www.npmjs.com/package/react-scroll) for in-page anchor navigation
- ESLint (flat config) + [Vitest](https://vitest.dev/) for linting and testing

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:3000)
```

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                    |
| `npm run build`   | Type-check (`tsc`) then build for production |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint over the project                  |
| `npm test`        | Run tests with Vitest                        |

## Project structure

```
src/
  components/   # one component per section/UI piece, paired with src/style/*.css
  img/          # static images imported directly into components
```

The mobile nav's open/closed state lives as local React state in `Home.tsx` (no global state library).

Content for the Skills, Experience, and Projects sections lives in local arrays inside the corresponding component (`Skills.tsx`, `Experience.tsx`, `Projects.tsx`) — update those arrays to add/remove entries.
