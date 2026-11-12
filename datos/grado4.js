// datos/grado4.js - Aula 4: 4.º de Primaria (Fracciones, Millares, Multiplicación 2 cifras y Lecturas)
const nivel4_Grado4 = {
    id: 4,
    nombre: "4.º de Primaria - Fracciones y Retos",

    matematicas: [
        // --- SUMA (MILLARES Y FRACCIONES HOMOGÉNEAS) ---
        {
            area: "Suma ➕",
            dibujo: "🏟️ Entrada A: 1,450  ➕  🏟️ Entrada B: 1,280",
            pregunta: "Al estadio ingresaron 1,450 personas por la puerta Norte y 1,280 por la puerta Sur. ¿Cuántas ingresaron en total?",
            opciones: ["2,630 personas", "2,730 personas", "2,830 personas", "3,730 personas"],
            correcta: 1,
            pista: "Suma 1,450 + 1,000 = 2,450; luego súmale 280.",
            explicacion: "1,450 + 1,280 = 2,730 personas."
        },
        {
            area: "Suma ➕",
            dibujo: "🍕 2/8 de pizza  ➕  🍕 3/8 de pizza",
            pregunta: "Itzel comió 2/8 de una pizza y su hermano comió 3/8 de la misma pizza. ¿Qué fracción comieron entre los dos?",
            opciones: ["5/16", "5/8", "6/8", "1/8"],
            correcta: 1,
            pista: "Cuando las fracciones tienen el mismo denominador (8), solo sumas los números de arriba (numeradores): 2 + 3.",
            explicacion: "2/8 + 3/8 = 5/8 de pizza (el denominador 8 se mantiene igual)."
        },
        {
            area: "Suma ➕",
            dibujo: "💻 Laptop: S/ 2,390  ➕  🖨️ Impresora: S/ 650",
            pregunta: "Una laptop cuesta 2,390 soles y una impresora cuesta 650 soles. ¿Cuánto cuestan ambos equipos juntos?",
            opciones: ["2,940 soles", "3,040 soles", "3,140 soles", "2,840 soles"],
            correcta: 1,
            pista: "Suma 2,390 + 600 = 2,990, y luego agrégale 50.",
            explicacion: "2,390 + 650 = 3,040 soles."
        },
        {
            area: "Suma ➕",
            dibujo: "🍫 3/10  ➕  🍫 4/10  ➕  🍫 2/10",
            pregunta: "En una barra de chocolate dividida en 10 partes, repartes 3/10, luego 4/10 y finalmente 2/10. ¿Qué fracción repartiste?",
            opciones: ["9/30", "9/10", "7/10", "10/10"],
            correcta: 1,
            pista: "Suma los numeradores: 3 + 4 + 2, y deja el 10 abajo.",
            explicacion: "3/10 + 4/10 + 2/10 = 9/10."
        },

        // --- RESTA (MILLARES Y FRACCIONES HOMOGÉNEAS) ---
        {
            area: "Resta ➖",
            dibujo: "🏔️ Meta: 3,000 m  |  🥾 Escalado: 1,650 m",
            pregunta: "Una montaña mide 3,000 metros de altura. Si los exploradores subieron 1,650 metros, ¿cuántos metros faltan para la cima?",
            opciones: ["1,450 metros", "1,350 metros", "2,350 metros", "1,250 metros"],
            correcta: 1,
            pista: "De 1,650 para llegar a 2,000 faltan 350; de 2,000 a 3,000 faltan 1,000.",
            explicacion: "3,000 - 1,650 = 1,350 metros."
        },
        {
            area: "Resta ➖",
            dibujo: "🎂 Torta entera: 6/6  ➖  🍰 Comido: 2/6",
            pregunta: "Una torta está partida en 6 pedazos iguales (6/6). Si se comen 2/6, ¿qué fracción de la torta queda?",
            opciones: ["4/6", "4/0", "3/6", "2/6"],
            correcta: 0,
            pista: "Resta los números de arriba: 6 - 2 = 4, y mantén el 6 abajo.",
            explicacion: "6/6 - 2/6 = 4/6 de torta quedan."
        },
        {
            area: "Resta ➖",
            dibujo: "💰 Ahorro: S/ 4,200  ➖  🚲 Bici: S/ 1,480",
            pregunta: "Tenías 4,200 soles ahorrados y compraste una bicicleta de 1,480 soles. ¿Cuánto dinero te queda?",
            opciones: ["2,820 soles", "2,720 soles", "3,720 soles", "2,620 soles"],
            correcta: 1,
            pista: "Resta 4,200 - 1,000 = 3,200; luego 3,200 - 480 = 2,720.",
            explicacion: "4,200 - 1,480 = 2,720 soles."
        },
        {
            area: "Resta ➖",
            dibujo: "🧃 Jarra: 7/8 L  ➖  🥤 Vaso: 3/8 L",
            pregunta: "Una jarra tiene 7/8 de litro de jugo de naranja. Si sirves 3/8 de litro en un vaso, ¿cuánto jugo queda en la jarra?",
            opciones: ["4/8 de litro", "4/16 de litro", "5/8 de litro", "3/8 de litro"],
            correcta: 0,
            pista: "Resta 7 - 3 en el numerador y conserva el denominador 8.",
            explicacion: "7/8 - 3/8 = 4/8 de litro (que equivale a medio litro)."
        },

        // --- MULTIPLICACIÓN (2 CIFRAS POR 1 CIFRA Y DOBLE/TRIPLE) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "📦(24 botellas)  ❌  6 paquetes",
            pregunta: "Cada paquete trae 24 botellas de agua. Si compras 6 paquetes, ¿cuántas botellas tienes? (24 × 6)",
            opciones: ["124 botellas", "144 botellas", "134 botellas", "154 botellas"],
            correcta: 1,
            pista: "Multiplica por partes: 20 × 6 = 120, y 4 × 6 = 24. Luego suma 120 + 24.",
            explicacion: "24 × 6 = 144 botellas."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🚌(35 asientos)  ❌  4 buses",
            pregunta: "Un colegio contrata 4 buses de 35 asientos cada uno para un paseo. ¿Cuántos alumnos pueden viajar sentados? (35 × 4)",
            opciones: ["120 alumnos", "140 alumnos", "130 alumnos", "150 alumnos"],
            correcta: 1,
            pista: "El doble de 35 es 70 (en 2 buses). En 4 buses será el doble de 70.",
            explicacion: "35 × 4 = 140 alumnos."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🌟 125 puntos  ❌  3 (El Triple)",
            pregunta: "En la ronda final de un concurso tu puntaje se TRIPLICA. Si tenías 125 puntos, ¿cuántos tienes ahora? (125 × 3)",
            opciones: ["355 puntos", "375 puntos", "365 puntos", "275 puntos"],
            correcta: 1,
            pista: "Triplicar es multiplicar por 3: 100 × 3 = 300, y 25 × 3 = 75.",
            explicacion: "125 × 3 = 375 puntos."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🗓️(12 meses)  ❌  8 años",
            pregunta: "Un año tiene 12 meses. ¿Cuántos meses ha vivido un niño que cumple exactamente 8 años? (12 × 8)",
            opciones: ["84 meses", "96 meses", "88 meses", "108 meses"],
            correcta: 1,
            pista: "10 × 8 = 80, y 2 × 8 = 16. Suma 80 + 16.",
            explicacion: "12 × 8 = 96 meses."
        },

        // --- DIVISIÓN Y FRACCIÓN DE UN NÚMERO ---
        {
            area: "División ➗",
            dibujo: "🍬(84 caramelos)  ➡️  4 bolsas iguales",
            pregunta: "Se reparten 84 caramelos en 4 bolsas por igual. ¿Cuántos caramelos van en cada bolsa? (84 ÷ 4)",
            opciones: ["20 caramelos", "21 caramelos", "22 caramelos", "24 caramelos"],
            correcta: 1,
            pista: "Divide primero las decenas (80 ÷ 4 = 20) y luego las unidades (4 ÷ 4 = 1).",
            explicacion: "84 ÷ 4 = 21 caramelos en cada bolsa."
        },
        {
            area: "División ➗",
            dibujo: "💰 S/ 125  ➡️  5 amigos por igual",
            pregunta: "Cinco amigos ganaron un premio de 125 soles y lo reparten en partes iguales. ¿Cuánto recibe cada uno? (125 ÷ 5)",
            opciones: ["20 soles", "25 soles", "35 soles", "15 soles"],
            correcta: 1,
            pista: "100 ÷ 5 = 20, y 25 ÷ 5 = 5. Suma ambos resultados.",
            explicacion: "125 ÷ 5 = 25 soles para cada amigo."
        },
        {
            area: "División ➗",
            dibujo: "🎨 1/4 de 32 plumones",
            pregunta: "Itzel tiene 32 plumones y presta 1/4 (la cuarta parte) a su compañera. ¿Cuántos plumones prestó?",
            opciones: ["6 plumones", "8 plumones", "16 plumones", "4 plumones"],
            correcta: 1,
            pista: "Calcular 1/4 de un número significa dividirlo entre 4: 32 ÷ 4.",
            explicacion: "1/4 de 32 = 32 ÷ 4 = 8 plumones."
        },
        {
            area: "División ➗",
            dibujo: "📚(96 libros)  ➡️  6 cajas iguales",
            pregunta: "Hay 96 libros para guardar en 6 cajas con igual cantidad. ¿Cuántos libros entran en cada caja? (96 ÷ 6)",
            opciones: ["14 libros", "16 libros", "18 libros", "12 libros"],
            correcta: 1,
            pista: "60 ÷ 6 = 10, y los 36 restantes ÷ 6 = 6. Junta 10 + 6.",
            explicacion: "96 ÷ 6 = 16 libros por caja."
        },

        // --- RAZONAMIENTO MATEMÁTICO Y GEOMETRÍA ---
        {
            area: "Razonamiento 🧠",
            dibujo: "▭ Rectángulo: Largo = 8 m  |  Ancho = 5 m",
            pregunta: "¿Cuál es el ÁREA de una sala rectangular que mide 8 metros de largo por 5 metros de ancho?",
            opciones: ["13 m²", "26 m²", "40 m²", "35 m²"],
            correcta: 2,
            pista: "El área de un rectángulo se calcula multiplicando: Largo × Ancho.",
            explicacion: "Área = 8 m × 5 m = 40 m²."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️  2x + 4 = 18  (¿Cuánto vale x?)",
            pregunta: "Pienso en un número, lo multiplico por 2 y le sumo 4; obtengo 18. ¿Qué número pensé?",
            opciones: ["6", "7", "8", "9"],
            correcta: 1,
            pista: "Hazlo hacia atrás: a 18 réstale 4 (da 14) y luego divídelo entre 2.",
            explicacion: "18 - 4 = 14; 14 ÷ 2 = 7. Comprobación: (7 × 2) + 4 = 18."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 2  ➔  5  ➔  11  ➔  23  ➔  ❓",
            pregunta: "Descubre la regla secreta y encuentra el número que sigue: 2, 5, 11, 23, ...",
            opciones: ["35", "46", "47", "34"],
            correcta: 2,
            pista: "Cada número se obtiene multiplicando el anterior por 2 y sumándole 1 (2×2+1=5; 5×2+1=11).",
            explicacion: "23 × 2 + 1 = 46 + 1 = 47."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⏱️ 2 horas y 45 minutos = ❓ minutos",
            pregunta: "¿Cuántos minutos hay en total en 2 horas y 45 minutos?",
            opciones: ["125 minutos", "145 minutos", "165 minutos", "245 minutos"],
            correcta: 2,
            pista: "1 hora tiene 60 minutos, así que 2 horas tienen 120 minutos. Súmale los 45 minutos.",
            explicacion: "120 + 45 = 165 minutos."
        }
    ],

    // 10 Lecturas Largas (4.º de Primaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🔭🪐🌙✨",
            textoLectura: "Hace más de cuatrocientos años, el científico italiano Galileo Galilei construyó un telescopio mucho más potente que los de su época y lo apuntó hacia el cielo nocturno. Gracias a su invento descubrió que la Luna no era una esfera lisa, sino que tenía montañas y cráteres, y observó cuatro lunas girando alrededor del gigante planeta Júpiter. Sus observaciones cambiaron para siempre nuestra comprensión del universo.",
            pregunta: "¿Qué descubrió Galileo al observar Júpiter con su telescopio?",
            opciones: ["Que Júpiter estaba hecho de agua", "Que tenía cuatro lunas girando a su alrededor", "Que era más pequeño que la Luna", "Que estaba cubierto de bosques"],
            correcta: 1,
            pista: "Lee la segunda oración donde menciona qué observó alrededor de Júpiter.",
            explicacion: "Galileo descubrió cuatro satélites naturales (lunas) orbitando alrededor de Júpiter."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦙🧶🏔️🇵🇪",
            textoLectura: "La vicuña es un camélido silvestre que vive en las zonas más altas y frías de los Andes peruanos, a más de cuatro mil metros sobre el nivel del mar. Para soportar las heladas temperaturas de la puna, posee una fibra natural considerada la más fina y abrigadora del mundo. Hoy en día, las comunidades andinas realizan el 'chaccu', una ceremonia ancestral donde esquilan su lana con cuidado sin hacerles daño y luego las liberan.",
            pregunta: "¿Qué es el 'chaccu' según el texto?",
            opciones: ["Una comida típica de la selva", "Una ceremonia ancestral donde esquilan la lana de la vicuña sin dañarla y la liberan", "Una danza con caballos", "Un tipo de montaña nevada"],
            correcta: 1,
            pista: "Revisa la última oración del párrafo.",
            explicacion: "El chaccu es la técnica tradicional y respetuosa de esquila y liberación de vicuñas."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧠⚡🔌💡",
            textoLectura: "El cerebro humano contiene alrededor de ochenta y seis mil millones de células especiales llamadas neuronas. Cada vez que aprendes algo nuevo, resuelves un problema matemático o practicas un instrumento musical, tus neuronas envían señales eléctricas y crean nuevas conexiones entre sí. Mientras más practicas una habilidad, más fuertes y rápidas se vuelven esas autopistas de información.",
            pregunta: "¿Qué sucede en tu cerebro cada vez que aprendes o practicas algo nuevo?",
            opciones: ["Las neuronas se duermen para ahorrar energía", "Las neuronas envían señales y crean nuevas conexiones más fuertes", "El cerebro se vuelve más pequeño", "Se borran los recuerdos antiguos"],
            correcta: 1,
            pista: "Lee la segunda y tercera oración del texto.",
            explicacion: "Aprender y practicar fortalece las conexiones entre neuronas (plasticidad cerebral)."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌊🐢🧭🏖️",
            textoLectura: "Después de pasar décadas nadando por los océanos del mundo, las tortugas marinas hembras regresan exactamente a la misma playa donde nacieron para poner sus huevos. Los científicos han descubierto que estas viajeras poseen una especie de brújula interna capaz de detectar el campo magnético de la Tierra, lo que les permite orientarse con precisión milimétrica en medio del inmenso mar.",
            pregunta: "¿Cómo logran las tortugas marinas encontrar la misma playa donde nacieron después de tantos años?",
            opciones: ["Siguiendo a los barcos pesqueros", "Detectando el campo magnético de la Tierra como una brújula interna", "Mirando los faros de las ciudades", "Preguntando a los delfines"],
            correcta: 1,
            pista: "Lee la segunda oración sobre su sentido de orientación.",
            explicacion: "Utilizan el campo magnético terrestre para orientarse a lo largo de miles de kilómetros."
        },
        {
            area: "Lectura 📖",
            dibujo: "📚🏛️🔥📜",
            textoLectura: "En la antigüedad, la ciudad egipcia de Alejandría albergó la biblioteca más famosa del mundo antiguo. Sabios de todos los rincones viajaban hasta allí para estudiar cientos de miles de rollos de papiro sobre astronomía, medicina, matemáticas y literatura. Cada barco que llegaba al puerto debía prestar sus libros para que los escribas los copiaran a mano y así conservar todo el saber de la humanidad.",
            pregunta: "¿Cómo conseguía la Biblioteca de Alejandría aumentar su colección de libros?",
            opciones: ["Comprándolos por internet", "Copiando a mano los libros que traían los barcos al puerto", "Imprimiéndolos con máquinas modernas", "Pidiendo donaciones a los niños"],
            correcta: 1,
            pista: "Fíjate en la última oración sobre lo que hacían los escribas con los libros de los barcos.",
            explicacion: "Los escribas copiaban manualmente cada libro que llegaba en los barcos al puerto."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌱🌵💧☀️",
            textoLectura: "A diferencia de las plantas del bosque que necesitan lluvia constante, los cactus han desarrollado adaptaciones asombrosas para sobrevivir en los desiertos más secos. Sus tallos gruesos y esponjosos almacenan grandes cantidades de agua cuando llueve, mientras que sus hojas se transformaron en espinas afiladas para evitar que el agua se evapore con el calor y para protegerse de los animales sedientos.",
            pregunta: "¿Por qué los cactus tienen espinas en lugar de hojas grandes?",
            opciones: ["Para atrapar pájaros", "Para evitar perder agua por evaporación y protegerse de animales", "Para hacer sombra en la arena", "Para absorber más sol"],
            correcta: 1,
            pista: "Lee la última parte de la segunda oración.",
            explicacion: "Las espinas reducen la pérdida de agua y sirven de defensa en el desierto."
        },
        {
            area: "Lectura 📖",
            dibujo: "🎼🎻👧💪",
            textoLectura: "Cuando Camila empezó a estudiar violín, los sonidos que producía eran chillones y sus dedos se cansaban rápido. Algunos compañeros se burlaron, pero ella decidió practicar veinte minutos cada tarde sin faltar ni un día. Seis meses después, durante el concierto escolar, Camila tocó una melodía tan hermosa que todo el auditorio se puso de pie para aplaudir su perseverancia.",
            pregunta: "¿Cuál es el tema principal de esta historia?",
            opciones: ["Lo caro que cuesta un violín", "Cómo la constancia y el esfuerzo diario permiten superar las dificultades", "Que no debemos ir a conciertos", "Que aprender música es imposible"],
            correcta: 1,
            pista: "Piensa qué permitió que Camila pasara de tocar sonidos chillones a ser aplaudida.",
            explicacion: "La disciplina y la práctica constante transforman las dificultades en logros."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐝🍯👑🏡",
            textoLectura: "Dentro de una colmena existe una organización perfecta donde cada abeja cumple una tarea vital. La abeja reina se encarga de poner miles de huevos; las abejas obreras construyen los panales de cera, limpian la colmena, cuidan a las crías y recolectan néctar de las flores para fabricar miel; mientras que los zánganos ayudan a fecundar a la reina. Ninguna podría sobrevivir mucho tiempo sola.",
            pregunta: "¿Qué podemos concluir sobre la vida de las abejas en una colmena?",
            opciones: ["Que cada abeja trabaja por su cuenta sin ayudar", "Que el trabajo en equipo y la cooperación son esenciales para que todas sobrevivan", "Que solo la reina fabrica la miel", "Que las obreras duermen todo el día"],
            correcta: 1,
            pista: "Lee la última oración del texto.",
            explicacion: "La supervivencia de la colmena depende de la cooperación organizada de todos sus miembros."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌍🛡️☀️✨",
            textoLectura: "En lo alto de la atmósfera terrestre existe una capa invisible llamada capa de ozono. Funciona como un escudo protector gigante que filtra la mayor parte de los rayos ultravioleta peligrosos que envía el Sol. Sin este escudo natural, la radiación solar dañaría la piel de los seres vivos y afectaría gravemente los cultivos y los océanos de nuestro planeta.",
            pregunta: "¿Qué función cumple la capa de ozono para la Tierra?",
            opciones: ["Produce lluvia ácida", "Filtra los rayos ultravioleta peligrosos del Sol como un escudo protector", "Enfría el centro de la Tierra", "Genera viento en las montañas"],
            correcta: 1,
            pista: "Lee la segunda oración donde compara la capa de ozono con un escudo.",
            explicacion: "Protege la vida en la Tierra absorbiendo la radiación ultravioleta nociva del Sol."
        },
        {
            area: "Lectura 📖",
            dibujo: "🚲⚙️🦵⚡",
            textoLectura: "La bicicleta es uno de los medios de transporte más eficientes inventados por el ser humano. Al pedalear, la fuerza de tus piernas mueve una cadena conectada a la rueda trasera, transformando tu energía física en movimiento veloz. Además de ser económica y divertida, usar bicicleta fortalece el corazón, ejercita los músculos y no emite gases contaminantes a la atmósfera.",
            pregunta: "Según el texto, ¿por qué se considera que la bicicleta es un transporte ecológico y saludable?",
            opciones: ["Porque usa gasolina barata", "Porque ejercita el cuerpo y no emite gases contaminantes", "Porque tiene cuatro ruedas", "Porque viaja más rápido que un avión"],
            correcta: 1,
            pista: "Revisa la última oración del párrafo.",
            explicacion: "Mejora la salud cardiovascular y muscular sin contaminar el aire."
        }
    ]
};
