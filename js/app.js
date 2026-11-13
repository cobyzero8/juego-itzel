/* ============================================================
   MOTOR PEDAGÓGICO V8 (Orden Correcto + Mascota Fija + Tiendita)
   ============================================================ */

let modoProgramadorActivo = false;
let mundoActivo = 'mate'; // 'mate' | 'ingles'

// Catálogos en orden correcto (De Nivel 1 a Nivel Máximo)
const CATALOGO_MATE = [
    { num: 1, titulo: "Aula 1: 1.º de Primaria", subtitulo: "Bases Visuales", icono: "⭐", varDatos: () => (typeof nivel1_Grado1 !== 'undefined') ? nivel1_Grado1 : null },
    { num: 2, titulo: "Aula 2: 2.º de Primaria", subtitulo: "Agilidad Mental", icono: "🌲", varDatos: () => (typeof nivel2_Grado2 !== 'undefined') ? nivel2_Grado2 : null },
    { num: 3, titulo: "Aula 3: 3.º de Primaria", subtitulo: "Dominio y Tablas", icono: "🏰", varDatos: () => (typeof nivel3_Grado3 !== 'undefined') ? nivel3_Grado3 : null },
    { num: 4, titulo: "Aula 4: 4.º de Primaria", subtitulo: "Fracciones y Retos", icono: "🏔️", varDatos: () => (typeof nivel4_Grado4 !== 'undefined') ? nivel4_Grado4 : null },
    { num: 5, titulo: "Aula 5: 5.º de Primaria", subtitulo: "Decimales y Lógica", icono: "🚀", varDatos: () => (typeof nivel5_Grado5 !== 'undefined') ? nivel5_Grado5 : null },
    { num: 6, titulo: "Aula 6: 6.º de Primaria", subtitulo: "Proporciones y Pre-Álgebra", icono: "👑", varDatos: () => (typeof nivel6_Grado6 !== 'undefined') ? nivel6_Grado6 : null },
    { num: 7, titulo: "Secundaria 1.º", subtitulo: "Álgebra y Ecuaciones", icono: "⚡", varDatos: () => (typeof nivel7_Sec1 !== 'undefined') ? nivel7_Sec1 : null },
    { num: 8, titulo: "Secundaria 2.º", subtitulo: "Geometría y Funciones", icono: "🔮", varDatos: () => (typeof nivel8_Sec2 !== 'undefined') ? nivel8_Sec2 : null },
    { num: 9, titulo: "Secundaria 3.º", subtitulo: "Razonamiento Avanzado", icono: "🌌", varDatos: () => (typeof nivel9_Sec3 !== 'undefined') ? nivel9_Sec3 : null },
    { num: 10, titulo: "Secundaria 4.º", subtitulo: "Trigonometría y Análisis", icono: "🔥", varDatos: () => (typeof nivel10_Sec4 !== 'undefined') ? nivel10_Sec4 : null },
    { num: 11, titulo: "Secundaria 5.º", subtitulo: "Nivel Pre-Universitario", icono: "🎓", varDatos: () => (typeof nivel11_Sec5 !== 'undefined') ? nivel11_Sec5 : null }
];

const CATALOGO_INGLES = [
    { num: 1, titulo: "Level 1: Starter Kids", subtitulo: "Saludos, Colores y Animales", icono: "🧸", varDatos: () => (typeof inglesNivel1 !== 'undefined') ? inglesNivel1 : null },
    { num: 2, titulo: "Level 2: Basic A1", subtitulo: "Familia y Presentación", icono: "🌱", varDatos: () => (typeof inglesNivel2 !== 'undefined') ? inglesNivel2 : null },
    { num: 3, titulo: "Level 3: Elementary A2", subtitulo: "Rutinas, Hora y Ciudad", icono: "🚲", varDatos: () => (typeof inglesNivel3 !== 'undefined') ? inglesNivel3 : null },
    { num: 4, titulo: "Level 4: Pre-Intermediate B1", subtitulo: "Pasado e Historias", icono: "✈️", varDatos: () => (typeof inglesNivel4 !== 'undefined') ? inglesNivel4 : null },
    { num: 5, titulo: "Level 5: Intermediate B1+", subtitulo: "Ciencia y Futuro", icono: "🌍", varDatos: () => (typeof inglesNivel5 !== 'undefined') ? inglesNivel5 : null },
    { num: 6, titulo: "Level 6: Upper-Intermediate B2", subtitulo: "Expresiones Prácticas", icono: "🎯", varDatos: () => (typeof inglesNivel6 !== 'undefined') ? inglesNivel6 : null },
    { num: 7, titulo: "Level 7: Advanced C1", subtitulo: "Lectura Crítica", icono: "🏛️", varDatos: () => (typeof inglesNivel7 !== 'undefined') ? inglesNivel7 : null },
    { num: 8, titulo: "Level 8: Mastery Pro C2", subtitulo: "Cima y Fluidez Total", icono: "👑", varDatos: () => (typeof inglesNivel8 !== 'undefined') ? inglesNivel8 : null }
];

