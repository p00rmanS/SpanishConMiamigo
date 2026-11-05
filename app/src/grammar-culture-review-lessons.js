import { L } from './home-world-lessons.js';
import { vocab } from './little-learner-lessons.js';
import { grid } from './school-basics-1.js';

// Kid-style grammar, culture, listen-and-repeat dialogues and unit reviews.
export const GR1 = 'Grammar for little learners';
export const GR2 = 'Grammar: por and para';
export const CU2 = 'Culture: music and symbols';
export const CU3 = 'Culture: artists and authors';
export const LS1 = 'Listen and repeat: first dialogues';
export const LS2 = 'Listen and repeat: daily dialogues';
export const RV1 = 'Review: little learners';
export const RV2 = 'Review: elementary';

export const grammarCultureReview = [
  L(
    [
      'gr-ser-estar-pictures',
      'A1',
      'Ser or estar? Learn with pictures.',
      GR1,
      'Mi mamá es doctora y hoy está cansada porque trabaja mucho.',
      'My mom is a doctor and today she is tired because she works a lot.',
      'Ang ser ay para sa kung sino o ano ang isang bagay: es doctora. Ang estar ay para sa nararamdaman o lugar ngayon: está cansada.',
      'Ser = who or what something is: identity, job, origin, description, time. Estar = how or where it is now: feelings, location, results. Remember: es doctora (always), está cansada (today).',
    ],
    [
      'ser = what it is; estar = how/where now',
      'Mi hermano es alto, pero hoy está enfermo.',
      'Es alto, está en casa.',
      'Some adjectives change meaning: es aburrido (boring) vs está aburrido (bored).',
    ],
    [
      'Which is correct?',
      ['Está en la escuela.', 'Es en la escuela.', 'Son la escuela.'],
      'Está en la escuela.',
      'Location always uses estar.',
      'Teacher shows two pictures and asks why.',
    ],
    [
      ['La sopa está caliente.', 'The soup is hot (now).'],
      ['El sol es una estrella.', 'The sun is a star.'],
    ],
    [
      {
        heading: 'Ser y estar',
        table: grid(
          ['Use', 'Ser', 'Estar'],
          [
            ['Identity', 'Soy Ana.', '-'],
            ['Job', 'Es maestra.', '-'],
            ['Origin', 'Somos de México.', '-'],
            ['Feelings now', '-', 'Estoy feliz.'],
            ['Location', '-', 'Estamos en casa.'],
            ['Description', 'El gato es negro.', 'El gato está sucio.'],
            ['Time', 'Son las tres.', '-'],
            ['Result of action', '-', 'La puerta está cerrada.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'gr-gustar-kids',
      'A1',
      'I like it: gustar for kids.',
      GR1,
      'Me gustan los perros, pero a mi hermana le gusta el gato.',
      'I like dogs, but my sister likes the cat.',
      'Ang gustar ay gumagana sa bagay na gusto: me gusta el gato. Kapag marami, me gustan. Ang a mi hermana le gusta ay gusto ng kapatid kong babae.',
      'With gustar, the thing liked is the subject. Singular: me gusta; plural: me gustan. Add a + person + le/les for others: a mi hermana le gusta. Also: me encanta, me interesa, me duele, me falta.',
    ],
    [
      'me/te/le + gusta(n) + thing',
      'Match gusta/gustan to the thing, not the person.',
      'A Ana le gustan los libros.',
      'Do not say yo gusto el pan. Use me gusta el pan.',
    ],
    [
      'Which is correct?',
      ['Me gustan las fresas.', 'Me gusta las fresas.', 'Yo gusto las fresas.'],
      'Me gustan las fresas.',
      'Fresas is plural, so use gustan.',
      'You tell a classmate what you like.',
    ],
    [
      ['¿Te gusta el helado?', 'Do you like ice cream?'],
      ['No me gusta nada la lluvia.', 'I do not like the rain at all.'],
    ],
    [
      {
        heading: 'Gustar con todos',
        table: grid(
          ['Person', 'Pronoun', 'Example'],
          [
            ['yo', 'me', 'Me gusta el pan.'],
            ['tú', 'te', 'Te gustan los gatos.'],
            ['él / ella / usted', 'le', 'Le gusta bailar.'],
            ['nosotros', 'nos', 'Nos gusta jugar.'],
            ['ellos / ellas / ustedes', 'les', 'Les gustan los libros.'],
          ],
          2,
        ),
      },
    ],
  ),
  L(
    [
      'gr-gender-plural-drills',
      'A1',
      'Masculine, feminine and plural drills.',
      GR1,
      'El libro rojo es nuevo y las mesas rojas son viejas.',
      'The red book is new and the red tables are old.',
      'Ang el at un ay panlalaki, ang la at una ay pambabae. Para sa maramihan, dagdagan ng s o es. Ang adjective ay sumusunod sa pangngalan.',
      'Gender: most nouns ending in -o are masculine and -a feminine. Plural: add -s after a vowel (casa → casas) and -es after a consonant (flor → flores). Adjectives agree: libro rojo, mesas rojas.',
    ],
    [
      'article + noun + adjective agree',
      'The three words match in gender and number.',
      'Las casas blancas son grandes.',
      'Words ending in z change to c in the plural: lápiz → lápices, luz → luces.',
    ],
    [
      'Which is correct?',
      ['las casas blancas', 'los casas blanco', 'la casas blancas'],
      'las casas blancas',
      'Article, noun and adjective all agree.',
      'You describe things in the classroom.',
    ],
    [
      ['Los lápices están en la mochila.', 'The pencils are in the backpack.'],
      ['Tengo dos hermanos y tres primas.', 'I have two brothers and three female cousins.'],
    ],
    [
      {
        heading: 'Singular y plural',
        table: grid(
          ['Singular', 'Plural', 'Rule'],
          [
            ['la casa', 'las casas', 'vowel + s'],
            ['el libro', 'los libros', 'vowel + s'],
            ['la flor', 'las flores', 'consonant + es'],
            ['el papel', 'los papeles', 'consonant + es'],
            ['el lápiz', 'los lápices', 'z → ces'],
            ['la luz', 'las luces', 'z → ces'],
            ['la canción', 'las canciones', 'drop accent mark'],
            ['el mapa', 'los mapas', 'masculine with -a'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'gr-por-para',
      'A2',
      'Por or para? Easy rules.',
      GR2,
      'Este regalo es para ti; lo compré por internet por veinte pesos.',
      'This gift is for you; I bought it online for twenty pesos.',
      'Ang para ay layunin o tatanggap: para ti. Ang por ay dahilan, paraan o palitan: por internet. Parehong maaaring isalin bilang para sa o dahil sa.',
      'PARA = purpose, goal, recipient, deadline: para ti, para estudiar, para mañana. POR = reason, means, exchange, duration, through: por eso, por teléfono, por veinte pesos, por la calle.',
    ],
    [
      'para = goal; por = cause/means',
      'Para: for whom / in order to. Por: because of / by / through.',
      'Estudio para aprender; por eso leo mucho.',
      'A quick test: if you can say in order to, use para. If you can say because of or by means of, use por.',
    ],
    [
      'Which fits: "Voy ___ la escuela"?',
      ['a', 'por', 'para'],
      'a',
      'Use a for destination with ir. Para is for purpose or deadline.',
      'You choose the right word for a sentence.',
    ],
    [
      ['Llámame por teléfono.', 'Call me by phone.'],
      ['Necesito el informe para el lunes.', 'I need the report by Monday.'],
    ],
    [
      {
        heading: 'Por y para',
        table: grid(
          ['Use', 'Example', 'English'],
          [
            ['para: purpose', 'Estudio para aprender.', 'I study to learn.'],
            ['para: recipient', 'El regalo es para mi mamá.', 'The gift is for my mom.'],
            ['para: deadline', 'Es para mañana.', 'It is for tomorrow.'],
            ['por: reason', 'Lo hago por ti.', 'I do it because of you.'],
            ['por: means', 'Hablo por teléfono.', 'I talk by phone.'],
            ['por: exchange', 'Pagué diez pesos por esto.', 'I paid ten pesos for this.'],
            ['por: place', 'Camino por el parque.', 'I walk through the park.'],
            ['por: duration', 'Estudié por dos horas.', 'I studied for two hours.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'cu-music-dance',
      'A2',
      'Music and dance of Spanish-speaking countries.',
      CU2,
      'La cumbia viene de Colombia, el tango de Argentina y el mariachi de México.',
      'Cumbia comes from Colombia, tango from Argentina and mariachi from Mexico.',
      'Ang cumbia ay sayaw ng Colombia, ang tango ay sayaw ng Argentina at Uruguay, ang flamenco ay sayaw ng Espanya, ang salsa at bachata ay sayaw ng Caribe.',
      'Use venir de for origin of a style: la cumbia viene de Colombia. Styles: cumbia, tango, salsa, bachata, merengue, flamenco, mariachi, reggaetón. Instruments: la guitarra, el acordeón, el charango, la marimba, el güiro.',
    ],
    [
      'viene de + country',
      'Venir de = comes from.',
      'La bachata viene de la República Dominicana.',
      'Origins are debated. Many styles grew in more than one place, so say viene de only for the place most associated.',
    ],
    [
      'Which music is from Spain?',
      ['el flamenco', 'la cumbia', 'el mariachi'],
      'el flamenco',
      'Flamenco is from Andalusia in Spain. Cumbia is from Colombia and mariachi from Mexico.',
      'A friend asks about Latin music.',
    ],
    [
      ['¿Quieres bailar salsa conmigo?', 'Do you want to dance salsa with me?'],
      ['Me encanta la música de mi país.', 'I love my country’s music.'],
    ],
    [
      {
        heading: 'Música y baile',
        table: vocab([
          ['💃', 'la salsa', 'salsa', 'salsa'],
          ['🪗', 'la cumbia', 'cumbia (Colombia)', 'cumbia'],
          ['💃', 'el tango', 'tango (Argentina/Uruguay)', 'tango'],
          ['🎺', 'el mariachi', 'mariachi (Mexico)', 'mariachi'],
          ['💃', 'el flamenco', 'flamenco (Spain)', 'flamenco'],
          ['🎶', 'la bachata', 'bachata (Dom. Rep.)', 'bachata'],
          ['🎵', 'el merengue', 'merengue (Dom. Rep.)', 'merengue'],
          ['🎧', 'el reggaetón', 'reggaeton (Puerto Rico)', 'reggaeton'],
          ['🎸', 'la guitarra', 'guitar', 'gitara'],
          ['🪘', 'el tambor / la marimba', 'drum / marimba', 'tambol / marimba'],
        ]),
      },
    ],
  ),
  L(
    [
      'cu-national-symbols',
      'A2',
      'Flags, anthems and symbols.',
      CU2,
      'La bandera de México tiene un águila sobre un nopal y tres colores.',
      'The flag of Mexico has an eagle on a prickly pear cactus and three colors.',
      'Ang bandera ay watawat, ang himno nacional ay pambansang awit at ang escudo ay sagisag. Ang México ay may berde, puti at pula.',
      'National symbols: la bandera, el himno nacional, el escudo, la flor nacional, el ave nacional. Describe colors after the noun: una bandera verde, blanca y roja. Use tiene to describe what it has.',
    ],
    [
      'la bandera tiene + color / symbol',
      'Tiene describes the parts of a flag.',
      'La bandera de Colombia es amarilla, azul y roja.',
      'Patria means homeland. Himno nacional is the national anthem. Escudo is the coat of arms.',
    ],
    [
      'What is "el himno nacional"?',
      ['national anthem', 'national flag', 'national day'],
      'national anthem',
      'Himno is anthem and nacional means national.',
      'Class talks about national day.',
    ],
    [
      ['¿Cómo es la bandera de tu país?', 'What does your country’s flag look like?'],
      [
        'El quetzal es el ave nacional de Guatemala.',
        'The quetzal is the national bird of Guatemala.',
      ],
    ],
    [
      {
        heading: 'Símbolos nacionales',
        table: grid(
          ['Country', 'Symbol', 'English'],
          [
            ['México', 'el águila sobre un nopal', 'eagle on a cactus'],
            ['Argentina', 'el Sol de Mayo', 'Sun of May on the flag'],
            ['Guatemala', 'el quetzal', 'national bird'],
            ['Colombia', 'amarillo, azul y rojo', 'flag colors'],
            ['Perú', 'la llama y la quina', 'llama and cinchona tree on the shield'],
            ['Costa Rica', 'la carreta típica', 'traditional ox cart'],
            ['España', 'el escudo con castillos y leones', 'shield with castles and lions'],
            ['Cuba', 'una estrella blanca', 'white star on the flag'],
          ],
          0,
        ),
      },
    ],
  ),
  L(
    [
      'cu-artists-authors',
      'B1',
      'Famous artists and authors.',
      CU3,
      'Gabriel García Márquez escribió Cien años de soledad y ganó el Premio Nobel.',
      'Gabriel García Márquez wrote One Hundred Years of Solitude and won the Nobel Prize.',
      'Ang escribió ay sumulat, ganó ay nanalo. Ang pintor ay pintor, ang escritor ay manunulat at ang poeta ay makata. Ang mga ito ay gumagamit ng preterite.',
      'Tell about famous people in the preterite: escribió, pintó, ganó, nació, murió. Jobs: el pintor, el escritor, la poeta, el escultor. Famous names: Frida Kahlo, Diego Rivera, Picasso, Cervantes, Neruda, Isabel Allende.',
    ],
    [
      'preterite for biography',
      'Nació, escribió, pintó, murió.',
      'Frida Kahlo pintó muchos autorretratos.',
      'For dates say nació en 1907 and murió en 1954. Born is nacer, died is morir.',
    ],
    [
      'Who wrote Don Quijote?',
      ['Cervantes', 'Neruda', 'Picasso'],
      'Cervantes',
      'Miguel de Cervantes wrote Don Quijote. Neruda was a poet and Picasso a painter.',
      'A literature class.',
    ],
    [
      [
        'Pablo Neruda nació en Chile y escribió poemas de amor.',
        'Pablo Neruda was born in Chile and wrote love poems.',
      ],
      [
        'Diego Rivera pintó grandes murales en México.',
        'Diego Rivera painted large murals in Mexico.',
      ],
    ],
    [
      {
        heading: 'Artistas y autores',
        table: grid(
          ['Person', 'Country', 'Known for'],
          [
            ['Frida Kahlo', 'México', 'self-portraits'],
            ['Diego Rivera', 'México', 'murals'],
            ['Pablo Picasso', 'España', 'Cubism, Guernica'],
            ['Salvador Dalí', 'España', 'Surrealism'],
            ['Miguel de Cervantes', 'España', 'Don Quijote'],
            ['Gabriel García Márquez', 'Colombia', 'Cien años de soledad'],
            ['Pablo Neruda', 'Chile', 'love poetry'],
            ['Isabel Allende', 'Chile', 'La casa de los espíritus'],
            ['Jorge Luis Borges', 'Argentina', 'short stories'],
            ['Fernando Botero', 'Colombia', 'round figures'],
          ],
          0,
        ),
      },
    ],
  ),
  L(
    [
      'ls-dialogue-greetings',
      'A1',
      'Listen and repeat: meeting a new friend.',
      LS1,
      'Hola, me llamo Luis. ¿Y tú? Me llamo Ana. Mucho gusto. Igualmente.',
      'Hi, my name is Luis. And you? My name is Ana. Nice to meet you. Likewise.',
      'Pakinggan at ulitin ang buong usapan nang malakas. Mucho gusto ay ikinagagalak kitang makilala at igualmente ay gayundin.',
      'Repeat each line out loud, first slow, then at normal speed. A mini dialogue: Hola, me llamo Luis. ¿Y tú? Me llamo Ana. ¿De dónde eres? Soy de Colombia. Mucho gusto. Igualmente.',
    ],
    [
      'repeat after the audio',
      'Shadowing builds speaking speed.',
      'Hola, me llamo Luis.',
      'Record yourself and compare. Stress is on the syllable with the accent or on the second-to-last syllable.',
    ],
    [
      'What do you answer to "Mucho gusto"?',
      ['Igualmente', 'Adiós', 'De nada'],
      'Igualmente',
      'Igualmente means likewise, equally.',
      'You meet a new classmate.',
    ],
    [
      ['¿De dónde eres?', 'Where are you from?'],
      ['Soy de México. ¿Y tú?', 'I am from Mexico. And you?'],
    ],
    [
      {
        heading: 'Diálogo para repetir',
        table: grid(
          ['Speaker', 'Line', 'English'],
          [
            ['Luis', 'Hola, me llamo Luis. ¿Y tú?', 'Hi, my name is Luis. And you?'],
            ['Ana', 'Me llamo Ana. Mucho gusto.', 'My name is Ana. Nice to meet you.'],
            ['Luis', 'Igualmente. ¿De dónde eres?', 'Likewise. Where are you from?'],
            ['Ana', 'Soy de Colombia. ¿Y tú?', 'I am from Colombia. And you?'],
            ['Luis', 'Soy de México.', 'I am from Mexico.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'ls-dialogue-market',
      'A2',
      'Listen and repeat: at the market.',
      LS2,
      'Buenos días, ¿cuánto cuestan los tomates? Cuestan ocho pesos el kilo. Deme dos, por favor.',
      'Good morning, how much are the tomatoes? They cost eight pesos a kilo. Give me two, please.',
      'Ang deme ay bigyan mo ako, formal na command. Ang el kilo ay bawat kilo. Ulitin ang bawat linya ng usapan.',
      'Market dialogue: ask the price, say the amount, pay and say thanks. Use deme (usted) with older people or in markets. The seller may say ¿Algo más? and ¿Cuánto le doy? Answer Eso es todo, gracias.',
    ],
    [
      'deme + amount',
      'Deme is a polite command (usted).',
      'Deme un kilo de tomates.',
      'Without por favor, deme can sound abrupt. Add por favor and gracias.',
    ],
    [
      'What does the seller ask when you finish?',
      ['¿Algo más?', '¿Cuánto cuesta?', '¿Dónde está?'],
      '¿Algo más?',
      'Algo más means anything else.',
      'You are at the market.',
    ],
    [
      ['¿Algo más? No, eso es todo.', 'Anything else? No, that is all.'],
      ['Aquí tiene. Gracias, hasta luego.', 'Here you are. Thanks, see you later.'],
    ],
    [
      {
        heading: 'En el mercado',
        table: grid(
          ['Speaker', 'Line', 'English'],
          [
            [
              'Cliente',
              'Buenos días, ¿cuánto cuestan los tomates?',
              'Good morning, how much are the tomatoes?',
            ],
            ['Vendedor', 'Cuestan ocho pesos el kilo.', 'They cost eight pesos a kilo.'],
            ['Cliente', 'Deme dos kilos, por favor.', 'Give me two kilos, please.'],
            ['Vendedor', '¿Algo más?', 'Anything else?'],
            ['Cliente', 'No, eso es todo. ¿Cuánto es?', 'No, that is all. How much is it?'],
            ['Vendedor', 'Son dieciséis pesos.', 'It is sixteen pesos.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'ls-dialogue-doctor',
      'A2',
      'Listen and repeat: at the doctor.',
      LS2,
      'Buenos días, doctor. Me duele el estómago desde ayer. ¿Tiene fiebre? No, no tengo fiebre.',
      'Good morning, doctor. My stomach has hurt since yesterday. Do you have a fever? No, I do not have a fever.',
      'Ang desde ayer ay mula kahapon. Ang tiene fiebre ay may lagnat ka ba. Ulitin ang diyalogo nang malakas at gamitin ang usted.',
      'Doctor dialogue: greet, give the symptom, say since when, answer questions. Desde ayer = since yesterday; hace dos días = for two days. The doctor may say Respire hondo, Abra la boca, Tome esto.',
    ],
    [
      'desde + time / hace + time',
      'Desde ayer, hace dos días.',
      'Me duele la cabeza desde esta mañana.',
      'Desde + starting point; hace + length of time. Both use the present tense in Spanish when the pain continues.',
    ],
    [
      'How do you say "since yesterday"?',
      ['desde ayer', 'hace ayer', 'para ayer'],
      'desde ayer',
      'Desde marks a starting point.',
      'You describe symptoms to a doctor.',
    ],
    [
      ['Respire hondo, por favor.', 'Breathe deeply, please.'],
      ['Tiene que descansar y beber mucha agua.', 'You have to rest and drink a lot of water.'],
    ],
    [
      {
        heading: 'En el consultorio',
        table: grid(
          ['Speaker', 'Line', 'English'],
          [
            [
              'Paciente',
              'Buenos días, doctor. Me duele el estómago.',
              'Good morning, doctor. My stomach hurts.',
            ],
            ['Doctor', '¿Desde cuándo le duele?', 'Since when does it hurt?'],
            ['Paciente', 'Desde ayer por la noche.', 'Since last night.'],
            ['Doctor', '¿Tiene fiebre o vómito?', 'Do you have a fever or vomiting?'],
            [
              'Paciente',
              'No tengo fiebre, pero tengo náuseas.',
              'I have no fever, but I have nausea.',
            ],
            ['Doctor', 'Tome esto y descanse.', 'Take this and rest.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'rv-kindergarten',
      'A1',
      'Review: kindergarten and kid basics.',
      RV1,
      'Repaso: me llamo Ana, tengo siete años, mi color favorito es el azul y me gustan los perros.',
      'Review: my name is Ana, I am seven years old, my favorite color is blue and I like dogs.',
      'Ito ay repaso. Basahin ang bawat bahagi at sabihin nang malakas. Pangalan, edad, kulay, hayop at pagkain ang bahagi nito.',
      'Review checklist for little learners: I can say my name, age, colors, animals, family, the clock and the calendar, school items and simple likes. Try one sentence for each box.',
    ],
    [
      'me llamo / tengo ... años / me gusta',
      'Name, age, likes: three tools for any introduction.',
      'Tengo ocho años y me gusta jugar.',
      'Age uses tener: tengo siete años, not soy siete.',
    ],
    [
      'Which sentence tells your age?',
      ['Tengo siete años.', 'Soy siete años.', 'Estoy siete años.'],
      'Tengo siete años.',
      'Use tener with age.',
      'A new classmate asks about you.',
    ],
    [
      ['¿Cuántos años tienes?', 'How old are you?'],
      ['Mi cumpleaños es en abril.', 'My birthday is in April.'],
    ],
    [
      {
        heading: 'Mi lista de repaso',
        table: grid(
          ['Topic', 'Try saying', 'English'],
          [
            ['Name', 'Me llamo...', 'My name is...'],
            ['Age', 'Tengo ... años.', 'I am ... years old.'],
            ['Colors', 'Mi color favorito es...', 'My favorite color is...'],
            ['Animals', 'Mi animal favorito es...', 'My favorite animal is...'],
            ['Family', 'Tengo ... hermanos.', 'I have ... siblings.'],
            ['Time', 'Son las ... .', 'It is ... o’clock.'],
            ['Likes', 'Me gusta... / Me gustan...', 'I like...'],
            ['Feelings', 'Estoy contento/a.', 'I am happy.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'rv-food',
      'A1',
      'Review: food and the kitchen.',
      RV1,
      'Repaso: de desayuno como huevos, de almuerzo arroz con pollo y de postre helado.',
      'Review: for breakfast I eat eggs, for lunch rice with chicken and for dessert ice cream.',
      'Repasuhin ang desayuno, almuerzo, cena at postre. Sabihin kung ano ang kinakain mo at kung gusto mo ito o hindi.',
      'Review checklist for food: meals (desayuno, almuerzo, cena), foods, drinks, tastes, likes and requests. Sentence frames: De desayuno como..., Me gusta..., No me gusta..., Quiero..., Está muy...',
    ],
    [
      'de + meal + como / bebo',
      'De desayuno = for breakfast.',
      'De cena como sopa.',
      'Cena is dinner and comida can be the main meal. Use the words common in your region.',
    ],
    [
      'What is the third meal of the day?',
      ['la cena', 'el desayuno', 'el almuerzo'],
      'la cena',
      'Desayuno is breakfast, almuerzo is lunch and cena is dinner.',
      'You tell what you eat each day.',
    ],
    [
      ['¿Qué desayunas todos los días?', 'What do you have for breakfast every day?'],
      ['La sopa está muy rica.', 'The soup is very tasty.'],
    ],
    [
      {
        heading: 'Repaso de comida',
        table: grid(
          ['Topic', 'Frame', 'English'],
          [
            ['Breakfast', 'De desayuno como...', 'For breakfast I eat...'],
            ['Lunch', 'De almuerzo como...', 'For lunch I eat...'],
            ['Dinner', 'De cena como...', 'For dinner I eat...'],
            ['Dessert', 'De postre quiero...', 'For dessert I want...'],
            ['Drink', 'Quiero un vaso de...', 'I want a glass of...'],
            ['Taste', 'Está muy...', 'It is very...'],
            ['Like', 'Me gusta... / No me gusta...', 'I like... / I do not like...'],
            ['Ask', '¿Qué hay para comer?', 'What is there to eat?'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'rv-elementary',
      'A2',
      'Review: elementary school topics.',
      RV2,
      'Repaso: voy a la escuela por la mañana, me gusta la ciencia y quiero ser doctora.',
      'Review: I go to school in the morning, I like science and I want to be a doctor.',
      'Repasuhin ang direksyon, matematika, bansa, pamilya, pera, pagkain, tradisyon at plano sa hinaharap.',
      'Review checklist for elementary topics: directions, math, countries, family tree, money, seasons and holidays, comparisons, future jobs. Make one sentence for each topic and say it aloud.',
    ],
    [
      'voy a + place / quiero ser + job',
      'Mix verbs you already know in one paragraph.',
      'Me gusta la ciencia porque aprendo cosas nuevas.',
      'Short connected sentences sound natural. Use porque, pero and y to join ideas.',
    ],
    [
      'Which sentence talks about a dream job?',
      ['Quiero ser doctora.', 'Estoy doctora.', 'Tengo doctora.'],
      'Quiero ser doctora.',
      'Use quiero ser + job for a future dream.',
      'A teacher asks what you want to be.',
    ],
    [
      ['La capital de Perú es Lima.', 'The capital of Peru is Lima.'],
      ['Mi hermano es mayor que yo.', 'My brother is older than me.'],
    ],
    [
      {
        heading: 'Mi lista de repaso',
        table: grid(
          ['Topic', 'Try saying', 'English'],
          [
            ['Directions', 'Gira a la derecha.', 'Turn right.'],
            ['Math', 'Dos más dos son cuatro.', 'Two plus two is four.'],
            ['Countries', 'La capital de ... es ... .', 'The capital of ... is ... .'],
            ['Comparing', 'Es más grande que...', 'It is bigger than...'],
            ['Money', '¿Cuánto cuesta?', 'How much is it?'],
            ['Holidays', 'En Navidad ...', 'At Christmas ...'],
            ['Future job', 'Quiero ser ...', 'I want to be ...'],
            ['Food', 'De postre quiero ...', 'For dessert I want ...'],
          ],
          1,
        ),
      },
    ],
  ),
];
