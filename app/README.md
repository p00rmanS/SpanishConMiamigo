# Español Para Sa’yo

A self-paced Spanish course platform for bilingual learners. It combines structured, leveled courses
(in the spirit of Coursera and Udemy), short interactive lessons with spaced review (in the spirit of
Duolingo), and reference tools such as a dictionary and verb conjugator (in the spirit of
SpanishDict). Every lesson offers English and Taglish explanations.

## Run

Node.js 20 or newer and npm are required.

```sh
npm install
npm run dev        # http://localhost:5173
npm run lint
npm test           # builds first, then runs all tests
npm run build
```

`npm run format` applies Prettier. CI (`.github/workflows/ci.yml`) runs lint, tests and
`npm audit --audit-level=high`.

## What is in the app

| Area | What you get |
| --- | --- |
| **Courses** (trail map or list view) | *Spanish Foundations* (A1 to C1, 230 lessons in 5 levels, including 55 deep-dive lessons, 17 picture-vocabulary "little learner" lessons and 12 word-power "deep dive" lessons with full conjugation tables), *Grammar Toolkit* (200 lessons: verbs, adjectives, connectors, a lesson per tense and regular/irregular/changing group, and themed noun packs), *Bilingual Career Spanish* (customer care, technical support, billing, 3 levels, 76 lessons), *Spanish for Daily Life* (56 lessons) |
| **Lesson player** | Learn → choose → build the sentence from a word bank → write → listen → speak, with audio, a generated pronunciation guide, pattern chips, conjugation and memory support, a pro tip, a common-mistake note, immediate feedback and XP |
| **Checkpoints** | A 10-question quiz per level, best score saved, plus a placement check that suggests a starting level |
| **Review** | Spaced repetition (boxes 0–5), a mistake notebook and a due-count badge |
| **Dictionary** | About 1,150 entries (verbs, nouns, 343 adjectives, connectors and more) with Spanish ↔ English ↔ Tagalog search, examples and audio; conjugated forms are searchable |
| **Verb conjugator** | 486 verbs conjugated by a rules engine in every tense (indicative, subjunctive, imperative, perfect tenses), irregular forms highlighted, voseo, Taglish guides, search by any conjugated form |
| **Conjugation drill** | Random (verb, tense, person) questions with XP; filter by regular, irregular, stem-changing, spelling-change or reflexive verbs |
| **Adjectives and connectors** | 343 adjectives with four forms, shortened forms and superlatives; 68 connectors with the mood each takes |
| **Reading room** | Stories and conversations with line-by-line translation and comprehension checks |
| **Practice lab** | Conjugation drills and scripted customer-call simulations |
| **Progress** | Lessons, XP, days practiced, level checkpoints, review stages |

## Design decisions

- **Self-paced with a daily streak.** There are no deadlines or required schedules. A daily streak
  counts consecutive practice days (today does not break it until the day ends) and never locks
  content.
- **Honest measurement.** Completion is not a fluency score. Checkpoints and the placement check are
  study aids, not CEFR certification. Speaking is self-assessed and recordings never leave the tab.
- **Bilingual support.** Explanations can be shown in English, Taglish or both (Settings).
- **No accounts, no API keys.** Progress is stored in `localStorage`.

## Project layout

```
src/
  App.jsx                  shell, routing, theme
  pages/                   Home, Courses, LessonPlayer, Quiz, Review, Library, Progress, Practice
  components/              shared UI (progress bars, audio, recorder, dialog, settings)
  lib/
    store-core.js          pure progress logic (XP, review, backup, migration) - unit tested
    store.js               React binding (useSyncExternalStore) and persistence
    router.js              hash router (deep links such as #/lesson/hello)
    speech.js              text-to-speech helper
    pronounce.js           Spanish respelling and syllable stress generator
  course.js                courses → levels → units → lessons, quizzes, placement
  toolkit-lessons.js       generates the Grammar Toolkit lessons from the word lists and engine
  verbs-data.js, adjectives-data.js, conjunctions-data.js   the word lists
  lib/conjugate.js         the conjugation engine (irregulars, stem and spelling changes)
  lib/adjectives.js        adjective agreement and superlatives
  curriculum.js            unit structure for Spanish Foundations
  content.js               merges every lesson source into one list
  foundations-*.js         A1–C1 lesson rows
  career-expansion.js      career lessons; workplace-support.js holds their Taglish and tips
  vocabulary-data.js       dictionary vocabulary
  ui.css                   design tokens, shell, pages, lesson player (loaded last)
  styles.css, *.css        styles for the library and practice screens
tests/                     node:test suites for content, scoring, storage, routing and hosting
```

### Adding a lesson

1. Add a row to `foundations-a.js`, `foundations-b.js` or `foundations-c.js` (the row layout is
   documented on `buildLesson` in `course-expansion.js`).
2. List its id in the right unit in `curriculum.js`.
3. Run `npm test`. Tests fail if a lesson is missing from the curriculum, repeats a sentence, has a
   generic Taglish explanation, or has an invalid answer key.

Career lessons are added in `career-expansion.js`, with their Taglish line, key idea and tip in
`workplace-support.js`.

## Data and privacy

Progress lives in `localStorage` under `espanol-store-v2` (earlier `espanol-progress-v1` data is
migrated automatically). Settings → *Download backup* exports every key as JSON; *Restore backup*
validates the file before replacing anything. Progress does not sync between devices.

## Hosting

`netlify.toml` builds the app and serves `dist/client` with an SPA fallback. The build also leaves
`dist/server/index.js` and `dist/.openai/hosting.json` for the Sites handoff, which
`tests/sites-worker.test.mjs` checks.

## Known limits

- Foundations B2 and C1 are focused lessons rather than a full syllabus.
- Browser text-to-speech depends on installed voices; there is no automatic pronunciation scoring.
- No offline mode or installable PWA yet, and no accounts or cross-device sync.
- Scenario amounts and policies in the career course are fictional; verify real policies.

Terminology and conjugation reference: [RAE conjugation tables](https://www.rae.es/diccionario-estudiante/docs/conjugaciones-verbales.pdf).
Reading texts and teaching explanations are original.
