# AGV WEBSITE — PHASE 01: EXACT STRUCTURAL WIREFRAME
## Complete self-contained Codex development specification — NO REFERENCE IMAGES REQUIRED

**TARGET PROJECT FOLDER:** `C:\Users\karthik\Desktop\AGV-WEBSITE`  
**DELIVERABLE:** Fully working, browser-previewable **Next.js + TypeScript + Tailwind CSS** site.  
**BRAND:** AGV (unofficial portfolio redesign).  
**PRODUCT:** AGV premium racing motorcycle helmets, using `Pista GP RR` only as a temporary product label.  
**STYLE AT THIS STAGE:** Neutral grayscale wireframe. Future direction is *Futuristic / Neo-Racing*, but DO NOT redesign the wireframe or apply the final art direction now.

> **SINGLE SOURCE OF TRUTH.** The original design images are **NOT in this directory** and **do not need to be**. The complete structural design is encoded in this Markdown file using precise textual blueprints, ordering, dimensions and placement rules. **Never request screenshots, image files, asset folders, or the previous Markdown brief.** Implement from this file alone. Do not claim to have inspected reference images from the local filesystem. Do not make up a browser comparison to unavailable images.

> **IMPORTANT: The earlier attempt failed before any shell command ran** because of a **Windows Codex sandbox error**, not because there were missing screenshots. This specification fixes the missing-image dependency; it does **not** change the sandbox environment. If shell/tool invocation still fails with `windows unelevated restricted-token sandbox cannot enforce split writable root sets directly`, report that platform blocker accurately and do not claim that changing the prompt resolves it. Do not silently disable security protections or execute unsandboxed. See Section 12 for a safe recovery checklist.

---

## 0. RECONSTRUCTION BLUEPRINTS — READ BEFORE CODING

These are **layout diagrams**, not components to render literally. `████` = dark media placeholder, `░░` = gray/light panel, `○` = round control, `[CTA]○` = joined pill + circle.

### 0A. MOBILE — TOP TO BOTTOM (390px reference canvas)

```text
┌─────────────────────────────────────┐
│ tiny logo/emblem                  ≡  │  compact header, NO big navbar
│ AGV                                 │  huge wordmark above hero
│ ┌─────────────────────────────────┐ │
│ │                              ○  │ │  tall rounded hero + top-right notch
│ │        HERO HELMET IMAGE        │ │
│ │                                 │ │
│ │ ┌───────────┐                   │ │
│ │ │ DETAIL 01 │                   │ │  portrait inset overlaps LOWER LEFT
│ └─┴───────────┴───────────────────┘ │
│                                     │
│ • ABOUT AGV                         │
│ NOT JUST A HELMET.                  │  compact two-line title
│ A FEELING.                          │
│ ┌─────────────────────────────────┐ │
│ │     WIDE ABOUT IMAGE            │ │  shallow landscape image
│ └─────────────────────────────────┘ │
│ short 3-4-line paragraph            │
│ [ DISCOVER AGV ]○                   │  joined pill and circle
│ ┌─────────────────────────────────┐ │
│ │      MACRO / DETAIL IMAGE    ○  │ │
│ └─────────────────────────────────┘ │
│ ┌──────┐┌──────┐┌──────┐┌──────┐    │  exactly 4 tiny gallery thumbnails
│ │ 01   ││ 02   ││ 03   ││ 04   │    │
│ └──────┘└──────┘└──────┘└──────┘    │
│                                     │
│ • FEATURES                          │
│ DESIGNED FOR                        │
│ THE EDGE.                           │
│ short paragraph                     │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │  tall portrait RIDER image
│ │          RIDER PHOTO            │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ PISTA GP RR      HELMET IMAGE   │ │  SHORT horizontal product banner
│ │ tiny copy        [mini image]   │ │
│ │ EXPLORE AGV ↗                   │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │  • AGV / PERFORMANCE            │ │
│ │  NOT JUST SPEED.                │ │  TALL near-black spotlight
│ │  A FEELING.                     │ │
│ │  small copy                     │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │                             │ │ │  image inside outer dark card
│ │ │     HELMET SPOTLIGHT        │ │ │
│ │ │                 [EXPLORE] ○ │ │ │  bottom-right joined CTA
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
│                                     │
│ • FAQ                               │
│ YOUR QUESTIONS.                     │
│ OUR ANSWERS.                        │
│ short intro                         │
│ ┌─────────────────────────────────┐ │
│ │         FAQ LIFESTYLE           │ │  wide landscape image
│ └─────────────────────────────────┘ │
│ /03   What makes this design...?    │  BIG active index at LEFT
│       short selected answer         │
│ ─────────────────────────────────── │
│ /01 How do I find my size?       +  │
│ /02 What can I personalise?      +  │
│ /03 What makes it distinctive?   −  │  SELECTED filled pill row
│ /04 How to care for the visor?    +  │
│ /05 Official product details?     +  │
├─────────────────────────────────────┤
│ AGV   (very large/cropped)          │  FULL WIDTH BLACK FOOTER
│ Explore                             │
│ Collection                          │
│ About                               │
│ Journal                             │
│ Contact                             │
│ Follow                              │
│ Instagram                           │
│ Pinterest                           │
│ X                                   │
│ __________________________________  │
│ © AGV concept                  ↑    │
└─────────────────────────────────────┘
```

