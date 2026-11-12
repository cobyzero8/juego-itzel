// datos/grado5.js - Aula 5: 5.º de Primaria (Decimales, Fracciones Heterogéneas, Porcentajes, Razonamiento y Lecturas)
const nivel5_Grado5 = {
    id: 5,
    nombre: "5.º de Primaria - Decimales y Lógica",

    matematicas: [
        // --- SUMA (DECIMALES Y FRACCIONES HETEROGÉNEAS) ---
        {
            area: "Suma ➕",
            dibujo: "🛒 Cuaderno: S/ 4.50  ➕  🖊️ Lapicero: S/ 2.75",
            pregunta: "Itzel compra un cuaderno de S/ 4.50 y un lapicero de S/ 2.75. ¿Cuánto paga en total?",
            opciones: ["S/ 6.25", "S/ 7.25", "S/ 7.15", "S/ 8.25"],
            correcta: 1,
            pista: "Alinea los puntos decimales: 4.50 + 2.00 = 6.50, y luego súmale 0.75.",
            explicacion: "4.50 + 2.75 = S/ 7.25."
        },
        {
            area: "Suma ➕",
            dibujo: "🍕 1/2 de pizza  ➕  🍕 1/4 de pizza",
            pregunta: "En una reunión se comen 1/2 de una pizza y luego 1/4 más de la misma pizza. ¿Qué fracción se comió en total?",
            opciones: ["2/6", "3/4", "2/4", "1/6"],
            correcta: 1,
            pista: "Recuerda que 1/2 equivale a 2/4. Ahora suma 2/4 + 1/4.",
            explicacion: "1/2 + 1/4 = 2/4 + 1/4 = 3/4 de pizza."
        },
        {
            area: "Suma ➕",
            dibujo: "🏃‍♀️ Tramo 1: 3.8 km  ➕  🏃‍♀️ Tramo 2: 4.65 km",
            pregunta: "Una atleta corre 3.8 km por la mañana y 4.65 km por la tarde. ¿Cuántos kilómetros recorrió en total?",
            opciones: ["7.45 km", "8.45 km", "8.35 km", "7.73 km"],
            correcta: 1,
            pista: "Escribe 3.8 como 3.80 para igualar cifras decimales y suma: 3.80 + 4.65.",
            explicacion: "3.80 + 4.65 = 8.45 km."
        },
        {
            area: "Suma ➕",
            dibujo: "🧪 2/3 L  ➕  🧪 1/6 L",
            pregunta: "En un experimento mezclas 2/3 de litro de agua con 1/6 de litro de jugo. ¿Cuánto líquido hay en total?",
            opciones: ["3/9 L", "5/6 L", "3/6 L", "4/6 L"],
            correcta: 1,
            pista: "Convierte 2/3 a sextos multiplicando arriba y abajo por 2 (4/6). Luego suma 4/6 + 1/6.",
            explicacion: "2/3 + 1/6 = 4/6 + 1/6 = 5/6 de litro."
        },

        // --- RESTA (DECIMALES Y VUELTOS) ---
        {
            area: "Resta ➖",
            dibujo: "💵 Billete: S/ 20.00  ➖  🍔 Compra: S/ 13.40",
            pregunta: "Pagas una cuenta de S/ 13.40 con un billete de S/ 20.00. ¿Cuánto recibes de vuelto?",
            opciones: ["S/ 7.60", "S/ 6.60", "S/ 6.40", "S/ 7.40"],
            correcta: 1,
            pista: "De 13.40 a 14.00 faltan 0.60; de 14.00 a 20.00 faltan 6.00.",
            explicacion: "20.00 - 13.40 = S/ 6.60."
        },
        {
            area: "Resta ➖",
            dibujo: "📏 Listón: 5.2 m  ➖  ✂️ Corte: 1.85 m",
            pregunta: "De un listón de madera de 5.2 metros se corta un pedazo de 1.85 metros. ¿Cuánto listón queda?",
            opciones: ["3.35 m", "3.45 m", "4.35 m", "3.65 m"],
            correcta: 0,
            pista: "Escribe 5.2 como 5.20 y resta 1.85.",
            explicacion: "5.20 - 1.85 = 3.35 metros."
        },
        {
            area: "Resta ➖",
            dibujo: "🎂 Torta: 3/4  ➖  🍰 Porción: 1/8",
            pregunta: "Quedaban 3/4 de una torta y te comes 1/8. ¿Qué fracción de la torta queda ahora?",
            opciones: ["2/4", "5/8", "2/8", "4/8"],
            correcta: 1,
            pista: "Convierte 3/4 a octavos (6/8) y réstale 1/8.",
            explicacion: "3/4 - 1/8 = 6/8 - 1/8 = 5/8 de torta."
        },
        {
            area: "Resta ➖",
            dibujo: "🌡️ Día: 24.3 °C  ➖  🌙 Noche: 11.7 °C",
            pregunta: "En Huanta la temperatura máxima fue 24.3 °C y por la noche bajó a 11.7 °C. ¿Cuántos grados bajó?",
            opciones: ["13.6 °C", "12.6 °C", "12.4 °C", "13.4 °C"],
            correcta: 1,
            pista: "Resta 24.3 - 11.7 pidiendo prestado a las unidades.",
            explicacion: "24.3 - 11.7 = 12.6 °C."
        },

        // --- MULTIPLICACIÓN (DECIMALES Y POTENCIAS) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🥐(S/ 1.25 c/u)  ❌  8 panes",
            pregunta: "Cada pan especial cuesta S/ 1.25. ¿Cuánto cuestan 8 panes? (1.25 × 8)",
            opciones: ["S/ 8.50", "S/ 10.00", "S/ 9.00", "S/ 10.50"],
            correcta: 1,
            pista: "1 × 8 = 8 soles, y 0.25 × 8 = 2 soles (porque cuatro monedas de 0.25 hacen 1 sol).",
            explicacion: "1.25 × 8 = S/ 10.00."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📦 3.45 kg  ❌  100 cajas",
            pregunta: "Una caja pesa 3.45 kg. ¿Cuánto pesan 100 cajas iguales? (3.45 × 100)",
            opciones: ["34.5 kg", "345 kg", "3,450 kg", "0.345 kg"],
            correcta: 1,
            pista: "Al multiplicar por 100, mueve el punto decimal dos lugares hacia la derecha.",
            explicacion: "3.45 × 100 = 345 kg."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🚌(48 pasajeros)  ❌  15 viajes",
            pregunta: "Un bus lleva 48 pasajeros en cada viaje. ¿Cuántos pasajeros transporta en 15 viajes? (48 × 15)",
            opciones: ["620 pasajeros", "720 pasajeros", "680 pasajeros", "740 pasajeros"],
            correcta: 1,
            pista: "Multiplica 48 × 10 = 480, y súmale la mitad (48 × 5 = 240).",
            explicacion: "48 × 15 = 480 + 240 = 720 pasajeros."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🧊 Cubo de lado 4 cm: 4 × 4 × 4 (4³)",
            pregunta: "¿Cuál es el volumen de un cubo cuyo lado mide 4 cm? (V = 4 × 4 × 4)",
            opciones: ["12 cm³", "16 cm³", "64 cm³", "48 cm³"],
            correcta: 2,
            pista: "Multiplica primero 4 × 4 = 16, y luego multiplica 16 × 4.",
            explicacion: "4³ = 4 × 4 × 4 = 64 cm³."
        },

        // --- DIVISIÓN Y PORCENTAJES ---
        {
            area: "División ➗",
            dibujo: "🏷️ Precio: S/ 80  |  🔥 Descuento: 25%",
            pregunta: "Una mochila cuesta S/ 80 y tiene un descuento del 25% (la cuarta parte). ¿Cuánto dinero te descuentan?",
            opciones: ["S/ 15", "S/ 20", "S/ 25", "S/ 40"],
            correcta: 1,
            pista: "El 25% equivale a dividir entre 4 (80 ÷ 4).",
            explicacion: "25% de 80 = 80 ÷ 4 = S/ 20 de descuento."
        },
        {
            area: "División ➗",
            dibujo: "🧵 Cinta: 18.6 m  ➡️  6 partes iguales",
            pregunta: "Se corta una cinta de 18.6 metros en 6 pedazos exactamente iguales. ¿Cuánto mide cada pedazo? (18.6 ÷ 6)",
            opciones: ["3.01 m", "3.1 m", "3.6 m", "2.1 m"],
            correcta: 1,
            pista: "Divide 18 ÷ 6 = 3, coloca el punto decimal y divide 6 ÷ 6 = 1.",
            explicacion: "18.6 ÷ 6 = 3.1 metros cada pedazo."
        },
        {
            area: "División ➗",
            dibujo: "🏫 450 alumnos  ➡️  18 aulas iguales",
            pregunta: "En un colegio hay 450 estudiantes repartidos en 18 aulas por igual. ¿Cuántos alumnos hay por aula? (450 ÷ 18)",
            opciones: ["20 alumnos", "25 alumnos", "30 alumnos", "22 alumnos"],
            correcta: 1,
            pista: "Piensa: 18 × 10 = 180; 18 × 20 = 360; faltan 90 que es 18 × 5.",
            explicacion: "450 ÷ 18 = 25 alumnos por aula."
        },
        {
            area: "División ➗",
            dibujo: "📊 50% de 140 puntos",
            pregunta: "En una prueba de 140 puntos, Itzel obtuvo el 50% en la primera parte. ¿Cuántos puntos son el 50%?",
            opciones: ["50 puntos", "70 puntos", "35 puntos", "90 puntos"],
            correcta: 1,
            pista: "El 50% siempre representa exactamente la mitad del total (140 ÷ 2).",
            explicacion: "50% de 140 = 140 ÷ 2 = 70 puntos."
        },

        // --- RAZONAMIENTO MATEMÁTICO, SERIES Y RELOJ ---
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 Serie: 1  ➔  4  ➔  9  ➔  16  ➔  25  ➔  ❓",
            pregunta: "Observa esta serie de números cuadrados y halla el siguiente: 1, 4, 9, 16, 25, ...",
            opciones: ["30", "35", "36", "49"],
            correcta: 2,
            pista: "Son los cuadrados de los números naturales: 1×1, 2×2, 3×3, 4×4, 5×5... sigue 6×6.",
            explicacion: "6 × 6 = 36."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🕒 Salida: 2:40 p.m.  ➕  ⏱️ Viaje: 1 h 35 min",
            pregunta: "Un bus sale de Huanta a las 2:40 p.m. y el viaje dura 1 hora y 35 minutos. ¿A qué hora llega?",
            opciones: ["3:75 p.m.", "4:15 p.m.", "4:05 p.m.", "3:15 p.m."],
            correcta: 1,
            pista: "De 2:40 + 1 hora son 3:40. Súmale 20 minutos para llegar a las 4:00, y quedan 15 minutos más.",
            explicacion: "2:40 p.m. + 1 h 35 min = 4:15 p.m."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔺 Triángulo: Base = 10 cm  |  Altura = 6 cm",
            pregunta: "¿Cuál es el ÁREA de un triángulo cuya base mide 10 cm y su altura mide 6 cm?",
            opciones: ["60 cm²", "30 cm²", "16 cm²", "20 cm²"],
            correcta: 1,
            pista: "El área del triángulo es (Base × Altura) dividido entre 2.",
            explicacion: "Área = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm²."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🚦 Luz A: cada 4 min  |  🚦 Luz B: cada 6 min",
            pregunta: "Dos faros encienden juntos a las 8:00 p.m. Uno parpadea cada 4 minutos y el otro cada 6 minutos. ¿En cuántos minutos volverán a coincidir?",
            opciones: ["10 minutos", "12 minutos", "24 minutos", "8 minutos"],
            correcta: 1,
            pista: "Busca el mínimo común múltiplo (m.c.m.) de 4 y 6: múltiplos de 4 (4, 8, 12...) y de 6 (6, 12...).",
            explicacion: "El m.c.m. de 4 y 6 es 12 minutos (coincidirán a las 8:12 p.m.)."
        }
    ],

    // 10 Lecturas Largas (5.º de Primaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🏛️🪨☀️🇵🇪",
            textoLectura: "Los antiguos arquitectos incas construyeron muros de piedra tan perfectos en Cusco y Machu Picchu que ni siquiera la hoja de un cuchillo puede pasar entre dos bloques. No utilizaron cemento ni argamasa; en su lugar, tallaron cada piedra con martillos de roca más dura para que encajaran como piezas de un rompecabezas gigante. Gracias a esa técnica, sus construcciones han resistido fuertes terremotos durante más de quinientos años.",
            pregunta: "¿Por qué los muros incas han resistido terremotos durante siglos sin usar cemento?",
            opciones: ["Porque pegaron las piedras con barro especial", "Porque tallaron cada bloque para que encajara con precisión exacta como un rompecabezas", "Porque eran paredes muy delgadas", "Porque usaron vigas de acero ocultas"],
            correcta: 1,
            pista: "Lee la segunda y tercera oración del párrafo.",
            explicacion: "El encaje exacto entre bloques de piedra permite que absorban movimientos sísmicos sin derrumbarse."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌋🔥🌍💨",
            textoLectura: "Debajo de la corteza terrestre sobre la que caminamos existe roca tan caliente que se encuentra fundida en estado líquido, llamada magma. Cuando la presión en el interior de la Tierra aumenta demasiado, el magma busca salir a la superficie a través de grietas o chimeneas volcánicas. Una vez que el magma sale al exterior durante una erupción, recibe el nombre de lava y, al enfriarse, forma nuevas rocas y hasta islas enteras.",
            pregunta: "¿Cuál es la diferencia entre 'magma' y 'lava' según el texto?",
            opciones: ["El magma es frío y la lava es congelada", "Se llama magma cuando está bajo tierra y lava cuando sale a la superficie", "El magma es agua hirviendo y la lava es arena", "No existe ninguna diferencia"],
            correcta: 1,
            pista: "Revisa la primera y la última oración del texto.",
            explicacion: "Magma es la roca fundida en el interior de la Tierra; lava es ese mismo material al emerger a la superficie."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦈🦷🌊🔍",
            textoLectura: "A diferencia de los seres humanos que solo cambiamos nuestros dientes de leche una vez en la vida, los tiburones poseen filas interminables de dientes de repuesto en sus mandíbulas. Cuando un tiburón pierde un diente al cazar, el diente situado justo detrás avanza hacia adelante en pocos días para ocupar su lugar. A lo largo de toda su vida, un solo tiburón puede llegar a producir más de veinte mil dientes.",
            pregunta: "¿Qué ventaja tienen los tiburones respecto a su dentadura?",
            opciones: ["Sus dientes nunca se caen", "Reemplazan continuamente los dientes perdidos mediante filas de repuesto", "Tienen un solo diente gigante", "Sus dientes son de hueso blando"],
            correcta: 1,
            pista: "Lee la primera y segunda oración del párrafo.",
            explicacion: "Los tiburones renuevan constantemente sus dientes gracias a múltiples hileras de reemplazo."
        },
        {
            area: "Lectura 📖",
            dibujo: "🛰️📡🌐📍",
            textoLectura: "Cuando usas un mapa digital en un teléfono celular para saber cómo llegar a una dirección, tu dispositivo se comunica con una red de satélites que orbitan a veinte mil kilómetros sobre la Tierra. Estos satélites envían señales con la hora exacta medida por relojes atómicos. Al calcular cuánto tardan en llegar las señales de al menos cuatro satélites distintos, tu teléfono determina tu ubicación exacta en el planeta.",
            pregunta: "¿Cuántos satélites como mínimo necesita consultar tu teléfono para calcular tu ubicación exacta?",
            opciones: ["Un solo satélite", "Al menos cuatro satélites distintos", "Cien satélites", "Ninguno, funciona sin satélites"],
            correcta: 1,
            pista: "Lee la última oración del párrafo.",
            explicacion: "Mediante triangulación con al menos cuatro satélites, el receptor GPS calcula latitud, longitud y altitud."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌳🍃💨🌧️",
            textoLectura: "La selva amazónica es conocida como uno de los grandes reguladores del clima mundial. Sus cientos de miles de millones de árboles absorben enormes cantidades de dióxido de carbono y liberan vapor de agua hacia la atmósfera formando verdaderos 'ríos voladores' de nubes. Estos ríos aéreos viajan miles de kilómetros y llevan lluvias vitales para la agricultura y las ciudades de Sudamérica.",
            pregunta: "¿Qué son los 'ríos voladores' mencionados en la lectura?",
            opciones: ["Aviones que transportan agua", "Corrientes de vapor de agua y nubes liberadas por los árboles amazónicos", "Ríos subterráneos bajo las montañas", "Cataratas gigantes"],
            correcta: 1,
            pista: "Fíjate en la segunda oración donde explica qué forman los árboles al liberar vapor de agua.",
            explicacion: "Los árboles transpiran vapor de agua que forma masas de nubes transportadoras de lluvia."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦅🔭🐭🏔️",
            textoLectura: "La vista de las aves rapaces, como el águila o el halcón, es hasta ocho veces más aguda que la del ser humano. Mientras vuela a cientos de metros de altura sobre un valle, un águila puede distinguir a un pequeño ratón escondido entre la hierba. Esto es posible porque sus ojos ocupan gran parte de su cráneo y tienen una densidad altísima de células receptoras de luz.",
            pregunta: "¿Por qué las águilas tienen una visión mucho más aguda que la nuestra?",
            opciones: ["Porque vuelan de noche", "Porque sus ojos son grandes respecto a su cráneo y tienen muchísimas células receptoras de luz", "Porque tienen cuatro ojos", "Porque usan gafas naturales"],
            correcta: 1,
            pista: "Lee la última oración del texto.",
            explicacion: "La anatomía de sus ojos y su alta densidad de fotorreceptores les otorgan gran agudeza visual."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧭🚢🌍⭐",
            textoLectura: "Antes de la invención de la brújula magnética, los navegantes antiguos dependían del cielo despejado para cruzar el mar: de día se guiaban por la posición del Sol y de noche por las estrellas, como la Estrella Polar. Sin embargo, cuando aparecían tormentas o densa neblina durante varios días, los barcos perdían el rumbo fácilmente. La brújula permitió navegar con seguridad sin importar el clima.",
            pregunta: "¿Cuál fue el principal problema que resolvió la invención de la brújula para los navegantes?",
            opciones: ["Hizo que los barcos fueran más rápidos", "Permitió orientarse incluso cuando las nubes o tormentas ocultaban el Sol y las estrellas", "Evitó que los barcos se hundieran", "Limpió el agua del mar"],
            correcta: 1,
            pista: "Lee las dos últimas oraciones del texto.",
            explicacion: "La brújula funciona mediante el magnetismo terrestre sin necesidad de ver el cielo despejado."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐜🍄🌿🤝",
            textoLectura: "En las selvas tropicales viven las hormigas cortadoras de hojas, consideradas las primeras agricultoras del reino animal. Aunque cortan miles de pedazos de hojas verdes y los llevan en fila hasta su hormiguero subterráneo, en realidad no se comen las hojas. Las mastican para crear un abono especial sobre el cual cultivan un hongo nutritivo que sirve de alimento para toda la colonia.",
            pregunta: "¿Para qué cortan hojas las hormigas cortadoras de hojas si no se las comen?",
            opciones: ["Para hacer camas suaves", "Para usarlas como abono y cultivar un hongo del que se alimentan", "Para tapar la entrada del hormiguero", "Para venderlas a otros insectos"],
            correcta: 1,
            pista: "Lee la última oración del párrafo.",
            explicacion: "Cultivan hongos comestibles utilizando las hojas masticadas como sustrato nutritivo."
        },
        {
            area: "Lectura 📖",
            dibujo: "🎶🔊🌊🐬",
            textoLectura: "Los delfines utilizan un sistema natural llamado ecolocalización para explorar las profundidades oscuras del océano. Emiten una serie de chasquidos de alta frecuencia que viajan por el agua y rebotan al chocar contra peces, rocas u otros objetos. Al escuchar el eco que regresa, el cerebro del delfín crea una imagen sonora detallada del tamaño, forma y distancia de todo lo que lo rodea.",
            pregunta: "¿Cómo 'ven' los delfines en las zonas oscuras del océano?",
            opciones: ["Con linternas bioluminiscentes", "Emitiendo sonidos y analizando el eco que rebota en los objetos", "Tocando todo con su cola", "Siguiendo a las ballenas"],
            correcta: 1,
            pista: "Lee la segunda y tercera oración sobre la ecolocalización.",
            explicacion: "La ecolocalización interpreta el eco de los sonidos emitidos para ubicar objetos con precisión."
        },
        {
            area: "Lectura 📖",
            dibujo: "💡🔬🧪🏆",
            textoLectura: "Muchas invenciones cotidianas nacieron por curiosidad y observación paciente. Cuando el científico Alexander Fleming regresó de unas vacaciones en 1928, notó que un hongo azul verdoso había crecido por accidente en una de sus placas de laboratorio y había destruido las bacterias que estaban alrededor. En lugar de tirar la placa a la basura, la investigó y descubrió la penicilina, el primer antibiótico que salvó millones de vidas.",
            pregunta: "¿Qué enseñanza nos deja el descubrimiento de la penicilina por Alexander Fleming?",
            opciones: ["Que nunca debemos salir de vacaciones", "Que la observación atenta y la curiosidad científica pueden convertir un accidente en un gran hallazgo", "Que todos los hongos son peligrosos", "Que los laboratorios deben estar sucios"],
            correcta: 1,
            pista: "Fíjate en cómo reaccionó Fleming al ver el hongo en lugar de tirarlo.",
            explicacion: "Su capacidad de observación convirtió un hecho inesperado en uno de los mayores avances médicos."
        }
    ]
};
