# PROJECT.md — Spanish From Zero to Fluency

## Implementation status — September 12, 2026

Selected design: **Option 1 — Sunlit Editorial**. The working local app is in `app/`.

- Implemented: 20 authored beginner lessons, 50 present-tense verbs, 12 grammar guides, and 50 bilingual practical phrases.
- Every lesson includes Taglish explanation, English meaning, key idea, pro tip, guided and written practice, answer explanations, and an optional speaking activity.
- Implemented: course navigation, searchable library, verb drills, browser-local completion/review scheduling, and mistake notebook.
- This is a React/Vite prototype following the selected Product Design starter. The proposed production stack and the full release criteria below remain the roadmap.
- Not yet implemented: accounts, cross-device sync, full A1–C1 courses, other verb tenses, offline downloads, official assessments, or automatic pronunciation grading.
- See `IMPLEMENTATION-PLAN.md` for the specification audit and `app/README.md` for setup and limitations.

---

## 1. Project Identity

**Working title:** Español Para Sa'yo  
**Tagline:** Learn Spanish step by step—from baby-level words to confident conversation.  
**Product type:** Responsive, installable web application (PWA)  
**Primary learner:** A Filipino/Tagalog-speaking student beginning with little or no spoken Spanish  
**Primary release:** A0, A1, and A2  
**Long-term path:** B1, B2, and C1 fluency tracks

Build a polished, interactive Spanish-learning web application that teaches Spanish from absolute zero. It must explain difficult ideas through simple Tagalog/Taglish, support those explanations with plain English, and slowly transition the learner toward understanding Spanish without translation.

The experience should feel like a patient private tutor—not a digital textbook. Assume the learner may understand some written Spanish but freezes when constructing sentences or speaking. Teach one small idea at a time, provide many examples, and let the learner practice immediately.

---

## 2. Core Goal

Help a learner progress through this sequence:

> **Hear it → Understand it → Copy it → Build it → Say it → Use it naturally**

The app succeeds when the learner can:

- Understand the meaning and purpose of each lesson in simple Taglish.
- Recognize common vocabulary and sentence patterns.
- Build original sentences instead of only memorizing phrases.
- Speak even when imperfect and recover when stuck.
- Hold practical conversations for school, work, travel, restaurants, and everyday life.
- Complete A1 and A2 CEFR-aligned checkpoints before advancing to intermediate levels.

---

## 3. Non-Negotiable Teaching Philosophy

### 3.1 Teach like the learner is starting from zero

- Never assume the learner already knows grammatical terms.
- Before using terms such as *conjugation*, *infinitive*, *gender*, *article*, *pronoun*, or *subjunctive*, explain what the term means in everyday language.
- Use short sentences and familiar situations.
- Teach the reason behind a rule before asking the learner to memorize it.
- Introduce only one major grammar idea per lesson.

### 3.2 Use the Taglish Bridge Method

Every new concept should follow this order:

1. **Simple Taglish explanation** — “Ano ba talaga ito?”
2. **Plain English explanation** — a second, clear explanation.
3. **Spanish pattern** — show the actual structure.
4. **Tagalog/English analogy** — connect it to something familiar.
5. **Guided examples** — easy to slightly harder.
6. **Common Filipino learner mistake** — explain why it happens.
7. **Mini-practice** — answer immediately.
8. **Speak aloud** — use the sentence without reading if possible.
9. **Real-life challenge** — apply it in a short situation.

Example teaching style:

> **Ser vs. estar**  
> Gamitin ang **ser** para sa identity, origin, at classification; **estar** para sa state at location ng tao o bagay. Hindi sapat ang permanent/temporary shortcut: Manila está en Filipinas uses estar even though the location is stable. Event locations commonly use ser: La clase es aquí.

### 3.3 Gradual immersion

- A0: 70% Taglish, 25% English, 5% Spanish instruction.
- A1: 50% Taglish, 25% English, 25% Spanish instruction.
- A2: 25% Taglish, 20% English, 55% Spanish instruction.
- B1+: Spanish becomes the default, with optional Taglish and English help buttons.
- Let the learner switch explanation language at any time.

### 3.4 Confidence before perfection

- Never shame mistakes.
- Give corrections using: **What you said → Better version → Simple reason → Try again**.
- Reward understandable communication, then improve accuracy.
- Offer hints before revealing answers.
- Use encouraging but specific feedback—not empty praise.

