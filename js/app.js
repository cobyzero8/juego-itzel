/* ============================================================
   MOTOR PEDAGÓGICO DUAL CON META DE PAPÁ (js/app.js)
   ============================================================ */

let modoProgramadorActivo = false;
let mundoActivo = 'mate'; // 'mate' | 'ingles'

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

let estadoJuego = {
    avatar: 'foto',
    xp: 0,
    monedas: 0,
    nivelMaxDesbloqueado: 1,
    progresoNiveles: {},
    inglesMaxDesbloqueado: 1,
    progresoIngles: {}
};

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
        resEl.className = "text-[11px] font-bold pt-1 text-amber-300";
        resEl.textContent = "⚠️ Tu navegador no soporta micrófono aquí. ¡Usa 🔊 Normal / 🐢 Lento y repítelo en voz alta!";
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
    resEl.className = "text-[11px] font-bold pt-1 text-sky-300 animate-pulse";
    resEl.textContent = "🎙️ Escuchando... di la frase en inglés ahora";

    recognition.onresult = (event) => {
        const dicho = event.results[0][0].transcript.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        const objetivo = q.audioIngles.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        resEl.classList.remove('animate-pulse');

        if (dicho === objetivo || objetivo.includes(dicho) || dicho.includes(objetivo)) {
            reproducirSonido('acierto');
            resEl.className = "text-[11px] font-extrabold pt-1 text-emerald-400";
            resEl.textContent = `🌟 ¡Excelente pronunciación! Dijiste: "${event.results[0][0].transcript}"`;
        } else {
            resEl.className = "text-[11px] font-bold pt-1 text-amber-300";
            resEl.textContent = `🗣️ Escuché: "${event.results[0][0].transcript}". ¡Prueba otra vez con 🐢 Lento!`;
        }
    };

    recognition.onerror = () => {
        resEl.classList.remove('animate-pulse');
        resEl.className = "text-[11px] font-bold pt-1 text-rose-300";
        resEl.textContent = "⚠️ No se detectó voz. Revisa tu micrófono o practica escuchando 🔊.";
    };

    recognition.start();
}

// --- 2. LOGIN PROGRAMADOR ---
function abrirModalLogin() {
    const modal = document.getElementById('modal-login-dev');
    if (!modal) return;
    if (modoProgramadorActivo) {
        aplicarConfiguracionDev();
        return;
    }
    document.getElementById('dev-user').value = "";
    document.getElementById('dev-pass').value = "";
    document.getElementById('login-error-msg').textContent = "";
    modal.style.display = 'flex';
}

function cerrarModalLogin() {
    const modal = document.getElementById('modal-login-dev');
    if (modal) modal.style.display = 'none';
}

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
        document.getElementById('login-error-msg').textContent = "❌ Usuario o contraseña incorrectos";
    }
}

function cerrarModoDev() {
    modoProgramadorActivo = false;
    sessionStorage.removeItem('itzel_dev_auth');
    aplicarConfiguracionDev();
}

function aplicarConfiguracionDev() {
    const panelMapa = document.getElementById('panel-dev-mapa');
    const btnTestAula = document.getElementById('btn-test-aula');
    if (panelMapa) panelMapa.style.display = modoProgramadorActivo ? 'flex' : 'none';
    if (btnTestAula) btnTestAula.style.display = modoProgramadorActivo ? 'inline-block' : 'none';
}

function testDesbloquearTodo() {
    if (!modoProgramadorActivo) return;
    estadoJuego.nivelMaxDesbloqueado = 11;
    estadoJuego.inglesMaxDesbloqueado = 8;
    guardarEstado();
    actualizarMapaVisual();
    reproducirSonido('acierto');
}

