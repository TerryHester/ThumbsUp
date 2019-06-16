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
    "ly"
]

const PronounList = [
    'the',
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
    'their',
    'theirs',
    'there',
    'they',
    'those',
    'who',
    'whoever',
    'whose',
    'you'

    
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
    'elastic',
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
    'humongous',
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
    'influential',
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
    'feisty',
    'honorable',    
    'slim',
    'emphatic'
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

const wordGroups = {
    "is": ["is", "am", "are", "be", "will be", "was", "have been","has been"],
    "the": ["the", "a", "this", "those", "these", "that","them"],
    "have": ["have","has","had","will have"],
    "get": ["get", "got","gotten"],
    "do": ["do","did","done"],
    "we": ["we","us",],

}

let hand = [];

let sentence = [];

let score = 0;

function RenderSentence() {
    ClearElements('sentence');
    sentence.forEach(word => {
        let alternateWordList = suffixes;
        let wordToDisplay = word.name + alternateWordList[word.alternateId];
        if (wordGroups[word.name] != undefined) {
            // it's in the special word group list, so use that list instead
            alternateWordList = wordGroups[word.name];
            wordToDisplay = alternateWordList[word.alternateId];
        }

        AddElement(
            wordToDisplay,
            'sentence',
            () => IncrementAlternateId(word.id, alternateWordList),
            'sentence-word',
            'sentence-word-' + word.id
        );
    });

    ClearElements('alternate-options');
    if (sentence.length > 0) {
        const finalWord = sentence[sentence.length - 1];
        let alternateOptions = [];
        if (wordGroups[finalWord.name]) {
            wordGroups[finalWord.name].forEach(x => alternateOptions.push(x));
        }
        else {
            suffixes.forEach(x => alternateOptions.push(x));
        }
        for (let i = 0; i < alternateOptions.length; i++) {
            const option = alternateOptions[i];
            AddElement(
                (option === '' ? '[none]' : option),
                'alternate-options',
                () => SetAlternateId(finalWord.id, i),
                'alternate-word',
                'alternate-word-option-' + i);
        }
    }

    UpdateScore(sentence.length);
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

    RenderSentence();
    RenderHand();
}

function IncrementAlternateId(sentenceItemId, alternateList) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].id === sentenceItemId) {
            sentence[i].alternateId++;
            if (sentence[i].alternateId >= alternateList.length) {
                sentence[i].alternateId = 0;
            }
        }
    }
    RenderSentence();
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
            sentence.push({ id: id, name: hand[i].name, alternateId: 0 });
            break;
        }
    }
    RenderSentence();
    RenderHand();
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
    // pronouns
    for (let i = 0; i < configuration.numPronouns; i++) {
        AddRandomWordToHand(listOfWords, PronounList);
    }
    // verbs
    for (let i = 0; i < configuration.numVerbs; i++) {
        AddRandomWordToHand(listOfWords, VerbList);
    }
    // adjectives
    for (let i = 0; i < configuration.numAdjectives; i++) {
        AddRandomWordToHand(listOfWords, AdjectiveList);
    }
    // prepositions
    for (let i = 0; i < configuration.numPrepositions; i++) {
        AddRandomWordToHand(listOfWords, PrepositionList);
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

function ClearElements(parentId) {
    // clear child elements of a node
    const node = document.getElementById(parentId)
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



