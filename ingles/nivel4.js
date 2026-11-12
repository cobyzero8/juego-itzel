// ingles/nivel4.js - Level 4: Pre-Intermediate B1 (Pasado Simple, Acciones y Pequeñas Historias)
const inglesNivel4 = {
    id: 4,
    nombre: "Level 4: Pre-Intermediate B1 (Pasado e Historias)",

    retos: [
        // --- 1. ACCIONES EN PASADO (PAST SIMPLE) ---
        {
            area: "Vocabulary 🗣️",
            dibujo: "🏃‍♀️💨yesterday",
            audioIngles: "Yesterday I played in the park",
            fonetica: "/yésterdei ái pléid in de park/",
            pregunta: "Escucha la oración en pasado ('Yesterday I played'). ¿Qué significa?",
            opciones: ["Mañana jugaré en el parque", "Ayer jugué en el parque", "Nunca juego en el parque", "Estoy jugando ahora"],
            correcta: 1,
            pista: "'Yesterday' significa ayer y 'played' es jugué (en pasado).",
            explicacion: "'Yesterday I played in the park' significa 'Ayer jugué en el parque'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "📚👧✨",
            audioIngles: "She read a fantastic book last night",
            fonetica: "/shi red a fantástik buk last náit/",
            pregunta: "¿Qué hizo ella ('She read') anoche según la oración?",
            opciones: ["Leyó un libro fantástico anoche", "Compró una bicicleta nueva", "Durmió todo el día", "Bailó en la escuela"],
            correcta: 0,
            pista: "'Last night' significa anoche y 'read' es leyó.",
            explicacion: "'She read a fantastic book last night' = 'Ella leyó un libro fantástico anoche'."
        },
        {
            area: "Grammar 🧩",
            dibujo: "✈️🌍🗺️",
            audioIngles: "We traveled to a wonderful city",
            fonetica: "/wi tráveld tu a uánderful síti/",
            pregunta: "¿Qué significa la frase en pasado 'We traveled to a wonderful city'?",
            opciones: ["Viajamos a una ciudad maravillosa", "Vivimos en el campo", "Compramos una casa vieja", "Jugamos fútbol"],
            correcta: 0,
            pista: "'Traveled' es viajamos y 'wonderful' es maravillosa.",
            explicacion: "'We traveled to a wonderful city' = 'Viajamos a una ciudad maravillosa'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🎨🖼️🌟",
            audioIngles: "He painted a beautiful picture",
            fonetica: "/ji péinted a biútiful pícture/",
            pregunta: "¿Qué hizo él con el cuadro ('picture')?",
            opciones: ["Pintó un cuadro hermoso", "Rompió el papel", "Escondió los colores", "Limpió la mesa"],
            correcta: 0,
            pista: "'Painted' significa pintó.",
            explicacion: "'He painted a beautiful picture' = 'Él pintó un cuadro hermoso'."
        },
        {
            area: "Grammar 🧩",
            dibujo: "🐶🐕🏃‍♂️",
            audioIngles: "The dog ran very fast",
            fonetica: "/de dog ran véri fast/",
            pregunta: "El verbo 'ran' es el pasado de correr ('run'). ¿Qué dice la frase?",
            opciones: ["El perro corrió muy rápido", "El perro se quedó dormido", "El perro comió despacio", "El perro ladró fuerte"],
            correcta: 0,
            pista: "'Fast' significa rápido.",
            explicacion: "'The dog ran very fast' = 'El perro corrió muy rápido'."
        },

        // --- 2. HISTORIA CORTA EN INGLÉS ---
        {
            area: "Reading 📘",
            dibujo: "🐱☀️🌳🏡",
            audioIngles: "Little Luna was a clever cat. She loved climbing tall trees on sunny afternoons.",
            fonetica: "/lítel luna uas a cléver kat. Shi lavd cláimbing tol trís on sáni áfternuns/",
            textoLectura: "Little Luna was a clever cat. She loved climbing tall trees on sunny afternoons.",
            pregunta: "Según la historia corta, ¿cómo era la gatita Luna y qué le encantaba hacer?",
            opciones: ["Era una gata perezosa que odiaba el sol", "Era una gata lista y le encantaba trepar árboles altos en tardes soleadas", "Era un perro que vivía en el agua", "Le gustaba dormir en la cocina"],
            correcta: 1,
            pista: "'Clever cat' es gata lista y 'climbing tall trees' es trepar árboles altos.",
            explicacion: "'La pequeña Luna era una gata lista. Le encantaba trepar árboles altos en tardes soleadas'."
        },
        {
            area: "Reading 📘",
            dibujo: "🦜🎶🌈",
            audioIngles: "Suddenly, a colorful bird sang a sweet song, and Luna jumped down to watch it.",
            fonetica: "/súdenli, a cálorful berd sang a suít song, and luna jampt dán tu uóch it/",
            textoLectura: "Suddenly, a colorful bird sang a sweet song, and Luna jumped down to watch it.",
            pregunta: "¿Qué hizo el pájaro de colores ('colorful bird') en la historia?",
            opciones: ["Cantó una canción dulce", "Se voló lejos sin hacer ruido", "Se comió la comida del gato", "Se durmió en una roca"],
            correcta: 0,
            pista: "'Sang a sweet song' significa cantó una canción dulce.",
            explicacion: "'De repente, un pájaro de colores cantó una canción dulce y Luna saltó para observarlo'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "🌙⭐🦉",
            audioIngles: "The night arrived with shining stars",
            fonetica: "/de náit arráived uid sháining stars/",
            pregunta: "¿Qué anuncia la frase 'The night arrived with shining stars'?",
            opciones: ["Llegó el día con sol brillante", "Llegó la noche con estrellas brillantes", "Empezó a llover fuerte", "Se fue la luz de la casa"],
            correcta: 1,
            pista: "'Night' es noche y 'shining stars' son estrellas brillantes.",
            explicacion: "'The night arrived with shining stars' = 'Llegó la noche con estrellas brillantes'."
        },
        {
            area: "Reading 📘",
            dibujo: "🛌💤🌙",
            audioIngles: "Luna went to sleep dreaming about her magical adventures",
            fonetica: "/luna uent tu slíp dríming abáut jer májical advéntchurs/",
            textoLectura: "Luna went to sleep dreaming about her magical adventures",
            pregunta: "Al terminar el día, ¿con qué se durmió soñando la gatita Luna?",
            opciones: ["Con sus aventuras mágicas", "Con un plato de sopa fría", "Con los perros del vecindario", "Con la lluvia de la mañana"],
            correcta: 0,
            pista: "'Magical adventures' significa aventuras mágicas.",
            explicacion: "'Luna se fue a dormir soñando con sus aventuras mágicas'."
        },
        {
            area: "Vocabulary 🗣️",
            dibujo: "👏🎉✨",
            audioIngles: "You did amazing in this story!",
            fonetica: "/iú did améizing in zis stóri/",
            pregunta: "¡Excelente trabajo completando la historia! ¿Qué te dice la voz en inglés?",
            opciones: ["¡Lo hiciste increíble en esta historia!", "Vuelve a empezar desde cero", "El cuento es muy aburrido", "Cierra el libro ahora"],
            correcta: 0,
            pista: "'Amazing' significa increíble o asombroso.",
            explicacion: "'You did amazing in this story!' = '¡Lo hiciste increíble en esta historia!'."
        }
    ]
};
