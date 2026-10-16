// Original everyday-life role-plays for the Spanish for Daily Life course. You play the learner;
// the other speaker is the service provider. Details and prices are fictional.
const daily = (id, title, objective, phrases, dialogue, practice, model, coaching) => ({
  id: 'work-daily-' + id,
  category: 'Everyday life',
  level: 'Beginner',
  title,
  objective,
  phrases,
  practiceRole: 'You',
  dialogue,
  practice,
  model,
  coaching,
});

export const dailyExpansion = [
  daily(
    'doctor-visit',
    'Describe your symptoms to a doctor',
    'Say what hurts, since when, and answer simple questions.',
    [
      [
        'Me duele la garganta desde ayer.',
        'My throat has hurt since yesterday.',
        'Desde + a starting point answers since when. The body part is the subject of doler.',
      ],
      [
        'También tengo fiebre y mucha tos.',
        'I also have a fever and a lot of coughing.',
        'Tengo + noun names a symptom. Use mucha with a feminine noun like tos.',
      ],
      [
        'No soy alérgico a ningún medicamento.',
        'I am not allergic to any medication.',
        'Ser alérgico a + noun. Use alérgica if you are a woman.',
      ],
    ],
    [
      ['Agent', '¿Qué le pasa?', 'What is wrong?'],
      ['You', 'Me duele la garganta desde ayer.', 'My throat has hurt since yesterday.'],
      ['Agent', '¿Tiene fiebre?', 'Do you have a fever?'],
      ['You', 'Sí, y también tengo mucha tos.', 'Yes, and I also have a lot of coughing.'],
    ],
    'Say: My throat has hurt since yesterday. Use desde ayer.',
    'Me duele la garganta desde ayer.',
    'Me duele + singular body part; desde ayer says since when.',
  ),
  daily(
    'pharmacy',
    'Ask for medicine at a pharmacy',
    'Describe a problem and ask what to take and how often.',
    [
      [
        'Necesito algo para la tos.',
        'I need something for a cough.',
        'Algo para + problem is a polite way to ask without naming a product.',
      ],
      [
        '¿Cuántas veces al día debo tomarlo?',
        'How many times a day should I take it?',
        'Deber + infinitive asks what is necessary. Tomarlo attaches lo to the infinitive.',
      ],
      [
        '¿Necesito receta para esto?',
        'Do I need a prescription for this?',
        'Receta means prescription here and recipe in the kitchen.',
      ],
    ],
    [
      [
        'You',
        'Buenas tardes, necesito algo para la tos.',
        'Good afternoon, I need something for a cough.',
      ],
      ['Agent', 'Puede tomar este jarabe.', 'You can take this syrup.'],
      ['You', '¿Cuántas veces al día debo tomarlo?', 'How many times a day should I take it?'],
      ['Agent', 'Tres veces al día, después de comer.', 'Three times a day, after eating.'],
    ],
    'Ask: How many times a day should I take it?',
    '¿Cuántas veces al día debo tomarlo?',
    'Debo + tomarlo: the pronoun attaches to the infinitive.',
  ),
  daily(
    'bank-account',
    'Open a bank account',
    'Explain what you need and ask about fees and documents.',
    [
      [
        'Quisiera abrir una cuenta de ahorros.',
        'I would like to open a savings account.',
        'Quisiera is a polite way to ask. Cuenta de ahorros = savings account; cuenta corriente = checking account.',
      ],
      [
        '¿Qué documentos necesito?',
        'What documents do I need?',
        'Qué + noun asks which things. Documents often include identification and proof of address.',
      ],
      [
        '¿Hay alguna comisión mensual?',
        'Is there any monthly fee?',
        'Comisión is a bank fee. Hay alguna asks whether any exists.',
      ],
    ],
    [
      ['Agent', 'Buenos días, ¿en qué puedo ayudarle?', 'Good morning, how can I help you?'],
      ['You', 'Quisiera abrir una cuenta de ahorros.', 'I would like to open a savings account.'],
      ['Agent', 'Claro. Necesito su identificación.', 'Of course. I need your identification.'],
      ['You', '¿Hay alguna comisión mensual?', 'Is there any monthly fee?'],
    ],
    'Say: I would like to open a savings account.',
    'Quisiera abrir una cuenta de ahorros.',
    'Quisiera + infinitive makes a polite request; ahorros is plural in cuenta de ahorros.',
  ),
  daily(
    'rent-apartment',
    'Look for an apartment',
    'Describe what you want and ask about rent and conditions.',
    [
      [
        'Estoy buscando un apartamento de dos habitaciones.',
        'I am looking for a two-bedroom apartment.',
        'Estoy buscando = estar + gerund. Habitación means room; in some countries people say recámara or dormitorio.',
      ],
      [
        '¿Cuánto es el alquiler al mes?',
        'How much is the rent per month?',
        'Alquiler is common in Spain; renta is common in Mexico.',
      ],
      [
        '¿Están incluidos los servicios?',
        'Are utilities included?',
        'Servicios means utilities such as water and electricity. Incluidos agrees with the plural.',
      ],
    ],
    [
      [
        'You',
        'Estoy buscando un apartamento de dos habitaciones.',
        'I am looking for a two-bedroom apartment.',
      ],
      ['Agent', 'Tengo uno cerca del centro.', 'I have one near downtown.'],
      ['You', '¿Cuánto es el alquiler al mes?', 'How much is the rent per month?'],
      ['Agent', 'Son seiscientos dólares.', 'It is six hundred dollars.'],
    ],
    'Ask: How much is the rent per month? Use al mes.',
    '¿Cuánto es el alquiler al mes?',
    'Al mes means per month; es agrees with the singular el alquiler.',
  ),
  daily(
    'job-interview',
    'Talk about your experience in an interview',
    'Describe your experience, strengths and availability.',
    [
      [
        'Tengo tres años de experiencia en atención al cliente.',
        'I have three years of experience in customer service.',
        'Tener + time + de experiencia en + field. Atención al cliente is the usual term for customer service.',
      ],
      [
        'Soy una persona responsable y trabajo bien en equipo.',
        'I am a responsible person and I work well in a team.',
        'Ser + adjective for traits; en equipo means as a team.',
      ],
      [
        'Podría empezar el lunes que viene.',
        'I could start next Monday.',
        'Podría is the polite conditional of poder. El lunes que viene = next Monday.',
      ],
    ],
    [
      ['Agent', 'Hábleme de su experiencia.', 'Tell me about your experience.'],
      [
        'You',
        'Tengo tres años de experiencia en atención al cliente.',
        'I have three years of experience in customer service.',
      ],
      ['Agent', '¿Cuándo podría empezar?', 'When could you start?'],
      ['You', 'Podría empezar el lunes que viene.', 'I could start next Monday.'],
    ],
    'Say: I have three years of experience in customer service.',
    'Tengo tres años de experiencia en atención al cliente.',
    'Tengo + number + años de experiencia is the standard way to state experience.',
  ),
  daily(
    'phone-plan',
    'Change your mobile plan',
    'Ask about plans, data and the price, and request a change.',
    [
      [
        'Quiero cambiar mi plan de celular.',
        'I want to change my cell phone plan.',
        'Celular is common in Latin America; móvil in Spain.',
      ],
      [
        '¿Cuántos datos incluye este plan?',
        'How much data does this plan include?',
        'Datos means data. Cuántos agrees with the plural noun.',
      ],
      [
        '¿Hay permanencia o puedo cancelar cuando quiera?',
        'Is there a contract period, or can I cancel whenever I want?',
        'Permanencia is a minimum contract period; cuando quiera uses the subjunctive for an open time.',
      ],
    ],
    [
      [
        'Agent',
        'Gracias por llamar. ¿En qué puedo ayudarle?',
        'Thanks for calling. How can I help you?',
      ],
      ['You', 'Quiero cambiar mi plan de celular.', 'I want to change my cell phone plan.'],
      ['Agent', 'Tenemos uno con veinte gigas.', 'We have one with twenty gigabytes.'],
      [
        'You',
        '¿Hay permanencia o puedo cancelar cuando quiera?',
        'Is there a contract period, or can I cancel whenever I want?',
      ],
    ],
    'Say: I want to change my cell phone plan.',
    'Quiero cambiar mi plan de celular.',
    'Quiero + infinitive states what you want; mi plan de celular names the thing.',
  ),
  daily(
    'emergency',
    'Ask for help in an emergency',
    'Say clearly that you need help, where you are and what happened.',
    [
      [
        'Necesito ayuda, es una emergencia.',
        'I need help, it is an emergency.',
        'Say it clearly and early. Emergency numbers differ by country, so check them before you travel.',
      ],
      [
        'Estoy en la calle Mayor, cerca de la estación.',
        'I am on Mayor Street, near the station.',
        'Give your location with estar + en, then a landmark.',
      ],
      [
        'Mi amigo se cayó y no puede moverse.',
        'My friend fell and cannot move.',
        'Se cayó is the preterite of caerse. No puede moverse attaches se to the infinitive.',
      ],
    ],
    [
      ['Agent', 'Emergencias, ¿qué ocurre?', 'Emergency services, what is happening?'],
      ['You', 'Necesito ayuda, es una emergencia.', 'I need help, it is an emergency.'],
      ['Agent', '¿Dónde está usted?', 'Where are you?'],
      [
        'You',
        'Estoy en la calle Mayor, cerca de la estación.',
        'I am on Mayor Street, near the station.',
      ],
    ],
    'Say: I need help, it is an emergency.',
    'Necesito ayuda, es una emergencia.',
    'Necesito + noun is short and clear; add where you are right after.',
  ),
  daily(
    'post-office',
    'Send a package',
    'Ask about sending a parcel, the cost and the delivery time.',
    [
      [
        'Quisiera enviar este paquete a Filipinas.',
        'I would like to send this package to the Philippines.',
        'Enviar a + place. Filipinas is plural in form but takes a singular meaning.',
      ],
      [
        '¿Cuánto tarda en llegar?',
        'How long does it take to arrive?',
        'Tardar en + infinitive means to take time to do something.',
      ],
      [
        '¿Puedo seguir el envío con un número de seguimiento?',
        'Can I track the shipment with a tracking number?',
        'Seguimiento means tracking; envío is a shipment.',
      ],
    ],
    [
      ['Agent', 'Buenos días, ¿qué desea?', 'Good morning, what would you like?'],
      [
        'You',
        'Quisiera enviar este paquete a Filipinas.',
        'I would like to send this package to the Philippines.',
      ],
      ['Agent', 'Son quince dólares.', 'That is fifteen dollars.'],
      ['You', '¿Cuánto tarda en llegar?', 'How long does it take to arrive?'],
    ],
    'Ask: How long does it take to arrive? Use tarda en.',
    '¿Cuánto tarda en llegar?',
    'Tarda en + infinitive: the verb agrees with the thing that takes time.',
  ),
];