### 0B. DESKTOP (1440px reference canvas)

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│  ◉         small slim nav items distributed in header                    MENU ○   │
│ ┌──────────────────────────────────────────────────────────────────────────────┐ │
│ │        SHALLOW PANORAMIC BRAND/TYPOGRAPHY STRIP                            │ │
│ └──────────────────────────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────────────────────○──┐ │
│ │                    LARGE WIDE HERO STAGE                                   │ │
│ │                                                                           │ │
│ │ ┌─────────────┐                                                           │ │
│ │ │ DETAIL CARD │                                                           │ │
│ └─┴─────────────┴───────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                  ABOUT + GALLERY                                │
│   ┌────────────────────────┐         ┌─────────────────────────────┐ ┌──────┐   │
│   │ eyebrow                │         │                             │ │ 01   │   │
│   │ 2-line title           │         │      LARGE MAIN GALLERY     │ │ 02   │   │
│   │ short description      │         │                             │ │ 03   │   │
│   │                        │         │                          ○  │ │ 04   │   │
│   │ smaller detail image   │         └─────────────────────────────┘ └──────┘   │
│   │ small copy             │                                                    │
│   │ [DISCOVER] ○           │                                                    │
│   └────────────────────────┘                                                    │
├──────────────────────────────────────────────────────────────────────────────────┤
│       • FEATURES                         BIG TITLE + SMALL SUPPORTING COPY       │
│   ┌────────────────────────────────┐ ┌──────────────────────────────────────┐   │
│   │   BIG PRODUCT FEATURE CARD     │ │          BIG RIDER IMAGE             │   │
│   │                                │ │                                      │   │
│   │  [title / description / CTA]   │ │                                      │   │
│   └────────────────────────────────┘ └──────────────────────────────────────┘   │
│                                                                                  │
│   ┌──────────────────────────────────────────────────────────────────────────┐   │
│   │   TWO-LINE WHITE HEADLINE     short supporting copy at top-right        │   │
│   │ ┌────────────────────────────────────────────────────────────────────┐   │   │
│   │ │               WIDE HELMET SPOTLIGHT IMAGE                          │   │   │
│   │ │                                            [EXPLORE THE HELMET] ○  │   │   │
│   │ └────────────────────────────────────────────────────────────────────┘   │   │
│   └──────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│   ┌───────────────────────────────┐   ┌──────────────────────────────────────┐   │
│   │ • FAQ                         │   │ brief description                    │   │
│   │ YOUR QUESTIONS.               │   │ /01 first question                +  │   │
│   │ OUR ANSWERS.                  │   │ /02 second question               +  │   │
│   │ ┌───────────────────────────┐ │   │ /03 selected question             −  │   │
│   │ │      FAQ IMAGE            │ │   │ /04 fourth question               +  │   │
│   │ └───────────────────────────┘ │   │ /05 fifth question                +  │   │
│   │ /03   selected answer         │   └──────────────────────────────────────┘   │
│   └───────────────────────────────┘                                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│ AGV  [OVERSIZED LEFT WORDMARK]                   Explore              Follow    │
│                                                  short links          socials   │
│ © UNOFFICIAL DESIGN CONCEPT                                                    ↑ │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 0C. Hard layout constraints

