// The Grammar Toolkit course: lessons generated from the conjugation engine and the verb,
// adjective and connector lists, so every word in those lists is taught and drillable.
import { conjugate, conjugatePlain, PERSONS } from './lib/conjugate.js';
import { adjectiveForms } from './lib/adjectives.js';
import { verbKind } from './lib/drill.js';
import { verbList } from './verbs-data.js';
import { adjectiveList, ADJECTIVE_CATEGORIES } from './adjectives-data.js';
import { conjunctionList, CONJUNCTION_CATEGORIES, MOOD_LABELS } from './conjunctions-data.js';

const chunk = (items, size) => {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
};
const gloss = (english) => english.split(';')[0].trim();
const unique = (items) => [...new Set(items)];
const pickDistinct = (correct, candidates, count = 2) =>
  unique(candidates.filter((c) => c && c !== correct)).slice(0, count);

// ---------------------------------------------------------------- verbs
const ESSENTIAL = [
  'ser',
  'estar',
  'ir',
  'tener',
  'hacer',
  'poder',
  'decir',
  'ver',
  'dar',
  'saber',
  'querer',
  'venir',
  'poner',
  'salir',
  'traer',
  'conocer',
  'caer',
  'oír',
  'reír',
  'haber',
  'valer',
  'caber',
  'andar',
  'conducir',
];
const isReflexive = (v) => /(ar|er|ir|ír)se$/.test(v.infinitive);
const ending = (v) => v.infinitive.replace(/se$/, '').slice(-2).replace('í', 'i');
const hasFlag = (v, f) => v.flags.includes(f);
const kind = (v) => verbKind(v).labels;

const TENSE_CYCLE = [
  ['indicative.present', 'present'],
  ['indicative.preterite', 'preterite'],
  ['indicative.imperfect', 'imperfect'],
  ['indicative.future', 'future'],
];

