/* ============================================================
   ZONA DE REFORZAMIENTO PERSONALIZADA DE ITZEL
   Personas: Nazareth, Amira, Aytana, Miss Francis, Miss Celina, Papá Coby
   Archivo: js/reforzamiento.js
   ============================================================ */

// --- PERSONAS CERCANAS A ITZEL ---
const CLIENTES_TIENDITA = [
    { nombre: "su amiga Nazareth",     emoji: "👧🏻" },
    { nombre: "su amiga Amira",        emoji: "👧🏽" },
    { nombre: "su amiga Aytana",       emoji: "👧🏻" },
    { nombre: "su profesora Francis",  emoji: "👩🏻‍🏫" },
    { nombre: "su profesora Celina",   emoji: "👩🏽‍🏫" },
    { nombre: "su papá Coby",          emoji: "👨🏻" }
];

// --- CATÁLOGO DE LA TIENDA DE MASCOTAS ---
const TIENDA_COMIDA = [
    { id: 'cupcake', nombre: 'Cupcake Estelar', icono: '🧁', precio: 15, xp: 45, desc: '+45 XP para crecer' },
    { id: 'batido',  nombre: 'Batido Mágico',   icono: '🍓', precio: 25, xp: 80, desc: '+80 XP de energía' },
    { id: 'pastel',  nombre: 'Pastel Real',     icono: '🎂', precio: 50, xp: 170, desc: '+170 XP súper salto' }
];

const TIENDA_ACCESORIOS = [
    { id: 'mono',     nombre: 'Moño Estelar',     icono: '🎀', precio: 30,  desc: 'Lindo moño brillante' },
    { id: 'lentes',   nombre: 'Lentes Geniales',  icono: '😎', precio: 50,  desc: 'Gafas de súper estrella' },
    { id: 'sombrero', nombre: 'Sombrero Mago',    icono: '🎩', precio: 80,  desc: 'Gorro mágico con estrellas' },
    { id: 'escudo',   nombre: 'Escudo de Héroe',  icono: '🛡️', precio: 120, desc: 'Escudo dorado protector' }
];

// --- BANCO DE EJERCICIOS MATEMÁTICOS TIPO EXAMEN (SITUACIONES REALES) ---
const BANCO_EXAMEN_MATEMATICA = [
    {
        area: "📝 Examen Mate",
        dibujo: "👧🏻👧🏽👧🏻 🖍️📦",
        pregunta: "Miss Francis reparte 36 colores por igual entre Itzel, Nazareth, Amira y Aytana. Si Itzel le regala 2 de sus colores a su hermano, ¿con cuántos colores se queda Itzel?",
        opciones: ["7 colores", "9 colores", "11 colores", "6 colores"],
        correcta: 0,
        pista: "Primero divide 36 entre las 4 niñas (36 ÷ 4) y luego resta los 2 que regaló.",
        explicacion: "36 ÷ 4 = 9 colores para cada niña. Luego 9 - 2 = 7 colores le quedan a Itzel."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "👩🏽‍🏫🍎 ➕ 🍌",
        pregunta: "Para el compartir del salón, Miss Celina compró 3 bolsas con 8 manzanas cada una y 15 plátanos sueltos. ¿Cuántas frutas llevó en total?",
        opciones: ["39 frutas", "26 frutas", "35 frutas", "42 frutas"],
        correcta: 0,
        pista: "Multiplica 3 bolsas × 8 manzanas y súmale los 15 plátanos.",
        explicacion: "3 × 8 = 24 manzanas. Luego 24 + 15 = 39 frutas en total."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "💵 S/ 50 ➔ 📚✏️",
        pregunta: "Papá Coby le dio S/ 50 a Itzel para sus útiles. Ella compró un libro de cuentos a S/ 24 y una cartuchera a S/ 13. ¿Cuánto dinero le sobró?",
        opciones: ["S/ 13", "S/ 37", "S/ 17", "S/ 23"],
        correcta: 0,
        pista: "Suma primero lo que gastó (24 + 13) y réstalo de S/ 50.",
        explicacion: "Gastó 24 + 13 = S/ 37. Le sobró 50 - 37 = S/ 13."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "🧁🧁🧁🧁 ✖️ 2",
        pregunta: "Nazareth horneó 14 galletas y Aytana horneó el doble que Nazareth. ¿Cuántas galletas tienen entre las dos amigas?",
        opciones: ["42 galletas", "28 galletas", "32 galletas", "38 galletas"],
        correcta: 0,
        pista: "El doble de 14 es 28. Ahora suma las de Nazareth y las de Aytana.",
        explicacion: "Aytana tiene 14 × 2 = 28 galletas. Entre las dos tienen 14 + 28 = 42 galletas."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "🚌⏰ 7:45 ➔ 8:20",
        pregunta: "Itzel y Amira suben al bus escolar a las 7:45 de la mañana y llegan al colegio a las 8:20. ¿Cuántos minutos duró el viaje?",
        opciones: ["35 minutos", "25 minutos", "45 minutos", "30 minutos"],
        correcta: 0,
        pista: "De 7:45 a 8:00 hay 15 minutos, y de 8:00 a 8:20 hay 20 minutos más.",
        explicacion: "15 minutos (hasta las 8:00) + 20 minutos = 35 minutos en total."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "🍕🍕🍕 ➗ 4",
        pregunta: "En el cumpleaños de Amira pidieron 2 pizzas cortadas en 8 tajadas cada una. Si Itzel, Amira, Nazareth y Aytana comen 3 tajadas cada una, ¿cuántas tajadas sobran?",
        opciones: ["4 tajadas", "12 tajadas", "6 tajadas", "2 tajadas"],
        correcta: 0,
        pista: "Total de tajadas: 2 × 8 = 16. Comieron entre las 4 niñas: 4 × 3 = 12.",
        explicacion: "Había 16 tajadas y comieron 12. Sobran 16 - 12 = 4 tajadas."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "📖📄 120 páginas",
        pregunta: "Miss Francis dejó leer un libro de 120 páginas. Itzel leyó 45 páginas el lunes y 38 el martes. ¿Cuántas páginas le faltan para terminar el libro?",
        opciones: ["37 páginas", "83 páginas", "47 páginas", "33 páginas"],
        correcta: 0,
        pista: "Suma 45 + 38 y réstalo de 120.",
        explicacion: "Leyó 45 + 38 = 83 páginas. Le faltan 120 - 83 = 37 páginas."
    },
    {
        area: "📝 Examen Mate",
        dibujo: "🎟️🎪 S/ 8 y S/ 5",
        pregunta: "Miss Celina lleva a Itzel y Nazareth al teatro. La entrada de adulto cuesta S/ 12 y la de cada niña S/ 7. ¿Cuánto pagó Miss Celina en total?",
        opciones: ["S/ 26", "S/ 19", "S/ 24", "S/ 31"],
        correcta: 0,
        pista: "Suma 1 entrada de adulto (12) + 2 entradas de niña (7 + 7).",
        explicacion: "12 + 7 + 7 = S/ 26 pagó Miss Celina."
    }
];

