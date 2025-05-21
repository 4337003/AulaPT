const articlePhrasesPrep = [
    {
        translation: "Жоаким — брат Сузаны.",
        words: [
            { options: ["O", "A", "Os", "As"], correct: "O" },
            { options: ["Joaquim"], correct: "Joaquim" },
            { options: ["é"], correct: "é" },
            { options: ["irmão"], correct: "irmão" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["Susana"], correct: "Susana" }
        ]
    },
    {
        translation: "Друг Луиша — директор компании DDA.",
        words: [
            { options: ["O", "A", "Os", "As"], correct: "O" },
            { options: ["amigo"], correct: "amigo" },
            { options: ["de", "da", "do", "dos"], correct: "do" },
            { options: ["Luís"], correct: "Luís" },
            { options: ["é"], correct: "é" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["diretor"], correct: "diretor" },
            { options: ["da", "de", "do", "das"], correct: "da" },
            { options: ["empresa"], correct: "empresa" },
            { options: ["DDA"], correct: "DDA" }
        ]
    },
    {
        translation: "Учитель естественных наук моего брата из Фару.",
        words: [
            { options: ["O", "A", "Os", "As"], correct: "O" },
            { options: ["professor"], correct: "professor" },
            { options: ["de", "da", "do", "das"], correct: "de" },
            { options: ["ciências"], correct: "ciências" },
            { options: ["do", "da", "de", "dos"], correct: "do" },
            { options: ["meu"], correct: "meu" },
            { options: ["irmão"], correct: "irmão" },
            { options: ["é"], correct: "é" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["Faro"], correct: "Faro" }
        ]
    },
    {
        translation: "Двоюродная сестра Жуаны — анголка.",
        words: [
            { options: ["A", "O", "As", "Os"], correct: "A" },
            { options: ["prima"], correct: "prima" },
            { options: ["da", "de", "do", "das"], correct: "da" },
            { options: ["Joana"], correct: "Joana" },
            { options: ["é"], correct: "é" },
            { options: ["angolana"], correct: "angolana" }
        ]
    },
    {
        translation: "Фернанда — сестра Жуана.",
        words: [
            { options: ["A", "O", "As", "Os"], correct: "A" },
            { options: ["Fernanda"], correct: "Fernanda" },
            { options: ["é"], correct: "é" },
            { options: ["irmã"], correct: "irmã" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["João"], correct: "João" }
        ]
    },
    {
        translation: "Педру — друг сына учителя португальского.",
        words: [
            { options: ["O", "A", "Os", "As"], correct: "O" },
            { options: ["Pedro"], correct: "Pedro" },
            { options: ["é"], correct: "é" },
            { options: ["amigo"], correct: "amigo" },
            { options: ["do", "da", "de", "dos"], correct: "do" },
            { options: ["filho"], correct: "filho" },
            { options: ["do", "da", "de", "dos"], correct: "do" },
            { options: ["professor"], correct: "professor" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["português"], correct: "português" }
        ]
    },
    {
        translation: "Ключи от машины на столе.",
        words: [
            { options: ["As", "Os", "A", "O"], correct: "As" },
            { options: ["chaves"], correct: "chaves" },
            { options: ["do", "da", "de", "dos"], correct: "do" },
            { options: ["carro"], correct: "carro" },
            { options: ["estão"], correct: "estão" },
            { options: ["na", "no", "em", "de"], correct: "na" },
            { options: ["mesa"], correct: "mesa" }
        ]
    },
    {
        translation: "Дверь комнаты открыта.",
        words: [
            { options: ["A", "O", "As", "Os"], correct: "A" },
            { options: ["porta"], correct: "porta" },
            { options: ["do", "da", "de", "dos"], correct: "do" },
            { options: ["quarto"], correct: "quarto" },
            { options: ["está"], correct: "está" },
            { options: ["aberta"], correct: "aberta" }
        ]
    },
    {
        translation: "Я иду в библиотеку вместе с моими друзьями после занятий.",
        words: [
            { options: ["à", "ao", "na", "no"], correct: "à" },
            { options: ["biblioteca"], correct: "biblioteca" },
            { options: ["com", "de", "a", "ao"], correct: "com" },
            { options: ["os", "as", "aos", "às"], correct: "os" },
            { options: ["meus"], correct: "meus" },
            { options: ["amigos"], correct: "amigos" },
            { options: ["depois", "antes", "para", "com"], correct: "depois" },
            { options: ["das", "dos", "de", "do"], correct: "das" },
            { options: ["aulas"], correct: "aulas" }
        ]
    },
    {
        translation: "Мы идём к друзьям, чтобы отпраздновать день рождения их сестры.",
        words: [
            { options: ["aos", "nos", "das", "dos"], correct: "aos" },
            { options: ["amigos"], correct: "amigos" },
            { options: ["para", "por", "de", "em"], correct: "para" },
            { options: ["celebrar", "festejar", "ver", "falar"], correct: "celebrar" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["aniversário"], correct: "aniversário" },
            { options: ["da", "do", "de", "das"], correct: "da" },
            { options: ["irmã"], correct: "irmã" },
            { options: ["deles", "delas", "meu", "nossa"], correct: "deles" }
        ]
    },
    {
        translation: "Книга принадлежит учителю, который работает в нашей школе.",
        words: [
            { options: ["O", "A", "Os", "As"], correct: "O" },
            { options: ["livro"], correct: "livro" },
            { options: ["é"], correct: "é" },
            { options: ["do", "da", "de", "dos"], correct: "do" },
            { options: ["professor"], correct: "professor" },
            { options: ["que", "quem", "onde", "quando"], correct: "que" },
            { options: ["trabalha"], correct: "trabalha" },
            { options: ["na", "no", "em", "de"], correct: "na" },
            { options: ["nossa"], correct: "nossa" },
            { options: ["escola"], correct: "escola" }
        ]
    },
    {
        translation: "Они идут в школу каждое утро вместе с младшей сестрой.",
        words: [
            { options: ["à", "ao", "na", "no"], correct: "à" },
            { options: ["escola"], correct: "escola" },
            { options: ["todas", "todos", "cada", "algumas"], correct: "todas" },
            { options: ["as", "os", "aos", "às"], correct: "as" },
            { options: ["manhãs"], correct: "manhãs" },
            { options: ["com", "de", "a", "ao"], correct: "com" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["irmã"], correct: "irmã" },
            { options: ["mais", "menos", "muito", "pouco"], correct: "mais" },
            { options: ["nova", "velha", "bonita", "alta"], correct: "nova" }
        ]
    },
    {
        translation: "Я думаю о друзьях, которые живут в другой стране.",
        words: [
            { options: ["nos", "nas", "aos", "as"], correct: "nos" },
            { options: ["amigos"], correct: "amigos" },
            { options: ["que", "quem", "onde", "quando"], correct: "que" },
            { options: ["moram"], correct: "moram" },
            { options: ["em", "no", "na", "de"], correct: "em" },
            { options: ["outro", "outra", "outros", "outras"], correct: "outro" },
            { options: ["país"], correct: "país" }
        ]
    }
    // Добавьте больше примеров по аналогии
];

