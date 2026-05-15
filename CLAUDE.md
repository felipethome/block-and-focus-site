# CLAUDE.md

## Project

Landing page for the [Block & Focus](https://chrome.google.com/webstore/detail/block-focus/dcpbedhdekgkhigjgmlcbmcjoeaebbfm) Chrome extension, hosted on GitHub Pages.

## Stack

Plain HTML, CSS, and vanilla JS. No framework, no build step, no transpilation. The source files in `src/` are deployed as-is.

## Structure

```
src/
  index.html          # single-page site
  styles/main.css     # all styles
  scripts/main.js     # hero animation (~8 lines)
  img/                # extension screenshots and logo
  favicons/           # favicons for all platforms
```

## Commands

```bash
npm run dev      # serve src/ locally via npx serve
npm run deploy   # push src/ to the gh-pages branch (GitHub Pages)
```

`npm install` is required before deploying (`gh-pages` is the only dependency).

## Deploy

`npm run deploy` uses the `gh-pages` package to push `src/` directly to the `gh-pages` branch. All images and favicons are tracked in the `main` branch so a fresh clone can be deployed immediately without any extra steps.

## Design decisions

- **No framework**: deliberate choice for longevity — plain HTML won't go stale.
- **Single page**: all sections (hero, features, privacy, support) live in `index.html`. Navbar links use anchor IDs.
- **Hero animation**: the options screenshot slides up from below on load. Implemented with a CSS transition (`translateY(100%) → translateY(0)`) triggered by a JS image-load listener. The inner wrapper is `position: absolute; top: 0; bottom: 0; overflow: hidden` so the image is clipped to the hero section height, matching the original design.
- **Feature images**: no box-shadow or border-radius — the screenshots already have macOS window chrome as natural framing. Adding shadows caused a visible white-background artifact.
- **Alternating stripes**: white vs `#f0f0f0` sections.
- **Footer**: dark background matching the navbar, repeating the nav links.

## Copyright

All rights reserved. No open-source license — do not add one without the owner's consent.

## Git

- Default branch: `main`
- Commits are GPG-signed (`git commit -S`)
- Images and favicons (`src/img/`, `src/favicons/`) are tracked in `main`
- `.claude/` is gitignored — never commit it
