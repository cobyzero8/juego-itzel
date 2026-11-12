// ingles/nivel7.js - Level 7: Advanced C1 (Lecturas Académicas y Opiniones Críticas)
const inglesNivel7 = {
    id: 7,
    nombre: "Level 7: Advanced C1 (Lectura Crítica)",

    retos: [
        // --- 1. ARGUMENTACIÓN Y PENSAMIENTO CRÍTICO ---
        {
            area: "Reading 📘",
            dibujo: "🧠💡⚖️",
            audioIngles: "Critical thinking allows us to evaluate arguments and discover the truth",
            fonetica: "/krítical zínking alóus as tu évaluate árguments and discóver de trúth/",
            textoLectura: "Critical thinking allows us to evaluate arguments and discover the truth",
            pregunta: "Según la frase en inglés, ¿para qué nos sirve el pensamiento crítico ('critical thinking')?",
            opciones: ["Para evaluar argumentos y descubrir la verdad", "Para memorizar textos largos sin pensar", "Para discutir con los amigos", "Para apagar las computadoras"],
            correcta: 0,
            pista: "'Evaluate arguments' es evaluar argumentos y 'discover the truth' es descubrir la verdad.",
            explicacion: "'Critical thinking allows us to evaluate arguments and discover the truth' = 'El pensamiento crítico nos permite evaluar argumentos y descubrir la verdad'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌍🤝🌱",
            audioIngles: "Collaboration is essential for solving global challenges",
            fonetica: "/colaboreishon is esénshal for sólving glóbal chálenges/",
            pregunta: "¿Por qué es importante la colaboración ('collaboration') según la oración?",
            opciones: ["Es esencial para resolver desafíos globales", "Es una pérdida de tiempo total", "Solo sirve para jugar en equipo", "No tiene ninguna utilidad"],
            correcta: 0,
            pista: "'Essential for solving global challenges' es esencial para resolver desafíos globales.",
            explicacion: "'Collaboration is essential for solving global challenges' = 'La colaboración es esencial para resolver desafíos globales'."
        },
        {
            area: "Grammar 🧩",
            dibujo: "📚🔍🔬",
            audioIngles: "Science is based on empirical evidence and constant testing",
            fonetica: "/sáiens is béist on empírical évidens and cónstant tésting/",
            pregunta: "¿En qué se basa la ciencia ('science') según la oración en inglés?",
            opciones: ["En evidencias empíricas y pruebas constantes", "En adivinanzas y cuentos antiguos", "En opiniones personales sin revisar", "En deseos de la imaginación"],
            correcta: 0,
            pista: "'Empirical evidence' significa evidencias empíricas.",
            explicacion: "'Science is based on empirical evidence and constant testing' = 'La ciencia se basa en evidencia empírica y pruebas constantes'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "💡🚀🌟",
            audioIngles: "Innovation drives human progress and creativity",
            fonetica: "/inoveishon dráivs hiúman prógres and créativiti/",
            pregunta: "¿Qué impulsa la innovación ('innovation') en la humanidad?",
            opciones: ["El progreso humano y la creatividad", "El aburrimiento y la pereza", "El miedo a los cambios", "La destrucción del futuro"],
            correcta: 0,
            pista: "'Human progress and creativity' es progreso humano y creatividad.",
            explicacion: "'Innovation drives human progress and creativity' = 'La innovación impulsa el progreso humano y la creatividad'."
        },
        {
            area: "Reading 📘",
            dibujo: "📖✨🌍",
            audioIngles: "Reading complex texts expands our vocabulary and sharpens our intellect",
            fonetica: "/ríding cómplex texts ekspands áur vocábiulari and shárpens áur intélect/",
            textoLectura: "Reading complex texts expands our vocabulary and sharpens our intellect",
            pregunta: "Según la lectura, ¿qué logra la lectura de textos complejos en nosotros?",
            opciones: ["Expande nuestro vocabulario y agudiza nuestro intelecto", "Nos da sueño inmediatamente", "Nos hace olvidar las matemáticas", "No produce ningún cambio"],
            correcta: 0,
            pista: "'Expands our vocabulary' es expande nuestro vocabulario.",
            explicacion: "'Leer textos complejos expande nuestro vocabulario y agudiza nuestro intelecto'."
        },

        // --- 2. DEBATE Y ANÁLISIS ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "🗣️⚖️🤝",
            audioIngles: "Respecting diverse perspectives is fundamental for a healthy society",
            fonetica: "/respécting divérs perspéctives is fándamental for a jélthi sosáiti/",
            pregunta: "¿Por qué es fundamental respetar perspectivas diversas ('diverse perspectives')?",
            opciones: ["Para tener una sociedad sana", "Para que todos piensen igual", "Para evitar hablar con nadie", "Para ganar una discusión"],
            correcta: 0,
            pista: "'Healthy society' significa una sociedad sana.",
            explicacion: "'Respecting diverse perspectives is fundamental for a healthy society' = 'Respetar diversas perspectivas es fundamental para una sociedad sana'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌱💧♻️",
            audioIngles: "Sustainability guarantees resources for future generations",
            fonetica: "/sustainabiliti gárantees rísources for fiuchur jénerations/",
            pregunta: "¿Qué garantiza la sostenibilidad ('sustainability') según la frase?",
            opciones: ["Recursos para las futuras generaciones", "El agotamiento rápido del agua", "La contaminación de los ríos", "Precios altos en las tiendas"],
            correcta: 0,
            pista: "'Future generations' significa futuras generaciones.",
            explicacion: "'Sustainability guarantees resources for future generations' = 'La sostenibilidad garantiza recursos para las futuras generaciones'."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🎯💪📈",
            audioIngles: "Perseverance transforms obstacles into stepping stones to success",
            fonetica: "/perséverans tránsforms óbstacles íntu stéping stóunes tu suxés/",
            pregunta: "¿Qué hace la perseverancia ('perseverance') con los obstáculos ('obstacles')?",
            opciones: ["Los transforma en escalones hacia el éxito", "Los hace más grandes e imposibles", "Los esconde debajo de la mesa", "Hace que nos rindamos"],
            correcta: 0,
            pista: "'Stepping stones to success' son escalones hacia el éxito.",
            explicacion: "'Perseverance transforms obstacles into stepping stones to success' = 'La perseverancia transforma los obstáculos en escalones hacia el éxito'."
        },
        {
            area: "Reading 📘",
            dibujo: "🌐📚💡",
            audioIngles: "Education is the most powerful weapon to change the world",
            fonetica: "/edyukeishon is de móust páuorful uépon tu chéinj de uérld/",
            textoLectura: "Education is the most powerful weapon to change the world",
            pregunta: "Citando a grandes pensadores, ¿qué se dice de la educación ('education') en esta frase?",
            opciones: ["Es el arma más poderosa para cambiar el mundo", "Es un requisito aburrido y sin importancia", "Es solo para adultos mayores", "No sirve para el futuro"],
            correcta: 0,
            pista: "'Most powerful weapon to change the world' es el arma más poderosa para cambiar el mundo.",
            explicacion: "'La educación es el arma más poderosa para cambiar el mundo'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🏆👑✨",
            audioIngles: "Magnificent! You reached level seven",
            fonetica: "/magnífisent! iú rícht lével séven/",
            pregunta: "¡Fantástico! Llegaste al Nivel 7. ¿Qué te dice la voz alegremente?",
            opciones: ["¡Magnífico! Alcanzaste el nivel siete", "Te equivocaste en todo", "El juego ha terminado para siempre", "Vuelve al nivel inicial"],
            correcta: 0,
            pista: "'Magnificent' es magnífico.",
            explicacion: "'Magnificent! You reached level seven' = '¡Magnífico! Alcanzaste el nivel siete'."
        }
    ]
};