let current = 0;

function getRandomIndex() {
    return Math.floor(Math.random() * articlePhrasesPrep.length);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function renderArticlePhrase() {
    const phrase = articlePhrasesPrep[current];
    document.getElementById('phrase').innerHTML = "<b>Перевод:</b> " + phrase.translation;
    const constructor = document.getElementById('constructor');
    constructor.innerHTML = '';
    phrase.words.forEach((word, idx) => {
        if (word.options.length > 1) {
            const select = document.createElement('select');
            select.className = 'phrase-select';
            select.innerHTML = '<option value="">...</option>' +
                shuffle([...word.options]).map(opt => `<option value="${opt}">${opt}</option>`).join('');
            select.dataset.correct = word.correct;
            select.addEventListener('change', function() {
                this.classList.remove('correct', 'incorrect');
                if (this.value === "") return;
                if (this.value === this.dataset.correct) {
                    this.classList.add('correct');
                } else {
                    this.classList.add('incorrect');
                }
            });
            constructor.appendChild(select);
        } else {
            constructor.appendChild(document.createTextNode(' ' + word.correct + ' '));
        }
    });
    document.getElementById('resultBlock').textContent = '';
}

document.getElementById('checkArticleButton').onclick = function() {
    const phrase = articlePhrasesPrep[current];
    let correct = true;
    let selects = document.querySelectorAll('.phrase-select');
    selects.forEach((select, idx) => {
        if (select.value !== phrase.words[idx].correct) {
            correct = false;
        }
    });
    document.getElementById('resultBlock').textContent = correct ? "Верно!" : "Есть ошибки. Попробуйте еще раз.";
};

document.getElementById('nextArticleButton').onclick = function() {
    let next;
    do {
        next = getRandomIndex();
    } while (articlePhrasesPrep.length > 1 && next === current);
    current = next;
    renderArticlePhrase();
};

window.onload = function() {
    current = getRandomIndex();
    renderArticlePhrase();
};