function testReiniciarJuego() {
    if (!modoProgramadorActivo) return;
    localStorage.removeItem('itzel_mundo_v6');
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

// --- 3. CÁLCULO DE PROGRESO Y META DE PAPÁ ---
function calcularProgresoTotal() {
    let completadosMate = 0;
    for (let i = 1; i <= 11; i++) {
        if (estadoJuego.progresoNiveles[i] && estadoJuego.progresoNiveles[i].completado) completadosMate++;
    }
    let completadosIngles = 0;
    for (let i = 1; i <= 8; i++) {
        if (estadoJuego.progresoIngles[i] && estadoJuego.progresoIngles[i].completado) completadosIngles++;
    }
    return { mate: completadosMate, ingles: completadosIngles, totalCompletados: completadosMate + completadosIngles, totalMundos: 19 };
}

function abrirPremioFinal() {
    reproducirSonido('acierto');
    mostrarPantalla('pantalla-premio-final');
    const prog = calcularProgresoTotal();
    const contenido = document.getElementById('contenido-cofre-meta');

    if (prog.totalCompletados >= prog.totalMundos) {
        contenido.innerHTML = `
            <p class="text-amber-300 font-black text-base">🎉 ¡FELICIDADES, ITZEL! ¡LO LOGRASTE! 🎉</p>
            <p>Has completado las 11 aulas de Matemáticas/Lectura y los 8 niveles de Inglés con un esfuerzo increíble.</p>
            <p class="bg-pink-950/80 p-3 rounded-xl border border-pink-400 text-pink-200 font-bold mt-2">
                👑 <strong>MENSAJE ESPECIAL DE PAPÁ (Coby):</strong><br>
                "¡Estoy súper orgulloso de ti, mi amor! Has demostrado ser una campeona muy inteligente y dedicada. Como cumpliste tu gran objetivo, ¡dime ahora mismo qué regalo deseas que te compre! Te amo muchísimo." ❤️
            </p>
        `;
    } else {
        const faltantes = prog.totalMundos - prog.totalCompletados;
        contenido.innerHTML = `
            <p class="text-amber-300 font-black text-sm">🔒 ¡El Cofre del Regalo de Papá está casi listo!</p>
            <p>Has completado <strong class="text-emerald-400">${prog.totalCompletados} de 19</strong> mundos en total.</p>
            <p class="text-pink-300 font-bold mt-1">✨ Te faltan <strong class="text-amber-400">${faltantes} aulas/niveles</strong> para abrir este cofre y pedirle a papá el regalo de tus sueños.</p>
            <p class="text-slate-400 text-xs mt-2">¡Sigue jugando todos los días, guarda tu avance y llega hasta la meta final!</p>
        `;
    }
}

// --- 4. NAVEGACIÓN Y CAMBIO DE MUNDO ---
function cambiarMundo(nuevoMundo) {
    mundoActivo = nuevoMundo;
    reproducirSonido('acierto');

    const tabMate = document.getElementById('tab-mundo-mate');
    const tabIngles = document.getElementById('tab-mundo-ingles');
    const subMapa = document.getElementById('subtitulo-mapa-mundo');

    if (mundoActivo === 'mate') {
        tabMate.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow transition";
        tabIngles.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs text-slate-300 hover:bg-slate-800 transition";
        subMapa.textContent = "Supera cada aula con al menos 70% de aciertos para avanzar:";
    } else {
        tabIngles.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow transition";
        tabMate.className = "py-2.5 px-2 rounded-xl font-extrabold text-xs text-slate-300 hover:bg-slate-800 transition";
        subMapa.textContent = "Escucha, pronuncia y domina el inglés paso a paso (70% para subir de nivel):";
    }

    actualizarMapaVisual();
}

function mostrarPantalla(idPantalla) {
    try {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) {}

    const pantallas = ['pantalla-portada', 'pantalla-avatar', 'pantalla-mapa', 'pantalla-animacion', 'pantalla-juego', 'pantalla-victoria', 'pantalla-premio-final'];
    pantallas.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === idPantalla) ? 'block' : 'none';
    });

    const header = document.getElementById('main-header');
    if (header) {
        header.style.display = (idPantalla === 'pantalla-portada') ? 'none' : 'flex';
    }
    aplicarConfiguracionDev();
}

