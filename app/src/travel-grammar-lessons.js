import { L } from './home-world-lessons.js';
import { vocab } from './little-learner-lessons.js';

// Batch 7: real-life situations (airport and hotel, emergencies, phone calls, shopping, dating, repairs)
// and grammar helpers (ya/todavía, big numbers, pronunciation, se me olvidó, lo + adjective, connectors, reported speech).
const REAL = 'Real life: travel, phone and shopping';
const LIFE = 'Real life: home and relationships';
const TRICKS = 'Word power: connectors and tricks';

const grid = (head, rows, speakCol = 0) => ({
  head,
  langs: head.map((h) => (h === 'English' || h === 'Means' ? 'en' : 'es')),
  speakCol,
  rows,
});

export const travelGrammarLessons = [
  L(
    [
      'rl-airport-hotel',
      'A2',
      'At the airport and the hotel.',
      REAL,
      'Tengo una reservación a nombre de López; ¿a qué hora es el desayuno?',
      'I have a reservation under the name López; what time is breakfast?',
      'Ang reservation ay la reservación (o la reserva sa Spain). Sabihin ang a nombre de + apelyido. Ang gate ay la puerta de embarque at ang luggage ay el equipaje.',
      'At a hotel say tengo una reservación a nombre de… and ask ¿a qué hora es el desayuno? At the airport you need el pasaporte, el boleto (la boleta in some countries), la puerta de embarque (gate) and el equipaje (luggage). Room is la habitación (also el cuarto).',
    ],
    [
      'tengo una reservación a nombre de + name',
      'A nombre de means under the name of.',
      '¿A qué hora es el desayuno?',
      'Ticket is el boleto in Latin America and el billete in Spain. Both are understood.',
    ],
    [
      'Which word means luggage?',
      ['el equipaje', 'el pasaporte', 'la habitación'],
      'el equipaje',
      'Equipaje is luggage. Pasaporte is passport and habitación is room.',
      'You check in at a hotel.',
    ],
    [
      ['¿Dónde está la puerta de embarque?', 'Where is the boarding gate?'],
      ['Mi vuelo sale a las diez.', 'My flight leaves at ten.'],
    ],
    [
      {
        heading: 'Viajar',
        table: vocab(
          [
            ['🛂', 'el pasaporte', 'passport', 'pasaporte'],
            ['🎫', 'el boleto / el billete', 'ticket', 'tiket'],
            ['🧳', 'el equipaje', 'luggage', 'bagahe'],
            ['🛫', 'el vuelo', 'flight', 'biyahe sa eroplano'],
            ['🚪', 'la puerta de embarque', 'boarding gate', 'gate'],
            ['🏨', 'la habitación / el cuarto', 'room', 'kuwarto'],
            ['🗝️', 'la llave', 'key', 'susi'],
            ['🍳', 'el desayuno', 'breakfast', 'almusal'],
            ['📝', 'la reservación / la reserva', 'reservation', 'reserbasyon'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'rl-emergency',
      'A2',
      'Emergencies: help, call, hurt.',
      REAL,
      '¡Ayuda! Llamen a una ambulancia, mi amigo está herido y no respira bien.',
      'Help! Call an ambulance, my friend is hurt and is not breathing well.',
      'Mga emergency: ¡Ayuda! (tulong), ¡Llame a la policía! (tawagan ang pulis), ¡Es una emergencia! Ang ambulancia ay ambulansya at ang herido ay sugatan.',
      'In an emergency be short and clear: ¡Ayuda!, ¡Es una emergencia!, ¡Llame a la policía!, ¡Necesito un médico! Use usted commands (llame, llamen, traiga). Herido means injured and perdido means lost. The emergency number varies: 911 in Mexico and many countries, 112 in Spain.',
    ],
    [
      'llame + a + service',
      'Usted command: llame, traiga, ayúdeme.',
      '¡Es una emergencia!',
      'Use the polite command forms (llame, ayúdeme) with strangers; they are the same as the usted present subjunctive.',
    ],
    [
      'Which phrase asks someone to call the police?',
      ['Llame a la policía.', 'Tengo una cita.', 'Quisiera la cuenta.'],
      'Llame a la policía.',
      'Llame a la policía is the usted command for call the police.',
      'You see an accident on the street.',
    ],
    [
      ['Estoy perdido; ¿me puede ayudar?', 'I am lost; can you help me?'],
      ['Necesito un médico ahora mismo.', 'I need a doctor right now.'],
    ],
    [
      {
        heading: 'Emergencia',
        table: vocab(
          [
            ['🆘', '¡Ayuda! / ¡Socorro!', 'Help!', 'Tulong!'],
            ['🚑', 'la ambulancia', 'ambulance', 'ambulansya'],
            ['👮', 'la policía', 'police', 'pulis'],
            ['🔥', 'el incendio / el fuego', 'fire', 'sunog'],
            ['🤕', 'herido / herida', 'injured', 'sugatan'],
            ['🧭', 'perdido / perdida', 'lost', 'naliligaw'],
            ['🏥', 'el hospital', 'hospital', 'ospital'],
            ['📞', 'Llame al 911 (112 en España)', 'Call 911 (112 in Spain)', 'Tawagan ang 911'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'rl-phone-calls',
      'A2',
      'Phone calls: bueno, diga, ¿está…?',
      REAL,
      'Bueno, buenas tardes, ¿está Ana? No, no está; ¿quiere dejar un recado?',
      'Hello, good afternoon, is Ana there? No, she is not in; would you like to leave a message?',
      'Pagsagot ng telepono: Bueno (Mexico), Aló (maraming bansa), Diga (Spain). Para hanapin ang tao: ¿está Ana? Para mag-iwan ng mensahe: dejar un recado.',
      'People answer the phone differently: Bueno in Mexico, Aló in much of South America, Diga or Dígame in Spain. Ask for someone with ¿Está Ana?, ask who is calling with ¿De parte de quién?, and offer to take a message with ¿Quiere dejar un recado? Un momento, por favor means one moment.',
    ],
    [
      '¿está + name? / ¿de parte de quién?',
      '¿Está Ana? asks for someone. ¿De parte de quién? asks who is calling.',
      'Un recado = a message.',
      'Say mensaje for a text and recado for a spoken message left with another person.',
    ],
    [
      'How do people usually answer the phone in Mexico?',
      ['Bueno.', 'Diga.', 'Hola, adiós.'],
      'Bueno.',
      'In Mexico people answer with Bueno. In Spain it is Diga.',
      'You call a friend’s house in Mexico.',
    ],
    [
      ['Un momento, por favor.', 'One moment, please.'],
      ['Se cortó la llamada.', 'The call got cut off.'],
    ],
    [
      {
        heading: 'Por teléfono',
        table: grid(
          ['Expression', 'English', 'Where'],
          [
            ['Bueno', 'hello (answering)', 'Mexico'],
            ['Aló', 'hello (answering)', 'South America'],
            ['Diga / Dígame', 'hello (answering)', 'Spain'],
            ['¿Está Ana?', 'Is Ana there?', 'everywhere'],
            ['¿De parte de quién?', 'Who is calling?', 'everywhere'],
            ['Un momento', 'one moment', 'everywhere'],
            ['dejar un recado', 'to leave a message', 'Latin America'],
            ['Se cortó la llamada', 'the call dropped', 'everywhere'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-shopping-sizes',
      'A2',
      'Shopping: sizes, try on, discounts.',
      REAL,
      '¿Puedo probármelo? Busco una talla mediana y quisiera saber si hay descuento.',
      'Can I try it on? I am looking for a medium size and I would like to know if there is a discount.',
      'Sa pamimili: ¿puedo probármelo? (pwede ko bang isukat), la talla (size), el descuento (discount), la caja (cashier), el probador (fitting room).',
      'In a clothing store ask ¿puedo probármelo? (can I try it on?) and look for el probador (fitting room). Size for clothes is la talla and for shoes it is el número (Latin America) or la talla (Spain). Hay descuento? asks about a discount. Lo llevo means I will take it.',
    ],
    [
      '¿puedo + infinitive + pronoun?',
      'Attach pronouns to the infinitive: probármelo.',
      'Lo llevo = I will take it.',
      'Probarse needs the accent when you attach me + lo: probármelo.',
    ],
    [
      'You like it and want to buy it. What do you say?',
      ['Lo llevo.', 'Lo pruebo.', 'Lo dejo.'],
      'Lo llevo.',
      'Lo llevo means I will take it.',
      'You are at a store counter.',
    ],
    [
      ['¿Tiene esta camisa en una talla más grande?', 'Do you have this shirt in a bigger size?'],
      [
        'Está muy caro; ¿me hace un descuento?',
        'It is very expensive; can you give me a discount?',
      ],
    ],
    [
      {
        heading: 'De compras',
        table: vocab(
          [
            ['👕', 'la talla', 'size', 'sukat'],
            ['🚪', 'el probador', 'fitting room', 'fitting room'],
            ['🏷️', 'el descuento', 'discount', 'diskwento'],
            ['💳', 'la caja', 'cashier', 'kahera'],
            ['🛍️', 'la bolsa', 'bag', 'supot'],
            ['🔄', 'cambiar / devolver', 'exchange / return', 'palitan / isauli'],
            ['🧾', 'el recibo / el ticket', 'receipt', 'resibo'],
            ['👟', 'el número', 'shoe size (LatAm)', 'sukat ng sapatos'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'rl-dating-friends',
      'B1',
      'Likes, love and friendship.',
      LIFE,
      'Me caes bien, te extraño y quiero salir contigo; pero primero hablemos.',
      'I like you (as a person), I miss you and I want to go out with you; but first let us talk.',
      'Ang me caes bien ay “gusto kita bilang tao,” ang te extraño ay “na-miss kita,” at ang salir con alguien ay “makipag-date.” Ang te quiero ay mas banayad kaysa te amo.',
      'Caer bien / mal says you like or dislike someone as a person: me caes bien. Extrañar means to miss: te extraño. Salir con alguien means to date or go out with. Te quiero is love for friends, family and partners; te amo is stronger and romantic. Enamorarse de is to fall in love with.',
    ],
    [
      'me caes bien / te extraño / salir con',
      'Caer bien = you like someone as a person.',
      'Te quiero vs te amo.',
      'Extrañar is Latin America. In Spain people often say echar de menos: te echo de menos.',
    ],
    [
      'How do you say "I miss you" in Latin America?',
      ['Te extraño.', 'Te caigo.', 'Te salgo.'],
      'Te extraño.',
      'Extrañar is to miss in Latin America.',
      'You write to a friend who moved away.',
    ],
    [
      ['Mi novia me cae muy bien.', 'I really like my girlfriend as a person.'],
      ['Me enamoré de ella en España.', 'I fell in love with her in Spain.'],
    ],
    [
      {
        heading: 'Cariño y amistad',
        table: grid(
          ['Expression', 'English', 'Where'],
          [
            ['me caes bien', 'I like you (as a person)', 'everywhere'],
            ['te extraño', 'I miss you', 'Latin America'],
            ['te echo de menos', 'I miss you', 'Spain'],
            ['te quiero', 'I love you (soft)', 'everywhere'],
            ['te amo', 'I love you (strong)', 'everywhere'],
            ['salir con alguien', 'to date someone', 'everywhere'],
            ['enamorarse de', 'to fall in love with', 'everywhere'],
            ['el novio / la novia', 'boyfriend / girlfriend', 'everywhere'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-home-repairs',
      'B1',
      'Home repairs: leaks, bulbs and plugs.',
      LIFE,
      'Hay una gotera en el baño, el foco no prende y necesito un plomero.',
      'There is a leak in the bathroom, the light bulb will not turn on and I need a plumber.',
      'Ang gotera ay tumutulo, ang foco ay bumbilya (bombilla sa Spain), ang enchufe ay saksakan at ang plomero ay tubero. Ang prender ay buksan (Mexico).',
      'Home repair words: la gotera (leak), el foco / la bombilla (light bulb), el enchufe (plug or outlet), el interruptor (switch), la llave (faucet or key), la tubería (pipes) and el plomero / el fontanero (plumber). In Mexico prender is to switch on and apagar is to switch off.',
    ],
    [
      'no + verb (it does not work)',
      'No prende, no funciona, no sirve.',
      'El foco no prende.',
      'No funciona is safe everywhere. No sirve means it is useless or broken.',
    ],
    [
      'Which word means plumber in Mexico?',
      ['plomero', 'foco', 'enchufe'],
      'plomero',
      'Plomero is a plumber. In Spain it is fontanero.',
      'You call a repair person.',
    ],
    [
      ['La llave gotea desde ayer.', 'The faucet has been dripping since yesterday.'],
      ['El enchufe no funciona.', 'The outlet does not work.'],
    ],
    [
      {
        heading: 'Arreglos',
        table: grid(
          ['Word', 'English', 'Where'],
          [
            ['la gotera', 'leak', 'everywhere'],
            ['el foco / la bombilla', 'light bulb', 'Mexico / Spain'],
            ['el enchufe', 'plug / outlet', 'everywhere'],
            ['el interruptor', 'switch', 'everywhere'],
            ['la llave', 'faucet / key', 'everywhere'],
            ['la tubería', 'pipes', 'everywhere'],
            ['el plomero / el fontanero', 'plumber', 'Latin America / Spain'],
            ['prender / apagar', 'switch on / off', 'Mexico'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-ya-todavia',
      'A2',
      'Ya, todavía and aún.',
      REAL,
      '¿Ya comiste? Todavía no, pero ya no tengo hambre.',
      'Did you eat already? Not yet, but I am no longer hungry.',
      'Ang ya ay “na/nga,” ang todavía no ay “hindi pa,” at ang ya no ay “hindi na.” Ang aún ay katulad ng todavía pero mas pormal.',
      'Ya means already or now: ya terminé. Todavía no or aún no means not yet. Ya no means no longer: ya no vivo allí. Todavía can also mean still: todavía vivo aquí. Aún is a bit more formal than todavía.',
    ],
    [
      'ya / todavía no / ya no',
      'Ya = already. Todavía no = not yet. Ya no = no longer.',
      'Todavía vivo aquí = I still live here.',
      'Do not confuse ya no (no longer) with todavía no (not yet).',
    ],
    [
      'Which means "not yet"?',
      ['todavía no', 'ya no', 'ya sí'],
      'todavía no',
      'Todavía no means not yet. Ya no means no longer.',
      'A friend asks whether you finished.',
    ],
    [
      ['Ya llegué.', 'I have already arrived.'],
      ['Ya no trabajo allí.', 'I no longer work there.'],
    ],
    [
      {
        heading: 'Ya y todavía',
        table: grid(
          ['Phrase', 'English', 'Example'],
          [
            ['ya', 'already / now', 'Ya terminé.'],
            ['todavía no / aún no', 'not yet', 'Todavía no termino.'],
            ['ya no', 'no longer', 'Ya no vivo allí.'],
            ['todavía / aún', 'still', 'Todavía vivo aquí.'],
            ['ya mero (Mex)', 'almost there', 'Ya mero llego.'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-big-numbers-years',
      'A2',
      'Big numbers and years.',
      REAL,
      'Nací en mil novecientos noventa y cinco; mi casa cuesta cien mil pesos.',
      'I was born in 1995; my house costs one hundred thousand pesos.',
      'Sa Spanish, hindi sinasabi ang “nineteen ninety-five” kundi mil novecientos noventa y cinco. Ang cien ay eksaktong 100, pero ciento sa 101 pataas.',
      'Years are said as full numbers: 1995 is mil novecientos noventa y cinco and 2026 is dos mil veintiséis. 100 is cien alone but ciento before more: ciento uno. Hundreds agree with the noun: doscientas casas. Mil never takes an -s, but millón does: dos millones.',
    ],
    [
      'number + number',
      'Years are full numbers: mil novecientos…',
      'Cien, but ciento uno.',
      'Millón needs de before a noun: un millón de pesos, dos millones de dólares.',
    ],
    [
      'How do you say 101?',
      ['ciento uno', 'cien uno', 'cien y uno'],
      'ciento uno',
      'Cien changes to ciento before another number.',
      'You read a price aloud.',
    ],
    [
      ['Hay doscientas personas aquí.', 'There are two hundred people here.'],
      ['Un millón de gracias.', 'A million thanks.'],
    ],
    [
      {
        heading: 'Números grandes',
        table: grid(
          ['Number', 'Spanish', 'Note'],
          [
            ['100', 'cien', 'before a noun'],
            ['101', 'ciento uno', 'cien → ciento'],
            ['200', 'doscientos / doscientas', 'agrees with noun'],
            ['500', 'quinientos', 'irregular'],
            ['700', 'setecientos', 'irregular'],
            ['900', 'novecientos', 'irregular'],
            ['1.000', 'mil', 'never mils'],
            ['1.000.000', 'un millón', 'plural: millones'],
            ['2026', 'dos mil veintiséis', 'say it as a full number'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-pronunciation-rules',
      'A2',
      'Pronunciation guide: rr, ñ, ll, h, j, b/v.',
      REAL,
      'El perro de Juan llama a la niña, y la hermana habla despacio.',
      'Juan’s dog calls the girl, and the sister speaks slowly.',
      'Ang rr ay trilled, ang ñ ay “ny,” ang h ay tahimik, ang j ay malakas na h at ang b/v ay iisang tunog. Ang ll ay parang y sa karamihan ng lugar.',
      'Spanish spelling is regular. Rr is trilled (perro). Ñ sounds like ny (niña). H is silent (hermana). J and ge/gi sound like a strong h (Juan, gente). Ll sounds like y in most places (llama). B and v sound the same (vaca, baca). Qu is always k (queso) and the u is silent.',
    ],
    [
      'letter → sound',
      'One letter, one sound: Spanish is regular.',
      'Pero vs perro are different words.',
      'Single r is a quick tap (pero), double rr is a long roll (perro). Practice the difference.',
    ],
    [
      'Which letter is silent in "hermana"?',
      ['h', 'r', 'n'],
      'h',
      'The letter h is always silent in Spanish (except in loanwords).',
      'You practice reading aloud.',
    ],
    [
      ['Quiero queso y vino.', 'I want cheese and wine.'],
      ['La llave está en la mesa.', 'The key is on the table.'],
    ],
    [
      {
        heading: 'Sonidos',
        table: grid(
          ['Letters', 'Sound', 'Example'],
          [
            ['rr', 'strong trill', 'perro'],
            ['r (initial)', 'trill', 'rojo'],
            ['ñ', 'ny', 'niña'],
            ['ll', 'y', 'llave'],
            ['h', 'silent', 'hermana'],
            ['j / ge / gi', 'strong h', 'Juan, gente'],
            ['b / v', 'same sound', 'vaca, barco'],
            ['qu', 'k', 'queso'],
            ['gu + e/i', 'g (hard)', 'guitarra'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-se-accidental',
      'B1',
      'Se me olvidó: things that "happen to me".',
      TRICKS,
      'Se me olvidó la llave, se me cayó el celular y se me acabó la paciencia.',
      'I forgot the key, I dropped my phone and I ran out of patience.',
      'Ginagamit ito kapag aksidente: hindi “ako ang gumawa.” Se me olvidó = nakalimutan ko. Se me cayó = nahulog ko. Sumusunod ang pandiwa sa bagay, hindi sa tao.',
      'Spanish blames the thing, not you, for accidents: se me olvidó la llave (the key forgot itself on me). The pattern is se + me / te / le / nos / les + verb in 3rd person, matching the thing: se me olvidó la llave, se me olvidaron las llaves. Common verbs: olvidar, caer, perder, acabar, romper, ocurrir.',
    ],
    [
      'se + me/te/le + verb + thing',
      'The verb agrees with the thing, not the person.',
      'Se me olvidaron las llaves.',
      'It softens blame: se me rompió sounds gentler than rompí.',
    ],
    [
      'I forgot my keys.',
      ['Se me olvidaron las llaves.', 'Yo olvidé las llaves.', 'Se olvidó yo las llaves.'],
      'Se me olvidaron las llaves.',
      'Plural keys means plural verb: olvidaron.',
      'You explain why you are late.',
    ],
    [
      ['Se le cayó el vaso.', 'He/she dropped the glass.'],
      ['Se nos acabó el tiempo.', 'We ran out of time.'],
    ],
    [
      {
        heading: 'Cosas que pasan',
        table: grid(
          ['Pattern', 'English', 'Example'],
          [
            ['se me olvidó', 'I forgot', 'Se me olvidó la tarea.'],
            ['se me cayó', 'I dropped', 'Se me cayó el café.'],
            ['se me perdió', 'I lost', 'Se me perdió la cartera.'],
            ['se me acabó', 'I ran out of', 'Se me acabó el dinero.'],
            ['se me rompió', 'I broke', 'Se me rompió la pantalla.'],
            ['se nos descompuso', 'it broke down on us', 'Se nos descompuso el carro.'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-lo-adjective',
      'B1',
      'Lo + adjective: the good thing, the hard part.',
      TRICKS,
      'Lo bueno es que lo importante ya está hecho, y lo difícil terminó.',
      'The good thing is that the important part is done, and the hard part is over.',
      'Ang lo + adjective ay “ang bagay na…”: lo bueno (ang maganda), lo malo (ang masama), lo importante (ang mahalaga). Hindi ito nagbabago sa kasarian.',
      'Lo + adjective turns a quality into a thing: lo bueno (the good thing), lo malo (the bad part), lo importante (what matters), lo difícil (the hard part). Lo never changes for gender or number. It is common in explanations: Lo bueno es que… Lo malo es que… Lo que pasa es que…',
    ],
    [
      'lo + adjective + es que',
      'Lo + adjective: the thing/part that is …',
      'Lo bueno es que sí.',
      'Do not use el or la: "el bueno" would be the good one (a person). Lo bueno is the good thing.',
    ],
    [
      'How do you say "the bad part"?',
      ['lo malo', 'el malo', 'la mala'],
      'lo malo',
      'Lo + adjective means the thing that is bad.',
      'You explain a situation to a friend.',
    ],
    [
      ['Lo importante es descansar.', 'The important thing is to rest.'],
      ['Lo malo es que llueve.', 'The bad thing is that it is raining.'],
    ],
    [
      {
        heading: 'Lo + adjetivo',
        table: grid(
          ['Phrase', 'English', 'Example'],
          [
            ['lo bueno', 'the good thing', 'Lo bueno es que sí vino.'],
            ['lo malo', 'the bad thing', 'Lo malo es el precio.'],
            ['lo importante', 'the important part', 'Lo importante es salir.'],
            ['lo difícil', 'the hard part', 'Lo difícil es empezar.'],
            ['lo mejor', 'the best thing', 'Lo mejor es esperar.'],
            ['lo que pasa es que', 'the thing is that', 'Lo que pasa es que no puedo.'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-time-connectors',
      'B1',
      'Time connectors: antes de, mientras, hasta que.',
      TRICKS,
      'Antes de salir apago la luz, mientras cocino escucho música y espero hasta que llegues.',
      'Before leaving I turn off the light, while I cook I listen to music and I wait until you arrive.',
      'Ang antes de + infinitive ay “bago,” ang después de ay “pagkatapos,” ang mientras ay “habang,” at ang hasta que ay “hanggang.” Pagkatapos ng hasta que sa hinaharap, subjunctive.',
      'Before a verb use antes de / después de / al + infinitive: antes de salir, después de comer, al llegar. For two actions at once use mientras. For a future time use cuando / hasta que / en cuanto + subjunctive: espero hasta que llegues. For a habit or the past use the indicative: cuando llego, cuando llegué.',
    ],
    [
      'antes de / después de + infinitive',
      'Same subject: use the infinitive, not "que".',
      'Al llegar = upon arriving.',
      'Future time word + subjunctive: cuando llegues, hasta que termines, en cuanto puedas.',
    ],
    [
      'Esperaré hasta que ___.',
      ['llegues', 'llegas', 'llegaste'],
      'llegues',
      'After hasta que for a future action, use the subjunctive.',
      'You promise to wait for a friend.',
    ],
    [
      ['Después de comer, lavo los platos.', 'After eating, I wash the dishes.'],
      ['Al salir, cierra la puerta.', 'When leaving, close the door.'],
    ],
    [
      {
        heading: 'Conectores de tiempo',
        table: grid(
          ['Connector', 'English', 'Takes'],
          [
            ['antes de', 'before', 'infinitive'],
            ['después de', 'after', 'infinitive'],
            ['al + infinitive', 'upon …ing', 'infinitive'],
            ['mientras', 'while', 'indicative'],
            ['cuando (future)', 'when', 'subjunctive'],
            ['hasta que (future)', 'until', 'subjunctive'],
            ['en cuanto', 'as soon as', 'subjunctive (future)'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-aunque-sin-embargo',
      'B1',
      'Aunque, sin embargo, por lo tanto.',
      TRICKS,
      'Estaba cansado; sin embargo, fui, ya que lo prometí, aunque llovía.',
      'I was tired; nevertheless, I went, since I promised, although it was raining.',
      'Ang aunque ay “kahit na,” sin embargo ay “gayunpaman,” por lo tanto ay “kaya,” at ya que ay “dahil.” Mas pormal ang mga ito at nakakatulong sa pagsulat.',
      'Linking words make Spanish sound fluent. Aunque = although / even though (indicative for a fact, subjunctive for a possibility). Sin embargo = however. Por lo tanto = therefore. Ya que / puesto que = since. A pesar de = despite. En cambio = on the other hand. Place them at the start of the clause.',
    ],
    [
      'aunque / sin embargo / por lo tanto',
      'Aunque + fact = indicative; aunque + possibility = subjunctive.',
      'Aunque llueva, voy.',
      'Sin embargo is followed by a comma when it starts the sentence: Sin embargo, fui.',
    ],
    [
      'Which one means "therefore"?',
      ['por lo tanto', 'sin embargo', 'aunque'],
      'por lo tanto',
      'Por lo tanto means therefore.',
      'You write a short email.',
    ],
    [
      ['A pesar de la lluvia, salimos.', 'Despite the rain, we went out.'],
      ['Estudié mucho; por lo tanto, aprobé.', 'I studied a lot; therefore, I passed.'],
    ],
    [
      {
        heading: 'Conectores',
        table: grid(
          ['Connector', 'English', 'Example'],
          [
            ['aunque', 'although', 'Aunque llueve, salgo.'],
            ['sin embargo', 'however', 'Es caro; sin embargo, lo compro.'],
            ['por lo tanto', 'therefore', 'Estudié, por lo tanto aprobé.'],
            ['ya que / puesto que', 'since', 'Ya que estás aquí, ayúdame.'],
            ['a pesar de', 'despite', 'A pesar del frío, fui.'],
            ['en cambio', 'on the other hand', 'Él canta; yo, en cambio, bailo.'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'wd-reported-speech',
      'B1',
      'Reported speech: dijo que, preguntó si.',
      TRICKS,
      'María dijo que venía, me preguntó si tenía tiempo y añadió que traería comida.',
      'María said that she was coming, asked me whether I had time and added that she would bring food.',
      'Para ikuwento ang sinabi ng iba, gamitin ang dijo que + past form: sinabi niyang darating siya = dijo que venía. Ang tanong ay preguntó si.',
      'To report what someone said, use dijo que… (said that), preguntó si… (asked whether) and añadió que… (added that). When the speech was in the past, shift the tenses back: presente → imperfecto (vengo → venía), futuro → condicional (traeré → traería), pretérito → pluscuamperfecto. Yes/no questions use si; question words keep their accent.',
    ],
    [
      'dijo que + shifted tense',
      'Shift tenses back: present → imperfect, future → conditional.',
      'Preguntó si, no "preguntó que".',
      'In casual speech Spanish often keeps the present if the news is still true: Dijo que viene mañana.',
    ],
    [
      'She said: "Voy mañana." Report it.',
      ['Dijo que iba al día siguiente.', 'Dijo que voy mañana.', 'Dice que fui.'],
      'Dijo que iba al día siguiente.',
      'In reported speech mañana becomes al día siguiente and voy becomes iba.',
      'You pass on a message.',
    ],
    [
      ['Me preguntó dónde vivía.', 'He asked me where I lived.'],
      ['Dijo que no tenía hambre.', 'He said he was not hungry.'],
    ],
    [
      {
        heading: 'Contar lo que dijeron',
        table: grid(
          ['Direct speech', 'Reported', 'Tense shift'],
          [
            ['Vengo', 'dijo que venía', 'present → imperfect'],
            ['Comeré', 'dijo que comería', 'future → conditional'],
            ['Comí', 'dijo que había comido', 'preterite → pluperfect'],
            ['¿Tienes tiempo?', 'preguntó si tenía tiempo', 'si for yes/no'],
            ['¿Dónde vives?', 'preguntó dónde vivía', 'question word stays'],
            ['mañana', 'al día siguiente', 'time words shift'],
          ],
        ),
      },
    ],
  ),
];
