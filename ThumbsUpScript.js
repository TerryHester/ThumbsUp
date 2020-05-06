// set configurable values here
const configuration = {
    
  
    numCommonWords: 3,
    numNouns: 2,
    numVerbs: 2,
    numAdjectives:2,
    numAdverbs: 1,
};

const suffixes = [
    '',
    's',
    'es',
    "'s",
    "er",
    'd',
    'ed',
    'ing',
    "ly",
    "ful",
    "n",
]

const CommonList = [  
  
    "I",    
    "him",     
    "get",
    "have",
    "who",
    "be",
    "he",
    "be",
    "me",
    "do",
    "is",
    "about",
    "before", 
    "have",   
    "this",
    "please",
    "was",
    "in",
    "this",
    "who",
    "can",
    "will",
    "it",
]

   const wordGroups = {
    "me":["me","my","mine","myself"],   
    "is":["is","isn't","will","will be","am"],
    "will":["will","will be","won't","would", "would be","shall"],
    "was":["was","wasn't","were","weren't","would"],
    "be": ["be", "being", "am being", "is being", "will be", "have been", "has been"],
    "have": ["have", "has", "had", "will have", "having had"],
    "it": ["it", "itself", "it's", "its"],
    "this":["this","these","those","that","them","themselves"],
    "he":["he","she","him","her","his","hers","himself", "herself"], 
    "we": ["we", "us", "our","ours","we ourself", "we ourselves"],   
    "and":["and","or","yet","but"],
    "for":["for","instead of","in spite of"],
    "in":["in","into","inside","in turn"],
    "about":["about","concerning","to the point of"],
    "by": ["by", "beside", "along", "between","beneath"],
    "with": ["with","without", "within", "along with"],    
    "get": ["get", "got", "gotten", "gets", "getting",],
    "do": ["do", "did", "doing", "does", "done", "will do", "have done","has done"],
   
    "someone": ["someone", "somebody","somehow","somewhere", "sometimes"],
    "and": ["and", "but", "or", "however", "yet"],
    "to": ["to","too","over", "under", "across","through","throughout", "around","against","among"],
    "in": ["in","into"],
    "on": ["on", "onto"],
    "despite": ["despite","in spite of","instead of"],
    "before": ["before", "after", "following", "during", "previous to", "subsequent to","until"],
    "no one": ["no one", "no body", "nothing"],
    "something": ["something", "anything", "everything", "nothing"],
    "with": ["with", "without", "within"],
    "his": ["his", "hers", "ours", "there's"],
    "I": ["I", "me", "mine","myself"],
    "it": ["it", "it's", "its", "itself"],
    "our": ["our", "ours","ourself", "ourselves"],
    "them": ["them","themself", "themselves"],
    "who": ["who", "whom", "whoever", "whose"],
    "can": ["can", "can't", "could", "couldn't"],
    "would": ["would", "wouldn't","won't","should", "shouldn't","could","couldn't","can't"],
    "to": ["to", "from", "at", "over","under", "through","around","on","upon"],
    "who": ["who", "whom", "whoever", "whose"],

    "with": [ "with", "within","without"],
}



