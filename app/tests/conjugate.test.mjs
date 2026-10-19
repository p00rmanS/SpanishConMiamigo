import test from 'node:test';
import assert from 'node:assert/strict';
import { conjugate, conjugatePlain } from '../src/lib/conjugate.js';

// Expected forms are written as space-separated strings in person order.
const six = (s) => s.split(' ');
const pick = (r, path) => path.split('.').reduce((o, k) => o[k], r);

function expectForms(inf, flags, table) {
  const r = conjugate(inf, flags);
  for (const [path, expected] of Object.entries(table)) {
    const actual = pick(r, path);
    const want = Array.isArray(actual) ? expected.split(/\s+(?=[^ ]+(?: |$))/) : expected;
    if (Array.isArray(actual)) {
      assert.equal(actual.join(' | '), expected.split(' | ').join(' | '), `${inf} ${path}`);
    } else {
      assert.equal(actual, want, `${inf} ${path}`);
    }
  }
}

// Helper: join six forms with " | " for readable assertions.
const J = (...forms) => forms.join(' | ');

test('regular -ar verb: hablar in every simple tense', () => {
  expectForms('hablar', [], {
    'indicative.present': J('hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'),
    'indicative.preterite': J('hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron'),
    'indicative.imperfect': J(
      'hablaba',
      'hablabas',
      'hablaba',
      'hablábamos',
      'hablabais',
      'hablaban',
    ),
    'indicative.future': J('hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablaréis', 'hablarán'),
    'indicative.conditional': J(
      'hablaría',
      'hablarías',
      'hablaría',
      'hablaríamos',
      'hablaríais',
      'hablarían',
    ),
    'subjunctive.present': J('hable', 'hables', 'hable', 'hablemos', 'habléis', 'hablen'),
    'subjunctive.imperfect': J(
      'hablara',
      'hablaras',
      'hablara',
      'habláramos',
      'hablarais',
      'hablaran',
    ),
    'subjunctive.imperfectSe': J(
      'hablase',
      'hablases',
      'hablase',
      'hablásemos',
      'hablaseis',
      'hablasen',
    ),
    'indicative.presentPerfect': J(
      'he hablado',
      'has hablado',
      'ha hablado',
      'hemos hablado',
      'habéis hablado',
      'han hablado',
    ),
    'indicative.pluperfect': J(
      'había hablado',
      'habías hablado',
      'había hablado',
      'habíamos hablado',
      'habíais hablado',
      'habían hablado',
    ),
    'imperative.affirmative': J('habla', 'hable', 'hablemos', 'hablad', 'hablen'),
    'imperative.negative': J('no hables', 'no hable', 'no hablemos', 'no habléis', 'no hablen'),
    gerund: 'hablando',
    participle: 'hablado',
  });
});

test('regular -er and -ir verbs', () => {
  expectForms('comer', [], {
    'indicative.present': J('como', 'comes', 'come', 'comemos', 'coméis', 'comen'),
    'indicative.preterite': J('comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'),
    'subjunctive.present': J('coma', 'comas', 'coma', 'comamos', 'comáis', 'coman'),
    'subjunctive.imperfect': J(
      'comiera',
      'comieras',
      'comiera',
      'comiéramos',
      'comierais',
      'comieran',
    ),
    gerund: 'comiendo',
    participle: 'comido',
  });
  expectForms('vivir', [], {
    'indicative.present': J('vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven'),
    'imperative.affirmative': J('vive', 'viva', 'vivamos', 'vivid', 'vivan'),
  });
});

