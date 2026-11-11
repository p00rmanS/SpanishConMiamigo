// "Make it stick": a memory trick, a short practice routine and the most common slip for the core
// lessons. Added to the end of each lesson's "Go deeper" section so it appears after the explanation.
export const stickBlock = ({ trick, practice, mistake }) => ({
  heading: 'Make it stick',
  points: [`Memory trick: ${trick}`, `Practice: ${practice}`, `Watch out: ${mistake}`],
});

const AIDS = {
  hello: {
    trick: 'Me llamo = "I call myself". Picture saying "call me Alex" with a phone.',
    practice: 'Say it out loud three times today with your own name, then once to a friend.',
    mistake: 'Do not say yo llamo. Say me llamo, and remember the silent h in hola.',
  },
  courtesy: {
    trick: 'Por favor asks, gracias thanks, de nada answers. Ask, thank, answer: one circle.',
    practice: 'Use all three words in one real exchange today, even with a barista or a pet.',
    mistake: 'De nada is the reply to thanks, never a way to ask for a favor.',
  },
  articles: {
    trick:
      'La ends with a like "la casa"; el stays masculine. Most -o words take el, most -a words take la.',
    practice: 'Write ten nouns on sticky notes around your home with el or la on each.',
    mistake: 'Always learn the noun with its article: el problema, la mano are exceptions.',
  },
  plural: {
    trick: 'Vowel → add s. Consonant → add es. Z → c plus es (luz → luces).',
    practice: 'Change ten singular nouns to plural out loud, one rule at a time.',
    mistake: 'Change the article too: el libro → los libros, not los libro.',
  },
  agreement: {
    trick: 'The three musketeers: article, noun and adjective always match in gender and number.',
    practice: 'Say five phrases like la casa blanca and las casas blancas and check each match.',
    mistake: 'Adjectives usually come after the noun: un coche rojo, not un rojo coche.',
  },
  negation: {
    trick: 'Just put no in front of the verb. One short word, one position.',
    practice: 'Turn five sentences you already know into negatives: Hablo → No hablo.',
    mistake: 'Do not use do/does like English. No hablo, not no hago hablar.',
  },
  questions: {
    trick: 'Upside-down ¿ opens the question like a hook, ? closes it. Voice goes up at the end.',
    practice:
      'Ask yourself three questions in Spanish each morning: ¿Cómo estás? ¿Qué quieres? ¿Dónde estás?',
    mistake:
      'Spanish questions do not need a helper verb. Tienes hambre? with rising voice is enough.',
  },
  possessives: {
    trick: 'Mi, tu, su follow the thing owned, not the owner. Mi casa, mis casas.',
    practice: 'Name ten things around you with mi or mis.',
    mistake: 'Su can mean his, her, your or their. Add de él / de ella when it is unclear.',
  },
  hablar: {
    trick: 'Cut off -ar and add o, as, a, amos, an. "Oh, as, a, a mosque, an" helps the rhythm.',
    practice: 'Conjugate hablar, then swap in cantar, bailar and trabajar.',
    mistake: 'Do not drop the ending: hablo means I speak, hablas you speak.',
  },
  comer: {
    trick: '-er verbs use o, es, e, emos, en. Think "o, es, e, emos, en": eat-ems.',
    practice: 'Write what you eat today with five different persons: yo como, tú comes.',
    mistake: 'Nosotros has -emos for -er verbs, -amos for -ar verbs, -imos for -ir verbs.',
  },
  vivir: {
    trick: '-ir looks like -er except nosotros: vivimos with an i. Learn that one difference.',
    practice: 'Say where you and three people live: Vivo en..., ella vive en...',
    mistake: 'Vivís is only for vosotros and vos, so do not use it with tú.',
  },
  tener: {
    trick: 'Spanish "has" an age, hunger and thirst. Tengo 30 años means I have 30 years.',
    practice: 'Say your age, then three states you have right now: tengo hambre, sueño, calor.',
    mistake: 'Do not say soy 30 años. Age always uses tener.',
  },
  'ser-estar-intro': {
    trick:
      'SER = what it is (identity, origin, job). ESTAR = how or where it is now. DOCTOR for ser: Description, Occupation, Characteristic, Time, Origin, Relationship. PLACE for estar: Position, Location, Action, Condition, Emotion.',
    practice: 'Describe yourself with ser, then say how you feel and where you are with estar.',
    mistake: 'Location always uses estar, even for a city. Say estoy en Madrid, not soy en Madrid.',
  },
  gustar: {
    trick: 'Gustar means "to be pleasing". Me gusta el café = coffee is pleasing to me.',
    practice:
      'Say three things you like and three you do not like, using gusta and gustan correctly.',
    mistake: 'The thing liked decides gusta or gustan, not the person.',
  },
  querer: {
    trick:
      'Quiero is want. Quisiera is the polite version. Te quiero is love for people, not things.',
    practice: 'Order something with quiero and quisiera and hear the difference.',
    mistake: 'Querer changes its stem: quiero, quieres, quiere, but queremos.',
  },
  hay: {
    trick: 'Hay = there is and there are. Think "hi" + "ay": it never changes.',
    practice: 'Look around the room and say five things with hay.',
    mistake: 'Do not use hay with a definite thing. Say la mesa está aquí, not hay la mesa aquí.',
  },
  reflexive: {
    trick: 'Me, te, se, nos, os, se before the verb mean you do it to yourself.',
    practice: 'Tell your morning routine in order using three reflexive verbs.',
    mistake: 'Use el/la with body parts: me lavo las manos, not mis manos.',
  },
  'present-ir': {
    trick: 'Ir is irregular: voy, vas, va, vamos, van. "Voy a" is also the near future.',
    practice: 'Say where you are going today with voy a + place.',
    mistake: 'After ir a use the infinitive for plans, not the conjugated verb.',
  },
  'object-pronoun': {
    trick: 'Lo, la, los, las replace the thing already named. Put them before the conjugated verb.',
    practice: 'Rewrite three sentences replacing the object: Veo el libro → Lo veo.',
    mistake: 'Gender and number must match the thing replaced: la silla → la.',
  },
  'indirect-object': {
    trick:
      'Le and les mean to him / to her / to you / to them. A personal gift always has someone receiving.',
    practice: 'Say five sentences of giving: Le doy el libro a Ana.',
    mistake: 'Le + lo becomes se lo: se lo doy, never le lo doy.',
  },
  'positive-command': {
    trick: 'The tú command looks like the él / ella form for regular verbs: habla, come, escribe.',
    practice: 'Give five instructions for making coffee using tú commands.',
    mistake: 'Irregular commands: ven, haz, di, pon, sal, ten, ve, sé.',
  },
  'stem-changing': {
    trick:
      'Boot verbs: e → ie, o → ue, e → i change everywhere except nosotros and vosotros. Draw a boot around the changed forms.',
    practice: 'Conjugate querer, poder and pedir and circle the boot.',
    mistake: 'Nosotros does not change: queremos, podemos, pedimos.',
  },
  'irregular-yo': {
    trick:
      'Many verbs are only irregular in "yo": hago, pongo, salgo, traigo, veo, doy, sé. Remember: "yo-go" verbs.',
    practice: 'Make a card for each yo-go verb with one example sentence.',
    mistake: 'The rest of the present usually follows the regular pattern: haces, hace.',
  },
  progressive: {
    trick: 'Estar + -ando / -iendo. "Estoy hablando" is the live broadcast of this moment.',
    practice: 'Describe what you and people near you are doing right now.',
    mistake: 'Do not use the progressive for future plans. Say voy mañana, not estoy yendo mañana.',
  },
  'saber-conocer': {
    trick:
      'Saber = facts and skills. Conocer = people, places and being familiar. Think "I know that" vs "I know him".',
    practice: 'Say three things you saber and three you conocer.',
    mistake: 'Use the personal a with conocer a people: conozco a Ana.',
  },
  'preterite-ar': {
    trick: 'Past -ar endings: é, aste, ó, amos, aron. The accents on é and ó matter.',
    practice: 'Tell yesterday in five sentences using three -ar verbs.',
    mistake: 'Hablo (I speak) and habló (he spoke) differ only by the accent.',
  },
  'preterite-irregular': {
    trick:
      'Irregular preterite stems drop accent marks: tuve, estuve, hice, dije, fui. Remember "TUVE-ESTUVE" as the family.',
    practice: 'Make a card for each irregular stem and write one past sentence.',
    mistake: 'These verbs share one set of endings with no accents: -e, -iste, -o, -imos, -ieron.',
  },
  imperfect: {
    trick: 'Imperfect = "used to / was -ing". Picture a movie background scene with soft focus.',
    practice: 'Describe your childhood home using eight imperfect verbs.',
    mistake:
      'Use the imperfect for repeated or ongoing past actions, not for single completed events.',
  },
  'past-contrast': {
    trick:
      'Imperfect sets the stage; preterite is the action that interrupts. Movie scene, then a loud noise.',
    practice: 'Write a short story: it was raining (imperfect) when the phone rang (preterite).',
    mistake: 'Do not mix them just by word. Ask: background or event?',
  },
  'present-perfect': {
    trick: 'He, has, ha, hemos, han + participle. Haber is a helper; the participle never changes.',
    practice: 'Say three things you have done this week.',
    mistake: 'Keep haber and the participle together. Say he comido, not he ya comido.',
  },
  'subjunctive-forms': {
    trick: 'Start from yo, drop -o, then flip the vowel: -ar verbs use e, -er / -ir verbs use a.',
    practice: 'Form the subjunctive of hablar, comer and vivir and say each with que.',
    mistake: 'Irregular yo forms carry over: tengo → tenga, salgo → salga.',
  },
  'subjunctive-wish': {
    trick:
      'WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, Ojalá. If you want someone else to do it, use the subjunctive.',
    practice: 'Write five wishes starting with Quiero que...',
    mistake:
      'When the subject does not change, use the infinitive: quiero comer, not quiero que como.',
  },
  'real-conditions': {
    trick: 'Si + present, then present or future. Same time on both sides of the coin.',
    practice: 'Make three real conditions about tomorrow.',
    mistake: 'Never put the future after si in this pattern. Si llueve, me quedo.',
  },
  conditional: {
    trick: 'Conditional endings go on the whole infinitive: hablar + ía = hablaría. Think "would".',
    practice: 'Say what you would do with a free day.',
    mistake: 'Irregular stems match the future: tendría, haría, diría, podría.',
  },
  'relative-pronouns': {
    trick:
      'Que is the universal glue. Use it for things and people unless a preposition comes first.',
    practice: 'Join ten pairs of short sentences using que.',
    mistake: 'Spanish never drops que, unlike English "the book I read".',
  },
  'connectors-basic': {
    trick: 'Y, pero, porque, entonces, además: your five bricks to build longer sentences.',
    practice: 'Tell a short story using all five connectors.',
    mistake: 'Use porque for a reason and por qué (two words) for the question why.',
  },
};

