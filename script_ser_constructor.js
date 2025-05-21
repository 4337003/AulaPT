const serPhrases = [
    {
        sentence: "Eu sou estudante.",
        translation: "Я студент.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["sou", "és", "é", "somos", "são"], correct: "sou" },
            { options: ["estudante", "professor", "médico", "engenheiro"], correct: "estudante" }
        ]
    },
    {
        sentence: "Tu és brasileiro.",
        translation: "Ты бразилец.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Tu" },
            { options: ["sou", "és", "é", "somos", "são"], correct: "és" },
            { options: ["brasileiro", "português", "russo", "alemão"], correct: "brasileiro" }
        ]
    },
    {
        sentence: "Ele é feliz.",
        translation: "Он счастлив.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["sou", "és", "é", "somos", "são"], correct: "é" },
            { options: ["feliz", "triste", "alto", "baixo"], correct: "feliz" }
        ]
    },
    {
        sentence: "Nós somos amigos.",
        translation: "Мы друзья.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["sou", "és", "é", "somos", "são"], correct: "somos" },
            { options: ["amigos", "irmãos", "colegas", "pais"], correct: "amigos" }
        ]
    },
    {
        sentence: "Eles são professores.",
        translation: "Они преподаватели.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["sou", "és", "é", "somos", "são"], correct: "são" },
            { options: ["professores", "alunos", "médicos", "engenheiros"], correct: "professores" }
        ]
    }
];

let current = 0;

function getRandomIndex() {
    return Math.floor(Math.random() * serPhrases.length);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function renderSerPhrase() {
    const phrase = serPhrases[current];
    document.getElementById('phrase').innerHTML = "<b>Перевод:</b> " + phrase.translation;
    const constructor = document.getElementById('constructor');
    constructor.innerHTML = '';

    // Собираем фразу с селектами
    let phraseWithSelects = '';
    phrase.words.forEach((word, idx) => {
        const selectId = 'select_' + idx;
        phraseWithSelects += `<select class="ser-select" id="${selectId}" data-correct="${word.correct}">
            <option value="">...</option>
            ${shuffle([...word.options]).map(opt => `<option value="${opt}">${opt}</option>`).join('')}
        </select> `;
    });

    constructor.innerHTML = phraseWithSelects.trim();

    // Вешаем обработчики на селекты
    phrase.words.forEach((word, idx) => {
        const select = document.getElementById('select_' + idx);
        select.addEventListener('change', function() {
            this.classList.remove('correct', 'incorrect');
            if (this.value === "") return;
            if (this.value === this.dataset.correct) {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
            }
        });
    });

    document.getElementById('resultBlock').textContent = '';
}

document.getElementById('checkSerButton').onclick = function() {
    const phrase = serPhrases[current];
    let correct = true;
    let selects = document.querySelectorAll('.ser-select');
    selects.forEach((select, idx) => {
        if (select.value !== phrase.words[idx].correct) {
            correct = false;
        }
    });
    document.getElementById('resultBlock').textContent = correct ? "Верно!" : "Есть ошибки. Попробуйте еще раз.";
};

document.getElementById('nextSerButton').onclick = function() {
    let next;
    do {
        next = getRandomIndex();
    } while (serPhrases.length > 1 && next === current);
    current = next;
    renderSerPhrase();
};

window.onload = function() {
    current = getRandomIndex();
    renderSerPhrase();
};