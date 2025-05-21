const verbs = [
    {
        infinitive: 'amar',
        translation: 'любить',
        conjugation: {
            eu: 'amo',
            tu: 'amas',
            ele: 'ama',
            nos: 'amamos',
            eles: 'amam'
        }
    },
    {
        infinitive: 'falar',
        translation: 'говорить',
        conjugation: {
            eu: 'falo',
            tu: 'falas',
            ele: 'fala',
            nos: 'falamos',
            eles: 'falam'
        }
    },
    {
        infinitive: 'estudar',
        translation: 'учиться / изучать',
        conjugation: {
            eu: 'estudo',
            tu: 'estudas',
            ele: 'estuda',
            nos: 'estudamos',
            eles: 'estudam'
        }
    },
    {
        infinitive: 'trabalhar',
        translation: 'работать',
        conjugation: {
            eu: 'trabalho',
            tu: 'trabalhas',
            ele: 'trabalha',
            nos: 'trabalhamos',
            eles: 'trabalham'
        }
    },
    {
        infinitive: 'cantar',
        translation: 'петь',
        conjugation: {
            eu: 'canto',
            tu: 'cantas',
            ele: 'canta',
            nos: 'cantamos',
            eles: 'cantam'
        }
    },
    {
        infinitive: 'dançar',
        translation: 'танцевать',
        conjugation: {
            eu: 'danço',
            tu: 'danças',
            ele: 'dança',
            nos: 'dançamos',
            eles: 'dançam'
        }
    },
    {
        infinitive: 'comprar',
        translation: 'покупать',
        conjugation: {
            eu: 'compro',
            tu: 'compras',
            ele: 'compra',
            nos: 'compramos',
            eles: 'compram'
        }
    },
    {
        infinitive: 'andar',
        translation: 'ходить',
        conjugation: {
            eu: 'ando',
            tu: 'andas',
            ele: 'anda',
            nos: 'andamos',
            eles: 'andam'
        }
    },
    {
        infinitive: 'viajar',
        translation: 'путешествовать',
        conjugation: {
            eu: 'viajo',
            tu: 'viajas',
            ele: 'viaja',
            nos: 'viajamos',
            eles: 'viajam'
        }
    },
    {
        infinitive: 'jogar',
        translation: 'играть',
        conjugation: {
            eu: 'jogo',
            tu: 'jogas',
            ele: 'joga',
            nos: 'jogamos',
            eles: 'jogam'
        }
    },
    {
        infinitive: 'olhar',
        translation: 'смотреть',
        conjugation: {
            eu: 'olho',
            tu: 'olhas',
            ele: 'olha',
            nos: 'olhamos',
            eles: 'olham'
        }
    },
    {
        infinitive: 'chamar',
        translation: 'звать',
        conjugation: {
            eu: 'chamo',
            tu: 'chamas',
            ele: 'chama',
            nos: 'chamamos',
            eles: 'chamam'
        }
    },
    {
        infinitive: 'esperar',
        translation: 'ждать/надеяться',
        conjugation: {
            eu: 'espero',
            tu: 'esperas',
            ele: 'espera',
            nos: 'esperamos',
            eles: 'esperam'
        }
    },
    {
        infinitive: 'estudar',
        translation: 'учиться',
        conjugation: {
            eu: 'estudo',
            tu: 'estudas',
            ele: 'estuda',
            nos: 'estudamos',
            eles: 'estudam'
        }
    },
    {
        infinitive: 'visitar',
        translation: 'посещать',
        conjugation: {
            eu: 'visito',
            tu: 'visitas',
            ele: 'visita',
            nos: 'visitamos',
            eles: 'visitam'
        }
    },
    {
        infinitive: 'tocar',
        translation: 'трогать/играть (на инструменте)',
        conjugation: {
            eu: 'toco',
            tu: 'tocas',
            ele: 'toca',
            nos: 'tocamos',
            eles: 'tocam'
        }
    },
    {
        infinitive: 'nadar',
        translation: 'плавать',
        conjugation: {
            eu: 'nado',
            tu: 'nadas',
            ele: 'nada',
            nos: 'nadamos',
            eles: 'nadam'
        }
    },
    {
        infinitive: 'chegar',
        translation: 'прибывать',
        conjugation: {
            eu: 'chego',
            tu: 'chegas',
            ele: 'chega',
            nos: 'chegamos',
            eles: 'chegam'
        }
    },
    {
        infinitive: 'usar',
        translation: 'использовать',
        conjugation: {
            eu: 'uso',
            tu: 'usas',
            ele: 'usa',
            nos: 'usamos',
            eles: 'usam'
        }
    },
    {
        infinitive: 'gostar',
        translation: 'нравиться',
        conjugation: {
            eu: 'gosto',
            tu: 'gostas',
            ele: 'gosta',
            nos: 'gostamos',
            eles: 'gostam'
        }
    },
    {
        infinitive: 'brincar',
        translation: 'играть (дети)',
        conjugation: {
            eu: 'brinco',
            tu: 'brincas',
            ele: 'brinca',
            nos: 'brincamos',
            eles: 'brincam'
        }
    }
];

let currentVerbIndex = 0;

