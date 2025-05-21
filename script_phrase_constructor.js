const phrases = [
    {
        russian: "Я хотел бы кофе, пожалуйста",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["quero", "quer", "queremos"], correct: "quero" },
            { options: ["um", "uma", "uns"], correct: "um" },
            { options: ["café", "chá", "leite"], correct: "café" },
            { options: ["por favor", "obrigado", "bom dia"], correct: "por favor" }
        ]
    },
    {
        russian: "Мы говорим по-португальски",
        words: [
            { options: ["Eu", "Nós", "Eles"], correct: "Nós" },
            { options: ["fala", "falamos", "falam"], correct: "falamos" },
            { options: ["português", "inglês", "espanhol"], correct: "português" }
        ]
    },
    {
        russian: "Ты живёшь в Лиссабоне",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Tu" },
            { options: ["vivo", "vives", "vive"], correct: "vives" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["Lisboa", "Porto", "Madrid"], correct: "Lisboa" }
        ]
    },
    {
        russian: "Он читает книгу",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Ele" },
            { options: ["leio", "lês", "lê"], correct: "lê" },
            { options: ["um", "uma", "uns"], correct: "um" },
            { options: ["livro", "jornal", "revista"], correct: "livro" }
        ]
    },
    {
        russian: "Мы любим музыку",
        words: [
            { options: ["Eu", "Nós", "Eles"], correct: "Nós" },
            { options: ["amo", "amamos", "amam"], correct: "amamos" },
            { options: ["música", "arte", "filme"], correct: "música" }
        ]
    },
    {
        russian: "Они идут в школу",
        words: [
            { options: ["Eu", "Tu", "Eles"], correct: "Eles" },
            { options: ["vou", "vais", "vão"], correct: "vão" },
            { options: ["para", "em", "de"], correct: "para" },
            { options: ["a escola", "o trabalho", "a casa"], correct: "a escola" }
        ]
    },
    {
        russian: "Я учу португальский язык",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["aprendo", "aprendes", "aprende"], correct: "aprendo" },
            { options: ["português", "inglês", "espanhol"], correct: "português" }
        ]
    },
    {
        russian: "Ты пьёшь воду",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Tu" },
            { options: ["bebo", "bebes", "bebe"], correct: "bebes" },
            { options: ["água", "leite", "sumo"], correct: "água" }
        ]
    },
    {
        russian: "Она работает в банке",
        words: [
            { options: ["Ele", "Ela", "Nós"], correct: "Ela" },
            { options: ["trabalha", "trabalhamos", "trabalham"], correct: "trabalha" },
            { options: ["no", "em", "para"], correct: "no" },
            { options: ["banco", "hospital", "escola"], correct: "banco" }
        ]
    },
    {
        russian: "Мы смотрим фильм",
        words: [
            { options: ["Eu", "Nós", "Eles"], correct: "Nós" },
            { options: ["vejo", "vemos", "veem"], correct: "vemos" },
            { options: ["um", "uma", "uns"], correct: "um" },
            { options: ["filme", "livro", "jogo"], correct: "filme" }
        ]
    },
    {
        russian: "Вы говорите по-английски?",
        words: [
            { options: ["Tu", "Você", "Eles"], correct: "Você" },
            { options: ["fala", "falas", "falam"], correct: "fala" },
            { options: ["inglês", "português", "francês"], correct: "inglês" }
        ]
    },
    {
        russian: "Я люблю читать",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["gosto", "gostas", "gostam"], correct: "gosto" },
            { options: ["de", "em", "para"], correct: "de" },
            { options: ["ler", "escrever", "falar"], correct: "ler" }
        ]
    },
    {
        russian: "Они живут в Порту",
        words: [
            { options: ["Eles", "Nós", "Tu"], correct: "Eles" },
            { options: ["vivem", "vivemos", "vives"], correct: "vivem" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["Porto", "Lisboa", "Madrid"], correct: "Porto" }
        ]
    },
    {
        russian: "Я ем хлеб",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["como", "comes", "come"], correct: "como" },
            { options: ["pão", "arroz", "massa"], correct: "pão" }
        ]
    },
    {
        russian: "Ты слушаешь музыку",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["ouves", "ouço", "ouve"], correct: "ouves" },
            { options: ["música", "rádio", "podcast"], correct: "música" }
        ]
    },
    {
        russian: "Он пишет письмо",
        words: [
            { options: ["Ele", "Ela", "Eu"], correct: "Ele" },
            { options: ["escreve", "escrevo", "escrevem"], correct: "escreve" },
            { options: ["uma", "um", "uns"], correct: "uma" },
            { options: ["carta", "mensagem", "livro"], correct: "carta" }
        ]
    },
    {
        russian: "Мы идём домой",
        words: [
            { options: ["Nós", "Eles", "Eu"], correct: "Nós" },
            { options: ["vamos", "vão", "vou"], correct: "vamos" },
            { options: ["para", "em", "de"], correct: "para" },
            { options: ["casa", "escola", "trabalho"], correct: "casa" }
        ]
    },
    {
        russian: "Они читают газету",
        words: [
            { options: ["Eles", "Nós", "Tu"], correct: "Eles" },
            { options: ["leem", "lemos", "lês"], correct: "leem" },
            { options: ["o", "um", "uma"], correct: "o" },
            { options: ["jornal", "livro", "revista"], correct: "jornal" }
        ]
    },
    {
        russian: "Я смотрю телевизор",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["vejo", "vês", "vê"], correct: "vejo" },
            { options: ["televisão", "filme", "jogo"], correct: "televisão" }
        ]
    },
    {
        russian: "Ты учишься в университете",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["estudas", "estudo", "estuda"], correct: "estudas" },
            { options: ["na", "em", "para"], correct: "na" },
            { options: ["universidade", "escola", "empresa"], correct: "universidade" }
        ]
    },
    {
        russian: "Она пьёт чай",
        words: [
            { options: ["Ela", "Ele", "Eu"], correct: "Ela" },
            { options: ["bebe", "bebo", "bebem"], correct: "bebe" },
            { options: ["chá", "café", "leite"], correct: "chá" }
        ]
    },
    {
        russian: "Мы завтракаем вместе",
        words: [
            { options: ["Nós", "Eles", "Eu"], correct: "Nós" },
            { options: ["tomamos", "tomo", "tomam"], correct: "tomamos" },
            { options: ["pequeno-almoço", "almoço", "jantar"], correct: "pequeno-almoço" },
            { options: ["juntos", "sozinhos", "cedo"], correct: "juntos" }
        ]
    },
    {
        russian: "Они покупают хлеб",
        words: [
            { options: ["Eles", "Nós", "Tu"], correct: "Eles" },
            { options: ["compram", "compramos", "compro"], correct: "compram" },
            { options: ["pão", "arroz", "carne"], correct: "pão" }
        ]
    },
    {
        russian: "Я открываю окно",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["abro", "abres", "abre"], correct: "abro" },
            { options: ["a", "o", "um"], correct: "a" },
            { options: ["janela", "porta", "gaveta"], correct: "janela" }
        ]
    },
    {
        russian: "Ты закрываешь дверь",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["fechas", "fecho", "fecha"], correct: "fechas" },
            { options: ["a", "o", "uma"], correct: "a" },
            { options: ["porta", "janela", "gaveta"], correct: "porta" }
        ]
    },
    {
        russian: "Он идёт на работу",
        words: [
            { options: ["Ele", "Ela", "Eu"], correct: "Ele" },
            { options: ["vai", "vou", "vamos"], correct: "vai" },
            { options: ["para", "em", "de"], correct: "para" },
            { options: ["o trabalho", "a escola", "a casa"], correct: "o trabalho" }
        ]
    },
    {
        russian: "Мы играем в футбол",
        words: [
            { options: ["Nós", "Eles", "Eu"], correct: "Nós" },
            { options: ["jogamos", "jogo", "jogam"], correct: "jogamos" },
            { options: ["futebol", "ténis", "basquetebol"], correct: "futebol" }
        ]
    },
    {
        russian: "Они слушают радио",
        words: [
            { options: ["Eles", "Nós", "Tu"], correct: "Eles" },
            { options: ["ouvem", "ouvimos", "ouves"], correct: "ouvem" },
            { options: ["rádio", "música", "podcast"], correct: "rádio" }
        ]
    },
    {
        russian: "Я пишу сообщение",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["escrevo", "escreves", "escreve"], correct: "escrevo" },
            { options: ["uma", "um", "uns"], correct: "uma" },
            { options: ["mensagem", "carta", "livro"], correct: "mensagem" }
        ]
    },
    {
        russian: "Ты смотришь фильм",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["vês", "vejo", "vê"], correct: "vês" },
            { options: ["um", "uma", "uns"], correct: "um" },
            { options: ["filme", "livro", "jogo"], correct: "filme" }
        ]
    },
    {
        russian: "Она читает журнал",
        words: [
            { options: ["Ela", "Ele", "Eu"], correct: "Ela" },
            { options: ["lê", "leio", "leem"], correct: "lê" },
            { options: ["uma", "um", "uns"], correct: "uma" },
            { options: ["revista", "livro", "jornal"], correct: "revista" }
        ]
    }
];

