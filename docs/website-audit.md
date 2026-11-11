# Solucon website audit and implementation

## Scope and evidence

Inspected the live homepage, Services, Work, About, Contact and an unknown route at
https://solucon-website-prod.web.app/, and the equivalent local routes. Reviewed
all application components, data, motion code, CSS, dependencies, entry points,
brand assets, portrait, site configuration and Firebase hosting configuration.
The live deployment and local redesign are materially different; this work
updates the local redesign, not the deployed site.

The brand name displayed in both is **Solucon**. “Soluconza” is not silently
substituted without owner confirmation. Bokamoso Geomatics is a portfolio
project, not the identity of this agency site.

### Architecture and constraints

- React 19, Vite 8, React Router 7, Tailwind v4, custom CSS design tokens.
- Five content routes and a wildcard 404; shared Layout, PageHero, ContactBand,
  logo and arrow primitives. No third-party component system is installed.
- Dependency-free motion uses intersection observers, CSS and pointer listeners.
- Static Firebase Hosting targets `solucon-website-prod`, rewriting routes to
  `index.html`. There is no connected submission service, database or CRM.
- No new backend or analytics is warranted for this pass. Email composition
  stays frontend-only and explicitly requires the visitor to send the email.
- Handover documents remain untouched and outside the public directory.
  Their download access is not verified by this audit.

## Phase A — Existing strengths and weaknesses

### Preserve

- Distinctive signal-lime/violet, warm-paper and ink palette.
- Supplied wordmarks, clean editorial typography and generous grid.
- Simple service/work/about/contact journey and visible direct email address.
- Thirteen named repository entries, including honest public/private labels.
- Personal portrait and supplied LinkedIn URL.
- Existing Firebase SPA setup and lightweight runtime dependency list.

### Prioritised findings before implementation

| Priority | Issue / business impact | Effort | Dependency |
| --- | --- | --- | --- |
| P0 | Email form appeared to submit despite having only a mailto action; lost-enquiry risk | Small | None for honest email composition; provider required for delivery |
| P0 | Closed mobile links remained potentially focusable; no Escape handling or content bypass | Small | None |
| P0 | Large observed groups could fail their intersection threshold; animation CSS hid content without controller initialisation | Medium | Browser testing |
| P1 | Biography, founder title, skills, hackathon participation narrative and response-time promise were unverified | Small | Owner confirmation for reinstatement |
| P1 | Generic hero and no homepage portfolio evidence weakened understanding and evaluation | Medium | Existing project descriptions |
| P1 | “Measurable difference” and project “results” implied outcomes without evidence | Small | Owner-supplied case-study facts |
| P2 | Spotlight positioning displaced hero overlay; lime system label had white text; orbit logo lost centering | Small | None |
| P2 | Services described abstract capabilities rather than audience, scope and deliverables | Small | Existing capabilities only |
| P3 | Shared generic metadata, no sitemap and product-description copy in search snippet | Small | Confirm production domain before changing canonicals |
| P3 | Continuous portrait effects and long choreography, plus global eager route imports | Medium | Performance measurement and further bundle work |

### Content and asset trust

The live About page names Remoratile as **Co-Founder / Lead Software Engineer**
and Willie as **Founder / CEO**. This conflicts with the newer local
“Founder & Lead Engineer” label. This implementation removes the disputed label
rather than selecting a supposedly authoritative title. Confirm the complete
team, roles, biography and permission to publish them.

The live site confirms `tjiaremo@gmail.com` and the Modimolle street address.
Its phone string appears incomplete; it has not been added to the redesign.
No testimonials, customer logos, awards, success statistics or pricing added.

The existing Unsplash hero is stock photography, not evidence of a Solucon team
or office. It is retained as locally served 640/1200 px responsive copies, with
decorative alternative text, after a browser check encountered remote image
failure. Original source:
`https://images.unsplash.com/photo-1573164574511-73c773193279`.
The system visual is labelled as a concept, not a live integration. Supplied
logos and portrait remain local; no new stock or premium assets were introduced.
Image licensing provenance and portfolio attribution still need owner review.

## Phase B — Baseline scorecard

Scores are qualitative **estimates**, grounded in the inspected local source
and browser pages; they are not independent certification or measured outcomes.
The older live deployment is not awarded these local-design scores.

