// Adjective list: category | masculine singular | English | Tagalog | flags.
// Flags: e = usually used with estar, ng = no -ísimo superlative, inv = invariable.
const TABLE = `
people|alto|tall|matangkad|
people|bajo|short (height)|pandak|
people|delgado|thin|payat|
people|gordo|fat; plump|mataba|
people|fuerte|strong|malakas|
people|débil|weak|mahina|
people|joven|young|bata|
people|viejo|old|matanda|
people|guapo|good-looking|gwapo|
people|bonito|pretty; nice|maganda|
people|hermoso|beautiful|marikit|
people|feo|ugly|pangit|
people|simpático|nice; likable|kaibig-ibig|
people|antipático|unpleasant|hindi kaaya-aya|
people|amable|kind|magalang; mabait|
people|agradable|pleasant|kaaya-aya|
people|educado|polite|magalang|
people|maleducado|rude|bastos|
people|honesto|honest|matapat|
people|sincero|sincere|taos-puso|
people|generoso|generous|mapagbigay|
people|egoísta|selfish|makasarili|
people|tacaño|stingy|kuripot|
people|trabajador|hardworking|masipag|
people|perezoso|lazy|tamad|
people|inteligente|intelligent|matalino|
people|listo|clever|matalino|
people|tonto|silly; foolish|tanga|
people|torpe|clumsy|lampa|
people|paciente|patient|matiyaga|
people|impaciente|impatient|mainipin|
people|valiente|brave|matapang|
people|cobarde|cowardly|duwag|
people|tímido|shy|mahiyain|
people|sociable|sociable|palakaibigan|
people|callado|quiet (person)|tahimik|
people|hablador|talkative|madaldal|
people|gracioso|funny|nakakatawa|
people|divertido|fun|masaya kasama|
people|serio|serious|seryoso|
people|alegre|cheerful|masigla|
people|optimista|optimistic|positibo|
people|pesimista|pessimistic|negatibo|
people|realista|realistic|makatotohanan|
people|creativo|creative|malikhain|
people|curioso|curious|mausisa|
people|responsable|responsible|responsable|
people|organizado|organized|maayos|
people|desordenado|messy|magulo|
people|puntual|punctual|nasa oras|
people|tranquilo|calm|kalmado|
people|fiel|loyal|tapat|
people|humilde|humble|mapagpakumbaba|
people|orgulloso|proud|mapagmataas|
people|rico|rich|mayaman|
people|pobre|poor|mahirap|
people|famoso|famous|sikat|
people|conocido|well-known|kilala|
people|desconocido|unknown|hindi kilala|
people|casado|married|may-asawa|e,ng
people|soltero|single|walang-asawa|e,ng
people|embarazada|pregnant|buntis|e,ng,inv
feelings|feliz|happy|masaya|e
feelings|triste|sad|malungkot|e
feelings|contento|pleased|nasisiyahan|e
feelings|enojado|angry (Latin America)|galit|e
feelings|furioso|furious|galit na galit|e
feelings|molesto|annoyed|naiinis|e
feelings|aburrido|bored|naiinip|e
feelings|cansado|tired|pagod|e
feelings|agotado|exhausted|bugbog sa pagod|e
feelings|estresado|stressed|stressed|e
feelings|preocupado|worried|nag-aalala|e
feelings|asustado|scared|natatakot|e
feelings|sorprendido|surprised|nagulat|e
feelings|emocionado|excited|nasasabik|e
feelings|ilusionado|hopeful|umaasa|e
feelings|avergonzado|ashamed; embarrassed|nahihiya|e
feelings|celoso|jealous|selosa|e
feelings|solo|alone|nag-iisa|e
feelings|relajado|relaxed|relaks|e
feelings|enfermo|sick|may sakit|e
feelings|sano|healthy|malusog|
feelings|herido|injured|sugatan|e
feelings|ocupado|busy|abala|e
feelings|libre|free (available)|bakante; malaya|e
feelings|listo|ready|handa|e
feelings|seguro|sure; safe|sigurado; ligtas|
feelings|lleno|full|puno|e
feelings|vacío|empty|walang laman|e
feelings|abierto|open|bukas|e
feelings|cerrado|closed|sarado|e
feelings|roto|broken|sira|e,ng
feelings|perdido|lost|nawala|e
feelings|despierto|awake|gising|e
feelings|dormido|asleep|tulog|e
feelings|sentado|seated|nakaupo|e,ng
feelings|parado|standing|nakatayo|e,ng
feelings|muerto|dead|patay|e,ng
feelings|vivo|alive|buhay|
feelings|borracho|drunk|lasing|e
feelings|hambriento|hungry|gutom|
feelings|sediento|thirsty|uhaw|
feelings|satisfecho|satisfied|kuntento|e,ng
feelings|decepcionado|disappointed|bigo|e
feelings|confundido|confused|litó|e
feelings|nervioso|nervous|kinakabahan|e
size|grande|big|malaki|
size|pequeño|small|maliit|
size|enorme|huge|napakalaki|
size|gigante|giant|higante|
size|minúsculo|tiny|napakaliit|
size|largo|long|mahaba|
size|corto|short (length)|maikli|
size|ancho|wide|malapad|
size|estrecho|narrow|makipot|
size|profundo|deep|malalim|
size|grueso|thick|makapal|
size|pesado|heavy|mabigat|
size|ligero|light (weight)|magaan|
size|mucho|a lot of; much|marami|
size|poco|little; few|kaunti|
size|bastante|enough; quite a lot|sapat|
size|suficiente|sufficient|sapat|
size|demasiado|too much|sobra|
size|completo|complete|kumpleto|
size|entero|whole|buo|
size|único|unique; only|natatangi|ng
size|otro|other; another|iba|ng
size|mismo|same|pareho|ng
size|propio|own|sarili|ng
color|rojo|red|pula|
color|azul|blue|asul|
color|verde|green|berde|
color|amarillo|yellow|dilaw|
color|negro|black|itim|
color|blanco|white|puti|
color|gris|gray|abo|
color|marrón|brown|kayumanggi|
color|naranja|orange|kahel|
color|rosa|pink|rosas|
color|morado|purple|lila|
color|dorado|golden|ginintuan|
color|plateado|silver|pilak|
color|claro|light (color)|maliwanag|
color|oscuro|dark|madilim|
color|colorido|colorful|makulay|
color|brillante|bright|makinang|
quality|bueno|good|mabuti|
quality|malo|bad|masama|
quality|mejor|better|mas mabuti|ng
quality|peor|worse|mas masama|ng
quality|excelente|excellent|napakahusay|
quality|perfecto|perfect|perpekto|
quality|fantástico|fantastic|kamangha-mangha|
quality|increíble|incredible|hindi kapani-paniwala|
quality|terrible|terrible|nakakatakot|
quality|horrible|horrible|kakila-kilabot|
quality|maravilloso|wonderful|kahanga-hanga|
quality|estupendo|great|napakaganda|
quality|regular|so-so; regular|katamtaman|ng
quality|normal|normal|normal|
quality|especial|special|espesyal|
quality|importante|important|mahalaga|
quality|necesario|necessary|kailangan|
quality|útil|useful|kapaki-pakinabang|
quality|inútil|useless|walang silbi|
quality|fácil|easy|madali|
quality|difícil|difficult|mahirap|
quality|simple|simple|simple|
quality|complicado|complicated|masalimuot|
quality|posible|possible|posible|
quality|imposible|impossible|imposible|
quality|probable|probable|malamang|
quality|peligroso|dangerous|mapanganib|
quality|cómodo|comfortable|komportable|
quality|incómodo|uncomfortable|hindi komportable|
quality|práctico|practical|praktikal|
quality|interesante|interesting|kawili-wili|
quality|correcto|correct|tama|
quality|incorrecto|incorrect|mali|
quality|falso|false|hindi totoo|
quality|verdadero|true|totoo|
quality|cierto|true; certain|totoo|
quality|claro|clear|malinaw|
quality|confuso|confusing|nakalilito|
quality|obvio|obvious|halata|
quality|raro|strange; rare|kakaiba|
quality|extraño|strange|kakaiba|
quality|común|common|karaniwan|
quality|frecuente|frequent|madalas|
quality|moderno|modern|moderno|
quality|antiguo|ancient; old|sinauna|
quality|nuevo|new|bago|
quality|actual|current|kasalukuyan|
quality|reciente|recent|kamakailan|
quality|justo|fair|makatarungan|
quality|injusto|unfair|hindi makatarungan|
quality|gratis|free (no cost)|libre; walang bayad|inv,ng
quality|caro|expensive|mahal|
quality|barato|cheap|mura|
quality|económico|economical|matipid|
quality|costoso|costly|magastos|
quality|lujoso|luxurious|marangya|
quality|limpio|clean|malinis|
quality|sucio|dirty|marumi|
quality|fresco|fresh|sariwa|
quality|seco|dry|tuyo|
quality|mojado|wet|basa|e
quality|húmedo|humid|mahalumigmig|
quality|duro|hard|matigas|
quality|blando|soft (not hard)|malambot|
quality|suave|smooth; gentle|makinis; banayad|
quality|áspero|rough|magaspang|
quality|liso|smooth; flat|patag|
quality|afilado|sharp|matalim|
quality|sencillo|plain; simple|payak|
quality|diferente|different|iba|
quality|igual|equal; the same|pareho|ng
quality|parecido|similar|magkatulad|
quality|contrario|opposite|kabaligtaran|
quality|natural|natural|natural|
quality|real|real|totoo|
quality|digital|digital|digital|
quality|técnico|technical|teknikal|
quality|electrónico|electronic|elektroniko|
quality|disponible|available|available|
quality|pendiente|pending|nakabinbin|ng
quality|pagado|paid|bayad|ng
quality|obligatorio|mandatory|sapilitan|ng
quality|opcional|optional|opsyonal|ng
quality|flexible|flexible|flexible|
quality|humano|human|tao|ng
quality|superior|superior|nakahihigit|ng
quality|inferior|inferior|mababa|ng
quality|máximo|maximum|pinakamataas|ng
quality|mínimo|minimum|pinakamababa|ng
quality|medio|average; half|katamtaman|ng
quality|mayor|bigger; older|mas malaki; mas matanda|ng
quality|menor|smaller; younger|mas maliit; mas bata|ng
taste|dulce|sweet|matamis|
taste|salado|salty|maalat|
taste|amargo|bitter|mapait|
taste|ácido|sour|maasim|
taste|picante|spicy|maanghang|
taste|sabroso|tasty|masarap|
taste|delicioso|delicious|napakasarap|
taste|crudo|raw|hilaw|
taste|cocido|cooked|luto|ng
taste|frito|fried|prito|ng
taste|asado|roasted|inihaw|ng
taste|caliente|hot|mainit|
taste|frío|cold|malamig|
taste|tibio|lukewarm|maligamgam|
taste|templado|mild|katamtaman|
taste|helado|icy; frozen|nagyeyelo|
taste|congelado|frozen|frozen|ng
taste|maduro|ripe|hinog|
taste|podrido|rotten|bulok|
weather|soleado|sunny|maaraw|
weather|nublado|cloudy|maulap|e
weather|lluvioso|rainy|maulan|
weather|ventoso|windy|mahangin|
weather|nevado|snowy|may niyebe|
weather|tormentoso|stormy|bagyuhin|
weather|caluroso|hot (weather)|mainit|
place|cercano|nearby|malapit|
place|lejano|distant|malayo|
place|próximo|next; nearby|darating; malapit|
place|vecino|neighboring|karatig|
place|local|local|lokal|
place|nacional|national|pambansa|
place|internacional|international|pandaigdig|
place|extranjero|foreign|dayuhan|
place|urbano|urban|urbano|
place|rural|rural|rural|
place|central|central|sentral|
place|ruidoso|noisy|maingay|
place|silencioso|quiet|tahimik|
place|iluminado|lit|maliwanag|e
time|tardío|late|huli|
time|diario|daily|araw-araw|
time|semanal|weekly|lingguhan|
time|mensual|monthly|buwanan|
time|anual|annual|taunan|
time|eterno|eternal|walang hanggan|
time|breve|brief|maikli|
time|rápido|fast|mabilis|
time|lento|slow|mabagal|
time|veloz|swift|matulin|
time|pasado|past|nakaraan|ng
time|futuro|future|hinaharap|ng
time|anterior|previous|nauna|ng
time|siguiente|next|susunod|ng
time|último|last|huli|ng
time|primero|first|una|ng
time|segundo|second|ikalawa|ng
time|tercero|third|ikatlo|ng
time|final|final|pangwakas|ng
time|inicial|initial|paunang|ng
other|principal|main|pangunahin|ng
other|general|general|pangkalahatan|
other|particular|particular|partikular|
other|público|public|pampubliko|
other|privado|private|pribado|
other|personal|personal|personal|
other|profesional|professional|propesyonal|
other|oficial|official|opisyal|
other|legal|legal|legal|
other|ilegal|illegal|ilegal|
other|virtual|virtual|birtwal|
other|móvil|mobile|mobile|
other|imaginario|imaginary|kathang-isip|
other|opuesto|opposite|kabaligtaran|ng
other|semejante|similar|kahawig|
other|ajeno|someone else's|pag-aari ng iba|ng
nationality|español|Spanish|Espanyol|
nationality|mexicano|Mexican|Mehikano|
nationality|filipino|Filipino|Pilipino|
nationality|argentino|Argentine|Argentino|
nationality|colombiano|Colombian|Kolombyano|
nationality|peruano|Peruvian|Peruano|
nationality|chileno|Chilean|Chileno|
nationality|venezolano|Venezuelan|Benesolano|
nationality|cubano|Cuban|Kubano|
nationality|americano|American|Amerikano|
nationality|estadounidense|from the United States|taga-Estados Unidos|
nationality|canadiense|Canadian|Kanadyano|
nationality|inglés|English|Ingles|
nationality|francés|French|Pranses|
nationality|alemán|German|Aleman|
nationality|italiano|Italian|Italyano|
nationality|portugués|Portuguese|Portuges|
nationality|chino|Chinese|Intsik; Tsino|
nationality|japonés|Japanese|Hapon|
nationality|coreano|Korean|Koreano|
nationality|indio|Indian|Indiyano|
nationality|ruso|Russian|Ruso|
nationality|árabe|Arab|Arabe|
nationality|africano|African|Aprikano|
nationality|europeo|European|Europeo|
nationality|asiático|Asian|Asyano|
nationality|latinoamericano|Latin American|Latinoamerikano|
nationality|hispano|Hispanic|Hispano|
nationality|bilingüe|bilingual|bilingguwal|
`;

export const ADJECTIVE_CATEGORIES = {
  people: 'People and character',
  feelings: 'Feelings and states',
  size: 'Size and quantity',
  color: 'Colors',
  quality: 'Quality and description',
  taste: 'Food and temperature',
  weather: 'Weather',
  place: 'Place',
  time: 'Time and order',
  other: 'Other useful adjectives',
  nationality: 'Nationalities',
};

const seen = new Set();
export const adjectiveList = TABLE.trim()
  .split('\n')
  .map((line) => line.split('|'))
  .map(([category, word, english, tagalog, flags]) => ({
    category,
    word,
    english,
    tagalog,
    flags: [
      ...new Set([
        ...(flags ? flags.split(',') : []),
        ...(category === 'nationality' ? ['ng'] : []),
      ]),
    ],
  }))
  .filter((a) => (seen.has(a.word) ? false : seen.add(a.word)));
