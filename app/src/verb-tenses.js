const split=s=>s.split(',');
const rows=[
 ['hablar','hablé,hablaste,habló,hablamos,hablasteis,hablaron','hablaba,hablabas,hablaba,hablábamos,hablabais,hablaban','hable,hables,hable,hablemos,habléis,hablen','hablado','hablar'],
 ['comer','comí,comiste,comió,comimos,comisteis,comieron','comía,comías,comía,comíamos,comíais,comían','coma,comas,coma,comamos,comáis,coman','comido','comer'],
 ['vivir','viví,viviste,vivió,vivimos,vivisteis,vivieron','vivía,vivías,vivía,vivíamos,vivíais,vivían','viva,vivas,viva,vivamos,viváis,vivan','vivido','vivir'],
 ['ser','fui,fuiste,fue,fuimos,fuisteis,fueron','era,eras,era,éramos,erais,eran','sea,seas,sea,seamos,seáis,sean','sido','ser'],
 ['estar','estuve,estuviste,estuvo,estuvimos,estuvisteis,estuvieron','estaba,estabas,estaba,estábamos,estabais,estaban','esté,estés,esté,estemos,estéis,estén','estado','estar'],
 ['tener','tuve,tuviste,tuvo,tuvimos,tuvisteis,tuvieron','tenía,tenías,tenía,teníamos,teníais,tenían','tenga,tengas,tenga,tengamos,tengáis,tengan','tenido','tendr'],
 ['ir','fui,fuiste,fue,fuimos,fuisteis,fueron','iba,ibas,iba,íbamos,ibais,iban','vaya,vayas,vaya,vayamos,vayáis,vayan','ido','ir'],
 ['hacer','hice,hiciste,hizo,hicimos,hicisteis,hicieron','hacía,hacías,hacía,hacíamos,hacíais,hacían','haga,hagas,haga,hagamos,hagáis,hagan','hecho','har'],
 ['poder','pude,pudiste,pudo,pudimos,pudisteis,pudieron','podía,podías,podía,podíamos,podíais,podían','pueda,puedas,pueda,podamos,podáis,puedan','podido','podr'],
 ['querer','quise,quisiste,quiso,quisimos,quisisteis,quisieron','quería,querías,quería,queríamos,queríais,querían','quiera,quieras,quiera,queramos,queráis,quieran','querido','querr'],
 ['decir','dije,dijiste,dijo,dijimos,dijisteis,dijeron','decía,decías,decía,decíamos,decíais,decían','diga,digas,diga,digamos,digáis,digan','dicho','dir'],
 ['venir','vine,viniste,vino,vinimos,vinisteis,vinieron','venía,venías,venía,veníamos,veníais,venían','venga,vengas,venga,vengamos,vengáis,vengan','venido','vendr']
];
export const tenseInfo={
 present:{label:'Present · presente',track:'Beginner',explanation:'Habit o current situation: hablo = I speak. Learn the person endings before adding more tenses.',tip:'The present also expresses some near-future plans in context.',example:['Hablo español cada día.','I speak Spanish every day.']},
 preterite:{label:'Preterite · indefinido',track:'Intermediate',explanation:'Past event viewed as a completed whole. Tinatawag ding pretérito perfecto simple. Hindi ibig sabihin ng indefinido na vague ang oras.',tip:'Hablo and habló are different forms. Accents are required in these tense drills.',example:['Ayer hablé con Ana.','Yesterday I spoke with Ana.']},
 imperfect:{label:'Imperfect · imperfecto',track:'Intermediate',explanation:'Background, habit, or ongoing past situation. Hindi naka-focus sa beginning at endpoint.',tip:'Imperfect does not mean never finished. It describes the viewpoint used in the story.',example:['De niño, hablaba con mi abuela cada día.','As a child, I used to talk with my grandmother every day.']},
 perfect:{label:'Present perfect · perfecto compuesto',track:'Intermediate',explanation:'Haber in the present + participle. He hablado = I have spoken. The participle does not change for gender after haber.',tip:'Use varies by region. A recent event does not automatically require this tense for every Spanish speaker.',example:['Hoy he hablado con Ana.','Today I have spoken with Ana.']},
 future:{label:'Future · futuro simple',track:'Intermediate',explanation:'For a future statement, regular verbs keep the infinitive and add é, ás, á, emos, éis, án. Some verbs have irregular stems.',tip:'Tener uses tendr-, hacer har-, decir dir-. The endings stay the same.',example:['Mañana hablaré con Ana.','Tomorrow I will speak with Ana.']},
 conditional:{label:'Conditional · condicional',track:'Advanced',explanation:'A hypothetical result, future-from-the-past, or polite preference. Common English equivalent: would.',tip:'Shares irregular stems with the future. Not every English would translates to the conditional.',example:['Con más tiempo, hablaría con todos.','With more time, I would speak with everyone.']},
 subjunctive:{label:'Present subjunctive · subjuntivo',track:'Advanced',explanation:'A mood used in patterns involving wishes, influence, doubt, and more. Hindi lang “uncertain tense.” The surrounding clause matters.',tip:'Quiero hablar = I want to speak. Quiero que hables = I want you to speak.',example:['Quiero que hables con Ana.','I want you to speak with Ana.']}
};
export const tenseTables=Object.fromEntries(rows.map(([verb,preterite,imperfect,subjunctive,participle,stem])=>[verb,{preterite:split(preterite),imperfect:split(imperfect),subjunctive:split(subjunctive),perfect:split('he,has,ha,hemos,habéis,han').map(v=>v+' '+participle),future:split('é,ás,á,emos,éis,án').map(e=>stem+e),conditional:split('ía,ías,ía,íamos,íais,ían').map(e=>stem+e)}]));
export function getForms(verb,tense){return tense==='present'?verb.forms:tenseTables[verb.infinitive]?.[tense];}