| Dimension | Before / 10 | Evidence / rationale |
| --- | --- | --- |
| Brand and strategic clarity | 6 | Recognisable palette; vague hero and abstract enterprise language |
| Visual design and art direction | 7 | Strong typography/grid; stock imagery and overlay positioning defect |
| UX and interaction | 5 | Clear routes; misleading mailto submission and hidden-menu focus risk |
| Technical execution | 6 | Lean architecture; fragile reveal thresholds and eager route bundle |
| Performance | Not assessable | No representative mobile CWV or field data; initial build warning |
| Accessibility | 5 | Native labels and focus styling; missing bypass, motion and contrast defects |
| Content and storytelling | 4 | Unverified biography and unsupported outcome wording |
| Commercial effectiveness | 5 | Direct email available; homepage lacks project evidence and concrete proposition |
| Portfolio credibility | 5 | Real named repositories; concept/client/completed status and roles need confirmation |
| Consistency and maintainability | 7 | Shared primitives/tokens; long CSS with overlapping motion declarations |

Do not assign a higher post-change score solely because code was generated.
Use the verification record and owner review instead.

## Phase C/D — Implemented decisions

1. **Honest enquiry flow:** native required-field/email validation, encoded email
   draft, explicit optional company field, autocomplete, bounded input lengths,
   sensitive-information warning and non-delivery status/fallback guidance.
   Nothing is stored, transmitted to a new service or marked “sent”.
2. **Accessible navigation:** content bypass, inert collapsed menu,
   `aria-controls`, Escape close/return focus, breakpoint close, and focus on
   route content after navigation. A focused header is never translated away.
3. **Clearer positioning and evidence:** concrete website/software headline,
   audience-led introduction, descriptive CTA and three existing project
   summaries linking to Work. Retained all thirteen directory entries.
4. **Commercial services copy:** existing service scope translated into audience,
   problem and deliverable language. No new advertised service categories.
5. **Credibility:** removed unsupported biography and skill assertions, founder
   title, reply-time promise and claimed portfolio outcomes. LinkedIn retained
   as the owner-supplied destination, not treated as verified research.
6. **Motion reliability:** fixed a reproduced Strict Mode reinitialisation bug
   where reveal selection matched its own old attributes and skipped observation.
   Threshold zero handles tall groups, default-visible
   fallback without controller, timer cleanup, dynamic reduced-motion response,
   finite portrait effects, capped parallax, centered orbit mark and correct
   absolute positioning of spotlight hero overlay. Existing distinct section
   choreography preserved rather than replaced with identical fades.
7. **Foundations and SEO:** improved selected contrast pairs, readable form
   sizing, wrapping repository paths, page-specific title/description/OG URL/
   canonical, client-side 404 noindex, crawlable sitemap and robots file.
   No unsupported structured data added.

### Original benchmark translation

Public homepages inspected during this run:

- https://www.akqa.com/ — opens with named work and specific project propositions,
  then agency positioning. Lesson: make work discoverable, not invent big-client proof.
- https://www.work.co/ — direct design/technology proposition, named recent
  products and visible outcomes/process index. Lesson: connect capability to
  concrete deliverables; Solucon cannot borrow their client results.
- https://www.instrument.com/ — succinct agency definition, work, service scope,
  visible skip navigation and distinct enquiry paths. Lesson: a short,
  accessible understanding → evidence → contact journey.

These observations informed information architecture and content standards,
not copied visual identities, layouts, animation signatures or stack assumptions.
This audit does not measure or certify those agencies’ accessibility/performance.

## Phase E — Verification

See `docs/verification.md` for actual checks and limitations. Production build
success alone is not proof of responsive behaviour, accessibility or CWV.

## Phase F — Remaining production gates

- Confirm team roles, project ownership, collaboration attribution, delivery
  status, screenshots and permission to name clients. Repository visibility
  does not establish authorship, production readiness or a client relationship.
- Supply verified case-study problem, actual role, delivery scope and outcomes.
  Do not publish statistics without their source.
- Approve supported service scope, support arrangements and response promises.
- If browser-based enquiry delivery is required, choose a provider, privacy/
  retention policy and server integration; email credentials must not enter
  frontend source. This pass intentionally does not introduce that dependency.
- Review POPIA/privacy obligations for email enquiries and external font
  requests. No new tracking or generic legal-policy claims have been added.
- Route metadata is client-rendered. For reliable non-JavaScript social crawlers,
  evaluate static prerendering; host rewrites also return HTTP 200 for unknown
  paths despite the visible 404. Configure true HTTP 404 responses if required.
- Confirm the final domain before deployment and update canonicals/sitemap
  together if it differs. Review Firebase headers/cache policy at deployment.
- Firebase authentication remains an external deployment gate; this run neither
  deploys nor changes credentials. Do not assume the live site has these fixes.
- Measure Lighthouse mobile at least three times per representative route and
  use Search Console/CrUX after launch. Target LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1;
  none is claimed achieved here.
- Perform manual screen-reader, zoom/reflow, physical touch-device and
  email-client tests before asserting WCAG 2.2 AA or end-to-end email delivery.
