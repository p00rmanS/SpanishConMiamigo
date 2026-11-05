import { A } from './advanced-lessons-1.js';
import { grid } from './school-basics-1.js';

// Native-level Spanish (C3): dialects, sound changes, etymology, literature, humor, legal and
// academic Spanish, public speaking and a final review.
export const C3_DIALECT = 'Native-level: dialects, sound and word origins';
export const C3_ARTS = 'Native-level: literature, humor and nuance';
export const C3_PUBLIC = 'Native-level: work and public life';

export const advancedLessons3 = [
  A(
    [
      'ad-voseo-leismo',
      'C3',
      'Regional grammar: voseo, leísmo and ustedes.',
      C3_DIALECT,
      'Vos tenés razón, che; en España le vi a Juan, mientras que en México lo vi.',
      'You are right, che; in Spain people say "le vi a Juan", while in Mexico they say "lo vi".',
      'Ang vos ay ginagamit sa Argentina at iba pa: vos tenés. Ang leísmo ay ang paggamit ng le para sa tao: le vi a Juan. Karaniwan sa Espanya.',
      'Voseo: vos hablás, tenés, sos (Argentina, Uruguay, parts of Central America and Colombia). Leísmo: le for a masculine person as direct object, accepted in Spain: le vi. Laísmo (la dije) and loísmo are nonstandard. Latin America uses ustedes, not vosotros.',
    ],
    [
      'vos + stressed endings',
      'Vos tenés, vos querés, vos sos.',
      'Vos sabés que sí.',
      'Learn to understand voseo even if you use tú. In Argentina vos is normal at every level of speech with friends.',
    ],
    [
      'Which form is voseo?',
      ['Vos tenés frío.', 'Tú tienes frío.', 'Vosotros tenéis frío.'],
      'Vos tenés frío.',
      'Vos tenés is the voseo form in the present.',
      'You hear a Buenos Aires conversation.',
    ],
    [
      ['¿Vos querés tomar algo?', 'Do you want to drink something?'],
      ['Ustedes pueden pasar, por favor.', 'You all may come in, please.'],
    ],
    [
      {
        heading: 'Gramática regional',
        table: grid(
          ['Phenomenon', 'Example', 'Where'],
          [
            ['voseo', 'vos tenés', 'Argentina, Uruguay, Costa Rica...'],
            ['tuteo', 'tú tienes', 'Mexico, Spain, Peru...'],
            ['vosotros', 'vosotros tenéis', 'Spain'],
            ['ustedes (plural)', 'ustedes tienen', 'Latin America, Canary Islands'],
            ['leísmo', 'le vi a Juan', 'Spain'],
            ['laísmo / loísmo', 'la dije (nonstandard)', 'parts of Spain'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-accents-sound',
      'C3',
      'Accents and sound changes: seseo, yeísmo and aspirated s.',
      C3_DIALECT,
      'En Andalucía y el Caribe se aspira la s, y en gran parte de América se dice "serveza" por cerveza.',
      'In Andalusia and the Caribbean the s is aspirated, and in much of America the c in cerveza sounds like s.',
      'Ang seseo ay ang pagbigkas ng c at z bilang s. Ang yeísmo ay ang ll na tunog y. Sa Argentina ang ll ay tunog sh. Iba-iba ang accent pero iisa ang wika.',
      'Seseo: z and c before e/i sound like s (Latin America, Canary Islands, Andalusia). Distinción: c/z sound like th (central and northern Spain). Yeísmo: ll sounds like y. In Argentina and Uruguay ll and y sound like sh. Aspirated s: las casas → lah casah (Caribbean, Chile, Andalusia).',
    ],
    [
      'seseo / distinción / yeísmo',
      'The spelling is the same; the sound changes.',
      'Zapato y casa.',
      'Spelling stays the same across regions, so write the standard forms even if you say seseo.',
    ],
    [
      'What is seseo?',
      ['saying c and z like s', 'saying s like th', 'dropping all vowels'],
      'saying c and z like s',
      'Seseo is the s sound for c and z, common in Latin America.',
      'You hear different accents in a video.',
    ],
    [
      ['Ella llegó a la calle.', 'She arrived at the street.'],
      ['Gracias por la cerveza.', 'Thanks for the beer.'],
    ],
    [
      {
        heading: 'Sonidos regionales',
        table: grid(
          ['Feature', 'What happens', 'Where'],
          [
            ['seseo', 'z/c sound like s', 'Latin America, Canary Islands'],
            ['distinción', 'z/c sound like th', 'central and northern Spain'],
            ['yeísmo', 'll sounds like y', 'most regions'],
            ['ll / y as sh', 'rehilamiento', 'Argentina, Uruguay'],
            ['s aspirada', 's → h at end of syllable', 'Caribbean, Chile, Andalusia'],
            ['final d dropped', 'cansado → cansao', 'Spain, Caribbean (informal)'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-translation-traps',
      'C3',
      'Translation traps and subtle false friends.',
      C3_DIALECT,
      'Actualmente estoy realizando un curso, pero eventualmente podría asistir a otro.',
      'I am currently taking a course, but possibly I could attend another.',
      'Ang actualmente ay ngayon, hindi actually. Ang eventualmente ay posibleng mangyari, hindi eventually. Ang realizar ay gawin, hindi realize.',
      'Advanced false friends: actualmente = currently (not actually, which is en realidad); eventualmente = possibly; realizar = carry out (realize is darse cuenta); asistir = attend; sensible = sensitive; éxito = success; constipado = having a cold; introducir = insert.',
    ],
    [
      'actualmente = currently',
      'Actually is en realidad, not actualmente.',
      'En realidad, no sé.',
      'These errors are not caught by spelling. Check meaning when a word looks like English.',
    ],
    [
      'How do you say "actually"?',
      ['en realidad', 'actualmente', 'eventualmente'],
      'en realidad',
      'En realidad means actually. Actualmente means currently.',
      'You translate a sentence from English.',
    ],
    [
      ['Estoy constipado desde ayer.', 'I have had a cold since yesterday.'],
      ['Asistí a la reunión.', 'I attended the meeting.'],
    ],
    [
      {
        heading: 'Trampas de traducción',
        table: grid(
          ['Spanish', 'Real meaning', 'English look-alike'],
          [
            ['actualmente', 'currently', 'actually'],
            ['eventualmente', 'possibly', 'eventually'],
            ['realizar', 'carry out', 'realize'],
            ['asistir', 'attend', 'assist'],
            ['sensible', 'sensitive', 'sensible'],
            ['éxito', 'success', 'exit'],
            ['constipado', 'having a cold', 'constipated'],
            ['introducir', 'insert', 'introduce (someone)'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-arabic-roots',
      'C3',
      'Words from Arabic: aceite, azúcar, ojalá.',
      C3_DIALECT,
      'Ojalá me den aceite, azúcar y almohadas en el hotel de la alcaldía.',
      'I hope they give me oil, sugar and pillows at the town hall hotel.',
      'Maraming salitang Espanyol ay galing sa Arabic dahil sa mahabang panahon ng Al-Ándalus. Madalas nagsisimula sa al-: algodón, almohada, alcalde.',
      'About 8% of Spanish words come from Arabic. Many begin with al- (the article): alcalde, algodón, almohada, albañil, alfombra. Others: aceite, azúcar, arroz, ojalá (from wa-sha Allah), jarabe, tarea, azotea.',
    ],
    [
      'al- + noun',
      'Many Arabic words begin with al-.',
      'Mi alcalde vive en un barrio de albañiles.',
      'Not all al- words are Arabic (alto, algo are Latin), but many nouns from daily life are.',
    ],
    [
      'Which word comes from Arabic?',
      ['azúcar', 'mesa', 'perro'],
      'azúcar',
      'Azúcar comes from Arabic. Mesa and perro have Latin and other roots.',
      'A linguistics class.',
    ],
    [
      ['Ojalá llueva mañana.', 'I hope it rains tomorrow.'],
      ['La almohada está sobre la cama.', 'The pillow is on the bed.'],
    ],
    [
      {
        heading: 'Palabras de origen árabe',
        table: grid(
          ['Word', 'English', 'Arabic idea'],
          [
            ['el aceite', 'oil', 'az-zayt'],
            ['el azúcar', 'sugar', 'as-sukkar'],
            ['la almohada', 'pillow', 'al-mikhadda'],
            ['el alcalde', 'mayor', 'al-qadi'],
            ['el algodón', 'cotton', 'al-qutn'],
            ['ojalá', 'I hope', 'wa-sha Allah'],
            ['la tarea', 'task', 'tariha'],
            ['la azotea', 'flat roof', 'as-sutayha'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-indigenous-words',
      'C3',
      'Words from Nahuatl, Taíno and Quechua.',
      C3_DIALECT,
      'El chocolate, el tomate y el aguacate vienen del náhuatl; la hamaca y el huracán, del taíno.',
      'Chocolate, tomato and avocado come from Nahuatl; the hammock and hurricane, from Taíno.',
      'Ang chocolate, tomate at aguacate ay galing sa Nahuatl. Ang hamaca at huracán ay galing sa Taíno. Ang papa at llama ay galing sa Quechua.',
      'Indigenous languages gave Spanish and English many words. Nahuatl: chocolate, tomate, aguacate, chile, cacao. Taíno: hamaca, huracán, canoa, barbacoa, maíz. Quechua: papa, llama, cóndor, pampa, quinua. They now exist in many world languages.',
    ],
    [
      'language origin',
      'Many everyday foods have Indigenous roots.',
      'El maíz y la papa son de América.',
      'Not all Latin American words are Indigenous; many were adopted from Spanish and later changed locally.',
    ],
    [
      'Which word is from Nahuatl?',
      ['aguacate', 'hamaca', 'cóndor'],
      'aguacate',
      'Aguacate comes from Nahuatl ahuacatl. Hamaca is Taíno and cóndor is Quechua.',
      'A history lesson on food.',
    ],
    [
      ['La papa viene de los Andes.', 'The potato comes from the Andes.'],
      ['El huracán azotó la isla.', 'The hurricane hit the island.'],
    ],
    [
      {
        heading: 'Voces indígenas',
        table: grid(
          ['Language', 'Words', 'English'],
          [
            ['náhuatl', 'chocolate, tomate, aguacate', 'chocolate, tomato, avocado'],
            ['náhuatl', 'chile, cacao, coyote', 'chili, cacao, coyote'],
            ['taíno', 'hamaca, huracán, canoa', 'hammock, hurricane, canoe'],
            ['taíno', 'barbacoa, maíz', 'barbecue, corn'],
            ['quechua', 'papa, llama, cóndor', 'potato, llama, condor'],
            ['quechua', 'pampa, quinua', 'plain, quinoa'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-literary-analysis',
      'C3',
      'Reading literature: figures of speech and narrators.',
      C3_ARTS,
      'El narrador, que habla en primera persona, usa una metáfora y una hipérbole para crear un tono melancólico.',
      'The narrator, who speaks in the first person, uses a metaphor and a hyperbole to create a melancholy tone.',
      'Ang metáfora ay paghahambing nang walang gaya ng. Ang símil ay may como. Ang narrador ay nagkukuwento at ang tono ay damdamin ng teksto.',
      'Analysis vocabulary: el narrador, el protagonista, el tema, el tono, el símbolo, la trama. Figures: metáfora, símil (with como), hipérbole, personificación, ironía, antítesis, aliteración. Verbs: sugerir, simbolizar, evocar, reflejar.',
    ],
    [
      'el narrador usa + figure',
      'Name the device, then say its effect.',
      'La personificación crea cercanía.',
      'Metáfora has no como; símil uses como or tal como. Do not call a simile a metaphor.',
    ],
    [
      'Which one uses "como"?',
      ['el símil', 'la metáfora', 'la hipérbole'],
      'el símil',
      'A simile compares with como; a metaphor states it directly.',
      'A literature class discussion.',
    ],
    [
      ['La novela refleja la sociedad de su época.', 'The novel reflects the society of its time.'],
      ['El símbolo del agua sugiere cambio.', 'The symbol of water suggests change.'],
    ],
    [
      {
        heading: 'Recursos literarios',
        table: grid(
          ['Device', 'Example', 'English'],
          [
            ['metáfora', 'El tiempo es oro.', 'Time is gold.'],
            ['símil', 'Fuerte como un roble.', 'Strong as an oak.'],
            ['hipérbole', 'Te lo dije mil veces.', 'I told you a thousand times.'],
            ['personificación', 'La luna sonríe.', 'The moon smiles.'],
            ['ironía', 'Qué buen tiempo, con esta lluvia.', 'Nice weather, with this rain.'],
            ['antítesis', 'Luz y sombra.', 'Light and shadow.'],
            ['aliteración', 'El ruido con que rueda la ronca tarde.', 'repeated sounds'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-poetry-forms',
      'C3',
      'Poetry: verse, stanza, rhyme and the sonnet.',
      C3_ARTS,
      'Un soneto tiene catorce versos, y cada verso suele tener once sílabas con rima consonante.',
      'A sonnet has fourteen lines, and each line usually has eleven syllables with full rhyme.',
      'Ang verso ay isang linya ng tula at ang estrofa ay grupo ng linya. Ang rima consonante ay buong tugma, ang asonante ay patinig lang. Ang soneto ay may 14 na linya.',
      'Verse = el verso, stanza = la estrofa, rhyme = la rima. Consonant rhyme repeats all sounds from the stressed vowel; assonant rhyme repeats only vowels. Common forms: soneto (14 lines of 11 syllables), romance (8 syllables, assonant rhyme), décima, copla. Metric syllables are counted with sinalefa.',
    ],
    [
      'rima consonante / asonante',
      'Consonante: all sounds. Asonante: vowels only.',
      'Casa / masa is consonant; casa / lana is assonant.',
      'In metrics you count to the last stressed syllable and add one: so a verso agudo gets +1 and a verso llano stays.',
    ],
    [
      'How many lines in a sonnet?',
      ['14', '8', '20'],
      '14',
      'A sonnet has fourteen lines.',
      'A poetry class.',
    ],
    [
      ['La rima asonante repite solo las vocales.', 'Assonant rhyme repeats only the vowels.'],
      ['Esa estrofa tiene cuatro versos.', 'That stanza has four lines.'],
    ],
    [
      {
        heading: 'La poesía',
        table: grid(
          ['Term', 'Meaning', 'English'],
          [
            ['el verso', 'line of a poem', 'verse'],
            ['la estrofa', 'group of lines', 'stanza'],
            ['la rima consonante', 'all sounds rhyme', 'full rhyme'],
            ['la rima asonante', 'vowels rhyme', 'assonance'],
            ['el soneto', '14 lines', 'sonnet'],
            ['el romance', '8-syllable lines', 'ballad'],
            ['la sinalefa', 'merge vowels', 'syllable merge'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-humor-irony',
      'C3',
      'Humor, irony and sarcasm.',
      C3_ARTS,
      'Sí, claro, qué casualidad que llegues justo cuando se acaba el trabajo: ¡qué oportuno!',
      'Yes, of course, what a coincidence that you arrive just when the work is done: how convenient!',
      'Ang sarcasmo ay nagsasabi ng kabaligtaran ng ibig sabihin. Ang sí, claro ay maaaring maging sarcastic. Ang doble sentido at albur ay laro ng salita.',
      'Spanish humor uses irony (ironía), sarcasm (sarcasmo), double meaning (doble sentido), wordplay (juego de palabras) and, in Mexico, albur. Cues for sarcasm: sí, claro / ya, ya / qué casualidad / pues qué bien. Tone and context decide.',
    ],
    [
      'literal vs ironic meaning',
      'Sarcasm says the opposite of what is meant.',
      'Qué amable eres, ¿no?',
      'Do not use sarcasm with people you do not know well. It is easy to misread in a second language.',
    ],
    [
      'What is "doble sentido"?',
      ['double meaning', 'double room', 'double speed'],
      'double meaning',
      'Doble sentido is a phrase that can be taken two ways, often playfully.',
      'You laugh at a joke with friends.',
    ],
    [
      ['Ya, ya, como si no lo supieras.', 'Yeah, yeah, as if you did not know.'],
      ['Eso fue una ironía, no te enojes.', 'That was irony, do not get mad.'],
    ],
    [
      {
        heading: 'Humor',
        table: grid(
          ['Term', 'Meaning', 'English'],
          [
            ['la ironía', 'say the opposite', 'irony'],
            ['el sarcasmo', 'biting irony', 'sarcasm'],
            ['el doble sentido', 'two meanings', 'double entendre'],
            ['el juego de palabras', 'wordplay', 'pun'],
            ['el albur', 'Mexican wordplay', 'Mexican innuendo'],
            ['el chiste', 'joke', 'joke'],
            ['tomar a broma', 'not take seriously', 'laugh off'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-subtle-subjunctive',
      'C3',
      'Subtle mood choices: aunque, dudo que, el hecho de que.',
      C3_ARTS,
      'Aunque llueva, saldré; aunque llueve, saldré; y no dudo que vendrás, pero dudo que llegues temprano.',
      'Even if it rains, I will go out; even though it is raining, I will go out; and I do not doubt you will come, but I doubt you will arrive early.',
      'Ang aunque + subjunctive ay kahit na posibleng umulan; ang aunque + indicative ay kahit umuulan na. Ang no dudo que ay indicative at ang dudo que ay subjunctive.',
      'Mood changes meaning: aunque + indicative = a fact; aunque + subjunctive = hypothetical or not important. Dudo que + subjunctive, but no dudo que + indicative. El hecho de que usually takes the subjunctive. Cualquiera que sea, como si + imperfect subjunctive.',
    ],
    [
      'indicative = fact; subjunctive = doubt/unreal',
      'The mood tells how sure the speaker is.',
      'Aunque está lloviendo, voy. Aunque llueva, voy.',
      'With no creer que + subjunctive but creer que + indicative. Creo que viene vs no creo que venga.',
    ],
    [
      'Which one shows doubt?',
      ['Dudo que venga.', 'No dudo que viene.', 'Sé que viene.'],
      'Dudo que venga.',
      'Dudar que triggers the subjunctive.',
      'You decide which verb form fits.',
    ],
    [
      ['Como si no hubiera pasado nada.', 'As if nothing had happened.'],
      ['Cualquiera que sea tu decisión, te apoyo.', 'Whatever your decision is, I support you.'],
    ],
    [
      {
        heading: 'El modo y el matiz',
        table: grid(
          ['Trigger', 'Mood', 'Example'],
          [
            ['aunque (fact)', 'indicative', 'Aunque llueve, salgo.'],
            ['aunque (hypothetical)', 'subjunctive', 'Aunque llueva, saldré.'],
            ['dudo que', 'subjunctive', 'Dudo que venga.'],
            ['no dudo que', 'indicative', 'No dudo que viene.'],
            ['como si', 'imp. subjunctive', 'Como si fuera fácil.'],
            ['cualquiera que sea', 'subjunctive', 'Cualquiera que sea el motivo.'],
          ],
          2,
        ),
      },
    ],
  ),
  A(
    [
      'ad-legal-spanish',
      'C3',
      'Legal Spanish: contracts, clauses and court words.',
      C3_PUBLIC,
      'Conforme a la cláusula tercera, la parte demandante deberá presentar el recurso dentro del plazo establecido.',
      'According to the third clause, the plaintiff must file the appeal within the established period.',
      'Ang cláusula ay probisyon ng kontrata. Ang demandante ay nagsasampa ng kaso at ang demandado ay kinakasuhan. Ang plazo ay palugit. Ginagamit ang futuro para sa obligasyon.',
      'Legal Spanish uses the future for obligations (deberá, se reunirá), passive forms and fixed phrases: conforme a, en virtud de, a efectos de, a tenor de. Words: el contrato, la cláusula, la parte, la sentencia, la demanda, el recurso, el plazo, la vigencia.',
    ],
    [
      'futuro de obligación',
      'In contracts the future means must.',
      'El arrendatario pagará la renta el día uno.',
      'Do not use this style in daily talk. It sounds stiff outside contracts, laws and official letters.',
    ],
    [
      'Who files a lawsuit?',
      ['el demandante', 'el demandado', 'el juez'],
      'el demandante',
      'Demandante is the plaintiff. Demandado is the defendant.',
      'You read a contract.',
    ],
    [
      [
        'El contrato entra en vigencia el uno de enero.',
        'The contract takes effect on January first.',
      ],
      ['El juez dictó sentencia.', 'The judge handed down the sentence.'],
    ],
    [
      {
        heading: 'Español jurídico',
        table: grid(
          ['Word', 'Meaning', 'English'],
          [
            ['el contrato', 'agreement', 'contract'],
            ['la cláusula', 'provision', 'clause'],
            ['el demandante', 'plaintiff', 'plaintiff'],
            ['el demandado', 'defendant', 'defendant'],
            ['la sentencia', 'ruling', 'ruling'],
            ['el recurso', 'appeal', 'appeal'],
            ['el plazo', 'deadline', 'term'],
            ['conforme a', 'according to', 'in accordance with'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-academic-essay',
      'C3',
      'The academic essay: thesis, evidence and citation.',
      C3_PUBLIC,
      'Este ensayo sostiene que la educación temprana reduce la desigualdad, como demuestran varios estudios.',
      'This essay argues that early education reduces inequality, as several studies show.',
      'Ang tesis ay pangunahing argumento at ang evidencia ay patunay. Ang como demuestran ay gaya ng ipinakikita. Banggitin ang pinagmulan: según, de acuerdo con.',
      'Academic structure: la tesis, los argumentos, la evidencia, la conclusión, la bibliografía. Verbs: sostener, argumentar, demostrar, plantear, concluir. Cite with según X (2020), de acuerdo con X, X señala que. Keep impersonal and precise: se observa que.',
    ],
    [
      'este ensayo sostiene que...',
      'State the thesis early and clearly.',
      'Este trabajo plantea que...',
      'Avoid I think in academic Spanish. Use impersonal forms: se concluye que, cabe afirmar que.',
    ],
    [
      'Which is the main claim of an essay?',
      ['la tesis', 'la bibliografía', 'el resumen'],
      'la tesis',
      'La tesis is the central argument.',
      'You write a university paper.',
    ],
    [
      [
        'Según García (2020), el efecto es significativo.',
        'According to García (2020), the effect is significant.',
      ],
      [
        'Se concluye que hacen falta más estudios.',
        'It is concluded that more studies are needed.',
      ],
    ],
    [
      {
        heading: 'El ensayo académico',
        table: grid(
          ['Part / verb', 'Use', 'English'],
          [
            ['la tesis', 'main claim', 'thesis'],
            ['los argumentos', 'support', 'arguments'],
            ['la evidencia', 'proof', 'evidence'],
            ['sostener / argumentar', 'verb', 'argue'],
            ['demostrar', 'verb', 'demonstrate'],
            ['según X (año)', 'citation', 'according to X (year)'],
            ['la bibliografía', 'sources', 'bibliography'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-politics-media',
      'C3',
      'Public life: politics, economy and media words.',
      C3_PUBLIC,
      'El congreso aprobó la reforma, la oposición la criticó y los medios cuestionaron su impacto económico.',
      'Congress approved the reform, the opposition criticized it and the media questioned its economic impact.',
      'Ang congreso ay mambabatas, ang oposición ay kalaban sa pulitika at ang reforma ay pagbabago ng batas. Ang medios ay mga midya.',
      'Public life vocabulary: el gobierno, el congreso, la oposición, la reforma, la ley, el presupuesto, la inflación, el desempleo, la prensa, los medios. Neutral verbs: aprobar, criticar, cuestionar, debatir, proponer.',
    ],
    [
      'neutral news vocabulary',
      'Describe actions, not opinions, in a news report.',
      'La oposición propuso una enmienda.',
      'Keep the tone neutral. Use según and fuentes to show where claims come from.',
    ],
    [
      'What is la inflación?',
      ['inflation', 'inflate a tire', 'a loan'],
      'inflation',
      'Inflación is the rise in prices.',
      'You listen to a news broadcast.',
    ],
    [
      ['La inflación bajó dos puntos.', 'Inflation fell two points.'],
      ['El presupuesto se debatirá la próxima semana.', 'The budget will be debated next week.'],
    ],
    [
      {
        heading: 'Vida pública',
        table: grid(
          ['Word', 'Meaning', 'English'],
          [
            ['el congreso', 'legislature', 'congress'],
            ['la oposición', 'opposing party', 'opposition'],
            ['la reforma', 'change in law', 'reform'],
            ['el presupuesto', 'planned spending', 'budget'],
            ['la inflación', 'price rise', 'inflation'],
            ['el desempleo', 'no jobs', 'unemployment'],
            ['la prensa / los medios', 'news outlets', 'press / media'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-public-speaking',
      'C3',
      'Public speaking: openings, signposts and closings.',
      C3_PUBLIC,
      'Buenos días a todos; quisiera agradecerles su presencia y empezar con una pregunta que nos concierne a todos.',
      'Good morning, everyone; I would like to thank you for being here and begin with a question that concerns us all.',
      'Ang quisiera agradecerles ay nais kong pasalamatan kayo. Gamitin ang signposts: en primer lugar, a continuación, para concluir.',
      'Speech structure: opening (buenos días a todos, quisiera agradecer), signposts (en primer lugar, a continuación, por otro lado), emphasis (cabe subrayar), closing (para concluir, en definitiva, muchas gracias por su atención). Use short sentences and pauses.',
    ],
    [
      'quisiera + infinitive',
      'Quisiera is a polite way to begin.',
      'Quisiera comenzar agradeciendo su presencia.',
      'Do not read a long text word for word. Keep short notes and use signposts to guide the audience.',
    ],
    [
      'Which phrase starts a conclusion?',
      ['para concluir', 'en primer lugar', 'a continuación'],
      'para concluir',
      'Para concluir signals the end of a speech.',
      'You give a presentation.',
    ],
    [
      ['A continuación, veremos tres datos clave.', 'Next, we will see three key facts.'],
      ['Muchas gracias por su atención.', 'Thank you very much for your attention.'],
    ],
    [
      {
        heading: 'Hablar en público',
        table: grid(
          ['Stage', 'Phrase', 'English'],
          [
            ['open', 'Buenos días a todos.', 'Good morning, everyone.'],
            ['open', 'Quisiera agradecerles...', 'I would like to thank you...'],
            ['signpost', 'En primer lugar...', 'First...'],
            ['signpost', 'A continuación...', 'Next...'],
            ['emphasis', 'Cabe subrayar que...', 'It is worth stressing that...'],
            ['close', 'Para concluir...', 'To conclude...'],
            ['close', 'Muchas gracias por su atención.', 'Thank you for your attention.'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-mastery-review',
      'C3',
      'Final review and next steps to native-like Spanish.',
      C3_PUBLIC,
      'Para seguir mejorando, lee todos los días, escucha podcasts, escribe un diario y habla con nativos.',
      'To keep improving, read every day, listen to podcasts, write a journal and talk with native speakers.',
      'Ito ang huling repaso. Magbasa, makinig, magsulat at makipag-usap araw-araw. Subukan ang DELE C2 o ang SIELE kung gusto mo ng opisyal na marka.',
      'Next steps: read novels and the news, listen to podcasts and radio, write a journal, speak with natives, and watch films with Spanish subtitles. Official exams: DELE (C2), SIELE. Review your mistakes weekly and keep a personal word list by topic.',
    ],
    [
      'tú commands for advice',
      'Imperatives give clear study advice.',
      'Lee, escucha, escribe y habla.',
      'Fluency grows from daily exposure more than from rules. A short daily habit beats a long weekend session.',
    ],
    [
      'Which exam certifies Spanish level?',
      ['DELE', 'TOEFL', 'IELTS'],
      'DELE',
      'DELE is the official Spanish diploma from Instituto Cervantes. TOEFL and IELTS test English.',
      'You plan your next goal.',
    ],
    [
      ['Escribo un diario en español cada noche.', 'I write a diary in Spanish every night.'],
      ['Escucho podcasts mientras camino.', 'I listen to podcasts while I walk.'],
    ],
    [
      {
        heading: 'Camino hacia la maestría',
        table: grid(
          ['Habit', 'Frequency', 'English'],
          [
            ['leer noticias y novelas', 'daily', 'read news and novels'],
            ['escuchar podcasts', 'daily', 'listen to podcasts'],
            ['escribir un diario', 'daily', 'write a journal'],
            ['hablar con nativos', 'weekly', 'speak with natives'],
            ['ver películas con subtítulos', 'weekly', 'watch films with subtitles'],
            ['repasar errores', 'weekly', 'review mistakes'],
            ['DELE / SIELE', 'optional', 'official exams'],
          ],
          0,
        ),
      },
    ],
  ),
];
