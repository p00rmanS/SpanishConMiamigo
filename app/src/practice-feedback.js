import {normalize} from './practice-state.js';
export function practiceFeedback(input,task){
 const answers=[task.answer,...(task.accepted||[])],value=normalize(input);
 if(answers.some(a=>normalize(a)===value))return {correct:true,message:'Matches an accepted model.'};
 const accents=s=>s.replace(/[áéíóúü]/g,c=>({á:'a',é:'e',í:'i',ó:'o',ú:'u',ü:'u'}[c]));
 if(answers.some(a=>accents(normalize(a))===accents(value)))return {correct:false,message:'Check the written accents or ü. These distinguish forms such as sé/se and está/esta. Keep ñ distinct from n.'};
 const ordered=s=>s.split(' ').sort().join(' ');
 if(answers.some(a=>ordered(normalize(a))===ordered(value)))return {correct:false,message:'You have the model words. Check their order, especially pronouns and the conjugated verb.'};
 return {correct:false,message:'Compare who does the action, the requested tense, and any object pronoun. Your sentence may be valid Spanish, but this checks the requested pattern.'};
}
export function insertPracticeCharacter(value,start,end,character){const a=Math.max(0,Math.min(value.length,start)),b=Math.max(a,Math.min(value.length,end));return {value:value.slice(0,a)+character+value.slice(b),cursor:a+character.length};}
