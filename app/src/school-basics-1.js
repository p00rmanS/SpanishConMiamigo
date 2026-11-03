import { L } from './home-world-lessons.js';
import { vocab } from './little-learner-lessons.js';

// School basics, part 1 (kindergarten level): alphabet, counting, clock, calendar, introductions,
// classroom language, supplies, this/that, animals, meals and songs: the things children learn first.
const KINDER = 'School basics: kindergarten';

export const grid = (head, rows, speakCol = 0) => ({
  head,
  langs: head.map((h) => (h === 'English' || h === 'Means' ? 'en' : 'es')),
  speakCol,
  rows,
});

export const schoolBasics1 = [
  L(
    [
      'sb-alphabet',
      'A1',
      'The alphabet: el abecedario.',
      KINDER,
      'La A es de avión, la B es de barco y la C es de casa.',
      'A is for airplane, B is for boat and C is for house.',
      'Ang abecedario ay may 27 letra, kasama ang ñ. Karamihan ay iisa ang tunog. Ang h ay tahimik at ang ll ay hindi na hiwalay na letra sa alpabeto.',
      'The Spanish alphabet has 27 letters, including ñ. Kids say es de to name a word: la A es de avión. Letter names: a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, doble ve, equis, ye, zeta. Latin America often says be grande and ve chica to tell b and v apart.',
    ],
    [
      'la + letter + es de + word',
      'Say a letter name, then a word that starts with it.',
      'La H es muda.',
      'Use deletrear to spell aloud: ¿Cómo se escribe tu nombre? Se escribe A-N-A.',
    ],
    [
      'Which letter is silent in Spanish?',
      ['la hache (h)', 'la jota (j)', 'la ese (s)'],
      'la hache (h)',
      'Hache is silent in almost every Spanish word.',
      'A teacher practices the alphabet with the class.',
    ],
    [
      ['¿Cómo se escribe tu nombre?', 'How do you spell your name?'],
      ['La eñe es una letra especial.', 'The ñ is a special letter.'],
    ],
    [
      {
        heading: 'El abecedario',
        table: grid(
          ['Letter', 'Name', 'Example word', 'English'],
          [
            ['A a', 'a', 'avión', 'airplane'],
            ['B b', 'be', 'barco', 'boat'],
            ['C c', 'ce', 'casa', 'house'],
            ['D d', 'de', 'dedo', 'finger'],
            ['E e', 'e', 'elefante', 'elephant'],
            ['F f', 'efe', 'flor', 'flower'],
            ['G g', 'ge', 'gato', 'cat'],
            ['H h', 'hache', 'helado', 'ice cream'],
            ['I i', 'i', 'isla', 'island'],
            ['J j', 'jota', 'jirafa', 'giraffe'],
            ['K k', 'ka', 'koala', 'koala'],
            ['L l', 'ele', 'luna', 'moon'],
            ['M m', 'eme', 'mesa', 'table'],
            ['N n', 'ene', 'nariz', 'nose'],
            ['Ñ ñ', 'eñe', 'piña', 'pineapple'],
            ['O o', 'o', 'oso', 'bear'],
            ['P p', 'pe', 'perro', 'dog'],
            ['Q q', 'cu', 'queso', 'cheese'],
            ['R r', 'erre', 'rojo', 'red'],
            ['S s', 'ese', 'sol', 'sun'],
            ['T t', 'te', 'taza', 'cup'],
            ['U u', 'u', 'uva', 'grape'],
            ['V v', 'uve', 'vaca', 'cow'],
            ['W w', 'doble ve', 'waffle', 'waffle'],
            ['X x', 'equis', 'xilófono', 'xylophone'],
            ['Y y', 'ye', 'yate', 'yacht'],
            ['Z z', 'zeta', 'zapato', 'shoe'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'sb-counting-tens',
      'A1',
      'Counting to 100 by tens.',
      KINDER,
      'Diez, veinte, treinta, cuarenta; contamos hasta cien de diez en diez.',
      'Ten, twenty, thirty, forty; we count to one hundred by tens.',
      'Mula 31 pataas, ang pattern ay treinta y uno, treinta y dos. Ang 16 hanggang 29 ay isang salita: dieciséis, veintidós. Ang 100 ay cien.',
      'Count by tens: diez, veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien. From 31 up, join tens and ones with y: treinta y uno, cuarenta y cinco. Numbers 16 to 29 are one word: dieciséis, veintidós. Kids count de diez en diez, de dos en dos, de cinco en cinco.',
    ],
    [
      'tens + y + ones',
      '31 to 99: ten + y + one.',
      'Veinte, but treinta y uno.',
      'Veintiuno, veintidós… are one word and need accents on veintidós, veintitrés, veintiséis.',
    ],
    [
      'How do you say 45?',
      ['cuarenta y cinco', 'cuarentaicinco', 'cinco y cuarenta'],
      'cuarenta y cinco',
      'From 31 up, write the ten, y, then the one.',
      'A child counts marbles.',
    ],
    [
      ['Tengo veintiún lápices.', 'I have twenty-one pencils.'],
      ['Contamos de dos en dos.', 'We count by twos.'],
    ],
    [
      {
        heading: 'Contar de diez en diez',
        table: grid(
          ['Number', 'Spanish', 'English'],
          [
            ['10', 'diez', 'ten'],
            ['20', 'veinte', 'twenty'],
            ['30', 'treinta', 'thirty'],
            ['40', 'cuarenta', 'forty'],
            ['50', 'cincuenta', 'fifty'],
            ['60', 'sesenta', 'sixty'],
            ['70', 'setenta', 'seventy'],
            ['80', 'ochenta', 'eighty'],
            ['90', 'noventa', 'ninety'],
            ['100', 'cien', 'one hundred'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'sb-clock-kids',
      'A1',
      'Telling time like a kid.',
      KINDER,
      'Son las tres en punto; a las tres y media comemos, y a las cuatro menos cuarto salimos.',
      'It is three o’clock sharp; at three-thirty we eat, and at a quarter to four we leave.',
      'Ang es la una para sa 1:00; son las dos, tres, atbp. para sa iba. Ang y media ay kalahati, y cuarto ay labinlima, at menos cuarto ay kulang labinlima.',
      'Ask ¿Qué hora es? Answer es la una for 1:00 and son las dos, las tres… for other hours. Add en punto (exactly), y cuarto (quarter past), y media (half past), menos cuarto (quarter to). For the time of an event use a la / a las: a las ocho. Use de la mañana, de la tarde, de la noche.',
    ],
    [
      'es la / son las + hour',
      'Es la una; son las dos, tres, cuatro…',
      'A las ocho = at eight.',
      'Use son las for every hour except one o’clock. Es la una y media, son las dos y media.',
    ],
    [
      'It is 2:30. What do you say?',
      ['Son las dos y media.', 'Es la dos y media.', 'Son la dos media.'],
      'Son las dos y media.',
      'Hours above one use son las; y media is half past.',
      'A teacher asks the time.',
    ],
    [
      ['¿A qué hora es la clase?', 'What time is the class?'],
      ['Es mediodía.', 'It is noon.'],
    ],
    [
      {
        heading: 'La hora',
        table: grid(
          ['Time', 'Spanish', 'English'],
          [
            ['1:00', 'Es la una.', 'It is one o’clock.'],
            ['3:00', 'Son las tres en punto.', 'It is three o’clock sharp.'],
            ['3:15', 'Son las tres y cuarto.', 'It is a quarter past three.'],
            ['3:30', 'Son las tres y media.', 'It is half past three.'],
            ['3:45', 'Son las cuatro menos cuarto.', 'It is a quarter to four.'],
            ['12:00', 'Es mediodía.', 'It is noon.'],
            ['12:00 a.m.', 'Es medianoche.', 'It is midnight.'],
            ['8 a.m.', 'Son las ocho de la mañana.', 'It is eight in the morning.'],
          ],
          1,
        ),
      },
    ],
  ),
  L(
    [
      'sb-calendar-kids',
      'A1',
      'The calendar: today is Monday the fifth.',
      KINDER,
      'Hoy es lunes, cinco de mayo; mañana es martes y mi cumpleaños es en junio.',
      'Today is Monday, May fifth; tomorrow is Tuesday and my birthday is in June.',
      'Sa Spanish, hindi capital ang mga araw at buwan: lunes, mayo. Ang petsa ay ang araw + de + buwan: cinco de mayo. Ang una ng buwan ay el primero de mayo.',
      'Days and months are not capitalized: lunes, martes, mayo, junio. Say the date as day + de + month: cinco de mayo. The first is el primero de mayo (el uno de mayo in some places). Ask ¿Qué día es hoy? (day of the week) and ¿Qué fecha es hoy? (date). The week starts on lunes on most Spanish calendars.',
    ],
    [
      'hoy es + day / el + number + de + month',
      'Days and months stay lowercase.',
      'El cinco de mayo.',
      'Use el before a date: Mi cumpleaños es el diez de junio. For a day of the week, use el for one day and los for every: el lunes, los lunes.',
    ],
    [
      'How do you say "May fifth"?',
      ['el cinco de mayo', 'cinco mayo de', 'el mayo cinco'],
      'el cinco de mayo',
      'Spanish dates: el + number + de + month.',
      'A child writes the date on the board.',
    ],
    [
      ['Los sábados no voy a la escuela.', 'On Saturdays I do not go to school.'],
      ['La Navidad es el veinticinco de diciembre.', 'Christmas is on December twenty-fifth.'],
    ],
    [
      {
        heading: 'Los días y los meses',
        table: vocab(
          [
            ['1️⃣', 'lunes', 'Monday', 'Lunes'],
            ['2️⃣', 'martes', 'Tuesday', 'Martes'],
            ['3️⃣', 'miércoles', 'Wednesday', 'Miyerkules'],
            ['4️⃣', 'jueves', 'Thursday', 'Huwebes'],
            ['5️⃣', 'viernes', 'Friday', 'Biyernes'],
            ['6️⃣', 'sábado', 'Saturday', 'Sabado'],
            ['7️⃣', 'domingo', 'Sunday', 'Linggo'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
      {
        heading: 'Months',
        points: [
          'enero, febrero, marzo, abril, mayo, junio',
          'julio, agosto, septiembre (or setiembre), octubre, noviembre, diciembre',
        ],
      },
    ],
  ),
  L(
    [
      'sb-introduce-yourself',
      'A1',
      'Introduce yourself: name, age, where from.',
      KINDER,
      'Me llamo Ana, tengo siete años, soy de Filipinas y vivo en Manila.',
      'My name is Ana, I am seven years old, I am from the Philippines and I live in Manila.',
      'Ang me llamo ay “ang pangalan ko.” Ang tengo ___ años ay edad. Ang soy de ay “taga-.” Ang vivo en ay “nakatira sa.”',
      'The first sentences every child learns: Me llamo… (my name is), Tengo… años (I am … years old), Soy de… (I am from), Vivo en… (I live in). The questions: ¿Cómo te llamas?, ¿Cuántos años tienes?, ¿De dónde eres?, ¿Dónde vives? End with Mucho gusto (nice to meet you).',
    ],
    [
      'me llamo / tengo / soy de / vivo en',
      'Four starter sentences: name, age, origin, home.',
      'Mucho gusto.',
      'With adults use usted: ¿Cómo se llama?, ¿De dónde es?',
    ],
    [
      'How do you ask a child "how old are you?"',
      ['¿Cuántos años tienes?', '¿Cómo años eres?', '¿Qué años tienes?'],
      '¿Cuántos años tienes?',
      'Age uses tener: ¿Cuántos años tienes?',
      'You meet a new classmate.',
    ],
    [
      ['¿De dónde eres?', 'Where are you from?'],
      ['Mucho gusto, me llamo Luis.', 'Nice to meet you, my name is Luis.'],
    ],
    [
      {
        heading: 'Preséntate',
        table: grid(
          ['Question', 'Answer', 'English'],
          [
            ['¿Cómo te llamas?', 'Me llamo Ana.', 'What is your name? My name is Ana.'],
            ['¿Cuántos años tienes?', 'Tengo siete años.', 'How old are you? I am seven.'],
            [
              '¿De dónde eres?',
              'Soy de Filipinas.',
              'Where are you from? I am from the Philippines.',
            ],
            ['¿Dónde vives?', 'Vivo en Manila.', 'Where do you live? I live in Manila.'],
            [
              '¿Cuándo es tu cumpleaños?',
              'Es el diez de mayo.',
              'When is your birthday? May tenth.',
            ],
            ['¿Tienes hermanos?', 'Sí, tengo dos hermanos.', 'Do you have siblings? Yes, two.'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-teacher-commands',
      'A1',
      'What the teacher says: sit, listen, open.',
      KINDER,
      'Siéntense, abran el libro, escuchen y levanten la mano si tienen una pregunta.',
      'Sit down, open the book, listen and raise your hand if you have a question.',
      'Ang mga utos ng guro: siéntate (umupo ka), escucha (makinig), abre (buksan), levanta la mano (itaas ang kamay). Sa buong klase, idagdag ang -n: siéntense, escuchen.',
      'Teachers give commands: siéntate (sit), escucha (listen), mira (look), repite (repeat), lee (read), escribe (write), abre / cierra (open / close), levanta la mano (raise your hand), guarda silencio (be quiet). To a whole class add -n: siéntense, escuchen, abran, levanten. Come here is ven aquí; line up is hagan una fila.',
    ],
    [
      'command to one / command to the class',
      'One child: escucha. The class: escuchen.',
      'Silencio, por favor.',
      'Ven (come) and haz (do) are irregular. Hagan una fila is for the whole class.',
    ],
    [
      'The teacher wants all students to open the book. What does she say?',
      ['Abran el libro.', 'Abre el libro.', 'Abrimos el libro.'],
      'Abran el libro.',
      'For a class (ustedes) add -n: abran.',
      'A classroom at the start of the lesson.',
    ],
    [
      ['Niños, guarden silencio.', 'Children, be quiet.'],
      ['Repite después de mí.', 'Repeat after me.'],
    ],
    [
      {
        heading: 'Órdenes en la clase',
        table: vocab(
          [
            ['🪑', 'siéntate / siéntense', 'sit down', 'umupo ka'],
            ['👂', 'escucha / escuchen', 'listen', 'makinig'],
            ['👀', 'mira / miren', 'look', 'tingnan mo'],
            ['🔁', 'repite / repitan', 'repeat', 'ulitin mo'],
            ['📖', 'lee / lean', 'read', 'basahin mo'],
            ['✏️', 'escribe / escriban', 'write', 'isulat mo'],
            ['🙋', 'levanta la mano', 'raise your hand', 'itaas ang kamay'],
            ['🤫', 'guarda silencio', 'be quiet', 'tumahimik ka'],
            ['🚶', 'haz una fila', 'line up', 'pumila ka'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-school-supplies',
      'A1',
      'In my backpack: school supplies.',
      KINDER,
      'En mi mochila tengo un lápiz, una regla, tijeras y un cuaderno.',
      'In my backpack I have a pencil, a ruler, scissors and a notebook.',
      'Ang lapis ay el lápiz, ang pambura ay el borrador, ang gunting ay las tijeras (laging plural), ang pandikit ay el pegamento.',
      'Name your supplies with el or la: el lápiz, el borrador (eraser), la regla, el cuaderno, el libro, el sacapuntas (sharpener), el pegamento (glue), los crayones (crayons). Scissors are plural: las tijeras. Ask a friend: ¿Me prestas un lápiz? (Can you lend me a pencil?)',
    ],
    [
      'en mi mochila tengo + things',
      'Pairs and tools can be plural: las tijeras.',
      '¿Me prestas…?',
      'Prestar is to lend and pedir prestado is to borrow: ¿Me prestas tu lápiz? / Pido prestado tu lápiz.',
    ],
    [
      'Which word means scissors?',
      ['las tijeras', 'el pegamento', 'la regla'],
      'las tijeras',
      'Tijeras is always plural.',
      'You prepare for art class.',
    ],
    [
      ['¿Me prestas un borrador?', 'Can you lend me an eraser?'],
      ['Mis crayones están en la mesa.', 'My crayons are on the table.'],
    ],
    [
      {
        heading: 'Los útiles escolares',
        table: vocab(
          [
            ['✏️', 'el lápiz', 'pencil', 'lapis'],
            ['🖍️', 'los crayones', 'crayons', 'krayola'],
            ['📏', 'la regla', 'ruler', 'ruler'],
            ['✂️', 'las tijeras', 'scissors', 'gunting'],
            ['🧴', 'el pegamento', 'glue', 'pandikit'],
            ['📓', 'el cuaderno', 'notebook', 'kuwaderno'],
            ['📕', 'el libro', 'book', 'libro'],
            ['🧽', 'el borrador', 'eraser', 'pambura'],
            ['🎒', 'la mochila', 'backpack', 'bag'],
            ['🖊️', 'el bolígrafo', 'pen', 'bolpen'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-this-that',
      'A1',
      'This and that: este, ese, aquel.',
      KINDER,
      'Este libro es mío, ese lápiz es tuyo y aquella mochila es de Ana.',
      'This book is mine, that pencil is yours and that backpack over there is Ana’s.',
      'Ang este ay “ito” (malapit sa akin), ang ese ay “iyan” (malapit sa iyo) at ang aquel ay “iyon” (malayo sa pareho). Nagbabago sila sa kasarian at dami.',
      'Demonstratives point at things: este / esta (this, near me), ese / esa (that, near you), aquel / aquella (that, far from both). Plurals: estos, estas, esos, esas, aquellos, aquellas. They match the noun: este libro, esta mesa, estos libros. Aquí, ahí, allí mean here, there, over there. Esto and eso are for unknown things: ¿Qué es esto?',
    ],
    [
      'este/ese/aquel + noun (matching)',
      'Near me: este. Near you: ese. Far: aquel.',
      '¿Qué es esto?',
      'Esto and eso never change and never go before a noun; they point at an idea or something unnamed.',
    ],
    [
      'Which word fits? ___ mesa (near me, feminine).',
      ['Esta', 'Este', 'Aquel'],
      'Esta',
      'Mesa is feminine and near me, so use esta.',
      'You point at things in a classroom.',
    ],
    [
      ['Estas flores son bonitas.', 'These flowers are pretty.'],
      ['Aquellos niños juegan allí.', 'Those children over there are playing.'],
    ],
    [
      {
        heading: 'Este, ese, aquel',
        table: grid(
          ['', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'],
          [
            ['this (near me)', 'este', 'esta', 'estos', 'estas'],
            ['that (near you)', 'ese', 'esa', 'esos', 'esas'],
            ['that (far away)', 'aquel', 'aquella', 'aquellos', 'aquellas'],
            ['here / there / over there', 'aquí', 'ahí', 'allí', ''],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-animal-sounds',
      'A1',
      'Pets and the sounds animals make.',
      KINDER,
      'El perro hace guau, el gato hace miau y el gallo hace quiquiriquí.',
      'The dog says woof, the cat says meow and the rooster says cock-a-doodle-doo.',
      'Ang tunog ng hayop sa Spanish ay iba: guau (aw-aw), miau (ngiyaw), muu (baka), cuac (pato), quiquiriquí (tandang). Gamitin ang hace.',
      'Spanish animal sounds are different from English: perro guau guau, gato miau, vaca muu, pato cuac cuac, gallo quiquiriquí, cerdo oinc oinc, oveja bee, pollito pío pío, rana cro cro. Use hace: el perro hace guau. A pet is una mascota.',
    ],
    [
      'animal + hace + sound',
      'El perro hace guau; the sound comes after hace.',
      '¿Qué mascota tienes?',
      'Ask ¿Tienes mascota? and answer with tengo un perro or no tengo mascota.',
    ],
    [
      'What sound does a Spanish rooster make?',
      ['quiquiriquí', 'cocorocó', 'cuac'],
      'quiquiriquí',
      'The Spanish rooster says quiquiriquí.',
      'A child plays an animal sounds game.',
    ],
    [
      ['Tengo una mascota: un conejo.', 'I have a pet: a rabbit.'],
      ['La vaca hace muu y la oveja hace bee.', 'The cow says moo and the sheep says baa.'],
    ],
    [
      {
        heading: 'Los sonidos',
        table: vocab(
          [
            ['🐶', 'el perro: guau guau', 'dog: woof woof', 'aso: aw aw'],
            ['🐱', 'el gato: miau', 'cat: meow', 'pusa: ngiyaw'],
            ['🐮', 'la vaca: muu', 'cow: moo', 'baka: mu'],
            ['🐷', 'el cerdo: oinc oinc', 'pig: oink', 'baboy: ok ok'],
            ['🦆', 'el pato: cuac cuac', 'duck: quack', 'bibe: kwak'],
            ['🐓', 'el gallo: quiquiriquí', 'rooster: cock-a-doodle-doo', 'tandang: tik-tilaok'],
            ['🐑', 'la oveja: bee', 'sheep: baa', 'tupa: ba'],
            ['🐥', 'el pollito: pío pío', 'chick: peep', 'sisiw: pip'],
            ['🐸', 'la rana: cro cro', 'frog: ribbit', 'palaka: kokak'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-bugs-birds',
      'A1',
      'Bugs and birds.',
      KINDER,
      'El grillo canta, la mosca vuela, el caracol camina despacio y el loro habla.',
      'The cricket sings, the fly flies, the snail walks slowly and the parrot talks.',
      'Ang bug ay el bicho o el insecto. Ang grillo ay kuliglig, ang caracol ay suso, ang libélula ay tutubi, ang loro ay loro. Gamitin ang el/la bago ang pangalan.',
      'Small creatures: el insecto / el bicho (bug), el mosquito, la mosca (fly), el grillo (cricket), el gusano (worm), el caracol (snail), la libélula (dragonfly), la catarina or la mariquita (ladybug). Birds: el pájaro, el loro, la paloma, el pato, el búho, el águila, el colibrí. Verbs: volar, cantar, caminar, arrastrarse.',
    ],
    [
      'animal + verb',
      'Birds fly (vuelan); worms crawl (se arrastran).',
      'La catarina is the ladybug in Mexico.',
      'Ladybug changes by region: catarina (Mexico), mariquita (Spain), chinita (Chile).',
    ],
    [
      'Which one is a snail?',
      ['el caracol', 'el gusano', 'el grillo'],
      'el caracol',
      'Caracol is the snail. Gusano is a worm.',
      'Kids look at a garden.',
    ],
    [
      ['La paloma vuela sobre el parque.', 'The dove flies over the park.'],
      ['El búho duerme de día.', 'The owl sleeps during the day.'],
    ],
    [
      {
        heading: 'Bichos y pájaros',
        table: vocab(
          [
            ['🦟', 'el mosquito', 'mosquito', 'lamok'],
            ['🪰', 'la mosca', 'fly', 'langaw'],
            ['🦗', 'el grillo', 'cricket', 'kuliglig'],
            ['🐛', 'el gusano', 'worm / caterpillar', 'uod'],
            ['🐌', 'el caracol', 'snail', 'suso'],
            ['🐞', 'la catarina / la mariquita', 'ladybug', 'ladybug'],
            ['🦜', 'el loro', 'parrot', 'loro'],
            ['🕊️', 'la paloma', 'dove / pigeon', 'kalapati'],
            ['🦉', 'el búho', 'owl', 'kuwago'],
            ['🦅', 'el águila', 'eagle', 'agila'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-garden-plants',
      'A1',
      'Parts of a plant.',
      KINDER,
      'La semilla crece, la raíz bebe agua, el tallo sube y la flor se abre.',
      'The seed grows, the root drinks water, the stem rises and the flower opens.',
      'Ang bahagi ng halaman: la raíz (ugat), el tallo (tangkay), la hoja (dahon), la flor (bulaklak), la semilla (buto), el fruto (bunga/prutas).',
      'A plant has la raíz (root), el tallo (stem), la hoja (leaf), la flor (flower), el fruto (fruit) and la semilla (seed). Plants need el agua, el sol and la tierra (soil). Verbs: sembrar (to plant), regar (to water), crecer (to grow), florecer (to bloom). Crecer has yo crezco.',
    ],
    [
      'plant part + verb',
      'Plants grow (crecen), bloom (florecen), need water.',
      'Sembrar, regar, crecer.',
      'Sembrar and regar change e → ie: siembro, riego. Crecer has yo crezco.',
    ],
    [
      'Which part drinks water from the soil?',
      ['la raíz', 'la hoja', 'la flor'],
      'la raíz',
      'The root absorbs water from the soil.',
      'A teacher explains how plants grow.',
    ],
    [
      ['Siembro una semilla en la tierra.', 'I plant a seed in the soil.'],
      ['Riego las plantas cada día.', 'I water the plants every day.'],
    ],
    [
      {
        heading: 'La planta',
        table: vocab(
          [
            ['🌱', 'la semilla', 'seed', 'buto'],
            ['🌿', 'la hoja', 'leaf', 'dahon'],
            ['🌸', 'la flor', 'flower', 'bulaklak'],
            ['🥕', 'la raíz', 'root', 'ugat'],
            ['🌳', 'el tronco / el tallo', 'trunk / stem', 'puno / tangkay'],
            ['🍎', 'el fruto', 'fruit', 'bunga'],
            ['🌍', 'la tierra', 'soil / earth', 'lupa'],
            ['💧', 'el agua', 'water', 'tubig'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-meals-groups',
      'A1',
      'Meals of the day and food groups.',
      KINDER,
      'Desayuno huevos, almuerzo arroz con pollo, meriendo fruta y ceno sopa.',
      'I have eggs for breakfast, rice with chicken for lunch, a fruit snack and soup for dinner.',
      'Ang almusal ay el desayuno, ang tanghalian ay el almuerzo o la comida, ang meryenda ay la merienda, ang hapunan ay la cena. Ang verbs ay desayunar, almorzar, merendar, cenar.',
      'Meals: el desayuno (breakfast), el almuerzo (lunch; in Mexico la comida is the main midday meal), la merienda (snack), la cena (dinner). You can use them as verbs: desayuno, almuerzo (almorzar: o → ue), meriendo, ceno. Food groups: la carne, el pollo, el pescado, los lácteos (dairy), los cereales y granos, las frutas, las verduras.',
    ],
    [
      'meal verb + food',
      'Almorzar: almuerzo, almuerzas, almorzamos.',
      'Desayuno huevos.',
      'Almorzar and merendar are stem-changing: almuerzo, meriendo.',
    ],
    [
      'Which one is the snack?',
      ['la merienda', 'la cena', 'el desayuno'],
      'la merienda',
      'Merienda is a light snack between meals.',
      'A child talks about food at school.',
    ],
    [
      ['¿Qué desayunas?', 'What do you have for breakfast?'],
      ['Mi familia cena a las siete.', 'My family has dinner at seven.'],
    ],
    [
      {
        heading: 'Comidas y grupos',
        table: vocab(
          [
            ['🍳', 'el desayuno', 'breakfast', 'almusal'],
            ['🍛', 'el almuerzo / la comida', 'lunch', 'tanghalian'],
            ['🍪', 'la merienda', 'snack', 'meryenda'],
            ['🍽️', 'la cena', 'dinner', 'hapunan'],
            ['🥩', 'la carne', 'meat', 'karne'],
            ['🥚', 'el huevo', 'egg', 'itlog'],
            ['🥛', 'los lácteos', 'dairy', 'gatas at keso'],
            ['🍚', 'el arroz / los granos', 'rice / grains', 'kanin'],
            ['🥦', 'las verduras', 'vegetables', 'gulay'],
            ['🍎', 'las frutas', 'fruits', 'prutas'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-snacks-sweets',
      'A1',
      'Snacks, sweets and drinks.',
      KINDER,
      'Me gustan las galletas, el helado y las palomitas, pero tomo jugo de naranja.',
      'I like cookies, ice cream and popcorn, but I drink orange juice.',
      'Ang cookie ay la galleta, ang ice cream ay el helado, ang popcorn ay las palomitas, ang kendi ay el dulce. Pagkatapos ng me gustan, plural ang pangalan.',
      'Kids’ favorites: la galleta (cookie), el helado (ice cream), el dulce (candy), el chocolate, las palomitas (popcorn), las papas fritas (chips / fries), la gelatina (jello), el jugo (juice), el refresco (soda). Use me gusta + singular, me gustan + plural: me gusta el helado, me gustan las galletas.',
    ],
    [
      'me gusta / me gustan + food',
      'Plural food, gustan: me gustan las galletas.',
      '¿Quieres un dulce?',
      'Potato chips are papitas or papas fritas in Mexico and patatas fritas in Spain.',
    ],
    [
      'I like ice cream.',
      ['Me gusta el helado.', 'Me gustan el helado.', 'Me gusto el helado.'],
      'Me gusta el helado.',
      'Helado is singular, so gusta.',
      'A friend offers a treat.',
    ],
    [
      ['No tomo refresco por la noche.', 'I do not drink soda at night.'],
      ['¿Quieres una galleta de chocolate?', 'Do you want a chocolate cookie?'],
    ],
    [
      {
        heading: 'Antojitos',
        table: vocab(
          [
            ['🍪', 'la galleta', 'cookie', 'cookie'],
            ['🍦', 'el helado', 'ice cream', 'sorbetes'],
            ['🍬', 'el dulce', 'candy', 'kendi'],
            ['🍫', 'el chocolate', 'chocolate', 'tsokolate'],
            ['🍿', 'las palomitas', 'popcorn', 'popcorn'],
            ['🍟', 'las papas fritas', 'chips / fries', 'french fries'],
            ['🧃', 'el jugo', 'juice', 'juice'],
            ['🥤', 'el refresco', 'soda', 'soft drink'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-nursery-songs',
      'A1',
      'Songs every child sings.',
      KINDER,
      'Los pollitos dicen pío, pío, pío; cuando tienen hambre, cuando tienen frío.',
      'The little chicks say peep, peep, peep, when they are hungry, when they are cold.',
      'Maraming bata ang natututo sa kanta: Los pollitos dicen, Arroz con leche, La araña pequeñita, De colores. Ang pag-uulit ay tumutulong sa memorya at tunog.',
      'Children learn language through songs. Traditional favorites: Los pollitos dicen, Arroz con leche, De colores, La araña pequeñita (the itsy-bitsy spider) and Cumpleaños feliz. They repeat simple patterns: dicen, tienen, quiero. Sing them out loud; rhythm helps your memory and your accent.',
    ],
    [
      'repeat + rhythm',
      'Songs repeat patterns, so they stick.',
      'Pío, pío, pío.',
      'Look up the full lyrics and sing along with a recording. Do it a few times a week.',
    ],
    [
      'Which song is about chicks?',
      ['Los pollitos dicen', 'Arroz con leche', 'De colores'],
      'Los pollitos dicen',
      'Pollitos are baby chicks.',
      'A teacher plays a song for the class.',
    ],
    [
      ['La araña pequeñita subió, subió, subió.', 'The itsy-bitsy spider climbed up, up, up.'],
      ['De colores se visten los campos.', 'The fields dress in colors.'],
    ],
    [
      {
        heading: 'Canciones',
        table: grid(
          ['Song', 'First line', 'English'],
          [
            [
              'Los pollitos dicen',
              'Los pollitos dicen pío, pío, pío',
              'The chicks say peep, peep, peep',
            ],
            [
              'Arroz con leche',
              'Arroz con leche, me quiero casar',
              'Rice pudding, I want to marry',
            ],
            ['De colores', 'De colores se visten los campos', 'The fields dress in colors'],
            [
              'La araña pequeñita',
              'La araña pequeñita subió, subió, subió',
              'The itsy-bitsy spider climbed up',
            ],
            [
              'Cumpleaños feliz',
              'Cumpleaños feliz, te deseamos a ti',
              'Happy birthday, we wish you',
            ],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-ask-teacher',
      'A1',
      'Asking the teacher: bathroom, repeat, meaning.',
      KINDER,
      'Maestra, ¿puedo ir al baño? No entiendo; ¿qué significa esta palabra?',
      'Teacher, may I go to the bathroom? I do not understand; what does this word mean?',
      'Mga tanong sa klase: ¿puedo ir al baño? (pwede ba akong pumunta sa banyo), no entiendo (hindi ko maintindihan), ¿qué significa…? (ano ang ibig sabihin ng…).',
      'Useful class questions: ¿Puedo ir al baño? (may I go to the bathroom?), ¿Puede repetir, por favor? (can you repeat?), No entiendo (I do not understand), ¿Qué significa…? (what does … mean?), ¿Cómo se dice … en español? (how do you say … in Spanish?), Tengo una pregunta (I have a question).',
    ],
    [
      '¿puedo + infinitive?',
      'Puedo + infinitive asks permission.',
      '¿Cómo se dice…?',
      'Use maestro / maestra in Latin America and profe as a friendly short form.',
    ],
    [
      'How do you ask "how do you say book in Spanish?"',
      [
        '¿Cómo se dice "book" en español?',
        '¿Qué dice "book" en español?',
        '¿Cómo dices "book" español?',
      ],
      '¿Cómo se dice "book" en español?',
      'Cómo se dice … en español? is the standard question.',
      'You are not sure of a word in class.',
    ],
    [
      ['Tengo una pregunta, profe.', 'I have a question, teacher.'],
      ['¿Puede hablar más despacio?', 'Can you speak more slowly?'],
    ],
    [
      {
        heading: 'En clase',
        table: grid(
          ['Spanish', 'English'],
          [
            ['¿Puedo ir al baño?', 'May I go to the bathroom?'],
            ['No entiendo.', 'I do not understand.'],
            ['¿Qué significa…?', 'What does … mean?'],
            ['¿Cómo se dice … en español?', 'How do you say … in Spanish?'],
            ['¿Puede repetir, por favor?', 'Can you repeat, please?'],
            ['Tengo una pregunta.', 'I have a question.'],
            ['No sé.', 'I do not know.'],
          ],
        ),
      },
    ],
  ),
];
