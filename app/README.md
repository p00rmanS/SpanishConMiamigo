# Español Para Sa’yo

Working local first slice of the selected Sunlit Editorial design.

## Run
Node.js and npm are required. Run `npm install`, then `npm run dev -- --host 127.0.0.1 --port 4185` from this directory.

`npm run build` creates the production bundle. `npm test` checks answer scoring, review scheduling, and authored content. `npm run test:sites` checks bundled hosting behavior.

## Included
20 authored beginner lessons, 50 present-tense verbs with conjugation drills, 12 bilingual grammar guides, 50 practical phrases with English translations, Taglish and optional English explanations, key ideas, pro tips, answer keys, guided choice and written production, speech synthesis with fallback, optional microphone record/replay, lesson completion, local review scheduling, mistake notebook, searchable lesson reference, responsive layout, and light/dark appearance.

## Honest limits
This is a React/Vite local prototype, not the complete production specification. Progress is browser-local, without accounts or cross-device sync. The 20 lessons cover foundations and selected A1 patterns; complete A1–C1 courses and other verb tenses are planned. No proficiency certification or automatic speech grading is offered. Synthesized audio depends on installed browser voices and may need a connection. Microphone recording requires permission and a supported secure browser context. Recordings are session-only. No offline lesson download or installable PWA is implemented. There is no database migration or seed step yet; content is in src/content.js, src/more-lessons.js, and src/reference-data.js. No API key or environment variable is required.

## Validation
`npm run lint` checks JavaScript/JSX. `npm test` runs ten content/scoring/scheduling/hosting tests. This starter uses JavaScript; TypeScript checking is not configured. Browser evidence and visual review are recorded in design-qa.md.


## Curriculum expansion — 2026-09-14
38 guided lessons: 26 Beginner, 6 Intermediate, 6 Advanced. Library includes 30 grammar guides, 50 phrases, 50 present-tense verbs, and six additional tense tables for 12 core verbs (preterite/indefinido, imperfect, present perfect, future, conditional, present subjunctive).

Six original stories and six original conversations offer sentence-by-sentence English translations, optional browser audio, vocabulary keys, Taglish explanations, tips, pro tips, and comprehension checks. Reading completion is saved locally. These focused tracks are not a complete CEFR course or certification. Speech availability depends on the browser.

Terminology and conjugation reference: [RAE conjugation tables](https://www.rae.es/diccionario-estudiante/docs/conjugaciones-verbales.pdf). Reading texts and teaching explanations are original.

## Latest lesson expansion — 2026-09-14
Added 12 lessons and corresponding grammar guides. Current totals: 50 lessons (30 Beginner, 10 Intermediate, 10 Advanced), 42 grammar guides. New topics: clock time, comparisons, weather, porque/por qué, present progressive, por/para, affirmative and negative commands, future cuando clauses, relative clauses with subjunctive, reported speech, and impersonal se. Each new lesson includes English meaning, Taglish explanation, a key idea, pro tip, guided and written practice, and three bilingual examples in its grammar guide.

## Dictionary — 2026-09-14
Added Library → Dictionary: 70 local entries (50 verbs, 20 nouns), Spanish/English and conjugated-form search, noun gender, bilingual examples, learning notes, and browser speech. Search ignores acute accents but preserves ñ. External lookup links open SpanishDictionary.com; there is no API integration, copied dictionary database, or affiliation. Selected meanings only. Lint and 13 tests pass.

## Additional practice — 2026-09-14
Current curriculum: 56 lessons (32 Beginner, 12 Intermediate, 12 Advanced), 48 grammar guides. Six new lessons cover saber/poder, frequency, acabar de, double object pronouns, past counterfactuals, and present perfect subjunctive. Each includes translated examples, Taglish teaching notes, key ideas, pro tips, and guided/written practice. The past-counterfactual exercise accepts both hubiera and hubiese. Existing lesson IDs remain stable.

## Simplified study tools — 2026-09-15
58 lessons and 50 grammar guides. Added preterite spelling and shared ser/ir lessons, a one-line lesson takeaway, Previous/Next controls, and touch swipes on the labeled navigation strip (left = next, right = previous; unfinished answers reset). Library includes Cheat sheets with regular endings, irregular stems, spelling changes, essential tables, and bounded memory cues. RAE reference is linked. The 200 days tab provides day-selectable practice, repeated retrieval, speaking tasks, and weekly checkpoints; it is a study target, not a fluency guarantee. Plan day selection is session-only. Navigation buttons verified in browser; touch gestures require device testing. Lint, 13 tests, and build checked.


## Current preference — 2026-09-15
The timed study plan is replaced by self-paced Practice. No deadlines, day counters, scheduled milestones, or required daily duration. Choose a level and lesson freely. This supersedes earlier 200-day planning notes.

## Self-paced lesson expansion — 2026-09-15
64 lessons (34 Beginner, 16 Intermediate, 14 Advanced) and 56 grammar guides. Added demonstratives, muy/mucho, seguir + gerund, desde hace, purpose clauses with para que, and future conjecture. Each includes English translations, Taglish notes, key ideas, pro tips, and guided/written exercises. Cansado and cansada are both accepted in the new tiredness translation exercise. No deadlines added. All 13 tests pass; browser shows 64 lessons.

## Workplace Spanish

Open Library → Workplace Spanish for 62 customer-care, empathy, technical-support, billing, resolution, and regional-communication lessons. Includes 62 original bilingual dialogues, 186 phrases with usage tips, 32 vocabulary entries, browser speech audio, hide-the-agent role-play, and model-based written recall. Each module links to a guided lesson and the existing saved review flow. Regional notes distinguish common wording without treating a country as one uniform dialect. Scenarios are fictional; actual service policies must be verified.

The expanded library includes 10 bilingual-account lessons (call flow, discovery, consent, plain language, case notes, written support, quality coaching, and a mock call) and 16 filler/discourse-marker lessons. Open Filler guide for English meanings, placement patterns, register notes, work and daily-life examples, and professional alternatives. Casual practice uses Friend/You role-play.

CSR/TSR practice labs: 12 additional scenarios (six per role) include three handling steps, six bilingual dialogue turns, a next-action decision with explained feedback, written recall, and an open transfer task. These bring Workplace Spanish to 62 lessons and 186 phrase models.
