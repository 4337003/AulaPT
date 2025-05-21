const allVerbs = [ // Переименуем исходный массив для ясности
    {
        infinitive: 'amar',
        translation: 'любить',
        conjugation: { eu: 'amo', tu: 'amas', ele: 'ama', nos: 'amamos', eles: 'amam' }
    },
    {
        infinitive: 'falar',
        translation: 'говорить',
        conjugation: { eu: 'falo', tu: 'falas', ele: 'fala', nos: 'falamos', eles: 'falam' }
    },
    {
        infinitive: 'estudar',
        translation: 'учиться / изучать',
        conjugation: { eu: 'estudo', tu: 'estudas', ele: 'estuda', nos: 'estudamos', eles: 'estudam' }
    },
    {
        infinitive: 'comer',
        translation: 'есть, кушать',
        conjugation: { eu: 'como', tu: 'comes', ele: 'come', nos: 'comemos', eles: 'comem' }
    },
    {
        infinitive: 'beber',
        translation: 'пить',
        conjugation: { eu: 'bebo', tu: 'bebes', ele: 'bebe', nos: 'bebemos', eles: 'bebem' }
    },
    {
        infinitive: 'viver',
        translation: 'жить',
        conjugation: { eu: 'vivo', tu: 'vives', ele: 'vive', nos: 'vivemos', eles: 'vivem' }
    },
    {
        infinitive: 'abrir',
        translation: 'открывать',
        conjugation: { eu: 'abro', tu: 'abres', ele: 'abre', nos: 'abrimos', eles: 'abrem' }
    },
    {
        infinitive: 'partir',
        translation: 'уезжать, разделять',
        conjugation: { eu: 'parto', tu: 'partes', ele: 'parte', nos: 'partimos', eles: 'partem' }
    },
    {
        infinitive: 'precisar',
        translation: 'нуждаться',
        conjugation: { eu: 'preciso', tu: 'precisas', ele: 'precisa', nos: 'precisamos', eles: 'precisam' }
    },
    {
        infinitive: 'trabalhar',
        translation: 'работать',
        conjugation: { eu: 'trabalho', tu: 'trabalhas', ele: 'trabalha', nos: 'trabalhamos', eles: 'trabalham' }
    },
    {
        infinitive: 'ler', // -er
        translation: 'читать',
        conjugation: { eu: 'leio', tu: 'lês', ele: 'lê', nos: 'lemos', eles: 'leem' }
    },
    {
        infinitive: 'escrever', // -er
        translation: 'писать',
        conjugation: { eu: 'escrevo', tu: 'escreves', ele: 'escreve', nos: 'escrevemos', eles: 'escrevem' }
    },
    // 20 глаголов, добавленных на предыдущем шаге
    {
        infinitive: 'querer',
        translation: 'хотеть',
        conjugation: { eu: 'quero', tu: 'queres', ele: 'quer', nos: 'queremos', eles: 'querem' }
    },
    {
        infinitive: 'ter',
        translation: 'иметь',
        conjugation: { eu: 'tenho', tu: 'tens', ele: 'tem', nos: 'temos', eles: 'têm' }
    },
    {
        infinitive: 'ser',
        translation: 'быть (постоянно)',
        conjugation: { eu: 'sou', tu: 'és', ele: 'é', nos: 'somos', eles: 'são' }
    },
    {
        infinitive: 'estar',
        translation: 'быть (временно)',
        conjugation: { eu: 'estou', tu: 'estás', ele: 'está', nos: 'estamos', eles: 'estão' }
    },
    {
        infinitive: 'poder',
        translation: 'мочь',
        conjugation: { eu: 'posso', tu: 'podes', ele: 'pode', nos: 'podemos', eles: 'podem' }
    },
    {
        infinitive: 'fazer',
        translation: 'делать',
        conjugation: { eu: 'faço', tu: 'fazes', ele: 'faz', nos: 'fazemos', eles: 'fazem' }
    },
    {
        infinitive: 'dizer',
        translation: 'сказать',
        conjugation: { eu: 'digo', tu: 'dizes', ele: 'diz', nos: 'dizemos', eles: 'dizem' }
    },
    {
        infinitive: 'ir',
        translation: 'идти, ехать',
        conjugation: { eu: 'vou', tu: 'vais', ele: 'vai', nos: 'vamos', eles: 'vão' }
    },
    {
        infinitive: 'vir',
        translation: 'приходить, приезжать',
        conjugation: { eu: 'venho', tu: 'vens', ele: 'vem', nos: 'vimos', eles: 'vêm' }
    },
    {
        infinitive: 'ver',
        translation: 'видеть',
        conjugation: { eu: 'vejo', tu: 'vês', ele: 'vê', nos: 'vemos', eles: 'veem' }
    },
    {
        infinitive: 'dar',
        translation: 'давать',
        conjugation: { eu: 'dou', tu: 'dás', ele: 'dá', nos: 'damos', eles: 'dão' }
    },
    {
        infinitive: 'saber',
        translation: 'знать',
        conjugation: { eu: 'sei', tu: 'sabes', ele: 'sabe', nos: 'sabemos', eles: 'sabem' }
    },
    {
        infinitive: 'dormir',
        translation: 'спать',
        conjugation: { eu: 'durmo', tu: 'dormes', ele: 'dorme', nos: 'dormimos', eles: 'dormem' }
    },
    {
        infinitive: 'pedir',
        translation: 'просить',
        conjugation: { eu: 'peço', tu: 'pedes', ele: 'pede', nos: 'pedimos', eles: 'pedem' }
    },
    {
        infinitive: 'sentir',
        translation: 'чувствовать',
        conjugation: { eu: 'sinto', tu: 'sentes', ele: 'sente', nos: 'sentimos', eles: 'sentem' }
    },
    {
        infinitive: 'ouvir',
        translation: 'слышать',
        conjugation: { eu: 'ouço', tu: 'ouves', ele: 'ouve', nos: 'ouvimos', eles: 'ouvem' }
    },
    {
        infinitive: 'subir',
        translation: 'подниматься',
        conjugation: { eu: 'subo', tu: 'sobes', ele: 'sobe', nos: 'subimos', eles: 'sobem' }
    },
    {
        infinitive: 'descer',
        translation: 'спускаться',
        conjugation: { eu: 'desço', tu: 'desces', ele: 'desce', nos: 'descemos', eles: 'descem' }
    },
    {
        infinitive: 'correr',
        translation: 'бежать',
        conjugation: { eu: 'corro', tu: 'corres', ele: 'corre', nos: 'corremos', eles: 'correm' }
    },
    {
        infinitive: 'cantar',
        translation: 'петь',
        conjugation: { eu: 'canto', tu: 'cantas', ele: 'canta', nos: 'cantamos', eles: 'cantam' }
    },
    // Еще 30 новых глаголов для достижения общего числа в 50 добавленных
    {
        infinitive: 'ajudar',
        translation: 'помогать',
        conjugation: { eu: 'ajudo', tu: 'ajudas', ele: 'ajuda', nos: 'ajudamos', eles: 'ajudam' }
    },
    {
        infinitive: 'andar',
        translation: 'ходить, гулять',
        conjugation: { eu: 'ando', tu: 'andas', ele: 'anda', nos: 'andamos', eles: 'andam' }
    },
    {
        infinitive: 'brincar',
        translation: 'играть',
        conjugation: { eu: 'brinco', tu: 'brincas', ele: 'brinca', nos: 'brincamos', eles: 'brincam' }
    },
    {
        infinitive: 'comprar',
        translation: 'покупать',
        conjugation: { eu: 'compro', tu: 'compras', ele: 'compra', nos: 'compramos', eles: 'compram' }
    },
    {
        infinitive: 'cozinhar',
        translation: 'готовить еду',
        conjugation: { eu: 'cozinho', tu: 'cozinhas', ele: 'cozinha', nos: 'cozinhamos', eles: 'cozinham' }
    },
    {
        infinitive: 'dançar',
        translation: 'танцевать',
        conjugation: { eu: 'danço', tu: 'danças', ele: 'dança', nos: 'dançamos', eles: 'dançam' }
    },
    {
        infinitive: 'deixar',
        translation: 'оставлять, позволять',
        conjugation: { eu: 'deixo', tu: 'deixas', ele: 'deixa', nos: 'deixamos', eles: 'deixam' }
    },
    {
        infinitive: 'encontrar',
        translation: 'находить, встречать',
        conjugation: { eu: 'encontro', tu: 'encontras', ele: 'encontra', nos: 'encontramos', eles: 'encontram' }
    },
    {
        infinitive: 'entrar',
        translation: 'входить',
        conjugation: { eu: 'entro', tu: 'entras', ele: 'entra', nos: 'entramos', eles: 'entram' }
    },
    {
        infinitive: 'esperar',
        translation: 'ждать, надеяться',
        conjugation: { eu: 'espero', tu: 'esperas', ele: 'espera', nos: 'esperamos', eles: 'esperam' }
    },
    {
        infinitive: 'fechar',
        translation: 'закрывать',
        conjugation: { eu: 'fecho', tu: 'fechas', ele: 'fecha', nos: 'fechamos', eles: 'fecham' }
    },
    {
        infinitive: 'ganhar',
        translation: 'выигрывать, зарабатывать',
        conjugation: { eu: 'ganho', tu: 'ganhas', ele: 'ganha', nos: 'ganhamos', eles: 'ganham' }
    },
    {
        infinitive: 'gostar',
        translation: 'нравиться',
        conjugation: { eu: 'gosto', tu: 'gostas', ele: 'gosta', nos: 'gostamos', eles: 'gostam' }
    },
    {
        infinitive: 'lavar',
        translation: 'мыть',
        conjugation: { eu: 'lavo', tu: 'lavas', ele: 'lava', nos: 'lavamos', eles: 'lavam' }
    },
    {
        infinitive: 'levar',
        translation: 'нести, брать с собой',
        conjugation: { eu: 'levo', tu: 'levas', ele: 'leva', nos: 'levamos', eles: 'levam' }
    },
    {
        infinitive: 'limpar',
        translation: 'чистить, убирать',
        conjugation: { eu: 'limpo', tu: 'limpas', ele: 'limpa', nos: 'limpamos', eles: 'limpam' }
    },
    {
        infinitive: 'olhar',
        translation: 'смотреть',
        conjugation: { eu: 'olho', tu: 'olhas', ele: 'olha', nos: 'olhamos', eles: 'olham' }
    },
    {
        infinitive: 'pagar',
        translation: 'платить',
        conjugation: { eu: 'pago', tu: 'pagas', ele: 'paga', nos: 'pagamos', eles: 'pagam' }
    },
    {
        infinitive: 'passar',
        translation: 'проходить, проводить время',
        conjugation: { eu: 'passo', tu: 'passas', ele: 'passa', nos: 'passamos', eles: 'passam' }
    },
    {
        infinitive: 'pensar',
        translation: 'думать',
        conjugation: { eu: 'penso', tu: 'pensas', ele: 'pensa', nos: 'pensamos', eles: 'pensam' }
    },
    {
        infinitive: 'aprender',
        translation: 'учить, изучать',
        conjugation: { eu: 'aprendo', tu: 'aprendes', ele: 'aprende', nos: 'aprendemos', eles: 'aprendem' }
    },
    {
        infinitive: 'conhecer',
        translation: 'знать, быть знакомым',
        conjugation: { eu: 'conheço', tu: 'conheces', ele: 'conhece', nos: 'conhecemos', eles: 'conhecem' }
    },
    {
        infinitive: 'dever',
        translation: 'быть должным',
        conjugation: { eu: 'devo', tu: 'deves', ele: 'deve', nos: 'devemos', eles: 'devem' }
    },
    {
        infinitive: 'entender',
        translation: 'понимать',
        conjugation: { eu: 'entendo', tu: 'entendes', ele: 'entende', nos: 'entendemos', eles: 'entendem' }
    },
    {
        infinitive: 'escolher',
        translation: 'выбирать',
        conjugation: { eu: 'escolho', tu: 'escolhes', ele: 'escolhe', nos: 'escolhemos', eles: 'escolhem' }
    },
    {
        infinitive: 'perder',
        translation: 'терять',
        conjugation: { eu: 'perco', tu: 'perdes', ele: 'perde', nos: 'perdemos', eles: 'perdem' } // eu - perco (нерегулярный)
    },
    {
        infinitive: 'receber',
        translation: 'получать',
        conjugation: { eu: 'recebo', tu: 'recebes', ele: 'recebe', nos: 'recebemos', eles: 'recebem' }
    },
    {
        infinitive: 'vender',
        translation: 'продавать',
        conjugation: { eu: 'vendo', tu: 'vendes', ele: 'vende', nos: 'vendemos', eles: 'vendem' }
    },
    {
        infinitive: 'assistir',
        translation: 'смотреть, присутствовать',
        conjugation: { eu: 'assisto', tu: 'assistes', ele: 'assiste', nos: 'assistimos', eles: 'assistem' }
    },
    {
        infinitive: 'decidir',
        translation: 'решать',
        conjugation: { eu: 'decido', tu: 'decides', ele: 'decide', nos: 'decidimos', eles: 'decidem' }
    }
];

