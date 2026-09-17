export const normalize = text => text.toLowerCase().normalize('NFC').replace(/[¿?¡!.,]/g,'').replace(/\s+/g,' ').trim();
export function scoreAnswer(value, accepted, {strictAccents=false}={}) {
 const answer=normalize(value);
 if(accepted.some(a=>normalize(a)===answer)) return {correct:true,accent:false};
 if(strictAccents) return {correct:false,accent:false};
 // Ignore an omitted acute stress mark in learning mode, never the distinct ñ letter.
 const strip=s=>s.normalize('NFD').replace(/\u0301/g,'').normalize('NFC');
 return {correct:accepted.some(a=>strip(normalize(a))===strip(answer)),accent:true};
}
export function nextReview(previous, correct, now=Date.now()) {
 const box=correct?Math.min((previous?.box??0)+1,5):0;
 return {box,due:now+[0.02,1,3,7,14,30][box]*86400000};
}
export function loadProgress() {
 try {const p=JSON.parse(localStorage.getItem('espanol-progress-v1')); return p&&Array.isArray(p.completed)&&Array.isArray(p.mistakes)&&p.reviews ? p : {completed:[],mistakes:[],reviews:{}};}catch{return {completed:[],mistakes:[],reviews:{}};}
}
