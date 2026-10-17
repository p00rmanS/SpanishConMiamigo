// A Spanish conjugation engine: regular patterns, stem changes, spelling changes and the
// irregular verbs (including compounds such as mantener or proponer).
// conjugate('hablar') returns every simple and compound tense, the imperative and the
// non-finite forms. Flags mark stem-changing and accent-shifting verbs, which cannot be
// detected from the spelling alone: 'e-ie', 'o-ue', 'e-i', 'u-ue', 'i-ie', 'iar', 'uar'.
import { syllabify } from './pronounce.js';

export const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ustedes'];
const REFLEXIVE = ['me', 'te', 'se', 'nos', 'os', 'se'];
const VOWELS = 'aeiouáéíóú';
const STEM_PERSONS = [0, 1, 2, 5];

// Only acute accents on vowels are removed: ñ and ü must survive.
const strip = (c) =>
  c.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
const unaccent = (s) => strip(s);

// ---------- accent helpers ----------
function stressFromEnd(word) {
  const syl = syllabify(word.toLowerCase());
  const accented = syl.findIndex((s) => /[áéíóú]/.test(s));
  if (accented >= 0) return syl.length - 1 - accented;
  if (syl.length === 1) return 0;
  return /[aeiouns]$/.test(word) ? 1 : 0;
}

function accentSyllable(syllable) {
  const map = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  const chars = [...syllable];
  const vowelAt = chars.map((c, i) => (VOWELS.includes(c) ? i : -1)).filter((i) => i >= 0);
  if (!vowelAt.length) return syllable;
  // Diphthong: accent the strong vowel; for i/u pairs, the second vowel.
  const strongAt = vowelAt.find((i) => 'aeo'.includes(chars[i]));
  const target = strongAt ?? vowelAt.at(-1);
  if (/[áéíóú]/.test(chars[target])) return syllable;
  chars[target] = map[chars[target]] ?? chars[target];
  return chars.join('');
}

// Keep the stressed syllable the same after attaching a prefix or an enclitic pronoun.
function keepStress(newWord, desiredFromEnd) {
  if (/[áéíóú]/.test(newWord)) return newWord;
  if (stressFromEnd(newWord) === desiredFromEnd) return newWord;
  const syl = syllabify(newWord);
  const index = syl.length - 1 - desiredFromEnd;
  if (index < 0) return newWord;
  syl[index] = accentSyllable(syl[index]);
  return syl.join('');
}

function addEnclitic(form, clitic) {
  return keepStress(form + clitic, stressFromEnd(form) + 1);
}

// ---------- endings ----------
const PRES = {
  ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
  er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
  ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
};
const PRET = {
  ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
  er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
  ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
};
const IMPF = {
  ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
  er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
  ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
};
const FUT = ['é', 'ás', 'á', 'emos', 'éis', 'án'];
const COND = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'];
const SUBJ = {
  ar: ['e', 'es', 'e', 'emos', 'éis', 'en'],
  er: ['a', 'as', 'a', 'amos', 'áis', 'an'],
  ir: ['a', 'as', 'a', 'amos', 'áis', 'an'],
};
const STRONG_PRET = ['e', 'iste', 'o', 'imos', 'isteis', 'ieron'];
const STRONG_PRET_J = ['e', 'iste', 'o', 'imos', 'isteis', 'eron'];
const HABER = {
  pres: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
  impf: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
  fut: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
  cond: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'],
  subj: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
  subjImpf: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'],
};