const VERB_SETS = [
  {
    slug: 'regular-ar',
    unit: 'Regular -ar verbs',
    track: 'Beginner',
    level: 'A1',
    size: 8,
    match: (v) => !isReflexive(v) && kind(v).includes('Regular') && ending(v) === 'ar',
    english:
      'Regular -ar verbs share one pattern. Drop -ar and add -o, -as, -a, -amos, -áis, -an. In the preterite the endings are -é, -aste, -ó, -amos, -asteis, -aron.',
    taglish:
      'Isang pattern lang ang regular na -ar verbs. Tanggalin ang -ar at idagdag ang ending ng tao: -o, -as, -a, -amos, -áis, -an. Sa preterite: -é, -aste, -ó, -amos, -asteis, -aron.',
    key: 'One pattern covers hundreds of -ar verbs.',
    tip: 'Learn the endings once, then reuse them.',
    tipDetail:
      'If you can conjugate hablar, you can conjugate every verb in this pack the same way.',
    mistake: 'Drop the whole -ar before adding the ending: say hablo, not hablaro.',
  },
  {
    slug: 'regular-er-ir',
    unit: 'Regular -er and -ir verbs',
    track: 'Beginner',
    level: 'A1',
    size: 8,
    match: (v) => !isReflexive(v) && kind(v).includes('Regular') && ending(v) !== 'ar',
    english:
      'Regular -er and -ir verbs share most endings: -o, -es, -e, then -emos/-éis/-en for -er and -imos/-ís/-en for -ir. In the preterite both use -í, -iste, -ió, -imos, -isteis, -ieron.',
    taglish:
      'Halos pareho ang -er at -ir: -o, -es, -e. Magkaiba lang sa nosotros at vosotros: -emos/-éis (-er) at -imos/-ís (-ir). Sa preterite pareho: -í, -iste, -ió, -imos, -isteis, -ieron.',
    key: '-er and -ir differ only in nosotros and vosotros.',
    tip: 'Compare comemos with vivimos.',
    tipDetail:
      'Only the nosotros and vosotros present forms are different; everything else matches.',
    mistake:
      'Do not use -amos with -er or -ir verbs: comemos and vivimos, not comamos for the present.',
  },
  {
    slug: 'irregular-essentials',
    unit: 'The essential irregular verbs',
    track: 'Beginner',
    level: 'A1–A2',
    size: 4,
    match: (v) => ESSENTIAL.includes(v.infinitive),
    sort: (v) => ESSENTIAL.indexOf(v.infinitive),
    english:
      'These verbs are among the most common in Spanish and they break the regular patterns. Learn them as chunks, not by rule. Highlighted forms on each verb page show exactly where they differ.',
    taglish:
      'Ito ang mga pinakamadalas gamitin na verb at hindi sila sumusunod sa karaniwang pattern. Kabisaduhin bilang buong anyo. Sa verb page, naka-highlight ang mga anyong iba sa regular.',
    key: 'Memorize the irregular forms as whole words.',
    tip: 'Practice the yo form first.',
    tipDetail:
      'Many irregulars are only irregular in yo (tengo, hago, salgo, pongo) and regular elsewhere.',
    mistake: 'Do not regularize them: say tengo, not teno, and fui, not seré for the past.',
  },
  {
    slug: 'irregular-families',
    unit: 'Irregular verb families',
    track: 'Intermediate',
    level: 'A2–B1',
    size: 6,
    match: (v) =>
      !isReflexive(v) && kind(v).includes('Irregular') && !ESSENTIAL.includes(v.infinitive),
    english:
      'Many verbs are built on a base irregular verb plus a prefix: mantener, obtener and detener follow tener; proponer and suponer follow poner; predecir follows decir. Learn the base and you know the family.',
    taglish:
      'Maraming verb ang galing sa isang irregular na base at may unlapi: mantener, obtener, detener = tener; proponer, suponer = poner. Alam mo ang base, alam mo ang buong pamilya.',
    key: 'A prefix does not change the pattern of the base verb.',
    tip: 'Spot the base verb inside the word.',
    tipDetail:
      'Mantener = man + tener, so mantengo, mantuve and mantendré copy tengo, tuve and tendré.',
    mistake: 'Watch the accent in commands: ten but mantén, pon but propón.',
  },
  {
    slug: 'stem-e-ie',
    unit: 'Stem changes: e → ie',
    track: 'Intermediate',
    level: 'A2',
    size: 8,
    match: (v) =>
      !isReflexive(v) &&
      hasFlag(v, 'e-ie') &&
      !ESSENTIAL.includes(v.infinitive) &&
      !kind(v).includes('Irregular'),
    english:
      'In e → ie verbs the stressed e becomes ie in yo, tú, él and ellos, but not in nosotros or vosotros: pienso, piensas, piensa, pensamos, pensáis, piensan.',
    taglish:
      'Sa e → ie verbs, nagiging ie ang e sa yo, tú, él at ellos. Hindi nagbabago sa nosotros at vosotros. Isipin ang "boot": pienso, piensas, piensa, pensamos, pensáis, piensan.',
    key: 'The stem changes in yo, tú, él, ellos, not nosotros or vosotros.',
    tip: 'Draw a boot around the forms that change.',
    tipDetail: 'The change follows the stress: the stressed vowel is the one that changes.',
    mistake: 'Do not change nosotros: say pensamos, not pienstamos or piensamos.',
  },
  {
    slug: 'stem-o-ue',
    unit: 'Stem changes: o → ue',
    track: 'Intermediate',
    level: 'A2',
    size: 8,
    match: (v) =>
      !isReflexive(v) &&
      hasFlag(v, 'o-ue') &&
      !ESSENTIAL.includes(v.infinitive) &&
      !kind(v).includes('Irregular'),
    english:
      'In o → ue verbs the stressed o becomes ue in yo, tú, él and ellos: duermo, duermes, duerme, dormimos, dormís, duermen.',
    taglish:
      'Sa o → ue verbs, nagiging ue ang o sa yo, tú, él at ellos: duermo, duermes, duerme, dormimos, dormís, duermen. Pareho ang "boot" na pattern.',
    key: 'o → ue follows the same boot pattern as e → ie.',
    tip: 'Say the infinitive, then the yo form, and listen for the change.',
    tipDetail: 'Jugar (u → ue) is the only verb that changes u: juego, juegas, juega.',
    mistake: 'Do not change nosotros: dormimos, not duermimos.',
  },
  {
    slug: 'stem-e-i',
    unit: 'Stem changes: e → i',
    track: 'Intermediate',
    level: 'A2',
    size: 8,
    match: (v) =>
      !isReflexive(v) &&
      hasFlag(v, 'e-i') &&
      !ESSENTIAL.includes(v.infinitive) &&
      !kind(v).includes('Irregular'),
    english:
      'In e → i verbs (all -ir) the e becomes i in yo, tú, él and ellos, and again in the preterite él and ellos forms and in the gerund: pido, pedí, pidió, pidiendo.',
    taglish:
      'Sa e → i verbs (laging -ir), nagiging i ang e sa yo, tú, él at ellos; pati sa preterite ng él at ellos (pidió, pidieron) at sa gerund (pidiendo).',
    key: '-ir stem-changers also change in the preterite and gerund.',
    tip: 'Memorize yo, preterite él and gerund together.',
    tipDetail: 'Pedir: pido, pidió, pidiendo. Seguir: sigo, siguió, siguiendo.',
    mistake: 'Do not forget the preterite: pidió, not pedió.',
  },
  {
    slug: 'stem-other',
    unit: 'Stem changes: -ir verbs, u → ue and i → ie',
    track: 'Intermediate',
    level: 'A2–B1',
    size: 8,
    match: (v) =>
      !isReflexive(v) &&
      !kind(v).includes('Irregular') &&
      ((hasFlag(v, 'e-ie') && ending(v) === 'ir') ||
        hasFlag(v, 'u-ue') ||
        hasFlag(v, 'i-ie') ||
        (hasFlag(v, 'o-ue') && ending(v) === 'ir')) &&
      !hasFlag(v, 'e-i'),
    english:
      '-ir verbs with e → ie or o → ue change twice: the boot change in the present (siento, duermo) and a weaker change in the preterite él/ellos and gerund (sintió, durmió, sintiendo, durmiendo). Jugar (u → ue) and adquirir (i → ie) follow the boot too.',
    taglish:
      'Ang -ir verbs na may e → ie o o → ue ay nagbabago nang dalawang beses: sa present (siento, duermo) at sa preterite ng él/ellos at gerund (sintió, durmió, sintiendo). Ang jugar (u → ue) at adquirir (i → ie) ay may boot din.',
    key: 'The -ir stem-changers change in the present AND the preterite.',
    tip: 'Say yo, él in the preterite and the gerund together.',
    tipDetail: 'Sentir: siento, sintió, sintiendo. Dormir: duermo, durmió, durmiendo.',
    mistake: 'Do not stop at the present: sintió, not sentió.',
  },
  {
    slug: 'spelling-car-gar-zar',
    unit: 'Spelling changes: -car, -gar, -zar, -guar',
    track: 'Intermediate',
    level: 'A2–B1',
    size: 8,
    match: (v) =>
      !isReflexive(v) &&
      !kind(v).includes('Irregular') &&
      /(car|gar|zar|guar)$/.test(v.infinitive) &&
      !hasFlag(v, 'iar') &&
      !hasFlag(v, 'uar'),
    english:
      'To keep the sound, these verbs change spelling before e: -car → -qu (busqué), -gar → -gu (pagué), -zar → -c (empecé), -guar → -gü (averigüé). This happens in the yo preterite and in the present subjunctive.',
    taglish:
      'Para manatili ang tunog, nagbabago ang baybay bago ang e: -car → -qu (busqué), -gar → -gu (pagué), -zar → -c (empecé), -guar → -gü (averigüé). Sa yo ng preterite at sa present subjunctive ito nangyayari.',
    key: 'The spelling changes, but the sound stays the same.',
    tip: 'Check the yo preterite: it always shows the change.',
    tipDetail: 'Buscar: busqué, busques. Pagar: pagué, pagues. Empezar: empecé, empieces.',
    mistake: 'Do not write buscé or pagé: the sound would change.',
  },
  {
    slug: 'spelling-cer-ger-uir',
    unit: 'Spelling changes: -cer, -cir, -ger, -gir, -uir',
    track: 'Intermediate',
    level: 'B1',
    size: 8,
    match: (v) =>
      !isReflexive(v) &&
      !kind(v).includes('Irregular') &&
      /(cer|cir|ger|gir|uir|guir|quir)$/.test(v.infinitive) &&
      !hasFlag(v, 'e-i') &&
      !hasFlag(v, 'iar'),
    english:
      'Before o and a: -cer/-cir after a vowel add z (conozco), after a consonant c becomes z (venzo); -ger/-gir → j (cojo, dirijo); -guir → g (distingo). -uir verbs add y (construyo).',
    taglish:
      'Bago ang o at a: ang -cer/-cir pagkatapos ng patinig ay nagiging -zco (conozco); pagkatapos ng katinig, nagiging z (venzo); -ger/-gir → j (cojo); -guir → g (distingo). Ang -uir ay nagdaragdag ng y (construyo).',
    key: 'These changes appear in yo and in the present subjunctive.',
    tip: 'Learn the yo form and you know the subjunctive too.',
    tipDetail: 'Conocer: conozco, conozca. Coger: cojo, coja. Construir: construyo, construya.',
    mistake: 'Do not write conoco or cogo: the c and g would sound different.',
  },
  {
    slug: 'accent-shift',
    unit: 'Accent shifts: -iar and -uar verbs',
    track: 'Intermediate',
    level: 'B1',
    size: 8,
    match: (v) => !isReflexive(v) && (hasFlag(v, 'iar') || hasFlag(v, 'uar')),
    english:
      'Some -iar and -uar verbs stress the i or u in yo, tú, él and ellos, so it gets a written accent: envío, envías, envía, enviamos, enviáis, envían; continúo, continúas.',
    taglish:
      'Ang ilang -iar at -uar verbs ay may diin sa i o u sa yo, tú, él at ellos, kaya may accent: envío, envías, envía, envían; continúo, continúas. Walang accent sa nosotros at vosotros.',
    key: 'The stress moves onto the i or u, so it needs an accent.',
    tip: 'Not every -iar verb does this.',
    tipDetail: 'Enviar and confiar shift; cambiar and estudiar do not (cambio, estudio).',
    mistake: 'Do not accent nosotros: enviamos, not envíamos.',
  },
  {
    slug: 'reflexive',
    unit: 'Reflexive verbs',
    track: 'Beginner',
    level: 'A2',
    size: 8,
    match: (v) => isReflexive(v),
    english:
      'Reflexive verbs use a pronoun that matches the subject: me, te, se, nos, os, se. The pronoun goes before the verb (me levanto) and attaches to the end of affirmative commands (levántate).',
    taglish:
      'Ang reflexive verbs ay may pronoun na tugma sa gumagawa: me, te, se, nos, os, se. Nasa unahan ng verb (me levanto) at nakadikit sa dulo ng pasulong na utos (levántate).',
    key: 'The pronoun matches the subject and goes before the verb.',
    tip: 'Say the pronoun with the verb, never alone.',
    tipDetail: 'Me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan.',
    mistake: 'Do not drop the pronoun: say me levanto, not levanto, when you mean "I get up".',
  },
];