let currentPhraseIndex = Math.floor(Math.random() * phrases.length);

function getRandomPhraseIndex() {
    if (phrases.length <= 1) return 0;
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * phrases.length);
    } while (newIndex === currentPhraseIndex && phrases.length > 1);
    return newIndex;
}

function shuffleArray(array) {
    // Алгоритм Фишера-Йетса
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayPhrase() {
    const phrase = phrases[currentPhraseIndex];
    document.getElementById('russianPhrase').textContent = phrase.russian;
    const constructorDiv = document.getElementById('constructor');
    constructorDiv.innerHTML = '';
    phrase.words.forEach((word, idx) => {
        const select = document.createElement('select');
        select.id = 'word-' + idx;
        select.className = 'phrase-select';
        // Перемешиваем копию массива options
        const shuffledOptions = shuffleArray([...word.options]);
        select.innerHTML = '<option value="">...</option>' +
            shuffledOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('');
        select.addEventListener('change', function() {
            select.classList.remove('correct', 'incorrect');
            if (select.value === "") {
                // ничего не выделяем
            } else if (select.value === word.correct) {
                select.classList.add('correct');
            } else {
                select.classList.add('incorrect');
            }
        });
        constructorDiv.appendChild(select);
        if (idx < phrase.words.length - 1) {
            constructorDiv.appendChild(document.createTextNode(' '));
        }
    });
    document.getElementById('resultBlock').textContent = '';
}

function checkPhrase() {
    const phrase = phrases[currentPhraseIndex];
    let correct = true;
    phrase.words.forEach((word, idx) => {
        const select = document.getElementById('word-' + idx);
        if (select.value !== word.correct) {
            correct = false;
        }
    });
    document.getElementById('resultBlock').textContent = correct ? "Верно!" : "Есть ошибки. Попробуйте еще раз.";
}

function nextPhrase() {
    currentPhraseIndex = getRandomPhraseIndex();
    displayPhrase();
}

document.addEventListener('DOMContentLoaded', () => {
    displayPhrase();
    document.getElementById('checkPhraseButton').addEventListener('click', checkPhrase);
    document.getElementById('nextPhraseButton').addEventListener('click', nextPhrase);
});