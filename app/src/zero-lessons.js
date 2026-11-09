import { L } from './home-world-lessons.js';
import { grid } from './school-basics-1.js';
import { stickBlock } from './memory-aids.js';

// Start here: lessons for people who know no Spanish at all. Sounds, stress, cognates, gender,
// pronouns, verb families, sentence order, numbers, question words and how to study.
export const ZERO = 'Start here: zero Spanish';

export const zeroLessons = [
  L(
    [
      'zk-vowels',
      'A1',
      'The five Spanish vowels.',
      ZERO,
      'Hola, amigo. ¿Cómo estás? Muy bien, gracias.',
      'Hello, friend. How are you? Very well, thank you.',
      'Lima lang ang patinig sa Espanyol at laging pareho ang tunog: a (ah), e (eh), i (ee), o (oh), u (oo). Hindi sila nagbabago ayon sa salita, kaya madali ang pagbasa.',
      'Spanish has only five vowel sounds, and each letter is always pronounced the same way. A = ah, E = eh, I = ee, O = oh, U = oo. English changes its vowels all the time; Spanish does not. Learn these five sounds and you can read any Spanish word aloud, even a new one.',
    ],
    [
      'a · e · i · o · u = ah · eh · ee · oh · oo',
      'Short, clean vowels. Do not glide into a second sound.',
      'Say "oh", not "ow". In Spanish, o stays pure.',
      'English speakers slide vowels (go becomes "goh-oo"). Keep Spanish vowels short and steady, like a single musical note. Your mouth shape should not change while you say the vowel.',
    ],
    [
      'How do you say the letter e in Spanish?',
      ['eh', 'ee', 'ay'],
      'eh',
      'E is always "eh". The sound "ee" belongs to the letter i.',
      'A teacher is teaching the alphabet.',
    ],
    [
      ['La casa es mía.', 'The house is mine.'],
      ['Uno, dos, tres.', 'One, two, three.'],
    ],
    [
      {
        heading: 'Las cinco vocales',
        table: grid(
          ['Letter', 'Sound', 'Example', 'English'],
          [
            ['a', 'ah', 'casa', 'house'],
            ['e', 'eh', 'mesa', 'table'],
            ['i', 'ee', 'sí', 'yes'],
            ['o', 'oh', 'no', 'no'],
            ['u', 'oo', 'uno', 'one'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'Remember the song ah-eh-ee-oh-oo. Sing it once before each practice session.',
        practice:
          'Read the example words aloud, slowly. Then record yourself and compare with the audio.',
        mistake: 'Do not turn o into "ow" or e into "ay". Keep each vowel short and pure.',
      }),
    ],
  ),
  L(
    [
      'zk-consonants',
      'A1',
      'Tricky consonants: h, j, ll, ñ, rr, c, g, qu.',
      ZERO,
      'El niño de Jalisco bebe agua con hielo y mira la lluvia.',
      'The boy from Jalisco drinks water with ice and watches the rain.',
      'Ang h ay tahimik. Ang j ay parang malakas na h. Ang ñ ay parang ny sa "kanyon". Ang rr ay mabilis na pag-ikot ng dila. Ang ll ay karaniwang tunog y.',
      'Most Spanish consonants are like English. The ones that are different: H is silent. J sounds like a strong h (jamón). LL and Y sound like English y in most regions. Ñ sounds like ny (niño). RR is a rolled r. C is k before a, o, u (casa) and s (or th in Spain) before e, i (cena). G is hard before a, o, u (gato) and like a strong h before e, i (gente). QU is k (queso). V sounds like b.',
    ],
    [
      'h = silent · j = strong h · ñ = ny',
      'A few letters act differently from English. Learn them once.',
      'Say "ola" for hola and "ha-món" for jamón.',
      'Spanish spelling is nearly phonetic. If you know the 8 tricky letters, you can read almost anything. Practice the rolled rr with words like perro and carro; if it is hard, relax your tongue and let air do the work.',
    ],
    [
      'Which letter is silent in Spanish?',
      ['h', 'j', 'g'],
      'h',
      'H is silent: hola sounds like "ola". J is a strong h and g can be hard or soft.',
      'You read a street sign aloud.',
    ],
    [
      ['El queso está en la mesa.', 'The cheese is on the table.'],
      ['Mañana voy a Girona.', 'Tomorrow I am going to Girona.'],
    ],
    [
      {
        heading: 'Letras que cambian',
        table: grid(
          ['Letter', 'Sound', 'Example', 'English'],
          [
            ['h', 'silent', 'hola', 'hello'],
            ['j', 'strong h', 'jamón', 'ham'],
            ['ll / y', 'y (as in yes)', 'lluvia', 'rain'],
            ['ñ', 'ny', 'niño', 'boy'],
            ['rr', 'rolled r', 'perro', 'dog'],
            ['c + a/o/u', 'k', 'casa', 'house'],
            ['c + e/i', 's (th in Spain)', 'cena', 'dinner'],
            ['g + e/i', 'strong h', 'gente', 'people'],
            ['qu', 'k', 'queso', 'cheese'],
            ['v', 'b', 'vaca', 'cow'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'Think of the pairs: H hides, J jumps (to a strong h), Ñ nods ("ny"), RR rolls.',
        practice: 'Say one word from each row in the table once a day for a week.',
        mistake: 'Do not say the h in hola or hacer. Spanish never pronounces it.',
      }),
    ],
  ),
  L(
    [
      'zk-stress-accents',
      'A1',
      'Stress and accent marks.',
      ZERO,
      'El teléfono de mi habitación está en la mesa.',
      'The telephone in my room is on the table.',
      'May simpleng tuntunin sa diin: kapag nagtatapos sa patinig, n o s, diin sa pangalawa mula huli. Kapag sa ibang katinig, diin sa huli. Ang accent mark ay palatandaan kapag lumabag sa tuntunin.',
      'Rule 1: words ending in a vowel, n or s stress the second-to-last syllable (ca-sa, ha-blan). Rule 2: words ending in any other consonant stress the last syllable (ha-blar, ciu-dad). If a word breaks the rule, it gets an accent mark on the stressed vowel (te-lé-fo-no, ha-bi-ta-ción). Accent marks also tell apart pairs like si / sí and el / él.',
    ],
    [
      'vowel, n, s → second-to-last · else → last',
      'Follow the rule; the accent mark marks the exception.',
      'Habitación has a mark because it breaks rule 1.',
      'When you see an accent mark, put your stress right on that vowel. When you do not see one, the rule tells you where the stress goes. You never need to guess.',
    ],
    [
      'Where is the stress in "hablar"?',
      ['the last syllable', 'the first syllable', 'the middle'],
      'the last syllable',
      'Hablar ends in r, so rule 2 stresses the last syllable: ha-BLAR.',
      'You read a new verb aloud.',
    ],
    [
      ['Mi número de teléfono es nuevo.', 'My phone number is new.'],
      ['Mamá está en la oficina.', 'Mom is in the office.'],
    ],
    [
      {
        heading: 'Reglas de acentuación',
        table: grid(
          ['Rule', 'Example', 'Stress'],
          [
            ['ends in vowel / n / s', 'casa, hablan, lunes', 'second-to-last'],
            ['ends in other consonant', 'hablar, ciudad', 'last'],
            ['breaks the rule → mark', 'teléfono, canción', 'on the mark'],
            ['si vs sí', 'si (if) / sí (yes)', 'meaning changes'],
            ['el vs él', 'el (the) / él (he)', 'meaning changes'],
            ['tu vs tú', 'tu (your) / tú (you)', 'meaning changes'],
          ],
          1,
        ),
      },
      stickBlock({
        trick: 'Memorize "vowel-N-S = second-to-last". It covers about 80% of Spanish words.',
        practice:
          'Pick five words from your day and say them with the right stress. Check them in the dictionary.',
        mistake:
          'Do not move the stress in the plural by habit: examen → exámenes keeps the stress on the same vowel.',
      }),
    ],
  ),
  L(
    [
      'zk-cognates',
      'A1',
      'Words you already know: cognates.',
      ZERO,
      'La información es importante para la educación y la comunicación.',
      'Information is important for education and communication.',
      'Maraming salitang Espanyol ay kahawig ng Ingles at Tagalog dahil sa pinagmulang Latin. -tion ay nagiging -ción, -ty ay -dad, -ous ay -oso, at -ly ay -mente.',
      'Thousands of Spanish words look like English because both come from Latin. Learn the patterns: -tion → -ción (information → información), -ty → -dad (university → universidad), -ous → -oso (famous → famoso), -ly → -mente (finally → finalmente). Beware of false friends: embarazada means pregnant, not embarrassed.',
    ],
    [
      '-tion → -ción · -ty → -dad · -ly → -mente',
      'Change the ending and you often have a Spanish word.',
      'Nation → nación. Reality → realidad.',
      'Most words in -ción are feminine (la nación) and most in -dad are feminine (la ciudad). Check a dictionary for false friends before you trust a look-alike.',
    ],
    [
      'What is "universidad"?',
      ['university', 'universe', 'unity'],
      'university',
      'The ending -ty becomes -dad: university → universidad.',
      'You see a sign near a campus.',
    ],
    [
      ['La televisión es importante para la familia.', 'Television is important for the family.'],
      ['Finalmente, el hospital está abierto.', 'Finally, the hospital is open.'],
    ],
    [
      {
        heading: 'Patrones de cognados',
        table: grid(
          ['English ending', 'Spanish ending', 'Example'],
          [
            ['-tion', '-ción', 'information → información'],
            ['-ty', '-dad', 'university → universidad'],
            ['-ous', '-oso', 'famous → famoso'],
            ['-ly', '-mente', 'finally → finalmente'],
            ['-ic', '-ico', 'fantastic → fantástico'],
            ['-ist', '-ista', 'tourist → turista'],
            ['-ment', '-mento', 'moment → momento'],
            ['-ant / -ent', '-ante / -ente', 'important → importante'],
          ],
          2,
        ),
      },
      stickBlock({
        trick:
          'Say the English word, then "Spanish it": change the ending using the table, say it with Spanish vowels.',
        practice: 'Make 10 new cognates from English words you use at work today.',
        mistake:
          'False friends exist: embarazada = pregnant, librería = bookstore, éxito = success, actual = current.',
      }),
    ],
  ),
  L(
    [
      'zk-first-words',
      'A1',
      'Your first 12 words.',
      ZERO,
      'Hola. Buenos días. Por favor. Gracias. Perdón. Adiós.',
      'Hello. Good morning. Please. Thank you. Sorry. Goodbye.',
      'Ito ang 12 salitang magagamit mo agad. Ang buenos días ay "magandang umaga". Ang por favor ay "pakiusap". Ang perdón ay "paumanhin". Gamitin ang mga ito araw-araw.',
      'These words cover most of what you need on day one. Hola (hello), buenos días (good morning), buenas tardes (good afternoon), buenas noches (good evening or night), adiós (goodbye), por favor (please), gracias (thank you), de nada (you are welcome), perdón (excuse me or sorry), lo siento (I am sorry), sí (yes), no (no). Say them out loud until they feel automatic.',
    ],
    [
      'greeting · please · thank you · sorry',
      'Twelve words give you most day-one needs.',
      'Perdón asks for attention; lo siento apologizes.',
      'Use perdón to get past someone or when you did not hear: ¿Perdón? Use lo siento when you are truly sorry about something. Greetings change by time of day: buenos días (morning), buenas tardes (afternoon), buenas noches (evening).',
    ],
    [
      'What do you say when you ask for something politely?',
      ['por favor', 'de nada', 'adiós'],
      'por favor',
      'Por favor means please. De nada replies to thanks and adiós means goodbye.',
      'You order a coffee.',
    ],
    [
      ['Buenas tardes. ¿Me ayuda, por favor?', 'Good afternoon. Can you help me, please?'],
      ['Lo siento mucho. Gracias.', 'I am very sorry. Thank you.'],
    ],
    [
      {
        heading: 'Doce palabras',
        table: grid(
          ['Spanish', 'Use', 'English'],
          [
            ['hola', 'any time', 'hello'],
            ['buenos días', 'morning', 'good morning'],
            ['buenas tardes', 'afternoon', 'good afternoon'],
            ['buenas noches', 'evening / night', 'good evening / night'],
            ['adiós', 'leaving', 'goodbye'],
            ['por favor', 'asking', 'please'],
            ['gracias', 'thanking', 'thank you'],
            ['de nada', 'reply to thanks', 'you are welcome'],
            ['perdón', 'excuse me', 'excuse me / sorry'],
            ['lo siento', 'apology', 'I am sorry'],
            ['sí', 'agree', 'yes'],
            ['no', 'refuse', 'no'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'Group them: greet (hola, días, tardes, noches, adiós), ask (por favor, perdón), answer (gracias, de nada, sí, no).',
        practice: 'Use three of these words with a real person today, even in a short chat.',
        mistake: 'Do not say gracias as a reply to gracias. Say de nada.',
      }),
    ],
  ),
  L(
    [
      'zk-gender-articles',
      'A1',
      'Masculine and feminine: el, la, un, una.',
      ZERO,
      'El libro es rojo y la casa es blanca; un amigo y una amiga.',
      'The book is red and the house is white; a (male) friend and a (female) friend.',
      'Lahat ng pangngalan sa Espanyol ay panlalaki o pambabae. El at un ay panlalaki; la at una ay pambabae. Karaniwan, -o ay panlalaki at -a ay pambabae.',
      'Every noun is masculine or feminine. The: el (masculine), la (feminine). A / an: un (masculine), una (feminine). Most nouns ending in -o are masculine (el libro) and most in -a are feminine (la casa). Exceptions to memorize: el día, el mapa, el problema, la mano. Always learn a noun with its article.',
    ],
    [
      'el / un + masculine · la / una + feminine',
      '-o is usually masculine; -a is usually feminine.',
      'El problema, la mano.',
      'Gender has nothing to do with meaning for objects: a table is feminine (la mesa) only because of grammar. For people and animals, gender follows the person: el amigo, la amiga.',
    ],
    [
      'Which article goes with "casa"?',
      ['la', 'el', 'un'],
      'la',
      'Casa is feminine: la casa.',
      'You label items in your room.',
    ],
    [
      ['Un perro y una gata.', 'A (male) dog and a (female) cat.'],
      ['El día es largo.', 'The day is long.'],
    ],
    [
      {
        heading: 'Género',
        table: grid(
          ['Article', 'Gender', 'Example', 'English'],
          [
            ['el', 'masculine, "the"', 'el libro', 'the book'],
            ['la', 'feminine, "the"', 'la casa', 'the house'],
            ['un', 'masculine, "a"', 'un amigo', 'a friend (m)'],
            ['una', 'feminine, "a"', 'una amiga', 'a friend (f)'],
            ['el (exception)', 'masculine ending -a', 'el mapa', 'the map'],
            ['la (exception)', 'feminine ending -o', 'la mano', 'the hand'],
          ],
          2,
        ),
      },
      stickBlock({
        trick: 'Think "L" for ladies: la, las. "El" and "un" are the masculine pair.',
        practice: 'Put sticky notes with el or la on ten objects at home.',
        mistake: 'Do not guess gender from meaning. Learn the article with the noun every time.',
      }),
    ],
  ),
  L(
    [
      'zk-subject-pronouns',
      'A1',
      'I, you, he, she: yo, tú, él, ella.',
      ZERO,
      'Yo hablo español, tú hablas inglés y ella habla portugués.',
      'I speak Spanish, you speak English and she speaks Portuguese.',
      'Ang yo ay ako, ang tú ay ikaw (impormal), ang él ay siya (lalaki), ang ella ay siya (babae). Madalas ay hindi na sinasabi ang panghalip dahil ang pandiwa ay nagpapakita na kung sino.',
      'Subject pronouns: yo (I), tú (you, informal), usted (you, formal), él (he), ella (she), nosotros (we), ellos / ellas (they). Spanish verb endings already show who is acting, so people usually drop the pronoun: Hablo español means I speak Spanish. Add the pronoun for contrast or emphasis: Yo hablo, tú escuchas.',
    ],
    [
      'drop the subject · the verb ending tells who',
      'Hablo = I speak. No need for yo.',
      'Use the pronoun only to stress or clarify.',
      'Use tú with friends and family. Use usted with older people, strangers and in formal places. In Spain vosotros is "you all"; in Latin America ustedes is "you all".',
    ],
    [
      'Which pronoun means "we"?',
      ['nosotros', 'ellos', 'ustedes'],
      'nosotros',
      'Nosotros means we. Ellos means they; ustedes means you all.',
      'You introduce yourself and your friends.',
    ],
    [
      ['¿Hablas español? Sí, hablo un poco.', 'Do you speak Spanish? Yes, I speak a little.'],
      ['Él trabaja y ella estudia.', 'He works and she studies.'],
    ],
    [
      {
        heading: 'Los pronombres',
        table: grid(
          ['Pronoun', 'Meaning', 'Verb (hablar)'],
          [
            ['yo', 'I', 'hablo'],
            ['tú', 'you (informal)', 'hablas'],
            ['usted', 'you (formal)', 'habla'],
            ['él / ella', 'he / she', 'habla'],
            ['nosotros', 'we', 'hablamos'],
            ['ustedes', 'you all', 'hablan'],
            ['ellos / ellas', 'they', 'hablan'],
          ],
          0,
        ),
      },
      stickBlock({
        trick: 'Spanish verbs wear their subject on their ending, like a name tag.',
        practice: 'Say yo + tú + él for three verbs you know. Then say them without the pronouns.',
        mistake:
          'Do not translate "it" as a pronoun. Spanish usually says nothing: Es difícil = It is difficult.',
      }),
    ],
  ),
  L(
    [
      'zk-verb-families',
      'A1',
      'Three verb families: -ar, -er, -ir.',
      ZERO,
      'Quiero hablar, comer y vivir en un lugar tranquilo.',
      'I want to speak, eat and live in a quiet place.',
      'Ang pandiwa sa Espanyol ay nagtatapos sa -ar, -er o -ir sa infinitive. Mula doon ay nabubuo ang lahat ng anyo. Kapag alam mo ang tatlong pamilya, alam mo ang daan-daang pandiwa.',
      'Every verb in its dictionary form (the infinitive) ends in -ar, -er or -ir: hablar (to speak), comer (to eat), vivir (to live). To conjugate, remove the ending and add the endings of the family. Regular verbs in the same family share endings, so one pattern unlocks hundreds of verbs. The infinitive is also what you use after quiero, puedo, voy a, necesito.',
    ],
    [
      'infinitive: -ar · -er · -ir',
      'Learn the family and you can predict the endings.',
      'Quiero + infinitive = I want to...',
      'Memorize the three families before memorizing individual verbs. When you meet a new verb, ask: which family is it?',
    ],
    [
      'Which family is "comer"?',
      ['-er', '-ar', '-ir'],
      '-er',
      'Comer ends in -er, so it belongs to the -er family.',
      'You sort verbs into three groups.',
    ],
    [
      ['Voy a escribir una carta.', 'I am going to write a letter.'],
      ['Necesito beber agua.', 'I need to drink water.'],
    ],
    [
      {
        heading: 'Tres familias',
        table: grid(
          ['Family', 'Infinitive', 'yo form', 'English'],
          [
            ['-ar', 'hablar', 'hablo', 'to speak'],
            ['-ar', 'trabajar', 'trabajo', 'to work'],
            ['-er', 'comer', 'como', 'to eat'],
            ['-er', 'beber', 'bebo', 'to drink'],
            ['-ir', 'vivir', 'vivo', 'to live'],
            ['-ir', 'escribir', 'escribo', 'to write'],
          ],
          1,
        ),
      },
      stickBlock({
        trick: 'AR-ER-IR: "air, err, ear". Three families, one way to tell them apart.',
        practice: 'List ten verbs you use daily and mark the family of each.',
        mistake: 'The yo form of all three families ends in -o in the present: hablo, como, vivo.',
      }),
    ],
  ),
  L(
    [
      'zk-sentence-order',
      'A1',
      'How a Spanish sentence is built.',
      ZERO,
      'Mi hermana come manzanas rojas en la cocina.',
      'My sister eats red apples in the kitchen.',
      'Ang pangunahing ayos ay paksa + pandiwa + layon. Ang adjective ay karaniwang pagkatapos ng pangngalan: manzanas rojas. Madalas ay hindi sinasabi ang paksa.',
      'Basic order: subject + verb + object (+ place or time). Mi hermana (subject) come (verb) manzanas rojas (object) en la cocina (place). Adjectives usually follow the noun: manzanas rojas, not rojas manzanas. The subject can be dropped: Come manzanas. You can also move the subject after the verb for emphasis or in questions: ¿Come tu hermana manzanas?',
    ],
    [
      'subject + verb + object · noun + adjective',
      'Adjectives come after the noun.',
      'Una casa grande, un perro negro.',
      'Some adjectives of quantity or quality can come first: muchas personas, buen día. After the noun, the adjective describes or distinguishes; before it, it adds feeling or judgment.',
    ],
    [
      'Which order is natural?',
      ['una casa grande', 'una grande casa', 'grande una casa'],
      'una casa grande',
      'The adjective usually follows the noun in Spanish.',
      'You describe a picture.',
    ],
    [
      ['Tengo un coche azul.', 'I have a blue car.'],
      ['Ana lee libros interesantes.', 'Ana reads interesting books.'],
    ],
    [
      {
        heading: 'Orden de la frase',
        table: grid(
          ['Part', 'Example', 'English'],
          [
            ['subject', 'Mi hermana', 'my sister'],
            ['verb', 'come', 'eats'],
            ['object', 'manzanas rojas', 'red apples'],
            ['place', 'en la cocina', 'in the kitchen'],
            ['time', 'hoy', 'today'],
            [
              'full sentence',
              'Mi hermana come manzanas rojas hoy.',
              'My sister eats red apples today.',
            ],
          ],
          1,
        ),
      },
      stickBlock({
        trick:
          'Build a sentence like Lego: subject, verb, thing, place. Add adjectives after the thing.',
        practice: 'Describe five objects near you with a noun + adjective.',
        mistake: 'Do not copy English adjective order. Say un coche rojo, not un rojo coche.',
      }),
    ],
  ),
  L(
    [
      'zk-numbers-20',
      'A1',
      'Numbers from 0 to 20.',
      ZERO,
      'Tengo veinte años, dos hermanos y quince primos.',
      'I am twenty years old, I have two siblings and fifteen cousins.',
      'Bilangin ang 0 hanggang 20: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Mula 11 hanggang 15 ay may -ce: once, doce, trece, catorce, quince. Pagkatapos ay diez y seis na naging dieciséis.',
      'Learn 0–10 first: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Then 11–15 end in -ce: once, doce, trece, catorce, quince. 16–19 are diez + y + number, written as one word: dieciséis, diecisiete, dieciocho, diecinueve. 20 is veinte. Uno becomes un before a masculine noun and una before a feminine noun: un libro, una casa.',
    ],
    [
      '0–10 · 11–15 end in -ce · 16–19 = dieci-',
      'Chunk the numbers into three groups.',
      'Un libro, una casa, uno solo.',
      'Uno shortens to un before a masculine noun and changes to una before a feminine noun. Years, ages and prices all use these numbers.',
    ],
    [
      'What number is "quince"?',
      ['15', '14', '16'],
      '15',
      'Quince is 15. Catorce is 14 and dieciséis is 16.',
      'You give your age.',
    ],
    [
      ['Hay doce meses en un año.', 'There are twelve months in a year.'],
      ['Tengo tres hermanas.', 'I have three sisters.'],
    ],
    [
      {
        heading: 'Los números',
        table: grid(
          ['Number', 'Spanish', 'Number', 'Spanish'],
          [
            ['0', 'cero', '11', 'once'],
            ['1', 'uno', '12', 'doce'],
            ['2', 'dos', '13', 'trece'],
            ['3', 'tres', '14', 'catorce'],
            ['4', 'cuatro', '15', 'quince'],
            ['5', 'cinco', '16', 'dieciséis'],
            ['6', 'seis', '17', 'diecisiete'],
            ['7', 'siete', '18', 'dieciocho'],
            ['8', 'ocho', '19', 'diecinueve'],
            ['9', 'nueve', '20', 'veinte'],
            ['10', 'diez', '100', 'cien'],
          ],
          1,
        ),
      },
      stickBlock({
        trick: 'Count your fingers in Spanish each morning: uno, dos, tres... diez.',
        practice:
          'Say your age, your phone number digits and the date aloud in Spanish once a day.',
        mistake: 'Do not forget y: from 31 on you say treinta y uno, not treinta uno.',
      }),
    ],
  ),
  L(
    [
      'zk-question-words',
      'A1',
      'The seven question words.',
      ZERO,
      '¿Qué quieres? ¿Dónde vives? ¿Cómo te llamas?',
      'What do you want? Where do you live? What is your name?',
      'Pitong tanong na salita: qué (ano), quién (sino), dónde (saan), cuándo (kailan), cómo (paano), por qué (bakit) at cuánto (magkano o ilan). Laging may accent ang mga ito sa tanong.',
      'Question words always carry an accent: qué (what), quién (who), dónde (where), cuándo (when), cómo (how), por qué (why, two words), cuánto (how much / how many). A question has two marks: ¿ at the start and ? at the end. Answers to por qué start with porque (one word, no accent). Use cuánto or cuánta to match the gender: ¿Cuántas personas?',
    ],
    [
      '¿qué · quién · dónde · cuándo · cómo · por qué · cuánto?',
      'Seven words open almost any question.',
      '¿Por qué? Porque...',
      'Por qué (two words, accent) asks why. Porque (one word, no accent) means because. Question words also appear in indirect statements with the accent: No sé qué quieres.',
    ],
    [
      'Which word asks "where"?',
      ['dónde', 'cuándo', 'quién'],
      'dónde',
      'Dónde asks where. Cuándo asks when and quién asks who.',
      'You ask for directions.',
    ],
    [
      ['¿Cuándo llega el autobús?', 'When does the bus arrive?'],
      ['¿Quién es ella?', 'Who is she?'],
    ],
    [
      {
        heading: 'Las preguntas',
        table: grid(
          ['Spanish', 'English', 'Example'],
          [
            ['¿qué?', 'what', '¿Qué es esto?'],
            ['¿quién?', 'who', '¿Quién es?'],
            ['¿dónde?', 'where', '¿Dónde está?'],
            ['¿cuándo?', 'when', '¿Cuándo vienes?'],
            ['¿cómo?', 'how', '¿Cómo estás?'],
            ['¿por qué?', 'why', '¿Por qué lloras?'],
            ['¿cuánto?', 'how much', '¿Cuánto cuesta?'],
          ],
          0,
        ),
      },
      stickBlock({
        trick:
          'Learn them in pairs: qué / quién, dónde / cuándo, cómo / cuánto, then por qué on its own.',
        practice: 'Ask yourself one question with each word and answer it out loud.',
        mistake: 'Do not forget the accent mark on question words and the opening ¿.',
      }),
    ],
  ),
  L(
    [
      'zk-how-to-study',
      'A1',
      'How to learn Spanish and actually remember it.',
      ZERO,
      'Practico diez minutos todos los días y repaso mis errores cada semana.',
      'I practice ten minutes every day and review my mistakes every week.',
      'Ang pinakamahusay na paraan ay maliit na pagsasanay araw-araw, hindi isang mahabang aralin lang. Ulitin ang mga lumang aralin at tandaan ang mga pagkakamali. Magsalita nang malakas.',
      'Memory works best with short, spaced practice. Ten focused minutes every day beat two hours once a week. Review a lesson one day, three days, one week and one month later; this app schedules reviews for you. Say sentences aloud (shadowing), write short notes in Spanish, and keep a list of your own mistakes. Mistakes are information, not failure. Learn whole phrases, not single words.',
    ],
    [
      'little · often · out loud · review',
      'Consistency and review make the memory last.',
      'Ten minutes a day is enough.',
      'Link practice to a habit: after breakfast, on the bus, before bed. Review your own mistakes weekly because they show exactly what to fix. Speak even when you are alone; your mouth needs training, too.',
    ],
    [
      'Which habit helps memory the most?',
      ['short daily practice with review', 'one long weekly session', 'only reading grammar'],
      'short daily practice with review',
      'Spaced, daily practice builds long-term memory better than occasional marathons.',
      'You plan your study week.',
    ],
    [
      ['Hablo en voz alta cada mañana.', 'I speak out loud every morning.'],
      ['Escribo cinco frases nuevas cada día.', 'I write five new sentences every day.'],
    ],
    [
      {
        heading: 'Un plan sencillo',
        table: grid(
          ['Habit', 'How long', 'Why'],
          [
            ['Do one lesson', '10 minutes', 'new material'],
            ['Say sentences aloud', '3 minutes', 'speaking and rhythm'],
            ['Review old lessons', '5 minutes', 'spaced repetition'],
            ['Write 3 sentences', '3 minutes', 'active recall'],
            ['Weekly mistake review', '10 minutes', 'fix weak spots'],
            ['Listen to Spanish', 'daily', 'train your ear'],
          ],
          0,
        ),
      },
      stickBlock({
        trick: 'Use the loop: Learn → Say → Write → Review. Repeat it every day.',
        practice:
          'Pick the same time every day and set a reminder. Today, do ten minutes and say it aloud.',
        mistake:
          'Do not skip reviews. Forgetting is normal; reviewing is how the memory becomes permanent.',
      }),
    ],
  ),
];
