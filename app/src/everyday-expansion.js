// Original bilingual scenarios. All prices and arrangements are fictional examples.
function lesson(id,title,objective,phrases,replies,transfer){
 return {id:'work-daily-'+id,category:'Everyday life',level:'Beginner',title,objective,phrases,practiceRole:'You',
 dialogue:phrases.flatMap((p,i)=>[['You',p[0],p[1]],['Partner',...replies[i]]]),
 practice:'Write in Spanish: '+phrases[0][1],model:phrases[0][0],coaching:phrases[0][2],transfer};
}
export const everydayExpansion=[
 lesson('introduction','Meet someone and keep talking','Introduce yourself, ask a follow-up, and find something in common.',[
  ['Soy James. ¿Cómo te llamas?','I am James. What is your name?','Soy identifies who you are. Te llamas is the friendly tú form; se llama addresses someone with usted.'],
  ['Mucho gusto. ¿De dónde eres?','Nice to meet you. Where are you from?','Eres is the tú form of ser. Let the other person choose how much personal detail to share.'],
  ['Yo también estoy aprendiendo español.','I am learning Spanish too.','También means too or also. Estoy aprendiendo describes an activity in progress.']
 ],[['Me llamo Ana.','My name is Ana.'],['Soy de México. Estoy aprendiendo inglés.','I am from Mexico. I am learning English.'],['¡Podemos practicar juntos!','We can practice together!']],
 'Introduce yourself with your own name. Ask someone their name using usted, then say which language you are learning.'),
 lesson('routine','Describe your ordinary morning','Explain a routine and connect actions in order.',[
  ['Normalmente me levanto a las siete.','I usually get up at seven.','Me levanto means I get up. Keep me with the verb; levanto alone means I lift or raise something.'],
  ['Primero desayuno y después salgo de casa.','First I have breakfast, and then I leave home.','Primero and después organize events. Desayuno is a verb here: I have breakfast.'],
  ['Tardo media hora en llegar al trabajo.','It takes me half an hour to get to work.','Tardar + time + en + infinitive describes how long an action takes.']
 ],[['¿Qué haces después?','What do you do afterward?'],['¿Cuánto tardas en llegar al trabajo?','How long does it take you to get to work?'],['Yo tardo un poco más.','It takes me a little longer.']],
 'Describe your actual morning in three sentences. Change the time, add a second activity, and say how long your journey takes.'),
 lesson('weekend-past','Tell a friend what you did','Use simple past-tense actions to describe a weekend.',[
  ['Ayer fui al mercado.','Yesterday I went to the market.','Fui is the completed past I form of ir here. Ayer anchors the event in the past.'],
  ['Compré fruta y preparé la cena.','I bought fruit and made dinner.','Compré and preparé end in stressed é for completed I actions. Compare compro: I buy.'],
  ['Después vi una película en casa.','Afterward I watched a movie at home.','Vi is the past I form of ver. It has no written accent.']
 ],[['¿Qué compraste?','What did you buy?'],['¿Y qué hiciste después?','And what did you do afterward?'],['Suena como un buen día.','Sounds like a good day.']],
 'Tell a different story using ayer, compré, and después. Replace the place, purchase, and final activity.'),
 lesson('preferences','Talk about what you enjoy','Express likes, dislikes, and preferences without translating word for word.',[
  ['Me gusta cocinar, pero no me gusta lavar los platos.','I like cooking, but I do not like washing dishes.','Use gusta before an infinitive. Pero connects contrasting ideas.'],
  ['Me gustan las películas de comedia.','I like comedy movies.','Use gustan with plural things, such as las películas. The thing liked controls gusta or gustan.'],
  ['Prefiero ver una película en casa.','I prefer to watch a movie at home.','Prefiero + infinitive expresses a preference. Keep ver in its base form.']
 ],[['A mí también me gusta cocinar.','I like cooking too.'],['¿Prefieres ir al cine o quedarte en casa?','Do you prefer going to the movies or staying home?'],['Podemos ver una juntos.','We can watch one together.']],
 'Say one activity you like and two things you like using gusta and gustan. Then state a preference with prefiero.'),
 lesson('weather-plans','Change plans because of the weather','Describe conditions and suggest a practical alternative.',[
  ['Hace mucho calor hoy.','It is very hot today.','Use hace calor for hot weather. Estoy caliente does not mean the weather is hot.'],
  ['¿Buscamos un lugar con sombra?','Shall we look for a shady place?','A present-tense we question can make a suggestion. Sombra means shade or shadow.'],
  ['Si llueve, podemos entrar en el café.','If it rains, we can go into the café.','Si introduces the condition; podemos + infinitive proposes an option.']
 ],[['Sí, prefiero no caminar mucho.','Yes, I would rather not walk much.'],['Hay un parque cerca.','There is a park nearby.'],['Buena idea. Vamos.','Good idea. Let us go.']],
 'Describe a cold day with hace frío. Suggest a place indoors and explain what you can do if it rains.'),
 lesson('bus','Choose the right bus','Confirm the route, fare, and stop before traveling.',[
  ['¿Este autobús va al centro?','Does this bus go downtown?','Va is the third-person form of ir. Al combines a + el.'],
  ['¿Cuánto cuesta el pasaje?','How much is the fare?','Cuánto cuesta asks the price of one thing. Ask locally how fares are paid; do not assume a payment method.'],
  ['¿Me puede avisar cuando lleguemos?','Can you let me know when we arrive?','Me puede avisar is a polite request. Cuando lleguemos refers to a future arrival.']
 ],[['Sí, pasa por la plaza central.','Yes, it passes through the central square.'],['Cuesta dos euros.','It costs two euros.'],['Sí, pero esté pendiente de las paradas.','Yes, but keep an eye on the stops.']],
 'Ask whether the bus goes to the station instead. Ask the fare, then confirm the name of your stop.'),
 lesson('taxi','Confirm your destination in a taxi','Give a destination and clarify the drop-off location.',[
  ['Voy al hotel que está junto a la estación.','I am going to the hotel next to the station.','Que está adds a description. Junto a means next to.'],
  ['¿Me puede dejar en la entrada principal?','Can you drop me off at the main entrance?','Dejar means to drop someone off in this context. Principal means main.'],
  ['Sí, aquí está bien. Muchas gracias.','Yes, here is fine. Thank you very much.','Aquí means here; allí means there. Confirm a suitable stopping place with the driver.']
 ],[['¿El hotel de la calle Norte?','The hotel on Norte Street?'],['Sí, puedo parar allí.','Yes, I can stop there.'],['De nada. Que tenga buen día.','You are welcome. Have a good day.']],
 'Give a different destination and a nearby landmark. Ask to get out by the entrance, then thank the driver.'),
 lesson('hotel','Check in and ask about your room','Confirm a reservation and ask useful practical questions.',[
  ['Tengo una reserva a nombre de James.','I have a reservation under the name James.','A nombre de means under the name of. Replace James with the name on the booking.'],
  ['¿A qué hora es la salida?','What time is checkout?','A qué hora asks for a clock time. Salida can mean departure or checkout in this setting.'],
  ['¿Dónde puedo dejar la maleta mientras espero?','Where can I leave my suitcase while I wait?','Mientras means while. Ask about storage instead of assuming it is available.']
 ],[['Bienvenido. Su habitación aún no está lista.','Welcome. Your room is not ready yet.'],['La salida es a las once de la mañana.','Checkout is at eleven in the morning.'],['Podemos guardarla en recepción.','We can keep it at reception.']],
 'Check in using a different name. Ask about breakfast time and whether you can leave two suitcases.'),
 lesson('restaurant','Order a meal and clarify ingredients','Ask about a dish and request an ordinary preparation change.',[
  ['¿Qué lleva este plato?','What is in this dish?','Lleva literally means carries, but here asks about ingredients.'],
  ['¿Se puede preparar sin cebolla?','Can it be prepared without onion?','Se puede + infinitive asks whether something is possible. This example expresses a preference, not an allergy.'],
  ['Entonces, quiero ese plato y un vaso de agua.','Then I would like that dish and a glass of water.','Ese points to a dish already discussed. Un vaso de describes the container and its contents.']
 ],[['Lleva arroz, verduras y cebolla.','It contains rice, vegetables, and onion.'],['Sí, podemos hacerlo sin cebolla.','Yes, we can make it without onion.'],['Muy bien, enseguida se lo traigo.','Very good, I will bring it to you shortly.']],
 'Ask what is in another dish. Request it without an ingredient you dislike and add a drink to your order.'),
 lesson('bill','Check a restaurant bill politely','Ask for the bill and point out a possible mistake.',[
  ['La cuenta, por favor.','The bill, please.','A short noun phrase with por favor is natural here. La cuenta is the restaurant bill.'],
  ['Creo que hay un error: pedimos dos cafés, no tres.','I think there is a mistake: we ordered two coffees, not three.','Creo que keeps the correction measured. State the specific difference rather than accusing anyone.'],
  ['Gracias por revisarlo. ¿Podemos pagar por separado?','Thank you for checking it. Can we pay separately?','Por separado means separately. Ask before assuming the bill can be split.']
 ],[['Aquí tiene.','Here you are.'],['Tiene razón. Voy a corregirlo.','You are right. I am going to correct it.'],['Sí, díganme qué paga cada persona.','Yes, tell me what each person is paying for.']],
 'Explain a different mismatch: one sandwich rather than two. Thank the person and ask whether you can pay together.'),
 lesson('clothes','Try on clothes and describe the fit','Ask for a size, try an item, and explain why it does not fit.',[
  ['¿Tiene esta camisa en una talla más grande?','Do you have this shirt in a larger size?','Una talla más grande means one size larger. Más pequeña means smaller.'],
  ['¿Me la puedo probar?','Can I try it on?','La refers to the feminine camisa. Probarse is used for trying clothes on.'],
  ['Me queda un poco ajustada.','It is a little tight on me.','Quedar describes fit here. Ajustada agrees with camisa; ajustado agrees with a masculine item.']
 ],[['Sí, tengo una talla más.','Yes, I have one size larger.'],['Claro, el probador está al fondo.','Of course, the fitting room is at the back.'],['Podemos buscar otro modelo.','We can look for another style.']],
 'Ask for a smaller shirt. Ask to try it on and say that it fits well using me queda bien.'),
 lesson('exchange','Ask about exchanging a purchase','Explain the problem and check the available options.',[
  ['Quisiera cambiar esta camiseta por otra talla.','I would like to exchange this T-shirt for another size.','Cambiar algo por otra cosa describes an exchange. Talla means clothing size.'],
  ['La compré ayer y tengo el recibo.','I bought it yesterday, and I have the receipt.','La refers to camiseta. Compré is past; compro is present.'],
  ['Si no tiene esa talla, ¿qué opciones hay?','If you do not have that size, what options are there?','Qué opciones hay asks openly. A receipt does not by itself establish the store’s exchange policy.']
 ],[['¿Cuándo la compró?','When did you buy it?'],['Voy a comprobar si tenemos la talla.','I am going to check whether we have the size.'],['Primero revisemos las condiciones del cambio.','First, let us review the exchange terms.']],
 'Ask to exchange a jacket for another color. Say when you bought it and ask what options are available.'),
 lesson('invitation','Accept or decline an invitation warmly','Thank someone and explain your availability without oversharing.',[
  ['Gracias por invitarme. Me encantaría ir.','Thank you for inviting me. I would love to go.','Por + infinitive explains the reason for thanks. Me encantaría expresses enthusiasm.'],
  ['¿Quieres que lleve algo?','Do you want me to bring anything?','Lleve follows quieres que when asking about an action you would do. Algo means something or anything here.'],
  ['Perfecto, llevo algo para beber.','Perfect, I will bring something to drink.','The present llevo can express an agreed future action when the plan is clear.']
 ],[['Nos reunimos el domingo por la tarde.','We are getting together on Sunday afternoon.'],['Sí, algo para beber estaría bien.','Yes, something to drink would be good.'],['¡Gracias! Nos vemos el domingo.','Thank you! See you Sunday.']],
 'Decline a different invitation politely using gracias, pero no puedo. Suggest another occasion without inventing a personal excuse.'),
 lesson('boundaries','Say no without sounding harsh','Set a limit clearly and offer an alternative only if you want to.',[
  ['Hoy no puedo ayudarte, lo siento.','I cannot help you today, sorry.','No puedo + infinitive states a limit. A brief apology is enough; a long justification is optional.'],
  ['Puedo ayudarte mañana por la mañana.','I can help you tomorrow morning.','Mañana can mean tomorrow or morning. Mañana por la mañana means tomorrow morning.'],
  ['Tengo media hora disponible.','I have half an hour available.','State what you can offer precisely. Media hora is half an hour.']
 ],[['¿Puedes ayudarme otro día?','Can you help me another day?'],['Gracias. ¿Cuánto tiempo tienes?','Thank you. How much time do you have?'],['Está bien, lo organizamos para mañana.','All right, let us arrange it for tomorrow.']],
 'Decline a request for tonight. Offer a different day only if you can, and state how much time you have.'),
 lesson('repair-conversation','Recover when you miss a word','Ask for repetition, meaning, and confirmation without abandoning the conversation.',[
  ['¿Puedes repetir la última parte más despacio?','Can you repeat the last part more slowly?','Más despacio means more slowly. Asking for the last part avoids restarting the whole conversation.'],
  ['¿Qué significa recoger en esta frase?','What does recoger mean in this sentence?','Ask about context: a word may have more than one meaning. Recoger can mean to pick up.'],
  ['Entonces, tengo que recoger el paquete mañana. ¿Verdad?','So, I have to pick up the package tomorrow. Right?','Entonces introduces your understanding. ¿Verdad? invites the other person to confirm it.']
 ],[['Claro: tienes que recoger el paquete mañana.','Of course: you have to pick up the package tomorrow.'],['Significa ir a buscarlo y llevártelo.','It means to go get it and take it with you.'],['Sí, exactamente.','Yes, exactly.']],
 'Ask what entrega means, then confirm in your own words where you need to go and when. Use puede instead of puedes for usted.'),
 lesson('lost-item','Ask about a lost belonging','Describe an item and say where you last saw it.',[
  ['Creo que dejé mi mochila aquí.','I think I left my backpack here.','Dejé is a completed past action. Mi means my; aquí means here.'],
  ['Es azul y tiene un bolsillo pequeño delante.','It is blue and has a small pocket on the front.','Use es for a description and tiene for features. Delante means at the front.'],
  ['Estaba debajo de esa mesa.','It was under that table.','Estaba describes its previous location. Debajo de means underneath.']
 ],[['¿Cómo es la mochila?','What does the backpack look like?'],['¿Dónde la vio por última vez?','Where did you last see it?'],['Voy a preguntar si alguien la encontró.','I am going to ask whether anyone found it.']],
 'Describe a lost umbrella: its color, a distinctive feature, and its last location. Ask whether anyone found it.'),
 lesson('phone-call','Leave a clear phone message','Ask for someone, identify yourself, and request a callback.',[
  ['Buenos días, ¿puedo hablar con Ana?','Good morning, may I speak with Ana?','Puedo hablar con asks to speak with a person. State the name clearly.'],
  ['Soy James. ¿Le puede dejar un mensaje?','I am James. Can you leave her a message?','Le refers to the message recipient. The surrounding conversation tells you who that is.'],
  ['Dígale que me llame cuando pueda, por favor.','Please tell her to call me when she can.','Dígale is a polite usted instruction; me llame asks that she call you. Learn the whole phrase as a useful model.']
 ],[['Ahora no está disponible.','She is not available right now.'],['Sí, ¿qué quiere decirle?','Yes, what would you like to tell her?'],['De acuerdo, le daré el mensaje.','All right, I will give her the message.']],
 'Ask for a different person. Leave your name and a brief reason for the call, without sharing private information unnecessarily.'),
 lesson('work-help','Ask a coworker for help with a task','State what you need and check whether it is a good time.',[
  ['¿Tienes un momento para ayudarme?','Do you have a moment to help me?','Tienes addresses a coworker with tú. Use tiene if your relationship calls for usted.'],
  ['No sé cómo adjuntar este archivo.','I do not know how to attach this file.','Sé means I know and takes an accent. Cómo introduces what you do not know how to do.'],
  ['¿Me puedes mostrar el primer paso?','Can you show me the first step?','Show me one step is more specific than asking for a whole task to be done for you.']
 ],[['Sí, dime qué necesitas.','Yes, tell me what you need.'],['Claro, abre primero el mensaje.','Of course, first open the message.'],['Selecciona el botón para adjuntar archivos.','Select the button for attaching files.']],
 'Ask a coworker how to save a document instead. Request one step, repeat it back, and thank them for their help.'),
 lesson('work-update','Give a simple work update','Explain what is finished, what remains, and what you need.',[
  ['Ya terminé la primera parte.','I have finished the first part.','Ya often signals that something is already done. Terminé describes a completed action.'],
  ['Todavía me falta revisar los datos.','I still need to check the data.','Me falta + infinitive says what remains for you to do. Todavía means still.'],
  ['Necesito confirmar una cifra antes de enviarlo.','I need to confirm a figure before sending it.','Antes de + infinitive means before doing something. Lo refers to the report in this conversation.']
 ],[['Bien. ¿Qué falta para terminar el informe?','Good. What remains to finish the report?'],['¿Necesitas algo para continuar?','Do you need anything to continue?'],['De acuerdo, revísala y avísame.','All right, check it and let me know.']],
 'Give an update on a different task. Use ya for one completed action, todavía for unfinished work, and necesito for a specific need.'),
 lesson('feelings','Listen when a friend has a difficult day','Name your feelings, ask for support, and listen without rushing to solve everything.',[
  ['Hoy me siento un poco triste.','I feel a little sad today.','Me siento describes how you feel. Triste has the same form for masculine and feminine singular.'],
  ['¿Podemos hablar un momento?','Can we talk for a moment?','Podemos invites a shared action. Give the other person space to say whether they are available.'],
  ['Gracias por escucharme. Solo necesito hablar.','Thank you for listening to me. I just need to talk.','Escucharme means to listen to me. Solo clarifies that you want listening rather than immediate advice.']
 ],[['Lo siento. ¿Quieres contarme qué pasó?','I am sorry. Do you want to tell me what happened?'],['Claro, te escucho.','Of course, I am listening.'],['Aquí estoy. Tómate tu tiempo.','I am here. Take your time.']],
 'Switch roles: respond to a friend who feels worried. Acknowledge the feeling and ask whether they want to talk or would prefer some space.')
];