function entrarDesdePortada() {
    reproducirSonido('entrada');
    try {
        if (typeof confetti === 'function') {
            confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
        }
    } catch (e) {}

    mostrarPantalla('pantalla-mapa');
    actualizarHeader();
    actualizarMapaVisual();
}

function abrirSelectorAvatar() {
    mostrarPantalla('pantalla-avatar');
}

function seleccionarAvatar(tipo, elemento) {
    estadoJuego.avatar = tipo;
    reproducirSonido('acierto');
    document.querySelectorAll('.avatar-card').forEach(c => {
        c.style.borderColor = '#334155';
        c.style.backgroundColor = 'rgba(30, 41, 59, 0.9)';
    });
    elemento.style.borderColor = '#ec4899';
    elemento.style.backgroundColor = 'rgba(236, 72, 153, 0.25)';
}

function confirmarAvatar() {
    reproducirSonido('acierto');
    guardarEstado();
    mostrarPantalla('pantalla-mapa');
    actualizarHeader();
    actualizarMapaVisual();
}

function volverAlMapa() {
    mostrarPantalla('pantalla-mapa');
    actualizarHeader();
    actualizarMapaVisual();
}

// --- 5. CABECERA Y MAPA DINÁMICO ---
function actualizarHeader() {
    const box = document.getElementById('header-avatar-box');
    if (box) {
        if (estadoJuego.avatar === 'foto') {
            box.className = "medallon-contenedor w-12 h-12";
            box.innerHTML = `<div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto object-top w-12 h-12">`;
        } else {
            box.className = "text-3xl bg-purple-900/70 p-2 rounded-2xl border-2 border-pink-500/50";
            box.innerHTML = `<span class="avatar-flotante">${estadoJuego.avatar}</span>`;
        }
    }

    const scoreEl = document.getElementById('score-display');
    const monedasEl = document.getElementById('monedas-display');
    if (scoreEl) scoreEl.textContent = `${estadoJuego.xp || 0} XP`;
    if (monedasEl) monedasEl.textContent = `🪙 ${estadoJuego.monedas || 0}`;
}

