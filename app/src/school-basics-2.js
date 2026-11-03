import { L } from './home-world-lessons.js';
import { vocab } from './little-learner-lessons.js';
import { grid } from './school-basics-1.js';

// School basics, part 2: elementary and high-school topics (directions, math, geography,
// family tree, space, money, music and sports, grammar terms, science words).
const ELEM = 'School basics: elementary';
const HIGH = 'School basics: high school';

export const schoolBasics2 = [
  L(
    [
      'sb-directions-streets',
      'A2',
      'Giving directions: turn, go straight, cross.',
      ELEM,
      'Sigue derecho dos cuadras, dobla a la derecha, cruza la calle y está en la esquina.',
      'Go straight two blocks, turn right, cross the street and it is on the corner.',
      'Mga direksyon: sigue derecho (diretso), dobla a la derecha (kanan), dobla a la izquierda (kaliwa), cruza la calle (tumawid), la cuadra (block). Sa magalang na tao, siga, doble, cruce.',
      'To give directions use commands: sigue derecho (keep going straight), dobla / gira a la derecha / izquierda (turn), cruza la calle (cross the street). A block is una cuadra (Latin America) or una manzana (Spain). Add en la esquina (on the corner), al final de (at the end of), a dos cuadras (two blocks away). With usted: siga, doble, cruce.',
    ],
    [
      'command + place',
      'Sigue / dobla / cruza for tú; siga / doble / cruce for usted.',
      'Está a dos cuadras.',
      'Compass points: el norte, el sur, el este, el oeste. Use hacia el norte (toward the north).',
    ],
    [
      'Which means "turn right"?',
      ['Dobla a la derecha.', 'Cruza la calle.', 'Sigue derecho.'],
      'Dobla a la derecha.',
      'Doblar is to turn; derecha is right.',
      'A stranger asks you the way.',
    ],
    [
      ['El banco está al final de la calle.', 'The bank is at the end of the street.'],
      ['Disculpe, ¿cómo llego al parque?', 'Excuse me, how do I get to the park?'],
    ],
    [
      {
        heading: 'Las direcciones',
        table: vocab(
          [
            ['⬆️', 'sigue derecho', 'go straight', 'dumiretso'],
            ['↪️', 'dobla a la derecha', 'turn right', 'kumanan'],
            ['↩️', 'dobla a la izquierda', 'turn left', 'kumaliwa'],
            ['🚸', 'cruza la calle', 'cross the street', 'tumawid'],
            ['🧱', 'la cuadra / la manzana', 'block', 'bloke'],
            ['📍', 'en la esquina', 'on the corner', 'sa kanto'],
            [
              '🧭',
              'el norte, el sur, el este, el oeste',
              'north, south, east, west',
              'hilaga, timog, silangan, kanluran',
            ],
            ['🗺️', 'el mapa', 'map', 'mapa'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-math-basics',
      'A2',
      'Math out loud: plus, minus, times, divided by.',
      ELEM,
      'Dos más tres son cinco, diez menos cuatro son seis y tres por cuatro son doce.',
      'Two plus three is five, ten minus four is six and three times four is twelve.',
      'Sa math: más (plus), menos (minus), por (times), entre (divided by), son o es igual a (equals). Ang mitad ay kalahati at ang doble ay dalawang beses.',
      'Say math with more / menos / por / entre: dos más tres son cinco. Use son after the numbers (or es igual a). Words: la suma (addition), la resta (subtraction), la multiplicación, la división, la mitad (half), el doble (double), un tercio (a third), un cuarto (a quarter), el por ciento (percent).',
    ],
    [
      'number + operator + number + son + result',
      'Más, menos, por, entre.',
      'Dos más dos son cuatro.',
      'Use es for results of one (uno más uno es dos is acceptable) but son is the safest everyday choice.',
    ],
    [
      'How do you say "ten divided by two is five"?',
      ['Diez entre dos son cinco.', 'Diez por dos son cinco.', 'Diez menos dos son cinco.'],
      'Diez entre dos son cinco.',
      'Entre means divided by. Por means times.',
      'A teacher asks a quick arithmetic question.',
    ],
    [
      ['La mitad de veinte es diez.', 'Half of twenty is ten.'],
      ['El diez por ciento de cien es diez.', 'Ten percent of one hundred is ten.'],
    ],
    [
      {
        heading: 'Las matemáticas en voz alta',
        table: grid(
          ['Symbol', 'Spanish', 'Example'],
          [
            ['+', 'más', '2 + 3 = cinco: dos más tres son cinco'],
            ['−', 'menos', '10 − 4: diez menos cuatro son seis'],
            ['×', 'por', '3 × 4: tres por cuatro son doce'],
            ['÷', 'entre / dividido entre', '10 ÷ 2: diez entre dos son cinco'],
            ['=', 'son / es igual a', 'dos más dos es igual a cuatro'],
            ['½', 'la mitad / un medio', 'la mitad de ocho es cuatro'],
            ['%', 'por ciento', 'el cincuenta por ciento'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-continents-countries',
      'A2',
      'Continents, oceans, countries and nationalities.',
      ELEM,
      'Soy de Filipinas, que está en Asia; mi amigo es mexicano y su esposa es colombiana.',
      'I am from the Philippines, which is in Asia; my friend is Mexican and his wife is Colombian.',
      'Ang nationality ay hindi capital sa Spanish: filipino, mexicano, colombiano. Nagbabago sa kasarian: filipino/filipina. Ang Filipinas ay ang Spanish name ng Pilipinas.',
      'Continents: África, América (del Norte, Central, del Sur), Asia, Europa, Oceanía, la Antártida. Oceans: el océano Pacífico, Atlántico, Índico, Ártico. Country names are capitalized but nationalities are not: Filipinas → filipino / filipina; México → mexicano; Estados Unidos → estadounidense; España → español. Use soy + nationality: soy filipino.',
    ],
    [
      'soy + nationality / soy de + country',
      'Nationalities are lowercase and agree: filipino / filipina.',
      'Soy de Filipinas.',
      'Adjectives ending in -e or -ense (estadounidense, canadiense) have one form for men and women.',
    ],
    [
      'A woman from the Philippines says:',
      ['Soy filipina.', 'Soy Filipina.', 'Soy filipino.'],
      'Soy filipina.',
      'Nationalities are lowercase and agree with a woman: filipina.',
      'You meet people from different countries.',
    ],
    [
      ['El océano Pacífico es muy grande.', 'The Pacific Ocean is very big.'],
      ['Mi abuela es española.', 'My grandmother is Spanish.'],
    ],
    [
      {
        heading: 'El mundo',
        table: grid(
          ['Country', 'Nationality (m / f)', 'Continent'],
          [
            ['Filipinas', 'filipino / filipina', 'Asia'],
            ['México', 'mexicano / mexicana', 'América del Norte'],
            ['Estados Unidos', 'estadounidense', 'América del Norte'],
            ['Colombia', 'colombiano / colombiana', 'América del Sur'],
            ['Argentina', 'argentino / argentina', 'América del Sur'],
            ['España', 'español / española', 'Europa'],
            ['China', 'chino / china', 'Asia'],
            ['Nigeria', 'nigeriano / nigeriana', 'África'],
            ['Australia', 'australiano / australiana', 'Oceanía'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-family-tree',
      'A2',
      'The whole family tree.',
      ELEM,
      'Mi tía y mi tío son los padres de mi primo; mi suegra vive con mi cuñada.',
      'My aunt and uncle are my cousin’s parents; my mother-in-law lives with my sister-in-law.',
      'Ang tío ay tiyo, ang tía ay tiya, ang primo ay pinsan, ang sobrino ay pamangkin. Ang suegro/suegra ay biyenan at ang cuñado/cuñada ay bayaw/hipag.',
      'Beyond mamá and papá: los abuelos (grandparents), los tíos (aunts and uncles), los primos (cousins), los sobrinos (nieces and nephews). In-laws: el suegro / la suegra, el yerno, la nuera, el cuñado / la cuñada. Step relatives: el padrastro, la madrastra, el hermanastro. Godparents: el padrino / la madrina. Plural masculine covers mixed groups: mis tíos can be aunts and uncles.',
    ],
    [
      'mi + family word',
      'Masculine plural covers both: los tíos, los abuelos.',
      'Los tíos = aunts and uncles.',
      'To be specific say mis tías (only aunts) or mis tíos varones.',
    ],
    [
      'Which one means mother-in-law?',
      ['la suegra', 'la nuera', 'la cuñada'],
      'la suegra',
      'Suegra is mother-in-law. Nuera is daughter-in-law.',
      'You explain your family at a gathering.',
    ],
    [
      ['Mi padrino me regaló un reloj.', 'My godfather gave me a watch.'],
      ['Mi sobrina tiene cinco años.', 'My niece is five years old.'],
    ],
    [
      {
        heading: 'La familia',
        table: vocab(
          [
            ['👵', 'los abuelos', 'grandparents', 'lolo at lola'],
            ['🧑', 'el tío / la tía', 'uncle / aunt', 'tiyo / tiya'],
            ['🧒', 'el primo / la prima', 'cousin', 'pinsan'],
            ['👶', 'el sobrino / la sobrina', 'nephew / niece', 'pamangkin'],
            ['💍', 'el suegro / la suegra', 'father- / mother-in-law', 'biyenan'],
            ['🤝', 'el cuñado / la cuñada', 'brother- / sister-in-law', 'bayaw / hipag'],
            ['👨', 'el yerno / la nuera', 'son- / daughter-in-law', 'manugang'],
            ['🧑‍🍼', 'el padrastro / la madrastra', 'stepfather / stepmother', 'amain / ina-inahan'],
            ['⛪', 'el padrino / la madrina', 'godfather / godmother', 'ninong / ninang'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-space-planets',
      'A2',
      'The solar system.',
      ELEM,
      'La Tierra gira alrededor del Sol, y la Luna gira alrededor de la Tierra.',
      'The Earth goes around the Sun, and the Moon goes around the Earth.',
      'Ang planeta ay el planeta. Ang Earth ay la Tierra, ang Sun ay el Sol, ang Moon ay la Luna. Ang girar ay umikot.',
      'Our solar system: el Sol, y los ocho planetas: Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Girar alrededor de is to orbit. In astronomy Sol, Luna and Tierra are often capitalized. Other words: la estrella, la galaxia, el cohete (rocket), el astronauta, la órbita.',
    ],
    [
      'girar alrededor de + body',
      'Girar alrededor de means to orbit.',
      'La Tierra es el tercer planeta.',
      'Planet names stay capitalized: Marte, Júpiter. Use el before them only when you add an adjective: el planeta rojo.',
    ],
    [
      'Which planet is "Marte"?',
      ['Mars', 'Mercury', 'Jupiter'],
      'Mars',
      'Marte is Mars. Júpiter is Jupiter.',
      'A science lesson about space.',
    ],
    [
      ['El astronauta viaja en un cohete.', 'The astronaut travels in a rocket.'],
      ['Saturno tiene anillos.', 'Saturn has rings.'],
    ],
    [
      {
        heading: 'El sistema solar',
        table: vocab(
          [
            ['☀️', 'el Sol', 'Sun', 'Araw'],
            ['☿', 'Mercurio', 'Mercury', 'Merkuryo'],
            ['♀️', 'Venus', 'Venus', 'Benus'],
            ['🌍', 'la Tierra', 'Earth', 'Daigdig'],
            ['🔴', 'Marte', 'Mars', 'Marte'],
            ['🟠', 'Júpiter', 'Jupiter', 'Hupiter'],
            ['🪐', 'Saturno', 'Saturn', 'Saturno'],
            ['🔵', 'Urano', 'Uranus', 'Urano'],
            ['🌊', 'Neptuno', 'Neptune', 'Neptuno'],
            ['🌙', 'la Luna', 'Moon', 'Buwan'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-money-coins',
      'A2',
      'Coins, bills and change.',
      ELEM,
      'Esta moneda vale diez centavos; con un billete de veinte pesos me dan el cambio.',
      'This coin is worth ten cents; with a twenty-peso bill they give me change.',
      'Ang barya ay la moneda, ang perang papel ay el billete, ang sukli ay el cambio. Ang cuesta ay presyo at ang vale ay halaga.',
      'Money words: la moneda (coin), el billete (bill), el centavo (cent), el peso, el dólar, el euro, el cambio (change). ¿Cuánto cuesta? asks the price; cuesta / cuestan answer it. Valer is to be worth: vale diez centavos. Caro is expensive and barato is cheap. Pagar en efectivo is to pay cash and con tarjeta is by card.',
    ],
    [
      '¿cuánto cuesta / cuestan?',
      'Cuesta for one thing, cuestan for many.',
      'Es barato, es caro.',
      'The same word, cambio, means change (coins back) and exchange: el cambio de dólares.',
    ],
    [
      'Which means "change" (money back)?',
      ['el cambio', 'el billete', 'la moneda'],
      'el cambio',
      'El cambio is the change you get back.',
      'A child buys candy.',
    ],
    [
      ['¿Cuánto cuestan los dulces?', 'How much are the candies?'],
      ['Pago en efectivo, no con tarjeta.', 'I pay in cash, not by card.'],
    ],
    [
      {
        heading: 'El dinero',
        table: vocab(
          [
            ['🪙', 'la moneda', 'coin', 'barya'],
            ['💵', 'el billete', 'bill', 'perang papel'],
            ['🔟', 'el centavo', 'cent', 'sentimo'],
            ['💱', 'el cambio', 'change / exchange', 'sukli / palit'],
            ['💳', 'la tarjeta', 'card', 'card'],
            ['💰', 'el efectivo', 'cash', 'cash'],
            ['🏷️', 'caro / barato', 'expensive / cheap', 'mahal / mura'],
            ['❓', '¿cuánto cuesta?', 'how much is it?', 'magkano?'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-music-sports',
      'A2',
      'Music and sports.',
      ELEM,
      'Mi hermano toca la guitarra en una banda, y yo juego baloncesto en el equipo de la escuela.',
      'My brother plays guitar in a band, and I play basketball on the school team.',
      'Gamitin ang tocar para sa instrumento: toco la guitarra. Gamitin ang jugar para sa laro: juego baloncesto. Ang team ay el equipo.',
      'Use tocar for instruments (toco la guitarra, toca el piano) and jugar for sports and games (juego fútbol, juega béisbol). Instruments: la guitarra, el piano, el tambor, la flauta, el violín, la trompeta, las maracas. Sports: el fútbol, el béisbol, el baloncesto, el voleibol, la natación, el tenis. Team words: el equipo, el jugador, el gol, el partido, el árbitro.',
    ],
    [
      'tocar + instrument / jugar + sport',
      'Tocar = play an instrument. Jugar = play a sport.',
      'Toco el piano; juego fútbol.',
      'Jugar is stem-changing (juego, juegas, juega, jugamos, juegan). Tocar is regular.',
    ],
    [
      'Which verb fits? Yo ___ el piano.',
      ['toco', 'juego', 'hago'],
      'toco',
      'Use tocar for instruments.',
      'You tell a friend about your hobbies.',
    ],
    [
      ['Ganamos el partido de ayer.', 'We won yesterday’s game.'],
      ['Mi prima toca el violín muy bien.', 'My cousin plays the violin very well.'],
    ],
    [
      {
        heading: 'Música y deportes',
        table: vocab(
          [
            ['🎸', 'la guitarra', 'guitar', 'gitara'],
            ['🎹', 'el piano', 'piano', 'piyano'],
            ['🥁', 'el tambor', 'drum', 'tambol'],
            ['🎻', 'el violín', 'violin', 'byolin'],
            ['🎺', 'la trompeta', 'trumpet', 'trumpeta'],
            ['⚽', 'el fútbol', 'soccer', 'soccer'],
            ['⚾', 'el béisbol', 'baseball', 'baseball'],
            ['🏀', 'el baloncesto / el básquet', 'basketball', 'basketball'],
            ['🏐', 'el voleibol', 'volleyball', 'volleyball'],
            ['🏊', 'la natación', 'swimming', 'paglangoy'],
          ],
          ['', 'Español', 'English', 'Tagalog'],
        ),
      },
    ],
  ),
  L(
    [
      'sb-grammar-terms',
      'B1',
      'Grammar words in Spanish.',
      HIGH,
      'El sustantivo nombra, el verbo muestra la acción y el adjetivo describe al sustantivo.',
      'The noun names, the verb shows the action and the adjective describes the noun.',
      'Mga terminong panggramatika: el sustantivo (pangngalan), el verbo (pandiwa), el adjetivo (pang-uri), el adverbio (pang-abay), el pronombre (panghalip), el artículo, la oración (pangungusap).',
      'When you study in Spanish, you meet grammar words: el sustantivo (noun), el verbo (verb), el adjetivo (adjective), el adverbio (adverb), el pronombre (pronoun), el artículo (article), la preposición, la conjunción, la oración (sentence), el sujeto (subject), el predicado (predicate). For writing: la mayúscula (capital), la minúscula, el punto, la coma, el acento, la sílaba.',
    ],
    [
      'grammar term = Spanish word',
      'Learn the term so you can read a grammar book.',
      'La oración tiene sujeto y predicado.',
      'Spanish uses ¿ ? and ¡ ! at both ends; call them los signos de interrogación y de exclamación.',
    ],
    [
      'Which word means "adjective"?',
      ['el adjetivo', 'el adverbio', 'el sustantivo'],
      'el adjetivo',
      'Adjetivo is adjective. Adverbio is adverb.',
      'You read a Spanish grammar explanation.',
    ],
    [
      ['Una oración empieza con mayúscula.', 'A sentence starts with a capital letter.'],
      ['Esta palabra tiene tres sílabas.', 'This word has three syllables.'],
    ],
    [
      {
        heading: 'La gramática',
        table: grid(
          ['Spanish', 'English', 'Example'],
          [
            ['el sustantivo', 'noun', 'casa, perro'],
            ['el verbo', 'verb', 'correr, hablar'],
            ['el adjetivo', 'adjective', 'grande, bonito'],
            ['el adverbio', 'adverb', 'rápidamente, muy'],
            ['el pronombre', 'pronoun', 'yo, tú, él'],
            ['el artículo', 'article', 'el, la, un, una'],
            ['la preposición', 'preposition', 'en, de, con'],
            ['la conjunción', 'conjunction', 'y, pero, porque'],
            ['el sujeto', 'subject', 'Ana canta.'],
            ['el predicado', 'predicate', 'canta bien.'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'sb-science-words',
      'B1',
      'Science words: cells, energy, states of matter.',
      HIGH,
      'La materia puede ser sólida, líquida o gaseosa, y el agua se evapora con el calor.',
      'Matter can be solid, liquid or gaseous, and water evaporates with heat.',
      'Mga salita sa agham: la célula, el átomo, la energía, la gravedad, el experimento. Ang tatlong estado ng matter ay sólido, líquido, gaseoso.',
      'Basic science vocabulary: la célula (cell), el átomo (atom), la energía, la gravedad, el experimento, la fotosíntesis, la materia (matter). States of matter: sólido, líquido, gaseoso. Water cycle: la evaporación, la condensación, la precipitación. Verbs: evaporarse, congelarse (to freeze), derretirse (to melt), hervir (to boil).',
    ],
    [
      'matter + state / verb of change',
      'Water freezes (se congela), melts (se derrite), boils (hierve).',
      'El agua hierve a cien grados.',
      'Hervir is stem-changing: hiervo, hierves, hierve. Derretirse changes e → i: se derrite.',
    ],
    [
      'Which word means "cell"?',
      ['la célula', 'el átomo', 'la energía'],
      'la célula',
      'Célula is the cell. Átomo is atom.',
      'A science class in Spanish.',
    ],
    [
      ['El hielo se derrite con el sol.', 'Ice melts in the sun.'],
      ['Las plantas hacen la fotosíntesis.', 'Plants do photosynthesis.'],
    ],
    [
      {
        heading: 'Ciencias',
        table: grid(
          ['Spanish', 'English', 'Example'],
          [
            ['la célula', 'cell', 'Todos los seres vivos tienen células.'],
            ['el átomo', 'atom', 'El átomo es muy pequeño.'],
            ['la energía', 'energy', 'El sol da energía.'],
            ['la gravedad', 'gravity', 'La gravedad nos mantiene en la Tierra.'],
            ['sólido / líquido / gaseoso', 'solid / liquid / gas', 'El hielo es sólido.'],
            ['la evaporación', 'evaporation', 'La evaporación forma nubes.'],
            ['el experimento', 'experiment', 'Hacemos un experimento.'],
            ['la fotosíntesis', 'photosynthesis', 'Las plantas hacen fotosíntesis.'],
          ],
        ),
      },
    ],
  ),
];
