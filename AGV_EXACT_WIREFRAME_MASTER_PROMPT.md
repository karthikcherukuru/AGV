# AGV — PHASE 01: EXACT REFERENCE WIREFRAME RECONSTRUCTION
## Codex implementation brief | Mobile + Desktop | Build + Browser Validation

> **THIS IS A RECONSTRUCTION TASK, NOT AN OPEN-ENDED WEBSITE DESIGN TASK.**
> You must reconstruct the visual **geometry and reading order** of the attached ONDERA references as faithfully as reasonably possible while replacing ONDERA/lamp references with **AGV/motorcycle-helmet placeholders**. The six structural/reference screenshots and overview image supplied in `references/` are the visual source of truth. Do not invent a new AGV landing page. Do not reinterpret this as a generic racing/sports homepage.

---

## 0. MANDATORY PRE-FLIGHT — READ IMAGES BEFORE CODING

Read this file entirely. Then OPEN and INSPECT all seven images in `references/`, not just their filenames. Record in your internal implementation notes what each image controls:

| Source file | Role | How to use |
| --- | --- | --- |
| `01_web_mobile_overview.jpeg` | Grayscale web/mobile master schematic | Highest-priority spatial guide for the **top desktop composition** and overall proportional relationships. The left = web, right = mobile. |
| `02_mobile_top_coloured.jpeg` | Mobile screen 1 | **Primary source for mobile header, giant wordmark, notched hero with inset, About, macro gallery, and start of Features**. |
| `03_mobile_middle_coloured.jpeg` | Mobile screen 2 | **Primary source for Features heading, tall lifestyle photo, olive horizontal product card, black product spotlight, and FAQ introduction**. |
| `04_mobile_bottom_coloured.jpeg` | Mobile screen 3 | **Primary source for FAQ image, active index `/03`, question rows, full-width dark footer and giant wordmark**. |
| `05_mobile_wireframe_upper.jpeg` | Mobile grayscale schematic, upper | Validates blocks, layout stack, gallery, card heights, and spotlight proportions. |
| `06_mobile_wireframe_lower.jpeg` | Mobile grayscale schematic, lower | Validates FAQ arrangement, accordion density, footer architecture and continued spotlight. |
| `07_desktop_lower_coloured.jpeg` | Desktop composition, lower page | **Primary source for desktop paired-feature cards, black panorama spotlight, two-column FAQ and dark giant-wordmark footer**. It also includes a small mobile screenshot on its right; that is explanatory context, not an extra page section. |

**Source priority:** when the wireframe schematic and coloured design image appear to differ, prioritise **coloured reference for actual component arrangement** and use grayscale schematic for structural proportions. On desktop, use `01` for upper layout and `07` for lower layout. There is no complete coloured desktop top screenshot; faithfully translate the desktop schematic rather than inventing unsupported details.

**Important distinction:** `01_web_mobile_overview.jpeg` and `07_desktop_lower_coloured.jpeg` are composite images showing multiple screen designs; they are not page backgrounds to be copied into the site.

**Stop inventing.** The intent is visual fidelity. Section count, component count, hierarchy, alignment, overlaps, notch geometry, card ratios, spacing and CTA arrangement are more important than creative flourishes.

---

## 1. EXACT OBJECTIVE AND BOUNDARIES

Build one complete, usable, locally running Next.js page mirroring the attached ONDERA reference layout, but for an **unofficial AGV motorcycle-helmet website concept** with **Option C: Futuristic / Neo-Racing** as later art direction.

### Keep EXACTLY from references
- 7 main content zones in their original order, as enumerated below; don't add or rearrange sections.
- Deliberate white/light editorial canvas over most of the page, NOT a dark immersive site from top to bottom.
- Large top wordmark, tiny header, large media areas, rounded corners, inset/overlap cards and circular arrow affordances.
- Specific mobile order and layout detailed below.
- The actual asymmetrical desktop positioning of major cards.
- Compact FAQ with numbered active question (`/03`) and five horizontally separated question rows.
- Dark footer with very large, intentionally edge-to-edge wordmark.