function actualizarMapaVisual() {
    const tituloEl = document.getElementById('nivel-titulo');
    if (tituloEl) {
        tituloEl.textContent = (mundoActivo === 'ingles') ? "🇺🇸 Academia de Inglés" : "🏫 Mate y Lectura";
    }

    const progTotal = calcularProgresoTotal();
    const textoMeta = document.getElementById('estado-meta-texto');
    if (textoMeta) {
        if (progTotal.totalCompletados >= progTotal.totalMundos) {
            textoMeta.textContent = "¡Cofre abierto! ¡Pídele tu regalo a Papá! 🎁";
        } else {
            textoMeta.textContent = `Te faltan ${progTotal.totalMundos - progTotal.totalCompletados} mundos para tu regalo ✨`;
        }
    }

    const contenedor = document.getElementById('lista-aulas-container');
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const catalogo = (mundoActivo === 'ingles') ? CATALOGO_INGLES : CATALOGO_MATE;
    const maxDesb = (mundoActivo === 'ingles') ? (estadoJuego.inglesMaxDesbloqueado || 1) : (estadoJuego.nivelMaxDesbloqueado || 1);
    const mapaProgreso = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;

    const aulasOrdenadas = [...catalogo].reverse();

    aulasOrdenadas.forEach(aula => {
        let datosAula = null;
        try {
            datosAula = aula.varDatos();
        } catch (e) {
            datosAula = null;
        }

        const desbloqueado = maxDesb >= aula.num;
        const listaPreguntas = datosAula
            ? (mundoActivo === 'ingles' ? (datosAula.retos || []) : [...(datosAula.matematicas || []), ...(datosAula.lectura || [])])
            : [];
        const tieneContenido = listaPreguntas.length > 0;
        const totalRetos = tieneContenido ? listaPreguntas.length : 30;
        const prog = mapaProgreso[aula.num] || { indice: 0, aciertos: 0, completado: false, mejorNota: null, mejorTotal: totalRetos, estrellas: "" };

        const div = document.createElement('div');
        div.onclick = () => intentarNivel(aula.num);

        if (desbloqueado && tieneContenido) {
            if (prog.completado) {
                div.className = "cursor-pointer bg-gradient-to-r from-emerald-700 to-teal-700 p-3.5 rounded-2xl border-2 border-emerald-300/80 flex justify-between items-center shadow-lg transform active:scale-95 transition";
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">✅</span>
                        <div class="text-left">
                            <h3 class="font-extrabold text-sm text-white flex items-center gap-1.5">${aula.titulo} <span class="text-xs">${prog.estrellas || '⭐⭐'}</span></h3>
                            <p class="text-[10px] text-emerald-100 font-bold">Logrado: ${prog.mejorNota || prog.aciertos}/${prog.mejorTotal || totalRetos} aciertos</p>
                        </div>
                    </div>
                    <span class="text-[11px] bg-emerald-950/70 text-emerald-200 border border-emerald-300/50 px-3 py-1.5 rounded-full font-extrabold">Repasar 🔄</span>
                `;
            } else if (prog.mejorNota !== null && prog.mejorNota !== undefined && prog.indice === 0) {
                div.className = "nodo-activo cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 p-3.5 rounded-2xl border-2 border-amber-300 flex justify-between items-center shadow-lg transform active:scale-95 transition";
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">💪</span>
                        <div class="text-left">
                            <h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3>
                            <p class="text-[10px] text-amber-100 font-bold">Logrado: ${prog.mejorNota}/${prog.mejorTotal} • ¡Inténtalo otra vez!</p>
                        </div>
                    </div>
                    <span class="text-[11px] bg-white text-orange-950 px-3 py-1.5 rounded-full font-extrabold shadow">Reintentar</span>
                `;
            } else if (prog.indice > 0) {
                div.className = "nodo-activo cursor-pointer bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-3.5 rounded-2xl border-2 border-amber-300 flex justify-between items-center shadow-lg transform active:scale-95 transition";
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">${aula.icono}</span>
                        <div class="text-left">
                            <h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3>
                            <p class="text-[10px] text-amber-200 font-bold">⏳ En curso: Reto ${prog.indice + 1} de ${totalRetos}</p>
                        </div>
                    </div>
                    <span class="text-xs bg-amber-400 text-slate-950 px-3 py-1.5 rounded-full font-extrabold shadow">Seguir ▶️</span>
                `;
            } else {
                const gradiente = (mundoActivo === 'ingles')
                    ? "from-sky-600 via-blue-600 to-indigo-700 border-sky-300/80"
                    : "from-pink-600 via-purple-600 to-indigo-600 border-pink-300/80";
                div.className = `nodo-activo cursor-pointer bg-gradient-to-r ${gradiente} p-3.5 rounded-2xl border-2 flex justify-between items-center shadow-lg transform active:scale-95 transition`;
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">${aula.icono}</span>
                        <div class="text-left">
                            <h3 class="font-extrabold text-sm text-white">${aula.titulo}</h3>
                            <p class="text-[10px] text-sky-100">${aula.subtitulo} (${totalRetos} retos)</p>
                        </div>
                    </div>
                    <span class="text-xs bg-white text-indigo-950 px-3 py-1.5 rounded-full font-extrabold shadow">¡ENTRAR!</span>
                `;
            }
        } else if (!tieneContenido) {
            div.className = "opacity-40 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/70 flex justify-between items-center cursor-not-allowed";
            div.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="text-xl">${aula.icono}</span>
                    <div class="text-left">
                        <h3 class="font-bold text-xs text-slate-400">${aula.titulo}</h3>
                        <p class="text-[10px] text-slate-500">Próximamente en construcción</p>
                    </div>
                </div>
                <span class="text-[10px] bg-slate-800 px-2.5 py-1 rounded-full text-slate-500 font-bold">Pronto</span>
            `;
        } else {
            div.className = "opacity-60 bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 flex justify-between items-center cursor-not-allowed";
            div.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="text-2xl">${aula.icono}</span>
                    <div class="text-left">
                        <h3 class="font-extrabold text-sm text-slate-300">${aula.titulo}</h3>
                        <p class="text-[10px] text-slate-400">Supera el nivel anterior para abrir</p>
                    </div>
                </div>
                <span class="text-xs bg-slate-700 px-3 py-1 rounded-full font-bold">🔒</span>
            `;
        }

        contenedor.appendChild(div);
    });
}