1. This is **not** a full-dark AGV website. The page canvas outside hero media, the black spotlight, and the footer is **very light**.
2. **Exactly seven page regions:** (1) header + hero, (2) About, (3) detail gallery, (4) Features + lifestyle + compact banner, (5) dark spotlight, (6) FAQ, and (7) footer. Do not add unrelated sections. About and gallery are adjacent in mobile flow and may form one shared desktop composition.
3. **Hero arrow is upper-right; spotlight CTA is lower-right.** Do not confuse their locations.
4. **Mobile gallery thumbnails horizontal below image; desktop thumbnails vertical to the right of image.**
5. **Mobile lifestyle first, compact banner second; desktop product card LEFT and lifestyle card RIGHT**, side by side.
6. **Mobile FAQ photo -> selected `/03` answer -> list; desktop selected answer LEFT and list RIGHT.**
7. **Oversized wordmark at top and footer**, both intentional oversized type without horizontal page overflow.
8. **Wireframe shapes are real static placeholders.** No loading shimmer, fake website screenshot background, random photos or broken URLs.
9. **Do not claim pixel-perfect matching** when the screenshots are not available on disk. Implement the prescribed geometry meticulously and compare generated screenshots to this description.
10. For all uncertain details, choose the option that preserves the diagram's proportions and hierarchy rather than inserting creative extras.

---

## 1. EXACT OBJECTIVE AND BOUNDARIES

Build one complete, usable, locally running Next.js page mirroring the specified ONDERA-inspired reference layout, but for an **unofficial AGV motorcycle-helmet website concept** with **Option C: Futuristic / Neo-Racing** as later art direction.

### Keep EXACTLY from the diagrams in this document
- 7 main content zones in their original order, as enumerated below; don't add or rearrange sections.
- Deliberate white/light editorial canvas over most of the page, NOT a dark immersive site from top to bottom.
- Large top wordmark, tiny header, large media areas, rounded corners, inset/overlap cards and circular arrow affordances.
- Specific mobile order and layout detailed below.
- The asymmetrical desktop positioning of major cards precisely specified in this document.
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
A human looking at the 390px or 1440px screenshots must recognise the **exact layout anatomy in the ASCII blueprints and dimensions in THIS FILE**, not merely the same list of sections. The screenshots are generated by the developer, not supplied as inputs.

---

## 2. REPO INSPECTION AND TECHNOLOGY

1. Inspect the current working directory and git status. Identify existing Next.js scaffold, package manager, styling setup, tests and assets.
2. Preserve existing user code and configuration unless the replacement is required and clearly identified. Do not erase unrelated work or overwrite user files.
3. If empty, initialise **Next.js App Router + TypeScript + Tailwind CSS** in the existing project directory (do not nest a second project directory).
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
- Treat specified mobile compositions as an approx 375–390 CSS px mobile canvas.
- Mobile main content gutter: ~14–18 CSS px equivalent (responsive); page should not have massive 30–40px gutters.
- All media near full content width. No accidental extra insets.
- Desktop content max-width ~1440–1520px, with carefully sized horizontal margins.
- Respect natural flow: section heights should be controlled by reference proportions; do not force every section to min-height:100vh.
- `box-sizing:border-box`, `min-width:0` on grids, no horizontal overflow.

---


## 3A. MEASURABLE GEOMETRY — TARGET VALUES, NOT RANDOM MAGIC NUMBERS

Use these values to make the self-contained layout reproducible. The numbers are **implementation targets inferred from the original visual structure**, not direct pixel measurements from an available Figma file. If necessary, adjust slightly to avoid clipping while preserving relationships.

