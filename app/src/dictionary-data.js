import {verbs} from './reference-data.js';
import {tenseTables} from './verb-tenses.js';
const words=[
['casa','la','house; home','Estoy en casa.','I am at home.','En casa means nasa bahay. Learn la casa together.'],
['libro','el','book','Leo un libro.','I read a book.','El libro is singular; los libros is plural.'],
['agua','el','water','Quiero agua fría.','I want cold water.','Agua is feminine, pero el agua sa singular dahil stressed ang initial a. Adjective stays feminine: fría.'],
['café','el','coffee; café','Tomo café por la mañana.','I drink coffee in the morning.','May accent sa é: ca-FÉ.'],
['tiempo','el','time; weather','No tengo tiempo.','I do not have time.','Context matters: tiempo can mean oras or weather.'],
['año','el','year','Tengo veinte años.','I am twenty years old.','Keep ñ: ibang letter ito, hindi ordinary n.'],
['día','el','day','Hoy es un buen día.','Today is a good day.','Masculine ang día kahit nagtatapos sa a.'],
['noche','la','night','Trabajo por la noche.','I work at night.','Por la noche means at night.'],
['pregunta','la','question','Tengo una pregunta.','I have a question.','Hacer una pregunta means magtanong.'],
['respuesta','la','answer; response','No sé la respuesta.','I do not know the answer.','La respuesta is the answer; responder is the verb.'],
['amigo','el','friend (male)','Luis es mi amigo.','Luis is my friend.','For a female friend, use amiga.'],
['familia','la','family','Mi familia vive aquí.','My family lives here.','Familia is singular as a group, kaya vive.'],
['comida','la','food; meal','La comida está lista.','The food is ready.','Comer is to eat; comida is food or a meal.'],
['trabajo','el','work; job','Busco trabajo.','I am looking for work.','Trabajo can also mean I work. Sentence context tells you.'],
['ciudad','la','city','Vivo en una ciudad pequeña.','I live in a small city.','Feminine: una ciudad pequeña.'],
['calle','la','street','La calle es tranquila.','The street is quiet.','Use en for location: en esta calle.'],
['dinero','el','money','Necesito dinero.','I need money.','Usually uncountable: dinero, not dineros for everyday money.'],
['mesa','la','table','El libro está en la mesa.','The book is on the table.','En can mean on or in; dito it means on.'],
['puerta','la','door','La puerta está abierta.','The door is open.','Abierta agrees with feminine puerta.'],
['viaje','el','trip; journey','El viaje empieza mañana.','The trip starts tomorrow.','Viaje is a noun; viajar is to travel.']
];
export const dictionary=[...verbs.map(v=>({word:v.infinitive,type:'Verb',meaning:v.meaning,example:v.example,translation:v.translation,note:v.note,forms:[...v.forms,...Object.values(tenseTables[v.infinitive]||{}).flat()]})),...words.map(([word,article,meaning,example,translation,note])=>({word,article,type:'Noun',meaning,example,translation,note,forms:[]}))];
export const dictionaryKey=s=>s.toLowerCase().normalize('NFD').replace(/\u0301/g,'').normalize('NFC').trim();
export function findWords(query,type='All') {const q=dictionaryKey(query);return dictionary.filter(w=>(type==='All'||w.type===type)&&(!q||[w.word,w.meaning,...w.forms].some(s=>dictionaryKey(s).includes(q)))).sort((a,b)=>Number(dictionaryKey(b.word)===q)-Number(dictionaryKey(a.word)===q)||a.word.localeCompare(b.word,'es'));}
export const lookupUrl=q=>'https://www.spanishdict.com/translate/'+encodeURIComponent(q.trim());
