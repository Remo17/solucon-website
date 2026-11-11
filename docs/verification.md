# Verification record

## Environment

Local supervised Vite preview at `http://localhost:3000`, Chromium
`/usr/bin/chromium`, Playwright and temporary axe-core 4.14.0 tooling outside the
repository. No new application dependency or development server was added.
The production Firebase deployment was inspected but not modified.

## Executed checks

| Check | Result / scope |
| --- | --- |
| `pnpm build` | Pass. Production Vite output generated |
| `pnpm exec tsc --noEmit` | Pass |
| `git diff --check` | Pass |
| Route rendering | `/`, `/services`, `/work`, `/about`, `/contact`, unknown route |
| Responsive matrix | All six page states at 320, 375, 430, 768, 1024, 1440 and 1600 px; no document horizontal overflow |
| Content / assets | One h1 per route, revealed content visible after scrolling, images loaded with nonzero natural dimensions |
| Mobile navigation | Collapsed menu inert; expanded state correct; Escape closes; Work navigation closes menu and focuses main |
| Keyboard bypass | First Tab reaches skip link; activation focuses main content |
| Enquiry | Empty form invalid; valid name/email/brief accepted; optional company not required; email-draft action produces explicit non-delivery status |
| Reduced motion | Homepage, Work, About and Contact inspected with preference set to reduce; visible h1 and no main transition animation |
| Observer fallback | Removing IntersectionObserver leaves Work cards unclipped and readable |
| Internal links | Internal anchor destinations on every page match registered routes |
| SEO | Titles contain Solucon; descriptions and canonical paths present; unknown route receives client-side noindex |
| Public repository links | All nine public GitHub destinations returned HTTP 200 at check time; four private entries have no public link |
| Visual review | Desktop (1440 px) and mobile (375 px) hero screenshots inspected in reduced-motion mode; full-page captures generated, but their attachment rendering was unavailable |
| Automated accessibility | axe WCAG 2 A/AA, 2.1 AA and 2.2 AA tags, all six page states at 375 and 1440 px; zero reported violations after fixes |

The final combined browser run passed **227 assertions with zero page errors**.

The automated accessibility scan still contains incomplete/manual-review items,
including contrast on layered/animated surfaces. Zero automated violations is
not WCAG conformance. No claim of comprehensive screen-reader testing is made.

## Failures reproduced and resolved

- Reveal observers skipped already-tagged elements on the second Strict Mode
  setup. Fixed self-matching selector logic with attribute-independent ancestry.
- Remote stock hero image failed in browser verification. Retained the same
  image as locally served, responsive JPEGs; subsequent image checks use these.
- Contrast failures on selected-work introduction, principle/value numbers,
  private repository badges, profile label and 404 label. Corrected using
  existing semantic colours and a darker violet text token.
- Removed unnecessary ARIA naming on split text, preserving native readable
  heading/paragraph content.

Test-harness issues were corrected separately: automated scrolling must be
instant rather than repeatedly interrupting CSS smooth scrolling; the menu
locator must not rely on an accessible name that changes after opening.
Neither harness failure was treated as a passing test.

## Build limitation

The final build reports a chunk-size warning: main JavaScript is approximately
528 kB minified / 157 kB gzip; CSS approximately 46.5 kB / 10.7 kB gzip. No warning
threshold was increased to hide this. Route/vendor code splitting and bundle
inspection remain sensible follow-up performance work.

## Not verified / concrete next validation

1. **Email delivery:** use iOS Mail, Android Gmail and desktop webmail with
   realistic punctuation/newlines in the brief. Confirm recipients and draft
   encoding, then manually send. The website itself cannot confirm delivery.
2. **Accessibility:** manually review axe incomplete items, tab all controls,
   test screen readers, 200–400% zoom/reflow, touch targets, and contrast at
   intermediate animation frames.
3. **Motion:** compare normal/reduced modes while scrolling every page on a
   physical mid-range Android device; test preference changes mid-session.
4. **Core Web Vitals:** run repeated mobile Lighthouse tests after deployment,
   then evaluate real-user Search Console/CrUX data. No LCP, INP or CLS result
   was measured or claimed in this pass.
5. **Production:** deploy with approved Firebase credentials, revisit each
   route directly and through navigation, and inspect final headers, cache,
   robots, sitemap and metadata. Test non-JavaScript social crawlers separately.
6. **Security/privacy:** no backend/hosting penetration test, dependency CVE
   audit or legal review was performed. Confirm POPIA handling for email and
   Google Fonts requests before making legal/privacy claims.
7. **Content:** owner approval remains required for all case-study attribution,
   private repository summaries, professional biography and leadership roles.
8. **Handover:** confirm access to the existing Markdown/PDF/ZIP documents
   separately; they are not public site downloads.