---

## 4. Audience and Personalization

During onboarding, ask:

- Current level: complete beginner / knows a few words / can understand but cannot speak / returning learner.
- Main goal: everyday conversation / school / work and customer service / travel / relationships / exam or formal study.
- Preferred support: mostly Tagalog / balanced Taglish-English / mostly English.
- Daily target: 5, 10, 15, 20, or 30 minutes.
- Preferred Spanish: Mexico/Latin America as the default; Spain as an optional variant.
- Skills needing the most help: listening, speaking, reading, writing, grammar, vocabulary, or confidence.

Use the answers to create a personalized learning path. Do not lock essential grammar behind a goal-specific track.

---

## 5. Curriculum Architecture

### A0 — Survival Foundations

**Outcome:** Recognize Spanish sounds and produce basic memorized sentences.

1. Spanish alphabet and sound system
2. Vowels: consistent `a, e, i, o, u` sounds
3. Important sounds: `ñ`, `ll`, `j`, `g`, `r`, `rr`, `h`, `que`, `qui`
4. Syllables, stress, written accents, and punctuation
5. Greetings, courtesy, introductions, and leave-taking
6. Subject pronouns and when Spanish drops them
7. Noun gender and singular/plural forms
8. Definite and indefinite articles
9. Numbers 0–100, age, phone numbers, time, and dates
10. Question words: qué, quién, cuál, cuándo, dónde, por qué, cómo, cuánto
11. Core sentence pattern: subject + verb + information
12. `ser`, `estar`, `tener`, `hay`, `llamarse`, `gustar`, `querer`, `necesitar`
13. Essential classroom and help phrases
14. First 250 high-frequency words
15. Mini conversations: meeting someone, ordering, asking price, and finding a restroom

### A1 — Beginner Communication

**Outcome:** Handle familiar daily situations using short connected sentences.

1. Regular present-tense verbs: `-ar`, `-er`, and `-ir`
2. High-frequency irregular verbs: ir, hacer, venir, decir, poder, poner, salir, saber, conocer, dar, ver
3. Ser vs. estar
4. Hay vs. está/están
5. Tener expressions
6. Gustar and gustar-like verbs
7. Adjective agreement and position
8. Possessive and demonstrative adjectives
9. Negatives and basic word order
10. Questions and personal information
11. Reflexive verbs and daily routines
12. Stem-changing verbs
13. `ir a + infinitive` for near future
14. Present progressive
15. Basic direct object pronouns
16. Commands for familiar daily situations
17. Vocabulary themes: family, home, campus, food, restaurant, work, clothing, weather, transportation, health, hobbies, shopping
18. Listening to slow, clear everyday speech
19. Writing messages, descriptions, and short personal paragraphs
20. 750–1,000 cumulative high-frequency words

### A2 — Elementary Independence

**Outcome:** Describe experiences, make plans, solve common problems, and sustain a short conversation.

1. Preterite: regular and essential irregular verbs
2. Imperfect: description, background, age, time, and repeated past actions
3. Preterite vs. imperfect using timeline/story analogies
4. Present perfect and regional usage notes
5. Direct and indirect object pronouns
6. Double object pronouns and placement
7. Por vs. para
8. Comparatives and superlatives
9. Formal and informal commands
10. Future expressions and introduction to the simple future
11. Conditional for polite requests and imagined situations
12. Relative words: que, quien, donde
13. Indefinite and negative expressions
14. Se constructions: accidental se, impersonal se, and passive se introductions
15. Introduction to the present subjunctive through wishes, needs, recommendations, and emotions
16. Connectors: primero, luego, entonces, aunque, porque, por eso, sin embargo
17. Storytelling, giving directions, describing symptoms, making appointments, handling customer requests, and travel problems
18. Listening at controlled natural speed
19. Writing emails, stories, requests, and opinions
20. 1,500–2,000 cumulative words

### B1 — Intermediate Conversation

Include a structured future track covering narration across past tenses, expanded subjunctive, future and conditional, commands, pronoun fluency, longer listening, opinions, workplace conversations, and spontaneous role-play.

### B2 — Independent Fluency

Include nuanced tense choice, advanced connectors, idioms, authentic media, debate, professional communication, regional variation, extended writing, and conversation at natural speed.

### C1 — Advanced Fluency

