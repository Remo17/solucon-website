# Solucon interface foundations — "Signal & Survey"

Tokens live in `src/index.css` (`:root`); shared components in `src/app/components.tsx`.
No external UI or animation library is used.

- **Concept:** an ink masthead on every page (survey chart at night), a paper editorial
  body, lime used sparingly as a highlighter "signal", violet as structural line work
  (contours, indices, focus rings). Survey contour lines come from the geomatics/mapping
  heritage of the work and are generated deterministically (`Contours`).
- **Colour:** `--ink`, `--paper`, `--white`, `--signal` (lime, always with ink text),
  `--violet` / `--violet-deep` / `--violet-text` (AA on paper). Never white on lime.
- **Type:** Bricolage Grotesque (display, tight negative tracking), Geist (body),
  Geist Mono (indices, kickers, metadata). Display sizes are fluid `clamp()` values;
  headings use `text-wrap: balance`.
- **Layout:** `.wrap` (max 1360px, fluid gutter), 12-column proportions (3/6/3 section
  heads, 7/5 splits). Breakpoints 1100 / 900 / 620, each with its own layout decisions.
- **Components:** `Kicker` (index + label), `PageHero`, `Split` (word mask),
  `ProjectCover` (illustrative artwork, always labelled as not a screenshot),
  `ContactBand` (lime close), `.button--signal|ink|outline`, `.link-underline`.
- **Motion:** declared via `data-reveal` = `words | clip | stagger | rows | rule | ''`,
  plus `data-scrub` for the scroll-read statement. Content is visible without JS; the
  `motion-ready` class only exists when motion is allowed. Reduced motion disables all.
- **Honesty:** case studies show idea / what exists / intent / status & evidence, and state
  "Outcomes not yet measured". Do not add clients, results or credentials without proof.