// ---------- irregular verbs ----------
// pres/pret/impf/subj: complete six-form tables. presYo: irregular yo form only.
// pretStem + pretType ('u', 'i', 'j') build the strong preterite. futStem: irregular future stem.
const IRREGULAR = {
  ser: {
    pres: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
    pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    impf: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
    subj: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
    impTu: 'sé',
    ger: 'siendo',
    part: 'sido',
  },
  ir: {
    pres: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
    pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    impf: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
    subj: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
    impTu: 've',
    impNos: 'vamos',
    ger: 'yendo',
    part: 'ido',
  },
  estar: {
    pres: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
    pretStem: 'estuv',
    pretType: 'i',
    subj: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
    impTu: 'está',
  },
  haber: {
    pres: HABER.pres,
    pretStem: 'hub',
    pretType: 'i',
    futStem: 'habr',
    subj: HABER.subj,
    impTu: 'he',
  },
  dar: {
    pres: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
    pret: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
    subj: ['dé', 'des', 'dé', 'demos', 'deis', 'den'],
    impTu: 'da',
  },
  ver: {
    pres: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
    presYo: 'veo',
    impf: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
    pret: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    impTu: 've',
    part: 'visto',
  },
  saber: {
    presYo: 'sé',
    pretStem: 'sup',
    pretType: 'i',
    futStem: 'sabr',
    subj: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
  },
  caber: { presYo: 'quepo', pretStem: 'cup', pretType: 'i', futStem: 'cabr' },
  poder: {
    flags: ['o-ue'],
    pretStem: 'pud',
    pretType: 'i',
    futStem: 'podr',
    ger: 'pudiendo',
  },
  querer: { flags: ['e-ie'], pretStem: 'quis', pretType: 'i', futStem: 'querr' },
  tener: {
    flags: ['e-ie'],
    presYo: 'tengo',
    pretStem: 'tuv',
    pretType: 'i',
    futStem: 'tendr',
    impTu: 'ten',
  },
  venir: {
    flags: ['e-ie'],
    presYo: 'vengo',
    pretStem: 'vin',
    pretType: 'i',
    futStem: 'vendr',
    ger: 'viniendo',
    impTu: 'ven',
  },
  hacer: {
    presYo: 'hago',
    pretStem: 'hic',
    pretType: 'i',
    pret3s: 'hizo',
    futStem: 'har',
    part: 'hecho',
    impTu: 'haz',
  },
  poner: {
    presYo: 'pongo',
    pretStem: 'pus',
    pretType: 'i',
    futStem: 'pondr',
    part: 'puesto',
    impTu: 'pon',
  },
  salir: { presYo: 'salgo', futStem: 'saldr', impTu: 'sal' },
  valer: { presYo: 'valgo', futStem: 'valdr', impTu: 'vale' },
  decir: {
    flags: ['e-i'],
    presYo: 'digo',
    pretStem: 'dij',
    pretType: 'j',
    futStem: 'dir',
    part: 'dicho',
    ger: 'diciendo',
    impTu: 'di',
  },
  traer: { presYo: 'traigo', pretStem: 'traj', pretType: 'j', ger: 'trayendo', part: 'traído' },
  caer: { presYo: 'caigo', ger: 'cayendo', part: 'caído' },
  oír: {
    pres: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'],
    pret: ['oí', 'oíste', 'oyó', 'oímos', 'oísteis', 'oyeron'],
    ger: 'oyendo',
    part: 'oído',
    impTu: 'oye',
    presYo: 'oigo',
  },
  reír: {
    pres: ['río', 'ríes', 'ríe', 'reímos', 'reís', 'ríen'],
    pret: ['reí', 'reíste', 'rio', 'reímos', 'reísteis', 'rieron'],
    subj: ['ría', 'rías', 'ría', 'riamos', 'riáis', 'rían'],
    impTu: 'ríe',
    ger: 'riendo',
    part: 'reído',
    futBase: 'reir',
  },
  freír: {
    pres: ['frío', 'fríes', 'fríe', 'freímos', 'freís', 'fríen'],
    pret: ['freí', 'freíste', 'frio', 'freímos', 'freísteis', 'frieron'],
    subj: ['fría', 'frías', 'fría', 'friamos', 'friáis', 'frían'],
    impTu: 'fríe',
    ger: 'friendo',
    part: 'frito',
    futBase: 'freir',
  },
  andar: { pretStem: 'anduv', pretType: 'i' },
  oler: {
    pres: ['huelo', 'hueles', 'huele', 'olemos', 'oléis', 'huelen'],
    subj: ['huela', 'huelas', 'huela', 'olamos', 'oláis', 'huelan'],
    impTu: 'huele',
  },
  conducir: { presYo: 'conduzco', pretStem: 'conduj', pretType: 'j' },
  bendecir: {
    flags: ['e-i'],
    presYo: 'bendigo',
    pretStem: 'bendij',
    pretType: 'j',
    regularFut: true,
  },
  maldecir: {
    flags: ['e-i'],
    presYo: 'maldigo',
    pretStem: 'maldij',
    pretType: 'j',
    regularFut: true,
  },
  satisfacer: {
    presYo: 'satisfago',
    pretStem: 'satisfic',
    pretType: 'i',
    pret3s: 'satisfizo',
    futStem: 'satisfar',
    part: 'satisfecho',
    impTu: 'satisface',
  },
};