test('the most irregular verbs', () => {
  expectForms('ser', [], {
    'indicative.present': J('soy', 'eres', 'es', 'somos', 'sois', 'son'),
    'indicative.preterite': J('fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'),
    'indicative.imperfect': J('era', 'eras', 'era', 'éramos', 'erais', 'eran'),
    'subjunctive.present': J('sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'),
    'subjunctive.imperfect': J('fuera', 'fueras', 'fuera', 'fuéramos', 'fuerais', 'fueran'),
    'imperative.affirmative': J('sé', 'sea', 'seamos', 'sed', 'sean'),
    'indicative.future': J('seré', 'serás', 'será', 'seremos', 'seréis', 'serán'),
    gerund: 'siendo',
    participle: 'sido',
  });
  expectForms('estar', [], {
    'indicative.present': J('estoy', 'estás', 'está', 'estamos', 'estáis', 'están'),
    'indicative.preterite': J(
      'estuve',
      'estuviste',
      'estuvo',
      'estuvimos',
      'estuvisteis',
      'estuvieron',
    ),
    'subjunctive.present': J('esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'),
    'imperative.affirmative': J('está', 'esté', 'estemos', 'estad', 'estén'),
  });
  expectForms('ir', [], {
    'indicative.present': J('voy', 'vas', 'va', 'vamos', 'vais', 'van'),
    'indicative.imperfect': J('iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'),
    'indicative.future': J('iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'),
    'subjunctive.present': J('vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'),
    'imperative.affirmative': J('ve', 'vaya', 'vamos', 'id', 'vayan'),
    'imperative.negative': J('no vayas', 'no vaya', 'no vayamos', 'no vayáis', 'no vayan'),
    gerund: 'yendo',
    participle: 'ido',
  });
  expectForms('haber', [], {
    'indicative.present': J('he', 'has', 'ha', 'hemos', 'habéis', 'han'),
    'indicative.preterite': J('hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'),
    'indicative.future': J('habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'),
  });
  expectForms('dar', [], {
    'indicative.present': J('doy', 'das', 'da', 'damos', 'dais', 'dan'),
    'indicative.preterite': J('di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'),
    'subjunctive.present': J('dé', 'des', 'dé', 'demos', 'deis', 'den'),
    'subjunctive.imperfect': J('diera', 'dieras', 'diera', 'diéramos', 'dierais', 'dieran'),
  });
  expectForms('ver', [], {
    'indicative.present': J('veo', 'ves', 've', 'vemos', 'veis', 'ven'),
    'indicative.preterite': J('vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'),
    'indicative.imperfect': J('veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'),
    'subjunctive.present': J('vea', 'veas', 'vea', 'veamos', 'veáis', 'vean'),
    gerund: 'viendo',
    participle: 'visto',
  });
});

