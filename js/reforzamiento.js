/* ============================================================
   ZONA DE PRÁCTICA, MINIJUEGOS Y TIENDA DE MASCOTAS
   Archivo: js/reforzamiento.js
   ============================================================ */

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
// 2. HUB PRINCIPAL: ZONA DE PRÁCTICA (3 MINIJUEGOS)
// ============================================================
function abrirZonaPractica() {
    reproducirSonido('acierto');
    const html = `
    <div class="space-y-4 text-center">
        <div class="flex justify-between items-center">
            <span class="text-xs font-black bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/40">🎮 Entrenamiento</span>
            <button onclick="cerrarModalReforzamiento()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-3 py-1.5 rounded-full">✖️ Cerrar</button>
        </div>

        <h2 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-sky-300">
            Zona de Juegos de Reforzamiento
        </h2>
        <p class="text-xs text-slate-300">Practica temas importantes en partidas cortas y gana monedas (🪙) para tu mascota:</p>

        <div class="space-y-3 text-left">
            <!-- JUEGO 1: LA TIENDITA -->
            <div class="bg-gradient-to-r from-emerald-950 to-teal-950 border-2 border-emerald-500/60 rounded-2xl p-3.5 space-y-2">
                <div class="flex items-center gap-3">
                    <span class="text-3xl">🛒</span>
                    <div>
                        <h3 class="font-black text-sm text-emerald-300">La Tiendita de Itzel</h3>
                        <p class="text-[11px] text-slate-300">Calcula sumas y entrega el vuelto exacto con monedas.</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 pt-1">
                    <button onclick="iniciarMinijuegoTiendita(1)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-2 rounded-xl shadow transition">
                        🪙 Nivel 1: Vuelto
                    </button>
                    <button onclick="iniciarMinijuegoTiendita(2)" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-2 rounded-xl shadow transition">
                        🛍️ Nivel 2: Suma + Vuelto
                    </button>
                </div>
            </div>

            <!-- JUEGO 2: EL RELOJ MÁGICO -->
            <button onclick="iniciarMinijuegoReloj()" class="w-full bg-gradient-to-r from-sky-950 to-indigo-950 hover:from-sky-900 border-2 border-sky-400/60 rounded-2xl p-3.5 flex items-center justify-between transition transform active:scale-95">
                <div class="flex items-center gap-3 text-left">
                    <span class="text-3xl">🕰️</span>
                    <div>
                        <h3 class="font-black text-sm text-sky-300">El Reloj Mágico</h3>
                        <p class="text-[11px] text-slate-300">Mueve las agujas y aprende a leer la hora.</p>
                    </div>
                </div>
                <span class="bg-sky-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-xl shadow">Jugar ▶️</span>
            </button>

            <!-- JUEGO 3: OÍDO VELOZ EN INGLÉS -->
            <button onclick="iniciarMinijuegoOidoIngles()" class="w-full bg-gradient-to-r from-purple-950 to-pink-950 hover:from-purple-900 border-2 border-pink-400/60 rounded-2xl p-3.5 flex items-center justify-between transition transform active:scale-95">
                <div class="flex items-center gap-3 text-left">
                    <span class="text-3xl">🎧</span>
                    <div>
                        <h3 class="font-black text-sm text-pink-300">Oído Veloz (English)</h3>
                        <p class="text-[11px] text-slate-300">Escucha la frase en inglés y atrapa su dibujo.</p>
                    </div>
                </div>
                <span class="bg-pink-500 text-white font-black text-xs px-3 py-1.5 rounded-xl shadow">Jugar ▶️</span>
            </button>
        </div>
    </div>`;
    mostrarModalReforzamiento(html);
}

// ============================================================
// 3. MINIJUEGO A: LA TIENDITA DE ITZEL (NIVEL 1 Y NIVEL 2)
// ============================================================
let vueltoAcumulado = 0;
let vueltoObjetivo = 0;
let modoTienditaActual = 1;
let veniaDeFinDeAula = false;

