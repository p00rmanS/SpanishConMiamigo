import { A } from './advanced-lessons-1.js';
import { grid } from './school-basics-1.js';

// Mastery style and register: formality, academic connectors, news style, hedging, debate,
// negotiation, idioms, literary tenses and word building.
export const C2_STYLE = 'Mastery: style and register';
export const C2_WORDS = 'Mastery: idioms and word building';

export const advancedLessons2 = [
  A(
    [
      'ad-formal-register',
      'C2',
      'Register: tú, usted, vos and vosotros.',
      C2_STYLE,
      'Le agradezco su atención, pero si prefiere que nos tuteemos, no hay inconveniente.',
      'I thank you for your attention, but if you prefer that we use the informal form, there is no problem.',
      'Ang tú ay impormal, ang usted ay magalang, ang vos ay ginagamit sa Argentina at iba pa at ang vosotros ay sa Espanya. Ang tutear ay gumamit ng tú.',
      'Choose the form by region and relationship. Tú: friends, family. Usted: respect, strangers, business. Vos: Argentina, Uruguay, Central America. Vosotros: Spain; ustedes replaces it in Latin America. Tutear means to use tú; ustedear is to use usted.',
    ],
    [
      'tú / usted / vos / vosotros',
      'Let the other person lead, then follow.',
      '¿Nos tuteamos?',
      'Using tú too early can be rude in formal settings. When in doubt, start with usted and wait for the invitation: ¿Podemos tutearnos?',
    ],
    [
      'Which form is the most formal?',
      ['usted', 'tú', 'vos'],
      'usted',
      'Usted is formal. Tú is informal and vos is regional informal.',
      'You meet a client for the first time.',
    ],
    [
      ['¿Prefiere que le llame de usted?', 'Do you prefer that I call you usted?'],
      ['Aquí todos nos tuteamos.', 'Here everybody uses tú.'],
    ],
    [
      {
        heading: 'Cuatro formas de tratamiento',
        table: grid(
          ['Form', 'Where / when', 'Verb example'],
          [
            ['tú', 'friends, family', 'tú hablas'],
            ['usted', 'respect, business', 'usted habla'],
            ['vos', 'Argentina, Uruguay, Central America', 'vos hablás'],
            ['vosotros', 'Spain', 'vosotros habláis'],
            ['ustedes', 'Latin America plural', 'ustedes hablan'],
            ['tutear', 'to use tú', '¿Nos tuteamos?'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-academic-connectors',
      'C2',
      'Academic connectors and formal argument.',
      C2_STYLE,
      'No obstante, cabe señalar que, en consecuencia, los resultados deben interpretarse con cautela.',
      'Nevertheless, it should be pointed out that, consequently, the results should be interpreted with caution.',
      'Ang no obstante ay gayunpaman, ang en consecuencia ay bilang resulta at ang cabe señalar ay dapat tandaan. Ginagamit sa pormal na sulat.',
      'Academic Spanish uses linkers: no obstante, sin embargo, por consiguiente, en consecuencia, cabe destacar, en cuanto a, con respecto a, a pesar de, dado que, puesto que. They organize an argument the way English however, therefore and regarding do.',
    ],
    [
      'linker + comma',
      'Vary linkers so the text does not repeat.',
      'Por consiguiente, se recomienda actuar.',
      'Dado que and puesto que mean since in the sense of because. Do not confuse with desde que, which is since in time.',
    ],
    [
      'Which means "nevertheless"?',
      ['no obstante', 'por consiguiente', 'dado que'],
      'no obstante',
      'No obstante is nevertheless; por consiguiente is therefore; dado que is given that.',
      'You write a report or thesis.',
    ],
    [
      [
        'Con respecto a la propuesta, hay dos objeciones.',
        'Regarding the proposal, there are two objections.',
      ],
      [
        'Dado que los datos son limitados, hay que ser prudentes.',
        'Given that the data are limited, we must be cautious.',
      ],
    ],
    [
      {
        heading: 'Conectores académicos',
        table: grid(
          ['Function', 'Linker', 'English'],
          [
            ['contrast', 'no obstante / sin embargo', 'nevertheless / however'],
            ['result', 'por consiguiente / en consecuencia', 'therefore / consequently'],
            ['cause', 'dado que / puesto que', 'given that / since'],
            ['topic', 'con respecto a / en cuanto a', 'regarding / as for'],
            ['concession', 'a pesar de / aun así', 'despite / even so'],
            ['addition', 'asimismo / además', 'likewise / besides'],
            ['highlight', 'cabe destacar que', 'it is worth noting that'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-news-style',
      'C2',
      'News headlines and journalistic style.',
      C2_STYLE,
      'El gobierno anuncia nuevas medidas y asegura que la economía crecerá un dos por ciento.',
      'The government announces new measures and assures that the economy will grow two percent.',
      'Sa headline ginagamit ang present para sa nangyari na: el gobierno anuncia. Madalas ay iniiwan ang artikulo at ginagamit ang colon o kuwit.',
      'Headlines use the present for past events, skip articles, and use short forms: Gobierno anuncia medidas. Reporting verbs: afirmar, asegurar, señalar, declarar, according to is según. Use the conditional for unconfirmed news: el presidente habría viajado.',
    ],
    [
      'present tense for past news',
      'Headlines are in the present: el gobierno anuncia.',
      'La policía detiene a tres sospechosos.',
      'The conditional can mean unconfirmed: según fuentes, el ministro habría renunciado (reportedly).',
    ],
    [
      'Which is a headline style?',
      [
        'Gobierno anuncia nuevas medidas',
        'El gobierno anunció nuevas medidas ayer',
        'Anuncio nuevas medidas',
      ],
      'Gobierno anuncia nuevas medidas',
      'Headlines drop the article and use the present.',
      'You read the front page.',
    ],
    [
      [
        'Según fuentes oficiales, no hay heridos.',
        'According to official sources, there are no injuries.',
      ],
      ['El presidente habría viajado a Madrid.', 'The president reportedly traveled to Madrid.'],
    ],
    [
      {
        heading: 'Lenguaje periodístico',
        table: grid(
          ['Feature', 'Example', 'English'],
          [
            ['present for past', 'Gobierno anuncia...', 'Government announces...'],
            ['dropped article', 'Policía detiene a...', 'Police arrest...'],
            ['según', 'Según el informe...', 'According to the report...'],
            ['conditional for rumor', 'habría renunciado', 'reportedly resigned'],
            ['reporting verb', 'afirmó, aseguró, señaló', 'said, assured, pointed out'],
            ['quote verb', 'declaró que', 'stated that'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-hedging',
      'C2',
      'Hedging: softening claims and showing doubt.',
      C2_STYLE,
      'Al parecer, el proyecto sería viable, aunque quizá habría que revisar el presupuesto.',
      'Apparently, the project would be viable, although perhaps the budget would need to be reviewed.',
      'Ang al parecer ay mukhang. Ang quizá ay marahil at ang sería ay maaaring. Pinapalambot ang mga pahayag para maging magalang o maingat.',
      'Hedges soften claims: al parecer, aparentemente, por lo visto, quizá, tal vez, probablemente. The conditional and the imperfect soften requests: quería pedirle, podría ayudarme. Se dice que / parece que present caution about a fact.',
    ],
    [
      'quizá / tal vez + subj. or indic.',
      'Quizá + subjunctive is more doubtful than quizá + indicative.',
      'Quizá venga mañana.',
      'Quizá viene is possible but less uncertain than quizá venga.',
    ],
    [
      'Which sounds more tentative?',
      ['Quería preguntarle algo.', 'Quiero preguntarle algo.', 'Pregunto algo.'],
      'Quería preguntarle algo.',
      'The imperfect softens the request politely.',
      'You ask your boss for a favor.',
    ],
    [
      ['Por lo visto, no vienen hoy.', 'Apparently, they are not coming today.'],
      ['Podría ayudarme, por favor.', 'Could you help me, please.'],
    ],
    [
      {
        heading: 'Suavizadores',
        table: grid(
          ['Hedge', 'Example', 'English'],
          [
            ['al parecer', 'Al parecer llegó.', 'Apparently he arrived.'],
            ['por lo visto', 'Por lo visto no sabe.', 'Apparently he does not know.'],
            ['quizá / tal vez', 'Quizá venga.', 'Maybe he will come.'],
            ['probablemente', 'Probablemente llueva.', 'It will probably rain.'],
            ['imperfect', 'Quería pedirle algo.', 'I wanted to ask you something.'],
            ['conditional', 'Podría ayudarme.', 'Could you help me.'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-debate-phrases',
      'C2',
      'Debating: agreeing, disagreeing and conceding.',
      C2_STYLE,
      'Entiendo tu postura, pero no estoy de acuerdo, ya que los datos indican lo contrario.',
      'I understand your position, but I disagree, since the data indicate the opposite.',
      'Ang entiendo tu postura ay naiintindihan ko ang posisyon mo. Ang no estoy de acuerdo ay hindi ako sang-ayon. Ang ya que ay dahil.',
      'Agree: coincido, estoy de acuerdo, tienes razón. Disagree politely: no lo veo así, discrepo, no comparto tu opinión. Concede: es cierto que... pero. Rebut: sin embargo, por el contrario, al contrario.',
    ],
    [
      'es cierto que..., pero...',
      'Concede first, then disagree.',
      'Es cierto que es caro, pero vale la pena.',
      'After es cierto que use the indicative; after no es cierto que use the subjunctive.',
    ],
    [
      'Which is a polite disagreement?',
      ['Discrepo, ya que los datos dicen otra cosa.', 'Estás equivocado.', 'No sabes nada.'],
      'Discrepo, ya que los datos dicen otra cosa.',
      'Discrepo is polite and offers a reason.',
      'A panel discussion.',
    ],
    [
      ['No lo veo así, la verdad.', 'I do not see it that way, honestly.'],
      ['Coincido contigo en lo esencial.', 'I agree with you on the essentials.'],
    ],
    [
      {
        heading: 'Frases para debatir',
        table: grid(
          ['Function', 'Phrase', 'English'],
          [
            ['agree', 'Coincido contigo.', 'I agree with you.'],
            ['agree', 'Tienes toda la razón.', 'You are absolutely right.'],
            ['disagree', 'No lo veo así.', 'I do not see it that way.'],
            ['disagree', 'Discrepo.', 'I disagree.'],
            ['concede', 'Es cierto que..., pero...', 'It is true that..., but...'],
            ['rebut', 'Al contrario, ...', 'On the contrary, ...'],
            ['ask', '¿En qué te basas?', 'What is that based on?'],
          ],
          1,
        ),
      },
    ],
  ),
  A(
    [
      'ad-negotiation',
      'C2',
      'Negotiating: offers, conditions and closing.',
      C2_STYLE,
      'Estaríamos dispuestos a aceptar siempre y cuando se respeten los plazos acordados.',
      'We would be willing to accept as long as the agreed deadlines are respected.',
      'Ang siempre y cuando ay basta at hangga’t. Ang estaríamos dispuestos ay handa kaming. Ang plazo ay palugit o deadline.',
      'Negotiation phrases: estar dispuesto a, siempre y cuando + subjunctive, a cambio de, en caso de que, llegar a un acuerdo, ceder, cerrar el trato. Use the conditional for polite offers: podríamos ofrecer, estaríamos dispuestos.',
    ],
    [
      'siempre y cuando + subjunctive',
      'Siempre y cuando states the condition.',
      'Firmamos siempre y cuando se cumplan los plazos.',
      'Siempre que and siempre y cuando both take the subjunctive when they mean provided that.',
    ],
    [
      'Which means "provided that"?',
      ['siempre y cuando', 'a cambio de', 'en cuanto a'],
      'siempre y cuando',
      'Siempre y cuando introduces a condition.',
      'You close a deal.',
    ],
    [
      [
        'Podríamos ofrecerle un descuento del diez por ciento.',
        'We could offer you a ten percent discount.',
      ],
      ['Llegamos a un acuerdo.', 'We reached an agreement.'],
    ],
    [
      {
        heading: 'Negociar',
        table: grid(
          ['Phrase', 'Use', 'English'],
          [
            ['estar dispuesto a', 'willingness', 'to be willing to'],
            ['siempre y cuando', 'condition', 'provided that'],
            ['a cambio de', 'exchange', 'in exchange for'],
            ['ceder', 'concession', 'to give in'],
            ['llegar a un acuerdo', 'result', 'to reach an agreement'],
            ['cerrar el trato', 'result', 'to close the deal'],
            ['la contraoferta', 'noun', 'counteroffer'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-idioms-advanced',
      'C2',
      'Advanced idioms and figurative phrases.',
      C2_WORDS,
      'Metió la pata, pero ahora está en las nubes y no ve que el tiempo es oro.',
      'He put his foot in it, but now he is in the clouds and does not see that time is money.',
      'Ang meter la pata ay magkamali. Ang estar en las nubes ay lumilipad ang isip. Ang el tiempo es oro ay time is gold. Ang mga idiom ay hindi literal.',
      'Idioms are not literal: meter la pata (make a blunder), estar en las nubes (be distracted), tomar el pelo (tease), costar un ojo de la cara (be very expensive), no tener pelos en la lengua (speak bluntly), ponerse las pilas (get moving, Mexico).',
    ],
    [
      'verb + fixed phrase',
      'Learn idioms as whole chunks.',
      'No tiene pelos en la lengua.',
      'Idioms often change by country. Check the region before using one in a formal setting.',
    ],
    [
      'What does "tomar el pelo" mean?',
      ['to tease someone', 'to cut hair', 'to take a hat'],
      'to tease someone',
      'Tomar el pelo means to pull someone’s leg.',
      'A friend jokes with you.',
    ],
    [
      ['Me costó un ojo de la cara.', 'It cost me an arm and a leg.'],
      ['Ponte las pilas o no terminarás.', 'Get moving or you will not finish.'],
    ],
    [
      {
        heading: 'Modismos avanzados',
        table: grid(
          ['Idiom', 'Meaning', 'Literal'],
          [
            ['meter la pata', 'make a blunder', 'put in the paw'],
            ['estar en las nubes', 'be distracted', 'be in the clouds'],
            ['tomar el pelo', 'tease', 'take the hair'],
            ['costar un ojo de la cara', 'be very expensive', 'cost an eye'],
            ['no tener pelos en la lengua', 'speak bluntly', 'no hairs on the tongue'],
            ['ponerse las pilas', 'get moving', 'put in the batteries'],
            ['dar la lata', 'be annoying', 'give the can'],
            ['echar una mano', 'lend a hand', 'throw a hand'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-literary-tenses',
      'C2',
      'Literary and rare tenses.',
      C2_WORDS,
      'Apenas hubo amanecido, saliere quien saliere, partiremos, aunque hubiese llovido.',
      'As soon as dawn had broken, whoever may go out, we will leave, even if it had rained.',
      'Mga pandiwa na bihira sa usapan ngunit nasa panitikan at batas: ang pretérito anterior, ang futuro de subjuntivo at ang -se na anyo ng imperfect subjunctive.',
      'Rare tenses: pretérito anterior (hubo amanecido) after apenas, en cuanto; futuro de subjuntivo (saliere) in fixed phrases and law; imperfect subjunctive -se (hubiese) = -ra (hubiera) in meaning. You mostly read these; you rarely say them.',
    ],
    [
      'hubiese = hubiera',
      'The -se and -ra imperfect subjunctive mean the same.',
      'Si tuviese tiempo, iría.',
      'In speech, -ra is more common; -se is literary or from Spain. Do not mix both in one text without reason.',
    ],
    [
      'Which is the -se form of hubiera?',
      ['hubiese', 'hubiere', 'hubo'],
      'hubiese',
      'Hubiese equals hubiera. Hubiere is the future subjunctive form.',
      'You read a 19th-century novel.',
    ],
    [
      ['Si tuviese dinero, viajaría.', 'If I had money, I would travel.'],
      ['Quien lo hubiere hecho, que hable.', 'Whoever may have done it, let him speak.'],
    ],
    [
      {
        heading: 'Tiempos literarios',
        table: grid(
          ['Tense', 'Form', 'Use'],
          [
            ['pretérito anterior', 'hubo amanecido', 'after apenas, cuando (literary)'],
            ['imp. subj. -se', 'tuviese, hubiese', 'same as -ra (tuviera)'],
            ['futuro de subj.', 'hubiere, fuere', 'law, proverbs'],
            ['futuro de subj.', 'sea lo que fuere', 'whatever it may be'],
            ['pretérito perfecto', 'ha ganado', 'common spoken'],
          ],
          0,
        ),
      },
    ],
  ),
  A(
    [
      'ad-word-building',
      'C2',
      'Word building: prefixes, suffixes and families.',
      C2_WORDS,
      'Lo imposible es desconocido, pero la inestabilidad de lo inalcanzable desanima rápidamente.',
      'The impossible is unknown, but the instability of the unattainable discourages quickly.',
      'Ang mga unlapi at hulapi ay tumutulong sa pagbuo ng salita: in-, des-, re-, -dad, -ción, -mente. Kapag alam mo ang tuntunin, mas madaling hulaan ang bagong salita.',
      'Prefixes: in-/im- (negation), des- (undo), re- (again), pre-, sobre-, sub-. Suffixes: -dad/-tad (quality), -ción/-sión (action), -mente (adverb), -ero/-or (agent), -oso (full of), -ito/-ón (small/large). Learn word families to guess meaning.',
    ],
    [
      'prefix + root + suffix',
      'Break a new word into parts.',
      'Reconstrucción = re + construir + ción.',
      'Before p and b use im-: imposible, imperfecto. Before l use il-: ilegal. Before r use ir-: irreal.',
    ],
    [
      'What does "desconocido" mean?',
      ['unknown', 'known again', 'very known'],
      'unknown',
      'Des- reverses or negates: conocido becomes desconocido.',
      'You guess a new word.',
    ],
    [
      ['La reconstrucción tomó dos años.', 'The reconstruction took two years.'],
      ['Es una persona muy trabajadora.', 'She is a very hardworking person.'],
    ],
    [
      {
        heading: 'Prefijos y sufijos',
        table: grid(
          ['Part', 'Meaning', 'Example'],
          [
            ['in- / im-', 'not', 'imposible'],
            ['des-', 'undo', 'deshacer'],
            ['re-', 'again', 'rehacer'],
            ['-dad', 'quality', 'felicidad'],
            ['-ción', 'action', 'educación'],
            ['-mente', 'adverb', 'rápidamente'],
            ['-oso', 'full of', 'peligroso'],
            ['-ero / -or', 'doer', 'panadero, escritor'],
          ],
          0,
        ),
      },
    ],
  ),
];