test('strong preterites, irregular futures and yo-go verbs', () => {
  expectForms('tener', [], {
    'indicative.present': J('tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'),
    'indicative.preterite': J('tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'),
    'indicative.future': J('tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'),
    'indicative.conditional': J(
      'tendría',
      'tendrías',
      'tendría',
      'tendríamos',
      'tendríais',
      'tendrían',
    ),
    'subjunctive.present': J('tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan'),
    'imperative.affirmative': J('ten', 'tenga', 'tengamos', 'tened', 'tengan'),
  });
  expectForms('venir', [], {
    'indicative.present': J('vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'),
    'indicative.preterite': J('vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'),
    'subjunctive.imperfect': J(
      'viniera',
      'vinieras',
      'viniera',
      'viniéramos',
      'vinierais',
      'vinieran',
    ),
    'imperative.affirmative': J('ven', 'venga', 'vengamos', 'venid', 'vengan'),
    gerund: 'viniendo',
  });
  expectForms('hacer', [], {
    'indicative.present': J('hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'),
    'indicative.preterite': J('hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'),
    'indicative.future': J('haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'),
    'subjunctive.present': J('haga', 'hagas', 'haga', 'hagamos', 'hagáis', 'hagan'),
    'imperative.affirmative': J('haz', 'haga', 'hagamos', 'haced', 'hagan'),
    participle: 'hecho',
  });
  expectForms('poner', [], {
    'indicative.present': J('pongo', 'pones', 'pone', 'ponemos', 'ponéis', 'ponen'),
    'indicative.preterite': J('puse', 'pusiste', 'puso', 'pusimos', 'pusisteis', 'pusieron'),
    'indicative.future': J('pondré', 'pondrás', 'pondrá', 'pondremos', 'pondréis', 'pondrán'),
    'imperative.affirmative': J('pon', 'ponga', 'pongamos', 'poned', 'pongan'),
    participle: 'puesto',
  });
  expectForms('salir', [], {
    'indicative.present': J('salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'),
    'indicative.future': J('saldré', 'saldrás', 'saldrá', 'saldremos', 'saldréis', 'saldrán'),
    'imperative.affirmative': J('sal', 'salga', 'salgamos', 'salid', 'salgan'),
  });
  expectForms('decir', [], {
    'indicative.present': J('digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'),
    'indicative.preterite': J('dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'),
    'indicative.future': J('diré', 'dirás', 'dirá', 'diremos', 'diréis', 'dirán'),
    'subjunctive.present': J('diga', 'digas', 'diga', 'digamos', 'digáis', 'digan'),
    'subjunctive.imperfect': J('dijera', 'dijeras', 'dijera', 'dijéramos', 'dijerais', 'dijeran'),
    'imperative.affirmative': J('di', 'diga', 'digamos', 'decid', 'digan'),
    gerund: 'diciendo',
    participle: 'dicho',
  });
  expectForms('saber', [], {
    'indicative.present': J('sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'),
    'indicative.preterite': J('supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'),
    'indicative.future': J('sabré', 'sabrás', 'sabrá', 'sabremos', 'sabréis', 'sabrán'),
    'subjunctive.present': J('sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'),
  });
  expectForms('poder', [], {
    'indicative.present': J('puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'),
    'indicative.preterite': J('pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'),
    'indicative.future': J('podré', 'podrás', 'podrá', 'podremos', 'podréis', 'podrán'),
    'subjunctive.present': J('pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'),
    gerund: 'pudiendo',
  });
  expectForms('querer', [], {
    'indicative.present': J('quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'),
    'indicative.preterite': J('quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'),
    'indicative.future': J('querré', 'querrás', 'querrá', 'querremos', 'querréis', 'querrán'),
    'subjunctive.present': J('quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'),
  });
  expectForms('traer', [], {
    'indicative.present': J('traigo', 'traes', 'trae', 'traemos', 'traéis', 'traen'),
    'indicative.preterite': J('traje', 'trajiste', 'trajo', 'trajimos', 'trajisteis', 'trajeron'),
    'subjunctive.present': J('traiga', 'traigas', 'traiga', 'traigamos', 'traigáis', 'traigan'),
    gerund: 'trayendo',
    participle: 'traído',
  });
  expectForms('caer', [], {
    'indicative.present': J('caigo', 'caes', 'cae', 'caemos', 'caéis', 'caen'),
    'indicative.preterite': J('caí', 'caíste', 'cayó', 'caímos', 'caísteis', 'cayeron'),
    gerund: 'cayendo',
    participle: 'caído',
  });
  expectForms('oír', [], {
    'indicative.present': J('oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'),
    'indicative.preterite': J('oí', 'oíste', 'oyó', 'oímos', 'oísteis', 'oyeron'),
    'subjunctive.present': J('oiga', 'oigas', 'oiga', 'oigamos', 'oigáis', 'oigan'),
    'imperative.affirmative': J('oye', 'oiga', 'oigamos', 'oíd', 'oigan'),
    gerund: 'oyendo',
    participle: 'oído',
  });
  expectForms('reír', [], {
    'indicative.present': J('río', 'ríes', 'ríe', 'reímos', 'reís', 'ríen'),
    'indicative.preterite': J('reí', 'reíste', 'rio', 'reímos', 'reísteis', 'rieron'),
    'indicative.future': J('reiré', 'reirás', 'reirá', 'reiremos', 'reiréis', 'reirán'),
    'subjunctive.present': J('ría', 'rías', 'ría', 'riamos', 'riáis', 'rían'),
    gerund: 'riendo',
    participle: 'reído',
  });
  expectForms('conducir', [], {
    'indicative.present': J(
      'conduzco',
      'conduces',
      'conduce',
      'conducimos',
      'conducís',
      'conducen',
    ),
    'indicative.preterite': J(
      'conduje',
      'condujiste',
      'condujo',
      'condujimos',
      'condujisteis',
      'condujeron',
    ),
    'subjunctive.present': J(
      'conduzca',
      'conduzcas',
      'conduzca',
      'conduzcamos',
      'conduzcáis',
      'conduzcan',
    ),
  });
  expectForms('traducir', [], {
    'indicative.present': J(
      'traduzco',
      'traduces',
      'traduce',
      'traducimos',
      'traducís',
      'traducen',
    ),
    'indicative.preterite': J(
      'traduje',
      'tradujiste',
      'tradujo',
      'tradujimos',
      'tradujisteis',
      'tradujeron',
    ),
  });
});

