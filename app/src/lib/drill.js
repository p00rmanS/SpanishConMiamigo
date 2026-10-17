// Conjugation drills: random (verb, tense, person) questions with the engine's answer.
import { conjugate, describeVerb, allForms, PERSONS } from './conjugate.js';
import { verbList } from '../verbs-data.js';
import { shuffle } from './random.js';

export const DRILL_TENSES = [
  ['indicative.present', 'Present'],
  ['indicative.preterite', 'Preterite'],
  ['indicative.imperfect', 'Imperfect'],
  ['indicative.future', 'Future'],
  ['indicative.conditional', 'Conditional'],
  ['indicative.presentPerfect', 'Present perfect'],
  ['subjunctive.present', 'Present subjunctive'],
  ['subjunctive.imperfect', 'Imperfect subjunctive'],
  ['imperative.affirmative', 'Imperative'],
];

export const VERB_SETS = [
  ['all', 'All verbs'],
  ['common', 'Top 120 verbs'],
  ['irregular', 'Irregular'],
  ['stem', 'Stem-changing'],
  ['spelling', 'Spelling changes'],
  ['regular', 'Regular'],
  ['reflexive', 'Reflexive'],
];

const cache = new Map();
export function verbKind(v) {
  if (!cache.has(v.infinitive)) cache.set(v.infinitive, describeVerb(v.infinitive, v.flags));
  return cache.get(v.infinitive);
}

export function verbsForSet(setId) {
  switch (setId) {
    case 'common':
      return verbList.slice(0, 120);
    case 'irregular':
      return verbList.filter((v) => verbKind(v).irregular);
    case 'stem':
      return verbList.filter((v) => v.flags.some((f) => /^[eiou]-/.test(f)));
    case 'spelling':
      return verbList.filter((v) => verbKind(v).labels.includes('Spelling change'));
    case 'regular':
      return verbList.filter((v) => verbKind(v).labels.includes('Regular'));
    case 'reflexive':
      return verbList.filter((v) => /se$/.test(v.infinitive));
    default:
      return verbList;
  }
}

// Imperative persons: tú, usted, nosotros, vosotros, ustedes -> indexes into PERSONS.
const IMPERATIVE_TO_PERSON = [1, 2, 3, 4, 5];

export function buildDrill({
  verbs,
  tenses,
  count = 10,
  includeVosotros = true,
  random = Math.random,
}) {
  const pool = verbs.length ? verbs : verbList;
  const tenseKeys = tenses.length ? tenses : ['indicative.present'];
  const items = [];
  let guard = 0;
  while (items.length < count && guard < count * 20) {
    guard += 1;
    const v = pool[Math.floor(random() * pool.length)];
    const tenseKey = tenseKeys[Math.floor(random() * tenseKeys.length)];
    const r = conjugate(v.infinitive, v.flags);
    const [group, tense] = tenseKey.split('.');
    const forms = group === 'imperative' ? r.imperative[tense] : r[group][tense];
    const slots = forms
      .map((_, i) => i)
      .filter((i) => (includeVosotros ? true : group === 'imperative' ? i !== 3 : i !== 4));
    // The imperative has no yo form; its slots already skip it.
    const slot = slots[Math.floor(random() * slots.length)];
    const personIndex = group === 'imperative' ? IMPERATIVE_TO_PERSON[slot] : slot;
    const answer = forms[slot];
    if (
      items.some(
        (i) => i.verb.infinitive === v.infinitive && i.tenseKey === tenseKey && i.slot === slot,
      )
    )
      continue;
    items.push({
      verb: v,
      tenseKey,
      slot,
      pronoun: PERSONS[personIndex],
      answer,
      row: forms,
      group,
    });
  }
  return items;
}

// Search verbs by infinitive, English, Tagalog, or any conjugated form ("fui" finds ser and ir).
let formIndex = null;
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function buildFormIndex() {
  formIndex = new Map();
  for (const v of verbList) {
    for (const f of allForms(v.infinitive, v.flags)) {
      const key = norm(f);
      if (!formIndex.has(key)) formIndex.set(key, new Set());
      formIndex.get(key).add(v.infinitive);
    }
  }
}

export function searchVerbs(query, setId = 'all') {
  const pool = verbsForSet(setId);
  const q = norm(query);
  if (!q) return pool;
  if (!formIndex) buildFormIndex();
  const byForm = formIndex.get(q) ?? new Set();
  const scored = [];
  for (const v of pool) {
    const inf = norm(v.infinitive);
    let score = -1;
    if (inf === q) score = 0;
    else if (inf.startsWith(q)) score = 1;
    else if (byForm.has(v.infinitive)) score = 2;
    else if (inf.includes(q)) score = 3;
    else if (norm(v.english).includes(q) || norm(v.tagalog).includes(q)) score = 4;
    if (score >= 0) scored.push([score, v]);
  }
  return shuffle(scored, () => 0)
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => v);
}
