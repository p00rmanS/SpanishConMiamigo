// More Grammar Toolkit lessons: one set per tense (built on authored sentences and the
// conjugation engine) and noun vocabulary packs grouped by theme.
import { conjugate, conjugatePlain, PERSONS, IMPERATIVE_PERSONS } from './lib/conjugate.js';
import { TENSE_INFO } from './tense-info.js';
import { TENSE_SENTENCES, TENSE_GROUPS_INFO } from './tense-sentences.js';
import { verbList } from './verbs-data.js';
import { vocabulary } from './vocabulary-data.js';

const flagsOf = (inf) => verbList.find((v) => v.infinitive === inf)?.flags ?? [];
const unique = (items) => [...new Set(items)];

const TENSE_TITLES = {
  'indicative.present': ['Present tense', 'present', 'Beginner', 'A1'],
  'indicative.preterite': ['Preterite', 'preterite', 'Beginner', 'A2'],
  'indicative.imperfect': ['Imperfect', 'imperfect', 'Intermediate', 'A2–B1'],
  'indicative.future': ['Future', 'future', 'Beginner', 'A2'],
  'indicative.conditional': ['Conditional', 'conditional', 'Intermediate', 'B1'],
  'indicative.presentPerfect': ['Present perfect', 'present perfect', 'Intermediate', 'B1'],
  'indicative.pluperfect': ['Past perfect', 'past perfect', 'Intermediate', 'B1–B2'],
  'subjunctive.present': ['Present subjunctive', 'present subjunctive', 'Advanced', 'B1–B2'],
  'subjunctive.imperfect': ['Imperfect subjunctive', 'imperfect subjunctive', 'Advanced', 'B2'],
  'imperative.affirmative': ['Commands', 'imperative', 'Intermediate', 'A2–B1'],
};

function tenseForms(inf, tenseKey) {
  const r = conjugate(inf, flagsOf(inf));
  const [group, tense] = tenseKey.split('.');
  return group === 'imperative' ? r.imperative.affirmative : r[group][tense];
}

function tensePlain(inf, tenseKey) {
  const r = conjugatePlain(inf);
  const [group, tense] = tenseKey.split('.');
  return group === 'imperative' ? r.imperative.affirmative : r[group][tense];
}

function tenseLesson(tenseKey, groupKey, entries, number) {
  const [title, shortName, track, level] = TENSE_TITLES[tenseKey];
  const info = TENSE_INFO[tenseKey.startsWith('imperative') ? 'imperative' : tenseKey];
  const groupInfo = TENSE_GROUPS_INFO[groupKey];
  const [sentence, translation, inf, person] = entries[0];
  const forms = tenseForms(inf, tenseKey);
  const isImperative = tenseKey.startsWith('imperative');
  const people = isImperative ? IMPERATIVE_PERSONS : PERSONS;
  const row = forms.map((f, i) => `${people[i]} ${f}`).join(' · ');

  // Quiz: pick the verb of the second sentence so the question differs from the model.
  const [, , quizInf, quizPerson] = entries[1] ?? entries[0];
  const quizForms = tenseForms(quizInf, tenseKey);
  const answer = quizForms[quizPerson];
  const plain = tensePlain(quizInf, tenseKey)[quizPerson];
  const others = quizForms.filter((_, i) => i !== quizPerson);
  const wrong = unique([plain, ...others].filter((x) => x && x !== answer)).slice(0, 2);
  const verbs = unique(entries.map((e) => e[2]));
  const slug = tenseKey.replace('.', '-');
  const unit = title;

  return {
    id: `gen-tenses-${slug}-${groupKey}`,
    group: { course: 'toolkit', level: 'tenses', unit },
    title: `${title}: ${groupInfo.title}`,
    subtitle: verbs.join(', '),
    unit,
    track,
    level,
    goal: `Kaya mong gamitin ang ${shortName} sa ${groupInfo.title}.`,
    sentence,
    meaning: translation,
    sound: 'Listen to the model, then try at your own pace.',
    taglish: `${info.taglish} Halimbawa, ${inf}: ${row}.`,
    english: `${info.use} ${inf}: ${row}. Formed: ${info.formed}.`,
    pattern: [inf, shortName, forms[person]],
    key: `${title}: ${info.use}`,
    tip: groupInfo.tip,
    tipDetail: groupInfo.tipDetail,
    mistake: groupInfo.mistake,
    prompt: `Choose the ${people[quizPerson]} form of ${quizInf} in the ${shortName}.`,
    choices: [answer, ...wrong],
    answer,
    reason: `${quizInf}, ${shortName}, ${people[quizPerson]}: ${answer}. Open the verb page to see every form.`,
    writing: `Write in Spanish: ${translation}`,
    accepted: [sentence],
    reply: sentence,
    scene: `Say your own sentence in the ${shortName} with ${inf}.`,
    sceneHint: `Model: ${sentence} Change one detail and say it aloud.`,
    recap: [info.use, groupInfo.tip, `${sentence} = ${translation}`],
    examples: entries.slice(1).map(([s, t]) => [s, t]),
    refs: [
      ...verbs.map((v) => ({ label: v, path: '/verbs/' + v })),
      { label: 'Conjugation drill', path: '/drill' },
    ],
    // number keeps ids stable if more groups are added
    order: number,
  };
}

