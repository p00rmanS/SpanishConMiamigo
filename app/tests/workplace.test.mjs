import test from 'node:test';
import assert from 'node:assert/strict';
import {workplaceModules,workplaceLessons,workplaceVocabulary} from '../src/workplace-data.js';
import {lessons} from '../src/content.js';
import {scoreAnswer} from '../src/learning.js';
import {fillerGuide,fillerLessons} from '../src/filler-training.js';
import {accountTraining} from '../src/account-training.js';
import {serviceLabs} from '../src/service-labs.js';

test('CSR and TSR labs teach a sequence, a decision, and a transfer task',()=>{
 assert.equal(serviceLabs.length,20);
 for(const category of ['CSR practice labs','TSR practice labs'])assert.equal(serviceLabs.filter(l=>l.category===category).length,10);
 for(const l of serviceLabs){
  assert.equal(l.steps.length,3);
  assert.equal(l.dialogue.length,6);
  assert.ok(l.transfer.length>30);
  assert.ok(l.decision.prompt&&l.decision.why);
  assert.equal(l.decision.options.length,3);
  assert.ok(Number.isInteger(l.decision.answer)&&l.decision.answer>=0&&l.decision.answer<3);
  assert.equal(new Set(l.decision.options.map(o=>o[0])).size,3);
  for(const pair of l.decision.options)assert.ok(pair.length===2&&pair.every(v=>typeof v==='string'&&v.length>5));
  assert.ok(lessons.some(lesson=>lesson.id===l.id));
 }
});

test('filler reference links to complete daily-life and workplace practice',()=>{
 assert.equal(fillerGuide.length,16);
 assert.equal(accountTraining.length,10);
 for(const f of fillerGuide){
  assert.ok(f.term&&f.meaning&&f.kind&&f.placement&&f.register&&f.tip);
  for(const pair of [f.work,f.daily,f.alternative])assert.ok(pair.length===2&&pair.every(Boolean));
  const lesson=fillerLessons.find(l=>l.id==='work-filler-'+f.id);
  assert.ok(lessons.some(l=>l.id===lesson.id));
  assert.equal(lesson.practiceRole,'You');
  assert.equal(lesson.model,f.daily[0]);
  assert.ok(lesson.dialogue.filter(t=>t[0]===lesson.practiceRole).length===2);
  assert.ok(lesson.transfer&&lesson.placement&&lesson.register);
 }
});

test('all workplace modules are reachable as lessons with working recall answers',()=>{
 assert.equal(workplaceModules.length,98);
 assert.equal(new Set(workplaceModules.map(m=>m.id)).size,98);
 for(const m of workplaceModules){
  const lesson=lessons.find(l=>l.id===m.id);
  assert.ok(lesson,m.id+' is reachable');
  assert.equal(new Set(lesson.choices).size,3);
  assert.ok(lesson.choices.includes(lesson.answer));
  assert.ok(scoreAnswer(m.model,lesson.accepted).correct);
  assert.equal(scoreAnswer('No entiendo.',lesson.accepted).correct,false);
  assert.ok(m.practice&&m.coaching);
 }
 assert.equal(workplaceLessons.length,98);
});
test('every workplace phrase, dialogue turn, and term has bilingual support',()=>{
 for(const m of workplaceModules){
  assert.equal(m.phrases.length,3);
  for(const phrase of m.phrases){assert.equal(phrase.length,3);assert.ok(phrase.every(v=>typeof v==='string'&&v.length>5));}
  assert.ok(m.dialogue.length>=4);
  assert.ok(m.dialogue.some(t=>t[0]===(m.practiceRole||'Agent')));
  assert.ok(new Set(m.dialogue.map(t=>t[0])).size>=2);
  for(const [role,es,en] of m.dialogue){assert.ok(['Agent','Customer','You','Friend','Partner'].includes(role));assert.ok(es&&en);}
 }
 assert.equal(workplaceVocabulary.length,32);
 for(const row of workplaceVocabulary){assert.equal(row.length,3);assert.ok(row.every(Boolean));}
});
