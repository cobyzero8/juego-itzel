// ingles/nivel1.js - Level 1: Starter Kids (¡Inglés divertido desde cero para niñas!)
const inglesNivel1 = {
    id: 1,
    nombre: "Level 1: Starter Kids (Desde Cero)",

    retos: [
        // --- 1. SALUDOS DIVERTIDOS ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "👋😊🌞",
            audioIngles: "Hello",
            fonetica: "/jelóu/",
            pregunta: "Cuando saludas alegremente a alguien por la mañana, ¿qué palabra en inglés usas?",
            opciones: ["Bye bye", "Hello", "Good night", "Cat"],
            correcta: 1,
            pista: "Es la forma más bonita y común de decir 'Hola'.",
            explicacion: "'Hello' significa ¡Hola!"
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "👋🌙✨",
            audioIngles: "Goodbye",
            fonetica: "/gudbái/",
            pregunta: "Cuando te vas a casa y te despides de tus amigos, ¿qué dices en inglés?",
            opciones: ["Hello", "Good morning", "Goodbye", "Please"],
            correcta: 2,
            pista: "Significa 'Adiós'.",
            explicacion: "'Goodbye' significa ¡Adiós!"
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌅☕🐓",
            audioIngles: "Good morning",
            fonetica: "/gud mórning/",
            pregunta: "¿Cómo dices 'Buenos días' al despertar?",
            opciones: ["Good night", "Good morning", "Good afternoon", "Hello"],
            correcta: 1,
            pista: "'Morning' es la mañana.",
            explicacion: "'Good morning' significa Buenos días."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🙏💖😊",
            audioIngles: "Thank you",
            fonetica: "/zénk iú/",
            pregunta: "Si alguien te regala un chocolate o te ayuda en algo, ¿cómo dices 'Gracias' en inglés?",
            opciones: ["Thank you", "Sorry", "Yes", "No"],
            correcta: 0,
            pista: "Empieza con 'Th'.",
            explicacion: "'Thank you' significa Gracias."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🙋‍♀️✨",
            audioIngles: "Please",
            fonetica: "/plís/",
            pregunta: "Cuando pides un favor con cariño (por ejemplo, 'agua, por favor'), ¿qué palabra usas?",
            opciones: ["Hello", "Please", "Cat", "Red"],
            correcta: 1,
            pista: "Significa 'Por favor'.",
            explicacion: "'Please' significa Por favor."
        },

        // --- 2. COLORES HERMOSOS ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "🍎🍓❤️",
            audioIngles: "Red",
            fonetica: "/red/",
            pregunta: "¿Cómo se llama el color rojo en inglés (como una fresa o el corazón)?",
            opciones: ["Blue", "Red", "Green", "Yellow"],
            correcta: 1,
            pista: "Tiene solo tres letras: R-E-D.",
            explicacion: "'Red' es el color rojo."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "☀️🌻🍌",
            audioIngles: "Yellow",
            fonetica: "/iélou/",
            pregunta: "¿Qué color es el sol o un plátano en inglés?",
            opciones: ["Yellow", "Blue", "Pink", "Black"],
            correcta: 0,
            pista: "Empieza con la letra Y.",
            explicacion: "'Yellow' es el color amarillo."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌊🐳💙",
            audioIngles: "Blue",
            fonetica: "/blú/",
            pregunta: "¿Cómo se dice el color del cielo y del mar en inglés?",
            opciones: ["Green", "Red", "Blue", "White"],
            correcta: 2,
            pista: "Suena parecido a 'blú'.",
            explicacion: "'Blue' es el color azul."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🐸🌲🍀",
            audioIngles: "Green",
            fonetica: "/grín/",
            pregunta: "¿De qué color son las plantitas y las ranitas en inglés?",
            opciones: ["Green", "Yellow", "Red", "Blue"],
            correcta: 0,
            pista: "Empieza con G.",
            explicacion: "'Green' es el color verde."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌸🦄🎀",
            audioIngles: "Pink",
            fonetica: "/pink/",
            pregunta: "¿Cómo se dice el color rosa o rosado en inglés?",
            opciones: ["Pink", "Black", "White", "Orange"],
            correcta: 0,
            pista: "Es el color favorito de muchos juguetes y coronas.",
            explicacion: "'Pink' es el color rosado."
        },

        // --- 3. ANIMALITOS AMIGOS ---
        {
            area: "Listening 🎧",
            dibujo: "🐶🦴🏠",
            audioIngles: "Dog",
            fonetica: "/dog/",
            pregunta: "Escucha a la voz: ¿Qué animalito fiel es un 'dog'?",
            opciones: ["Un gato", "Un perro", "Un pollito", "Un pez"],
            correcta: 1,
            pista: "Hace 'guau guau'.",
            explicacion: "'Dog' significa perro."
        },
        {
            area: "Listening 🎧",
            dibujo: "🐱🥛🧶",
            audioIngles: "Cat",
            fonetica: "/kat/",
            pregunta: "¿Qué animalito juguetón y suavecito es un 'cat'?",
            opciones: ["Un perro", "Un gato", "Un conejo", "Un pato"],
            correcta: 1,
            pista: "Hace 'miau'.",
            explicacion: "'Cat' significa gato."
        },
        {
            area: "Listening 🎧",
            dibujo: "🐰🥕🌿",
            audioIngles: "Rabbit",
            fonetica: "/rábit/",
            pregunta: "¿Qué animalito saltarín que come zanahorias es un 'rabbit'?",
            opciones: ["Un conejo", "Un elefante", "Una tortuga", "Un león"],
            correcta: 0,
            pista: "Tiene orejas largas y salta mucho.",
            explicacion: "'Rabbit' significa conejo."
        },
        {
            area: "Listening 🎧",
            dibujo: "🐦🌳🎶",
            audioIngles: "Bird",
            fonetica: "/bérd/",
            pregunta: "¿Qué animalito con plumas vuela y canta en los árboles ('bird')?",
            opciones: ["Un pez", "Un pájaro", "Una vaca", "Un oso"],
            correcta: 1,
            pista: "Vuela por el cielo.",
            explicacion: "'Bird' significa pájaro."
        },
        {
            area: "Listening 🎧",
            dibujo: "🦋🌸✨",
            audioIngles: "Butterfly",
            fonetica: "/báterflai/",
            pregunta: "Escucha con atención: ¿Qué insecto hermoso de colores es una 'butterfly'?",
            opciones: ["Una mariposa", "Una abeja", "Una hormiga", "Una araña"],
            correcta: 0,
            pista: "Vuela de flor en flor.",
            explicacion: "'Butterfly' significa mariposa."
        },

        // --- 4. NÚMEROS DIVERTIDOS (1 AL 5) ---
        {
            area: "Grammar 🧩",
            dibujo: "☝️ (1)",
            audioIngles: "One",
            fonetica: "/wán/",
            pregunta: "¿Qué número en inglés representa el '1'?",
            opciones: ["One", "Two", "Three", "Five"],
            correcta: 0,
            pista: "Suena como 'wán'.",
            explicacion: "'One' es el número 1."
        },
        {
            area: "Grammar 🧩",
            dibujo: "✌️ (2)",
            audioIngles: "Two",
            fonetica: "/tú/",
            pregunta: "¿Qué número en inglés representa el '2'?",
            opciones: ["One", "Two", "Four", "Five"],
            correcta: 1,
            pista: "Son dos deditos arriba.",
            explicacion: "'Two' es el número 2."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🤟 (3)",
            audioIngles: "Three",
            fonetica: "/zrí/",
            pregunta: "¿Qué número en inglés representa el '3'?",
            opciones: ["Three", "One", "Two", "Five"],
            correcta: 0,
            pista: "Empieza con sonido 'thr'.",
            explicacion: "'Three' es el número 3."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🖐️ (4 y 5)",
            audioIngles: "Four and Five",
            fonetica: "/fór and ffaiv/",
            pregunta: "¿Qué números son 'Four' y 'Five'?",
            opciones: ["1 y 2", "3 y 6", "4 y 5", "7 y 8"],
            correcta: 2,
            pista: "Four es 4 y Five es 5.",
            explicacion: "'Four' es 4 y 'Five' es 5."
        },
        {
            area: "Reading 📘",
            dibujo: "🌟👑🎉",
            audioIngles: "I love English",
            fonetica: "/ái lav ínglish/",
            pregunta: "Para terminar jugando, ¿qué significa la frase 'I love English'?",
            opciones: ["No me gusta el inglés", "Me encanta el inglés", "Tengo frío", "Quiero dormir"],
            correcta: 1,
            pista: "'Love' significa amar o encantar.",
            explicacion: "'I love English' significa ¡Me encanta el inglés!"
        }
    ]
};
