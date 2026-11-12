// datos/grado2.js - Aula 2: Agilidad Mental (Suma llevando, Resta prestando, Tablas 2-5, División, Razonamiento y Lecturas)
const nivel2_Grado2 = {
    id: 2,
    nombre: "Agilidad Mental",

    // 20 Retos Matemáticos: 4 Suma + 4 Resta + 4 Multiplicación + 4 División + 4 Razonamiento
    matematicas: [
        // --- SUMA LLEVANDO ---
        {
            area: "Suma ➕",
            dibujo: "📦(28 libros)  ➕  📚(15 libros)",
            pregunta: "En la biblioteca del aula había 28 libros de cuentos y llegaron 15 libros nuevos. ¿Cuántos hay en total?",
            opciones: ["33 libros", "43 libros", "42 libros", "53 libros"],
            correcta: 1,
            pista: "Suma primero las unidades: 8 + 5 = 13 (pones el 3 y llevas 1 decena). Luego suma 2 + 1 + 1.",
            explicacion: "28 + 15 = 43 libros (8+5=13, llevamos 1; 20+10+10=40)."
        },
        {
            area: "Suma ➕",
            dibujo: "💵 S/ 45  ➕  💵 S/ 37",
            pregunta: "Itzel junta 45 soles en su alcancía y su abuelita le regala 37 soles más. ¿Cuánto dinero tiene ahora?",
            opciones: ["72 soles", "82 soles", "81 soles", "712 soles"],
            correcta: 1,
            pista: "Suma 45 + 30 = 75, y a ese resultado súmale los 7 soles sueltos.",
            explicacion: "45 + 37 = 82 soles."
        },
        {
            area: "Suma ➕",
            dibujo: "🌟 36 puntos  ➕  🌟 29 puntos",
            pregunta: "En la primera partida ganaste 36 puntos y en la segunda 29 puntos. ¿Cuál es tu puntaje total?",
            opciones: ["65 puntos", "55 puntos", "64 puntos", "75 puntos"],
            correcta: 0,
            pista: "Truco rápido: 29 es casi 30. Suma 36 + 30 = 66 y réstale 1.",
            explicacion: "36 + 29 = 65 puntos."
        },
        {
            area: "Suma ➕",
            dibujo: "🍎(24)  ➕  🍊(18)  ➕  🍌(10)",
            pregunta: "Para una ensalada de frutas compraron 24 fresas, 18 uvas y 10 plátanos. ¿Cuántas frutas hay en total?",
            opciones: ["42 frutas", "52 frutas", "54 frutas", "48 frutas"],
            correcta: 1,
            pista: "Suma primero 24 + 18 = 42, y luego agrégale una decena (10).",
            explicacion: "24 + 18 + 10 = 52 frutas."
        },

        // --- RESTA PRESTANDO Y VUELTOS ---
        {
            area: "Resta ➖",
            dibujo: "🎈(42 globos)  ➖  💨(17 volaron)",
            pregunta: "Había 42 globos decorando la fiesta y el viento se llevó 17. ¿Cuántos globos quedaron?",
            opciones: ["35 globos", "25 globos", "26 globos", "31 globos"],
            correcta: 1,
            pista: "Como a 2 no le puedes quitar 7, el 4 le presta 1 decena: 12 - 7 = 5, y 3 - 1 = 2.",
            explicacion: "42 - 17 = 25 globos."
        },
        {
            area: "Resta ➖",
            dibujo: "💵 S/ 50  ➖  🎒 S/ 28",
            pregunta: "Compras una mochila que cuesta 28 soles y pagas con un billete de 50 soles. ¿Cuánto te dan de vuelto?",
            opciones: ["32 soles", "22 soles", "28 soles", "12 soles"],
            correcta: 1,
            pista: "Cuenta cuánto falta de 28 para llegar a 50: de 28 a 30 hay 2, y de 30 a 50 hay 20.",
            explicacion: "50 - 28 = 22 soles de vuelto."
        },
        {
            area: "Resta ➖",
            dibujo: "📖 Libro: 64 páginas  |  ✅ Leídas: 29",
            pregunta: "Un libro de aventuras tiene 64 páginas. Si Itzel ya leyó 29 páginas, ¿cuántas le faltan por leer?",
            opciones: ["45 páginas", "35 páginas", "36 páginas", "43 páginas"],
            correcta: 1,
            pista: "Resta 64 - 30 = 34, y como restaste 1 de más (29 en vez de 30), súmale 1.",
            explicacion: "64 - 29 = 35 páginas por leer."
        },
        {
            area: "Resta ➖",
            dibujo: "🚌 Capacidad: 70  |  💺 Ocupados: 46",
            pregunta: "En un teatro hay 70 asientos y 46 ya están ocupados. ¿Cuántos asientos libres quedan?",
            opciones: ["34 asientos", "24 asientos", "26 asientos", "36 asientos"],
            correcta: 1,
            pista: "De 46 para llegar a 50 faltan 4; de 50 para llegar a 70 faltan 20.",
            explicacion: "70 - 46 = 24 asientos libres."
        },

        // --- MULTIPLICACIÓN (TABLAS DEL 2, 3, 4 Y 5) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🕷️(8 patas)  ❌  3 arañitas",
            pregunta: "Si una araña tiene 8 patas, ¿cuántas patas tienen 3 arañas juntas? (3 × 8)",
            opciones: ["16 patas", "24 patas", "21 patas", "28 patas"],
            correcta: 1,
            pista: "Suma 8 tres veces: 8 + 8 = 16, y 16 + 8 = ...",
            explicacion: "3 × 8 = 24 patas."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🍀(4 hojas)  ❌  6 tréboles",
            pregunta: "Cada trébol de la suerte tiene 4 hojas. ¿Cuántas hojas hay en 6 tréboles? (4 × 6)",
            opciones: ["20 hojas", "24 hojas", "28 hojas", "18 hojas"],
            correcta: 1,
            pista: "El doble de 6 es 12, y el doble de 12 es 4 × 6.",
            explicacion: "4 × 6 = 24 hojas."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🖐️(5 dedos)  ❌  7 manos",
            pregunta: "En un juego levantan 7 manos con 5 dedos cada una. ¿Cuántos dedos hay en total? (5 × 7)",
            opciones: ["30 dedos", "35 dedos", "40 dedos", "25 dedos"],
            correcta: 1,
            pista: "Cuenta de 5 en 5 siete veces: 5, 10, 15, 20, 25, 30, ...",
            explicacion: "5 × 7 = 35 dedos."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📦(9 lápices)  ❌  3 cajas",
            pregunta: "Cada caja trae 9 lápices de colores. Si compras 3 cajas, ¿cuántos lápices tienes? (3 × 9)",
            opciones: ["24 lápices", "27 lápices", "30 lápices", "18 lápices"],
            correcta: 1,
            pista: "Multiplica 3 × 10 = 30 y réstale 3 (porque cada caja tiene 9 en vez de 10).",
            explicacion: "3 × 9 = 27 lápices."
        },

        // --- DIVISIÓN EXACTA, MITAD Y TERCIA ---
        {
            area: "División ➗",
            dibujo: "🍓(18 fresas)  ➡️  🧁 | 🧁 | 🧁",
            pregunta: "Itzel decora 3 pasteles repartiendo 18 fresas por igual. ¿Cuántas fresas van en cada pastel? (18 ÷ 3)",
            opciones: ["5 fresas", "6 fresas", "7 fresas", "9 fresas"],
            correcta: 1,
            pista: "Busca en la tabla del 3: ¿3 por qué número da 18?",
            explicacion: "18 ÷ 3 = 6 fresas en cada pastel (porque 3 × 6 = 18)."
        },
        {
            area: "División ➗",
            dibujo: "💰 S/ 24  ➡️  ➗ 2 (La Mitad)",
            pregunta: "Si ahorraste 24 soles y gastas exactamente la MITAD en un libro, ¿cuánto costó el libro? (24 ÷ 2)",
            opciones: ["10 soles", "12 soles", "14 soles", "8 soles"],
            correcta: 1,
            pista: "Saca la mitad de 20 (que es 10) y la mitad de 4 (que es 2), luego júntalos.",
            explicacion: "La mitad de 24 (24 ÷ 2) = 12 soles."
        },
        {
            area: "División ➗",
            dibujo: "🍬(20 caramelos)  ➡️  👧 | 👦 | 👧 | 👦",
            pregunta: "Reparte 20 caramelos en partes iguales entre 4 niños. ¿Cuántos recibe cada uno? (20 ÷ 4)",
            opciones: ["4 caramelos", "5 caramelos", "6 caramelos", "10 caramelos"],
            correcta: 1,
            pista: "Piensa: 4 × ? = 20.",
            explicacion: "20 ÷ 4 = 5 caramelos para cada niño."
        },
        {
            area: "División ➗",
            dibujo: "🌟(30 estrellas)  ➡️  5 frascos iguales",
            pregunta: "Guardas 30 estrellas mágicas en 5 frascos por igual. ¿Cuántas estrellas entran en cada frasco? (30 ÷ 5)",
            opciones: ["5 estrellas", "6 estrellas", "7 estrellas", "8 estrellas"],
            correcta: 1,
            pista: "Cuenta de 5 en 5 hasta llegar a 30 y mira cuántos saltos diste.",
            explicacion: "30 ÷ 5 = 6 estrellas en cada frasco (5 × 6 = 30)."
        },

        // --- RAZONAMIENTO MATEMÁTICO ---
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️  🍎 + 🍎 + 🍌 = 14  |  🍎 = 5",
            pregunta: "Si cada manzana 🍎 vale 5 puntos y juntas valen 14 (🍎 + 🍎 + 🍌 = 14), ¿cuánto vale el plátano 🍌?",
            opciones: ["3 puntos", "4 puntos", "5 puntos", "9 puntos"],
            correcta: 1,
            pista: "Dos manzanas juntas valen 5 + 5 = 10. ¿Cuánto falta para 14?",
            explicacion: "5 + 5 = 10; 14 - 10 = 4. El plátano vale 4."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 3  ➔  6  ➔  12  ➔  24  ➔  ❓",
            pregunta: "Observa cómo crece cada número: 3, 6, 12, 24... ¿Cuál es el siguiente número?",
            opciones: ["30", "36", "48", "27"],
            correcta: 2,
            pista: "Cada número es el DOBLE del anterior (se multiplica por 2).",
            explicacion: "El doble de 24 (24 + 24) es 48."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🕒 Inicio: 3:00 PM  ⏳ Duración: 1 hora y media",
            pregunta: "La película de Itzel empieza a las 3:00 de la tarde y dura 1 hora y media. ¿A qué hora termina?",
            opciones: ["4:00 PM", "4:30 PM", "5:00 PM", "3:30 PM"],
            correcta: 1,
            pista: "Suma 1 hora a las 3:00 (son las 4:00) y agrégale 30 minutos más.",
            explicacion: "3:00 + 1 hora = 4:00; más media hora = 4:30 PM."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🏃‍♀️ Ana > Itzel > Sofía",
            pregunta: "En una carrera, Ana llegó antes que Itzel, e Itzel llegó antes que Sofía. ¿Quién llegó en PRIMER lugar?",
            opciones: ["Itzel", "Sofía", "Ana", "Empataron"],
            correcta: 2,
            pista: "Si Ana venció a Itzel, e Itzel venció a Sofía, nadie estuvo delante de Ana.",
            explicacion: "Ana llegó antes que todas, así que ocupó el primer lugar."
        }
    ],

    // 10 Lecturas Medianas y Grandes (Comprensión Inferencial y Crítica)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🌳🐦🏡🌿",
            textoLectura: "En el patio de la escuela había un árbol muy viejo donde vivía una familia de pajaritos. Un día, unos niños quisieron cortar sus ramas para jugar con ellas, pero la maestra les explicó que ese árbol limpiaba el aire que respiramos, daba sombra fresca en verano y era el hogar de muchas aves. Desde ese día, los niños decidieron regarlo y cuidarlo cada mañana.",
            pregunta: "¿Por qué decidieron los niños cuidar el árbol en lugar de cortar sus ramas?",
            opciones: ["Porque era muy alto para trepar", "Porque entendieron que limpia el aire, da sombra y es hogar de aves", "Porque tenía frutos venenosos", "Porque el director los castigó"],
            correcta: 1,
            pista: "Lee lo que la maestra les explicó sobre los beneficios del árbol.",
            explicacion: "Comprendieron que el árbol limpia el aire, da sombra y protege a las aves."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐙🌊🎨💨",
            textoLectura: "El pulpo es uno de los animales más inteligentes del océano. Tiene tres corazones, ocho tentáculos muy fuertes y no posee ningún hueso en su cuerpo, lo que le permite esconderse dentro de grietas pequeñísimas. Cuando un tiburón intenta atraparlo, el pulpo lanza una nube de tinta oscura para confundirlo y escapar velozmente.",
            pregunta: "¿Cómo logra escapar el pulpo cuando un tiburón intenta atraparlo?",
            opciones: ["Lo muerde con sus dientes", "Lanza una nube de tinta oscura para confundirlo", "Se esconde debajo de la arena", "Nada fuera del agua"],
            correcta: 1,
            pista: "Revisa la última oración del texto sobre su mecanismo de defensa.",
            explicacion: "El pulpo expulsa tinta oscura para nublar la vista del tiburón y huir."
        },
        {
            area: "Lectura 📖",
            dibujo: "🚂🏔️🌉🇵🇪",
            textoLectura: "El Ferrocarril Central Andino del Perú es uno de los trenes más altos del mundo. Parte desde la costa en Lima y sube zigzagueando por las montañas de los Andes hasta llegar a La Oroya y Huancayo. Durante el viaje, los pasajeros atraviesan decenas de túneles excavados en la roca y puentes gigantes sobre ríos profundos.",
            pregunta: "¿Qué atraviesa el tren durante su recorrido por los Andes?",
            opciones: ["Playas y desiertos", "Túneles en la roca y puentes sobre ríos profundos", "Selvas llenas de monos", "Lagos congelados"],
            correcta: 1,
            pista: "Fíjate en la última oración que describe el paisaje del viaje.",
            explicacion: "Atraviesa decenas de túneles y puentes gigantes sobre ríos profundos."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐜🍞☀️❄️",
            textoLectura: "Durante todo el verano, una pequeña hormiga cargaba granos de trigo hacia su hormiguero mientras una cigarra se pasaba el día cantando bajo el sol sin guardar nada. Cuando llegó el invierno helado y la nieve cubrió el campo, la cigarra tuvo mucha hambre y pidió ayuda. La hormiga compartió su comida con ella, pero le enseñó que siempre hay que prepararse para el futuro.",
            pregunta: "¿Cuál es la enseñanza o moraleja principal de esta fábula?",
            opciones: ["Que nunca debemos cantar", "Que es importante trabajar y ahorrar para estar preparados en tiempos difíciles", "Que el invierno es muy corto", "Que las hormigas no comen trigo"],
            correcta: 1,
            pista: "Piensa qué lección le dio la hormiga a la cigarra al final.",
            explicacion: "Enseña el valor del esfuerzo, la previsión y la solidaridad."
        },
        {
            area: "Lectura 📖",
            dibujo: "💧☁️🌧️🌊",
            textoLectura: "El agua de nuestro planeta siempre está viajando en un círculo mágico llamado el ciclo del agua. Cuando el Sol calienta los ríos y mares, el agua sube al cielo convertida en vapor invisible y forma las nubes. Luego, cuando las nubes se enfrían mucho, el agua vuelve a caer en forma de lluvia o nieve para llenar nuevamente los ríos.",
            pregunta: "¿Qué hace que el agua de los ríos y mares suba al cielo para formar nubes?",
            opciones: ["El viento fuerte de la noche", "El calor del Sol que la convierte en vapor", "Los peces cuando saltan", "La luz de la Luna"],
            correcta: 1,
            pista: "Lee la segunda oración donde se menciona qué calienta los ríos y mares.",
            explicacion: "El calor del Sol evapora el agua, haciéndola subir para formar nubes."
        },
        {
            area: "Lectura 📖",
            dibujo: "👧🔍📚💡",
            textoLectura: "Valeria quería armar un robot de cartón para la feria de ciencias, pero cada vez que pegaba los brazos se caían por el peso. En lugar de enojarse, observó con calma y descubrió que el pegamento líquido tardaba mucho en secar. Entonces usó cinta adhesiva reforzada por dentro y logró que su robot quedara firme y ganara el primer premio.",
            pregunta: "¿Cuál fue la clave para que Valeria lograra armar su robot?",
            opciones: ["Pidió que alguien más se lo hiciera", "Observó el problema con calma y buscó una mejor solución", "Usó un robot comprado", "Pegó los brazos con agua"],
            correcta: 1,
            pista: "Fíjate en la actitud de Valeria cuando los brazos se caían.",
            explicacion: "Valeria no se rindió: analizó por qué fallaba y cambió el material."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦉🌙🐭🌲",
            textoLectura: "El búho es un ave nocturna que duerme durante el día y sale a cazar cuando oscurece. Sus ojos son tan grandes que captan hasta el más mínimo rayo de luz en la noche, y puede girar su cabeza casi por completo sin mover el cuerpo. Además, sus plumas especiales son tan suaves que vuela en total silencio sin que los ratones lo escuchen.",
            pregunta: "¿Por qué los ratones no escuchan al búho cuando vuela hacia ellos?",
            opciones: ["Porque vuela muy lejos", "Porque sus plumas especiales son muy suaves y silenciosas", "Porque los ratones están sordos", "Porque canta para distraerlos"],
            correcta: 1,
            pista: "Lee la última oración sobre la característica de sus plumas.",
            explicacion: "Sus plumas suaves amortiguan el sonido del aire, permitiéndole volar en silencio."
        },
        {
            area: "Lectura 📖",
            dibujo: "🥔🏔️🌱🍲",
            textoLectura: "La papa es uno de los mayores tesoros que el Perú regaló al mundo entero. Hace miles de años, los antiguos agricultores peruanos domesticaron esta planta en las alturas de los Andes. Hoy existen más de tres mil variedades de papas nativas de distintos colores, formas y sabores, llenas de vitaminas y energía para crecer sanos.",
            pregunta: "¿Dónde fue domesticada por primera vez la papa hace miles de años?",
            opciones: ["En las playas del norte", "En las alturas de los Andes del Perú", "En Europa", "En la selva amazónica"],
            correcta: 1,
            pista: "Revisa la segunda oración del párrafo.",
            explicacion: "Los antiguos agricultores peruanos la domesticaron en los Andes."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐢🌊🛍️♻️",
            textoLectura: "Las tortugas marinas viajan miles de kilómetros por los océanos y les encanta comer medusas transparentes. Lamentablemente, cuando las personas arrojan bolsas de plástico al mar, las tortugas las confunden con medusas y se las tragan, lo que les hace mucho daño. Por eso es vital reciclar y nunca botar basura en las playas ni en los ríos.",
            pregunta: "¿Por qué las tortugas marinas tragan bolsas de plástico por error?",
            opciones: ["Porque tienen sabor dulce", "Porque las confunden con medusas transparentes", "Porque las usan para nadar", "Porque no tienen ojos"],
            correcta: 1,
            pista: "Fíjate con qué alimento marino confunden las bolsas.",
            explicacion: "Al flotar en el agua, las bolsas parecen medusas transparentes."
        },
        {
            area: "Lectura 📖",
            dibujo: "😴🧠⚡🌅",
            textoLectura: "Dormir entre 9 y 10 horas cada noche es fundamental para los niños en edad escolar. Mientras duermes profundamente, tu cerebro organiza todo lo que aprendiste durante el día, recarga tu energía física y libera hormonas que te ayudan a crecer más alta y fuerte. Por eso, acostarse temprano te permite despertar con buen ánimo y concentrarte mejor.",
            pregunta: "Según el texto, ¿qué hace tu cerebro mientras duermes profundamente?",
            opciones: ["Se apaga por completo", "Organiza todo lo que aprendiste durante el día", "Olvida las tareas", "Gasta toda tu energía"],
            correcta: 1,
            pista: "Lee la segunda oración sobre lo que ocurre mientras duermes.",
            explicacion: "Durante el sueño, el cerebro ordena y guarda los aprendizajes del día."
        }
    ]
};
