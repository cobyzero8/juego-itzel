// datos/grado1.js - Bloque Nivel 1 (1.º de Primaria)
const nivel1_Grado1 = {
    id: 1,
    nombre: "Montaña del Aprendiz - 1.º de Primaria",
    minimoAciertos: 30, // Requiere al menos 30 aciertos de 40 para desbloquear el Nivel 2
    
    // 20 Preguntas de Matemáticas básicas
    matematicas: [
        { id: 1, pregunta: "¿Cuánto es 5 + 4?", opciones: ["8", "9", "10", "7"], correcta: 1 },
        { id: 2, pregunta: "¿Qué número está ANTES del 15?", opciones: ["16", "13", "14", "12"], correcta: 2 },
        { id: 3, pregunta: "Si Itzel tiene 8 manzanas y se come 3, ¿cuántas le quedan?", opciones: ["5", "4", "6", "3"], correcta: 0 },
        { id: 4, pregunta: "¿Cuánto es 10 + 10?", opciones: ["15", "30", "20", "25"], correcta: 2 },
        { id: 5, pregunta: "¿Cuál de estos números es MAYOR?", opciones: ["12", "19", "17", "14"], correcta: 1 },
        { id: 6, pregunta: "¿Cuánto es 7 - 2?", opciones: ["4", "6", "5", "3"], correcta: 2 },
        { id: 7, pregunta: "Completa la serie: 2, 4, 6, 8, ... ¿qué número sigue?", opciones: ["9", "10", "11", "12"], correcta: 1 },
        { id: 8, pregunta: "¿Cuántos lados tiene un triángulo?", opciones: ["4", "3", "5", "2"], correcta: 1 },
        { id: 9, pregunta: "¿Cuánto es 6 + 6?", opciones: ["12", "11", "13", "10"], correcta: 0 },
        { id: 10, pregunta: "Si en una canasta hay 4 plátanos y compras 5 más, ¿cuántos hay en total?", opciones: ["8", "10", "9", "7"], correcta: 2 },
        { id: 11, pregunta: "¿Qué número representa a 'Quince'?", opciones: ["51", "15", "50", "5"], correcta: 1 },
        { id: 12, pregunta: "¿Cuánto es 14 - 4?", opciones: ["10", "9", "11", "8"], correcta: 0 },
        { id: 13, pregunta: "Si tienes 2 decenas de canicas, ¿cuántas canicas tienes?", opciones: ["10", "12", "20", "30"], correcta: 2 },
        { id: 14, pregunta: "¿Cuánto es 3 + 3 + 3?", opciones: ["6", "9", "12", "8"], correcta: 1 },
        { id: 15, pregunta: "¿Qué figura no tiene esquinas ni lados rectos?", opciones: ["Cuadrado", "Triángulo", "Círculo", "Rectángulo"], correcta: 2 },
        { id: 16, pregunta: "¿Cuánto es 18 - 5?", opciones: ["13", "14", "12", "15"], correcta: 0 },
        { id: 17, pregunta: "Si ordenas de menor a mayor: 8, 3, 5, ¿cuál es el primero?", opciones: ["8", "5", "3", "Ninguno"], correcta: 2 },
        { id: 18, pregunta: "¿Cuánto es 9 + 5?", opciones: ["13", "14", "15", "12"], correcta: 1 },
        { id: 19, pregunta: "Tengo 7 soles y me encuentro 3 soles más en mi mochila. ¿Cuánto dinero tengo?", opciones: ["10 soles", "9 soles", "11 soles", "8 soles"], correcta: 0 },
        { id: 20, pregunta: "¿Cuánto es 20 - 10?", opciones: ["5", "15", "10", "12"], correcta: 2 }
    ],

    // 20 Preguntas de Comprensión Lectora básica
    lectura: [
        { id: 1, pregunta: "Lee: 'El perro Fido ladra feliz cuando ve a Itzel llegar a casa.' ¿Cómo se llama el perro?", opciones: ["Toby", "Fido", "Firulais", "Rex"], correcta: 1 },
        { id: 2, pregunta: "Lee: 'La paloma blanca vuela sobre el gran árbol del parque.' ¿De qué color es la paloma?", opciones: ["Gris", "Negra", "Blanca", "Azul"], correcta: 2 },
        { id: 3, pregunta: "Lee: 'Mateo toma una rica sopa caliente en la mesa.' ¿Qué toma Mateo?", opciones: ["Un jugo", "Una rica sopa caliente", "Agua helada", "Un helado"], correcta: 1 },
        { id: 4, pregunta: "Lee: 'El sol ilumina el campo por la mañana.' ¿Cuándo ilumina el sol el campo?", opciones: ["Por la noche", "Por la tarde", "Por la mañana", "A medianoche"], correcta: 2 },
        { id: 5, pregunta: "Lee: 'La gata Minina duerme en su suave almohada roja.' ¿Dónde duerme la gata?", opciones: ["En la silla", "En el suelo", "En su suave almohada roja", "En el jardín"], correcta: 2 },
        { id: 6, pregunta: "Lee: 'Sofía usa su paraguas amarillo porque está lloviendo.' ¿Por qué usa paraguas Sofía?", opciones: ["Porque hace calor", "Porque está lloviendo", "Porque hay viento", "Porque es de noche"], correcta: 1 },
        { id: 7, pregunta: "¿Cuál es el antónimo (lo contrario) de la palabra 'ALTO'?", opciones: ["Grande", "Bajo", "Fuerte", "Largo"], correcta: 1 },
        { id: 8, pregunta: "Lee: 'El patito se bañaba alegremente en el río de agua limpia.' ¿Dónde se bañaba el patito?", opciones: ["En el mar", "En una piscina", "En el río de agua limpia", "En un lago"], correcta: 2 },
        { id: 9, pregunta: "Lee: 'La profesora escribe la lección en la pizarra verde.' ¿De qué color es la pizarra?", opciones: ["Blanca", "Verde", "Negra", "Azul"], correcta: 1 },
        { id: 10, pregunta: "Lee: 'Daniel guarda sus lápices de colores en su cartuchera.' ¿Qué guarda Daniel?", opciones: ["Sus juguetes", "Sus cuadernos", "Sus lápices de colores", "Sus frutas"], correcta: 2 },
        { id: 11, pregunta: "¿Cuál es el sinónimo (palabra que significa lo mismo) de 'BONITO'?", opciones: ["Feo", "Hermoso", "Triste", "Oscuro"], correcta: 1 },
        { id: 12, pregunta: "Lee: 'El conejo come una crujiente zanahoria en el huerto.' ¿Qué come el conejo?", opciones: ["Una lechuga", "Una manzana", "Una crujiente zanahoria", "Un choclo"], correcta: 2 },
        { id: 13, pregunta: "Lee: 'Lucía enciende la lámpara porque la habitación está muy oscura.' ¿Por qué enciende la lámpara?", opciones: ["Porque tiene frío", "Porque la habitación está oscura", "Porque quiere jugar", "Porque va a salir"], correcta: 1 },
        { id: 14, pregunta: "Lee: 'El osito polar camina sobre la fría nieve.' ¿De qué está hecha la superficie donde camina el osito?", opciones: ["De fría nieve", "De arena", "De pasto", "De piedra"], correcta: 0 },
        { id: 15, pregunta: "¿Qué acción indica la palabra 'CORRER'?", opciones: ["Una cosa", "Un nombre", "Una acción o verbo", "Un color"], correcta: 2 },
        { id: 16, pregunta: "Lee: 'Carlos perdió su pelota azul en el jardín de su casa.' ¿Qué se le perdió a Carlos?", opciones: ["Su bicicleta", "Su pelota azul", "Su gorra", "Su perro"], correcta: 1 },
        { id: 17, pregunta: "Lee: 'Las abejas vuelan entre las flores para juntar dulce miel.' ¿Qué juntan las abejas?", opciones: ["Agua", "Dulce miel", "Hojas", "Semillas"], correcta: 1 },
        { id: 18, pregunta: "¿Cuál es la primera letra del abecedario?", opciones: ["B", "Z", "A", "M"], correcta: 2 },
        { id: 19, pregunta: "Lee: 'El abuelo lee el periódico en el sillón cómodo.' ¿Qué hace el abuelo?", opciones: ["Lee el periódico", "Duerme", "Mira televisión", "Cocina"], correcta: 0 },
        { id: 20, pregunta: "Lee: 'Los niños cantan una hermosa canción en la actuación escolar.' ¿Dónde cantan los niños?", opciones: ["En el parque", "En la actuación escolar", "En el autobús", "En su casa"], correcta: 1 }
    ]
};