// Compounds: prefix -> base verb that supplies the irregular forms.
const COMPOUNDS = {
  tener: ['abs', 'con', 'de', 'entre', 'man', 'ob', 're', 'sos'],
  venir: ['ad', 'con', 'de', 'inter', 'pre', 'pro', 're', 'sobre'],
  poner: [
    'ante',
    'com',
    'contra',
    'de',
    'dis',
    'ex',
    'im',
    'inter',
    'o',
    'pos',
    'predis',
    'presu',
    'pro',
    're',
    'sobre',
    'su',
    'superpo',
    'yuxta',
  ],
  hacer: ['des', 're', 'contra'],
  decir: ['contra', 'des', 'entre', 'pre'],
  ver: ['entre', 'pre', 're'],
  traer: ['a', 'abs', 'con', 'dis', 'ex', 're', 'sus', 'subs'],
  caer: ['de', 're'],
  oír: ['des', 'entre'],
  reír: ['son'],
};

const IRREGULAR_PARTICIPLES = {
  abrir: 'abierto',
  reabrir: 'reabierto',
  entreabrir: 'entreabierto',
  cubrir: 'cubierto',
  descubrir: 'descubierto',
  encubrir: 'encubierto',
  recubrir: 'recubierto',
  escribir: 'escrito',
  describir: 'descrito',
  inscribir: 'inscrito',
  suscribir: 'suscrito',
  prescribir: 'prescrito',
  transcribir: 'transcrito',
  romper: 'roto',
  morir: 'muerto',
  volver: 'vuelto',
  devolver: 'devuelto',
  envolver: 'envuelto',
  revolver: 'revuelto',
  resolver: 'resuelto',
  absolver: 'absuelto',
  disolver: 'disuelto',
  freír: 'frito',
  sofreír: 'sofrito',
  imprimir: 'impreso',
  proveer: 'provisto',
};

// Find the irregular entry for a verb, resolving compounds. Returns { entry, prefix, base }.
function findIrregular(inf) {
  if (IRREGULAR[inf]) return { entry: IRREGULAR[inf], prefix: '', base: inf };
  for (const [base, prefixes] of Object.entries(COMPOUNDS)) {
    for (const prefix of prefixes) {
      if (inf === prefix + base && IRREGULAR[base]) {
        return { entry: IRREGULAR[base], prefix, base };
      }
    }
  }
  if (inf.endsWith('ducir') && inf !== 'ducir') {
    return {
      entry: IRREGULAR.conducir,
      prefix: inf.slice(0, -5) + 'd',
      base: 'ducir',
      ducir: true,
    };
  }
  return null;
}