function generateOptions(correctAnswer, pronoun) {
    let options = [correctAnswer];
    // Получаем инфинитив текущего глагола
    const currentVerbInfinitive = verbs[currentVerbIndex].infinitive;
    let verbStem;

    // Определяем основу глагола (для -ar глаголов это инфинитив без последних двух букв)
    // Это упрощение для -ar глаголов, которые у вас в списке.
    // Для других типов глаголов (-er, -ir) логика может быть сложнее.
    if (currentVerbInfinitive.endsWith('ar')) {
        verbStem = currentVerbInfinitive.slice(0, -2);
    } else {
        // Базовая логика для других типов или если тип не определен
        // Для текущего списка глаголов это не должно срабатывать
        verbStem = currentVerbInfinitive.slice(0, currentVerbInfinitive.length - 2);
    }

    // Создаем варианты окончаний в зависимости от местоимения
    let possibleEndings;
    switch(pronoun) {
        case 'tu':
            possibleEndings = ['as', 'es', 'is', 'os', 'aste']; // Добавил типичное окончание для прошедшего времени как дистрактор
            break;
        case 'nos':
            possibleEndings = ['amos', 'emos', 'imos', 'omos', 'armos']; // Добавил окончание субхунтива как дистрактор
            break;
        case 'eles':
            possibleEndings = ['am', 'em', 'im', 'om', 'aram']; // Добавил типичное окончание для прошедшего времени
            break;
        case 'eu':
            possibleEndings = ['o', 'e', 'i', 'ei', 'ia']; // Добавил дистракторы
            break;
        case 'ele':
            possibleEndings = ['a', 'e', 'i', 'ou', 'ia']; // Добавил дистракторы
            break;
        default:
            possibleEndings = ['s', 'm', 'mos', 'o', 'a']; // Общие окончания
            break;
    }

    // Добавляем неправильные, но правдоподобные варианты
    possibleEndings.forEach(ending => {
        const option = verbStem + ending;
        if (option !== correctAnswer && !options.includes(option)) {
            options.push(option);
        }
    });

    // Убедимся, что у нас есть хотя бы 3-4 варианта, если возможно
    // Добавляем еще несколько вариантов, если нужно больше, стараясь не повторяться
    // и не создавая слишком много вариантов, если уникальных окончаний мало
    let attempts = 0;
    while (options.length < 4 && attempts < possibleEndings.length * 2) {
        const randomEnding = possibleEndings[Math.floor(Math.random() * possibleEndings.length)];
        const option = verbStem + randomEnding;
        if (!options.includes(option)) {
            options.push(option);
        }
        attempts++;
    }
    
    // Перемешиваем варианты
    return options.sort(() => Math.random() - 0.5);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayVerb() {
    const verb = verbs[currentVerbIndex];
    document.getElementById('verbInfinitive').textContent = verb.infinitive;
    document.getElementById('verbTranslation').textContent = verb.translation;

    // Получаем все формы текущего глагола
    const allForms = [
        verb.conjugation.eu,
        verb.conjugation.tu,
        verb.conjugation.ele,
        verb.conjugation.nos,
        verb.conjugation.eles
    ];

    ['eu', 'tu', 'ele', 'nos', 'eles'].forEach(pronoun => {
        const select = document.getElementById(pronoun);
        const correctAnswer = verb.conjugation[pronoun];
        select.innerHTML = '<option value="">Выберите ответ...</option>';
        // Перемешиваем формы для каждого селекта отдельно
        const shuffledForms = shuffleArray([...allForms]);
        shuffledForms.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });
        select.disabled = false;

        // === Очистка классов при переходе к новому глаголу ===
        select.classList.remove('correct', 'incorrect');

        // === Проверка при выборе опции ===
        select.addEventListener('change', function () {
            select.classList.remove('correct', 'incorrect');
            if (select.value === "") {
                // ничего не выделяем
            } else if (select.value === correctAnswer) {
                select.classList.add('correct');
            } else {
                select.classList.add('incorrect');
            }
        });
    });

    document.querySelectorAll('.result').forEach(span => {
        span.textContent = '';
        span.className = 'result';
    });

    document.getElementById('checkButton').style.display = 'inline-block';
    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswers() {
    const verb = verbs[currentVerbIndex];
    let allCorrect = true;
    
    ['eu', 'tu', 'ele', 'nos', 'eles'].forEach(pronoun => {
        const select = document.getElementById(pronoun);
        const result = select.nextElementSibling;
        const userAnswer = select.value;
        const correctAnswer = verb.conjugation[pronoun];
        
        if (userAnswer === correctAnswer) {
            result.textContent = '✓';
            result.className = 'result correct';
        } else {
            result.textContent = `✗ (${correctAnswer})`;
            result.className = 'result incorrect';
            allCorrect = false;
        }
        
        select.disabled = true;
    });
    
    document.getElementById('checkButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'inline-block';
}

function nextVerb() {
    currentVerbIndex = (currentVerbIndex + 1) % verbs.length;
    displayVerb();
}

document.addEventListener('DOMContentLoaded', () => {
    displayVerb();
    
    document.getElementById('checkButton').addEventListener('click', checkAnswers);
    document.getElementById('nextButton').addEventListener('click', nextVerb);
});