// --- 6. INICIAR AULA ---
function intentarNivel(num) {
    const catalogo = (mundoActivo === 'ingles') ? CATALOGO_INGLES : CATALOGO_MATE;
    const maxDesb = (mundoActivo === 'ingles') ? estadoJuego.inglesMaxDesbloqueado : estadoJuego.nivelMaxDesbloqueado;
    const mapaProgreso = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;

    const aulaInfo = catalogo.find(a => a.num === num);
    if (!aulaInfo) return;

    let datosGrado = null;
    try {
        datosGrado = aulaInfo.varDatos();
    } catch (e) {
        datosGrado = null;
    }

    if (!datosGrado || num > maxDesb) {
        reproducirSonido('error');
        return;
    }

    if (!mapaProgreso[num]) {
        mapaProgreso[num] = { indice: 0, aciertos: 0, completado: false };
    }

    nivelJugando = num;
    colaPreguntas = (mundoActivo === 'ingles')
        ? [...(datosGrado.retos || [])]
        : [...(datosGrado.matematicas || []), ...(datosGrado.lectura || [])];

    totalInicialAula = colaPreguntas.length;
    rachaActual = 0;
    estadisticasSesion = {};

    if (mapaProgreso[num].indice === 0 || mapaProgreso[num].indice >= colaPreguntas.length) {
        mapaProgreso[num].indice = 0;
        mapaProgreso[num].aciertos = 0;
    }

    const animBox = document.getElementById('anim-avatar-box');
    if (estadoJuego.avatar === 'foto') {
        animBox.innerHTML = `<div class="medallon-contenedor w-28 h-28"><div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto object-top w-28 h-28"></div>`;
    } else {
        animBox.innerHTML = `<div class="text-7xl">${estadoJuego.avatar}</div>`;
    }

    document.getElementById('anim-titulo').textContent = `¡${aulaInfo.titulo}!`;
    document.getElementById('anim-subtitulo').textContent = `${aulaInfo.subtitulo} • ¡Tú puedes, Itzel!`;
    reproducirSonido('acierto');
    mostrarPantalla('pantalla-animacion');

    setTimeout(() => {
        mostrarPantalla('pantalla-juego');
        document.getElementById('nivel-titulo').textContent = `${aulaInfo.icono} ${aulaInfo.titulo}`;
        cargarPreguntaActual();
    }, 1400);
}

