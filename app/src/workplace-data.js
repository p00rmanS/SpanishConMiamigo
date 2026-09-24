import {everydayLessons} from './everyday-lessons.js';
import {serviceLabs} from './service-labs.js';
import {accountTraining} from './account-training.js';
import {fillerLessons} from './filler-training.js';
// Original training scenarios. Amounts and policies are fictional, not employer commitments.
// Each phrase has Spanish, English, and a usage tip; each dialogue turn is bilingual.
const unit = (id, category, title, level, objective, phrases, dialogue, practice, model, coaching) => ({id:'work-'+id,category,title,level,objective,phrases,dialogue,practice,model,coaching});
export const workplaceModules = [
 unit('welcome','Customer care','Open a call with confidence','Beginner','Greet, introduce yourself, and invite the customer to explain.',[
  ['Gracias por llamar. Mi nombre es Ana. ¿En qué puedo ayudarle?','Thank you for calling. My name is Ana. How can I help you?','Ayudarle is a courteous choice when addressing one customer with usted.'],
  ['¿Con quién tengo el gusto de hablar?','Whom do I have the pleasure of speaking with?','A warm, formal introduction; ask how the customer prefers to be addressed.'],
  ['Voy a revisar su caso.','I am going to review your case.','Voy a + infinitive states your next action without promising a result.']
 ],[['Agent','Gracias por llamar. ¿En qué puedo ayudarle?','Thank you for calling. How can I help you?'],['Customer','Mi servicio no funciona.','My service is not working.'],['Agent','Lamento el inconveniente. ¿Qué ocurre al intentar usarlo?','I am sorry for the inconvenience. What happens when you try to use it?'],['Customer','Aparece un mensaje de error.','An error message appears.']],
 'Say: I am going to review your account. Use voy a; account = cuenta.','Voy a revisar su cuenta.','Use revisar for reviewing an account; do not imply you have already found the cause.'),
 unit('clarify','Customer care','Clarify without guessing','Beginner','Ask for repetition and summarize what you understood.',[
  ['¿Podría repetirlo más despacio, por favor?','Could you repeat that more slowly, please?','Podría makes the request courteous; it is useful when numbers or names are unclear.'],
  ['Para confirmar, ¿el problema empezó hoy?','To confirm, did the problem start today?','A short confirmation question prevents an incorrect diagnosis.'],
  ['¿Puede deletrear su apellido?','Can you spell your surname?','Apellido means surname. Repeat the spelling back instead of guessing.']
 ],[['Customer','Desde ayer no puedo entrar.','I have not been able to sign in since yesterday.'],['Agent','¿Se refiere a la aplicación o al sitio web?','Do you mean the app or the website?'],['Customer','A la aplicación.','The app.'],['Agent','Gracias. Entonces, el problema empezó ayer en la aplicación.','Thank you. So the problem started yesterday in the app.']],
 'Ask: Can you spell your name? Use puede; name = nombre.','¿Puede deletrear su nombre?','Puede + infinitive: deletrear stays in its dictionary form. Ask one question at a time.'),
 unit('verify','Customer care','Verify through a secure process','Intermediate','Explain verification while protecting customer credentials.',[
  ['Antes de continuar, necesitamos verificar su identidad por el canal seguro.','Before continuing, we need to verify your identity through the secure channel.','Use the employer-approved verification process; do not invent security questions.'],
  ['No me comparta su contraseña.','Do not share your password with me.','Contraseña is password. Sign-in codes should stay in the official sign-in process too.'],
  ['Ingrese el código en la página oficial.','Enter the code on the official page.','Distinguish entering a code yourself from reading it to an agent.']
 ],[['Agent','Necesitamos verificar su identidad por el canal seguro.','We need to verify your identity through the secure channel.'],['Customer','¿Le digo mi contraseña?','Should I tell you my password?'],['Agent','No, por favor. No me comparta su contraseña.','No, please. Do not share your password with me.'],['Customer','De acuerdo. Usaré la página oficial.','All right. I will use the official page.']],
 'Say: Do not share your password with me.','No me comparta su contraseña.','The negative usted command is no comparta. Keep credentials out of chat and case notes.'),
 unit('hold','Customer care','Ask before placing a call on hold','Beginner','Request permission and return with a useful update.',[
  ['¿Me permite ponerle en espera mientras reviso el caso?','May I place you on hold while I review the case?','Ask permission before a hold and give the reason.'],
  ['Gracias por esperar. Sigo revisando el problema.','Thank you for waiting. I am still reviewing the problem.','Sigo + gerund describes an action that continues.'],
  ['¿Prefiere esperar o que le llamemos después?','Would you prefer to wait or have us call you later?','Offer a callback only when the service supports it; confirm the agreed time and time zone.']
 ],[['Agent','¿Me permite ponerle en espera mientras reviso el caso?','May I place you on hold while I review the case?'],['Customer','Sí, pero tengo poco tiempo.','Yes, but I do not have much time.'],['Agent','Entiendo. Si necesito más tiempo, le daré una actualización.','I understand. If I need more time, I will give you an update.'],['Customer','Gracias por avisarme.','Thank you for letting me know.']],
 'Say: Thank you for waiting. I am still reviewing the account.','Gracias por esperar. Sigo revisando la cuenta.','Sigo revisando means I am still reviewing; it does not mean the issue is fixed.'),
 unit('impact','Empathy','Acknowledge the real impact','Intermediate','Name the inconvenience and offer a concrete next action.',[
  ['Entiendo que necesita la conexión para trabajar.','I understand that you need the connection for work.','Reflect the impact the customer actually described.'],
  ['Lamento que esté pasando por esto.','I am sorry you are going through this.','Lamento que takes the subjunctive esté here. Avoid claiming you know exactly how someone feels.'],
  ['Voy a comprobar el estado del servicio.','I am going to check the service status.','Pair empathy with an action you can actually take.']
 ],[['Customer','Estoy perdiendo una reunión importante.','I am missing an important meeting.'],['Agent','Entiendo que necesita la conexión para trabajar.','I understand that you need the connection for work.'],['Customer','Necesito una solución.','I need a solution.'],['Agent','Voy a comprobar el estado del servicio y explicarle las opciones.','I am going to check the service status and explain the options to you.']],
 'Say: I understand that you need the service for work.','Entiendo que necesita el servicio para trabajar.','Necesita addresses usted. Para trabajar expresses the purpose, for work.'),
 unit('anger','Empathy','Respond to frustration','Intermediate','Acknowledge repeat effort without telling the customer to calm down.',[
  ['Entiendo su frustración; ya ha llamado varias veces.','I understand your frustration; you have already called several times.','Use this only when the customer or record confirms repeated calls.'],
  ['Voy a leer las notas para no pedirle que repita todo.','I am going to read the notes so I do not ask you to repeat everything.','Reduce effort instead of giving a generic apology repeatedly.'],
  ['Podemos revisar juntos lo que falta.','We can review what is still needed together.','Juntos signals collaboration; it does not assign blame.']
 ],[['Customer','¡Es la tercera vez que llamo!','This is the third time I have called!'],['Agent','Entiendo su frustración. Voy a leer las notas.','I understand your frustration. I am going to read the notes.'],['Customer','No quiero repetirlo todo.','I do not want to repeat everything.'],['Agent','De acuerdo. Primero confirmaré lo que ya se intentó.','All right. First I will confirm what has already been tried.']],
 'Say: I am going to read the notes.','Voy a leer las notas.','Leer means to read. Do not say cálmese (calm down) as a substitute for acknowledging the problem.'),
 unit('limits','Empathy','Set a respectful boundary','Advanced','Explain what you can do and maintain a professional conversation.',[
  ['Quiero ayudarle. Para continuar, necesitamos hablar con respeto.','I want to help you. To continue, we need to speak respectfully.','Describe the behavior needed; avoid labeling the customer.'],
  ['No puedo autorizar ese ajuste, pero puedo solicitar una revisión.','I cannot authorize that adjustment, but I can request a review.','Separate your authority from the action you can offer.'],
  ['Voy a seguir el procedimiento de atención.','I am going to follow the customer service procedure.','Follow your employer’s escalation and abusive-call procedure.']
 ],[['Customer','¡Exijo que me lo quite ahora!','I demand that you remove it now!'],['Agent','Entiendo que quiere resolver el cargo. Puedo solicitar una revisión.','I understand that you want to resolve the charge. I can request a review.'],['Customer','¿Entonces no puede quitarlo?','So you cannot remove it?'],['Agent','No puedo autorizar ese ajuste. Sí puedo documentar el motivo de su solicitud.','I cannot authorize that adjustment. I can document the reason for your request.']],
 'Say: I can request a review. Use puedo.','Puedo solicitar una revisión.','Puedo is ability or authority; solicitar una revisión does not guarantee approval.'),
 unit('uncertainty','Empathy','Be honest when you do not know','Intermediate','Give a next step without guessing a cause or a deadline.',[
  ['Todavía no tengo una hora confirmada de resolución.','I do not yet have a confirmed resolution time.','An update time and a repair deadline are different commitments.'],
  ['Prefiero verificarlo para darle información correcta.','I prefer to verify it so I can give you correct information.','Acknowledge uncertainty and explain how you will reduce it.'],
  ['Lo que sí puedo confirmar es que el caso está en revisión.','What I can confirm is that the case is under review.','Only state a status you can verify in the system.']
 ],[['Customer','¿Estará listo hoy?','Will it be ready today?'],['Agent','Todavía no tengo una hora confirmada de resolución.','I do not yet have a confirmed resolution time.'],['Customer','¿Qué sabe por ahora?','What do you know so far?'],['Agent','El caso está en revisión. Voy a comprobar si hay novedades.','The case is under review. I am going to check for updates.']],
 'Say: I am going to check whether there are updates.','Voy a comprobar si hay novedades.','Si without an accent means whether here; sí with an accent means yes.'),
 unit('diagnose','Technical support','Find the symptom before the fix','Beginner','Ask about timing, scope, and the exact error.',[
  ['¿Qué mensaje de error aparece?','What error message appears?','Ask for the exact message, with private information omitted.'],
  ['¿Desde cuándo ocurre?','How long has this been happening?','This asks when the issue began, not how often it occurs.'],
  ['¿Ocurre en todos los dispositivos o solo en uno?','Does it happen on all devices or only one?','Scope helps distinguish a device problem from a wider service problem.']
 ],[['Agent','¿Qué mensaje de error aparece?','What error message appears?'],['Customer','Dice que no hay conexión.','It says there is no connection.'],['Agent','¿Ocurre en todos los dispositivos o solo en uno?','Does it happen on all devices or only one?'],['Customer','Solo en mi computadora.','Only on my computer.']],
 'Ask: Does it happen only in the app? App = aplicación.','¿Ocurre solo en la aplicación?','Solo means only here. Ask about scope before prescribing a reset.'),
 unit('wifi','Technical support','Wi-Fi and internet are different','Intermediate','Check the connection in a safe, understandable sequence.',[
  ['¿Está conectado a la red wifi correcta?','Are you connected to the correct Wi-Fi network?','A Wi-Fi connection does not necessarily mean internet service is working.'],
  ['¿Puede abrir otra página web?','Can you open another webpage?','One failed website does not establish a total outage.'],
  ['Reiniciar no es lo mismo que restablecer los ajustes de fábrica.','Restarting is not the same as restoring factory settings.','A factory reset may erase settings. Do not use the terms interchangeably.']
 ],[['Customer','Tengo wifi, pero no puedo navegar.','I have Wi-Fi, but I cannot browse the internet.'],['Agent','¿Puede abrir otra página web?','Can you open another webpage?'],['Customer','No, ninguna abre.','No, none of them open.'],['Agent','Vamos a comprobar si otros dispositivos tienen el mismo problema.','Let us check whether other devices have the same problem.']],
 'Ask: Can you open another app?','¿Puede abrir otra aplicación?','Replace página web with aplicación. Keep abrir in the infinitive after puede.'),
 unit('restart','Technical support','Give one instruction at a time','Beginner','Check readiness, protect unsaved work, and confirm the result.',[
  ['Guarde su trabajo antes de reiniciar el equipo.','Save your work before restarting the device.','Explain the interruption before asking for a restart.'],
  ['Cuando esté listo, seleccione Reiniciar.','When you are ready, select Restart.','Match the actual on-screen label; it can vary by product and language.'],
  ['¿Qué aparece ahora en la pantalla?','What appears on the screen now?','Pause after each step and let the customer report the result.']
 ],[['Agent','Guarde su trabajo antes de reiniciar el equipo.','Save your work before restarting the device.'],['Customer','Ya lo guardé.','I have saved it.'],['Agent','Cuando esté listo, seleccione Reiniciar.','When you are ready, select Restart.'],['Customer','Ya se reinició, pero el error sigue.','It has restarted, but the error is still there.']],
 'Say: Save your work before closing the app.','Guarde su trabajo antes de cerrar la aplicación.','Antes de takes an infinitive: cerrar. Guarde is a polite usted command.'),
 unit('login','Technical support','Help with sign-in problems','Intermediate','Distinguish a forgotten password from a locked account.',[
  ['¿Olvidó su contraseña o aparece un mensaje de bloqueo?','Did you forget your password, or does a lockout message appear?','Different symptoms may require different recovery procedures.'],
  ['Use la opción de recuperación en el sitio oficial.','Use the recovery option on the official website.','Direct the customer to the known official service, not an unverified link.'],
  ['No necesito conocer su contraseña para ayudarle.','I do not need to know your password to help you.','Never put passwords or sign-in codes into the case notes.']
 ],[['Customer','Mi cuenta está bloqueada.','My account is locked.'],['Agent','¿Qué indica el mensaje de bloqueo?','What does the lockout message say?'],['Customer','Que debo usar la recuperación de cuenta.','That I must use account recovery.'],['Agent','Use esa opción en el sitio oficial. No me comparta su contraseña.','Use that option on the official website. Do not share your password with me.']],
 'Say: My account is locked. Speak as the customer.','Mi cuenta está bloqueada.','Está describes the account’s state. Bloqueada agrees with the feminine noun cuenta.'),
 unit('browser','Technical support','Browser, cache, and permissions','Intermediate','Explain a technical action and its possible effect.',[
  ['El navegador es el programa que usa para abrir páginas web.','The browser is the program you use to open webpages.','Define jargon before giving instructions.'],
  ['Borrar las cookies puede cerrar sus sesiones.','Clearing cookies may sign you out of your sessions.','Explain the effect and obtain agreement before changing stored data.'],
  ['¿La aplicación tiene permiso para usar el micrófono?','Does the app have permission to use the microphone?','Check the specific permission; do not ask the customer to disable all protections.']
 ],[['Customer','No me escuchan en las llamadas.','People cannot hear me on calls.'],['Agent','¿La aplicación tiene permiso para usar el micrófono?','Does the app have permission to use the microphone?'],['Customer','No sé dónde verlo.','I do not know where to check that.'],['Agent','Dígame qué dispositivo usa para indicarle los pasos adecuados.','Tell me which device you use so I can give you the appropriate steps.']],
 'Ask: Does the app have permission to use the camera?','¿La aplicación tiene permiso para usar la cámara?','Tiene permiso para + infinitive explains an app permission. Cámara keeps its written accent.'),
 unit('outage','Technical support','Handle an outage and escalate','Intermediate','Separate a confirmed outage from an individual problem.',[
  ['Hay una interrupción del servicio confirmada en su zona.','There is a confirmed service outage in your area.','Say this only after checking an authoritative service status.'],
  ['Voy a remitir el caso al equipo técnico.','I am going to refer the case to the technical team.','Explain why the next team is needed and record what has already been tried.'],
  ['La solución temporal no corrige la causa del problema.','The temporary workaround does not fix the cause of the problem.','Label a workaround clearly; confirm whether it is usable for this customer.']
 ],[['Customer','Mi vecino tampoco tiene servicio.','My neighbor does not have service either.'],['Agent','Voy a comprobar si hay una interrupción en la zona.','I am going to check whether there is an outage in the area.'],['Customer','¿Debo reiniciar otra vez?','Should I restart again?'],['Agent','Primero revisaré el estado del servicio para evitar pasos innecesarios.','First I will review the service status to avoid unnecessary steps.']],
 'Say: I am going to refer the case to the billing team. Billing = facturación.','Voy a remitir el caso al equipo de facturación.','Al combines a + el. Change the destination team without promising its decision.'),
 unit('invoice','Billing','Explain a bill line by line','Beginner','Distinguish an invoice, a receipt, and the outstanding balance.',[
  ['Vamos a revisar el desglose de su factura.','Let us review the breakdown of your bill.','Desglose means itemized breakdown. Review one item at a time.'],
  ['El saldo pendiente es de treinta dólares.','The outstanding balance is thirty dollars.','Always specify the currency. The amount is fictional practice.'],
  ['El comprobante de pago confirma que se realizó un pago.','The proof of payment confirms that a payment was made.','An invoice and proof of payment are different documents.']
 ],[['Customer','No entiendo el total de mi factura.','I do not understand the total on my bill.'],['Agent','Vamos a revisar el desglose. La cuota del plan es de veinte dólares.','Let us review the breakdown. The plan fee is twenty dollars.'],['Customer','¿Y los otros diez dólares?','And the other ten dollars?'],['Agent','En este ejemplo, corresponden a un servicio adicional.','In this example, they are for an additional service.']],
 'Say: The outstanding balance is fifty dollars.','El saldo pendiente es de cincuenta dólares.','Use es de before the amount. Confirm currency and billing period in a real interaction.'),
 unit('dates','Billing','Confirm amounts and dates clearly','Beginner','Read important details back without relying on ambiguous formats.',[
  ['La fecha de vencimiento es el quince de octubre.','The due date is October fifteenth.','Say the month in words; numeric date order differs between locales.'],
  ['Para confirmar: son cuarenta y cinco dólares con cincuenta centavos.','To confirm: it is forty-five dollars and fifty cents.','Read the whole amount and currency rather than guessing a decimal separator.'],
  ['¿Ese pago corresponde a la factura de septiembre?','Does that payment correspond to the September bill?','Confirm the billing period separately from the payment date.']
 ],[['Customer','La fecha dice diez once.','The date says ten eleven.'],['Agent','¿Puede confirmar el mes con palabras?','Can you confirm the month in words?'],['Customer','Es el diez de noviembre.','It is November tenth.'],['Agent','Gracias. Entonces, la fecha es el diez de noviembre.','Thank you. So the date is November tenth.']],
 'Say: The due date is November twentieth.','La fecha de vencimiento es el veinte de noviembre.','Spanish commonly uses el + day + de + month. Months are lowercase.'),
 unit('duplicate','Billing','Investigate a duplicate charge','Intermediate','Clarify whether two entries are pending or posted.',[
  ['¿Ambos cargos aparecen como confirmados o uno está pendiente?','Do both charges appear as posted, or is one pending?','The institution’s labels vary. Do not assume a pending entry is a duplicate payment.'],
  ['Voy a comparar las fechas y los importes.','I am going to compare the dates and amounts.','Importe means amount. Compare records before drawing a conclusion.'],
  ['Todavía no puedo confirmar que sea un cobro duplicado.','I cannot yet confirm that it is a duplicate charge.','Sea follows this negative statement of certainty; avoid promising an immediate refund.']
 ],[['Customer','Me cobraron dos veces.','I was charged twice.'],['Agent','¿Ambos cargos aparecen como confirmados o uno está pendiente?','Do both charges appear as posted, or is one pending?'],['Customer','Uno está pendiente.','One is pending.'],['Agent','Voy a comparar las fechas y los importes antes de confirmar lo ocurrido.','I am going to compare the dates and amounts before confirming what happened.']],
 'Say: I am going to compare the dates and amounts.','Voy a comparar las fechas y los importes.','Both objects are plural: las fechas and los importes. A pending charge is not automatically a settled charge.'),
 unit('declined','Billing','Discuss a declined payment tactfully','Intermediate','Explain the known result without guessing the reason.',[
  ['El pago no se pudo procesar.','The payment could not be processed.','This describes the outcome without blaming the customer.'],
  ['No tengo acceso al motivo del rechazo del banco.','I do not have access to the reason for the bank’s decline.','Use this only if accurate; never assume insufficient funds.'],
  ['Puede revisar los datos en el portal de pago seguro.','You can review the details in the secure payment portal.','Keep payment credentials in the approved payment process, not ordinary chat.']
 ],[['Customer','¿Por qué rechazaron mi tarjeta?','Why was my card declined?'],['Agent','El pago no se pudo procesar. No tengo acceso al motivo del banco.','The payment could not be processed. I do not have access to the bank’s reason.'],['Customer','¿Se la dicto de nuevo?','Should I read it to you again?'],['Agent','Use el portal de pago seguro para revisar los datos.','Use the secure payment portal to review the details.']],
 'Say: The payment could not be processed.','El pago no se pudo procesar.','Se pudo + infinitive expresses what could be done; no makes it negative.'),
 unit('refund','Billing','Explain a refund without overpromising','Intermediate','Separate a request, approval, and receipt of funds.',[
  ['He enviado la solicitud de reembolso; aún no está aprobada.','I have sent the refund request; it is not approved yet.','Submitting a request does not mean the refund has been approved.'],
  ['El plazo depende del método de pago y de la política aplicable.','The time frame depends on the payment method and applicable policy.','Quote an actual verified policy in a real case; do not invent processing times.'],
  ['Un ajuste en la factura no siempre es un reembolso.','An adjustment to the bill is not always a refund.','Explain whether money is returned or the account balance changes.']
 ],[['Customer','¿Ya me devolvieron el dinero?','Has my money been returned yet?'],['Agent','He enviado la solicitud de reembolso; aún no está aprobada.','I have sent the refund request; it is not approved yet.'],['Customer','¿Cuándo sabré el resultado?','When will I know the result?'],['Agent','Voy a verificar el plazo de revisión aplicable a su caso.','I am going to verify the review time frame applicable to your case.']],
 'Say: The request is not approved yet.','La solicitud aún no está aprobada.','Aún means yet or still. Aprobada agrees with solicitud, not with the customer.'),
 unit('cancel','Billing','Explain cancellation and partial charges','Advanced','Confirm the effective date, conditions, and customer choice.',[
  ['Antes de confirmar, voy a explicarle cuándo termina el servicio.','Before confirming, I am going to explain when the service ends.','Acknowledge the cancellation request; avoid using retention questions to obstruct it.'],
  ['El cargo prorrateado corresponde a una parte del período de facturación.','The prorated charge corresponds to part of the billing period.','Prorrateado means proportional. Whether it applies depends on the actual plan.'],
  ['¿Desea continuar con la cancelación?','Would you like to proceed with the cancellation?','Ask after explaining verified effects, including any applicable final charges.']
 ],[['Customer','Quiero cancelar mi suscripción.','I want to cancel my subscription.'],['Agent','Claro. Voy a revisar la fecha efectiva y los posibles cargos finales.','Of course. I am going to review the effective date and possible final charges.'],['Customer','¿Me devolverán una parte?','Will I get part of it back?'],['Agent','Voy a comprobar las condiciones de su plan antes de confirmarlo.','I am going to check your plan’s terms before confirming that.']],
 'Ask: Would you like to proceed with the cancellation?','¿Desea continuar con la cancelación?','Desea + infinitive is a courteous question. Never assume prorating or a refund applies to every plan.'),
 unit('handoff','Resolution','Transfer without losing the story','Intermediate','Summarize the issue, attempted steps, and reason for transfer.',[
  ['Voy a transferirle al equipo que gestiona estos casos.','I am going to transfer you to the team that handles these cases.','Tell the customer why you are transferring and follow the actual handoff process.'],
  ['Dejaré anotados los pasos que ya intentamos.','I will note the steps we have already tried.','Clear notes reduce repeated troubleshooting.'],
  ['Si se corta la llamada, use este número de caso como referencia.','If the call disconnects, use this case number as a reference.','Confirm an actual reconnection process; a case number alone does not guarantee a callback.']
 ],[['Agent','Probamos otro navegador y el error continúa.','We tried another browser and the error continues.'],['Customer','¿Debo empezar de nuevo con otra persona?','Do I have to start over with someone else?'],['Agent','Dejaré anotados los pasos que ya intentamos.','I will note the steps we have already tried.'],['Customer','De acuerdo. ¿Cuál es el número de caso?','All right. What is the case number?']],
 'Say: We tried another browser and the error continues.','Probamos otro navegador y el error continúa.','Probamos can be present or past; the completed troubleshooting context makes it past here.'),
 unit('close','Resolution','Confirm the fix before closing','Beginner','Ask the customer to test the original action and recap.',[
  ['¿Puede intentar la misma acción otra vez?','Can you try the same action again?','Test the original symptom rather than assuming a restart solved it.'],
  ['Para resumir, actualizamos la aplicación y comprobamos el acceso.','To summarize, we updated the app and checked access.','Recap only actions that actually happened.'],
  ['¿Hay algo más en lo que pueda ayudarle?','Is there anything else I can help you with?','Close after confirming the result, not while the customer is still testing.']
 ],[['Agent','¿Puede intentar la misma acción otra vez?','Can you try the same action again?'],['Customer','Sí, ahora puedo entrar.','Yes, now I can sign in.'],['Agent','Perfecto. Actualizamos la aplicación y comprobamos el acceso.','Great. We updated the app and checked access.'],['Customer','Gracias, eso era todo.','Thank you, that was everything.']],
 'Ask: Can you try again? Use puede and intentar.','¿Puede intentar otra vez?','Keep intentar in the infinitive after puede. A successful test is stronger evidence than an assumption.'),
 unit('regional','Regional communication','Mexico, Latin America, and Spain','Beginner','Recognize regional vocabulary and mirror clear customer wording.',[
  ['¿Usa un celular o una computadora?','Are you using a mobile phone or a computer?','Celular and computadora are common in Mexico and much of Latin America; local usage varies.'],
  ['¿Usa un móvil o un ordenador?','Are you using a mobile phone or a computer?','Móvil and ordenador are common in Spain. These are alternatives, not different devices.'],
  ['¿Puede abrir la configuración del dispositivo?','Can you open the device settings?','The interface may label settings Configuración or Ajustes. Match the customer’s actual screen.']
 ],[['Customer','No funciona en mi ordenador.','It does not work on my computer.'],['Agent','Entiendo. ¿Qué aparece en la pantalla del ordenador?','I understand. What appears on the computer screen?'],['Customer','Me pide que abra Ajustes.','It asks me to open Settings.'],['Agent','De acuerdo. Vamos a seguir las opciones que aparecen en su pantalla.','All right. Let us follow the options that appear on your screen.']],
 'Ask a customer in Spain: Are you using a computer? Use ordenador and usa.','¿Usa un ordenador?','Mexico is part of Latin America. There is no single LATAM dialect; mirror clear vocabulary without imitating an accent.'),
 unit('register','Regional communication','Choose respectful, natural language','Intermediate','Recognize tú, usted, and vos while keeping your service register consistent.',[
  ['¿Puede revisar su correo?','Can you check your email? (usted)','A useful formal model; workplace style and the customer’s preference determine the register.'],
  ['¿Puedes revisar tu correo?','Can you check your email? (tú)','Keep puedes with tu; do not mix the forms accidentally. Tú is also used by many customer-facing brands.'],
  ['¿Podés revisar tu correo?','Can you check your email? (vos, in some regions)','A voseo model used in places such as Argentina and Uruguay; voseo patterns differ across regions.']
 ],[['Agent','¿Prefiere que le hable de usted o de tú?','Would you prefer that I address you formally or informally?'],['Customer','De tú está bien.','Informally is fine.'],['Agent','Perfecto. ¿Puedes revisar tu correo?','Great. Can you check your email?'],['Customer','Sí, ya recibí el mensaje.','Yes, I have received the message.']],
 'Ask formally: Can you check your email?','¿Puede revisar su correo?','Use puede and su together for this usted model. Do not assume one country has a single politeness rule.')
,...accountTraining,...fillerLessons,...serviceLabs,...everydayLessons];