const NounList = [
    
    "buccaneer",
    "coot",
    "didgeridoo",
    "dingy",
    "hoi polloi",
    "hullabaloo",
    "big kahuna",
    "doohickey",
    "gumption",
    "noggin",
    "pantaloons",
    "rapscallion",
    "rumpus",
    "spork",
    "sprocket",
    "whatnot",
    "wombat",
    "aardvark",
    "accordion",
"actor",
"actress",
"adapter",
"advice",
"afternoon",
"aftershave",
"age",
"air",
"airmail",
"airplane",
"airport",
"alarm",
"albatross",
"algebra",
"alley",
"alligator",
"ambulance",
"america",
"amount",
"amusement",
"anatomy",
"animal",
"ankle",
"answer",
"ant",
"antarctica",
"antelope",
"apartment",
"apology",
"apparatus",
"apparel",
"appendix",
"apple",
"appliance",
"aquarius",
"archeology",
"archer",
"argument",
"arithmetic",
"armadillo",
"armchair",
"army",
"arrow",
"art",
"ash",
"ashtray",
"asia",
"asparagus",
"asphalt",
"asterisk",
"astronomy",
"athlete",
"atom",
"attack",
"attempt",
"attention",
"attic",
"attraction",

"aunt",
"Australian",


"avenue",
"babies",
"baboon",
"baby",
"bacon",
"badger",
"bag",
"bagel",
"bagpipe",
"bail",
"bait",
"baker",
"bakery",
"balance",
"ball",
"balloon",
"bamboo",
"banana",
"band",
"bandana",
"banjo",
"banker",

"barber",
"barge",
"baritone",
"barometer",

"baseball",

"basketball",
"bass",
"bassoon",

"bath",
"bathroom",
"bathtub",
"battery",
"battle",
"bay",
"beach",
"bean",
"bear",
"beard",
"beast",
"beat",
"beautician",

"beauty",
"beaver",
"bedroom",
"bee",
"beech",
"beef",
"beer",
"beet",
"beetle",
"beggar",
"beginner",
"begonia",
"behavior",
"belief",
"believe",

"belt",
"bench",
"berry",
"bibliography",
"bicycle",
"bird",

"birthday",

"bite",
"black",
"blader",
"blanket",
"blinker",
"blizzard",

"blood",
"blow",
"blue",
"board",
"boat",
"bobcat",
"body",
"bolt",
"bomb",
"bomber",
"bone",
"bongo",
"bonsai",
"book",
"bookcase",
"booklet",
"boot",
"border",

"bowling",
"box",
"boy",

"bracket",
"brain",
"brake",
"branch",
"brand",
"brandy",
"brass",
"brazil",
"bread",
"break",
"breakfast",
"breath",
"brian",
"brick",
"bridge",
"british",
"broccoli",
"brochure",
"broker",
"bronze",
"brother",
"brother-in-law",


"bubble",
"bucket",


"buffet",
"bugle",
"bulb",
"bulldozer",
"bumper",
"bun",
"burglar",
"bus",
"business",
"butcher",
"butter",
"button",
"buzzard",
"cabbage",
"cabinet",
"cable",
"cactus",
"cafe",
"cake",
"calculator",
"calculus",
"calendar",
"calf",
"call",
"camel",
"camera",
"camp",


"candle",
"cannon",
"canoe",
"canvas",

"captain",

"car",
"caravan",
"carbon",
"card",
"cardboard",

"care",
"carnation",

"carrot",
"cartoon",
"cat",
"catamaran",
"caterpillar",
"catsup",
"cattle",
"cauliflower",

"cave",
"ceiling",



"drizzle",
"drop",
"drug",
"drum",
"dry",
"duck",
"duckling",
"dugout",
"dungeon",
"dust",
"eagle",

"earth",
"earthquake",
"editorial",
"education",

"egg",
"eggnog",
"eggplant",
"Egypt",
"eight",
"elbow",

"elephant",
"elizabeth",
"eclipse",
"employee",
"employer",
"encyclopedi",
"energy",
"engine",
"English",
"enquiry",
"entrance",
"environment",
"epoch",
"epoxy",



"evening",
"examination",
"example",


"fang",
"farm",
"farmer",
"fat",
"father",
"mother-in-law",
"faucet",
"fear",
"feast",






"feet",
"felony",
"female",
"fender",
"ferry",

"fertilizer",
"fiber",
"fiberglass",

'feisty',




"gallon",
"game",
"garage",
"garden",
"garlic",
"gas",
"gasoline",


"gauge",
"gazelle",


"geese",
"geography",

"geometry",
"george",
"geranium",

"ghost",
"giant",
"giraffe",
"girdle",
"girl",
"glass",
"glider",
"gliding",
"glove",
"glue",
"goat",
"gold",
"goldfish",
"golf",
"gondola",
"gong",
"good-bye",
"goose",
"gorilla",
"gosling",


"halibut",
"hallway",
"hamburger",

"hamster",

"handball",



"hardware",
"harmonica",
"harmony",
"harp",
"hat",
"hate",
"hawk",
"head",

"headline",
"health",

"heart",

"heaven",

"helicopter",

"insect",

"instrument",

"insurance",
"interactive",
"interest",
"internet",

"intestine",
"invention",

"invoice",


"island",

"italian",

"jaguar",
"jail",
"jam",
"james",
"January",
"japan",
"japanese",
"jar",
"jasmine",
"jason",
"jaw",
"jeans",


"jelly",
"jellyfish",

"jet",
"jewel",
"jogging",
"John",
"joke",

"journey",
"judge",

"juice",



"kayak",
"kendo",
"kenya",
"ketchup",
"kettle",


"keyboard",
"kick",
"kidney",
"Kimberly",
"kiss",
"kite",
"kitten",
"knickers",
"knife",
"knight",
"ladybug",
"landmine",
"language",
"lasagna",
"latex",
"laugh",
"laundry",

"law",
"lawyer",
"leg",
"legal",
"lemonade",

"mailman",
"makeup",




"manager",
"mandolin",
"manicure",

"maple",
"marble",
"married",
"napkin",
"narcissus",
"nation",
"neck",
"need",
"needle",
"neon",
"nepal",
"nephew",
"nerve",
"nest",
"net",
"news",
"newsstand",
"nickel",
"night",
"noodle",
"norwegian",
"nose",

"notebook",
"novel",

"oatmeal",
"objective",
"oboe",
"observation",
"occupation",
"ocean",
"oil",
"olive",
"onion",
"open",
"opera",
"operation",

"package",
"pail",
"paint",
"pair",



"pamphlet",

"pancake",
"pancreas",

"panda",
"pansy",
"pantry",
"pants",
"paper",
"paperback",
"parade",
"parrot",
"particle",
"partridge",
"party",
"quiet",


"quiver",
"quotation",
"rabbit",
"radiator",
"radio",
"radish",


"railway",

"rainbow",
"raincoat",
"rainstorm",


"random",


"sailboat",
"sailor",
"salad",

"sale",
"salesman",
"salmon",

"Samurai",


"sandwich",
"santa",

"sardine",
"Saturday",

"sausage",

"saxophone",


"stew",
"stick",
"stinger",
"stitch",
"stock",
"stocking",
"stomach",
"stone",
"stool",
"stop",
"store",
"storm",

"stove",
"strang",

"stream",
"street",
"streetcar",
"stretch",
"string",
"structure",
"study",
"submarine",
"substance",
"subway",
"success",

"suede",
"sugar",

"Sunday",
"sunflower",
"sunshine",
"supermarket",
"surfboard",
"tax",
"taxi",
"taxicab",
"tea",
"teacher",
"team",
"technician",
"teeth",
"television",
"temperature",
"vacuum",
"valley",
"vegetable",
"vegetarian",


"velvet",
"view",
"vinyl",
"viola",
"violet",
"violin",
"vision",
"visitor",
"voice",
"volcano",
"volleyball",
"voyage",
"vulture",

"waiter",
"waitress",
"walk",
"wall",
"wallaby",
"wallet",
"walrus",
"war",
"warm",
"wash",
"washer",
"wasp",

"watch",

"water",
"waterfall",

"wax",
"wealth",
"weasel",

"yacht",
"yak",

"yard",
"yarn",
"year",
"yellow",
"yogurt",

"Yugoslavian",
"zebra",


"zipper",
"zone",
"zoo",





]