// --- 7. PREGUNTAS ---
function cargarPreguntaActual() {
    const mapaProgreso = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const progreso = mapaProgreso[nivelJugando];
    const idx = progreso.indice;

    document.getElementById('caja-pista').style.display = 'none';
    document.getElementById('feedback-box').style.display = 'none';

    if (idx >= colaPreguntas.length) {
        finalizarBloqueNivel();
        return;
    }

    const q = colaPreguntas[idx];
    const areaNombre = q.area || (mundoActivo === 'ingles' ? "English 🇺🇸" : "Matemáticas 🧮");

    const catTag = document.getElementById('categoria-tag');
    catTag.textContent = areaNombre;

    const coloresArea = {
        "Suma ➕": "bg-emerald-600",
        "Resta ➖": "bg-teal-600",
        "Multiplicación ✖️": "bg-indigo-600",
        "División ➗": "bg-purple-600",
        "Razonamiento 🧠": "bg-amber-600",
        "Lectura 📖": "bg-pink-600",
        "Vocabulary 🗣️": "bg-sky-600",
        "Grammar 🧩": "bg-indigo-600",
        "Reading 📘": "bg-teal-600",
        "Listening 🎧": "bg-amber-600"
    };
    catTag.className = `${coloresArea[areaNombre] || "bg-sky-600"} text-[10px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider shadow`;

    document.getElementById('texto-pista').textContent = q.pista || "Escucha con atención y elige la respuesta correcta.";

    const escenaCaja = document.getElementById('escena-caja');
    const escenaDibujo = document.getElementById('escena-dibujo');
    escenaCaja.classList.remove('escena-visual');
    void escenaCaja.offsetWidth;
    escenaCaja.classList.add('escena-visual');
    escenaDibujo.textContent = q.dibujo || "🌟 ✨ 📚 ✨ 🌟";

    const panelIngles = document.getElementById('panel-audio-ingles');
    const resMic = document.getElementById('resultado-mic-ingles');
    if (mundoActivo === 'ingles' && q.audioIngles) {
        panelIngles.style.display = 'block';
        resMic.style.display = 'none';
        document.getElementById('ingles-frase-destacada').textContent = `"${q.audioIngles}"`;
        document.getElementById('ingles-fonetica').textContent = q.fonetica ? `Pronunciación guía: ${q.fonetica}` : "";
        setTimeout(() => pronunciarIngles(0.95), 350);
    } else {
        panelIngles.style.display = 'none';
    }

    const cajaLectura = document.getElementById('caja-lectura');
    if (q.textoLectura) {
        cajaLectura.style.display = 'block';
        document.getElementById('texto-lectura').textContent = q.textoLectura;
    } else {
        cajaLectura.style.display = 'none';
    }

    document.getElementById('contador-pregunta').textContent = `${idx + 1} / ${colaPreguntas.length}`;
    document.getElementById('pregunta-texto').textContent = q.pregunta;
    document.getElementById('barra-exp').style.width = `${(idx / colaPreguntas.length) * 100}%`;

    const contenedor = document.getElementById('opciones-container');
    contenedor.innerHTML = "";

    q.opciones.forEach((opcion, i) => {
        const btn = document.createElement('button');
        btn.textContent = opcion;
        btn.className = "btn-opcion w-full bg-slate-800/95 hover:bg-slate-700 border-2 border-indigo-500/40 p-3.5 rounded-2xl font-bold transition text-slate-100 text-left px-4 text-sm";
        btn.onclick = () => evaluarRespuesta(i, q, btn);
        contenedor.appendChild(btn);
    });
}

function mostrarPista() {
    const caja = document.getElementById('caja-pista');
    if (caja.style.display === 'none') {
        caja.style.display = 'block';
        reproducirSonido('acierto');
    } else {
        caja.style.display = 'none';
    }
}

function avanzarSiguienteDespuesDeError() {
    const card = document.getElementById('game-card');
    card.classList.remove('anim-error');
    cargarPreguntaActual();
}