Include register, tone, cultural nuance, persuasive speaking, academic/professional writing, fast native media, idiomatic language, error refinement, and domain-specific vocabulary.

Do not claim that completing lessons alone guarantees fluency. Explain that real fluency also requires repeated listening, speaking, correction, and use with people.

---

## 6. Complete Grammar and Verb System

Create a searchable **Grammar Map** organized by both level and topic.

### Grammar categories

- Alphabet, pronunciation, syllables, stress, and accents
- Articles, noun gender, number, and agreement
- Subject, direct object, indirect object, reflexive, possessive, demonstrative, relative, and interrogative pronouns
- Adjectives, placement, agreement, comparison, and superlatives
- Adverbs and common adverbial phrases
- Prepositions, including por and para
- Conjunctions and sentence connectors
- Negation and question formation
- Word order and personal `a`
- Indicative, imperative, conditional, and subjunctive moods
- Present, progressive, preterite, imperfect, perfect, future, conditional, past perfect, and advanced compound tenses
- Passive voice, impersonal expressions, and uses of `se`
- Reported speech and sequence of tenses
- Diminutives, augmentatives, idioms, register, and regional usage

### Verb Lab

Provide:

- Search by Spanish verb or English meaning.
- Infinitive, gerund, and past participle.
- Regular/irregular and stem-change labels.
- Complete conjugation tables by mood and tense.
- Color-coded stems and endings.
- Pronunciation audio for important forms.
- Plain Taglish explanation of when each tense is used.
- At least three natural example sentences per tense, with translations hidden by default.
- “Compare” mode for confusing verbs such as ser/estar, saber/conocer, pedir/preguntar, traer/llevar, and quedar/quedarse.
- Conjugation drills that emphasize forms the learner repeatedly misses.
- A saved “Difficult Verbs” list.

---

## 7. Lesson Template

Every lesson must contain:

1. **Can-do goal** — “After this lesson, kaya mong…”
2. **Warm-up recall** — two or three prior questions.
3. **Real-life hook** — a situation the learner recognizes.
4. **Baby-step explanation** — Taglish first.
5. **English explanation** — concise and optional.
6. **Pattern box** — clear formula with color coding.
7. **Analogy** — familiar Filipino or everyday comparison.
8. **Examples** — Spanish, natural English, and natural Tagalog meaning.
9. **Pronunciation practice** — playable audio and syllable breakdown.
10. **Common mistakes** — especially Tagalog/English transfer errors.
11. **Guided practice** — hints available.
12. **Independent practice** — no immediate translation.
13. **Listening check** — replay at 0.75×, 1×, and natural speed.
14. **Speaking check** — record, replay, and compare.
15. **Mini role-play** — practical conversation.
16. **Exit quiz** — five varied questions.
17. **Quick recap** — only three ideas worth remembering.
18. **Classroom-ready answer** — a simple explanation the learner could say aloud.
19. **Next review date** — generated through spaced repetition.

Lesson length: 5–12 minutes. Break large topics into multiple lessons.

---

## 8. Core Learning Modes

### Learn

Guided course path with level map, units, lessons, checkpoints, and visible prerequisites.

### Practice

- Multiple choice
- Fill in the blank
- Sentence building from word tiles
- Translation in both directions
- Match audio to meaning
- Dictation
- Error correction
- Verb conjugation
- Timed vocabulary recall
- Free writing with guided feedback

### Speak

- Listen-and-repeat pronunciation drills
- Minimal-pair and difficult-sound practice
- Shadowing mode with transcript highlighting
- Record and replay
- Speech-to-text comparison when browser support is available
- Daily one-minute speaking prompt
- Confidence mode that ignores minor errors until the response is complete

### Conversation Simulator

Branching role-plays for:

- Meeting a classmate
- Introducing family
- Ordering at a restaurant
- Working as a restaurant server
- Explaining buffet instructions and allergies
- Shopping and bargaining
- Asking for directions
- Taking transportation
- Hotel check-in
- Making a haircut or medical appointment
- Campus conversation
- Job interview
- Customer support
- Travel emergencies

Each simulation must offer three modes:

1. **Coach mode:** suggestions and translations visible.
2. **Challenge mode:** hints only when requested.
3. **Immersion mode:** Spanish only, feedback after the scene.

### Review

