// datos/grado3.js - Aula 3: 3.º de Primaria (Dominio y Tablas)
const nivel3_Grado3 = {
    id: 3,
    nombre: "3.º de Primaria - Dominio y Tablas",

    matematicas: [
        // --- SUMA DE CENTENAS ---
        {
            area: "Suma ➕",
            dibujo: "📚(145 páginas)  ➕  📖(68 páginas)",
            pregunta: "Itzel leyó 145 páginas la semana pasada y 68 páginas esta semana. ¿Cuántas páginas leyó en total?",
            opciones: ["203 páginas", "213 páginas", "223 páginas", "193 páginas"],
            correcta: 1,
            pista: "Suma unidades (5+8=13, llevas 1), luego decenas (4+6+1=11, llevas 1) y centenas (1+1=2).",
            explicacion: "145 + 68 = 213 páginas."
        },
        {
            area: "Suma ➕",
            dibujo: "💵 S/ 275  ➕  💵 S/ 145",
            pregunta: "En una alcancía hay 275 soles y se agregan 145 soles más. ¿Cuánto dinero hay en total?",
            opciones: ["410 soles", "420 soles", "320 soles", "430 soles"],
            correcta: 1,
            pista: "Suma primero 275 + 25 = 300, y luego suma los 120 restantes.",
            explicacion: "275 + 145 = 420 soles."
        },
        {
            area: "Suma ➕",
            dibujo: "🎟️ Mañana: 380  ➕  🎟️ Tarde: 240",
            pregunta: "Al museo entraron 380 visitantes por la mañana y 240 por la tarde. ¿Cuántos entraron en todo el día?",
            opciones: ["520 visitantes", "620 visitantes", "640 visitantes", "580 visitantes"],
            correcta: 1,
            pista: "Suma 300 + 200 = 500, y luego 80 + 40 = 120. Junta ambos resultados.",
            explicacion: "380 + 240 = 620 visitantes."
        },
        {
            area: "Suma ➕",
            dibujo: "🌟 499  ➕  ✨ 156",
            pregunta: "¿Cuánto es 499 + 156?",
            opciones: ["655", "645", "555", "665"],
            correcta: 0,
            pista: "Truco mental: 499 es 500 - 1. Suma 500 + 156 = 656 y réstale 1.",
            explicacion: "499 + 156 = 655."
        },

        // --- RESTA CON PRESTAMOS Y CENTENAS ---
        {
            area: "Resta ➖",
            dibujo: "💵 S/ 200  ➖  👟 S/ 75",
            pregunta: "Pagas con un billete de 200 soles unas zapatillas que cuestan 75 soles. ¿Cuánto vuelto te dan?",
            opciones: ["135 soles", "125 soles", "115 soles", "145 soles"],
            correcta: 1,
            pista: "De 75 para llegar a 100 faltan 25; de 100 para llegar a 200 faltan 100.",
            explicacion: "200 - 75 = 125 soles de vuelto."
        },
        {
            area: "Resta ➖",
            dibujo: "🌳 Meta: 350 árboles  |  🌱 Plantados: 185",
            pregunta: "La meta es plantar 350 árboles en el parque y ya plantaron 185. ¿Cuántos árboles faltan?",
            opciones: ["175 árboles", "165 árboles", "265 árboles", "155 árboles"],
            correcta: 1,
            pista: "De 185 a 200 hay 15; de 200 a 350 hay 150. Suma 150 + 15.",
            explicacion: "350 - 185 = 165 árboles faltan."
        },
        {
            area: "Resta ➖",
            dibujo: "🔢 500  ➖  234",
            pregunta: "¿Cuánto es 500 - 234?",
            opciones: ["276", "266", "366", "256"],
            correcta: 1,
            pista: "Resta a 499 - 234 = 265 y luego súmale 1 (es el truco mágico para restar a números con ceros).",
            explicacion: "500 - 234 = 266."
        },
        {
            area: "Resta ➖",
            dibujo: "🚂 Distancia: 420 km  |  🛤️ Recorrido: 265 km",
            pregunta: "Un tren debe recorrer 420 km. Si ya avanzó 265 km, ¿cuántos kilómetros le faltan para llegar?",
            opciones: ["165 km", "155 km", "255 km", "145 km"],
            correcta: 1,
            pista: "De 265 a 300 faltan 35; de 300 a 420 faltan 120. Suma 120 + 35.",
            explicacion: "420 - 265 = 155 km."
        },

        // --- MULTIPLICACIÓN (TABLAS DEL 6, 7, 8 Y 9) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🗓️(7 días)  ❌  6 semanas",
            pregunta: "Una semana tiene 7 días. ¿Cuántos días hay en 6 semanas completas? (6 × 7)",
            opciones: ["36 días", "42 días", "49 días", "48 días"],
            correcta: 1,
            pista: "Multiplica primero 5 × 7 = 35 y súmale una semana más (+7).",
            explicacion: "6 × 7 = 42 días."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🐙(8 tentáculos)  ❌  7 pulpos",
            pregunta: "Cada pulpo tiene 8 tentáculos. ¿Cuántos tentáculos tienen 7 pulpos juntos? (7 × 8)",
            opciones: ["54", "56", "64", "48"],
            correcta: 1,
            pista: "Recuerda la escalera: 5, 6, 7, 8 -> 56 = 7 × 8.",
            explicacion: "7 × 8 = 56 tentáculos."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📦(9 chocolates)  ❌  8 cajas",
            pregunta: "Si cada caja contiene 9 chocolates y compras 8 cajas, ¿cuántos chocolates tienes? (8 × 9)",
            opciones: ["63", "72", "81", "64"],
            correcta: 1,
            pista: "Truco del 9: multiplica 8 × 10 = 80 y réstale 8.",
            explicacion: "8 × 9 = 72 chocolates."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🚌(25 pasajeros)  ❌  4 buses",
            pregunta: "En cada bus viajan 25 turistas. ¿Cuántos turistas viajan en 4 buses iguales? (4 × 25)",
            opciones: ["80 turistas", "100 turistas", "120 turistas", "90 turistas"],
            correcta: 1,
            pista: "25 + 25 = 50 (en 2 buses). En 4 buses será el doble de 50.",
            explicacion: "4 × 25 = 100 turistas."
        },

        // --- DIVISIÓN EXACTA CON TABLAS ---
        {
            area: "División ➗",
            dibujo: "🍓(42 fresas)  ➡️  6 tortas iguales",
            pregunta: "Repartes 42 fresas en 6 tortas por igual. ¿Cuántas fresas lleva cada torta? (42 ÷ 6)",
            opciones: ["6 fresas", "7 fresas", "8 fresas", "9 fresas"],
            correcta: 1,
            pista: "Busca qué número multiplicado por 6 da 42: 6 × ? = 42.",
            explicacion: "42 ÷ 6 = 7 fresas por torta (porque 6 × 7 = 42)."
        },
        {
            area: "División ➗",
            dibujo: "💰 S/ 63  ➡️  7 amigos por igual",
            pregunta: "Se reparten 63 soles en partes iguales entre 7 primos. ¿Cuánto recibe cada uno? (63 ÷ 7)",
            opciones: ["7 soles", "8 soles", "9 soles", "6 soles"],
            correcta: 2,
            pista: "Tabla del 7: 7 × 9 = 63.",
            explicacion: "63 ÷ 7 = 9 soles para cada primo."
        },
        {
            area: "División ➗",
            dibujo: "📚(48 libros)  ➡️  8 repisas iguales",
            pregunta: "Ordenas 48 libros en 8 repisas poniendo la misma cantidad en cada una. ¿Cuántos van por repisa? (48 ÷ 8)",
            opciones: ["5 libros", "6 libros", "7 libros", "8 libros"],
            correcta: 1,
            pista: "Piensa: 8 × ? = 48.",
            explicacion: "48 ÷ 8 = 6 libros en cada repisa."
        },
        {
            area: "División ➗",
            dibujo: "🍎(36 manzanas)  ➡️  ➗ 3 (La Tercia)",
            pregunta: "De una canasta con 36 manzanas, regalas la TERCIA (la tercera parte). ¿Cuántas regalaste? (36 ÷ 3)",
            opciones: ["10 manzanas", "12 manzanas", "18 manzanas", "9 manzanas"],
            correcta: 1,
            pista: "La tercia significa dividir entre 3: divide 30 ÷ 3 = 10 y 6 ÷ 3 = 2.",
            explicacion: "La tercia de 36 (36 ÷ 3) = 12 manzanas."
        },

        // --- RAZONAMIENTO MATEMÁTICO ---
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 5  ➔  10  ➔  20  ➔  40  ➔  ❓",
            pregunta: "Encuentra el patrón y el número que sigue: 5, 10, 20, 40, ...",
            opciones: ["50", "60", "80", "45"],
            correcta: 2,
            pista: "Cada número se duplica (se multiplica por 2) respecto al anterior.",
            explicacion: "40 × 2 = 80."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️  3 🐶 = 24 kg  |  1 🐶 = ❓",
            pregunta: "Tres perritos del mismo peso pesan juntos 24 kilos. ¿Cuánto pesarán DOS de esos perritos?",
            opciones: ["8 kg", "16 kg", "12 kg", "18 kg"],
            correcta: 1,
            pista: "Primero halla cuánto pesa 1 perrito (24 ÷ 3 = 8 kg) y luego multiplica por 2.",
            explicacion: "Cada perrito pesa 8 kg; entonces 2 perritos pesan 8 + 8 = 16 kg."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⬛ Perímetro de un Cuadrado (Lado = 7 cm)",
            pregunta: "Un jardín cuadrado mide 7 metros en cada lado. ¿Cuántos metros mide todo su borde (perímetro)?",
            opciones: ["14 metros", "21 metros", "28 metros", "49 metros"],
            correcta: 2,
            pista: "Un cuadrado tiene 4 lados iguales. Multiplica 4 lados × 7 metros.",
            explicacion: "Perímetro = 7 + 7 + 7 + 7 = 28 metros."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🎂 Hoy: Itzel 9, Papá 35  |  ⏳ En 5 años...",
            pregunta: "Hoy Itzel tiene 9 años y su papá 35. ¿Cuántos años tendrá su papá cuando Itzel cumpla 14 años?",
            opciones: ["39 años", "40 años", "44 años", "35 años"],
            correcta: 1,
            pista: "De 9 a 14 años pasan 5 años. El tiempo pasa igual para los dos.",
            explicacion: "Si pasan 5 años para Itzel, también pasan 5 años para su papá: 35 + 5 = 40 años."
        }
    ],

    // 10 Lecturas Largas (3.º de Primaria - Comprensión Crítica y Vocabulario)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🦅🏔️🌬️🇵🇪",
            textoLectura: "El cóndor andino es una de las aves voladoras más grandes y majestuosas del planeta. Con sus alas abiertas puede medir más de tres metros de punta a punta. A diferencia de otras aves que aletean sin parar, el cóndor aprovecha las corrientes de aire caliente que suben desde los cañones profundos de los Andes para planear durante horas casi sin gastar energía.",
            pregunta: "¿Cómo logra el cóndor andino volar durante horas sin cansarse?",
            opciones: ["Aleteando muy rápido todo el tiempo", "Aprovechando las corrientes de aire caliente para planear", "Durmiendo mientras vuela", "Volando muy cerca del suelo"],
            correcta: 1,
            pista: "Revisa la última oración del texto sobre cómo usa el viento.",
            explicacion: "El cóndor planea usando las corrientes de aire caliente que suben desde los cañones."
        },
        {
            area: "Lectura 📖",
            dibujo: "🏺☀️🌾🇵🇪",
            textoLectura: "Los antiguos incas fueron extraordinarios ingenieros agrícolas. Como en las montañas de los Andes había pocas tierras planas, construyeron enormes escalones de piedra en las laderas de los cerros llamados andenes. Gracias a estos andenes y a sus canales de riego, evitaron que la lluvia arrastrara la tierra fértil y lograron cultivar maíz, papa y quinua para alimentar a millones de personas.",
            pregunta: "¿Para qué construyeron los incas los andenes en las laderas de los cerros?",
            opciones: ["Para hacer escaleras hacia el cielo", "Para cultivar alimentos en las montañas y evitar que la lluvia arrastre la tierra", "Para esconder tesoros de oro", "Para jugar carreras"],
            correcta: 1,
            pista: "Fíjate en el problema que tenían en las montañas y cómo los andenes lo resolvieron.",
            explicacion: "Los andenes permitieron aprovechar las laderas para cultivar y proteger la tierra fértil."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌳🐒🦜🌧️",
            textoLectura: "La selva amazónica es conocida como el pulmón del planeta porque sus millones de árboles absorben dióxido de carbono y producen gran parte del oxígeno que respiramos. Además, en sus ríos y bosques vive la mayor variedad de animales y plantas de la Tierra, incluyendo delfines rosados, guacamayos de colores brillantes y plantas medicinales únicas.",
            pregunta: "¿Por qué se le llama a la selva amazónica 'el pulmón del planeta'?",
            opciones: ["Porque tiene forma de pulmón", "Porque sus árboles limpian el aire y producen oxígeno para respirar", "Porque llueve todos los días", "Porque allí viven delfines rosados"],
            correcta: 1,
            pista: "Lee la primera oración donde explica qué hacen sus millones de árboles.",
            explicacion: "Sus árboles absorben dióxido de carbono y liberan oxígeno esencial para la vida."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧲🧭🌍✨",
            textoLectura: "Hace más de mil años, los navegantes chinos descubrieron que una piedra especial llamada magnetita siempre apuntaba hacia el mismo lado cuando flotaba sobre un trozo de madera en el agua. Con ese principio inventaron la brújula, un instrumento cuya aguja imantada señala siempre hacia el norte magnético de la Tierra, permitiendo a los exploradores cruzar océanos sin perderse.",
            pregunta: "¿Por qué fue tan importante el invento de la brújula para los navegantes?",
            opciones: ["Porque servía para medir la profundidad del mar", "Porque su aguja señala siempre el norte y evitaba que se perdieran en el océano", "Porque atraía peces hacia los barcos", "Porque iluminaba la noche"],
            correcta: 1,
            pista: "Lee la última parte del párrafo sobre qué señala la aguja imantada.",
            explicacion: "La brújula indica siempre el norte, ayudando a orientarse en alta mar."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐝🌸🌺🍓",
            textoLectura: "Cuando una abeja visita una flor en busca de néctar, un polvillo amarillo llamado polen se queda pegado en las vellosidades de sus patas. Al volar hacia otra flor de la misma especie, ese polen cae dentro de ella. Este proceso se llama polinización y es indispensable para que las plantas puedan producir semillas y frutos como manzanas, fresas y paltas.",
            pregunta: "¿Qué ocurriría con las plantas frutales si no existiera la polinización?",
            opciones: ["Crecerían más rápido", "No podrían producir semillas ni frutos como manzanas o fresas", "Cambiarían sus hojas a color azul", "Vivirían debajo del agua"],
            correcta: 1,
            pista: "Fíjate en la última oración sobre por qué es indispensable este proceso.",
            explicacion: "Sin polinización, las flores no pueden fecundarse para formar semillas y frutos."
        },
        {
            area: "Lectura 📖",
            dibujo: "👦🚲🩹🤝",
            textoLectura: "Durante una carrera de bicicletas en el parque, Sebastián iba en primer lugar muy cerca de la meta. De pronto, escuchó un ruido y vio por el espejo que su amigo Diego había caído al suelo y se había raspado la rodilla. Sin pensarlo dos veces, Sebastián frenó, regresó a ayudarlo a levantarse y caminaron juntos hasta la meta entre los aplausos de todos los vecinos.",
            pregunta: "¿Qué valor demostró Sebastián con su decisión?",
            opciones: ["El egoísmo por querer ganar solo", "La solidaridad y el compañerismo por encima de ganar un trofeo", "El miedo a seguir pedaleando", "La impaciencia"],
            correcta: 1,
            pista: "Piensa qué prefirió Sebastián: ganar la medalla o ayudar a su amigo herido.",
            explicacion: "Demostró empatía y solidaridad al poner el bienestar de su amigo antes que el premio."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌋🔥🪨🌍",
            textoLectura: "En lo profundo del interior de la Tierra hace tanto calor que las rocas se derriten y forman una masa espesa y ardiente llamada magma. Cuando la presión subterránea aumenta demasiado, el magma busca salida a través de grietas de la corteza terrestre y emerge por un volcán. Una vez que sale a la superficie, ese magma recibe el nombre de lava.",
            pregunta: "Según el texto, ¿cuál es la diferencia entre magma y lava?",
            opciones: ["El magma es frío y la lava es caliente", "Se llama magma cuando está dentro de la Tierra y lava cuando sale a la superficie", "El magma es agua y la lava es arena", "No tienen ninguna diferencia"],
            correcta: 1,
            pista: "Compara el nombre que tiene antes de salir del volcán y el nombre que recibe al salir.",
            explicacion: "Dentro de la Tierra se llama magma; al salir por el volcán a la superficie se llama lava."
        },
        {
            area: "Lectura 📖",
            dibujo: "📖🔦🧠✨",
            textoLectura: "Leer todos los días durante veinte minutos funciona como un gimnasio para el cerebro. Cuando lees una historia, tu mente imagina los escenarios, aprende palabras nuevas sin esfuerzo, mejora tu ortografía y entrena tu capacidad de concentración. Quienes tienen el hábito de la lectura comprenden más rápido cualquier materia en la escuela.",
            pregunta: "¿Por qué compara el autor la lectura diaria con un gimnasio?",
            opciones: ["Porque los libros pesan mucho", "Porque ejercita y fortalece la imaginación, el vocabulario y la concentración del cerebro", "Porque hay que leer corriendo", "Porque solo se lee en educación física"],
            correcta: 1,
            pista: "Lee la segunda oración donde enumera todo lo que tu mente entrena al leer.",
            explicacion: "Así como el gimnasio fortalece los músculos, leer ejercita y desarrolla el cerebro."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐋🌊🎶📡",
            textoLectura: "Las ballenas jorobadas son famosas por sus misteriosos cantos submarinos. Los machos pueden emitir secuencias de sonidos graves y agudos que duran hasta veinte minutos y viajan cientos de kilómetros a través del océano. Los científicos creen que utilizan estas melodías para comunicarse entre sí, orientarse en la oscuridad del mar y encontrar pareja.",
            pregunta: "¿Hasta qué distancia pueden viajar los cantos de las ballenas jorobadas bajo el mar?",
            opciones: ["Solo unos pocos metros", "Cientos de kilómetros a través del océano", "Únicamente hasta la orilla", "No se escuchan bajo el agua"],
            correcta: 1,
            pista: "Revisa la segunda oración del párrafo.",
            explicacion: "El agua transmite el sonido muy bien, permitiendo que sus cantos viajen cientos de kilómetros."
        },
        {
            area: "Lectura 📖",
            dibujo: "☀️🔋🌱🌍",
            textoLectura: "Durante muchos años, la electricidad se produjo quemando carbón y petróleo, lo que contaminaba el aire del planeta. Hoy en día, muchos países instalan paneles solares en los techos y molinos de viento gigantes en los campos. Estas energías limpias aprovechan la luz del Sol y la fuerza del viento sin producir humo ni dañar la naturaleza.",
            pregunta: "¿Qué ventaja tienen los paneles solares y molinos de viento frente al carbón y el petróleo?",
            opciones: ["Son más pequeños", "Producen electricidad limpia sin contaminar ni dañar la naturaleza", "Solo funcionan de noche", "Producen más humo"],
            correcta: 1,
            pista: "Lee la última oración del texto.",
            explicacion: "Aprovechan recursos renovables (Sol y viento) sin contaminar el ambiente."
        }
    ]
};