function distractorsForForm(verb, tenseKey, personIndex, answer) {
  const [group, tense] = tenseKey.split('.');
  const r = conjugate(verb.infinitive, verb.flags);
  const plain = conjugatePlain(verb.infinitive)[group][tense][personIndex];
  const row = r[group][tense];
  const others = row.filter((_, i) => i !== personIndex);
  return pickDistinct(answer, [plain, ...others], 2);
}

function verbLesson(set, pack, index, lessonNumber) {
  const first = pack[0];
  const tense = TENSE_CYCLE[index % TENSE_CYCLE.length];
  const forms = conjugate(first.infinitive, first.flags);
  const quizVerb = pack[index % pack.length];
  const personChoices = [0, 1, 2, 3, 5];
  const personIndex = personChoices[(index + lessonNumber) % personChoices.length];
  const answer = conjugate(quizVerb.infinitive, quizVerb.flags).indicative[tense[1]][personIndex];
  const wrong = distractorsForForm(quizVerb, tense[0], personIndex, answer);
  const presentRow = forms.indicative.present.join(' · ');
  const stems = pack.map((v) => v.infinitive).join(', ');
  return {
    id: `gen-verbs-${set.slug}-${lessonNumber}`,
    group: { course: 'toolkit', level: 'verbs', unit: set.unit },
    title: `${set.unit} · ${lessonNumber}`,
    subtitle: stems,
    unit: set.unit,
    track: set.track,
    level: set.level,
    goal: `Kaya mong i-conjugate ang ${pack.length} verbs: ${stems}.`,
    sentence: first.example,
    meaning: first.translation,
    sound: 'Listen to the model, then try at your own pace.',
    taglish: `${set.taglish} Halimbawa: ${first.infinitive} → ${presentRow}.`,
    english: `${set.english} Example, ${first.infinitive}: ${presentRow}.`,
    pattern: [first.infinitive, ...forms.indicative.present.slice(0, 3)],
    key: set.key,
    tip: set.tip,
    tipDetail: set.tipDetail,
    mistake: set.mistake,
    prompt: `Choose the ${PERSONS[personIndex]} form of ${quizVerb.infinitive} (${gloss(quizVerb.english)}) in the ${tense[1]} tense.`,
    choices: [answer, ...wrong],
    answer,
    reason: `${quizVerb.infinitive}, ${tense[1]}, ${PERSONS[personIndex]}: ${answer}. Open the verb page to see every form.`,
    writing: `Write in Spanish: ${first.translation}`,
    accepted: [first.example],
    reply: first.example,
    scene: `Use ${first.infinitive} in a sentence about your own day.`,
    sceneHint: `Say the model sentence, then change one detail. Pack: ${stems}.`,
    recap: [set.key, set.tip, `${first.example} = ${first.translation}`],
    examples: pack.slice(1, 4).map((v) => [v.example, v.translation]),
    refs: pack.map((v) => ({ label: v.infinitive, path: '/verbs/' + v.infinitive })),
  };
}