function evaluarRespuesta(seleccion, q, btnElem) {
    try {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) {}

    const todosBotones = document.querySelectorAll('#opciones-container button');
    todosBotones.forEach(b => b.disabled = true);

    const card = document.getElementById('game-card');
    const feedbackBox = document.getElementById('feedback-box');
    const mapaProgreso = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const progreso = mapaProgreso[nivelJugando];
    const areaNombre = q.area || "General";

    if (!estadisticasSesion[areaNombre]) {
        estadisticasSesion[areaNombre] = { total: 0, ok: 0 };
    }
    estadisticasSesion[areaNombre].total++;

    feedbackBox.style.display = 'block';

    if (seleccion === q.correcta) {
        reproducirSonido('acierto');
        btnElem.className = "w-full bg-emerald-600 border-2 border-emerald-300 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm shadow-lg";
        card.classList.add('anim-acierto');

        rachaActual++;
        progreso.aciertos++;
        estadisticasSesion[areaNombre].ok++;
        estadoJuego.xp += 30;
        estadoJuego.monedas += 5;

        feedbackBox.className = "rounded-2xl p-3 text-center font-bold text-xs leading-relaxed border bg-emerald-950/80 border-emerald-500/50 text-emerald-300";
        feedbackBox.textContent = rachaActual >= 3
            ? `🔥 ¡Súper racha de ${rachaActual}, Itzel! +5 🪙`
            : "🌟 ¡Excelente, Itzel! +5 🪙";

        try {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
            }
        } catch (e) {}

        progreso.indice++;
        actualizarHeader();
        guardarEstado();

        setTimeout(() => {
            card.classList.remove('anim-acierto');
            cargarPreguntaActual();
        }, 1400);

    } else {
        reproducirSonido('error');
        btnElem.className = "w-full bg-rose-600 border-2 border-rose-300 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm";
        todosBotones[q.correcta].className = "w-full bg-emerald-700 border-2 border-emerald-400 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm";
        card.classList.add('anim-error');

        rachaActual = 0;
        const explicacionTexto = q.explicacion || `La respuesta correcta es "${q.opciones[q.correcta]}".`;

        feedbackBox.className = "rounded-2xl p-4 text-left font-bold text-xs leading-relaxed border-2 bg-rose-950/90 border-amber-400/70 text-rose-100 space-y-3 shadow-xl";
        feedbackBox.innerHTML = `
            <div>💡 <strong class="text-amber-300 text-sm">Aprende la respuesta correcta:</strong><br>
            <span class="text-white font-medium text-xs block mt-1">${explicacionTexto}</span></div>
            <button onclick="avanzarSiguienteDespuesDeError()" class="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-2.5 rounded-xl text-xs transition shadow">
                ¡Entendido! Continuar ➡️
            </button>
        `;

        if (!q.esRepaso) {
            const copiaRepaso = { ...q, esRepaso: true };
            const posReinsercion = Math.min(progreso.indice + 4, colaPreguntas.length);
            colaPreguntas.splice(posReinsercion, 0, copiaRepaso);
        }

        progreso.indice++;
        actualizarHeader();
        guardarEstado();
    }
}

