// Authored model sentences for the tense lessons: [sentence, translation, infinitive, person index].
// A test checks each sentence against the conjugation engine, so a typo or engine bug is caught.
// Person index: 0 yo, 1 tú, 2 él, 3 nosotros, 4 vosotros, 5 ellos (imperative: 0 tú, 1 usted, 2 nosotros, 3 vosotros, 4 ustedes).
export const TENSE_SENTENCES = {
  'indicative.present': {
    regular: [
      ['Trabajo en una oficina del centro.', 'I work in an office downtown.', 'trabajar', 0],
      ['Mis hijos comen frutas todos los días.', 'My children eat fruit every day.', 'comer', 5],
      ['Vivimos cerca de la playa.', 'We live near the beach.', 'vivir', 3],
    ],
    irregular: [
      ['Somos amigos desde niños.', 'We have been friends since childhood.', 'ser', 3],
      [
        'Mi madre va al mercado los sábados.',
        'My mother goes to the market on Saturdays.',
        'ir',
        2,
      ],
      ['Tengo una reunión a las tres.', 'I have a meeting at three.', 'tener', 0],
    ],
    changes: [
      ['Duermo siete horas cada noche.', 'I sleep seven hours every night.', 'dormir', 0],
      ['Pedimos la cuenta al camarero.', 'We ask the waiter for the bill.', 'pedir', 3],
      ['Conozco bien esta ciudad.', 'I know this city well.', 'conocer', 0],
    ],
  },
  'indicative.preterite': {
    regular: [
      ['Ayer trabajé hasta tarde.', 'Yesterday I worked until late.', 'trabajar', 0],
      ['Comimos en un restaurante pequeño.', 'We ate at a small restaurant.', 'comer', 3],
      ['Ella vivió dos años en Lima.', 'She lived in Lima for two years.', 'vivir', 2],
    ],
    irregular: [
      ['Fui al banco por la mañana.', 'I went to the bank in the morning.', 'ir', 0],
      ['Tuvimos mucha suerte.', 'We were very lucky.', 'tener', 3],
      ['Ellos dijeron que sí.', 'They said yes.', 'decir', 5],
    ],
    changes: [
      ['Mi hermano durmió en el sofá.', 'My brother slept on the sofa.', 'dormir', 2],
      [
        'Busqué mis llaves por toda la casa.',
        'I looked for my keys all over the house.',
        'buscar',
        0,
      ],
      ['Empezaron la clase a las nueve.', 'They started the class at nine.', 'empezar', 5],
    ],
  },
  'indicative.imperfect': {
    regular: [
      ['De niño, jugaba en la calle.', 'As a child, I used to play in the street.', 'jugar', 0],
      ['Comíamos juntos los domingos.', 'We used to eat together on Sundays.', 'comer', 3],
      ['Vivía cerca de mis abuelos.', 'I used to live near my grandparents.', 'vivir', 0],
    ],
    irregular: [
      ['Era una tarde muy tranquila.', 'It was a very quiet afternoon.', 'ser', 2],
      ['Íbamos a la playa en verano.', 'We used to go to the beach in summer.', 'ir', 3],
      ['Veía televisión con mi padre.', 'I used to watch TV with my father.', 'ver', 0],
    ],
    changes: [
      ['Dormía con la ventana abierta.', 'I used to sleep with the window open.', 'dormir', 0],
      ['Pedían siempre el mismo plato.', 'They always used to order the same dish.', 'pedir', 5],
      ['Buscábamos un piso barato.', 'We were looking for a cheap apartment.', 'buscar', 3],
    ],
  },
  'indicative.future': {
    regular: [
      ['El lunes hablaré con mi jefe.', 'On Monday I will talk to my boss.', 'hablar', 0],
      ['Comeremos a las dos.', 'We will eat at two.', 'comer', 3],
      ['Mis padres vivirán en Cebú.', 'My parents will live in Cebu.', 'vivir', 5],
    ],
    irregular: [
      ['Tendrás más tiempo pronto.', 'You will have more time soon.', 'tener', 1],
      ['Haré la cena esta noche.', 'I will make dinner tonight.', 'hacer', 0],
      ['Ella dirá la verdad.', 'She will tell the truth.', 'decir', 2],
    ],
    changes: [
      ['Volveré a casa tarde.', 'I will come home late.', 'volver', 0],
      ['Empezaremos el curso en enero.', 'We will start the course in January.', 'empezar', 3],
      ['Pagaré con tarjeta.', 'I will pay by card.', 'pagar', 0],
    ],
  },
  'indicative.conditional': {
    regular: [
      ['Hablaría con él antes de decidir.', 'I would talk to him before deciding.', 'hablar', 0],
      [
        'Comeríamos en casa si tuviéramos tiempo.',
        'We would eat at home if we had time.',
        'comer',
        3,
      ],
      ['Viviría en una ciudad más tranquila.', 'I would live in a quieter city.', 'vivir', 0],
    ],
    irregular: [
      ['Tendría que pensarlo.', 'I would have to think about it.', 'tener', 0],
      ['¿Podrías ayudarme?', 'Could you help me?', 'poder', 1],
      ['Dirían que no.', 'They would say no.', 'decir', 5],
    ],
    changes: [
      ['Dormiría diez horas más.', 'I would sleep ten more hours.', 'dormir', 0],
      ['Pediría un café doble.', 'I would order a double coffee.', 'pedir', 0],
      ['Buscaríamos otra solución.', 'We would look for another solution.', 'buscar', 3],
    ],
  },
  'indicative.presentPerfect': {
    regular: [
      ['Hoy he trabajado mucho.', 'Today I have worked a lot.', 'trabajar', 0],
      ['Hemos comido muy bien.', 'We have eaten very well.', 'comer', 3],
      ['Ella ha vivido en tres países.', 'She has lived in three countries.', 'vivir', 2],
    ],
    irregular: [
      ['¿Has hecho la tarea?', 'Have you done the homework?', 'hacer', 1],
      ['Hemos visto esa película.', 'We have seen that movie.', 'ver', 3],
      ['Me ha dicho la verdad.', 'He has told me the truth.', 'decir', 2],
    ],
    changes: [
      ['He abierto la ventana.', 'I have opened the window.', 'abrir', 0],
      ['Han escrito un informe.', 'They have written a report.', 'escribir', 5],
      ['No he puesto la mesa.', 'I have not set the table.', 'poner', 0],
    ],
  },
  'indicative.pluperfect': {
    regular: [
      [
        'Ya había cenado cuando llegaste.',
        'I had already had dinner when you arrived.',
        'cenar',
        0,
      ],
      ['Habíamos trabajado todo el día.', 'We had worked all day.', 'trabajar', 3],
      ['Ella había vivido allí antes.', 'She had lived there before.', 'vivir', 2],
    ],
    irregular: [
      ['Nunca había hecho algo así.', 'I had never done anything like that.', 'hacer', 0],
      ['Ya habías visto el mensaje.', 'You had already seen the message.', 'ver', 1],
      ['Nos habían dicho otra cosa.', 'They had told us something else.', 'decir', 5],
    ],
    changes: [
      ['Habían abierto la tienda temprano.', 'They had opened the store early.', 'abrir', 5],
      ['Había escrito la carta ayer.', 'I had written the letter yesterday.', 'escribir', 0],
      ['Habíamos vuelto antes de la lluvia.', 'We had returned before the rain.', 'volver', 3],
    ],
  },
  'subjunctive.present': {
    regular: [
      ['Quiero que hables más despacio.', 'I want you to speak more slowly.', 'hablar', 1],
      ['Espero que comas bien.', 'I hope you eat well.', 'comer', 1],
      ['Es importante que vivamos tranquilos.', 'It is important that we live calmly.', 'vivir', 3],
    ],
    irregular: [
      ['Ojalá que seas feliz.', 'I hope you are happy.', 'ser', 1],
      ['Quiero que vayamos al cine.', 'I want us to go to the movies.', 'ir', 3],
      ['Espero que tengas tiempo.', 'I hope you have time.', 'tener', 1],
    ],
    changes: [
      ['Quiero que duermas bien.', 'I want you to sleep well.', 'dormir', 1],
      [
        'Te recomiendo que busques otro hotel.',
        'I recommend that you look for another hotel.',
        'buscar',
        1,
      ],
      ['Dudo que conozca la respuesta.', 'I doubt that he knows the answer.', 'conocer', 2],
    ],
  },
  'subjunctive.imperfect': {
    regular: [
      [
        'Si hablara español, viajaría más.',
        'If I spoke Spanish, I would travel more.',
        'hablar',
        0,
      ],
      [
        'Si comiéramos temprano, tendríamos hambre después.',
        'If we ate early, we would be hungry later.',
        'comer',
        3,
      ],
      ['Quería que viviera cerca.', 'He wanted me to live nearby.', 'vivir', 0],
    ],
    irregular: [
      ['Si fuera rico, compraría una casa.', 'If I were rich, I would buy a house.', 'ser', 0],
      ['Si tuviera tiempo, te ayudaría.', 'If I had time, I would help you.', 'tener', 0],
      ['Me pidió que dijera la verdad.', 'He asked me to tell the truth.', 'decir', 0],
    ],
    changes: [
      ['Si durmiera más, estaría mejor.', 'If I slept more, I would feel better.', 'dormir', 0],
      [
        'Pidió que buscáramos otra opción.',
        'He asked that we look for another option.',
        'buscar',
        3,
      ],
      ['Si pudiéramos, iríamos mañana.', 'If we could, we would go tomorrow.', 'poder', 3],
    ],
  },
  'imperative.affirmative': {
    regular: [
      ['Habla más despacio, por favor.', 'Speak more slowly, please.', 'hablar', 0],
      ['Coma algo antes de salir.', 'Eat something before leaving (formal).', 'comer', 1],
      ['Vivamos el momento.', 'Let us live in the moment.', 'vivir', 2],
    ],
    irregular: [
      ['Haz la tarea ahora.', 'Do the homework now.', 'hacer', 0],
      ['Ven aquí un momento.', 'Come here for a moment.', 'venir', 0],
      ['Di la verdad ahora.', 'Tell the truth now.', 'decir', 0],
    ],
    changes: [
      ['Duerme bien esta noche.', 'Sleep well tonight.', 'dormir', 0],
      ['Pide lo que quieras.', 'Order whatever you want.', 'pedir', 0],
      ['Busque su número en la lista.', 'Look for your number on the list (formal).', 'buscar', 1],
    ],
  },
};

export const TENSE_GROUPS_INFO = {
  regular: {
    title: 'regular verbs',
    tip: 'Learn the endings once, then reuse them for every regular verb.',
    tipDetail: 'Check each verb’s ending (-ar, -er or -ir) before you choose the endings.',
    mistake: 'Do not mix the -ar and -er/-ir endings.',
  },
  irregular: {
    title: 'irregular verbs',
    tip: 'Memorize the irregular forms as whole words.',
    tipDetail: 'Open each verb page: highlighted cells show exactly which forms are irregular.',
    mistake: 'Do not regularize irregular verbs: say tuve, not tené.',
  },
  changes: {
    title: 'stem and spelling changes',
    tip: 'Watch the stem vowel and the letters c, g, z.',
    tipDetail: 'Stem changes follow the boot pattern; spelling changes keep the same sound.',
    mistake: 'Do not forget the change: pidió, not pedió; busqué, not buscé.',
  },
};
