// Rough English-friendly respelling of Spanish for learners: syllables joined by "·", stressed syllable in CAPS.
// It is a study aid, not a phonetic transcription.
const STRONG = 'aeoáéóíú';
const VOWELS = 'aeiouáéíóúü';
const INSEPARABLE = ['pr', 'br', 'tr', 'dr', 'cr', 'gr', 'fr', 'pl', 'bl', 'cl', 'gl', 'fl', 'kr'];
const isVowel = (c) => VOWELS.includes(c);

function splitUnits(word) {
  // Treat digraphs as single consonant units so they are never split.
  const units = [];
  for (let i = 0; i < word.length; i++) {
    const two = word.slice(i, i + 2);
    if (['ch', 'll', 'rr'].includes(two)) {
      units.push(two);
      i++;
    } else if (two === 'qu' && 'eiéí'.includes(word[i + 2] ?? '')) {
      units.push('qu');
      i++;
    } else if (two === 'gu' && 'eiéí'.includes(word[i + 2] ?? '')) {
      units.push('gu');
      i++;
    } else {
      units.push(word[i]);
    }
  }
  return units;
}

export function syllabify(word) {
  const units = splitUnits(word);
  const vowelAt = (u, idx) =>
    isVowel(u[0]) || (u === 'y' && idx === units.length - 1 && idx > 0 && isVowel(units[idx - 1]));
  const nuclei = [];
  let i = 0;
  while (i < units.length) {
    if (vowelAt(units[i], i)) {
      let j = i;
      while (
        j + 1 < units.length &&
        vowelAt(units[j + 1], j + 1) &&
        !(STRONG.includes(units[j]) && STRONG.includes(units[j + 1])) &&
        !'íú'.includes(units[j]) &&
        !'íú'.includes(units[j + 1])
      )
        j++;
      nuclei.push([i, j]);
      i = j + 1;
    } else i++;
  }
  if (nuclei.length < 2) return [units.join('')];
  const cuts = [];
  for (let n = 0; n < nuclei.length - 1; n++) {
    const from = nuclei[n][1] + 1;
    const to = nuclei[n + 1][0];
    const cons = units.slice(from, to);
    let cut = to;
    if (cons.length === 1) cut = from;
    else if (cons.length === 2) cut = INSEPARABLE.includes(cons.join('')) ? from : from + 1;
    else if (cons.length >= 3)
      cut = INSEPARABLE.includes(cons.slice(-2).join('')) ? to - 2 : to - 1;
    else cut = to;
    if (cons.length === 0) cut = nuclei[n][1] + 1; // hiatus: vowels split between syllables
    cuts.push(cut);
  }
  const out = [];
  let start = 0;
  for (const c of cuts) {
    out.push(units.slice(start, c).join(''));
    start = c;
  }
  out.push(units.slice(start).join(''));
  return out;
}

function stressIndex(syllables) {
  const accented = syllables.findIndex((s) => /[áéíóú]/.test(s));
  if (accented >= 0) return accented;
  const last = syllables.at(-1);
  const endsSoft = /[aeiouns]$/.test(last);
  return endsSoft ? Math.max(syllables.length - 2, 0) : syllables.length - 1;
}

function respell(syl) {
  // "ʜ" marks the Spanish j sound until silent h letters are gone.
  return syl
    .replace(/(?<!c)h/g, '')
    .replace(/qu([eiéí])/g, 'k$1')
    .replace(/gu([eiéí])/g, 'ɡ$1')
    .replace(/g([eiéí])/g, 'ʜ$1')
    .replace(/c([eiéí])/g, 's$1')
    .replace(/ch/g, 'ʃ')
    .replace(/c/g, 'k')
    .replace(/z/g, 's')
    .replace(/ll/g, 'y')
    .replace(/ñ/g, 'ny')
    .replace(/j/g, 'ʜ')
    .replace(/v/g, 'b')
    .replace(/x/g, 'ks')
    .replace(/ü/g, 'u')
    .replace(/[áàä]/g, 'a')
    .replace(/[éèë]/g, 'e')
    .replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o')
    .replace(/[úù]/g, 'u')
    .replace(/ʜ/g, 'h')
    .replace(/ɡ/g, 'gh')
    .replace(/ʃ/g, 'ch');
}

export function pronounceWord(word) {
  const lower = word.toLowerCase();
  const syllables = syllabify(lower);
  const stress = syllables.length > 1 ? stressIndex(syllables) : -1;
  return syllables
    .map((s, idx) => {
      const r = respell(s);
      return idx === stress ? r.toUpperCase() : r;
    })
    .join('·');
}

export function pronounce(text) {
  return text
    .replace(/[¿?¡!.,;:…"“”()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map(pronounceWord)
    .join(' ');
}
