// datos/sec5.js - Aula 11: 5.º de Secundaria / Pre-Universitario (Límites, Derivadas, Matrices, Complejos, Vectores y Lectura Crítica)
const nivel11_Sec5 = {
    id: 11,
    nombre: "5.º de Secundaria - Nivel Pre-Universitario",

    matematicas: [
        // --- SUMA (SUMATORIAS SIGMA, VECTORES, COMPLEJOS Y LÍMITES) ---
        {
            area: "Suma ➕",
            dibujo: "∑ Notación Sigma:  ∑ (2k + 1)  desde k = 1 hasta 5",
            pregunta: "Calcula el valor de la sumatoria: ∑ (2k + 1) para k = 1 hasta k = 5",
            opciones: ["25", "35", "30", "45"],
            correcta: 1,
            pista: "Evalúa para k=1,2,3,4,5: son los primeros 5 números impares mayores que 1 (3 + 5 + 7 + 9 + 11).",
            explicacion: "3 + 5 + 7 + 9 + 11 = 35."
        },
        {
            area: "Suma ➕",
            dibujo: "🧭 Vectores:  u = (3, -2)   |   v = (5, 8)  ➔  |u + v| = ❓",
            pregunta: "Dados los vectores u = (3, -2) y v = (5, 8), calcula el módulo del vector resultante |u + v|",
            opciones: ["14", "10", "8", "12"],
            correcta: 1,
            pista: "Suma componente a componente: u + v = (3+5, -2+8) = (8, 6). Luego halla su módulo √(8² + 6²).",
            explicacion: "u + v = (8, 6) ➔ |u + v| = √(64 + 36) = √100 = 10."
        },
        {
            area: "Suma ➕",
            dibujo: "⚡ Números Complejos:  (4 + 3i)  ➕  (2 - 7i)",
            pregunta: "Suma los números complejos z₁ = 4 + 3i  y  z₂ = 2 - 7i  (donde i² = -1)",
            opciones: ["6 + 10i", "6 - 4i", "2 - 4i", "6 + 4i"],
            correcta: 1,
            pista: "Suma parte real con parte real (4 + 2) y parte imaginaria con parte imaginaria (3i - 7i).",
            explicacion: "(4 + 2) + (3 - 7)i = 6 - 4i."
        },
        {
            area: "Suma ➕",
            dibujo: "📉 Límite:  lim (x ➔ 3)  (x² - 9) / (x - 3)",
            pregunta: "Calcula el límite evitando la indeterminación 0/0: lim (x ➔ 3) [ (x² - 9) / (x - 3) ]",
            opciones: ["0", "6", "3", "No existe"],
            correcta: 1,
            pista: "Factoriza el numerador: (x + 3)(x - 3) / (x - 3) = x + 3. Ahora evalúa en x = 3.",
            explicacion: "lim (x ➔ 3) (x + 3) = 3 + 3 = 6."
        },

        // --- RESTA (DETERMINANTES 2x2, PRODUCTO ESCALAR Y FUNCIONES) ---
        {
            area: "Resta ➖",
            dibujo: "🔢 Matriz A = [ 5   3 ;  2   4 ]  ➔  det(A) = ❓",
            pregunta: "Calcula el determinante de la matriz 2×2:  A = [[5, 3], [2, 4]]",
            opciones: ["26", "14", "-14", "10"],
            correcta: 1,
            pista: "Multiplica la diagonal principal y réstale el producto de la diagonal secundaria: (5 × 4) - (3 × 2).",
            explicacion: "det(A) = (5 × 4) - (3 × 2) = 20 - 6 = 14."
        },
        {
            area: "Resta ➖",
            dibujo: "🧭 Producto Escalar:  a = (4, 5)  ·  b = (3, -2)",
            pregunta: "Calcula el producto escalar (producto punto) de los vectores a = (4, 5) y b = (3, -2)",
            opciones: ["22", "2", "-2", "10"],
            correcta: 1,
            pista: "Multiplica primeras componentes más segundas componentes: (4 × 3) + (5 × -2).",
            explicacion: "12 + (-10) = 2."
        },
        {
            area: "Resta ➖",
            dibujo: "⚡ Números Complejos:  (3 + 2i)(3 - 2i)  =  ❓",
            pregunta: "Calcula el producto de un complejo por su conjugado: (3 + 2i)(3 - 2i)  (Recuerda: i² = -1)",
            opciones: ["5", "13", "9 - 4i", "7"],
            correcta: 1,
            pista: "Aplica diferencia de cuadrados: 3² - (2i)² = 9 - 4i². Como i² = -1, queda 9 - 4(-1) = 9 + 4.",
            explicacion: "9 - 4(-1) = 9 + 4 = 13."
        },
        {
            area: "Resta ➖",
            dibujo: "🔍 Función Racional:  f(x) = (2x + 1) / (x² - 25)",
            pregunta: "¿Qué valores de 'x' NO pertenecen al dominio de la función real f(x) = (2x + 1) / (x² - 25)?",
            opciones: ["Solo x = 25", "x = 5 y x = -5", "Solo x = 5", "x = 0 y x = 5"],
            correcta: 1,
            pista: "El denominador no puede ser cero: x² - 25 = 0 ➔ x² = 25 ➔ x = ±5.",
            explicacion: "Dominio = ℝ - {-5, 5}."
        },

        // --- MULTIPLICACIÓN (DERIVADAS, PERMUTACIONES Y CRECIMIENTO) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "📈 Derivada:  f(x) = 4x³ - 5x² + 7x - 9  ➔  f'(2) = ❓",
            pregunta: "Halla la derivada f'(x) de f(x) = 4x³ - 5x² + 7x - 9 y evalúala en x = 2",
            opciones: ["28", "35", "27", "42"],
            correcta: 1,
            pista: "Deriva término a término: f'(x) = 12x² - 10x + 7. Ahora reemplaza x = 2: 12(4) - 10(2) + 7.",
            explicacion: "f'(2) = 48 - 20 + 7 = 35."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🪑 5 amigos alrededor de una mesa circular  ➔  P_c(5) = ❓",
            pregunta: "¿De cuántas maneras distintas pueden sentarse 5 amigos alrededor de una mesa circular? (Permutación circular)",
            opciones: ["120 maneras", "24 maneras", "60 maneras", "20 maneras"],
            correcta: 1,
            pista: "En una mesa circular se fija una persona como referencia: P_c(n) = (n - 1)! = (5 - 1)! = 4!",
            explicacion: "4! = 4 × 3 × 2 × 1 = 24 maneras."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📐 Identidad Ángulo Doble:  2 · sen(15°) · cos(15°) = ❓",
            pregunta: "Usa la identidad del seno del ángulo doble [sen(2θ) = 2·sen(θ)·cos(θ)] para calcular: 2 · sen(15°) · cos(15°)",
            opciones: ["1", "1/2", "√3/2", "√2/2"],
            correcta: 1,
            pista: "2 · sen(15°) · cos(15°) = sen(2 × 15°) = sen(30°).",
            explicacion: "sen(30°) = 1/2."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🚀 Móvil:  s(t) = 3t² + 4t  ➔  Velocidad en t = 5 s",
            pregunta: "La posición de una partícula está dada por s(t) = 3t² + 4t (en metros). ¿Cuál es su velocidad instantánea v(t) = s'(t) a los 5 segundos?",
            opciones: ["95 m/s", "34 m/s", "30 m/s", "19 m/s"],
            correcta: 1,
            pista: "La velocidad es la primera derivada de la posición: v(t) = s'(t) = 6t + 4. Evalúa en t = 5.",
            explicacion: "v(5) = 6(5) + 4 = 30 + 4 = 34 m/s."
        },

        // --- DIVISIÓN (LÍMITES AL INFINITO, PROBABILIDAD Y CÓNICAS) ---
        {
            area: "División ➗",
            dibujo: "♾️ Límite al Infinito:  lim (x ➔ ∞)  (6x² + 5x - 1) / (2x² - 3x + 4)",
            pregunta: "Calcula el límite cuando x tiende al infinito: lim (x ➔ ∞) [ (6x² + 5x - 1) / (2x² - 3x + 4) ]",
            opciones: ["0", "3", "6", "Infinito"],
            correcta: 1,
            pista: "Cuando numerador y denominador tienen el mismo grado máximo (x²), el límite es el cociente de sus coeficientes principales: 6 ÷ 2.",
            explicacion: "6 / 2 = 3."
        },
        {
            area: "División ➗",
            dibujo: "🎲 Urna: 4 Rojas y 6 Azules (Sin reposición: 2 extracciones)",
            pregunta: "Una urna contiene 4 bolas rojas y 6 azules. Si extraes 2 bolas seguidas SIN devolución, ¿cuál es la probabilidad de que ambas sean rojas?",
            opciones: ["4/25", "2/15", "1/5", "8/90"],
            correcta: 1,
            pista: "Primera roja: 4/10. Como no se devuelve, quedan 3 rojas de 9 bolas: (4/10) × (3/9) = 12/90.",
            explicacion: "12 / 90 = 2 / 15."
        },
        {
            area: "División ➗",
            dibujo: "🧪 Logaritmo Natural:  ln(e⁵)  ➕  e^(ln 4)  =  ❓",
            pregunta: "Calcula el valor exacto de la expresión: ln(e⁵) + e^(ln 4)",
            opciones: ["20", "9", "5 + 4e", "1"],
            correcta: 1,
            pista: "El logaritmo neperiano ln y la exponencial e son funciones inversas: ln(e⁵) = 5 y e^(ln 4) = 4.",
            explicacion: "5 + 4 = 9."
        },
        {
            area: "División ➗",
            dibujo: "📐 Parábola Vertical:  x² = 12y  ➔  Foco F = (0, p)",
            pregunta: "Dada la ecuación canónica de la parábola x² = 12y, ¿cuáles son las coordenadas de su foco? (x² = 4py)",
            opciones: ["(0, 12)", "(0, 3)", "(3, 0)", "(0, -3)"],
            correcta: 1,
            pista: "Iguala 4p = 12 ➔ p = 3. Como x está al cuadrado, se abre hacia arriba sobre el eje Y.",
            explicacion: "4p = 12 ➔ p = 3 ➔ Foco = (0, 3)."
        },

        // --- RAZONAMIENTO MATEMÁTICO (OPTIMIZACIÓN, LÓGICA Y SUFICIENCIA) ---
        {
            area: "Razonamiento 🧠",
            dibujo: "🌾 Perímetro cerca = 40 m  ➔  Área máxima rectangular = ❓",
            pregunta: "Con 40 metros de malla metálica quieres cercar un terreno rectangular de ÁREA MÁXIMA. ¿Cuál será esa área máxima?",
            opciones: ["96 m²", "100 m²", "84 m²", "120 m²"],
            correcta: 1,
            pista: "Para un perímetro fijo, el rectángulo de mayor área es siempre un cuadrado: 40 ÷ 4 = 10 m de lado.",
            explicacion: "Lado = 10 m ➔ Área máxima = 10 × 10 = 100 m²."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🧠 Lógica Proposicional:  ~(p ➔ q)  equivale a...",
            pregunta: "En lógica proposicional, ¿a qué equivale la negación de una implicación: ~(p ➔ q)?",
            opciones: ["~p ∧ ~q", "p ∧ ~q", "~p ∨ q", "q ➔ p"],
            correcta: 1,
            pista: "Una promesa 'Si p entonces q' solo es falsa cuando se cumple 'p' (antecedente verdadero) y NO se cumple 'q' (consecuente falso).",
            explicacion: "Como (p ➔ q) ≡ (~p ∨ q), su negación por Ley de De Morgan es (p ∧ ~q)."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "📊 Media = 15 (de 4 números)  |  Se añade el 25  ➔  Nueva media = ❓",
            pregunta: "El promedio aritmético de 4 números es 15. Si se agrega un quinto número igual a 25, ¿cuál es el nuevo promedio de los 5 números?",
            opciones: ["20", "17", "16", "18"],
            correcta: 1,
            pista: "La suma de los 4 primeros es 4 × 15 = 60. Súmale 25 (da 85) y divide entre 5 números.",
            explicacion: "(60 + 25) ÷ 5 = 85 ÷ 5 = 17."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⏳ Reloj: ¿Cada cuántos minutos se superponen las manecillas?",
            pregunta: "Después de las 12:00 en punto, ¿en cuántos minutos exactos vuelven a superponerse el horario y el minutero?",
            opciones: ["60 min", "65 5/11 min", "65 min", "72 min"],
            correcta: 1,
            pista: "El minutero avanza 12 divisiones por cada 1 del horario (diferencia = 11 divisiones). Para dar una vuelta de ventaja (60 min): 60 × (12/11) = 720/11.",
            explicacion: "720 / 11 = 65 5/11 minutos (aprox. a la 1:05:27)."
        }
    ],

    // 10 Lecturas Largas (5.º de Secundaria - Nivel Pre-Universitario)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🧠📐🌌🔬",
            textoLectura: "En su obra 'La estructura de las revoluciones científicas', el historiador y físico Thomas Kuhn sostuvo que la ciencia no avanza únicamente mediante la acumulación lineal y pacífica de datos, sino a través de crisis periódicas llamadas 'cambios de paradigma'. Mientras un paradigma dominante resuelve los problemas habituales, reina la 'ciencia normal'; pero cuando se acumulan anomalías inexplicables, surge una revolución conceptual —como el paso del geocentrismo de Ptolomeo al heliocentrismo de Copérnico— que transforma por completo la visión del mundo.",
            pregunta: "¿Qué desencadena un 'cambio de paradigma' según el planteamiento de Thomas Kuhn?",
            opciones: ["El acuerdo unánime de todos los políticos", "La acumulación de anomalías que el modelo científico vigente ya no logra explicar", "La desaparición de todas las universidades", "El abandono de la observación experimental"],
            correcta: 1,
            pista: "Lee la segunda oración del texto sobre qué ocurre cuando se acumulan anomalías.",
            explicacion: "Las crisis explicativas provocadas por anomalías persistentes impulsan revoluciones teóricas."
        },
        {
            area: "Lectura 📖",
            dibujo: "⚖️🗣️🏛️📜",
            textoLectura: "La paradoja de la tolerancia, formulada por el filósofo Karl Popper, advierte que si una sociedad es ilimitadamente tolerante, incluso con aquellos movimientos que predican la intolerancia y la destrucción de los derechos ajenos, su capacidad de ser tolerante terminará siendo destruida por los intolerantes. Por consiguiente, para preservar una sociedad abierta y pluralista, la democracia debe reservarse el derecho legítimo de defender sus principios frente a quienes buscan abolirlos.",
            pregunta: "¿Cuál es la tesis central que sustenta la 'paradoja de la tolerancia'?",
            opciones: ["Que debemos tolerar cualquier acto de violencia sin límites", "Que la tolerancia democrática necesita límites racionales frente a quienes buscan destruir la libertad y los derechos de los demás", "Que las leyes son innecesarias en una sociedad abierta", "Que todas las opiniones tienen idéntico valor jurídico"],
            correcta: 1,
            pista: "Analiza la conclusión en la última oración del párrafo.",
            explicacion: "La autoconservación de una sociedad libre exige proteger el marco de derechos fundamentales."
        },
        {
            area: "Lectura 📖",
            dibujo: "⚛️🌊🔬❓",
            textoLectura: "En la física clásica de Newton, si conocemos la posición y velocidad exactas de un objeto, podemos predecir su trayectoria futura con certeza absoluta. Sin embargo, al descender al mundo subatómico de los electrones y fotones, el principio de incertidumbre de Werner Heisenberg reveló una limitación fundamental de la naturaleza: es físicamente imposible medir simultáneamente y con precisión arbitraria la posición y el momento lineal de una partícula cuántica, pues el propio acto de observarla perturba su estado.",
            pregunta: "¿Qué ruptura conceptual introdujo el principio de incertidumbre de Heisenberg respecto a la física clásica?",
            opciones: ["Demostró que los electrones no existen", "Estableció que a escala cuántica existe un límite intrínseco para conocer simultáneamente posición y momento con precisión absoluta", "Probó que la gravedad no actúa sobre los átomos", "Sustituyó las matemáticas por la intuición"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "La mecánica cuántica reemplaza el determinismo clásico absoluto por distribuciones probabilísticas."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌍📈🌱⚖️",
            textoLectura: "El desarrollo sostenible se define como aquel modelo capaz de satisfacer las necesidades de las generaciones presentes sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas. Lejos de oponer el progreso económico al cuidado ambiental, este enfoque propone integrar tres dimensiones interdependientes: crecimiento económico eficiente, inclusión social equitativa y preservación de los ecosistemas naturales.",
            pregunta: "¿Cuál es la relación que plantea el texto entre crecimiento económico y protección ambiental?",
            opciones: ["Son objetivos irreconciliables donde uno debe destruir al otro", "Son dimensiones complementarias e interdependientes dentro del desarrollo sostenible", "El ambiente solo importa cuando ya no quedan recursos", "La inclusión social impide el crecimiento económico"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "El desarrollo sostenible articula viabilidad económica, equidad social y equilibrio ecológico."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧬🧠🤖💭",
            textoLectura: "El célebre experimento mental de la 'Habitación China', propuesto por el filósofo John Searle, cuestiona que una computadora pueda poseer verdadera comprensión consciente. Searle imagina a una persona que no sabe chino encerrada en un cuarto siguiendo un manual perfecto de reglas para combinar símbolos chinos y responder preguntas en ese idioma. Aunque desde fuera parezca que domina el chino, la persona solo manipula símbolos sintácticamente sin comprender jamás su significado semántico.",
            pregunta: "¿Qué distinción fundamental busca demostrar John Searle mediante la 'Habitación China'?",
            opciones: ["Que aprender chino es imposible para los humanos", "La diferencia entre manipular símbolos siguiendo reglas (sintaxis) y comprender genuinamente su significado (semántica/conciencia)", "Que las computadoras sienten emociones profundas", "Que los diccionarios son inútiles"],
            correcta: 1,
            pista: "Revisa la última oración del texto.",
            explicacion: "Searle argumenta que el procesamiento algorítmico formal no equivale por sí solo a intencionalidad o conciencia."
        },
        {
            area: "Lectura 📖",
            dibujo: "📚🖋️🇵🇪🌎",
            textoLectura: "En sus ensayos sobre la realidad peruana, diversos pensadores del siglo XX coincidieron en que la verdadera integración nacional exige superar las fracturas históricas entre la costa, los Andes y la Amazonía. Reconocer la diversidad cultural y lingüística del país no debilita la unidad de la república; por el contrario, la fortalece al convertir la pluralidad en una fuente de creatividad, diálogo intercultural y ciudadanía plena.",
            pregunta: "¿Cuál es la idea medular que defiende el fragmento?",
            opciones: ["Que la diversidad cultural divide irremediablemente al país", "Que el reconocimiento e integración de la pluralidad cultural fortalece la unidad nacional y la ciudadanía", "Que todas las regiones deben abandonar sus tradiciones", "Que solo la costa impulsa el desarrollo"],
            correcta: 1,
            pista: "Lee la segunda oración del texto.",
            explicacion: "Plantea la interculturalidad como fundamento de cohesión democrática."
        },
        {
            area: "Lectura 📖",
            dibujo: "📊🧠🎯💡",
            textoLectura: "La heurística de disponibilidad es un atajo mental mediante el cual juzgamos la probabilidad de que ocurra un evento según la facilidad con que nos vienen ejemplos a la mente. Así, tras ver noticias dramáticas sobre un accidente aéreo, muchas personas sienten más temor de subir a un avión que de viajar en automóvil, pese a que las estadísticas demuestran que el transporte aéreo es decenas de veces más seguro por kilómetro recorrido.",
            pregunta: "¿Por qué la heurística de disponibilidad distorsiona nuestra percepción del riesgo?",
            opciones: ["Porque las estadísticas siempre mienten", "Porque confundimos la vivacidad emocional o mediática de un recuerdo con su verdadera frecuencia estadística", "Porque los automóviles nunca sufren accidentes", "Porque olvidamos todo lo que vemos en televisión"],
            correcta: 1,
            pista: "Relaciona la definición inicial con el ejemplo del avión y el automóvil.",
            explicacion: "La saliencia emocional de los eventos excepcionales sesga la estimación racional de probabilidades."
        },
        {
            area: "Lectura 📖",
            dibujo: "🔋☀️⚡🌐",
            textoLectura: "Uno de los mayores desafíos técnicos de las energías renovables como la solar y la eólica es su intermitencia: el Sol no brilla de noche y el viento no sopla con intensidad constante. Para que una red eléctrica funcione al cien por ciento con fuentes limpias, resulta imprescindible desarrollar sistemas de almacenamiento a gran escala —como baterías de flujo, bombeo hidroeléctrico e hidrógeno verde— que guarden los excedentes para suministrarlos en horas de alta demanda.",
            pregunta: "¿Qué solución técnica propone el texto para resolver la intermitencia de la energía solar y eólica?",
            opciones: ["Volver exclusivamente al uso de carbón", "Implementar tecnologías de almacenamiento energético a gran escala para equilibrar oferta y demanda", "Apagar las ciudades durante la noche", "Construir paneles solares subterráneos"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "El almacenamiento energético desacopla la generación variable del consumo continuo."
        },
        {
            area: "Lectura 📖",
            dibujo: "🎭🏛️📖✨",
            textoLectura: "En la tragedia griega clásica, el héroe no cae en desgracia por simple mala suerte, sino a menudo por la 'hybris': una desmesura o orgullo excesivo que lo lleva a creerse por encima de las leyes humanas y de los límites de su propia condición mortal. Al representar las consecuencias dolorosas de esa ceguera, el teatro ateniense cumplía una función educativa y cívica, invitando a los ciudadanos a cultivar la prudencia y el autoconocimiento.",
            pregunta: "¿Qué función cívica cumplía la representación de la 'hybris' en el teatro griego antiguo?",
            opciones: ["Fomentar la arrogancia entre los gobernantes", "Advertir sobre los peligros de la soberbia desmedida y promover la prudencia ciudadana", "Entretener únicamente a los extranjeros", "Criticar la agricultura"],
            correcta: 1,
            pista: "Lee la última oración del texto.",
            explicacion: "La catarsis trágica actuaba como pedagogía ética y política en la polis."
        },
        {
            area: "Lectura 📖",
            dibujo: "🔬🌌🧬⏳",
            textoLectura: "La ciencia no ofrece dogmas absolutos ni verdades definitivas cerradas a la revisión; su mayor fortaleza reside precisamente en su capacidad de autocorrección. Cada modelo científico representa la mejor explicación disponible según la evidencia actual, siempre abierta a ser refinada o reemplazada cuando nuevos instrumentos revelan fenómenos antes invisibles. Lejos de ser una debilidad, esa humildad epistémica es el motor de todo progreso del conocimiento.",
            pregunta: "¿Por qué sostiene el autor que la revisabilidad de la ciencia es su mayor fortaleza?",
            opciones: ["Porque demuestra que los científicos nunca saben nada", "Porque permite corregir errores, integrar nuevas evidencias y perfeccionar continuamente nuestra comprensión de la realidad", "Porque evita hacer experimentos", "Porque convierte la ciencia en una opinión personal"],
            correcta: 1,
            pista: "Lee la segunda y tercera oración del párrafo.",
            explicacion: "La falsabilidad y autocorrección garantizan la evolución objetiva del saber científico."
        }
    ]
};
