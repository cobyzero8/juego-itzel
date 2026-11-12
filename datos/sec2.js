// datos/sec2.js - Aula 8: 2.º de Secundaria (Productos Notables, Pitágoras, Sistemas 2x2, Funciones y Lecturas)
const nivel8_Sec2 = {
    id: 8,
    nombre: "2.º de Secundaria - Geometría y Funciones",

    matematicas: [
        // --- SUMA (POLINOMIOS, RADICALES Y ÁNGULOS DE POLÍGONOS) ---
        {
            area: "Suma ➕",
            dibujo: "🧮 (3x² + 5x - 2)  ➕  (4x² - 2x + 7)",
            pregunta: "Suma los siguientes polinomios: (3x² + 5x - 2) + (4x² - 2x + 7)",
            opciones: ["7x² + 7x + 5", "7x² + 3x + 5", "7x⁴ + 3x² + 5", "12x² + 3x + 5"],
            correcta: 1,
            pista: "Agrupa términos del mismo grado: (3x² + 4x²), (5x - 2x) y (-2 + 7).",
            explicacion: "(3+4)x² + (5-2)x + (-2+7) = 7x² + 3x + 5."
        },
        {
            area: "Suma ➕",
            dibujo: "⬟ Pentágono (5 lados):  S = 180°(n - 2)",
            pregunta: "¿Cuánto suman todos los ángulos interiores de un pentágono (polígono de 5 lados)?",
            opciones: ["360°", "540°", "720°", "450°"],
            correcta: 1,
            pista: "Aplica la fórmula 180° × (n - 2), donde n = 5 lados.",
            explicacion: "180° × (5 - 2) = 180° × 3 = 540°."
        },
        {
            area: "Suma ➕",
            dibujo: "√49  ➕  ∛27  ➕  2⁴  =  ❓",
            pregunta: "Calcula el valor numérico de la expresión: √49 + ∛27 + 2⁴",
            opciones: ["24", "26", "18", "28"],
            correcta: 1,
            pista: "Calcula cada término por separado: √49 = 7, ∛27 = 3, y 2⁴ = 16. Luego súmalos.",
            explicacion: "7 + 3 + 16 = 26."
        },
        {
            area: "Suma ➕",
            dibujo: "🌿 5√2  ➕  3√2  ➖  2√2  =  ❓",
            pregunta: "Reduce los radicales semejantes: 5√2 + 3√2 - 2√2",
            opciones: ["6√6", "6√2", "10√2", "6"],
            correcta: 1,
            pista: "Opera los coeficientes delante de √2 como si fueran términos semejantes: (5 + 3 - 2)√2.",
            explicacion: "(5 + 3 - 2)√2 = 6√2."
        },

        // --- RESTA (POLINOMIOS, PITÁGORAS Y VARIACIONES) ---
        {
            area: "Resta ➖",
            dibujo: "📐 Triángulo Rectángulo: Hipotenusa = 13 | Cateto = 5",
            pregunta: "En un triángulo rectángulo, la hipotenusa mide 13 cm y un cateto mide 5 cm. ¿Cuánto mide el otro cateto? (c² - a² = b²)",
            opciones: ["8 cm", "12 cm", "10 cm", "14 cm"],
            correcta: 1,
            pista: "Por Pitágoras: b² = 13² - 5² = 169 - 25 = 144. Saca la raíz cuadrada de 144.",
            explicacion: "b = √(169 - 25) = √144 = 12 cm (triángulo notable 5-12-13)."
        },
        {
            area: "Resta ➖",
            dibujo: "🧮 (8m² - 3m + 4)  ➖  (5m² - 7m + 1)",
            pregunta: "Calcula la diferencia: (8m² - 3m + 4) - (5m² - 7m + 1)",
            opciones: ["3m² - 10m + 3", "3m² + 4m + 3", "3m² - 4m + 5", "13m² + 4m + 3"],
            correcta: 1,
            pista: "Cambia el signo a todo el segundo polinomio: 8m² - 3m + 4 - 5m² + 7m - 1.",
            explicacion: "(8-5)m² + (-3+7)m + (4-1) = 3m² + 4m + 3."
        },
        {
            area: "Resta ➖",
            dibujo: "📈 Precio sube S/ 200 ➔ S/ 250  |  % aumento = ❓",
            pregunta: "Un producto subió de S/ 200 a S/ 250. ¿En qué porcentaje aumentó su precio?",
            opciones: ["50%", "25%", "20%", "40%"],
            correcta: 1,
            pista: "La diferencia es S/ 50. Calcula qué porcentaje es 50 respecto al precio inicial 200: (50 ÷ 200) × 100.",
            explicacion: "(250 - 200) / 200 = 50 / 200 = 0.25 = 25% de aumento."
        },
        {
            area: "Resta ➖",
            dibujo: "⭕ Círculo R = 5 cm  ➖  ⭕ Círculo r = 3 cm (Corona)",
            pregunta: "¿Cuál es el área de una corona circular formada por dos círculos de radios R = 5 cm y r = 3 cm? (A = π(R² - r²))",
            opciones: ["2π cm²", "16π cm²", "4π cm²", "34π cm²"],
            correcta: 1,
            pista: "Calcula R² - r² = 5² - 3² = 25 - 9, y multiplícalo por π.",
            explicacion: "A = π(25 - 9) = 16π cm²."
        },

        // --- MULTIPLICACIÓN (PRODUCTOS NOTABLES Y NOTACIÓN CIENTÍFICA) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🟦 Binomio al cuadrado:  (x + 4)²  =  ❓",
            pregunta: "Desarrolla el producto notable: (x + 4)²",
            opciones: ["x² + 16", "x² + 8x + 16", "x² + 4x + 16", "2x + 8"],
            correcta: 1,
            pista: "Recuerda la fórmula (a + b)² = a² + 2ab + b²: el primero al cuadrado, más el doble producto, más el segundo al cuadrado.",
            explicacion: "x² + 2(x)(4) + 4² = x² + 8x + 16."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "⚡ Diferencia de cuadrados:  (x + 6)(x - 6)  =  ❓",
            pregunta: "Resuelve el producto notable: (x + 6)(x - 6)",
            opciones: ["x² - 12", "x² - 36", "x² + 36", "x² - 12x - 36"],
            correcta: 1,
            pista: "Suma por diferencia es igual a la diferencia de sus cuadrados: (a + b)(a - b) = a² - b².",
            explicacion: "x² - 6² = x² - 36."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🔭 Notación Científica:  (3 × 10⁴)  ❌  (2 × 10³)",
            pregunta: "Multiplica en notación científica: (3 × 10⁴) · (2 × 10³)",
            opciones: ["6 × 10¹²", "6 × 10⁷", "5 × 10⁷", "6 × 10¹"],
            correcta: 1,
            pista: "Multiplica los números (3 × 2 = 6) y suma los exponentes de base 10 (4 + 3 = 7).",
            explicacion: "(3 · 2) × 10^(4+3) = 6 × 10⁷."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📐 Trapecio: Base mayor = 12 | Base menor = 8 | Altura = 5",
            pregunta: "Calcula el área de un trapecio cuyas bases miden 12 cm y 8 cm, y su altura mide 5 cm. (A = ((B + b)/2) × h)",
            opciones: ["100 cm²", "50 cm²", "40 cm²", "60 cm²"],
            correcta: 1,
            pista: "Suma las bases (12 + 8 = 20), divide entre 2 (10) y multiplica por la altura (5).",
            explicacion: "A = ((12 + 8) ÷ 2) × 5 = 10 × 5 = 50 cm²."
        },

        // --- DIVISIÓN (FACTORIZACIÓN, PROBABILIDAD Y PENDIENTE) ---
        {
            area: "División ➗",
            dibujo: "🎲 Dado de 6 caras  ➔  P(número par o > 4) = ❓",
            pregunta: "Al lanzar un dado común de 6 caras, ¿cuál es la probabilidad de obtener un número mayor que 4?",
            opciones: ["1/6", "1/3", "1/2", "2/3"],
            correcta: 1,
            pista: "Los números mayores que 4 en un dado son solo dos: el 5 y el 6 (2 casos favorables de 6 posibles).",
            explicacion: "P = 2/6, que simplificado es 1/3."
        },
        {
            area: "División ➗",
            dibujo: "🧩 Factoriza:  x² - 9  =  ❓",
            pregunta: "Factoriza la expresión algebraica: x² - 9",
            opciones: ["(x - 3)²", "(x + 3)(x - 3)", "(x + 9)(x - 1)", "x(x - 9)"],
            correcta: 1,
            pista: "Como 9 = 3², aplica diferencia de cuadrados en sentido inverso.",
            explicacion: "x² - 3² = (x + 3)(x - 3)."
        },
        {
            area: "División ➗",
            dibujo: "📈 Recta pasa por (1, 2) y (4, 11)  ➔  Pendiente m = ❓",
            pregunta: "¿Cuál es la pendiente (m) de la recta que pasa por los puntos A(1, 2) y B(4, 11)? (m = (y₂ - y₁)/(x₂ - x₁))",
            opciones: ["2", "3", "4", "9"],
            correcta: 1,
            pista: "Resta las 'y' arriba (11 - 2 = 9) y las 'x' abajo (4 - 1 = 3). Luego divide 9 ÷ 3.",
            explicacion: "m = (11 - 2) / (4 - 1) = 9 / 3 = 3."
        },
        {
            area: "División ➗",
            dibujo: "💰 Reparto proporcional: S/ 120 entre 2 : 3 : 5",
            pregunta: "Reparte S/ 120 de forma directamente proporcional a los números 2, 3 y 5. ¿Cuánto recibe la parte mayor?",
            opciones: ["S/ 50", "S/ 60", "S/ 36", "S/ 24"],
            correcta: 1,
            pista: "Suma las partes: 2k + 3k + 5k = 10k = 120 ➔ k = 12. La parte mayor es 5k.",
            explicacion: "k = 120 ÷ 10 = 12 ➔ Parte mayor = 5 × 12 = S/ 60."
        },

        // --- RAZONAMIENTO MATEMÁTICO, SISTEMAS 2x2 Y FUNCIONES ---
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️ Sistema:  x + y = 14   |   x - y = 4",
            pregunta: "Resuelve el sistema de ecuaciones: x + y = 14 y x - y = 4. ¿Cuánto vale 'x'?",
            opciones: ["5", "9", "7", "10"],
            correcta: 1,
            pista: "Suma ambas ecuaciones verticalmente: (x + y) + (x - y) = 14 + 4 ➔ 2x = 18.",
            explicacion: "2x = 18 ➔ x = 9 (y = 5)."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "📉 Función lineal:  f(x) = 3x - 4  ➔  Halla f(5)",
            pregunta: "Dada la función lineal f(x) = 3x - 4, calcula el valor de f(5) + f(2)",
            opciones: ["11", "13", "15", "9"],
            correcta: 1,
            pista: "Calcula f(5) = 3(5) - 4 = 11, y f(2) = 3(2) - 4 = 2. Luego súmalos.",
            explicacion: "f(5) = 11 y f(2) = 2 ➔ 11 + 2 = 13."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🪜 Escalera de 10 m apoyada a 6 m de la pared ➔ Altura = ❓",
            pregunta: "Una escalera de 10 metros se apoya contra una pared, quedando su base a 6 metros de ella. ¿A qué altura llega la escalera?",
            opciones: ["4 m", "8 m", "7 m", "9 m"],
            correcta: 1,
            pista: "Es un triángulo rectángulo de hipotenusa 10 y base 6 (triángulo notable 6-8-10).",
            explicacion: "h = √(10² - 6²) = √(100 - 36) = √64 = 8 metros."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🐔🐓 Gallinas y Conejos: 10 cabezas y 28 patas",
            pregunta: "En una granja hay 10 animales entre gallinas (2 patas) y conejos (4 patas). Si se cuentan 28 patas en total, ¿cuántos conejos hay?",
            opciones: ["6 conejos", "4 conejos", "5 conejos", "3 conejos"],
            correcta: 1,
            pista: "Si los 10 fueran gallinas habría 20 patas. Sobran 8 patas; como cada conejo tiene 2 patas extra, divide 8 ÷ 2.",
            explicacion: "(28 - 20) ÷ 2 = 4 conejos (y 6 gallinas)."
        }
    ],

    // 10 Lecturas Largas (2.º de Secundaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "⚡💡🧲🔬",
            textoLectura: "En el siglo XIX, el físico británico Michael Faraday descubrió que al mover un imán dentro de una bobina de alambre de cobre se generaba una corriente eléctrica. Este fenómeno, conocido como inducción electromagnética, demostró que el magnetismo y la electricidad están íntimamente unidos. Casi toda la energía eléctrica que ilumina hoy nuestras ciudades se produce mediante grandes generadores basados en el principio de Faraday.",
            pregunta: "¿Cuál es la trascendencia práctica del descubrimiento de Michael Faraday?",
            opciones: ["Permitió fabricar brújulas de madera", "Constituye el principio fundamental con el que funcionan los generadores eléctricos modernos", "Demostró que el cobre no conduce electricidad", "Reemplazó la luz solar"],
            correcta: 1,
            pista: "Lee la última oración del párrafo.",
            explicacion: "La inducción electromagnética es la base de las centrales hidroeléctricas, eólicas y térmicas."
        },
        {
            area: "Lectura 📖",
            dibujo: "📊💰🏦📈",
            textoLectura: "La inflación es el aumento generalizado y sostenido de los precios de los bienes y servicios de un país durante un periodo de tiempo. Cuando hay inflación alta, cada moneda pierde poder adquisitivo; es decir, con la misma cantidad de dinero se pueden comprar menos alimentos o productos que antes. Por ello, los bancos centrales regulan la cantidad de dinero circulante para mantener la estabilidad económica.",
            pregunta: "¿Qué significa que el dinero 'pierde poder adquisitivo' durante un proceso inflacionario?",
            opciones: ["Que los billetes cambian de color", "Que con la misma suma de dinero se compran menos bienes y servicios que antes", "Que las tiendas regalan productos", "Que los salarios suben automáticamente cada día"],
            correcta: 1,
            pista: "Revisa la segunda oración donde define el término.",
            explicacion: "Al subir los precios, el valor real de compra de cada unidad monetaria disminuye."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧬🧫🔍🧪",
            textoLectura: "Todas las células de nuestro cuerpo, desde una neurona hasta una célula de la piel, contienen exactamente el mismo manual de instrucciones genéticas: el ADN. Sin embargo, cada célula cumple una función distinta porque solo 'lee' y activa los capítulos (genes) que necesita para su especialidad, manteniendo silenciados los demás. Este mecanismo de regulación genética permite que un organismo complejo funcione en armonía.",
            pregunta: "¿Cómo logran las células tener formas y funciones diferentes si todas poseen el mismo ADN?",
            opciones: ["Porque eliminan el ADN que no usan", "Porque activan únicamente los genes específicos que necesitan para su función y silencian el resto", "Porque intercambian núcleos cada noche", "Porque solo las neuronas tienen ADN"],
            correcta: 1,
            pista: "Lee la segunda oración del texto.",
            explicacion: "La expresión génica diferencial determina la especialización celular."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌍🌡️🏭🌳",
            textoLectura: "El efecto invernadero natural es indispensable para la vida en la Tierra: ciertos gases atmosféricos retienen parte del calor del Sol, manteniendo una temperatura media agradable de quince grados centígrados en lugar de un planeta congelado. El problema actual radica en que la quema excesiva de combustibles fósiles ha incrementado demasiado esos gases, atrapando calor extra y alterando los patrones climáticos globales.",
            pregunta: "¿Cuál es la postura explicativa del texto sobre el efecto invernadero?",
            opciones: ["Que todo efecto invernadero es artificial y malo", "Que en niveles naturales permite la vida, pero su intensificación por actividad humana provoca el calentamiento global", "Que la Tierra estaría mejor sin atmósfera", "Que los combustibles fósiles enfrían el planeta"],
            correcta: 1,
            pista: "Compara la primera oración con la segunda.",
            explicacion: "Distingue entre el equilibrio térmico natural y el desequilibrio provocado por emisiones excesivas."
        },
        {
            area: "Lectura 📖",
            dibujo: "📚✒️🇵🇪🌎",
            textoLectura: "El Inca Garcilaso de la Vega, nacido en Cusco en 1539, hijo de un capitán español y de una princesa inca, simboliza el encuentro de dos mundos. En su obra cumbre, 'Los Comentarios Reales de los Incas', rescató la historia, lengua y costumbres del Tahuantinsuyo a partir de los relatos que escuchó de sus parientes maternos en su infancia, convirtiéndose en una fuente fundamental para comprender el pasado andino.",
            pregunta: "¿Por qué se considera al Inca Garcilaso de la Vega un puente entre dos culturas?",
            opciones: ["Porque construyó puentes en Cusco", "Por su origen mestizo y por narrar la historia del imperio incaico en español para el mundo", "Porque viajó a China", "Porque escribió únicamente en latín"],
            correcta: 1,
            pista: "Lee las dos primeras oraciones del párrafo.",
            explicacion: "Su identidad mestiza y dominio de ambas tradiciones le permitieron documentar la memoria incaica."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧠🎯⏳📱",
            textoLectura: "Diversos estudios en neurociencia demuestran que la llamada 'multitarea' digital —como intentar estudiar mientras se responden mensajes y se miran videos— es en realidad un mito. El cerebro no realiza dos tareas complejas a la vez, sino que salta rápidamente de una a otra, perdiendo tiempo y energía mental en cada cambio de foco. Concentrarse en una sola actividad profunda duplica la calidad del aprendizaje.",
            pregunta: "¿Qué ocurre realmente en el cerebro cuando intentamos hacer varias tareas complejas al mismo tiempo?",
            opciones: ["Se vuelve el doble de rápido", "Alterna rápidamente entre tareas perdiendo tiempo y eficiencia en cada cambio", "Divide sus hemisferios para cada pantalla", "Ahorra energía neuronal"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "El cambio constante de contexto (context switching) reduce la atención y el rendimiento cognitivo."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌊🌙重力🌍",
            textoLectura: "El ascenso y descenso periódico del nivel del mar, conocido como mareas, es provocado principalmente por la atracción gravitatoria que la Luna ejerce sobre los océanos de la Tierra. Aunque el Sol es muchísimo más masivo que la Luna, su influencia sobre las mareas es menor debido a que se encuentra casi cuatrocientas veces más lejos de nuestro planeta.",
            pregunta: "¿Por qué la Luna influye más en las mareas terrestres que el Sol si es mucho más pequeña?",
            opciones: ["Porque está hecha de agua", "Porque se encuentra muchísimo más cerca de la Tierra que el Sol", "Porque gira en sentido contrario", "Porque refleja luz fría"],
            correcta: 1,
            pista: "Lee la última oración del texto.",
            explicacion: "La fuerza gravitatoria depende tanto de la masa como de la distancia; la cercanía lunar predomina."
        },
        {
            area: "Lectura 📖",
            dibujo: "🗣️🤝🎭🏛️",
            textoLectura: "Para el filósofo griego Aristóteles, la persuasión eficaz se apoya en tres pilares fundamentales: el 'ethos', que es la credibilidad y honestidad de quien habla; el 'pathos', que es la capacidad de conectar emocionalmente con la audiencia; y el 'logos', que consiste en respaldar las ideas con razonamientos lógicos y evidencias comprobables. Un buen comunicador equilibra los tres elementos.",
            pregunta: "¿A qué se refiere el pilar denominado 'logos' según Aristóteles?",
            opciones: ["A la fama del orador", "Al uso de argumentos lógicos, datos y evidencias para sustentar una idea", "A hacer llorar al público", "Al volumen de la voz"],
            correcta: 1,
            pista: "Busca la definición de 'logos' en la primera oración.",
            explicacion: "El logos apela a la razón y la demostración lógica dentro del discurso."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦠🍞🧀🔬",
            textoLectura: "Cuando escuchamos la palabra 'microorganismos' solemos pensar únicamente en enfermedades; sin embargo, la inmensa mayoría de bacterias y levaduras son benéficas e indispensables. Gracias a la fermentación realizada por microorganismos obtenemos alimentos como el pan esponjoso, el yogur y el queso, y dentro de nuestro intestino billones de bacterias saludables nos ayudan a digerir nutrientes y fortalecer nuestras defensas.",
            pregunta: "¿Cuál es la idea central del texto?",
            opciones: ["Que todos los microorganismos deben ser eliminados", "Que la mayoría de los microorganismos son benéficos y cumplen roles vitales en la alimentación y la salud", "Que el pan no necesita levadura", "Que las bacterias solo viven en el suelo"],
            correcta: 1,
            pista: "Fíjate en cómo el texto corrige una creencia común en la primera oración.",
            explicacion: "Destaca la importancia positiva de la microbiota y los procesos biotecnológicos cotidianos."
        },
        {
            area: "Lectura 📖",
            dibujo: "🛰️🔭🌌✨",
            textoLectura: "Cuando observamos una estrella situada a cien años luz de distancia, no la estamos viendo como es hoy, sino como era hace cien años, cuando esa luz emprendió su viaje hacia la Tierra. De este modo, los telescopios espaciales funcionan como verdaderas máquinas del tiempo que permiten a los astrónomos estudiar galaxias jóvenes tal como existieron poco después del origen del universo.",
            pregunta: "¿Por qué afirma el autor que los telescopios funcionan como 'máquinas del tiempo'?",
            opciones: ["Porque permiten viajar físicamente al pasado", "Porque la luz tarda años o millones de años en llegar, mostrándonos cómo eran los astros en el pasado", "Porque adelantan los relojes de los observatorios", "Porque predicen el futuro de las estrellas"],
            correcta: 1,
            pista: "Lee la primera oración del párrafo.",
            explicacion: "Debido a la velocidad finita de la luz, observar distancias astronómicas implica mirar hacia el pasado."
        }
    ]
};
