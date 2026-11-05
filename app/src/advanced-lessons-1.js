import { L } from './home-world-lessons.js';
import { grid } from './school-basics-1.js';

// Advanced grammar for C1 and C2: passives, relatives, periphrases, ser/estar nuance, the conditional
// perfect, adverbial subjunctive, sequence of tenses, emphasis and nominalization.
export const A = (...args) => ({ ...L(...args), track: 'Advanced' });

export const C1_GRAMMAR = 'Advanced grammar: passives, relatives and periphrases';
export const C2_GRAMMAR = 'Mastery grammar: tenses and moods';

export const advancedLessons1 = [
  A(
    [
      'ad-passive',
      'C1',
      'The passive: pasiva refleja and ser + participle.',
      C1_GRAMMAR,
      'Se firmó el acuerdo ayer, y el documento fue publicado por el ministerio.',
      'The agreement was signed yesterday, and the document was published by the ministry.',
      'Mas karaniwan ang se + pandiwa sa Espanyol kaysa ser + participio. Ginagamit ang ser + participio kapag sinabi kung sino ang gumawa: fue publicado por el ministerio.',
      'Spanish prefers the reflexive passive: se firmó el acuerdo, se venden casas. Use ser + participle when the agent appears or in formal and news writing: fue publicado por. The participle agrees with the subject: fueron publicadas las leyes.',
    ],
    [
      'se + verb / ser + participle (+ por)',
      'Se for things, ser + por when you name who did it.',
      'Se venden casas. La casa fue vendida por el banco.',
      'Do not use se with a named agent: say fue firmado por el presidente, not se firmó por el presidente.',
    ],
    [
      'Which sentence names the agent?',
      ['La ley fue aprobada por el congreso.', 'Se aprobó la ley.', 'Aprobaron la ley.'],
      'La ley fue aprobada por el congreso.',
      'The ser + participle passive can add por + agent.',
      'You read a formal news report.',
    ],
    [
      ['Se habla español en veinte países.', 'Spanish is spoken in twenty countries.'],
      ['Las obras fueron terminadas en mayo.', 'The works were completed in May.'],
    ],
    [
      {
        heading: 'Dos pasivas',
        table: grid(
          ['Type', 'Example', 'English'],
          [
            ['pasiva refleja', 'Se venden casas.', 'Houses are sold.'],
            ['pasiva refleja', 'Se firmó el acuerdo.', 'The agreement was signed.'],
            ['ser + participio', 'El acuerdo fue firmado.', 'The agreement was signed.'],
            [
              'ser + participio + por',
              'Fue escrito por Cervantes.',
              'It was written by Cervantes.',
            ],
            ['impersonal se', 'Se dice que va a llover.', 'It is said that it will rain.'],
            ['3rd plural', 'Dicen que viene.', 'They say he is coming.'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-relatives',
      'C1',
      'Relative clauses: cuyo, el cual, lo cual.',
      C1_GRAMMAR,
      'La escritora, cuyo libro ganó el premio, vive en una ciudad en la que casi nadie la conoce.',
      'The writer, whose book won the prize, lives in a city where almost nobody knows her.',
      'Ang cuyo ay ang kanyang o ng may-ari. Nagiging cuya, cuyos, cuyas ayon sa bagay na pag-aari, hindi sa may-ari. Ang lo cual ay tumutukoy sa buong ideya.',
      'Cuyo agrees with the thing owned, not the owner: la mujer cuyos hijos... After a preposition use el que / el cual: la ciudad en la que vivo. Lo cual refers to a whole idea: Llegó tarde, lo cual me molestó.',
    ],
    [
      'noun + cuyo/a/os/as + noun',
      'Cuyo = whose; it agrees with what comes after it.',
      'El hombre cuya casa vendimos está aquí.',
      'Do not use cuyo as an interrogative. For whose? ask ¿de quién es...?',
    ],
    [
      'Which is correct?',
      [
        'La mujer cuyos hijos viven aquí es mi tía.',
        'La mujer cuya hijos viven aquí es mi tía.',
        'La mujer de quien hijos viven aquí es mi tía.',
      ],
      'La mujer cuyos hijos viven aquí es mi tía.',
      'Cuyos agrees with hijos, the thing owned.',
      'You write a formal paragraph.',
    ],
    [
      ['Llegó tarde, lo cual no me sorprendió.', 'He arrived late, which did not surprise me.'],
      ['Es un tema del que se habla mucho.', 'It is a topic that is talked about a lot.'],
    ],
    [
      {
        heading: 'Pronombres relativos',
        table: grid(
          ['Relative', 'Use', 'Example'],
          [
            ['que', 'general', 'El libro que leí'],
            ['quien / quienes', 'people', 'La mujer con quien hablé'],
            ['el que / la que', 'after prepositions', 'La casa en la que vivo'],
            ['el cual / la cual', 'formal', 'La razón por la cual vine'],
            ['lo que / lo cual', 'whole idea', 'Lo que dijo es cierto'],
            ['cuyo/a/os/as', 'whose', 'Una escritora cuya obra admiro'],
            ['donde / en donde', 'place', 'La ciudad donde nací'],
          ],
          2,
        ),
      },
    ],
  ),
  A(
    [
      'ad-periphrases',
      'C1',
      'Verb periphrases: llevar, seguir, acabar de, dejar de.',
      C1_GRAMMAR,
      'Llevo tres años estudiando español y sigo aprendiendo cosas nuevas, aunque acabo de dejar de usar el diccionario.',
      'I have been studying Spanish for three years and I keep learning new things, although I just stopped using the dictionary.',
      'Ang llevar + gerundio ay kung gaano na katagal gumagawa. Ang seguir + gerundio ay patuloy. Ang acabar de ay kakatapos lang at ang dejar de ay tumigil.',
      'Periphrases add aspect: llevar + gerund (how long), seguir + gerund (continue), acabar de + infinitive (just did), dejar de + infinitive (stop), volver a + infinitive (again), ponerse a (start suddenly), estar a punto de (about to).',
    ],
    [
      'auxiliary + gerund / infinitive',
      'Llevar + gerundio counts time up to now.',
      'Llevo dos horas esperando.',
      'Do not translate have been -ing with haber estado. Spanish uses the present: llevo esperando, not he estado esperando for continuing time.',
    ],
    [
      'Which means "I just finished"?',
      ['Acabo de terminar.', 'Dejo de terminar.', 'Vuelvo a terminar.'],
      'Acabo de terminar.',
      'Acabar de + infinitive means just did something.',
      'You tell a friend what you were doing.',
    ],
    [
      ['Sigue lloviendo desde ayer.', 'It keeps raining since yesterday.'],
      ['Voy a volver a intentarlo.', 'I am going to try again.'],
    ],
    [
      {
        heading: 'Perífrasis verbales',
        table: grid(
          ['Periphrasis', 'Meaning', 'Example'],
          [
            ['llevar + gerundio', 'time so far', 'Llevo dos años viviendo aquí.'],
            ['seguir + gerundio', 'continue', 'Sigue trabajando.'],
            ['acabar de + inf.', 'just did', 'Acaba de llegar.'],
            ['dejar de + inf.', 'stop', 'Dejé de fumar.'],
            ['volver a + inf.', 'do again', 'Volví a llamar.'],
            ['ponerse a + inf.', 'start suddenly', 'Se puso a llorar.'],
            ['estar a punto de + inf.', 'about to', 'Está a punto de salir.'],
            ['tener que + inf.', 'obligation', 'Tengo que irme.'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-ser-estar-nuance',
      'C1',
      'Ser and estar: changes of meaning and nuance.',
      C1_GRAMMAR,
      'Es listo, pero hoy está listo para salir; es aburrido, aunque hoy está aburrido de la reunión.',
      'He is clever, but today he is ready to leave; he is boring, although today he is bored with the meeting.',
      'Nagbabago ang kahulugan: ser listo ay matalino, estar listo ay handa. Ser aburrido ay nakakabagot, estar aburrido ay nababagot.',
      'Some adjectives change meaning: ser listo (clever) / estar listo (ready); ser malo (bad) / estar malo (sick); ser rico (wealthy) / estar rico (tasty); ser abierto (open-minded) / estar abierto (open). Estar + participle shows a result: la puerta está cerrada.',
    ],
    [
      'ser + trait / estar + state',
      'The adjective stays; the verb changes the meaning.',
      'Es callado, pero hoy está callado.',
      'In some regions the choice shifts slightly, but the contrasts listo, aburrido, rico and malo are widely shared.',
    ],
    [
      'What does "está rico" most often mean?',
      ['it tastes good', 'he is wealthy', 'he is rich in vitamins'],
      'it tastes good',
      'Estar rico describes taste. Ser rico describes wealth.',
      'You compliment a cook.',
    ],
    [
      ['La sopa está rica.', 'The soup is tasty.'],
      ['Mi tío es muy rico y vive en Madrid.', 'My uncle is very rich and lives in Madrid.'],
    ],
    [
      {
        heading: 'Cambios de significado',
        table: grid(
          ['Adjective', 'ser', 'estar'],
          [
            ['listo', 'clever', 'ready'],
            ['aburrido', 'boring', 'bored'],
            ['malo', 'bad (character)', 'sick / spoiled'],
            ['bueno', 'good (character)', 'tasty / healthy'],
            ['rico', 'wealthy', 'tasty'],
            ['abierto', 'open-minded', 'open (door)'],
            ['seguro', 'safe', 'sure'],
            ['verde', 'green', 'unripe'],
            ['vivo', 'sharp, quick', 'alive'],
            ['orgulloso', 'proud (trait)', 'proud (of something)'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-conditional-perfect',
      'C2',
      'Regrets and past wishes: hubiera, habría, ojalá.',
      C2_GRAMMAR,
      'Si hubiera estudiado más, habría aprobado, y ojalá hubiera escuchado a mi madre.',
      'If I had studied more, I would have passed, and I wish I had listened to my mother.',
      'Ang si hubiera + participio ay kung nag-aral sana ako. Ang habría + participio ay ay sana ay nakapasa ako. Ang ojalá hubiera ay sana ay ginawa ko.',
      'Unreal past: si + hubiera + participle, habría + participle. Wishes about the past: ojalá + hubiera + participle. In speech many people use hubiera in both parts: si hubiera sabido, hubiera venido. Both are common; in writing habría is preferred in the result.',
    ],
    [
      'si + hubiera + pp, habría + pp',
      'Unreal past: both parts are in the past perfect forms.',
      'Si lo hubiera sabido, te habría llamado.',
      'Never use habría after si. Say si hubiera sabido, not si habría sabido.',
    ],
    [
      'Which is correct?',
      [
        'Si hubiera ido, la habría visto.',
        'Si habría ido, la hubiera visto.',
        'Si voy, la habría visto.',
      ],
      'Si hubiera ido, la habría visto.',
      'The si clause takes hubiera + participle; the result takes habría + participle.',
      'You regret a missed chance.',
    ],
    [
      ['Ojalá hubiera llegado antes.', 'I wish I had arrived earlier.'],
      ['Habría ayudado si me lo hubieran pedido.', 'I would have helped if they had asked me.'],
    ],
    [
      {
        heading: 'Hipótesis en el pasado',
        table: grid(
          ['Structure', 'Example', 'English'],
          [
            ['si + hubiera + pp', 'Si hubiera sabido...', 'If I had known...'],
            ['habría + pp', '...habría venido.', '...I would have come.'],
            ['ojalá + hubiera + pp', 'Ojalá hubiera venido.', 'I wish he had come.'],
            [
              'como si + hubiera + pp',
              'Como si hubiera pasado nada.',
              'As if nothing had happened.',
            ],
            ['de haber + pp', 'De haberlo sabido...', 'Had I known...'],
            ['podría haber + pp', 'Podrías haber llamado.', 'You could have called.'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-adverbial-subjunctive',
      'C2',
      'Adverbial conjunctions that need the subjunctive.',
      C2_GRAMMAR,
      'Te lo explico con tal de que prestes atención, antes de que se acabe el tiempo.',
      'I will explain it to you as long as you pay attention, before time runs out.',
      'Ang antes de que, a menos que, con tal de que, para que at sin que ay laging gumagamit ng subjunctive. Ang cuando at en cuanto ay gumagamit nito kapag hindi pa nangyayari.',
      'Always subjunctive: antes de que, para que, sin que, a menos que, con tal de que, en caso de que. Subjunctive for the future, indicative for habit or past: cuando llegue (future), cuando llega (habit), cuando llegó (past).',
    ],
    [
      'antes de que / para que + subjunctive',
      'These conjunctions always trigger the subjunctive.',
      'Llámame antes de que salgas.',
      'If the subject does not change, use the infinitive: antes de salir, para aprender.',
    ],
    [
      'Which is correct?',
      [
        'Voy a salir en cuanto termine.',
        'Voy a salir en cuanto termino.',
        'Voy a salir en cuanto terminé.',
      ],
      'Voy a salir en cuanto termine.',
      'A future time clause with cuando, en cuanto, hasta que takes the subjunctive.',
      'You plan something for later.',
    ],
    [
      ['No saldremos a menos que deje de llover.', 'We will not go out unless it stops raining.'],
      ['Te lo digo para que lo sepas.', 'I am telling you so that you know.'],
    ],
    [
      {
        heading: 'Conjunciones',
        table: grid(
          ['Always subjunctive', 'Time (future)', 'English'],
          [
            ['antes de que', 'cuando + subj.', 'before / when'],
            ['para que', 'en cuanto + subj.', 'so that / as soon as'],
            ['sin que', 'hasta que + subj.', 'without / until'],
            ['a menos que', 'después de que + subj.', 'unless / after'],
            ['con tal de que', 'mientras + subj.', 'as long as / while'],
            ['en caso de que', 'tan pronto como + subj.', 'in case / as soon as'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-sequence-of-tenses',
      'C2',
      'Matching tenses across a sentence.',
      C2_GRAMMAR,
      'Me dijo que vendría si pudiera, y esperaba que yo comprendiera lo que había pasado.',
      'He told me he would come if he could, and he hoped I would understand what had happened.',
      'Kapag nasa nakaraan ang pangunahing pandiwa, ang pangalawa ay sumusunod: dijo que vendría, esperaba que comprendiera. Ito ang concordancia de tiempos.',
      'When the main verb is in the past, the next verb shifts: presente → imperfecto, futuro → condicional, perfecto → pluscuamperfecto, subjuntivo presente → subjuntivo imperfecto. Dice que vendrá → Dijo que vendría.',
    ],
    [
      'main past → shift the tense',
      'Dice que vendrá → Dijo que vendría.',
      'Quería que vinieras.',
      'If the statement is still true now, Spanish allows the present: me dijo que es difícil.',
    ],
    [
      'Backshift: "Dice que vendrá" becomes...',
      ['Dijo que vendría.', 'Dijo que vendrá.', 'Dijo que viene.'],
      'Dijo que vendría.',
      'Futuro becomes condicional after a past main verb.',
      'You report what someone said earlier.',
    ],
    [
      ['Me pidió que le ayudara.', 'He asked me to help him.'],
      ['Pensé que ya habías salido.', 'I thought you had already left.'],
    ],
    [
      {
        heading: 'Concordancia de tiempos',
        table: grid(
          ['Direct', 'Reported', 'English'],
          [
            ['presente', 'imperfecto', 'Dice que viene → Dijo que venía'],
            ['futuro', 'condicional', 'Dice que vendrá → Dijo que vendría'],
            ['pretérito', 'pluscuamperfecto', 'Dice que vino → Dijo que había venido'],
            ['perfecto', 'pluscuamperfecto', 'Dice que ha venido → Dijo que había venido'],
            ['subj. presente', 'subj. imperfecto', 'Quiere que vengas → Quería que vinieras'],
            [
              'subj. perfecto',
              'subj. pluscuamperfecto',
              'Espera que hayas venido → Esperaba que hubieras venido',
            ],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-emphasis',
      'C2',
      'Emphasis: ser clefts and fronting.',
      C2_GRAMMAR,
      'Fue María quien resolvió el problema, y lo que más me sorprendió es que lo hizo sola.',
      'It was María who solved the problem, and what surprised me most is that she did it alone.',
      'Ang fue + pangalan + quien ay nagbibigay-diin sa gumawa. Ang lo que... es ay nagbibigay-diin sa bagay. Sa kalimitan ang ser ay nasa parehong panahon.',
      'Cleft sentences highlight one part: Fue María quien..., Es aquí donde..., Lo que necesito es.... The verb ser agrees in tense with the main verb. After quien use the agreeing form: fuimos nosotros quienes lo hicimos.',
    ],
    [
      'ser + focus + que/quien/donde',
      'Put the important word right after ser.',
      'Es en Madrid donde vivo.',
      'Do not overuse clefts in speech; they sound formal or dramatic. Use them for contrast or emphasis.',
    ],
    [
      'Which sentence highlights the person?',
      ['Fue Ana quien llamó.', 'Ana llamó.', 'Llamó Ana ayer.'],
      'Fue Ana quien llamó.',
      'Fue + person + quien is the cleft form.',
      'You correct who did something.',
    ],
    [
      ['Lo que quiero es descansar.', 'What I want is to rest.'],
      ['Fue ayer cuando lo supe.', 'It was yesterday that I found out.'],
    ],
    [
      {
        heading: 'Estructuras enfáticas',
        table: grid(
          ['Pattern', 'Example', 'English'],
          [
            ['Fue ... quien', 'Fue ella quien ganó.', 'It was she who won.'],
            ['Fueron ... los que', 'Fueron ellos los que llegaron.', 'It was they who arrived.'],
            ['Es ... donde', 'Es aquí donde nací.', 'It is here that I was born.'],
            ['Fue ... cuando', 'Fue en abril cuando vino.', 'It was in April that he came.'],
            ['Lo que ... es', 'Lo que quiero es paz.', 'What I want is peace.'],
            ['fronting', 'A Pedro lo vi ayer.', 'Pedro I saw yesterday.'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-nominalization',
      'C2',
      'Turning adjectives and clauses into nouns.',
      C2_GRAMMAR,
      'Lo importante no es lo que dices, sino el que lo digas con respeto.',
      'The important thing is not what you say, but that you say it with respect.',
      'Ang lo + adjective ay ang bagay na. Ang el que ay ang bagay na ang... Ginagamit ang mga ito para gawing pangngalan ang mga adjective at sugnay.',
      'Use lo + adjective for an idea: lo importante, lo difícil. Use el que + subjunctive for a fact as subject: el que digas eso me preocupa. Use los que for the ones who: los que llegaron tarde.',
    ],
    [
      'lo + adjective / el que + clause',
      'Lo makes an adjective into the idea of it.',
      'Lo bueno es que es barato.',
      'Lo + adjective stays singular: lo difícil de las tareas, not los difíciles.',
    ],
    [
      'Which means "the good thing"?',
      ['lo bueno', 'el bueno', 'los buenos'],
      'lo bueno',
      'Lo bueno is the good thing, as an idea.',
      'You highlight the positive in a report.',
    ],
    [
      ['Lo difícil es empezar.', 'The hard part is starting.'],
      ['Los que llegaron tarde esperan afuera.', 'Those who arrived late are waiting outside.'],
    ],
    [
      {
        heading: 'Sustantivación',
        table: grid(
          ['Form', 'Example', 'English'],
          [
            ['lo + adjective', 'lo importante', 'the important thing'],
            ['lo + adjective + de', 'lo difícil de esto', 'the hard part of this'],
            ['el que + subj.', 'El que vengas me alegra.', 'That you come pleases me.'],
            ['los que', 'Los que saben, hablan.', 'Those who know, speak.'],
            ['lo que', 'Lo que dijo', 'what he said'],
            ['el hecho de que', 'El hecho de que llegues', 'the fact that you arrive'],
          ],
          0,
        ),
      },
    ],
  ),
];