// ---------- spelling-aware joining ----------
function join(ctx, stem, ending) {
  let end = ending;
  let st = stem;
  const first = strip(end[0] ?? '');

  // -uir verbs (construir, huir): y before a, e, o.
  if (ctx.uir && 'aeo'.includes(first)) st += 'y';

  // i between vowels becomes y: leer, creer, caer, oír, -uir (ió, ieron, iendo, iera ...).
  const vowelStem = /[aeo]$/.test(st) && !/(gu|qu)$/.test(st);
  const uirStem = ctx.uir;
  if ((vowelStem || uirStem) && /^i[eó]/.test(end)) end = 'y' + end.slice(1);

  // ñ, ll and ch absorb the i: tañó, bulló, riñó.
  if (/(ñ|ll)$/.test(st) && /^i[eó]/.test(end)) end = end.slice(1);

  // Accent the i of preterite endings after a strong vowel: leí, leíste, leímos.
  if (ctx.accentI && vowelStem && /^i(ste|mos|steis)/.test(end)) end = 'í' + end.slice(1);

  if (!ctx.plain) {
    if (first === 'e' || first === 'i') {
      if (ctx.end === 'ar') {
        if (st.endsWith('c')) st = st.slice(0, -1) + 'qu';
        else if (st.endsWith('gu')) st = st.slice(0, -2) + 'gü';
        else if (st.endsWith('g')) st += 'u';
        else if (st.endsWith('z')) st = st.slice(0, -1) + 'c';
      }
    } else if (first === 'a' || first === 'o') {
      if (ctx.end !== 'ar') {
        if (/[aeiouáéíóú]c$/.test(st) && !ctx.noZc) st = st.slice(0, -1) + 'zc';
        else if (st.endsWith('c')) st = st.slice(0, -1) + 'z';
        else if (st.endsWith('gu')) st = st.slice(0, -2) + 'g';
        else if (st.endsWith('qu')) st = st.slice(0, -2) + 'c';
        else if (st.endsWith('g')) st = st.slice(0, -1) + 'j';
      }
    }
  }
  return st + end;
}

function changeStem(stem, flag) {
  const swap = (ch, to) => {
    const i = stem.lastIndexOf(ch);
    return i < 0 ? stem : stem.slice(0, i) + to + stem.slice(i + 1);
  };
  switch (flag) {
    case 'e-ie':
      return swap('e', 'ie');
    case 'o-ue':
      return swap('o', 'ue');
    case 'e-i':
      return swap('e', 'i');
    case 'u-ue':
      return swap('u', 'ue');
    case 'i-ie':
      return swap('i', 'ie');
    default:
      return stem;
  }
}

// Stem change used in the preterite, gerund and nosotros subjunctive of -ir verbs.
function shiftStem(stem, flag) {
  if (flag === 'e-ie' || flag === 'e-i') return changeStem(stem, 'e-i');
  if (flag === 'o-ue') {
    const i = stem.lastIndexOf('o');
    return i < 0 ? stem : stem.slice(0, i) + 'u' + stem.slice(i + 1);
  }
  return stem;
}

// ---------- the conjugator ----------
function parse(infinitive, flagsIn = [], options = {}) {
  const reflexive = /(ar|er|ir|ír)se$/.test(infinitive);
  const bare = reflexive ? infinitive.slice(0, -2) : infinitive;
  const normalized = unaccent(bare);
  const end = normalized.slice(-2);
  const stem = normalized.slice(0, -2);
  const irr = options.plain ? null : findIrregular(bare);
  const flags = [...new Set([...(irr?.entry.flags ?? []), ...flagsIn])];
  const ctx = {
    inf: bare,
    reflexive,
    stem,
    end,
    plain: Boolean(options.plain),
    flag: options.plain ? null : (flags.find((f) => /^[eiou]-/.test(f)) ?? null),
    iar: !options.plain && flags.includes('iar'),
    uar: !options.plain && flags.includes('uar'),
    uir: !options.plain && end === 'ir' && /[^gq]u$/.test(stem) && !/^(argüir)$/.test(bare),
    accentI: !options.plain,
    irr,
    noZc: false,
  };
  if (!options.plain) {
    // Verbs in -er/-ir whose c follows a consonant (vencer, esparcir) take z, not zc.
    ctx.noZc = ['hacer', 'cocer', 'mecer', 'decir'].some((x) => bare.endsWith(x)) && !ctx.irr;
    // y-rule applies to -aer, -eer, -oer, -oír verbs; handled in join().
  }
  return ctx;
}

function applyPrefix(prefix, form, baseForm) {
  if (!prefix) return form;
  return keepStress(prefix + form, stressFromEnd(baseForm));
}

function withIrregular(ctx, table, getter) {
  // Return a six-form array from the irregular entry (with prefix) or null.
  const { irr } = ctx;
  if (!irr) return null;
  const forms = getter(irr.entry);
  if (!forms) return null;
  return forms.map((f) => (irr.prefix ? applyPrefix(irr.prefix, f, f) : f));
}

