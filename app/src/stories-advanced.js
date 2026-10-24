// Advanced stories: original fiction (horror and drama) plus one traditional legend, all labeled in the intro.
const story = (
  id,
  title,
  englishTitle,
  focus,
  intro,
  lines,
  vocab,
  tip,
  proTip,
  taglish,
  questions,
) => ({
  id: 'story-' + id,
  kind: 'Stories',
  track: 'Advanced',
  title,
  englishTitle,
  focus,
  intro,
  lines,
  vocab,
  tip,
  proTip,
  taglish,
  questions,
});

export const advancedStories = [
  story(
    'house-olvido',
    'La casa de la calle Olvido',
    'The house on Olvido Street',
    'Original horror fiction · Past perfect and subjunctive',
    'An original horror story, pure fiction, with no real place or person. It is mildly eerie and not graphic.',
    [
      [
        'Cuando Irene alquiló la casa de la calle Olvido, el dueño le advirtió que no abriera la puerta del sótano.',
        'When Irene rented the house on Olvido Street, the owner warned her not to open the basement door.',
      ],
      [
        '—Está cerrada desde hace años —dijo—, y es mejor que siga así.',
        '“It has been closed for years,” he said, “and it is better that it stays that way.”',
      ],
      [
        'Irene se rió, porque no creía en historias de fantasmas.',
        'Irene laughed, because she did not believe in ghost stories.',
      ],
      [
        'Durante la primera semana, todo parecía normal.',
        'During the first week, everything seemed normal.',
      ],
      [
        'Pero cada noche, a las tres, oía tres golpes suaves bajo el suelo.',
        'But every night at three, she heard three soft knocks under the floor.',
      ],
      [
        'Una madrugada, los golpes sonaron más fuertes, como si alguien quisiera salir.',
        'One early morning, the knocks sounded louder, as if someone wanted to get out.',
      ],
      [
        'Irene bajó con una linterna, aunque tenía miedo.',
        'Irene went down with a flashlight, although she was afraid.',
      ],
      [
        'La puerta del sótano estaba abierta, aunque ella no la había tocado.',
        'The basement door was open, although she had not touched it.',
      ],
      [
        'En la pared del fondo había docenas de marcas, hechas con una uña.',
        'On the back wall there were dozens of marks, made with a fingernail.',
      ],
      [
        'Cada grupo de tres marcas tenía una fecha al lado.',
        'Each group of three marks had a date beside it.',
      ],
      ['La última fecha era la de aquella misma noche.', 'The last date was that very night’s.'],
      ['Detrás de ella, la puerta se cerró sola.', 'Behind her, the door closed by itself.'],
      [
        '—Por fin alguien me escucha —susurró una voz, muy cerca de su oído.',
        '“At last someone listens to me,” whispered a voice very close to her ear.',
      ],
      [
        'Al día siguiente, el dueño encontró la casa vacía y la puerta del sótano abierta de par en par.',
        'The next day, the owner found the house empty and the basement door wide open.',
      ],
      [
        'En la pared había una marca nueva… y la fecha de mañana.',
        'On the wall there was a new mark… and tomorrow’s date.',
      ],
    ],
    [
      ['el sótano', 'the basement'],
      ['advertir', 'to warn'],
      ['el golpe', 'the knock / blow'],
      ['la linterna', 'the flashlight'],
      ['de par en par', 'wide open'],
    ],
    'Advirtió que no abriera uses the imperfect subjunctive after a past warning; había tocado is the past perfect (before another past event).',
    'Como si + imperfect subjunctive (como si alguien quisiera salir) means “as if”, a pattern you can reuse for any hypothetical image.',
    'Le advirtió que no abriera = pinagbawalan siyang buksan (subjunctive dahil utos/payo sa nakaraan). No la había tocado = hindi pa niya ito nahahawakan (past perfect). Como si quisiera = parang gusto niyang…',
    [
      [
        'What did the owner warn Irene about?',
        ['The roof', 'The basement door', 'The neighbors'],
        1,
        'He warned her not to open the basement door.',
      ],
      [
        'What did the marks on the wall have beside them?',
        ['A name', 'A date', 'A drawing'],
        1,
        'Cada grupo de tres marcas tenía una fecha al lado.',
      ],
      [
        'How does the story end?',
        [
          'Irene moves away calmly',
          'The house is empty and a new date is marked',
          'The owner sells the house',
        ],
        1,
        'The owner found the house empty and a new mark with tomorrow’s date.',
      ],
    ],
  ),
  story(
    'llorona',
    'La Llorona',
    'The Weeping Woman',
    'Mexican folk legend · Reported speech and mood',
    'A shortened, non-graphic retelling of a widely known Mexican legend, also told in many other Latin American countries. It is folklore, with many versions that differ by region and family; this is one learner-friendly telling, and not everyone knows every version.',
    [
      [
        'Dicen que, en las noches de luna, se oye un llanto cerca del río.',
        'They say that on moonlit nights a cry can be heard near the river.',
      ],
      [
        'Es la voz de una mujer vestida de blanco que camina despacio.',
        'It is the voice of a woman dressed in white who walks slowly.',
      ],
      [
        'Según la leyenda, ella perdió a sus hijos hace mucho tiempo.',
        'According to the legend, she lost her children long ago.',
      ],
      [
        'Desde entonces, los busca y grita: “¡Ay, mis hijos!”.',
        'Since then, she looks for them and cries: “Oh, my children!”',
      ],
      [
        'Los abuelos advierten a los niños que no salgan solos de noche.',
        'Grandparents warn children not to go out alone at night.',
      ],
      [
        'En algunos pueblos, la gente cree que ella vigila los ríos y los caminos.',
        'In some towns, people believe she watches over the rivers and roads.',
      ],
      [
        'Otros dicen que solo es un cuento para que los niños regresen a casa temprano.',
        'Others say it is only a tale so children come home early.',
      ],
      [
        'Hay versiones en las que ella es una mujer ofendida; en otras, una madre llena de tristeza.',
        'There are versions in which she is a wronged woman; in others, a mother full of sorrow.',
      ],
      [
        'Aunque las versiones cambian, casi todas hablan del dolor y de la pérdida.',
        'Although the versions change, almost all speak of pain and loss.',
      ],
      [
        'Muchos escritores, cantantes y directores han contado la historia a su manera.',
        'Many writers, singers and directors have told the story in their own way.',
      ],
      [
        'La canción “La Llorona” también tiene muchas letras diferentes.',
        'The song “La Llorona” also has many different lyrics.',
      ],
      [
        'Hoy, en el Día de Muertos, algunas familias la recuerdan como parte de la tradición.',
        'Today, on Día de Muertos, some families remember her as part of tradition.',
      ],
      [
        'Si alguna vez oyes un llanto cerca del agua, quizá sea solo el viento.',
        'If you ever hear a cry near the water, perhaps it is only the wind.',
      ],
      [
        'Y si no… es mejor volver a casa antes de la medianoche.',
        'And if not… it is better to go home before midnight.',
      ],
    ],
    [
      ['el llanto', 'the crying / wail'],
      ['advertir', 'to warn'],
      ['vigilar', 'to watch over'],
      ['la pérdida', 'the loss'],
      ['quizá sea', 'perhaps it is (subjunctive)'],
    ],
    'Dicen que, según la leyenda and algunos creen que introduce what people say without claiming it is fact.',
    'Quizá + subjunctive (quizá sea) shows possibility; with indicative it can sound more certain. Both are heard in Mexico.',
    'Dicen que = sabi nila. Según la leyenda = ayon sa alamat. Quizá sea = baka lang, posible. Ang “La Llorona” ay folklore na maraming bersyon, kaya hindi ito iisang tiyak na kwento.',
    [
      [
        'Where do people say the cry is heard?',
        ['In the city', 'Near the river', 'In a church'],
        1,
        'Se oye un llanto cerca del río.',
      ],
      [
        'What do some people say the story is for?',
        ['To make children come home early', 'To teach history', 'To sell books'],
        0,
        'It is a tale so children return home early.',
      ],
      [
        'Why does the story have many versions?',
        [
          'It was written by one author',
          'It is folklore told in different regions',
          'It was banned',
        ],
        1,
        'Las versiones cambian de región en región.',
      ],
    ],
  ),
  story(
    'wall-mirror',
    'El espejo del pasillo',
    'The hallway mirror',
    'Original horror fiction · Imperfect subjunctive and doubt',
    'An original horror story, pure fiction, mildly eerie and not graphic. No real person or place is involved.',
    [
      [
        'En el pasillo del hotel había un espejo antiguo con un marco dorado.',
        'In the hotel hallway there was an old mirror with a gold frame.',
      ],
      ['Nadie sabía quién lo había puesto allí.', 'Nobody knew who had put it there.'],
      [
        'Álvaro, el recepcionista nocturno, evitaba mirarlo.',
        'Álvaro, the night receptionist, avoided looking at it.',
      ],
      [
        '—Me da la impresión de que el espejo me observa —le dijo a su compañera.',
        '“I get the impression the mirror is watching me,” he told his coworker.',
      ],
      [
        '—No digas tonterías —respondió ella—. Es solo vidrio.',
        '“Don’t talk nonsense,” she replied. “It’s only glass.”',
      ],
      [
        'Una noche, Álvaro pasó por el pasillo y notó algo extraño.',
        'One night, Álvaro walked through the hallway and noticed something strange.',
      ],
      [
        'En el reflejo, él caminaba un segundo más tarde que en la realidad.',
        'In the reflection, he walked a second later than in reality.',
      ],
      [
        'Se detuvo, pero el reflejo siguió caminando.',
        'He stopped, but the reflection kept walking.',
      ],
      [
        'El otro Álvaro llegó al borde del marco y sonrió.',
        'The other Álvaro reached the edge of the frame and smiled.',
      ],
      [
        '—Hace años que te espero —dijo, aunque su boca no se movía.',
        '“I’ve been waiting for you for years,” it said, though its mouth did not move.',
      ],
      [
        'Álvaro retrocedió, pero tropezó y cayó al suelo.',
        'Álvaro stepped back, but tripped and fell to the floor.',
      ],
      [
        'Cuando abrió los ojos, estaba en la recepción, sentado en su silla.',
        'When he opened his eyes, he was at the front desk, sitting in his chair.',
      ],
      [
        'Su compañera dormía y todo parecía normal.',
        'His coworker was asleep and everything seemed normal.',
      ],
      [
        'Por la mañana, un huésped preguntó: —¿Por qué hay dos recepcionistas iguales?',
        'In the morning, a guest asked: “Why are there two identical receptionists?”',
      ],
      [
        'Álvaro miró hacia el pasillo. En el espejo, otro Álvaro le saludaba con la mano.',
        'Álvaro looked toward the hallway. In the mirror, another Álvaro waved at him.',
      ],
    ],
    [
      ['el espejo', 'the mirror'],
      ['el reflejo', 'the reflection'],
      ['tropezar', 'to trip'],
      ['el huésped', 'the hotel guest'],
      ['retroceder', 'to step back'],
    ],
    'Me da la impresión de que takes the indicative when stating an impression: me observa.',
    'Hace años que te espero uses present tense with hace + time: “I’ve been waiting for years.”',
    'Había puesto = naglagay (past perfect, mas nauna). Hace años que te espero = matagal na akong naghihintay sa iyo. Me da la impresión de que = parang…',
    [
      [
        'What does Álvaro notice about the reflection?',
        ['It is blurry', 'It moves a second late', 'It is smaller'],
        1,
        'The reflection walked a second later.',
      ],
      [
        'Who is asleep when Álvaro wakes up?',
        ['His coworker', 'A guest', 'The manager'],
        0,
        'Su compañera dormía.',
      ],
      [
        'What does the guest ask in the morning?',
        [
          'Why there are two identical receptionists',
          'Where the mirror is from',
          'If the hotel is haunted',
        ],
        0,
        'The guest asks about two identical receptionists.',
      ],
    ],
  ),
  story(
    'archive',
    'El archivo del abuelo',
    'Grandfather’s archive',
    'Original drama · Conditional, perfect tenses and reflection',
    'An original dramatic story about family memory. Characters and events are invented.',
    [
      [
        'Tras la muerte de su abuelo, Camila heredó una caja llena de cartas.',
        'After her grandfather’s death, Camila inherited a box full of letters.',
      ],
      [
        'Al principio pensó que serían facturas o papeles sin importancia.',
        'At first she thought they would be bills or unimportant papers.',
      ],
      [
        'Pero cuando abrió la primera carta, reconoció la letra de su abuelo.',
        'But when she opened the first letter, she recognized her grandfather’s handwriting.',
      ],
      [
        'Eran cartas dirigidas a una mujer llamada Elvira.',
        'They were letters addressed to a woman named Elvira.',
      ],
      ['—¿Quién habrá sido? —se preguntó Camila.', '“Who could she have been?” Camila wondered.'],
      [
        'Las cartas hablaban de un amor joven que no pudo continuar.',
        'The letters spoke of a young love that could not continue.',
      ],
      [
        'Su abuelo había escrito: “Si hubiera sido más valiente, me habría quedado contigo”.',
        'Her grandfather had written: “If I had been braver, I would have stayed with you.”',
      ],
      [
        'Camila sintió una mezcla de sorpresa y ternura.',
        'Camila felt a mix of surprise and tenderness.',
      ],
      [
        'Nunca había imaginado que su abuelo guardara un secreto así.',
        'She had never imagined her grandfather kept a secret like that.',
      ],
      [
        'Buscó el nombre de Elvira en internet y encontró a una anciana en otro pueblo.',
        'She searched Elvira’s name online and found an elderly woman in another town.',
      ],
      [
        'Le escribió una carta explicando quién era.',
        'She wrote her a letter explaining who she was.',
      ],
      [
        'Semanas después, llegó una respuesta con una foto vieja.',
        'Weeks later, a reply arrived with an old photo.',
      ],
      [
        'En la foto, su abuelo, muy joven, sonreía junto a una chica con trenzas.',
        'In the photo, her grandfather, very young, smiled beside a girl with braids.',
      ],
      [
        '—Él también guardó mis cartas —escribió Elvira—. Nunca dejamos de recordarnos.',
        '“He kept my letters too,” Elvira wrote. “We never stopped remembering each other.”',
      ],
      [
        'Camila comprendió que a veces el silencio también es una forma de querer.',
        'Camila understood that sometimes silence is also a way of loving.',
      ],
    ],
    [
      ['heredar', 'to inherit'],
      ['la factura', 'the bill / invoice'],
      ['la ternura', 'tenderness'],
      ['la anciana', 'the elderly woman'],
      ['la trenza', 'the braid'],
    ],
    'Si hubiera sido… me habría quedado… is the past counterfactual: regret about something that did not happen.',
    '¿Quién habrá sido? uses the future perfect to guess about the past: “Who might it have been?”',
    'Si hubiera sido… me habría quedado = kung naging… sana nanatili ako (pagsisisi sa nakaraan). ¿Quién habrá sido? = sino kaya siya noon? Había escrito = naisulat na niya.',
    [
      [
        'What did Camila inherit?',
        ['A house', 'A box of letters', 'A photo album'],
        1,
        'Heredó una caja llena de cartas.',
      ],
      [
        'Who were the letters addressed to?',
        ['Elvira', 'Camila', 'A friend named Raúl'],
        0,
        'Eran cartas dirigidas a una mujer llamada Elvira.',
      ],
      [
        'What did Camila understand at the end?',
        ['Silence can be a way of loving', 'Letters are old-fashioned', 'Family secrets are bad'],
        0,
        'A veces el silencio también es una forma de querer.',
      ],
    ],
  ),
  story(
    'ethical-choice',
    'La decisión de Marta',
    'Marta’s decision',
    'Original workplace drama · Formal register and hedging',
    'An original story about a difficult choice at work. Marta and the company are fictional. Notice the formal and hedged language she uses.',
    [
      [
        'Marta llevaba cinco años trabajando como supervisora en una empresa de servicios.',
        'Marta had been working for five years as a supervisor at a service company.',
      ],
      [
        'Un viernes por la tarde, descubrió un error en las facturas de varios clientes.',
        'One Friday afternoon, she discovered an error in several customers’ bills.',
      ],
      [
        'El sistema había cobrado dos veces el mismo servicio a más de doscientas personas.',
        'The system had charged the same service twice to more than two hundred people.',
      ],
      [
        'Si lo reportaba, tendría que trabajar todo el fin de semana.',
        'If she reported it, she would have to work all weekend.',
      ],
      [
        'Su jefe dijo en un mensaje: “Quizá sea mejor esperar al lunes”.',
        'Her boss said in a message: “Perhaps it’s better to wait until Monday.”',
      ],
      [
        'Marta dudó, porque sabía que algunas familias necesitaban ese dinero.',
        'Marta hesitated, because she knew some families needed that money.',
      ],
      [
        'Escribió un correo formal: “Estimado señor Pérez: me permito informarle de una incidencia urgente.”',
        'She wrote a formal email: “Dear Mr. Pérez: I would like to inform you of an urgent incident.”',
      ],
      [
        '“A mi juicio, convendría corregirlo cuanto antes y avisar a los afectados.”',
        '“In my judgment, it would be advisable to fix it as soon as possible and notify those affected.”',
      ],
      [
        'Su jefe respondió con un tono seco: “Lo hablaremos el lunes”.',
        'Her boss replied in a curt tone: “We’ll talk about it on Monday.”',
      ],
      [
        'Marta decidió copiar al departamento legal en el correo.',
        'Marta decided to copy the legal department on the email.',
      ],
      [
        'El sábado por la mañana, la empresa detuvo los cobros y empezó los reembolsos.',
        'On Saturday morning, the company stopped the charges and began refunds.',
      ],
      ['El lunes, su jefe la llamó a su oficina.', 'On Monday, her boss called her to his office.'],
      [
        '—No me gustó que me presionaras —admitió—, pero hiciste lo correcto.',
        '“I didn’t like that you pressured me,” he admitted, “but you did the right thing.”',
      ],
      [
        '—Gracias. Solo hice lo que creí justo —respondió Marta.',
        '“Thank you. I only did what I thought was fair,” Marta answered.',
      ],
      [
        'Aquel día entendió que la valentía a veces se escribe en un correo educado.',
        'That day she understood that courage is sometimes written in a polite email.',
      ],
    ],
    [
      ['la incidencia', 'the incident / issue'],
      ['el reembolso', 'the refund'],
      ['cobrar', 'to charge'],
      ['convendría', 'it would be advisable'],
      ['a mi juicio', 'in my judgment'],
    ],
    'Formal hedging: me permito informarle, a mi juicio, convendría. It keeps a hard message respectful.',
    'Estimado señor + surname is a standard formal opening in Spain and Latin America.',
    'Me permito informarle = ipinaaalam ko po sa inyo (formal). Convendría = mas mabuti kung… Si lo reportaba, tendría que… = kung iuulat niya, kailangan niya… (conditional).',
    [
      [
        'What error does Marta discover?',
        ['Missing invoices', 'Double charges to customers', 'A wrong address list'],
        1,
        'The system charged the same service twice.',
      ],
      [
        'What does Marta do after her boss suggests waiting?',
        [
          'She waits until Monday',
          'She sends a formal email and copies the legal department',
          'She quits',
        ],
        1,
        'She wrote a formal email and copied legal.',
      ],
      [
        'How does her boss react on Monday?',
        ['He fires her', 'He admits she did the right thing', 'He ignores her'],
        1,
        'Hiciste lo correcto.',
      ],
    ],
  ),
  story(
    'last-train',
    'El último tren',
    'The last train',
    'Original suspense fiction · Narrative tenses and atmosphere',
    'An original suspense story, pure fiction, without real people or places. It is tense but not graphic.',
    [
      [
        'Eran las once y media cuando Julio llegó a la estación vacía.',
        'It was eleven thirty when Julio arrived at the empty station.',
      ],
      [
        'El último tren salía a las doce, y él tenía que volver a casa.',
        'The last train left at twelve, and he had to get home.',
      ],
      [
        'El reloj de la pared estaba parado desde hacía años.',
        'The clock on the wall had been stopped for years.',
      ],
      [
        'Julio se sentó en un banco y esperó mientras el viento movía los carteles.',
        'Julio sat on a bench and waited while the wind moved the posters.',
      ],
      [
        'Poco después, apareció una anciana con una maleta de cuero.',
        'Soon after, an elderly woman with a leather suitcase appeared.',
      ],
      [
        '—¿También espera el tren de medianoche? —le preguntó ella.',
        '“Are you also waiting for the midnight train?” she asked.',
      ],
      ['—Sí. ¿Va usted lejos? —respondió Julio.', '“Yes. Are you going far?” Julio replied.'],
      [
        '—Voy a un lugar donde ya no hay trenes —dijo ella con una sonrisa extraña.',
        '“I’m going to a place where there are no more trains,” she said with a strange smile.',
      ],
      [
        'Julio sintió un escalofrío y miró hacia las vías.',
        'Julio felt a chill and looked toward the tracks.',
      ],
      [
        'A lo lejos, una luz amarilla se acercaba despacio, sin hacer ruido.',
        'In the distance, a yellow light was approaching slowly, without making a sound.',
      ],
      [
        'El tren se detuvo y las puertas se abrieron solas.',
        'The train stopped and the doors opened by themselves.',
      ],
      [
        'Dentro había asientos de madera y ningún pasajero.',
        'Inside there were wooden seats and no passengers.',
      ],
      [
        'La anciana subió primero y le hizo un gesto con la mano.',
        'The woman boarded first and gestured to him with her hand.',
      ],
      [
        '—Venga, todavía hay un asiento libre —dijo.',
        '“Come on, there’s still a free seat,” she said.',
      ],
      [
        'Julio dudó un segundo, dio un paso atrás y negó con la cabeza.',
        'Julio hesitated a second, stepped back and shook his head.',
      ],
      [
        'Las puertas se cerraron y el tren desapareció en la noche, sin ruido y sin luz.',
        'The doors closed and the train vanished into the night, without noise or light.',
      ],
      [
        'Entonces, el reloj de la pared dio las doce, por primera vez en años.',
        'Then the clock on the wall struck twelve, for the first time in years.',
      ],
    ],
    [
      ['la estación', 'the station'],
      ['el escalofrío', 'the chill / shiver'],
      ['las vías', 'the tracks'],
      ['negar con la cabeza', 'to shake one’s head “no”'],
      ['parado', 'stopped'],
    ],
    'Atmosphere is built with the imperfect (se acercaba, esperaba); sudden events use the preterite (se detuvo, se abrieron).',
    'Estar parado means “stopped / not working” for a clock in most of Latin America; in Spain people may say “estar parado” too, but also “no funciona”.',
    'Eran las once y media = alas-onse y media na noon (imperfect para sa oras sa kwento). Hacía años = ilang taon na. Se acercaba = papalapit noon. Se detuvo = huminto (isang pangyayari).',
    [
      [
        'At what time does the last train leave?',
        ['At eleven', 'At midnight', 'At one'],
        1,
        'El último tren salía a las doce.',
      ],
      [
        'What is unusual about the train?',
        ['It is full', 'It makes no noise and has no passengers', 'It is very slow'],
        1,
        'The train arrives without noise and with no passengers.',
      ],
      [
        'What does Julio do when offered a seat?',
        ['He boards', 'He steps back and says no', 'He calls for help'],
        1,
        'Dio un paso atrás y negó con la cabeza.',
      ],
    ],
  ),
  story(
    'unsigned-letter',
    'La carta sin remitente',
    'The letter with no sender',
    'Original mystery · Subjunctive in doubt and speculation',
    'An original mystery story, pure fiction, with no real people involved. Notice how the narrator speculates and doubts.',
    [
      [
        'Una mañana de otoño, Sofía encontró en el buzón un sobre sin remitente.',
        'One autumn morning, Sofía found an envelope with no return address in her mailbox.',
      ],
      [
        'El sobre tenía su nombre escrito con una letra elegante.',
        'The envelope had her name written in elegant handwriting.',
      ],
      [
        'Dentro había una sola línea: “Dudo que recuerdes lo que hiciste en 2010”.',
        'Inside there was a single line: “I doubt you remember what you did in 2010.”',
      ],
      [
        'Sofía intentó recordar, pero no encontró nada importante.',
        'Sofía tried to remember, but found nothing important.',
      ],
      [
        '—Es posible que sea una broma —pensó—, aunque no creo que alguien se tome tanto trabajo.',
        '“It’s possible it’s a joke,” she thought, “although I don’t think anyone would go to this much trouble.”',
      ],
      [
        'Esa tarde llamó a su hermano para preguntarle si sabía algo.',
        'That afternoon she called her brother to ask if he knew anything.',
      ],
      [
        '—No, pero tal vez sea alguien del instituto —sugirió él.',
        '“No, but maybe it’s someone from school,” he suggested.',
      ],
      [
        'Sofía revisó fotos antiguas hasta que encontró una de aquel verano.',
        'Sofía went through old photos until she found one from that summer.',
      ],
      [
        'En la foto aparecía un chico con un cuaderno azul que ella no reconocía.',
        'In the photo appeared a boy with a blue notebook that she did not recognize.',
      ],
      [
        'Detrás de la foto había una dirección escrita a lápiz.',
        'On the back of the photo there was an address written in pencil.',
      ],
      [
        'Aunque le daba miedo, decidió ir a la dirección al día siguiente.',
        'Although she was afraid, she decided to go to the address the next day.',
      ],
      [
        'Era una librería pequeña, con un cartel que decía “Cuadernos azules”.',
        'It was a small bookshop with a sign that read “Blue Notebooks.”',
      ],
      [
        'Un hombre mayor la miró y sonrió: —Te estaba esperando.',
        'An older man looked at her and smiled: “I was expecting you.”',
      ],
      [
        '—Hace quince años me dejaste un cuaderno aquí. Quería devolvértelo.',
        '“Fifteen years ago you left a notebook here. I wanted to return it to you.”',
      ],
      [
        'Sofía abrió el cuaderno y reconoció sus propios dibujos de adolescente.',
        'Sofía opened the notebook and recognized her own teenage drawings.',
      ],
      [
        'Entonces comprendió que a veces el pasado no se olvida: solo espera su momento.',
        'Then she understood that sometimes the past is not forgotten: it merely waits its turn.',
      ],
    ],
    [
      ['el remitente', 'the sender / return address'],
      ['el buzón', 'the mailbox'],
      ['tal vez sea', 'maybe it is'],
      ['la librería', 'the bookshop'],
      ['devolver', 'to return (an object)'],
    ],
    'Dudo que + subjunctive and es posible que + subjunctive express doubt or possibility.',
    'Librería means bookshop; a library is biblioteca. This false friend confuses many English speakers.',
    'Dudo que recuerdes = duda ako na naaalala mo (subjunctive dahil duda). Es posible que sea = posibleng biro lang. Librería ≠ library; biblioteca ang library.',
    [
      [
        'What does the letter say?',
        [
          '“I doubt you remember what you did in 2010”',
          '“Come to the bookshop”',
          '“I forgive you”',
        ],
        0,
        'The single line begins with Dudo que recuerdes.',
      ],
      [
        'What clue does Sofía find on the back of the photo?',
        ['A phone number', 'A pencil-written address', 'A name'],
        1,
        'Detrás de la foto había una dirección escrita a lápiz.',
      ],
      [
        'What did the bookshop owner want to return?',
        ['A letter', 'A notebook', 'A photo'],
        1,
        'He wanted to return her old notebook.',
      ],
    ],
  ),
  story(
    'reform-city',
    'La ciudad que aprendió a escuchar',
    'The city that learned to listen',
    'Original civic drama · Passive voice and formal reporting',
    'An original story set in an invented city. It reads like a short news feature, so you can notice passive voice and formal reporting verbs. No real city or official is mentioned.',
    [
      [
        'Hace tres años, en la ciudad ficticia de Valdeluz, los vecinos se quejaban del ruido nocturno.',
        'Three years ago, in the fictional city of Valdeluz, residents complained about night noise.',
      ],
      [
        'Las quejas eran presentadas por escrito, pero casi nunca se respondían.',
        'Complaints were submitted in writing, but they were almost never answered.',
      ],
      [
        'Según informó el diario local, más de mil cartas fueron archivadas sin lectura.',
        'According to the local newspaper, more than a thousand letters were filed without being read.',
      ],
      [
        'Cuando una nueva alcaldesa asumió el cargo, anunció que se crearía una oficina de escucha.',
        'When a new mayor took office, she announced that a listening office would be created.',
      ],
      [
        'La oficina fue inaugurada en una antigua biblioteca de barrio.',
        'The office was opened in an old neighborhood library.',
      ],
      [
        'Los vecinos eran recibidos por voluntarios que anotaban sus problemas.',
        'Residents were received by volunteers who noted down their problems.',
      ],
      [
        'Cada caso era asignado a un responsable, que debía contestar en diez días.',
        'Each case was assigned to someone responsible, who had to reply within ten days.',
      ],
      [
        'Al principio, muchos dudaban de que el sistema funcionara.',
        'At first, many doubted the system would work.',
      ],
      [
        'Sin embargo, en seis meses se resolvió el ochenta por ciento de las quejas.',
        'However, within six months eighty percent of complaints were resolved.',
      ],
      [
        'Se instalaron nuevos aislamientos acústicos en tres bares de la zona.',
        'New sound insulation was installed in three bars in the area.',
      ],
      [
        'Se organizaron reuniones mensuales donde los vecinos y los dueños se escuchaban.',
        'Monthly meetings were organized where residents and owners listened to each other.',
      ],
      [
        'Los expertos señalaron que la clave no fue el dinero, sino la confianza.',
        'Experts pointed out that the key was not money but trust.',
      ],
      [
        '—Antes se nos ignoraba —declaró una vecina—. Ahora se nos responde.',
        '“Before, we were ignored,” a resident said. “Now we get answers.”',
      ],
      [
        'Hoy, otras ciudades han pedido que se les explique el modelo de Valdeluz.',
        'Today, other cities have asked that the Valdeluz model be explained to them.',
      ],
    ],
    [
      ['la queja', 'the complaint'],
      ['la alcaldesa', 'the (female) mayor'],
      ['asumir el cargo', 'to take office'],
      ['el aislamiento acústico', 'sound insulation'],
      ['la confianza', 'trust'],
    ],
    'Passive voice with ser (fue inaugurada) and passive se (se resolvió, se instalaron) are common in news writing.',
    'Valdeluz is invented. When reading real news, check dates and sources; this story only copies the style.',
    'Fue inaugurada = pinasinayaan (passive). Se resolvió = nalutas (passive se). Según informó = ayon sa ulat. Ito ay istilo ng balita, hindi totoong ulat.',
    [
      [
        'What happened to many complaints before the reform?',
        [
          'They were solved quickly',
          'They were filed without being read',
          'They were sent to the mayor',
        ],
        1,
        'Más de mil cartas fueron archivadas sin lectura.',
      ],
      [
        'Where was the listening office opened?',
        ['In an old neighborhood library', 'In a bar', 'In the town hall'],
        0,
        'La oficina fue inaugurada en una antigua biblioteca de barrio.',
      ],
      [
        'According to experts, what was the key to success?',
        ['Money', 'Trust', 'New buildings'],
        1,
        'La clave no fue el dinero, sino la confianza.',
      ],
    ],
  ),
];