// DICCIONARIO DE EVOLUCIÓN (Bebé -> Joven -> Adulto)
const EVOLUCION_MASCOTAS = {
    'perrito':   { lvl1: '🐾', lvl2: '🐶', lvl3: '🐕' },
    'gatito':    { lvl1: '🍼', lvl2: '🐱', lvl3: '🐈' },
    'conejito':  { lvl1: '🥕', lvl2: '🐰', lvl3: '🐇' },
    'unicornio': { lvl1: '🥚', lvl2: '🦄', lvl3: '🎠' }
};

let estadoJuego = {
    mascota: 'perrito', // Mascota por defecto
    xp: 0,
    monedas: 0,
    nivelMaxDesbloqueado: 1,
    progresoNiveles: {},
    inglesMaxDesbloqueado: 1,
    progresoIngles: {}
};

let mascotaSeleccionadaTemporal = null;
let nivelJugando = 1;
let colaPreguntas = [];
let totalInicialAula = 30;
let rachaActual = 0;
let estadisticasSesion = {};

// --- 1. SONIDOS Y VOZ ---
function reproducirSonido(tipo) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (tipo === 'acierto' || tipo === 'entrada') {
            osc.type = 'sine';
            const notas = tipo === 'entrada' ? [440, 554.37, 659.25, 880] : [523.25, 659.25, 783.99];
            notas.forEach((f, i) => osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.1));
            gain.gain.setValueAtTime(0.16, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.55);
            osc.start();
            osc.stop(ctx.currentTime + 0.55);
        } else if (tipo === 'error') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.setValueAtTime(180, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        } else if (tipo === 'victoria') {
            osc.type = 'sine';
            const notas = [523.25, 659.25, 783.99, 1046.50];
            notas.forEach((f, i) => osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.12));
            gain.gain.setValueAtTime(0.18, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.65);
            osc.start();
            osc.stop(ctx.currentTime + 0.65);
        }
    } catch (e) {}
}

function pronunciarIngles(velocidad = 0.95) {
    try {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const progObj = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
        const q = colaPreguntas[progObj[nivelJugando].indice];
        if (!q || !q.audioIngles) return;
        const voz = new SpeechSynthesisUtterance(q.audioIngles);
        voz.lang = 'en-US';
        voz.rate = velocidad;
        window.speechSynthesis.speak(voz);
    } catch (e) {}
}

function leerRetoEnVozAlta() {
    try {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const progObj = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
        const q = colaPreguntas[progObj[nivelJugando].indice];
        if (!q) return;
        if (mundoActivo === 'ingles' && q.audioIngles) {
            pronunciarIngles(0.95);
            return;
        }
        const textoCompleto = (q.textoLectura ? q.textoLectura + ". " : "") + q.pregunta;
        const voz = new SpeechSynthesisUtterance(textoCompleto);
        voz.lang = 'es-PE';
        voz.rate = 0.95;
        window.speechSynthesis.speak(voz);
    } catch (e) {}
}

function practicarVozIngles() {
    const resEl = document.getElementById('resultado-mic-ingles');
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRec) {
        resEl.style.display = 'block';
        resEl.className = "text-[10px] font-bold pt-1 text-amber-300";
        resEl.textContent = "⚠️ Usa 🔊 Normal o 🐢 Lento y repítelo en voz alta.";
        return;
    }

    const progObj = estadoJuego.progresoIngles[nivelJugando];
    const q = colaPreguntas[progObj.indice];
    if (!q || !q.audioIngles) return;

    const recognition = new SpeechRec();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    resEl.style.display = 'block';
    resEl.className = "text-[10px] font-bold pt-1 text-sky-300 animate-pulse";
    resEl.textContent = "🎙️ Escuchando... di la frase ahora";

    recognition.onresult = (event) => {
        const dicho = event.results[0][0].transcript.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        const objetivo = q.audioIngles.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        resEl.classList.remove('animate-pulse');

        if (dicho === objetivo || objetivo.includes(dicho) || dicho.includes(objetivo)) {
            reproducirSonido('acierto');
            resEl.className = "text-[10px] font-extrabold pt-1 text-emerald-400";
            resEl.textContent = `🌟 ¡Perfecto! Dijiste: "${event.results[0][0].transcript}"`;
        } else {
            resEl.className = "text-[10px] font-bold pt-1 text-amber-300";
            resEl.textContent = `🗣️ Escuché: "${event.results[0][0].transcript}". ¡Prueba otra vez!`;
        }
    };
    recognition.onerror = () => {
        resEl.classList.remove('animate-pulse');
        resEl.className = "text-[10px] font-bold pt-1 text-rose-300";
        resEl.textContent = "⚠️ No te escuché. Usa el botón de Voz.";
    };
    recognition.start();
}

