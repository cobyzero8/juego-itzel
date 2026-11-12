// datos/sec1.js - Aula 7: 1.º de Secundaria (Álgebra, Ley de Signos, Ecuaciones, Geometría y Lecturas)
const nivel7_Sec1 = {
    id: 7,
    nombre: "1.º de Secundaria - Álgebra y Ecuaciones",

    matematicas: [
        // --- SUMA (ENTEROS NEGATIVOS Y EXPRESIONES ALGEBRAICAS) ---
        {
            area: "Suma ➕",
            dibujo: "🌡️ (-12)  ➕  (-8)  =  ❓",
            pregunta: "Calcula la suma de dos números enteros negativos: (-12) + (-8)",
            opciones: ["-4", "20", "-20", "4"],
            correcta: 2,
            pista: "Cuando sumas dos números con el mismo signo negativo, sumas sus valores (12 + 8 = 20) y mantienes el signo menos.",
            explicacion: "(-12) + (-8) = -20."
        },
        {
            area: "Suma ➕",
            dibujo: "🧮 (4x + 3y)  ➕  (5x + 2y)",
            pregunta: "Reduce los términos semejantes sumando las expresiones: (4x + 3y) + (5x + 2y)",
            opciones: ["14xy", "9x + 5y", "9x² + 5y²", "8x + 6y"],
            correcta: 1,
            pista: "Agrupa las 'x' con las 'x' (4x + 5x) y las 'y' con las 'y' (3y + 2y).",
            explicacion: "(4x + 5x) + (3y + 2y) = 9x + 5y."
        },
        {
            area: "Suma ➕",
            dibujo: "📐 Ángulos consecutivos: 38° 40'  ➕  25° 35'",
            pregunta: "Suma los siguientes ángulos sexagesimales: 38° 40' + 25° 35' (Recuerda: 60' = 1°)",
            opciones: ["63° 75'", "64° 15'", "63° 15'", "64° 25'"],
            correcta: 1,
            pista: "40' + 35' = 75'. Como 60' forman 1 grado, 75' = 1° 15'. Suma ese grado a 38° + 25°.",
            explicacion: "38° + 25° = 63°; 40' + 35' = 75' = 1° 15' ➔ Total: 64° 15'."
        },
        {
            area: "Suma ➕",
            dibujo: "💳 Deuda: -S/ 45  ➕  💵 Abono: +S/ 72",
            pregunta: "Tenías un saldo de -45 soles en una cuenta y depositas 72 soles. ¿Cuál es tu nuevo saldo? (-45 + 72)",
            opciones: ["-27 soles", "27 soles", "117 soles", "37 soles"],
            correcta: 1,
            pista: "Signos distintos se restan (72 - 45) y se coloca el signo del número con mayor valor absoluto (+).",
            explicacion: "-45 + 72 = +27 soles."
        },

        // --- RESTA (LEY DE SIGNOS Y POLINOMIOS) ---
        {
            area: "Resta ➖",
            dibujo: "🔢 15  ➖  (-9)  =  ❓",
            pregunta: "Calcula el resultado aplicando la ley de signos: 15 - (-9)",
            opciones: ["6", "-6", "24", "-24"],
            correcta: 2,
            pista: "Restar un número negativo equivale a sumar su opuesto: menos por menos es más (- (-9) = +9).",
            explicacion: "15 - (-9) = 15 + 9 = 24."
        },
        {
            area: "Resta ➖",
            dibujo: "🧮 (11a - 4b)  ➖  (6a - 9b)",
            pregunta: "Resuelve la resta algebraica: (11a - 4b) - (6a - 9b)",
            opciones: ["5a - 13b", "5a + 5b", "17a - 13b", "5a - 5b"],
            correcta: 1,
            pista: "El signo menos cambia los signos del segundo paréntesis: 11a - 4b - 6a + 9b.",
            explicacion: "(11a - 6a) + (-4b + 9b) = 5a + 5b."
        },
        {
            area: "Resta ➖",
            dibujo: "📐 Complemento de 54°  ➔  90° - 54°",
            pregunta: "Dos ángulos complementarios suman 90°. ¿Cuánto mide el complemento de un ángulo de 54°?",
            opciones: ["126°", "36°", "46°", "26°"],
            correcta: 1,
            pista: "Resta 90° - 54°.",
            explicacion: "90° - 54° = 36°."
        },
        {
            area: "Resta ➖",
            dibujo: "🏔️ Cumbre: +4,800 m  ➖  🌊 Fosa: -200 m",
            pregunta: "¿Cuál es la distancia vertical total entre una montaña de +4,800 m y una depresión de -200 m?",
            opciones: ["4,600 m", "5,000 m", "4,800 m", "5,200 m"],
            correcta: 1,
            pista: "Resta la altura mayor menos la menor: 4,800 - (-200).",
            explicacion: "4,800 - (-200) = 4,800 + 200 = 5,000 metros."
        },

        // --- MULTIPLICACIÓN (MONOMIOS, POTENCIAS Y DISTRIBUTIVA) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "⚡ (-6)  ❌  (-7)  =  ❓",
            pregunta: "Aplica la ley de signos de la multiplicación: (-6) × (-7)",
            opciones: ["-42", "42", "-13", "13"],
            correcta: 1,
            pista: "En multiplicación, signos iguales siempre dan resultado positivo: (-) × (-) = (+).",
            explicacion: "(-6) × (-7) = +42."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🧬 (3x²)  ❌  (4x³)  =  ❓",
            pregunta: "Multiplica los siguientes monomios: (3x²) · (4x³)",
            opciones: ["7x⁵", "12x⁵", "12x⁶", "7x⁶"],
            correcta: 1,
            pista: "Multiplica los coeficientes (3 × 4 = 12) y suma los exponentes de igual base (2 + 3 = 5).",
            explicacion: "(3 · 4) x^(2+3) = 12x⁵."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📦 Propiedad Distributiva:  4(2x - 5)",
            pregunta: "Desarrolla aplicando la propiedad distributiva: 4(2x - 5)",
            opciones: ["8x - 5", "8x - 20", "6x - 20", "8x + 20"],
            correcta: 1,
            pista: "Multiplica el 4 por cada término dentro del paréntesis: (4 × 2x) y (4 × -5).",
            explicacion: "4(2x) - 4(5) = 8x - 20."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🔋 Potencia de potencia:  (2³)²  =  ❓",
            pregunta: "¿Cuál es el valor numérico de (2³)²?",
            opciones: ["32", "64", "16", "12"],
            correcta: 1,
            pista: "En potencia de potencia se multiplican los exponentes: 2^(3×2) = 2⁶ = 2×2×2×2×2×2.",
            explicacion: "(2³)² = 2⁶ = 64."
        },

        // --- DIVISIÓN (MONOMIOS, LEY DE SIGNOS Y PROPORCIONES) ---
        {
            area: "División ➗",
            dibujo: "⚡ (-54)  ➗  (+6)  =  ❓",
            pregunta: "Calcula el cociente aplicando la ley de signos: (-54) ÷ (+6)",
            opciones: ["9", "-9", "-8", "8"],
            correcta: 1,
            pista: "En división, signos diferentes dan resultado negativo: (-) ÷ (+) = (-).",
            explicacion: "(-54) ÷ (+6) = -9."
        },
        {
            area: "División ➗",
            dibujo: "🧬 (24x⁶)  ➗  (6x²)  =  ❓",
            pregunta: "Divide los siguientes monomios: (24x⁶) ÷ (6x²)",
            opciones: ["4x³", "4x⁴", "18x⁴", "4x⁸"],
            correcta: 1,
            pista: "Divide los coeficientes (24 ÷ 6 = 4) y resta los exponentes (6 - 2 = 4).",
            explicacion: "(24 ÷ 6) x^(6-2) = 4x⁴."
        },
        {
            area: "División ➗",
            dibujo: "🗺️ Escala 1 : 50,000  |  Mapa: 4 cm ➔ Real: ❓ km",
            pregunta: "En un mapa a escala 1 : 50,000, dos pueblos están separados por 4 cm. ¿A cuántos kilómetros están en la realidad? (1 km = 100,000 cm)",
            opciones: ["20 km", "2 km", "5 km", "0.2 km"],
            correcta: 1,
            pista: "4 cm × 50,000 = 200,000 cm. Divide 200,000 ÷ 100,000 para pasarlo a kilómetros.",
            explicacion: "200,000 cm ÷ 100,000 = 2 km."
        },
        {
            area: "División ➗",
            dibujo: "👷 6 obreros = 12 días  ➔  9 obreros = ❓ días",
            pregunta: "Si 6 obreros construyen un muro en 12 días, ¿en cuántos días lo harán 9 obreros trabajando al mismo ritmo? (Proporcionalidad inversa)",
            opciones: ["18 días", "8 días", "9 días", "6 días"],
            correcta: 1,
            pista: "A más obreros, menos días: el trabajo total es 6 × 12 = 72 días-obrero. Divide 72 ÷ 9.",
            explicacion: "(6 × 12) ÷ 9 = 72 ÷ 9 = 8 días."
        },

        // --- RAZONAMIENTO MATEMÁTICO, ECUACIONES Y GEOMETRÍA ---
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️  5x - 6 = 2x + 12  ➔  x = ❓",
            pregunta: "Resuelve la ecuación de primer grado: 5x - 6 = 2x + 12",
            opciones: ["4", "6", "3", "9"],
            correcta: 1,
            pista: "Agrupa las 'x' a la izquierda (5x - 2x = 3x) y los números a la derecha (12 + 6 = 18).",
            explicacion: "3x = 18 ➔ x = 18 ÷ 3 = 6."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔺 Triángulo: Ángulos 55° y 75°  ➔  3er ángulo = ❓",
            pregunta: "La suma de los ángulos internos de cualquier triángulo es 180°. Si dos ángulos miden 55° y 75°, ¿cuánto mide el tercero?",
            opciones: ["60°", "50°", "40°", "70°"],
            correcta: 1,
            pista: "Suma 55° + 75° = 130° y réstalo de 180°.",
            explicacion: "180° - (55° + 75°) = 180° - 130° = 50°."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🎂 Edad actual: x  |  Dentro de 10 años = 2x",
            pregunta: "Dentro de 10 años, la edad de Itzel será el doble de su edad actual. ¿Cuántos años tiene hoy?",
            opciones: ["8 años", "10 años", "12 años", "5 años"],
            correcta: 1,
            pista: "Plantea la ecuación: x + 10 = 2x. Resta 'x' a ambos lados.",
            explicacion: "x + 10 = 2x ➔ 10 = 2x - x ➔ x = 10 años."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 Sucesión:  3  ➔  6  ➔  11  ➔  18  ➔  27  ➔  ❓",
            pregunta: "Halla el término que sigue en la sucesión: 3, 6, 11, 18, 27, ...",
            opciones: ["36", "38", "35", "40"],
            correcta: 1,
            pista: "Observa las diferencias: +3, +5, +7, +9... la siguiente diferencia es +11 (o n² + 2).",
            explicacion: "27 + 11 = 38 (también es 6² + 2 = 38)."
        }
    ],

    // 10 Lecturas Largas (1.º de Secundaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "📐🏛️🇬🇷🔢",
            textoLectura: "Más de dos mil años antes de nuestra era, los antiguos egipcios ya utilizaban cuerdas con doce nudos equidistantes para formar triángulos rectángulos de lados 3, 4 y 5, asegurando esquinas perfectamente cuadradas al construir pirámides y templos. Siglos después, el matemático griego Pitágoras demostró formalmente que en todo triángulo rectángulo el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.",
            pregunta: "¿Qué diferencia existió entre el aporte egipcio y el de Pitágoras respecto al triángulo rectángulo?",
            opciones: ["Los egipcios inventaron los triángulos circulares", "Los egipcios lo aplicaron de forma práctica en la construcción, mientras Pitágoras lo demostró como teorema general", "Pitágoras construyó las pirámides de Egipto", "No hubo ninguna relación entre ambos"],
            correcta: 1,
            pista: "Compara lo que hacían los egipcios en la primera oración con lo que hizo Pitágoras en la segunda.",
            explicacion: "Los egipcios usaron el caso práctico (3-4-5) y Pitágoras formuló la demostración matemática universal."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧫🔬💉🛡️",
            textoLectura: "Las vacunas funcionan como un entrenamiento seguro para nuestro sistema inmunológico. Al introducir en el organismo fragmentos inofensivos o inactivos de un virus o bacteria, los glóbulos blancos aprenden a reconocer al invasor y fabrican anticuerpos específicos sin que la persona desarrolle la enfermedad grave. Si en el futuro el patógeno real intenta atacar, el cuerpo ya posee la memoria inmunitaria para neutralizarlo de inmediato.",
            pregunta: "¿Por qué el autor compara las vacunas con un 'entrenamiento seguro'?",
            opciones: ["Porque obligan a hacer ejercicio físico", "Porque enseñan al sistema inmunitario a producir anticuerpos sin provocar la enfermedad grave", "Porque eliminan todos los glóbulos blancos", "Porque curan fracturas óseas"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "Generan memoria inmunológica sin exponer al cuerpo al peligro real de la infección."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌊🚢⚙️🧊",
            textoLectura: "Un iceberg es una gigantesca masa de hielo dulce que se ha desprendido de un glaciar y flota a la deriva en los océanos polares. Debido a que el hielo es ligeramente menos denso que el agua salada del mar, aproximadamente el noventa por ciento del volumen total de un iceberg permanece oculto bajo la superficie del agua, dejando visible apenas una décima parte. De ahí nace la expresión 'la punta del iceberg' para referirse a un problema mucho mayor de lo que aparenta.",
            pregunta: "¿Por qué los icebergs flotan en el mar manteniendo la mayor parte de su masa sumergida?",
            opciones: ["Porque están huecos por dentro", "Porque la densidad del hielo es ligeramente menor que la del agua salada", "Porque pesan menos que una pluma", "Porque los empujan las corrientes cálidas"],
            correcta: 1,
            pista: "Revisa la segunda oración del texto.",
            explicacion: "Al tener una densidad cercana al 90% de la del agua de mar, flotan con nueve décimas partes bajo el agua."
        },
        {
            area: "Lectura 📖",
            dibujo: "🤖💻🧠📊",
            textoLectura: "A diferencia de los programas informáticos tradicionales que siguen paso a paso instrucciones rígidas escritas por un humano, el aprendizaje automático (Machine Learning) permite que las computadoras identifiquen patrones estadísticos a partir de millones de ejemplos. Así, un algoritmo puede aprender a detectar tumores en radiografías médicas o traducir idiomas mejorando su precisión con cada nuevo dato procesado.",
            pregunta: "¿Qué distingue al aprendizaje automático de la programación tradicional?",
            opciones: ["Que no necesita electricidad", "Que aprende patrones a partir de datos en lugar de depender solo de reglas rígidas preprogramadas", "Que únicamente sirve para videojuegos", "Que funciona sin computadoras"],
            correcta: 1,
            pista: "Lee la primera oración del texto.",
            explicacion: "El Machine Learning infiere modelos predictivos a partir de ejemplos de entrenamiento."
        },
        {
            area: "Lectura 📖",
            dibujo: "🏺🌽🥔🇵🇪",
            textoLectura: "Los Andes centrales fueron uno de los principales centros mundiales de domesticación de plantas alimenticias. Hace miles de años, los antiguos agricultores peruanos transformaron especies silvestres amargas en miles de variedades de papa, maíz, quinua y ají adaptadas a distintos pisos ecológicos, desde la costa árida hasta las punas heladas. Este legado agrícola alimenta hoy a millones de personas en todo el planeta.",
            pregunta: "¿Qué demuestra la existencia de miles de variedades de papa adaptadas a distintos climas andinos?",
            opciones: ["Que la papa crece sola sin cuidado humano", "El avanzado conocimiento agrícola y de selección genética desarrollado por las culturas andinas", "Que en los Andes siempre hace calor", "Que solo cultivaban un tipo de planta"],
            correcta: 1,
            pista: "Analiza la segunda oración del párrafo.",
            explicacion: "Evidencia siglos de experimentación y manejo de pisos ecológicos por los agricultores andinos."
        },
        {
            area: "Lectura 📖",
            dibujo: "🔊⚡🌩️⏱️",
            textoLectura: "Durante una tormenta eléctrica, siempre vemos primero el resplandor del relámpago y segundos después escuchamos el estruendo del trueno, aunque ambos ocurren exactamente en el mismo instante. Esto sucede porque la luz viaja a trescientos mil kilómetros por segundo, mientras que el sonido se desplaza por el aire a apenas trescientos cuarenta metros por segundo. Contando los segundos entre ambos podemos estimar a qué distancia cayó el rayo.",
            pregunta: "¿Por qué percibimos el relámpago antes que el trueno si se producen al mismo tiempo?",
            opciones: ["Porque el trueno ocurre minutos después", "Porque la velocidad de la luz es inmensamente mayor que la velocidad del sonido", "Porque nuestros oídos funcionan más lento", "Porque las nubes frenan la luz"],
            correcta: 1,
            pista: "Lee la segunda oración donde compara ambas velocidades.",
            explicacion: "La luz llega casi instantáneamente, mientras el sonido tarda ~3 segundos por cada kilómetro."
        },
        {
            area: "Lectura 📖",
            dibujo: "📰🔍🧐✅",
            textoLectura: "En la era de las redes sociales, las noticias falsas o 'fake news' se difunden con rapidez porque suelen apelar a emociones intensas como el miedo o la indignación. Antes de compartir un titular alarmante, un lector crítico verifica quién publica la información, busca si medios confiables confirman el hecho y revisa la fecha original. Pensar antes de compartir detiene la desinformación.",
            pregunta: "¿Cuál es el propósito comunicativo principal de este texto?",
            opciones: ["Vender suscripciones de periódicos", "Promover el pensamiento crítico y la verificación de fuentes antes de compartir noticias", "Prohibir el uso de redes sociales", "Explicar cómo crear noticias virales"],
            correcta: 1,
            pista: "Observa las recomendaciones de las dos últimas oraciones.",
            explicacion: "Busca fomentar hábitos de alfabetización mediática para frenar la desinformación."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌱🧪☀️🍃",
            textoLectura: "Mediante la fotosíntesis, las plantas realizan una transformación química extraordinaria: capturan dióxido de carbono del aire y agua del suelo, y utilizando la energía de la luz solar los convierten en glucosa para nutrirse, liberando oxígeno puro a la atmósfera como subproducto. Gracias a este proceso bioquímico existe el oxígeno que respiramos casi todos los seres vivos de la Tierra.",
            pregunta: "¿Qué elementos ingresan y qué elementos se producen durante la fotosíntesis?",
            opciones: ["Ingresa oxígeno y se produce carbón", "Ingresan dióxido de carbono, agua y luz solar; se producen glucosa y oxígeno", "Ingresan minerales y se produce nitrógeno", "Ingresa glucosa y se produce agua salada"],
            correcta: 1,
            pista: "Lee detenidamente la primera oración del párrafo.",
            explicacion: "La fotosíntesis transforma materia inorgánica (CO₂ y H₂O) en energía química (glucosa) y O₂."
        },
        {
            area: "Lectura 📖",
            dibujo: "⚖️🏛️📜👤",
            textoLectura: "La Constitución Política es la ley fundamental sobre la cual se organiza un Estado democrático. En ella se establecen los derechos y deberes de todos los ciudadanos, se definen las funciones de los poderes Ejecutivo, Legislativo y Judicial para evitar la concentración del poder, y se fijan los límites que ninguna autoridad puede sobrepasar.",
            pregunta: "¿Para qué divide una Constitución el poder del Estado en Ejecutivo, Legislativo y Judicial?",
            opciones: ["Para hacer más lentas las leyes", "Para equilibrar funciones y evitar que una sola persona o institución concentre todo el poder", "Para eliminar las elecciones", "Para que cada región tenga un país distinto"],
            correcta: 1,
            pista: "Revisa la segunda oración del párrafo.",
            explicacion: "La separación de poderes garantiza frenos, contrapesos y protección de los derechos ciudadanos."
        },
        {
            area: "Lectura 📖",
            dibujo: "🚀🌕🛰️👩‍🚀",
            textoLectura: "Cuando los astronautas viajan a la Estación Espacial Internacional, experimentan un estado de microgravedad que hace que floten continuamente. Sin embargo, la ausencia de peso plantea retos médicos: los huesos pierden densidad mineral y los músculos se debilitan al no soportar el cuerpo. Por ello, los tripulantes deben ejercitarse dos horas diarias con máquinas especiales diseñadas para el espacio.",
            pregunta: "¿Por qué los astronautas deben realizar dos horas diarias de ejercicio en el espacio?",
            opciones: ["Porque tienen mucho tiempo libre", "Para evitar la pérdida de masa ósea y el debilitamiento muscular causados por la microgravedad", "Para generar electricidad para la estación", "Para mantenerse calientes"],
            correcta: 1,
            pista: "Lee las dos últimas oraciones del párrafo.",
            explicacion: "El ejercicio resistivo contrarresta la atrofia muscular y descalcificación en microgravedad."
        }
    ]
};