test('stem-changing verbs', () => {
  expectForms('dormir', ['o-ue'], {
    'indicative.present': J('duermo', 'duermes', 'duerme', 'dormimos', 'dormís', 'duermen'),
    'indicative.preterite': J('dormí', 'dormiste', 'durmió', 'dormimos', 'dormisteis', 'durmieron'),
    'subjunctive.present': J('duerma', 'duermas', 'duerma', 'durmamos', 'durmáis', 'duerman'),
    'subjunctive.imperfect': J(
      'durmiera',
      'durmieras',
      'durmiera',
      'durmiéramos',
      'durmierais',
      'durmieran',
    ),
    'imperative.affirmative': J('duerme', 'duerma', 'durmamos', 'dormid', 'duerman'),
    gerund: 'durmiendo',
  });
  expectForms('pedir', ['e-i'], {
    'indicative.present': J('pido', 'pides', 'pide', 'pedimos', 'pedís', 'piden'),
    'indicative.preterite': J('pedí', 'pediste', 'pidió', 'pedimos', 'pedisteis', 'pidieron'),
    'subjunctive.present': J('pida', 'pidas', 'pida', 'pidamos', 'pidáis', 'pidan'),
    gerund: 'pidiendo',
  });
  expectForms('sentir', ['e-ie'], {
    'indicative.present': J('siento', 'sientes', 'siente', 'sentimos', 'sentís', 'sienten'),
    'indicative.preterite': J('sentí', 'sentiste', 'sintió', 'sentimos', 'sentisteis', 'sintieron'),
    'subjunctive.present': J('sienta', 'sientas', 'sienta', 'sintamos', 'sintáis', 'sientan'),
    gerund: 'sintiendo',
  });
  expectForms('volver', ['o-ue'], {
    'indicative.present': J('vuelvo', 'vuelves', 'vuelve', 'volvemos', 'volvéis', 'vuelven'),
    'subjunctive.present': J('vuelva', 'vuelvas', 'vuelva', 'volvamos', 'volváis', 'vuelvan'),
    participle: 'vuelto',
  });
  expectForms('jugar', ['u-ue'], {
    'indicative.present': J('juego', 'juegas', 'juega', 'jugamos', 'jugáis', 'juegan'),
    'indicative.preterite': J('jugué', 'jugaste', 'jugó', 'jugamos', 'jugasteis', 'jugaron'),
    'subjunctive.present': J('juegue', 'juegues', 'juegue', 'juguemos', 'juguéis', 'jueguen'),
  });
  expectForms('seguir', ['e-i'], {
    'indicative.present': J('sigo', 'sigues', 'sigue', 'seguimos', 'seguís', 'siguen'),
    'indicative.preterite': J('seguí', 'seguiste', 'siguió', 'seguimos', 'seguisteis', 'siguieron'),
    'subjunctive.present': J('siga', 'sigas', 'siga', 'sigamos', 'sigáis', 'sigan'),
    gerund: 'siguiendo',
  });
  expectForms('elegir', ['e-i'], {
    'indicative.present': J('elijo', 'eliges', 'elige', 'elegimos', 'elegís', 'eligen'),
    'subjunctive.present': J('elija', 'elijas', 'elija', 'elijamos', 'elijáis', 'elijan'),
    gerund: 'eligiendo',
  });
});

test('spelling changes before e and a/o', () => {
  expectForms('empezar', ['e-ie'], {
    'indicative.present': J('empiezo', 'empiezas', 'empieza', 'empezamos', 'empezáis', 'empiezan'),
    'indicative.preterite': J(
      'empecé',
      'empezaste',
      'empezó',
      'empezamos',
      'empezasteis',
      'empezaron',
    ),
    'subjunctive.present': J('empiece', 'empieces', 'empiece', 'empecemos', 'empecéis', 'empiecen'),
    'imperative.affirmative': J('empieza', 'empiece', 'empecemos', 'empezad', 'empiecen'),
  });
  expectForms('buscar', [], {
    'indicative.preterite': J('busqué', 'buscaste', 'buscó', 'buscamos', 'buscasteis', 'buscaron'),
    'subjunctive.present': J('busque', 'busques', 'busque', 'busquemos', 'busquéis', 'busquen'),
  });
  expectForms('pagar', [], {
    'indicative.preterite': J('pagué', 'pagaste', 'pagó', 'pagamos', 'pagasteis', 'pagaron'),
    'subjunctive.present': J('pague', 'pagues', 'pague', 'paguemos', 'paguéis', 'paguen'),
  });
  expectForms('averiguar', [], {
    'indicative.present': J(
      'averiguo',
      'averiguas',
      'averigua',
      'averiguamos',
      'averiguáis',
      'averiguan',
    ),
    'indicative.preterite': J(
      'averigüé',
      'averiguaste',
      'averiguó',
      'averiguamos',
      'averiguasteis',
      'averiguaron',
    ),
    'subjunctive.present': J(
      'averigüe',
      'averigües',
      'averigüe',
      'averigüemos',
      'averigüéis',
      'averigüen',
    ),
  });
  expectForms('conocer', [], {
    'indicative.present': J('conozco', 'conoces', 'conoce', 'conocemos', 'conocéis', 'conocen'),
    'subjunctive.present': J(
      'conozca',
      'conozcas',
      'conozca',
      'conozcamos',
      'conozcáis',
      'conozcan',
    ),
  });
  expectForms('vencer', [], {
    'indicative.present': J('venzo', 'vences', 'vence', 'vencemos', 'vencéis', 'vencen'),
    'subjunctive.present': J('venza', 'venzas', 'venza', 'venzamos', 'venzáis', 'venzan'),
  });
  expectForms('coger', [], {
    'indicative.present': J('cojo', 'coges', 'coge', 'cogemos', 'cogéis', 'cogen'),
    'subjunctive.present': J('coja', 'cojas', 'coja', 'cojamos', 'cojáis', 'cojan'),
  });
  expectForms('enviar', ['iar'], {
    'indicative.present': J('envío', 'envías', 'envía', 'enviamos', 'enviáis', 'envían'),
    'subjunctive.present': J('envíe', 'envíes', 'envíe', 'enviemos', 'enviéis', 'envíen'),
  });
  expectForms('continuar', ['uar'], {
    'indicative.present': J(
      'continúo',
      'continúas',
      'continúa',
      'continuamos',
      'continuáis',
      'continúan',
    ),
    'subjunctive.present': J(
      'continúe',
      'continúes',
      'continúe',
      'continuemos',
      'continuéis',
      'continúen',
    ),
  });
});