// --- 2. SISTEMA DE MASCOTA VIRTUAL ---
function abrirSelectorMascota() {
    mostrarPantalla('pantalla-mascota');
}

function seleccionarMascota(tipo, elemento) {
    mascotaSeleccionadaTemporal = tipo;
    reproducirSonido('acierto');
    document.querySelectorAll('.mascota-card').forEach(c => {
        c.style.borderColor = '#475569';
        c.style.backgroundColor = 'rgba(30, 41, 59, 0.9)';
    });
    elemento.style.borderColor = '#10b981';
    elemento.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
    document.getElementById('btn-confirmar-mascota').classList.remove('hidden');
}

function confirmarMascota() {
    estadoJuego.mascota = mascotaSeleccionadaTemporal;
    reproducirSonido('victoria');
    guardarEstado();
    volverAlMapa();
}

function obtenerIconoMascota() {
    if (!estadoJuego.mascota) return '🐶'; // Perro por defecto
    const xp = estadoJuego.xp || 0;
    const raza = EVOLUCION_MASCOTAS[estadoJuego.mascota];
    if (!raza) return '🐶';
    
    if (xp < 300) return raza.lvl1;       
    else if (xp < 1000) return raza.lvl2; 
    else return raza.lvl3;                
}

// --- 3. LOGIN PROGRAMADOR ---
function abrirModalLogin() {
    const modal = document.getElementById('modal-login-dev');
    if (!modal) return;
    if (modoProgramadorActivo) { aplicarConfiguracionDev(); return; }
    document.getElementById('dev-user').value = "";
    document.getElementById('dev-pass').value = "";
    document.getElementById('login-error-msg').textContent = "";
    modal.style.display = 'flex';
}
function cerrarModalLogin() { document.getElementById('modal-login-dev').style.display = 'none'; }
function validarLoginDev() {
    const user = document.getElementById('dev-user').value.trim().toLowerCase();
    const pass = document.getElementById('dev-pass').value.trim();
    if (user === 'coby' && pass === '123456pp') {
        modoProgramadorActivo = true;
        sessionStorage.setItem('itzel_dev_auth', 'true');
        reproducirSonido('acierto');
        cerrarModalLogin();
        aplicarConfiguracionDev();
    } else {
        reproducirSonido('error');
        document.getElementById('login-error-msg').textContent = "❌ Error";
    }
}
function cerrarModoDev() { modoProgramadorActivo = false; sessionStorage.removeItem('itzel_dev_auth'); aplicarConfiguracionDev(); }
function aplicarConfiguracionDev() {
    const panelMapa = document.getElementById('panel-dev-mapa');
    const btnTest = document.getElementById('btn-test-aula');
    if (panelMapa) panelMapa.style.display = modoProgramadorActivo ? 'flex' : 'none';
    if (btnTest) btnTest.style.display = modoProgramadorActivo ? 'inline-block' : 'none';
}
function testDesbloquearTodo() {
    if (!modoProgramadorActivo) return;
    estadoJuego.nivelMaxDesbloqueado = 11;
    estadoJuego.inglesMaxDesbloqueado = 8;
    guardarEstado(); actualizarMapaVisual(); reproducirSonido('acierto');
}
function testReiniciarJuego() {
    if (!modoProgramadorActivo) return;
    localStorage.removeItem('itzel_mundo_v7');
    location.reload();
}
function testCompletarNivelRapido() {
    if (!modoProgramadorActivo) return;
    const progObj = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const progreso = progObj[nivelJugando];
    progreso.aciertos = totalInicialAula;
    progreso.indice = colaPreguntas.length;
    estadoJuego.xp += 250;
    finalizarBloqueNivel();
}