// --- BANCO DE RAZONAMIENTO MATEMÁTICO (TIPO CONCURSO / EXAMEN RM) ---
const BANCO_RAZONAMIENTO_MATEMATICO = [
    {
        area: "🧩 Razonamiento RM",
        dibujo: "🔢 4 ➔ 9 ➔ 15 ➔ 22 ➔ ❓",
        pregunta: "Descubre la regla secreta de la sucesión que escribió Miss Francis en la pizarra: 4, 9, 15, 22, ... ¿Qué número sigue?",
        opciones: ["30", "29", "28", "31"],
        correcta: 0,
        pista: "Mira cuánto aumenta cada salto: +5, +6, +7...",
        explicacion: "De 4 a 9 (+5), de 9 a 15 (+6), de 15 a 22 (+7). El siguiente salto es +8: 22 + 8 = 30."
    },
    {
        area: "🧩 Razonamiento RM",
        dibujo: "⭐ Operador: a ★ b = (a × 2) + b",
        pregunta: "Si el operador mágico significa: a ★ b = (a × 2) + b, ayuda a Nazareth a calcular: 5 ★ 4",
        opciones: ["14", "13", "18", "20"],
        correcta: 0,
        pista: "Reemplaza a = 5 y b = 4 en la fórmula: (5 × 2) + 4.",
        explicacion: "(5 × 2) + 4 = 10 + 4 = 14."
    },
    {
        area: "🧩 Razonamiento RM",
        dibujo: "🔺 Pirámide Numérica",
        pregunta: "En una pirámide donde cada bloque de arriba es la SUMA de los dos de abajo: la base tiene [ 6 ] [ 5 ] [ 8 ]. ¿Qué número va en la punta de arriba?",
        opciones: ["24", "19", "21", "26"],
        correcta: 0,
        pista: "Segundo piso: izquierda (6+5=11) y derecha (5+8=13). Ahora suma ambos.",
        explicacion: "Segundo piso: 11 y 13. Punta de arriba: 11 + 13 = 24."
    },
    {
        area: "🧩 Razonamiento RM",
        dibujo: "🎂⏳ Edades",
        pregunta: "Hoy Itzel tiene 8 años y su papá Coby tiene 36 años. ¿Cuántos años tendrá papá Coby cuando Itzel cumpla 15 años?",
        opciones: ["43 años", "44 años", "41 años", "51 años"],
        correcta: 0,
        pista: "Calcula cuántos años van a pasar para que Itzel pase de 8 a 15 años (15 - 8).",
        explicacion: "Pasarán 15 - 8 = 7 años. Entonces papá Coby tendrá 36 + 7 = 43 años."
    },
    {
        area: "🧩 Razonamiento RM",
        dibujo: "🏃‍♀️🏅 Carrera de Amigas",
        pregunta: "En una carrera: Aytana llegó antes que Amira, y Nazareth llegó antes que Aytana. Si Itzel llegó primera, ¿quién llegó en último lugar?",
        opciones: ["Amira", "Aytana", "Nazareth", "Itzel"],
        correcta: 0,
        pista: "Ordénalas del 1.º al 4.º: 1.º Itzel, 2.º Nazareth...",
        explicacion: "El orden de llegada fue: 1.º Itzel, 2.º Nazareth, 3.º Aytana y 4.º Amira."
    },
    {
        area: "🧩 Razonamiento RM",
        dibujo: "⚖️ Balanza Mágica",
        pregunta: "En una balanza en equilibrio: 2 mochilas iguales pesan lo mismo que 10 libros. Si cada libro pesa 1 kg, ¿cuánto pesan 3 mochilas?",
        opciones: ["15 kg", "5 kg", "10 kg", "30 kg"],
        correcta: 0,
        pista: "Si 2 mochilas = 10 kg, entonces 1 mochila pesa la mitad (5 kg).",
        explicacion: "Cada mochila pesa 5 kg. Por lo tanto, 3 mochilas pesan 3 × 5 = 15 kg."
    },
    {
        area: "🧩 Razonamiento RM",
        dibujo: "🔢 80 ➔ 72 ➔ 64 ➔ 56 ➔ ❓",
        pregunta: "Miss Celina escondió el último número de esta serie descendente: 80, 72, 64, 56, ... ¿Cuál es?",
        opciones: ["48", "46", "50", "44"],
        correcta: 0,
        pista: "Cada número va bajando de 8 en 8 (-8).",
        explicacion: "56 - 8 = 48 (es la tabla del 8 hacia atrás)."
    }
];

