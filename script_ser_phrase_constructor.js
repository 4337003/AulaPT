const serPhrases = [
    {
        russian: "Я студент.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["estudante", "professor", "feliz"], correct: "estudante" }
        ]
    },
    {
        russian: "Мы бразильцы.",
        words: [
            { options: ["Nós", "Eles", "Eu"], correct: "Nós" },
            { options: ["somos", "são", "sou"], correct: "somos" },
            { options: ["brasileiros", "portugueses", "alunos"], correct: "brasileiros" }
        ]
    },
    {
        russian: "Он учитель.",
        words: [
            { options: ["Ele", "Eu", "Nós"], correct: "Ele" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["professor", "estudante", "feliz"], correct: "professor" }
        ]
    },
    {
        russian: "Ты счастлив.",
        words: [
            { options: ["Tu", "Eu", "Eles"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["feliz", "professor", "aluno"], correct: "feliz" }
        ]
    },
    {
        russian: "Они студенты.",
        words: [
            { options: ["Eles", "Nós", "Tu"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["estudantes", "professores", "felizes"], correct: "estudantes" }
       ]
    },
    {
        russian: "Вы учителя.",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["professores", "alunos", "estudantes"], correct: "professores" }
        ]
    },
    {
        russian: "Я очень рад.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["feliz", "triste", "cansado"], correct: "feliz" }
        ]
    },
    {
        russian: "Она врач.",
        words: [
            { options: ["Ela", "Ele", "Eu"], correct: "Ela" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["médica", "professora", "aluna"], correct: "médica" }
        ]
    },
    {
        russian: "Мы друзья.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["amigos", "irmãos", "colegas"], correct: "amigos" }
        ]
    },
    {
        russian: "Ты португалец?",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["português", "brasileiro", "espanhol"], correct: "português" }
        ]
    },
    {
        russian: "Они инженеры.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["engenheiros", "médicos", "professores"], correct: "engenheiros" }
        ]
    },
    {
        russian: "Я не студент.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["estudante", "professor", "aluno"], correct: "estudante" }
        ]
    },
    {
        russian: "Вы очень добрые.",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["gentis", "felizes", "tristes"], correct: "gentis" }
        ]
    },
    {
        russian: "Мы из Лиссабона.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["de", "em", "para"], correct: "de" },
            { options: ["Lisboa", "Porto", "Madrid"], correct: "Lisboa" }
        ]
    },
    {
        russian: "Он мой брат.",
        words: [
            { options: ["Ele", "Eu", "Tu"], correct: "Ele" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["irmão", "amigo", "pai"], correct: "irmão" }
        ]
    }, 
    {
        russian: "Моя мама учительница.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["mãe", "irmã", "tia"], correct: "mãe" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["professora", "aluna", "médica"], correct: "professora" }
        ]
    },
    {
        russian: "Сегодня понедельник.",
        words: [
            { options: ["Hoje", "Ontem", "Amanhã"], correct: "Hoje" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["segunda-feira", "domingo", "sexta-feira"], correct: "segunda-feira" }
        ]
    },
    {
        russian: "Моя сестра очень умная.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["inteligente", "feliz", "triste"], correct: "inteligente" }
        ]
    },
    {
        russian: "Погода хорошая.",
        words: [
            { options: ["O", "A", "Os"], correct: "O" },
            { options: ["tempo", "dia", "noite"], correct: "tempo" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["bom", "ruim", "frio"], correct: "bom" }
        ]
    },
    {
        russian: "Мои друзья из Бразилии.",
        words: [
            { options: ["Meus", "Nossos", "Seus"], correct: "Meus" },
            { options: ["amigos", "irmãos", "pais"], correct: "amigos" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["do", "da", "de"], correct: "do" },
            { options: ["Brasil", "Portugal", "Espanha"], correct: "Brasil" }
        ]
    },
    {
        russian: "Это мой дом.",
        words: [
            { options: ["Esta", "Esse", "Este"], correct: "Este" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["casa", "carro", "livro"], correct: "casa" }
        ]
    },
    {
        russian: "Моя сестра и я разные.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ela", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["diferentes", "iguais", "felizes"], correct: "diferentes" }
        ]
    },
    {
        russian: "Моя семья большая.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["família", "casa", "escola"], correct: "família" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["grande", "pequena", "nova"], correct: "grande" }
        ]
    },
    {
        russian: "Они мои коллеги.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["colegas", "amigos", "irmãos"], correct: "colegas" }
        ]
    },
    {
        russian: "Ты мой лучший друг.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["melhor", "bom", "velho"], correct: "melhor" },
            { options: ["amigo", "irmão", "colega"], correct: "amigo" }
        ]
    },
    {
        russian: "Сегодня жарко.",
        words: [
            { options: ["Hoje", "Ontem", "Amanhã"], correct: "Hoje" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["quente", "frio", "bom"], correct: "quente" }
        ]
    },
    {
        russian: "Моя бабушка очень добрая.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["avó", "tia", "mãe"], correct: "avó" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["gentil", "feliz", "triste"], correct: "gentil" }
        ]
    },
    {
        russian: "Мои родители заняты.",
        words: [
            { options: ["Meus", "Nossos", "Seus"], correct: "Meus" },
            { options: ["pais", "irmãos", "amigos"], correct: "pais" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["ocupados", "livres", "felizes"], correct: "ocupados" }
        ]
    },
    {
        russian: "Моя сестра студентка.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["estudante", "professora", "médica"], correct: "estudante" }
        ]
    },
    {
        russian: "Мой брат врач.",
        words: [
            { options: ["Meu", "Teu", "Nosso"], correct: "Meu" },
            { options: ["irmão", "amigo", "pai"], correct: "irmão" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["médico", "professor", "aluno"], correct: "médico" }
        ]
    },
    {
        russian: "Мои родители дома.",
        words: [
            { options: ["Meus", "Nossos", "Seus"], correct: "Meus" },
            { options: ["pais", "irmãos", "amigos"], correct: "pais" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["casa", "escola", "trabalho"], correct: "casa" }
        ]
    },
    {
        russian: "Моя подруга очень красивая.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["amiga", "irmã", "tia"], correct: "amiga" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["bonita", "alta", "velha"], correct: "bonita" }
        ]
    },
    {
        russian: "Мой отец инженер.",
        words: [
            { options: ["Meu", "Teu", "Nosso"], correct: "Meu" },
            { options: ["pai", "irmão", "amigo"], correct: "pai" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["engenheiro", "professor", "médico"], correct: "engenheiro" }
        ]
    },
    {
        russian: "Моя сестра и я дома.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ela", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["casa", "escola", "trabalho"], correct: "casa" }
        ]
    },
    {
        russian: "Моя подруга из Португалии.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["amiga", "irmã", "tia"], correct: "amiga" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["de", "em", "para"], correct: "de" },
            { options: ["Portugal", "Brasil", "Espanha"], correct: "Portugal" }
        ]
    },
    {
        russian: "Мои братья студенты.",
        words: [
            { options: ["Meus", "Nossos", "Seus"], correct: "Meus" },
            { options: ["irmãos", "amigos", "pais"], correct: "irmãos" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["estudantes", "professores", "engenheiros"], correct: "estudantes" }
        ]
    },
    {
        russian: "Моя сестра и я учимся вместе.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ela", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["juntas", "separadas", "felizes"], correct: "juntas" }
        ]
    },
    {
        russian: "Моя бабушка дома.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["avó", "tia", "mãe"], correct: "avó" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["casa", "escola", "trabalho"], correct: "casa" }
        ]
    },
    {
        russian: "Мои родители очень заняты.",
        words: [
            { options: ["Meus", "Nossos", "Seus"], correct: "Meus" },
            { options: ["pais", "irmãos", "amigos"], correct: "pais" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["ocupados", "livres", "felizes"], correct: "ocupados" }
        ]
    },
    {
        russian: "Моя сестра и я португалки.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ela", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["portuguesas", "brasileiras", "espanholas"], correct: "portuguesas" }
        ]
    },
    {
        russian: "Моя подруга очень веселая.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["amiga", "irmã", "tia"], correct: "amiga" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["alegre", "triste", "cansada"], correct: "alegre" }
        ]
    },
    {
        russian: "Мой брат и я разные.",
        words: [
            { options: ["Meu", "Teu", "Nosso"], correct: "Meu" },
            { options: ["irmão", "amigo", "pai"], correct: "irmão" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ele", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["diferentes", "iguais", "felizes"], correct: "diferentes" }
        ]
    },
    {
        russian: "Моя сестра и я дома.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ela", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["casa", "escola", "trabalho"], correct: "casa" }
        ]
    },
    {
        russian: "Моя подруга из Лиссабона.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["amiga", "irmã", "tia"], correct: "amiga" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["de", "em", "para"], correct: "de" },
            { options: ["Lisboa", "Porto", "Madrid"], correct: "Lisboa" }
        ]
    },
    {
        russian: "Мои братья инженеры.",
        words: [
            { options: ["Meus", "Nossos", "Seus"], correct: "Meus" },
            { options: ["irmãos", "amigos", "pais"], correct: "irmãos" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["engenheiros", "professores", "alunos"], correct: "engenheiros" }
        ]
    },
    {
        russian: "Моя сестра и я учимся вместе.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["irmã", "tia", "mãe"], correct: "irmã" },
            { options: ["e", "ou", "mas"], correct: "e" },
            { options: ["eu", "ela", "nós"], correct: "eu" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["juntas", "separadas", "felizes"], correct: "juntas" }
        ]
    },
    {
        russian: "Моя бабушка дома.",
        words: [
            { options: ["Minha", "Nossa", "Sua"], correct: "Minha" },
            { options: ["avó", "tia", "mãe"], correct: "avó" },
            { options: ["é", "sou", "são"], correct: "é" },
            { options: ["em", "de", "para"], correct: "em" },
            { options: ["casa", "escola", "trabalho"], correct: "casa" }
        ]
    },
     // ... existing code ...
    {
        russian: "Мы учёные.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["cientistas", "professores", "alunos"], correct: "cientistas" }
        ]
    },
    {
        russian: "Ты мой друг.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["amigo", "irmão", "pai"], correct: "amigo" }
        ]
    },
    {
        russian: "Она очень умная.",
        words: [
            { options: ["Ela", "Ele", "Eu"], correct: "Ela" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["inteligente", "feliz", "triste"], correct: "inteligente" }
        ]
    },
    {
        russian: "Они мои соседи.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["vizinhos", "amigos", "irmãos"], correct: "vizinhos" }
        ]
    },
    {
        russian: "Я из Португалии.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["de", "em", "para"], correct: "de" },
            { options: ["Portugal", "Brasil", "Espanha"], correct: "Portugal" }
        ]
    },
    {
        russian: "Вы заняты?",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["ocupados", "felizes", "tristes"], correct: "ocupados" }
        ]
    },
    {
        russian: "Мы не братья.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["irmãos", "amigos", "pais"], correct: "irmãos" }
        ]
    },
    {
        russian: "Он португалец.",
        words: [
            { options: ["Ele", "Eu", "Tu"], correct: "Ele" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["português", "brasileiro", "espanhol"], correct: "português" }
        ]
    },
    {
        russian: "Ты мой учитель.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["professor", "aluno", "amigo"], correct: "professor" }
        ]
    },
    {
        russian: "Они очень заняты.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["ocupados", "felizes", "tristes"], correct: "ocupados" }
        ]
    },
    {
        russian: "Я не португалец.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["português", "brasileiro", "espanhol"], correct: "português" }
        ]
    },
    {
        russian: "Мы хорошие люди.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["boas", "más", "novas"], correct: "boas" },
            { options: ["pessoas", "amigos", "irmãos"], correct: "pessoas" }
        ]
    },
    {
        russian: "Она моя сестра.",
        words: [
            { options: ["Ela", "Eu", "Tu"], correct: "Ela" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["minha", "tua", "nossa"], correct: "minha" },
            { options: ["irmã", "amiga", "mãe"], correct: "irmã" }
        ]
    },
    {
        russian: "Вы мои друзья.",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["amigos", "irmãos", "colegas"], correct: "amigos" }
        ]
    },
    {
        russian: "Я очень уставший.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["cansado", "feliz", "triste"], correct: "cansado" }
        ]
    },
    {
        russian: "Они мои родители.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["pais", "irmãos", "amigos"], correct: "pais" }
        ]
    },
    {
        russian: "Ты очень добрый.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["gentil", "feliz", "triste"], correct: "gentil" }
        ]
    },
    {
        russian: "Мы не из Бразилии.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["do", "da", "de"], correct: "do" },
            { options: ["Brasil", "Portugal", "Espanha"], correct: "Brasil" }
        ]
    },
    {
        russian: "Он мой отец.",
        words: [
            { options: ["Ele", "Eu", "Tu"], correct: "Ele" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["pai", "irmão", "amigo"], correct: "pai" }
        ]
    },
    {
        russian: "Вы не учителя.",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["professores", "alunos", "estudantes"], correct: "professores" }
        ]
    },
    {
        russian: "Я очень счастлив сегодня.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["feliz", "triste", "cansado"], correct: "feliz" },
            { options: ["hoje", "amanhã", "ontem"], correct: "hoje" }
        ]
    },
    {
        russian: "Они хорошие студенты.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["bons", "maus", "novos"], correct: "bons" },
            { options: ["estudantes", "professores", "alunos"], correct: "estudantes" }
        ]
    },
    {
        russian: "Ты мой брат.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["irmão", "amigo", "pai"], correct: "irmão" }
        ]
    },
    {
        russian: "Мы не студенты.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["estudantes", "professores", "alunos"], correct: "estudantes" }
        ]
    },
    {
        russian: "Она моя подруга.",
        words: [
            { options: ["Ela", "Eu", "Tu"], correct: "Ela" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["minha", "tua", "nossa"], correct: "minha" },
            { options: ["amiga", "irmã", "mãe"], correct: "amiga" }
        ]
    },
    {
        russian: "Вы мои братья.",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["irmãos", "amigos", "pais"], correct: "irmãos" }
        ]
    },
    {
        russian: "Я не очень уставший.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["cansado", "feliz", "triste"], correct: "cansado" }
        ]
    },
    {
        russian: "Они не мои родители.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["pais", "irmãos", "amigos"], correct: "pais" }
        ]
    },
    {
        russian: "Ты очень умен.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["inteligente", "feliz", "triste"], correct: "inteligente" }
        ]
    },
    {
        russian: "Мы хорошие друзья.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["bons", "maus", "novos"], correct: "bons" },
            { options: ["amigos", "irmãos", "colegas"], correct: "amigos" }
        ]
    },
    {
        russian: "Она не моя сестра.",
        words: [
            { options: ["Ela", "Eu", "Tu"], correct: "Ela" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["é", "sou", "somos"], correct: "é" },
            { options: ["minha", "tua", "nossa"], correct: "minha" },
            { options: ["irmã", "amiga", "mãe"], correct: "irmã" }
        ]
    },
    {
        russian: "Вы не мои друзья.",
        words: [
            { options: ["Vocês", "Eles", "Nós"], correct: "Vocês" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["meus", "teus", "nossos"], correct: "meus" },
            { options: ["amigos", "irmãos", "colegas"], correct: "amigos" }
        ]
    },
    {
        russian: "Я не очень счастлив.",
        words: [
            { options: ["Eu", "Tu", "Ele"], correct: "Eu" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["sou", "és", "é"], correct: "sou" },
            { options: ["muito", "pouco", "bem"], correct: "muito" },
            { options: ["feliz", "triste", "cansado"], correct: "feliz" }
        ]
    },
    {
        russian: "Они не хорошие студенты.",
        words: [
            { options: ["Eles", "Nós", "Vocês"], correct: "Eles" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["são", "somos", "é"], correct: "são" },
            { options: ["bons", "maus", "novos"], correct: "bons" },
            { options: ["estudantes", "professores", "alunos"], correct: "estudantes" }
        ]
    },
    {
        russian: "Ты не мой брат.",
        words: [
            { options: ["Tu", "Eu", "Ele"], correct: "Tu" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["és", "é", "sou"], correct: "és" },
            { options: ["meu", "teu", "nosso"], correct: "meu" },
            { options: ["irmão", "amigo", "pai"], correct: "irmão" }
        ]
    },
    {
        russian: "Мы не хорошие друзья.",
        words: [
            { options: ["Nós", "Eles", "Vocês"], correct: "Nós" },
            { options: ["não", "sim", "muito"], correct: "não" },
            { options: ["somos", "são", "é"], correct: "somos" },
            { options: ["bons", "maus", "novos"], correct: "bons" },
            { options: ["amigos", "irmãos", "colegas"], correct: "amigos" }
        ]
    },
    
];

