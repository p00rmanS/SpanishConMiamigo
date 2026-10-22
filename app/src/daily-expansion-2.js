// More original everyday-life role-plays for the Spanish for Daily Life course.
// Details and prices are fictional. Each lesson has a matching Taglish support row below.
const daily = (id, level, title, objective, phrases, dialogue, practice, model, coaching) => ({
  id: 'work-daily-' + id,
  category: 'Everyday life',
  level,
  title,
  objective,
  phrases,
  practiceRole: 'You',
  dialogue,
  practice,
  model,
  coaching,
});

export const dailyExpansion2 = [
  daily(
    'restaurant-order',
    'Beginner',
    'Order a meal at a restaurant',
    'Ask for a table, order food and ask for the bill.',
    [
      [
        'Una mesa para dos, por favor.',
        'A table for two, please.',
        'Para + number of people. Por favor keeps the request polite.',
      ],
      [
        'Quisiera la sopa del día y un agua sin gas.',
        'I would like the soup of the day and a still water.',
        'Quisiera is a polite way to order. Sin gas means not sparkling.',
      ],
      [
        '¿Nos trae la cuenta, por favor?',
        'Could you bring us the bill, please?',
        'Nos trae asks for a favor for the group. In some countries the bill is la nota.',
      ],
    ],
    [
      ['Agent', 'Buenas noches, ¿cuántos son?', 'Good evening, how many are you?'],
      ['You', 'Una mesa para dos, por favor.', 'A table for two, please.'],
      ['Agent', '¿Qué desean tomar?', 'What would you like to drink?'],
      [
        'You',
        'Quisiera la sopa del día y un agua sin gas.',
        'I would like the soup of the day and a still water.',
      ],
    ],
    'Ask: Could you bring us the bill, please?',
    '¿Nos trae la cuenta, por favor?',
    'Nos trae is polite and short; wait until the server is free before you ask.',
  ),
  daily(
    'taxi-ride',
    'Beginner',
    'Take a taxi',
    'Tell the driver where to go and ask about the price.',
    [
      [
        'Al aeropuerto, por favor.',
        'To the airport, please.',
        'A + place says where to. No verb is needed in a taxi.',
      ],
      [
        '¿Cuánto cuesta hasta el centro?',
        'How much does it cost to the center?',
        'Hasta + place means as far as. Ask before you get in.',
      ],
      [
        'Puede parar aquí, gracias.',
        'You can stop here, thanks.',
        'Puede + infinitive is a polite instruction with usted.',
      ],
    ],
    [
      ['Agent', 'Buenas tardes, ¿adónde va?', 'Good afternoon, where are you going?'],
      ['You', 'Al aeropuerto, por favor.', 'To the airport, please.'],
      ['Agent', 'Son unos veinte minutos.', 'It is about twenty minutes.'],
      ['You', '¿Cuánto cuesta hasta el centro?', 'How much does it cost to the center?'],
    ],
    'Say: To the airport, please.',
    'Al aeropuerto, por favor.',
    'A + el becomes al: al aeropuerto, not a el aeropuerto.',
  ),
  daily(
    'hotel-checkin',
    'Beginner',
    'Check in to a hotel',
    'Give your booking details and ask about the room and breakfast.',
    [
      [
        'Tengo una reserva a nombre de Alex Cruz.',
        'I have a reservation under the name Alex Cruz.',
        'A nombre de + name says under whose name. Alex is a sample name.',
      ],
      [
        '¿A qué hora es el desayuno?',
        'What time is breakfast?',
        'A qué hora asks at what time. Es is singular because desayuno is one meal.',
      ],
      [
        'Necesito una toalla más, por favor.',
        'I need one more towel, please.',
        'Más after the noun means one more. Toalla is feminine.',
      ],
    ],
    [
      ['Agent', 'Bienvenido. ¿Tiene una reserva?', 'Welcome. Do you have a reservation?'],
      [
        'You',
        'Tengo una reserva a nombre de Alex Cruz.',
        'I have a reservation under the name Alex Cruz.',
      ],
      ['Agent', 'Su habitación es la 305.', 'Your room is number 305.'],
      ['You', '¿A qué hora es el desayuno?', 'What time is breakfast?'],
    ],
    'Ask: What time is breakfast?',
    '¿A qué hora es el desayuno?',
    'A qué hora + es + singular noun. For plural things use son: ¿A qué hora son las clases?',
  ),
  daily(
    'grocery-market',
    'Beginner',
    'Buy food at the market',
    'Ask for amounts and prices of fruit and vegetables.',
    [
      [
        '¿A cómo están los tomates hoy?',
        'How much are the tomatoes today?',
        'A cómo está/están asks the price per unit in a market.',
      ],
      [
        'Deme un kilo de manzanas, por favor.',
        'Give me a kilo of apples, please.',
        'Deme is the formal command of dar + me. Un kilo de + noun gives an amount.',
      ],
      [
        '¿Están frescas las fresas?',
        'Are the strawberries fresh?',
        'Estar describes a condition. Fresas is feminine plural, so frescas.',
      ],
    ],
    [
      ['Agent', 'Buenos días, ¿qué le pongo?', 'Good morning, what can I get you?'],
      ['You', '¿A cómo están los tomates hoy?', 'How much are the tomatoes today?'],
      ['Agent', 'A dos dólares el kilo.', 'Two dollars a kilo.'],
      ['You', 'Deme un kilo de manzanas, por favor.', 'Give me a kilo of apples, please.'],
    ],
    'Say: Give me a kilo of apples, please.',
    'Deme un kilo de manzanas, por favor.',
    'Deme + amount + de + thing: the same pattern works for every product.',
  ),
  daily(
    'ask-directions',
    'Beginner',
    'Ask for directions',
    'Ask where a place is and understand simple directions.',
    [
      [
        'Disculpe, ¿dónde está la estación?',
        'Excuse me, where is the station?',
        'Disculpe gets attention politely. Dónde está asks where something is.',
      ],
      [
        '¿Está lejos de aquí?',
        'Is it far from here?',
        'Lejos de + place means far from. The opposite is cerca de.',
      ],
      [
        'Siga derecho y gire a la izquierda.',
        'Go straight and turn left.',
        'Siga and gire are formal commands. Derecha is right; izquierda is left.',
      ],
    ],
    [
      ['You', 'Disculpe, ¿dónde está la estación?', 'Excuse me, where is the station?'],
      ['Agent', 'Está a cinco minutos caminando.', 'It is five minutes away on foot.'],
      ['You', '¿Está lejos de aquí?', 'Is it far from here?'],
      ['Agent', 'No, siga derecho y gire a la izquierda.', 'No, go straight and turn left.'],
    ],
    'Ask: Excuse me, where is the station?',
    'Disculpe, ¿dónde está la estación?',
    'Use está for location, even for permanent places: ¿Dónde está el banco?',
  ),
  daily(
    'clothes-shopping',
    'Beginner',
    'Shop for clothes',
    'Ask for a size, try something on and ask about the price.',
    [
      [
        '¿Tiene esta camisa en talla mediana?',
        'Do you have this shirt in a medium size?',
        'Talla is clothing size. Zapatos use número instead.',
      ],
      [
        '¿Puedo probármela?',
        'Can I try it on?',
        'Probarse is reflexive. The pronoun la (the shirt) attaches after me: probármela.',
      ],
      [
        'Es un poco caro. ¿Tiene algo más barato?',
        'It is a little expensive. Do you have something cheaper?',
        'Más + adjective compares. Algo más barato means something cheaper.',
      ],
    ],
    [
      ['Agent', 'Hola, ¿le puedo ayudar?', 'Hello, can I help you?'],
      ['You', '¿Tiene esta camisa en talla mediana?', 'Do you have this shirt in a medium size?'],
      ['Agent', 'Sí, los probadores están al fondo.', 'Yes, the fitting rooms are at the back.'],
      ['You', '¿Puedo probármela?', 'Can I try it on?'],
    ],
    'Ask: Do you have this shirt in a medium size?',
    '¿Tiene esta camisa en talla mediana?',
    'En talla + size asks for a size. Say grande, mediana or pequeña.',
  ),
  daily(
    'phone-appointment',
    'Intermediate',
    'Make an appointment by phone',
    'Book, confirm and reschedule an appointment politely.',
    [
      [
        'Quisiera pedir una cita para el jueves por la mañana.',
        'I would like to book an appointment for Thursday morning.',
        'Pedir una cita is to book an appointment. Por la mañana means in the morning.',
      ],
      [
        '¿Tiene disponibilidad después de las cuatro?',
        'Do you have availability after four?',
        'Después de + time means after. Disponibilidad means availability.',
      ],
      [
        'Necesito cambiar la cita, porque tengo un imprevisto.',
        'I need to change the appointment, because something unexpected came up.',
        'Un imprevisto is an unexpected event. Porque gives the reason.',
      ],
    ],
    [
      ['Agent', 'Consultorio, buenas tardes.', 'Doctor’s office, good afternoon.'],
      [
        'You',
        'Quisiera pedir una cita para el jueves por la mañana.',
        'I would like to book an appointment for Thursday morning.',
      ],
      ['Agent', 'Solo tengo a las diez.', 'I only have ten o’clock.'],
      [
        'You',
        '¿Tiene disponibilidad después de las cuatro?',
        'Do you have availability after four?',
      ],
    ],
    'Say: I need to change the appointment because something came up.',
    'Necesito cambiar la cita, porque tengo un imprevisto.',
    'Give the reason in a short porque clause; no long apology is needed.',
  ),
  daily(
    'car-repair',
    'Intermediate',
    'Explain a problem at the mechanic',
    'Describe what is wrong with the car and ask about time and cost.',
    [
      [
        'El coche hace un ruido raro cuando freno.',
        'The car makes a strange noise when I brake.',
        'Cuando + present describes a habit or repeated event. Frenar is to brake.',
      ],
      [
        '¿Cuánto cree que costará la reparación?',
        'How much do you think the repair will cost?',
        'Cree que + future guesses a cost. Costará is the future of costar.',
      ],
      [
        '¿Para cuándo estará listo?',
        'By when will it be ready?',
        'Para cuándo asks for a deadline. Estará is the future of estar.',
      ],
    ],
    [
      ['Agent', 'Dígame, ¿qué le pasa al coche?', 'Tell me, what is wrong with the car?'],
      [
        'You',
        'El coche hace un ruido raro cuando freno.',
        'The car makes a strange noise when I brake.',
      ],
      ['Agent', 'Hay que revisar los frenos.', 'We need to check the brakes.'],
      [
        'You',
        '¿Cuánto cree que costará la reparación?',
        'How much do you think the repair will cost?',
      ],
    ],
    'Ask: By when will it be ready?',
    '¿Para cuándo estará listo?',
    'Ask for a price and a date before you approve the repair.',
  ),
  daily(
    'neighbor-noise',
    'Intermediate',
    'Talk to a noisy neighbor',
    'Raise a problem politely and suggest a fix.',
    [
      [
        'Perdone la molestia, pero se oye mucha música por la noche.',
        'Sorry to bother you, but a lot of music can be heard at night.',
        'Se oye is an impersonal way to say it can be heard. It avoids blame.',
      ],
      [
        '¿Podría bajar el volumen después de las diez?',
        'Could you lower the volume after ten?',
        'Podría + infinitive is a soft request. Bajar el volumen is lower the volume.',
      ],
      [
        'Se lo agradezco mucho.',
        'I really appreciate it.',
        'Se lo agradezco is polite. Lo stands for the favor and se replaces le.',
      ],
    ],
    [
      ['You', 'Buenas noches, perdone la molestia.', 'Good evening, sorry to bother you.'],
      ['Agent', 'No se preocupe, dígame.', 'Do not worry, tell me.'],
      [
        'You',
        'Se oye mucha música por la noche. ¿Podría bajar el volumen después de las diez?',
        'A lot of music can be heard at night. Could you lower the volume after ten?',
      ],
      ['Agent', 'Claro, lo siento mucho.', 'Of course, I am very sorry.'],
    ],
    'Ask: Could you lower the volume after ten?',
    '¿Podría bajar el volumen después de las diez?',
    'Start with a polite opener, state the problem without blame, then suggest one fix.',
  ),
  daily(
    'school-meeting',
    'Intermediate',
    'Meet your child’s teacher',
    'Ask how a child is doing and what support helps.',
    [
      [
        '¿Cómo le va a mi hijo en clase?',
        'How is my son doing in class?',
        'Irle bien/mal is to go well or badly. Le refers to the child.',
      ],
      [
        '¿Hay algo en lo que podamos ayudarlo en casa?',
        'Is there anything we can help him with at home?',
        'En lo que + subjunctive: something in which we can help. Podamos is subjunctive.',
      ],
      [
        'Me gustaría que me avisara si hay algún problema.',
        'I would like you to let me know if there is any problem.',
        'Me gustaría que + imperfect subjunctive is a very polite request.',
      ],
    ],
    [
      [
        'Agent',
        'Gracias por venir. Hablemos de su hijo.',
        'Thanks for coming. Let us talk about your son.',
      ],
      ['You', '¿Cómo le va a mi hijo en clase?', 'How is my son doing in class?'],
      [
        'Agent',
        'Va muy bien, pero necesita leer más.',
        'He is doing very well, but he needs to read more.',
      ],
      [
        'You',
        '¿Hay algo en lo que podamos ayudarlo en casa?',
        'Is there anything we can help him with at home?',
      ],
    ],
    'Ask: How is my son doing in class?',
    '¿Cómo le va a mi hijo en clase?',
    'Use mi hija for a daughter, and ayudarla instead of ayudarlo.',
  ),
  daily(
    'gym-membership',
    'Intermediate',
    'Join a gym',
    'Ask about prices, contracts and how to cancel.',
    [
      [
        '¿Cuánto cuesta la membresía mensual?',
        'How much does the monthly membership cost?',
        'Mensual means monthly; anual means yearly.',
      ],
      [
        '¿Hay que firmar un contrato de permanencia?',
        'Do I have to sign a minimum-term contract?',
        'Hay que + infinitive says what is necessary. Permanencia is the minimum period.',
      ],
      [
        'Si me doy de baja, ¿cómo lo hago?',
        'If I cancel, how do I do it?',
        'Darse de baja is to cancel or unsubscribe. Si + present describes a real possibility.',
      ],
    ],
    [
      [
        'Agent',
        'Bienvenido. ¿Le interesa una membresía?',
        'Welcome. Are you interested in a membership?',
      ],
      ['You', '¿Cuánto cuesta la membresía mensual?', 'How much does the monthly membership cost?'],
      ['Agent', 'Son treinta dólares al mes.', 'It is thirty dollars a month.'],
      [
        'You',
        '¿Hay que firmar un contrato de permanencia?',
        'Do I have to sign a minimum-term contract?',
      ],
    ],
    'Ask: How do I cancel?',
    'Si me doy de baja, ¿cómo lo hago?',
    'Always ask about cancellation before you sign.',
  ),
  daily(
    'birthday-invitation',
    'Intermediate',
    'Invite friends to a party',
    'Invite people, give the time and place and answer an invitation.',
    [
      [
        'Te invito a mi fiesta de cumpleaños el sábado.',
        'I invite you to my birthday party on Saturday.',
        'Invitar a + event. Te is the person invited.',
      ],
      [
        'Será a las siete en mi casa.',
        'It will be at seven at my house.',
        'Será is the future of ser, used for events. Time uses a las and a number.',
      ],
      [
        'Gracias por invitarme, pero no podré ir.',
        'Thanks for inviting me, but I will not be able to go.',
        'Por + infinitive thanks for an action. No podré ir uses the future of poder.',
      ],
    ],
    [
      [
        'You',
        'Te invito a mi fiesta de cumpleaños el sábado.',
        'I invite you to my birthday party on Saturday.',
      ],
      ['Agent', '¡Qué bien! ¿A qué hora es?', 'How nice! What time is it?'],
      ['You', 'Será a las siete en mi casa.', 'It will be at seven at my house.'],
      ['Agent', 'Perfecto, allí estaré.', 'Perfect, I will be there.'],
    ],
    'Say: I invite you to my birthday party on Saturday.',
    'Te invito a mi fiesta de cumpleaños el sábado.',
    'Add what to bring or where to park; it makes the invitation clear.',
  ),
];

