// Adjective agreement: masculine and feminine, singular and plural, shortened forms before
// a noun, and the -ísimo superlative.

const NO_FEMININE_CHANGE = new Set([
  'común',
  'mejor',
  'peor',
  'mayor',
  'menor',
  'superior',
  'inferior',
  'exterior',
  'interior',
  'anterior',
  'posterior',
  'ulterior',
  'joven',
  'jamón',
]);
const IRREGULAR_PLURAL = { joven: 'jóvenes', común: 'comunes' };
const IRREGULAR_SUPERLATIVE = {
  fuerte: 'fortísimo',
  nuevo: 'novísimo',
  antiguo: 'antiquísimo',
  cierto: 'certísimo',
  fiel: 'fidelísimo',
  simple: 'simplicísimo',
  pobre: 'paupérrimo',
  joven: 'jovencísimo',
  caliente: 'calentísimo',
  bueno: 'buenísimo',
  malo: 'malísimo',
  sabio: 'sapientísimo',
  amigo: 'amicísimo',
  cruel: 'crudelísimo',
  mísero: 'miserrímo',
  célebre: 'celebérrimo',
  libre: 'libérrimo',
  pulcro: 'pulquérrimo',
  sagrado: 'sacratísimo',
  bonito: 'bonitísimo',
};
const APOCOPE = {
  bueno: 'buen',
  malo: 'mal',
  primero: 'primer',
  tercero: 'tercer',
  alguno: 'algún',
  ninguno: 'ningún',
  grande: 'gran',
  santo: 'san',
  uno: 'un',
  postrero: 'postrer',
};

const unaccentLast = (s) =>
  s
    .replace(/á(?=[ns]?$)/, 'a')
    .replace(/é(?=[ns]?$)/, 'e')
    .replace(/í(?=[ns]?$)/, 'i')
    .replace(/ó(?=[ns]?$)/, 'o')
    .replace(/ú(?=[ns]?$)/, 'u');

function pluralOf(word) {
  if (IRREGULAR_PLURAL[word]) return IRREGULAR_PLURAL[word];
  if (/[aeiou]$/.test(word)) return word + 's';
  if (/[áéóú]$/.test(word)) return word + 's';
  if (/í$/.test(word)) return word + 'es';
  if (/z$/.test(word)) return word.slice(0, -1) + 'ces';
  // Words ending in -n or -s with a written accent on the last vowel lose it in the plural.
  if (/[áéíóú][ns]$/.test(word)) return unaccentLast(word) + 'es';
  if (/s$/.test(word)) return /^[^aeiou]*[aeiou]+[^aeiou]*s$/.test(word) ? word + 'es' : word; // gris -> grises
  return word + 'es';
}

export function superlativeOf(masc) {
  if (IRREGULAR_SUPERLATIVE[masc]) return IRREGULAR_SUPERLATIVE[masc];
  let stem = masc;
  if (/ble$/.test(stem)) return stem.slice(0, -3) + 'bilísimo';
  if (/io$/.test(stem)) stem = stem.slice(0, -2);
  else if (/[aeo]$/.test(stem)) stem = stem.slice(0, -1);
  else if (/z$/.test(stem)) stem = stem.slice(0, -1) + 'c';
  else if (/[nr]$/.test(stem)) stem += 'c';
  stem = stem.replace(/[áéíóú]/g, (c) => ({ á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' })[c]);
  if (/c$/.test(stem) && /[aeo]$/.test(masc)) stem = stem.slice(0, -1) + 'qu';
  else if (/g$/.test(stem) && /[aeo]$/.test(masc)) stem += 'u';
  else if (/z$/.test(stem)) stem = stem.slice(0, -1) + 'c';
  return stem + 'ísimo';
}

export function adjectiveForms(masc, flags = []) {
  const invariable = flags.includes('inv');
  let fem = masc;
  if (invariable) fem = masc;
  else if (/o$/.test(masc)) fem = masc.slice(0, -1) + 'a';
  else if (!NO_FEMININE_CHANGE.has(masc) && /(dor|tor|sor|ón|án|ín|és|ol|ín)$/.test(masc)) {
    fem = unaccentLast(masc) + 'a';
  }
  const mp = invariable ? masc : pluralOf(masc);
  const fp = invariable ? masc : pluralOf(fem);
  const forms = { ms: masc, fs: fem, mp, fp, short: APOCOPE[masc] ?? null };
  const noSuperlative =
    flags.includes('ng') ||
    (/(dor|tor|ón|án|ín|és|ol)$/.test(masc) && !NO_FEMININE_CHANGE.has(masc)) ||
    invariable;
  forms.superlative = noSuperlative ? null : superlativeOf(masc);
  return forms;
}

// Short example sentences that show the four forms in use.
export function agreementExamples(masc, flags = []) {
  const f = adjectiveForms(masc, flags);
  const verb = flags.includes('e') ? ['está', 'están'] : ['es', 'son'];
  return [
    `El chico ${verb[0]} ${f.ms}.`,
    `La chica ${verb[0]} ${f.fs}.`,
    `Los chicos ${verb[1]} ${f.mp}.`,
    `Las chicas ${verb[1]} ${f.fp}.`,
  ];
}
