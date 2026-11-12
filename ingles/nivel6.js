// ingles/nivel6.js - Level 6: Upper-Intermediate B2 (Expresiones Prácticas, Habilidades y Diálogos)
const inglesNivel6 = {
    id: 6,
    nombre: "Level 6: Upper-Intermediate B2 (Expresiones Útiles)",

    retos: [
        // --- 1. EXPRESIONES COTIDIANAS Y PHRASAL VERBS ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "💡🧠✨",
            audioIngles: "I figured it out",
            fonetica: "/ái fígured it áut/",
            pregunta: "Cuando logras resolver un problema difícil o entender algo complejo, ¿qué dices en inglés ('I figured it out')?",
            opciones: ["Lo logré / Lo descubrí", "Me rendí por completo", "No entiendo nada", "Tengo mucho sueño"],
            correcta: 0,
            pista: "'Figure out' es un phrasal verb muy útil que significa resolver o descubrir algo.",
            explicacion: "'I figured it out' significa 'Lo resolví / Lo descubrí'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🏃‍♀️💪🔥",
            audioIngles: "Keep going, do not give up",
            fonetica: "/kíp góuing, dú not giv áp/",
            pregunta: "Si Itzel está practicando algo y se pone difícil, ¿qué significa esta voz de aliento?",
            opciones: ["Sigue adelante, no te rindas", "Detente inmediatamente", "Vete a descansar", "Cierra el libro"],
            correcta: 0,
            pista: "'Keep going' es seguir adelante y 'give up' es rendirse.",
            explicacion: "'Keep going, do not give up' = 'Sigue adelante, no te rindas'."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🎒🧹📦",
            audioIngles: "Please clean up your room",
            fonetica: "/plís clín áp iur rúm/",
            pregunta: "¿Qué te piden cuando te dicen 'Clean up your room'?",
            opciones: ["Ordena / Limpia tu habitación", "Pinta las paredes", "Abre las ventanas", "Saca la basura"],
            correcta: 0,
            pista: "'Clean up' significa ordenar o limpiar por completo.",
            explicacion: "'Please clean up your room' = 'Por favor, ordena tu habitación'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🤝✨😊",
            audioIngles: "It is up to you",
            fonetica: "/it is áp tu iú/",
            pregunta: "Cuando te dan la oportunidad de tomar una decisión por ti mismo, ¿qué significa 'It is up to you'?",
            opciones: ["Depende de ti / Tú decides", "Es prohibido", "Nadie lo sabe", "Es muy tarde"],
            correcta: 0,
            pista: "Significa que la elección está en tus manos.",
            explicacion: "'It is up to you' significa 'Depende de ti / Tú decides'."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🕒⏳🏃‍♂️",
            audioIngles: "We ran out of time",
            fonetica: "/wi ran áut of táim/",
            pregunta: "Cuando se acaba el tiempo en un juego o examen, ¿qué significa 'We ran out of time'?",
            opciones: ["Se nos acabó el tiempo", "Tenemos mucho tiempo libre", "El reloj se rompió", "Ganamos más tiempo"],
            correcta: 0,
            pista: "'Run out of' significa quedarse sin algo.",
            explicacion: "'We ran out of time' = 'Se nos acabó el tiempo'."
        },

        // --- 2. SITUACIONES DE VIAJE Y COMUNICACIÓN ---
        {
            area: "Reading 📘",
            dibujo: "✈️🗺️🧳",
            audioIngles: "Traveling opens our minds to new cultures and wonderful adventures",
            fonetica: "/tráveling óupens áur máinds tu niú cálchurs and uánderful advéntchurs/",
            textoLectura: "Traveling opens our minds to new cultures and wonderful adventures",
            pregunta: "Según la lectura, ¿qué abre el viajar ('traveling') en nosotros?",
            opciones: ["Nuestra mente a nuevas culturas y aventuras maravillosas", "Las puertas de la casa", "Los libros de texto", "Las ventanas del avión"],
            correcta: 0,
            pista: "'Opens our minds' significa abre nuestras mentes.",
            explicacion: "'Viajar abre nuestras mentes a nuevas culturas y maravillosas aventuras'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🗣️🌍🇺🇸",
            audioIngles: "Practicing every day makes a huge difference in fluency",
            fonetica: "/práctising évri déi méiks a jiúj dífirens in flúensi/",
            pregunta: "Para aprender inglés o cualquier habilidad, ¿qué produce practicar todos los días ('practicing every day')?",
            opciones: ["Una gran diferencia en la fluidez", "Mucho cansancio sin resultado", "Que olvides las palabras", "Problemas de memoria"],
            correcta: 0,
            pista: "'Huge difference' es una gran diferencia y 'fluency' es fluidez.",
            explicacion: "'Practicar todos los días marca una gran diferencia en la fluidez'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌟💪🎯",
            audioIngles: "Believe in yourself and you will achieve your goals",
            fonetica: "/belív in iérself and iú uil achív iur góuls/",
            pregunta: "¿Cuál es el hermoso mensaje motivacional de esta frase en inglés?",
            opciones: ["Cree en ti mismo y alcanzarás tus metas", "No confíes en nadie", "Los sueños nunca se cumplen", "Esfuérzate menos"],
            correcta: 0,
            pista: "'Believe in yourself' es cree en ti mismo y 'goals' son metas.",
            explicacion: "'Cree en ti mismo y alcanzarás tus metas'."
        },
        {
            area: "Reading 📘",
            dibujo: "📖✨💡",
            audioIngles: "Curiosity is the key to discovering the secrets of the world",
            fonetica: "/kiuriósiti is de kí tu discóvering de sícrets of de uérld/",
            textoLectura: "Curiosity is the key to discovering the secrets of the world",
            pregunta: "Según el texto, ¿para qué sirve la curiosidad ('curiosity')?",
            opciones: ["Es la clave para descubrir los secretos del mundo", "Es una pérdida de tiempo", "Nos hace olvidar las cosas", "No sirve para nada"],
            correcta: 0,
            pista: "'The key to discovering' es la clave para descubrir.",
            explicacion: "'La curiosidad es la clave para descubrir los secretos del mundo'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🏆👑🎉",
            audioIngles: "Fantastic work! Level six is complete",
            fonetica: "/fantástik uérk! lével siks is complít/",
            pregunta: "¡Llegaste al final del Nivel 6! ¿Qué te dice la voz alegremente?",
            opciones: ["¡Trabajo fantástico! El nivel seis está completo", "Has fallado todas las preguntas", "Vuelve a empezar el nivel uno", "Apaga la pantalla"],
            correcta: 0,
            pista: "'Fantastic work' es trabajo fantástico.",
            explicacion: "'¡Trabajo fantástico! El nivel seis está completo'."
        }
    ]
};