function buildVerbLessons() {
  const used = new Set();
  const lessons = [];
  const sets = VERB_SETS.map((s) => ({ ...s }));
  for (const set of sets) {
    let matched = verbList.filter((v) => !used.has(v.infinitive) && set.match(v));
    if (set.sort) matched = [...matched].sort((a, b) => set.sort(a) - set.sort(b));
    matched.forEach((v) => used.add(v.infinitive));
    chunk(matched, set.size).forEach((pack, i) => lessons.push(verbLesson(set, pack, i, i + 1)));
  }
  const leftover = verbList.filter((v) => !used.has(v.infinitive));
  if (leftover.length) {
    const set = {
      slug: 'more',
      unit: 'More verbs to know',
      track: 'Intermediate',
      level: 'B1',
      english:
        'More useful verbs. Each one follows the patterns you have already studied: check the verb page for its exact forms.',
      taglish:
        'Karagdagang kapaki-pakinabang na verbs. Sumusunod sila sa mga pattern na napag-aralan mo na; tingnan ang verb page para sa eksaktong anyo.',
      key: 'Apply the patterns you already know.',
      tip: 'Check the highlighted forms on the verb page.',
      tipDetail: 'Highlighted cells show exactly where a verb differs from the regular pattern.',
      mistake: 'Do not assume a verb is regular without checking.',
      size: 8,
    };
    chunk(leftover, set.size).forEach((pack, i) => lessons.push(verbLesson(set, pack, i, i + 1)));
  }
  return lessons;
}

