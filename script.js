// set configurable values here
const configuration = {
    numNouns: 2,
    numVerbs: 2,
    numPronouns: 2,
    numAdjectives: 2,
    numCommonWords: 2,
    numPrepositions: 2
};

const suffixes = [
    '',
    's',
    'ed',
    'ing'
]

const PronounList = [
    'all',
    'any',
    'anyone',
    'anything',
    'each',
    'everybody',
    'everyone',
    'everything',
    'he',
    'her',
    'hers',
    'him',
    'his',
    'I',
    'it',
    'its',
    'itself',
    'many',
    'me',
    'mine',
    'most',
    'my',
    'myself',
    'nobody',
    'none',
    'nothing',
    'one',
    'our',
    'ours',
    'ourselves',
    'several',
    'she',
    'some',
    'someone',
    'something',
    'that',
    'their',
    'theirs',
    'them',
    'there',
    'these',
    'they',
    'this',
    'those',
    'us',
    'we',
    'who',
    'whoever',
    'whose',
    'you',
    'your',
    'yours',
    'yourself',
];

const NounList = [
    'debt',
    'drawer',
    'employment',
    'strategy',
    'guest',
    'guitar',
    'disaster',
    'software',
    'mall',
    'pie',
    'speaker',
    'permission',
    'salad',
    'bathroom',
    'equipment',
    'goal',
    'uncle',
    'tea',
    'video',
    'dad',
    'homework',
    'personality',
    'birthday',
    'university',
    'solution',
    'pizza',
    'clothes',
    'poem',
    'time',
    'year',
    'people',
    'way',
    'day',
    'man',
    'thing',
    'woman',
    'life',
    'child',
    'world',
    'school',
    'state',
    'family',
    'student',
    'group',
    'country',
    'problem',
    'hand',
    'part',
    'place',
    'case',
    'week',
    'company',
    'system',
    'program',
    'question',
    'work',
    'government',
    'number',
    'night',
    'point',
    'home',
    'water',
    'room',
    'mother',
    'area',
    'money',
    'story',
    'fact',
    'month',
    'lot',
    'right',
    'study',
    'book',
    'eye',
    'job',
    'word',
    'business',
    'issue',
    'side',
    'kind',
    'head',
    'house',
    'service',
    'friend',
    'father',
    'power',
    'hour',
    'game',
    'line',
    'end',
    'member',
    'law',
    'car',
    'city',
    'community',
    'name',
    'president',
    'team',
    'minute',
    'idea',
    'kid',
    'body',
    'information',
    'back',
    'parent',
    'face',
    'others',
    'level',
    'office',
    'door',
    'health',
    'person',
    'art',
    'war',
    'history',
    'party',
    'result',
    'change',
    'morning',
    'reason',
    'research',
    'girl',
    'guy',
    'moment',
    'air',
    'teacher',
    'force',
    'education',
];

const VerbList = [
    'be',
    'have',
    'do',
    'say',
    'go',
    'get',
    'make',
    'know',
    'think',
    'take',
    'see',
    'come',
    'want',
    'look',
    'use',
    'find',
    'give',
    'tell',
    'work',
    'call',
    'try',
    'ask',
    'need',
    'feel',
    'become',
    'leave',
    'put',
    'mean',
    'keep',
    'let',
    'begin',
    'seem',
    'help',
    'talk',
    'turn',
    'start',
    'show',
    'hear',
    'play',
    'run',
    'move',
    'like',
    'live',
    'believe',
    'hold',
    'bring',
    'happen',
    'write',
    'provide',
    'sit',
    'stand',
    'lose',
    'pay',
    'meet',
    'include',
    'continue',
    'set',
    'learn',
    'change',
    'lead',
    'understand',
    'watch',
    'follow',
    'stop',
    'create',
    'speak',
    'read',
    'allow',
    'add',
    'spend',
    'grow',
    'open',
    'walk',
    'win',
    'offer',
    'remember',
    'love',
    'consider',
    'appear',
    'buy',
    'wait',
    'serve',
    'die',
    'send',
    'expect',
    'build',
    'stay',
    'fall',
    'cut',
    'reach',
    'kill',
    'remain',
    'suggest',
    'raise',
    'pass',
    'sell',
    'require',
    'report',
    'decide',
    'pull'
]