| Component | Mobile (375–430px viewport) | Desktop (>= 1024px) |
| --- | --- | --- |
| Page horizontal gutter | 14–18px | 28–48px (max content width ~1450px) |
| Header | 30–42px internal content height | pill/strip 46–60px |
| Large top wordmark | nearly edge-to-edge, 64–96px line box | visible as brand/heading within shallow strip, scale with viewport |
| Hero media | **width / height ≈ 0.85–0.95** (taller than wide) | aspect ratio 2.3–2.8 (wide stage) |
| Hero inset | 34–43% hero width, anchored bottom-left | 16–22% of hero stage width, bottom-left |
| Top-right hero circle | 38–48px diameter | 54–78px diameter |
| About wide image | aspect ratio 1.85–2.25 | small supplemental image on left, 1.5–2.0 |
| Macro gallery main | 1.9–2.35 aspect ratio | large tall/portrait media in right column, 0.8–1.15 |
| Gallery thumbnails | 4 equal cards, gap 4–7px, ~46–70px height | 4 vertically stacked cards on right rail, gap ~8–12px |
| Features lifestyle portrait | aspect ratio 0.82–0.98, visibly tall | right card portrait-ish (within two-card row) |
| Compact feature banner | height 130–175px, landscape | morphs into left large vertical card |
| Spotlight outer card | width ~100% gutter, tall 1.1–1.5x its width | wide card aspect ratio roughly 1.9–2.5 |
| FAQ featured image | width ~100%, ratio 1.65–2.1 | smaller left landscape |
| FAQ selected row | pill about 44–52px high | similar 44–52px high |
| Main rounded card radius | 12–18px | 18–26px |
| Section vertical spacing | 32–62px, compact between related cards | 70–135px where reference shows breaks |

**Critical geometry interpretation:** A long tall mobile hero does NOT mean a 100vh pinned section. On a 390px viewport, for example, a 356px-wide hero around 385–420px tall is consistent with this specification. Also do not confuse the visual content scale of the small original screenshots with CSS pixel measurements; render for actual screen widths.

---

## 4. MOBILE RECONSTRUCTION — EXACT TOP-TO-BOTTOM ORDER

The following sequence is **locked**. It is a complete textual reconstruction of the user-provided wireframe and does not require access to any image.

### 4.1 HEADER / BRAND

**Visual anatomy**:
- A small icon/brand emblem at the **top-left**; a thin 2-line hamburger aligned at the **top-right**.
- Immediately below is a **massive AGV wordmark** taking nearly the full content width. It should occupy a separate visual row, exactly like the visual hierarchy defined in the mobile ASCII blueprint.
- Header is deliberately compact, with no visible desktop-style list of text links across mobile.
- Do not put a standard fixed navbar with a background rectangle on top of the hero. Do not place the wordmark inside the large hero card.

**Interactivity**:
- Hamburger triggers full-viewport navigation, controlled by accessible button with `aria-expanded`, focus trap/restoration, Esc to close, body scroll lock and navigation links.
- Overlay should be visually secondary to the main page when closed and must not add a permanent element to the screenshot.
- Menu appearance: subtle frosted/blurred continuation of page, not a wholly different visually dominant layout.

### 4.2 HERO PRODUCT CARD

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

### 4.3 ABOUT / BRAND STORY

Appears after modest whitespace beneath hero, in this **strict** order:
1. Very small left-aligned eyebrow `• ABOUT AGV`.
2. Two-line uppercase editorial headline, e.g. `NOT JUST PROTECTION. / A FEELING.` (copy can be refined but preserve two-line geometry).
3. A **wide, shallow landscape photographic placeholder** with rounded corners (`ABOUT — HELMET MATERIAL DETAIL`), spanning almost the content width; this is not a tall portrait.
4. Compact paragraph **below the wide image**, approximately 3–4 short mobile lines (not a side caption, not above image).
5. A CTA formed from an **outlined white pill** saying `DISCOVER AGV` and a **small solid circular arrow immediately attached to its right**, matching the specified compound-CTA geometry.