test('i to y changes and -uir verbs', () => {
  expectForms('construir', [], {
    'indicative.present': J(
      'construyo',
      'construyes',
      'construye',
      'construimos',
      'construís',
      'construyen',
    ),
    'indicative.preterite': J(
      'construí',
      'construiste',
      'construyó',
      'construimos',
      'construisteis',
      'construyeron',
    ),
    'subjunctive.present': J(
      'construya',
      'construyas',
      'construya',
      'construyamos',
      'construyáis',
      'construyan',
    ),
    'imperative.affirmative': J(
      'construye',
      'construya',
      'construyamos',
      'construid',
      'construyan',
    ),
    gerund: 'construyendo',
    participle: 'construido',
  });
  expectForms('leer', [], {
    'indicative.preterite': J('leí', 'leíste', 'leyó', 'leímos', 'leísteis', 'leyeron'),
    'subjunctive.imperfect': J('leyera', 'leyeras', 'leyera', 'leyéramos', 'leyerais', 'leyeran'),
    gerund: 'leyendo',
    participle: 'leído',
  });
  expectForms('huir', [], {
    'indicative.present': J('huyo', 'huyes', 'huye', 'huimos', 'huís', 'huyen'),
    'indicative.preterite': J('huí', 'huiste', 'huyó', 'huimos', 'huisteis', 'huyeron'),
  });
  expectForms('reñir', ['e-i'], {
    'indicative.preterite': J('reñí', 'reñiste', 'riñó', 'reñimos', 'reñisteis', 'riñeron'),
    gerund: 'riñendo',
  });
});

test('compound irregular verbs follow their base verb', () => {
  expectForms('mantener', [], {
    'indicative.present': J(
      'mantengo',
      'mantienes',
      'mantiene',
      'mantenemos',
      'mantenéis',
      'mantienen',
    ),
    'indicative.preterite': J(
      'mantuve',
      'mantuviste',
      'mantuvo',
      'mantuvimos',
      'mantuvisteis',
      'mantuvieron',
    ),
    'indicative.future': J(
      'mantendré',
      'mantendrás',
      'mantendrá',
      'mantendremos',
      'mantendréis',
      'mantendrán',
    ),
    'imperative.affirmative': J('mantén', 'mantenga', 'mantengamos', 'mantened', 'mantengan'),
  });
  expectForms('proponer', [], {
    'indicative.present': J(
      'propongo',
      'propones',
      'propone',
      'proponemos',
      'proponéis',
      'proponen',
    ),
    'indicative.preterite': J(
      'propuse',
      'propusiste',
      'propuso',
      'propusimos',
      'propusisteis',
      'propusieron',
    ),
    'imperative.affirmative': J('propón', 'proponga', 'propongamos', 'proponed', 'propongan'),
    participle: 'propuesto',
  });
  expectForms('predecir', [], {
    'indicative.present': J('predigo', 'predices', 'predice', 'predecimos', 'predecís', 'predicen'),
    'indicative.preterite': J(
      'predije',
      'predijiste',
      'predijo',
      'predijimos',
      'predijisteis',
      'predijeron',
    ),
    'indicative.future': J(
      'predeciré',
      'predecirás',
      'predecirá',
      'predeciremos',
      'predeciréis',
      'predecirán',
    ),
    'imperative.affirmative': J('predice', 'prediga', 'predigamos', 'predecid', 'predigan'),
    participle: 'predicho',
  });
  expectForms('prever', [], {
    'indicative.present': J('preveo', 'prevés', 'prevé', 'prevemos', 'prevéis', 'prevén'),
    'indicative.preterite': J('preví', 'previste', 'previó', 'previmos', 'previsteis', 'previeron'),
    participle: 'previsto',
  });
  expectForms('devolver', ['o-ue'], {
    'indicative.present': J(
      'devuelvo',
      'devuelves',
      'devuelve',
      'devolvemos',
      'devolvéis',
      'devuelven',
    ),
    participle: 'devuelto',
  });
  expectForms('describir', [], { participle: 'descrito' });
  expectForms('abrir', [], { participle: 'abierto' });
  expectForms('deshacer', [], {
    'indicative.preterite': J(
      'deshice',
      'deshiciste',
      'deshizo',
      'deshicimos',
      'deshicisteis',
      'deshicieron',
    ),
    'imperative.affirmative': J('deshaz', 'deshaga', 'deshagamos', 'deshaced', 'deshagan'),
  });
  expectForms('distraer', [], {
    'indicative.present': J(
      'distraigo',
      'distraes',
      'distrae',
      'distraemos',
      'distraéis',
      'distraen',
    ),
    'indicative.preterite': J(
      'distraje',
      'distrajiste',
      'distrajo',
      'distrajimos',
      'distrajisteis',
      'distrajeron',
    ),
    gerund: 'distrayendo',
  });
});

