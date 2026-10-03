# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

User preference: learning is self-paced. Do not add deadlines, day-count goals, mandatory schedules, or timed fluency targets. This supersedes the earlier 200-day request.

User content preference: include familiar children's stories from Mexican and Spanish-speaking storytelling traditions, with learner-friendly Spanish and bilingual support. Clearly distinguish traditional adaptations from original stories and identify regional context without implying that every speaker knows a tale.

User learning focus: practical bilingual customer service, technical support, billing, empathy, troubleshooting, and resolution. Teach Spanish phrases and technical vocabulary with visible English translations, pro tips, example conversations, and active response practice. Explain Mexico, broader Latin America, and Spain usage without stereotypes; keep learning self-paced.

User requested expanded bilingual-account training and Spanish fillers with sentence placement, English meanings, pro tips, and daily-life examples. Distinguish hesitation fillers from useful discourse markers and explain casual versus professional usage.

User reading preference: include educational and history lessons, longer bilingual conversations, childhood stories, and horror fiction. Clearly identify fiction, historical sources, and original versus traditional stories; retain English translations and active comprehension practice.

User learning-support preference: every lesson and phrase should offer English translation, a pro tip, conjugation guidance, memory practice, and a Taglish explanation of how it is formed. Keep English available for learners who do not speak Tagalog. Show honest saved-progress charts without implying fluency or inventing learning history. Use inclusive learner-facing defaults rather than a hard-coded personal greeting.

Teach conjugations explicitly in Practice lab: preterite, imperfect, fui/iba, estar, gerunds, and object pronouns. Include sentence production, English and Taglish reasoning, and self-paced scripted BPO simulations with honest scoring and locally saved completion.

User daily-learning preference: show a dated verb or vocabulary window once per local calendar day, with a persistent reopen control, English meaning, Taglish construction, conjugations where applicable, memory practice, and pro tips. Keep learning self-paced.