This ordering is a major correction. Do NOT position paragraph before the wide image on mobile. Do NOT turn the About CTA into a giant solid full-width button.

### 4.4 MACRO IMAGE + FOUR-THUMBNAIL GALLERY

This follows the About CTA immediately in the overall editorial sequence, with modest spacing; **it is not a new textual hero section**:
- One full-width rounded **landscape** media placeholder `DETAIL GALLERY — CARBON / VISOR MACRO`.
- A tiny circular secondary icon in/near upper-right of the macro image.
- Directly below: a **row of four equal small rounded thumbnails**, tightly spaced, all visible within viewport (no mobile horizontal scroller).
- Gallery proportions: thumbnail row noticeably shallower than main image; tight gaps and consistent edges.
- Clicking a thumbnail changes active state and the large macro placeholder label/content type. No dead controls, and no change to outer layout dimensions.
- The gallery does NOT have a large standalone section title here; wireframe shows images followed by Features label.

### 4.5 FEATURES INTRO + TALL LIFESTYLE IMAGE

Immediately after gallery:
1. `• FEATURES` tiny eyebrow.
2. Two-line uppercase headline, replacing `LIGHT THAT / ADAPTS YOU.` with a helmet-specific similarly sized line break such as `DESIGNED FOR / THE EDGE.`
3. A short introductory paragraph, roughly 3 mobile lines, flush to content left.
4. One **tall portrait rounded photo placeholder** `LIFESTYLE — RIDER HOLDING / WEARING AGV HELMET` across the content width, with a similar portrait aspect ratio and spacing to the described layout. This image is a prominent visually standalone media block.

No custom technical diagram, exploded view or extra 3-column features list should appear here.

### 4.6 COMPACT PRODUCT FEATURE CARD

Immediately below the tall lifestyle image, not separated by a huge gap:
- One **short wide/landscape card** with rounded corners.
- Colour is medium-tone neutral/olive-analogue (for now dark/medium gray with high-contrast text).
- **Left side**: compact product name (`Pista GP RR`), a short line or two, and a small compact `EXPLORE AGV` pill/arrow action near bottom-left.
- **Right side**: a contained helmet product placeholder / silhouette using available card space.
- The card is significantly **shorter than the portrait lifestyle image**, almost a banner.
- Do not make it another tall full-width spotlight or convert it into equal-sized side-by-side stacked feature boxes on mobile.

### 4.7 DARK SIGNATURE PRODUCT SPOTLIGHT

Follows compact product card after a relatively small-to-medium vertical gap:
- One near-black rounded portrait panel **in normal document flow**.
- Small barely visible top eyebrow `• AGV / PERFORMANCE`.
- Two-line white uppercase headline at panel top-left, matching the blueprint placement and scale. Example `NOT JUST SPEED. / A FEELING.`
- One short supporting copy block underneath, left-aligned, muted off-white.
- A **large product-image placeholder sits INSIDE this black container** below the copy, inset with rounded corners, occupying most of lower panel.
- At the lower-right edge of the **inner product image**, a **white elongated pill CTA** and a separate attached/surrounding **dark circular arrow button** overlap the image lower boundary. Preserve the characteristic curved cutout/notch silhouette around them.
- Panel should feel like a product editorial cover, NOT a new full-viewport scrolling takeover.
- Strong contrast: black outer card, lighter/different dark value inner media, white CTA.
- CTA copy: `EXPLORE THE HELMET`.

**Important**: Hero's circular arrow notch is top-right; spotlight's pill + circular arrow are **bottom-right**. They are separate distinctive shapes and both must be reproduced.

### 4.8 FAQ SECTION