export const STICK_BLOCKS = Object.fromEntries(
  Object.entries(AIDS).map(([id, aid]) => [id, stickBlock(aid)]),
);

const trim = (text) =>
  String(text ?? '')
    .replace(/\s+/g, ' ')
    .trim();

// Lessons without a hand-written memory aid get one built from their own pattern, model sentence,
// scene and warning, so the same four habits (chunk, cover, use, avoid) are on every lesson.
export const autoStick = (lesson) => {
  const pattern = (lesson.pattern ?? []).filter(Boolean).join(' + ');
  const points = [
    pattern
      ? `Memory trick: chunk the pattern "${pattern}" and say the model sentence twice: "${trim(lesson.sentence)}"`
      : `Memory trick: say the model sentence twice: "${trim(lesson.sentence)}"`,
    `Cover and recall: hide the Spanish, read "${trim(lesson.meaning)}", then say the Spanish from memory.`,
    lesson.scene
      ? `Use it today: picture this scene (${trim(lesson.scene)}) and say your own version out loud.`
      : 'Use it today: say one real sentence of your own with this pattern.',
    lesson.mistake ? `Watch out: ${trim(lesson.mistake)}` : null,
    'Review rhythm: repeat it tomorrow, in three days and in a week. Short, spaced repetition builds long memory.',
  ].filter(Boolean);
  return { heading: 'Make it stick', points };
};
