// Intermediate stories: simplified adaptations of traditional tales (labeled in each intro) and original stories.
const story = (
  id,
  title,
  englishTitle,
  focus,
  intro,
  lines,
  vocab,
  tip,
  proTip,
  taglish,
  questions,
) => ({
  id: 'story-' + id,
  kind: 'Stories',
  track: 'Intermediate',
  title,
  englishTitle,
  focus,
  intro,
  lines,
  vocab,
  tip,
  proTip,
  taglish,
  questions,
});

export const intermediateStories = [
  story(
    'lechera',
    'La lechera',
    'The milkmaid',
    'Spanish fable adaptation · Future tense and daydreams',
    'A simplified adaptation of a fable known in Spain through Félix María Samaniego (eighteenth century). It is a traditional tale retold in easier Spanish; the lesson is about counting your chickens too early.',
    [
      [
        'Una lechera caminaba al mercado con una jarra de leche en la cabeza.',
        'A milkmaid was walking to the market with a jug of milk on her head.',
      ],
      [
        'Mientras caminaba, empezó a soñar con su futuro.',
        'While walking, she began to dream about her future.',
      ],
      [
        '—Venderé la leche y compraré unos huevos —pensó.',
        '“I will sell the milk and buy some eggs,” she thought.',
      ],
      [
        '—Los huevos se convertirán en pollitos y yo venderé los pollos.',
        '“The eggs will become chicks and I will sell the chickens.”',
      ],
      [
        '—Con ese dinero compraré un vestido bonito.',
        '“With that money I will buy a pretty dress.”',
      ],
      [
        '—Iré a la fiesta del pueblo y todos me mirarán.',
        '“I will go to the town party and everyone will look at me.”',
      ],
      [
        '—Los jóvenes querrán bailar conmigo, pero yo diré que no.',
        '“The young men will want to dance with me, but I will say no.”',
      ],
      [
        'Y al decir “no”, movió la cabeza con orgullo.',
        'And as she said “no,” she shook her head proudly.',
      ],
      ['La jarra cayó al suelo y se rompió.', 'The jug fell to the ground and broke.'],
      ['La leche se derramó por el camino.', 'The milk spilled along the road.'],
      [
        'La lechera lloró, porque sus sueños desaparecieron con la leche.',
        'The milkmaid cried, because her dreams disappeared with the milk.',
      ],
      [
        'Desde ese día, entendió que no conviene hacer planes sin tener todavía el dinero.',
        'From that day, she understood that it is unwise to make plans before you actually have the money.',
      ],
      [
        'Por eso, en español se dice: “el cuento de la lechera”.',
        'That is why in Spanish people say: “the milkmaid’s tale.”',
      ],
    ],
    [
      ['la jarra', 'the jug'],
      ['soñar', 'to dream'],
      ['derramarse', 'to spill'],
      ['el orgullo', 'pride'],
      ['el cuento de la lechera', 'wishful thinking (idiom)'],
    ],
    'The simple future (venderé, compraré, iré) expresses plans; the imperfect (caminaba) sets the scene.',
    'El cuento de la lechera describes someone with unrealistic plans. It is understood in Spain and across Latin America.',
    'Venderé = magbebenta ako; compraré = bibili ako. Ang futuro ay para sa mga plano o pangarap. Caminaba = naglalakad siya (imperfect, background ng kwento).',
    [
      [
        'What does the milkmaid plan to buy first?',
        ['A dress', 'Eggs', 'A cow'],
        1,
        'Venderé la leche y compraré unos huevos.',
      ],
      [
        'Why does the jug fall?',
        ['Someone pushes her', 'She shakes her head proudly', 'The road is wet'],
        1,
        'Movió la cabeza con orgullo and the jug fell.',
      ],
      [
        'What does “el cuento de la lechera” mean today?',
        ['A story about milk', 'Making unrealistic plans', 'A children’s song'],
        1,
        'It is said about wishful, unrealistic planning.',
      ],
    ],
  ),
  story(
    'popocatepetl',
    'Popocatépetl e Iztaccíhuatl',
    'Popocatépetl and Iztaccíhuatl',
    'Mexican legend · Preterite and imperfect together',
    'A simplified adaptation of a famous Mexican legend about two volcanoes near Mexico City. There are many versions; this one is shortened and softened. It is a legend, not history.',
    [
      [
        'Hace mucho tiempo, vivía un guerrero valiente llamado Popocatépetl.',
        'Long ago, there lived a brave warrior named Popocatépetl.',
      ],
      [
        'Él amaba a Iztaccíhuatl, la hija de un gran jefe.',
        'He loved Iztaccíhuatl, the daughter of a great chief.',
      ],
      [
        'El jefe dijo: “Si vuelves victorioso de la guerra, te casarás con mi hija”.',
        'The chief said: “If you return victorious from the war, you will marry my daughter.”',
      ],
      [
        'Popocatépetl se despidió de ella y salió a combatir.',
        'Popocatépetl said goodbye to her and left to fight.',
      ],
      [
        'Pasaron los meses y nadie sabía nada del guerrero.',
        'Months passed and no one knew anything about the warrior.',
      ],
      [
        'Iztaccíhuatl esperaba cada día y se puso muy triste.',
        'Iztaccíhuatl waited every day and became very sad.',
      ],
      [
        'Un rival mintió y dijo que Popocatépetl había muerto.',
        'A rival lied and said that Popocatépetl had died.',
      ],
      [
        'Al oír la noticia, la joven enfermó de pena.',
        'On hearing the news, the young woman fell ill with grief.',
      ],
      [
        'Cuando Popocatépetl regresó, ella ya no estaba despierta.',
        'When Popocatépetl returned, she was no longer awake.',
      ],
      [
        'Él llevó su cuerpo a un lugar alto, entre las montañas.',
        'He carried her to a high place among the mountains.',
      ],
      [
        'Allí se quedó a su lado con una antorcha en la mano.',
        'There he stayed by her side with a torch in his hand.',
      ],
      ['Con el tiempo, la nieve los cubrió a los dos.', 'With time, snow covered both of them.'],
      [
        'Por eso, la gente cuenta que un volcán parece una mujer dormida y el otro, un guerrero que la vigila.',
        'That is why people say one volcano looks like a sleeping woman and the other like a warrior watching over her.',
      ],
      [
        'Cuando el volcán echa humo, dicen que Popocatépetl todavía recuerda su amor.',
        'When the volcano gives off smoke, they say Popocatépetl still remembers his love.',
      ],
    ],
    [
      ['el guerrero', 'the warrior'],
      ['la antorcha', 'the torch'],
      ['enfermar de pena', 'to fall ill from grief'],
      ['vigilar', 'to watch over'],
      ['el volcán', 'the volcano'],
    ],
    'Imperfect = background (vivía, esperaba). Preterite = events (salió, regresó, cubrió).',
    'In Mexico, people often shorten the volcanoes’ names to “Popo” and “Izta”; many local versions exist.',
    'Vivía = nakatira noon (background). Salió = umalis (isang pangyayari). Había muerto = namatay na (pluperfect, mas nauna). Magkasama ang preterite at imperfect sa isang kwento.',
    [
      [
        'What does the chief ask of Popocatépetl?',
        ['To build a house', 'To return victorious from war', 'To leave the city'],
        1,
        'The chief says: si vuelves victorioso de la guerra.',
      ],
      [
        'Why does Iztaccíhuatl fall ill?',
        ['A rival lies about her love’s death', 'She is hungry', 'She leaves the city'],
        0,
        'A rival says Popocatépetl had died.',
      ],
      [
        'What does the smoke from the volcano symbolize?',
        ['A coming storm', 'His enduring love', 'A warning to travelers'],
        1,
        'People say he still remembers his love.',
      ],
    ],
  ),
  story(
    'lion-mouse',
    'El león y el ratón',
    'The lion and the mouse',
    'Aesop fable adaptation · Past narration and gratitude',
    'A simplified retelling of an Aesop fable, a traditional tale told in many languages. This Spanish version is adapted for learners.',
    [
      [
        'Un día, un león dormía bajo un árbol grande.',
        'One day, a lion was sleeping under a big tree.',
      ],
      ['Un ratón pequeño corrió por encima de su nariz.', 'A small mouse ran across his nose.'],
      [
        'El león se despertó enojado y atrapó al ratón con su garra.',
        'The lion woke up angry and caught the mouse with his paw.',
      ],
      ['—Por favor, déjame ir —suplicó el ratón.', '“Please, let me go,” begged the mouse.'],
      [
        '—Algún día te ayudaré, aunque seas muy grande.',
        '“Someday I will help you, even though you are very big.”',
      ],
      [
        'El león se rió, porque no creía que un ratón pudiera ayudarlo.',
        'The lion laughed, because he did not believe a mouse could help him.',
      ],
      ['Pero lo dejó ir.', 'But he let him go.'],
      [
        'Semanas después, unos cazadores atraparon al león con una red.',
        'Weeks later, some hunters trapped the lion in a net.',
      ],
      [
        'El león rugía con fuerza, pero no podía salir.',
        'The lion roared loudly, but he could not get out.',
      ],
      ['El ratón oyó el ruido y corrió hacia él.', 'The mouse heard the noise and ran toward him.'],
      [
        'Con sus dientes pequeños, mordió las cuerdas una por una.',
        'With his tiny teeth, he gnawed the ropes one by one.',
      ],
      [
        'Poco a poco, la red se rompió y el león quedó libre.',
        'Little by little, the net broke and the lion was free.',
      ],
      [
        '—Gracias, amigo —dijo el león—. Ahora entiendo que los pequeños también ayudan.',
        '“Thank you, friend,” said the lion. “Now I understand that the small also help.”',
      ],
    ],
    [
      ['la garra', 'the paw / claw'],
      ['suplicar', 'to beg'],
      ['la red', 'the net'],
      ['morder', 'to bite / gnaw'],
      ['rugir', 'to roar'],
    ],
    'No creía que pudiera ayudarlo: after “no creer que” in the past, Spanish uses the imperfect subjunctive.',
    'The moral is often summarized as “la bondad se paga con bondad”, but fables can have several readings.',
    'Dormía = natutulog siya (background). Atrapó = nahuli niya (event). No creía que pudiera = hindi siya naniniwala na kaya niya (subjunctive dahil may duda).',
    [
      [
        'Why does the lion let the mouse go?',
        ['The mouse promises to help him someday', 'The mouse bites him', 'He is not hungry'],
        0,
        'The mouse promises: algún día te ayudaré.',
      ],
      [
        'How is the lion trapped?',
        ['In a hole', 'In a net', 'In a cage'],
        1,
        'Unos cazadores atraparon al león con una red.',
      ],
      [
        'What does the lion learn?',
        ['Small friends can help too', 'Hunters are dangerous', 'Mice are fast'],
        0,
        'Los pequeños también ayudan.',
      ],
    ],
  ),
  story(
    'cicada-ant',
    'La cigarra y la hormiga',
    'The cicada and the ant',
    'Aesop fable adaptation · Preterite, imperfect and consequences',
    'A traditional Aesop fable, retold in simple Spanish for learners. Spanish speakers know it as a classic lesson about work and rest.',
    [
      [
        'Durante el verano, una cigarra cantaba todo el día bajo el sol.',
        'During the summer, a cicada sang all day under the sun.',
      ],
      [
        'Mientras tanto, una hormiga trabajaba sin parar.',
        'Meanwhile, an ant worked without stopping.',
      ],
      [
        'La hormiga llevaba granos de trigo a su casa.',
        'The ant carried grains of wheat to her home.',
      ],
      [
        '—¿Por qué trabajas tanto? —preguntó la cigarra—. Ven a cantar conmigo.',
        '“Why do you work so much?” asked the cicada. “Come sing with me.”',
      ],
      [
        '—Estoy guardando comida para el invierno —respondió la hormiga.',
        '“I’m storing food for the winter,” the ant replied.',
      ],
      ['La cigarra se rió y siguió cantando.', 'The cicada laughed and kept singing.'],
      ['Llegó el invierno y la nieve cubrió el campo.', 'Winter came and snow covered the fields.'],
      ['La cigarra tenía frío y mucha hambre.', 'The cicada was cold and very hungry.'],
      [
        'Fue a la casa de la hormiga y tocó a la puerta.',
        'She went to the ant’s house and knocked on the door.',
      ],
      ['—Por favor, dame un poco de comida —pidió.', '“Please give me a little food,” she asked.'],
      [
        '—¿Qué hiciste en verano? —preguntó la hormiga.',
        '“What did you do in the summer?” asked the ant.',
      ],
      [
        '—Canté todos los días —dijo la cigarra con tristeza.',
        '“I sang every day,” said the cicada sadly.',
      ],
      ['La hormiga suspiró y le dio algo de comida.', 'The ant sighed and gave her some food.'],
      [
        '—Pero el próximo verano también tendrás que trabajar —le dijo.',
        '“But next summer you will have to work too,” she told her.',
      ],
    ],
    [
      ['la cigarra', 'the cicada'],
      ['la hormiga', 'the ant'],
      ['el trigo', 'the wheat'],
      ['guardar', 'to store / save'],
      ['tocar a la puerta', 'to knock on the door'],
    ],
    'Estoy guardando uses the progressive for something happening around now; canté and fue narrate completed events.',
    'Some modern retellings let the ant be kinder or let the cicada’s music have value. You can discuss which ending you prefer.',
    'Estoy guardando = nag-iimbak ako ngayon. Canté = kumanta ako (tapos na). Cantaba = kumakanta siya noon (paulit-ulit). Tendrás que = kailangan mong…',
    [
      [
        'What does the ant do in the summer?',
        ['Sings', 'Works and stores food', 'Sleeps'],
        1,
        'La hormiga trabajaba y llevaba granos de trigo.',
      ],
      [
        'What does the cicada ask for in winter?',
        ['A new house', 'A song', 'Some food'],
        2,
        'Por favor, dame un poco de comida.',
      ],
      [
        'What does the ant tell the cicada at the end?',
        ['To leave', 'To work next summer too', 'To sing louder'],
        1,
        'También tendrás que trabajar.',
      ],
    ],
  ),
  story(
    'missed-train',
    'El viaje que casi perdemos',
    'The trip we almost missed',
    'Original story · Preterite and imperfect in a travel mishap',
    'An original first-person story. The narrator tells a travel mishap that ends well.',
    [
      ['Aquel viernes salimos de casa muy temprano.', 'That Friday we left home very early.'],
      [
        'Mi hermana y yo íbamos a Valencia para visitar a unos amigos.',
        'My sister and I were going to Valencia to visit some friends.',
      ],
      [
        'Llovía y las calles estaban llenas de coches.',
        'It was raining and the streets were full of cars.',
      ],
      [
        'El taxi avanzaba despacio y yo miraba el reloj con nervios.',
        'The taxi moved slowly and I looked at the clock nervously.',
      ],
      [
        'Faltaban diez minutos para la salida del tren.',
        'There were ten minutes left before the train departed.',
      ],
      [
        'Cuando llegamos a la estación, corrimos por los pasillos.',
        'When we reached the station, we ran down the corridors.',
      ],
      [
        'Entonces me di cuenta de que no tenía mi billete.',
        'Then I realized I did not have my ticket.',
      ],
      [
        'Busqué en la mochila, en el abrigo y en los bolsillos.',
        'I searched my backpack, my coat and my pockets.',
      ],
      [
        '—Lo dejé en la mesa de la cocina —dije, casi llorando.',
        '“I left it on the kitchen table,” I said, almost crying.',
      ],
      [
        'Mi hermana sacó su teléfono y buscó una solución.',
        'My sister took out her phone and looked for a solution.',
      ],
      [
        '—Tenemos el código en el correo —dijo con una sonrisa.',
        '“We have the code in the email,” she said with a smile.',
      ],
      [
        'Mostramos el código en la pantalla y el empleado lo escaneó.',
        'We showed the code on the screen and the employee scanned it.',
      ],
      [
        'Subimos al tren justo cuando cerraban las puertas.',
        'We got on the train just as the doors were closing.',
      ],
      ['Nos sentamos riendo, mojados pero felices.', 'We sat down laughing, wet but happy.'],
      [
        'Desde ese día, siempre guardo una foto de mis billetes.',
        'Since that day, I always keep a photo of my tickets.',
      ],
    ],
    [
      ['el billete', 'the ticket (Spain; boleto in Latin America)'],
      ['faltar', 'to be missing / to be left'],
      ['darse cuenta de', 'to realize'],
      ['el bolsillo', 'the pocket'],
      ['escanear', 'to scan'],
    ],
    'Use the imperfect for scene-setting (llovía, íbamos) and the preterite for steps (llegamos, corrimos, subimos).',
    'Billete is the usual word in Spain; much of Latin America says boleto. Both are correct in their regions.',
    'Llovía = umuulan noon (setting). Llegamos = dumating kami (event). Me di cuenta de = napagtanto ko. Lo dejé = iniwan ko ito.',
    [
      ['Where were the sisters going?', ['Valencia', 'Madrid', 'Sevilla'], 0, 'Íbamos a Valencia.'],
      [
        'What was the narrator’s problem at the station?',
        ['No money', 'The ticket was missing', 'The train was canceled'],
        1,
        'No tenía mi billete.',
      ],
      [
        'How did they solve it?',
        [
          'They bought new tickets',
          'They used the code in the email',
          'They waited for the next train',
        ],
        1,
        'They showed the code on the phone.',
      ],
    ],
  ),
  story(
    'missing-package',
    'El paquete que no llegó',
    'The package that never arrived',
    'Original customer-service story · Polite requests and solutions',
    'An original workplace story. The customer and company are fictional. Notice the empathy phrases the agent uses.',
    [
      [
        'Mónica esperaba un paquete desde hacía dos semanas.',
        'Mónica had been waiting for a package for two weeks.',
      ],
      [
        'Llamó a la empresa para pedir información.',
        'She called the company to ask for information.',
      ],
      [
        '—Buenas tardes. Habla Diego, ¿en qué puedo ayudarla? —respondió el agente.',
        '“Good afternoon. This is Diego, how can I help you?” the agent replied.',
      ],
      [
        '—Compré unos zapatos hace tres semanas y todavía no llegan —explicó Mónica.',
        '“I bought some shoes three weeks ago and they still haven’t arrived,” Mónica explained.',
      ],
      [
        '—Lamento mucho el inconveniente. Voy a revisar su pedido ahora mismo.',
        '“I’m very sorry for the inconvenience. I’m going to check your order right now.”',
      ],
      ['—Gracias. Mi número de pedido es el 48215.', '“Thank you. My order number is 48215.”'],
      [
        'Diego escribió el número y esperó unos segundos.',
        'Diego typed the number and waited a few seconds.',
      ],
      [
        '—Veo que el paquete salió del almacén, pero se quedó en una oficina de reparto.',
        '“I see the package left the warehouse but stayed at a delivery office.”',
      ],
      [
        '—¿Y qué puede hacer? —preguntó ella, un poco molesta.',
        '“And what can you do?” she asked, a little annoyed.',
      ],
      [
        '—Entiendo su frustración. Puedo enviar un nuevo paquete sin costo.',
        '“I understand your frustration. I can send a new package at no cost.”',
      ],
      ['—¿Cuánto tardará en llegar?', '“How long will it take to arrive?”'],
      [
        '—Llegará en tres o cinco días hábiles. Le enviaré el número de seguimiento por correo.',
        '“It will arrive in three to five business days. I will email you the tracking number.”',
      ],
      [
        '—Perfecto. Muchas gracias por su ayuda —dijo Mónica, más tranquila.',
        '“Perfect. Thank you very much for your help,” said Mónica, calmer.',
      ],
      [
        '—Fue un placer. Gracias por su paciencia —cerró Diego.',
        '“It was a pleasure. Thank you for your patience,” Diego closed.',
      ],
    ],
    [
      ['el pedido', 'the order'],
      ['el inconveniente', 'the inconvenience'],
      ['el almacén', 'the warehouse'],
      ['sin costo', 'at no cost'],
      ['el número de seguimiento', 'the tracking number'],
    ],
    'Show empathy first (Lamento el inconveniente), then act (Voy a revisar), then give a clear next step (Llegará en…).',
    'Paquete and pedido are not the same: paquete is the physical box, pedido is the order in the system.',
    'Lamento mucho el inconveniente = pasensya na po sa abala. Voy a revisar = titingnan ko. Llegará = darating ito (future). Sin costo = libre / walang bayad.',
    [
      [
        'How long had Mónica waited for her package?',
        ['Two days', 'Three weeks', 'One month'],
        1,
        'She bought the shoes hace tres semanas.',
      ],
      [
        'What solution does Diego offer?',
        ['A refund only', 'A new package at no cost', 'A coupon'],
        1,
        'Puedo enviar un nuevo paquete sin costo.',
      ],
      [
        'How will Mónica get the tracking number?',
        ['By phone', 'By mail', 'By email'],
        2,
        'Le enviaré el número de seguimiento por correo.',
      ],
    ],
  ),
  story(
    'lying-shepherd',
    'El pastor mentiroso',
    'The shepherd boy who lied',
    'Aesop fable adaptation · Imperfect, preterite and consequences',
    'A traditional Aesop fable, adapted for learners in Spanish. It is not tied to one region and is known throughout the Spanish-speaking world.',
    [
      [
        'Había una vez un pastor joven que cuidaba ovejas cerca de un pueblo.',
        'Once upon a time there was a young shepherd who looked after sheep near a village.',
      ],
      [
        'Se aburría mucho, porque estaba solo todo el día.',
        'He got very bored, because he was alone all day.',
      ],
      ['Un día pensó en una broma.', 'One day he thought of a joke.'],
      [
        '—¡Lobo! ¡Lobo! ¡Viene un lobo! —gritó con todas sus fuerzas.',
        '“Wolf! Wolf! A wolf is coming!” he shouted at the top of his lungs.',
      ],
      [
        'Los vecinos corrieron al campo con palos y herramientas.',
        'The villagers ran to the field with sticks and tools.',
      ],
      [
        'Pero no había ningún lobo, y el pastor se rió.',
        'But there was no wolf, and the shepherd laughed.',
      ],
      [
        'Los vecinos se enojaron y volvieron al pueblo.',
        'The villagers got angry and went back to the village.',
      ],
      [
        'Al día siguiente, el pastor repitió la broma.',
        'The next day, the shepherd repeated the joke.',
      ],
      [
        'Otra vez los vecinos corrieron, y otra vez no encontraron nada.',
        'Once again the villagers ran, and once again they found nothing.',
      ],
      [
        'Unos días después, un lobo de verdad apareció entre las ovejas.',
        'A few days later, a real wolf appeared among the sheep.',
      ],
      [
        '—¡Ayuda! ¡Un lobo de verdad! —gritó el pastor, desesperado.',
        '“Help! A real wolf!” the shepherd shouted, desperate.',
      ],
      ['Pero esta vez nadie le creyó.', 'But this time nobody believed him.'],
      [
        'El lobo se comió varias ovejas y el pastor lloró.',
        'The wolf ate several sheep and the shepherd cried.',
      ],
      [
        'Aprendió que nadie cree a un mentiroso, ni siquiera cuando dice la verdad.',
        'He learned that nobody believes a liar, even when he tells the truth.',
      ],
    ],
    [
      ['el pastor', 'the shepherd'],
      ['la oveja', 'the sheep'],
      ['la broma', 'the joke / prank'],
      ['el lobo', 'the wolf'],
      ['ni siquiera', 'not even'],
    ],
    'Había una vez is the classic opening of a tale; then imperfect describes and preterite moves the story.',
    'Ni siquiera adds emphasis to a negative idea: ni siquiera cuando dice la verdad.',
    'Había una vez = noong unang panahon. Gritó = sumigaw siya (isang beses). Nadie le creyó = walang naniwala sa kanya. Ni siquiera = kahit pa.',
    [
      [
        'Why does the shepherd shout “wolf”?',
        ['A wolf is attacking', 'He wants to play a joke', 'He needs a doctor'],
        1,
        'Un día pensó en una broma.',
      ],
      [
        'What happens the third time?',
        ['Villagers come right away', 'Nobody believes him', 'The wolf leaves'],
        1,
        'Pero esta vez nadie le creyó.',
      ],
      [
        'What does the shepherd learn?',
        ['Wolves are fast', 'A liar is not believed even when truthful', 'Sheep are valuable'],
        1,
        'Nadie cree a un mentiroso.',
      ],
    ],
  ),
  story(
    'tamales-lady',
    'La señora de los tamales',
    'The tamale lady',
    'Original story · Preterite, imperfect and community',
    'An original story set in a fictional Mexican neighborhood. It shows everyday street-food culture, not a single official tradition.',
    [
      [
        'Cada mañana, antes de que saliera el sol, doña Lupe preparaba tamales en su cocina.',
        'Every morning, before the sun came up, doña Lupe prepared tamales in her kitchen.',
      ],
      [
        'Los vendía en la esquina de la plaza con una olla grande y una sonrisa.',
        'She sold them on the corner of the plaza with a big pot and a smile.',
      ],
      [
        'Los vecinos hacían fila porque sus tamales eran famosos en todo el barrio.',
        'The neighbors lined up because her tamales were famous throughout the neighborhood.',
      ],
      [
        'Un lunes, sin embargo, doña Lupe no apareció.',
        'One Monday, however, doña Lupe did not show up.',
      ],
      [
        '—¿Estará enferma? —preguntó un taxista, preocupado.',
        '“Could she be sick?” asked a taxi driver, worried.',
      ],
      [
        'Entre varios vecinos fueron a su casa y tocaron la puerta.',
        'Several neighbors went to her house and knocked on the door.',
      ],
      [
        'Ella abrió con la voz débil: —Tengo gripe y no pude cocinar.',
        'She opened the door with a weak voice: “I have the flu and couldn’t cook.”',
      ],
      [
        'Los vecinos se miraron y decidieron actuar.',
        'The neighbors looked at each other and decided to act.',
      ],
      [
        'Una señora compró medicinas, un joven trajo sopa y otro limpió la cocina.',
        'One woman bought medicine, a young man brought soup and another cleaned the kitchen.',
      ],
      [
        'Durante una semana, se turnaron para cuidar a doña Lupe.',
        'For a week, they took turns caring for doña Lupe.',
      ],
      [
        'Cuando por fin se recuperó, quiso agradecerles.',
        'When she finally recovered, she wanted to thank them.',
      ],
      [
        'El domingo cocinó cien tamales y los regaló en la plaza.',
        'On Sunday she cooked a hundred tamales and gave them away in the plaza.',
      ],
      [
        '—No me deben nada —dijo un vecino—. Ustedes siempre nos dieron más.',
        '“You owe us nothing,” said a neighbor. “You always gave us more.”',
      ],
      [
        'Esa tarde, la plaza olía a maíz, a chile y a gratitud.',
        'That afternoon, the plaza smelled of corn, chili and gratitude.',
      ],
    ],
    [
      ['el tamal', 'the tamale'],
      ['hacer fila', 'to line up (Latin America)'],
      ['la gripe', 'the flu'],
      ['turnarse', 'to take turns'],
      ['regalar', 'to give away'],
    ],
    'The imperfect shows habit (preparaba, vendía); the preterite shows the Monday event (no apareció, cocinó).',
    'Hacer fila is common in Latin America; in Spain people say hacer cola.',
    'Preparaba = naghahanda siya araw-araw (habit). No pude cocinar = hindi ako nakaluto (nabigo, preterite). Se turnaron = nagpalitan sila. Hacer fila = pumila.',
    [
      [
        'Why did the neighbors go to doña Lupe’s house?',
        ['She did not appear on Monday', 'It was her birthday', 'They needed tamales'],
        0,
        'Un lunes, doña Lupe no apareció.',
      ],
      [
        'What was wrong with her?',
        ['A broken leg', 'The flu', 'No money'],
        1,
        'Tengo gripe y no pude cocinar.',
      ],
      [
        'How did she thank the neighbors?',
        ['She gave away tamales', 'She moved away', 'She sold her pot'],
        0,
        'Cocinó cien tamales y los regaló en la plaza.',
      ],
    ],
  ),
];
