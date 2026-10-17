// Conjunctions and connectors: word | English | Tagalog | category | mood | example | translation | note | Taglish.
// mood: none = no verb-mood rule, indicative, subjunctive, or both.
const TABLE = `
y|and|at|addition|none|Como pan y queso.|I eat bread and cheese.|Becomes e before i- and hi- sounds.|Y = at. Nagiging e bago ang salitang nagsisimula sa i- o hi-: padres e hijos.
e|and (before i-, hi-)|at (bago ang i-/hi-)|addition|none|Padres e hijos.|Parents and children.|Replaces y before i- and hi- (but not hie-).|E = at. Ginagamit sa halip na y para hindi magsunod ang dalawang "i": español e inglés.
ni|nor; not even|ni; at hindi rin|addition|none|No como carne ni pescado.|I eat neither meat nor fish.|Use ni… ni… for neither… nor.|Ni = ni. Sa negatibo: no como carne ni pescado = hindi ako kumakain ng karne ni isda.
además|besides; also|bukod pa|addition|none|Es barato; además, es rápido.|It is cheap; besides, it is fast.|Adds a point; usually followed by a comma.|Además = bukod pa roon. Nagdaragdag ng punto sa argumento.
también|also; too|din; rin|addition|none|Yo también tengo hambre.|I am hungry too.|Goes before or after the verb.|También = din / rin. Hindi ito para sa negatibo: gamitin ang tampoco.
tampoco|neither; either (negative)|din (sa negatibo)|addition|none|Yo tampoco entiendo.|I do not understand either.|The negative counterpart of también.|Tampoco = hindi rin. Kabaligtaran ng también.
asimismo|likewise|gayundin|addition|none|Asimismo, enviaremos un correo.|Likewise, we will send an email.|Formal; common in writing.|Asimismo = gayundin. Mas pormal kaysa también.
incluso|even; including|maging; kahit|addition|none|Incluso mi jefe vino.|Even my boss came.|Adds a surprising or extreme example.|Incluso = maging. Para sa hindi inaasahang halimbawa.
es más|what is more|higit pa rito|addition|none|Es más, ya lo sabía.|What is more, I already knew.|Strengthens the previous point.|Es más = higit pa rito. Nagpapalakas ng naunang punto.
o|or|o|choice|none|¿Café o té?|Coffee or tea?|Becomes u before o- and ho- sounds.|O = o. Nagiging u bago ang o-/ho-: siete u ocho.
u|or (before o-, ho-)|o (bago ang o-/ho-)|choice|none|Siete u ocho.|Seven or eight.|Replaces o before o- and ho- sounds.|U = o. Para hindi magsunod ang dalawang "o".
o bien|or else|o kaya|choice|none|Llama o bien escribe.|Call or else write.|A more formal alternative to o.|O bien = o kaya. Mas pormal na "o".
sea… o…|whether… or…|maging… o…|choice|subjunctive|Sea lunes o martes, vendré.|Whether it is Monday or Tuesday, I will come.|The verb sea stays singular.|Sea… o… = maging… o… Subjunctive; laging isahan ang sea.
ya sea… o…|be it… or…|maging… o…|choice|subjunctive|Ya sea hoy o mañana, llámame.|Be it today or tomorrow, call me.|Emphasizes that either option works.|Ya sea… o… = maging… o… Diin sa pagpili ng alinman.
pero|but|ngunit; pero|contrast|none|Quiero ir, pero no puedo.|I want to go, but I cannot.|The most common contrast word.|Pero = ngunit. Pangkaraniwang pang-ugnay ng salungat na ideya.
sino|but rather|kundi|contrast|none|No es rojo, sino azul.|It is not red but blue.|Used after a negative to correct it.|Sino = kundi. Pagkatapos ng negatibo: hindi pula, kundi asul.
sino que|but rather (before a clause)|kundi|contrast|indicative|No solo llegó tarde, sino que no se disculpó.|He not only arrived late but did not apologize.|Use sino que before a conjugated verb.|Sino que = kundi. Ginagamit bago ang buong sugnay na may pandiwa.
sin embargo|however|gayunpaman|contrast|none|Es caro; sin embargo, es bueno.|It is expensive; however, it is good.|Usually after a semicolon or period.|Sin embargo = gayunpaman. Pagkatapos ng tuldok-kuwit o tuldok.
no obstante|nevertheless|gayunpaman|contrast|none|Lo intentó; no obstante, falló.|He tried; nevertheless, he failed.|Formal.|No obstante = gayunpaman. Mas pormal kaysa sin embargo.
en cambio|on the other hand|samantala|contrast|none|Yo trabajo; ella, en cambio, descansa.|I work; she, on the other hand, rests.|Contrasts two subjects.|En cambio = samantala. Pinaghahambing ang dalawang tao o bagay.
mientras que|whereas|samantalang|contrast|indicative|Yo estudio, mientras que él juega.|I study whereas he plays.|Contrasts two actions.|Mientras que = samantalang. Hindi ito "habang" (mientras).
aunque|although; even if|kahit na|concession|both|Aunque llueva, salimos.|Even if it rains, we go out.|Indicative for a known fact; subjunctive for a hypothetical.|Aunque = kahit na. Indicative kung totoo; subjunctive kung hindi tiyak.
a pesar de que|even though|kahit na|concession|indicative|A pesar de que estaba cansado, siguió.|Even though he was tired, he continued.|Short form: a pesar de + noun or infinitive.|A pesar de que = kahit na. Sa pangngalan lang: a pesar de la lluvia.
por más que|no matter how much|kahit gaano pa|concession|subjunctive|Por más que insistas, no cambiaré.|No matter how much you insist, I will not change.|Also por mucho que.|Por más que = kahit gaano pa. Subjunctive para sa hindi pa tiyak na epekto.
aun así|even so|kahit ganoon|concession|none|Aun así, iré.|Even so, I will go.|Concedes a point and continues.|Aun así = kahit ganoon. Tinatanggap ang punto pero tuloy pa rin.
porque|because|dahil; kasi|cause|indicative|No voy porque estoy enfermo.|I am not going because I am sick.|Answers ¿por qué?|Porque = dahil. Sagot sa ¿por qué? (bakit).
puesto que|since; given that|yamang|cause|indicative|Puesto que llueve, nos quedamos.|Since it is raining, we stay.|Known reason; often at the start.|Puesto que = yamang. Dahilang alam na ng lahat.
ya que|since; now that|yamang|cause|indicative|Ya que estás aquí, ayúdame.|Since you are here, help me.|Reason that is already true.|Ya que = yamang. Dahilang totoo na ngayon.
como|since; as|yamang; dahil|cause|indicative|Como llovía, no salimos.|Since it was raining, we did not go out.|At the start of a sentence, como gives a reason.|Como = yamang. Sa simula ng pangungusap, nagbibigay ito ng dahilan.
dado que|given that|dahil sa|cause|indicative|Dado que es tarde, cerramos.|Given that it is late, we close.|Formal.|Dado que = dahil sa. Pormal.
debido a que|due to the fact that|dahil sa|cause|indicative|Debido a que hay obras, cierran la calle.|Because of roadworks, the street is closed.|Short form: debido a + noun.|Debido a que = dahil sa katotohanang. Sa pangngalan: debido a las obras.
por eso|that is why|kaya|consequence|none|Llovía; por eso no salimos.|It was raining; that is why we did not go out.|Cause comes first, then por eso.|Por eso = kaya. Una ang dahilan, saka ang resulta.
por lo tanto|therefore|samakatuwid|consequence|none|Estudió; por lo tanto, aprobó.|He studied; therefore, he passed.|Logical conclusion.|Por lo tanto = samakatuwid. Lohikal na konklusyon.
por consiguiente|consequently|dahil dito|consequence|none|Por consiguiente, cancelamos.|Consequently, we cancel.|Formal.|Por consiguiente = dahil dito. Pormal.
así que|so|kaya|consequence|indicative|Estaba cansado, así que me fui.|I was tired, so I left.|Everyday and common.|Así que = kaya. Pang-araw-araw na "kaya".
de modo que|so that; so|kaya; upang|consequence|both|Llegó tarde, de modo que perdió el tren.|He arrived late, so he missed the train.|Subjunctive when it expresses purpose.|De modo que = kaya. Subjunctive kung layunin ang ibig sabihin.
entonces|then; so|kung gayon|consequence|none|Entonces, empezamos.|Then, let us begin.|Also a filler in speech.|Entonces = kung gayon. Madalas ding pampuno sa usapan.
si|if|kung|condition|indicative|Si llueve, me quedo.|If it rains, I stay.|Imperfect subjunctive for imaginary situations.|Si = kung. Present indicative para sa totoo; imperfect subjunctive para sa haka-haka.
siempre que|as long as; whenever|basta; tuwing|condition|both|Voy siempre que puedo.|I go whenever I can.|Subjunctive for a condition about the future.|Siempre que = basta o tuwing. Subjunctive kung kondisyon sa hinaharap.
a menos que|unless|maliban kung|condition|subjunctive|Voy a menos que llueva.|I go unless it rains.|Always the subjunctive.|A menos que = maliban kung. Laging subjunctive.
con tal de que|provided that|basta|condition|subjunctive|Te ayudo con tal de que estudies.|I will help you provided that you study.|Always the subjunctive.|Con tal de que = basta. Laging subjunctive.
en caso de que|in case|kung sakaling|condition|subjunctive|En caso de que llames, estaré aquí.|In case you call, I will be here.|Always the subjunctive.|En caso de que = kung sakaling. Laging subjunctive.
siempre y cuando|as long as|hangga't|condition|subjunctive|Iré siempre y cuando me inviten.|I will go as long as they invite me.|Stronger than siempre que.|Siempre y cuando = hangga't. Mas mahigpit na kondisyon.
para que|so that|upang; para|purpose|subjunctive|Hablo despacio para que entiendas.|I speak slowly so that you understand.|Different subject = para que; same subject = para + infinitive.|Para que = upang. Iba ang gumagawa: para que entiendas. Pareho: para entender.
a fin de que|in order that|upang|purpose|subjunctive|Lo explico a fin de que todos entiendan.|I explain it so everyone understands.|Formal.|A fin de que = upang. Pormal na "para que".
con el fin de que|with the aim that|upang|purpose|subjunctive|Trabajo con el fin de que mis hijos estudien.|I work so that my children can study.|Formal.|Con el fin de que = upang. Pormal; subjunctive.
cuando|when|kapag; noong|time|both|Cuando llego, te llamo.|When I arrive, I will call you.|Subjunctive when the action has not happened yet.|Cuando = kapag. Habit o nakaraan: indicative. Hindi pa nangyayari: subjunctive (cuando llegue).
mientras|while|habang|time|both|Leo mientras espero.|I read while I wait.|Subjunctive for a future period (mientras viva).|Mientras = habang. Subjunctive sa hinaharap na panahon.
antes de que|before|bago|time|subjunctive|Llámame antes de que salgas.|Call me before you leave.|Always the subjunctive.|Antes de que = bago. Laging subjunctive; kung pareho ang gumagawa: antes de + infinitive.
después de que|after|pagkatapos|time|both|Después de que comimos, salimos.|After we ate, we went out.|Subjunctive for a future event.|Después de que = pagkatapos. Subjunctive kung hindi pa nangyayari.
en cuanto|as soon as|sa sandaling|time|both|En cuanto llegue, te aviso.|As soon as I arrive, I will let you know.|Subjunctive for the future.|En cuanto = sa sandaling. Subjunctive kung hinaharap.
tan pronto como|as soon as|sa sandaling|time|both|Tan pronto como termine, voy.|As soon as I finish, I will go.|Same as en cuanto.|Tan pronto como = sa sandaling. Katulad ng en cuanto.
hasta que|until|hanggang|time|both|Espera hasta que vuelva.|Wait until I come back.|Subjunctive for the future.|Hasta que = hanggang. Subjunctive kung hindi pa nangyayari.
desde que|since|mula nang|time|indicative|Vivo aquí desde que nací.|I have lived here since I was born.|Always the indicative.|Desde que = mula nang. Laging indicative.
apenas|as soon as; barely|pagkaraan lamang|time|both|Apenas llegó, sonó el teléfono.|As soon as he arrived, the phone rang.|Also means barely.|Apenas = pagkaraan lamang; o halos hindi.
cada vez que|every time|tuwing|time|both|Cada vez que llamo, está ocupado.|Every time I call, he is busy.|Subjunctive for a future repeated event.|Cada vez que = tuwing. Indicative kung nangyari/nangyayari; subjunctive kung hinaharap.
como si|as if|parang|comparison|subjunctive|Corre como si llegara tarde.|He runs as if he were late.|Always the imperfect or pluperfect subjunctive.|Como si = parang. Laging imperfect o pluperfect subjunctive.
que|that; than|na; kaysa|comparison|both|Dice que viene.|He says he is coming.|The most common subordinator; the mood depends on the main verb.|Que = na o kaysa. Ang mood ay nakadepende sa pangunahing pandiwa.
tan… como|as… as|kasing-…|comparison|none|Es tan alto como su padre.|He is as tall as his father.|Tan before adjectives and adverbs.|Tan… como = kasing-… ng. Tan bago ang adjective.
así como|just as; as well as|tulad ng|comparison|none|Habla inglés así como español.|He speaks English as well as Spanish.|Adds a similar item.|Así como = tulad ng. Nagdaragdag ng katulad na bagay.
primero|first|una|order|none|Primero, lee la regla.|First, read the rule.|Starts a sequence.|Primero = una. Simula ng pagkakasunod-sunod.
luego|then; later|pagkatapos|order|none|Luego, escribe la respuesta.|Then, write the answer.|Next step in a sequence.|Luego = pagkatapos. Susunod na hakbang.
finalmente|finally|sa wakas|order|none|Finalmente, revisa el texto.|Finally, check the text.|Last step.|Finalmente = sa wakas. Huling hakbang.
en definitiva|in short|sa madaling salita|clarification|none|En definitiva, es una buena idea.|In short, it is a good idea.|Concludes an argument.|En definitiva = sa madaling salita. Pangwakas ng argumento.
en resumen|in summary|sa buod|clarification|none|En resumen, salimos mañana.|In summary, we leave tomorrow.|Summarizes.|En resumen = sa buod.
por ejemplo|for example|halimbawa|clarification|none|Por ejemplo, el café.|For example, coffee.|Introduces an example.|Por ejemplo = halimbawa.
o sea|in other words|ibig sabihin|clarification|none|Es temporal; o sea, no es permanente.|It is temporary; in other words, it is not permanent.|Common in speech.|O sea = ibig sabihin. Karaniwan sa usapan.
es decir|that is|ibig sabihin|clarification|none|Es decir, aún no hay decisión.|That is, there is no decision yet.|More formal than o sea.|Es decir = ibig sabihin. Mas pormal kaysa o sea.
`;

export const CONJUNCTION_CATEGORIES = {
  addition: 'Adding ideas',
  choice: 'Choosing',
  contrast: 'Contrast',
  concession: 'Concession',
  cause: 'Cause and reason',
  consequence: 'Result',
  condition: 'Conditions',
  purpose: 'Purpose',
  time: 'Time',
  comparison: 'Comparison',
  order: 'Order',
  clarification: 'Clarifying and concluding',
};

export const MOOD_LABELS = {
  none: 'No mood rule',
  indicative: 'Takes the indicative',
  subjunctive: 'Takes the subjunctive',
  both: 'Indicative or subjunctive',
};

const seen = new Set();
export const conjunctionList = TABLE.trim()
  .split('\n')
  .map((line) => line.split('|'))
  .map(([word, english, tagalog, category, mood, example, translation, note, taglish]) => ({
    word,
    english,
    tagalog,
    category,
    mood,
    example,
    translation,
    note,
    taglish,
  }))
  .filter((c) => (seen.has(c.word) ? false : seen.add(c.word)));
