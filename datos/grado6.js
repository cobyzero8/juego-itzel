// datos/grado6.js - Aula 6: 6.º de Primaria (Proporciones, Enteros, Fracciones, Pre-Álgebra y Lecturas)
const nivel6_Grado6 = {
    id: 6,
    nombre: "6.º de Primaria - Proporciones y Pre-Álgebra",

    matematicas: [
        // --- SUMA (ENTEROS, FRACCIONES HETEROGÉNEAS Y DECIMALES) ---
        {
            area: "Suma ➕",
            dibujo: "🌡️ Madrugada: -4 °C  ➕  ☀️ Sube: +11 °C",
            pregunta: "En la sierra la temperatura era de -4 °C al amanecer y al mediodía subió 11 °C. ¿Cuál es la temperatura actual? (-4 + 11)",
            opciones: ["15 °C", "7 °C", "-7 °C", "6 °C"],
            correcta: 1,
            pista: "De -4 °C para llegar a 0 °C sube 4 grados; aún faltan subir 7 grados más.",
            explicacion: "-4 + 11 = +7 °C."
        },
        {
            area: "Suma ➕",
            dibujo: "🧪 2/5 L  ➕  🧪 3/4 L",
            pregunta: "En un laboratorio mezclas 2/5 de litro de solución A con 3/4 de litro de solución B. ¿Qué fracción de litro obtienes?",
            opciones: ["5/9 L", "23/20 L", "6/20 L", "15/20 L"],
            correcta: 1,
            pista: "Usa denominador común 20: 2/5 = 8/20 y 3/4 = 15/20. Luego suma 8/20 + 15/20.",
            explicacion: "2/5 + 3/4 = 8/20 + 15/20 = 23/20 de litro (1 litro y 3/20)."
        },
        {
            area: "Suma ➕",
            dibujo: "📊 Encuesta: 35% Fútbol  ➕  42% Vóley",
            pregunta: "En un colegio, el 35% prefiere fútbol y el 42% prefiere vóley. Si el resto prefiere básquet, ¿qué porcentaje prefiere fútbol o vóley?",
            opciones: ["67%", "77%", "87%", "23%"],
            correcta: 1,
            pista: "Suma directamente los porcentajes de ambos deportes: 35% + 42%.",
            explicacion: "35% + 42% = 77% de los estudiantes."
        },
        {
            area: "Suma ➕",
            dibujo: "🏢 Sótano -2  ➕  🛗 Subir 7 pisos",
            pregunta: "Un ascensor está en el sótano -2 y sube 7 pisos. ¿A qué piso llega exactamente?",
            opciones: ["Piso 9", "Piso 5", "Piso 4", "Piso 6"],
            correcta: 1,
            pista: "Al subir 2 pisos llegas al piso 0 (planta baja), y te quedan 5 pisos más por subir.",
            explicacion: "-2 + 7 = Piso 5."
        },

        // --- RESTA (NÚMEROS NEGATIVOS, ÁNGULOS Y PORCENTAJES) ---
        {
            area: "Resta ➖",
            dibujo: "📐 Ángulo llano: 180°  ➖  📐 Ángulo conocido: 115°",
            pregunta: "Dos ángulos suplementarios suman 180°. Si uno mide 115°, ¿cuánto mide el otro?",
            opciones: ["75°", "65°", "55°", "85°"],
            correcta: 1,
            pista: "Resta 180° - 115°.",
            explicacion: "180° - 115° = 65°."
        },
        {
            area: "Resta ➖",
            dibujo: "🤿 Buzo 1: -18 m  |  🤿 Buzo 2: -7 m",
            pregunta: "Un buzo está a 18 metros bajo el mar (-18 m) y otro está a 7 metros bajo el mar (-7 m). ¿Cuál es la diferencia de profundidad entre ambos?",
            opciones: ["25 metros", "11 metros", "9 metros", "12 metros"],
            correcta: 1,
            pista: "Calcula la distancia entre -18 y -7: 18 - 7.",
            explicacion: "-7 - (-18) = -7 + 18 = 11 metros de diferencia."
        },
        {
            area: "Resta ➖",
            dibujo: "👟 Zapatillas: S/ 160  ➖  🏷️ 15% descuento",
            pregunta: "Unas zapatillas cuestan S/ 160 y tienen 15% de descuento. ¿Cuánto pagarás finalmente?",
            opciones: ["S/ 145", "S/ 136", "S/ 124", "S/ 140"],
            correcta: 1,
            pista: "El 10% de 160 es 16, y el 5% es la mitad (8). Descuento total = 24 soles. Ahora resta 160 - 24.",
            explicacion: "15% de 160 = 24 soles; 160 - 24 = S/ 136."
        },
        {
            area: "Resta ➖",
            dibujo: "⚖️ Bolsa: 2 1/2 kg  ➖  🌾 Usado: 3/4 kg",
            pregunta: "De un saco con 2 1/2 kg de harina se usan 3/4 kg para hacer pan. ¿Cuánta harina queda?",
            opciones: ["1 1/4 kg", "1 3/4 kg", "2 1/4 kg", "1 1/2 kg"],
            correcta: 1,
            pista: "2 1/2 kg equivale a 10/4 kg. Réstale 3/4 kg: te quedan 7/4 kg = 1 3/4 kg.",
            explicacion: "10/4 - 3/4 = 7/4 kg = 1 3/4 kg."
        },

        // --- MULTIPLICACIÓN (FRACCIONES, PROPORCIONES Y RAÍCES) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🍫 3/4 de barra  ❌  2/3",
            pregunta: "Tienes 3/4 de una barra de chocolate y regalas 2/3 de lo que tienes. ¿Qué fracción de la barra entera regalaste? (3/4 × 2/3)",
            opciones: ["5/7", "1/2", "6/7", "2/4"],
            correcta: 1,
            pista: "Multiplica numeradores (3 × 2 = 6) y denominadores (4 × 3 = 12). Luego simplifica 6/12.",
            explicacion: "(3 × 2) / (4 × 3) = 6/12 = 1/2 de la barra."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🚗 Velocidad: 75 km/h  ❌  ⏱️ Tiempo: 3.5 h",
            pregunta: "Un auto viaja a una velocidad constante de 75 km/h durante 3.5 horas. ¿Qué distancia recorre? (d = v × t)",
            opciones: ["225 km", "262.5 km", "250.5 km", "245 km"],
            correcta: 1,
            pista: "En 3 horas recorre 75 × 3 = 225 km; en media hora (0.5 h) recorre la mitad de 75 (37.5 km).",
            explicacion: "225 + 37.5 = 262.5 km."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🟩 Cuadrado de área 81 cm²  ➔  Lado = √81",
            pregunta: "El área de un jardín cuadrado es 81 m². ¿Cuánto mide cada lado del jardín? (√81)",
            opciones: ["8 m", "9 m", "7 m", "20.25 m"],
            correcta: 1,
            pista: "Busca un número que multiplicado por sí mismo dé 81.",
            explicacion: "√81 = 9 m, porque 9 × 9 = 81."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🍰 Receta (4 pers): 3 huevos  ➔  Para 12 pers: ❓",
            pregunta: "Una receta para 4 personas usa 3 huevos. Si quieres preparar la misma receta para 12 personas, ¿cuántos huevos necesitas?",
            opciones: ["6 huevos", "9 huevos", "12 huevos", "8 huevos"],
            correcta: 1,
            pista: "12 personas es el triple de 4 personas (4 × 3 = 12), así que multiplica los huevos por 3.",
            explicacion: "3 huevos × 3 = 9 huevos."
        },

        // --- DIVISIÓN (FRACCIONES, REGLA DE TRES Y PROMEDIOS) ---
        {
            area: "División ➗",
            dibujo: "🧃 Jarra: 3/4 L  ➡️  🥤 Vasos de 1/8 L",
            pregunta: "¿Cuántos vasos de 1/8 de litro se pueden llenar con 3/4 de litro de refresco? (3/4 ÷ 1/8)",
            opciones: ["4 vasos", "6 vasos", "8 vasos", "3 vasos"],
            correcta: 1,
            pista: "Convierte 3/4 a octavos: 3/4 = 6/8. ¿Cuántos octavos hay en 6/8?",
            explicacion: "3/4 ÷ 1/8 = (3 × 8) ÷ (4 × 1) = 24 ÷ 4 = 6 vasos."
        },
        {
            area: "División ➗",
            dibujo: "📝 Notas: 16, 18, 15, 19  ➔  Promedio = ❓",
            pregunta: "Itzel obtuvo las siguientes notas en Matemática: 16, 18, 15 y 19. ¿Cuál es su promedio (media aritmética)?",
            opciones: ["16", "17", "18", "17.5"],
            correcta: 1,
            pista: "Suma las 4 notas (16 + 18 + 15 + 19 = 68) y divide el total entre 4.",
            explicacion: "68 ÷ 4 = 17 de promedio."
        },
        {
            area: "División ➗",
            dibujo: "📓 5 cuadernos = S/ 32.50  ➔  1 cuaderno = ❓",
            pregunta: "Si 5 cuadernos iguales cuestan S/ 32.50, ¿cuánto cuesta 1 solo cuaderno?",
            opciones: ["S/ 6.20", "S/ 6.50", "S/ 7.50", "S/ 5.50"],
            correcta: 1,
            pista: "Divide 30 ÷ 5 = 6, y 2.50 ÷ 5 = 0.50.",
            explicacion: "32.50 ÷ 5 = S/ 6.50 por cuaderno."
        },
        {
            area: "División ➗",
            dibujo: "🎯 18 aciertos = 60%  ➔  Total preguntas = ❓",
            pregunta: "Si 18 preguntas correctas representan el 60% de un examen, ¿cuántas preguntas tenía el examen en total?",
            opciones: ["25 preguntas", "30 preguntas", "36 preguntas", "24 preguntas"],
            correcta: 1,
            pista: "Si 60% son 18, entonces el 10% son 3 preguntas (18 ÷ 6). El 100% será 3 × 10.",
            explicacion: "(18 × 100) ÷ 60 = 1,800 ÷ 60 = 30 preguntas."
        },

        // --- RAZONAMIENTO MATEMÁTICO, ECUACIONES, SERIES Y RELOJ ---
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️  3x - 5 = 16  ➔  x = ❓",
            pregunta: "Resuelve la ecuación: el triple de un número disminuido en 5 es igual a 16 (3x - 5 = 16). ¿Cuánto vale x?",
            opciones: ["6", "7", "8", "5"],
            correcta: 1,
            pista: "Pasa el -5 sumando al otro lado: 3x = 16 + 5 (21). Luego divide 21 ÷ 3.",
            explicacion: "3x = 21 ➔ x = 21 ÷ 3 = 7."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🕒 Reloj: 3:00 en punto  ➔  Ángulo = ❓ grados",
            pregunta: "¿Qué ángulo forman exactamente las agujas de un reloj cuando marca las 3:00 en punto?",
            opciones: ["45°", "90°", "120°", "60°"],
            correcta: 1,
            pista: "A las 3:00, el minutero apunta al 12 y el horario al 3, formando una esquina perfecta (un cuarto de vuelta).",
            explicacion: "360° ÷ 4 = 90° (ángulo recto)."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 Serie: 2  ➔  6  ➔  18  ➔  54  ➔  ❓",
            pregunta: "Halla el término que continúa en la progresión geométrica: 2, 6, 18, 54, ...",
            opciones: ["108", "162", "152", "112"],
            correcta: 1,
            pista: "Cada término se multiplica por 3 respecto al anterior (2×3=6, 6×3=18, 18×3=54).",
            explicacion: "54 × 3 = 162."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "👕 3 polos  ❌  👖 4 pantalones  ➔  Combinaciones = ❓",
            pregunta: "Itzel tiene 3 polos distintos y 4 pantalones distintos. ¿De cuántas maneras diferentes puede vestirse combinando un polo y un pantalón?",
            opciones: ["7 maneras", "12 maneras", "9 maneras", "16 maneras"],
            correcta: 1,
            pista: "Por cada uno de los 3 polos puede elegir cualquiera de los 4 pantalones (3 × 4).",
            explicacion: "Principio de multiplicación: 3 × 4 = 12 combinaciones diferentes."
        }
    ],

    // 10 Lecturas Largas (6.º de Primaria)
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "📜🔢🏺🇵🇪",
            textoLectura: "Aunque los incas no desarrollaron un sistema de escritura alfabética como el nuestro, administraron un inmenso imperio mediante los quipus. Un quipu consistía en una cuerda principal de la cual colgaban decenas de cuerdas más delgadas de distintos colores y longitudes. Mediante complejos nudos ubicados a diferentes alturas, los quipucamayocs registraban censos de población, cosechas, tributos y hasta relatos históricos.",
            pregunta: "¿Cuál era la función principal de los quipucamayocs en el Tahuantinsuyo?",
            opciones: ["Tejer ropa para el ejército", "Registrar datos numéricos, censos e información mediante nudos en los quipus", "Construir puentes colgantes", "Dirigir ceremonias agrícolas"],
            correcta: 1,
            pista: "Lee la última oración del párrafo sobre quiénes manejaban los quipus.",
            explicacion: "Los quipucamayocs eran los especialistas encargados de codificar e interpretar la información de los quipus."
        },
        {
            area: "Lectura 📖",
            dibujo: "☀️⚡🔋🏡",
            textoLectura: "La energía solar fotovoltaica transforma directamente la luz del Sol en electricidad sin producir humo ni ruido. Esto ocurre gracias a paneles compuestos por celdas de silicio: cuando los fotones de la luz solar golpean el silicio, liberan electrones que generan una corriente eléctrica continua. Hoy en día, esta tecnología permite llevar electricidad limpia incluso a comunidades rurales alejadas de las redes urbanas.",
            pregunta: "¿Por qué la energía solar fotovoltaica se considera una fuente de energía limpia y versátil?",
            opciones: ["Porque funciona únicamente de noche", "Porque genera electricidad sin emitir gases contaminantes y puede instalarse en zonas remotas", "Porque utiliza carbón y petróleo", "Porque no necesita paneles"],
            correcta: 1,
            pista: "Revisa la primera y última oración del texto.",
            explicacion: "Produce electricidad sin contaminar ni hacer ruido, siendo ideal para zonas aisladas."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧬🔬🌱🍎",
            textoLectura: "En el siglo XIX, el monje y científico Gregor Mendel realizó miles de experimentos cruzando plantas de guisantes en el jardín de su monasterio. Al observar características como el color de las flores o la forma de las semillas durante varias generaciones, descubrió que los rasgos biológicos se heredan siguiendo reglas matemáticas predecibles. Sus leyes sentaron las bases de la genética moderna.",
            pregunta: "¿Qué demostró Gregor Mendel con sus experimentos en plantas de guisantes?",
            opciones: ["Que todas las plantas crecen igual sin importar su origen", "Que las características hereditarias se transmiten siguiendo leyes matemáticas predecibles", "Que los guisantes no necesitan agua", "Que el color de las flores depende solo del viento"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "Mendel formuló las leyes fundamentales de la herencia genética mediante observación sistemática."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌊 plásticos 🐢♻️",
            textoLectura: "Cada año millones de toneladas de residuos plásticos terminan en los océanos del planeta. A diferencia de los desechos orgánicos que se descomponen en pocas semanas, una botella de plástico puede tardar más de cuatrocientos años en degradarse, fragmentándose en diminutos microplásticos que son ingeridos por peces y aves marinas. Reducir el uso de plásticos desechables es urgente para proteger la biodiversidad.",
            pregunta: "¿Cuál es el principal peligro de los plásticos en el océano según el texto?",
            opciones: ["Hacen que el agua se congele", "Tardan siglos en degradarse y se convierten en microplásticos que dañan la fauna marina", "Atraen demasiados barcos", "Cambian el color de las nubes"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "Su lenta degradación genera microplásticos tóxicos que ingresan en la cadena alimenticia marina."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌌🕳️⭐🔭",
            textoLectura: "Un agujero negro es una región del espacio donde la gravedad es tan extraordinariamente intensa que nada, ni siquiera la luz que viaja a trescientos mil kilómetros por segundo, puede escapar de su interior una vez que cruza cierto límite llamado horizonte de sucesos. Se forman cuando estrellas gigantescas agotan su combustible y colapsan bajo su propio peso al final de sus vidas.",
            pregunta: "¿Por qué no podemos ver directamente el interior de un agujero negro?",
            opciones: ["Porque está demasiado lejos", "Porque su gravedad es tan fuerte que impide escapar incluso a la luz", "Porque está cubierto de polvo espacial", "Porque solo aparece cada mil años"],
            correcta: 1,
            pista: "Lee la primera oración del texto.",
            explicacion: "Al no permitir que la luz escape de su horizonte de sucesos, resulta invisible de forma directa."
        },
        {
            area: "Lectura 📖",
            dibujo: "🧠💤🌙📚",
            textoLectura: "Dormir entre ocho y nueve horas diarias no es una pérdida de tiempo para los estudiantes; al contrario, es fundamental para aprender. Durante el sueño profundo, el cerebro organiza, filtra y consolida en la memoria a largo plazo todo lo estudiado durante el día, además de eliminar toxinas acumuladas en las neuronas. Quien duerme poco reduce drásticamente su capacidad de concentración.",
            pregunta: "¿Qué función cumple el sueño profundo respecto al aprendizaje?",
            opciones: ["Borra lo que estudiamos para dejar espacio", "Organiza y consolida los recuerdos en la memoria a largo plazo", "Detiene toda actividad del cerebro", "Reemplaza la necesidad de leer"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "Durante el sueño se fijan los conocimientos adquiridos y se recupera la capacidad cognitiva."
        },
        {
            area: "Lectura 📖",
            dibujo: "🏛️⚖️🗣️🇬🇷",
            textoLectura: "La palabra 'democracia' proviene de dos vocablos griegos: 'demos', que significa pueblo, y 'kratos', que significa poder o gobierno. Nació hace más de dos mil quinientos años en la ciudad de Atenas, donde los ciudadanos se reunían en la plaza pública para debatir y votar directamente las leyes. Hoy, la democracia moderna se basa en el voto libre, el respeto a los derechos humanos y la igualdad ante la ley.",
            pregunta: "¿Qué significa etimológicamente la palabra 'democracia'?",
            opciones: ["Gobierno de los reyes", "Poder o gobierno del pueblo", "Ley de los guerreros", "Asamblea de comerciantes"],
            correcta: 1,
            pista: "Revisa la primera oración donde traduce los vocablos 'demos' y 'kratos'.",
            explicacion: "Proviene del griego 'demos' (pueblo) y 'kratos' (poder/gobierno)."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦇🌙🦟🍒",
            textoLectura: "A pesar de la mala fama que tienen en algunas películas, los murciélagos son aliados indispensables para los ecosistemas y la agricultura. La mayoría de las especies se alimentan de insectos nocturnos, llegando un solo murciélago a consumir hasta mil mosquitos en una hora. Otras especies frugívoras polinizan flores nocturnas y dispersan semillas que regeneran los bosques tropicales.",
            pregunta: "¿Cómo benefician los murciélagos a los agricultores y los bosques?",
            opciones: ["Espantando a los pájaros", "Controlando plagas de insectos, polinizando flores y dispersando semillas", "Produciendo miel", "Excavando túneles de riego"],
            correcta: 1,
            pista: "Lee las dos últimas oraciones del párrafo.",
            explicacion: "Actúan como controladores naturales de plagas y regeneradores de bosques."
        },
        {
            area: "Lectura 📖",
            dibujo: "💻🔐🛡️🔑",
            textoLectura: "Navegar por internet ofrece acceso inmediato a bibliotecas, cursos y herramientas creativas, pero también exige responsabilidad digital. Compartir contraseñas, publicar datos personales o abrir enlaces desconocidos puede exponer nuestras cuentas a robos de identidad. Utilizar claves seguras que combinen letras, números y símbolos es la primera barrera de protección en el mundo digital.",
            pregunta: "¿Cuál es la idea principal de este texto?",
            opciones: ["Que internet es demasiado peligroso para usarse", "Que debemos navegar con responsabilidad y proteger nuestra información con contraseñas seguras", "Que todas las páginas web son gratuitas", "Que las computadoras no necesitan seguridad"],
            correcta: 1,
            pista: "Resume el mensaje central de todo el párrafo.",
            explicacion: "Promueve la ciberseguridad básica y el cuidado de los datos personales al usar internet."
        },
        {
            area: "Lectura 📖",
            dibujo: "🏔️❄️💧🌾",
            textoLectura: "Los glaciares de la cordillera de los Andes funcionan como gigantescas reservas naturales de agua dulce. Durante la temporada de lluvias acumulan nieve y hielo en las cumbres, y en los meses secos se derriten lentamente alimentando los ríos que abastecen de agua potable, energía hidroeléctrica y riego a millones de personas en la sierra y la costa. Protegerlos frente al calentamiento global es vital.",
            pregunta: "¿Por qué se dice que los glaciares andinos son 'reservas naturales de agua dulce'?",
            opciones: ["Porque congelan el agua del mar", "Porque almacenan hielo en épocas de lluvia y liberan agua lentamente en meses secos", "Porque producen lluvia artificial", "Porque impiden que crezcan las plantas"],
            correcta: 1,
            pista: "Lee la segunda oración del párrafo.",
            explicacion: "Regulan el ciclo hídrico suministrando agua continua durante las estaciones secas."
        }
    ]
};
