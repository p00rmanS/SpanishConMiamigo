import test from 'node:test';
import assert from 'node:assert/strict';
import {scoreAnswer,nextReview} from '../src/learning.js';
import {lessons} from '../src/content.js';
import {verbs,grammar,phrases} from '../src/reference-data.js';
test('expanded library is complete and bilingual',()=>{assert.equal(lessons.length,168);assert.equal(verbs.length,50);assert.equal(phrases.length,50);assert.equal(grammar.length,62);for(const v of verbs){assert.equal(v.forms.length,6);assert.ok(v.translation);assert.ok(v.note);}for(const p of phrases){assert.ok(p.spanish&&p.english&&p.note);}for(const g of grammar){assert.ok(g.english&&g.taglish&&g.examples.length>=3);}});
test('ñ remains distinct from n',()=>assert.equal(scoreAnswer('Tengo veinte anos.',['Tengo veinte años.']).correct,false));
test('accepts punctuation and casing without accepting a wrong verb',()=>{assert.equal(scoreAnswer(' HOLA, ME LLAMO ANA! ',['Hola, me llamo Ana.']).correct,true);assert.equal(scoreAnswer('Hola, me llama Ana.',['Hola, me llamo Ana.']).correct,false);});
test('accent omission receives a warning',()=>{assert.deepEqual(scoreAnswer('un cafe',['Un café']),{correct:true,accent:true});});
test('failed recall resets review; successful recall increases interval',()=>{assert.deepEqual(nextReview({box:4},false,0),{box:0,due:1728000});assert.deepEqual(nextReview({box:1},true,0),{box:2,due:259200000});});
test('all authored exercises have answer keys and valid answers',()=>{assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length);for(const l of lessons){assert.ok(l.choices.includes(l.answer));assert.ok(scoreAnswer(l.reply,l.accepted).correct);for(const key of ['taglish','english','reason','key','tip','scene'])assert.ok(l[key]?.length>5);}});

import {readings} from '../src/reading-data.js';
import {tenseInfo,getForms} from '../src/verb-tenses.js';
test('readings offer bilingual practice at every level',()=>{assert.equal(readings.length,36);assert.equal(new Set(readings.map(r=>r.id)).size,36);for(const kind of ['Stories','Conversations'])for(const track of ['Beginner','Intermediate','Advanced'])assert.equal(readings.filter(r=>r.kind===kind&&r.track===track).length,kind==='Stories'?(track==='Advanced'?6:11):(track==='Beginner'?2:3));for(const r of readings){assert.ok(r.taglish&&r.tip&&r.proTip);for(const line of r.lines)assert.ok(line[0]&&line[1]);for(const q of r.questions)assert.ok(q[1][q[2]]&&q[3]);}});
test('tense tables retain irregular forms and strict accents',()=>{const hablar=verbs.find(v=>v.infinitive==='hablar');for(const tense of Object.keys(tenseInfo))assert.equal(getForms(hablar,tense).length,6);assert.equal(getForms(verbs.find(v=>v.infinitive==='hacer'),'preterite')[2],'hizo');assert.equal(getForms(verbs.find(v=>v.infinitive==='tener'),'future')[0],'tendré');assert.equal(getForms(verbs.find(v=>v.infinitive==='gustar'),'preterite'),undefined);assert.equal(scoreAnswer('hablo',['habló'],{strictAccents:true}).correct,false);assert.equal(scoreAnswer('habló',['habló'],{strictAccents:true}).correct,true);});

import {findWords,lookupUrl} from '../src/dictionary-data.js';
test('dictionary searches English and inflected forms safely',()=>{assert.ok(findWords('water').some(w=>w.word==='agua'));assert.ok(findWords('fui').some(w=>w.word==='ir'));assert.ok(findWords('fui').some(w=>w.word==='ser'));assert.ok(findWords('cafe').some(w=>w.word==='café'));assert.equal(findWords('zzzzmissing').length,0);assert.equal(findWords('anos').some(w=>w.word==='año'),false);assert.equal(lookupUrl('a/b?'),'https://www.spanishdict.com/translate/a%2Fb%3F');});



import {readingAdventures} from '../src/reading-adventures.js';
test('new reading lessons provide long dialogue, sources, and valid comprehension',()=>{
 assert.equal(readingAdventures.length,10);
 for(const r of readingAdventures){
  assert.ok(readings.some(entry=>entry.id===r.id));
  assert.ok(r.lines.length >= (r.kind==='Conversations'?24:14));
  assert.equal(r.questions.length,3);
  assert.ok(r.vocab.length>=4);
  for(const [prompt,options,answer,reason] of r.questions){assert.ok(prompt&&reason);assert.equal(new Set(options).size,3);assert.ok(Number.isInteger(answer)&&answer>=0&&answer<options.length);}
  if(r.focus.startsWith('History'))assert.ok(r.source?.[1].startsWith('https://'));
  if(r.childhood)assert.match(r.intro,/original/i);
 }
});
