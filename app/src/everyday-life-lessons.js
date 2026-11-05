import { L } from './home-world-lessons.js';
import { grid } from './school-basics-1.js';

// Everyday Spanish for adults: pharmacy, transport, banking, renting, job interviews and email.
export const LIFE_A2 = 'Real life: health and getting around';
export const LIFE_B1 = 'Real life: money, housing and work';

export const everydayLifeLessons = [
  L(
    [
      'rl-pharmacy-medical',
      'A2',
      'At the pharmacy and doctor: symptoms and medicine.',
      LIFE_A2,
      'Me duele la garganta y tengo fiebre; ¿qué medicina me recomienda?',
      'My throat hurts and I have a fever; what medicine do you recommend?',
      'Ang me duele ay masakit ang. Ang fiebre ay lagnat, ang tos ay ubo, ang receta ay reseta. Itanong: ¿qué me recomienda?',
      'Say me duele + body part (singular) or me duelen + plural. Symptoms: tengo fiebre, tos, dolor de cabeza, náuseas. At the pharmacy ask for una pastilla, un jarabe, una crema. A prescription is una receta.',
    ],
    [
      'me duele / me duelen + body part',
      'Singular duele, plural duelen.',
      'Me duelen los pies.',
      'Do not say tengo dolor la cabeza. Say me duele la cabeza or tengo dolor de cabeza.',
    ],
    [
      'Which sentence means "my feet hurt"?',
      ['Me duelen los pies.', 'Me duele los pies.', 'Tengo duelo los pies.'],
      'Me duelen los pies.',
      'Pies is plural, so use duelen.',
      'You talk to the pharmacist.',
    ],
    [
      ['¿Necesito una receta para esto?', 'Do I need a prescription for this?'],
      ['Tome una pastilla cada ocho horas.', 'Take one pill every eight hours.'],
    ],
    [
      {
        heading: 'Síntomas y medicinas',
        table: grid(
          ['Spanish', 'Use', 'English'],
          [
            ['tengo fiebre', 'symptom', 'I have a fever'],
            ['tengo tos', 'symptom', 'I have a cough'],
            ['me duele la cabeza', 'pain', 'my head hurts'],
            ['me duele el estómago', 'pain', 'my stomach hurts'],
            ['la pastilla', 'medicine', 'pill'],
            ['el jarabe', 'medicine', 'syrup'],
            ['la crema', 'medicine', 'cream'],
            ['la receta', 'document', 'prescription'],
            ['cada ocho horas', 'dose', 'every eight hours'],
            ['antes / después de comer', 'dose', 'before / after eating'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-public-transport',
      'A2',
      'Buses, metro and taxis.',
      LIFE_A2,
      '¿Este autobús va al centro? Quiero bajarme en la próxima parada.',
      'Does this bus go downtown? I want to get off at the next stop.',
      'Ang autobús ay bus, ang metro ay tren sa lungsod, ang parada ay hintuan. Ang bajarse ay bumaba at subir ay sumakay.',
      'Say subir al autobús (get on) and bajar del autobús (get off). Use ¿Este autobús va a...? to check the route. Pay with el boleto, el pasaje or la tarjeta. A taxi ride: ¿Cuánto cuesta ir a...? and Aquí está bien.',
    ],
    [
      'va a + place / me bajo en + stop',
      'Bajarse is reflexive when you get off yourself.',
      'Me bajo en la próxima.',
      'Words differ by country: autobús, camión (Mexico), colectivo (Argentina), guagua (Cuba, Canary Islands), micro (Chile). Ask a local.',
    ],
    [
      'What do you say to ask if the bus goes downtown?',
      ['¿Este autobús va al centro?', '¿Dónde está el centro?', '¿Cuánto pesa el autobús?'],
      '¿Este autobús va al centro?',
      'Ir a + place checks the route.',
      'You are at a bus stop.',
    ],
    [
      ['¿Dónde compro el boleto?', 'Where do I buy the ticket?'],
      ['Aquí está bien, gracias.', 'Here is fine, thanks.'],
    ],
    [
      {
        heading: 'Transporte público',
        table: grid(
          ['Spanish', 'Where', 'English'],
          [
            ['el autobús / el camión', 'city', 'bus'],
            ['el metro', 'city', 'subway'],
            ['el taxi', 'street', 'taxi'],
            ['la parada', 'stop', 'bus stop'],
            ['la estación', 'metro / train', 'station'],
            ['el boleto / el pasaje', 'ticket', 'ticket / fare'],
            ['la tarjeta', 'payment', 'card'],
            ['subir', 'enter', 'to get on'],
            ['bajar(se)', 'leave', 'to get off'],
            ['transbordar / hacer transbordo', 'change lines', 'to transfer'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-banking',
      'B1',
      'At the bank: accounts, cards and transfers.',
      LIFE_B1,
      'Quisiera abrir una cuenta de ahorros y pedir una tarjeta de débito.',
      'I would like to open a savings account and ask for a debit card.',
      'Ang cuenta de ahorros ay savings account, ang tarjeta de débito ay debit card. Ang quisiera ay magalang na gusto ko. Ang transferencia ay paglilipat ng pera.',
      'Use quisiera or me gustaría to be polite. Bank words: la cuenta corriente, la cuenta de ahorros, el saldo, la transferencia, retirar, depositar, el cajero automático. Ask ¿Qué documentos necesito?',
    ],
    [
      'quisiera + infinitive',
      'Quisiera is a very polite want.',
      'Quisiera depositar dinero.',
      'Quiero is direct. Quisiera and me gustaría sound softer and more polite in a bank or shop.',
    ],
    [
      'Which is more polite?',
      ['Quisiera abrir una cuenta.', 'Quiero abrir una cuenta.', 'Abro una cuenta.'],
      'Quisiera abrir una cuenta.',
      'Quisiera softens the request.',
      'You speak to a bank teller.',
    ],
    [
      ['¿Cuál es el saldo de mi cuenta?', 'What is my account balance?'],
      [
        'Necesito hacer una transferencia internacional.',
        'I need to make an international transfer.',
      ],
    ],
    [
      {
        heading: 'Vocabulario del banco',
        table: grid(
          ['Spanish', 'Meaning', 'English'],
          [
            ['la cuenta corriente', 'checking', 'checking account'],
            ['la cuenta de ahorros', 'savings', 'savings account'],
            ['el saldo', 'amount', 'balance'],
            ['retirar', 'take out', 'to withdraw'],
            ['depositar', 'put in', 'to deposit'],
            ['la transferencia', 'send money', 'transfer'],
            ['el cajero automático', 'machine', 'ATM'],
            ['el préstamo', 'loan', 'loan'],
            ['la comisión', 'fee', 'fee'],
            ['la contraseña / el PIN', 'security', 'password / PIN'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-renting',
      'B1',
      'Renting a place: apartments, deposits and rules.',
      LIFE_B1,
      'Estoy buscando un departamento con dos cuartos que acepte mascotas.',
      'I am looking for an apartment with two rooms that accepts pets.',
      'Ang alquiler ay upa, ang depósito ay deposito at ang inquilino ay umuupa. Ang que acepte ay gumagamit ng subjunctive dahil hinahanap pa lang.',
      'When you are searching for something that may not exist, use the subjunctive: busco un departamento que acepte mascotas. Words: el alquiler / la renta, el depósito, el contrato, el casero / el dueño, incluido.',
    ],
    [
      'busco + noun + que + subjunctive',
      'Subjunctive when the thing is not yet known.',
      'Necesito un cuarto que tenga baño privado.',
      'If the thing exists and you know it, use the indicative: tengo un cuarto que tiene baño privado.',
    ],
    [
      'Which is correct for "I am looking for one that has a garden"?',
      [
        'Busco una casa que tenga jardín.',
        'Busco una casa que tiene jardín.',
        'Busco una casa tiene jardín.',
      ],
      'Busco una casa que tenga jardín.',
      'Use the subjunctive when you do not yet know whether it exists.',
      'You call a landlord.',
    ],
    [
      ['¿El alquiler incluye los servicios?', 'Does the rent include utilities?'],
      ['¿Cuánto es el depósito?', 'How much is the deposit?'],
    ],
    [
      {
        heading: 'Alquilar',
        table: grid(
          ['Spanish', 'Use', 'English'],
          [
            ['el alquiler / la renta', 'monthly', 'rent'],
            ['el depósito', 'start', 'deposit'],
            ['el contrato', 'paper', 'contract'],
            ['el casero / el dueño', 'person', 'landlord'],
            ['el inquilino', 'person', 'tenant'],
            ['amueblado', 'adjective', 'furnished'],
            ['los servicios', 'bills', 'utilities'],
            ['incluido', 'adjective', 'included'],
            ['la mudanza', 'move', 'moving'],
            ['las llaves', 'object', 'keys'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-job-interview',
      'B1',
      'The job interview.',
      LIFE_B1,
      'Tengo tres años de experiencia en atención al cliente y puedo empezar el lunes.',
      'I have three years of experience in customer service and I can start on Monday.',
      'Ang experiencia ay karanasan, ang puesto ay posisyon at ang sueldo ay sahod. Magsimula sa buenos días, mucho gusto at gamitin ang usted.',
      'In interviews use usted. Common questions: Hábleme de usted. ¿Por qué quiere este puesto? ¿Cuáles son sus fortalezas? Answers: tengo experiencia en..., trabajo bien en equipo, estoy disponible para...',
    ],
    [
      'tengo + years + de experiencia en',
      'Use tengo for years of experience, not soy.',
      'Tengo cinco años de experiencia en ventas.',
      'Years use tengo: tengo tres años de experiencia. Do not translate I am three years literally.',
    ],
    [
      'Which form do you use with an interviewer?',
      ['usted', 'tú', 'vos'],
      'usted',
      'Usted is formal and respectful in interviews.',
      'You meet a manager for a job interview.',
    ],
    [
      ['Mucho gusto en conocerlo.', 'Nice to meet you, sir.'],
      ['¿Cuál es el horario de trabajo?', 'What are the work hours?'],
    ],
    [
      {
        heading: 'La entrevista',
        table: grid(
          ['Spanish', 'Use', 'English'],
          [
            ['la entrevista', 'event', 'interview'],
            ['el puesto', 'job', 'position'],
            ['la experiencia', 'skill', 'experience'],
            ['las fortalezas', 'skill', 'strengths'],
            ['trabajar en equipo', 'skill', 'work in a team'],
            ['el sueldo / el salario', 'pay', 'salary'],
            ['el horario', 'time', 'schedule'],
            ['estar disponible', 'availability', 'be available'],
            ['el currículum / el CV', 'document', 'résumé'],
            ['las referencias', 'document', 'references'],
          ],
        ),
      },
    ],
  ),
  L(
    [
      'rl-email-etiquette',
      'B1',
      'Writing a polite email or message.',
      LIFE_B1,
      'Estimada Sra. López: le escribo para pedir información; quedo atento a su respuesta.',
      'Dear Mrs. López: I am writing to ask for information; I look forward to your reply.',
      'Ang estimada ay mahal na. Ang le escribo para ay sumusulat ako para. Ang quedo atento ay hihintayin ko ang sagot. Magtapos sa atentamente o saludos cordiales.',
      'Start formal emails with Estimado/a + title + last name. Then: Le escribo para..., Adjunto..., Quedo atento/a... End with Atentamente or Saludos cordiales. For friends use Hola + name and un abrazo.',
    ],
    [
      'Estimado/a + title + last name',
      'Match estimado to the person’s gender.',
      'Estimado Sr. Pérez: ...',
      'Do not use querido in a formal email; querido is for family and close friends.',
    ],
    [
      'Which closing is formal?',
      ['Atentamente', 'Un abrazo', 'Chao'],
      'Atentamente',
      'Atentamente is a formal closing; un abrazo is friendly.',
      'You send an email to a school.',
    ],
    [
      ['Adjunto mi currículum para su revisión.', 'I attach my résumé for your review.'],
      [
        'Quedo a su disposición para cualquier duda.',
        'I remain at your disposal for any questions.',
      ],
    ],
    [
      {
        heading: 'Frases para un correo',
        table: grid(
          ['Phrase', 'Part', 'English'],
          [
            ['Estimado/a señor/a...', 'opening', 'Dear Sir/Madam...'],
            ['Le escribo para...', 'purpose', 'I am writing to...'],
            ['Adjunto...', 'attachment', 'I attach...'],
            ['Quedo atento/a a su respuesta.', 'closing', 'I await your reply.'],
            ['Gracias de antemano.', 'closing', 'Thanks in advance.'],
            ['Atentamente / Saludos cordiales', 'sign-off', 'Sincerely / Kind regards'],
            ['Hola, ¿cómo estás?', 'informal opening', 'Hi, how are you?'],
            ['Un abrazo / Cuídate', 'informal sign-off', 'A hug / Take care'],
          ],
        ),
      },
    ],
  ),
];
