// datos/sec4.js - Aula 10: 4.º de Secundaria (Trigonometría, Logaritmos, Geometría Analítica, Combinatoria y Lecturas)
const nivel10_Sec4 = {
    id: 10,
    nombre: "4.º de Secundaria - Trigonometría y Análisis",

    matematicas: [
        // --- SUMA (IDENTIDADES TRIGONOMÉTRICAS, LOGARITMOS Y SERIES) ---
        {
            area: "Suma ➕",
            dibujo: "📐 Identidad Fundamental:  3·sen²(40°)  ➕  3·cos²(40°)",
            pregunta: "Simplifica la siguiente expresión trigonométrica: 3·sen²(40°) + 3·cos²(40°)",
            opciones: ["6", "3", "1", "0"],
            correcta: 1,
            pista: "Factoriza el 3: 3[sen²(40°) + cos²(40°)]. Recuerda que sen²(θ) + cos²(θ) = 1 siempre.",
            explicacion: "3(1) = 3, por la identidad trigonométrica pitagórica fundamental."
        },
        {
            area: "Suma ➕",
            dibujo: "🔢 Logaritmos:  log₂(8)  ➕  log₂(16)  =  ❓",
            pregunta: "Calcula el valor exacto de: log₂(8) + log₂(16)",
            opciones: ["24", "7", "12", "5"],
            correcta: 1,
            pista: "¿A qué exponente elevas 2 para obtener 8? (3). ¿Y para obtener 16? (4). También puedes usar log₂(8 × 16) = log₂(128).",
            explicacion: "log₂(8) = 3 y log₂(16) = 4 ➔ 3 + 4 = 7."
        },
        {
            area: "Suma ➕",
            dibujo: "♾️ Serie Geométrica Infinita:  1 + 1/2 + 1/4 + 1/8 + ... = ❓",
            pregunta: "Halla la suma de los infinitos términos de la progresión geométrica: 1 + 1/2 + 1/4 + 1/8 + ...",
            opciones: ["Infinito", "2", "1.5", "4"],
            correcta: 1,
            pista: "Para una serie infinita con |r| < 1, S = a₁ / (1 - r), donde a₁ = 1 y r = 1/2.",
            explicacion: "S = 1 / (1 - 1/2) = 1 / (1/2) = 2."
        },
        {
            area: "Suma ➕",
            dibujo: "📐 Ángulos Notables:  sen(30°)  ➕  cos(60°)  ➕  tan(45°)",
            pregunta: "Calcula el valor numérico exacto de: sen(30°) + cos(60°) + tan(45°)",
            opciones: ["1", "2", "1.5", "3"],
            correcta: 1,
            pista: "Recuerda los valores notables: sen(30°) = 1/2, cos(60°) = 1/2, y tan(45°) = 1.",
            explicacion: "1/2 + 1/2 + 1 = 1 + 1 = 2."
        },

        // --- RESTA (LOGARITMOS, IDENTIDADES PITAGÓRICAS Y EXPONENCIALES) ---
        {
            area: "Resta ➖",
            dibujo: "🔢 Propiedad:  log₅(250)  ➖  log₅(2)  =  ❓",
            pregunta: "Aplica las propiedades de los logaritmos para calcular: log₅(250) - log₅(2)",
            opciones: ["log₅(248)", "3", "25", "5"],
            correcta: 1,
            pista: "La resta de logaritmos de igual base equivale al logaritmo del cociente: log₅(250 ÷ 2) = log₅(125).",
            explicacion: "log₅(250 / 2) = log₅(125) = 3, porque 5³ = 125."
        },
        {
            area: "Resta ➖",
            dibujo: "⚡ Identidad Pitagórica:  sec²(25°)  ➖  tan²(25°)",
            pregunta: "¿A qué es igual la expresión trigonométrica sec²(25°) - tan²(25°)?",
            opciones: ["0", "1", "sen²(25°)", "2"],
            correcta: 1,
            pista: "De la identidad 1 + tan²(θ) = sec²(θ), despeja sec²(θ) - tan²(θ).",
            explicacion: "sec²(θ) - tan²(θ) = 1 para todo ángulo donde estén definidas."
        },
        {
            area: "Resta ➖",
            dibujo: "🔋 Ecuación Exponencial:  3^(2x - 1) = 27  ➔  x = ❓",
            pregunta: "Resuelve la ecuación exponencial: 3^(2x - 1) = 27",
            opciones: ["1", "2", "3", "4"],
            correcta: 1,
            pista: "Expresa 27 como potencia de 3: 27 = 3³. Iguala los exponentes: 2x - 1 = 3.",
            explicacion: "2x - 1 = 3 ➔ 2x = 4 ➔ x = 2."
        },
        {
            area: "Resta ➖",
            dibujo: "⭕ Circunferencia:  (x - 3)² + (y + 2)² = 49",
            pregunta: "Dada la ecuación de la circunferencia (x - 3)² + (y + 2)² = 49, ¿cuáles son su centro C(h, k) y su radio r?",
            opciones: ["C(-3, 2) y r = 49", "C(3, -2) y r = 7", "C(3, 2) y r = 7", "C(-3, -2) y r = 49"],
            correcta: 1,
            pista: "Compara con (x - h)² + (y - k)² = r²: cambia los signos internos para el centro y saca √49 para el radio.",
            explicacion: "Centro = (3, -2) y radio r = √49 = 7."
        },

        // --- MULTIPLICACIÓN (LEY DE COSENOS, COMBINATORIA Y GEOMETRÍA) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🤝 Comité de 3 alumnos elegidos de un grupo de 6",
            pregunta: "¿De cuántas maneras distintas se puede elegir un comité de 3 representantes entre 6 candidatos? (Combinación C(6, 3))",
            opciones: ["18 maneras", "20 maneras", "120 maneras", "36 maneras"],
            correcta: 1,
            pista: "Como el orden no importa, usa C(6, 3) = (6 × 5 × 4) ÷ (3 × 2 × 1) = 120 ÷ 6.",
            explicacion: "C(6, 3) = 6! / (3! · 3!) = 20 comités posibles."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🍦 Cono recto: Radio r = 3 cm  |  Altura h = 8 cm",
            pregunta: "Calcula el volumen de un cono circular recto de radio r = 3 cm y altura h = 8 cm. (V = (1/3) · π · r² · h)",
            opciones: ["72π cm³", "24π cm³", "18π cm³", "36π cm³"],
            correcta: 1,
            pista: "El volumen del cono es la tercera parte del cilindro: (π × 3² × 8) ÷ 3 = (72π) ÷ 3.",
            explicacion: "V = (1/3) · π · 9 · 8 = 24π cm³."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📐 Identidad Recíproca:  sen(3x - 10°) · csc(50°) = 1",
            pregunta: "Si sen(3x - 10°) · csc(50°) = 1 (para ángulos agudos), ¿cuánto vale 'x'?",
            opciones: ["15°", "20°", "10°", "25°"],
            correcta: 1,
            pista: "El producto de seno por cosecante es 1 únicamente cuando ambos ángulos son iguales: 3x - 10° = 50°.",
            explicacion: "3x - 10° = 50° ➔ 3x = 60° ➔ x = 20°."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🔢 Logaritmo de potencia:  log₃(9⁴)  =  ❓",
            pregunta: "Calcula el valor de: log₃(9⁴)",
            opciones: ["36", "8", "12", "6"],
            correcta: 1,
            pista: "Baja el exponente multiplicando: 4 · log₃(9). Como 3² = 9, log₃(9) = 2.",
            explicacion: "4 × log₃(9) = 4 × 2 = 8."
        },

        // --- DIVISIÓN (CO-RAZONES, RECTA PERPENDICULAR Y PROBABILIDAD) ---
        {
            area: "División ➗",
            dibujo: "📐 Co-razones:  sen(2x + 10°) = cos(x + 20°)  ➔  x = ❓",
            pregunta: "Si sen(2x + 10°) = cos(x + 20°), halla el valor del ángulo agudo 'x'.",
            opciones: ["10°", "20°", "30°", "15°"],
            correcta: 1,
            pista: "El seno de un ángulo es igual al coseno de su complemento: ambos ángulos suman 90°. (2x + 10) + (x + 20) = 90.",
            explicacion: "3x + 30° = 90° ➔ 3x = 60° ➔ x = 20°."
        },
        {
            area: "División ➗",
            dibujo: "📉 Recta L₁: y = 2x + 5  |  Recta L₂ perpendicular ➔ m₂ = ❓",
            pregunta: "La recta L₁ tiene pendiente m₁ = 2. ¿Cuál es la pendiente m₂ de una recta L₂ perpendicular a L₁? (m₁ · m₂ = -1)",
            opciones: ["2", "-1/2", "-2", "1/2"],
            correcta: 1,
            pista: "Dos rectas perpendiculares tienen pendientes recíprocas y de signo opuesto: m₂ = -1 / m₁.",
            explicacion: "m₂ = -1 / 2 = -0.5."
        },
        {
            area: "División ➗",
            dibujo: "🪙 Moneda + 🎲 Dado  ➔  P(Cara y número 6) = ❓",
            pregunta: "Lanzas una moneda y un dado al mismo tiempo. ¿Cuál es la probabilidad de obtener Cara en la moneda y 6 en el dado?",
            opciones: ["1/8", "1/12", "2/8", "1/6"],
            correcta: 1,
            pista: "Como son eventos independientes, multiplica sus probabilidades: P(Cara) × P(6) = (1/2) × (1/6).",
            explicacion: "(1/2) × (1/6) = 1/12."
        },
        {
            area: "División ➗",
            dibujo: "🔢 Logaritmo fraccionario:  log₂(1/32)  =  ❓",
            pregunta: "¿Cuál es el valor de log₂(1/32)?",
            opciones: ["-4", "-5", "5", "-16"],
            correcta: 1,
            pista: "Expresa 1/32 como potencia de base 2: como 2⁵ = 32, entonces 1/32 = 2⁻⁵.",
            explicacion: "log₂(2⁻⁵) = -5."
        },

        // --- RAZONAMIENTO MATEMÁTICO, TRIGONOMETRÍA APLICADA Y LOGARITMOS ---
        {
            area: "Razonamiento 🧠",
            dibujo: "🗼 Torre: Sombra = 12 m  |  Ángulo de elevación = 45°",
            pregunta: "Desde un punto en el suelo a 12 metros de la base de una torre, se observa su cima con un ángulo de elevación de 45°. ¿Cuál es la altura de la torre?",
            opciones: ["6 m", "12 m", "12√2 m", "24 m"],
            correcta: 1,
            pista: "En un triángulo rectángulo de 45°, los dos catetos son iguales (tan 45° = 1 ➔ Altura / 12 = 1).",
            explicacion: "Altura = 12 × tan(45°) = 12 × 1 = 12 metros."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️ Ecuación Logarítmica:  log₃(2x - 1) = 2  ➔  x = ❓",
            pregunta: "Resuelve la ecuación logarítmica: log₃(2x - 1) = 2",
            opciones: ["3", "5", "4", "7"],
            correcta: 1,
            pista: "Convierte el logaritmo a forma exponencial: la base 3 elevada a 2 es igual al argumento (2x - 1 = 3²).",
            explicacion: "2x - 1 = 9 ➔ 2x = 10 ➔ x = 5."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🦠 Cultivo: se duplica cada hora | Inicio: 50 | Tras 4 h = ❓",
            pregunta: "Una población de 50 bacterias se duplica cada hora: P(t) = 50 · 2ᵗ. ¿Cuántas bacterias habrá al cabo de 4 horas?",
            opciones: ["400 bacterias", "800 bacterias", "200 bacterias", "1,600 bacterias"],
            correcta: 1,
            pista: "Evalúa P(4) = 50 × 2⁴ = 50 × 16.",
            explicacion: "50 × 16 = 800 bacterias."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 Fibonacci Modificada:  1,  1,  2,  3,  5,  8,  13,  21,  ❓",
            pregunta: "En la célebre sucesión de Fibonacci, cada término es la suma de los dos anteriores. ¿Qué número sigue después de 21?",
            opciones: ["29", "34", "33", "42"],
            correcta: 1,
            pista: "Suma los dos últimos términos visibles: 13 + 21.",
            explicacion: "13 + 21 = 34."
        }
    ],

    // 10 Lecturas Largas (4.º de Secundaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🧠📚⚖️🔍",
            textoLectura: "Para el filósofo de la ciencia Karl Popper, lo que distingue a una teoría genuinamente científica de una pseudociencia no es la cantidad de ejemplos que parecen confirmarla, sino su 'falsabilidad'; es decir, la posibilidad de diseñar un experimento o una observación capaz de refutarla si fuera falsa. Una hipótesis formulada de manera tan vaga que explica cualquier resultado posible resulta científicamente estéril porque nunca se arriesga a ser desmentida.",
            pregunta: "¿Qué condición exige Karl Popper para considerar científica una teoría?",
            opciones: ["Que sea aceptada por votación popular", "Que sea falsable, es decir, susceptible de ser puesta a prueba y potencialmente refutada por la evidencia", "Que sea imposible de verificar", "Que nunca cambie con el tiempo"],
            correcta: 1,
            pista: "Revisa la definición de 'falsabilidad' en la primera oración del párrafo.",
            explicacion: "El criterio de demarcación popperiano exige predicciones arriesgadas y comprobables empíricamente."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧬🔬✂️🌱",
            textoLectura: "La tecnología de edición genética CRISPR-Cas9 actúa como unas tijeras moleculares programables capaces de localizar una secuencia específica dentro del ADN de un ser vivo y cortarla o modificarla con precisión extraordinaria. Inspirada en un sistema natural de defensa que usan las bacterias contra los virus, esta herramienta abre posibilidades históricas para corregir enfermedades genéticas hereditarias y desarrollar cultivos resistentes a sequías, aunque también plantea profundos debates bioéticos sobre sus límites.",
            pregunta: "¿De dónde obtuvieron los científicos la inspiración biológica para desarrollar CRISPR-Cas9?",
            opciones: ["Del sistema nervioso de los delfines", "De un mecanismo inmunológico natural con el que las bacterias se defienden de los virus", "De la fotosíntesis de las algas", "De los cristales minerales"],
            correcta: 1,
            pista: "Lee el inicio de la segunda oración del texto.",
            explicacion: "CRISPR deriva del sistema inmunitario adaptativo bacteriano frente a bacteriófagos."
        },
        {
            area: "Lectura 📖",
            dibujo: "📉📈🏭🌍",
            textoLectura: "En economía, el 'costo de oportunidad' representa el valor de la mejor alternativa a la que renunciamos cada vez que tomamos una decisión. Debido a que los recursos —como el tiempo, el dinero o las materias primas— son escasos, elegir destinar un presupuesto público a construir una carretera implica renunciar temporalmente a invertir esos mismos fondos en hospitales o escuelas. Comprender este concepto permite evaluar racionalmente las prioridades.",
            pregunta: "¿Por qué existe el 'costo de oportunidad' en toda decisión económica o personal?",
            opciones: ["Porque los precios siempre suben", "Porque los recursos son limitados y elegir una opción obliga a descartar otras alternativas valiosas", "Porque los bancos cobran intereses", "Porque nadie planifica sus gastos"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "La escasez de recursos impone disyuntivas (trade-offs) en toda asignación de tiempo o capital."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌌🔭⚡💥",
            textoLectura: "En 1929, el astrónomo Edwin Hubble descubrió que casi todas las galaxias lejanas se están alejando de nosotros y que, cuanto más lejos se encuentra una galaxia, mayor es la velocidad con la que se separa. Esta observación demostró que el universo no es estático ni eterno en su forma actual, sino que se encuentra en continua expansión, lo que llevó a formular la teoría del Big Bang sobre su origen hace aproximadamente trece mil ochocientos millones de años.",
            pregunta: "¿Qué conclusión cosmológica se derivó directamente del hallazgo de Edwin Hubble?",
            opciones: ["Que la Tierra es el centro inmóvil del cosmos", "Que el universo está en expansión dinámica y tuvo un origen en el pasado", "Que las estrellas están pegadas a una esfera fija", "Que las galaxias chocan todas entre sí mañana"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "El corrimiento al rojo de las galaxias evidenció la expansión métrica del espacio."
        },
        {
            area: "Lectura 📖",
            dibujo: "🤖⚖️📊👤",
            textoLectura: "Aunque los algoritmos de inteligencia artificial suelen percibirse como jueces totalmente objetivos e imparciales, en realidad heredan los sesgos presentes en los datos históricos con los que fueron entrenados. Si un sistema de selección laboral aprende de registros antiguos donde predominaban ciertos grupos sociales, reproducirá esa misma discriminación de manera automatizada. Por ello, la auditoría ética de los datos es indispensable.",
            pregunta: "¿Cuál es la tesis principal que defiende el autor en este fragmento?",
            opciones: ["Que los algoritmos nunca cometen errores", "Que la inteligencia artificial puede reproducir prejuicios humanos si se entrena con datos históricos sesgados", "Que debemos eliminar todas las computadoras", "Que las matemáticas son injustas"],
            correcta: 1,
            pista: "Resume la idea central expresada en la primera y segunda oración.",
            explicacion: "La neutralidad aparente del código depende de la calidad y equidad de sus datos de entrenamiento."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌊🌡️🐠🪸",
            textoLectura: "Los arrecifes de coral ocupan menos del uno por ciento del fondo oceánico, pero albergan a cerca de una cuarta parte de todas las especies marinas conocidas. Sin embargo, cuando la temperatura del mar aumenta apenas uno o dos grados por encima de lo normal durante semanas, los corales expulsan a las microalgas simbióticas que les dan color y alimento, sufriendo un fenómeno llamado 'blanqueamiento' que puede provocar la muerte de todo el ecosistema.",
            pregunta: "¿Por qué la desaparición de los arrecifes de coral tendría un impacto desproporcionado en los océanos?",
            opciones: ["Porque producen toda la sal del mar", "Porque, pese a ocupar un área mínima, sostienen cerca del 25% de la biodiversidad marina", "Porque detienen los tsunamis en todos los continentes", "Porque enfrían las corrientes polares"],
            correcta: 1,
            pista: "Lee la primera oración del párrafo.",
            explicacion: "Su altísima densidad de biodiversidad los convierte en ecosistemas clave del océano."
        },
        {
            area: "Lectura 📖",
            dibujo: "📜🖋️🗽⚖️",
            textoLectura: "Durante la Ilustración europea del siglo XVIII, pensadores como Montesquieu, Voltaire y Rousseau cuestionaron el poder absoluto de los reyes y defendieron el uso de la razón, la libertad de expresión y la soberanía popular. Sus ideas inspiraron tanto la Independencia de los Estados Unidos como la Revolución Francesa y las gestas emancipadoras de Hispanoamérica, transformando a los súbditos en ciudadanos con derechos.",
            pregunta: "¿Cuál fue la transformación política fundamental impulsada por el pensamiento ilustrado?",
            opciones: ["El regreso al feudalismo medieval", "El paso del absolutismo monárquico hacia repúblicas basadas en la razón, las leyes y los derechos ciudadanos", "La prohibición de las universidades", "El aislamiento comercial entre países"],
            correcta: 1,
            pista: "Lee la primera y última oración del texto.",
            explicacion: "La Ilustración fundamentó el constitucionalismo moderno y la soberanía ciudadana."
        },
        {
            area: "Lectura 📖",
            dibujo: "⚛️☀️🔋🌍",
            textoLectura: "A diferencia de las centrales nucleares actuales que funcionan mediante fisión —dividiendo átomos pesados como el uranio y generando residuos radiactivos de larga duración—, la fusión nuclear busca replicar la reacción que ocurre en el interior del Sol: unir núcleos ligeros de hidrógeno para liberar inmensas cantidades de energía limpia sin emisiones de carbono ni riesgo de fusión del núcleo.",
            pregunta: "¿En qué se diferencia físicamente la fusión nuclear de la fisión nuclear?",
            opciones: ["La fusión divide átomos pesados y la fisión los congela", "La fisión divide átomos pesados mientras que la fusión une núcleos ligeros liberando energía más limpia", "Ambas utilizan carbón mineral", "No existe diferencia entre ambos procesos"],
            correcta: 1,
            pista: "Compara ambas definiciones en la única oración del párrafo.",
            explicacion: "La fusión combina isótopos ligeros (deuterio/tritio) imitando los procesos estelares."
        },
        {
            area: "Lectura 📖",
            dibujo: "🗣️🌍📖🔄",
            textoLectura: "Cada lengua humana no es únicamente un código de palabras para nombrar objetos, sino una forma particular de categorizar el tiempo, el espacio, la naturaleza y las relaciones sociales. En el Perú se hablan cuarenta y ocho lenguas originarias, como el quechua, el aimara y el asháninka, que conservan conocimientos ecológicos y medicinales milenarios. Cuando una lengua desaparece, la humanidad pierde una biblioteca irreemplazable.",
            pregunta: "¿Qué sentido tiene la metáfora final 'la humanidad pierde una biblioteca irreemplazable'?",
            opciones: ["Que se queman edificios escolares", "Que con cada lengua extinta desaparecen saberes ancestrales y una visión única del mundo", "Que hay demasiados idiomas en el mundo", "Que solo se debe hablar un idioma"],
            correcta: 1,
            pista: "Relaciona la segunda oración sobre los conocimientos conservados con la metáfora final.",
            explicacion: "Destaca el valor patrimonial, cognitivo y cultural de la diversidad lingüística."
        },
        {
            area: "Lectura 📖",
            dibujo: "⏱️🧠💤⚡",
            textoLectura: "El ritmo circadiano es el reloj biológico interno de aproximadamente veinticuatro horas que regula nuestros ciclos de sueño, vigilia, temperatura corporal y secreción hormonal. Este reloj se sincroniza principalmente con la luz natural del amanecer y la oscuridad de la noche. Exponerse a la luz azul intensa de pantallas justo antes de dormir engaña al cerebro haciéndole creer que aún es de día y retrasa la liberación de melatonina, la hormona del sueño.",
            pregunta: "¿Por qué usar pantallas brillantes antes de acostarse dificulta conciliar el sueño?",
            opciones: ["Porque calientan demasiado la habitación", "Porque su luz azul inhibe la producción de melatonina al simular la luz del día", "Porque aceleran los latidos del corazón por el sonido", "Porque borran el ritmo circadiano para siempre"],
            correcta: 1,
            pista: "Lee la última oración del párrafo.",
            explicacion: "La luz de longitud de onda corta suprime la secreción pineal de melatonina."
        }
    ]
};