// ---------------------------------------------------------------- adjectives
const BLOCKED = new Set([
  'mucho',
  'poco',
  'bastante',
  'demasiado',
  'suficiente',
  'otro',
  'mismo',
  'propio',
  'mayor',
  'menor',
  'mejor',
  'peor',
  'superior',
  'inferior',
  'máximo',
  'mínimo',
  'medio',
  'regular',
  'próximo',
  'ajeno',
  'último',
  'primero',
  'segundo',
  'tercero',
  'pasado',
  'futuro',
  'anterior',
  'siguiente',
  'final',
  'inicial',
  'pendiente',
  'gratis',
  'embarazada',
  'único',
  'igual',
  'opuesto',
  'contrario',
  'semejante',
  'parecido',
  'cierto',
  'solo',
  'principal',
  'general',
  'particular',
]);

const NOUNS = {
  people: ['chico', 'chica', 'chicos', 'chicas', 'boy', 'girl', 'boys', 'girls'],
  feelings: ['chico', 'chica', 'chicos', 'chicas', 'boy', 'girl', 'boys', 'girls'],
  nationality: ['chico', 'chica', 'chicos', 'chicas', 'boy', 'girl', 'boys', 'girls'],
  taste: ['café', 'sopa', 'cafés', 'sopas', 'coffee', 'soup', 'coffees', 'soups'],
  weather: ['día', 'tarde', 'días', 'tardes', 'day', 'afternoon', 'days', 'afternoons'],
  place: [
    'barrio',
    'ciudad',
    'barrios',
    'ciudades',
    'neighborhood',
    'city',
    'neighborhoods',
    'cities',
  ],
  time: ['informe', 'reunión', 'informes', 'reuniones', 'report', 'meeting', 'reports', 'meetings'],
  other: [
    'informe',
    'reunión',
    'informes',
    'reuniones',
    'report',
    'meeting',
    'reports',
    'meetings',
  ],
};
const DEFAULT_NOUNS = ['libro', 'casa', 'libros', 'casas', 'book', 'house', 'books', 'houses'];

