// Banco de preguntas para Primaria (Niveles 1 al 20)
// Estructura lista para crecer de 9 a 12 años

const preguntasPrimaria = [
    // --- Nivel 1: Tablas iniciales y Lectura Básica ---
    {
        nivel: 1,
        categoria: "Matemáticas 🧮",
        tipoColor: "bg-emerald-600",
        pregunta: "¿Cuánto es 8 x 7?",
        opciones: ["54", "56", "64", "49"],
        correcta: 1
    },
    {
        nivel: 1,
        categoria: "Comprensión Lectora 📖",
        tipoColor: "bg-pink-600",
        pregunta: "Lee con atención: 'El pequeño conejo blanco corrió al prado porque escuchó truenos en el cielo y temía mojarse.' ¿Por qué corrió el conejo?",
        opciones: [
            "Porque quería jugar en el césped",
            "Porque tenía hambre de zanahorias",
            "Porque escuchó truenos y temía mojarse",
            "Porque iba a visitar a su abuela"
        ],
        correcta: 2
    },

    // --- Nivel 2: Restas con prestar y Vocabulario ---
    {
        nivel: 2,
        categoria: "Matemáticas 🧮",
        tipoColor: "bg-emerald-600",
        pregunta: "Si Itzel tiene 85 caramelos y regala 28 a sus amigos, ¿cuántos caramelos le quedan?",
        opciones: ["57", "63", "53", "67"],
        correcta: 0
    },
    {
        nivel: 2,
        categoria: "Comprensión Lectora 📖",
        tipoColor: "bg-pink-600",
        pregunta: "En la oración: 'El zorro audaz logró escapar del cazador astutamente.' ¿Qué significa la palabra 'audaz'?",
        opciones: ["Miedoso", "Valiente y hábil", "Lento", "Dormilón"],
        correcta: 1
    },

    // --- Nivel 3: Fracciones iniciales y Causa-Efecto ---
    {
        nivel: 3,
        categoria: "Matemáticas 🧮",
        tipoColor: "bg-emerald-600",
        pregunta: "Si cortamos una pizza en 8 rebanadas iguales y nos comemos 3, ¿qué fracción nos queda?",
        opciones: ["3/8", "5/8", "8/3", "1/2"],
        correcta: 1
    },
    {
        nivel: 3,
        categoria: "Comprensión Lectora 📖",
        tipoColor: "bg-pink-600",
        pregunta: "Lee: 'El sol brilló intensamente todo el día, por lo que la nieve del tejado comenzó a derretirse rápidamente.' ¿Por qué se derritió la nieve?",
        opciones: [
            "Porque cayó la noche",
            "Porque el sol brilló intensamente",
            "Porque empezó a llover",
            "Porque alguien la limpió"
        ],
        correcta: 1
    },

    // --- Nivel 4: Perímetros y Análisis Textual ---
    {
        nivel: 4,
        categoria: "Matemáticas 🧮",
        tipoColor: "bg-emerald-600",
        pregunta: "¿Cuál es el perímetro de un cuadrado que mide 6 cm por cada lado?",
        opciones: ["12 cm", "36 cm", "24 cm", "18 cm"],
        correcta: 2
    },
    {
        nivel: 4,
        categoria: "Comprensión Lectora 📖",
        tipoColor: "bg-pink-600",
        pregunta: "Lee: 'A pesar del intenso cansancio, la deportista cruzó la meta con una gran sonrisa.' ¿Qué demuestra principalmente la deportista?",
        opciones: ["Tristeza", "Perseverancia y alegría", "Enojada por ganar", "Desinterés"],
        correcta: 1
    }
];

// Exportación para poder usar las preguntas en el motor del juego
if (typeof module !== 'undefined') {
    module.exports = preguntasPrimaria;
}
