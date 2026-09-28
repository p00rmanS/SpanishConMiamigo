const people=['yo','tú','él / ella / usted','nosotros/as','vosotros/as','ellos / ellas / ustedes'];
const meanings=['I','you (informal singular)','he / she / you (formal singular)','we','you (informal plural, Spain)','they / you (plural)'];
const forms=s=>s.split(',').map((form,i)=>[people[i],form,meanings[i]]);
const task=(prompt,answer,hint,why,taglish)=>({prompt,answer,hint,why,taglish});
const unit=(id,title,level,english,taglish,formula,table,examples,memory,tasks)=>({id:'lab-'+id,title,level,english,taglish,formula,table,examples,memory,tasks});
export const grammarLab=[
 unit('present','Build a sentence: person → verb → detail','Beginner',
 'Start with the person, choose the verb form, then add what, where, or when. Regular present -ar verbs remove -ar and add -o, -as, -a, -amos, -áis, -an. Spanish often omits the subject because the verb ending identifies it.',
 'Sino ang gumagawa? Piliin muna iyon. Sa hablar, tanggalin ang -ar: habl-. Idagdag ang ending: yo hablo, tú hablas. Pagkatapos, idagdag ang detail: hablo español. Hindi kailangan ang yo sa bawat sentence.',
 '(subject) + conjugated verb + detail',forms('hablo,hablas,habla,hablamos,habláis,hablan'),
 [['Hablo español.','I speak Spanish.','Habl- + o para sa yo.'],['Hablamos con el cliente.','We speak with the customer.','Habl- + amos para sa nosotros.'],['Usted habla inglés.','You speak English.','Usted uses habla, hindi hablas.']],
 'Keep the stem habl-; swap the ending for the person.',[
 task('Build: I speak Spanish.','Hablo español.','Use the yo form of hablar.','Hablo already indicates I; español supplies the language.','Yo form = hablo. Idagdag ang language: español.'),
 task('Change I to we: We speak Spanish.','Hablamos español.','Replace -o with -amos.','Nosotros uses hablamos.','Kami/tayo = nosotros, kaya hablamos.'),
 task('Write: You speak English. Use explicit usted.','Usted habla inglés.','Usted takes third-person singular agreement.','Usted addresses you politely but uses habla.','Formal na ikaw, pero third-person form: habla.')]),
 unit('preterite-ar','Preterite -ar: hablé, hablaste, habló','Intermediate',
 'The preterite presents a past event as a completed whole. Remove -ar and add -é, -aste, -ó, -amos, -asteis, -aron. Hablamos can also be present; time and context distinguish the meaning.',
 'Completed past event ang focus: ayer hablé = nagsalita ako kahapon. Hindi “short action” ang rule. Tanggalin ang -ar; idagdag ang ending. Habló ay siya/usted, habang hablo na walang accent ay present yo.',
 'past context + preterite verb + detail',forms('hablé,hablaste,habló,hablamos,hablasteis,hablaron'),
 [['Ayer hablé con Ana.','Yesterday I spoke with Ana.','Hablé = past yo.'],['Ella habló con el cliente.','She spoke with the customer.','Habló = past ella.'],['Ayer hablamos por teléfono.','Yesterday we spoke by phone.','Ayer ang clue na past ang hablamos dito.']],
 'Hablo = I speak; hablé = I spoke; habló = he/she/usted spoke.',[
 task('Build: Yesterday I spoke with Ana.','Ayer hablé con Ana.','Past yo ends in -é.','Hablé is first-person preterite.','Past ako: hablé, hindi habló.'),
 task('Write: Yesterday she spoke with Ana. Use ella.','Ayer ella habló con Ana.','Change hablé to habló.','Ella requires habló, with the written accent.','Siya = ella; past form = habló.'),
 task('Write: Yesterday we spoke by phone.','Ayer hablamos por teléfono.','Nosotros keeps -amos.','Ayer makes the past reading explicit.','Hablamos can be present or past; ayer ang context.')]),
 unit('preterite-er-ir','Preterite -er/-ir: comí and viví','Intermediate',
 'Regular -er and -ir verbs share preterite endings: -í, -iste, -ió, -imos, -isteis, -ieron. Comer gives comí; vivir gives viví. Irregular verbs such as ir do not follow this table.',
 'Pareho ang regular -er at -ir past endings. Comer → com- + í = comí. Vivir → viv- + í = viví. Pero ir ay irregular: fui, hindi isang regular -ir pattern.',
 'stem + í / iste / ió / imos / isteis / ieron',forms('comí,comiste,comió,comimos,comisteis,comieron'),
 [['Comí arroz.','I ate rice.','Comí = past yo ng comer.'],['Vivimos allí dos años.','We lived there for two years.','Puwedeng long period na completed whole.'],['Ellos comieron juntos.','They ate together.','Plural ellos: comieron.']],
 'Both families share -í, -iste, -ió; a long completed period can still use preterite.',[
 task('Build: I ate rice.','Comí arroz.','Comer → comí.','Comí is the preterite yo form.','Tanggal -er, add -í.'),
 task('Write: She ate rice. Use ella.','Ella comió arroz.','Third-person ending: -ió.','Comió agrees with ella.','Comió, hindi comí, kapag ella.'),
 task('Write: I lived in Manila.','Viví en Manila.','Vivir follows the same regular endings.','Viví presents living there as a completed period.','Viv- + í = viví; en introduces the place.')]),
 unit('fui-iba','Fui vs iba: one trip or background?','Intermediate',
 'Fui presents going as a completed event. Iba can describe a repeated past trip, background movement, or an intended action with iba a + infinitive. Ser and ir share fui; the rest of the sentence tells which verb is intended.',
 'Fui al banco ayer = isang trip na tinitingnan bilang completed. Iba al banco cada lunes = dating routine. Iba a llamar = balak kong tumawag / I was going to call. Hindi ibig sabihin ng iba na siguradong natuloy o hindi natuloy.',
 'fui + destination / iba + destination or a + infinitive',people.map((p,i)=>[p,['fui / iba','fuiste / ibas','fue / iba','fuimos / íbamos','fuisteis / ibais','fueron / iban'][i],meanings[i]]),
 [['Ayer fui al banco.','Yesterday I went to the bank.','Completed trip: fui.'],['Antes iba al banco cada lunes.','I used to go to the bank every Monday.','Routine sa past: iba.'],['Iba a llamar, pero no tenía señal.','I was going to call, but I had no signal.','Iba a + infinitive = past intention.']],
 'Fui: event viewed as a whole. Iba: habit/background or was going to.',[
 task('Build: Yesterday I went to the bank.','Ayer fui al banco.','Use a completed-trip form.','Fui is ir here because al banco is a destination.','May destination, kaya ir ang fui rito.'),
 task('Write: I used to go to the bank every Monday.','Iba al banco cada lunes.','Use imperfect for the past routine.','Cada lunes describes a repeated past habit.','Routine noon: iba.'),
 task('Write: I was going to call.','Iba a llamar.','Keep a before the infinitive.','Iba a llamar expresses a past intention.','Iba + a + llamar; huwag gawing llamé ang second verb.')]),
 unit('imperfect','Imperfect: hablaba, comía, era','Intermediate',
 'Use imperfect to describe past background, habits, or situations in progress. Regular -ar endings use -aba; -er/-ir use -ía. Ser, ir, and ver have special imperfect forms: era, iba, veía.',
 'Ano ang sitwasyon noon? Dito useful ang imperfect: estaba cansado, hablaba cada día. Hindi ito simpleng “unfinished forever.” Viewpoint ang mahalaga. Regular -ar → -aba; -er/-ir → -ía.',
 'past setting or habit + imperfect',forms('hablaba,hablabas,hablaba,hablábamos,hablabais,hablaban'),
 [['De niño, hablaba con mi abuela.','As a child, I used to talk with my grandmother.','Past habit ang hablaba.'],['Ella comía cuando llamé.','She was eating when I called.','Comía ang background; llamé ang event.'],['Era una casa pequeña.','It was a small house.','Era ang imperfect ng ser.']],
 'Scene/background → imperfect; a completed event in that scene → preterite.',[
 task('Build: She was eating when I called.','Ella comía cuando llamé.','Comía sets the background.','The ongoing eating is the setting for the call.','Comía = background; llamé = event.'),
 task('Write: We used to speak Spanish.','Hablábamos español.','Nosotros has an accent in hablábamos.','Hablábamos is the imperfect nosotros form.','Habl- + ábamos; huwag mawala ang accent.'),
 task('Write: It was a small house.','Era una casa pequeña.','Use imperfect ser.','Era describes the house in the past.','Description noon: era, mula sa ser.')]),
 unit('esta','Está, esta, estás: accents change meaning','Beginner',
 'Está is a form of estar for él/ella/usted. Estás addresses tú. Esta without an accent usually means this before a feminine singular noun. A written accent is part of the distinction, not decoration.',
 'Está = is/you are para sa él/ella/usted. Estás = you are para sa tú. Esta sin accent = this, tulad ng esta pantalla. Sa esta pantalla está apagada, magkaiba ang trabaho ng esta at está.',
 'esta + feminine noun / subject + está + state or location',forms('estoy,estás,está,estamos,estáis,están'),
 [['Esta pantalla está apagada.','This screen is off.','Esta points; está describes state.'],['¿Estás en casa?','Are you at home?','Tú form: estás.'],['Estamos aquí.','We are here.','Nosotros: estamos.']],
 'Esta points at a thing. Está is the verb. Estás includes the tú -s.',[
 task('Build: This screen is off.','Esta pantalla está apagada.','Only the verb está has an accent.','Esta is a demonstrative; está is estar.','This = esta; is = está.'),
 task('Write: Are you at home? Use tú agreement, omit tú.','¿Estás en casa?','Use estás with final -s.','Informal singular you takes estás.','Tú → estás; hindi está.'),
 task('Write: We are here.','Estamos aquí.','Use nosotros agreement.','Estamos is the present nosotros form of estar.','Kami/tayo: estamos.')]),
 unit('progressive','-ando/-iendo: estoy revisando','Beginner',
 'For an action in progress, conjugate estar and add a gerund. Regular -ar makes -ando; -er/-ir makes -iendo. Some gerunds are irregular: leyendo, yendo, diciendo, pidiendo. Ando alone is also a form of andar, meaning I walk/go around; it is not a universal ending you attach anywhere.',
 'Estoy revisando = kasalukuyan kong nirereview. Estar ang iko-conjugate; revisando stays the same: estoy revisando, estamos revisando. Revisar → revisando; comer → comiendo. Ang standalone ando ay verb form ng andar, iba sa -ando ending.',
 'conjugated estar + gerund',forms('estoy revisando,estás revisando,está revisando,estamos revisando,estáis revisando,están revisando'),
 [['Estoy revisando su cuenta.','I am reviewing your account.','Estoy para sa yo; -ando mula sa revisar.'],['Estamos leyendo el mensaje.','We are reading the message.','Leer → leyendo, hindi leiendo.'],['Ando por el parque.','I walk around the park.','Ando rito ay andar, hindi progressive helper.']],
 'Change estar for the person; keep the gerund unchanged.',[
 task('Build: I am reviewing your account.','Estoy revisando su cuenta.','Estar + revisar in -ando.','Revisando expresses the ongoing action; estoy supplies person and tense.','Estoy ang person; revisando ang action.'),
 task('Write: We are reviewing your account.','Estamos revisando su cuenta.','Change only estoy to estamos.','The gerund does not change for nosotros.','Estamos na, pero revisando pa rin.'),
 task('Write: I am reading the message.','Estoy leyendo el mensaje.','Leer has leyendo.','The gerund of leer is leyendo.','May y sa leyendo; huwag leiendo.')]),
 unit('direct','Lo, la, los, las: replace the thing','Beginner',
 'Direct-object pronouns replace what or whom the action affects. In reviso el cargo, el cargo can become lo. La replaces a feminine singular object; los and las are plural. Put these before an ordinary conjugated verb.',
 'Ano ang nirereview? El cargo, kaya lo reviso. La factura, kaya la reviso. Hindi gender ng agent ang batayan—gender at number ng object. Ilagay bago ang conjugated verb sa model na ito.',
 'object pronoun + conjugated verb',[
 ['masculine singular','lo','it / him'],['feminine singular','la','it / her'],['masculine plural','los','them'],['feminine plural','las','them'],['speaker','me','me'],['listener','te','you (tú)']],
 [['Reviso el cargo. Lo reviso.','I review the charge. I review it.','Cargo is masculine singular: lo.'],['Reviso la factura. La reviso.','I review the bill. I review it.','Factura is feminine singular: la.'],['Leo los mensajes. Los leo.','I read the messages. I read them.','Mensajes is masculine plural: los.']],
 'Find the object first, then replace it; do not choose lo based on the speaker.',[
 task('Build: I review it. It refers to el cargo.','Lo reviso.','El cargo → lo.','Lo replaces a masculine singular direct object.','Cargo = masculine singular, kaya lo.'),
 task('Write: I review it. It refers to la factura.','La reviso.','Change only the object pronoun.','Factura is feminine singular.','La factura → la.'),
 task('Write: I read them. Them refers to los mensajes.','Los leo.','Los mensajes → los.','The verb remains the yo form leo.','Object plural ang los; yo pa rin ang gumagawa, kaya leo.')]),
 unit('indirect','Le, les: to whom?','Beginner',
 'Indirect objects identify a recipient in examples such as le envío un correo: I send him/her/you an email. Le is singular and les plural. They do not by themselves reveal gender or whether le means him, her, or formal you; context or an a phrase clarifies.',
 'Kanino ipapadala? Iyon ang indirect object. Le envío un correo = nagpapadala ako ng email sa kanya/sa inyo (usted). Les para sa maraming recipient. Hindi ibig sabihin ng le na male lang.',
 'recipient pronoun + verb + thing sent',[
 ['to me','me','me'],['to you (tú)','te','you'],['to him / her / usted','le','singular recipient'],['to us','nos','us'],['to you (vosotros)','os','informal plural Spain'],['to them / ustedes','les','plural recipients']],
 [['Le envío un correo a Ana.','I send Ana an email.','A Ana clarifies le.'],['Les envío un correo a los clientes.','I send the customers an email.','Plural recipient → les.'],['Nos explica el problema.','He/she explains the problem to us.','Nos ang recipient, hindi ang subject.']],
 'What is sent? Direct object. To whom? Indirect object.',[
 task('Build: I send you an email. Use usted.','Le envío un correo.','Formal singular recipient = le.','The agent is yo (envío); the customer is the recipient le.','Ako ang sender: envío. Sa usted: le.'),
 task('Write: I send them an email.','Les envío un correo.','Several recipients → les.','Les changes the recipient number, not the subject.','Maraming recipient, pero isang sender pa rin.'),
 task('Write: He explains the problem to us. Omit él.','Nos explica el problema.','To us = nos; he explains = explica.','Nos is the recipient; explica agrees with él.','Hindi explicamos: nos receives, él acts.')]),
 unit('se-lo','Se lo: two object pronouns together','Intermediate',
 'When le or les comes immediately before lo, la, los, or las, replace le/les with se. Le envío el enlace → se lo envío. The order is recipient then thing. Se does not reveal whether the recipient is singular or plural; add a clarifying phrase if needed.',
 'Le + lo ay nagiging se lo, hindi le lo. Sa se lo envío, se ang recipient at lo ang el enlace. Hindi automatic reflexive ang se rito. Context ang magsasabi kung sino ang recipient.',
 'le/les + lo/la/los/las → se + lo/la/los/las',[
 ['le + lo','se lo','to him/her/you + it'],['les + lo','se lo','to them/you all + it'],['le + la','se la','recipient + feminine thing'],['les + las','se las','recipients + feminine plural things'],['me + lo','me lo','to me + it'],['nos + lo','nos lo','to us + it']],
 [['Le envío el enlace. Se lo envío.','I send you the link. I send it to you.','El enlace → lo; le changes to se.'],['Les envío la factura. Se la envío.','I send them the bill. I send it to them.','La factura → la.'],['Ana nos lo explica.','Ana explains it to us.','Nos stays nos before lo.']],
 'Recipient first, thing second; le/les becomes se before an l-pronoun.',[
 task('Build: I send it to you. It = el enlace; you = usted.','Se lo envío.','Le + lo becomes se lo.','Lo replaces el enlace; se replaces le before lo.','Huwag le lo envío.'),
 task('Write: I send it to them. It = la factura.','Se la envío.','Les + la becomes se la.','Se can represent les here; la matches factura.','Hindi nagiging plural ang la dahil marami ang recipients.'),
 task('Write: Ana explains it to us.','Ana nos lo explica.','Nos does not change to se.','Nos identifies the recipient; lo identifies the thing explained.','Recipient muna: nos lo.')]),
 unit('nos-os','Nos and os: objects, not subject endings','Intermediate',
 'Nos can mean us/to us or be a reflexive pronoun with nosotros. Os is the corresponding object/reflexive pronoun for vosotros in much of Spain. In Latin America, ustedes normally uses los/las, les, or se according to the function. Do not replace every os with les.',
 'Nos = us/to us, pero nosotros ang subject “we.” Sa nos ayuda, siya ang tumutulong sa atin. Os ay para sa vosotros, common sa Spain. Sa ustedes, piliin ang pronoun ayon sa role: direct object, recipient, o reflexive.',
 'subject controls verb; object pronoun identifies receiver',[
 ['Ana helps us','Ana nos ayuda.','nos = direct object'],['Ana sends us a message','Ana nos envía un mensaje.','nos = recipient'],['We get up','Nos levantamos.','nos = reflexive'],['I help you all (vosotros)','Os ayudo.','os = direct object'],['I send you all a message (vosotros)','Os envío un mensaje.','os = recipient'],['You all get up (ustedes)','Se levantan.','se = reflexive']],
 [['Nosotros la ayudamos.','We help her.','Nosotros acts; la receives.'],['Ella nos ayuda.','She helps us.','Ella acts; nos receives.'],['Os envío el mensaje.','I send you all the message.','Spain vosotros recipient = os.']],
 'Nosotros = we do it. Nos = us/to us, or reflexive with we.',[
 task('Build: She helps us.','Ella nos ayuda.','Ella is the subject.','Ayuda agrees with ella, not nos.','Huwag ayudamos: ella ang actor.'),
 task('Write: I send you all the message. Use vosotros recipient.','Os envío el mensaje.','Os before envío.','Os is the informal plural recipient used with vosotros.','Ako pa rin ang sender, kaya envío.'),
 task('Write: I send you all the message. Use ustedes recipient.','Les envío el mensaje.','Recipient ustedes = les.','Les is the indirect-object pronoun for ustedes.','Dito recipient ang role, kaya les, hindi los.')]),
 unit('placement','Where pronouns go: lo reviso / revisarlo','Intermediate',
 'Put object pronouns before a conjugated verb, or attach them to an infinitive or gerund in a verb phrase. Lo voy a revisar and voy a revisarlo are both natural. Attached pronouns may require written accents, as in revisándolo. Negative commands place them before the verb.',
 'Dalawang placement sa voy a revisar: lo voy a revisar o voy a revisarlo. Huwag ilagay sa gitna: voy lo a revisar. Sa gerund, may accent kapag kailangan: revisándolo. Negative command: no lo cierre.',
 'pronoun + conjugated phrase OR infinitive/gerund + pronoun',[
 ['before finite verb','Lo reviso.','I review it.'],['before whole phrase','Lo voy a revisar.','I am going to review it.'],['attached to infinitive','Voy a revisarlo.','I am going to review it.'],['attached to gerund','Estoy revisándolo.','I am reviewing it.'],['before progressive','Lo estoy revisando.','I am reviewing it.'],['negative usted command','No lo cierre.','Do not close it.']],
 [['Voy a revisarlo.','I am going to review it.','Attach lo to infinitive revisar.'],['Lo estoy revisando.','I am reviewing it.','Lo before estoy.'],['No lo cierre.','Do not close it.','Negative command: pronoun before cierre.']],
 'Before the finite verb, or attached to infinitive/gerund; never float the pronoun between a and the infinitive.',[
 task('Build: I am going to review it. Attach the pronoun.','Voy a revisarlo.','Revisar + lo = revisarlo.','The infinitive can host the object pronoun.','Dikit sa infinitive ang lo.'),
 task('Write: I am reviewing it. Put the pronoun before the verb.','Lo estoy revisando.','Lo before estoy.','Both lo estoy revisando and estoy revisándolo are valid, but this prompt requests the first pattern.','Sundin ang requested placement: lo muna.'),
 task('Write: Do not close it. Use usted.','No lo cierre.','No + lo + cierre.','A negative usted command uses cierre with the object pronoun before it.','Negative: no lo cierre, hindi no ciérrelo.')])
];
