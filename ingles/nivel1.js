// ingles/nivel1.js - Level 1: Starter Kids (Saludos, Colores, Números, Animales y Frases con Voz)
const inglesNivel1 = {
    id: 1,
    nombre: "Level 1: Starter Kids",

    retos: [
        // --- SALUDOS Y PRESENTACIÓN ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "👋😊🌞",
            audioIngles: "Hello, how are you?",
            fonetica: "/jelóu, jáu ar iú/",
            pregunta: "Escucha el saludo en inglés y elige qué significa en español:",
            opciones: ["Adiós, hasta mañana", "Hola, ¿cómo estás?", "Buenas noches", "Muchas gracias"],
            correcta: 1,
            pista: "Pulsa 🐢 Lento para escuchar: 'Hello' es Hola, 'how are you?' es ¿cómo estás?",
            explicacion: "'Hello, how are you?' significa 'Hola, ¿cómo estás?'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "👧👑✨",
            audioIngles: "My name is Itzel",
            fonetica: "/mái néim is Itzel/",
            pregunta: "¿Cómo se traduce la presentación que acabas de escuchar?",
            opciones: ["Tengo ocho años", "Mi nombre es Itzel", "Me gusta estudiar", "Vivo en Perú"],
            correcta: 1,
            pista: "'My name' significa 'Mi nombre'.",
            explicacion: "'My name is Itzel' significa 'Mi nombre es Itzel'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌅☕🐓",
            audioIngles: "Good morning",
            fonetica: "/gud mórning/",
            pregunta: "¿En qué momento del día usamos esta expresión en inglés?",
            opciones: ["Por la noche al dormir", "Por la mañana (Buenos días)", "Al despedirnos para siempre", "Cuando tenemos hambre"],
            correcta: 1,
            pista: "'Morning' significa mañana.",
            explicacion: "'Good morning' significa 'Buenos días'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🙏💖😊",
            audioIngles: "Thank you very much",
            fonetica: "/zénk iú véri mach/",
            pregunta: "¿Qué significa en español la frase que pronunció la voz?",
            opciones: ["Por favor, ayúdame", "Muchas gracias", "Lo siento mucho", "De nada"],
            correcta: 1,
            pista: "Es la expresión más usada para agradecer en inglés.",
            explicacion: "'Thank you very much' significa 'Muchas gracias'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌙⭐🛌",
            audioIngles: "Good night, see you tomorrow",
            fonetica: "/gud náit, sí iú tumórrou/",
            pregunta: "¿Qué dice esta despedida en inglés?",
            opciones: ["Buenos días, vamos a jugar", "Buenas noches, nos vemos mañana", "Buenas tardes, amigo", "Hola, bienvenido"],
            correcta: 1,
            pista: "'Night' es noche y 'tomorrow' es mañana.",
            explicacion: "'Good night, see you tomorrow' = 'Buenas noches, nos vemos mañana'."
        },

        // --- COLORES Y OBJETOS ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "🍎🍓❤️",
            audioIngles: "The apple is red",
            fonetica: "/di ápol is red/",
            pregunta: "¿De qué color es la manzana según la oración en inglés?",
            opciones: ["Azul (Blue)", "Roja (Red)", "Verde (Green)", "Amarilla (Yellow)"],
            correcta: 1,
            pista: "Escucha la última palabra: 'red'.",
            explicacion: "'The apple is red' significa 'La manzana es roja'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "☀️🌻🍌",
            audioIngles: "The sun is yellow",
            fonetica: "/de san is iélou/",
            pregunta: "¿Qué significa 'The sun is yellow'?",
            opciones: ["La luna es blanca", "El sol es amarillo", "El cielo es azul", "El árbol es verde"],
            correcta: 1,
            pista: "'Sun' significa sol y 'yellow' es el color amarillo.",
            explicacion: "'The sun is yellow' = 'El sol es amarillo'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌊🐳💙",
            audioIngles: "Blue ocean",
            fonetica: "/blú óushan/",
            pregunta: "¿Cómo se dice 'Azul' en inglés?",
            opciones: ["Green", "Blue", "Black", "Purple"],
            correcta: 1,
            pista: "Escucha la primera palabra: 'Blue'.",
            explicacion: "'Blue' significa azul ('Blue ocean' = océano azul)."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🐸🌲🍀",
            audioIngles: "Green frog",
            fonetica: "/grín frog/",
            pregunta: "¿Qué animal y color escuchaste en 'Green frog'?",
            opciones: ["Perro negro", "Rana verde", "Gato blanco", "Pájaro amarillo"],
            correcta: 1,
            pista: "'Green' es verde y 'frog' es rana.",
            explicacion: "'Green frog' significa 'Rana verde'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "📚✏️🎒",
            audioIngles: "Open your book, please",
            fonetica: "/óupen iór buk, plís/",
            pregunta: "¿Qué instrucción escolar acabas de escuchar?",
            opciones: ["Cierra la puerta, por favor", "Abre tu libro, por favor", "Escribe en la pizarra", "Guarda tu mochila"],
            correcta: 1,
            pista: "'Open' = abre, 'book' = libro, 'please' = por favor.",
            explicacion: "'Open your book, please' = 'Abre tu libro, por favor'."
        },

        // --- ANIMALES Y NÚMEROS ---
        {
            area: "Listening 🎧",
            dibujo: "🐶🦴🏠",
            audioIngles: "I have a small dog",
            fonetica: "/ái jav a smól dog/",
            pregunta: "¿Qué mascota menciona la oración en inglés?",
            opciones: ["Un gato grande", "Un perro pequeño", "Un conejo blanco", "Un caballo veloz"],
            correcta: 1,
            pista: "'Small' significa pequeño y 'dog' significa perro.",
            explicacion: "'I have a small dog' = 'Tengo un perro pequeño'."
        },
        {
            area: "Listening 🎧",
            dibujo: "🐱🥛🧶",
            audioIngles: "The cat drinks milk",
            fonetica: "/de kat drinks milk/",
            pregunta: "¿Qué hace el gato según la frase en inglés?",
            opciones: ["El gato duerme en el sofá", "El gato bebe leche", "El gato corre rápido", "El gato come pescado"],
            correcta: 1,
            pista: "'Cat' = gato, 'drinks' = bebe, 'milk' = leche.",
            explicacion: "'The cat drinks milk' = 'El gato bebe leche'."
        },
        {
            area: "Listening 🎧",
            dibujo: "🦋🌸✨",
            audioIngles: "Look at the beautiful butterfly",
            fonetica: "/luk at de biútiful báterflai/",
            pregunta: "¿Qué insecto hermoso menciona la oración?",
            opciones: ["Una abeja", "Una mariposa", "Una hormiga", "Una mariquita"],
            correcta: 1,
            pista: "Escucha la palabra larga del final: 'butterfly'.",
            explicacion: "'Butterfly' significa mariposa ('Mira la hermosa mariposa')."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🖐️✌️ (5 + 2 = 7)",
            audioIngles: "Seven stars in the sky",
            fonetica: "/séven stars in de skái/",
            pregunta: "¿Cuántas estrellas hay en el cielo según la frase?",
            opciones: ["Cinco (Five)", "Siete (Seven)", "Diez (Ten)", "Tres (Three)"],
            correcta: 1,
            pista: "Escucha el número inicial: 'Seven'.",
            explicacion: "'Seven' es 7 ('Siete estrellas en el cielo')."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🎂🕯️🔟",
            audioIngles: "I am ten years old",
            fonetica: "/ái am ten íers óuld/",
            pregunta: "¿Cuántos años dice tener la persona que habla?",
            opciones: ["Ocho años", "Diez años", "Doce años", "Seis años"],
            correcta: 1,
            pista: "'Ten' es el número 10.",
            explicacion: "'I am ten years old' = 'Tengo diez años'."
        },

        // --- LECTURA CORTA Y COMPRENSIÓN EN INGLÉS ---
        {
            area: "Reading 📘",
            dibujo: "👧🏫📖😊",
            audioIngles: "Itzel is a smart girl. She loves reading books and learning English every day.",
            fonetica: "/Itzel is a smart guerl. Shi lavs ríding buks and lérning ínglish évri déi/",
            textoLectura: "Itzel is a smart girl. She loves reading books and learning English every day.",
            pregunta: "Según la lectura en inglés, ¿qué le encanta hacer a Itzel todos los días?",
            opciones: ["Ver televisión todo el día", "Leer libros y aprender inglés", "Dormir hasta tarde", "Cocinar pasteles"],
            correcta: 1,
            pista: "Fíjate en 'reading books' (leer libros) y 'learning English' (aprender inglés).",
            explicacion: "'Itzel es una niña inteligente. A ella le encanta leer libros y aprender inglés todos los días.'"
        },
        {
            area: "Reading 📘",
            dibujo: "🐘🌿💧",
            audioIngles: "The elephant is very big and gray. It has a long trunk and big ears.",
            fonetica: "/di élefant is véri big and gréi. It jas a long trank and big íers/",
            textoLectura: "The elephant is very big and gray. It has a long trunk and big ears.",
            pregunta: "¿De qué color es el elefante según el texto en inglés?",
            opciones: ["Blanco (White)", "Gris (Gray)", "Marrón (Brown)", "Negro (Black)"],
            correcta: 1,
            pista: "Busca en la primera oración: 'big and gray'.",
            explicacion: "'Gray' significa gris ('El elefante es muy grande y gris')."
        },
        {
            area: "Reading 📘",
            dibujo: "🍓🍌🍊🥗",
            audioIngles: "I like sweet strawberries and yellow bananas for breakfast.",
            fonetica: "/ái láik suít stróberris and iélou banánas for brékfast/",
            textoLectura: "I like sweet strawberries and yellow bananas for breakfast.",
            pregunta: "¿Para qué comida del día le gustan las fresas y los plátanos?",
            opciones: ["Para la cena (Dinner)", "Para el desayuno (Breakfast)", "Para el almuerzo (Lunch)", "Para medianoche"],
            correcta: 1,
            pista: "Mira la última palabra: 'breakfast'.",
            explicacion: "'Breakfast' significa desayuno."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🙋‍♀️💬❓",
            audioIngles: "Can you help me, please?",
            fonetica: "/kan iú jelp mi, plís/",
            pregunta: "¿Qué estás pidiendo cuando dices 'Can you help me, please?'?",
            opciones: ["¿Puedes darme agua?", "¿Puedes ayudarme, por favor?", "¿Dónde está el baño?", "¿Qué hora es?"],
            correcta: 1,
            pista: "La palabra 'help' significa ayudar.",
            explicacion: "'Can you help me, please?' = '¿Puedes ayudarme, por favor?'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🏆🌟👏🎉",
            audioIngles: "You did a great job!",
            fonetica: "/iú did a gréit yob/",
            pregunta: "¿Qué felicitación acabas de escuchar en inglés?",
            opciones: ["Inténtalo mañana", "¡Hiciste un gran trabajo!", "Llegaste tarde", "Ten mucho cuidado"],
            correcta: 1,
            pista: "'Great' = gran/genial y 'job' = trabajo.",
            explicacion: "'You did a great job!' = '¡Hiciste un gran trabajo!'."
        }
    ]
};