// --- 4. CÁLCULO DE META Y NAVEGACIÓN ---
function calcularProgresoTotal() {
    let mate = 0;
    for (let i = 1; i <= 11; i++) if (estadoJuego.progresoNiveles[i]?.completado) mate++;
    let ingles = 0;
    for (let i = 1; i <= 8; i++) if (estadoJuego.progresoIngles[i]?.completado) ingles++;
    return { totalCompletados: mate + ingles, totalMundos: 19 };
}

function abrirPremioFinal() {
    reproducirSonido('acierto');
    mostrarPantalla('pantalla-premio-final');
    const prog = calcularProgresoTotal();
    const cont = document.getElementById('contenido-cofre-meta');

    if (prog.totalCompletados >= prog.totalMundos) {
        cont.innerHTML = `<p class="text-amber-300 font-black text-base">🎉 ¡FELICIDADES, ITZEL!</p>
            <p>Completaste TODA la academia.</p>
            <p class="bg-pink-950/80 p-3 rounded-xl border border-pink-400 text-pink-200 font-bold mt-2">
                👑 <strong>MENSAJE DE PAPÁ (Coby):</strong><br>"¡Estoy súper orgulloso de ti! Como cumpliste tu gran objetivo, ¡dime ahora mismo qué regalo deseas que te compre!" ❤️
            </p>`;
    } else {
        cont.innerHTML = `<p class="text-amber-300 font-black text-sm">🔒 ¡El Cofre está casi listo!</p>
            <p>Has completado <strong class="text-emerald-400">${prog.totalCompletados} de 19</strong> mundos.</p>
            <p class="text-pink-300 font-bold mt-1">✨ Te faltan <strong class="text-amber-400">${prog.totalMundos - prog.totalCompletados} aulas/niveles</strong> para pedirle tu regalo a papá.</p>`;
    }
}

function cambiarMundo(nuevoMundo) {
    mundoActivo = nuevoMundo;
    reproducirSonido('acierto');
    const tm = document.getElementById('tab-mundo-mate'), ti = document.getElementById('tab-mundo-ingles');
    if (mundoActivo === 'mate') {
        tm.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow transition";
        ti.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs text-slate-300 hover:bg-slate-800 transition";
    } else {
        ti.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow transition";
        tm.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs text-slate-300 hover:bg-slate-800 transition";
    }
    actualizarMapaVisual();
}

function mostrarPantalla(idPantalla) {
    try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch (e) {}
    const pantallas = ['pantalla-portada', 'pantalla-mascota', 'pantalla-mapa', 'pantalla-animacion', 'pantalla-juego', 'pantalla-victoria', 'pantalla-premio-final'];
    pantallas.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === idPantalla) ? 'block' : 'none';
    });
    const header = document.getElementById('main-header');
    if (header) header.style.display = (idPantalla === 'pantalla-portada') ? 'none' : 'flex';
    aplicarConfiguracionDev();
}

function entrarDesdePortada() {
    reproducirSonido('entrada');
    try { if (typeof confetti === 'function') confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } }); } catch (e) {}
    mostrarPantalla('pantalla-mapa');
    actualizarHeader();
    actualizarMapaVisual();
}

function volverAlMapa() {
    mostrarPantalla('pantalla-mapa');
    actualizarHeader();
    actualizarMapaVisual();
}

// --- 5. ACTUALIZAR VISUALES (Header y Mapa) ---
function actualizarHeader() {
    if (document.getElementById('score-display')) document.getElementById('score-display').textContent = `${estadoJuego.xp || 0} XP`;
    if (document.getElementById('monedas-display')) document.getElementById('monedas-display').textContent = `🪙 ${estadoJuego.monedas || 0}`;

    const mascotaBox = document.getElementById('header-mascota-box');
    const mascotaIcon = document.getElementById('header-mascota-icon');
    
    if (estadoJuego.mascota) {
        if(mascotaBox) mascotaBox.style.display = 'flex';
        if(mascotaIcon) mascotaIcon.textContent = obtenerIconoMascota();
    }
}