### Adapt only the content/product identity
- ONDERA -> AGV (temporary text treatment, not a fabricated replacement of official logo artwork).
- Lamp -> HELMET (label every media placeholder by its future helmet image role).
- Editorial headlines can be adapted to helmet/racing language **without changing line count, hierarchy, placement or text block dimensions**.
- Primary product placeholder: `AGV PISTA GP RR` (temporary product label only). Other potential models need not be introduced.
- Future dark product styling can later involve carbon, graphite, titanium, red and ice-blue, but **Phase 01 is a fidelity-first wireframe**, not that art-direction implementation.

### DO NOT do in Phase 01
- No real product image sourcing, AI image generation, custom logo development, videos, 3D files, WebGL, complex GSAP scrubbing, giant parallax sections, sticky multi-screen pinning, particles or animated light beams.
- No extra shop grid, product configurator, testimonial, newsletter, marquee, spec table, related-product carousel, social ticker, oversized decorative counter, brand-history timeline or floating shopping-cart button.
- No random futuristic dashboard styling, glowing borders or large neon gradients.
- No placeholder skeleton shimmer/loaders. Gray shapes should be **purposeful permanent wireframe stand-ins**, not a loading screen.
- No custom checkout, database, authentication, or payment integration.
- Do not clone ONDERA visual assets or present this as an official AGV website.

### Definition of success
A human looking at your 390px mobile screenshot beside the references should recognise **the same design, in the same reading order**, not merely the same list of sections. The same applies to the desktop design when compared to the desktop overview and coloured lower-section reference.

---

## 2. REPO INSPECTION AND TECHNOLOGY

1. Inspect the current working directory and git status. Identify existing Next.js scaffold, package manager, styling setup, tests and assets.
2. Preserve existing user code and configuration unless the replacement is required and clearly identified. Do not erase unrelated work or overwrite references.
3. If empty, initialise **Next.js App Router + TypeScript + Tailwind CSS**.
4. Use React, CSS variables, native CSS grid/flex, Tailwind utilities if available, `lucide-react` for simple functional icons.
5. Restrict client components to interaction-bearing components (menu, thumbnail selection, FAQ, optionally back-to-top). Prefer server components for structural sections.
6. Keep site content in a simple typed data module, and all dimensions and colours centrally editable.
7. Prioritise no console errors, no hydration mismatch, no missing assets, and semantic accessible HTML.
8. Do not ask for more designs unless critical files truly cannot be read. Implement the best supported faithful reconstruction.

---

## 3. REFERENCE-FAITHFUL VISUAL GRAMMAR

### General layout
- Main background: near-white `#FAFAF8` or neutral warm white; text: nearly black `#111111`. Contrast is intentionally editorial and simple.
- Structural media placeholders: charcoal `#202020` with very small, subdued, readable labels, not giant placeholder captions.
- Support placeholders: gray `#DADADA`; dark panels `#111111`.
- Optional single tiny accent: muted dark olive/titanium or AGV red **only for CTA emphasis**. Keep neutral when it would distort the reference skeleton.
- Use asymmetry, intentional negative space, small eyebrow labels, oversized *condensed editorial* headings. No glass-heavy panels.
- Rounded image cards: approximately 12–24px radius based on viewport and element. Avoid uniform giant radii everywhere.
- Pills: full-rounded; circular arrow buttons exactly circular.
- Preserve border/foreground overlap and the bottom-right rounded shape in the spotlight.
- No unnecessary stroke decorations, separating horizontal rules outside those visibly in FAQ/footer.

### Typography
- Brand wordmark on mobile is extremely large relative to screen width, spanning almost the entire viewport (the original ONDERA wordmark dominates the first fold). For `AGV`, use a temporary **wide-scale typographic treatment that occupies comparable vertical/visual space**, not a tiny 3-letter label. A wordmark wrapper can contain letterspaced `AGV` spanning width, without misrepresenting the official logo.
- Headings: compact uppercase, heavy/semibold, tight line spacing. They should break across approximately two lines like the reference.
- Descriptions: small but legible, comfortably spaced; avoid filling placeholders with fake lorem ipsum.
- Uppercase eyebrows: discreet dot + category text.
- Keep buttons compact, rounded, with smaller text than headings.
- Only use system fonts or an installed easily available font; no need for paid fonts.

