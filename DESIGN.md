# AGV structural wireframe

The authoritative specification is `AGV_SELF_CONTAINED_WIREFRAME_CODEX.md`.

Reading this as a portfolio wireframe for the project owner's layout review, with a grayscale editorial composition. Layout variance: 2 (the reference is locked); motion intensity: 2 (navigation and state feedback); visual density: 4. This is custom CSS geometry with Tailwind v4 utilities, not an external design system.

## Tokens

Near-white canvas, near-black ink and spotlight, charcoal media, neutral-gray support media. No brand accent in Phase 01. System Arial for body and condensed system sans for headings; no external font requests. Display wordmarks deliberately exceed ordinary heading sizes as required by the brief.

14–18px mobile gutters, 32–48px desktop gutters, 1450px maximum content width. Cards use 16px mobile / 24px desktop radii; controls use circles and pills. Global CSS variables in `src/app/globals.css` own the geometry.

## Composition

Seven regions: header/hero, About, detail gallery, Features, spotlight, FAQ, footer. About and gallery share an asymmetric desktop grid. Mobile uses one column. Desktop features place product left and rider right; mobile places rider before compact product banner. FAQ has a separate selected-answer area.

## Motion and accessibility

Native modal navigation provides background inertness and focus containment. CSS transitions communicate open/closed and selected states. Reduced motion disables animation and smooth scrolling. Focus indicators and labels are mandatory.

## Explicit brief overrides to general design guidance

The supplied diagrams require repeated eyebrows, static media placeholders, nested spotlight media, light/dark section changes and oversized wordmarks. Preserve these. Do not source imagery, add an alternate theme, change the palette, or redesign the composition based on general style heuristics.
