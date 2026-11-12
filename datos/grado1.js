// datos/grado1.js - Bloque Nivel 1 Ilustrado (1.º de Primaria - Perú)
const nivel1_Grado1 = {
    id: 1,
    nombre: "Montaña del Aprendiz - 1.º de Primaria",
    minimoAciertos: 30,

    // 20 Preguntas de Matemáticas con Dibujos Visuales
    matematicas: [
        { id: 1, dibujo: "🍓🍓🍓🍓🍓  ➕  🍓🍓🍓🍓", pregunta: "¿Cuánto es 5 + 4?", opciones: ["8", "9", "10", "7"], correcta: 1 },
        { id: 2, dibujo: "🔢 13  ➡️  ❓  ➡️  15", pregunta: "¿Qué número está ANTES del 15?", opciones: ["16", "13", "14", "12"], correcta: 2 },
        { id: 3, dibujo: "🍎🍎🍎🍎🍎 ❌❌❌", pregunta: "Si Itzel tiene 8 manzanas y se come 3, ¿cuántas le quedan?", opciones: ["5", "4", "6", "3"], correcta: 0 },
        { id: 4, dibujo: "🔟  ➕  🔟", pregunta: "¿Cuánto es 10 + 10?", opciones: ["15", "30", "20", "25"], correcta: 2 },
        { id: 5, dibujo: "🐊 ¿Cuál se come al MAYOR?", pregunta: "¿Cuál de estos números es MAYOR?", opciones: ["12", "19", "17", "14"], correcta: 1 },
        { id: 6, dibujo: "🎈🎈🎈🎈🎈 💥💥", pregunta: "¿Cuánto es 7 - 2?", opciones: ["4", "6", "5", "3"], correcta: 2 },
        { id: 7, dibujo: "👣 2 ➔ 4 ➔ 6 ➔ 8 ➔ ❓", pregunta: "Completa la serie: 2, 4, 6, 8, ... ¿qué número sigue?", opciones: ["9", "10", "11", "12"], correcta: 1 },
        { id: 8, dibujo: "🔺 📐 🍕", pregunta: "¿Cuántos lados tiene un triángulo?", opciones: ["4", "3", "5", "2"], correcta: 1 },
        { id: 9, dibujo: "🧁🧁🧁🧁🧁🧁 ➕ 🧁🧁🧁🧁🧁🧁", pregunta: "¿Cuánto es 6 + 6?", opciones: ["12", "11", "13", "10"], correcta: 0 },
        { id: 10, dibujo: "🍌🍌🍌🍌  ➕  🍌🍌🍌🍌🍌", pregunta: "Si en una canasta hay 4 plátanos y compras 5 más, ¿cuántos hay en total?", opciones: ["8", "10", "9", "7"], correcta: 2 },
        { id: 11, dibujo: "📝 Quince = ❓", pregunta: "¿Qué número representa a 'Quince'?", opciones: ["51", "15", "50", "5"], correcta: 1 },
        { id: 12, dibujo: "⭐ 14  ➖  4 ⭐", pregunta: "¿Cuánto es 14 - 4?", opciones: ["10", "9", "11", "8"], correcta: 0 },
        { id: 13, dibujo: "🔮(10)  ➕  🔮(10)", pregunta: "Si tienes 2 decenas de canicas, ¿cuántas canicas tienes?", opciones: ["10", "12", "20", "30"], correcta: 2 },
        { id: 14, dibujo: "🍒(3) ➕ 🍒(3) ➕ 🍒(3)", pregunta: "¿Cuánto es 3 + 3 + 3?", opciones: ["6", "9", "12", "8"], correcta: 1 },
        { id: 15, dibujo: "⚽ 🪙 🍩", pregunta: "¿Qué figura no tiene esquinas ni lados rectos?", opciones: ["Cuadrado", "Triángulo", "Círculo", "Rectángulo"], correcta: 2 },
        { id: 16, dibujo: "🍬 18  ➖  5 🍬", pregunta: "¿Cuánto es 18 - 5?", opciones: ["13", "14", "12", "15"], correcta: 0 },
        { id: 17, dibujo: "🪜 8️⃣  3️⃣  5️⃣", pregunta: "Si ordenas de menor a mayor: 8, 3, 5, ¿cuál es el primero?", opciones: ["8", "5", "3", "Ninguno"], correcta: 2 },
        { id: 18, dibujo: "🦋(9)  ➕  🦋(5)", pregunta: "¿Cuánto es 9 + 5?", opciones: ["13", "14", "15", "12"], correcta: 1 },
        { id: 19, dibujo: "💰 S/ 7  ➕  🪙 S/ 3", pregunta: "Tengo 7 soles y me encuentro 3 soles más en mi mochila. ¿Cuánto dinero tengo?", opciones: ["10 soles", "9 soles", "11 soles", "8 soles"], correcta: 0 },
        { id: 20, dibujo: "🚀 20  ➖  10 🚀", pregunta: "¿Cuánto es 20 - 10?", opciones: ["5", "15", "10", "12"], correcta: 2 }
    ],

    // 20 Preguntas de Comprensión Lectora con Escena Animada
    lectura: [
        { id: 1, dibujo: "🐕💨 ➔ 👧🏠", pregunta: "Lee: 'El perro Fido ladra feliz cuando ve a Itzel llegar a casa.' ¿Cómo se llama el perro?", opciones: ["Toby", "Fido", "Firulais", "Rex"], correcta: 1 },
        { id: 2, dibujo: "🕊️☁️ 🌳🏞️", pregunta: "Lee: 'La paloma blanca vuela sobre el gran árbol del parque.' ¿De qué color es la paloma?", opciones: ["Gris", "Negra", "Blanca", "Azul"], correcta: 2 },
        { id: 3, dibujo: "👦🍲♨️", pregunta: "Lee: 'Mateo toma una rica sopa caliente en la mesa.' ¿Qué toma Mateo?", opciones: ["Un jugo", "Una rica sopa caliente", "Agua helada", "Un helado"], correcta: 1 },
        { id: 4, dibujo: "🌅☀️🌾", pregunta: "Lee: 'El sol ilumina el campo por la mañana.' ¿Cuándo ilumina el sol el campo?", opciones: ["Por la noche", "Por la tarde", "Por la mañana", "A medianoche"], correcta: 2 },
        { id: 5, dibujo: "🐈💤🛏️❤️", pregunta: "Lee: 'La gata Minina duerme en su suave almohada roja.' ¿Dónde duerme la gata?", opciones: ["En la silla", "En el suelo", "En su suave almohada roja", "En el jardín"], correcta: 2 },
        { id: 6, dibujo: "👧☂️🌧️", pregunta: "Lee: 'Sofía usa su paraguas amarillo porque está lloviendo.' ¿Por qué usa paraguas Sofía?", opciones: ["Porque hace calor", "Porque está lloviendo", "Porque hay viento", "Porque es de noche"], correcta: 1 },
        { id: 7, dibujo: "🦒 ALTO  🆚  ❓", pregunta: "¿Cuál es el antónimo (lo contrario) de la palabra 'ALTO'?", opciones: ["Grande", "Bajo", "Fuerte", "Largo"], correcta: 1 },
        { id: 8, dibujo: "🦆💦🌊", pregunta: "Lee: 'El patito se bañaba alegremente en el río de agua limpia.' ¿Dónde se bañaba el patito?", opciones: ["En el mar", "En una piscina", "En el río de agua limpia", "En un lago"], correcta: 2 },
        { id: 9, dibujo: "👩‍🏫✍️🟩", pregunta: "Lee: 'La profesora escribe la lección en la pizarra verde.' ¿De qué color es la pizarra?", opciones: ["Blanca", "Verde", "Negra", "Azul"], correcta: 1 },
        { id: 10, dibujo: "🖍️✏️🎒", pregunta: "Lee: 'Daniel guarda sus lápices de colores en su cartuchera.' ¿Qué guarda Daniel?", opciones: ["Sus juguetes", "Sus cuadernos", "Sus lápices de colores", "Sus frutas"], correcta: 2 },
        { id: 11, dibujo: "🌸 BONITO  🟰  ❓", pregunta: "¿Cuál es el sinónimo (palabra que significa lo mismo) de 'BONITO'?", opciones: ["Feo", "Hermoso", "Triste", "Oscuro"], correcta: 1 },
        { id: 12, dibujo: "🐰🥕🌱", pregunta: "Lee: 'El conejo come una crujiente zanahoria en el huerto.' ¿Qué come el conejo?", opciones: ["Una lechuga", "Una manzana", "Una crujiente zanahoria", "Un choclo"], correcta: 2 },
        { id: 13, dibujo: "👧💡🌑", pregunta: "Lee: 'Lucía enciende la lámpara porque la habitación está muy oscura.' ¿Por qué enciende la lámpara?", opciones: ["Porque tiene frío", "Porque la habitación está oscura", "Porque quiere jugar", "Porque va a salir"], correcta: 1 },
        { id: 14, dibujo: "🐻‍❄️❄️👣", pregunta: "Lee: 'El osito polar camina sobre la fría nieve.' ¿De qué está hecha la superficie donde camina el osito?", opciones: ["De fría nieve", "De arena", "De pasto", "De piedra"], correcta: 0 },
        { id: 15, dibujo: "🏃‍♀️💨", pregunta: "¿Qué acción indica la palabra 'CORRER'?", opciones: ["Una cosa", "Un nombre", "Una acción o verbo", "Un color"], correcta: 2 },
        { id: 16, dibujo: "👦🔍⚽🔵", pregunta: "Lee: 'Carlos perdió su pelota azul en el jardín de su casa.' ¿Qué se le perdió a Carlos?", opciones: ["Su bicicleta", "Su pelota azul", "Su gorra", "Su perro"], correcta: 1 },
        { id: 17, dibujo: "🐝🌻🍯", pregunta: "Lee: 'Las abejas vuelan entre las flores para juntar dulce miel.' ¿Qué juntan las abejas?", opciones: ["Agua", "Dulce miel", "Hojas", "Semillas"], correcta: 1 },
        { id: 18, dibujo: "🔤 ❓ ➔ B ➔ C", pregunta: "¿Cuál es la primera letra del abecedario?", opciones: ["B", "Z", "A", "M"], correcta: 2 },
        { id: 19, dibujo: "👴📰🛋️", pregunta: "Lee: 'El abuelo lee el periódico en el sillón cómodo.' ¿Qué hace el abuelo?", opciones: ["Lee el periódico", "Duerme", "Mira televisión", "Cocina"], correcta: 0 },
        { id: 20, dibujo: "👧👦🎤🎶🏫", pregunta: "Lee: 'Los niños cantan una hermosa canción en la actuación escolar.' ¿Dónde cantan los niños?", opciones: ["En el parque", "En la actuación escolar", "En el autobús", "En su casa"], correcta: 1 }
    ]
};