// --- BANCO DE HISTORIAS Y LECTURAS CON SUS PERSONAS FAVORITAS ---
const BANCO_LECTURAS_ITZEL = [
    {
        area: "📖 Lectura Mágica",
        dibujo: "🏕️🔭✨👧🏻👧🏽",
        textoLectura: "El viernes por la noche, Papá Coby armó una carpa en el jardín para Itzel y sus amigas Nazareth, Amira y Aytana. Con un telescopio brillante observaron la Luna y contaron 12 estrellas fugaces. Antes de dormir, tomaron chocolate caliente y prometieron cuidar siempre la naturaleza.",
        pregunta: "¿Cuántas estrellas fugaces contaron Itzel y sus amigas con el telescopio?",
        opciones: ["12 estrellas fugaces", "10 estrellas fugaces", "8 estrellas fugaces", "15 estrellas fugaces"],
        correcta: 0,
        pista: "Busca el número exacto en la segunda oración de la historia.",
        explicacion: "La lectura dice que observaron la Luna y contaron 12 estrellas fugaces."
    },
    {
        area: "📖 Lectura Mágica",
        dibujo: "🌱🌻👩🏻‍🏫🏫",
        textoLectura: "En el colegio, la profesora Francis organizó el proyecto 'Nuestro Biohuerto'. Itzel y Aytana sembraron semillas de girasol, mientras Nazareth y Amira regaban las plantas cada mañana. Al cabo de un mes, brotaron flores amarillas enormes que alegraron todo el patio.",
        pregunta: "¿Qué sembraron Itzel y Aytana en el proyecto de Miss Francis?",
        opciones: ["Semillas de girasol", "Semillas de manzana", "Árboles de pino", "Rosas rojas"],
        correcta: 0,
        pista: "Fíjate qué hicieron específicamente Itzel y Aytana.",
        explicacion: "Itzel y Aytana sembraron semillas de girasol, mientras sus amigas las regaban."
    },
    {
        area: "📖 Lectura Mágica",
        dibujo: "🎨🖌️👩🏽‍🏫🏆",
        textoLectura: "La profesora Celina anunció un concurso de pintura sobre el cuidado del agua. Amira dibujó un río limpio con peces de colores, Nazareth pintó nubes de lluvia y Itzel creó un arcoíris protegiendo el planeta. Miss Celina premió a las tres por trabajar en equipo y ayudarse con los pinceles.",
        pregunta: "¿Por qué motivo principal premió Miss Celina a Itzel, Amira y Nazareth?",
        opciones: ["Por trabajar en equipo y ayudarse", "Porque terminaron en 5 minutos", "Porque usaron pintura dorada", "Porque dibujaron un castillo"],
        correcta: 0,
        pista: "Lee la última oración de la historia.",
        explicacion: "Miss Celina las premió por trabajar en equipo y ayudarse entre amigas."
    },
    {
        area: "📖 Lectura Mágica",
        dibujo: "🐶🎈🎂👧🏻👧🏽",
        textoLectura: "Era el cumpleaños de Nazareth. Itzel, Amira y Aytana le prepararon una tarjeta gigante llena de dibujos y pegatinas. Cuando Nazareth abrió la puerta, su perrito Toby empezó a saltar de alegría moviendo la cola. Nazareth abrazó a sus amigas y dijo que ese era el mejor regalo de todos.",
        pregunta: "¿Qué enseñanza nos deja esta historia sobre la amistad?",
        opciones: ["Que los detalles hechos con cariño valen más que cosas caras", "Que los perros no deben entrar a las fiestas", "Que solo importan los juguetes grandes", "Que las tarjetas no son necesarias"],
        correcta: 0,
        pista: "Piensa por qué Nazareth dijo que una tarjeta hecha por sus amigas era el mejor regalo.",
        explicacion: "Demuestra que un detalle hecho con amor y amistad tiene un valor inmenso."
    },
    {
        area: "📖 Lectura Mágica",
        dibujo: "📚🗺️🔍👨🏻👧🏻",
        textoLectura: "Una tarde lluviosa, Papá Coby escondió un mapa del tesoro dentro de un diccionario en la sala. Itzel llamó por videollamada a Aytana y Amira para descifrar juntas las pistas. Al resolver el último acertijo, encontraron una caja con cuentos nuevos y medallas de chocolate.",
        pregunta: "¿Dónde había escondido Papá Coby el mapa del tesoro?",
        opciones: ["Dentro de un diccionario", "Debajo de la cama", "En la mochila del colegio", "Detrás del televisor"],
        correcta: 0,
        pista: "Lee la primera oración del cuento.",
        explicacion: "Papá Coby escondió el mapa dentro de un diccionario en la sala."
    },
    {
        area: "📖 Lectura Mágica",
        dibujo: "🦋🌸🌳👧🏻👧🏽",
        textoLectura: "Durante el paseo escolar con Miss Francis y Miss Celina, Itzel vio una mariposa azul con un ala lastimada sobre una flor. Con mucho cuidado, Nazareth y Itzel la llevaron a una sombra segura y le pusieron una gotita de agua con azúcar. Al rato, la mariposa recuperó fuerzas y volvió a volar.",
        pregunta: "¿Qué hicieron Itzel y Nazareth para ayudar a la mariposa?",
        opciones: ["La llevaron a la sombra y le dieron agua con azúcar", "La guardaron dentro de una caja cerrada", "La llevaron en el autobús a su casa", "Le pintaron las alas con plumones"],
        correcta: 0,
        pista: "Lee lo que hicieron cuando la encontraron sobre la flor.",
        explicacion: "La llevaron a una sombra segura y le dieron una gotita de agua con azúcar."
    }
];

// --- BANCO PARA EL MINIJUEGO: OÍDO VELOZ EN INGLÉS ---
const VOCABULARIO_OIDO_INGLES = [
    { audio: "The red apple",      esp: "La manzana roja",      emoji: "🍎" },
    { audio: "A happy dog",        esp: "Un perrito feliz",     emoji: "🐶" },
    { audio: "The yellow sun",     esp: "El sol amarillo",      emoji: "☀️" },
    { audio: "A blue car",         esp: "Un auto azul",         emoji: "🚗" },
    { audio: "Three bright stars", esp: "Tres estrellas",       emoji: "⭐⭐⭐" },
    { audio: "Drink fresh water",  esp: "Tomar agua",           emoji: "💧" },
    { audio: "Read a good book",   esp: "Leer un libro",        emoji: "📖" },
    { audio: "A green turtle",     esp: "Una tortuga verde",    emoji: "🐢" },
    { audio: "Sweet ice cream",    esp: "Helado dulce",         emoji: "🍦" },
    { audio: "Big grey elephant",  esp: "Elefante grande",      emoji: "🐘" },
    { audio: "Little cute cat",    esp: "Gatito tierno",        emoji: "🐱" },
    { audio: "Yellow banana",      esp: "Plátano amarillo",     emoji: "🍌" },
    { audio: "Purple butterfly",   esp: "Mariposa morada",      emoji: "🦋" },
    { audio: "A shiny crown",      esp: "Una corona brillante", emoji: "👑" },
    { audio: "Flying rocket",      esp: "Cohete volador",       emoji: "🚀" },
    { audio: "Rainbow in the sky", esp: "Arcoíris en el cielo",emoji: "🌈" }
];