function actualizarMapaVisual() {
    if (document.getElementById('nivel-titulo')) document.getElementById('nivel-titulo').textContent = (mundoActivo === 'ingles') ? "🇺🇸 Academia de Inglés" : "🏫 Mate y Lectura";
    
    const prog = calcularProgresoTotal();
    const textoMeta = document.getElementById('estado-meta-texto');
    if (textoMeta) {
        textoMeta.textContent = prog.totalCompletados >= prog.totalMundos ? "¡Abre el Cofre! 🎁" : `Faltan ${prog.totalMundos - prog.totalCompletados} mundos ✨`;
    }

    const contenedor = document.getElementById('lista-aulas-container');
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const catalogo = (mundoActivo === 'ingles') ? CATALOGO_INGLES : CATALOGO_MATE;
    const maxDesb = (mundoActivo === 'ingles') ? (estadoJuego.inglesMaxDesbloqueado || 1) : (estadoJuego.nivelMaxDesbloqueado || 1);
    const mapaProgreso = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;

    // EL BUCLE AHORA CORRE NORMAL (De Nivel 1 hacia Abajo) - Sin reverse()
    catalogo.forEach(aula => {
        let d = null;
        try { d = aula.varDatos(); } catch (e) {}
        const desbloqueado = maxDesb >= aula.num;
        const lista = d ? (mundoActivo === 'ingles' ? (d.retos || []) : [...(d.matematicas || []), ...(d.lectura || [])]) : [];
        const tiene = lista.length > 0;
        const total = tiene ? lista.length : 30;
        const p = mapaProgreso[aula.num] || { indice: 0, aciertos: 0, completado: false, mejorNota: null, mejorTotal: total };

        const div = document.createElement('div');
        div.onclick = () => intentarNivel(aula.num);

        if (desbloqueado && tiene) {
            if (p.completado) {
                div.className = "cursor-pointer bg-gradient-to-r from-emerald-700 to-teal-700 p-3.5 rounded-2xl border-2 border-emerald-300/80 flex justify-between items-center shadow-lg transform active:scale-95 transition mb-3";
                div.innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">✅</span><div class="text-left"><h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3><p class="text-[10px] text-emerald-100">Logrado: ${p.mejorNota}/${p.mejorTotal} aciertos</p></div></div><span class="text-[10px] bg-emerald-950/70 text-emerald-200 px-3 py-1.5 rounded-full font-extrabold">Repasar 🔄</span>`;
            } else if (p.mejorNota !== null && p.indice === 0) {
                div.className = "cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 p-3.5 rounded-2xl border-2 border-amber-300 flex justify-between items-center shadow-lg transform active:scale-95 transition mb-3";
                div.innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">💪</span><div class="text-left"><h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3><p class="text-[10px] text-amber-100">Inténtalo otra vez</p></div></div><span class="text-[10px] bg-white text-orange-950 px-3 py-1.5 rounded-full font-extrabold shadow">Reintentar</span>`;
            } else if (p.indice > 0) {
                div.className = "cursor-pointer bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-3.5 rounded-2xl border-2 border-amber-300 flex justify-between items-center shadow-lg transform active:scale-95 transition mb-3";
                div.innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">${aula.icono}</span><div class="text-left"><h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3><p class="text-[10px] text-amber-200">⏳ Reto ${p.indice + 1} de ${total}</p></div></div><span class="text-[10px] bg-amber-400 text-slate-950 px-3 py-1.5 rounded-full font-extrabold shadow">Seguir ▶️</span>`;
            } else {
                const gr = mundoActivo === 'ingles' ? "from-sky-600 via-blue-600 to-indigo-700 border-sky-300/80" : "from-pink-600 via-purple-600 to-indigo-600 border-pink-300/80";
                div.className = `cursor-pointer bg-gradient-to-r ${gr} p-3.5 rounded-2xl border-2 flex justify-between items-center shadow-lg transform active:scale-95 transition mb-3`;
                div.innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">${aula.icono}</span><div class="text-left"><h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3><p class="text-[10px] text-sky-100">${aula.subtitulo}</p></div></div><span class="text-[10px] bg-white text-indigo-950 px-3 py-1.5 rounded-full font-extrabold shadow">¡ENTRAR!</span>`;
            }
        } else if (!tiene) {
            div.className = "opacity-40 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/70 flex justify-between items-center cursor-not-allowed mb-3";
            div.innerHTML = `<div class="flex items-center gap-3"><span class="text-xl">${aula.icono}</span><div class="text-left"><h3 class="font-bold text-xs text-slate-400">${aula.titulo}</h3></div></div><span class="text-[9px] bg-slate-800 px-2 py-1 rounded-full text-slate-500 font-bold">Pronto</span>`;
        } else {
            div.className = "opacity-60 bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 flex justify-between items-center cursor-not-allowed mb-3";
            div.innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">${aula.icono}</span><div class="text-left"><h3 class="font-extrabold text-sm text-slate-300">${aula.titulo}</h3></div></div><span class="text-[10px] bg-slate-700 px-3 py-1 rounded-full font-bold">🔒</span>`;
        }
        contenedor.appendChild(div);
    });
}