const ARTICLES = { m: ['El', 'Los'], f: ['La', 'Las'] };
// Nouns whose gender is not the first one listed (reunión, ciudad, tarde, sopa, casa are feminine).
function adjSentences(adj) {
  const [mS, fS, mP, fP, eMS, eFS, eMP, eFP] = NOUNS[adj.category] ?? DEFAULT_NOUNS;
  const f = adjectiveForms(adj.word, adj.flags);
  const verbs = adj.flags.includes('e')
    ? ['está', 'están', 'is', 'are']
    : ['es', 'son', 'is', 'are'];
  const g = gloss(adj.english);
  return {
    forms: f,
    gloss: g,
    ms: [`${ARTICLES.m[0]} ${mS} ${verbs[0]} ${f.ms}.`, `The ${eMS} ${verbs[2]} ${g}.`],
    fs: [`${ARTICLES.f[0]} ${fS} ${verbs[0]} ${f.fs}.`, `The ${eFS} ${verbs[2]} ${g}.`],
    mp: [`${ARTICLES.m[1]} ${mP} ${verbs[1]} ${f.mp}.`, `The ${eMP} ${verbs[3]} ${g}.`],
    fp: [`${ARTICLES.f[1]} ${fP} ${verbs[1]} ${f.fp}.`, `The ${eFP} ${verbs[3]} ${g}.`],
    nouns: { fS, mP, fP },
  };
}

