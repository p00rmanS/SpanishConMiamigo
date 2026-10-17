// Verb list: infinitive | English | Tagalog | flags | example | translation.
// Flags are only needed for stem changes (e-ie, o-ue, e-i, u-ue, i-ie) and accent shifts
// (iar, uar). Every other irregularity is handled by the conjugation engine.
const TABLE = `
ser|to be (identity)|maging; ay||Soy estudiante.|I am a student.
estar|to be (state, place)|nasa; ay||Estoy en casa.|I am at home.
haber|to have (auxiliary); there is|may; mayroon||Hay un problema.|There is a problem.
tener|to have|magkaroon; may|e-ie|Tengo dos hermanos.|I have two siblings.
hacer|to do; to make|gumawa||Hago la tarea.|I do the homework.
ir|to go|pumunta||Voy al trabajo.|I go to work.
poder|to be able to; can|kaya; maaari|o-ue|Puedo ayudarte.|I can help you.
decir|to say; to tell|magsabi|e-i|Digo la verdad.|I tell the truth.
dar|to give|magbigay||Doy clases de inglés.|I teach English classes.
ver|to see|makakita||Veo el mar.|I see the sea.
saber|to know (facts, skills)|alam; marunong||Sé cocinar.|I know how to cook.
querer|to want; to love|gusto; mahalin|e-ie|Quiero un café.|I want a coffee.
venir|to come|pumunta rito|e-ie|Vengo de la oficina.|I come from the office.
poner|to put|ilagay||Pongo la mesa.|I set the table.
salir|to leave; to go out|umalis; lumabas||Salgo a las ocho.|I leave at eight.
traer|to bring|magdala (rito)||Traigo agua.|I bring water.
conocer|to know (people, places)|kilalanin||Conozco a tu hermana.|I know your sister.
caer|to fall|mahulog||Cae la lluvia.|The rain falls.
oír|to hear|makarinig||Oigo música.|I hear music.
reír|to laugh|tumawa||Me río mucho.|I laugh a lot.
valer|to be worth|nagkakahalaga||Esto vale diez euros.|This is worth ten euros.
caber|to fit|magkasya||No quepo en el coche.|I do not fit in the car.
andar|to walk; to go around|lumakad||Ando por el parque.|I walk through the park.
conducir|to drive|magmaneho||Conduzco con cuidado.|I drive carefully.
traducir|to translate|magsalin||Traduzco textos.|I translate texts.
construir|to build|magtayo||Construimos una casa.|We build a house.
hablar|to speak; to talk|magsalita||Hablo español.|I speak Spanish.
comer|to eat|kumain||Como arroz.|I eat rice.
vivir|to live|manirahan||Vivo en Manila.|I live in Manila.
beber|to drink|uminom||Bebo agua.|I drink water.
trabajar|to work|magtrabaho||Trabajo en un banco.|I work at a bank.
estudiar|to study|mag-aral||Estudio por la noche.|I study at night.
aprender|to learn|matuto||Aprendo rápido.|I learn quickly.
enseñar|to teach; to show|magturo||Enseño matemáticas.|I teach mathematics.
escribir|to write|magsulat||Escribo un correo.|I write an email.
leer|to read|magbasa||Leo un libro.|I read a book.
escuchar|to listen to|makinig||Escucho la radio.|I listen to the radio.
mirar|to look at; to watch|tumingin; manood||Miro la televisión.|I watch television.
buscar|to look for|maghanap||Busco mis llaves.|I look for my keys.
encontrar|to find|makahanap|o-ue|Encuentro la calle.|I find the street.
llamar|to call|tumawag||Llamo a mi madre.|I call my mother.
llamarse|to be called|tawaging||Me llamo Ana.|My name is Ana.
necesitar|to need|kailanganin||Necesito ayuda.|I need help.
usar|to use|gumamit||Uso el teléfono.|I use the phone.
utilizar|to use; to utilize|gamitin||Utilizo un programa nuevo.|I use a new program.
ayudar|to help|tumulong||Ayudo a mi hermana.|I help my sister.
esperar|to wait; to hope|maghintay; umasa||Espero el autobús.|I wait for the bus.
llegar|to arrive|dumating||Llego temprano.|I arrive early.
entrar|to enter|pumasok||Entro en la oficina.|I enter the office.
volver|to return|bumalik|o-ue|Vuelvo a casa.|I return home.
regresar|to return; to go back|bumalik||Regreso mañana.|I come back tomorrow.
tomar|to take; to drink|kumuha; uminom||Tomo el autobús.|I take the bus.
comprar|to buy|bumili||Compro pan.|I buy bread.
vender|to sell|magbenta||Vendo frutas.|I sell fruit.
pagar|to pay|magbayad||Pago con tarjeta.|I pay by card.
cobrar|to charge; to collect|maningil||Cobro una tarifa.|I charge a fee.
costar|to cost|nagkakahalaga|o-ue|Cuesta diez dólares.|It costs ten dollars.
gastar|to spend|gumastos||Gasto poco dinero.|I spend little money.
ahorrar|to save (money)|mag-ipon||Ahorro cada mes.|I save every month.
abrir|to open|magbukas||Abro la puerta.|I open the door.
cerrar|to close|magsara|e-ie|Cierro la ventana.|I close the window.
empezar|to begin|magsimula|e-ie|Empiezo a las nueve.|I begin at nine.
comenzar|to begin; to start|magsimula|e-ie|Comienzo una clase.|I start a class.
terminar|to finish|tapusin||Termino el informe.|I finish the report.
acabar|to finish; to end|matapos||Acabo de llegar.|I have just arrived.
continuar|to continue|magpatuloy|uar|Continúo estudiando.|I keep studying.
seguir|to follow; to continue|sumunod; magpatuloy|e-i|Sigo el mapa.|I follow the map.
pensar|to think; to plan|mag-isip; balak|e-ie|Pienso en mi familia.|I think about my family.
creer|to believe; to think|maniwala||Creo que sí.|I think so.
entender|to understand|umintindi|e-ie|No entiendo la pregunta.|I do not understand the question.
comprender|to understand|umunawa||Comprendo tu problema.|I understand your problem.
recordar|to remember|alalahanin|o-ue|Recuerdo tu nombre.|I remember your name.
olvidar|to forget|makalimot||Olvido la contraseña.|I forget the password.
conocerse|to meet; to know each other|magkakilala||Nos conocemos desde niños.|We have known each other since childhood.
preguntar|to ask (a question)|magtanong||Pregunto la hora.|I ask the time.
responder|to answer|sumagot||Respondo el mensaje.|I answer the message.
contestar|to answer|sumagot||Contesto el teléfono.|I answer the phone.
pedir|to ask for; to order|humingi; mag-order|e-i|Pido un café.|I order a coffee.
contar|to count; to tell|magbilang; magkuwento|o-ue|Cuento una historia.|I tell a story.
explicar|to explain|magpaliwanag||Explico la regla.|I explain the rule.
mostrar|to show|ipakita|o-ue|Muestro la foto.|I show the photo.
decidir|to decide|magpasya||Decido hoy.|I decide today.
elegir|to choose|pumili|e-i|Elijo la opción dos.|I choose option two.
escoger|to choose|pumili||Escojo el azul.|I choose the blue one.
preferir|to prefer|mas gusto|e-ie|Prefiero té.|I prefer tea.
gustar|to be pleasing; to like|gusto|third|Me gusta el café.|I like coffee.
encantar|to love; to delight|gustong-gusto|third|Me encanta bailar.|I love dancing.
odiar|to hate|kamuhian||Odio esperar.|I hate waiting.
amar|to love|magmahal||Amo a mi familia.|I love my family.
sentir|to feel; to regret|makaramdam|e-ie|Siento frío.|I feel cold.
sentirse|to feel (a state)|makaramdam ng||Me siento bien.|I feel well.
dormir|to sleep|matulog|o-ue|Duermo ocho horas.|I sleep eight hours.
dormirse|to fall asleep|makatulog|o-ue|Me duermo temprano.|I fall asleep early.
despertar|to wake (someone)|gisingin|e-ie|Despierto a mi hijo.|I wake my son.
despertarse|to wake up|magising|e-ie|Me despierto a las seis.|I wake up at six.
levantarse|to get up|bumangon||Me levanto temprano.|I get up early.
acostarse|to go to bed|matulog; humiga|o-ue|Me acuesto tarde.|I go to bed late.
sentarse|to sit down|umupo|e-ie|Me siento aquí.|I sit down here.
vestirse|to get dressed|magbihis|e-i|Me visto rápido.|I get dressed quickly.
bañarse|to take a bath|maligo||Me baño por la noche.|I take a bath at night.
ducharse|to take a shower|maligo (shower)||Me ducho en cinco minutos.|I shower in five minutes.
lavarse|to wash oneself|maghugas||Me lavo las manos.|I wash my hands.
cepillarse|to brush (one's teeth)|magsipilyo||Me cepillo los dientes.|I brush my teeth.
peinarse|to comb one's hair|magsuklay||Me peino antes de salir.|I comb my hair before leaving.
quedarse|to stay|manatili||Me quedo en casa.|I stay at home.
irse|to leave; to go away|umalis||Me voy ahora.|I am leaving now.
ponerse|to put on; to become|magsuot; maging||Me pongo la chaqueta.|I put on the jacket.
quitarse|to take off|hubarin||Me quito los zapatos.|I take off my shoes.
casarse|to get married|ikasal||Me caso en junio.|I get married in June.
divertirse|to have fun|magsaya|e-ie|Me divierto mucho.|I have a lot of fun.
preocuparse|to worry|mag-alala||Me preocupo por ti.|I worry about you.
acordarse|to remember|maalala|o-ue|Me acuerdo de ese día.|I remember that day.
olvidarse|to forget|makalimot||Me olvido de las llaves.|I forget the keys.
mudarse|to move (house)|lumipat||Me mudo a Madrid.|I move to Madrid.
reunirse|to meet; to get together|magkita; magtipon||Nos reunimos a las diez.|We meet at ten.
enojarse|to get angry|magalit||Me enojo con facilidad.|I get angry easily.
cansarse|to get tired|mapagod||Me canso rápido.|I get tired quickly.
acostumbrarse|to get used to|masanay||Me acostumbro al clima.|I get used to the weather.
despedirse|to say goodbye|magpaalam|e-i|Me despido de todos.|I say goodbye to everyone.
caminar|to walk|maglakad||Camino al trabajo.|I walk to work.
correr|to run|tumakbo||Corro por la mañana.|I run in the morning.
saltar|to jump|tumalon||Salto la cuerda.|I jump rope.
nadar|to swim|lumangoy||Nado en el mar.|I swim in the sea.
bailar|to dance|sumayaw||Bailo con mis amigos.|I dance with my friends.
cantar|to sing|kumanta||Canto en la ducha.|I sing in the shower.
jugar|to play|maglaro|u-ue|Juego al fútbol.|I play soccer.
tocar|to touch; to play (an instrument)|humipo; tumugtog||Toco la guitarra.|I play the guitar.
viajar|to travel|maglakbay||Viajo en verano.|I travel in summer.
visitar|to visit|bumisita||Visito a mi abuela.|I visit my grandmother.
conducir|to drive|magmaneho||Conduzco al trabajo.|I drive to work.
manejar|to drive (Latin America)|magmaneho||Manejo con cuidado.|I drive carefully.
volar|to fly|lumipad|o-ue|Vuelo a Cebú.|I fly to Cebu.
cocinar|to cook|magluto||Cocino en casa.|I cook at home.
preparar|to prepare|maghanda||Preparo la cena.|I prepare dinner.
lavar|to wash|maghugas||Lavo los platos.|I wash the dishes.
limpiar|to clean|maglinis||Limpio la casa.|I clean the house.
ordenar|to tidy; to order|ayusin||Ordeno mi cuarto.|I tidy my room.
reparar|to repair|mag-ayos||Reparo el coche.|I repair the car.
arreglar|to fix; to arrange|ayusin||Arreglo la computadora.|I fix the computer.
romper|to break|sirain||Rompo un vaso.|I break a glass.
cortar|to cut|maghiwa||Corto el pan.|I cut the bread.
llevar|to carry; to wear; to take|magdala; magsuot||Llevo una chaqueta.|I wear a jacket.
dejar|to leave (behind); to let|iwan; hayaan||Dejo la llave aquí.|I leave the key here.
guardar|to keep; to save|itago; i-save||Guardo mis documentos.|I keep my documents.
perder|to lose; to miss|mawala; mahuli|e-ie|Pierdo el autobús.|I miss the bus.
ganar|to win; to earn|manalo; kumita||Gano un premio.|I win a prize.
recibir|to receive|tumanggap||Recibo un mensaje.|I receive a message.
enviar|to send|magpadala|iar|Envío un paquete.|I send a package.
mandar|to send; to order|magpadala||Mando un correo.|I send an email.
entregar|to deliver; to hand in|maghatid; magsumite||Entrego el informe.|I hand in the report.
cambiar|to change|magpalit||Cambio de plan.|I change plans.
devolver|to return (an item)|magsauli|o-ue|Devuelvo el libro.|I return the book.
reservar|to reserve|magreserba||Reservo una mesa.|I reserve a table.
cancelar|to cancel|magkansela||Cancelo la cita.|I cancel the appointment.
confirmar|to confirm|kumpirmahin||Confirmo la hora.|I confirm the time.
resolver|to solve; to resolve|lutasin|o-ue|Resuelvo el problema.|I solve the problem.
funcionar|to work (function)|gumana||La app funciona.|The app works.
fallar|to fail|pumalya||El sistema falla.|The system fails.
instalar|to install|mag-install||Instalo el programa.|I install the program.
descargar|to download|mag-download||Descargo el archivo.|I download the file.
actualizar|to update|mag-update||Actualizo la aplicación.|I update the app.
reiniciar|to restart|i-restart||Reinicio el equipo.|I restart the device.
conectar|to connect|ikonekta||Conecto el cable.|I connect the cable.
apagar|to turn off|patayin||Apago la luz.|I turn off the light.
encender|to turn on|buksan; sindihan|e-ie|Enciendo la computadora.|I turn on the computer.
probar|to try; to test; to taste|subukan; tikman|o-ue|Pruebo la sopa.|I taste the soup.
intentar|to try; to attempt|sumubok||Intento otra vez.|I try again.
lograr|to achieve|magtagumpay||Logro mi meta.|I achieve my goal.
conseguir|to get; to obtain|makakuha|e-i|Consigo un boleto.|I get a ticket.
obtener|to obtain|makakuha||Obtengo buenos resultados.|I obtain good results.
mantener|to maintain; to keep|panatilihin||Mantengo la calma.|I keep calm.
sostener|to hold; to sustain|hawakan; panindigan||Sostengo mi opinión.|I stand by my opinion.
proponer|to propose|magmungkahi||Propongo un plan.|I propose a plan.
suponer|to suppose|ipalagay||Supongo que sí.|I suppose so.
componer|to compose; to fix|bumuo; mag-ayos||Compongo una canción.|I compose a song.
disponer|to have available|magkaroon||Dispongo de tiempo.|I have time available.
imponer|to impose|ipataw||Impongo una regla.|I impose a rule.
exponer|to expose; to present|ilahad||Expongo mi idea.|I present my idea.
contener|to contain|maglaman||Contiene azúcar.|It contains sugar.
detener|to stop; to detain|pigilan||Detengo el coche.|I stop the car.
retener|to retain; to hold back|panatilihin||Retengo la información.|I retain the information.
entretener|to entertain|aliwin||Entretengo a los niños.|I entertain the children.
convenir|to suit; to be advisable|nararapat|third|Me conviene esperar.|It suits me to wait.
prevenir|to prevent|pigilan||Prevengo problemas.|I prevent problems.
intervenir|to intervene|makialam||Intervengo en la reunión.|I step in at the meeting.
atraer|to attract|akitin||Atraigo clientes.|I attract customers.
distraer|to distract|ilihis ang isip||Me distraigo con el ruido.|I get distracted by the noise.
extraer|to extract|kumuha mula||Extraigo los datos.|I extract the data.
contraer|to contract|kumuha (sakit); sumikip||Contraigo una deuda.|I take on a debt.
deshacer|to undo|bawiin; sirain||Deshago el nudo.|I undo the knot.
rehacer|to redo|gawing muli||Rehago el trabajo.|I redo the work.
predecir|to predict|manghula||Predigo el tiempo.|I predict the weather.
contradecir|to contradict|sumalungat||Contradigo su opinión.|I contradict his opinion.
bendecir|to bless|pagpalain||Bendigo la mesa.|I bless the table.
prever|to foresee|asahan||Preveo problemas.|I foresee problems.
describir|to describe|ilarawan||Describo la escena.|I describe the scene.
descubrir|to discover|tumuklas||Descubro un secreto.|I discover a secret.
cubrir|to cover|takpan||Cubro la mesa.|I cover the table.
imprimir|to print|mag-print||Imprimo el documento.|I print the document.
morir|to die|mamatay|o-ue|Mueren las flores.|The flowers die.
nacer|to be born|ipanganak||Nazco en mayo.|I am born in May.
crecer|to grow|lumaki||Crezco rápido.|I grow quickly.
parecer|to seem|mukhang|third|Parece fácil.|It seems easy.
merecer|to deserve|karapat-dapat||Mereces un descanso.|You deserve a rest.
ofrecer|to offer|mag-alok||Ofrezco ayuda.|I offer help.
agradecer|to thank; to be grateful|magpasalamat||Agradezco tu ayuda.|I thank you for your help.
obedecer|to obey|sumunod||Obedezco las reglas.|I obey the rules.
establecer|to establish|magtatag||Establezco una regla.|I establish a rule.
producir|to produce|gumawa; lumikha||Producimos aceite.|We produce oil.
reducir|to reduce|bawasan||Reduzco los gastos.|I reduce expenses.
introducir|to introduce; to insert|ipasok||Introduzco los datos.|I enter the data.
vencer|to defeat; to overcome|talunin||Venzo el miedo.|I overcome fear.
convencer|to convince|kumbinsihin||Convenzo a mi jefe.|I convince my boss.
coger|to take; to catch (Spain)|kumuha||Cojo el tren.|I take the train.
recoger|to pick up; to collect|kunin||Recojo a mis hijos.|I pick up my children.
proteger|to protect|protektahan||Protejo mis datos.|I protect my data.
dirigir|to direct; to lead|mamuno||Dirijo el equipo.|I lead the team.
corregir|to correct|iwasto|e-i|Corrijo los errores.|I correct the mistakes.
exigir|to demand|humiling nang mahigpit||Exijo una respuesta.|I demand an answer.
fingir|to pretend|magkunwari||Finjo estar bien.|I pretend to be fine.
distinguir|to distinguish|makilala ang pagkakaiba||Distingo los colores.|I tell the colors apart.
medir|to measure|sukatin|e-i|Mido la mesa.|I measure the table.
servir|to serve; to be useful|maglingkod; magamit|e-i|Sirvo la comida.|I serve the food.
repetir|to repeat|ulitin|e-i|Repito la frase.|I repeat the sentence.
vestir|to dress|bihisan|e-i|Visto a mi hijo.|I dress my son.
competir|to compete|makipagkompetensya|e-i|Compito en la carrera.|I compete in the race.
reñir|to scold; to quarrel|pagalitan|e-i|Riño a mi perro.|I scold my dog.
sonreír|to smile|ngumiti||Sonrío a todos.|I smile at everyone.
freír|to fry|magprito||Frío un huevo.|I fry an egg.
huir|to flee|tumakas||Huyo del ruido.|I flee from the noise.
incluir|to include|isama||Incluyo mi nombre.|I include my name.
excluir|to exclude|ibukod||Excluyo esa opción.|I exclude that option.
concluir|to conclude|magtapos||Concluyo la reunión.|I conclude the meeting.
contribuir|to contribute|mag-ambag||Contribuyo con ideas.|I contribute ideas.
distribuir|to distribute|ipamahagi||Distribuyo los folletos.|I distribute the leaflets.
destruir|to destroy|wasakin||Destruyo los documentos.|I destroy the documents.
sustituir|to replace|palitan||Sustituyo la pieza.|I replace the part.
influir|to influence|makaimpluwensya||Influyo en la decisión.|I influence the decision.
atribuir|to attribute|iugnay||Atribuyo el éxito al equipo.|I credit the team with the success.
constituir|to constitute|bumuo||Constituyo un grupo.|I form a group.
poseer|to own; to possess|magmay-ari||Poseo una casa.|I own a house.
proveer|to provide|magbigay||Proveo comida.|I provide food.
creer|to believe|maniwala||Creo en ti.|I believe in you.
averiguar|to find out|alamin||Averiguo la hora.|I find out the time.
enfriar|to cool|palamigin|iar|Enfrío la sopa.|I cool the soup.
confiar|to trust|magtiwala|iar|Confío en ti.|I trust you.
guiar|to guide|gabayan|iar|Guío al grupo.|I guide the group.
variar|to vary|magbago-bago|iar|El precio varía.|The price varies.
esquiar|to ski|mag-ski|iar|Esquío en invierno.|I ski in winter.
actuar|to act|umarte; kumilos|uar|Actúo con calma.|I act calmly.
graduarse|to graduate|magtapos|uar|Me gradúo en junio.|I graduate in June.
evaluar|to evaluate|suriin|uar|Evalúo el proyecto.|I evaluate the project.
situar|to place; to situate|ilagay|uar|Sitúo el mapa aquí.|I place the map here.
cumplir|to fulfill; to turn (age)|tuparin||Cumplo mis promesas.|I keep my promises.
permitir|to allow|payagan||Permito el uso.|I allow its use.
prohibir|to forbid|ipagbawal||Prohíbo el ruido.|I forbid noise.
aceptar|to accept|tanggapin||Acepto la oferta.|I accept the offer.
rechazar|to reject|tanggihan||Rechazo la propuesta.|I reject the proposal.
invitar|to invite|mag-imbita||Invito a mis amigos.|I invite my friends.
presentar|to present; to introduce|ipakilala; iharap||Presento a mi amiga.|I introduce my friend.
saludar|to greet|bumati||Saludo a los vecinos.|I greet the neighbors.
agradar|to please|magustuhan|third|Me agrada tu idea.|I like your idea.
molestar|to bother|mang-abala|third|Me molesta el ruido.|The noise bothers me.
importar|to matter; to import|mahalaga|third|No me importa.|I do not mind.
interesar|to interest|maging interesado|third|Me interesa la historia.|History interests me.
faltar|to lack; to be missing|kulang|third|Me falta tiempo.|I lack time.
doler|to hurt; to ache|sumakit|o-ue,third|Me duele la cabeza.|My head hurts.
parecerse|to look like|magkamukha||Me parezco a mi padre.|I look like my father.
quejarse|to complain|magreklamo||Me quejo del servicio.|I complain about the service.
disculparse|to apologize|humingi ng tawad||Me disculpo por el error.|I apologize for the mistake.
disculpar|to excuse|patawarin||Disculpo tu retraso.|I excuse your delay.
perdonar|to forgive|magpatawad||Perdono el error.|I forgive the mistake.
prometer|to promise|mangako||Prometo volver.|I promise to come back.
mentir|to lie|magsinungaling|e-ie|Nunca miento.|I never lie.
discutir|to argue; to discuss|magtalo; pag-usapan||Discuto con mi hermano.|I argue with my brother.
opinar|to have an opinion|magbigay ng opinyon||Opino que es buena idea.|I think it is a good idea.
comentar|to comment|magkomento||Comento la noticia.|I comment on the news.
mencionar|to mention|banggitin||Menciono tu nombre.|I mention your name.
informar|to inform|magbigay-alam||Informo al cliente.|I inform the customer.
avisar|to warn; to let know|magpaalam; abisuhan||Aviso a mi jefe.|I let my boss know.
anunciar|to announce|ianunsyo||Anuncio la noticia.|I announce the news.
publicar|to publish|ilathala||Publico un artículo.|I publish an article.
compartir|to share|magbahagi||Comparto el archivo.|I share the file.
participar|to participate|lumahok||Participo en la clase.|I take part in class.
colaborar|to collaborate|makipagtulungan||Colaboro con el equipo.|I collaborate with the team.
organizar|to organize|ayusin||Organizo la reunión.|I organize the meeting.
planificar|to plan|magplano||Planifico el viaje.|I plan the trip.
programar|to schedule; to program|iiskedyul; mag-program||Programo la llamada.|I schedule the call.
revisar|to review; to check|suriin||Reviso la factura.|I check the bill.
comprobar|to verify|tiyakin|o-ue|Compruebo el saldo.|I verify the balance.
verificar|to verify|beripikahin||Verifico la identidad.|I verify the identity.
analizar|to analyze|suriin||Analizo los datos.|I analyze the data.
calcular|to calculate|kalkulahin||Calculo el total.|I calculate the total.
contar|to count; to tell|magbilang||Cuento hasta diez.|I count to ten.
medir|to measure|sukatin|e-i|Mido la distancia.|I measure the distance.
pesar|to weigh|timbangin||Peso el paquete.|I weigh the package.
mejorar|to improve|pagbutihin||Mejoro cada día.|I improve every day.
aumentar|to increase|dagdagan||Aumento el precio.|I raise the price.
disminuir|to decrease|bawasan||Disminuyo el gasto.|I cut the expense.
crear|to create|lumikha||Creo un perfil.|I create a profile.
diseñar|to design|magdisenyo||Diseño una web.|I design a website.
dibujar|to draw|gumuhit||Dibujo un mapa.|I draw a map.
pintar|to paint|magpinta||Pinto la pared.|I paint the wall.
fotografiar|to photograph|kumuha ng litrato|iar|Fotografío el paisaje.|I photograph the landscape.
grabar|to record|mag-record||Grabo la llamada.|I record the call.
ensayar|to rehearse|mag-ensayo||Ensayo mi discurso.|I rehearse my speech.
practicar|to practice|magsanay||Practico español.|I practice Spanish.
repasar|to review (study)|mag-review||Repaso el vocabulario.|I review the vocabulary.
memorizar|to memorize|kabisaduhin||Memorizo las palabras.|I memorize the words.
pronunciar|to pronounce|bigkasin||Pronuncio bien la erre.|I pronounce the r well.
deletrear|to spell|mag-spell||Deletreo mi apellido.|I spell my last name.
traducir|to translate|magsalin||Traduzco el texto.|I translate the text.
subir|to go up; to upload|umakyat; mag-upload||Subo las escaleras.|I go up the stairs.
bajar|to go down; to download|bumaba; mag-download||Bajo del autobús.|I get off the bus.
cruzar|to cross|tumawid||Cruzo la calle.|I cross the street.
girar|to turn|lumiko||Giro a la derecha.|I turn right.
seguir|to follow|sumunod|e-i|Sigo derecho.|I keep going straight.
parar|to stop|huminto||Paro el coche.|I stop the car.
estacionar|to park|magparada||Estaciono aquí.|I park here.
aparcar|to park (Spain)|magparada||Aparco cerca.|I park nearby.
alquilar|to rent|umarkila||Alquilo un piso.|I rent an apartment.
hospedarse|to stay (hotel)|manuluyan||Me hospedo en un hotel.|I stay at a hotel.
reclamar|to claim; to complain|magreklamo||Reclamo un reembolso.|I claim a refund.
reembolsar|to refund|magbalik ng bayad||Reembolso el dinero.|I refund the money.
facturar|to bill; to check in|maningil; mag-check in||Facturo el equipaje.|I check in the luggage.
renovar|to renew|i-renew|o-ue|Renuevo el contrato.|I renew the contract.
firmar|to sign|pumirma||Firmo el documento.|I sign the document.
solicitar|to request; to apply for|humiling; mag-apply||Solicito información.|I request information.
adjuntar|to attach|ilakip||Adjunto el archivo.|I attach the file.
reenviar|to forward|i-forward|iar|Reenvío el mensaje.|I forward the message.
escalar|to escalate|iakyat||Escalo el caso.|I escalate the case.
transferir|to transfer|ilipat|e-ie|Transfiero la llamada.|I transfer the call.
atender|to attend to; to serve|asikasuhin|e-ie|Atiendo a los clientes.|I attend to customers.
gestionar|to manage|pamahalaan||Gestiono las quejas.|I handle the complaints.
lamentar|to regret; to be sorry|ikalungkot||Lamento el retraso.|I am sorry about the delay.
agradecer|to be thankful|magpasalamat||Agradezco su paciencia.|I thank you for your patience.
esforzarse|to make an effort|magsikap|o-ue|Me esfuerzo cada día.|I make an effort every day.
soñar|to dream|managinip|o-ue|Sueño con viajar.|I dream of traveling.
llover|to rain|umulan|o-ue,third|Llueve mucho.|It rains a lot.
nevar|to snow|mag-snow|e-ie,third|Nieva en enero.|It snows in January.
amanecer|to dawn|sumikat ang araw|third|Amanece temprano.|Dawn comes early.
atardecer|to get dark (evening)|dumilim|third|Atardece a las siete.|Dusk comes at seven.
oler|to smell|umamoy|o-ue|Huele bien.|It smells good.
sonar|to sound; to ring|tumunog|o-ue|Suena el teléfono.|The phone rings.
brillar|to shine|kumislap||El sol brilla.|The sun shines.
crecer|to grow up|lumaki||Mis hijos crecen.|My children are growing up.
engordar|to gain weight|tumaba||Engordo en invierno.|I gain weight in winter.
adelgazar|to lose weight|pumayat||Adelgazo con ejercicio.|I lose weight with exercise.
respirar|to breathe|huminga||Respiro hondo.|I breathe deeply.
toser|to cough|umubo||Toso por la noche.|I cough at night.
curar|to heal|gamutin||Curo la herida.|I heal the wound.
descansar|to rest|magpahinga||Descanso el domingo.|I rest on Sunday.
relajarse|to relax|magpahinga; mag-relax||Me relajo en casa.|I relax at home.
ejercitarse|to exercise|mag-ehersisyo||Me ejercito cada día.|I exercise every day.
almorzar|to have lunch|mananghalian|o-ue|Almuerzo a las dos.|I have lunch at two.
desayunar|to have breakfast|mag-almusal||Desayuno pan con café.|I have bread and coffee for breakfast.
cenar|to have dinner|maghapunan||Ceno con mi familia.|I have dinner with my family.
merendar|to have a snack|magmeryenda|e-ie|Meriendo fruta.|I have fruit as a snack.
recomendar|to recommend|magrekomenda|e-ie|Recomiendo este plato.|I recommend this dish.
sugerir|to suggest|magmungkahi|e-ie|Sugiero otra opción.|I suggest another option.
advertir|to warn|balaan|e-ie|Advierto del riesgo.|I warn about the risk.
convertir|to convert|gawing|e-ie|Convierto los datos.|I convert the data.
hervir|to boil|pakuluan|e-ie|Hiervo el agua.|I boil the water.
herir|to wound|sugatan|e-ie|Hiero sin querer.|I hurt without meaning to.
referir|to refer|tumukoy|e-ie|Refiero el caso al equipo.|I refer the case to the team.
requerir|to require|mangailangan|e-ie|Requiero más información.|I require more information.
invertir|to invest; to reverse|mamuhunan|e-ie|Invierto mis ahorros.|I invest my savings.
adquirir|to acquire|kumuha; bumili|i-ie|Adquiero experiencia.|I gain experience.
negar|to deny|tanggihan; ikaila|e-ie|Niego la acusación.|I deny the accusation.
regar|to water|diligan|e-ie|Riego las plantas.|I water the plants.
atravesar|to cross; to go through|tumawid|e-ie|Atravieso el puente.|I cross the bridge.
defender|to defend|ipagtanggol|e-ie|Defiendo mi idea.|I defend my idea.
extender|to extend|palawakin|e-ie|Extiendo el plazo.|I extend the deadline.
tender|to tend; to hang out|dumako|e-ie|Tiendo a llegar tarde.|I tend to arrive late.
descender|to descend|bumaba|e-ie|Desciendo las escaleras.|I go down the stairs.
ascender|to rise; to be promoted|umakyat; ma-promote|e-ie|Asciendo en la empresa.|I move up in the company.
tropezar|to trip|madapa|e-ie|Tropiezo con la alfombra.|I trip over the rug.
apretar|to squeeze; to press|pindutin; diinan|e-ie|Aprieto el botón.|I press the button.
calentar|to heat|initin|e-ie|Caliento la sopa.|I heat the soup.
sentar|to seat|paupuin|e-ie|Siento al niño aquí.|I seat the child here.
acertar|to get right|tumama|e-ie|Acierto la respuesta.|I get the answer right.
gobernar|to govern|mamuno|e-ie|Gobierno con cuidado.|I govern carefully.
temblar|to tremble|manginig|e-ie|Tiemblo de frío.|I shiver with cold.
acordar|to agree|magkasundo|o-ue|Acuerdo una fecha.|I agree on a date.
colgar|to hang; to hang up|isabit; ibaba (telepono)|o-ue|Cuelgo el abrigo.|I hang up the coat.
rogar|to beg|magmakaawa|o-ue|Ruego tu perdón.|I beg your forgiveness.
aprobar|to pass; to approve|pumasa; aprubahan|o-ue|Apruebo el examen.|I pass the exam.
demostrar|to demonstrate|ipakita; patunayan|o-ue|Demuestro mi punto.|I demonstrate my point.
mover|to move|ilipat; igalaw|o-ue|Muevo la silla.|I move the chair.
promover|to promote|itaguyod|o-ue|Promuevo la lectura.|I promote reading.
morder|to bite|kumagat|o-ue|Muerdo una manzana.|I bite an apple.
rodar|to roll|gumulong|o-ue|Ruedo la pelota.|I roll the ball.
volcar|to tip over|itaob|o-ue|Vuelco el vaso.|I tip over the glass.
soltar|to let go; to release|bitawan|o-ue|Suelto la cuerda.|I let go of the rope.
forzar|to force|pilitin|o-ue|Fuerzo la puerta.|I force the door.
torcer|to twist|baluktutin|o-ue|Tuerzo la rama.|I twist the branch.
cocer|to cook (boil, bake)|pakuluan; lutuin|o-ue|Cuezo las patatas.|I boil the potatoes.
envolver|to wrap|balutin|o-ue|Envuelvo el regalo.|I wrap the gift.
revolver|to stir; to rummage|haluin|o-ue|Revuelvo la sopa.|I stir the soup.
disolver|to dissolve|tunawin|o-ue|Disuelvo el azúcar.|I dissolve the sugar.
poblar|to populate|tirahan|o-ue|Pueblo la isla.|I populate the island.
rendir|to yield; to perform|magbunga|e-i|Rindo bien en el trabajo.|I perform well at work.
impedir|to prevent|hadlangan|e-i|Impido el paso.|I block the way.
gemir|to moan|dumaing|e-i|Gimo de dolor.|I moan in pain.
teñir|to dye|kulayan|e-i|Tiño la tela.|I dye the fabric.
concebir|to conceive|maglihi; mag-isip|e-i|Concibo un plan.|I conceive a plan.
derretir|to melt|tunawin|e-i|Derrito el queso.|I melt the cheese.
despedir|to fire; to see off|sibakin; ihatid|e-i|Despido a un empleado.|I dismiss an employee.
perseguir|to chase; to pursue|habulin|e-i|Persigo mis metas.|I pursue my goals.
proseguir|to continue|magpatuloy|e-i|Prosigo con el plan.|I continue with the plan.
tirar|to throw; to pull|ihagis; hilahin||Tiro la pelota.|I throw the ball.
lanzar|to throw; to launch|ihagis; ilunsad||Lanzo un producto.|I launch a product.
empujar|to push|itulak||Empujo la puerta.|I push the door.
jalar|to pull (Latin America)|hilahin||Jalo la cuerda.|I pull the rope.
besar|to kiss|humalik||Beso a mi madre.|I kiss my mother.
abrazar|to hug|yumakap||Abrazo a mi amigo.|I hug my friend.
sacar|to take out|ilabas||Saco la basura.|I take out the trash.
meter|to put in|ipasok||Meto la ropa en la maleta.|I put the clothes in the suitcase.
quitar|to remove|alisin||Quito el polvo.|I remove the dust.
colocar|to place|ilagay||Coloco el libro aquí.|I place the book here.
pegar|to stick; to hit|idikit; paluin||Pego la etiqueta.|I stick on the label.
cargar|to carry; to charge|magbuhat; i-charge||Cargo el teléfono.|I charge the phone.
levantar|to lift; to raise|buhatin; itaas||Levanto la mano.|I raise my hand.
pasar|to pass; to happen; to spend|dumaan; mangyari; gugulin||Paso por tu casa.|I pass by your house.
quedar|to remain; to arrange to meet|manatili; magkita||Quedo con mis amigos.|I arrange to meet my friends.
sobrar|to be left over|lumabis||Sobra comida.|There is food left over.
bastar|to be enough|sapat na||Basta con una llamada.|One call is enough.
ocurrir|to occur|mangyari||Ocurre un error.|An error occurs.
suceder|to happen|mangyari||Sucede a menudo.|It happens often.
existir|to exist|umiral||Existe una solución.|A solution exists.
depender|to depend|umasa||Dependo de mi horario.|I depend on my schedule.
consistir|to consist|binubuo||Consiste en tres pasos.|It consists of three steps.
significar|to mean|nangangahulugan||Significa gracias.|It means thank you.
representar|to represent|kumatawan||Represento a mi empresa.|I represent my company.
pertenecer|to belong|nabibilang||Pertenezco al equipo.|I belong to the team.
abandonar|to abandon|iwanan||Abandono el proyecto.|I abandon the project.
acompañar|to accompany|samahan||Acompaño a mi hermana.|I accompany my sister.
acercarse|to approach|lumapit||Me acerco a la puerta.|I approach the door.
alejarse|to move away|lumayo||Me alejo del ruido.|I move away from the noise.
apoyar|to support|suportahan||Apoyo a mi equipo.|I support my team.
aprovechar|to take advantage of|samantalahin||Aprovecho el tiempo.|I make the most of my time.
asistir|to attend|dumalo||Asisto a la clase.|I attend the class.
atreverse|to dare|lakas-loob||Me atrevo a hablar.|I dare to speak.
cuidar|to take care of|alagaan||Cuido a mi abuela.|I take care of my grandmother.
cuidarse|to take care of oneself|mag-ingat||Me cuido mucho.|I take good care of myself.
dañar|to damage|sirain||Daño el equipo.|I damage the equipment.
dedicarse|to devote oneself|italaga ang sarili||Me dedico a la enseñanza.|I work in teaching.
desear|to wish; to want|ibigin; hilingin||Deseo un buen día.|I wish you a good day.
desarrollar|to develop|paunlarin||Desarrollo una aplicación.|I develop an app.
disfrutar|to enjoy|magsaya||Disfruto la música.|I enjoy the music.
dudar|to doubt|magduda||Dudo de la respuesta.|I doubt the answer.
durar|to last|tumagal||Dura una hora.|It lasts an hour.
engañar|to deceive|manloko||No engaño a nadie.|I do not deceive anyone.
enamorarse|to fall in love|umibig||Me enamoro fácilmente.|I fall in love easily.
equivocarse|to make a mistake|magkamali||Me equivoco a veces.|I make mistakes sometimes.
evitar|to avoid|iwasan||Evito el tráfico.|I avoid traffic.
felicitar|to congratulate|bumati (sa tagumpay)||Felicito a mi amiga.|I congratulate my friend.
fijarse|to notice|mapansin||Me fijo en los detalles.|I notice the details.
formar|to form|bumuo||Formo un grupo.|I form a group.
garantizar|to guarantee|tiyakin||Garantizo el servicio.|I guarantee the service.
gritar|to shout|sumigaw||No grito nunca.|I never shout.
ignorar|to ignore|balewalain||Ignoro el ruido.|I ignore the noise.
imaginar|to imagine|isipin||Imagino la escena.|I imagine the scene.
insistir|to insist|igiit||Insisto en pagar.|I insist on paying.
luchar|to fight; to struggle|lumaban||Lucho por mis sueños.|I fight for my dreams.
matar|to kill|pumatay||No mato insectos.|I do not kill insects.
notar|to notice|mapansin||Noto un cambio.|I notice a change.
observar|to observe|obserbahan||Observo a los niños.|I observe the children.
ocupar|to occupy|sakupin||Ocupo este asiento.|I occupy this seat.
ofender|to offend|makasakit ng damdamin||No ofendo a nadie.|I offend no one.
pelear|to fight|makipag-away||No peleo con nadie.|I fight with no one.
portarse|to behave|kumilos||Me porto bien.|I behave well.
presumir|to show off|magyabang||Presumo de mi coche.|I show off my car.
quemar|to burn|sunugin||Quemo la comida.|I burn the food.
rendirse|to give up|sumuko|e-i|Me rindo fácilmente.|I give up easily.
repartir|to distribute|ipamahagi||Reparto las cartas.|I deliver the letters.
respetar|to respect|igalang||Respeto las reglas.|I respect the rules.
robar|to steal|magnakaw||Nunca robo.|I never steal.
sorprender|to surprise|gulatin||Me sorprende la noticia.|The news surprises me.
soportar|to bear; to stand|tiisin||No soporto el calor.|I cannot stand the heat.
sufrir|to suffer|magdusa||Sufro de alergias.|I suffer from allergies.
surgir|to arise|bumangon; lumitaw||Surge un problema.|A problem arises.
temer|to fear|matakot||Temo a la oscuridad.|I fear the dark.
tratar|to try; to treat|subukan; trato||Trato de ayudar.|I try to help.
unir|to unite; to join|pagsamahin||Uno las piezas.|I join the pieces.
valorar|to value|pahalagahan||Valoro tu opinión.|I value your opinion.
vigilar|to watch over|bantayan||Vigilo la casa.|I watch the house.
vomitar|to vomit|sumuka||Vomito por la noche.|I vomit at night.
votar|to vote|bumoto||Voto en las elecciones.|I vote in the elections.
ganarse|to earn|kumita||Me gano la vida.|I earn my living.
extrañar|to miss (Latin America)|mangulila||Extraño a mi familia.|I miss my family.
echar|to throw; to put in|ihagis; ilagay||Echo sal a la sopa.|I add salt to the soup.
hallar|to find|makahanap||Hallo la solución.|I find the solution.
alcanzar|to reach; to be enough|abutin||Alcanzo el estante.|I reach the shelf.
lograr|to manage to|magtagumpay||Logro terminar a tiempo.|I manage to finish on time.
`;

const FLAGS = new Set(['e-ie', 'o-ue', 'e-i', 'u-ue', 'i-ie', 'iar', 'uar', 'third']);

const seen = new Set();
export const verbList = TABLE.trim()
  .split('\n')
  .map((line) => line.split('|'))
  .map(([infinitive, english, tagalog, flags, example, translation]) => ({
    infinitive,
    english,
    tagalog,
    flags: (flags ? flags.split(',') : []).filter((f) => FLAGS.has(f)),
    example,
    translation,
  }))
  .filter((v) => (seen.has(v.infinitive) ? false : seen.add(v.infinitive)));