// Фильтруем глаголы, чтобы остались только те, что заканчиваются на -ar, -er, или -ir
const verbs = allVerbs.filter(verb => {
    const infinitive = verb.infinitive.toLowerCase();
    return infinitive.endsWith('ar') || infinitive.endsWith('er') || infinitive.endsWith('ir');
});

const pronouns = ['eu', 'tu', 'ele', 'nos', 'eles'];
const pronounDisplayNames = {
    eu: 'Eu (я)',
    tu: 'Tu (ты)',
    ele: 'Ele/Ela/Você (он/она/Вы)',
    nos: 'Nós (мы)',
    eles: 'Eles/Elas/Vocês (они/Вы мн.ч.)'
};

let currentExerciseVerbs = [];
let currentPronoun = '';

const verbListContainer = document.getElementById('verbListContainer');
const targetPronounElement = document.getElementById('targetPronoun');
const checkAnswersButton = document.getElementById('checkAnswersButton');
const newExerciseButton = document.getElementById('newExerciseButton');
const addMoreVerbsButton = document.getElementById('addMoreVerbsButton'); // Получаем новую кнопку

// Обновленная функция для генерации вариантов для Режима 2
function generateOptionsForMode2(correctAnswer, pronoun, verbInfinitive) {
    let options = [correctAnswer];
    let potentialIncorrectOptions = [];

    // 1. Собираем спряжения текущего глагола для ДРУГИХ местоимений
    const currentVerbObject = verbs.find(v => v.infinitive === verbInfinitive);
    if (currentVerbObject) {
        for (const p in currentVerbObject.conjugation) {
            if (p !== pronoun) { // Убедимся, что это другое местоимение
                const form = currentVerbObject.conjugation[p];
                // Убедимся, что форма не является правильным ответом и еще не добавлена
                if (form !== correctAnswer && !potentialIncorrectOptions.includes(form)) {
                    potentialIncorrectOptions.push(form);
                }
            }
        }
    }

    // Перемешиваем потенциальные неправильные варианты, собранные из форм текущего глагола
    potentialIncorrectOptions.sort(() => Math.random() - 0.5);

    // Добавляем неправильные варианты в основной список, пока не наберем до 4 вариантов всего (или пока есть варианты)
    let i = 0;
    while (options.length < 4 && i < potentialIncorrectOptions.length) {
        // Дополнительная проверка на уникальность в основном списке options
        if (!options.includes(potentialIncorrectOptions[i])) {
            options.push(potentialIncorrectOptions[i]);
        }
        i++;
    }
    
    // Если после сбора форм текущего глагола вариантов все еще меньше 4,
    // то список будет содержать меньше 4 вариантов.
    // Это соответствует требованию использовать "только другие формы этого же глагола".

    // Финально перемешиваем все опции
    return options.sort(() => Math.random() - 0.5);
}