function adjectiveLesson(category, pack, number) {
  const first = pack[0];
  const s = adjSentences(first);
  const f = s.forms;
  const quiz = pack[number % pack.length];
  const q = adjSentences(quiz);
  let prompt;
  let answer;
  let wrong;
  if (q.forms.ms !== q.forms.fs) {
    answer = q.forms.fs;
    prompt = `Complete: ${q.fs[0].replace(q.forms.fs, '___')} (${q.gloss})`;
    wrong = pickDistinct(answer, [q.forms.ms, q.forms.mp, q.forms.fp]);
  } else {
    answer = q.forms.mp;
    const wrongForm = quiz.word.endsWith('e') ? quiz.word.slice(0, -1) + 'a' : quiz.word + 'a';
    prompt = `Complete: ${q.mp[0].replace(q.forms.mp, '___')} (${q.gloss})`;
    wrong = pickDistinct(answer, [q.forms.ms, wrongForm, q.forms.ms + 'os']);
  }
  const words = pack.map((a) => a.word).join(', ');
  const title = ADJECTIVE_CATEGORIES[category];
  const table = `${f.ms} · ${f.fs} · ${f.mp} · ${f.fp}`;
  return {
    id: `gen-adjectives-${category}-${number}`,
    group: { course: 'toolkit', level: 'adjectives', unit: title },
    title: `${title} · ${number}`,
    subtitle: words,
    unit: title,
    track: category === 'nationality' ? 'Beginner' : 'Beginner',
    level: 'A1–A2',
    goal: `Kaya mong gamitin ang ${pack.length} adjectives nang tama ang kasarian at bilang.`,
    sentence: s.ms[0],
    meaning: s.ms[1],
    sound: 'Listen to the model, then try at your own pace.',
    taglish: `Sumusunod ang adjective sa kasarian at bilang ng noun. ${first.word} (${s.gloss}) = ${table}. Karaniwang nasa hulihan ng noun: ${s.fs[0].replace(/ (es|está) .*/, '')} ${f.fs}.`,
    english: `Adjectives agree with the noun in gender and number. ${first.word} (${s.gloss}): ${table}. The adjective usually comes after the noun or after ser/estar.`,
    pattern: ['noun', adjective(first), 'agrees'],
    key: 'The adjective matches the noun in gender and number.',
    tip: first.flags.includes('e')
      ? 'Use estar for states that can change.'
      : 'Use ser for lasting qualities.',
    tipDetail:
      'Check the ending: -o becomes -a for feminine, and -s or -es for plural. Adjectives ending in -e or a consonant keep one form for both genders.',
    mistake: 'Do not leave the adjective unchanged: say las casas blancas, not las casas blanco.',
    prompt,
    choices: [answer, ...wrong],
    answer,
    reason: `${q.forms.ms !== q.forms.fs ? 'Casa and chica are feminine' : 'The noun is plural'}, so the adjective agrees: ${answer}.`,
    writing: `Write in Spanish: ${s.fp[1]}`,
    accepted: [s.fp[0]],
    reply: s.fp[0],
    scene: `Describe two things around you with ${first.word}.`,
    sceneHint: `Pack: ${words}. Change the noun and keep the agreement.`,
    recap: [
      'Match gender and number.',
      'Check the ending of the adjective.',
      `${s.fs[0]} = ${s.fs[1]}`,
    ],
    examples: pack.slice(1, 4).map((a) => {
      const x = adjSentences(a);
      return [x.fs[0], x.fs[1]];
    }),
    refs: pack.map((a) => ({ label: a.word, path: '/adjectives?q=' + encodeURIComponent(a.word) })),
  };
}
const adjective = (a) => `${a.word} (${a.flags.includes('e') ? 'estar' : 'ser'})`;

function buildAdjectiveLessons() {
  const lessons = [];
  for (const category of Object.keys(ADJECTIVE_CATEGORIES)) {
    const pool = adjectiveList.filter((a) => a.category === category && !BLOCKED.has(a.word));
    chunk(pool, 8).forEach((pack, i) => {
      if (pack.length) lessons.push(adjectiveLesson(category, pack, i + 1));
    });
  }
  return lessons;
}

// ---------------------------------------------------------------- conjunctions
const MOOD_CHOICES = ['indicative', 'subjunctive', 'both'];
const MOOD_SHORT = {
  indicative: 'the indicative',
  subjunctive: 'the subjunctive',
  both: 'either, depending on meaning',
  none: 'no special mood',
};