// --- 6. JUEGO ---
function intentarNivel(num) {
    const ct = mundoActivo === 'ingles' ? CATALOGO_INGLES : CATALOGO_MATE;
    const md = mundoActivo === 'ingles' ? estadoJuego.inglesMaxDesbloqueado : estadoJuego.nivelMaxDesbloqueado;
    const mp = mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const info = ct.find(a => a.num === num);
    if (!info) return;

    let dt = null;
    try { dt = info.varDatos(); } catch (e) {}
    if (!dt || num > md) { reproducirSonido('error'); return; }

    if (!mp[num]) mp[num] = { indice: 0, aciertos: 0, completado: false };
    nivelJugando = num;
    colaPreguntas = mundoActivo === 'ingles' ? [...(dt.retos || [])] : [...(dt.matematicas || []), ...(dt.lectura || [])];
    totalInicialAula = colaPreguntas.length;
    rachaActual = 0;
    estadisticasSesion = {};

    if (mp[num].indice === 0 || mp[num].indice >= colaPreguntas.length) {
        mp[num].indice = 0;
        mp[num].aciertos = 0;
    }

    document.getElementById('anim-avatar-box').innerHTML = `<div class="medallon-contenedor w-28 h-28"><div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto object-top w-28 h-28"></div>`;
    document.getElementById('anim-titulo').textContent = `¡${info.titulo}!`;
    document.getElementById('anim-subtitulo').textContent = `${info.subtitulo} • ¡Tú puedes, Itzel!`;
    
    reproducirSonido('acierto');
    mostrarPantalla('pantalla-animacion');

    setTimeout(() => {
        mostrarPantalla('pantalla-juego');
        cargarPreguntaActual();
    }, 1400);
}

function cargarPreguntaActual() {
    const mp = mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const prog = mp[nivelJugando];
    const idx = prog.indice;

    document.getElementById('caja-pista').style.display = 'none';
    document.getElementById('feedback-box').style.display = 'none';

    // Poner mascota en la tarjeta de juego
    document.getElementById('mascota-avatar-juego').textContent = obtenerIconoMascota();
    document.getElementById('mascota-mensaje-juego').textContent = "¡Tú puedes!";

    if (idx >= colaPreguntas.length) {
        finalizarBloqueNivel();
        return;
    }

    const q = colaPreguntas[idx];
    const area = q.area || (mundoActivo === 'ingles' ? "English 🇺🇸" : "Mate 🧮");
    const tag = document.getElementById('categoria-tag');
    tag.textContent = area;

    document.getElementById('texto-pista').textContent = q.pista || "Lee bien las opciones.";
    const caja = document.getElementById('escena-caja');
    caja.classList.remove('escena-visual'); void caja.offsetWidth; caja.classList.add('escena-visual');
    document.getElementById('escena-dibujo').textContent = q.dibujo || "🌟";

    const pi = document.getElementById('panel-audio-ingles');
    if (mundoActivo === 'ingles' && q.audioIngles) {
        pi.style.display = 'block';
        document.getElementById('ingles-frase-destacada').textContent = `"${q.audioIngles}"`;
        document.getElementById('ingles-fonetica').textContent = q.fonetica || "";
        setTimeout(() => pronunciarIngles(0.95), 350);
    } else { pi.style.display = 'none'; }

    const cl = document.getElementById('caja-lectura');
    if (q.textoLectura) { cl.style.display = 'block'; document.getElementById('texto-lectura').textContent = q.textoLectura; }
    else { cl.style.display = 'none'; }

    document.getElementById('contador-pregunta').textContent = `${idx + 1} / ${colaPreguntas.length}`;
    document.getElementById('pregunta-texto').textContent = q.pregunta;
    document.getElementById('barra-exp').style.width = `${(idx / colaPreguntas.length) * 100}%`;

    const cont = document.getElementById('opciones-container');
    cont.innerHTML = "";
    q.opciones.forEach((op, i) => {
        const btn = document.createElement('button');
        btn.textContent = op;
        btn.className = "btn-opcion w-full bg-slate-800/95 hover:bg-slate-700 border-2 border-indigo-500/40 p-3 rounded-xl font-bold transition text-slate-100 text-left px-3 text-sm";
        btn.onclick = () => evaluarRespuesta(i, q, btn);
        cont.appendChild(btn);
    });
}

