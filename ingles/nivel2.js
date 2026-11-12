// ingles/nivel2.js - Level 2: Basic A1 (Familia, Números del 6 al 20 y Frases de Presentación)
const inglesNivel2 = {
    id: 2,
    nombre: "Level 2: Basic A1 (Familia y Presentación)",

    retos: [
        // --- 1. LA FAMILIA (FAMILY) ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "👨‍👩‍👧‍👦🏠",
            audioIngles: "My family is happy",
            fonetica: "/mái fámili is hápi/",
            pregunta: "Escucha la frase en inglés. ¿Qué significa 'My family is happy'?",
            opciones: ["Mi familia es feliz", "Mi casa es grande", "Tengo muchos amigos", "Mis padres trabajan"],
            correcta: 0,
            pista: "'Family' es familia y 'happy' es feliz.",
            explicacion: "'My family is happy' significa 'Mi familia es feliz'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "👩‍👧‍👦💖",
            audioIngles: "Mother and Father",
            fonetica: "/máder and fázder/",
            pregunta: "¿A qué miembros de la familia se refieren las palabras 'Mother' y 'Father'?",
            opciones: ["Hermanos y tíos", "Mamá y Papá", "Abuelos", "Primos"],
            correcta: 1,
            pista: "'Mother' es mamá y 'Father' es papá.",
            explicacion: "'Mother and Father' significa Mamá y Papá."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "👧👦👶",
            audioIngles: "Sister and Brother",
            fonetica: "/síster and brázder/",
            pregunta: "Si tienes una hermanita y un hermanito, ¿cómo se dice 'Sister and Brother' en español?",
            opciones: ["Tío y tía", "Hermana y Hermano", "Amigo y amiga", "Abuelo y nieta"],
            correcta: 1,
            pista: "'Sister' es hermana y 'Brother' es hermano.",
            explicacion: "'Sister and Brother' significa Hermana y Hermano."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "👴👵🤍",
            audioIngles: "Grandmother and Grandfather",
            fonetica: "/grándmader and grándfázder/",
            pregunta: "¿A quiénes visitamos con mucho cariño que son los papás de nuestros papás?",
            opciones: ["A los abuelitos (Grandmother and Grandfather)", "A los vecinos", "A los profesores", "A los doctores"],
            correcta: 0,
            pista: Llevan la palabra 'Grand' antes de mother y father.",
            explicacion: "'Grandmother and Grandfather' significa Abuela y Abuelo."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🙋‍♀️✨",
            audioIngles: "I am a happy girl",
            fonetica: "/ái am a hápi guerl/",
            pregunta: "¿Qué significa el verbo 'I am' en la oración 'I am a happy girl'?",
            opciones: ["Yo soy / Yo estoy", "Tú tienes", "Él corre", "Nosotros vamos"],
            correcta: 0,
            pista: "'I am' es la forma del verbo To Be para decir quién eres.",
            explicacion: "'I am a happy girl' significa 'Yo soy una niña feliz'."
        },

        // --- 2. NÚMEROS DEL 6 AL 20 ---
        {
            area: "Grammar 🧩",
            dibujo: "🖐️🖐️ (6, 7, 8, 9, 10)",
            audioIngles: "Six, seven, eight, nine, ten",
            fonetica: "/siks, séven, éit, náin, ten/",
            pregunta: "Escucha los números en inglés. ¿Qué número sigue después de 'Six' (6)?",
            opciones: ["Seven (7)", "One (1)", "Twenty (20)", "Three (3)"],
            correcta: 0,
            pista: "Six es 6, y el que sigue suena parecido a 'séven'.",
            explicacion: "El número que sigue es 'Seven' (7)."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🔢🔟➕🔟",
            audioIngles: "Ten plus ten is twenty",
            fonetica: "/ten plas ten is tuénti/",
            pregunta: "¿Qué número es 'Twenty' en inglés?",
            opciones: ["Diez (10)", "Quince (15)", "Veinte (20)", "Cien (100)"],
            correcta: 2,
            pista: "10 + 10 = 20.",
            explicacion: "'Twenty' es el número 20."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🏫📚🎒",
            audioIngles: "My school bag is blue",
            fonetica: "/mái skúl bag is blú/",
            pregunta: "¿De qué color es la mochila escolar ('school bag') en la frase?",
            opciones: ["Rojo (Red)", "Azul (Blue)", "Verde (Green)", "Amarillo (Yellow)"],
            correcta: 1,
            pista: "Escucha la última palabra: 'blue'.",
            explicacion: "'My school bag is blue' = 'Mi mochila escolar es azul'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "✏️📝📐",
            audioIngles: "Pencil and eraser",
            fonetica: "/pénsil and iréiser/",
            pregunta: "¿Qué útiles escolares usamos para escribir y borrar?",
            opciones: ["Mesa y silla", "Lápiz y borrador", "Libro y cuaderno", "Regla y tijera"],
            correcta: 1,
            pista: "'Pencil' es lápiz y 'eraser' es borrador.",
            explicacion: "'Pencil and eraser' significa Lápiz y borrador."
        },
        {
            area: "Reading 📘",
            dibujo: "👧🏠🌸",
            audioIngles: "Itzel has a nice house with a pink door and green windows.",
            fonetica: "/Itzel jas a náis jáus uid a pink dor and grín uíndous/",
            textoLectura: "Itzel has a nice house with a pink door and green windows.",
            pregunta: "Según la lectura en inglés, ¿de qué color es la puerta ('door') de la casa de Itzel?",
            opciones: ["Rosada (Pink)", "Azul (Blue)", "Amarilla (Yellow)", "Negra (Black)"],
            correcta: 0,
            pista: "Busca en el texto: 'pink door'.",
            explicacion: "'Pink door' significa puerta rosada."
        }
    ]
};