const VerbList = [

"bamboozled",
"doodle",
"finagle",
"hornswoggle",
"kerplunk",
"squeegee",
"scootch",
"waddle",
"burst",
"surround",
"stab",
"return",
"medicate",
"blindside",
"boogie",
"flap",
"fight",
"trip",
"swat",
"pillage",
"frustrate",
"impair",
"repair",
"explore",
"explode",
"impress",
"implore",
"embarras",
"limp",
"harass",
"trap",
"snoop",
"explode",
"sketch",
"scatter",
"challenge",
"fascinate",
"fight",
"bury",
"splatter",
"smack",
"peddle",
"balance",
"boggle",
"poke",
"critique",
"fear",
"initiate",
"line up",
"run over",
"schedule",
"cook",
"imprison",
"underestimate",
"cajole",
"soft suds",
"butter up",
"sweet-talk",
"shred",
"dispute",
"echo",
"mimic",
"berate",

]

const AdjectiveList = [

"cantankerous",
"cheeky",
"cheesy",
"gunky",
"cooky",
"lackadaisical",
"loopy",
"man cave",
"monkey",
"mugwump",
"underrated",
"persnickety",
"curly headed",
"micro-brained",
"namby-pamby",
"wonky",
"hairless",
"jumbo",
"wild",
"domesticated",
"abnormal",
"medicated",
"cocky",
"massive",
"disrespect",
"flemsy",
"impossible",
"impressive",
"flirtatious",
"hilarious",
"hot",
"very tactful",
"wishy washy",
"reckless",
"bearded",
"wonderful",
"slimy",
"insanely creepy",
"self-centered",
"sticky",
"fluffy",
"frozen",
"unholy",
"filthy",
"frosty",

"harsh",
"frisky",
"greedy",
"crawly",
"insane",
"hideous",
"ungodly",
"abusive",
"drunken",
"hateful",
"idiotic",
"twisted",
"useless",
"yapping",
"magical",
"indecent",
"arrogant",
"confused",
"flirting",
"hysterical",
"insecure",
"maniacal",
"sickened",
"slippery",
"stubborn",
"tripping",
"infamous",
"sinister",
"costumed",
"cowardly",
"haunting",
"startled",

"demanding",
"shivering",
"offensive",
"monotonous",
"startling",
"disgusting",
"slap happy",
"disturbing",
"adulterous",
"exhilarating",
"frustrated",
"exhausting",
"higly influential",
"bull headed",
"hyperactive",
"infuriating",
"exceptional",
"pea-brained",
"territorial",
"underhanded",
"zombie like",
"mischievous",
"free-loading",
"scater-brained",
"house-broken",
"no-good",
"cruel-hearted",
"misunderstood",
"narrow-minded",
"self-absorbed",
"fiercely-loyal",
"out-of-control",
"Canadian",
"flimsey",
"incidious",
"old",
"bashful",
"elementary",
"bountiful",
"shady",
"groggy",
]