// ============================================================
// 1. GESTOR DE VENTANA MODAL DE REFORZAMIENTO
// ============================================================
function cerrarModalReforzamiento() {
    try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch (e) {}
    const existente = document.getElementById('modal-reforzamiento');
    if (existente) existente.remove();
    if (typeof actualizarHeader === 'function') actualizarHeader();
    if (typeof actualizarMapaVisual === 'function') actualizarMapaVisual();
}

function mostrarModalReforzamiento(htmlInterior) {
    cerrarModalReforzamiento();
    const wrapper = `
    <div id="modal-reforzamiento" class="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-3 overflow-y-auto">
        <div class="bg-slate-900 border-2 border-indigo-400/60 rounded-3xl p-5 w-full max-w-md shadow-2xl relative my-auto">
            ${htmlInterior}
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', wrapper);
}

// ============================================================
// 2. HUB PRINCIPAL: ZONA DE REFORZAMIENTO Y MINIJUEGOS
// ============================================================
function abrirZonaPractica() {
    reproducirSonido('acierto');
    const html = `
    <div class="space-y-3.5 text-center">
        <div class="flex justify-between items-center">
            <span class="text-xs font-black bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/40">🎮 Reforzamiento</span>
            <button onclick="cerrarModalReforzamiento()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-3 py-1.5 rounded-full">✖️ Cerrar</button>
        </div>

        <h2 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-sky-300">
            Centro de Reforzamiento de Itzel
        </h2>
        <p class="text-xs text-slate-300">Prepárate para tus exámenes jugando con Nazareth, Amira, Aytana, Miss Francis y Miss Celina:</p>

        <div class="space-y-2.5 text-left">
            <!-- 1. EXAMEN MATEMÁTICA Y RAZONAMIENTO (RM) -->
            <div class="bg-gradient-to-r from-indigo-950 to-purple-950 border-2 border-indigo-400/70 rounded-2xl p-3 space-y-2">
                <div class="flex items-center gap-2.5">
                    <span class="text-2xl">📝🧩</span>
                    <div>
                        <h3 class="font-black text-sm text-amber-300">Práctica Tipo Examen</h3>
                        <p class="text-[11px] text-slate-300">Problemas reales y Razonamiento Matemático.</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="iniciarSesionReforzamiento('mate')" class="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs py-2 rounded-xl shadow transition">
                        🧮 Matemática Real
                    </button>
                    <button onclick="iniciarSesionReforzamiento('rm')" class="bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs py-2 rounded-xl shadow transition">
                        🧩 Razonamiento RM
                    </button>
                </div>
            </div>

            <!-- 2. LECTURAS MÁGICAS CON SUS AMIGAS Y PROFESORAS -->
            <button onclick="iniciarSesionReforzamiento('lectura')" class="w-full bg-gradient-to-r from-amber-950 to-orange-950 hover:from-amber-900 border-2 border-amber-400/70 rounded-2xl p-3 flex items-center justify-between transition transform active:scale-95">
                <div class="flex items-center gap-2.5 text-left">
                    <span class="text-2xl">📖✨</span>
                    <div>
                        <h3 class="font-black text-sm text-amber-300">Cuentos con tus Amigas</h3>
                        <p class="text-[11px] text-slate-200">Historias con Nazareth, Amira, Aytana y tus profes.</p>
                    </div>
                </div>
                <span class="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1.5 rounded-xl shadow">Leer ▶️</span>
            </button>

            <!-- 3. LA TIENDITA CON SUS PERSONAS CERCANAS -->
            <div class="bg-gradient-to-r from-emerald-950 to-teal-950 border-2 border-emerald-500/60 rounded-2xl p-3 space-y-2">
                <div class="flex items-center gap-2.5">
                    <span class="text-2xl">🛒👧🏻</span>
                    <div>
                        <h3 class="font-black text-sm text-emerald-300">La Tiendita de Itzel</h3>
                        <p class="text-[11px] text-slate-300">Atiende a tus amigas y profesoras dando vuelto exacto.</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="iniciarMinijuegoTiendita(1)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-2 rounded-xl shadow transition">
                        🪙 Nivel 1: Vuelto
                    </button>
                    <button onclick="iniciarMinijuegoTiendita(2)" class="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs py-2 rounded-xl shadow transition">
                        🛍️ Nivel 2: Suma + Vuelto
                    </button>
                </div>
            </div>

            <!-- 4. RELOJ MÁGICO Y OÍDO VELOZ -->
            <div class="grid grid-cols-2 gap-2">
                <button onclick="iniciarMinijuegoReloj()" class="bg-sky-950 hover:bg-sky-900 border border-sky-400/60 rounded-2xl p-2.5 flex flex-col items-center text-center gap-1 transition">
                    <span class="text-2xl">🕰️</span>
                    <span class="font-black text-xs text-sky-300">Reloj Mágico</span>
                    <span class="text-[10px] text-slate-300">Aprende la hora</span>
                </button>
                <button onclick="iniciarMinijuegoOidoIngles()" class="bg-pink-950 hover:bg-pink-900 border border-pink-400/60 rounded-2xl p-2.5 flex flex-col items-center text-center gap-1 transition">
                    <span class="text-2xl">🎧</span>
                    <span class="font-black text-xs text-pink-300">Oído Veloz</span>
                    <span class="text-[10px] text-slate-300">Inglés auditivo</span>
                </button>
            </div>
        </div>
    </div>`;
    mostrarModalReforzamiento(html);
}

// Inicia una sesión de Examen Mate, Razonamiento RM o Lecturas en el motor principal
function iniciarSesionReforzamiento(tipo) {
    cerrarModalReforzamiento();
    let banco = [];
    if (tipo === 'mate') banco = [...BANCO_EXAMEN_MATEMATICA];
    else if (tipo === 'rm') banco = [...BANCO_RAZONAMIENTO_MATEMATICO];
    else if (tipo === 'lectura') banco = [...BANCO_LECTURAS_ITZEL];

    if (banco.length === 0) return;

    modoSesionEspecial = 'reforzamiento_' + tipo;
    indiceSesionEspecial = 0;
    aciertosSesionEspecial = 0;
    rachaActual = 0;
    estadisticasSesion = {};
    colaPreguntas = banco.sort(() => Math.random() - 0.5);

    reproducirSonido('entrada');
    mostrarPantalla('pantalla-juego');
    cargarPreguntaActual();
}

// ============================================================
// 3. MINIJUEGO A: LA TIENDITA DE ITZEL (CON AMIGAS Y PROFESORAS)
// ============================================================
let vueltoAcumulado = 0;
let vueltoObjetivo = 0;
let modoTienditaActual = 1;
let veniaDeFinDeAula = false;
let clienteActualTiendita = CLIENTES_TIENDITA[0];

function iniciarMinijuegoTiendita(modo = 1, desdeFinAula = false) {
    reproducirSonido('entrada');
    modoTienditaActual = modo;
    veniaDeFinDeAula = desdeFinAula;
    vueltoAcumulado = 0;

    clienteActualTiendita = CLIENTES_TIENDITA[Math.floor(Math.random() * CLIENTES_TIENDITA.length)];

    const productos = [
        { nombre: "Jugo de Fresa",    emoji: "🧃" },
        { nombre: "Pan con Queso",    emoji: "🥪" },
        { nombre: "Cuaderno Mágico",  emoji: "📓" },
        { nombre: "Galletas",         emoji: "🍪" },
        { nombre: "Caja de Colores",  emoji: "🖍️" },
        { nombre: "Manzana Roja",     emoji: "🍎" }
    ];

    let detalleCompraHTML = '';
    let costoTotal = 0;

    if (modo === 2) {
        const p1 = productos[Math.floor(Math.random() * productos.length)];
        let p2 = productos[Math.floor(Math.random() * productos.length)];
        if (p1.nombre === p2.nombre) p2 = { nombre: "Helado", emoji: "🍦" };

        const precio1 = Math.floor(Math.random() * 5) + 2;
        const precio2 = Math.floor(Math.random() * 5) + 2;
        costoTotal = precio1 + precio2;

        detalleCompraHTML = `
            <div class="bg-slate-800/90 p-3 rounded-2xl border border-slate-600 text-left space-y-1.5">
                <p class="text-[10px] font-extrabold text-amber-300 uppercase">🛍️ Compras de ${clienteActualTiendita.nombre} (Suma los precios):</p>
                <div class="flex justify-between text-xs font-bold text-white">
                    <span>${p1.emoji} ${p1.nombre}</span>
                    <span class="text-rose-300">S/ ${precio1}.00</span>
                </div>
                <div class="flex justify-between text-xs font-bold text-white">
                    <span>${p2.emoji} ${p2.nombre}</span>
                    <span class="text-rose-300">S/ ${precio2}.00</span>
                </div>
            </div>`;
    } else {
        const p1 = productos[Math.floor(Math.random() * productos.length)];
        costoTotal = Math.floor(Math.random() * 7) + 2;
        detalleCompraHTML = `
            <div class="bg-slate-800/90 p-3 rounded-2xl border border-slate-600 flex justify-between items-center">
                <span class="text-sm font-extrabold text-white">${p1.emoji} ${p1.nombre}</span>
                <span class="text-xl font-black text-rose-400">S/ ${costoTotal}.00</span>
            </div>`;
    }

    const pagoCliente = costoTotal >= 10 ? 20 : 10;
    vueltoObjetivo = pagoCliente - costoTotal;

    const html = `
    <div class="text-center space-y-3">
        <div class="flex justify-between items-center">
            <span class="text-[10px] font-black bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full">
                ${modo === 2 ? '🛍️ Modo Súper Cajera' : '🛒 La Tiendita'}
            </span>
            <button onclick="finalizarSalidaTiendita()" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full">✖️ Salir</button>
        </div>

        <!-- TARJETA DEL CLIENTE CERCANO -->
        <div class="bg-gradient-to-r from-pink-950/80 to-indigo-950/80 border border-pink-400/50 rounded-2xl p-2.5 flex items-center gap-3 text-left">
            <span class="text-3xl">${clienteActualTiendita.emoji}</span>
            <p class="text-xs text-pink-100 font-bold leading-snug">
                ¡Llegó <strong class="text-amber-300">${clienteActualTiendita.nombre}</strong> a tu tienda! Ayúdala a cobrar y darle su vuelto exacto:
            </p>
        </div>

        ${detalleCompraHTML}

        <div class="bg-emerald-950/70 p-2.5 rounded-2xl border border-emerald-400/50 flex justify-between items-center">
            <span class="text-xs font-bold text-emerald-200">💵 Paga con billete de:</span>
            <span class="text-xl font-black text-emerald-300">S/ ${pagoCliente}.00</span>
        </div>

        <div class="bg-amber-950/50 p-3 rounded-2xl border-2 border-amber-500/50 shadow-md">
            <p class="text-xs font-extrabold text-amber-300 uppercase mb-2">
                Tu Bandeja de Vuelto: <span class="text-white text-base">S/ <span id="vuelto-actual">0</span></span>
            </p>
            <div class="flex justify-center items-end gap-3 h-16">
                <button onclick="agregarVuelto(5)" class="w-16 h-16 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-full border-4 border-amber-300 font-black text-xl shadow-lg transform active:scale-90 transition">S/5</button>
                <button onclick="agregarVuelto(2)" class="w-14 h-14 bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-full border-4 border-slate-400 font-black text-lg shadow-lg transform active:scale-90 transition">S/2</button>
                <button onclick="agregarVuelto(1)" class="w-12 h-12 bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-full border-4 border-slate-400 font-black text-base shadow-lg transform active:scale-90 transition">S/1</button>
            </div>
        </div>

        <div class="flex gap-2">
            <button onclick="reiniciarVuelto()" class="w-1/3 bg-rose-950 hover:bg-rose-900 border border-rose-500 text-rose-200 font-bold py-2.5 rounded-xl text-xs transition">Vaciar</button>
            <button onclick="entregarVueltoAlCliente()" class="w-2/3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-black py-2.5 rounded-xl text-base shadow-lg transition">✅ Dar Vuelto</button>
        </div>
        <p id="mensaje-tiendita" class="text-xs font-bold min-h-[1.25rem] text-amber-300"></p>
    </div>`;

    mostrarModalReforzamiento(html);
}

function agregarVuelto(valor) {
    vueltoAcumulado += valor;
    const el = document.getElementById('vuelto-actual');
    if (el) el.textContent = vueltoAcumulado;
    reproducirSonido('acierto');
}

function reiniciarVuelto() {
    vueltoAcumulado = 0;
    const el = document.getElementById('vuelto-actual');
    if (el) el.textContent = vueltoAcumulado;
    reproducirSonido('error');
}

function finalizarSalidaTiendita() {
    cerrarModalReforzamiento();
    if (veniaDeFinDeAula) {
        veniaDeFinDeAula = false;
        mostrarPantalla('pantalla-victoria');
    }
}

function entregarVueltoAlCliente() {
    const msj = document.getElementById('mensaje-tiendita');
    if (!msj) return;

    if (vueltoAcumulado === vueltoObjetivo) {
        reproducirSonido('victoria');
        try { if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch (e) {}
        estadoJuego.xp += 25;
        estadoJuego.monedas += 15;
        guardarEstado();
        actualizarHeader();

        msj.className = "text-xs font-black text-emerald-400";
        msj.innerHTML = `🌟 ¡Vuelto exacto para ${clienteActualTiendita.nombre}! +15 🪙 y +25 XP.<br>
            <div class="flex gap-2 mt-2">
                <button onclick="iniciarMinijuegoTiendita(${modoTienditaActual}, ${veniaDeFinDeAula})" class="flex-1 bg-sky-600 text-white py-2 rounded-xl font-extrabold">Atender a otro 🔄</button>
                <button onclick="finalizarSalidaTiendita()" class="flex-1 bg-emerald-600 text-white py-2 rounded-xl font-extrabold">Listo ✅</button>
            </div>`;
    } else {
        reproducirSonido('error');
        msj.className = "text-xs font-black text-rose-400";
        msj.textContent = `❌ Revisa bien la cuenta para ${clienteActualTiendita.nombre}. ¡Intenta otra vez!`;
        vueltoAcumulado = 0;
        const el = document.getElementById('vuelto-actual');
        if (el) el.textContent = 0;
    }
}

// ============================================================
// 4. MINIJUEGO B: EL RELOJ MÁGICO
// ============================================================
let relojObjetivoHora = 3;
let relojObjetivoMin = 0;
let relojUsuarioHora = 12;
let relojUsuarioMin = 0;

function iniciarMinijuegoReloj() {
    reproducirSonido('entrada');
    relojObjetivoHora = Math.floor(Math.random() * 12) + 1;
    const minutosPosibles = [0, 15, 30, 45];
    relojObjetivoMin = minutosPosibles[Math.floor(Math.random() * minutosPosibles.length)];

    relojUsuarioHora = 12;
    relojUsuarioMin = 0;

    const minTexto = relojObjetivoMin === 0 ? "en punto" : (relojObjetivoMin === 15 ? "y cuarto" : (relojObjetivoMin === 30 ? "y media" : "y cuarenta y cinco"));
    const horaFormateada = `${relojObjetivoHora}:${relojObjetivoMin === 0 ? '00' : relojObjetivoMin}`;

    const html = `
    <div class="text-center space-y-3.5">
        <div class="flex justify-between items-center">
            <button onclick="abrirZonaPractica()" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full">⬅️ Menú</button>
            <span class="text-[10px] font-black bg-sky-500/20 text-sky-300 px-2.5 py-1 rounded-full">🕰️ El Reloj Mágico</span>
        </div>

        <div class="bg-sky-950/80 border border-sky-400/50 rounded-2xl p-3">
            <p class="text-xs text-sky-200 font-bold">Mueve las agujas para marcar:</p>
            <p class="text-2xl font-black text-amber-300 mt-0.5">${horaFormateada} <span class="text-sm text-white font-bold">(${relojObjetivoHora} ${minTexto})</span></p>
        </div>

        <div class="flex justify-center py-1">
            <div id="contenedor-svg-reloj" class="w-48 h-48"></div>
        </div>

        <p class="text-xs font-extrabold text-slate-300">
            Tu reloj marca: <span id="lectura-digital-usuario" class="text-emerald-400 text-base">12:00</span>
        </p>

        <div class="grid grid-cols-2 gap-2.5">
            <button onclick="moverAgujaHora()" class="bg-pink-600 hover:bg-pink-500 text-white font-black py-3 rounded-2xl text-xs shadow-lg transform active:scale-95 transition">
                🕒 +1 Hora (Aguja Corta)
            </button>
            <button onclick="moverAgujaMinuto()" class="bg-sky-600 hover:bg-sky-500 text-white font-black py-3 rounded-2xl text-xs shadow-lg transform active:scale-95 transition">
                ⏱️ +15 Min (Aguja Larga)
            </button>
        </div>

        <button onclick="verificarHoraReloj()" class="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black py-3 rounded-2xl text-base shadow-lg">
            ✅ Comprobar Hora
        </button>
        <p id="mensaje-reloj" class="text-xs font-bold min-h-[1.25rem]"></p>
    </div>`;

    mostrarModalReforzamiento(html);
    dibujarRelojSVG();
}

function dibujarRelojSVG() {
    const cont = document.getElementById('contenedor-svg-reloj');
    if (!cont) return;

    let numerosSVG = '';
    for (let n = 1; n <= 12; n++) {
        const ang = (n * 30) * (Math.PI / 180);
        const x = 100 + 68 * Math.sin(ang);
        const y = 100 - 68 * Math.cos(ang) + 5;
        numerosSVG += `<text x="${x}" y="${y}" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="900">${n}</text>`;
    }

    const angHora = ((relojUsuarioHora % 12) + relojUsuarioMin / 60) * 30;
    const angMin = relojUsuarioMin * 6;

    cont.innerHTML = `
    <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-xl">
        <circle cx="100" cy="100" r="92" fill="#0f172a" stroke="#38bdf8" stroke-width="6"/>
        <circle cx="100" cy="100" r="84" fill="#1e293b" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 4"/>
        ${numerosSVG}
        <line x1="100" y1="100" x2="100" y2="52" stroke="#f472b6" stroke-width="7" stroke-linecap="round" transform="rotate(${angHora} 100 100)"/>
        <line x1="100" y1="100" x2="100" y2="30" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round" transform="rotate(${angMin} 100 100)"/>
        <circle cx="100" cy="100" r="7" fill="#fbbf24"/>
    </svg>`;

    const dig = document.getElementById('lectura-digital-usuario');
    if (dig) dig.textContent = `${relojUsuarioHora}:${relojUsuarioMin === 0 ? '00' : relojUsuarioMin}`;
}

function moverAgujaHora() {
    relojUsuarioHora = (relojUsuarioHora % 12) + 1;
    reproducirSonido('acierto');
    dibujarRelojSVG();
}

function moverAgujaMinuto() {
    relojUsuarioMin = (relojUsuarioMin + 15) % 60;
    reproducirSonido('acierto');
    dibujarRelojSVG();
}

function verificarHoraReloj() {
    const msj = document.getElementById('mensaje-reloj');
    if (!msj) return;

    if (relojUsuarioHora === relojObjetivoHora && relojUsuarioMin === relojObjetivoMin) {
        reproducirSonido('victoria');
        try { if (typeof confetti === 'function') confetti({ particleCount: 55, spread: 65, origin: { y: 0.6 } }); } catch (e) {}
        estadoJuego.xp += 25;
        estadoJuego.monedas += 15;
        guardarEstado();
        actualizarHeader();

        msj.className = "text-xs font-black text-emerald-400";
        msj.innerHTML = `🎉 ¡Hora exacta! +15 🪙 y +25 XP.<br>
            <button onclick="iniciarMinijuegoReloj()" class="mt-2 w-full bg-sky-600 text-white py-2 rounded-xl font-extrabold">Siguiente Hora 🕰️</button>`;
    } else {
        reproducirSonido('error');
        msj.className = "text-xs font-bold text-rose-400";
        msj.textContent = `❌ Aún no es esa hora. Fíjate en la aguja corta (hora) y la larga (minutos).`;
    }
}

// ============================================================
// 5. MINIJUEGO C: OÍDO VELOZ EN INGLÉS
// ============================================================
let oidoItemActual = null;

function iniciarMinijuegoOidoIngles() {
    reproducirSonido('entrada');
    const mezclados = [...VOCABULARIO_OIDO_INGLES].sort(() => Math.random() - 0.5);
    oidoItemActual = mezclados[0];
    const opciones = mezclados.slice(0, 4).sort(() => Math.random() - 0.5);

    const botonesHTML = opciones.map(op => `
        <button onclick="evaluarOidoIngles('${op.audio.replace(/'/g, "\\'")}', this)" class="bg-slate-800 hover:bg-slate-700 border-2 border-indigo-500/50 rounded-2xl p-4 flex flex-col items-center gap-1 transition transform active:scale-95">
            <span class="text-4xl">${op.emoji}</span>
        </button>
    `).join('');

    const html = `
    <div class="text-center space-y-4">
        <div class="flex justify-between items-center">
            <button onclick="abrirZonaPractica()" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full">⬅️ Menú</button>
            <span class="text-[10px] font-black bg-pink-500/20 text-pink-300 px-2.5 py-1 rounded-full">🎧 Oído Veloz</span>
        </div>

        <h2 class="text-lg font-black text-white">Escucha y toca la imagen correcta:</h2>

        <div class="flex justify-center gap-2">
            <button onclick="hablarOidoIngles(0.95)" class="bg-sky-600 hover:bg-sky-500 text-white font-black px-4 py-2.5 rounded-xl text-xs shadow">🔊 Escuchar</button>
            <button onclick="hablarOidoIngles(0.60)" class="bg-indigo-600 hover:bg-indigo-500 text-white font-black px-4 py-2.5 rounded-xl text-xs shadow">🐢 Más Lento</button>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-1">
            ${botonesHTML}
        </div>

        <p id="mensaje-oido-ingles" class="text-xs font-bold min-h-[1.5rem]"></p>
    </div>`;

    mostrarModalReforzamiento(html);
    setTimeout(() => hablarOidoIngles(0.92), 300);
}

function hablarOidoIngles(vel = 0.92) {
    try {
        if (!('speechSynthesis' in window) || !oidoItemActual) return;
        window.speechSynthesis.cancel();
        const voz = new SpeechSynthesisUtterance(oidoItemActual.audio);
        voz.lang = 'en-US';
        voz.rate = vel;
        window.speechSynthesis.speak(voz);
    } catch (e) {}
}

function evaluarOidoIngles(elegido, btn) {
    const msj = document.getElementById('mensaje-oido-ingles');
    if (!msj || !oidoItemActual) return;

    if (elegido === oidoItemActual.audio) {
        reproducirSonido('victoria');
        btn.className = "bg-emerald-600 border-2 border-emerald-300 rounded-2xl p-4 flex flex-col items-center gap-1 shadow-lg";
        estadoJuego.xp += 20;
        estadoJuego.monedas += 10;
        guardarEstado();
        actualizarHeader();

        msj.className = "text-xs font-black text-emerald-400";
        msj.innerHTML = `🌟 ¡Yes! "${oidoItemActual.audio}" (${oidoItemActual.esp}) • +10 🪙`;
        setTimeout(() => iniciarMinijuegoOidoIngles(), 1400);
    } else {
        reproducirSonido('error');
        btn.className = "bg-rose-700 border-2 border-rose-400 rounded-2xl p-4 flex flex-col items-center gap-1 opacity-70";
        msj.className = "text-xs font-bold text-rose-300";
        msj.textContent = "❌ Escucha otra vez e inténtalo de nuevo.";
        hablarOidoIngles(0.75);
    }
}

// ============================================================
// 6. TIENDA DE MASCOTAS (COMIDA Y ACCESORIOS EQUIPABLES)
// ============================================================
let estadoAnimacionTienda = 'idle';

function abrirTiendaMascotas() {
    reproducirSonido('acierto');
    estadoAnimacionTienda = 'idle';
    renderizarTiendaMascotas();
}

function renderizarTiendaMascotas(mensajeFeedback = '') {
    if (!estadoJuego.accesoriosComprados) estadoJuego.accesoriosComprados = [];
    if (!estadoJuego.accesoriosEquipados) estadoJuego.accesoriosEquipados = [];

    const petSVG = (typeof generarSVGMascota === 'function')
        ? generarSVGMascota(estadoJuego.mascota, estadoAnimacionTienda, estadoJuego.xp || 0, false, estadoJuego.accesoriosEquipados)
        : '';

    const etapaTxt = (typeof obtenerEtapaMascota === 'function')
        ? obtenerEtapaMascota(estadoJuego.xp || 0).nombre
        : 'Bebé Tierno';

    const comidaHTML = TIENDA_COMIDA.map(item => `
        <div class="bg-slate-800/90 border border-slate-700 rounded-2xl p-2.5 flex flex-col items-center text-center justify-between">
            <span class="text-2xl">${item.icono}</span>
            <p class="font-extrabold text-[11px] text-white mt-1">${item.nombre}</p>
            <p class="text-[9px] text-emerald-300 font-bold">${item.desc}</p>
            <button onclick="comprarComidaMascota('${item.id}')" class="mt-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] py-1.5 rounded-xl shadow">
                🪙 ${item.precio}
            </button>
        </div>
    `).join('');

    const accesoriosHTML = TIENDA_ACCESORIOS.map(acc => {
        const comprado = estadoJuego.accesoriosComprados.includes(acc.id);
        const equipado = estadoJuego.accesoriosEquipados.includes(acc.id);

        let btnAcc = '';
        if (equipado) {
            btnAcc = `<button onclick="toggleAccesorioMascota('${acc.id}')" class="mt-2 w-full bg-emerald-600 text-white font-black text-[11px] py-1.5 rounded-xl">✅ Puesto</button>`;
        } else if (comprado) {
            btnAcc = `<button onclick="toggleAccesorioMascota('${acc.id}')" class="mt-2 w-full bg-sky-600 hover:bg-sky-500 text-white font-black text-[11px] py-1.5 rounded-xl">👕 Poner</button>`;
        } else {
            btnAcc = `<button onclick="comprarAccesorioMascota('${acc.id}')" class="mt-2 w-full bg-pink-600 hover:bg-pink-500 text-white font-black text-[11px] py-1.5 rounded-xl">🪙 ${acc.precio}</button>`;
        }

        return `
        <div class="bg-slate-800/90 border ${equipado ? 'border-emerald-400' : 'border-slate-700'} rounded-2xl p-2.5 flex flex-col items-center text-center justify-between">
            <span class="text-2xl">${acc.icono}</span>
            <p class="font-extrabold text-[11px] text-white mt-1">${acc.nombre}</p>
            <p class="text-[9px] text-slate-300">${acc.desc}</p>
            ${btnAcc}
        </div>`;
    }).join('');

    const html = `
    <div class="space-y-3.5 text-center">
        <div class="flex justify-between items-center">
            <span class="text-xs font-black bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
                Tus Monedas: 🪙 ${estadoJuego.monedas || 0}
            </span>
            <button onclick="cerrarModalReforzamiento()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-3 py-1.5 rounded-full">✖️ Cerrar</button>
        </div>

        <div class="bg-gradient-to-b from-sky-950 to-emerald-950 border-2 border-emerald-400/60 rounded-2xl p-3 flex items-center justify-around">
            <div class="w-28 h-28">${petSVG}</div>
            <div class="text-left space-y-1">
                <span class="text-[10px] uppercase font-black text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-500/40">${etapaTxt}</span>
                <p class="text-sm font-black text-white">Nivel XP: ${estadoJuego.xp || 0}</p>
                <p class="text-[10px] text-slate-300">Aliméntala para que crezca o ponle accesorios.</p>
            </div>
        </div>

        ${mensajeFeedback ? `<p class="text-xs font-black text-amber-300 bg-slate-950/80 py-1.5 px-3 rounded-xl">${mensajeFeedback}</p>` : ''}

        <div class="text-left space-y-1.5">
            <h3 class="text-xs font-black text-emerald-300 uppercase">🍰 Comida Mágica (Sube XP)</h3>
            <div class="grid grid-cols-3 gap-2">${comidaHTML}</div>
        </div>

        <div class="text-left space-y-1.5">
            <h3 class="text-xs font-black text-pink-300 uppercase">👑 Accesorios (Se ven en clase)</h3>
            <div class="grid grid-cols-2 gap-2">${accesoriosHTML}</div>
        </div>
    </div>`;

    mostrarModalReforzamiento(html);
}

function comprarComidaMascota(id) {
    const item = TIENDA_COMIDA.find(c => c.id === id);
    if (!item) return;

    if ((estadoJuego.monedas || 0) < item.precio) {
        reproducirSonido('error');
        renderizarTiendaMascotas("❌ Te faltan monedas 🪙. ¡Juega un aula o minijuego!");
        return;
    }

    estadoJuego.monedas -= item.precio;
    estadoJuego.xp = (estadoJuego.xp || 0) + item.xp;
    estadoAnimacionTienda = 'happy';
    reproducirSonido('victoria');
    try { if (typeof confetti === 'function') confetti({ particleCount: 40, spread: 60, origin: { y: 0.5 } }); } catch (e) {}
    guardarEstado();
    actualizarHeader();
    renderizarTiendaMascotas(`😋 ¡Qué rico ${item.nombre}! Tu mascota ganó +${item.xp} XP.`);
}

function comprarAccesorioMascota(id) {
    const acc = TIENDA_ACCESORIOS.find(a => a.id === id);
    if (!acc) return;

    if ((estadoJuego.monedas || 0) < acc.precio) {
        reproducirSonido('error');
        renderizarTiendaMascotas("❌ Te faltan monedas 🪙 para este accesorio.");
        return;
    }

    estadoJuego.monedas -= acc.precio;
    if (!estadoJuego.accesoriosComprados) estadoJuego.accesoriosComprados = [];
    if (!estadoJuego.accesoriosEquipados) estadoJuego.accesoriosEquipados = [];

    estadoJuego.accesoriosComprados.push(acc.id);
    estadoJuego.accesoriosEquipados.push(acc.id);
    estadoAnimacionTienda = 'happy';
    reproducirSonido('victoria');
    guardarEstado();
    actualizarHeader();
    renderizarTiendaMascotas(`✨ ¡Compraste y equipaste ${acc.nombre}!`);
}

function toggleAccesorioMascota(id) {
    if (!estadoJuego.accesoriosEquipados) estadoJuego.accesoriosEquipados = [];
    const idx = estadoJuego.accesoriosEquipados.indexOf(id);
    if (idx >= 0) {
        estadoJuego.accesoriosEquipados.splice(idx, 1);
        estadoAnimacionTienda = 'idle';
    } else {
        estadoJuego.accesoriosEquipados.push(id);
        estadoAnimacionTienda = 'happy';
        reproducirSonido('acierto');
    }
    guardarEstado();
    actualizarHeader();
    renderizarTiendaMascotas();
}
