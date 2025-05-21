const allVerbs = [
    // 50 неправильных глаголов
    { infinitive: 'ser', translation: 'быть (постоянным свойством)', conjugation: { eu: 'sou', tu: 'és', ele: 'é', nos: 'somos', eles: 'são' }},
    { infinitive: 'estar', translation: 'быть (временным состоянием)', conjugation: { eu: 'estou', tu: 'estás', ele: 'está', nos: 'estamos', eles: 'estão' }},
    { infinitive: 'ter', translation: 'иметь', conjugation: { eu: 'tenho', tu: 'tens', ele: 'tem', nos: 'temos', eles: 'têm' }},
    { infinitive: 'ir', translation: 'идти, ехать', conjugation: { eu: 'vou', tu: 'vais', ele: 'vai', nos: 'vamos', eles: 'vão' }},
    { infinitive: 'vir', translation: 'приходить, приезжать', conjugation: { eu: 'venho', tu: 'vens', ele: 'vem', nos: 'vimos', eles: 'vêm' }},
    { infinitive: 'fazer', translation: 'делать', conjugation: { eu: 'faço', tu: 'fazes', ele: 'faz', nos: 'fazemos', eles: 'fazem' }},
    { infinitive: 'dizer', translation: 'говорить, сказать', conjugation: { eu: 'digo', tu: 'dizes', ele: 'diz', nos: 'dizemos', eles: 'dizem' }},
    { infinitive: 'poder', translation: 'мочь', conjugation: { eu: 'posso', tu: 'podes', ele: 'pode', nos: 'podemos', eles: 'podem' }},
    { infinitive: 'querer', translation: 'хотеть', conjugation: { eu: 'quero', tu: 'queres', ele: 'quer', nos: 'queremos', eles: 'querem' }},
    { infinitive: 'saber', translation: 'знать, уметь', conjugation: { eu: 'sei', tu: 'sabes', ele: 'sabe', nos: 'sabemos', eles: 'sabem' }},
    { infinitive: 'dar', translation: 'давать', conjugation: { eu: 'dou', tu: 'dás', ele: 'dá', nos: 'damos', eles: 'dão' }},
    { infinitive: 'ver', translation: 'видеть', conjugation: { eu: 'vejo', tu: 'vês', ele: 'vê', nos: 'vemos', eles: 'veem' }},
    { infinitive: 'ler', translation: 'читать', conjugation: { eu: 'leio', tu: 'lês', ele: 'lê', nos: 'lemos', eles: 'leem' }},
    { infinitive: 'pôr', translation: 'класть, ставить', conjugation: { eu: 'ponho', tu: 'pões', ele: 'põe', nos: 'pomos', eles: 'põem' }},
    { infinitive: 'trazer', translation: 'приносить', conjugation: { eu: 'trago', tu: 'trazes', ele: 'traz', nos: 'trazemos', eles: 'trazem' }},
    { infinitive: 'ouvir', translation: 'слышать', conjugation: { eu: 'ouço', tu: 'ouves', ele: 'ouve', nos: 'ouvimos', eles: 'ouvem' }}, // также oiça (subj)
    { infinitive: 'pedir', translation: 'просить', conjugation: { eu: 'peço', tu: 'pedes', ele: 'pede', nos: 'pedimos', eles: 'pedem' }},
    { infinitive: 'perder', translation: 'терять', conjugation: { eu: 'perco', tu: 'perdes', ele: 'perde', nos: 'perdemos', eles: 'perdem' }},
    { infinitive: 'dormir', translation: 'спать', conjugation: { eu: 'durmo', tu: 'dormes', ele: 'dorme', nos: 'dormimos', eles: 'dormem' }},
    { infinitive: 'sentir', translation: 'чувствовать', conjugation: { eu: 'sinto', tu: 'sentes', ele: 'sente', nos: 'sentimos', eles: 'sentem' }},
    { infinitive: 'seguir', translation: 'следовать', conjugation: { eu: 'sigo', tu: 'segues', ele: 'segue', nos: 'seguimos', eles: 'seguem' }},
    { infinitive: 'servir', translation: 'служить, подавать', conjugation: { eu: 'sirvo', tu: 'serves', ele: 'serve', nos: 'servimos', eles: 'servem' }},
    { infinitive: 'vestir', translation: 'одевать(ся)', conjugation: { eu: 'visto', tu: 'vestes', ele: 'veste', nos: 'vestimos', eles: 'vestem' }},
    { infinitive: 'rir', translation: 'смеяться', conjugation: { eu: 'rio', tu: 'ris', ele: 'ri', nos: 'rimos', eles: 'riem' }},
    { infinitive: 'cair', translation: 'падать', conjugation: { eu: 'caio', tu: 'cais', ele: 'cai', nos: 'caímos', eles: 'caem' }},
    { infinitive: 'sair', translation: 'выходить', conjugation: { eu: 'saio', tu: 'sais', ele: 'sai', nos: 'saímos', eles: 'saem' }},
    { infinitive: 'valer', translation: 'стоить, иметь ценность', conjugation: { eu: 'valho', tu: 'vales', ele: 'vale', nos: 'valemos', eles: 'valem' }},
    { infinitive: 'medir', translation: 'мерить, измерять', conjugation: { eu: 'meço', tu: 'medes', ele: 'mede', nos: 'medimos', eles: 'medem' }},
    { infinitive: 'crer', translation: 'верить', conjugation: { eu: 'creio', tu: 'crês', ele: 'crê', nos: 'cremos', eles: 'creem' }},
    { infinitive: 'construir', translation: 'строить', conjugation: { eu: 'construo', tu: 'constróis', ele: 'constrói', nos: 'construímos', eles: 'constroem' }},
    { infinitive: 'preferir', translation: 'предпочитать', conjugation: { eu: 'prefiro', tu: 'preferes', ele: 'prefere', nos: 'preferimos', eles: 'preferem' }},
    { infinitive: 'mentir', translation: 'лгать', conjugation: { eu: 'minto', tu: 'mentes', ele: 'mente', nos: 'mentimos', eles: 'mentem' }},
    { infinitive: 'cobrir', translation: 'покрывать', conjugation: { eu: 'cubro', tu: 'cobres', ele: 'cobre', nos: 'cobrimos', eles: 'cobrem' }},
    { infinitive: 'tossir', translation: 'кашлять', conjugation: { eu: 'tusso', tu: 'tosses', ele: 'tosse', nos: 'tossimos', eles: 'tossem' }},
    { infinitive: 'fugir', translation: 'убегать', conjugation: { eu: 'fujo', tu: 'foges', ele: 'foge', nos: 'fugimos', eles: 'fogem' }},
    { infinitive: 'conseguir', translation: 'достигать, мочь', conjugation: { eu: 'consigo', tu: 'consegues', ele: 'consegue', nos: 'conseguimos', eles: 'conseguem' }},
    { infinitive: 'odiar', translation: 'ненавидеть', conjugation: { eu: 'odeio', tu: 'odeias', ele: 'odeia', nos: 'odiamos', eles: 'odeiam' }},
    { infinitive: 'passear', translation: 'гулять', conjugation: { eu: 'passeio', tu: 'passeias', ele: 'passeia', nos: 'passeamos', eles: 'passeiam' }},
    { infinitive: 'caber', translation: 'вмещаться, подходить', conjugation: { eu: 'caibo', tu: 'cabes', ele: 'cabe', nos: 'cabemos', eles: 'cabem' }},
    { infinitive: 'prover', translation: 'обеспечивать, снабжать', conjugation: { eu: 'provejo', tu: 'provês', ele: 'provê', nos: 'provemos', eles: 'proveem' }},
    { infinitive: 'requerer', translation: 'требовать, запрашивать', conjugation: { eu: 'requeiro', tu: 'requeres', ele: 'requer', nos: 'requeremos', eles: 'requerem' }},
    { infinitive: 'polir', translation: 'полировать', conjugation: { eu: 'pulo', tu: 'pules', ele: 'pule', nos: 'polimos', eles: 'polem' }},
    { infinitive: 'agredir', translation: 'нападать, оскорблять', conjugation: { eu: 'agrido', tu: 'agrides', ele: 'agride', nos: 'agredimos', eles: 'agridem' }},
    { infinitive: 'prevenir', translation: 'предотвращать', conjugation: { eu: 'previno', tu: 'prevines', ele: 'previne', nos: 'prevenimos', eles: 'previnem' }},
    { infinitive: 'progredir', translation: 'прогрессировать', conjugation: { eu: 'progrido', tu: 'progrides', ele: 'progride', nos: 'progredimos', eles: 'progridem' }},
    { infinitive: 'competir', translation: 'соревноваться', conjugation: { eu: 'compito', tu: 'competes', ele: 'compete', nos: 'competimos', eles: 'competem' }},
    { infinitive: 'divergir', translation: 'расходиться (во мнениях)', conjugation: { eu: 'divirjo', tu: 'diverges', ele: 'diverge', nos: 'divergimos', eles: 'divergem' }},
    { infinitive: 'eleger', translation: 'избирать', conjugation: { eu: 'elejo', tu: 'eleges', ele: 'elege', nos: 'elegemos', eles: 'elegem' }},
    { infinitive: 'frigir', translation: 'жарить', conjugation: { eu: 'frijo', tu: 'freges', ele: 'frege', nos: 'frigimos', eles: 'fregem' }},
    { infinitive: 'destruir', translation: 'разрушать', conjugation: { eu: 'destruo', tu: 'destróis', ele: 'destrói', nos: 'destruímos', eles: 'destroem' }}
];

