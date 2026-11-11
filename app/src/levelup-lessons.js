import { L } from './home-world-lessons.js';
import { A } from './advanced-lessons-1.js';
import { grid } from './school-basics-1.js';
import { stickBlock } from './memory-aids.js';

// Extra lessons for the middle and top of the course: B2 precision and C1 nuance, each with a
// "Make it stick" block (memory trick, practice, common slip).
export const B2_PRECISION = 'Upper-intermediate: precision';
export const C1_NUANCE = 'Advanced: nuance and style';

export const levelUpLessons = [
  L(
    [
      'ub-present-perfect-subj',
      'B2',
      'Present perfect subjunctive: haya hecho.',
      B2_PRECISION,
      'Espero que hayas llegado bien y que no hayas tenido problemas con el vuelo.',
      'I hope you arrived well and that you did not have problems with the flight.',
      'Ang haya + participio ay subjunctive na tapos na: haya llegado. Gamitin ito kapag may damdamin o duda tungkol sa bagay na nangyari na.',
      'Form it with the present subjunctive of haber (haya, hayas, haya, hayamos, hayan) + past participle. Use it for feelings, doubts or wishes about something already completed: Espero que hayas comido. No creo que haya llegado. The time clock is "before the main verb in the present".',
    ],
    [
      'haya + participle',
      'Same triggers as the present subjunctive, but the action is already finished.',
      'Me alegra que hayas venido.',
      'Compare: Espero que vengas (future, not done) vs Espero que hayas venido (done). The participle never changes with haya: haya hecho, haya dicho.',
    ],
    [
      'Which is correct for "I hope you have finished"?',
      ['Espero que hayas terminado.', 'Espero que has terminado.', 'Espero que termines ayer.'],
      'Espero que hayas terminado.',
      'Use haya + participle after a trigger when the action is complete.',
      'You talk to a friend after an exam.',
    ],
    [
      ['Dudo que lo haya visto.', 'I doubt that he has seen it.'],
      ['Es posible que hayamos perdido el tren.', 'It is possible that we have missed the train.'],
    ],
    [
      {
        heading: 'Haber en subjuntivo',
        table: grid(
          ['Person', 'Haber', 'Example'],
          [
            ['yo', 'haya', 'Espero que yo haya terminado.'],
            ['tú', 'hayas', 'Me alegra que hayas venido.'],
            ['él / ella', 'haya', 'Dudo que haya salido.'],
            ['nosotros', 'hayamos', 'Ojalá hayamos llegado.'],
            ['ellos', 'hayan', 'No creo que hayan comido.'],
          ],
          2,
        ),
      },
      stickBlock({
        trick:
          'HAYA is "he" in the subjunctive: he → haya, has → hayas. Add the same participle you already know.',
        practice:
          'Write five sentences about what you hope people have done: Espero que... haya...',
        mistake: 'Do not use the indicative he / has / ha after a doubt or wish. Use haya / hayas.',
      }),
    ],
  ),
  L(
    [
      'ub-imperfect-subj',
      'B2',
      'Imperfect subjunctive: how to build it.',
      B2_PRECISION,
      'Si tuviera más tiempo, estudiaría más, y quería que me ayudaras.',
      'If I had more time, I would study more, and I wanted you to help me.',
      'Ang imperfect subjunctive ay nabubuo mula sa ellos form ng preterite: alisin ang -ron at idagdag ang -ra, -ras, -ra, -ramos, -ran. Gamitin ito sa si na hindi totoo at pagkatapos ng nakaraang pandiwa.',
      'Take the ellos form of the preterite (hablaron, comieron, tuvieron), drop -ron, add -ra, -ras, -ra, -ramos (with accent on the vowel), -ran: hablara, comieras, tuviera. Use it after past triggers (Quería que vinieras), in unreal si clauses (Si fuera rico...), after como si, and in polite requests (Quisiera pedir...).',
    ],
    [
      'preterite ellos − ron + ra',
      'One recipe works for regular and irregular verbs.',
      'Fueron → fuera. Dijeron → dijera.',
      'The -se forms (hablase, comiese) mean the same and are common in writing or in Spain. Choose -ra for everyday speech.',
    ],
    [
      'Form the imperfect subjunctive of "tener" (yo).',
      ['tuviera', 'tenga', 'tendría'],
      'tuviera',
      'Tuvieron → tuviera.',
      'You say a hypothetical.',
    ],
    [
      ['Si fuera tú, lo haría.', 'If I were you, I would do it.'],
      ['Me pidió que le ayudara.', 'He asked me to help him.'],
    ],
    [
      {
        heading: 'Una receta, todos los verbos',
        table: grid(
          ['Infinitive', 'Preterite (ellos)', 'Imperfect subjunctive (yo)'],
          [
            ['hablar', 'hablaron', 'hablara'],
            ['comer', 'comieron', 'comiera'],
            ['vivir', 'vivieron', 'viviera'],
            ['tener', 'tuvieron', 'tuviera'],
            ['ser / ir', 'fueron', 'fuera'],
            ['decir', 'dijeron', 'dijera'],
            ['hacer', 'hicieron', 'hiciera'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'Recipe: ellos preterite → drop RON → add RA. "Ron" goes, "ra" comes.',
        practice:
          'Make the yo form of ten irregular verbs using the recipe. Check them in the table.',
        mistake:
          'Do not use the infinitive stem of the verb. Always start from the preterite ellos form.',
      }),
    ],
  ),
  L(
    [
      'ub-si-clauses',
      'B2',
      'The three si clauses: real, unlikely and impossible.',
      B2_PRECISION,
      'Si llueve, me quedo; si lloviera, me quedaría; si hubiera llovido, me habría quedado.',
      'If it rains, I stay; if it rained, I would stay; if it had rained, I would have stayed.',
      'Tatlong uri ng kondisyon: totoo (si llueve), hindi malamang (si lloviera) at imposible dahil tapos na (si hubiera llovido). Hindi gumagamit ng conditional pagkatapos ng si.',
      'Type 1 (real): si + present, present or future → Si estudias, apruebas. Type 2 (unlikely or hypothetical): si + imperfect subjunctive, conditional → Si estudiaras, aprobarías. Type 3 (impossible, past): si + pluperfect subjunctive, conditional perfect → Si hubieras estudiado, habrías aprobado. Never put the conditional or the future right after si.',
    ],
    [
      'si + present / imperfect subj. / pluperfect subj.',
      'The verb after si decides the type.',
      'Si tuviera dinero, viajaría.',
      'In casual speech some people use the conditional after si (si tendría), but it is considered non-standard. Learn the standard patterns first.',
    ],
    [
      'Which is correct?',
      ['Si tuviera tiempo, iría.', 'Si tendría tiempo, iría.', 'Si tengo tiempo, iría.'],
      'Si tuviera tiempo, iría.',
      'Type 2 uses the imperfect subjunctive after si and the conditional in the result.',
      'You talk about an unlikely plan.',
    ],
    [
      ['Si hubiera sabido, no habría ido.', 'If I had known, I would not have gone.'],
      ['Si llegas pronto, cenamos juntos.', 'If you arrive early, we eat together.'],
    ],
    [
      {
        heading: 'Tres tipos',
        table: grid(
          ['Type', 'si clause', 'Result'],
          [
            ['1 · real', 'present', 'present / future / command'],
            ['2 · unlikely', 'imperfect subjunctive', 'conditional'],
            ['3 · impossible past', 'pluperfect subjunctive', 'conditional perfect'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'Slide one step back each time: present → past subjunctive → past perfect subjunctive. The result slides, too.',
        practice:
          'Take one wish and say it in all three types: Si tengo, Si tuviera, Si hubiera tenido.',
        mistake: 'Never say si + conditional or si + future. Both fail in standard Spanish.',
      }),
    ],
  ),
  L(
    [
      'ub-double-pronouns',
      'B2',
      'Two pronouns together: se lo doy.',
      B2_PRECISION,
      'Se lo di ayer, y ahora quiero dártelo otra vez, pero no me lo pidas.',
      'I gave it to him yesterday, and now I want to give it to you again, but do not ask me for it.',
      'Kapag magkasunod ang le at lo, ang le ay nagiging se: se lo doy. Ang pagkakasunod-sunod ay indirect bago direct: me lo, te lo, se lo. Sa infinitive at command ay idinudugtong sa dulo at nagkakaroon ng accent.',
      'Order: indirect object first, then direct: me lo, te la, nos los. Le / les + lo / la / los / las becomes se: se lo doy. Pronouns go before a conjugated verb or attach to an infinitive, a gerund or an affirmative command (with an accent mark): dártelo, dándoselo, dámelo. In negative commands they go before: no me lo des.',
    ],
    [
      'indirect + direct · le/les → se',
      'Two l sounds in a row are impossible, so le becomes se.',
      'Se lo doy. No se lo digas.',
      'Se here is not reflexive; it is only a replacement for le / les. The second pronoun still tells you what was given: lo (it, masculine), la (it, feminine).',
    ],
    [
      'Which is correct for "I give it to him"?',
      ['Se lo doy.', 'Le lo doy.', 'Lo le doy.'],
      'Se lo doy.',
      'Le + lo becomes se lo.',
      'You hand something over.',
    ],
    [
      ['Quiero decírtelo.', 'I want to tell it to you.'],
      ['Dámelo, por favor.', 'Give it to me, please.'],
    ],
    [
      {
        heading: 'Orden y reglas',
        table: grid(
          ['Pattern', 'Example', 'English'],
          [
            ['me + lo', 'Me lo da.', 'He gives it to me.'],
            ['te + la', 'Te la presto.', 'I lend it to you.'],
            ['se + lo', 'Se lo digo.', 'I tell it to him.'],
            ['infinitive', 'Voy a dártelo.', 'I am going to give it to you.'],
            ['affirmative command', 'Dámelo.', 'Give it to me.'],
            ['negative command', 'No me lo des.', 'Do not give it to me.'],
          ],
          1,
        ),
      },
      stickBlock({
        trick: 'RID: Reflexive, Indirect, Direct is the order of pronouns. Me-lo, te-lo, se-lo.',
        practice: 'Replace nouns with pronouns in ten sentences: Doy el libro a Ana → Se lo doy.',
        mistake: 'Never put lo before the indirect pronoun. Say me lo, not lo me.',
      }),
    ],
  ),
  L(
    [
      'ub-verbs-of-change',
      'B2',
      'To become: ponerse, volverse, hacerse, convertirse.',
      B2_PRECISION,
      'Se puso nervioso, se volvió loco, se hizo médico y se convirtió en una persona feliz.',
      'He got nervous, he went crazy, he became a doctor and he turned into a happy person.',
      'May ilang paraan ng "maging" sa Espanyol. Ponerse ay pansamantalang pagbabago, volverse ay biglang malaking pagbabago, hacerse ay sa pagpili at convertirse en ay buong pagbabago.',
      'Spanish does not have one verb for become. Ponerse + adjective = temporary state or mood (ponerse rojo, triste). Volverse = sudden or deep change, often negative (volverse loco). Hacerse = by effort or choice (hacerse rico, hacerse médico). Convertirse en + noun = a complete transformation. Quedarse = to end up in a state (quedarse solo, quedarse ciego).',
    ],
    [
      'ponerse · volverse · hacerse · convertirse',
      'Match the verb to the kind of change.',
      'Me puse triste, pero me hice más fuerte.',
      'For jobs with hacerse, the effort is implied: se hizo médico = he worked to become a doctor. Llegar a ser also means to become, with gradual or achieved status: llegó a ser presidente.',
    ],
    [
      'Which verb fits a temporary mood change?',
      ['ponerse', 'convertirse', 'hacerse'],
      'ponerse',
      'Ponerse is used for temporary changes of state or mood.',
      'You describe how someone reacted.',
    ],
    [
      ['Me puse rojo de vergüenza.', 'I turned red with embarrassment.'],
      ['El agua se convirtió en hielo.', 'The water turned into ice.'],
    ],
    [
      {
        heading: 'Verbos de cambio',
        table: grid(
          ['Verb', 'Kind of change', 'Example'],
          [
            ['ponerse + adj.', 'temporary', 'Se puso triste.'],
            ['volverse + adj.', 'sudden, deep', 'Se volvió loco.'],
            ['hacerse + noun/adj.', 'effort / choice', 'Se hizo rico.'],
            ['convertirse en + noun', 'full transformation', 'Se convirtió en rana.'],
            ['llegar a ser', 'gradual result', 'Llegó a ser director.'],
            ['quedarse + adj.', 'end up in a state', 'Se quedó solo.'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'PUT-ON = ponerse (mood you put on), FLIP = volverse (sudden), HAND-MADE = hacerse (by effort).',
        practice: 'Pick one verb per sentence and describe three people in your life.',
        mistake: 'Do not use ser for becoming. Say me hice médico, not fui médico.',
      }),
    ],
  ),
  L(
    [
      'ub-gerund-participle',
      'B2',
      'Gerunds and participles at work.',
      B2_PRECISION,
      'Estando cansada, se fue a dormir; terminado el trabajo, salimos corriendo.',
      'Being tired, she went to sleep; the work finished, we left running.',
      'Ang -ando/-iendo ay nagsasabi ng paraan o sabay na kilos: salimos corriendo. Ang participio ay maaaring pang-uri: la puerta cerrada. Ang terminado el trabajo ay "pagkatapos matapos ang trabaho".',
      'Gerund (-ando / -iendo): manner or simultaneous action (salió corriendo), with estar for progressive (estoy comiendo), and with seguir / ir / llevar. Participle (-ado / -ido): after haber for perfect tenses, with estar for results (la puerta está cerrada), and alone in absolute constructions (terminado el trabajo = once the work is finished).',
    ],
    [
      'gerund = how/while · participle = result',
      'Do not use the gerund as a noun like English "swimming is fun".',
      'Nadar es divertido.',
      'English uses -ing as a noun, but Spanish uses the infinitive: Fumar es malo. The gerund does not describe a noun either: say la mujer que habla, not la mujer hablando.',
    ],
    [
      'How do you say "Swimming is fun"?',
      ['Nadar es divertido.', 'Nadando es divertido.', 'El nadando es divertido.'],
      'Nadar es divertido.',
      'Use the infinitive as the subject, not the gerund.',
      'You state a hobby.',
    ],
    [
      ['Entró cantando.', 'He came in singing.'],
      ['Hecho el plan, empezamos.', 'The plan done, we started.'],
    ],
    [
      {
        heading: 'Gerundio y participio',
        table: grid(
          ['Form', 'Use', 'Example'],
          [
            ['estar + gerund', 'progressive', 'Estoy leyendo.'],
            ['gerund alone', 'manner', 'Salió corriendo.'],
            ['seguir + gerund', 'continue', 'Sigue lloviendo.'],
            ['haber + participle', 'perfect', 'He comido.'],
            ['estar + participle', 'result', 'La puerta está cerrada.'],
            ['participle alone', 'absolute', 'Terminado el trabajo...'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'GERUND = Going on now. PARTICIPLE = Past done.',
        practice: 'Use each form once in a three-line story about your morning.',
        mistake: 'Use the infinitive as a noun in Spanish. Do not copy English "swimming is fun".',
      }),
    ],
  ),
  L(
    [
      'ub-verbs-prepositions',
      'B2',
      'Verbs that need a preposition.',
      B2_PRECISION,
      'Pienso en ti, sueño con viajar, dependo de mi familia y confío en que todo saldrá bien.',
      'I think of you, I dream of traveling, I depend on my family and I trust that everything will go well.',
      'Maraming pandiwa ay may kasamang pang-ukol na dapat kabisaduhin: pensar en, soñar con, depender de, confiar en. Hindi ito laging katulad ng Ingles.',
      'Spanish verbs often need a fixed preposition that differs from English: pensar en (think about), soñar con (dream of), depender de (depend on), confiar en (trust), casarse con (marry), enamorarse de (fall in love with), acordarse de (remember), tardar en (take time to), empezar a (begin to), acabar de (just), dejar de (stop). Learn the verb with its preposition as one chunk.',
    ],
    [
      'verb + fixed preposition',
      'Memorize the pair; do not translate the preposition.',
      'Me casé con Ana. No me acuerdo de eso.',
      'After a preposition use the infinitive, not a gerund: Después de comer, no Después de comiendo. Add que when a clause follows: Confío en que vendrás.',
    ],
    [
      'Which is correct?',
      ['Sueño con viajar.', 'Sueño de viajar.', 'Sueño en viajar.'],
      'Sueño con viajar.',
      'Soñar takes con.',
      'You talk about your plans.',
    ],
    [
      ['Me enamoré de ella.', 'I fell in love with her.'],
      ['Empiezo a trabajar a las ocho.', 'I start working at eight.'],
    ],
    [
      {
        heading: 'Verbo + preposición',
        table: grid(
          ['Verb + prep.', 'Meaning', 'Example'],
          [
            ['pensar en', 'think about', 'Pienso en ti.'],
            ['soñar con', 'dream of', 'Sueño con el mar.'],
            ['depender de', 'depend on', 'Depende de ti.'],
            ['confiar en', 'trust', 'Confío en ti.'],
            ['casarse con', 'marry', 'Se casó con Pedro.'],
            ['enamorarse de', 'fall in love with', 'Se enamoró de ella.'],
            ['acordarse de', 'remember', 'Me acuerdo de eso.'],
            ['empezar a', 'begin to', 'Empiezo a trabajar.'],
            ['dejar de', 'stop', 'Dejé de fumar.'],
            ['tardar en', 'take time', 'Tardó en llegar.'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'Learn them in chunks with a sentence: "Sueño CON...", "Pienso EN...", "Dependo DE...".',
        practice: 'Make a flash card for each pair with your own example.',
        mistake: 'Do not translate the preposition from English. Learn each verb as a pair.',
      }),
    ],
  ),
  L(
    [
      'ub-wishes-commands',
      'B2',
      'Indirect commands and wishes: que + subjunctive.',
      B2_PRECISION,
      '¡Que tengas un buen día! Que te vaya bien, y ojalá que todo salga como quieres.',
      'Have a good day! May it go well for you, and I hope everything turns out the way you want.',
      'Ang que + subjunctive ay nagpapahayag ng hiling o utos sa ibang tao: que tengas un buen día. Ang ojalá que ay sana. Maaaring wala ang pangunahing pandiwa.',
      'Que + subjunctive alone expresses a wish or an indirect command for a third person: Que descanses. Que lo hagan ellos. Ojalá (que) + subjunctive means I hope (present or future) or I wish (past forms). Use it for blessings and greetings: ¡Que te mejores! ¡Que lo pases bien! The main verb (quiero / deseo) is understood but not said.',
    ],
    [
      'que + subjunctive (wish)',
      'Drop the main verb and keep que.',
      'Que descanses. Ojalá llueva.',
      'Ojalá + present subjunctive = I hope (it might happen). Ojalá + imperfect subjunctive = I wish (unlikely). Ojalá + pluperfect subjunctive = I wish (regret).',
    ],
    [
      'How do you say "May you rest"?',
      ['Que descanses.', 'Que descansas.', 'Descansar.'],
      'Que descanses.',
      'Que + subjunctive is the wish form.',
      'You wish someone well.',
    ],
    [
      ['Ojalá que apruebes el examen.', 'I hope you pass the exam.'],
      ['Que lo pases bien en la fiesta.', 'Have a good time at the party.'],
    ],
    [
      {
        heading: 'Deseos',
        table: grid(
          ['Pattern', 'Example', 'English'],
          [
            ['que + present subj.', 'Que tengas suerte.', 'May you have luck.'],
            ['ojalá + present subj.', 'Ojalá llueva.', 'I hope it rains.'],
            ['ojalá + imperfect subj.', 'Ojalá tuviera tiempo.', 'I wish I had time.'],
            ['ojalá + pluperfect subj.', 'Ojalá hubiera ido.', 'I wish I had gone.'],
            ['que + 3rd-person command', 'Que pase.', 'Let him come in.'],
          ],
          1,
        ),
      },
      stickBlock({
        trick: 'Que is a magic wand: wave it in front of a subjunctive and you get a wish.',
        practice: 'Send three people a greeting with que + subjunctive today.',
        mistake: 'Do not use the indicative: say que descanses, not que descansas.',
      }),
    ],
  ),
  A(
    [
      'uc-subjunctive-relative',
      'C1',
      'Relative clauses with the subjunctive.',
      C1_NUANCE,
      'Busco un hotel que tenga piscina, pero no hay nadie que conozca la zona.',
      'I am looking for a hotel that has a pool, but there is nobody who knows the area.',
      'Kapag hinahanap mo pa ang isang bagay na maaaring wala, gumamit ng subjunctive. Kapag alam mo na na mayroon, indicative. Pagkatapos ng nadie o ningún, laging subjunctive.',
      'Use the subjunctive in a relative clause when the antecedent is unknown, nonexistent or hypothetical: Busco a alguien que hable japonés. Use the indicative when it is specific and known: Conozco a alguien que habla japonés. After negatives such as nadie, ningún, no hay: No hay nadie que sepa. Questions can use either: ¿Hay alguien que sepa? (unsure).',
    ],
    [
      'unknown → subjunctive · known → indicative',
      'Existence decides the mood.',
      'Necesito un libro que explique esto.',
      'The same sentence changes meaning with the mood: Busco una casa que tiene jardín (I look for a specific one) vs que tenga jardín (any such house).',
    ],
    [
      'Which is correct?',
      ['No hay nadie que lo sepa.', 'No hay nadie que lo sabe.', 'No hay nadie que lo supo.'],
      'No hay nadie que lo sepa.',
      'After nadie, use the subjunctive.',
      'You search for a person.',
    ],
    [
      ['Tengo un amigo que vive en Chile.', 'I have a friend who lives in Chile.'],
      ['Quiero un trabajo que me guste.', 'I want a job that I like.'],
    ],
    [
      {
        heading: 'Antecedente conocido o no',
        table: grid(
          ['Situation', 'Mood', 'Example'],
          [
            ['specific, known', 'indicative', 'Tengo un coche que corre.'],
            ['unknown / any', 'subjunctive', 'Busco un coche que corra.'],
            ['nonexistent', 'subjunctive', 'No hay nadie que sepa.'],
            ['negated search', 'subjunctive', 'No conozco a nadie que baile.'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'Does it exist for sure? Yes → indicative. Maybe or no → subjunctive.',
        practice: 'Write six "I am looking for / I know" pairs and mark the mood.',
        mistake: 'Do not use the indicative when you are searching: Busco a alguien que sepa.',
      }),
    ],
  ),
  A(
    [
      'uc-concessive',
      'C1',
      'Concession: aunque, a pesar de que, por más que.',
      C1_NUANCE,
      'Por más que lo intentes, aunque estés cansado y a pesar de que llueva, no te rindas.',
      'No matter how hard you try, even if you are tired and despite the fact that it rains, do not give up.',
      'Ang por más que, aunque at a pesar de que ay nagpapahayag ng pagtutol. Ang subjunctive ay para sa hindi tiyak o hypothetical; ang indicative ay para sa totoo.',
      'Concessive phrases: aunque, a pesar de que, pese a que, si bien, por mucho que, por más que, por muy + adjective + que. With the indicative, the speaker states a fact (Aunque llueve, salgo). With the subjunctive, the fact is hypothetical or unimportant (Aunque llueva, saldré). Por muy / por más / por mucho + que almost always takes the subjunctive.',
    ],
    [
      'aunque + indicative (fact) / subjunctive (hypothetical)',
      'The mood tells whether you accept the fact.',
      'Por muy difícil que sea, lo haré.',
      'A pesar de + noun or infinitive does not need que: a pesar del frío. A pesar de que + clause needs the full conjunction.',
    ],
    [
      'Which means "no matter how hard"?',
      ['por más que', 'aunque sí', 'dado que'],
      'por más que',
      'Por más que + subjunctive means no matter how much.',
      'You encourage a friend.',
    ],
    [
      ['Aunque llueva, iremos.', 'Even if it rains, we will go.'],
      ['Por muy cansado que esté, trabaja.', 'However tired he may be, he works.'],
    ],
    [
      {
        heading: 'Concesivas',
        table: grid(
          ['Connector', 'Mood', 'Example'],
          [
            ['aunque (fact)', 'indicative', 'Aunque llueve, salgo.'],
            ['aunque (hypothetical)', 'subjunctive', 'Aunque llueva, saldré.'],
            ['a pesar de que', 'indic. / subj.', 'A pesar de que es caro, lo compro.'],
            ['por más que / por mucho que', 'subjunctive', 'Por más que corra, no llega.'],
            ['por muy + adj. + que', 'subjunctive', 'Por muy fácil que sea...'],
            ['si bien', 'indicative', 'Si bien es cierto, ...'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'POR + MUCH WORD + QUE = subjunctive. The "no matter how" family always wants the subjunctive.',
        practice: 'Finish five sentences: Por muy... que sea, voy a...',
        mistake: 'Do not use the infinitive after a pesar de que. Use a clause.',
      }),
    ],
  ),
  A(
    [
      'uc-se-uses',
      'C1',
      'All the uses of se.',
      C1_NUANCE,
      'Se lo dije, se fue, se venden casas, se me olvidó y se dice que se quieren mucho.',
      'I told him it, he left, houses are sold, I forgot it, and it is said that they love each other very much.',
      'Maraming gamit ang se: pamalit sa le/les, reflexive, reciprocal, passive, impersonal, hindi sinasadya at paliwanag ng pagbabago. Alamin ang gamit ayon sa konteksto.',
      'Se has seven main jobs: (1) replaces le / les before lo, la: se lo dije. (2) reflexive: se lava. (3) reciprocal: se quieren (they love each other). (4) passive: se venden casas. (5) impersonal: se dice que. (6) accidental: se me olvidó. (7) intensifying or "ethic" use: se comió todo. Ask: who does what to whom? The pronouns tell you.',
    ],
    [
      'se = replacement, reflexive, passive, impersonal, accidental',
      'Same word, seven jobs. Context tells which.',
      'Se me cayó el vaso.',
      'In se me olvidó, the thing is the subject and I am an indirect object: the forgetting happened to me. This avoids blame. English says I forgot; Spanish says it forgot itself on me.',
    ],
    [
      'What kind of se is in "Se venden casas"?',
      ['passive', 'reflexive', 'replacement of le'],
      'passive',
      'Se venden casas is the reflexive passive: houses are sold.',
      'You analyze a sentence.',
    ],
    [
      ['Se me perdieron las llaves.', 'I lost my keys (they got lost on me).'],
      ['Se escriben todos los días.', 'They write to each other every day.'],
    ],
    [
      {
        heading: 'Los siete se',
        table: grid(
          ['Use', 'Example', 'English'],
          [
            ['replaces le/les', 'Se lo dije.', 'I told it to him.'],
            ['reflexive', 'Se lava las manos.', 'He washes his hands.'],
            ['reciprocal', 'Se quieren.', 'They love each other.'],
            ['passive', 'Se venden casas.', 'Houses are sold.'],
            ['impersonal', 'Se dice que...', 'It is said that...'],
            ['accidental', 'Se me olvidó.', 'I forgot it.'],
            ['intensifier', 'Se comió todo.', 'He ate it all up.'],
          ],
          1,
        ),
      },
      stickBlock({
        trick:
          'Ask three questions: Who acts? On whom? Is it general? That tells you which se you have.',
        practice: 'Find ten sentences with se in a short article and label each one.',
        mistake: 'Do not translate se literally. Translate the job it does in the sentence.',
      }),
    ],
  ),
  A(
    [
      'uc-probability-future',
      'C1',
      'Guessing and probability: será, estará, habrá.',
      C1_NUANCE,
      '¿Dónde estará Ana? Estará en casa, habrá salido temprano y tendrá mucho trabajo.',
      'Where could Ana be? She is probably at home, she has probably left early and she probably has a lot of work.',
      'Ang future at conditional ay maaaring magpahayag ng hula: estará (siguro nasa). Ang habrá salido ay malamang umalis na. Hindi ito tungkol sa hinaharap.',
      'Spanish uses the future tense to guess about the present: Estará en casa = She is probably at home. The future perfect guesses about the past: Habrá salido = She has probably left. The conditional guesses about the past: Estaría cansado = He was probably tired. Add probablemente or seguramente for emphasis.',
    ],
    [
      'future = present guess · conditional = past guess',
      'Future ≠ always future.',
      '¿Qué hora será? Serán las tres.',
      'This is the equivalent of "must be" in English: Serán las tres = It must be three. Use deber de + infinitive in formal writing: Debe de ser tarde.',
    ],
    [
      'What does "Estará en casa" mean?',
      ['She is probably at home.', 'She will be at home.', 'She was at home.'],
      'She is probably at home.',
      'The future is used here to guess about the present.',
      'You wonder where a friend is.',
    ],
    [
      ['Serán las diez, más o menos.', 'It must be around ten.'],
      ['Tendría treinta años cuando se casó.', 'He was probably thirty when he got married.'],
    ],
    [
      {
        heading: 'Probabilidad',
        table: grid(
          ['Form', 'Meaning', 'Example'],
          [
            ['future', 'present guess', 'Estará en casa.'],
            ['future perfect', 'past guess (recent)', 'Habrá salido.'],
            ['conditional', 'past guess', 'Estaría cansado.'],
            ['conditional perfect', 'earlier past guess', 'Habría llegado antes.'],
            ['deber de + inf.', 'formal guess', 'Debe de ser tarde.'],
          ],
          0,
        ),
      },
      stickBlock({
        trick: 'Future = present guess. Conditional = past guess. Both shift the time one step.',
        practice: 'Guess five things about people around you using the future.',
        mistake: 'Do not use the future only for plans. It also guesses.',
      }),
    ],
  ),
  A(
    [
      'uc-personal-a',
      'C1',
      'Personal a: when it is needed and when it is not.',
      C1_NUANCE,
      'Veo a mi madre, busco a un médico, pero busco un médico bueno y no tengo a nadie.',
      'I see my mother, I am looking for a doctor (specific), but I am looking for a good doctor (any) and I have nobody.',
      'Ang personal a ay ginagamit bago ang taong direktang layon: veo a mi madre. Hindi ito ginagamit pagkatapos ng tener, haber o kapag hindi tiyak ang tao.',
      'Use personal a before a specific person or a pet as the direct object: Veo a Ana. Skip it after tener in the sense of own/have: Tengo dos hermanos. Skip it after hay: Hay una persona. Usually skip it for unspecific people: Busco un médico (any). Use it with alguien, nadie, quién: No veo a nadie. ¿A quién ves?',
    ],
    [
      'a + specific person as direct object',
      'The a replaces nothing; it only marks the person.',
      'Conozco a tu hermano. Tengo un hermano.',
      'The a prevents confusion about who does what, especially when word order is flexible: A María la ve Pedro vs María ve a Pedro. Missing a changes the meaning.',
    ],
    [
      'Which is correct?',
      ['Veo a mi madre.', 'Veo mi madre.', 'Veo en mi madre.'],
      'Veo a mi madre.',
      'A specific person as the direct object needs personal a.',
      'You describe who you see.',
    ],
    [
      ['Llamé a mi jefe.', 'I called my boss.'],
      ['Necesito una enfermera.', 'I need a nurse (any).'],
    ],
    [
      {
        heading: 'La a personal',
        table: grid(
          ['Case', 'a?', 'Example'],
          [
            ['specific person', 'yes', 'Veo a Ana.'],
            ['pet or loved animal', 'yes', 'Quiero a mi perro.'],
            ['with alguien / nadie', 'yes', 'No veo a nadie.'],
            ['after tener (own)', 'no', 'Tengo dos hijos.'],
            ['after hay', 'no', 'Hay una chica.'],
            ['unspecific person', 'no', 'Busco un médico.'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'Person on the receiving end? Put an a in front of them as a doorway.',
        practice: 'Write ten sentences with people as objects and check the a each time.',
        mistake: 'Do not use a after tener or hay with people: tengo un hermano, hay un niño.',
      }),
    ],
  ),
  A(
    [
      'uc-articles',
      'C1',
      'Using and dropping articles.',
      C1_NUANCE,
      'Me duele la cabeza, el lunes voy a clase, hablo español y soy médico.',
      'My head hurts, on Monday I go to class, I speak Spanish and I am a doctor.',
      'Ginagamit ang el/la sa bahagi ng katawan, araw, pangkalahatang bagay at wika sa mga pangungusap. Hindi ito ginagamit sa propesyon pagkatapos ng ser o sa mga wika pagkatapos ng hablar.',
      'Use the definite article for body parts (me lavo las manos), days (el lunes = on Monday), general nouns (me gusta el café), times (son las tres) and languages as a subject (El español es bonito). Drop it after hablar and en: hablo español, en español. Drop it with professions after ser: soy médico. Drop it with titles when speaking to the person: Buenos días, señor García.',
    ],
    [
      'article for general, days, body · none for jobs, languages after hablar',
      'English drops where Spanish keeps, and vice versa.',
      'El lunes voy a clase. Soy médico.',
      'With a modifier, add the article for professions: Es un médico excelente. Abstract nouns and general statements keep the article in Spanish: La vida es dura.',
    ],
    [
      'Which is correct?',
      ['Soy médico.', 'Soy el médico.', 'Soy un médico.'],
      'Soy médico.',
      'Professions after ser usually drop the article.',
      'You state your job.',
    ],
    [
      ['Los niños necesitan amor.', 'Children need love.'],
      ['Estudio español los lunes.', 'I study Spanish on Mondays.'],
    ],
    [
      {
        heading: 'Con y sin artículo',
        table: grid(
          ['Use', 'Article', 'Example'],
          [
            ['body part', 'yes', 'Me lavo las manos.'],
            ['days (habit)', 'yes', 'Voy los lunes.'],
            ['general noun', 'yes', 'Me gusta el café.'],
            ['time', 'yes', 'Son las dos.'],
            ['language after hablar', 'no', 'Hablo español.'],
            ['profession after ser', 'no', 'Soy profesor.'],
            ['adjective + profession', 'yes', 'Es un profesor excelente.'],
          ],
          2,
        ),
      },
      stickBlock({
        trick:
          'Body, days, general, time → keep the article. Jobs and languages after verbs → drop it.',
        practice: 'Rewrite six English sentences and check each article.',
        mistake: 'Do not say soy un médico unless you add an adjective. Say soy médico.',
      }),
    ],
  ),
  A(
    [
      'uc-negative-polarity',
      'C1',
      'Double negatives and negative words.',
      C1_NUANCE,
      'No veo a nadie, no tengo nada, nunca voy a ningún sitio y tampoco quiero ir.',
      'I do not see anybody, I have nothing, I never go anywhere and I do not want to go either.',
      'Sa Espanyol ay tama ang dobleng negatibo: no veo a nadie. Kapag nauna ang negatibong salita sa pandiwa, hindi na kailangan ang no: nadie viene.',
      'Negative words: nada, nadie, nunca, jamás, ningún / ninguno, tampoco, ni, ni siquiera. When the negative word comes after the verb, add no before it: No veo a nadie. When it comes before the verb, drop no: Nadie viene. Spanish allows stacking: No dice nunca nada a nadie. Ninguno shortens to ningún before masculine nouns.',
    ],
    [
      'no + verb + negative word',
      'Double negatives are correct and required.',
      'No tengo nada. Nunca vengo.',
      'English considers double negatives wrong; Spanish requires them in this order. Ni siquiera means not even. Ni... ni means neither... nor and takes no verb negation if it comes first.',
    ],
    [
      'Which is correct?',
      ['No veo a nadie.', 'Veo a nadie.', 'No veo nadie.'],
      'No veo a nadie.',
      'Use no before the verb, and personal a before nadie.',
      'You answer a question.',
    ],
    [
      ['Ni siquiera me llamó.', 'He did not even call me.'],
      ['Tampoco tengo hambre.', 'I am not hungry either.'],
    ],
    [
      {
        heading: 'Palabras negativas',
        table: grid(
          ['Negative', 'Positive', 'Example'],
          [
            ['nada', 'algo', 'No tengo nada.'],
            ['nadie', 'alguien', 'No veo a nadie.'],
            ['nunca / jamás', 'siempre', 'Nunca voy.'],
            ['ningún / ninguno', 'algún / alguno', 'No hay ningún problema.'],
            ['tampoco', 'también', 'Yo tampoco.'],
            ['ni siquiera', 'incluso', 'Ni siquiera llamó.'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'No before the verb "lets in" any negative word after it. Negative word first? Drop no.',
        practice: 'Turn five positive sentences into negatives with nada, nadie, nunca.',
        mistake:
          'Do not skip no when the negative word follows the verb. Say no veo a nadie, not veo a nadie.',
      }),
    ],
  ),
];