function getRandomElements(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// 1. Получаем или создаём селектор местоимений
const pronounSelector = document.getElementById('pronounSelector') || (() => {
    // Если селектора нет в HTML, создаём и вставляем его перед verbListContainer
    const sel = document.createElement('select');
    sel.id = 'pronounSelector';
    pronouns.forEach(pr => {
        const opt = document.createElement('option');
        opt.value = pr;
        opt.textContent = pronounDisplayNames[pr];
        sel.appendChild(opt);
    });
    verbListContainer.parentNode.insertBefore(sel, verbListContainer);
    return sel;
})();

// 2. Обновляем функцию displayExercise для использования выбранного местоимения
function displayExercise() {
    currentPronoun = pronounSelector.value || pronouns[0];
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
        // Если упражнение еще не начато, ничего не делаем или можно вызвать displayExercise()
        displayExercise(); // Начнем новое упражнение, если еще не было
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
        currentExerciseVerbs.push(verb); // Добавляем в общий список текущих глаголов
        const index = currentExerciseVerbs.length - 1; // Индекс нового глагола

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
    });

    checkAnswersButton.disabled = false; // Включаем кнопку проверки, если была выключена
    // Проверяем, остались ли еще глаголы для добавления
    const remainingVerbs = verbs.filter(v => !currentExerciseVerbs.some(ev => ev.infinitive === v.infinitive));
    if (remainingVerbs.length === 0) {
        addMoreVerbsButton.disabled = true;
    }
}


function checkAnswers() {
    currentExerciseVerbs.forEach((verb, index) => {
        const selectElement = document.getElementById(`verb-select-${index}`);
        const resultElement = document.getElementById(`result-${index}`);
        const userAnswer = selectElement.value; // .trim().toLowerCase() не нужно для select value
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

document.addEventListener('DOMContentLoaded', () => {
    if (verbs.length === 0) {
        verbListContainer.innerHTML = '<p>Пожалуйста, добавьте глаголы в массив `verbs` в файле script_mode2.js</p>';
        checkAnswersButton.disabled = true;
        newExerciseButton.disabled = true;
        addMoreVerbsButton.disabled = true; // Также отключаем новую кнопку
        return;
    }
    displayExercise(); // Отображаем начальное упражнение
    checkAnswersButton.addEventListener('click', checkAnswers);
    newExerciseButton.addEventListener('click', displayExercise);
    addMoreVerbsButton.addEventListener('click', addMoreVerbs); // Добавляем обработчик для новой кнопки
});

// 3. Добавляем обработчик изменения select
pronounSelector.addEventListener('change', displayExercise);

// 4. При инициализации выставляем значение по умолчанию и вызываем displayExercise
pronounSelector.value = pronouns[0];
displayExercise();