Below the spotlight there is a white spacer region, then:
1. `• FAQ` small eyebrow.
2. Two-line bold `YOUR QUESTIONS. / OUR ANSWERS.` at top-left.
3. One short explanatory paragraph beneath, left-aligned.
4. **Wide landscape featured image** with rounded corners, `FAQ — HELMET / RIDER LIFESTYLE`.
5. Beneath image: **active question detail panel** with very large thin `/03` on LEFT and a tight question-and-answer text block on RIGHT. That `/03` is not a page counter for the entire site; it refers to the currently expanded FAQ item in this specification.
6. **Exactly five FAQ rows** below with small `/01`, `/02`, `/03`, `/04`, `/05` prefixes and little `+` icons on the right, separated by subtle hairline rules. (Original graphic appears to repeat `/01` on some lines; normalise only this content numbering, not layout.)
7. Third question is expanded/active at initial load and rendered as a **filled dark-olive/charcoal pill** with light text and a minus icon. Other four rows remain unfilled/white.
8. Clicking a row changes the active question, updates the `/0X` detail and right-side/associated description; no giant accordion answer pushing every row farther down. Keep a **fixed, distinct featured answer area above the list**, as seen in the blueprint. Clicking the active row can close it if semantics are well-handled; when no row active show an unselected presentation without confusing counter.
9. FAQ text must be plausible but non-committal; do not invent safety certification, protection guarantees, price, or sizing facts.

**Mobile**: photo above `/03` and paragraph above FAQ rows. It is NOT a desktop-style two-column FAQ squeezed into mobile.

### 4.9 FOOTER

- Starts directly after the last FAQ row and the section's breathing room, with a nearly-black full-width background.
- Giant **AGV wordmark** occupies very large upper area. Original wordmark visually extends toward page edges; recreate intended large typographic presence, but **do not cause accidental horizontal scroll**. `overflow:hidden` on the intentional crop wrapper only is acceptable.
- Small `Explore` label and 4 short links appear stacked vertically on mobile.
- `Follow` label with 2–3 vertical social links below.
- At bottom: thin separator, tiny copyright / `Unofficial concept redesign` label left, and small circular scroll-to-top arrow right.
- Avoid 4-column mobile footers, floating cards, newsletter blocks, excessive social icons, giant contact CTA.

---

## 5. DESKTOP RECONSTRUCTION — SAME DESIGN, NOT THE MOBILE COLUMN AT 1440px

### Desktop frame source: self-contained desktop ASCII blueprint and section specifications in this document.

**Global**: white editorial main canvas, dark media panels, wide content frame; preserve major asymmetries and rounded cards, not an unrelated desktop concept. Place content close enough to feel like a continuous designed page instead of disjointed full-viewport scenes.

### 5.1 Top hero / header
- A slim top header **inside or aligned with a rounded pill-like bar**: small emblem at far-left, a group of small navigation items centred or distributed horizontally, a rounded control/action at far-right.
- Below header, a **shallow panoramic dark region** that serves as the oversized hero typography/headline zone.
- Below that, a **much larger dark wide hero-media rectangle**, with rounded edges and distinctive **circular cutout / action embedded near the upper-right boundary**.
- The main hero media contains a **small inset media card overlapping its bottom-left edge**, bordered by light stroke, echoing the mobile overlap.
- The three layers (`header strip`, `shallow heading zone`, `large media stage`) must be perceptible as specified in the desktop blueprint. Do not flatten into a standard left-headline/right-product split if that loses the reference's distinct blocks.
- On desktop, the image itself stays dominant; no arbitrary price block or giant floating feature list.

### 5.2 About and gallery
- Use a wide editorial section: **left content column, right primary portrait/wide-tall media card**.
- Left upper: eyebrow/headline and compact copy represented as strong title lines; below that, a smaller secondary dark image card, short text and pill/circular CTA.
- Right: one large main media frame, with a small circular icon near its top-right and **four compact gallery thumbnails stacked vertically at right** (not in a horizontal strip on desktop).
- This is a crucial responsive change: mobile gallery thumbnails are horizontal below image; desktop gallery thumbnails are vertical beside the main image.
- Match the desktop blueprint's asymmetry. Do not replace it with four equal feature cards.