// adverbs
const AdverbList = [
"festivly",
"energeticaly",
"hereafter",
"indubitably",
"bonkers",
"sadly",
"fevorishly",
"painstakingly",
"presumptiously",
"hardly",
"effortlessly",
"briskly",
"kindly",
"elegantly",
"empathically",

"deliberately",
"doubtfully",
"easily",
"elegantly",
"enormously",
"enthusiastically",
"equally",
"eventually",
"exactly",
"faithfully",
"fiercely",
"fondly",
"fortunately",
"frantically",
"gladly",
"gracefully",
"happily",
"hastily",
"hourly",
"solemnly",
"speedily",
"stealthily",
"sternly",
"suddenly",
"suspiciously",
"swiftly",
"tenderly",
"thoughtfully",

]





let hand = [];

let sentence = [];

let score = 0;
let selectedSentenceWord = null;

function RenderSentence() {
    ClearElements('sentence');
    sentence.forEach(word => {
        let wordToDisplay = word.name;
        if (word.alternateId !== null) {
            let alternateWordList = suffixes;
            wordToDisplay = word.name + alternateWordList[word.alternateId];
            if (wordGroups[word.name] != undefined) {
                // it's in the special word group list, so use that list instead
                alternateWordList = wordGroups[word.name];
                wordToDisplay = alternateWordList[word.alternateId];
            }
        }

        AddElement(
            wordToDisplay,
            'sentence',
            () => HandleSentenceWordClick(word.id),
            `sentence-word ${(selectedSentenceWord !== null && word.id === selectedSentenceWord) ? 'sentence-word-selected' : ''}`,
            'sentence-word-' + word.id
        );
    });

    ClearElements('alternate-options');
    if (sentence.length > 0 && selectedSentenceWord !== null) {
        const selectedWord = sentence.filter(x => x.id === selectedSentenceWord)[0];
        let alternateOptions = [];
        if (wordGroups[selectedWord.name]) {
            wordGroups[selectedWord.name].forEach(x => alternateOptions.push(x));
        }
        else {
            suffixes.forEach(x => alternateOptions.push(x));
        }

        for (let i = 0; i < alternateOptions.length; i++) {
            const option = alternateOptions[i];
            AddElement(
                (option === '' ? '[none]' : option),
                'alternate-options',
                () => SetAlternateId(selectedWord.id, i),
                'alternate-word',
                'alternate-word-option-' + i);
        }
    }

    UpdateScore(sentence.filter(x => x.id !== null).length);
}

function RenderHand() {
    ClearElements('hand');
    hand.forEach(word => {

        AddElement(
            word.name,
            'hand',
            (word.isUsed ? undefined : () => AddToSentence(word.id)),
            'hand-word ' + (word.isUsed ? 'disabled' : ''),
            'hand-word-' + word.id
        );
    });
}