- Spaced-repetition flashcards
- Mistake notebook
- Weak-skill review queue
- Daily mixed review
- Weekly mastery check
- “I keep forgetting this” button that increases review frequency

### Stories and Listening

- Comprehensible mini-stories by level
- Dialogue audio with transcripts
- Line-by-line translation toggle
- Slow and natural audio
- Prediction questions before revealing the next scene
- Cultural notes that avoid stereotypes

---

## 9. Feedback Rules

For incorrect answers, never show only a red X. Display:

- The learner’s answer.
- The corrected answer.
- What part was already correct.
- One simple Taglish reason.
- A small contrast example.
- A “Try a similar question” action.

Example:

> **You wrote:** Yo soy cansado.  
> **Better:** Yo estoy cansado.  
> **Why:** Temporary feeling ang “tired,” kaya **estar** ang gamit. Think of it as your current status, not your identity.  
> **Compare:** Soy trabajador = I am hardworking. Estoy cansado = I am tired right now.

Accept valid regional alternatives. Do not mark a correct Latin American form wrong because a Spain variant is expected, or vice versa.

---

## 10. Progress and Mastery System

- XP may encourage consistency but must not replace real mastery.
- Track reading, writing, listening, speaking, vocabulary, grammar, and conversation separately.
- Show CEFR can-do statements, not just a vague percentage.
- A topic is “mastered” only after successful recall on different days and in more than one exercise format.
- Use spaced intervals such as same day, 1 day, 3 days, 7 days, 14 days, and 30 days, adapting to performance.
- Maintain a mistake notebook grouped by rule and recurring error.
- Allow learners to test out of familiar units.
- Include A1 and A2 assessments with vocabulary, grammar, reading, listening, writing, and speaking sections.
- Generate a shareable completion summary, while clearly stating it is not an official CEFR certification.

Dashboard cards:

- Today’s lesson
- Due reviews
- Continue course
- Weekly goal
- Skill radar
- Words learned
- Difficult verbs
- Speaking streak
- Recent mistakes
- Next CEFR milestone

---

## 11. UX and Visual Direction

Create a warm, modern, mobile-first interface. It should feel friendly and focused, not childish.

- Clear navigation: **Home, Learn, Practice, Speak, Stories, Verb Lab, Progress**.
- One primary action per screen.
- Large readable typography and generous spacing.
- Calm palette inspired by sunlight, terracotta, ocean blue, and cream.
- Use cards, timelines, progress rings, and restrained animations.
- Avoid excessive gradients, glassmorphism, confetti, and cartoon clutter.
- Provide light and dark modes.
- Use accessible color contrast; never rely on color alone for correctness.
- Full keyboard navigation, visible focus states, semantic HTML, and screen-reader labels.
- Responsive from 320 px mobile width through desktop.
- Installable PWA with offline access to downloaded lessons and reviews.

Important screens:

1. Welcome/onboarding
2. Placement check
3. Personalized dashboard
4. CEFR course map
5. Lesson player
6. Practice session
7. Speaking studio
8. Conversation simulator
9. Verb Lab
10. Grammar Map
11. Story/listening reader
12. Mistake notebook
13. Progress and assessment report
14. Settings and accessibility

---

## 12. Recommended Technical Stack

Use a maintainable modern stack:

- **Framework:** Next.js with TypeScript and App Router
- **Styling:** Tailwind CSS
- **Components:** accessible primitives such as shadcn/ui or Radix UI
- **Database/auth:** Supabase (PostgreSQL, authentication, and row-level security)
- **Validation:** Zod
- **Forms:** React Hook Form
- **State/data:** server components where appropriate; TanStack Query only for client-side server state that needs it
- **Audio:** Web Audio API / HTML audio
- **Speech:** browser Speech Recognition as progressive enhancement; graceful fallback to record-and-replay
- **PWA/offline:** service worker and cached lesson bundles
- **Testing:** Vitest, React Testing Library, Playwright, and accessibility checks
- **Deployment:** Vercel-compatible configuration

Do not require paid AI APIs for the core app. The curriculum, exercises, review engine, audio playback, and progress tracking must work without generative AI. If an AI conversation coach is added, make it optional, provider-agnostic, rate-limited, and protected by a server-side API route. Never expose secret keys to the browser.

---

## 13. Suggested Data Model

Create normalized, extensible entities for:

- `users`
- `learner_profiles`
- `courses`
- `levels`
- `units`
- `lessons`
- `lesson_sections`
- `grammar_topics`
- `vocabulary_items`
- `verbs`
- `verb_forms`
- `examples`
- `audio_assets`
- `exercises`
- `exercise_choices`
- `user_responses`
- `lesson_progress`
- `skill_mastery`
- `review_items`
- `mistake_entries`
- `speaking_attempts`
- `conversation_scenarios`
- `conversation_turns`
- `assessments`
- `assessment_attempts`
- `achievements`
- `user_settings`

Every curriculum item should support:

- CEFR level
- skill category
- difficulty
- prerequisites
- Spanish content
- English meaning
- Tagalog/Taglish explanation
- regional variant notes
- tags
- version/status

Protect all user-specific rows with ownership-based row-level security.

---

## 14. Content Architecture

- Store lessons and exercise definitions as structured content, not giant hard-coded JSX components.
- Support MDX or JSON lesson blocks with validated schemas.
- Separate curriculum content from presentation logic.
- Give every lesson, word, grammar rule, and exercise a stable ID.
- Make content searchable and easy to edit without changing application code.
- Seed the project with at least:
  - complete A0 course outline,
  - three fully authored A0 units,
  - 20 polished lessons,
  - 300 vocabulary items,
  - 50 common verbs,
  - 250 varied exercises,
  - 10 conversation scenarios,
  - 10 listening mini-dialogues,
  - one A0 checkpoint and one A1 diagnostic sample.
- Do not fill the app with meaningless placeholder text.

---

## 15. Exercise Quality Rules

- Do not test a form before teaching it.
- Use natural Spanish, not awkward word-for-word translations.
- Explain when literal translation would sound unnatural.
- Randomize choices without changing the correct answer.
- Avoid obviously silly distractors; wrong choices should represent realistic errors.
- Permit accents through an on-screen Spanish keyboard.
- Treat missing accents as configurable: learning mode may warn; formal assessment should score accurately.
- Let learners hear every Spanish example.
- Include both recognition and production tasks.
- Recycle vocabulary across lessons and contexts.
- Add short cumulative reviews every 3–5 lessons.

---

## 16. Safety, Privacy, and Reliability

- Collect only necessary profile and learning data.
- Make microphone permission optional and explain why it is requested.
- Allow users to delete recordings and their account data.
- Do not make medical, legal, immigration, or emergency claims during role-play.
- Sanitize user content and validate all server inputs.
- Apply rate limits to authentication and optional AI endpoints.
- Include loading, empty, offline, and error states.
- Never lose completed lesson progress after a temporary network failure.

---

## 17. MVP Scope

### Must build

- Responsive landing and onboarding
- Email/password or magic-link authentication
- A0–A2 curriculum map, with initial authored content concentrated in A0
- Lesson player using the full lesson template
- Exercise engine with at least six activity types
- Audio playback and record/replay speaking practice
- Verb Lab starter set
- Grammar Map
- Adaptive review queue
- Mistake notebook
- Progress dashboard
- Coach/challenge conversation simulations using authored branching content
- PWA installation and basic offline lessons
- Accessibility and automated tests for critical flows

### Later releases

- Fully authored A1/A2 libraries
- AI conversation coach
- Teacher/classroom dashboard
- Community conversation rooms
- Human tutor marketplace
- Official assessment partnerships
- B1–C1 curriculum
- Native mobile apps

---

## 18. Build Phases

### Phase 1 — Foundation

Set up the application, design tokens, responsive layout, authentication, database, content schemas, seed pipeline, and automated checks.

### Phase 2 — Learning Core

Build course map, lesson player, exercise engine, saved progress, answer feedback, and first 20 A0 lessons.

### Phase 3 — Memory and Fluency

Add spaced repetition, mistake notebook, Verb Lab, listening player, speaking record/replay, and authored role-play engine.

### Phase 4 — Assessment and Polish

Add dashboards, CEFR checkpoints, offline behavior, accessibility review, analytics, content QA, and performance optimization.

After each phase, produce a working, testable build. Do not wait until the final phase to connect the UI to real data.

---

## 19. Acceptance Criteria

The project is ready for its first release when:

