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

  // ---------- Level 3, second batch ----------
  makeModule(
    'negotiation-terms',
    'Billing',
    'Negotiate renewal terms',
    'Advanced',
    'Acknowledge a price concern, offer a conditional option and confirm the terms in writing.',
    [
      [
        'Entiendo que el aumento le preocupa; veamos qué opciones tenemos.',
        'I understand the increase worries you; let us see what options we have.',
        'Acknowledge the concern first, then move to options.',
      ],
      [
        'Podríamos mantener el precio actual si renueva por doce meses.',
        'We could keep the current price if you renew for twelve months.',
        'Podríamos + infinitive offers a conditional option; si + present states the condition.',
      ],
      [
        'Le enviaré las condiciones por escrito para que las revise con calma.',
        'I will send you the terms in writing so that you can review them calmly.',
        'Para que + subjunctive gives the purpose: las revise.',
      ],
    ],
    [
      ['Customer', 'No estoy de acuerdo con el aumento.', 'I do not agree with the increase.'],
      [
        'Agent',
        'Entiendo. Podríamos mantener el precio actual si renueva por doce meses.',
        'I understand. We could keep the current price if you renew for twelve months.',
      ],
      ['Customer', '¿Y si no quiero un contrato largo?', 'And if I do not want a long contract?'],
      [
        'Agent',
        'Entonces aplicaría la tarifa nueva. Le enviaré las condiciones por escrito.',
        'Then the new rate would apply. I will send you the terms in writing.',
      ],
    ],
    'Say: We could keep the current price. Use podríamos mantener.',
    'Podríamos mantener el precio actual.',
    'Podríamos + infinitive is a polite conditional offer. Never promise what you cannot approve.',
  ),
  makeModule(
    'followup-email',
    'Customer care',
    'Write a follow-up email after a call',
    'Advanced',
    'Summarize what was agreed, list next steps and invite a reply.',
    [
      [
        'Gracias por su llamada de hoy; le escribo para resumir lo acordado.',
        'Thank you for today’s call; I am writing to summarize what we agreed.',
        'State the purpose first. Lo acordado means what was agreed.',
      ],
      [
        'Los próximos pasos son: primero, reinicie el equipo; después, pruebe de nuevo.',
        'The next steps are: first, restart the device; then try again.',
        'Usted commands (reinicie, pruebe) keep instructions short and clear.',
      ],
      [
        'Si el problema continúa, responda a este correo y retomaremos su caso.',
        'If the problem continues, reply to this email and we will resume your case.',
        'Si + present, then a command or the future.',
      ],
    ],
    [
      [
        'Agent',
        'Voy a enviarle un resumen por correo.',
        'I am going to send you a summary by email.',
      ],
      ['Customer', 'Perfecto, ¿qué incluirá?', 'Perfect, what will it include?'],
      [
        'Agent',
        'Los pasos que acordamos y su número de caso.',
        'The steps we agreed on and your case number.',
      ],
      ['Customer', 'Muchas gracias.', 'Thank you very much.'],
    ],
    'Write: Thank you for today’s call. Use gracias por su llamada.',
    'Gracias por su llamada de hoy.',
    'Gracias por + noun is the standard opening for a follow-up message.',
  ),
  makeModule(
    'privacy-request',
    'Resolution',
    'Handle a request about personal data',
    'Advanced',
    'Verify identity, explain the process and confirm in writing without over-promising.',
    [
      [
        'Entiendo que desea que eliminemos sus datos personales.',
        'I understand you want us to delete your personal data.',
        'Desear que + subjunctive: eliminemos.',
      ],
      [
        'Para proteger su información, primero debemos verificar su identidad.',
        'To protect your information, we must first verify your identity.',
        'Para + infinitive states the purpose; debemos + infinitive states the requirement.',
      ],
      [
        'Procesaremos su solicitud y le confirmaremos por escrito.',
        'We will process your request and confirm it to you in writing.',
        'Use the future for next steps. Give a date only if your policy states one.',
      ],
    ],
    [
      [
        'Customer',
        'Quiero que borren mis datos de su sistema.',
        'I want you to delete my data from your system.',
      ],
      [
        'Agent',
        'Entiendo. Para proteger su información, primero debemos verificar su identidad.',
        'I understand. To protect your information, we must first verify your identity.',
      ],
      ['Customer', 'De acuerdo, ¿qué necesita?', 'All right, what do you need?'],
      [
        'Agent',
        'Le enviaré un enlace oficial. Después procesaremos su solicitud.',
        'I will send you an official link. Then we will process your request.',
      ],
    ],
    'Say: We must first verify your identity.',
    'Primero debemos verificar su identidad.',
    'Primero marks the order; debemos + infinitive states the requirement.',
  ),
  makeModule(
    'service-credit',
    'Billing',
    'Offer a credit after an outage',
    'Advanced',
    'Apologize, explain the credit and say exactly when the customer will see it.',
    [
      [
        'Lamentamos la interrupción; vamos a aplicar un crédito en su próxima factura.',
        'We are sorry for the interruption; we are going to apply a credit to your next bill.',
        'Name the problem, then the action and where it will appear.',
      ],
      [
        'El crédito corresponde a los días sin servicio.',
        'The credit corresponds to the days without service.',
        'Corresponder a means to correspond to; it explains how the amount was calculated.',
      ],
      [
        'Lo verá reflejado en el siguiente ciclo de facturación.',
        'You will see it reflected in the next billing cycle.',
        'Verá is the future of ver; reflejado agrees with lo (el crédito).',
      ],
    ],
    [
      ['Customer', 'Estuve tres días sin internet.', 'I was without internet for three days.'],
      [
        'Agent',
        'Lamentamos la interrupción. Vamos a aplicar un crédito en su próxima factura.',
        'We are sorry for the interruption. We are going to apply a credit to your next bill.',
      ],
      ['Customer', '¿De cuánto es?', 'How much is it?'],
      [
        'Agent',
        'Corresponde a los tres días sin servicio. Lo verá en el siguiente ciclo.',
        'It corresponds to the three days without service. You will see it in the next cycle.',
      ],
    ],
    'Say: We are going to apply a credit to your next bill.',
    'Vamos a aplicar un crédito en su próxima factura.',
    'Vamos a + infinitive states the action; en su próxima factura says where it appears.',
  ),
  makeModule(
    'review-threat',
    'Empathy',
    'Respond to a threat of a bad review',
    'Advanced',
    'Stay calm, name the feeling and refocus on a solution without arguing.',
    [
      [
        'Comprendo su molestia y quiero resolver esto hoy.',
        'I understand your annoyance and I want to resolve this today.',
        'Name the feeling and the goal. Do not argue about the review.',
      ],
      [
        'Me gustaría revisar con usted qué ocurrió para encontrar una solución justa.',
        'I would like to review with you what happened to find a fair solution.',
        'Me gustaría is a polite conditional that invites cooperation.',
      ],
      [
        'Su opinión nos ayuda a mejorar, y estoy aquí para ayudarle ahora.',
        'Your opinion helps us improve, and I am here to help you now.',
        'Refocus on what you can do right now.',
      ],
    ],
    [
      ['Customer', 'Voy a poner una reseña terrible.', 'I am going to post a terrible review.'],
      [
        'Agent',
        'Comprendo su molestia y quiero resolver esto hoy.',
        'I understand your annoyance and I want to resolve this today.',
      ],
      ['Customer', 'Ya llamé tres veces.', 'I have already called three times.'],
      [
        'Agent',
        'Me gustaría revisar con usted qué ocurrió para encontrar una solución justa.',
        'I would like to review with you what happened to find a fair solution.',
      ],
    ],
    'Say: I want to resolve this today.',
    'Quiero resolver esto hoy.',
    'Quiero + infinitive is direct; esto points to the issue without blaming anyone.',
  ),
  makeModule(
    'three-way-call',
    'Customer care',
    'Add a supervisor to the call',
    'Advanced',
    'Ask consent, brief the third person and make sure the customer does not repeat the story.',
    [
      [
        'Voy a unir a mi supervisora a la llamada; ¿le parece bien?',
        'I am going to add my supervisor to the call; is that all right with you?',
        'Ask consent before adding someone to a call.',
      ],
      [
        'Le resumo brevemente el caso para que usted no tenga que repetirlo.',
        'I will briefly summarize the case so that you do not have to repeat it.',
        'Para que + subjunctive: no tenga que repetirlo.',
      ],
      [
        'Gracias por esperar; ya estamos los tres en línea.',
        'Thank you for waiting; all three of us are on the line now.',
        'Ya estamos los tres means all three of us are here.',
      ],
    ],
    [
      [
        'Agent',
        'Voy a unir a mi supervisora a la llamada. ¿Le parece bien?',
        'I am going to add my supervisor to the call. Is that all right with you?',
      ],
      ['Customer', 'Sí, adelante.', 'Yes, go ahead.'],
      [
        'Agent',
        'Gracias por esperar; ya estamos los tres en línea.',
        'Thank you for waiting; all three of us are on the line now.',
      ],
      [
        'Agent',
        'Le resumo el caso para que usted no tenga que repetirlo.',
        'I will summarize the case so that you do not have to repeat it.',
      ],
    ],
    'Ask: Is that all right with you? Use le parece bien.',
    '¿Le parece bien?',
    'Le parece bien is the polite way to ask for agreement.',
  ),
  makeModule(
    'maintenance-window',
    'Technical support',
    'Announce a maintenance window',
    'Advanced',
    'Give the date, the impact and what customers should do before it starts.',
    [
      [
        'El servicio estará en mantenimiento el sábado de dos a cuatro de la madrugada.',
        'The service will be under maintenance on Saturday from two to four in the morning.',
        'Estará is the future of estar. De la madrugada means in the early morning hours.',
      ],
      [
        'Durante ese tiempo, no podrá iniciar sesión ni descargar archivos.',
        'During that time, you will not be able to sign in or download files.',
        'No podrá + infinitive; ni means nor.',
      ],
      [
        'Le recomiendo guardar su trabajo antes de que empiece el mantenimiento.',
        'I recommend saving your work before the maintenance begins.',
        'Antes de que + subjunctive: empiece.',
      ],
    ],
    [
      ['Customer', '¿Por qué no puedo entrar al sistema?', 'Why can I not get into the system?'],
      [
        'Agent',
        'El servicio estará en mantenimiento el sábado de dos a cuatro de la madrugada.',
        'The service will be under maintenance on Saturday from two to four in the morning.',
      ],
      ['Customer', '¿Perderé mi trabajo?', 'Will I lose my work?'],
      [
        'Agent',
        'No, pero le recomiendo guardar su trabajo antes de que empiece.',
        'No, but I recommend saving your work before it begins.',
      ],
    ],
    'Say: I recommend saving your work. Use le recomiendo.',
    'Le recomiendo guardar su trabajo.',
    'Recomendar + infinitive works when the advice is general; add que + subjunctive for a specific person.',
  ),
  makeModule(
    'survey-close',
    'Customer care',
    'Close the call and invite a survey',
    'Advanced',
    'Check for anything else, mention the survey and end warmly.',
    [
      [
        '¿Hay algo más en lo que pueda ayudarle?',
        'Is there anything else I can help you with?',
        'Algo más en lo que + subjunctive: pueda.',
      ],
      [
        'Recibirá una breve encuesta; su opinión es muy importante.',
        'You will receive a short survey; your opinion is very important.',
        'Recibirá is the future. Keep the invitation brief and optional.',
      ],
      [
        'Gracias por su tiempo y que tenga un excelente día.',
        'Thank you for your time and have an excellent day.',
        'Que tenga + noun wishes someone well (subjunctive).',
      ],
    ],
    [
      [
        'Agent',
        '¿Hay algo más en lo que pueda ayudarle?',
        'Is there anything else I can help you with?',
      ],
      ['Customer', 'No, eso es todo. Gracias.', 'No, that is all. Thank you.'],
      [
        'Agent',
        'Recibirá una breve encuesta; su opinión es muy importante.',
        'You will receive a short survey; your opinion is very important.',
      ],
      [
        'Agent',
        'Gracias por su tiempo y que tenga un excelente día.',
        'Thank you for your time and have an excellent day.',
      ],
    ],
    'Say: Have an excellent day. Use que tenga.',
    'Que tenga un excelente día.',
    'Que + subjunctive wishes someone well; it is a polite way to end the call.',
  ),
];
