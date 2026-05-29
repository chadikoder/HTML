<div align="center">

# HTML Tracker

**A clean, drawer-based study tracker for modern HTML5 — built as a teaching reference.**

[![Made by Chadi Khoder](https://img.shields.io/badge/made_by-Chadi_Khoder-f97316?style=for-the-badge)](https://github.com/chadikoder)
[![No build](https://img.shields.io/badge/no_build-static-f97316?style=for-the-badge)](https://github.com/chadikoder/HTML)
[![License](https://img.shields.io/badge/license-PolyForm_NC-f97316?style=for-the-badge)](#license)

[**Open the tracker →**](https://chadikoder.github.io/HTML/)

</div>

---

## What is this

A single-page study tracker for **HTML**, built as a teaching reference. Same UI/UX as my other trackers (PHP / HTML / CSS / JS / SQL), retuned per language with its own accent color. Zero build, zero dependency — open `index.html` and you are in.

```
7 days   · 7-day attack plan
75+      · exercises with full solutions
19       · W3Schools-style reference lessons
1        · clickable progress cube per lesson
∞        · re-readable until the exam
```

## Features

- **7-day plan** — one focused day at a time, exam-style
- **Real exercises** — every exercise has a worked solution you can reveal
- **Quizzes** — short MCQ per day to check what stuck
- **W3Schools references** — every lesson links to the matching W3 page
- **Drawer sidebar** — same on desktop and mobile, burger toggle, ESC closes
- **Click-to-complete** — the cube in the sidebar marks a lesson done
- **Per-day progress bar** — visual feedback as you advance
- **Dark / Light theme** — saved across sessions
- **Search** — `/` shortcut, fuzzy match across all lessons
- **Bookmarks** — pin tricky exercises to revisit
- **HTML-aware syntax highlighter** — tags, attributes, strings colored
- **Keyboard shortcuts** — `←` `→` navigate, `T` toggle course/exos, `Esc` close
- **localStorage persistence** — your progress survives reloads
- **Accessibility** — semantic HTML, focus rings, ARIA where needed
- **SEO meta** — Open Graph + Twitter Cards configured

## Curriculum

1. **Structure & balises** — doctype, head, body, attributes, entities
2. **Texte, liens, listes** — semantic formatting, anchors, ul/ol/dl
3. **Images, video, audio** — srcset, picture, video tracks, figure
4. **Tableaux & blocs** — table/thead/scope, colspan, div vs span
5. **Formulaires & validation** — all input types, datalist, fieldset, native validation
6. **Semantique & SEO** — header/nav/main/article, meta tags, Open Graph
7. **Accessibilite & projet final** — ARIA, focus, sr-only, WCAG, portfolio

Plus a separate **W3Schools reference section** (Basic / Intermediate / Advanced) with 19 reference lessons mirroring the official W3 organization.

## Quick start

```bash
git clone https://github.com/chadikoder/HTML.git
cd HTML
# Open index.html in any browser. That is it.
```

Or just visit **https://chadikoder.github.io/HTML/** (enable GitHub Pages in repo Settings → Pages → `main` branch first).

## Project structure

```
HTML/
├── index.html              ← redirect → web/study_tracker.html
├── README.md
├── web/
│   ├── study_tracker.html  ← page shell
│   ├── css/
│   │   └── style.css       ← design system, ~660 lines
│   ├── js/
│   │   ├── app.js          ← rendering + state + syntax highlight
│   │   └── data.js         ← curriculum (extend this to add lessons)
│   └── image/
│       └── logo.svg
└── .nojekyll
```

## Extending the curriculum

Edit `web/js/data.js`. Two arrays:

- `DAYS` — numbered 7-day plan lessons (with sections, quiz, exercises)
- `GIO` — W3Schools-style reference lessons (`level: basic / intermediate / advanced`)

After editing, bump the `?v=N` cache-bust in `web/study_tracker.html` so browsers fetch the new files.

## Tech stack

| | |
|---|---|
| Markup | HTML5 |
| Style | CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (no framework) |
| State | localStorage |
| Fonts | Inter + JetBrains Mono via Google Fonts |
| Build | None — open and run |

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `structuredClone`, container queries, `:focus-visible`, optional chaining — all standard in 2024+.

## Related trackers

By the same author, same design system:

- [chadikoder/PHP](https://github.com/chadikoder/PHP) — PHP + NFA042 exam prep
- [chadikoder/HTML](https://github.com/chadikoder/HTML) — HTML5
- [chadikoder/CSS](https://github.com/chadikoder/CSS) — CSS3
- [chadikoder/JS](https://github.com/chadikoder/JS) — Modern JavaScript
- [chadikoder/SQL](https://github.com/chadikoder/SQL) — SQL (MySQL / PostgreSQL)

## Author

**Chadi Khoder** — [@chadikoder](https://github.com/chadikoder)

## License

**PolyForm Noncommercial License 1.0.0** — Copyright © 2026 Chadi Ikhoder. All rights reserved.

You may read, study, and use this for personal, educational, and non-commercial purposes. You may **not** sell it or use it for any commercial purpose. See [`LICENSE`](./LICENSE) for the full text.