function presentFinite(ctx) {
  const { stem, end, irr } = ctx;
  const entry = irr?.entry;
  const forms = [];
  for (let i = 0; i < 6; i++) {
    const changes = STEM_PERSONS.includes(i);
    let s = stem;
    if (ctx.flag && changes) s = changeStem(s, ctx.flag);
    if (ctx.iar && changes) s = s.replace(/i$/, 'í');
    if (ctx.uar && changes) s = s.replace(/u$/, 'ú');
    let form = join(ctx, s, PRES[end][i]);
    if (i === 0 && entry?.presYo && !ctx.plain) {
      form = irr.prefix ? applyPrefix(irr.prefix, entry.presYo, entry.presYo) : entry.presYo;
      if (irr.ducir) form = stem.replace(/uc$/, 'uzc') + 'o';
    }
    forms.push(form);
  }
  if (entry?.pres && !ctx.plain) return withIrregular(ctx, 'pres', (e) => e.pres);
  // tener/venir-type: tú and él forms are regular stem changes already.
  if (entry?.presYo === 'tengo' || entry?.presYo === 'vengo' || entry?.presYo === 'digo') {
    // ten-ir pattern: tienes, tiene, tienen (e→ie) / dices, dice (e→i): covered by flags.
  }
  return forms;
}

function presentSubjunctive(ctx, pres) {
  const { stem, end, irr } = ctx;
  const entry = irr?.entry;
  if (!ctx.plain && entry?.subj) return withIrregular(ctx, 'subj', (e) => e.subj);
  const out = [];
  // Verbs with an irregular yo form build every subjunctive person on it (tengo -> tenga).
  const yoBased = !ctx.plain && (entry?.presYo || entry?.pres);
  const yoStem = pres[0].endsWith('o') ? pres[0].slice(0, -1) : pres[0];
  for (let i = 0; i < 6; i++) {
    let s = stem;
    if (yoBased) {
      s = yoStem;
    } else if (!ctx.plain) {
      const boot = STEM_PERSONS.includes(i);
      if (ctx.flag && boot) s = changeStem(s, ctx.flag);
      else if (ctx.flag && end === 'ir') s = shiftStem(s, ctx.flag);
      if (boot && ctx.iar) s = s.replace(/i$/, 'í');
      if (boot && ctx.uar) s = s.replace(/u$/, 'ú');
    }
    // A yo-based stem (tengo -> teng) is already final, so no spelling rule is applied again.
    out.push(yoBased ? s + SUBJ[end][i] : join(ctx, s, SUBJ[end][i]));
  }
  return out;
}

function pretérito(ctx) {
  const { stem, end, irr } = ctx;
  const entry = irr?.entry;
  if (!ctx.plain && entry?.pret) return withIrregular(ctx, 'pret', (e) => e.pret);
  if (!ctx.plain && entry?.pretStem) {
    const endings = entry.pretType === 'j' ? STRONG_PRET_J : STRONG_PRET;
    const pstem = irr.ducir
      ? stem.replace(/uc$/, 'uj')
      : irr.prefix
        ? irr.prefix + entry.pretStem
        : entry.pretStem;
    const forms = endings.map((e) => pstem + e);
    if (entry.pret3s) forms[2] = (irr.prefix ?? '') + entry.pret3s;
    return forms;
  }
  const forms = [];
  for (let i = 0; i < 6; i++) {
    let s = stem;
    if (!ctx.plain && ctx.flag && end === 'ir' && (i === 2 || i === 5)) s = shiftStem(s, ctx.flag);
    forms.push(join(ctx, s, PRET[end][i]));
  }
  return forms;
}

function imperfect(ctx) {
  const { stem, end, irr } = ctx;
  if (!ctx.plain && irr?.entry.impf) return withIrregular(ctx, 'impf', (e) => e.impf);
  return IMPF[end].map((e) => join(ctx, stem, e));
}