export const workplaceLessons = workplaceModules.map((m,index) => ({
 id:m.id,title:m.title,subtitle:m.objective,unit:'Workplace · '+m.category,track:m.level,level:m.level==='Beginner'?'A1–A2 practice':m.level==='Intermediate'?'B1 practice':'B2 practice',
 goal:m.objective,sentence:m.phrases[0][0],meaning:m.phrases[0][1],sound:'Listen to the model, then practice one phrase at a time.',
 taglish:m.objective,english:m.coaching,pattern:[m.phrases[0][0]],key:m.objective,tip:'Use the phrase with a clear next action.',tipDetail:m.phrases[0][2],mistake:m.coaching,
 prompt:'Choose the English meaning of: '+m.phrases[0][0],choices:[m.phrases[0][1],workplaceModules[(index+1)%workplaceModules.length].phrases[0][1],workplaceModules[(index+2)%workplaceModules.length].phrases[0][1]].map((_,i,all)=>all[(i+index)%all.length]),answer:m.phrases[0][1],reason:m.phrases[0][2],
 writing:m.practice,accepted:[m.model],reply:m.model,scene:m.practice,sceneHint:m.coaching,examples:m.phrases.map(p=>p.slice(0,2)),recap:[m.objective,m.coaching,m.phrases[0][2]]
}));

