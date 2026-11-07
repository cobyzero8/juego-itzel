// datos/grado1.js - 1º Grado de Primaria (Nivel 1 del Mapa)
const nivel1_Grado1 = {
    id: 1,
    nombre: "Montaña del Aprendiz - 1º Grado",
    minimoParaAprobar: 32, // Debe acertar al menos 32 de 40 para avanzar
    preguntasMatematicas: [
        // 20 Preguntas de Matemáticas 1º Grado
        { id: 1, pregunta: "¿Cuánto es 5 + 3?", opciones: ["7", "8", "9", "6"], correcta: 1 },
        { id: 2, pregunta: "¿Qué número sigue después del 19?", opciones: ["18", "21", "20", "22"], correcta: 2 },
        // ... hasta completar 20 preguntas
    ],
    preguntasLectura: [
        // 20 Preguntas de Comprensión Lectora 1º Grado
        { id: 1, pregunta: "Lee: 'El gato Tom toma leche en su plato rojo.' ¿De qué color es el plato?", opciones: ["Azul", "Rojo", "Verde", "Amarillo"], correcta: 1 },
        { id: 2, pregunta: "Lee: 'La mariposa vuela alto entre las flores.' ¿Quién vuela alto?", opciones: ["La abeja", "El pájaro", "La mariposa", "El avión"], correcta: 2 },
        // ... hasta completar 20 preguntas
    ]
};
