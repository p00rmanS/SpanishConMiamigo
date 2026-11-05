import { L } from './home-world-lessons.js';
import { vocab } from './little-learner-lessons.js';
import { grid } from './school-basics-1.js';

// More kid basics: safety, play shopping, opposites, feelings in stories, road safety, future jobs, rhymes.
export const PLAY1 = 'Little learners: play, safety and feelings';
export const PLAY2 = 'Elementary: roads, jobs and rhymes';

export const kidsMoreLessons = [
  L(
    [
      'sb-safety-rules',
      'A1',
      'Safety and rules at home and school.',
      PLAY1,
      'No corras en la escuela y no hables con personas que no conoces.',
      'Do not run in school and do not talk to people you do not know.',
      'Ang no corras ay huwag tumakbo. Gamitin ang no + command na tú para sa bawal. Ang cuidado ay ingat at ang peligro ay panganib.',
      'Negative tú commands use no + the -es / -as form: no corras, no toques, no hables. Rules: ¡Cuidado! ¡Espera! ¡Para! ¡Alto! ¡Ayuda! At school: levanta la mano, haz fila, escucha.',
    ],
    [
      'no + corras / toques / hables',
      'Negative commands switch the ending: -ar → -es.',
      'No toques el fuego.',
      'Positive and negative commands differ: ven aquí / no vengas, haz fila / no hagas ruido.',
    ],
    [
      'What does "¡Cuidado!" mean?',
      ['Be careful!', 'Hello!', 'Good night!'],
      'Be careful!',
      'Cuidado is careful, watch out.',
      'A parent warns you near a hot stove.',
    ],
    [
      ['No toques la estufa, está caliente.', 'Do not touch the stove, it is hot.'],
      ['Si necesitas ayuda, llama a un adulto.', 'If you need help, call an adult.'],
    ],
    [
      {
        heading: 'Reglas y seguridad',
        table: vocab([
          ['⚠️', '¡Cuidado!', 'Careful!', 'Ingat!'],
          ['✋', '¡Alto! / ¡Para!', 'Stop!', 'Tigil!'],
          ['🏃', 'No corras.', 'Do not run.', 'Huwag tumakbo.'],
          ['🔥', 'No toques el fuego.', 'Do not touch fire.', 'Huwag hawakan ang apoy.'],
          [
            '🔌',
            'No toques los enchufes.',
            'Do not touch the outlets.',
            'Huwag hawakan ang saksakan.',
          ],
          ['🧑‍🤝‍🧑', 'Haz fila.', 'Line up.', 'Pumila.'],
          ['🙋', 'Levanta la mano.', 'Raise your hand.', 'Itaas ang kamay.'],
          ['📣', '¡Ayuda!', 'Help!', 'Tulong!'],
          ['📞', 'Llama a un adulto.', 'Call an adult.', 'Tumawag sa matanda.'],
          ['🚫', 'Prohibido', 'Forbidden', 'Bawal'],
        ]),
      },
    ],
  ),
  L(
    [
      'sb-play-shopping',
      'A1',
      'Playing store: buying and selling.',
      PLAY1,
      'Yo soy el vendedor: una manzana cuesta dos pesos y tú pagas con una moneda.',
      'I am the seller: an apple costs two pesos and you pay with a coin.',
      'Ang vendedor ay nagtitinda at ang cliente ay bumibili. Ang cuesta ay nagkakahalaga at ang pagar ay magbayad. Ang cambio ay sukli.',
      'Role play for store: vendedor/vendedora and cliente. Phrases: ¿Cuánto cuesta? Cuesta dos pesos. ¿Me da una manzana? Aquí tiene. Aquí está su cambio. Gracias. De nada.',
    ],
    [
      '¿cuánto cuesta? cuesta + price',
      'Cuesta for one thing, cuestan for many.',
      'Las uvas cuestan cinco pesos.',
      'Peso is the money in Mexico and several other countries; dólar, euro and sol are used elsewhere. The word dinero is money in general.',
    ],
    [
      'What does the cashier give you back?',
      ['el cambio', 'el precio', 'la bolsa'],
      'el cambio',
      'Cambio is change, the money returned.',
      'You play store with a friend.',
    ],
    [
      ['¿Cuánto cuesta el pan?', 'How much is the bread?'],
      ['Aquí tiene su cambio.', 'Here is your change.'],
    ],
    [
      {
        heading: 'Jugar a la tienda',
        table: vocab([
          ['🧑‍🍳', 'el vendedor / la vendedora', 'seller', 'tindero / tindera'],
          ['🛍️', 'el cliente / la clienta', 'customer', 'mamimili'],
          ['💵', 'el dinero', 'money', 'pera'],
          ['🪙', 'la moneda', 'coin', 'barya'],
          ['💳', 'pagar', 'to pay', 'magbayad'],
          ['🏷️', 'el precio', 'price', 'presyo'],
          ['💰', 'el cambio', 'change', 'sukli'],
          ['🧾', 'el recibo', 'receipt', 'resibo'],
          ['🤝', 'Aquí tiene.', 'Here you are.', 'Heto po.'],
          ['😀', 'De nada.', "You're welcome.", 'Walang anuman.'],
        ]),
      },
    ],
  ),
  L(
    [
      'sb-opposites-kids',
      'A1',
      'Opposites kids learn first.',
      PLAY1,
      'El elefante es grande y el ratón es pequeño; el día es claro y la noche es oscura.',
      'The elephant is big and the mouse is small; the day is light and the night is dark.',
      'Ang opuestos ay kabaligtaran. Grande ay malaki, pequeño ay maliit. Ang adjective ay sumasang-ayon sa kasarian: alto/alta, bajo/baja.',
      'Opposites come in pairs: grande/pequeño, alto/bajo, rápido/lento, caliente/frío, abierto/cerrado. Adjectives ending in -o change to -a for feminine; grande, fácil and difícil do not change.',
    ],
    [
      'adjective agrees with noun',
      'La niña es alta, el niño es alto.',
      'Mi casa es grande y mi gato es pequeño.',
      'Grande, fuerte and verde end in -e and do not change by gender: un perro grande, una casa grande.',
    ],
    [
      'What is the opposite of "alto"?',
      ['bajo', 'rápido', 'viejo'],
      'bajo',
      'Alto is tall or high; bajo is short or low.',
      'You compare two toys.',
    ],
    [
      ['El agua está fría y el té está caliente.', 'The water is cold and the tea is hot.'],
      ['La puerta está abierta, no cerrada.', 'The door is open, not closed.'],
    ],
    [
      {
        heading: 'Los opuestos',
        table: grid(
          ['Spanish', 'Opposite', 'English'],
          [
            ['grande', 'pequeño', 'big / small'],
            ['alto', 'bajo', 'tall / short'],
            ['rápido', 'lento', 'fast / slow'],
            ['caliente', 'frío', 'hot / cold'],
            ['abierto', 'cerrado', 'open / closed'],
            ['lleno', 'vacío', 'full / empty'],
            ['limpio', 'sucio', 'clean / dirty'],
            ['nuevo', 'viejo', 'new / old'],
            ['feliz', 'triste', 'happy / sad'],
            ['día', 'noche', 'day / night'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-feelings-stories',
      'A1',
      'Feelings in a story: why am I sad or happy?',
      PLAY1,
      'Estoy triste porque perdí mi juguete, pero mi amigo me abraza y estoy contento.',
      'I am sad because I lost my toy, but my friend hugs me and I am happy.',
      'Ang porque ay dahil. Ang perdí ay nawala ko. Ang me abraza ay niyayakap ako. Gamitin ang estar para sa nararamdaman ngayon.',
      'Feelings use estar: estoy triste, estoy contento. Explain with porque: estoy triste porque... Comfort: ¿Qué te pasa? No pasa nada. Te quiero. Ven, te abrazo. Tranquilo/a.',
    ],
    [
      'estoy + feeling + porque + reason',
      'Porque starts the reason.',
      'Estoy enojado porque no quiero dormir.',
      'Do not confuse porque (because) with por qué (why). Por qué is two words and has an accent.',
    ],
    [
      'Which answers "¿Por qué estás triste?"',
      ['Porque perdí mi juguete.', 'Por qué sí.', 'Estoy en casa.'],
      'Porque perdí mi juguete.',
      'Answer why-questions with porque + a reason.',
      'A friend asks what happened.',
    ],
    [
      ['¿Qué te pasa? ¿Estás bien?', 'What is wrong? Are you okay?'],
      ['No te preocupes, todo va a estar bien.', 'Do not worry, everything will be okay.'],
    ],
    [
      {
        heading: 'Cómo me siento',
        table: vocab([
          ['😊', 'contento / feliz', 'happy', 'masaya'],
          ['😢', 'triste', 'sad', 'malungkot'],
          ['😠', 'enojado', 'angry', 'galit'],
          ['😨', 'asustado', 'scared', 'takot'],
          ['😴', 'cansado', 'tired', 'pagod'],
          ['😳', 'avergonzado', 'embarrassed', 'nahihiya'],
          ['🤗', 'abrazar', 'to hug', 'yakapin'],
          ['😌', 'tranquilo', 'calm', 'kalmado'],
          ['🤒', 'enfermo', 'sick', 'may sakit'],
          ['❤️', 'Te quiero.', 'I love you.', 'Mahal kita.'],
        ]),
      },
    ],
  ),
  L(
    [
      'sb-road-safety',
      'A2',
      'Crossing the street and road safety.',
      PLAY2,
      'Mira a los dos lados antes de cruzar y espera la luz verde del semáforo.',
      'Look both ways before crossing and wait for the green light of the traffic light.',
      'Ang semáforo ay traffic light. Ang cruzar ay tumawid. Ang antes de + verb ay bago mag-. Ang acera ay bangketa.',
      'Use antes de + infinitive for before doing something: antes de cruzar. Traffic light colors: verde (go), amarillo (careful), rojo (stop). Words: la calle, la acera, el cruce peatonal, el casco, el cinturón.',
    ],
    [
      'antes de + infinitive',
      'After antes de use the infinitive.',
      'Antes de cruzar, mira a los dos lados.',
      'Do not use a conjugated verb after antes de: say antes de salir, not antes de salgo.',
    ],
    [
      'What does the red light mean?',
      ['stop', 'go', 'be careful'],
      'stop',
      'Rojo means stop. Verde is go and amarillo is caution.',
      'A teacher explains how to cross safely.',
    ],
    [
      ['Cruzamos por el cruce peatonal.', 'We cross at the crosswalk.'],
      ['Siempre uso el cinturón de seguridad.', 'I always wear my seat belt.'],
    ],
    [
      {
        heading: 'En la calle',
        table: vocab([
          ['🚦', 'el semáforo', 'traffic light', 'ilaw-trapiko'],
          ['🟢', 'verde: avanza', 'green: go', 'berde: sige'],
          ['🟡', 'amarillo: cuidado', 'yellow: careful', 'dilaw: ingat'],
          ['🔴', 'rojo: alto', 'red: stop', 'pula: hinto'],
          ['🚸', 'el cruce peatonal', 'crosswalk', 'tawiran'],
          ['🛣️', 'la calle', 'street', 'kalye'],
          ['🚶', 'la acera / la banqueta', 'sidewalk', 'bangketa'],
          ['🪖', 'el casco', 'helmet', 'helmet'],
          ['🚗', 'el cinturón de seguridad', 'seat belt', 'seatbelt'],
          ['🛑', 'la señal de alto', 'stop sign', 'karatula ng hinto'],
        ]),
      },
    ],
  ),
  L(
    [
      'sb-future-jobs',
      'A2',
      'When I grow up I want to be...',
      PLAY2,
      'Cuando sea grande, quiero ser doctora porque me gusta ayudar a la gente.',
      'When I grow up, I want to be a doctor because I like helping people.',
      'Ang cuando sea grande ay kapag ako ay malaki na. Ang quiero ser ay gusto kong maging. Ang doctora ay babaeng doktor.',
      'Say quiero ser + job. No article after ser with jobs: quiero ser maestro. Many jobs have a feminine form: doctor/doctora, maestro/maestra. Others stay the same: el/la dentista, el/la artista.',
    ],
    [
      'quiero ser + job (no article)',
      'Soy maestra, not soy una maestra.',
      'Quiero ser bombero.',
      'Add the article only if you add an adjective: quiero ser una buena maestra.',
    ],
    [
      'Which is correct?',
      ['Quiero ser piloto.', 'Quiero ser un piloto.', 'Quiero ser el piloto.'],
      'Quiero ser piloto.',
      'Jobs after ser take no article when you just state the profession.',
      'A teacher asks what you want to be.',
    ],
    [
      ['Mi mamá es enfermera.', 'My mom is a nurse.'],
      ['Mi sueño es ser veterinario.', 'My dream is to be a veterinarian.'],
    ],
    [
      {
        heading: 'Cuando sea grande',
        table: grid(
          ['Job', 'Feminine', 'English'],
          [
            ['el doctor', 'la doctora', 'doctor'],
            ['el maestro', 'la maestra', 'teacher'],
            ['el bombero', 'la bombera', 'firefighter'],
            ['el piloto', 'la piloto', 'pilot'],
            ['el veterinario', 'la veterinaria', 'veterinarian'],
            ['el policía', 'la policía', 'police officer'],
            ['el cocinero', 'la cocinera', 'cook / chef'],
            ['el científico', 'la científica', 'scientist'],
            ['el dentista', 'la dentista', 'dentist'],
            ['el artista', 'la artista', 'artist'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-rhymes-twisters',
      'A2',
      'Rhymes and tongue twisters (trabalenguas).',
      PLAY2,
      'Tres tristes tigres tragaban trigo en un trigal.',
      'Three sad tigers swallowed wheat in a wheat field.',
      'Ang trabalenguas ay tongue twister. Sanayin ang r at rr, ang t at ang tr. Dahan-dahan muna, bumilis pagkatapos.',
      'Tongue twisters train pronunciation. Say them slowly, then faster. Famous ones: Tres tristes tigres... and Erre con erre, cigarro, erre con erre, barril. Rhymes (rimas) end with the same sound.',
    ],
    [
      'trabalenguas = tongue twister',
      'Slow first, then fast.',
      'El perro de San Roque no tiene rabo.',
      'The rolled rr is hard for many learners. Practice with perro, carro, correr, burro.',
    ],
    [
      'What is a trabalenguas?',
      ['a tongue twister', 'a song', 'a story'],
      'a tongue twister',
      'Trabalenguas is a phrase that is hard to say fast.',
      'Class game at recess.',
    ],
    [
      ['Pablito clavó un clavito.', 'Pablito hammered a little nail.'],
      ['Compré poca capa parda.', 'I bought a little brown cape.'],
    ],
    [
      {
        heading: 'Trabalenguas famosos',
        table: grid(
          ['Trabalenguas', 'Sound to practice', 'English'],
          [
            [
              'Tres tristes tigres tragaban trigo en un trigal.',
              'tr',
              'Three sad tigers swallowed wheat in a wheat field.',
            ],
            [
              'Erre con erre cigarro, erre con erre barril.',
              'rr',
              'R with R cigar, R with R barrel.',
            ],
            ['Pablito clavó un clavito.', 'cl', 'Pablito hammered a little nail.'],
            ['El cielo está enladrillado.', 'll', 'The sky is bricked over.'],
            ['Pepe Pecas pica papas con un pico.', 'p', 'Pepe Pecas chops potatoes with a pick.'],
          ],
          0,
        ),
      },
    ],
  ),
];