export const workplaceVocabulary = [
 ['la pantalla','screen','Ask what appears on it; avoid assuming which screen the customer sees.'],
 ['el teclado','keyboard','Distinguish typing text from selecting a button.'],
 ['el archivo adjunto','attachment','Ask customers to remove private information before sending evidence.'],
 ['la captura de pantalla','screenshot','Specify which error to capture and ask for private details to be hidden.'],
 ['el enlace','link','Use the known official service or approved support link.'],
 ['el navegador','browser','A browser opens websites; it is not the same as a search engine.'],
 ['la pestaña','tab','An open browser tab is different from the whole browser window.'],
 ['la ventana','window','Describe which window to close to avoid losing unrelated work.'],
 ['la caché','cache','Explain the effects before clearing stored data.'],
 ['la copia de seguridad','backup','Confirm a backup before steps that could remove data.'],
 ['descargar / cargar','download / upload or load','Cargar depends on context; subir un archivo means upload a file.'],
 ['actualizar','to update or refresh','Specify updating software versus refreshing a page.'],
 ['reiniciar','to restart','This differs from restoring factory settings.'],
 ['restablecer','to reset or restore','State exactly what will be reset and what may be lost.'],
 ['iniciar sesión / cerrar sesión','sign in / sign out','A session is access to the account, not the account itself.'],
 ['el permiso','permission','Check the particular camera or microphone permission needed.'],
 ['el sistema operativo','operating system','Ask which version the customer uses before giving menu instructions.'],
 ['el enrutador / el rúter','router','Customers may use router; mirror their understandable term.'],
 ['la avería / la falla','fault / failure','Avería is common in Spain; falla is common in much of Latin America. Usage overlaps.'],
 ['la incidencia / el problema','incident / problem','Problema is a plain-language alternative to internal support jargon.'],
 ['el número de caso / el folio','case number / reference number','Folio is common in Mexican service contexts; confirm the actual label.'],
 ['el cargo / el cobro','charge / collection or charging','Use the context to distinguish a bill item from money collected.'],
 ['la cuota','fee or installment','State whether it is recurring or one installment of a total.'],
 ['el saldo pendiente','outstanding balance','Specify the currency and the date of the balance.'],
 ['la fecha de corte','billing cutoff date','This is not necessarily the due date.'],
 ['la fecha de vencimiento','due date','Spell out the month when confirming a date.'],
 ['el reembolso','refund','A request is not the same as approval or funds received.'],
 ['el ajuste','adjustment','Explain how it changes the bill or account balance.'],
 ['el comprobante de pago','proof of payment','A bill alone does not prove a payment was made.'],
 ['el estado de cuenta','account statement','A statement can cover several transactions, not just one bill.'],
 ['el cargo por mora','late fee','Only describe a fee after checking the actual account and policy.'],
 ['los días hábiles','business days','Applicable holidays and processing rules depend on the service.']
];

export const workplaceSources = [
 ['Microsoft: Wi-Fi troubleshooting','https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows'],
 ['Apple: apps that close unexpectedly','https://support.apple.com/en-ca/119876'],
 ['Instituto Cervantes: discourse markers','https://cvc.cervantes.es/ensenanza/biblioteca_ele/diccio_ele/diccionario/marcadoresdiscurso.htm'],
 ['FundéuRAE: computadora / ordenador','https://www.fundeu.es/consulta/computadoraordenador-1215/'],
 ['RAE: voseo','https://www.rae.es/dpd/voseo'],
 ['INCIBE: password security policy','https://www.incibe.es/sites/default/files/contenidos/politicas/documentos/2024/Contrase%C3%B1as_Pol%C3%ADtica%20de%20seguridad_2024.pdf']
];