const AdjectiveList = [
    'able',
    'bad',
    'best',
    'better',
    'big',
    'black',
    'certain',
    'clear',
    'different',
    'early',
    'easy',
    'economic',
    'federal',
    'free',
    'full',
    'good',
    'great',
    'hard',
    'high',
    'human',
    'important',
    'international',
    'large',
    'late',
    'little',
    'local',
    'long',
    'low',
    'major',
    'military',
    'national',
    'new',
    'old',
    'only',
    'other',
    'political',
    'possible',
    'public',
    'real',
    'recent',
    'right',
    'small',
    'social',
    'special',
    'strong',
    'sure',
    'true',
    'white',
    'whole',
    'young'
]

const CommonList = [
    'the',
    'be',
    'are',
    'is',
    'am',
    'to',
    'of',
    'a',
    'in',
    'that',
    'have',
    'I',
    'it',
    'for',
    'not',
    'on',
    'with',
    'he',
    'as',
    'do',
    'at',
    'but',
    'his',
    'by',
    'will',
    'was'
]

const PrepositionList = [
    'of',
    'with',
    'at',
    'from',
    'into',
    'during',
    'including',
    'until',
    'against',
    'among',
    'throughout',
    'despite',
    'towards',
    'upon',
    'concerning',
    'to',
    'in',
    'for',
    'on',
    'by',
    'about',
    'through',
    'over',
    'before',
    'between',
    'after',
    'since',
    'without',
    'under',
    'within',
    'along',
    'following',
    'across',
    'behind',
    'beyond',
    'except',
    'but',
    'up',
    'out',
    'around',
    'down',
    'off',
    'above',
    'near',
]

let hand = [];

let sentence = [];

function renderSentence() {
    ClearSentenceElements();
    sentence.forEach(word => {
        AddElement(word.name + suffixes[word.suffix], 'sentence', () => IncrementSuffix(word.id), 'sentence-word', 'sentence-word-' + word.id);    
    });
}

function IncrementSuffix(id) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].id === id) {
            sentence[i].suffix++;
            if (sentence[i].suffix >= suffixes.length) {
                sentence[i].suffix = 0;
            }
        }
    }
    renderSentence();
}

function GetRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function AddElement(text, parentElementId, onClickFunction, className, id) {
    var node = document.createElement("DIV");
    var textnode = document.createTextNode(text);
    node.onclick = onClickFunction;
    node.id = id;
    node.classList.add(className);
    node.appendChild(textnode);
    document.getElementById(parentElementId).appendChild(node);
}

function AddToWordList(text, parentElementId, index) {
    hand.push({ id: index, name: text, isUsed: false });
    AddElement(text, parentElementId, () => AddToSentence(index), 'hand-word', 'hand-word-' + index);
}

function AddToSentence(id) {
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].id === id) {
            // mark as used
            hand[i].isUsed = true;
            // add element to sentence
            console.log('adding sentence')
            sentence.push({ id: id, name: hand[i].name, suffix: 0 });
            // disable clicked button
            const node = document.getElementById('hand-word-' + id);
            node.classList.add("disabled");

            break;
        }
    }
    renderSentence();
    console.log(sentence);
}

function GenerateHand() {
    // remove any existing children nodes (previous words)
    const handElementId = 'hand';
    const node = document.getElementById(handElementId)
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }

    let listOfWords = [];
    hand = [];

    // common words
    for (let i = 0; i < configuration.numCommonWords; i++) {
        listOfWords.push(GetRandomFromList(CommonList));
    }
    // nouns
    for (let i = 0; i < configuration.numNouns; i++) {
        listOfWords.push(GetRandomFromList(NounList));
    }
    // pronouns
    for (let i = 0; i < configuration.numPronouns; i++) {
        listOfWords.push(GetRandomFromList(PronounList));
    }
    // verbs
    for (let i = 0; i < configuration.numVerbs; i++) {
        listOfWords.push(GetRandomFromList(VerbList));
    }
    // adjectives
    for (let i = 0; i < configuration.numAdjectives; i++) {
        listOfWords.push(GetRandomFromList(AdjectiveList));
    }
    // prepositions
    for (let i = 0; i < configuration.numPrepositions; i++) {
        listOfWords.push(GetRandomFromList(PrepositionList));
    }
    listOfWords.forEach((x, i) => AddToWordList(x, handElementId, i));
}

function HandleSentenceClearedButton () {
    // clear disabled class on buttons
    const disabledNodes = document.getElementsByClassName("disabled");
    Array.from(disabledNodes).forEach(x => x.classList.remove('disabled'));
    
    sentence = [];
    ClearSentenceElements();
}

function ClearSentenceElements() {
    // clear words in sentence
    const node = document.getElementById('sentence')
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
