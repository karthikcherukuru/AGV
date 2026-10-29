# Phase 01 wireframe fidelity checklist

Source: `AGV_SELF_CONTAINED_WIREFRAME_CODEX.md`, sections 0, 3A, 4–8. Comparison is to written diagrams, not unavailable source screenshots.

| Region | Mobile acceptance | Desktop acceptance | Verification |
| --- | --- | --- | --- |
| Header + hero | Compact emblem/menu; separate oversized wordmark; tall 0.9-ratio hero; 38% bottom-left inset; upper-right notched circle | Slim header; shallow dark brand strip; 2.5-ratio wide hero; 19% bottom-left inset | Implemented; visual inspection blocked |
| About | Eyebrow, two-line title, shallow image, paragraph, joined CTA in that order | Left editorial column with smaller detail image and CTA | Implemented; visual inspection blocked |
| Detail gallery | Landscape main frame; four equal horizontal thumbnails | Tall main frame to the right of About; four vertical thumbnails at right | Implemented; four buttons verified in served HTML; visual inspection blocked |
| Features | Intro, tall rider image, short 150px product banner | Product card left; rider card right; matching heights | Implemented; visual inspection blocked |
| Spotlight | Tall near-black outer card, inner media, lower-right joined CTA | Panoramic dark card; headline left, supporting copy right; inner media and lower-right CTA | Implemented; visual inspection blocked |
| FAQ | Heading, intro, landscape photo, large /03 detail, five rows | Heading/photo/answer left; intro and five rows right | Implemented; initial /03 and five rows verified in served HTML; interactions/visual inspection blocked |
| Footer | Full-width black, oversized wordmark, stacked link groups | Giant left wordmark; two narrow link columns right | Implemented; visual inspection blocked |

## Behavior

- [ ] Menu opens/closes, traps focus, restores focus, locks background scroll, handles Escape.
- [ ] Navigation and every CTA reach real destinations.
- [ ] Four gallery buttons change selection without layout shift.
- [ ] FAQ starts at /03 and changes the distinct answer display without expanding rows.
- [ ] Back to top works.
- [ ] Reduced motion and keyboard focus verified.
- [ ] No horizontal overflow at 360, 375, 390, 430, 768, 1024, 1440, 1920px.
- [ ] Mobile and desktop screenshots captured and visually inspected.
- [ ] Visual correction pass performed.
- [x] TypeScript, ESLint and production build pass.

## Verified without a browser

- Local preview: `http://127.0.0.1:12379`, HTTP 200.
- All seven page regions are present in the correct served HTML order.
- Four gallery buttons, five FAQ rows, and initial /03 selection are present.
- All 18 linked JavaScript, CSS and icon assets return HTTP 200.
- Static production prerender completes successfully.

## Browser limitation

Playwright launch fails with `browserType.launch: spawn EPERM`. A direct native Chrome launch fails in Windows IPC with `Access is denied. (0x5)`. No viewport tests, interactive browser checks, screenshots, or screenshot-based visual correction pass were completed. Unchecked boxes above remain pending; source implementation is not evidence of browser verification.