function buildTenseLessons() {
  const out = [];
  let n = 0;
  for (const [tenseKey, groups] of Object.entries(TENSE_SENTENCES)) {
    for (const [groupKey, entries] of Object.entries(groups)) {
      n += 1;
      out.push(tenseLesson(tenseKey, groupKey, entries, n));
    }
  }
  return out;
}

// ---------------------------------------------------------------- vocabulary packs
const THEMES = [
  ['People and family', 'amigo', 'gente'],
  ['Around the house', 'cocina', 'luz'],
  ['Food and drink', 'pan', 'plato'],
  ['Places in town', 'ciudad', 'biblioteca'],
  ['Time', 'día', 'tiempo'],
  ['Work and business', 'trabajo', 'ayuda'],
  ['Technology and support', 'contraseña', 'página'],
  ['Body and health', 'cabeza', 'gripe'],
  ['Travel and directions', 'boleto', 'camino'],
  ['Nature and animals', 'sol', 'flor'],
  ['Ideas and everyday life', 'vida', 'miedo'],
];

function vocabLesson(theme, pack, number) {
  // Skip examples that a hand-written lesson already uses as its model sentence.
  const first = pack.find((w) => w.example !== 'Me duele la cabeza.') ?? pack[0];
  const quiz = pack[number % pack.length];
  const meaning = (w) => w.meaning.split(';')[0].trim();
  const wrong = unique(
    pack
      .filter((w) => w.word !== quiz.word)
      .map(meaning)
      .filter((m) => m !== meaning(quiz)),
  ).slice(0, 2);
  const label = (w) => `${w.article ? w.article + ' ' : ''}${w.word}`;
  const list = pack.map((w) => `${label(w)} = ${w.meaning}`).join('; ');
  const tagalog = pack.map((w) => `${label(w)} = ${w.tagalog}`).join('; ');
  const unit = theme;
  return {
    id: `gen-vocabulary-${theme.toLowerCase().replace(/[^a-z]+/g, '-')}-${number}`,
    group: { course: 'toolkit', level: 'vocabulary', unit },
    title: `${theme} · ${number}`,
    subtitle: pack.map((w) => w.word).join(', '),
    unit,
    track: 'Beginner',
    level: 'A1–A2',
    goal: `Kaya mong gamitin ang ${pack.length} salita: ${pack.map((w) => w.word).join(', ')}.`,
    sentence: first.example,
    meaning: first.translation,
    sound: 'Listen to the model, then try at your own pace.',
    taglish: `Aralin ang noun kasama ng article (el o la). ${tagalog}.`,
    english: `Learn each noun with its article (el or la). In this pack: ${list}.`,
    pattern: [label(first), 'in a sentence'],
    key: 'Learn each noun with its article: el or la.',
    tip: 'Say the word inside a short sentence, not alone.',
    tipDetail:
      'The article tells you the gender, and gender decides the adjective ending: la casa blanca, el libro blanco.',
    mistake: 'Do not guess the gender from English: say el problema and la mano.',
    prompt: `What does “${label(quiz)}” mean?`,
    choices: [meaning(quiz), ...wrong],
    answer: meaning(quiz),
    reason: `${label(quiz)} means ${quiz.meaning}.`,
    writing: `Write in Spanish: ${first.translation}`,
    accepted: [first.example],
    reply: first.example,
    scene: `Make your own sentence with ${label(pack[1] ?? first)}.`,
    sceneHint: `Pack: ${pack.map((w) => w.word).join(', ')}. Use two words in one sentence.`,
    recap: [
      `${label(first)} = ${first.meaning}`,
      'Learn the article with the noun.',
      `${first.example} = ${first.translation}`,
    ],
    examples: pack.slice(1, 4).map((w) => [w.example, w.translation]),
    refs: pack.map((w) => ({
      label: w.word,
      path: '/library/dictionary?q=' + encodeURIComponent(w.word),
    })),
  };
}

function buildVocabularyLessons() {
  const nouns = vocabulary.filter((w) => w.type === 'Noun');
  const out = [];
  for (const [theme, start, end] of THEMES) {
    const a = nouns.findIndex((w) => w.word === start);
    const b = nouns.findIndex((w) => w.word === end);
    if (a < 0 || b < a) continue;
    const slice = nouns.slice(a, b + 1);
    for (let i = 0, n = 1; i < slice.length; i += 10, n++) {
      const pack = slice.slice(i, i + 10);
      if (pack.length >= 3) out.push(vocabLesson(theme, pack, n));
      else if (out.length) {
        // A tiny remainder joins the previous pack instead of becoming a lesson of its own.
        const prev = out.pop();
        const merged = slice.slice(i - 10, i + pack.length);
        out.push(vocabLesson(theme, merged, n - 1));
        void prev;
      }
    }
  }
  return out;
}

export const extraToolkitLessons = [...buildTenseLessons(), ...buildVocabularyLessons()];