function mostrarPista() {
    const c = document.getElementById('caja-pista');
    if (c.style.display === 'none') { c.style.display = 'block'; reproducirSonido('acierto'); }
    else c.style.display = 'none';
}

function avanzarSiguienteDespuesDeError() {
    document.getElementById('game-card').classList.remove('anim-error');
    cargarPreguntaActual();
}

function evaluarRespuesta(seleccion, q, btnElem) {
    try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch (e) {}
    document.querySelectorAll('#opciones-container button').forEach(b => b.disabled = true);

    const card = document.getElementById('game-card');
    const fb = document.getElementById('feedback-box');
    const mp = mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const prog = mp[nivelJugando];
    const area = q.area || "General";

    const mascotaImg = document.getElementById('mascota-avatar-juego');
    const mascotaMsj = document.getElementById('mascota-mensaje-juego');

    if (!estadisticasSesion[area]) estadisticasSesion[area] = { total: 0, ok: 0 };
    estadisticasSesion[area].total++;
    fb.style.display = 'block';

    if (seleccion === q.correcta) {
        reproducirSonido('acierto');
        btnElem.className = "w-full bg-emerald-600 border-2 border-emerald-300 p-3 rounded-xl font-extrabold text-white text-left px-3 text-sm shadow-lg";
        card.classList.add('anim-acierto');
        
        // ¡La mascota se pone feliz!
        if (mascotaImg) mascotaImg.classList.add('scale-125', 'bounce');
        if (mascotaMsj) {
            mascotaMsj.textContent = "¡Súper!";
            mascotaMsj.className = "text-[10px] font-black text-emerald-400 mt-2 text-center";
        }

        rachaActual++; prog.aciertos++; estadisticasSesion[area].ok++;
        estadoJuego.xp += 30; estadoJuego.monedas += 5;

        fb.className = "rounded-2xl p-2.5 text-center font-bold text-[11px] leading-relaxed border bg-emerald-950/80 border-emerald-500/50 text-emerald-300 mt-2";
        fb.textContent = rachaActual >= 3 ? `🔥 ¡Racha de ${rachaActual}! +5 🪙` : "🌟 ¡Excelente! +5 🪙";

        try { if (typeof confetti === 'function') confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } }); } catch (e) {}

        prog.indice++;
        actualizarHeader(); guardarEstado();

        setTimeout(() => {
            card.classList.remove('anim-acierto');
            if(mascotaImg) mascotaImg.classList.remove('scale-125', 'bounce');
            cargarPreguntaActual();
        }, 1400);

    } else {
        reproducirSonido('error');
        btnElem.className = "w-full bg-rose-600 border-2 border-rose-300 p-3 rounded-xl font-extrabold text-white text-left px-3 text-sm";
        document.querySelectorAll('#opciones-container button')[q.correcta].className = "w-full bg-emerald-700 border-2 border-emerald-400 p-3 rounded-xl font-extrabold text-white text-left px-3 text-sm";
        card.classList.add('anim-error');

        // Mascota anima cuando se equivoca
        if (mascotaMsj) {
            mascotaMsj.textContent = "¡Ánimo!";
            mascotaMsj.className = "text-[10px] font-black text-rose-300 mt-2 text-center";
        }

        rachaActual = 0;
        fb.className = "rounded-2xl p-3 text-left font-bold text-[11px] leading-relaxed border-2 bg-rose-950/90 border-amber-400/70 text-rose-100 space-y-2 shadow-xl mt-2";
        fb.innerHTML = `<div>💡 <strong class="text-amber-300">Respuesta correcta:</strong><br><span class="text-white">${q.explicacion || q.opciones[q.correcta]}</span></div>
            <button onclick="avanzarSiguienteDespuesDeError()" class="w-full bg-amber-400 text-slate-950 font-black py-2 rounded-lg mt-1 shadow">¡Entendido! ➡️</button>`;

        if (!q.esRepaso) {
            colaPreguntas.splice(Math.min(prog.indice + 4, colaPreguntas.length), 0, { ...q, esRepaso: true });
        }
        prog.indice++;
        actualizarHeader(); guardarEstado();
    }
}

