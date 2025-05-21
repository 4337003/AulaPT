const prepositionPhrases = [
    {
        sentence: "Todos os dias eu moro em Lisboa.",
        translation: "Каждый день я живу ... Лиссабоне.",
        words: [
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["Lisboa"], correct: "Lisboa" }
        ]
    },
    {
        sentence: "Depois do almoço ele vai para a escola.",
        translation: "После обеда он идёт ... школу.",
        words: [
            { options: ["para", "em", "de"], correct: "para" },
            { options: ["a escola"], correct: "a escola" }
        ]
    },
    {
        sentence: "Nós falamos com o amigo por telefone todas as noites.",
        translation: "Мы разговариваем ... другом ... телефону каждый вечер.",
        words: [
            { options: ["com", "de", "para", "por"], correct: "com" },
            { options: ["o amigo"], correct: "o amigo" },
            { options: ["por", "de", "em", "a"], correct: "por" },
            { options: ["telefone"], correct: "telefone" }
        ]
    },
    {
        sentence: "Minha irmã mora perto de um grande parque.",
        translation: "Моя сестра живёт ... большого парка.",
        words: [
            { options: ["perto", "longe", "em", "sobre"], correct: "perto" },
            { options: ["de", "do", "em", "para"], correct: "de" },
            { options: ["um grande parque"], correct: "um grande parque" }
        ]
    },
    {
        sentence: "De manhã ele vai para o trabalho de autocarro.",
        translation: "Утром он едет ... работу ... автобусе.",
        words: [
            { options: ["para", "a", "em", "de"], correct: "para" },
            { options: ["o trabalho"], correct: "o trabalho" },
            { options: ["de", "em", "por", "a"], correct: "de" },
            { options: ["autocarro"], correct: "autocarro" }
        ]
    },
    {
        sentence: "O amigo de Luís é o diretor da empresa DDA.",
        translation: "Друг Луиша — директор компании DDA.",
        words: [
            { options: ["O", "A", "Os", "As"], correct: "O" },
            { options: ["amigo"], correct: "amigo" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["Luís"], correct: "Luís" },
            { options: ["é"], correct: "é" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["diretor"], correct: "diretor" },
            { options: ["da", "de", "do", "das"], correct: "da" },
            { options: ["empresa"], correct: "empresa" },
            { options: ["DDA"], correct: "DDA" }
        ]
    }
    // Добавьте больше примеров
];

let current = 0;

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function renderPrepositionPhrase() {
    const phrase = prepositionPhrases[current];
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

document.getElementById('checkPrepositionButton').onclick = function() {
    const phrase = prepositionPhrases[current];
    let correct = true;
    let selects = document.querySelectorAll('.phrase-select');
    selects.forEach((select, idx) => {
        if (select.value !== phrase.words[idx].correct) {
            correct = false;
        }
    });
    document.getElementById('resultBlock').textContent = correct ? "Верно!" : "Есть ошибки. Попробуйте еще раз.";
};

document.getElementById('nextPrepositionButton').onclick = function() {
    current = (current + 1) % prepositionPhrases.length;
    renderPrepositionPhrase();
};

window.onload = renderPrepositionPhrase;