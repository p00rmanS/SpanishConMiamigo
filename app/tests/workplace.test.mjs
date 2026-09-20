import test from 'node:test';
import assert from 'node:assert/strict';
import {workplaceModules,workplaceLessons,workplaceVocabulary} from '../src/workplace-data.js';
import {lessons} from '../src/content.js';
import {scoreAnswer} from '../src/learning.js';

test('all workplace modules are reachable as lessons with working recall answers',()=>{
 assert.equal(workplaceModules.length,24);
 assert.equal(new Set(workplaceModules.map(m=>m.id)).size,24);
 for(const m of workplaceModules){
  const lesson=lessons.find(l=>l.id===m.id);
  assert.ok(lesson,m.id+' is reachable');
  assert.equal(new Set(lesson.choices).size,3);
  assert.ok(lesson.choices.includes(lesson.answer));
  assert.ok(scoreAnswer(m.model,lesson.accepted).correct);
  assert.equal(scoreAnswer('No entiendo.',lesson.accepted).correct,false);
  assert.ok(m.practice&&m.coaching);
 }
 assert.equal(workplaceLessons.length,24);
});
test('every workplace phrase, dialogue turn, and term has bilingual support',()=>{
 for(const m of workplaceModules){
  assert.equal(m.phrases.length,3);
  for(const phrase of m.phrases){assert.equal(phrase.length,3);assert.ok(phrase.every(v=>typeof v==='string'&&v.length>5));}
  assert.ok(m.dialogue.length>=4);
  assert.ok(m.dialogue.some(t=>t[0]==='Agent')&&m.dialogue.some(t=>t[0]==='Customer'));
  for(const [role,es,en] of m.dialogue){assert.ok(['Agent','Customer'].includes(role));assert.ok(es&&en);}
 }
 assert.equal(workplaceVocabulary.length,32);
 for(const row of workplaceVocabulary){assert.equal(row.length,3);assert.ok(row.every(Boolean));}
});
