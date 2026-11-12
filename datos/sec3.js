// datos/sec3.js - Aula 9: 3.º de Secundaria (Ecuaciones Cuadráticas, Tales, Progresiones, Combinatoria y Lecturas)
const nivel9_Sec3 = {
    id: 9,
    nombre: "3.º de Secundaria - Razonamiento Avanzado",

    matematicas: [
        // --- SUMA (PROGRESIONES ARITMÉTICAS, CARDANO-VIETA Y PROBABILIDAD) ---
        {
            area: "Suma ➕",
            dibujo: "🔢 Serie:  2 + 4 + 6 + 8 + ... + 40  =  ❓",
            pregunta: "Calcula la suma de los primeros 20 números pares positivos: 2 + 4 + 6 + ... + 40",
            opciones: ["400", "420", "380", "440"],
            correcta: 1,
            pista: "Usa la fórmula de suma aritmética: S = ((Primero + Último) ÷ 2) × Cantidad de términos = ((2 + 40) ÷ 2) × 20.",
            explicacion: "S = (42 ÷ 2) × 20 = 21 × 20 = 420 (o n(n+1) = 20 × 21 = 420)."
        },
        {
            area: "Suma ➕",
            dibujo: "⚖️ Ecuación:  2x² - 10x + 7 = 0  ➔  x₁ + x₂ = ❓",
            pregunta: "Sin resolver la ecuación cuadrática 2x² - 10x + 7 = 0, calcula la suma de sus dos raíces (x₁ + x₂ = -b/a)",
            opciones: ["-5", "5", "7/2", "10"],
            correcta: 1,
            pista: "Por el Teorema de Cardano-Vieta, en ax² + bx + c = 0, la suma de raíces es -b/a = -(-10)/2.",
            explicacion: "x₁ + x₂ = -(-10) / 2 = 10 / 2 = 5."
        },
        {
            area: "Suma ➕",
            dibujo: "🌿 Racionaliza y suma:  6/√3  ➕  √3",
            pregunta: "Simplifica y suma la expresión: (6 / √3) + √3",
            opciones: ["7√3", "3√3", "2√3", "9/√3"],
            correcta: 1,
            pista: "Racionaliza 6/√3 multiplicando arriba y abajo por √3: (6√3)/3 = 2√3. Ahora suma 2√3 + √3.",
            explicacion: "2√3 + √3 = 3√3."
        },
        {
            area: "Suma ➕",
            dibujo: "🎲 Dos dados lanzados  ➔  P(Suma = 7) = ❓",
            pregunta: "Si lanzas dos dados simultáneamente, ¿cuál es la probabilidad de que la suma de sus puntos sea exactamente 7?",
            opciones: ["1/12", "1/6", "7/36", "1/9"],
            correcta: 1,
            pista: "Hay 36 combinaciones posibles (6×6). Las que suman 7 son 6: (1,6), (2,5), (3,4), (4,3), (5,2) y (6,1).",
            explicacion: "P = 6 / 36 = 1 / 6."
        },

        // --- RESTA (DISCRIMINANTE, ÁREAS SOMBREADAS Y DISTANCIA) ---
        {
            area: "Resta ➖",
            dibujo: "🧮 Discriminante:  Δ = b² - 4ac  en  x² - 6x + 5 = 0",
            pregunta: "Calcula el discriminante (Δ = b² - 4ac) de la ecuación cuadrática: x² - 6x + 5 = 0",
            opciones: ["56", "16", "-16", "26"],
            correcta: 1,
            pista: "Identifica a = 1, b = -6, c = 5. Sustituye en (-6)² - 4(1)(5).",
            explicacion: "Δ = (-6)² - 4(1)(5) = 36 - 20 = 16."
        },
        {
            area: "Resta ➖",
            dibujo: "⬛ Cuadrado lado 10 cm  ➖  ⚪ Círculo inscrito (r = 5 cm)",
            pregunta: "Un círculo está inscrito dentro de un cuadrado de lado 10 cm. ¿Cuál es el área de las esquinas sobrantes? (A_cuad - A_círc)",
            opciones: ["100 - 10π", "100 - 25π", "25 - 100π", "100 - 50π"],
            correcta: 1,
            pista: "Área del cuadrado = 10² = 100. Como el diámetro es 10, el radio es 5, y Área del círculo = π(5²) = 25π.",
            explicacion: "Área sombreada = 100 - 25π cm²."
        },
        {
            area: "Resta ➖",
            dibujo: "📍 Plano Cartesiano:  A(2, 3)  y  B(6, 6)  ➔  Distancia = ❓",
            pregunta: "Halla la distancia entre los puntos A(2, 3) y B(6, 6) en el plano cartesiano. (d = √[(x₂-x₁)² + (y₂-y₁)²])",
            opciones: ["7", "5", "25", "4"],
            correcta: 1,
            pista: "Diferencia en x: 6 - 2 = 4. Diferencia en y: 6 - 3 = 3. Aplica Pitágoras: √(4² + 3²).",
            explicacion: "d = √(4² + 3²) = √(16 + 9) = √25 = 5 unidades."
        },
        {
            area: "Resta ➖",
            dibujo: "🏷️ Dos descuentos sucesivos del 20% y 10% sobre S/ 100",
            pregunta: "A un artículo de S/ 100 se le aplican dos descuentos sucesivos del 20% y luego del 10%. ¿Cuál es el precio final?",
            opciones: ["S/ 70", "S/ 72", "S/ 68", "S/ 75"],
            correcta: 1,
            pista: "Primer descuento (20% de 100 = 20) ➔ queda en S/ 80. Segundo descuento: 10% de 80 = 8 ➔ 80 - 8.",
            explicacion: "100 × 0.80 × 0.90 = S/ 72 (equivale a un descuento único del 28%)."
        },

        // --- MULTIPLICACIÓN (TALES, COMBINATORIA Y VOLUMEN) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "📐 Teorema de Tales:  3 / 5  =  x / 15",
            pregunta: "Por semejanza de triángulos se cumple la proporción: 3 / 5 = x / 15. ¿Cuánto vale 'x'?",
            opciones: ["10", "9", "12", "8"],
            correcta: 1,
            pista: "Multiplica en aspa: 5x = 3 × 15 (45), y divide 45 ÷ 5.",
            explicacion: "x = (3 × 15) ÷ 5 = 45 ÷ 5 = 9."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🏆 Podio de 3 puestos (Oro, Plata, Bronce) con 5 atletas",
            pregunta: "¿De cuántas maneras distintas pueden repartirse las medallas de Oro, Plata y Bronce entre 5 finalistas?",
            opciones: ["15 maneras", "60 maneras", "120 maneras", "20 maneras"],
            correcta: 1,
            pista: "Para el Oro hay 5 opciones, para Plata quedan 4 opciones y para Bronce quedan 3 opciones: 5 × 4 × 3.",
            explicacion: "Variación V(5,3) = 5 × 4 × 3 = 60 maneras."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🛢️ Cilindro: Radio r = 3 cm  |  Altura h = 10 cm",
            pregunta: "Calcula el volumen de un cilindro recto de radio r = 3 cm y altura h = 10 cm. (V = π · r² · h)",
            opciones: ["30π cm³", "90π cm³", "60π cm³", "180π cm³"],
            correcta: 1,
            pista: "Eleva el radio al cuadrado (3² = 9) y multiplícalo por la altura (10) y por π.",
            explicacion: "V = π × 3² × 10 = 90π cm³."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "⚖️ Ecuación:  3x² - 8x + 12 = 0  ➔  x₁ · x₂ = ❓",
            pregunta: "Halla el producto de las raíces (x₁ · x₂ = c/a) de la ecuación cuadrática: 3x² - 8x + 12 = 0",
            opciones: ["-4", "4", "8/3", "36"],
            correcta: 1,
            pista: "Por Cardano-Vieta, el producto de raíces es c / a = 12 / 3.",
            explicacion: "x₁ · x₂ = 12 / 3 = 4."
        },

        // --- DIVISIÓN (TEOREMA DEL RESTO, TRIGONOMETRÍA E INTERÉS) ---
        {
            area: "División ➗",
            dibujo: "🧩 Polinomio P(x) = x³ - 2x + 5  ➗  (x - 2)  ➔  Resto = ❓",
            pregunta: "Aplica el Teorema del Resto para hallar el residuo de dividir P(x) = x³ - 2x + 5 entre (x - 2)",
            opciones: ["5", "9", "13", "7"],
            correcta: 1,
            pista: "Iguala el divisor a cero (x - 2 = 0 ➔ x = 2) y evalúa P(2) = 2³ - 2(2) + 5.",
            explicacion: "Resto = P(2) = 8 - 4 + 5 = 9."
        },
        {
            area: "División ➗",
            dibujo: "📐 Triángulo Notable 37° - 53°: Catetos 3k, 4k | Hipotenusa 5k",
            pregunta: "En un triángulo rectángulo notable de 37° y 53°, ¿cuánto vale sen(37°)? (Cateto opuesto / Hipotenusa)",
            opciones: ["4/5", "3/5", "3/4", "5/3"],
            correcta: 1,
            pista: "Al ángulo de 37° se le opone el lado menor (3k) y la hipotenusa es 5k.",
            explicacion: "sen(37°) = 3k / 5k = 3/5."
        },
        {
            area: "División ➗",
            dibujo: "🏦 Capital: S/ 2,000  |  Tasa: 5% anual  |  Tiempo: 3 años",
            pregunta: "¿Cuánto interés simple produce un capital de S/ 2,000 depositado al 5% anual durante 3 años? (I = C · r · t)",
            opciones: ["S/ 100", "S/ 300", "S/ 250", "S/ 150"],
            correcta: 1,
            pista: "El 5% de 2,000 es S/ 100 por cada año. Multiplica por 3 años.",
            explicacion: "I = 2,000 × 0.05 × 3 = S/ 300."
        },
        {
            area: "División ➗",
            dibujo: "⚡ Simplifica fracción algebraica:  (x² - 16) / (x + 4)",
            pregunta: "Simplifica la expresión algebraica (para x ≠ -4): (x² - 16) / (x + 4)",
            opciones: ["x + 4", "x - 4", "x - 12", "4 - x"],
            correcta: 1,
            pista: "Factoriza el numerador como diferencia de cuadrados: (x + 4)(x - 4), y cancela (x + 4).",
            explicacion: "(x + 4)(x - 4) / (x + 4) = x - 4."
        },

        // --- RAZONAMIENTO MATEMÁTICO, PARÁBOLAS Y MÓVILES ---
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️ Ecuación cuadrática:  x² - 7x + 12 = 0",
            pregunta: "¿Cuáles son las dos soluciones (raíces) de la ecuación cuadrática x² - 7x + 12 = 0?",
            opciones: ["x = 2 y x = 6", "x = 3 y x = 4", "x = -3 y x = -4", "x = 1 y x = 12"],
            correcta: 1,
            pista: "Busca dos números que multiplicados den +12 y sumados den +7: (x - 3)(x - 4) = 0.",
            explicacion: "(x - 3)(x - 4) = 0 ➔ x₁ = 3 y x₂ = 4."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🚗 Auto A: 60 km/h  ➡️  ⬅️  🚗 Auto B: 40 km/h (Separados 300 km)",
            pregunta: "Dos autos parten simultáneamente uno al encuentro del otro separados por 300 km, a 60 km/h y 40 km/h. ¿En cuánto tiempo se encuentran?",
            opciones: ["5 horas", "3 horas", "2.5 horas", "4 horas"],
            correcta: 1,
            pista: "En tiempo de encuentro se suman las velocidades: t = Distancia ÷ (v₁ + v₂) = 300 ÷ (60 + 40).",
            explicacion: "t = 300 ÷ 100 = 3 horas."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⚙️ Operador:  a ★ b = 2a + b²  ➔  Halla 3 ★ 4",
            pregunta: "Si se define el operador matemático a ★ b = 2a + b², calcula el valor de (3 ★ 4)",
            opciones: ["14", "22", "18", "25"],
            correcta: 1,
            pista: "Reemplaza a = 3 y b = 4 en la regla: 2(3) + 4².",
            explicacion: "2(3) + 4² = 6 + 16 = 22."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "📉 Parábola:  f(x) = x² - 4x + 7  ➔  Vértice h = -b/(2a)",
            pregunta: "¿Cuál es la coordenada 'x' (h) del vértice de la parábola f(x) = x² - 4x + 7?",
            opciones: ["-2", "2", "4", "-4"],
            correcta: 1,
            pista: "Usa la fórmula del vértice h = -b / (2a), donde a = 1 y b = -4.",
            explicacion: "h = -(-4) / (2 × 1) = 4 / 2 = 2."
        }
    ],

    // 10 Lecturas Largas (3.º de Secundaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "⚗️⚛️🧪📜",
            textoLectura: "A finales del siglo XIX, el químico ruso Dmitri Mendeléyev organizó los sesenta y tres elementos químicos conocidos hasta entonces en una tabla según su masa atómica y propiedades periódicas. Lo más genial de su trabajo fue dejar espacios vacíos prediciendo con exactitud la existencia, el peso y el comportamiento de elementos aún no descubiertos, como el galio y el germanio. Cuando años después fueron hallados en la naturaleza, sus propiedades coincidieron casi a la perfección con los cálculos de Mendeléyev.",
            pregunta: "¿Qué demuestra el hecho de que Mendeléyev dejara espacios vacíos en su tabla periódica?",
            opciones: ["Que olvidó investigar esos elementos", "El poder predictivo del método científico basado en patrones periódicos", "Que la química no tenía reglas", "Que solo existían sesenta y tres elementos en el universo"],
            correcta: 1,
            pista: "Analiza la segunda y tercera oración del párrafo.",
            explicacion: "Demostró que la periodicidad química permite predecir fenómenos naturales antes de observarlos."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧠🎭💭🔍",
            textoLectura: "El sesgo de confirmación es una tendencia psicológica que lleva a las personas a buscar, interpretar y recordar únicamente aquella información que respalda sus creencias previas, ignorando o descartando las evidencias que las contradicen. En la ciencia y en la vida cotidiana, superar este sesgo exige someter nuestras propias hipótesis a pruebas rigurosas y escuchar argumentos contrarios con apertura intelectual.",
            pregunta: "¿Cómo podemos contrarrestar el 'sesgo de confirmación' según el texto?",
            opciones: ["Leyendo solo noticias con las que estamos de acuerdo", "Buscando evidencias que pongan a prueba nuestras ideas y analizando puntos de vista opuestos", "Evitando debatir con otras personas", "Confiando únicamente en nuestra primera impresión"],
            correcta: 1,
            pista: "Lee la última oración del párrafo.",
            explicacion: "El rigor crítico requiere evaluar falsaciones y perspectivas divergentes."
        },
        {
            area: "Lectura 📖",
            dibujo: "🖨️📚🌍💡",
            textoLectura: "Antes de que Johannes Gutenberg perfeccionara la imprenta de tipos móviles metálicos en Europa hacia 1450, copiar un solo libro a mano tomaba meses de trabajo de un monje escriba, por lo que los libros eran objetos rarísimos y carísimos reservados para una pequeña élite. La imprenta abarató drásticamente los costos de producción y permitió que el conocimiento científico, filosófico y literario circulara masivamente por todo el continente.",
            pregunta: "¿Cuál fue el impacto social más importante de la imprenta de Gutenberg?",
            opciones: ["Eliminó la necesidad de aprender a leer", "Democratizó el acceso al conocimiento al abaratar y multiplicar los libros", "Hizo que los libros fueran más pesados", "Redujo el número de bibliotecas"],
            correcta: 1,
            pista: "Lee la última oración del texto.",
            explicacion: "Permitió la difusión masiva de ideas y impulsó el Renacimiento y la revolución científica."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌐🔐🔢💻",
            textoLectura: "Cada vez que realizas una compra en línea o envías un mensaje privado, tus datos viajan protegidos por la criptografía moderna. Este sistema convierte la información legible en un código matemático aparentemente aleatorio que solo puede descifrarse mediante una clave digital única. Paradójicamente, la seguridad de estas transacciones depende de problemas matemáticos tan complejos —como factorizar números primos gigantescos— que ni las supercomputadoras actuales pueden resolverlos en tiempos razonables.",
            pregunta: "¿En qué se basa la seguridad de la criptografía moderna según el párrafo?",
            opciones: ["En esconder los cables de internet bajo el mar", "En problemas matemáticos extremadamente difíciles de resolver sin la clave adecuada", "En escribir los mensajes en idiomas antiguos", "En apagar los servidores durante la noche"],
            correcta: 1,
            pista: "Lee la última oración del párrafo.",
            explicacion: "Se fundamenta en la complejidad computacional de ciertas operaciones de teoría de números."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌿🦋🦎🧬",
            textoLectura: "En la naturaleza, el mimetismo batesiano ocurre cuando una especie totalmente inofensiva evoluciona hasta imitar los colores brillantes o la apariencia de una especie venenosa o peligrosa. Por ejemplo, ciertas serpientes falsas coral imitan las franjas rojas, amarillas y negras de las verdaderas serpientes coral mortales. De este modo, los depredadores que aprendieron a evitar a las venenosas también evitan atacar a las imitadoras.",
            pregunta: "¿Qué ventaja evolutiva proporciona el mimetismo batesiano a una especie inofensiva?",
            opciones: ["Le permite producir veneno letal", "Disuade a los depredadores al aparentar ser una especie peligrosa", "Le ayuda a nadar más rápido", "La vuelve invisible en la oscuridad"],
            correcta: 1,
            pista: "Revisa la última oración del texto.",
            explicacion: "Aprovecha la memoria de advertencia de los depredadores para sobrevivir sin desarrollar toxinas."
        },
        {
            area: "Lectura 📖",
            dibujo: "🏛️⚖️🌍🕊️",
            textoLectura: "Tras las devastadoras consecuencias de la Segunda Guerra Mundial, representantes de cincuenta países fundaron en 1945 la Organización de las Naciones Unidas (ONU) y proclamaron en 1948 la Declaración Universal de los Derechos Humanos. Este documento histórico estableció por primera vez que todos los seres humanos nacen libres e iguales en dignidad y derechos, sin distinción de raza, sexo, idioma, religión u opinión política.",
            pregunta: "¿Cuál es el principio medular de la Declaración Universal de los Derechos Humanos de 1948?",
            opciones: ["Que los derechos dependen del país donde nazcas", "La igualdad inherente y dignidad universal de todos los seres humanos sin discriminación", "Que solo los gobiernos poseen derechos", "La creación de una moneda única mundial"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "Consagra la universalidad e inalienabilidad de los derechos humanos fundamentales."
        },
        {
            area: "Lectura 📖",
            dibujo: "⚡🔋🚗🌱",
            textoLectura: "El desarrollo de baterías de iones de litio de alta densidad energética ha transformado tanto la electrónica portátil como el transporte sostenible. Al permitir almacenar gran cantidad de energía en dispositivos ligeros y recargables miles de veces, estas baterías hicieron posibles los teléfonos inteligentes y están impulsando la transición de los automóviles de combustión interna hacia vehículos eléctricos libres de emisiones directas.",
            pregunta: "¿Qué característica técnica de las baterías de iones de litio ha impulsado la movilidad eléctrica?",
            opciones: ["Que funcionan con gasolina", "Su alta capacidad de almacenamiento energético en relación con su bajo peso y su recargabilidad", "Que son desechables tras un solo uso", "Que generan electricidad del viento"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "La alta densidad energética por unidad de masa permite autonomía vehicular viable."
        },
        {
            area: "Lectura 📖",
            dibujo: "📖🎭✍️🌟",
            textoLectura: "La literatura no es un simple pasatiempo ni una colección de datos históricos; es un laboratorio de empatía humana. Al sumergirnos en una novela o un cuento, adoptamos temporalmente la mente, los dilemas y las emociones de personajes que viven en épocas, culturas o circunstancias muy distintas a las nuestras. Esta experiencia amplía nuestra comprensión del mundo y fortalece nuestra sensibilidad social.",
            pregunta: "¿Por qué el autor define la literatura como un 'laboratorio de empatía humana'?",
            opciones: ["Porque se escribe dentro de laboratorios químicos", "Porque permite experimentar perspectivas y emociones ajenas, ampliando nuestra comprensión de los demás", "Porque sustituye a la psicología clínica", "Porque solo narra historias científicas"],
            correcta: 1,
            pista: "Lee la segunda oración del texto.",
            explicacion: "La ficción narrativa ejercita la capacidad de ponerse en el lugar del otro."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌊🌪️🌡️🌐",
            textoLectura: "El fenómeno de El Niño es un evento climático cíclico que se origina cuando las aguas superficiales del océano Pacífico ecuatorial se calientan anormalmente frente a las costas de Perú y Ecuador. Este calentamiento altera los vientos alisios y modifica la distribución global de las lluvias, provocando intensas precipitaciones e inundaciones en la costa norte peruana, mientras genera sequías en otras regiones del altiplano y Oceanía.",
            pregunta: "¿Cuál es la causa física desencadenante del fenómeno de El Niño?",
            opciones: ["El enfriamiento de los polos", "El calentamiento anómalo de las aguas superficiales del Pacífico ecuatorial", "La erupción de volcanes submarinos", "El aumento de la salinidad en los ríos"],
            correcta: 1,
            pista: "Lee la primera oración del párrafo.",
            explicacion: "La interacción océano-atmósfera por el calentamiento marino altera los patrones pluviométricos."
        },
        {
            area: "Lectura 📖",
            dibujo: "🔬📊❓✅",
            textoLectura: "En la investigación científica, la correlación entre dos variables no implica necesariamente causalidad. Por ejemplo, durante el verano aumentan simultáneamente las ventas de helados y los casos de quemaduras solares; sin embargo, comer helado no provoca quemaduras en la piel. Ambos fenómenos tienen una tercera causa común: el aumento de la radiación solar y la temperatura ambiental. Distinguir correlación de causalidad evita conclusiones erróneas.",
            pregunta: "¿Qué error lógico ilustra el ejemplo de las ventas de helados y las quemaduras solares?",
            opciones: ["Pensar que el verano es frío", "Confundir una simple coincidencia estadística (correlación) con una relación de causa y efecto", "Creer que el sol derrite los helados", "No medir las temperaturas"],
            correcta: 1,
            pista: "Lee la primera y la última oración del párrafo.",
            explicacion: "Dos variables pueden variar juntas debido a una variable confusora externa sin que una cause la otra."
        }
    ]
};