### Mobile container
- Treat coloured screenshots as an approx 375–390 CSS px mobile canvas.
- Mobile main content gutter: ~14–18 CSS px equivalent (responsive); page should not have massive 30–40px gutters.
- All media near full content width. No accidental extra insets.
- Desktop content max-width ~1440–1520px, with carefully sized horizontal margins.
- Respect natural flow: section heights should be controlled by reference proportions; do not force every section to min-height:100vh.
- `box-sizing:border-box`, `min-width:0` on grids, no horizontal overflow.

---

## 4. MOBILE RECONSTRUCTION — EXACT TOP-TO-BOTTOM ORDER

This order is **locked**. It follows `02_mobile_top_coloured.jpeg`, then `03_mobile_middle_coloured.jpeg`, then `04_mobile_bottom_coloured.jpeg`. Use `05` and `06` to verify structural rhythm.

### 4.1 HEADER / BRAND (reference 02)

**Visual anatomy**:
- A small icon/brand emblem at the **top-left**; a thin 2-line hamburger aligned at the **top-right**.
- Immediately below is a **massive AGV wordmark** taking nearly the full content width. It should occupy a separate visual row, exactly like `ONDERA` in screenshot.
- Header is deliberately compact, with no visible desktop-style list of text links across mobile.
- Do not put a standard fixed navbar with a background rectangle on top of the hero. Do not place the wordmark inside the large hero card.

**Interactivity**:
- Hamburger triggers full-viewport navigation, controlled by accessible button with `aria-expanded`, focus trap/restoration, Esc to close, body scroll lock and navigation links.
- Overlay should be visually secondary to the main page when closed and must not add a permanent element to the screenshot.
- Menu appearance: subtle frosted/blurred continuation of page, not a wholly different visually dominant layout.

### 4.2 HERO PRODUCT CARD (reference 02)