let current = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function renderPhrase() {
    const phrase = serPhrases[current];
    document.getElementById('russianPhrase').textContent = phrase.russian;
    const constructor = document.getElementById('constructor');
    constructor.innerHTML = '';
    phrase.words.forEach((word, idx) => {
        const select = document.createElement('select');
        select.className = 'ser-select';
        shuffle(word.options).forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
        });
        select.dataset.correct = word.correct;

        // Новый обработчик для проверки при выборе опции
        select.addEventListener('change', function() {
            if (this.value === this.dataset.correct) {
                this.style.background = '#ccffcc';
            } else {
                this.style.background = '#ffcccc';
            }
        });

        constructor.appendChild(select);
        if (idx < phrase.words.length - 1) {
            constructor.appendChild(document.createTextNode(' '));
        }
    });
    document.getElementById('resultBlock').textContent = '';
}

document.getElementById('checkPhraseButton').onclick = function() {
    const selects = document.querySelectorAll('.ser-select');
    let correct = true;
    selects.forEach(sel => {
        if (sel.value !== sel.dataset.correct) {
            correct = false;
            sel.style.background = '#ffcccc';
        } else {
            sel.style.background = '#ccffcc';
        }
    });
    document.getElementById('resultBlock').textContent = correct ? 'Верно!' : 'Есть ошибки, попробуйте ещё раз.';
};

document.getElementById('nextPhraseButton').onclick = function() {
    current = (current + 1) % serPhrases.length;
    renderPhrase();
};

window.onload = renderPhrase;