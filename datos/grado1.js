// datos/grado1.js - Aula 1: Bases Visuales (Suma, Resta, Mult., Div., Razonamiento y Lectura)
const nivel1_Grado1 = {
    id: 1,
    nombre: "Bases Visuales",

    // 20 Retos Matemáticos: 4 Suma + 4 Resta + 4 Multiplicación + 4 División + 4 Razonamiento
    matematicas: [
        // --- SUMA VISUAL ---
        {
            area: "Suma ➕",
            dibujo: "🍓🍓🍓🍓🍓  ➕  🍓🍓🍓🍓",
            pregunta: "Itzel recoge 5 fresas en la mañana y 4 fresas en la tarde. ¿Cuántas fresas tiene en total?",
            opciones: ["8 fresas", "9 fresas", "10 fresas", "7 fresas"],
            correcta: 1,
            pista: "Cuenta las 5 fresas de la izquierda y sigue contando las 4 de la derecha: 6, 7, 8...",
            explicacion: "5 + 4 = 9 fresas en total."
        },
        {
            area: "Suma ➕",
            dibujo: "🔟 ➕ 🟡🟡🟡🟡🟡🟡",
            pregunta: "En una caja hay 10 monedas de oro y pones 6 más adentro. ¿Cuántas monedas hay ahora?",
            opciones: ["15", "16", "17", "14"],
            correcta: 1,
            pista: "Una decena (10) más 6 unidades sueltas se escribe poniendo el 1 y el 6 juntos.",
            explicacion: "10 + 6 = 16 monedas."
        },
        {
            area: "Suma ➕",
            dibujo: "🦋🦋🦋🦋🦋🦋🦋  ➕  🦋🦋🦋🦋🦋",
            pregunta: "En el jardín vuelan 7 mariposas azules y llegan 5 mariposas amarillas. ¿Cuántas mariposas hay?",
            opciones: ["11", "13", "12", "10"],
            correcta: 2,
            pista: "De las 5 mariposas nuevas, junta 3 con las 7 para formar 10, y luego suma las 2 que quedan.",
            explicacion: "7 + 5 = 12 mariposas."
        },
        {
            area: "Suma ➕",
            dibujo: "💰 S/ 12  ➕  🪙 S/ 7",
            pregunta: "Itzel tiene 12 soles ahorrados y su papá le regala 7 soles. ¿Cuánto dinero tiene ahora?",
            opciones: ["19 soles", "18 soles", "20 soles", "17 soles"],
            correcta: 0,
            pista: "Suma primero las unidades: 2 + 7 = 9, y mantén el 10 adelante.",
            explicacion: "12 + 7 = 19 soles."
        },

        // --- RESTA VISUAL ---
        {
            area: "Resta ➖",
            dibujo: "🍎🍎🍎🍎🍎 ❌❌❌",
            pregunta: "Había 8 manzanas rojas en la mesa y nos comimos 3. ¿Cuántas manzanas quedan?",
            opciones: ["4", "6", "5", "3"],
            correcta: 2,
            pista: "A 8 quítale 3 contando hacia atrás: 7, 6, 5.",
            explicacion: "8 - 3 = 5 manzanas quedan."
        },
        {
            area: "Resta ➖",
            dibujo: "🎈🎈🎈🎈🎈🎈🎈🎈🎈 💥💥💥💥",
            pregunta: "Un payaso tenía 13 globos y el viento reventó 4. ¿Cuántos globos sanos le quedan?",
            opciones: ["8", "9", "10", "7"],
            correcta: 1,
            pista: "Quita 3 para llegar a 10, y luego quita 1 más.",
            explicacion: "13 - 4 = 9 globos."
        },
        {
            area: "Resta ➖",
            dibujo: "🚌 (15 niños)  ➡️  🚶‍♂️🚶‍♀️🚶‍♂️🚶‍♀️🚶‍♂️ bajan",
            pregunta: "En un bus escolar viajan 15 niños. En el paradero bajan 5. ¿Cuántos niños siguen en el bus?",
            opciones: ["10 niños", "11 niños", "9 niños", "5 niños"],
            correcta: 0,
            pista: "Si al número 15 le quitas las 5 unidades, queda justo una decena.",
            explicacion: "15 - 5 = 10 niños."
        },
        {
            area: "Resta ➖",
            dibujo: "💵 S/ 20  ➖  🧸 S/ 6",
            pregunta: "Pagas con un billete de 20 soles un peluche que cuesta 6 soles. ¿Cuánto vuelto recibes?",
            opciones: ["16 soles", "15 soles", "14 soles", "13 soles"],
            correcta: 2,
            pista: "Piensa cuánto le falta a 6 para llegar a 20: de 6 a 10 hay 4, más 10 son 14.",
            explicacion: "20 - 6 = 14 soles de vuelto."
        },

        // --- MULTIPLICACIÓN VISUAL (GRUPOS IGUALES) ---
        {
            area: "Multiplicación ✖️",
            dibujo: "🧺(🍎🍎)  ➕  🧺(🍎🍎)  ➕  🧺(🍎🍎)",
            pregunta: "Hay 3 canastas y en cada canasta hay 2 manzanas. ¿Cuánto es 3 × 2?",
            opciones: ["5", "6", "4", "8"],
            correcta: 1,
            pista: "Multiplicar es sumar grupos iguales: suma 2 + 2 + 2.",
            explicacion: "3 grupos de 2 (3 × 2) = 6 manzanas."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "✋(5 dedos)  ➕  ✋(5 dedos)  ➕  ✋(5 dedos)",
            pregunta: "Cada mano tiene 5 dedos. Si levantas 3 manos, ¿cuántos dedos hay? (3 × 5)",
            opciones: ["10", "20", "15", "12"],
            correcta: 2,
            pista: "Cuenta de 5 en 5 tres veces: 5, 10, ...",
            explicacion: "3 × 5 = 15 dedos."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "🚗(4 ruedas)  ➕  🚗(4 ruedas)",
            pregunta: "Un auto tiene 4 ruedas. ¿Cuántas ruedas tienen 2 autos juntos? (2 × 4)",
            opciones: ["6", "8", "10", "4"],
            correcta: 1,
            pista: "El doble de 4 es sumar 4 + 4.",
            explicacion: "2 × 4 = 8 ruedas."
        },
        {
            area: "Multiplicación ✖️",
            dibujo: "📦(🍬🍬🍬)  📦(🍬🍬🍬)  📦(🍬🍬🍬)  📦(🍬🍬🍬)",
            pregunta: "Itzel tiene 4 cajitas con 3 caramelos en cada una. ¿Cuánto es 4 × 3?",
            opciones: ["7", "9", "12", "15"],
            correcta: 2,
            pista: "Suma el 3 cuatro veces: 3 + 3 + 3 + 3.",
            explicacion: "4 × 3 = 12 caramelos."
        },

        // --- DIVISIÓN VISUAL (REPARTO EN PARTES IGUALES) ---
        {
            area: "División ➗",
            dibujo: "🍪🍪🍪🍪🍪🍪  ➡️  🍽️  |  🍽️",
            pregunta: "Reparte 6 galletas en 2 platos por igual. ¿Cuántas galletas van en cada plato? (6 ÷ 2)",
            opciones: ["2 galletas", "3 galletas", "4 galletas", "1 galleta"],
            correcta: 1,
            pista: "Dividir entre 2 es sacar la mitad: pon 1 galleta en cada plato hasta acabar las 6.",
            explicacion: "6 ÷ 2 = 3 galletas en cada plato."
        },
        {
            area: "División ➗",
            dibujo: "🥕🥕🥕🥕🥕🥕🥕🥕🥕  ➡️  🐰 | 🐰 | 🐰",
            pregunta: "Hay 9 zanahorias para 3 conejitos. Si todos comen igual, ¿cuántas recibe cada uno? (9 ÷ 3)",
            opciones: ["2", "4", "3", "6"],
            correcta: 2,
            pista: "¿Qué número sumado 3 veces da 9? Prueba: 3 + 3 + 3.",
            explicacion: "9 ÷ 3 = 3 zanahorias para cada conejo."
        },
        {
            area: "División ➗",
            dibujo: "✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️  ➡️  🎒  |  🎒",
            pregunta: "Tienes 10 lápices y los guardas por igual en 2 cartucheras. ¿Cuánto es 10 ÷ 2?",
            opciones: ["5 lápices", "4 lápices", "6 lápices", "2 lápices"],
            correcta: 0,
            pista: "La mitad de 10 es lo mismo que los dedos de una mano.",
            explicacion: "10 ÷ 2 = 5 lápices en cada cartuchera."
        },
        {
            area: "División ➗",
            dibujo: "🍕(12 porciones)  ➡️  👧 | 👦 | 👧 | 👦",
            pregunta: "Una pizza de 12 porciones se reparte entre 4 amigos por igual. ¿Cuánto es 12 ÷ 4?",
            opciones: ["2 porciones", "4 porciones", "3 porciones", "6 porciones"],
            correcta: 2,
            pista: "Busca qué número multiplicado por 4 da 12: 4 × ? = 12.",
            explicacion: "12 ÷ 4 = 3 porciones para cada amigo."
        },

        // --- RAZONAMIENTO MATEMÁTICO ---
        {
            area: "Razonamiento 🧠",
            dibujo: "🔢 2  ➔  4  ➔  6  ➔  8  ➔  ❓",
            pregunta: "Descubre la regla secreta y encuentra el número que sigue: 2, 4, 6, 8, ...",
            opciones: ["9", "10", "11", "12"],
            correcta: 1,
            pista: "Cada número salta sumando +2 al anterior.",
            explicacion: "8 + 2 = 10."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "⚖️  🐱 + 🐱 = 10 kg",
            pregunta: "Si dos gatitos iguales pesan juntos 10 kilos, ¿cuánto pesa UN solo gatito?",
            opciones: ["4 kg", "5 kg", "6 kg", "10 kg"],
            correcta: 1,
            pista: "Busca dos números iguales que sumados den 10.",
            explicacion: "5 kg + 5 kg = 10 kg. Cada gatito pesa 5 kg."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🔴 🔵 🟡  |  🔴 🔵 🟡  |  🔴 ❓",
            pregunta: "Mira la serie de colores: Rojo, Azul, Amarillo, Rojo, Azul, Amarillo, Rojo... ¿Cuál sigue?",
            opciones: ["Amarillo 🟡", "Rojo 🔴", "Azul 🔵", "Verde 🟢"],
            correcta: 2,
            pista: "Después del círculo rojo siempre viene el mismo color.",
            explicacion: "El patrón se repite cada 3 colores: después de Rojo sigue Azul."
        },
        {
            area: "Razonamiento 🧠",
            dibujo: "🎂 Itzel: 8 años  |  👶 Hermano: 3 años menos",
            pregunta: "Itzel tiene 8 años y su primo pequeño tiene 3 años menos que ella. ¿Cuántos años tiene su primo?",
            opciones: ["11 años", "5 años", "6 años", "4 años"],
            correcta: 1,
            pista: "'3 años menos' significa que debes restar 3 a la edad de Itzel.",
            explicacion: "8 - 3 = 5 años tiene su primo."
        }
    ],

    // 10 Lecturas Medianas a Grandes con Preguntas de Comprensión Profunda
    lectura: [
        {
            area: "Lectura 📖",
            dibujo: "🐕🏡🌳🦴",
            textoLectura: "Toby era un cachorro muy curioso que vivía en una casa con jardín grande. Una mañana, mientras escarbaba cerca del árbol de naranjas, encontró una cajita metálica enterrada. Al abrirla junto a su dueña Sofía, descubrieron que adentro había fotos antiguas de cuando los abuelos eran niños.",
            pregunta: "¿Qué encontraron Toby y Sofía dentro de la cajita enterrada?",
            opciones: ["Huesos de juguete", "Monedas de oro", "Fotos antiguas de los abuelos", "Semillas de naranja"],
            correcta: 2,
            pista: "Vuelve a leer la última oración de la historia.",
            explicacion: "El texto dice que dentro había fotos antiguas de cuando los abuelos eran niños."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐝🌻🍯🌈",
            textoLectura: "Las abejas trabajan en equipo todos los días. Visitan cientos de flores para recoger un líquido dulce llamado néctar y lo llevan a su colmena. Allí, con mucho esfuerzo, lo transforman en miel dorada y además ayudan a que nazcan nuevas frutas y plantas en el campo.",
            pregunta: "Según la lectura, ¿para qué recogen néctar de las flores las abejas?",
            opciones: ["Para dormir sobre ellas", "Para transformarlo en miel dorada", "Para cambiar de color", "Para esconderse de la lluvia"],
            correcta: 1,
            pista: "Fíjate en lo que hacen las abejas cuando llevan el néctar a su colmena.",
            explicacion: "Las abejas llevan el néctar a la colmena para transformarlo en miel dorada."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐢🏁🐇🌲",
            textoLectura: "En el bosque, una liebre muy veloz se burlaba de una pequeña tortuga por caminar despacio. La tortuga la retó a una carrera hasta el río. La liebre corrió tan rápido que decidió tomar una siesta bajo un árbol, pero la tortuga siguió caminando sin detenerse ni un segundo y cruzó primero la meta.",
            pregunta: "¿Por qué ganó la carrera la tortuga si era más lenta?",
            opciones: ["Porque tomó un atajo secreto", "Porque fue constante y nunca se detuvo", "Porque la liebre se perdió", "Porque el río estaba cerca"],
            correcta: 1,
            pista: "Compara lo que hizo la liebre (dormir) con lo que hizo la tortuga.",
            explicacion: "La tortuga ganó porque siguió caminando sin detenerse mientras la liebre dormía."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌵💧☀️🏜️",
            textoLectura: "El cactus es una planta sorprendente que vive en lugares muy secos donde casi nunca llueve. A diferencia de otros árboles, el cactus no tiene hojas anchas sino espinas, y guarda mucha agua dentro de su tallo grueso para sobrevivir durante meses bajo el sol fuerte.",
            pregunta: "¿Dónde guarda el agua el cactus para sobrevivir en lugares secos?",
            opciones: ["En sus flores", "Debajo de la arena", "Dentro de su tallo grueso", "En las nubes"],
            correcta: 2,
            pista: "Busca en la segunda oración qué parte gruesa del cactus almacena agua.",
            explicacion: "El cactus guarda agua dentro de su tallo grueso."
        },
        {
            area: "Lectura 📖",
            dibujo: "🐧❄️🌊🐟",
            textoLectura: "Aunque los pingüinos son aves y tienen alas, no pueden volar por el cielo. Sin embargo, sus alas son como aletas muy fuertes que les permiten nadar a gran velocidad bajo el agua helada para atrapar peces. Además, tienen una capa de grasa que los protege del frío polar.",
            pregunta: "¿Para qué les sirven sus alas a los pingüinos?",
            opciones: ["Para volar muy alto", "Para nadar rápido bajo el agua", "Para hacer nidos en los árboles", "Para correr en la nieve"],
            correcta: 1,
            pista: "Lee cómo funcionan sus alas cuando entran al agua helada.",
            explicacion: "Sus alas funcionan como aletas para nadar a gran velocidad."
        },
        {
            area: "Lectura 📖",
            dibujo: "👦🎨🖌️🖼️",
            textoLectura: "A Mateo le encantaba pintar paisajes, pero un día se dio cuenta de que se le había acabado la pintura verde para pintar los árboles. En lugar de rendirse, recordó la clase de arte y mezcló pintura azul con pintura amarilla en su paleta. ¡Con alegría vio cómo aparecía un verde brillante!",
            pregunta: "¿Cómo solucionó Mateo el problema de no tener pintura verde?",
            opciones: ["Compró una caja nueva", "Pintó los árboles de rojo", "Mezcló pintura azul con amarilla", "Dejó el dibujo sin pintar"],
            correcta: 2,
            pista: "Mira los dos colores que combinó en su paleta.",
            explicacion: "Mateo mezcló pintura azul con amarilla para obtener el color verde."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌙⭐🔭🚀",
            textoLectura: "La Luna es el único satélite natural de la Tierra y brilla en el cielo nocturno, aunque no tiene luz propia: refleja la luz del Sol como si fuera un espejo gigante. En 1969, los primeros astronautas viajaron en un cohete espacial y dejaron sus huellas sobre el polvo lunar.",
            pregunta: "¿Por qué brilla la Luna en la noche si no tiene luz propia?",
            opciones: ["Porque tiene focos gigantes", "Porque refleja la luz del Sol", "Porque está hecha de fuego", "Porque está cerca de las estrellas"],
            correcta: 1,
            pista: "El texto la compara con un objeto que devuelve la imagen o la luz.",
            explicacion: "La Luna brilla porque refleja la luz del Sol como un espejo gigante."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦷🪥✨😁",
            textoLectura: "Después de cada comida, quedan pequeños restos de alimentos entre nuestros dientes. Si no los limpiamos, las bacterias producen ácidos que dañan el esmalte y causan caries. Por eso, cepillarse los dientes tres veces al día con pasta dental mantiene nuestra sonrisa sana y fuerte.",
            pregunta: "¿Cuál es la idea principal de este texto?",
            opciones: ["Que los dulces son muy ricos", "La importancia de cepillarse los dientes para evitar caries", "Cómo fabricar pasta dental", "Cuántos dientes tenemos"],
            correcta: 1,
            pista: "Piensa qué consejo importante quiere enseñarnos todo el párrafo.",
            explicacion: "La idea principal es cuidar y cepillar los dientes después de comer para evitar caries."
        },
        {
            area: "Lectura 📖",
            dibujo: "🦙🏔️🧶🇵🇪",
            textoLectura: "La llama es un animal muy querido en los Andes del Perú. Desde hace siglos ayuda a las familias a cargar productos por caminos empinados de montaña sin cansarse fácilmente. Además, su lana suave y abrigadora se utiliza para tejer chullos, ponchos y mantas llenas de colores.",
            pregunta: "¿Qué dos ayudas brinda la llama a las familias de los Andes?",
            opciones: ["Da leche y huevos", "Carga productos en las montañas y da lana para tejer", "Vuela y nada rápido", "Cuida las casas de noche"],
            correcta: 1,
            pista: "Fíjate en lo que hace en los caminos de montaña y para qué sirve su lana.",
            explicacion: "Ayuda a cargar productos por las montañas y su lana sirve para tejer prendas abrigadoras."
        },
        {
            area: "Lectura 📖",
            dibujo: "🌧️☀️🌈✨",
            textoLectura: "El arcoíris es uno de los espectáculos más hermosos de la naturaleza. Aparece en el cielo cuando todavía hay gotitas de lluvia flotando en el aire y al mismo tiempo salen los rayos del Sol. La luz blanca del Sol atraviesa las gotas de agua y se separa en siete colores brillantes.",
            pregunta: "¿Qué dos cosas deben ocurrir al mismo tiempo para que se forme un arcoíris?",
            opciones: ["Nieve y viento fuerte", "Gotitas de lluvia en el aire y rayos del Sol", "Noche oscura y luna llena", "Truenos y relámpagos"],
            correcta: 1,
            pista: "Revisa la segunda oración del párrafo.",
            explicacion: "Se necesita que haya gotitas de lluvia en el aire y rayos de Sol al mismo tiempo."
        }
    ]
};