// --- 8. VICTORIA Y MENSAJE DINÁMICO DE PAPÁ ---
function finalizarBloqueNivel() {
    const mapaProgreso = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const progreso = mapaProgreso[nivelJugando];
    const aciertos = progreso.aciertos;
    const totalRonda = colaPreguntas.length;
    const porcentaje = Math.round((aciertos / totalRonda) * 100);
    const aprobado = porcentaje >= 70;

    let estrellas = "⭐";
    if (porcentaje >= 90) estrellas = "⭐⭐⭐";
    else if (porcentaje >= 70) estrellas = "⭐⭐";

    if (!progreso.mejorNota || aciertos > progreso.mejorNota) {
        progreso.mejorNota = aciertos;
        progreso.mejorTotal = totalRonda;
    }

    document.getElementById('victoria-estrellas').textContent = estrellas;

    const progTotal = calcularProgresoTotal();
    const mensajeDinamico = document.getElementById('mensaje-dinamico-meta');

    if (aprobado) {
        progreso.completado = true;
        progreso.estrellas = estrellas;
        if (mundoActivo === 'ingles') {
            if (nivelJugando === estadoJuego.inglesMaxDesbloqueado) {
                estadoJuego.inglesMaxDesbloqueado = nivelJugando + 1;
            }
        } else {
            if (nivelJugando === estadoJuego.nivelMaxDesbloqueado) {
                estadoJuego.nivelMaxDesbloqueado = nivelJugando + 1;
            }
        }
        estadoJuego.monedas += 50;
        reproducirSonido('victoria');
        try {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
            }
        } catch (e) {}

        document.getElementById('victoria-titulo').textContent = `¡Aula ${nivelJugando} Superada! 🎉`;
        document.getElementById('victoria-detalle').textContent = `Logrado: ${aciertos}/${totalRonda} respuestas (${porcentaje}%). ¡Ganaste +50 monedas y abriste el siguiente nivel!`;
    } else {
        reproducirSonido('error');
        document.getElementById('victoria-titulo').textContent = `¡Casi lo logras, Itzel! 💪`;
        document.getElementById('victoria-detalle').textContent = `Logrado: ${aciertos}/${totalRonda} respuestas (${porcentaje}%). Necesitas 70% para aprobar. ¡Inténtalo otra vez!`;
    }

    // MENSAJE DINÁMICO DE PAPÁ SOBRE CUÁNTO FALTA
    const mundosFaltantes = progTotal.totalMundos - progTotal.totalCompletados;
    if (mundosFaltantes <= 0) {
        mensajeDinamico.innerHTML = `👑 <strong>¡INCREÍBLE, ITZEL! ¡Completaste todos los mundos de la academia!</strong><br>Ve corriendo a buscar a Papá (Coby), ¡ya ganaste tu gran premio final y el regalo de tus sueños! ❤️`;
    } else {
        mensajeDinamico.innerHTML = `🎁 <strong>¡Mensaje de Papá!</strong><br>Vas genial. Ya completaste ${progTotal.totalCompletados} mundos y <strong>te faltan solo ${mundosFaltantes} aulas o niveles</strong> para terminar todo y pedirme tu regalo especial. ¡Tú puedes!`;
    }

    const boletaDiv = document.getElementById('boleta-areas');
    const areasKeys = Object.keys(estadisticasSesion);
    if (boletaDiv && areasKeys.length > 0) {
        boletaDiv.style.display = 'block';
        boletaDiv.innerHTML = `<div class="font-extrabold text-amber-300 uppercase text-[10px] mb-1">📊 Boleta de Aprendizaje:</div>` +
            areasKeys.map(area => {
                const st = estadisticasSesion[area];
                const pct = Math.round((st.ok / st.total) * 100);
                const color = pct >= 75 ? 'text-emerald-400' : 'text-amber-300';
                return `<div class="flex justify-between"><span>${area}</span><span class="font-extrabold ${color}">${st.ok}/${st.total} (${pct}%)</span></div>`;
            }).join('');
    } else if (boletaDiv) {
        boletaDiv.style.display = 'none';
    }

    progreso.indice = 0;
    guardarEstado();
    actualizarHeader();
    mostrarPantalla('pantalla-victoria');
}

// --- 9. PERSISTENCIA ---
function guardarEstado() {
    try {
        localStorage.setItem('itzel_mundo_v6', JSON.stringify(estadoJuego));
    } catch (e) {}
}

function cargarEstado() {
    try {
        const guardado = localStorage.getItem('itzel_mundo_v6');
        if (guardado) {
            const parsed = JSON.parse(guardado);
            estadoJuego = { ...estadoJuego, ...parsed };
            if (!estadoJuego.progresoNiveles) estadoJuego.progresoNiveles = {};
            if (!estadoJuego.progresoIngles) estadoJuego.progresoIngles = {};
            if (!estadoJuego.inglesMaxDesbloqueado) estadoJuego.inglesMaxDesbloqueado = 1;
        }
    } catch (e) {
        localStorage.removeItem('itzel_mundo_v6');
    }

    if (sessionStorage.getItem('itzel_dev_auth') === 'true') {
        modoProgramadorActivo = true;
    }
    aplicarConfiguracionDev();
    mostrarPantalla('pantalla-portada');
}

document.addEventListener('DOMContentLoaded', cargarEstado);