function futureStem(ctx) {
  const { irr, inf } = ctx;
  if (!ctx.plain && irr?.entry.futStem && !irr.entry.regularFut) {
    if (irr.base === 'decir' && irr.prefix) return unaccent(inf);
    return (irr.prefix ?? '') + irr.entry.futStem;
  }
  if (!ctx.plain && irr?.entry.futBase) return irr.entry.futBase;
  return unaccent(inf);
}

function participle(ctx, forms) {
  const { stem, end, irr, inf } = ctx;
  if (!ctx.plain) {
    if (IRREGULAR_PARTICIPLES[inf]) return IRREGULAR_PARTICIPLES[inf];
    if (irr?.entry.part && !irr.ducir) {
      return irr.prefix
        ? keepStress(irr.prefix + irr.entry.part, stressFromEnd(irr.entry.part))
        : irr.entry.part;
    }
  }
  const ending = end === 'ar' ? 'ado' : 'ido';
  if (end !== 'ar' && !ctx.plain && /[aeo]$/.test(stem) && !/(gu|qu)$/.test(stem))
    return stem + 'ído';
  void forms;
  return stem + ending;
}

function gerund(ctx) {
  const { stem, end, irr } = ctx;
  if (!ctx.plain && irr?.entry.ger) {
    return irr.prefix ? irr.prefix + irr.entry.ger : irr.entry.ger;
  }
  if (end === 'ar') return stem + 'ando';
  let s = stem;
  if (!ctx.plain && ctx.flag && end === 'ir') s = shiftStem(s, ctx.flag);
  return join(ctx, s, 'iendo');
}

function conjugateCore(infinitive, flags, options) {
  const ctx = parse(infinitive, flags, options);
  const pres = presentFinite(ctx);
  const subjPres = presentSubjunctive(ctx, pres);
  const pret = pretérito(ctx);
  const impf = imperfect(ctx);
  const fstem = futureStem(ctx);
  const fut = FUT.map((e) => fstem + e);
  const cond = COND.map((e) => fstem + e);
  const part = participle(ctx);
  const ger = gerund(ctx);

  const subjStemFromPret = pret[5].replace(/ron$/, '');
  const accented = (s) => {
    const syl = syllabify(s);
    syl[syl.length - 1] = accentSyllable(syl.at(-1));
    return syl.join('');
  };
  const subjImpfRa = [0, 1, 2, 3, 4, 5].map((i) => {
    const base = i === 3 ? accented(subjStemFromPret) : subjStemFromPret;
    return base + ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'][i];
  });
  const subjImpfSe = [0, 1, 2, 3, 4, 5].map((i) => {
    const base = i === 3 ? accented(subjStemFromPret) : subjStemFromPret;
    return base + ['se', 'ses', 'se', 'semos', 'seis', 'sen'][i];
  });

  const perfect = (haber) => haber.map((h) => `${h} ${part}`);

  // Imperative
  const irrEntry = ctx.irr?.entry;
  let impTu = pres[2];
  if (!ctx.plain && irrEntry?.impTu) {
    impTu = ctx.irr.prefix
      ? keepStress(ctx.irr.prefix + irrEntry.impTu, stressFromEnd(irrEntry.impTu))
      : irrEntry.impTu;
    if (ctx.irr.base === 'decir' && ['pre', 'contra', 'des', 'entre'].includes(ctx.irr.prefix))
      impTu = (ctx.irr.prefix ?? '') + 'dice';
  }
  const impNos = !ctx.plain && irrEntry?.impNos ? irrEntry.impNos : subjPres[3];
  const impVos =
    ctx.inf === 'ir' && !ctx.plain
      ? 'id'
      : /ír$/.test(ctx.inf)
        ? ctx.inf.slice(0, -2) + 'íd'
        : unaccent(ctx.inf).slice(0, -1) + 'd';
  const afirm = [impTu, subjPres[2], impNos, impVos, subjPres[5]];
  const neg = [
    `no ${subjPres[1]}`,
    `no ${subjPres[2]}`,
    `no ${subjPres[3]}`,
    `no ${subjPres[4]}`,
    `no ${subjPres[5]}`,
  ];

  let result = {
    infinitive,
    gerund: ger,
    participle: part,
    indicative: {
      present: pres,
      preterite: pret,
      imperfect: impf,
      future: fut,
      conditional: cond,
      presentPerfect: perfect(HABER.pres),
      pluperfect: perfect(HABER.impf),
      futurePerfect: perfect(HABER.fut),
      conditionalPerfect: perfect(HABER.cond),
    },
    subjunctive: {
      present: subjPres,
      imperfect: subjImpfRa,
      imperfectSe: subjImpfSe,
      presentPerfect: perfect(HABER.subj),
      pluperfect: perfect(HABER.subjImpf),
    },
    imperative: { affirmative: afirm, negative: neg },
  };

  if (ctx.reflexive) result = makeReflexive(result, ctx);
  if (infinitive === 'haber') {
    // The impersonal forms (hay = there is / there are) are the most useful ones for learners.
    result.impersonal = {
      present: 'hay',
      preterite: 'hubo',
      imperfect: 'había',
      future: 'habrá',
      conditional: 'habría',
      subjunctive: 'haya',
    };
  }
  return result;
}

