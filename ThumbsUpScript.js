// set configurable values here
const configuration = {
    numCommonWords: 2,
    numNouns: 2,
    numPronouns: 2,
    numVerbs: 2,    
    numAdjectives: 2,   
    numPrepositions: 2
};

const suffixes = [
    '',
    's',
    'es',
    "'s",
    'd',
    'ed',
    'ing',
    "ly",
    ",",
    
]

const PronounList = [
    'all',
    'anybody',
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
    "Uncle Bob",
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
    "Mrs. Lilly",
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
    "Tiny Tim",
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
    'dragon',
    'minute',
    'idea',
    'kid',
    'body',
    'information',
    'back',
    'parent',
    'face',
    'level',
    'office',
    'door',
    'health',
    'person',
    'art',
    'war',
    'dude',
    'penny',
    'horse',
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
    'bean',
    'air',
    'teacher',
    'force',
    'education',
];

const VerbList = [
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
    'wiggle',
    'expect',
    'squeek',
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
    'unwind',
    'win',
    'offer',
    'remember',
    'love',
    'consider',
    'appear',
    'buy',
    'wait',
    'serve',
    'explode',
    'argue',
    'die',
    'send',
    'expect',
    'build',
    'stay',
    'bounce',
    'sip',
    'shred',
    'dispatch',
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
    'pull',
    'flip',
    'explore',
    'save'    
]

const AdjectiveList = [
    'bad',
    'best',
    'better',
    'big',
    'black',
    'elastim',
    'volcanic',
    'certain',
    'clear',
    'different',
    'early',
    'easy',
    'economic',
    'doubtful',
    'helpful',
    'federal',
    'free',
    'full',
    'perplexing',
    'great',
    'hard',
    'high',
    'human',
    'important',
    'international',
    'humongus',
    'late',
    'little',
    'local',
    'long',
    'lovely',
    'lanky',
    'lofty',
    'major',
    'military',
    'national',
    'extreme',
    'ancient',
    'problematic',
    'impossible',
    'personable',
    'other',
    'political',
    'possible',
    'public',
    'real',
    'recent',
    'morbid',
    'right',
    'tiny',
    'social',
    'special',
    'infinite',
    'distinct',
    'true',
    'purple',
    'whole',
    'chalky',
    'sensable',
    'imperfect',
    'influencial',
    'horid',
    'frozen',
    'insane',
    'sinister',
    'stubborn',
    'insecure',
    'twisted',
    'useless',
    'idiotic',
    'grubby',
    'shakey',
    'faded',
    'fisty',
    'honorable',    
    'slim',
    'imphatic'
]

const CommonList = [
    'the',
    'the',
    'the',
    'will be',
    'will be',
    'should be',
    'might be',    
    'could be',
    'are',
    'are',
    'are',
    'is',
    'is',
    'is',
    'am',
    'a',
    'a',
    'a',
    'that',
    'have',
    'have',
    'have',
    'had',
    'had',
    'as',
    'do',
    'the',
    'the',
    'the',
    'did',
    'did',
    'did',
    'but',
    'but',
    'but',
    'not',
    'by',
    'and',
    'and',
    'and',
    'shall',
    "isn't",
    "wasn't",
    "wasn't",
    'the',
    'the',
    'the',
    'a',
    'a',
    'a',
    'this',
    'this',
    'that',
    'this',
    'those',
    'is',
    'is',
    'is'
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

let score = 0;

function RenderSentence() {
    ClearSentenceElements();
    sentence.forEach(word => {
        AddElement(
            word.name + suffixes[word.suffix],
            'sentence',
            () => IncrementSuffix(word.id),
            'sentence-word',
            'sentence-word-' + word.id 
        );
    });

    UpdateScore(sentence.length);
}

function RenderHand() {
    ClearHandElements();
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

    RenderSentence();
    RenderHand();
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
            sentence.push({ id: id, name: hand[i].name, suffix: 0 });
            break;
        }
    }
    RenderSentence();
    RenderHand();
}

function GenerateHand() {
    // remove any existing children nodes (previous words)
    
    ClearHandElements();
    ClearSentenceElements();
    
    
    
    
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
    listOfWords.forEach((x, i) => AddToWordList(x, i));
    RenderHand();
}

function HandleSentenceClearedButton () {
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

function ClearSentenceElements() {
    // clear words in sentence
    const node = document.getElementById('sentence')
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function ClearHandElements() {
    // clear words in hand
    const node = document.getElementById('hand')
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    
    
}

function SaveSentence() {


    const sentenceList = [];
    sentence.forEach(x => sentenceList.push(x.name));
    const sentenceString = sentenceList.join(' ');
    AddElement(sentenceString, 'sentences-saved');
}



