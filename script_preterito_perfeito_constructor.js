const ppsPhrases = [
    {
        sentence: "Eu falei com ela ontem.",
        translation: "Я поговорил с ней вчера.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["falei", "falou", "falamos", "falaram"], correct: "falei" },
            { options: ["com", "para", "de", "em"], correct: "com" },
            { options: ["ela", "ele", "eles", "nós"], correct: "ela" },
            { options: ["ontem", "hoje", "amanhã", "sempre"], correct: "ontem" }
        ]
    },
    {
        sentence: "Eu trabalhei ontem.",
        translation: "Я работал вчера.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Eu" },
            { options: ["trabalhei", "trabalhou", "trabalhamos", "trabalharam"], correct: "trabalhei" },
            { options: ["ontem", "hoje", "amanhã", "sempre"], correct: "ontem" }
        ]
    },
    {
        sentence: "Tu aprendeste muito.",
        translation: "Ты много выучил.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["aprendi", "aprendeste", "aprendeu", "aprendemos"], correct: "aprendeste" },
            { options: ["muito", "pouco", "bem", "nada"], correct: "muito" }
        ]
    },
    {
        sentence: "Ela abriu a porta.",
        translation: "Она открыла дверь.",
        words: [
            { options: ["Ele", "Ela", "Nós", "Vocês", "Eles"], correct: "Ela" },
            { options: ["abri", "abriu", "abrimos", "abriram"], correct: "abriu" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["porta", "janela", "casa", "mala"], correct: "porta" }
        ]
    },
    {
        sentence: "Nós estudámos português.",
        translation: "Мы изучали португальский.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Nós" },
            { options: ["estudei", "estudaste", "estudou", "estudámos"], correct: "estudámos" },
            { options: ["português", "inglês", "espanhol", "francês"], correct: "português" }
        ]
    },
    {
        sentence: "Vocês comeram tudo.",
        translation: "Вы всё съели.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Vocês" },
            { options: ["comi", "comeu", "comemos", "comeram"], correct: "comeram" },
            { options: ["tudo", "nada", "pouco", "muito"], correct: "tudo" }
        ]
    },
    {
        sentence: "Eu fui muito feliz ali.",
        translation: "Я был очень счастлив там.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["fui", "foi", "fomos", "foram"], correct: "fui" },
            { options: ["muito", "pouco", "bem", "mal"], correct: "muito" },
            { options: ["feliz", "triste", "cansado", "doente"], correct: "feliz" },
            { options: ["ali", "aqui", "lá", "cá"], correct: "ali" }
        ]
    },
    {
        sentence: "Tu foste ao supermercado.",
        translation: "Ты ходил в супермаркет.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["fui", "foste", "foi", "fomos"], correct: "foste" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["supermercado", "mercado", "loja", "padaria"], correct: "supermercado" }
        ]
    },
    {
        sentence: "Ele esteve doente.",
        translation: "Он был болен.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["estive", "estiveste", "esteve", "estivemos"], correct: "esteve" },
            { options: ["doente", "feliz", "triste", "cansado"], correct: "doente" }
        ]
    },
    {
        sentence: "Nós tivemos uma ideia.",
        translation: "У нас появилась идея.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["tive", "tiveste", "teve", "tivemos"], correct: "tivemos" },
            { options: ["uma", "um", "umas", "uns"], correct: "uma" },
            { options: ["ideia", "casa", "viagem", "festa"], correct: "ideia" }
        ]
    },
    {
        sentence: "Eu fiz o jantar ontem.",
        translation: "Я приготовил ужин вчера.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["fiz", "fez", "fizemos", "fizeram"], correct: "fiz" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["jantar", "almoço", "café", "lanche"], correct: "jantar" },
            { options: ["ontem", "hoje", "amanhã", "sempre"], correct: "ontem" }
        ]
    },
    {
        sentence: "Nós viajamos para o Brasil no ano passado.",
        translation: "Мы ездили в Бразилию в прошлом году.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["viajei", "viajou", "viajamos", "viajaram"], correct: "viajamos" },
            { options: ["para", "em", "de", "por"], correct: "para" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["Brasil", "Portugal", "Rússia", "Espanha"], correct: "Brasil" },
            { options: ["no", "em", "de", "por"], correct: "no" },
            { options: ["ano", "mês", "dia", "semana"], correct: "ano" },
            { options: ["passado", "presente", "futuro", "novo"], correct: "passado" }
        ]
    },
    {
        sentence: "Nós começámos a aula às nove.",
        translation: "Мы начали урок в девять.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["comecei", "começaste", "começou", "começámos"], correct: "começámos" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["aula", "lição", "prova", "tarefa"], correct: "aula" },
            { options: ["às", "às", "ao", "aos"], correct: "às" },
            { options: ["nove", "dez", "oito", "sete"], correct: "nove" }
        ]
    },
    {
        sentence: "O Pedro respondeu à pergunta.",
        translation: "Педру ответил на вопрос.",
        words: [
            { options: ["O Pedro", "A Maria", "Ele", "Nós"], correct: "O Pedro" },
            { options: ["respondi", "respondeu", "responderam", "respondemos"], correct: "respondeu" },
            { options: ["à", "ao", "às", "aos"], correct: "à" },
            { options: ["pergunta", "resposta", "prova", "lição"], correct: "pergunta" }
        ]
    },
    {
        sentence: "A Maria dançou muito na festa.",
        translation: "Мария много танцевала на празднике.",
        words: [
            { options: ["A Maria", "O Pedro", "Ela", "Nós"], correct: "A Maria" },
            { options: ["dancei", "dançou", "dançaram", "dançámos"], correct: "dançou" },
            { options: ["muito", "pouco", "bem", "mal"], correct: "muito" },
            { options: ["na", "no", "em", "ao"], correct: "na" },
            { options: ["festa", "escola", "casa", "rua"], correct: "festa" }
        ]
    },
    {
        sentence: "Eu viajei para o Porto no mês passado.",
        translation: "Я ездил в Порту в прошлом месяце.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["viajei", "viajou", "viajamos", "viajaram"], correct: "viajei" },
            { options: ["para", "em", "de", "por"], correct: "para" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["Porto", "Lisboa", "Faro", "Coimbra"], correct: "Porto" },
            { options: ["no", "em", "de", "por"], correct: "no" },
            { options: ["mês", "ano", "dia", "semana"], correct: "mês" },
            { options: ["passado", "presente", "futuro", "novo"], correct: "passado" }
        ]
    },
    {
        sentence: "Eles chegaram tarde ontem.",
        translation: "Они пришли поздно вчера.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["cheguei", "chegou", "chegámos", "chegaram"], correct: "chegaram" },
            { options: ["tarde", "cedo", "ontem", "hoje"], correct: "tarde" },
            { options: ["ontem", "hoje", "amanhã", "sempre"], correct: "ontem" }
        ]
    },
    {
        sentence: "Tu compraste pão esta manhã?",
        translation: "Ты купил хлеб этим утром?",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["comprei", "compraste", "comprou", "compraram"], correct: "compraste" },
            { options: ["pão", "leite", "carne", "fruta"], correct: "pão" },
            { options: ["esta", "essa", "aquela", "toda"], correct: "esta" },
            { options: ["manhã", "noite", "tarde", "semana"], correct: "manhã" }
        ]
    },
    {
        sentence: "Ela vendeu o carro antigo.",
        translation: "Она продала старую машину.",
        words: [
            { options: ["Ele", "Ela", "Nós", "Vocês", "Eles"], correct: "Ela" },
            { options: ["vendi", "vendeu", "vendemos", "venderam"], correct: "vendeu" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["carro", "casa", "livro", "roupa"], correct: "carro" },
            { options: ["antigo", "novo", "velho", "grande"], correct: "antigo" }
        ]
    },
    {
        sentence: "Nós esquecemos os bilhetes em casa.",
        translation: "Мы забыли билеты дома.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["esqueci", "esqueceste", "esqueceu", "esquecemos"], correct: "esquecemos" },
            { options: ["os", "as", "o", "a"], correct: "os" },
            { options: ["bilhetes", "livros", "chaves", "moedas"], correct: "bilhetes" },
            { options: ["em", "no", "na", "ao"], correct: "em" },
            { options: ["casa", "escola", "carro", "rua"], correct: "casa" }
        ]
    },
    {
        sentence: "Eu ouvi barulhos estranhos.",
        translation: "Я слышал странные звуки.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["ouvi", "ouviu", "ouvimos", "ouviram"], correct: "ouvi" },
            { options: ["barulhos", "sons", "vozes", "palavras"], correct: "barulhos" },
            { options: ["estranhos", "altos", "baixos", "novos"], correct: "estranhos" }
        ]
    },
    {
        sentence: "Eles perderam o autocarro.",
        translation: "Они опоздали на автобус.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["perdi", "perdeu", "perdemos", "perderam"], correct: "perderam" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["autocarro", "comboio", "carro", "avião"], correct: "autocarro" }
        ]
    },
    {
        sentence: "Tu sentiste frio na montanha?",
        translation: "Ты замёрз в горах?",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["senti", "sentiste", "sentiu", "sentiram"], correct: "sentiste" },
            { options: ["frio", "calor", "medo", "sono"], correct: "frio" },
            { options: ["na", "no", "em", "ao"], correct: "na" },
            { options: ["montanha", "praia", "cidade", "rua"], correct: "montanha" }
        ]
    },
    {
        sentence: "A Ana preferiu ficar em casa.",
        translation: "Ана предпочла остаться дома.",
        words: [
            { options: ["A Ana", "O João", "Ela", "Ele"], correct: "A Ana" },
            { options: ["preferi", "preferiu", "preferimos", "preferiram"], correct: "preferiu" },
            { options: ["ficar", "ir", "sair", "voltar"], correct: "ficar" },
            { options: ["em", "no", "na", "ao"], correct: "em" },
            { options: ["casa", "escola", "trabalho", "rua"], correct: "casa" }
        ]
    },
    {
        sentence: "O João pediu ajuda.",
        translation: "Жуан попросил помощи.",
        words: [
            { options: ["O João", "A Ana", "Ele", "Ela"], correct: "O João" },
            { options: ["pedi", "pediu", "pedimos", "pediram"], correct: "pediu" },
            { options: ["ajuda", "dinheiro", "tempo", "comida"], correct: "ajuda" }
        ]
    },
    {
        sentence: "Eles comeram pizza ontem à noite.",
        translation: "Они ели пиццу вчера вечером.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["comi", "comeu", "comemos", "comeram"], correct: "comeram" },
            { options: ["pizza", "massa", "arroz", "carne"], correct: "pizza" },
            { options: ["ontem", "hoje", "amanhã", "sempre"], correct: "ontem" },
            { options: ["à noite", "de manhã", "à tarde", "ao meio-dia"], correct: "à noite" }
        ]
    },
    {
        sentence: "Eu vi um filme interessante.",
        translation: "Я посмотрел интересный фильм.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["vi", "viu", "vimos", "viram"], correct: "vi" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["filme", "livro", "jogo", "concerto"], correct: "filme" },
            { options: ["interessante", "chato", "novo", "velho"], correct: "interessante" }
        ]
    },
    {
        sentence: "Tu disseste a verdade?",
        translation: "Ты сказал правду?",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["disse", "disseste", "disse", "dissemos"], correct: "disseste" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["verdade", "mentira", "história", "piada"], correct: "verdade" }
        ]
    },
    {
        sentence: "Ele trouxe flores para a mãe.",
        translation: "Он принес цветы для мамы.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["trouxe", "trouxeste", "trouxe", "trouxemos"], correct: "trouxe" },
            { options: ["flores", "presentes", "livros", "doces"], correct: "flores" },
            { options: ["para", "com", "de", "em"], correct: "para" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["mãe", "pai", "irmão", "irmã"], correct: "mãe" }
        ]
    },
    {
        sentence: "Nós pusemos a mesa.",
        translation: "Мы накрыли на стол.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["pus", "puseste", "pôs", "pusemos"], correct: "pusemos" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["mesa", "cama", "cadeira", "porta"], correct: "mesa" }
        ]
    },
    {
        sentence: "Vocês souberam a resposta.",
        translation: "Вы знали ответ.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Vocês" },
            { options: ["soube", "soubeste", "soube", "soubemos"], correct: "souberam" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["resposta", "pergunta", "solução", "notícia"], correct: "resposta" }
        ]
    },
    {
        sentence: "Eu quis comprar um carro novo.",
        translation: "Я хотел купить новую машину.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["quis", "quiseste", "quis", "quisemos"], correct: "quis" },
            { options: ["comprar", "vender", "alugar", "trocar"], correct: "comprar" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["carro", "casa", "livro", "telefone"], correct: "carro" },
            { options: ["novo", "velho", "antigo", "grande"], correct: "novo" }
        ]
    },
    {
        sentence: "Eles vieram de Portugal.",
        translation: "Они приехали из Португалии.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["vim", "vieste", "veio", "viemos"], correct: "vieram" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["Portugal", "Brasil", "Espanha", "França"], correct: "Portugal" }
        ]
    },
    {
        sentence: "A Joana deu um presente ao amigo.",
        translation: "Жуана подарила подарок другу.",
        words: [
            { options: ["A Joana", "O Pedro", "Ela", "Ele"], correct: "A Joana" },
            { options: ["dei", "deste", "deu", "demos"], correct: "deu" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["presente", "livro", "flor", "cartão"], correct: "presente" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["amigo", "amiga", "irmão", "irmã"], correct: "amigo" }
        ]
    },
    {
        sentence: "Nós lemos um livro interessante.",
        translation: "Мы прочитали интересную книгу.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["li", "leste", "leu", "lemos"], correct: "lemos" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["livro", "revista", "jornal", "artigo"], correct: "livro" },
            { options: ["interessante", "chato", "novo", "velho"], correct: "interessante" }
        ]
    },
    {
        sentence: "Eu escrevi uma carta.",
        translation: "Я написал письмо.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["escrevi", "escreveste", "escreveu", "escrevemos"], correct: "escrevi" },
            { options: ["uma", "um", "umas", "uns"], correct: "uma" },
            { options: ["carta", "mensagem", "email", "nota"], correct: "carta" }
        ]
    },
    {
        sentence: "Ele bebeu café de manhã.",
        translation: "Он выпил кофе утром.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["bebi", "bebeste", "bebeu", "bebemos"], correct: "bebeu" },
            { options: ["café", "chá", "leite", "água"], correct: "café" },
            { options: ["de manhã", "à tarde", "à noite", "ao meio-dia"], correct: "de manhã" }
        ]
    },
    {
        sentence: "Nós vimos um espetáculo.",
        translation: "Мы посмотрели представление.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["vi", "viu", "vimos", "viram"], correct: "vimos" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["espetáculo", "filme", "concerto", "jogo"], correct: "espetáculo" }
        ]
    },
    {
        sentence: "Vocês disseram adeus.",
        translation: "Вы попрощались.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Vocês" },
            { options: ["disse", "disseste", "disse", "dissemos"], correct: "disseram" },
            { options: ["adeus", "olá", "obrigado", "por favor"], correct: "adeus" }
        ]
    },
    {
        sentence: "Eu pus o livro na mesa.",
        translation: "Я положил книгу на стол.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["pus", "puseste", "pôs", "pusemos"], correct: "pus" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["livro", "caderno", "telefone", "chave"], correct: "livro" },
            { options: ["na", "no", "em", "ao"], correct: "na" },
            { options: ["mesa", "cadeira", "chão", "prateleira"], correct: "mesa" }
        ]
    },
    {
        sentence: "Eles souberam a notícia.",
        translation: "Они узнали новость.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["soube", "soubeste", "soube", "soubemos"], correct: "souberam" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["notícia", "resposta", "pergunta", "história"], correct: "notícia" }
        ]
    },
    {
        sentence: "Tu quiseste ir ao cinema.",
        translation: "Ты хотел пойти в кино.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["quis", "quiseste", "quis", "quisemos"], correct: "quiseste" },
            { options: ["ir", "ficar", "sair", "voltar"], correct: "ir" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["cinema", "teatro", "restaurante", "parque"], correct: "cinema" }
        ]
    },
    {
        sentence: "Nós viemos de carro.",
        translation: "Мы приехали на машине.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["vim", "vieste", "veio", "viemos"], correct: "viemos" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["carro", "comboio", "autocarro", "avião"], correct: "carro" }
        ]
    },
    {
        sentence: "O João deu um abraço.",
        translation: "Жуан обнял.",
        words: [
            { options: ["O João", "A Maria", "Ele", "Ela"], correct: "O João" },
            { options: ["dei", "deste", "deu", "demos"], correct: "deu" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["abraço", "beijo", "presente", "sorriso"], correct: "abraço" }
        ]
    },
    {
        sentence: "Eu li um jornal hoje.",
        translation: "Я прочитал газету сегодня.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["li", "leste", "leu", "lemos"], correct: "li" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["jornal", "livro", "revista", "artigo"], correct: "jornal" },
            { options: ["hoje", "ontem", "amanhã", "sempre"], correct: "hoje" }
        ]
    },
    {
        sentence: "Eles escreveram um email.",
        translation: "Они написали электронное письмо.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["escrevi", "escreveste", "escreveu", "escrevemos"], correct: "escreveram" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["email", "carta", "mensagem", "nota"], correct: "email" }
        ]
    },
    {
        sentence: "A Maria abriu a janela.",
        translation: "Мария открыла окно.",
        words: [
            { options: ["A Maria", "O Pedro", "Ela", "Ele"], correct: "A Maria" },
            { options: ["abri", "abriu", "abrimos", "abriram"], correct: "abriu" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["janela", "porta", "mala", "caixa"], correct: "janela" }
        ]
    },
    {
        sentence: "Nós estudámos para a prova.",
        translation: "Мы готовились к тесту.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Nós" },
            { options: ["estudei", "estudaste", "estudou", "estudámos"], correct: "estudámos" },
            { options: ["para", "em", "de", "por"], correct: "para" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["prova", "aula", "lição", "exame"], correct: "prova" }
        ]
    },
    {
        sentence: "Eu comi uma maçã.",
        translation: "Я съел яблоко.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["comi", "comeu", "comemos", "comeram"], correct: "comi" },
            { options: ["uma", "um", "umas", "uns"], correct: "uma" },
            { options: ["maçã", "banana", "laranja", "pera"], correct: "maçã" }
        ]
    },
    {
        sentence: "Tu foste feliz?"
    },
    {
        sentence: "Eu quis comprar um carro novo.",
        translation: "Я хотел купить новую машину.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["quis", "quiseste", "quis", "quisemos"], correct: "quis" },
            { options: ["comprar", "vender", "alugar", "trocar"], correct: "comprar" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["carro", "casa", "livro", "telefone"], correct: "carro" },
            { options: ["novo", "velho", "antigo", "grande"], correct: "novo" }
        ]
    },
    {
        sentence: "Eles vieram de Portugal.",
        translation: "Они приехали из Португалии.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["vim", "vieste", "veio", "viemos"], correct: "vieram" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["Portugal", "Brasil", "Espanha", "França"], correct: "Portugal" }
        ]
    },
    {
        sentence: "A Joana deu um presente ao amigo.",
        translation: "Жуана подарила подарок другу.",
        words: [
            { options: ["A Joana", "O Pedro", "Ela", "Ele"], correct: "A Joana" },
            { options: ["dei", "deste", "deu", "demos"], correct: "deu" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["presente", "livro", "flor", "cartão"], correct: "presente" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["amigo", "amiga", "irmão", "irmã"], correct: "amigo" }
        ]
    },
    {
        sentence: "Nós lemos um livro interessante.",
        translation: "Мы прочитали интересную книгу.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["li", "leste", "leu", "lemos"], correct: "lemos" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["livro", "revista", "jornal", "artigo"], correct: "livro" },
            { options: ["interessante", "chato", "novo", "velho"], correct: "interessante" }
        ]
    },
    {
        sentence: "Eu escrevi uma carta.",
        translation: "Я написал письмо.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["escrevi", "escreveste", "escreveu", "escrevemos"], correct: "escrevi" },
            { options: ["uma", "um", "umas", "uns"], correct: "uma" },
            { options: ["carta", "mensagem", "email", "nota"], correct: "carta" }
        ]
    },
    {
        sentence: "Ele bebeu café de manhã.",
        translation: "Он выпил кофе утром.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["bebi", "bebeste", "bebeu", "bebemos"], correct: "bebeu" },
            { options: ["café", "chá", "leite", "água"], correct: "café" },
            { options: ["de manhã", "à tarde", "à noite", "ao meio-dia"], correct: "de manhã" }
        ]
    },
    {
        sentence: "Nós vimos um espetáculo.",
        translation: "Мы посмотрели представление.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["vi", "viu", "vimos", "viram"], correct: "vimos" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["espetáculo", "filme", "concerto", "jogo"], correct: "espetáculo" }
        ]
    },
    {
        sentence: "Vocês disseram adeus.",
        translation: "Вы попрощались.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Vocês" },
            { options: ["disse", "disseste", "disse", "dissemos"], correct: "disseram" },
            { options: ["adeus", "olá", "obrigado", "por favor"], correct: "adeus" }
        ]
    },
    {
        sentence: "Eu pus o livro na mesa.",
        translation: "Я положил книгу на стол.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["pus", "puseste", "pôs", "pusemos"], correct: "pus" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["livro", "caderno", "telefone", "chave"], correct: "livro" },
            { options: ["na", "no", "em", "ao"], correct: "na" },
            { options: ["mesa", "cadeira", "chão", "prateleira"], correct: "mesa" }
        ]
    },
    {
        sentence: "Eles souberam a notícia.",
        translation: "Они узнали новость.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["soube", "soubeste", "soube", "soubemos"], correct: "souberam" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["notícia", "resposta", "pergunta", "história"], correct: "notícia" }
        ]
    },
    {
        sentence: "Tu quiseste ir ao cinema.",
        translation: "Ты хотел пойти в кино.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["quis", "quiseste", "quis", "quisemos"], correct: "quiseste" },
            { options: ["ir", "ficar", "sair", "voltar"], correct: "ir" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["cinema", "teatro", "restaurante", "parque"], correct: "cinema" }
        ]
    },
    {
        sentence: "Nós viemos de carro.",
        translation: "Мы приехали на машине.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["vim", "vieste", "veio", "viemos"], correct: "viemos" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["carro", "comboio", "autocarro", "avião"], correct: "carro" }
        ]
    },
    {
        sentence: "O João deu um abraço.",
        translation: "Жуан обнял.",
        words: [
            { options: ["O João", "A Maria", "Ele", "Ela"], correct: "O João" },
            { options: ["dei", "deste", "deu", "demos"], correct: "deu" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["abraço", "beijo", "presente", "sorriso"], correct: "abraço" }
        ]
    },
    {
        sentence: "Eu li um jornal hoje.",
        translation: "Я прочитал газету сегодня.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["li", "leste", "leu", "lemos"], correct: "li" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["jornal", "livro", "revista", "artigo"], correct: "jornal" },
            { options: ["hoje", "ontem", "amanhã", "sempre"], correct: "hoje" }
        ]
    },
    {
        sentence: "Eles escreveram um email.",
        translation: "Они написали электронное письмо.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["escrevi", "escreveste", "escreveu", "escrevemos"], correct: "escreveram" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["email", "carta", "mensagem", "nota"], correct: "email" }
        ]
    },
    {
        sentence: "A Maria abriu a janela.",
        translation: "Мария открыла окно.",
        words: [
            { options: ["A Maria", "O Pedro", "Ela", "Ele"], correct: "A Maria" },
            { options: ["abri", "abriu", "abrimos", "abriram"], correct: "abriu" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["janela", "porta", "mala", "caixa"], correct: "janela" }
        ]
    },
    {
        sentence: "Nós estudámos para a prova.",
        translation: "Мы готовились к тесту.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Nós" },
            { options: ["estudei", "estudaste", "estudou", "estudámos"], correct: "estudámos" },
            { options: ["para", "em", "de", "por"], correct: "para" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["prova", "aula", "lição", "exame"], correct: "prova" }
        ]
    },
    {
        sentence: "Eu comi uma maçã.",
        translation: "Я съел яблоко.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["comi", "comeu", "comemos", "comeram"], correct: "comi" },
            { options: ["uma", "um", "umas", "uns"], correct: "uma" },
            { options: ["maçã", "banana", "laranja", "pera"], correct: "maçã" }
        ]
    },
    {
        sentence: "Tu foste feliz?",
        translation: "Ты замёрз в горах?",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["senti", "sentiste", "sentiu", "sentiram"], correct: "sentiste" },
            { options: ["frio", "calor", "medo", "sono"], correct: "frio" },
            { options: ["na", "no", "em", "ao"], correct: "na" },
            { options: ["montanha", "praia", "cidade", "rua"], correct: "montanha" }
        ]
    },
    {
        sentence: "A Ana preferiu ficar em casa.",
        translation: "Ана предпочла остаться дома.",
        words: [
            { options: ["A Ana", "O João", "Ela", "Ele"], correct: "A Ana" },
            { options: ["preferi", "preferiu", "preferimos", "preferiram"], correct: "preferiu" },
            { options: ["ficar", "ir", "sair", "voltar"], correct: "ficar" },
            { options: ["em", "no", "na", "ao"], correct: "em" },
            { options: ["casa", "escola", "trabalho", "rua"], correct: "casa" }
        ]
    },
    {
        sentence: "O João pediu ajuda.",
        translation: "Жуан попросил помощи.",
        words: [
            { options: ["O João", "A Ana", "Ele", "Ela"], correct: "O João" },
            { options: ["pedi", "pediu", "pedimos", "pediram"], correct: "pediu" },
            { options: ["ajuda", "dinheiro", "tempo", "comida"], correct: "ajuda" }
        ]
    },
    {
        sentence: "Eles comeram pizza ontem à noite.",
        translation: "Они ели пиццу вчера вечером.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["comi", "comeu", "comemos", "comeram"], correct: "comeram" },
            { options: ["pizza", "massa", "arroz", "carne"], correct: "pizza" },
            { options: ["ontem", "hoje", "amanhã", "sempre"], correct: "ontem" },
            { options: ["à noite", "de manhã", "à tarde", "ao meio-dia"], correct: "à noite" }
        ]
    },
    {
        sentence: "Eu vi um filme interessante.",
        translation: "Я посмотрел интересный фильм.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["vi", "viu", "vimos", "viram"], correct: "vi" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["filme", "livro", "jogo", "concerto"], correct: "filme" },
            { options: ["interessante", "chato", "novo", "velho"], correct: "interessante" }
        ]
    },
    {
        sentence: "Tu disseste a verdade?",
        translation: "Ты сказал правду?",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["disse", "disseste", "disse", "dissemos"], correct: "disseste" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["verdade", "mentira", "história", "piada"], correct: "verdade" }
        ]
    },
    {
        sentence: "Ele trouxe flores para a mãe.",
        translation: "Он принес цветы для мамы.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["trouxe", "trouxeste", "trouxe", "trouxemos"], correct: "trouxe" },
            { options: ["flores", "presentes", "livros", "doces"], correct: "flores" },
            { options: ["para", "com", "de", "em"], correct: "para" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["mãe", "pai", "irmão", "irmã"], correct: "mãe" }
        ]
    },
    {
        sentence: "Nós pusemos a mesa.",
        translation: "Мы накрыли на стол.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["pus", "puseste", "pôs", "pusemos"], correct: "pusemos" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["mesa", "cama", "cadeira", "porta"], correct: "mesa" }
        ]
    },
    {
        sentence: "Vocês souberam a resposta.",
        translation: "Вы знали ответ.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Vocês" },
            { options: ["soube", "soubeste", "soube", "soubemos"], correct: "souberam" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["resposta", "pergunta", "solução", "notícia"], correct: "resposta" }
        ]
    },
    {
        sentence: "Eu quis comprar um carro novo.",
        translation: "Я хотел купить новую машину.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["quis", "quiseste", "quis", "quisemos"], correct: "quis" },
            { options: ["comprar", "vender", "alugar", "trocar"], correct: "comprar" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["carro", "casa", "livro", "telefone"], correct: "carro" },
            { options: ["novo", "velho", "antigo", "grande"], correct: "novo" }
        ]
    },
    {
        sentence: "Eles vieram de Portugal.",
        translation: "Они приехали из Португалии.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["vim", "vieste", "veio", "viemos"], correct: "vieram" },
            { options: ["de", "da", "do", "dos"], correct: "de" },
            { options: ["Portugal", "Brasil", "Espanha", "França"], correct: "Portugal" }
        ]
    },
    {
        sentence: "A Joana deu um presente ao amigo.",
        translation: "Жуана подарила подарок другу.",
        words: [
            { options: ["A Joana", "O Pedro", "Ela", "Ele"], correct: "A Joana" },
            { options: ["dei", "deste", "deu", "demos"], correct: "deu" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["presente", "livro", "flor", "cartão"], correct: "presente" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["amigo", "amiga", "irmão", "irmã"], correct: "amigo" }
        ]
    },
    {
        sentence: "Nós lemos um livro interessante.",
        translation: "Мы прочитали интересную книгу.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["li", "leste", "leu", "lemos"], correct: "lemos" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["livro", "revista", "jornal", "artigo"], correct: "livro" },
            { options: ["interessante", "chato", "novo", "velho"], correct: "interessante" }
        ]
    },
    {
        sentence: "Eu escrevi uma carta.",
        translation: "Я написал письмо.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["escrevi", "escreveste", "escreveu", "escrevemos"], correct: "escrevi" },
            { options: ["uma", "um", "umas", "uns"], correct: "uma" },
            { options: ["carta", "mensagem", "email", "nota"], correct: "carta" }
        ]
    },
    {
        sentence: "Ele bebeu café de manhã.",
        translation: "Он выпил кофе утром.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Ele" },
            { options: ["bebi", "bebeste", "bebeu", "bebemos"], correct: "bebeu" },
            { options: ["café", "chá", "leite", "água"], correct: "café" },
            { options: ["de manhã", "à tarde", "à noite", "ao meio-dia"], correct: "de manhã" }
        ]
    },
    {
        sentence: "Nós vimos um espetáculo.",
        translation: "Мы посмотрели представление.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós" },
            { options: ["vi", "viu", "vimos", "viram"], correct: "vimos" },
            { options: ["um", "uma", "uns", "umas"], correct: "um" },
            { options: ["espetáculo", "filme", "concerto", "jogo"], correct: "espetáculo" }
        ]
    },
    {
        sentence: "Vocês disseram adeus.",
        translation: "Вы попрощались.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Vocês" },
            { options: ["disse", "disseste", "disse", "dissemos"], correct: "disseram" },
            { options: ["adeus", "olá", "obrigado", "por favor"], correct: "adeus" }
        ]
    },
    {
        sentence: "Eu pus o livro na mesa.",
        translation: "Я положил книгу на стол.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eu" },
            { options: ["pus", "puseste", "pôs", "pusemos"], correct: "pus" },
            { options: ["o", "a", "os", "as"], correct: "o" },
            { options: ["livro", "caderno", "telefone", "chave"], correct: "livro" },
            { options: ["na", "no", "em", "ao"], correct: "na" },
            { options: ["mesa", "cadeira", "chão", "prateleira"], correct: "mesa" }
        ]
    },
    {
        sentence: "Eles souberam a notícia.",
        translation: "Они узнали новость.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Eles" },
            { options: ["soube", "soubeste", "soube", "soubemos"], correct: "souberam" },
            { options: ["a", "o", "as", "os"], correct: "a" },
            { options: ["notícia", "resposta", "pergunta", "história"], correct: "notícia" }
        ]
    },
    {
        sentence: "Tu quiseste ir ao cinema.",
        translation: "Ты хотел пойти в кино.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Vocês"], correct: "Tu" },
            { options: ["quis", "quiseste", "quis", "quisemos"], correct: "quiseste" },
            { options: ["ir", "ficar", "sair", "voltar"], correct: "ir" },
            { options: ["ao", "à", "aos", "às"], correct: "ao" },
            { options: ["cinema", "teatro", "restaurante", "parque"], correct: "cinema" }
        ]
    },
    {
        sentence: "Nós viemos de carro.",
        translation: "Мы приехали на машине.",
        words: [
            { options: ["Eu", "Tu", "Ele", "Nós", "Eles"], correct: "Nós"