// --- 7. FINAL DEL AULA Y MINIJUEGO LA TIENDITA ---
function finalizarBloqueNivel() {
    const mp = mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const prog = mp[nivelJugando];
    const aciertos = prog.aciertos;
    const totalRonda = colaPreguntas.length;
    const pct = Math.round((aciertos / totalRonda) * 100);
    const aprobado = pct >= 70;

    let estrellas = "⭐";
    if (pct >= 90) estrellas = "⭐⭐⭐";
    else if (pct >= 70) estrellas = "⭐⭐";

    if (!prog.mejorNota || aciertos > prog.mejorNota) {
        prog.mejorNota = aciertos; prog.mejorTotal = totalRonda;
    }

    document.getElementById('victoria-estrellas').textContent = estrellas;
    const prTotal = calcularProgresoTotal();
    const msj = document.getElementById('mensaje-dinamico-meta');
    const faltan = prTotal.totalMundos - prTotal.totalCompletados;

    if (faltan <= 0) msj.innerHTML = `👑 <strong>¡Completaste todos los mundos!</strong><br>¡Ve a buscar a Papá para tu gran premio final! ❤️`;
    else msj.innerHTML = `🎁 <strong>¡Mensaje de Papá!</strong><br>Ya completaste ${prTotal.totalCompletados} mundos y te faltan ${faltan} para tu regalo especial. ¡Tú puedes!`;

    const boleta = document.getElementById('boleta-areas');
    const keys = Object.keys(estadisticasSesion);
    if (boleta && keys.length > 0) {
        boleta.style.display = 'block';
        boleta.innerHTML = keys.map(k => `<div class="flex justify-between"><span>${k}</span><span class="font-extrabold text-emerald-400">${estadisticasSesion[k].ok}/${estadisticasSesion[k].total}</span></div>`).join('');
    } else if (boleta) boleta.style.display = 'none';

    if (aprobado) {
        prog.completado = true;
        prog.estrellas = estrellas;
        if (mundoActivo === 'ingles') {
            if (nivelJugando === estadoJuego.inglesMaxDesbloqueado) estadoJuego.inglesMaxDesbloqueado = nivelJugando + 1;
        } else {
            if (nivelJugando === estadoJuego.nivelMaxDesbloqueado) estadoJuego.nivelMaxDesbloqueado = nivelJugando + 1;
        }
        estadoJuego.monedas += 50;
        
        document.getElementById('victoria-titulo').textContent = `¡Aula ${nivelJugando} Superada! 🎉`;
        document.getElementById('victoria-detalle').textContent = `Logrado: ${aciertos}/${totalRonda} respuestas (${pct}%).`;
        
        prog.indice = 0;
        guardarEstado();
        actualizarHeader();
        
        // ¡MAGIA! Ocultamos el juego y abrimos el MINIJUEGO realista de La Tiendita antes de la boleta
        document.getElementById('pantalla-juego').style.display = 'none';
        
        if (typeof iniciarMinijuegoTiendita === 'function') {
            iniciarMinijuegoTiendita();
        } else {
            mostrarPantalla('pantalla-victoria');
        }
    } else {
        reproducirSonido('error');
        document.getElementById('victoria-titulo').textContent = `¡Casi lo logras! 💪`;
        document.getElementById('victoria-detalle').textContent = `Logrado: ${aciertos}/${totalRonda} (${pct}%). Necesitas 70%. ¡Inténtalo de nuevo!`;
        prog.indice = 0;
        guardarEstado();
        actualizarHeader();
        mostrarPantalla('pantalla-victoria');
    }
}

// --- 8. PERSISTENCIA ---
function guardarEstado() {
    try { localStorage.setItem('itzel_mundo_v7', JSON.stringify(estadoJuego)); } catch (e) {}
}

function cargarEstado() {
    try {
        const guardado = localStorage.getItem('itzel_mundo_v7');
        if (guardado) {
            estadoJuego = { ...estadoJuego, ...JSON.parse(guardado) };
            if (!estadoJuego.progresoNiveles) estadoJuego.progresoNiveles = {};
            if (!estadoJuego.progresoIngles) estadoJuego.progresoIngles = {};
        }
    } catch (e) { localStorage.removeItem('itzel_mundo_v7'); }
    
    // Si no tiene mascota guardada de versiones anteriores, asigna una por defecto
    if (!estadoJuego.mascota) {
        estadoJuego.mascota = 'perrito';
    }

    if (sessionStorage.getItem('itzel_dev_auth') === 'true') modoProgramadorActivo = true;
    aplicarConfiguracionDev();
    mostrarPantalla('pantalla-portada');
}

document.addEventListener('DOMContentLoaded', cargarEstado);
