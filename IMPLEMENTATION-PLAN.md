# Español Para Sa’yo — first build

Selected visual: option 1, Sunlit Editorial. Preserve its cream canvas, terracotta actions, serif headings, village sidebar, and tutor notes.

## Specification audit
- No existing application or package files were present.
- The teaching bridge is strong; the proposed dashboard and nineteen-section lesson template need progressive disclosure.
- Teach ser as identity/classification and estar as state/location, with exceptions; permanent/temporary is not a universal rule.
- Course completion is not CEFR certification. A0 is an internal foundation label.
- Separate demonstrated recall, assisted practice, and speaking self-assessment. Do not invent proficiency or pronunciation scores.

## Implementation sequence
1. Bootstrap the Product Design React/Vite starter; this local first slice deliberately defers the suggested Next.js/Supabase production architecture.
2. Author structured starter lessons with Taglish teaching, key ideas, pro tips, practice, and answer reasons.
3. Implement selected visual, lesson flow, speaking record/replay, course navigation, and local review persistence.
4. Test scoring/scheduling, production build, and desktop/mobile browser flows; compare against the selected image.

## Folder structure
- app/src/content.js — authored starter curriculum
- app/src/learning.js — scoring and review logic
- app/src/App.jsx — application and learning flow
- app/src/styles.css — responsive design system
- app/public/assets — generated imagery
- app/tests — learning and hosting checks

## Later milestones
Full 20-lesson/250-exercise seed, complete A1–C1 curricula, authenticated cross-device sync, content-reviewed recorded audio, placement assessments, downloadable offline bundles, comprehensive Verb Lab, and production accessibility/security review remain separate milestones.