test('reflexive verbs attach and place pronouns correctly', () => {
  expectForms('levantarse', [], {
    infinitive: 'levantarse',
    'indicative.present': J(
      'me levanto',
      'te levantas',
      'se levanta',
      'nos levantamos',
      'os levantáis',
      'se levantan',
    ),
    'indicative.preterite': J(
      'me levanté',
      'te levantaste',
      'se levantó',
      'nos levantamos',
      'os levantasteis',
      'se levantaron',
    ),
    'indicative.presentPerfect': J(
      'me he levantado',
      'te has levantado',
      'se ha levantado',
      'nos hemos levantado',
      'os habéis levantado',
      'se han levantado',
    ),
    'imperative.affirmative': J(
      'levántate',
      'levántese',
      'levantémonos',
      'levantaos',
      'levántense',
    ),
    'imperative.negative': J(
      'no te levantes',
      'no se levante',
      'no nos levantemos',
      'no os levantéis',
      'no se levanten',
    ),
    gerund: 'levantándose',
  });
  expectForms('sentarse', ['e-ie'], {
    'indicative.present': J(
      'me siento',
      'te sientas',
      'se sienta',
      'nos sentamos',
      'os sentáis',
      'se sientan',
    ),
    'imperative.affirmative': J('siéntate', 'siéntese', 'sentémonos', 'sentaos', 'siéntense'),
  });
  expectForms('acostarse', ['o-ue'], {
    'imperative.affirmative': J('acuéstate', 'acuéstese', 'acostémonos', 'acostaos', 'acuéstense'),
  });
  expectForms('irse', [], {
    'indicative.present': J('me voy', 'te vas', 'se va', 'nos vamos', 'os vais', 'se van'),
    'imperative.affirmative': J('vete', 'váyase', 'vámonos', 'idos', 'váyanse'),
    gerund: 'yéndose',
  });
});

test('plain baseline differs exactly where a verb is irregular', () => {
  const real = conjugate('tener', ['e-ie']);
  const plain = conjugatePlain('tener');
  assert.equal(plain.indicative.present[0], 'teno');
  assert.notEqual(real.indicative.present[0], plain.indicative.present[0]);
  assert.equal(
    conjugate('hablar').indicative.present.join(),
    conjugatePlain('hablar').indicative.present.join(),
  );
});

test('every verb in the list conjugates into complete, well-formed tables', async () => {
  const { verbList } = await import('../src/verbs-data.js');
  assert.ok(verbList.length >= 450, 'verb list size ' + verbList.length);
  for (const v of verbList) {
    const r = conjugate(v.infinitive, v.flags);
    const tables = [
      ...Object.values(r.indicative),
      ...Object.values(r.subjunctive),
      r.imperative.affirmative,
      r.imperative.negative,
    ];
    for (const t of tables) {
      for (const form of t) {
        assert.ok(form && !/undefined|NaN|null/.test(form), `${v.infinitive}: bad form "${form}"`);
        assert.doesNotMatch(form, /\s{2,}|^\s|\s$/, `${v.infinitive}: spacing in "${form}"`);
      }
    }
    assert.equal(r.indicative.present.length, 6, v.infinitive);
    assert.ok(r.gerund && r.participle, `${v.infinitive}: gerund/participle`);
    assert.ok(v.english && v.tagalog && v.example && v.translation, `${v.infinitive}: data`);
  }
});