**Critical shape (do not miss):**
- Immediately below wordmark, one **very large, tall, rounded dark media card**, roughly full content width, dominating first view.
- Its content is a single clear `HERO — HELMET 3/4 VIEW` placeholder. Do not create a generic black rectangle without its details.
- Near the card's top-right edge, a **black circular arrow/action** sits inside an *inward rounded/notched junction* with the card geometry; it looks integrated into the image silhouette rather than a detached floating button.
- A **smaller portrait inset card** overlaps the lower-left of the main card. It has a bright/white framing edge, rounded top corners and a dark close-up placeholder inside; its lower edge is close to the main card's bottom edge.
- Main hero has a sense of one large surface with two deliberate cut-ins. Preserve the inset scale (about one-third the big card's width) and its bottom-left attachment.
- No large headline/paragraph over the hero. The wordmark is above; the product media carries the visual weight.
- No full-screen horizontal slider, no bullets, no new price or add-to-cart callout in this section.

**Implementation**:
Use a hero shell with `position:relative`, main media fill, an inset overlapping layer, and a genuinely shaped notch/corner geometry via pseudo-elements or border radius/clip-path where supported. The circle and inset must stay attached proportionally at 375px, 390px and 430px. Use simple fallback border shapes if clip-path is inconsistent.

### 4.3 ABOUT / BRAND STORY (reference 02)

Appears after modest whitespace beneath hero, in this **strict** order:
1. Very small left-aligned eyebrow `• ABOUT AGV`.
2. Two-line uppercase editorial headline, e.g. `NOT JUST PROTECTION. / A FEELING.` (copy can be refined but preserve two-line geometry).
3. A **wide, shallow landscape photographic placeholder** with rounded corners (`ABOUT — HELMET MATERIAL DETAIL`), spanning almost the content width; this is not a tall portrait.
4. Compact paragraph **below the wide image**, approximately 3–4 short mobile lines (not a side caption, not above image).
5. A CTA formed from an **outlined white pill** saying `DISCOVER AGV` and a **small solid circular arrow immediately attached to its right**, matching screenshot geometry.

This ordering is a major correction. Do NOT position paragraph before the wide image on mobile. Do NOT turn the About CTA into a giant solid full-width button.

### 4.4 MACRO IMAGE + FOUR-THUMBNAIL GALLERY (reference 02)

This follows the About CTA immediately in the overall editorial sequence, with modest spacing; **it is not a new textual hero section**:
- One full-width rounded **landscape** media placeholder `DETAIL GALLERY — CARBON / VISOR MACRO`.
- A tiny circular secondary icon in/near upper-right of the macro image.
- Directly below: a **row of four equal small rounded thumbnails**, tightly spaced, all visible within viewport (no mobile horizontal scroller).
- Gallery should mimic actual screenshot proportions: thumbnail row noticeably shallower than main image; tight gaps and consistent edges.
- Clicking a thumbnail changes active state and the large macro placeholder label/content type. No dead controls, and no change to outer layout dimensions.
- The gallery does NOT have a large standalone section title here; reference shows images followed by Features label.

### 4.5 FEATURES INTRO + TALL LIFESTYLE IMAGE (reference 03)

Immediately after gallery:
1. `• FEATURES` tiny eyebrow.
2. Two-line uppercase headline, replacing `LIGHT THAT / ADAPTS YOU.` with a helmet-specific similarly sized line break such as `DESIGNED FOR / THE EDGE.`
3. A short introductory paragraph, roughly 3 mobile lines, flush to content left.
4. One **tall portrait rounded photo placeholder** `LIFESTYLE — RIDER HOLDING / WEARING AGV HELMET` across the content width, with a similar portrait aspect ratio and spacing to the provided screenshot. This image is a prominent visually standalone media block.

No custom technical diagram, exploded view or extra 3-column features list should appear here.

### 4.6 COMPACT PRODUCT FEATURE CARD (reference 03)

Immediately below the tall lifestyle image, not separated by a huge gap:
- One **short wide/landscape card** with rounded corners.
- Colour is medium-tone neutral/olive-analogue (for now dark/medium gray with high-contrast text).
- **Left side**: compact product name (`Pista GP RR`), a short line or two, and a small compact `EXPLORE AGV` pill/arrow action near bottom-left.
- **Right side**: a contained helmet product placeholder / silhouette using available card space.
- The card is significantly **shorter than the portrait lifestyle image**, almost a banner.
- Do not make it another tall full-width spotlight or convert it into equal-sized side-by-side stacked feature boxes on mobile.

### 4.7 DARK SIGNATURE PRODUCT SPOTLIGHT (reference 03)

Follows compact product card after a relatively small-to-medium vertical gap:
- One near-black rounded portrait panel **in normal document flow**.
- Small barely visible top eyebrow `• AGV / PERFORMANCE`.
- Two-line white uppercase headline at panel top-left, matching reference placement and scale. Example `NOT JUST SPEED. / A FEELING.`
- One short supporting copy block underneath, left-aligned, muted off-white.
- A **large product-image placeholder sits INSIDE this black container** below the copy, inset with rounded corners, occupying most of lower panel.
- At the lower-right edge of the **inner product image**, a **white elongated pill CTA** and a separate attached/surrounding **dark circular arrow button** overlap the image lower boundary. Preserve the characteristic curved cutout/notch silhouette around them.
- Panel should feel like a product editorial cover, NOT a new full-viewport scrolling takeover.
- Strong contrast: black outer card, lighter/different dark value inner media, white CTA.
- CTA copy: `EXPLORE THE HELMET`.

**Important**: Hero's circular arrow notch is top-right; spotlight's pill + circular arrow are **bottom-right**. They are separate distinctive shapes and both must be reproduced.

### 4.8 FAQ SECTION (reference 03 -> 04)

Below the spotlight there is a white spacer region, then:
1. `• FAQ` small eyebrow.
2. Two-line bold `YOUR QUESTIONS. / OUR ANSWERS.` at top-left.
3. One short explanatory paragraph beneath, left-aligned.
4. **Wide landscape featured image** with rounded corners, `FAQ — HELMET / RIDER LIFESTYLE`.
5. Beneath image: **active question detail panel** with very large thin `/03` on LEFT and a tight question-and-answer text block on RIGHT. That `/03` is not a page counter for the entire site; it refers to the currently expanded FAQ item in the provided reference.
6. **Exactly five FAQ rows** below with small `/01`, `/02`, `/03`, `/04`, `/05` prefixes and little `+` icons on the right, separated by subtle hairline rules. (Original graphic appears to repeat `/01` on some lines; normalise only this content numbering, not layout.)
7. Third question is expanded/active at initial load and rendered as a **filled dark-olive/charcoal pill** with light text and a minus icon. Other four rows remain unfilled/white.
8. Clicking a row changes the active question, updates the `/0X` detail and right-side/associated description; no giant accordion answer pushing every row farther down. Keep a **fixed, distinct featured answer area above the list**, as seen in reference. Clicking the active row can close it if semantics are well-handled; when no row active show an unselected presentation without confusing counter.
9. FAQ text must be plausible but non-committal; do not invent safety certification, protection guarantees, price, or sizing facts.

**Mobile**: photo above `/03` and paragraph above FAQ rows. It is NOT a desktop-style two-column FAQ squeezed into mobile.

### 4.9 FOOTER (reference 04)

- Starts directly after the last FAQ row and the section's breathing room, with a nearly-black full-width background.
- Giant **AGV wordmark** occupies very large upper area. Original wordmark visually extends toward page edges; recreate intended large typographic presence, but **do not cause accidental horizontal scroll**. `overflow:hidden` on the intentional crop wrapper only is acceptable.
- Small `Explore` label and 4 short links appear stacked vertically on mobile.
- `Follow` label with 2–3 vertical social links below.
- At bottom: thin separator, tiny copyright / `Unofficial concept redesign` label left, and small circular scroll-to-top arrow right.
- Avoid 4-column mobile footers, floating cards, newsletter blocks, excessive social icons, giant contact CTA.

---

## 5. DESKTOP RECONSTRUCTION — SAME DESIGN, NOT THE MOBILE COLUMN AT 1440px

### Desktop frame source: `01_web_mobile_overview.jpeg` upper half, `07_desktop_lower_coloured.jpeg` lower half.

**Global**: white editorial main canvas, dark media panels, wide content frame; preserve major asymmetries and rounded cards, not an unrelated desktop concept. Place content close enough to feel like a continuous designed page instead of disjointed full-viewport scenes.

### 5.1 Top hero / header (image 01)
- A slim top header **inside or aligned with a rounded pill-like bar**: small emblem at far-left, a group of small navigation items centred or distributed horizontally, a rounded control/action at far-right.
- Below header, a **shallow panoramic dark region** that serves as the oversized hero typography/headline zone.
- Below that, a **much larger dark wide hero-media rectangle**, with rounded edges and distinctive **circular cutout / action embedded near the upper-right boundary**.
- The main hero media contains a **small inset media card overlapping its bottom-left edge**, bordered by light stroke, echoing the mobile overlap.
- The three layers (`header strip`, `shallow heading zone`, `large media stage`) must be perceptible as in the grayscale desktop schematic. Do not flatten into a standard left-headline/right-product split if that loses the reference's distinct blocks.
- On desktop, the image itself stays dominant; no arbitrary price block or giant floating feature list.

### 5.2 About and gallery (image 01, middle)
- Use a wide editorial section: **left content column, right primary portrait/wide-tall media card**.
- Left upper: eyebrow/headline and compact copy represented as strong title lines; below that, a smaller secondary dark image card, short text and pill/circular CTA.
- Right: one large main media frame, with a small circular icon near its top-right and **four compact gallery thumbnails stacked vertically at right** (not in a horizontal strip on desktop).
- This is a crucial responsive change: mobile gallery thumbnails are horizontal below image; desktop gallery thumbnails are vertical beside the main image.
- Match the desktop scheme's asymmetry. Do not replace it with four equal feature cards.

### 5.3 Features / lifestyle pair (image 01 lower + image 07 top)
- Intro eyebrow/title occupies an upper horizontal editorial line before the cards.
- Beneath, **TWO adjacent large vertical editorial cards** with a tight gap and comparable overall height, NOT the mobile portrait stacked above banner.
  - LEFT: feature/product card, medium olive or gray, dominant helmet image with small text/CTA toward lower-left.
  - RIGHT: full-bleed vertical rider lifestyle media.
- Both cards align at top/bottom and have matching radii. The product card and rider photo seen side by side are a major reference signature.
- On mobile, this desktop pair must break back into **portrait lifestyle image first, short feature banner second** as the mobile screenshot dictates. You may use CSS grid areas/order or separated responsive compositions as long as content remains logically accessible.

### 5.4 Dark panoramic spotlight (image 07)
- This is a **very wide, rounded black showcase card** separated from feature cards by generous white space.
- Top-left white headline `LIGHT IN ITS / SOFTEST FORM.` in original -> helmet-specific two-line headline with similar line length.
- Very small supporting text aligned toward top-right, not a huge paragraph dominating the top.
- Below headline, one large **wide landscape helmet media frame** occupying most inner width.
- Distinct **CTA pill + circular arrow** sits near bottom-right edge of the media stage; do not relocate bottom-left.
- Desktop spotlight should look horizontally theatrical and low/wide; mobile changes to tall portrait dark card with text and vertical image as in source.

### 5.5 Desktop FAQ (image 07)
- White section after spotlight, generous top breathing room.
- Two columns: **LEFT heading and image plus `/03` answer detail**; **RIGHT short introduction and five-question accordion**.
- On left, featured image is small-to-medium landscape, not a massive full-width hero.
- `/03` index and answer text are below/adjacent to image as shown, with index conspicuous at left.
- On right, short description above the rows; five compact rows with active filled pill, not big accordion panels.
- Align the two-column composition to feel editorial and restrained.

### 5.6 Desktop footer (image 07)
- Full-width near-black footer.
- **Huge `AGV` wordmark left** occupying majority of height/width like ONDERA in reference, intentionally large.
- Two narrow link columns on the right: `Explore` and `Follow`.
- Tiny copyright at bottom-left.
- Do not rearrange into a modern generic giant CTA footer.

---

## 6. COPY MAP (STRUCTURE-LOCKED, NOT FINAL MARKETING COPY)

Use approximately these copy lengths to keep text blocks shaped like the reference:

| Original structural position | AGV wireframe copy | Notes |
| --- | --- | --- |
| Brand | `AGV` | Large type treatment; brand is locked. |
| About eyebrow | `• ABOUT AGV` | Tiny. |
| About title | `NOT JUST A HELMET. / A FEELING.` | Two lines. |
| About paragraph | `Built around the pursuit of precision. Form, focus, and motion, shaped into a singular racing silhouette.` | Brief, no unverified claims. |
| About CTA | `DISCOVER AGV` | Outlined pill + joined circle. |
| Features eyebrow | `• FEATURES` | Tiny. |
| Features headline | `DESIGNED FOR / THE EDGE.` | Two lines. |
| Features paragraph | `Purposeful lines. Focused details. A racing silhouette refined for the moments that matter.` | Same rough vertical footprint. |
| Compact banner | `Pista GP RR` / `EXPLORE AGV` | Short. |
| Black spotlight eyebrow | `• AGV / PERFORMANCE` | Tiny. |
| Black spotlight heading | `NOT JUST SPEED. / A FEELING.` | Two lines. |
| Spotlight CTA | `EXPLORE THE HELMET` | White pill + circle. |
| FAQ eyebrow | `• FAQ` | Tiny. |
| FAQ heading | `YOUR QUESTIONS. / OUR ANSWERS.` | Same. |
| FAQ intro | `Explore the details behind the design, fit, visor and everyday care.` | 2–3 compact lines. |

FAQ question placeholders:
1. `How do I find my helmet size?`
2. `What can I personalise?`
3. `What makes this design distinctive?` (initial active `/03`)
4. `How do I care for the visor?`
5. `Where can I find official product details?`

FAQ answers must explicitly avoid guarantees or unverified specifications. Add an `Unofficial portfolio concept` label in footer and use official-source links only when verified; for Phase 01 anchors to sections are preferable to invented external URLs.

---

## 7. BREAKPOINT-LOCKED RESPONSES

Test at 360, 375, **390**, 430, 768, 1024, **1440**, 1920px widths. Standard height for comparisons: ~844px mobile and ~900px desktop, but use full-page captures.

**Mobile <= 767px**
- Compact top icon/hamburger and giant wordmark separate row.
- Tall hero + inset bottom-left; top-right circular notch.
- About text/image/copy/CTA exact order.
- Macro photo + *four horizontal thumbnails*.
- Features heading/description -> portrait lifestyle -> short feature banner.
- Dark tall spotlight -> FAQ image -> `/03` details -> FAQ rows -> dark footer.
- Compact mobile line lengths, 14–18px page gutters.

**Tablet 768–1023px**
- Gradually introduce 2-column arrangements only if they can preserve clear component proportions; never create tiny cramped text.
- Gallery thumbnails may move to a vertical rail if wide enough.
- Feature cards may pair at tablet width only when they remain legible.
- Full-screen navigation remains functional.

**Desktop >= 1024px**
- Wide slim rounded header; distinct shallow hero strip and big hero image.
- About left text and secondary media, main media right with four vertical thumbnails.
- Two adjacent features cards.
- Panoramic dark spotlight.
- Two-column FAQ.
- Oversized wordmark footer with right-side links.

**Responsive sanity:** All intentional crops restricted to local media or wordmark overflow wrappers; page `scrollWidth <= innerWidth + 1`; no chopped or touching buttons, FAQ minimum touch targets ~44px; no giant unused vertical holes due to unnecessary fixed heights.

---

## 8. PRECISE COMPONENT AND ACCESSIBILITY BEHAVIOUR

Implement reusable components, e.g.:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    SiteHeader.tsx
    FullscreenNavigation.tsx
    HeroMedia.tsx
    AboutEditorial.tsx
    DetailGallery.tsx
    FeaturesEditorial.tsx
    FeatureProductBanner.tsx
    SignatureSpotlight.tsx
    FaqExperience.tsx
    SiteFooter.tsx
    MediaFrame.tsx
    JoinedPillArrow.tsx
    CornerNotch.tsx
  data/
    siteContent.ts
  styles/ (only if necessary)
```

- `MediaFrame`: accept labels, aspect, variant and accessible description; should retain the exact container footprint once real images are inserted in a later phase.
- `JoinedPillArrow`: compound CTA looks like one white/outline rounded pill + adjacent filled circle; positions match hero/spotlight reference. CTA must scroll to appropriate existing section; do not invent checkout.
- `CornerNotch`: implement hero top-right curved notch / circle carefully; must not cover content or cause overflow.
- Menu links: `Home`, `About`, `Features`, `Helmet`, `FAQ`; each real anchor with functioning close/scroll.
- FAQ state: initial selected index = 2 (`/03`); selected question updates separate detail display above rows. Use keyboard-friendly buttons, `aria-expanded`, and either `aria-controls`/region or clear relationship.
- Gallery: four interactive thumbnail buttons with `aria-pressed`, keyboard accessibility and active border/label; media changes without reflow.
- `Back to top`: functional scroll, no dead icon.
- Icons in purely decorative positions use `aria-hidden`.
- CSS hover behaviour should not be the only way to discover controls.
- `prefers-reduced-motion` must eliminate or greatly reduce animation.

---

## 9. STRICT VISUAL FIDELITY QA PROCESS — COMPARE, DON'T GUESS

Your implementation is **not done when it compiles**. Verify the screenshot matches visual references.

### Step A: Establish a reference matrix BEFORE coding
Write a short reference checklist in `docs/REFERENCE_FIDELITY_MAP.md` mapping each screenshot to the sections and the exact structural details enumerated above. This prevents skipping the inset card, notch, rail, `/03` panel or footer wordmark.

### Step B: Implement layout before animation
Do the seven sections, responsive CSS, and image/card geometry first. Use neutral placeholder blocks; do not use random images that mask wrong geometry. Only then add interactions and minimal hover/menu animation.

### Step C: Test + take captures
Run:
- package install (if needed)
- lint (if configured)
- TypeScript check
- production build
- development server
- Playwright or actual browser inspection if available

Capture full-page screenshots:
- `screenshots/phase-01/mobile-390.png`
- `screenshots/phase-01/mobile-430.png`
- `screenshots/phase-01/tablet-768.png`
- `screenshots/phase-01/desktop-1440.png`
- `screenshots/phase-01/desktop-1920.png`

Also capture section-specific screenshots when useful, especially hero and FAQ.

### Step D: REQUIRED visual side-by-side review
Place screenshot beside user references and inspect:
- **Mobile top**: header->wordmark->hero inset->about->macro gallery, correct proximity and shapes?
- **Mobile middle**: gallery thumbnails->features heading->portrait->short product card->dark spotlight, exact order?
- **Mobile bottom**: FAQ photo->`/03` answer block->five rows with selected row 3->black footer, correct density?
- **Desktop upper**: slim header, shallow hero band, large hero card with notched circle and inset, correct outline?
- **Desktop middle**: left copy, right main gallery with vertical thumbnail rail, and two big side-by-side feature cards?
- **Desktop lower**: wide black product stage, two-column FAQ, oversized-wordmark footer?

When comparing, focus on **bounding boxes, order, proportions, spacing, corner shapes, alignment and overlap**; actual labels and placeholder shades can differ from coloured photographic reference. Note source screenshot crops may not show the entire page, so do not mistake crop boundaries for new sections.

### Step E: Fix what differs
Perform at least one explicit visual correction pass. Report differences you fixed. If exact photographic identity is missing (it should be), that's fine; **do not claim pixel-perfect replication of photographs**. Aim for the same geometry.

### Step F: Functional verification
Check:
- desktop and mobile menu open, close (button, Escape, section link), focus restoration, scroll lock;
- four gallery thumbs actually switch active main media;
- FAQ row 3 active by default, clicking other row updates `/0X` and text;
- CTA links and back-to-top function;
- no fatal browser console errors, no hydration warnings, no overflow.

Do not claim tests or screenshots you did not really run/capture. If browser tooling unavailable, provide explicit limitation and how to verify manually; still run checks that are available.

---

## 10. IMPLEMENTATION PHASE CONSTRAINTS

### Phase 01 (THIS TASK)
- Exact structural skeleton wireframe.
- AGV text labels.
- Neutral media placeholders only (labels may say helmet/visor/carbon/rider).
- Minimal functional UI and basic accessible menu state animation.
- Browser inspection + QA captures.

### Phase 02 (DO NOT DO NOW)
- AGV-inspired branded palette, actual licensed/approved helmet photography or created study renders, material close-ups, photographic art direction.

### Phase 03 (DO NOT DO NOW)
- Advanced scroll-controlled motion, cinematic image sequence, physically plausible visor/material choreography, performance tuning.

Do not spend time on phases 02–03 before phase 01 passes visual approval.

---

## 11. COMPLETION REPORT

When completed, report concisely but concretely:
1. Exact local URL and the command to reopen it.
2. Folders/files created/modified and any existing code preserved.
3. Which screenshots were opened and used for each region.
4. Mobile / desktop fidelity checklist results (pass/fail and remaining gaps).
5. Tests actually executed and results, including types/build and functional checks.
6. Paths to screenshots that exist.
7. Anything incomplete and why.
8. Next steps only after successful visual review.

### ABSOLUTE FINAL INSTRUCTION

**Do not design a new AGV website. Reconstruct the user-provided ONDERA wireframe as the same website layout, with AGV helmet placeholders instead of lamp imagery. Maintain the original EXACT visual hierarchy, section sequence, card geometry, overlap relationships, CTA forms, notches, gallery placement, FAQ structure, and desktop/mobile differences. Build it, run it, inspect it in a browser, correct visual differences, and only then report completion.**
