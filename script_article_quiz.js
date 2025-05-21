const articlePhrases = [
    {
        translation: "Мальчик ест хлеб.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["menino"], correct: "menino" },
            { options: ["come"], correct: "come" },
            { options: ["pão"], correct: "pão" }
        ]
    },
    {
        translation: "Женщина читает книгу.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["mulher"], correct: "mulher" },
            { options: ["lê"], correct: "lê" },
            { options: ["o", "um", "a"], correct: "um" },
            { options: ["livro"], correct: "livro" }
        ]
    },
    {
        translation: "Девочка пьёт воду.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["menina"], correct: "menina" },
            { options: ["bebe"], correct: "bebe" },
            { options: ["água"], correct: "água" }
        ]
    },
    {
        translation: "Собака спит.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["cachorro"], correct: "cachorro" },
            { options: ["dorme"], correct: "dorme" }
        ]
    },
    {
        translation: "Кошка ест рыбу.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["gata"], correct: "gata" },
            { options: ["come"], correct: "come" },
            { options: ["peixe"], correct: "peixe" }
        ]
    },
    {
        translation: "Мальчик читает газету.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["menino"], correct: "menino" },
            { options: ["lê"], correct: "lê" },
            { options: ["jornal"], correct: "jornal" }
        ]
    },
    {
        translation: "Женщина пьёт кофе.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["mulher"], correct: "mulher" },
            { options: ["bebe"], correct: "bebe" },
            { options: ["café"], correct: "café" }
        ]
    },
    {
        translation: "Мужчина работает.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["homem"], correct: "homem" },
            { options: ["trabalha"], correct: "trabalha" }
        ]
    },
    {
        translation: "Девочка поёт песню.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["menina"], correct: "menina" },
            { options: ["canta"], correct: "canta" },
            { options: ["canção"], correct: "canção" }
        ]
    },
    {
        translation: "Учитель объясняет урок.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["professor"], correct: "professor" },
            { options: ["explica"], correct: "explica" },
            { options: ["aula"], correct: "aula" }
        ]
    },
    {
        translation: "Студент пишет письмо.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["estudante"], correct: "estudante" },
            { options: ["escreve"], correct: "escreve" },
            { options: ["carta"], correct: "carta" }
        ]
    },
    {
        translation: "Дети играют в парке.",
        words: [
            { options: ["Os", "As", "Uns"], correct: "Os" },
            { options: ["meninos"], correct: "meninos" },
            { options: ["brincam"], correct: "brincam" },
            { options: ["no", "na", "em"], correct: "no" },
            { options: ["parque"], correct: "parque" }
        ]
    },
    {
        translation: "Машина красная.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["carro"], correct: "carro" },
            { options: ["é"], correct: "é" },
            { options: ["vermelho", "vermelha", "azul"], correct: "vermelho" }
        ]
    },
    {
        translation: "Книга на столе.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["livro"], correct: "livro" },
            { options: ["está"], correct: "está" },
            { options: ["na", "no", "em"], correct: "na" },
            { options: ["mesa"], correct: "mesa" }
        ]
    },
    {
        translation: "Девочки смотрят фильм.",
        words: [
            { options: ["As", "Os", "Umas"], correct: "As" },
            { options: ["meninas"], correct: "meninas" },
            { options: ["assistem"], correct: "assistem" },
            { options: ["filme"], correct: "filme" }
        ]
    },
    {
        translation: "Ученики слушают учителя.",
        words: [
            { options: ["Os", "As", "Uns"], correct: "Os" },
            { options: ["alunos"], correct: "alunos" },
            { options: ["ouvem"], correct: "ouvem" },
            { options: ["o", "a", "um"], correct: "o" },
            { options: ["professor"], correct: "professor" }
        ]
    },
    {
        translation: "Сестра готовит ужин.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["irmã"], correct: "irmã" },
            { options: ["prepara"], correct: "prepara" },
            { options: ["jantar"], correct: "jantar" }
        ]
    },
    {
        translation: "Бабушка рассказывает историю.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["avó"], correct: "avó" },
            { options: ["conta"], correct: "conta" },
            { options: ["história"], correct: "história" }
        ]
    },
    {
        translation: "Папа читает газету.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["pai"], correct: "pai" },
            { options: ["lê"], correct: "lê" },
            { options: ["jornal"], correct: "jornal" }
        ]
    },
    {
        translation: "Мама покупает хлеб.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["mãe"], correct: "mãe" },
            { options: ["compra"], correct: "compra" },
            { options: ["pão"], correct: "pão" }
        ]
    },
    {
        translation: "Друг помогает другу.",
        words: [
            { options: ["O", "A", "Um"], correct: "O" },
            { options: ["amigo"], correct: "amigo" },
            { options: ["ajuda"], correct: "ajuda" },
            { options: ["o", "a", "um"], correct: "o" },
            { options: ["amigo"], correct: "amigo" }
        ]
    },
    {
        translation: "Учительница объясняет правило.",
        words: [
            { options: ["A", "O", "Uma"], correct: "A" },
            { options: ["professora"], correct: "professora" },
            { options: ["explica"], correct: "explica" },
            { options: ["regra"], correct: "regra" }
        ]
    }
];

let current = 0;

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function renderArticlePhrase() {
    const phrase = articlePhrases[current];
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
            // Просто текст (существительное, глагол и т.д.)
            constructor.appendChild(document.createTextNode(' ' + word.correct + ' '));
        }
    });
    document.getElementById('resultBlock').textContent = '';
}

document.getElementById('checkArticleButton').onclick = function() {
    const phrase = articlePhrases[current];
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
    current = (current + 1) % articlePhrases.length;
    renderArticlePhrase();
};

window.onload = renderArticlePhrase;