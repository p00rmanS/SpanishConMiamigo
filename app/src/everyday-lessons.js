// Original everyday conversations. You practice both producing and adapting a reply.
function daily(id,title,objective,phrases,replies,practice,model,coaching,transfer){
 return {id:'work-daily-'+id,category:'Everyday life',level:'Beginner',title,objective,phrases,practiceRole:'You',
 dialogue:phrases.flatMap((p,i)=>[['You',p[0],p[1]],['Partner',...replies[i]]]),practice,model,coaching,transfer};
}
export const everydayLessons=[
 daily('groceries','Buy groceries by quantity','Ask for an amount, check ripeness, and decline a bag politely.',[
  ['Quisiera medio kilo de tomates.','I would like half a kilo of tomatoes.','Quisiera makes a polite request. Replace tomates with another plural food.'],
  ['¿Están maduros para comer hoy?','Are they ripe enough to eat today?','Están describes the current condition; maduros agrees with masculine plural tomates.'],
  ['No necesito bolsa, gracias.','I do not need a bag, thank you.','A short no + verb + gracias is clear and courteous.']
 ],[['Claro, ¿algo más?','Of course, anything else?'],['Sí, estos están listos.','Yes, these are ready.'],['Perfecto, aquí tiene.','Perfect, here you are.']],
 'Ask for half a kilo of tomatoes.','Quisiera medio kilo de tomates.','Use quantity + de + food: medio kilo de tomates.',
 'Now ask for one kilo of apples and say that you brought a bag. Build both sentences before checking a dictionary.'),
 daily('cafe','Order at a café','Order a drink, choose where to have it, and ask about payment.',[
  ['Quisiera un café con leche, por favor.','I would like a coffee with milk, please.','Con means with; sin means without. Keep the noun after the preposition.'],
  ['Para llevar, por favor.','To go, please.','Para llevar gives the purpose. Para tomar aquí means to drink here.'],
  ['¿Puedo pagar con tarjeta?','Can I pay by card?','Puedo + infinitive asks whether you can do something. Efectivo means cash.']
 ],[['¿Para tomar aquí o para llevar?','To drink here or to go?'],['Muy bien. Son tres euros.','Very good. That is three euros.'],['Sí, acerque la tarjeta aquí.','Yes, hold the card near here.']],
 'Ask whether you can pay by card.','¿Puedo pagar con tarjeta?','Puedo is I can; pagar stays in the infinitive.',
 'Order a tea without milk to drink here. Then ask whether you can pay in cash. The sample price is fictional.'),
 daily('directions','Ask for directions and check understanding','Find a place and repeat the route to confirm it.',[
  ['Disculpe, ¿cómo llego a la estación?','Excuse me, how do I get to the station?','Disculpe politely gets a stranger’s attention. Llego is the I form of llegar.'],
  ['¿Está cerca o necesito tomar un autobús?','Is it nearby, or do I need to take a bus?','Necesito + infinitive expresses a need. Cerca means nearby.'],
  ['Entonces, sigo recto y giro a la derecha. ¿Correcto?','So, I go straight and turn right. Correct?','Repeat the directions in your own words; derecha is right and izquierda is left.']
 ],[['Siga recto y gire a la derecha.','Go straight and turn right.'],['Está cerca, a cinco minutos a pie.','It is nearby, five minutes on foot.'],['Sí, la estación está al final de la calle.','Yes, the station is at the end of the street.']],
 'Ask how to get to the station, starting with Excuse me.','Disculpe, ¿cómo llego a la estación?','A la joins the preposition a and feminine article la. Use al with a masculine place, as in al mercado.',
 'Ask how to get to the market. Confirm a different route: straight, then left. Say the route without reading the model.'),
 daily('plans','Make plans and suggest another time','Invite a friend, negotiate availability, and confirm a meeting place.',[
  ['¿Quieres tomar un café el sábado?','Do you want to have a coffee on Saturday?','Quieres addresses one friend with tú. El sábado means on Saturday.'],
  ['A las cuatro no puedo. ¿Te viene bien a las cinco?','I cannot make four. Does five work for you?','Te viene bien asks whether a time suits your friend. Give an alternative after declining.'],
  ['Entonces, nos vemos a las cinco en la entrada.','So, see you at five at the entrance.','Nos vemos is a natural friendly closing when arranging to meet.']
 ],[['Sí, ¿a las cuatro?','Yes, at four?'],['Sí, a las cinco está bien.','Yes, five is fine.'],['Perfecto, ¡hasta el sábado!','Perfect, see you Saturday!']],
 'Invite a friend to have coffee on Saturday.','¿Quieres tomar un café el sábado?','Quieres + infinitive invites the other person to do something.',
 'Invite a friend for Sunday instead. Decline their suggested time and propose a new time and meeting place.'),
 daily('late','Explain that you are running late','Apologize, give a realistic estimate, and update a friend.',[
  ['Perdón, voy a llegar un poco tarde.','Sorry, I am going to arrive a little late.','Voy a + infinitive describes your expected next action; un poco softens the amount.'],
  ['Creo que llego en diez minutos.','I think I will arrive in ten minutes.','Creo que signals an estimate. En diez minutos is ten minutes from now.'],
  ['Te aviso si cambia la hora.','I will let you know if the time changes.','Te aviso is a natural promise to update a friend; le aviso is the usted version.']
 ],[['Gracias por avisar. ¿Cuánto te falta?','Thanks for letting me know. How much longer will you be?'],['Está bien, te espero aquí.','All right, I will wait for you here.'],['De acuerdo, nos vemos pronto.','All right, see you soon.']],
 'Say you think you will arrive in ten minutes.','Creo que llego en diez minutos.','Use creo que + a complete clause. The present tense can describe an expected near-future arrival.',
 'Your estimate changes to twenty minutes. Apologize again, give the new estimate, and ask whether your friend can wait.'),
 daily('home','Coordinate household chores','Offer help, divide tasks, and agree where things belong.',[
  ['¿Quieres que lave los platos?','Do you want me to wash the dishes?','Quieres que introduces another person’s action; use lave here, not lavo. Learn this useful chunk first.'],
  ['Yo lavo y tú secas.','I will wash and you dry.','Yo and tú emphasize who does each task. Lavar is to wash; secar is to dry.'],
  ['¿Dónde guardamos los vasos?','Where do we put away the glasses?','Guardar means to put away or keep. It does not mean to watch.']
 ],[['Sí, gracias. Yo puedo secarlos.','Yes, thank you. I can dry them.'],['Perfecto, empezamos ahora.','Perfect, let us start now.'],['En el armario de la derecha.','In the cupboard on the right.']],
 'Ask where you both put away the glasses.','¿Dónde guardamos los vasos?','Guardamos is the we form; los vasos is the object.',
 'Offer to wash the cups instead. Ask where the plates belong, and agree who will dry them.'),
 daily('appointment','Book and reschedule an appointment','Ask for availability, clarify a time, and request a change.',[
  ['Quisiera hacer una cita para un corte de pelo.','I would like to make an appointment for a haircut.','Para + noun gives the purpose. This is a service appointment, not medical advice.'],
  ['¿Tiene algo disponible por la tarde?','Do you have anything available in the afternoon?','Por la tarde gives a broad part of the day; a las tres gives an exact time.'],
  ['¿Podemos cambiarla al viernes a las tres de la tarde?','Can we move it to Friday at three in the afternoon?','La in cambiarla refers to la cita. Confirm the actual calendar date when booking.']
 ],[['Sí, hay una cita el jueves.','Yes, there is an appointment on Thursday.'],['A las cuatro de la tarde.','At four in the afternoon.'],['Sí, el viernes a las tres está disponible.','Yes, Friday at three is available.']],
 'Ask whether anything is available in the afternoon.','¿Tiene algo disponible por la tarde?','Tiene addresses one person politely with usted. Algo means something or anything here.',
 'Request a morning appointment instead. Ask to move it to another day and repeat the date and time to confirm.'),
 daily('neighbors','Ask a neighbor for a small favor','Make a considerate request and accept a refusal gracefully.',[
  ['¿Me puedes hacer un favor?','Can you do me a favor?','Puedes is friendly tú. Use puede when you address someone with usted.'],
  ['¿Podrías bajar un poco la música?','Could you turn the music down a little?','Podrías makes a softer request. Un poco gives the request a measured tone.'],
  ['Gracias por entender. Mañana tengo que madrugar.','Thanks for understanding. I have to get up early tomorrow.','Tengo que + infinitive expresses an obligation. Madrugar means to get up early.']
 ],[['Claro, dime.','Of course, tell me.'],['Sí, perdona. La bajo ahora.','Yes, sorry. I will turn it down now.'],['No hay problema. Que descanses.','No problem. Have a good rest.']],
 'Politely ask a friend to turn the music down a little.','¿Podrías bajar un poco la música?','Podrías + infinitive is a polite tú request; podría is the usted form.',
 'Ask to borrow a pen using ¿Me puedes prestar…? If the person says no, respond politely and ask someone else without insisting.')
];