### 5.3 Features / lifestyle pair
- Intro eyebrow/title occupies an upper horizontal editorial line before the cards.
- Beneath, **TWO adjacent large vertical editorial cards** with a tight gap and comparable overall height, NOT the mobile portrait stacked above banner.
  - LEFT: feature/product card, medium olive or gray, dominant helmet image with small text/CTA toward lower-left.
  - RIGHT: full-bleed vertical rider lifestyle media.
- Both cards align at top/bottom and have matching radii. The product card and rider photo seen side by side are a major reference signature.
- On mobile, this desktop pair must break back into **portrait lifestyle image first, short feature banner second** as the mobile blueprint dictates. You may use CSS grid areas/order or separated responsive compositions as long as content remains logically accessible.

### 5.4 Dark panoramic spotlight
- This is a **very wide, rounded black showcase card** separated from feature cards by generous white space.
- Top-left white headline `LIGHT IN ITS / SOFTEST FORM.` in original -> helmet-specific two-line headline with similar line length.
- Very small supporting text aligned toward top-right, not a huge paragraph dominating the top.
- Below headline, one large **wide landscape helmet media frame** occupying most inner width.
- Distinct **CTA pill + circular arrow** sits near bottom-right edge of the media stage; do not relocate bottom-left.
- Desktop spotlight should look horizontally theatrical and low/wide; mobile changes to tall portrait dark card with text and vertical image as specified here.

### 5.5 Desktop FAQ
- White section after spotlight, generous top breathing room.
- Two columns: **LEFT heading and image plus `/03` answer detail**; **RIGHT short introduction and five-question accordion**.
- On left, featured image is small-to-medium landscape, not a massive full-width hero.
- `/03` index and answer text are below/adjacent to image as specified, with index conspicuous at left.
- On right, short description above the rows; five compact rows with active filled pill, not big accordion panels.
- Align the two-column composition to feel editorial and restrained.

### 5.6 Desktop footer
- Full-width near-black footer.
- **Huge `AGV` wordmark left** occupying majority of height/width like ONDERA in the blueprint, intentionally large.
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

- `MediaFrame`: accept labels, aspect, variant and accessible description; retain the exact container footprint once real images are inserted in a later phase.
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



---

## 9. VISUAL QUALITY CONTROL WITHOUT INPUT IMAGES

Do not request the original screenshots, and do not invent files. Use **Section 0 ASCII blueprints**, **Section 3A geometry targets** and **Sections 4–8 exact descriptions** as the full acceptance specification.

### First make a reference map FROM THIS FILE

Create `docs/WIREFRAME_FIDELITY_CHECKLIST.md`, with the two blueprint layouts re-expressed as a checkable table:
- Top header and wordmark, hero notch and inset
- Mobile About heading / image / paragraph / joined CTA
- Mobile large gallery and four horizontal thumbnails
- Mobile Features text / tall rider image / short banner
- Mobile tall black spotlight with inset image and lower-right CTA
- Mobile FAQ photo, `/03` answer block, five pill-like rows
- Mobile dark footer, oversized wordmark, vertical link list
- Desktop slim header, shallow brand strip, giant wide hero stage
- Desktop left text+smaller media vs right gallery+vertical thumb rail
- Desktop left product feature card vs right rider card
- Desktop wide black spotlight, left FAQ answer / right accordion, dark footer

### Browser verification

1. Ensure package installation completed and no missing dependencies.
2. Run TypeScript check, lint if configured, and production build, fixing errors introduced by your work.
3. Start the Next.js development server on localhost:3000 if available; report actual port.
4. If browser automation is accessible, run Chromium or other available browser and capture **actual** full-page images to:
   - `screenshots/phase-01/mobile-375.png`
   - `screenshots/phase-01/mobile-390.png`
   - `screenshots/phase-01/mobile-430.png`
   - `screenshots/phase-01/tablet-768.png`
   - `screenshots/phase-01/desktop-1440.png`
   - `screenshots/phase-01/desktop-1920.png`