function iniciarMinijuegoTiendita(modo = 1, desdeFinAula = false) {
    reproducirSonido('entrada');
    modoTienditaActual = modo;
    veniaDeFinDeAula = desdeFinAula;
    vueltoAcumulado = 0;

    const productos = [
        { nombre: "Jugo de Fresa", emoji: "🧃" },
        { nombre: "Pan con Queso", emoji: "🥪" },
        { nombre: "Manzana Roja",  emoji: "🍎" },
        { nombre: "Galletas",      emoji: "🍪" },
        { nombre: "Leche Fresca",  emoji: "🥛" },
        { nombre: "Plátano",       emoji: "🍌" }
    ];

    let detalleCompraHTML = '';
    let costoTotal = 0;

    if (modo === 2) {
        const p1 = productos[Math.floor(Math.random() * productos.length)];
        let p2 = productos[Math.floor(Math.random() * productos.length)];
        if (p1.nombre === p2.nombre) p2 = { nombre: "Helado", emoji: "🍦" };

        const precio1 = Math.floor(Math.random() * 5) + 2; // S/ 2 a S/ 6
        const precio2 = Math.floor(Math.random() * 5) + 2; // S/ 2 a S/ 6
        costoTotal = precio1 + precio2;

        detalleCompraHTML = `
            <div class="bg-slate-800/90 p-3 rounded-2xl border border-slate-600 text-left space-y-1.5">
                <p class="text-[10px] font-extrabold text-amber-300 uppercase">🛍️ Carrito del Cliente (Suma los precios):</p>
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
        costoTotal = Math.floor(Math.random() * 7) + 2; // S/ 2 a S/ 8
        detalleCompraHTML = `
            <div class="bg-slate-800/90 p-3 rounded-2xl border border-slate-600 flex justify-between items-center">
                <span class="text-sm font-extrabold text-white">${p1.emoji} ${p1.nombre}</span>
                <span class="text-xl font-black text-rose-400">S/ ${costoTotal}.00</span>
            </div>`;
    }

    const pagoCliente = costoTotal >= 10 ? 20 : 10;
    vueltoObjetivo = pagoCliente - costoTotal;

    const html = `
    <div class="text-center space-y-3.5">
        <div class="flex justify-between items-center">
            <span class="text-[10px] font-black bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full">
                ${modo === 2 ? '🛍️ Modo Súper Cajera' : '🛒 La Tiendita'}
            </span>
            <button onclick="finalizarSalidaTiendita()" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full">✖️ Salir</button>
        </div>

        <h2 class="text-xl font-black text-emerald-400">¡A Cobrar y Dar Vuelto!</h2>
        ${detalleCompraHTML}

        <div class="bg-emerald-950/70 p-3 rounded-2xl border border-emerald-400/50 flex justify-between items-center">
            <span class="text-xs font-bold text-emerald-200">💵 El cliente paga con:</span>
            <span class="text-2xl font-black text-emerald-300">S/ ${pagoCliente}.00</span>
        </div>

        <div class="bg-amber-950/50 p-3.5 rounded-2xl border-2 border-amber-500/50 shadow-md">
            <p class="text-xs font-extrabold text-amber-300 uppercase mb-2.5">
                Tu Bandeja de Vuelto: <span class="text-white text-base">S/ <span id="vuelto-actual">0</span></span>
            </p>
            <div class="flex justify-center items-end gap-3 h-16">
                <button onclick="agregarVuelto(5)" class="w-16 h-16 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-full border-4 border-amber-300 font-black text-xl shadow-lg transform active:scale-90 transition">S/5</button>
                <button onclick="agregarVuelto(2)" class="w-14 h-14 bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-full border-4 border-slate-400 font-black text-lg shadow-lg transform active:scale-90 transition">S/2</button>
                <button onclick="agregarVuelto(1)" class="w-12 h-12 bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-full border-4 border-slate-400 font-black text-base shadow-lg transform active:scale-90 transition">S/1</button>
            </div>
        </div>

        <div class="flex gap-2">
            <button onclick="reiniciarVuelto()" class="w-1/3 bg-rose-950 hover:bg-rose-900 border border-rose-500 text-rose-200 font-bold py-3 rounded-xl text-xs transition">Vaciar</button>
            <button onclick="entregarVueltoAlCliente()" class="w-2/3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-black py-3 rounded-xl text-base shadow-lg transition">✅ Dar Vuelto</button>
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
        msj.innerHTML = `🌟 ¡Vuelto exacto! Ganaste +15 🪙 y +25 XP.<br>
            <div class="flex gap-2 mt-2">
                <button onclick="iniciarMinijuegoTiendita(${modoTienditaActual}, ${veniaDeFinDeAula})" class="flex-1 bg-sky-600 text-white py-2 rounded-xl font-extrabold">Otro Cliente 🔄</button>
                <button onclick="finalizarSalidaTiendita()" class="flex-1 bg-emerald-600 text-white py-2 rounded-xl font-extrabold">Listo ✅</button>
            </div>`;
    } else {
        reproducirSonido('error');
        msj.className = "text-xs font-black text-rose-400";
        msj.textContent = `❌ Ups, revisa bien la resta. ¡Intenta otra vez!`;
        vueltoAcumulado = 0;
        const el = document.getElementById('vuelto-actual');
        if (el) el.textContent = 0;
    }
}

// ============================================================
// 4. MINIJUEGO B: EL RELOJ MÁGICO (HORAS Y MINUTOS)
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
            <button onclick="abrirZonaPractica()" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full">⬅️ Juegos</button>
            <span class="text-[10px] font-black bg-sky-500/20 text-sky-300 px-2.5 py-1 rounded-full">🕰️ El Reloj Mágico</span>
        </div>

        <div class="bg-sky-950/80 border border-sky-400/50 rounded-2xl p-3">
            <p class="text-xs text-sky-200 font-bold">Mueve las agujas para marcar:</p>
            <p class="text-2xl font-black text-amber-300 mt-0.5">${horaFormateada} <span class="text-sm text-white font-bold">(${relojObjetivoHora} ${minTexto})</span></p>
        </div>

        <!-- RELOJ ANALÓGICO SVG -->
        <div class="flex justify-center py-1">
            <div id="contenedor-svg-reloj" class="w-48 h-48"></div>
        </div>

        <p class="text-xs font-extrabold text-slate-300">
            Tu reloj marca: <span id="lectura-digital-usuario" class="text-emerald-400 text-base">12:00</span>
        </p>

        <!-- BOTONES PARA MOVER AGUJAS -->
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
        <!-- Aguja de la Hora (Corta - Rosa) -->
        <line x1="100" y1="100" x2="100" y2="52" stroke="#f472b6" stroke-width="7" stroke-linecap="round" transform="rotate(${angHora} 100 100)"/>
        <!-- Aguja de los Minutos (Larga - Celeste) -->
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
            <button onclick="abrirZonaPractica()" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full">⬅️ Juegos</button>
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

        <!-- ESCENARIO DE PREVISUALIZACIÓN DE MASCOTA -->
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