test('example sentences use a real form of their own verb', async () => {
  const { verbList } = await import('../src/verbs-data.js');
  const unaccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const loose = [];
  for (const v of verbList) {
    const r = conjugate(v.infinitive, v.flags);
    const forms = new Set(
      [
        ...Object.values(r.indicative).flat(),
        ...Object.values(r.subjunctive).flat(),
        ...r.imperative.affirmative,
        r.gerund,
        r.participle,
        v.infinitive,
        ...Object.values(r.impersonal ?? {}),
      ].flatMap((f) => f.split(' ').map(unaccent)),
    );
    const words = v.example
      .replace(/[.,¿?¡!]/g, '')
      .split(' ')
      .map(unaccent);
    if (!words.some((w) => forms.has(w))) loose.push(v.infinitive + ': ' + v.example);
  }
  assert.deepEqual(loose, [], 'examples that never use the verb:\n' + loose.join('\n'));
});

test('adjective agreement, shortened forms and superlatives', async () => {
  const { adjectiveForms, superlativeOf, agreementExamples } =
    await import('../src/lib/adjectives.js');
  const f = (w, fl) => adjectiveForms(w, fl);
  assert.deepEqual(
    [f('rojo').ms, f('rojo').fs, f('rojo').mp, f('rojo').fp],
    ['rojo', 'roja', 'rojos', 'rojas'],
  );
  assert.deepEqual(
    [f('grande').fs, f('grande').mp, f('grande').fp],
    ['grande', 'grandes', 'grandes'],
  );
  assert.deepEqual([f('fácil').mp, f('feliz').mp, f('azul').mp], ['fáciles', 'felices', 'azules']);
  assert.deepEqual(
    [f('trabajador').fs, f('trabajador').mp, f('trabajador').fp],
    ['trabajadora', 'trabajadores', 'trabajadoras'],
  );
  assert.deepEqual([f('español').fs, f('español').mp], ['española', 'españoles']);
  assert.deepEqual(
    [f('inglés').fs, f('inglés').mp, f('inglés').fp],
    ['inglesa', 'ingleses', 'inglesas'],
  );
  assert.deepEqual([f('alemán').fs, f('alemán').mp], ['alemana', 'alemanes']);
  assert.deepEqual([f('joven').mp, f('común').mp, f('gris').mp], ['jóvenes', 'comunes', 'grises']);
  assert.deepEqual([f('optimista').fs, f('optimista').mp], ['optimista', 'optimistas']);
  assert.deepEqual([f('mejor').fs, f('mejor').mp], ['mejor', 'mejores']);
  assert.equal(f('bueno').short, 'buen');
  assert.equal(f('grande').short, 'gran');
  assert.equal(f('malo').short, 'mal');
  assert.equal(superlativeOf('rico'), 'riquísimo');
  assert.equal(superlativeOf('largo'), 'larguísimo');
  assert.equal(superlativeOf('feliz'), 'felicísimo');
  assert.equal(superlativeOf('fácil'), 'facilísimo');
  assert.equal(superlativeOf('amable'), 'amabilísimo');
  assert.equal(superlativeOf('rápido'), 'rapidísimo');
  assert.equal(superlativeOf('limpio'), 'limpísimo');
  assert.equal(superlativeOf('fuerte'), 'fortísimo');
  assert.equal(superlativeOf('alto'), 'altísimo');
  assert.equal(f('inglés').superlative, null);
  assert.equal(agreementExamples('cansado', ['e'])[1], 'La chica está cansada.');
});

test('every adjective in the list produces four distinct, well-formed forms', async () => {
  const { adjectiveList } = await import('../src/adjectives-data.js');
  const { adjectiveForms } = await import('../src/lib/adjectives.js');
  assert.ok(adjectiveList.length >= 300, 'adjective list size ' + adjectiveList.length);
  for (const a of adjectiveList) {
    const f = adjectiveForms(a.word, a.flags);
    for (const key of ['ms', 'fs', 'mp', 'fp'])
      assert.match(f[key], /^[a-zñáéíóúü]+$/, `${a.word}.${key}: ${f[key]}`);
    assert.ok(a.english && a.tagalog, a.word);
  }
});

test('voseo, verb descriptions and form search', async () => {
  const { voseo, describeVerb, allForms } = await import('../src/lib/conjugate.js');
  assert.deepEqual(voseo('hablar'), { present: 'hablás', imperative: 'hablá' });
  assert.deepEqual(voseo('comer'), { present: 'comés', imperative: 'comé' });
  assert.deepEqual(voseo('vivir'), { present: 'vivís', imperative: 'viví' });
  assert.deepEqual(voseo('tener'), { present: 'tenés', imperative: 'tené' });
  assert.deepEqual(voseo('ser'), { present: 'sos', imperative: 'sé' });
  assert.equal(voseo('levantarse').present, 'te levantás');
  assert.equal(voseo('levantarse').imperative, 'levantate');
  assert.ok(describeVerb('hablar').labels.includes('Regular'));
  assert.ok(describeVerb('ser').labels.includes('Irregular'));
  assert.ok(describeVerb('dormir', ['o-ue']).labels.some((l) => l.startsWith('Stem change')));
  assert.ok(describeVerb('buscar').labels.includes('Spelling change'));
  assert.ok(describeVerb('levantarse').labels.includes('Reflexive'));
  assert.ok(allForms('ir').includes('fui') && allForms('ser').includes('fui'));
});

