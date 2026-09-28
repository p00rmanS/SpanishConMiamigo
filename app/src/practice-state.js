import {grammarLab} from './grammar-lab-data.js';
import {callSimulations} from './call-simulations.js';
export const practiceKey='espanol-practice-lab-v1';
export function sanitizePractice(p){return {grammar:grammarLab.filter(x=>Array.isArray(p?.grammar)&&p.grammar.includes(x.id)).map(x=>x.id),simulations:callSimulations.filter(x=>Array.isArray(p?.simulations)&&p.simulations.includes(x.id)).map(x=>x.id)};}
export function readPractice(){try{return sanitizePractice(JSON.parse(localStorage.getItem(practiceKey)));}catch{return sanitizePractice(null);}}
export const normalize=s=>s.normalize('NFC').toLowerCase().replace(/[¿?¡!.,]/g,'').replace(/\s+/g,' ').trim();
