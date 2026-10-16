import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons } from '../src/content.js';
import { pronounce, pronounceWord, syllabify } from '../src/lib/pronounce.js';

test('every lesson has distinct, meaningful teaching support', () => {
  for (const l of lessons) {
    assert.notEqual(l.taglish, l.goal, `${l.id}: taglish repeats the goal`);
    assert.notEqual(l.key, l.goal, `${l.id}: key idea repeats the goal`);
    assert.ok(l.taglish.length > 30, `${l.id}: taglish too short`);
    assert.ok(l.tip && l.tipDetail, `${l.id}: missing tip`);
    assert.doesNotMatch(l.sound, /^Listen/, `${l.id}: generic pronunciation line`);
  }
});

test('lesson tips and sentences are not duplicated across lessons', () => {
  const sentences = lessons.map((l) => l.sentence);
  assert.equal(new Set(sentences).size, sentences.length);
  const workTips = lessons.filter((l) => l.id.startsWith('work-')).map((l) => l.tip);
  assert.equal(new Set(workTips).size, workTips.length);
});

test('no hard-coded personal name in learner-facing content', () => {
  assert.ok(!lessons.some((l) => JSON.stringify(l).includes('James')));
});

test('pronunciation helper syllabifies and stresses Spanish words', () => {
  assert.deepEqual(syllabify('hola'), ['ho', 'la']);
  assert.deepEqual(syllabify('contraseña'), ['con', 'tra', 'se', 'ña']);
  assert.equal(pronounceWord('hola'), 'O·la');
  assert.equal(pronounceWord('gracias'), 'GRA·sias');
  assert.equal(pronounceWord('mañana'), 'ma·NYA·na');
  assert.equal(pronounceWord('café'), 'ka·FE');
  assert.equal(pronounceWord('guitarra'), 'ghi·TA·rra');
  assert.equal(pronounceWord('jueves'), 'HUE·bes');
  assert.equal(pronounce('¿Cómo estás?'), 'KO·mo es·TAS');
});

test('dictionary entries are complete and searchable in English, Spanish and Tagalog', async () => {
  const { dictionary, findWords } = await import('../src/dictionary-data.js');
  assert.ok(dictionary.length >= 350);
  for (const w of dictionary) {
    assert.ok(w.word && w.meaning && w.example && w.translation, `${w.word} is incomplete`);
  }
  assert.ok(findWords('palengke').some((w) => w.word === 'mercado'));
  assert.ok(findWords('contraseña').some((w) => w.type === 'Noun'));
  assert.ok(findWords('however').some((w) => w.word === 'sin embargo'));
});

test('reference content has authored Taglish for every phrase, verb, term and filler', async () => {
  const { phrases, verbs } = await import('../src/reference-data.js');
  const { workplaceVocabulary } = await import('../src/workplace-data.js');
  const { fillerGuide } = await import('../src/filler-training.js');
  for (const p of phrases) assert.ok(p.taglish?.length > 15, `phrase ${p.spanish}`);
  for (const v of verbs) assert.ok(v.taglish?.length > 15, `verb ${v.infinitive}`);
  for (const r of workplaceVocabulary) assert.ok(r[3], `term ${r[0]}`);
  for (const f of fillerGuide) assert.ok(f.taglish?.length > 15, `filler ${f.id}`);
});