test('conjunction list is complete and its examples use the connector', async () => {
  const { conjunctionList, CONJUNCTION_CATEGORIES } = await import('../src/conjunctions-data.js');
  assert.ok(conjunctionList.length >= 60, 'conjunction count ' + conjunctionList.length);
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  for (const c of conjunctionList) {
    for (const key of ['english', 'tagalog', 'example', 'translation', 'note', 'taglish'])
      assert.ok(c[key]?.length > 0, `${c.word}.${key}`);
    assert.ok(CONJUNCTION_CATEGORIES[c.category], c.word + ' category');
    assert.ok(['none', 'indicative', 'subjunctive', 'both'].includes(c.mood), c.word + ' mood');
    for (const part of c.word
      .split('…')
      .map((p) => p.trim())
      .filter(Boolean))
      assert.ok(norm(c.example).includes(norm(part)), `${c.word}: example lacks "${part}"`);
  }
});

test('drills build valid questions and verb search finds conjugated forms', async () => {
  const { buildDrill, searchVerbs, verbsForSet, DRILL_TENSES } =
    await import('../src/lib/drill.js');
  const { applyDrill } = await import('../src/lib/store-core.js');
  const { emptyState } = await import('../src/lib/store-core.js');
  const { seededRandom } = await import('../src/course.js');
  const items = buildDrill({
    verbs: verbsForSet('irregular'),
    tenses: DRILL_TENSES.map(([k]) => k),
    count: 25,
    random: seededRandom(11),
  });
  assert.equal(items.length, 25);
  for (const i of items) {
    assert.ok(i.answer && i.row.includes(i.answer));
    assert.ok(i.pronoun);
  }
  const vosOff = buildDrill({
    verbs: verbsForSet('all'),
    tenses: ['indicative.present'],
    count: 40,
    includeVosotros: false,
    random: seededRandom(2),
  });
  assert.ok(vosOff.every((i) => i.slot !== 4));
  assert.ok(searchVerbs('fui').some((v) => v.infinitive === 'ir'));
  assert.ok(searchVerbs('fui').some((v) => v.infinitive === 'ser'));
  assert.equal(searchVerbs('hablar')[0].infinitive, 'hablar');
  assert.ok(searchVerbs('to eat').some((v) => v.infinitive === 'comer'));
  assert.ok(searchVerbs('kumain').some((v) => v.infinitive === 'comer'));
  assert.ok(verbsForSet('irregular').length > 40);
  assert.ok(verbsForSet('stem').length > 80);
  const s = applyDrill(emptyState(), 5, 5, new Date(2026, 5, 1).getTime());
  assert.equal(s.xp, 15);
  assert.equal(s.days.length, 1);
});

test('every tense sentence contains the exact engine form it teaches', async () => {
  const { TENSE_SENTENCES } = await import('../src/tense-sentences.js');
  const { verbList } = await import('../src/verbs-data.js');
  const flagsOf = (inf) => verbList.find((v) => v.infinitive === inf)?.flags ?? [];
  const norm = (s) =>
    s
      .toLowerCase()
      .replace(/[¿?¡!.,;:]/g, ' ')
      .replace(/\s+/g, ' ');
  let count = 0;
  for (const [tenseKey, groups] of Object.entries(TENSE_SENTENCES)) {
    for (const [group, entries] of Object.entries(groups)) {
      assert.equal(entries.length, 3, `${tenseKey}.${group}`);
      for (const [sentence, translation, inf, person] of entries) {
        const r = conjugate(inf, flagsOf(inf));
        const [g, t] = tenseKey.split('.');
        const form = (g === 'imperative' ? r.imperative.affirmative : r[g][t])[person];
        assert.ok(
          norm(sentence).includes(' ' + norm(form) + ' ') ||
            norm(sentence).startsWith(norm(form) + ' '),
          `${tenseKey}: "${sentence}" lacks "${form}"`,
        );
        assert.ok(translation.length > 5);
        count += 1;
      }
    }
  }
  assert.equal(count, 90);
});
