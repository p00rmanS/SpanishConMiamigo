# Design QA — Sunlit Editorial

final result: passed

## Source and evidence
- Source visual truth: `C:/Users/james/.codex/generated_images/01a0986e-9ee2-7f00-8fe8-0389a17b3aae/exec-667c20e7-999a-428c-afb3-650affcb07fc.png`
- Implementation: `http://127.0.0.1:4185/`
- Final lesson screenshot: `qa/desktop-final.png`.
- Full-view comparisons inspected: `qa/comparison-before.png`, `qa/comparison-after.png`, `qa/comparison-final.png`.
- Focused comparison inspected: `qa/focus-final.png`, showing sentence, explanation, pattern, and next-action region together with the source.
- Desktop CSS viewport: 1487 × 1058; device pixel ratio 1. Source pixels: 1487 × 1058. Browser screenshot: 1472 × 1058, excluding the 15px scrollbar. No scaling was applied when composing the comparison. The scrollbar-width difference is an expected capture difference.
- State: lesson 1, Understand step, optional English explanation off, answer key collapsed. English sentence translation is now always visible per the user’s follow-up request.
- Supporting views: `qa/verbs-desktop.png`, `qa/verbs-mobile-fixed.png`, `qa/mobile.png`.

## Comparison history and findings
1. [P2, fixed] Initial tutor rail too narrow; long quote wrapped to three lines and pushed the closing quote below the viewport. Widened rail from 275px to 315px, reduced quote margins, and adjusted note rhythm. Post-fix: `qa/comparison-after.png`.
2. [P2, fixed] Initial editorial heading and Spanish example lacked the reference’s weight. Increased heading size/weight and example weight. Post-fix evidence: `qa/comparison-after.png`, `qa/focus-final.png`.
3. [P2, fixed] Resource tabs overflowed at 390px. Changed mobile tabs to a four-column grid and set the verb detail minimum width to zero. Post-fix: `qa/verbs-mobile-fixed.png`; DOM checked at 390px (client/scroll 375/375) and 320px (305/305).
4. No remaining actionable P0/P1/P2 visual findings for this prototype scope.

## Required fidelity surfaces
- Typography: Libre Baskerville for editorial headings and DM Sans for UI; readable sentence, title, and note hierarchy. Focused comparison confirms functional text remains readable. Exact handwritten lettering is a P3 difference.
- Spacing: preserved fixed left navigation, central learning sequence, and separate tutor rail. Mobile switches to a single column with fixed bottom navigation. English translation adds an intentional line requested by the user.
- Colors: cream, terracotta, ink, muted gold, and teal carry through the lesson and new reference screens. Visible focus outlines and textual feedback avoid relying only on color.
- Assets: generated coastal-village photo in the actual sidebar; Phosphor icon library. No screenshot is used as interactive UI. Photo composition differs slightly from the mock, an accepted generated-asset variation.
- Content: corrected the mock’s artificial pronunciation of James, added regional ll note, explicit English translations, and actual practice. No fabricated proficiency scores or unavailable-course buttons.

## Functional verification
- Completed lesson 1: incorrect choice → Taglish reason → successful retry → independent writing → optional speaking → completion/review date.
- Reloaded and verified completion and mistake notebook persistence.
- Verified lesson navigation across all six units and 20 lesson entries.
- Verified optional English explanation and expandable answer key.
- Searched verbs using English “to eat”; verified comer forms and wrong-person correction.
- Expanded ser/estar guide; confirmed Taglish explanation, English explanation, translated examples, pro tip, and exception note.
- Filtered restaurant phrases with English “coffee”; correct Spanish/English pair appeared.
- Checked mobile core action and reference library at 390px and narrow 320px width.
- Browser console inspection found no runtime errors in tested flows.
- Ten automated content/scoring/review/hosting tests pass; ESLint passes.

## Limits and follow-up polish
- This is prototype visual QA, not a claim of comprehensive WCAG conformance. Dedicated screen-reader testing remains.
- Microphone permission and actual recording/audio hardware were not exercised; speech and recording depend on browser support. No claim of pronunciation grading.
- P3: handwritten quote font and exact photo composition differ from the image concept.
- Accounts, cross-device sync, full CEFR curriculum, all verb tenses, downloadable offline lessons, and comprehensive assessments remain roadmap work.

## Curriculum expansion verification — 2026-09-14
Passed lint, 12 automated tests, and production build. Browser checks covered: 38-lesson course map with Beginner/Advanced filters; seven verb tense options; preterite accent rejection; story translations toggle; comprehension answers enabling completion; advanced conversation catalog and reader. At 390px viewport, document client and scroll widths both measured 375px (no horizontal overflow). Mobile catalog visually inspected; viewport restored. No browser console errors captured. Browser audio output and microphone hardware were not tested. Reading completion persistence is implemented but was not exercised in this pass to avoid marking the user's reading complete.
