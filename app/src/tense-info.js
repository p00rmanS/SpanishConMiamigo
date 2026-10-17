// Teaching notes for each tense, shown next to the conjugation tables.
// Each entry: when to use it, a Taglish explanation, how it is formed and an example.
export const TENSE_INFO = {
  'indicative.present': {
    use: 'Habits, facts, what is happening now, and the near future.',
    taglish:
      'Presente = ginagawa ngayon o palagi. Trabajo en un banco = nagtatrabaho ako sa bangko. Puwede rin sa malapit na hinaharap: Salgo mañana.',
    formed:
      '-ar: -o, -as, -a, -amos, -áis, -an · -er: -o, -es, -e, -emos, -éis, -en · -ir: -o, -es, -e, -imos, -ís, -en',
    example: ['Hablo español todos los días.', 'I speak Spanish every day.'],
  },
  'indicative.preterite': {
    use: 'Completed actions at a specific moment in the past.',
    taglish:
      'Pretérito = tapos na ang aksyon. Ayer comí arroz = kumain ako ng kanin kahapon. Isipin ito bilang isang buong pangyayari.',
    formed:
      '-ar: -é, -aste, -ó, -amos, -asteis, -aron · -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron',
    example: ['Ayer hablé con mi jefe.', 'Yesterday I talked to my boss.'],
  },
  'indicative.imperfect': {
    use: 'Habits, descriptions and background in the past; actions in progress.',
    taglish:
      'Imperfecto = dati o ongoing sa nakaraan. De niño vivía en Manila = noong bata ako, nakatira ako sa Maynila. Hindi binibigyang-diin kung natapos.',
    formed:
      '-ar: -aba, -abas, -aba, -ábamos, -abais, -aban · -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían',
    example: [
      'Cuando era niño, jugaba en la calle.',
      'When I was a child, I used to play in the street.',
    ],
  },
  'indicative.future': {
    use: 'What will happen; also guesses about the present.',
    taglish:
      'Futuro = mangyayari pa lang. Mañana hablaré con él. Puwede ring hula: Estará en casa = malamang nasa bahay siya.',
    formed: 'whole infinitive + é, ás, á, emos, éis, án',
    example: ['Mañana te llamaré.', 'Tomorrow I will call you.'],
  },
  'indicative.conditional': {
    use: 'What would happen; polite requests; advice.',
    taglish:
      'Condicional = "would". Me gustaría viajar = gusto ko sanang maglakbay. Magalang: ¿Podría ayudarme? = Maaari po ba ninyo akong tulungan?',
    formed: 'whole infinitive + ía, ías, ía, íamos, íais, ían',
    example: ['Me gustaría hablar con usted.', 'I would like to speak with you.'],
  },
  'indicative.presentPerfect': {
    use: 'Recent past or experiences that still matter now.',
    taglish:
      'Pretérito perfecto = nagawa na hanggang ngayon. He terminado la tarea = natapos ko na ang takdang-aralin. Sa Spain mas madalas; sa Latin America madalas preterite pa rin.',
    formed: 'haber (he, has, ha, hemos, habéis, han) + past participle',
    example: ['Hoy he trabajado mucho.', 'Today I have worked a lot.'],
  },
  'indicative.pluperfect': {
    use: 'An action completed before another action in the past.',
    taglish:
      'Pluscuamperfecto = nauna sa isa pang nakaraan. Ya había comido cuando llegaste = nakakain na ako nang dumating ka.',
    formed: 'había, habías, había, habíamos, habíais, habían + past participle',
    example: ['Ya había salido cuando llamaste.', 'I had already left when you called.'],
  },
  'indicative.futurePerfect': {
    use: 'Completed by a future point; guesses about the past.',
    taglish:
      'Futuro perfecto = tapos na pagsapit ng hinaharap. Para el lunes habré terminado = pagsapit ng Lunes tapos ko na. Hula sa nakaraan: Habrá llegado ya.',
    formed: 'habré, habrás, habrá, habremos, habréis, habrán + past participle',
    example: ['Para entonces habremos terminado.', 'By then we will have finished.'],
  },
  'indicative.conditionalPerfect': {
    use: 'What would have happened.',
    taglish:
      'Condicional perfecto = sana nangyari. Habría ido si hubiera podido = pupunta sana ako kung nakaya ko.',
    formed: 'habría, habrías, habría, habríamos, habríais, habrían + past participle',
    example: ['Habría ido, pero estaba enfermo.', 'I would have gone, but I was sick.'],
  },
  'subjunctive.present': {
    use: 'Wishes, doubts, emotions, recommendations and uncertain future events.',
    taglish:
      'Presente de subjuntivo = hindi tiyak, hiling o damdamin. Quiero que vengas = gusto kong pumunta ka. Kunin ang yo form, tanggalin ang -o, ilagay ang kabaligtarang ending.',
    formed:
      'yo form − o + -e, -es, -e, -emos, -éis, -en (-ar) or -a, -as, -a, -amos, -áis, -an (-er/-ir)',
    example: ['Espero que vengas pronto.', 'I hope you come soon.'],
  },
  'subjunctive.imperfect': {
    use: 'Past wishes, unreal situations (si + imperfect subjunctive) and polite requests.',
    taglish:
      'Imperfecto de subjuntivo = haka-haka o hiling sa nakaraan. Si tuviera tiempo, viajaría = kung may oras ako, maglalakbay ako. Kunin ang ellos preterite, tanggalin ang -ron, dagdagan ng -ra.',
    formed:
      'ellos preterite − ron + -ra, -ras, -ra, -ramos (accent on the vowel before), -rais, -ran',
    example: ['Si tuviera tiempo, viajaría.', 'If I had time, I would travel.'],
  },
  'subjunctive.imperfectSe': {
    use: 'Same meanings as the -ra form. The -se form is more common in Spain and in formal writing.',
    taglish:
      'Pareho ang kahulugan ng -ra at -se. Mas karaniwan ang -ra; ang -se ay madalas sa Spain at pormal na sulatin.',
    formed:
      'ellos preterite − ron + -se, -ses, -se, -semos (accent on the vowel before), -seis, -sen',
    example: ['Si tuviese tiempo, viajaría.', 'If I had time, I would travel.'],
  },
  'subjunctive.presentPerfect': {
    use: 'A completed action viewed with doubt, emotion or hope.',
    taglish:
      'Perfecto de subjuntivo = tapos na pero may duda o damdamin. Espero que hayas llegado bien = sana nakarating ka nang maayos.',
    formed: 'haya, hayas, haya, hayamos, hayáis, hayan + past participle',
    example: ['Espero que hayas dormido bien.', 'I hope you have slept well.'],
  },
  'subjunctive.pluperfect': {
    use: 'Unreal or impossible past situations (si + hubiera + participle).',
    taglish:
      'Pluscuamperfecto de subjuntivo = hindi nangyari sa nakaraan. Si hubiera sabido, te habría avisado = kung alam ko lang, sinabihan sana kita.',
    formed: 'hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran + past participle',
    example: ['Si hubiera estudiado, habría aprobado.', 'If I had studied, I would have passed.'],
  },
  imperative: {
    use: 'Commands, requests and instructions.',
    taglish:
      'Imperativo = utos o pakiusap. Tú: habla; usted: hable. Sa negatibo, gumamit ng subjunctive: no hables. Ang pronoun ay idinurugtong sa dulo ng pasulong na utos: levántate.',
    formed:
      'tú = él form (irregulars: di, haz, ve, ten, pon, sal, sé, ven) · usted/ustedes/nosotros = present subjunctive · vosotros = infinitive − r + d · negative = no + subjunctive',
    example: ['Habla más despacio, por favor.', 'Speak more slowly, please.'],
  },
};

export const NONFINITE_INFO = {
  gerund: {
    title: 'Gerund (-ando / -iendo)',
    taglish:
      'Gerundio = ginagawa ngayon. Estoy comiendo = kumakain ako ngayon. Hindi ito ginagamit pagkatapos ng preposition (gumamit ng infinitive).',
    example: ['Estoy estudiando español.', 'I am studying Spanish.'],
  },
  participle: {
    title: 'Past participle (-ado / -ido)',
    taglish:
      'Participio = ginagamit sa perfect tenses (he comido) at bilang adjective (la puerta cerrada). Bilang adjective, sumusunod ito sa kasarian at bilang.',
    example: ['He terminado el informe.', 'I have finished the report.'],
  },
};