- A new learner can create an account and receive a personalized path.
- The learner can complete a lesson from explanation through exit quiz on mobile.
- Progress persists after sign-out and across devices.
- Reviews are scheduled based on learner performance.
- Incorrect answers receive specific Taglish feedback.
- The learner can search a verb and practice its forms.
- The learner can record and replay a speaking attempt without granting permanent microphone access.
- At least one complete real-life conversation can be finished in coach and challenge modes.
- Offline-supported lessons clearly show download state and function without a connection.
- Keyboard and screen-reader users can complete the main learning flow.
- No critical console errors, broken routes, exposed credentials, or fake buttons remain.
- Automated tests cover authentication, lesson completion, progress persistence, review scheduling, and core exercise scoring.

---

## 20. Instructions for the Coding Agent

1. Begin by auditing any existing repository, package files, and design system. Preserve working code and avoid unnecessary rewrites.
2. Create a short implementation plan and proposed folder structure before large edits.
3. Implement the MVP in vertical slices: database/content → UI → interaction → persistence → tests.
4. Use real seeded lesson content so every completed feature can be evaluated immediately.
5. Keep components small, typed, accessible, and reusable.
6. Never expose credentials or place secrets in committed files.
7. Add `.env.example`, setup instructions, database migration/seed instructions, and test commands.
8. Run linting, type checks, tests, and a production build before declaring completion.
9. Test the key flow in a real browser at mobile and desktop sizes.
10. Document known limitations honestly.
11. When a product choice is unclear, select the simplest option consistent with this specification and document the assumption.
12. Do not reduce this into a static flashcard demo. The central experience is explanation, guided construction, speaking, real-life use, correction, and long-term review.

---

## 21. Definition of a Great Lesson

A great lesson leaves the learner thinking:

> “Ah, iyon pala iyon. Kaya ko palang gumawa ng sarili kong sentence—and kaya kong sabihin out loud.”

The final product should make Spanish feel understandable, practical, and achievable while still providing the structured grammar and deliberate practice needed for real proficiency.


## Implemented expansion — September 14, 2026
- 38 lessons organized into Beginner (26), Intermediate (6), and Advanced (6).
- 30 grammar guides including indefinite articles, pretérito indefinido, imperfect, past contrast, perfect tenses, subjunctive, and hypothetical sentences.
- 50 present-tense verbs; 12 core verbs have six additional tenses with conjugation drills.
- 6 stories and 6 conversations, two per difficulty in each format, with English translations, vocabulary, Taglish teaching notes, tips, pro tips, and comprehension feedback.
- Reading completion persists on this browser. Intermediate/advanced writing and nonpresent conjugation drills require correct accents.
- Scope: focused learning tracks, not a complete advanced fluency curriculum or certified CEFR assessment.

## Further lessons implemented — 2026-09-14
50 lessons now available: 30 Beginner, 10 Intermediate, 10 Advanced; 42 grammar guides. Added time, comparisons, weather, reasons, progressive, por/para, commands, future time clauses, relative clauses, reported speech, and impersonal se. Earlier progress IDs are preserved. All 12 automated tests and lint pass; browser verified updated counts and the new time lesson.

## Dictionary implemented
Library now includes a 70-entry local bilingual dictionary, conjugated-form search, noun gender, examples, learning notes, browser pronunciation, and external SpanishDictionary.com lookup links. External lookup is not a live API integration.

## Latest curriculum increment
56 lessons and 48 grammar guides are now implemented. Added two lessons per difficulty: abilities/frequency, recent actions/double pronouns, and past counterfactuals/perfect subjunctive. Includes bilingual examples, Taglish explanations, and practice with answer reasoning.

## 200-day learning tools — 2026-09-15
Implemented 58 lessons / 50 guides, Previous/Next lesson buttons and touch navigation strip, one-line takeaways, regular/irregular verb cheat sheets with memory cues, and a selectable 200-day study schedule. Focus is daily practice and teacher feedback; no guaranteed fluency date or automatic certification. New cheat-sheet conjugation reference: https://www.rae.es/diccionario-estudiante/docs/conjugaciones-verbales.pdf


## Current preference — 2026-09-15
The timed study plan is replaced by self-paced Practice. No deadlines, day counters, scheduled milestones, or required daily duration. Choose a level and lesson freely. This supersedes earlier 200-day planning notes.

## Latest curriculum
64 self-paced lessons and 56 grammar guides. Six additional topics: demonstratives, muy/mucho, continued actions, duration, purpose clauses, and future conjecture. Two new lessons per difficulty, with translated examples and explained practice.