function conjunctionLesson(categoryKey, pack, number) {
  const first = pack[0];
  const quiz = pack.find((c) => c.mood !== 'none') ?? first;
  let prompt;
  let answer;
  let wrong;
  if (quiz.mood !== 'none') {
    prompt = `After “${quiz.word}”, which verb form is used?`;
    answer = MOOD_SHORT[quiz.mood];
    wrong = MOOD_CHOICES.filter((m) => m !== quiz.mood)
      .map((m) => MOOD_SHORT[m])
      .slice(0, 2);
  } else {
    prompt = `What does “${quiz.word}” mean?`;
    answer = quiz.english;
    wrong = pickDistinct(
      answer,
      conjunctionList.filter((c) => c.category !== categoryKey).map((c) => c.english),
    );
  }
  const title = CONJUNCTION_CATEGORIES[categoryKey];
  const words = pack.map((c) => c.word).join(', ');
  const list = pack.map((c) => `${c.word} = ${c.english}`).join('; ');
  return {
    id: `gen-connectors-${categoryKey}-${number}`,
    group: { course: 'toolkit', level: 'connectors', unit: title },
    title: `${title} · ${number}`,
    subtitle: words,
    unit: title,
    track: 'Intermediate',
    level: 'A2–B2',
    goal: `Kaya mong gamitin ang ${pack.length} connectors at ang tamang mood: ${words}.`,
    sentence: first.example,
    meaning: first.translation,
    sound: 'Listen to the model, then try at your own pace.',
    taglish: `${first.taglish} Sa pack na ito: ${list}.`,
    english: `${first.word} means ${first.english}. ${first.note} In this pack: ${list}.`,
    pattern: [first.word, MOOD_LABELS[first.mood]],
    key: `${first.word}: ${MOOD_LABELS[first.mood].toLowerCase()}.`,
    tip: 'Ask: is it real and known, or not yet real?',
    tipDetail:
      'Real or known facts take the indicative; wishes, doubts, purposes and future events take the subjunctive.',
    mistake: 'Do not mix up the mood: the connector decides which verb form follows.',
    prompt,
    choices: [answer, ...wrong],
    answer,
    reason: `${quiz.word}: ${quiz.note}`,
    writing: `Write in Spanish: ${first.translation}`,
    accepted: [first.example],
    reply: first.example,
    scene: `Join two ideas from your day with ${first.word}.`,
    sceneHint: `Pack: ${words}. Say your own sentence with the same connector.`,
    recap: [
      `${first.word} = ${first.english}`,
      MOOD_LABELS[first.mood],
      `${first.example} = ${first.translation}`,
    ],
    examples: pack.slice(1, 4).map((c) => [c.example, c.translation]),
    refs: [{ label: 'All connectors', path: '/connectors' }],
  };
}

function buildConjunctionLessons() {
  const lessons = [];
  for (const category of Object.keys(CONJUNCTION_CATEGORIES)) {
    const pool = conjunctionList.filter((c) => c.category === category);
    chunk(pool, 4).forEach((pack, i) => lessons.push(conjunctionLesson(category, pack, i + 1)));
  }
  return lessons;
}

export const toolkitLessons = [
  ...buildVerbLessons(),
  ...buildAdjectiveLessons(),
  ...buildConjunctionLessons(),
];

export const TOOLKIT_LEVELS = [
  [
    'tenses',
    'Tenses',
    'Tenses',
    'Every tense in use, with regular, irregular and changing verbs, backed by the conjugation tables.',
  ],
  [
    'vocabulary',
    'Words',
    'Vocabulary',
    'Everyday nouns grouped by theme, learned with their articles.',
  ],
  [
    'verbs',
    'Verbs',
    'Verbs',
    'Every verb pattern: regular, irregular, stem-changing, spelling changes and reflexive.',
  ],
  [
    'adjectives',
    'Adjectives',
    'Adjectives',
    'Agreement for hundreds of adjectives, grouped by topic.',
  ],
  [
    'connectors',
    'Connectors',
    'Connectors',
    'Conjunctions grouped by purpose, with the mood each one takes.',
  ],
];