const verbListContainer = document.getElementById('verbListContainer');
const checkAnswersButton = document.getElementById('checkAnswersButton');
const newExerciseButton = document.getElementById('newExerciseButton');
const addMoreVerbsButton = document.getElementById('addMoreVerbsButton');
const targetPronounElement = document.getElementById('targetPronoun');

const pronouns = ['eu', 'tu', 'ele', 'nos', 'eles'];
const pronounDisplayNames = {
    eu: 'Eu (я)',
    tu: 'Tu (ты)',
    ele: 'Ele/Ela/Você (он/она/Вы ед.ч.)',
    nos: 'Nós (мы)',
    eles: 'Eles/Elas/Vocês (они/Вы мн.ч.)'
};

let currentExerciseVerbs = [];
let currentPronoun = '';
const verbs = allVerbs; // Используем новый список глаголов

function getRandomElements(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function generateOptionsForMode2(correctAnswer, pronoun, verbInfinitive) {
    let options = [correctAnswer];
    let potentialIncorrectOptions = [];

    const currentVerbObject = verbs.find(v => v.infinitive === verbInfinitive);
    if (currentVerbObject) {
        for (const p in currentVerbObject.conjugation) {
            if (p !== pronoun) {
                const form = currentVerbObject.conjugation[p];
                if (form !== correctAnswer && !potentialIncorrectOptions.includes(form)) {
                    potentialIncorrectOptions.push(form);
                }
            }
        }
    }

    potentialIncorrectOptions.sort(() => Math.random() - 0.5);

    let i = 0;
    while (options.length < 4 && i < potentialIncorrectOptions.length) {
        if (!options.includes(potentialIncorrectOptions[i])) {
            options.push(potentialIncorrectOptions[i]);
        }
        i++;
    }
    
    return options.sort(() => Math.random() - 0.5);
}


function displayExercise() {
    // Было:
    // currentPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    // Стало:
    currentPronoun = document.getElementById('pronounSelector').value || pronouns[0];
    targetPronounElement.textContent = pronounDisplayNames[currentPronoun];

    const numVerbsToDisplay = Math.min(10, verbs.length);
    currentExerciseVerbs = getRandomElements(verbs, numVerbsToDisplay);

    verbListContainer.innerHTML = '';
    currentExerciseVerbs.forEach((verb, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'verb-list-item';
        
        const correctAnswer = verb.conjugation[currentPronoun];
        const options = generateOptionsForMode2(correctAnswer, currentPronoun, verb.infinitive);

        let optionsHTML = '<option value="">Выберите ответ...</option>';
        options.forEach(opt => {
            optionsHTML += `<option value="${opt}">${opt}</option>`;
        });

        listItem.innerHTML = `
            <div class="verb-info">
                <span class="verb-infinitive">${verb.infinitive}</span>
                <div class="verb-translation">(${verb.translation})</div>
            </div>
            <select id="verb-select-${index}" class="verb-select" data-verb-index="${index}">
                ${optionsHTML}
            </select>
            <span class="result" id="result-${index}"></span>
        `;
        verbListContainer.appendChild(listItem);

        // === Динамическая проверка ===
        const selectElem = listItem.querySelector('.verb-select');
        const resultElem = listItem.querySelector('.result');
        selectElem.addEventListener('change', function() {
            const userAnswer = selectElem.value;
            if (!userAnswer) {
                resultElem.textContent = '';
                resultElem.style.color = '';
                return;
            }
            if (userAnswer === correctAnswer) {
                resultElem.textContent = `Верно: ${pronounDisplayNames[currentPronoun].split(' ')[0]} ${correctAnswer}`;
                resultElem.style.color = 'green';
            } else {
                resultElem.textContent = `Неверно: ${pronounDisplayNames[currentPronoun].split(' ')[0]} ${correctAnswer}`;
                resultElem.style.color = 'red';
            }
        });
    });

    checkAnswersButton.disabled = false;
    document.querySelectorAll('.verb-list-item .verb-select').forEach(select => select.disabled = false);
    
    const availableNewVerbs = verbs.filter(v => !currentExerciseVerbs.some(ev => ev.infinitive === v.infinitive));
    addMoreVerbsButton.disabled = availableNewVerbs.length === 0;
}

function addMoreVerbs() {
    if (!currentPronoun || currentExerciseVerbs.length === 0) {
        displayExercise();
        return;
    }

    const availableNewVerbs = verbs.filter(v => !currentExerciseVerbs.some(ev => ev.infinitive === v.infinitive));

    if (availableNewVerbs.length === 0) {
        alert("Больше нет уникальных глаголов для добавления.");
        addMoreVerbsButton.disabled = true;
        return;
    }

    const numToAdd = Math.min(10, availableNewVerbs.length);
    const verbsToAdd = getRandomElements(availableNewVerbs, numToAdd);

    verbsToAdd.forEach(verb => {
        currentExerciseVerbs.push(verb);
        const index = currentExerciseVerbs.length - 1;

        const listItem = document.createElement('div');
        listItem.className = 'verb-list-item';
        
        const correctAnswer = verb.conjugation[currentPronoun];
        const options = generateOptionsForMode2(correctAnswer, currentPronoun, verb.infinitive);

        let optionsHTML = '<option value="">Выберите ответ...</option>';
        options.forEach(opt => {
            optionsHTML += `<option value="${opt}">${opt}</option>`;
        });

        listItem.innerHTML = `
            <div class="verb-info">
                <span class="verb-infinitive">${verb.infinitive}</span>
                <div class="verb-translation">(${verb.translation})</div>
            </div>
            <select id="verb-select-${index}" class="verb-select" data-verb-index="${index}">
                ${optionsHTML}
            </select>
            <span class="result" id="result-${index}"></span>
        `;
        verbListContainer.appendChild(listItem);

        // === Динамическая проверка ===
        const selectElem = listItem.querySelector('.verb-select');
        const resultElem = listItem.querySelector('.result');
        selectElem.addEventListener('change', function() {
            const userAnswer = selectElem.value;
            if (!userAnswer) {
                resultElem.textContent = '';
                resultElem.style.color = '';
                return;
            }
            if (userAnswer === correctAnswer) {
                resultElem.textContent = `Верно: ${pronounDisplayNames[currentPronoun].split(' ')[0]} ${correctAnswer}`;
                resultElem.style.color = 'green';
            } else {
                resultElem.textContent = `Неверно: ${pronounDisplayNames[currentPronoun].split(' ')[0]} ${correctAnswer}`;
                resultElem.style.color = 'red';
            }
        });
    });

    checkAnswersButton.disabled = false;
    const remainingVerbs = verbs.filter(v => !currentExerciseVerbs.some(ev => ev.infinitive === v.infinitive));
    if (remainingVerbs.length === 0) {
        addMoreVerbsButton.disabled = true;
    }
}

function checkAnswers() {
    currentExerciseVerbs.forEach((verb, index) => {
        const selectElement = document.getElementById(`verb-select-${index}`);
        const resultElement = document.getElementById(`result-${index}`);
        const userAnswer = selectElement.value;
        const correctAnswer = verb.conjugation[currentPronoun];

        if (userAnswer === correctAnswer) {
            resultElement.textContent = '✓ Верно!';
            resultElement.className = 'result correct';
        } else {
            resultElement.textContent = `✗ Неверно (${correctAnswer})`;
            resultElement.className = 'result incorrect';
        }
        selectElement.disabled = true;
    });
    checkAnswersButton.disabled = true;
}

// В самом низу файла, после объявления функций:
document.addEventListener('DOMContentLoaded', () => {
    displayExercise();
    document.getElementById('pronounSelector').addEventListener('change', displayExercise);
    newExerciseButton.addEventListener('click', displayExercise);
    addMoreVerbsButton.addEventListener('click', addMoreVerbs);
});