function makeReflexive(r, ctx) {
  const withPron = (forms) => forms.map((f, i) => `${REFLEXIVE[i]} ${f}`);
  const out = { ...r, infinitive: r.infinitive };
  out.indicative = Object.fromEntries(
    Object.entries(r.indicative).map(([k, v]) => [k, withPron(v)]),
  );
  out.subjunctive = Object.fromEntries(
    Object.entries(r.subjunctive).map(([k, v]) => [k, withPron(v)]),
  );
  out.gerund = addEnclitic(r.gerund, 'se');
  // Affirmative imperatives attach the pronoun; negatives place it before the verb.
  const [tu, usted, nos, vos, ustedes] = r.imperative.affirmative;
  const nosBase = nos.replace(/s$/, '');
  const vosBase = vos.replace(/d$/, '');
  const irse = ctx.inf === 'ir';
  out.imperative = {
    affirmative: [
      addEnclitic(tu, 'te'),
      addEnclitic(usted, 'se'),
      irse ? 'vámonos' : addEnclitic(nosBase, 'nos'),
      irse ? 'idos' : vosBase + 'os',
      addEnclitic(ustedes, 'se'),
    ],
    negative: r.imperative.negative.map((f, i) => {
      const verb = f.replace(/^no /, '');
      return `no ${REFLEXIVE[i + 1]} ${verb}`;
    }),
  };
  return out;
}

export function conjugate(infinitive, flags = []) {
  return conjugateCore(infinitive.toLowerCase(), flags, {});
}

// A baseline with no irregularities, used to highlight what is irregular.
export function conjugatePlain(infinitive) {
  return conjugateCore(infinitive.toLowerCase(), [], { plain: true });
}

export const TENSE_GROUPS = [
  {
    id: 'indicative',
    title: 'Indicative',
    tenses: [
      ['present', 'Present', 'presente'],
      ['preterite', 'Preterite', 'pretérito indefinido'],
      ['imperfect', 'Imperfect', 'pretérito imperfecto'],
      ['future', 'Future', 'futuro simple'],
      ['conditional', 'Conditional', 'condicional simple'],
      ['presentPerfect', 'Present perfect', 'pretérito perfecto'],
      ['pluperfect', 'Past perfect', 'pluscuamperfecto'],
      ['futurePerfect', 'Future perfect', 'futuro perfecto'],
      ['conditionalPerfect', 'Conditional perfect', 'condicional perfecto'],
    ],
  },
  {
    id: 'subjunctive',
    title: 'Subjunctive',
    tenses: [
      ['present', 'Present subjunctive', 'presente de subjuntivo'],
      ['imperfect', 'Imperfect subjunctive (-ra)', 'imperfecto de subjuntivo'],
      ['imperfectSe', 'Imperfect subjunctive (-se)', 'imperfecto de subjuntivo'],
      ['presentPerfect', 'Present perfect subjunctive', 'perfecto de subjuntivo'],
      ['pluperfect', 'Past perfect subjunctive', 'pluscuamperfecto de subjuntivo'],
    ],
  },
];