function BackspaceSentence() {
    // remove last word from sentence
    const lastWord = sentence.pop();

    // find word in hand and remove disabled class
    for (let i = 0; i < hand.length; i++) {
        if (lastWord.id === hand[i].id) {
            hand[i].isUsed = false;
            break;
        }
    }

    // if backspacing the selected word, remove selection
    if (lastWord.id === selectedSentenceWord) {
        selectedSentenceWord = null;
    }

    RenderSentence();
    RenderHand();
}

function SetAlternateId(sentenceItemId, alternateId) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].id === sentenceItemId) {
            sentence[i].alternateId = alternateId;
        }
    }
    RenderSentence();
}

function GetRandomFromList(list) {

    return list[Math.floor(Math.random() * list.length)];
}

function AddElement(text, parentElementId, onClickFunction, className, id) {
    var node = document.createElement("DIV");
    var textnode = document.createTextNode(text);
    node.onclick = onClickFunction;
    node.id = id;
    if (className !== undefined) {
        className.trim().split(' ').forEach(x => node.classList.add(x));
    }
    node.appendChild(textnode);
    document.getElementById(parentElementId).appendChild(node);
}

function AddToWordList(text, index) {
    hand.push({ id: index, name: text, isUsed: false });
}

function AddToSentence(id) {
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].id === id) {
            // mark as used
            hand[i].isUsed = true;
            // add element to sentence
            sentence.push({
                id: id,
                name: hand[i].name,
                alternateId: 0
            });
            break;
        }
    }
    SelectSentenceWord(id);
    RenderSentence();
    RenderHand();
}

function HandleSentenceWordClick(id) {
    if (id !== null) {
        SelectSentenceWord(id);
        RenderSentence();
    }
}

function SelectSentenceWord(id) {
    selectedSentenceWord = id;
}

function GenerateHand() {
    // remove any existing children nodes (previous words)

    ClearElements('hand');
    ClearElements('sentence');
    ClearElements('alternate-options');

    score = 0;

    const scoreElement = document.getElementById('score');
    // delete previous score
    while (scoreElement.firstChild) {
        scoreElement.removeChild(scoreElement.firstChild);
    }

    sentence = [];

    let listOfWords = [];
    hand = [];

   // common words
    for (let i = 0; i < configuration.numCommonWords; i++) {
        AddRandomWordToHand(listOfWords, CommonList);
    }
    // nouns
    for (let i = 0; i < configuration.numNouns; i++) {
        AddRandomWordToHand(listOfWords, NounList);
    }

    // verbs
    for (let i = 0; i < configuration.numVerbs; i++) {
        AddRandomWordToHand(listOfWords, VerbList);
    }
    // adjectives
    for (let i = 0; i < configuration.numAdjectives; i++) {
        AddRandomWordToHand(listOfWords, AdjectiveList);
    }

    // adverbs
    for (let i = 0; i < configuration.numAdverbs; i++) {
        AddRandomWordToHand(listOfWords, AdverbList);
    }
    
    listOfWords.forEach((x, i) => AddToWordList(x, i));
    RenderHand();
}

function AddRandomWordToHand(listToAddTo, listToRetrieveFrom) {
    let randomWord;
    while (listToAddTo.includes(randomWord) || randomWord === undefined) {
        randomWord = GetRandomFromList(listToRetrieveFrom);
    }
    listToAddTo.push(randomWord);
}

function HandleSentenceClearedButton() {
    hand.forEach(x => x.isUsed = false);

    sentence = [];
    RenderSentence();
    RenderHand();

}

function UpdateScore(numWords) {
    // calculate score
    score = 0;
    for (let i = 0; i < numWords; i++) {
        score = score + i + 1;
    }
    const scoreElement = document.getElementById('score');
    // delete previous score
    while (scoreElement.firstChild) {
        scoreElement.removeChild(scoreElement.firstChild);
    }
    // add new score
    var textElement = document.createTextNode("Score: " + score);
    scoreElement.appendChild(textElement);
}

function ClearElements(parentId) {
    // clear child elements of a node
    const node = document.getElementById(parentId)
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function AddSpecialCharacter(specialCharacter) {
    sentence.push({
        id: null,
        name: specialCharacter,
        alternateId: null
    });
    RenderSentence();
}

function SaveSentence() {
    const sentenceList = [];
    sentence.forEach(x => sentenceList.push(x.name));
    const sentenceString = sentenceList.join(' ');
    AddElement(sentenceString, 'sentences-saved');
}



