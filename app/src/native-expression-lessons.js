import { L } from './home-world-lessons.js';

// Native expressions: Mexican, Latin American and Spanish slang, sayings, idioms and chat shorthand.
// Slang moves fast and varies by country, city and age. Each lesson says where an expression is used.
const EVERYDAY = 'Native expressions: everyday';
const SLANG = 'Native expressions: slang and sayings';

const table = (rows, head = ['Expression', 'Means', 'Where']) => ({
  head,
  langs: head.map((h, i) => (i === 0 || h === 'Example' ? 'es' : h === 'Means' ? 'en' : undefined)),
  speakCol: 0,
  rows,
});

const CAREFUL = {
  heading: 'Careful',
  points: [
    'Slang changes by country, city and age. Listen first, then copy what the people around you say.',
    'With bosses, customers and older people, use the polite forms from the earlier lessons.',
  ],
};

export const nativeExpressionLessons = [
  L(
    [
      'ex-mexico-everyday',
      'A2',
      'Everyday Mexican: ¿qué onda? ¡órale!',
      EVERYDAY,
      '¿Qué onda? Ándale, vámonos, que ya es tarde.',
      'What is up? Come on, let us go, it is already late.',
      'Ang ¿qué onda? ay “kumusta?” Ang órale at ándale ay “sige na!” o “tara na!” depende sa tono. Karaniwan ito sa Mexico.',
      '¿Qué onda? is a casual hello in Mexico, like what is up. Órale and ándale are flexible: they can mean okay, come on, wow or hurry up, depending on your tone. Híjole shows surprise or worry. Mande? is a polite what? when you did not hear.',
    ],
    [
      'short exclamation + tone',
      'One word, many meanings: listen to the tone.',
      '¿Mande? = pardon?',
      'Mande is polite in Mexico. In other countries people say ¿cómo? or ¿perdón? instead.',
    ],
    [
      'Which Mexican word politely means "pardon?" when you did not hear?',
      ['¿Mande?', '¿Órale?', '¿Qué onda?'],
      '¿Mande?',
      'Mande is the polite Mexican "pardon?". Qué onda is a casual greeting.',
      'You chat with a Mexican coworker.',
    ],
    [
      ['Híjole, se me olvidó la cartera.', 'Oh no, I forgot my wallet.'],
      ['Órale, qué buena idea.', 'Wow, what a good idea.'],
    ],
    [
      {
        heading: 'Mexicano de todos los días',
        table: table(
          [
            ['¿Qué onda?', 'What is up?', 'Mexico', '¿Qué onda, cómo estás?'],
            ['órale', 'okay / wow / come on', 'Mexico', 'Órale, vamos.'],
            ['ándale', 'come on / that is right', 'Mexico', 'Ándale, apúrate.'],
            ['híjole', 'oh no / wow', 'Mexico', 'Híjole, qué caro.'],
            ['¿mande?', 'pardon?', 'Mexico', '¿Mande? No te oí.'],
            ['no manches', 'no way', 'Mexico', 'No manches, ¿en serio?'],
            ['qué padre', 'how cool', 'Mexico', 'Qué padre tu casa.'],
            ['ni modo', 'oh well', 'Mexico', 'Ni modo, será otro día.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
      CAREFUL,
    ],
  ),
  L(
    [
      'ex-mexico-slang',
      'B1',
      'More Mexican: chamba, chido, neta, lana.',
      SLANG,
      'La neta, está bien chido mi nueva chamba, pero necesito más lana.',
      'Honestly, my new job is really cool, but I need more money.',
      'Ang chamba ay trabaho, ang lana ay pera, ang chido ay astig, ang neta ay “totoo.” Sa Mexico, ang chamba ay madalas ginagamit na pambabae (la chamba).',
      'In Mexico chamba is a job, lana is money, chido means cool and la neta means the honest truth. Cuate is a buddy, chavo is a guy or kid and chava is a girl. Echarle ganas means to give it your best. Ponerse las pilas means to get going.',
    ],
    [
      'slang noun / adjective',
      'Chamba is feminine: la chamba.',
      'Echarle ganas.',
      'Mexican slang uses diminutives and swear-light words often. Copy only after you hear them from the group.',
    ],
    [
      'In Mexico, what is "lana"?',
      ['money', 'wool', 'work'],
      'money',
      'In Mexican slang lana means money. Chamba means job.',
      'A friend says they need more lana.',
    ],
    [
      ['Voy a la chamba temprano.', 'I am going to work early.'],
      ['Mi cuate me prestó lana.', 'My buddy lent me money.'],
    ],
    [
      {
        heading: 'Más mexicano',
        table: table(
          [
            ['la chamba', 'job / work', 'Mexico', 'Tengo mucha chamba.'],
            ['la lana', 'money', 'Mexico', 'No tengo lana.'],
            ['chido / padre', 'cool', 'Mexico', 'Está muy chido.'],
            ['la neta', 'the honest truth', 'Mexico', 'La neta, no sé.'],
            ['el cuate', 'buddy', 'Mexico', 'Es mi cuate.'],
            ['el chavo / la chava', 'guy / girl', 'Mexico', 'Ese chavo es mi vecino.'],
            ['echarle ganas', 'to give it your best', 'Mexico', 'Échale ganas.'],
            ['ponerse las pilas', 'to get going', 'Mexico', 'Ponte las pilas.'],
            ['ya mero', 'almost / very soon', 'Mexico', 'Ya mero llego.'],
            ['no hay bronca', 'no problem', 'Mexico', 'No hay bronca, yo pago.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
      CAREFUL,
    ],
  ),
  L(
    [
      'ex-spain-everyday',
      'B1',
      'Spanish from Spain: vale, tío, guay, mola.',
      SLANG,
      'Vale, tío, qué guay; me mola mucho este sitio.',
      'Okay, dude, how cool; I really like this place.',
      'Ang vale ay “okay” sa Spain, ang tío/tía ay “pare/mare,” ang guay ay astig at ang me mola ay “gusto ko ito.” Karaniwan ito sa Spain.',
      'In Spain vale means okay, tío / tía is a casual dude, guay and mola mean cool, and currar means to work. Spaniards also use vosotros for you all, which Latin America does not. En plan is a filler, like "kind of" or "like". Qué fuerte means that is intense or wow.',
    ],
    [
      'vale + comment',
      'Vale is the Spanish okay; Latin America says está bien or bueno.',
      'Vale, de acuerdo.',
      'Tío / tía is slang for friend in Spain only. In Mexico tío only means uncle.',
    ],
    [
      'In Spain, what does "vale" mean?',
      ['okay', 'worth', 'goodbye'],
      'okay',
      'In Spain vale is the everyday okay.',
      'A friend in Madrid confirms plans.',
    ],
    [
      ['Estoy hecho polvo; he currado todo el día.', 'I am exhausted; I worked all day.'],
      ['Me da igual, lo que tú quieras.', 'I do not mind, whatever you want.'],
    ],
    [
      {
        heading: 'Español de España',
        table: table(
          [
            ['vale', 'okay', 'Spain', 'Vale, nos vemos.'],
            ['tío / tía', 'dude / mate', 'Spain', 'Tío, qué dices.'],
            ['guay / mola', 'cool / I like it', 'Spain', 'Mola mucho.'],
            ['currar', 'to work', 'Spain', 'Hoy curro hasta las ocho.'],
            ['flipar', 'to be amazed', 'Spain', 'Flipo con esto.'],
            ['qué fuerte', 'wow, that is intense', 'Spain', 'Qué fuerte, no me lo creo.'],
            ['estar hecho polvo', 'to be worn out', 'Spain', 'Estoy hecho polvo.'],
            ['mogollón', 'a lot', 'Spain', 'Hay mogollón de gente.'],
            ['majo / maja', 'nice (person)', 'Spain', 'Tu vecina es muy maja.'],
            ['vosotros', 'you all (informal)', 'Spain', 'Vosotros sois geniales.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
      CAREFUL,
    ],
  ),
  L(
    [
      'ex-argentina-che',
      'B1',
      'Rioplatense: che, vos, laburo, re.',
      SLANG,
      'Che, vos sabés que mañana tengo laburo, así que estoy re cansado.',
      'Hey, you know that tomorrow I have work, so I am really tired.',
      'Sa Argentina, ang vos ay ginagamit sa halip ng tú (vos sabés). Ang che ay “hoy/pare,” ang laburo ay trabaho at ang re ay “napaka-”: re cansado.',
      'In Argentina and Uruguay people say vos instead of tú, with its own verb forms: vos sabés, vos tenés, vos querés. Che gets someone’s attention. Laburo is work, pibe / piba is a kid or young person, and re- adds very: re lindo. Bondi is a city bus and mate is the shared herbal drink.',
    ],
    [
      'vos + -ás / -és / -ís',
      'Voseo: vos sabés, vos tenés, vos vivís.',
      'Re lindo, re cansado.',
      'Voseo is also used in Central America, Paraguay and parts of Colombia. Everyone still understands tú.',
    ],
    [
      'In Argentina, how do you say "you know" to a friend?',
      ['vos sabés', 'tú sabes', 'usted sabe'],
      'vos sabés',
      'Rioplatense Spanish uses vos sabés for a friend.',
      'You chat with a friend from Buenos Aires.',
    ],
    [
      ['Dale, nos vemos a las ocho.', 'Okay, we will see each other at eight.'],
      ['Ese pibe es re copado.', 'That kid is really cool.'],
    ],
    [
      {
        heading: 'Argentina y Uruguay',
        table: table(
          [
            ['che', 'hey / dude', 'Argentina, Uruguay', 'Che, mirá esto.'],
            ['vos', 'you (informal)', 'Argentina, Uruguay', 'Vos sos mi amigo.'],
            ['el laburo', 'job', 'Argentina', 'Tengo mucho laburo.'],
            ['la guita', 'money', 'Argentina', 'No tengo guita.'],
            ['el pibe / la piba', 'kid / young person', 'Argentina', 'La piba es simpática.'],
            ['el bondi', 'city bus', 'Argentina', 'Tomo el bondi.'],
            ['copado', 'cool', 'Argentina', 'Qué copado.'],
            ['re + adjective', 'very', 'Argentina', 'Es re lindo.'],
            ['dale', 'okay / go ahead', 'Argentina, many places', 'Dale, vamos.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
      CAREFUL,
    ],
  ),
  L(
    [
      'ex-colombia-caribbean',
      'B1',
      'Colombia and the Caribbean: parce, chévere, bacano.',
      SLANG,
      '¿Qué más, parce? Todo chévere, esa película estuvo bacana.',
      'What is up, buddy? All good, that movie was great.',
      'Sa Colombia, ang parce ay “pare,” at ang bacano ay astig. Ang chévere ay naiintindihan sa maraming bansa. Ang ¿qué más? ay “kumusta?”',
      'In Colombia parce / parcero is a buddy, bacano means great and ¿qué más? is a casual how are you. Chévere is understood across Latin America. In Caribbean Spanish (Puerto Rico, Cuba, the Dominican Republic) guagua is a bus, and speakers often drop the final s. In Colombia people also say a la orden to offer help.',
    ],
    [
      '¿qué más? + friend word',
      '¿Qué más? asks how things are going.',
      'Chévere, bacano.',
      'Chévere, bacano and chido all mean cool, but each belongs to a different region.',
    ],
    [
      'Which one is a casual Colombian "buddy"?',
      ['parce', 'cuate', 'tío'],
      'parce',
      'Parce is Colombian. Cuate is Mexican and tío is Spanish.',
      'You meet a friend from Medellín.',
    ],
    [
      ['Mi parcero vive en Cali.', 'My buddy lives in Cali.'],
      ['La guagua llega en cinco minutos.', 'The bus arrives in five minutes.'],
    ],
    [
      {
        heading: 'Colombia y el Caribe',
        table: table(
          [
            ['parce / parcero', 'buddy', 'Colombia', 'Parce, ¿qué hubo?'],
            ['bacano', 'great', 'Colombia', 'Está bacano.'],
            ['chévere', 'cool', 'Latin America', 'Qué chévere.'],
            ['¿qué más?', 'how are you?', 'Colombia', '¿Qué más, cómo vas?'],
            ['de una', 'right away / sure', 'Colombia', 'De una, vamos.'],
            ['la guagua', 'bus', 'Caribbean', 'Tomo la guagua.'],
            ['mono / mona', 'blond person', 'Colombia', 'La mona es mi prima.'],
            ['a la orden', 'at your service', 'Colombia', 'A la orden, señor.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
      CAREFUL,
    ],
  ),
  L(
    [
      'ex-chile-peru-venezuela',
      'B1',
      'Chile, Peru and Venezuela: cachai, pata, pana.',
      SLANG,
      '¿Cachai, po? Mi pololo es bacán, pero su pana trabaja en otro país.',
      'You get it, right? My boyfriend is great, but his buddy works in another country.',
      'Sa Chile, ang ¿cachai? ay “naiintindihan mo?” at ang pololo/polola ay boyfriend/girlfriend. Ang pana ay kaibigan sa Venezuela at ang pata ay kaibigan sa Peru.',
      'Chile: ¿cachai? (you get it?), po (a filler), al tiro (right away), bacán (cool), fome (boring), pololo / polola (boyfriend / girlfriend). Peru: pata (buddy), causa (close buddy), chamba (job). Venezuela and Ecuador: pana (friend), chamo / chama (kid), chévere (cool).',
    ],
    [
      'country slang for friend',
      'Friend = pana (VE, EC), pata (PE), parce (CO), cuate (MX).',
      'Al tiro = right away (Chile).',
      'Do not mix them up: pata means buddy in Peru but a paw in Spain.',
    ],
    [
      'In Chile, how do you say "you get it?"',
      ['¿Cachai?', '¿Pana?', '¿Mande?'],
      '¿Cachai?',
      'Cachai is the Chilean you get it.',
      'You talk with a friend from Santiago.',
    ],
    [
      ['Voy al tiro, espérame.', 'I am coming right away, wait for me.'],
      ['Mi pata me ayudó con la chamba.', 'My buddy helped me with the job.'],
    ],
    [
      {
        heading: 'Chile, Perú, Venezuela',
        table: table(
          [
            ['¿cachai?', 'you get it?', 'Chile', '¿Cachai lo que digo?'],
            ['al tiro', 'right away', 'Chile', 'Voy al tiro.'],
            ['bacán', 'cool', 'Chile, Peru', 'Qué bacán.'],
            ['fome', 'boring', 'Chile', 'La película fue fome.'],
            ['el pololo / la polola', 'boyfriend / girlfriend', 'Chile', 'Mi pololo cocina.'],
            ['pata / causa', 'buddy', 'Peru', 'Mi pata vive aquí.'],
            ['pana', 'friend', 'Venezuela, Ecuador', 'Es mi pana.'],
            ['chamo / chama', 'kid / young person', 'Venezuela', 'Ese chamo es amable.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
      CAREFUL,
    ],
  ),
  L(
    [
      'ex-reactions',
      'A2',
      'Reactions natives say all day.',
      EVERYDAY,
      '¡Ay, qué pena! ¡Uy, qué bárbaro! ¡Dios mío, no lo puedo creer!',
      'Oh, what a shame! Wow, how crazy! My goodness, I cannot believe it!',
      'Ang ¡qué pena! ay “nakakahiya/nakakaawa.” Ang ¡qué bárbaro! ay “grabe!” Ang ¡Dios mío! ay “Diyos ko!” Ginagamit ito para sa reaksyon sa kuwento ng iba.',
      'Reactions keep a conversation alive. ¡Qué pena! shows sympathy or embarrassment, ¡qué lástima! shows regret, ¡qué bárbaro! shows surprise at something extreme, ¡ojalá! means I hope so and ¡qué suerte! means how lucky. ¡Ay! and ¡uy! are small sounds for pain, worry or surprise.',
    ],
    [
      '¡qué + noun!',
      '¡Qué + noun! reacts to anything: ¡qué suerte!',
      '¡Qué lástima! ¡Ojalá!',
      'Qué + noun in an exclamation has an accent and no verb: ¡Qué día! ¡Qué calor!',
    ],
    [
      'A friend says they lost their job. What do you say?',
      ['¡Qué pena!', '¡Qué suerte!', '¡Qué rico!'],
      '¡Qué pena!',
      'Qué pena shows sympathy. Qué suerte means how lucky.',
      'A coworker shares bad news.',
    ],
    [
      ['¡Qué rico huele!', 'It smells so good!'],
      ['¡Ojalá llegue a tiempo!', 'I hope he arrives on time!'],
    ],
    [
      {
        heading: 'Reacciones',
        table: table(
          [
            ['¡qué pena!', 'what a shame', 'everywhere', '¡Qué pena lo de tu abuela!'],
            ['¡qué lástima!', 'what a pity', 'everywhere', '¡Qué lástima que no vengas!'],
            ['¡qué bárbaro!', 'wow, crazy', 'Latin America', '¡Qué bárbaro, cuánta gente!'],
            ['¡qué suerte!', 'how lucky', 'everywhere', '¡Qué suerte tienes!'],
            ['¡ojalá!', 'I hope so', 'everywhere', '¡Ojalá que sí!'],
            ['¡Dios mío!', 'my goodness', 'everywhere', '¡Dios mío, qué susto!'],
            ['¡qué rico!', 'how delicious / nice', 'Latin America', '¡Qué rico olor!'],
            ['¡qué flojera!', 'I cannot be bothered', 'Mexico', '¡Qué flojera levantarme!'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-yes-no-ways',
      'A2',
      'Many ways to say yes, no and maybe.',
      EVERYDAY,
      'Claro que sí, cómo no; pero para nada, qué va, eso no es cierto.',
      'Of course, sure; but not at all, no way, that is not true.',
      'Maraming paraan ng pag-oo: claro, cómo no, por supuesto. Maraming paraan ng pag-hindi: para nada, qué va, ni hablar. Ang a lo mejor ay “siguro.”',
      'Yes: claro, claro que sí, por supuesto, cómo no (sure, go ahead), sí, cómo no. No: para nada (not at all), qué va (no way), ni hablar (no way), claro que no. Maybe: a lo mejor, quizás, tal vez. Note that cómo no is a friendly yes, not a no.',
    ],
    [
      'claro / cómo no / para nada',
      'Cómo no means yes, sure; para nada means not at all.',
      'A lo mejor + indicative.',
      'A lo mejor uses the indicative (a lo mejor viene). Quizás and tal vez often use the subjunctive.',
    ],
    [
      'Which one means "not at all"?',
      ['para nada', 'cómo no', 'claro que sí'],
      'para nada',
      'Para nada means not at all. Cómo no means sure.',
      'A friend asks if you are angry.',
    ],
    [
      ['¿Puedo sentarme aquí? Cómo no, adelante.', 'Can I sit here? Sure, go ahead.'],
      ['A lo mejor llueve mañana.', 'Maybe it will rain tomorrow.'],
    ],
    [
      {
        heading: 'Sí, no, quizás',
        table: table(
          [
            ['claro que sí', 'of course', 'everywhere', 'Claro que sí.'],
            ['cómo no', 'sure, go ahead', 'Latin America', '¿Me ayuda? Cómo no.'],
            ['por supuesto', 'of course', 'everywhere', 'Por supuesto.'],
            ['para nada', 'not at all', 'everywhere', 'No me molesta para nada.'],
            ['qué va', 'no way', 'Spain, Caribbean', 'Qué va, no es verdad.'],
            ['ni hablar', 'no way', 'everywhere', 'Ni hablar, no voy.'],
            ['a lo mejor', 'maybe', 'everywhere', 'A lo mejor voy.'],
            ['tal vez / quizás', 'perhaps', 'everywhere', 'Quizás venga.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-refranes',
      'B1',
      'Proverbs natives quote: refranes.',
      SLANG,
      'Más vale tarde que nunca, y el que madruga, Dios lo ayuda.',
      'Better late than never, and the early bird gets the worm.',
      'Ang refrán ay salawikain. Gamitin ito para sa maikling payo: más vale tarde que nunca. Ang natural na paraan ay sabihin muna ang sitwasyon, saka ang refrán.',
      'Spanish speakers love refranes, short sayings with advice. Natives usually drop one in as a comment: Llegaste tarde, pero más vale tarde que nunca. Many have an English cousin, but not always word for word. Learn the whole saying, because it rarely makes sense if you change it.',
    ],
    [
      'situation + refrán',
      'Say the situation first, then the refrán as a comment.',
      'Más vale tarde que nunca.',
      'Refranes are fixed. Do not change the words, even the tense, or they sound strange.',
    ],
    [
      'Which refrán means "better late than never"?',
      [
        'Más vale tarde que nunca.',
        'En boca cerrada no entran moscas.',
        'Camarón que se duerme se lo lleva la corriente.',
      ],
      'Más vale tarde que nunca.',
      'It is the standard saying for something that arrives late.',
      'A friend apologizes for arriving late.',
    ],
    [
      ['No hay mal que por bien no venga.', 'Every cloud has a silver lining.'],
      ['Del dicho al hecho hay mucho trecho.', 'Easier said than done.'],
    ],
    [
      {
        heading: 'Refranes comunes',
        table: table(
          [
            [
              'Más vale tarde que nunca.',
              'Better late than never.',
              'everywhere',
              'Llegué tarde, pero más vale tarde que nunca.',
            ],
            [
              'El que madruga, Dios lo ayuda.',
              'The early bird gets the worm.',
              'everywhere',
              'Levántate temprano.',
            ],
            [
              'No hay mal que por bien no venga.',
              'Every cloud has a silver lining.',
              'everywhere',
              'Perdí el trabajo, pero encontré uno mejor.',
            ],
            [
              'Del dicho al hecho hay mucho trecho.',
              'Easier said than done.',
              'everywhere',
              'Todos prometen, pero del dicho al hecho...',
            ],
            [
              'En boca cerrada no entran moscas.',
              'Silence is golden.',
              'everywhere',
              'Mejor no digas nada.',
            ],
            [
              'Camarón que se duerme se lo lleva la corriente.',
              'Snooze and you lose.',
              'Mexico, Latin America',
              'Aprovecha ahora.',
            ],
            [
              'Dime con quién andas y te diré quién eres.',
              'You are known by the company you keep.',
              'everywhere',
              'Cuida tus amistades.',
            ],
            [
              'A caballo regalado no se le mira el diente.',
              'Do not look a gift horse in the mouth.',
              'everywhere',
              'Acepta el regalo y listo.',
            ],
          ],
          ['Refrán', 'Means', 'Where', 'When'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-food-animal-idioms',
      'B1',
      'Idioms with food and animals.',
      SLANG,
      'Ese examen fue pan comido, aunque aquí hay gato encerrado y a mí no me importa un pepino.',
      'That exam was a piece of cake, although something fishy is going on here and I do not care at all.',
      'Ang pan comido ay napakadali, ang importar un pepino ay “wala akong pakialam,” at ang hay gato encerrado ay “may kakaiba dito.”',
      'Spanish idioms often use food and animals. Ser pan comido is to be very easy. Importar un pepino is to not care at all. Hay gato encerrado means something fishy is going on. Dar gato por liebre means to sell you something worse than promised. Estar como una cabra is to be a little crazy (Spain). Pagar el pato is to take the blame for others (Spain).',
    ],
    [
      'fixed idiom',
      'Do not translate word by word.',
      'Pan comido = easy.',
      'The English idiom often uses different images: piece of cake is pan comido (eaten bread).',
    ],
    [
      'What does "ser pan comido" mean?',
      ['to be very easy', 'to be hungry', 'to be expensive'],
      'to be very easy',
      'Pan comido is like piece of cake.',
      'You tell a friend about a simple task.',
    ],
    [
      ['Me importa un pepino lo que digan.', 'I do not care at all what they say.'],
      ['Le dieron gato por liebre con ese carro.', 'They sold him a lemon with that car.'],
    ],
    [
      {
        heading: 'Comida y animales',
        table: table(
          [
            ['ser pan comido', 'to be a piece of cake', 'everywhere', 'El examen fue pan comido.'],
            ['importar un pepino', 'to not care at all', 'everywhere', 'Me importa un pepino.'],
            ['hay gato encerrado', 'something is fishy', 'everywhere', 'Aquí hay gato encerrado.'],
            ['dar gato por liebre', 'to cheat someone', 'everywhere', 'Me dieron gato por liebre.'],
            ['estar como una cabra', 'to be crazy', 'Spain', 'Estás como una cabra.'],
            ['pagar el pato', 'to take the blame', 'Spain', 'Siempre pago el pato.'],
            [
              'ser la media naranja',
              'to be your other half',
              'everywhere',
              'Eres mi media naranja.',
            ],
            [
              'estar como agua para chocolate',
              'to be furious',
              'Mexico',
              'Mi jefe está como agua para chocolate.',
            ],
          ],
          ['Idiom', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-work-money-slang',
      'B1',
      'Job and money words by country.',
      SLANG,
      'Mañana tengo chamba, curro o laburo, pero no hay lana, pasta ni guita.',
      'Tomorrow I have work, but there is no money.',
      'Trabajo: chamba (Mexico, Peru), curro (Spain), laburo (Argentina). Pera: lana (Mexico), pasta (Spain), guita (Argentina), plata (Colombia, Chile, Argentina).',
      'The same idea has many names. Work: la chamba (Mexico, Peru), el curro (Spain), el laburo (Argentina), el trabajo (everywhere). Money: la lana (Mexico), la pasta (Spain), la guita (Argentina), la plata (Colombia, Argentina, Chile), el dinero (everywhere). Change in Mexico is la feria.',
    ],
    [
      'same idea, different word',
      'Know the standard word, then learn the local one.',
      'Plata, lana, guita, pasta.',
      'In Latin America plata can also mean silver. Use context to know which one you hear.',
    ],
    [
      'Which word means "money" in Mexican slang?',
      ['lana', 'pasta', 'guita'],
      'lana',
      'Lana is Mexican. Pasta is Spanish and guita is Argentine.',
      'You talk with friends from three countries.',
    ],
    [
      ['¿Tienes feria para el camión?', 'Do you have change for the bus?'],
      ['No tengo plata hoy.', 'I have no money today.'],
    ],
    [
      {
        heading: 'Trabajo y dinero',
        table: table(
          [
            ['la chamba', 'work', 'Mexico, Peru', 'Voy a la chamba.'],
            ['el curro', 'work', 'Spain', 'Hoy no hay curro.'],
            ['el laburo', 'work', 'Argentina', 'Tengo laburo.'],
            ['la lana', 'money', 'Mexico', 'Necesito lana.'],
            ['la pasta', 'money', 'Spain', 'No tengo pasta.'],
            ['la guita', 'money', 'Argentina', 'Me falta guita.'],
            ['la plata', 'money', 'Colombia, Chile, Argentina', 'No tengo plata.'],
            ['la feria', 'small change', 'Mexico', '¿Tienes feria?'],
          ],
          ['Word', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-cool-by-country',
      'B1',
      'Saying "cool" in every country.',
      SLANG,
      'Qué chido en México, qué guay en España, qué copado en Argentina y qué bacán en Chile.',
      'How cool in Mexico, how cool in Spain, how cool in Argentina and how cool in Chile.',
      'Ang “astig” sa Spanish ay iba-iba: chido o padre sa Mexico, guay sa Spain, copado sa Argentina, bacán sa Chile, bacano sa Colombia.',
      'The word for cool changes by country. Mexico: chido, padre, padrísimo. Spain: guay, mola. Argentina: copado, bárbaro. Chile: bacán. Colombia: bacano, chévere. Venezuela and the Caribbean: chévere. Everyone understands genial, increíble and buenísimo.',
    ],
    [
      'qué + cool word',
      'Genial and increíble work everywhere.',
      'Qué chévere, qué guay.',
      'When unsure which local word to use, say genial or qué bueno. They are safe everywhere.',
    ],
    [
      'Which cool word is safe everywhere?',
      ['genial', 'chido', 'guay'],
      'genial',
      'Genial is understood everywhere. Chido is Mexican and guay is Spanish.',
      'You meet people from many countries.',
    ],
    [
      ['Tu casa está padrísima.', 'Your house is super cool.'],
      ['Esa canción es genial.', 'That song is great.'],
    ],
    [
      {
        heading: 'Cool por país',
        table: table(
          [
            ['chido / padre', 'cool', 'Mexico', 'Qué padre.'],
            ['guay / mola', 'cool', 'Spain', 'Qué guay.'],
            ['copado', 'cool', 'Argentina', 'Qué copado.'],
            ['bacán', 'cool', 'Chile, Peru', 'Qué bacán.'],
            ['bacano / chévere', 'cool', 'Colombia, Caribbean', 'Qué chévere.'],
            ['genial', 'great', 'everywhere', 'Qué genial.'],
            ['increíble', 'amazing', 'everywhere', 'Es increíble.'],
            ['buenísimo', 'excellent', 'everywhere', 'Está buenísimo.'],
          ],
          ['Word', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-text-chat',
      'B1',
      'Text-message Spanish: jaja, xq, tqm.',
      SLANG,
      'Jaja, tqm, ntp, llego en un rato, xfa no te enojes.',
      'Haha, love you lots, no worries, I will arrive in a while, please do not get mad.',
      'Sa chat, ang jaja ay tawa, ang tqm ay “te quiero mucho,” ang xq ay “porque/por qué,” ang ntp ay “no te preocupes,” at ang xfa ay “por favor.”',
      'Spanish speakers shorten words in text messages. Jaja / jeje is laughing (not haha). Tqm = te quiero mucho. Xq = porque or por qué. Xfa = por favor. Ntp = no te preocupes. Tmb = también. K = que. Q = que. These are for friends and family, not for work emails.',
    ],
    [
      'short form in chat',
      'Use only with friends, not at work.',
      'Jaja, tqm.',
      'Spanish laughs with j, so jaja is haha. A word like hahaha is not typical.',
    ],
    [
      'What does "tqm" mean?',
      ['te quiero mucho', 'te quedo mal', 'tengo que mirar'],
      'te quiero mucho',
      'Tqm is the common short form for te quiero mucho.',
      'A friend sends you a message.',
    ],
    [
      ['Xq no vienes? Es k te espero.', 'Why are you not coming? I am waiting for you.'],
      ['Tmb voy, ntp.', 'I am going too, no worries.'],
    ],
    [
      {
        heading: 'Chat en español',
        table: table(
          [
            ['jaja / jeje', 'haha', 'everywhere', 'Jaja, qué gracioso.'],
            ['tqm', 'love you lots', 'everywhere', 'Tqm, mamá.'],
            ['xq / pq', 'why / because', 'everywhere', 'Xq no vienes?'],
            ['xfa / porfa', 'please', 'everywhere', 'Porfa, ayúdame.'],
            ['ntp', 'no worries', 'everywhere', 'Ntp, yo me encargo.'],
            ['tmb', 'also', 'everywhere', 'Yo tmb voy.'],
            ['q / k', 'that / what', 'everywhere', 'Q bueno.'],
            ['bn', 'well / good', 'everywhere', 'Todo bn.'],
          ],
          ['Short form', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
  L(
    [
      'ex-courtesy-latam',
      'A2',
      'Polite phrases you hear in Latin America.',
      EVERYDAY,
      'Con permiso, buen provecho, pásele, para servirle; que le vaya bien.',
      'Excuse me, enjoy your meal, come in, at your service; have a good day.',
      'Magagalang na salita: con permiso (makikiraan), buen provecho (kain na), pásele (tuloy po), para servirle (sa inyong serbisyo), que le vaya bien (ingat).',
      'Courtesy is part of everyday speech. Con permiso is said when passing someone or entering. Buen provecho is said to people who are eating, even strangers. Pásele means come in (Mexico). Con gusto means gladly and para servirle means at your service. Que le vaya bien is a warm goodbye.',
    ],
    [
      'polite formula',
      'Use usted-style phrases with strangers and elders.',
      'Con permiso, buen provecho.',
      'In a restaurant people may say buen provecho when they pass your table. Reply gracias.',
    ],
    [
      'You pass in front of someone in a narrow hall. What do you say?',
      ['Con permiso.', 'Buen provecho.', 'Pásele.'],
      'Con permiso.',
      'Con permiso asks to pass or enter politely.',
      'You walk through a crowded room.',
    ],
    [
      ['Que le vaya bien, muchas gracias.', 'Have a good one, thank you very much.'],
      ['Con mucho gusto, estoy para servirle.', 'With pleasure, I am at your service.'],
    ],
    [
      {
        heading: 'Cortesía',
        table: table(
          [
            ['con permiso', 'excuse me (passing)', 'Latin America', 'Con permiso, señora.'],
            ['buen provecho', 'enjoy your meal', 'everywhere', 'Buen provecho a todos.'],
            ['pásele', 'come in / go ahead', 'Mexico', 'Pásele, está abierto.'],
            ['para servirle', 'at your service', 'Latin America', 'Para servirle.'],
            ['con gusto', 'gladly', 'Latin America', 'Con gusto lo hago.'],
            ['que le vaya bien', 'have a good one', 'Latin America', 'Que le vaya bien.'],
            ['salud', 'bless you / cheers', 'everywhere', '¡Salud!'],
            ['a sus órdenes', 'at your service', 'Mexico', 'A sus órdenes.'],
          ],
          ['Expression', 'Means', 'Where', 'Example'],
        ),
      },
    ],
  ),
];