export const IMPERATIVE_PERSONS = ['tú', 'usted', 'nosotros', 'vosotros', 'ustedes'];

// Tenses that are formed by an auxiliary plus the participle.
export const COMPOUND_TENSES = new Set([
  'presentPerfect',
  'pluperfect',
  'futurePerfect',
  'conditionalPerfect',
]);

// ---------- voseo (Argentina, Uruguay, parts of Central America) ----------
const VOSEO_EXCEPTIONS = {
  ser: { present: 'sos', imperative: 'sé' },
  ir: { present: 'vas', imperative: 'andá' },
  estar: { present: 'estás', imperative: 'está' },
  dar: { present: 'das', imperative: 'dá' },
  ver: { present: 'ves', imperative: 'mirá' },
  haber: { present: 'has', imperative: null },
};

export function voseo(infinitive) {
  const reflexive = /(ar|er|ir|ír)se$/.test(infinitive);
  const bare = reflexive ? infinitive.slice(0, -2) : infinitive;
  const exception = VOSEO_EXCEPTIONS[bare];
  const normalized = unaccent(bare);
  const end = normalized.slice(-2);
  const stem = normalized.slice(0, -2);
  let present = exception?.present;
  if (!present) {
    const ending = { ar: 'ás', er: 'és', ir: 'ís' }[end];
    // The accent in -ís is already on the ending; vowel stems keep it (leés, oís).
    present = stem + ending;
    if (end === 'ir' && /[aeo]$/.test(stem)) present = stem + 'ís';
  }
  let imperative = exception ? exception.imperative : null;
  if (!exception) {
    const base = normalized.slice(0, -1);
    const accent = { a: 'á', e: 'é', i: 'í' }[base.at(-1)];
    imperative = base.slice(0, -1) + accent;
  }
  if (reflexive) {
    present = `te ${present}`;
    // The accented final vowel loses its mark once te is attached: levantá + te = levantate.
    if (imperative) imperative = keepStress(unaccent(imperative) + 'te', 1);
  }
  return { present, imperative };
}

// ---------- describing a verb ----------
const TENSE_PATHS = [
  ['indicative', ['present', 'preterite', 'imperfect', 'future', 'conditional']],
  ['subjunctive', ['present', 'imperfect']],
];

export function describeVerb(infinitive, flags = []) {
  const real = conjugate(infinitive, flags);
  const plain = conjugatePlain(infinitive);
  const bare = infinitive.replace(/(ar|er|ir|ír)se$/, '$1');
  const irregular = Boolean(findIrregular(bare));
  let differs = false;
  for (const [group, tenses] of TENSE_PATHS) {
    for (const t of tenses) {
      if (real[group][t].join('|') !== plain[group][t].join('|')) differs = true;
    }
  }
  if (real.participle !== plain.participle || real.gerund !== plain.gerund) differs = true;
  const labels = [];
  const stem = flags.find((f) => /^[eiou]-/.test(f));
  if (irregular) labels.push('Irregular');
  if (stem) labels.push('Stem change ' + stem.replace('-', ' → '));
  if (flags.includes('iar') || flags.includes('uar')) labels.push('Accent shift');
  if (!irregular && !stem && differs) labels.push('Spelling change');
  if (/(ar|er|ir|ír)se$/.test(infinitive)) labels.push('Reflexive');
  if (!labels.length || (labels.length === 1 && labels[0] === 'Reflexive'))
    labels.unshift('Regular');
  labels.push('-' + bare.slice(-2).replace('í', 'i') + ' verb');
  return { labels, irregular, regular: !differs && !stem };
}

// Every conjugated form of a verb, for searching ("fui" finds ser and ir).
export function allForms(infinitive, flags = []) {
  const r = conjugate(infinitive, flags);
  const out = new Set([r.infinitive, r.gerund, r.participle]);
  const add = (list) => list.forEach((f) => out.add(f.replace(/^(me|te|se|nos|os) /, '')));
  Object.values(r.indicative).forEach(add);
  Object.values(r.subjunctive).forEach(add);
  add(r.imperative.affirmative);
  return [...out];
}