// [id suffix, Taglish how it is formed, key idea, pro tip] for each lesson above.
export const dailySupport2 = [
  [
    'daily-restaurant-order',
    `Una mesa para dos = isang mesa para sa dalawa. Quisiera = gusto ko sana (magalang). Sin gas = walang bula (hindi sparkling).`,
    'Quisiera + item is the polite way to order.',
    'Ask the server what the dish of the day is: ¿Cuál es el plato del día?',
  ],
  [
    'daily-taxi-ride',
    `Al aeropuerto = papunta sa airport (a + el = al). ¿Cuánto cuesta? = magkano? Puede parar aquí = puwede kayong huminto dito.`,
    'In a taxi, a + place is enough to say where you go.',
    'Confirm the price or the meter before the ride starts.',
  ],
  [
    'daily-hotel-checkin',
    `Tengo una reserva = may reserbasyon ako. A nombre de = sa pangalan ni. ¿A qué hora es? = anong oras ito?`,
    'A nombre de + name tells who made the booking.',
    'Have your booking number ready: el número de reserva.',
  ],
  [
    'daily-grocery-market',
    `¿A cómo están? = magkano ang bawat isa? Deme = bigyan ninyo ako (utos na magalang ng dar). Un kilo de = isang kilong…`,
    'Deme + amount + de + thing buys anything at a market.',
    'Prices are per kilo or per piece: ask ¿Cuánto por kilo?',
  ],
  [
    'daily-ask-directions',
    `Disculpe = paumanhin po. ¿Dónde está…? = nasaan ang…? Siga derecho = dumiretso kayo. Gire a la izquierda = kumaliwa kayo.`,
    'Disculpe + ¿Dónde está…? is the standard way to ask the way.',
    'Repeat the directions back to check you heard them correctly.',
  ],
  [
    'daily-clothes-shopping',
    `¿Tiene…? = mayroon ba kayong…? Talla mediana = medium na sukat. Probármela = isukat ito (probar + me + la).`,
    'Probarse is reflexive: me pruebo, ¿puedo probármelo?',
    'Sizes differ by country: ask for the equivalent in the local system.',
  ],
  [
    'daily-phone-appointment',
    `Quisiera pedir una cita = gusto kong mag-book ng appointment. Después de las cuatro = pagkatapos ng alas-kuwatro. Un imprevisto = biglaang pangyayari.`,
    'Pedir una cita + day + time of day books an appointment.',
    'Repeat the date and time at the end to confirm it.',
  ],
  [
    'daily-car-repair',
    `Hace un ruido raro = may kakaibang ingay. Cuando freno = kapag nagpreno ako. Costará = magkakahalaga (future ng costar).`,
    'Cuando + present describes when a problem happens.',
    'Ask for a written estimate before the work starts.',
  ],
  [
    'daily-neighbor-noise',
    `Perdone la molestia = pasensya na sa abala. Se oye = naririnig (walang sinisisi). ¿Podría bajar…? = puwede po bang hinaan…? (conditional, magalang).`,
    'Se oye + noun states a problem without blaming anyone.',
    'Suggest a specific time, such as after ten, instead of asking for silence.',
  ],
  [
    'daily-school-meeting',
    `¿Cómo le va a mi hijo? = kumusta ang anak ko? En lo que podamos ayudarlo = sa anumang magagawa naming pagtulong (subjunctive). Me gustaría que me avisara = sana ay ipaalam ninyo sa akin.`,
    'Irle bien/mal to someone asks how things are going for them.',
    'Ask for one concrete thing to practice at home.',
  ],
  [
    'daily-gym-membership',
    `Membresía mensual = buwanang membership. Hay que firmar = kailangang pumirma. Darse de baja = mag-cancel ng subscription.`,
    'Hay que + infinitive states what is required.',
    'Ask about the cancellation rule and any fee before you sign.',
  ],
  [
    'daily-birthday-invitation',
    `Te invito a = iniimbitahan kita sa. Será a las siete = ganap na alas-siyete (future ng ser). Gracias por invitarme = salamat sa pag-imbita sa akin.`,
    'Invitar a + event, then give the day, time and place.',
    'Reply to an invitation within a day, even to decline.',
  ],
];