5. Validate no horizontal overflow: `document.documentElement.scrollWidth <= window.innerWidth + 1` at all sampled widths.
6. Inspect screenshots against the **diagrams**, checking geometry rather than looking at a product image. Compare row counts, overlaps, section order, presence of gallery rail, correct CTA positions, inset proportions, footer layout.
7. Fix issues, rerun checks and screenshots; one explicit visual correction pass is required if browser tools are available.
8. Verify the full-screen menu opens/closes via button and Escape, locks background scroll, restores focus and navigates to real anchors.
9. Verify four gallery thumbnails switch selection without changing overall geometry.
10. Verify FAQ begins on `/03`; clicking other questions changes selected answer and selected pill; back-to-top works.
11. Verify `prefers-reduced-motion`, keyboard focus and reasonable touch targets.
12. If browser automation is absent, do not claim to have captured screenshots. State the limitation, give manual browser instructions, and still run all checks that do work.

**Do not claim that the implementation matches screenshots that are not present.** You can only claim that it follows the self-contained specification and passed tests you really executed.

---

## 10. COMPONENT TREE AND DELIVERABLES

Suggested architecture (adapt only if the project already has a reasonable structure):

```text
C:\Users\karthik\Desktop\AGV-WEBSITE\
  package.json
  src/
    app/
      layout.tsx
      page.tsx
      globals.css
    components/
      Header.tsx
      FullscreenMenu.tsx
      HeroStage.tsx
      CornerNotch.tsx
      MediaPlaceholder.tsx
      JoinedPillArrow.tsx
      AboutSection.tsx
      DetailGallery.tsx
      FeaturesSection.tsx
      CompactFeatureCard.tsx
      ProductSpotlight.tsx
      FaqSection.tsx
      Footer.tsx
    data/
      content.ts
  docs/
    WIREFRAME_FIDELITY_CHECKLIST.md
  screenshots/
    phase-01/
      (actual browser captures, if available)
```

Provide user-accessible local preview at `http://localhost:3000` or the actual detected port. Keep assets and copy swappable; in later phases the neutral image frames become real helmet imagery.

---

## 11. PHASE BOUNDARIES AND COMPLETION REPORT

**Phase 01 ONLY:** self-contained AGV-labeled grayscale skeleton, accurate mobile/desktop compositions, working gallery/FAQ/navigation/anchors, responsive verified build and screenshots where tools permit.

**NOT NOW:** final colour palette, realistic helmet renders, official logo recreation, shopping cart, products page, complex parallax, GSAP pinned sections, 3D, motion sequences, checkout, backend, analytics.

When finished, state:
- Actual working path and localhost URL
- Complete list of key components created
- Checks executed and pass/fail
- Browser captures actually generated (paths)
- Mobile and desktop fidelity checklist results
- Remaining known mismatches or blockers, clearly marked
- No unverified claim of success

---

## 12. EXECUTION ENVIRONMENT RECOVERY — IMPORTANT

The previous Codex run failed before any command was launched with:

```text
windows unelevated restricted-token sandbox cannot enforce split writable root sets directly; refusing to run unsandboxed
```

This is a **Codex Windows sandbox / permission-profile incompatibility**, independent of the project files or missing images. If it persists, STOP attempting file writes and tell the user they must resolve the environment. Do **not** disable the sandbox, invoke bypass flags, edit files outside the user project, or claim the prompt fixed this.

Once the user has configured a working, supported sandbox environment and reopened Codex, resume by reading this local Markdown brief. In particular, native Windows setups with `[windows] sandbox = "unelevated"` have exhibited this error; changing to a supported elevated sandbox profile or working via WSL is a possible user-managed remedy, not something to modify autonomously. Do not request administrator credentials. Do not change global configuration without the user's knowledge.

---

## FINAL NON-NEGOTIABLE INSTRUCTION TO CODEX

**EXECUTE THE WORK, DO NOT JUST EXPLAIN IT.** Build the exact self-contained mobile and desktop structural wireframes, not a redesigned AGV landing page. Follow the ASCII layout diagrams, section order, fixed media/card relationships, notch and inset geometry, CTA positions, gallery orientation, FAQ active answer layout, and oversized footer. Use only placeholders. Run checks and start the dev server. If a platform sandbox error prevents access, report the blocker honestly without pretending it was implemented.
