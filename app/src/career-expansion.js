// Original training scenarios for the Bilingual Career Spanish course. Amounts, policies and
// outcomes are fictional teaching examples, not employer commitments.
const makeModule = (
  id,
  category,
  title,
  level,
  objective,
  phrases,
  dialogue,
  practice,
  model,
  coaching,
) => ({
  id: 'work-' + id,
  category,
  title,
  level,
  objective,
  phrases,
  dialogue,
  practice,
  model,
  coaching,
});

export const careerExpansion = [
  // ---------- Level 1 ----------
  makeModule(
    'numbers-spelling',
    'Customer care',
    'Read back numbers and spell names',
    'Beginner',
    'Confirm account numbers and spelling accurately by reading them back.',
    [
      [
        '¿Me puede dar su número de cuenta, dígito por dígito?',
        'Can you give me your account number, digit by digit?',
        'Reading digit by digit prevents errors; pause between groups.',
      ],
      [
        'Voy a repetirlo: cuatro, cinco, siete, dos.',
        'I am going to repeat it: four, five, seven, two.',
        'Read numbers back in small groups and wait for a yes.',
      ],
      [
        '¿Es “b” de barco o “v” de vaca?',
        'Is it “b” as in boat or “v” as in cow?',
        'B and v sound alike in most accents. Use a clarifying word; the words people choose vary by region.',
      ],
    ],
    [
      ['Agent', 'Necesito su número de cuenta.', 'I need your account number.'],
      ['Customer', 'Es el cuatro, cinco, siete, dos.', 'It is four, five, seven, two.'],
      [
        'Agent',
        'Voy a repetirlo: cuatro, cinco, siete, dos. ¿Es correcto?',
        'I am going to repeat it: four, five, seven, two. Is that correct?',
      ],
      ['Customer', 'Sí, es correcto.', 'Yes, that is correct.'],
    ],
    'Say: I am going to repeat it. Use voy a; repetirlo = repeat it.',
    'Voy a repetirlo.',
    'Voy a + infinitive announces what you will do; the pronoun lo attaches to the infinitive: repetirlo.',
  ),
  makeModule(
    'contact-details',
    'Customer care',
    'Confirm phone, email and address',
    'Beginner',
    'Collect contact details clearly and read them back.',
    [
      [
        '¿Cuál es el mejor número para contactarle?',
        'What is the best number to reach you?',
        'Contactarle uses usted. Ask which number the customer prefers.',
      ],
      [
        '¿Puede deletrear su correo electrónico?',
        'Can you spell your email address?',
        'Say arroba for @, punto for the dot and guion bajo for an underscore.',
      ],
      [
        'Confirmo: el correo es ana arroba ejemplo punto com.',
        'I confirm: the email is ana at example dot com.',
        'Read the address back slowly and ask for confirmation.',
      ],
    ],
    [
      [
        'Agent',
        'Para enviarle el resumen, ¿cuál es su correo electrónico?',
        'To send you the summary, what is your email address?',
      ],
      [
        'Customer',
        'Es maria punto lopez arroba correo punto com.',
        'It is maria dot lopez at correo dot com.',
      ],
      [
        'Agent',
        'Confirmo: maria punto lopez arroba correo punto com. ¿Es correcto?',
        'I confirm: maria dot lopez at correo dot com. Is that correct?',
      ],
      ['Customer', 'Sí, así es.', 'Yes, that is right.'],
    ],
    'Ask: Can you spell your email address? Use puede; email = correo electrónico.',
    '¿Puede deletrear su correo electrónico?',
    'Deletrear means to spell out; keep the question in usted with puede.',
  ),
  makeModule(
    'business-hours',
    'Customer care',
    'State hours and schedule a callback',
    'Beginner',
    'Give opening hours and agree a time that works for the customer.',
    [
      [
        'Nuestro horario es de lunes a viernes, de nueve a seis.',
        'Our hours are Monday to Friday, nine to six.',
        'De … a … gives a range. Confirm the time zone if the customer is in another country.',
      ],
      [
        'Puedo programar una llamada para mañana a las diez.',
        'I can schedule a call for tomorrow at ten.',
        'A las + hour states the time. Mañana can mean tomorrow or morning, so context matters.',
      ],
      [
        '¿Le conviene ese horario?',
        'Does that time work for you?',
        'Convenir means to suit; le conviene is a polite way to check.',
      ],
    ],
    [
      ['Customer', '¿Hasta qué hora atienden?', 'Until what time do you serve customers?'],
      [
        'Agent',
        'Atendemos hasta las seis de la tarde.',
        'We serve customers until six in the evening.',
      ],
      ['Customer', 'Prefiero que me llamen mañana.', 'I would prefer that you call me tomorrow.'],
      [
        'Agent',
        'Perfecto. Puedo programar una llamada mañana a las diez. ¿Le conviene?',
        'Perfect. I can schedule a call tomorrow at ten. Does that suit you?',
      ],
    ],
    'Ask: Does that time work for you? Use conviene; horario = schedule.',
    '¿Le conviene ese horario?',
    'Le conviene is a polite check, not a command. It agrees with the singular noun horario.',
  ),
  makeModule(
    'device-description',
    'Technical support',
    'Ask which device and app',
    'Beginner',
    'Find out what device, app version and message the customer sees.',
    [
      [
        '¿Qué dispositivo está usando: teléfono, tableta o computadora?',
        'Which device are you using: phone, tablet or computer?',
        'Offer options so customers can answer with one word.',
      ],
      [
        '¿Qué versión de la aplicación tiene?',
        'Which version of the app do you have?',
        'Versión is feminine. Tener is used for what the customer has installed.',
      ],
      [
        '¿Aparece algún mensaje en la pantalla?',
        'Does any message appear on the screen?',
        'Algún goes before a masculine singular noun; mensaje is masculine.',
      ],
    ],
    [
      ['Agent', '¿Qué dispositivo está usando?', 'Which device are you using?'],
      ['Customer', 'Estoy usando mi teléfono.', 'I am using my phone.'],
      ['Agent', '¿Qué versión de la aplicación tiene?', 'Which version of the app do you have?'],
      ['Customer', 'No lo sé. ¿Dónde la veo?', 'I do not know. Where do I see it?'],
    ],
    'Ask: Which device are you using? Use está usando.',
    '¿Qué dispositivo está usando?',
    'Está usando is estar + gerund: what the customer is doing right now.',
  ),
  makeModule(
    'billing-basics',
    'Billing',
    'Name the parts of a bill',
    'Beginner',
    'Explain the total, the tax and the monthly charge in plain Spanish.',
    [
      [
        'El total incluye el impuesto y el cargo mensual.',
        'The total includes tax and the monthly charge.',
        'Impuesto means tax and cargo mensual means monthly charge. Some countries say IVA for sales tax.',
      ],
      [
        'La tarifa del plan es de veinte dólares al mes.',
        'The plan rate is twenty dollars per month.',
        'Tarifa is a rate; al mes means per month.',
      ],
      [
        '¿Quiere que le explique cada cargo?',
        'Would you like me to explain each charge?',
        'Quiere que + subjunctive offers an action; le explique is the subjunctive of explicar.',
      ],
    ],
    [
      ['Customer', '¿Por qué mi factura es más alta?', 'Why is my bill higher?'],
      [
        'Agent',
        'Voy a revisar el desglose con usted.',
        'I am going to review the breakdown with you.',
      ],
      ['Customer', 'Veo un cargo nuevo.', 'I see a new charge.'],
      [
        'Agent',
        'Sí, el total incluye el impuesto y un cargo adicional.',
        'Yes, the total includes the tax and an additional charge.',
      ],
    ],
    'Say: The total includes tax. Use incluye; tax = el impuesto.',
    'El total incluye el impuesto.',
    'Incluye is the third-person singular of incluir; it agrees with el total.',
  ),
  makeModule(
    'polite-no',
    'Resolution',
    'Decline politely and offer an alternative',
    'Beginner',
    'Say what you cannot do, then immediately offer what you can.',
    [
      [
        'Lamentablemente, no puedo hacer eso, pero puedo ofrecerle otra opción.',
        'Unfortunately, I cannot do that, but I can offer you another option.',
        'Say what you can do right after what you cannot.',
      ],
      [
        'Esa función no está disponible en su plan.',
        'That feature is not available on your plan.',
        'Estar disponible means to be available. State facts, not blame.',
      ],
      [
        'Si le parece bien, puedo enviarle una solicitud.',
        'If that sounds good to you, I can send a request.',
        'Si le parece bien is a courteous way to propose a next step.',
      ],
    ],
    [
      ['Customer', 'Quiero esa función gratis.', 'I want that feature for free.'],
      [
        'Agent',
        'Entiendo. Esa función no está disponible en su plan.',
        'I understand. That feature is not available on your plan.',
      ],
      ['Customer', '¿Entonces qué hago?', 'So what do I do?'],
      [
        'Agent',
        'Puedo ofrecerle otra opción. ¿Se la explico?',
        'I can offer you another option. Shall I explain it?',
      ],
    ],
    'Say: Unfortunately, I cannot do that.',
    'Lamentablemente, no puedo hacer eso.',
    'Lamentablemente opens the refusal; follow it right away with an alternative.',
  ),

  // ---------- Level 3 ----------
  makeModule(
    'retention-offer',
    'Billing',
    'Offer alternatives before a cancellation',
    'Advanced',
    'Make one respectful offer, then process the cancellation if the customer still wants it.',
    [
      [
        'Antes de cancelar, ¿me permite ofrecerle un plan más económico?',
        'Before cancelling, may I offer you a cheaper plan?',
        'Ask permission before making an offer and never pressure the customer.',
      ],
      [
        'Si prefiere cancelar, con gusto le ayudo.',
        'If you prefer to cancel, I will gladly help you.',
        'Respect the decision and make the cancellation path clear.',
      ],
      [
        'La cancelación será efectiva el último día del ciclo de facturación.',
        'The cancellation will take effect on the last day of the billing cycle.',
        'Será + adjective states a future fact. Give the exact date when possible.',
      ],
    ],
    [
      ['Customer', 'Quiero cancelar mi servicio.', 'I want to cancel my service.'],
      [
        'Agent',
        'Lamento que se vaya. Antes de cancelar, ¿me permite ofrecerle un plan más económico?',
        'I am sorry you are leaving. Before cancelling, may I offer you a cheaper plan?',
      ],
      ['Customer', 'No, gracias. Quiero cancelar.', 'No, thank you. I want to cancel.'],
      [
        'Agent',
        'Entendido. Con gusto le ayudo. La cancelación será efectiva el último día del ciclo.',
        'Understood. I will gladly help you. The cancellation will take effect on the last day of the cycle.',
      ],
    ],
    'Say: If you prefer to cancel, I will gladly help you.',
    'Si prefiere cancelar, con gusto le ayudo.',
    'Si prefiere + infinitive offers the choice; con gusto means gladly.',
  ),
  makeModule(
    'disclosure',
    'Resolution',
    'Read a required disclosure',
    'Advanced',
    'Read mandatory wording clearly and get an explicit yes.',
    [
      [
        'Por motivos legales, debo leerle la siguiente información.',
        'For legal reasons, I must read you the following information.',
        'Announce that you are reading a required statement.',
      ],
      [
        'Esta llamada puede ser grabada con fines de calidad.',
        'This call may be recorded for quality purposes.',
        'Follow your company’s approved wording. Rules about recording differ by region.',
      ],
      [
        '¿Entiende y acepta estas condiciones?',
        'Do you understand and accept these terms?',
        'Ask for an explicit yes; do not treat silence as consent.',
      ],
    ],
    [
      [
        'Agent',
        'Por motivos legales, debo leerle la siguiente información.',
        'For legal reasons, I must read you the following information.',
      ],
      ['Customer', 'De acuerdo.', 'All right.'],
      [
        'Agent',
        'Esta llamada puede ser grabada con fines de calidad. ¿Entiende y acepta estas condiciones?',
        'This call may be recorded for quality purposes. Do you understand and accept these terms?',
      ],
      ['Customer', 'Sí, entiendo y acepto.', 'Yes, I understand and I accept.'],
    ],
    'Ask: Do you understand and accept these terms?',
    '¿Entiende y acepta estas condiciones?',
    'Entiende and acepta are both usted forms. Wait for a clear yes.',
  ),
  makeModule(
    'escalation-summary',
    'Resolution',
    'Write a clear escalation summary',
    'Advanced',
    'Hand a case to another team with facts, steps taken and the request.',
    [
      [
        'Resumen del caso: el cliente informa que no puede iniciar sesión desde el lunes.',
        'Case summary: the customer reports being unable to sign in since Monday.',
        'Open with the problem and the start date. Keep facts separate from opinions.',
      ],
      [
        'Pasos realizados: restablecimiento de contraseña y limpieza de caché.',
        'Steps taken: password reset and cache clearing.',
        'List what you already tried so nobody repeats it.',
      ],
      [
        'Se solicita revisión por el equipo técnico.',
        'Review by the technical team is requested.',
        'Impersonal se keeps professional notes neutral.',
      ],
    ],
    [
      [
        'Agent',
        'Voy a escalar el caso al equipo técnico.',
        'I am going to escalate the case to the technical team.',
      ],
      [
        'Customer',
        '¿Qué información van a recibir?',
        'What information are they going to receive?',
      ],
      [
        'Agent',
        'Un resumen con los pasos que ya realizamos.',
        'A summary with the steps we already took.',
      ],
      ['Customer', 'Perfecto, gracias.', 'Perfect, thank you.'],
    ],
    'Write: Review by the technical team is requested. Use se solicita.',
    'Se solicita revisión por el equipo técnico.',
    'Impersonal se + solicita keeps the note neutral and professional.',
  ),
  makeModule(
    'payment-plan',
    'Billing',
    'Offer a payment arrangement',
    'Advanced',
    'Propose a realistic payment plan without pressure and confirm the dates.',
    [
      [
        'Podemos dividir el saldo pendiente en tres pagos.',
        'We can split the outstanding balance into three payments.',
        'Dividir en + number of payments. Confirm any fees before the customer agrees.',
      ],
      [
        'El primer pago vence el quince de este mes.',
        'The first payment is due on the fifteenth of this month.',
        'Vencer means to be due. Always state the date and the amount.',
      ],
      [
        '¿Le parece viable este plan de pagos?',
        'Does this payment plan seem workable to you?',
        'Viable invites an honest answer about what the customer can afford.',
      ],
    ],
    [
      ['Customer', 'No puedo pagar todo este mes.', 'I cannot pay everything this month.'],
      [
        'Agent',
        'Entiendo. Podemos dividir el saldo pendiente en tres pagos.',
        'I understand. We can split the outstanding balance into three payments.',
      ],
      ['Customer', '¿De cuánto sería cada pago?', 'How much would each payment be?'],
      [
        'Agent',
        'Serían cien dólares cada uno. ¿Le parece viable?',
        'They would be one hundred dollars each. Does that seem workable?',
      ],
    ],
    'Say: We can split the balance into three payments. Use podemos dividir.',
    'Podemos dividir el saldo en tres pagos.',
    'Podemos + infinitive offers an option; dividir en tres pagos names how.',
  ),
  makeModule(
    'executive-customer',
    'Empathy',
    'Serve a customer with little time',
    'Advanced',
    'Respect limited time with clear options and a written follow-up.',
    [
      [
        'Agradezco su paciencia; voy a darle prioridad a su caso.',
        'I appreciate your patience; I am going to prioritize your case.',
        'Only promise priority if your process allows it.',
      ],
      [
        'Le propongo dos opciones para resolverlo hoy.',
        'I propose two options to resolve it today.',
        'Two clear options respect the customer’s time.',
      ],
      [
        'Le enviaré la confirmación por escrito en cuanto termine la llamada.',
        'I will send you written confirmation as soon as the call ends.',
        'En cuanto + subjunctive refers to a future event: termine.',
      ],
    ],
    [
      [
        'Customer',
        'Tengo poco tiempo y necesito una respuesta ahora.',
        'I have little time and I need an answer now.',
      ],
      [
        'Agent',
        'Agradezco su paciencia. Le propongo dos opciones para resolverlo hoy.',
        'I appreciate your patience. I propose two options to resolve it today.',
      ],
      ['Customer', 'Dígame la más rápida.', 'Tell me the fastest one.'],
      [
        'Agent',
        'La primera es un reemplazo hoy mismo. Le enviaré la confirmación en cuanto termine la llamada.',
        'The first is a replacement today. I will send you the confirmation as soon as the call ends.',
      ],
    ],
    'Say: I propose two options. Use le propongo; opciones = options.',
    'Le propongo dos opciones.',
    'Le propongo + number + opciones is direct and respectful.',
  ),
  makeModule(
    'security-report',
    'Technical support',
    'Respond to a suspected account compromise',
    'Advanced',
    'Protect the account first, then guide the customer without asking for secrets.',
    [
      [
        'Por su seguridad, vamos a bloquear la cuenta temporalmente.',
        'For your security, we are going to block the account temporarily.',
        'Explain the protection first; the customer may be anxious.',
      ],
      [
        'Cambie su contraseña desde la página oficial y active la verificación en dos pasos.',
        'Change your password from the official page and turn on two-step verification.',
        'Never ask for a password. Send customers to the official page.',
      ],
      [
        'Si ve movimientos que no reconoce, repórtelos de inmediato.',
        'If you see transactions you do not recognize, report them immediately.',
        'Ve and reconoce are usted forms; repórtelos attaches the pronoun and keeps its accent.',
      ],
    ],
    [
      ['Customer', 'Creo que alguien entró a mi cuenta.', 'I think someone got into my account.'],
      [
        'Agent',
        'Lamento esa preocupación. Por su seguridad, vamos a bloquear la cuenta temporalmente.',
        'I am sorry for that concern. For your security, we are going to block the account temporarily.',
      ],
      ['Customer', '¿Qué debo hacer?', 'What should I do?'],
      [
        'Agent',
        'Cambie su contraseña desde la página oficial y active la verificación en dos pasos.',
        'Change your password from the official page and turn on two-step verification.',
      ],
    ],
    'Say: For your security, we are going to block the account.',
    'Por su seguridad, vamos a bloquear la cuenta.',
    'Por su seguridad gives the reason first; vamos a + infinitive states the action.',
  ),
  makeModule(
    'intermittent-issue',
    'Technical support',
    'Diagnose a problem that comes and goes',
    'Advanced',
    'Find the pattern behind an intermittent fault with focused questions.',
    [
      [
        '¿Con qué frecuencia ocurre el problema?',
        'How often does the problem occur?',
        'Frequency questions help you find a pattern.',
      ],
      [
        '¿Ocurre a una hora específica o con una acción concreta?',
        'Does it happen at a specific time or with a particular action?',
        'O offers two possibilities so the customer can choose.',
      ],
      [
        'Vamos a anotar cada vez que ocurra, con la hora y lo que estaba haciendo.',
        'We are going to note every time it happens, with the time and what you were doing.',
        'Cada vez que + subjunctive refers to an event that has not happened yet: ocurra.',
      ],
    ],
    [
      ['Customer', 'A veces la conexión se cae.', 'Sometimes the connection drops.'],
      ['Agent', '¿Con qué frecuencia ocurre?', 'How often does it happen?'],
      ['Customer', 'Dos o tres veces al día.', 'Two or three times a day.'],
      [
        'Agent',
        '¿Ocurre a una hora específica o con una acción concreta?',
        'Does it happen at a specific time or with a particular action?',
      ],
    ],
    'Ask: How often does the problem occur? Use con qué frecuencia.',
    '¿Con qué frecuencia ocurre el problema?',
    'Con qué frecuencia asks how often; ocurre agrees with el problema.',
  ),
  makeModule(
    'coaching-feedback',
    'Resolution',
    'Give a colleague constructive feedback',
    'Advanced',
    'Start with a specific strength, add one suggestion and invite a reply.',
    [
      [
        'Me gustó cómo explicaste el cargo; fue muy claro.',
        'I liked how you explained the charge; it was very clear.',
        'Start with a specific strength using me gustó + cómo.',
      ],
      [
        'Una sugerencia: confirma la fecha antes de cerrar el caso.',
        'One suggestion: confirm the date before closing the case.',
        'Una sugerencia softens the advice. Use tú with peers if that is your team’s norm.',
      ],
      [
        '¿Qué te pareció la llamada?',
        'What did you think of the call?',
        'Ask for self-assessment first; it makes feedback easier to hear.',
      ],
    ],
    [
      [
        'Agent',
        'Me gustó cómo explicaste el cargo; fue muy claro.',
        'I liked how you explained the charge; it was very clear.',
      ],
      ['Partner', 'Gracias. ¿Algo que pueda mejorar?', 'Thanks. Anything I can improve?'],
      [
        'Agent',
        'Una sugerencia: confirma la fecha antes de cerrar el caso.',
        'One suggestion: confirm the date before closing the case.',
      ],
      ['Partner', 'Entendido, lo haré.', 'Understood, I will do that.'],
    ],
    'Say: One suggestion: confirm the date.',
    'Una sugerencia: confirma la fecha.',
    'Confirma is the tú command of confirmar; feedback among peers often uses tú.',
  ),
];
