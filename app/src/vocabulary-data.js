// Core vocabulary: word | article | part of speech | English | Tagalog | example | translation.
// Original examples written for learners. Gender is shown by the article for nouns.
const TABLE = `
amigo|el|Noun|friend (male)|kaibigan|Mi amigo vive en Madrid.|My friend lives in Madrid.
amiga|la|Noun|friend (female)|kaibigan (babae)|Mi amiga trabaja en un banco.|My friend works at a bank.
hombre|el|Noun|man|lalaki|El hombre espera el autobús.|The man is waiting for the bus.
mujer|la|Noun|woman; wife|babae; asawa|La mujer lleva una bolsa roja.|The woman is carrying a red bag.
niño|el|Noun|boy; child|batang lalaki; bata|El niño juega en el parque.|The boy plays in the park.
niña|la|Noun|girl|batang babae|La niña lee un cuento.|The girl reads a story.
padre|el|Noun|father|tatay|Mi padre cocina los domingos.|My father cooks on Sundays.
madre|la|Noun|mother|nanay|Mi madre llama todos los días.|My mother calls every day.
hermano|el|Noun|brother|kuya; kapatid na lalaki|Mi hermano estudia medicina.|My brother studies medicine.
hermana|la|Noun|sister|ate; kapatid na babae|Mi hermana vive en Manila.|My sister lives in Manila.
hijo|el|Noun|son|anak na lalaki|Su hijo tiene cinco años.|Their son is five years old.
hija|la|Noun|daughter|anak na babae|Mi hija habla dos idiomas.|My daughter speaks two languages.
abuelo|el|Noun|grandfather|lolo|Mi abuelo cuenta historias.|My grandfather tells stories.
abuela|la|Noun|grandmother|lola|Mi abuela hace pan.|My grandmother bakes bread.
tío|el|Noun|uncle|tito|Mi tío trabaja en un hotel.|My uncle works at a hotel.
tía|la|Noun|aunt|tita|Mi tía nos visita en verano.|My aunt visits us in the summer.
primo|el|Noun|cousin (male)|pinsan na lalaki|Mi primo juega al fútbol.|My cousin plays soccer.
prima|la|Noun|cousin (female)|pinsan na babae|Mi prima es enfermera.|My cousin is a nurse.
vecino|el|Noun|neighbor (male)|kapitbahay|El vecino saluda cada mañana.|The neighbor says hello every morning.
vecina|la|Noun|neighbor (female)|kapitbahay (babae)|La vecina cuida a mi perro.|The neighbor looks after my dog.
jefe|el|Noun|boss (male)|amo; boss|Mi jefe llega a las ocho.|My boss arrives at eight.
jefa|la|Noun|boss (female)|amo (babae); boss|Mi jefa quiere un informe.|My boss wants a report.
compañero|el|Noun|coworker; classmate (male)|katrabaho; kaklase|Mi compañero me ayudó mucho.|My coworker helped me a lot.
compañera|la|Noun|coworker; classmate (female)|katrabaho (babae); kaklase|Mi compañera habla inglés.|My coworker speaks English.
cliente|el/la|Noun|customer|kustomer; kliyente|El cliente llamó ayer.|The customer called yesterday.
maestro|el|Noun|teacher (male)|guro|El maestro explica la lección.|The teacher explains the lesson.
maestra|la|Noun|teacher (female)|guro (babae)|La maestra corrige los ejercicios.|The teacher corrects the exercises.
médico|el|Noun|doctor (male)|doktor|El médico habla con el paciente.|The doctor talks to the patient.
gente|la|Noun|people|mga tao|La gente es amable aquí.|The people here are kind.
cocina|la|Noun|kitchen|kusina|La cocina está limpia.|The kitchen is clean.
baño|el|Noun|bathroom|banyo|¿Dónde está el baño?|Where is the bathroom?
dormitorio|el|Noun|bedroom|silid-tulugan|El dormitorio tiene una ventana.|The bedroom has a window.
sala|la|Noun|living room|sala|Vemos televisión en la sala.|We watch TV in the living room.
mesa|la|Noun|table|mesa|La mesa es de madera.|The table is made of wood.
silla|la|Noun|chair|silya; upuan|Hay cuatro sillas en la cocina.|There are four chairs in the kitchen.
cama|la|Noun|bed|kama|Mi cama es muy cómoda.|My bed is very comfortable.
ventana|la|Noun|window|bintana|Abro la ventana por la mañana.|I open the window in the morning.
llave|la|Noun|key|susi|No encuentro la llave.|I cannot find the key.
teléfono|el|Noun|telephone; phone|telepono|El teléfono está sonando.|The phone is ringing.
computadora|la|Noun|computer|kompyuter|La computadora no enciende.|The computer does not turn on.
celular|el|Noun|cell phone (Latin America)|cellphone|Mi celular tiene poca batería.|My cell phone has low battery.
luz|la|Noun|light|ilaw|Apaga la luz, por favor.|Turn off the light, please.
pan|el|Noun|bread|tinapay|Compro pan fresco cada mañana.|I buy fresh bread every morning.
leche|la|Noun|milk|gatas|Quisiera café con leche.|I would like coffee with milk.
café|el|Noun|coffee|kape|El café está caliente.|The coffee is hot.
té|el|Noun|tea|tsaa|Prefiero el té sin azúcar.|I prefer tea without sugar.
arroz|el|Noun|rice|kanin; bigas|Comemos arroz con pollo.|We eat rice with chicken.
carne|la|Noun|meat|karne|No como carne los viernes.|I do not eat meat on Fridays.
pollo|el|Noun|chicken|manok|El pollo está delicioso.|The chicken is delicious.
pescado|el|Noun|fish (as food)|isda|El pescado es fresco.|The fish is fresh.
fruta|la|Noun|fruit|prutas|Como fruta en el desayuno.|I eat fruit at breakfast.
verdura|la|Noun|vegetable|gulay|Las verduras son sanas.|Vegetables are healthy.
huevo|el|Noun|egg|itlog|Quiero dos huevos fritos.|I want two fried eggs.
queso|el|Noun|cheese|keso|El queso está en el refrigerador.|The cheese is in the refrigerator.
sopa|la|Noun|soup|sabaw; sopas|La sopa está muy caliente.|The soup is very hot.
ensalada|la|Noun|salad|ensalada|Pedimos una ensalada grande.|We ordered a large salad.
desayuno|el|Noun|breakfast|almusal|El desayuno es a las siete.|Breakfast is at seven.
almuerzo|el|Noun|lunch|tanghalian|Almuerzo con mis compañeros.|I have lunch with my coworkers.
cena|la|Noun|dinner|hapunan|La cena está lista.|Dinner is ready.
menú|el|Noun|menu|menu|¿Me trae el menú, por favor?|Could you bring me the menu, please?
propina|la|Noun|tip (money)|tip|Dejamos una buena propina.|We left a good tip.
vaso|el|Noun|glass (for drinking)|baso|Un vaso de agua, por favor.|A glass of water, please.
botella|la|Noun|bottle|bote|La botella está vacía.|The bottle is empty.
plato|el|Noun|plate; dish|plato; putahe|Este plato lleva pollo.|This dish contains chicken.
ciudad|la|Noun|city|lungsod|Vivo en una ciudad grande.|I live in a big city.
pueblo|el|Noun|town; village|bayan|Mi abuela vive en un pueblo.|My grandmother lives in a small town.
calle|la|Noun|street|kalye|La calle está cerrada hoy.|The street is closed today.
plaza|la|Noun|square; plaza|plasa|Nos vemos en la plaza.|We will meet at the square.
mercado|el|Noun|market|palengke; pamilihan|Compro fruta en el mercado.|I buy fruit at the market.
tienda|la|Noun|store|tindahan|La tienda abre a las nueve.|The store opens at nine.
supermercado|el|Noun|supermarket|supermarket|Voy al supermercado después del trabajo.|I go to the supermarket after work.
banco|el|Noun|bank|bangko|El banco cierra a las cuatro.|The bank closes at four.
hospital|el|Noun|hospital|ospital|El hospital está cerca.|The hospital is nearby.
farmacia|la|Noun|pharmacy|botika|Necesito ir a la farmacia.|I need to go to the pharmacy.
escuela|la|Noun|school|paaralan|Mis hijos van a la escuela.|My children go to school.
universidad|la|Noun|university|unibersidad|Estudio en la universidad.|I study at the university.
oficina|la|Noun|office|opisina|La oficina está en el centro.|The office is downtown.
aeropuerto|el|Noun|airport|paliparan|El aeropuerto es enorme.|The airport is huge.
estación|la|Noun|station|istasyon|La estación está al lado del hotel.|The station is next to the hotel.
hotel|el|Noun|hotel|hotel|El hotel tiene piscina.|The hotel has a pool.
restaurante|el|Noun|restaurant|restawran|Este restaurante es barato.|This restaurant is cheap.
parque|el|Noun|park|parke|Caminamos por el parque.|We walk through the park.
playa|la|Noun|beach|dalampasigan; beach|La playa está llena de gente.|The beach is full of people.
museo|el|Noun|museum|museo|El museo abre los lunes.|The museum opens on Mondays.
biblioteca|la|Noun|library|aklatan|Estudio en la biblioteca.|I study at the library.
día|el|Noun|day|araw|Hoy es un día importante.|Today is an important day.
semana|la|Noun|week|linggo|La semana próxima viajo.|Next week I travel.
mes|el|Noun|month|buwan|Este mes trabajo mucho.|This month I am working a lot.
año|el|Noun|year|taon|El año pasado visité Lima.|Last year I visited Lima.
hora|la|Noun|hour; time|oras|¿Qué hora es?|What time is it?
minuto|el|Noun|minute|minuto|Espere un minuto, por favor.|Please wait a minute.
mañana|la|Noun|morning|umaga|Estudio por la mañana.|I study in the morning.
tarde|la|Noun|afternoon; evening|hapon|Salimos por la tarde.|We go out in the afternoon.
noche|la|Noun|night|gabi|Duermo ocho horas por la noche.|I sleep eight hours at night.
momento|el|Noun|moment|sandali; sandaling oras|Un momento, por favor.|One moment, please.
vez|la|Noun|time (occasion)|beses; pagkakataon|Es la primera vez que viajo sola.|It is the first time I travel alone.
tiempo|el|Noun|time; weather|panahon; oras|No tengo tiempo hoy.|I do not have time today.
trabajo|el|Noun|work; job|trabaho|Mi trabajo es interesante.|My job is interesting.
empresa|la|Noun|company|kumpanya|Trabajo en una empresa grande.|I work at a large company.
equipo|el|Noun|team; equipment|koponan; kagamitan|Nuestro equipo es muy unido.|Our team is very close.
reunión|la|Noun|meeting|pulong|La reunión empieza a las diez.|The meeting starts at ten.
correo|el|Noun|mail; email|koreo; email|Reviso mi correo por la mañana.|I check my email in the morning.
factura|la|Noun|bill; invoice|bill; resibo ng singil|La factura llega el día uno.|The bill arrives on the first.
pago|el|Noun|payment|bayad|El pago se realizó ayer.|The payment was made yesterday.
precio|el|Noun|price|presyo|El precio es muy bueno.|The price is very good.
tarifa|la|Noun|rate; fee|singil; taripa|La tarifa incluye el impuesto.|The rate includes tax.
servicio|el|Noun|service|serbisyo|El servicio fue excelente.|The service was excellent.
problema|el|Noun|problem|problema|Tenemos un problema con el pedido.|We have a problem with the order.
solución|la|Noun|solution|solusyon|Buscamos una solución rápida.|We are looking for a quick solution.
pregunta|la|Noun|question|tanong|Tengo una pregunta.|I have a question.
respuesta|la|Noun|answer; reply|sagot|Espero su respuesta.|I am waiting for your reply.
cambio|el|Noun|change; exchange|pagbabago; palit|Quiero hacer un cambio.|I want to make an exchange.
reembolso|el|Noun|refund|refund; ibabalik na bayad|Solicité un reembolso.|I requested a refund.
contrato|el|Noun|contract|kontrata|Firmé el contrato ayer.|I signed the contract yesterday.
horario|el|Noun|schedule; hours|iskedyul|El horario es flexible.|The schedule is flexible.
sueldo|el|Noun|salary|sahod|El sueldo se paga cada mes.|The salary is paid every month.
entrevista|la|Noun|interview|panayam|Mañana tengo una entrevista.|Tomorrow I have an interview.
proyecto|el|Noun|project|proyekto|El proyecto termina en junio.|The project ends in June.
informe|el|Noun|report|ulat|Escribo un informe semanal.|I write a weekly report.
queja|la|Noun|complaint|reklamo|Presenté una queja por escrito.|I filed a written complaint.
ayuda|la|Noun|help|tulong|Necesito ayuda con la aplicación.|I need help with the app.
contraseña|la|Noun|password|password|Olvidé mi contraseña.|I forgot my password.
pantalla|la|Noun|screen|screen|La pantalla está rota.|The screen is broken.
teclado|el|Noun|keyboard|keyboard|El teclado no funciona.|The keyboard does not work.
aplicación|la|Noun|app; application|app|La aplicación se cierra sola.|The app closes by itself.
archivo|el|Noun|file|file|Envié el archivo por correo.|I sent the file by email.
red|la|Noun|network; net|network|La red está lenta.|The network is slow.
enlace|el|Noun|link|link|Haga clic en el enlace.|Click on the link.
mensaje|el|Noun|message|mensahe|Recibí un mensaje extraño.|I received a strange message.
error|el|Noun|error|error; mali|Aparece un error en la pantalla.|An error appears on the screen.
cuenta|la|Noun|account; bill|account; bill|Abrí una cuenta nueva.|I opened a new account.
usuario|el|Noun|user; username|gumagamit; username|Escriba su usuario y contraseña.|Enter your username and password.
señal|la|Noun|signal|signal|No hay señal aquí.|There is no signal here.
batería|la|Noun|battery|baterya|La batería dura poco.|The battery does not last long.
cargador|el|Noun|charger|charger|Olvidé el cargador.|I forgot the charger.
página|la|Noun|page|pahina|La página no carga.|The page does not load.
cabeza|la|Noun|head|ulo|Me duele la cabeza.|My head hurts.
mano|la|Noun|hand|kamay|Lávate las manos.|Wash your hands.
pie|el|Noun|foot|paa|Me duele el pie derecho.|My right foot hurts.
ojo|el|Noun|eye|mata|Tengo los ojos cansados.|My eyes are tired.
boca|la|Noun|mouth|bibig|Abra la boca, por favor.|Open your mouth, please.
corazón|el|Noun|heart|puso|Mi corazón late rápido.|My heart is beating fast.
espalda|la|Noun|back (body)|likod|Me duele la espalda.|My back hurts.
estómago|el|Noun|stomach|tiyan|Me duele el estómago.|My stomach hurts.
garganta|la|Noun|throat|lalamunan|Tengo dolor de garganta.|I have a sore throat.
medicina|la|Noun|medicine|gamot|Tome la medicina después de comer.|Take the medicine after eating.
cita|la|Noun|appointment; date|appointment; date|Tengo una cita con el médico.|I have an appointment with the doctor.
salud|la|Noun|health|kalusugan|La salud es lo más importante.|Health is the most important thing.
dolor|el|Noun|pain|sakit|Siento un dolor fuerte.|I feel a strong pain.
fiebre|la|Noun|fever|lagnat|El niño tiene fiebre.|The child has a fever.
gripe|la|Noun|flu|trangkaso|Tengo gripe desde ayer.|I have had the flu since yesterday.
boleto|el|Noun|ticket (Latin America)|tiket|Compré el boleto en línea.|I bought the ticket online.
pasaporte|el|Noun|passport|pasaporte|No olvides el pasaporte.|Do not forget your passport.
maleta|la|Noun|suitcase|maleta|Mi maleta es muy pesada.|My suitcase is very heavy.
vuelo|el|Noun|flight|biyahe sa eroplano|El vuelo sale a las seis.|The flight leaves at six.
tren|el|Noun|train|tren|El tren llega tarde.|The train arrives late.
autobús|el|Noun|bus|bus|El autobús pasa cada diez minutos.|The bus comes every ten minutes.
coche|el|Noun|car (Spain)|kotse|Mi coche está en el taller.|My car is at the repair shop.
carro|el|Noun|car (Latin America)|kotse|Mi carro es nuevo.|My car is new.
taxi|el|Noun|taxi|taksi|Tomamos un taxi al hotel.|We took a taxi to the hotel.
dirección|la|Noun|address; direction|address; direksyon|¿Cuál es su dirección?|What is your address?
mapa|el|Noun|map|mapa|Busco la calle en el mapa.|I am looking for the street on the map.
esquina|la|Noun|corner|kanto|El banco está en la esquina.|The bank is on the corner.
camino|el|Noun|road; path; way|daan|Este camino lleva al pueblo.|This road leads to the town.
sol|el|Noun|sun|araw (sa langit)|Hoy hay mucho sol.|Today it is very sunny.
lluvia|la|Noun|rain|ulan|La lluvia empezó temprano.|The rain started early.
viento|el|Noun|wind|hangin|Hace mucho viento.|It is very windy.
mar|el|Noun|sea|dagat|El mar está tranquilo.|The sea is calm.
río|el|Noun|river|ilog|El río es largo.|The river is long.
montaña|la|Noun|mountain|bundok|Subimos la montaña.|We climbed the mountain.
árbol|el|Noun|tree|puno|Hay un árbol frente a mi casa.|There is a tree in front of my house.
perro|el|Noun|dog|aso|Mi perro es muy amigable.|My dog is very friendly.
gato|el|Noun|cat|pusa|El gato duerme en el sofá.|The cat sleeps on the sofa.
flor|la|Noun|flower|bulaklak|Compré una flor para ti.|I bought a flower for you.
vida|la|Noun|life|buhay|La vida es corta.|Life is short.
mundo|el|Noun|world|mundo|Quiero conocer el mundo.|I want to see the world.
idea|la|Noun|idea|ideya|Es una buena idea.|It is a good idea.
verdad|la|Noun|truth|katotohanan|Dime la verdad.|Tell me the truth.
razón|la|Noun|reason; being right|dahilan; tama|Tienes razón.|You are right.
dinero|el|Noun|money|pera; salapi|No tengo mucho dinero.|I do not have much money.
nombre|el|Noun|name|pangalan|¿Cuál es su nombre?|What is your name?
apellido|el|Noun|last name|apelyido|Mi apellido es difícil de escribir.|My last name is hard to spell.
palabra|la|Noun|word|salita|No conozco esa palabra.|I do not know that word.
idioma|el|Noun|language|wika; lengua|Hablo tres idiomas.|I speak three languages.
país|el|Noun|country|bansa|Mi país es muy bonito.|My country is very beautiful.
historia|la|Noun|history; story|kasaysayan; kuwento|Me gusta la historia de México.|I like the history of Mexico.
música|la|Noun|music|musika|Escucho música al trabajar.|I listen to music while working.
fiesta|la|Noun|party; festival|handaan; pista|La fiesta es el sábado.|The party is on Saturday.
regalo|el|Noun|gift|regalo|Gracias por el regalo.|Thank you for the gift.
sueño|el|Noun|dream; sleepiness|panaginip; antok|Tengo mucho sueño.|I am very sleepy.
miedo|el|Noun|fear|takot|Tengo miedo de volar.|I am afraid of flying.
grande||Adjective|big; large|malaki|Es una casa muy grande.|It is a very big house.
pequeño||Adjective|small|maliit|El cuarto es pequeño.|The room is small.
bueno||Adjective|good|mabuti; mabait|Es un libro muy bueno.|It is a very good book.
malo||Adjective|bad|masama|El clima está malo hoy.|The weather is bad today.
nuevo||Adjective|new|bago|Tengo un teléfono nuevo.|I have a new phone.
viejo||Adjective|old|luma; matanda|Este coche es viejo.|This car is old.
joven||Adjective|young|bata; kabataan|Mi hermana es joven.|My sister is young.
alto||Adjective|tall; high|matangkad; mataas|Mi padre es alto.|My father is tall.
bajo||Adjective|short; low|pandak; mababa|El precio es bajo.|The price is low.
largo||Adjective|long|mahaba|El viaje es largo.|The trip is long.
corto||Adjective|short (length)|maikli|El vestido es corto.|The dress is short.
caro||Adjective|expensive|mahal|Este hotel es caro.|This hotel is expensive.
barato||Adjective|cheap; inexpensive|mura|La comida es barata aquí.|The food is cheap here.
fácil||Adjective|easy|madali|El examen es fácil.|The exam is easy.
difícil||Adjective|difficult|mahirap|Esta pregunta es difícil.|This question is difficult.
rápido||Adjective|fast; quick|mabilis|El tren es rápido.|The train is fast.
lento||Adjective|slow|mabagal|El internet está lento.|The internet is slow.
feliz||Adjective|happy|masaya|Estoy muy feliz hoy.|I am very happy today.
triste||Adjective|sad|malungkot|Mi amiga está triste.|My friend is sad.
cansado||Adjective|tired|pagod|Estoy cansado después del trabajo.|I am tired after work.
enojado||Adjective|angry (Latin America)|galit|El cliente está enojado.|The customer is angry.
ocupado||Adjective|busy|abala|Estoy ocupado esta tarde.|I am busy this afternoon.
libre||Adjective|free; available|libre; bakante|¿Estás libre mañana?|Are you free tomorrow?
listo||Adjective|ready; clever|handa; matalino|Estoy listo para empezar.|I am ready to start.
importante||Adjective|important|mahalaga|Es un tema importante.|It is an important topic.
necesario||Adjective|necessary|kailangan; kinakailangan|Es necesario confirmar los datos.|It is necessary to confirm the details.
posible||Adjective|possible|posible|Es posible cambiar la fecha.|It is possible to change the date.
imposible||Adjective|impossible|imposible|Es imposible llegar a tiempo.|It is impossible to arrive on time.
seguro||Adjective|safe; sure|ligtas; sigurado|Estoy seguro de la respuesta.|I am sure of the answer.
claro||Adjective|clear; light (color)|malinaw; maliwanag|La explicación es clara.|The explanation is clear.
limpio||Adjective|clean|malinis|La habitación está limpia.|The room is clean.
sucio||Adjective|dirty|marumi|El carro está sucio.|The car is dirty.
abierto||Adjective|open|bukas|La tienda está abierta.|The store is open.
cerrado||Adjective|closed|sarado|El banco está cerrado.|The bank is closed.
lleno||Adjective|full|puno|El autobús está lleno.|The bus is full.
vacío||Adjective|empty|walang laman|La caja está vacía.|The box is empty.
caliente||Adjective|hot (to the touch)|mainit|El café está caliente.|The coffee is hot.
frío||Adjective|cold|malamig|El agua está fría.|The water is cold.
dulce||Adjective|sweet|matamis|El postre es muy dulce.|The dessert is very sweet.
fuerte||Adjective|strong; loud|malakas|El viento es fuerte.|The wind is strong.
débil||Adjective|weak|mahina|La señal es débil.|The signal is weak.
simple||Adjective|simple|simple|La instrucción es simple.|The instruction is simple.
correcto||Adjective|correct|tama|La respuesta es correcta.|The answer is correct.
diferente||Adjective|different|iba; magkaiba|Son dos opciones diferentes.|They are two different options.
mismo||Adjective|same|pareho; kapareho|Tenemos el mismo problema.|We have the same problem.
cierto||Adjective|true; certain|totoo; tiyak|Es cierto que llegó tarde.|It is true that he arrived late.
bonito||Adjective|pretty; nice|maganda|Es un pueblo muy bonito.|It is a very pretty town.
amable||Adjective|kind; polite|magalang; mabait|La agente fue muy amable.|The agent was very kind.
enfermo||Adjective|sick|may sakit|Mi hijo está enfermo.|My son is sick.
contento||Adjective|glad; pleased|nasisiyahan|Estoy contento con el servicio.|I am pleased with the service.
muy||Adverb|very|napaka-|Estoy muy cansado.|I am very tired.
mucho||Adverb|a lot; much|marami; madalas|Trabajo mucho.|I work a lot.
poco||Adverb|little; not much|kaunti|Duermo poco.|I sleep little.
siempre||Adverb|always|palagi|Siempre llego temprano.|I always arrive early.
nunca||Adverb|never|hindi kailanman|Nunca bebo café por la noche.|I never drink coffee at night.
ya||Adverb|already; now|na|Ya terminé el trabajo.|I already finished the work.
todavía||Adverb|still; yet|pa; hanggang ngayon|Todavía no llega.|He has not arrived yet.
ahora||Adverb|now|ngayon|Ahora estoy en la oficina.|Now I am at the office.
luego||Adverb|later; then|mamaya; pagkatapos|Hablamos luego.|We will talk later.
después||Adverb|afterward; after|pagkatapos|Después comemos.|We eat afterward.
antes||Adverb|before; earlier|bago; dati|Antes vivía en Cebú.|I used to live in Cebu.
hoy||Adverb|today|ngayong araw|Hoy hace calor.|It is hot today.
ayer||Adverb|yesterday|kahapon|Ayer llovió todo el día.|Yesterday it rained all day.
aquí||Adverb|here|dito|Estoy aquí.|I am here.
allí||Adverb|there|doon|El baño está allí.|The bathroom is over there.
cerca||Adverb|near; close|malapit|El hotel está cerca.|The hotel is near.
lejos||Adverb|far|malayo|La estación está lejos.|The station is far.
bien||Adverb|well; fine|mabuti|Hablas muy bien.|You speak very well.
mal||Adverb|badly; poorly|masama|Dormí mal anoche.|I slept badly last night.
despacio||Adverb|slowly|dahan-dahan|Hable más despacio, por favor.|Please speak more slowly.
temprano||Adverb|early|maaga|Me levanto temprano.|I get up early.
también||Adverb|also; too|din; rin|Yo también tengo hambre.|I am hungry too.
tampoco||Adverb|neither; either (negative)|din (sa negatibo)|Yo tampoco entiendo.|I do not understand either.
solamente||Adverb|only; just|lamang|Solamente necesito un minuto.|I only need a minute.
casi||Adverb|almost|halos|Casi termino.|I am almost done.
quizás||Adverb|maybe; perhaps|marahil|Quizás llegue tarde.|Maybe he will arrive late.
con||Preposition|with|kasama; may|Voy con mi hermana.|I am going with my sister.
sin||Preposition|without|walang; nang walang|Café sin azúcar, por favor.|Coffee without sugar, please.
sobre||Preposition|about; on; over|tungkol sa; sa ibabaw ng|Hablamos sobre el proyecto.|We talked about the project.
entre||Preposition|between; among|sa pagitan ng|Está entre el banco y la farmacia.|It is between the bank and the pharmacy.
hacia||Preposition|toward|patungo sa|Caminamos hacia la plaza.|We walk toward the square.
hasta||Preposition|until; up to|hanggang|Trabajo hasta las seis.|I work until six.
desde||Preposition|since; from|mula; simula|Vivo aquí desde 2020.|I have lived here since 2020.
durante||Preposition|during|habang; sa loob ng|Durante el verano viajo mucho.|During the summer I travel a lot.
contra||Preposition|against|laban sa|Jugamos contra otro equipo.|We play against another team.
según||Preposition|according to|ayon sa|Según el horario, sale a las ocho.|According to the schedule, it leaves at eight.
pero||Conjunction|but|ngunit; pero|Quiero ir, pero no puedo.|I want to go, but I cannot.
porque||Conjunction|because|dahil; kasi|No voy porque estoy enfermo.|I am not going because I am sick.
aunque||Conjunction|although; even if|kahit na|Voy aunque llueva.|I am going even if it rains.
mientras||Conjunction|while|habang|Leo mientras espero.|I read while I wait.
sino||Conjunction|but rather|kundi|No es rojo, sino azul.|It is not red but blue.
además||Adverb|besides; in addition|bukod pa rito|Además, es barato.|Besides, it is cheap.
entonces||Adverb|then; so|kung gayon; e di|Entonces, empezamos.|Then, let us begin.
por eso||Phrase|that is why|kaya|Llovía; por eso no salimos.|It was raining; that is why we did not go out.
sin embargo||Phrase|however; nevertheless|gayunpaman|Es caro; sin embargo, es bueno.|It is expensive; however, it is good.
de nada||Phrase|you are welcome|walang anuman|Gracias. De nada.|Thank you. You are welcome.
con permiso||Phrase|excuse me (to pass or enter)|makikiraan po|Con permiso, voy a pasar.|Excuse me, I am going to pass.
lo siento||Phrase|I am sorry|pasensya na; ikinalulungkot ko|Lo siento, llegué tarde.|I am sorry, I arrived late.
mucho gusto||Phrase|nice to meet you|ikinagagalak kitang makilala|Mucho gusto, soy Ana.|Nice to meet you, I am Ana.
hasta luego||Phrase|see you later|hanggang sa muli|Hasta luego, nos vemos mañana.|See you later, we will see each other tomorrow.
por supuesto||Phrase|of course|siyempre|¿Me ayudas? Por supuesto.|Will you help me? Of course.
de acuerdo||Phrase|okay; agreed|sang-ayon; sige|De acuerdo, nos vemos a las ocho.|Okay, we will see each other at eight.
no importa||Phrase|it does not matter|walang problema; ayos lang|No importa, yo pago.|It does not matter, I will pay.
¿qué tal?||Phrase|how is it going?|kumusta?|Hola, ¿qué tal?|Hi, how is it going?
por favor||Phrase|please|pakiusap; pakiusap po|Un café, por favor.|A coffee, please.
buen provecho||Phrase|enjoy your meal|sarap ng kain|Buen provecho a todos.|Enjoy your meal, everyone.
¿cómo se dice…?||Phrase|how do you say…?|paano sasabihin ang…?|¿Cómo se dice “thank you” en español?|How do you say “thank you” in Spanish?
no entiendo||Phrase|I do not understand|hindi ko maintindihan|Perdón, no entiendo.|Sorry, I do not understand.
`;

const ARTICLE_LABEL = { el: 'masculine', la: 'feminine', 'el/la': 'masculine or feminine' };

export const vocabulary = TABLE.trim()
  .split('\n')
  .map((line) => line.split('|'))
  .map(([word, article, type, meaning, tagalog, example, translation]) => ({
    word,
    article: article || '',
    type,
    meaning,
    tagalog,
    example,
    translation,
    note: article ? `Gender: ${ARTICLE_LABEL[article] ?? article}.` : '',
    forms: [],
  }));
