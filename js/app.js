/* ============================================================
   MOTOR PEDAGÓGICO V12
   Mascota Viva + Reforzamiento Personalizado + Cuaderno de Errores
   ============================================================ */

let modoProgramadorActivo = false;
let mundoActivo = 'mate'; // 'mate' | 'ingles'
let modoSesionEspecial = null; // null | 'relampago' | 'errores' | 'reforzamiento_mate' | 'reforzamiento_rm' | 'reforzamiento_lectura'
let indiceSesionEspecial = 0;
let aciertosSesionEspecial = 0;

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
    mascota: 'gatito',
    xp: 0,
    monedas: 0,
    nivelMaxDesbloqueado: 1,
    progresoNiveles: {},
    inglesMaxDesbloqueado: 1,
    progresoIngles: {},
    erroresPendientes: [],
    accesoriosComprados: [],
    accesoriosEquipados: []
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

function hablarEspanol(texto) {
    try {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const limpio = texto.replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');
        const voz = new SpeechSynthesisUtterance(limpio);
        voz.lang = 'es-PE';
        voz.rate = 1.0;
        voz.pitch = 1.15;
        window.speechSynthesis.speak(voz);
    } catch (e) {}
}

function obtenerPreguntaActualActiva() {
    if (modoSesionEspecial) return colaPreguntas[indiceSesionEspecial];
    const progObj = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    return colaPreguntas[progObj[nivelJugando].indice];
}

function pronunciarIngles(velocidad = 0.95) {
    try {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const q = obtenerPreguntaActualActiva();
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
        const q = obtenerPreguntaActualActiva();
        if (!q) return;
        if (q.audioIngles) {
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

    const q = obtenerPreguntaActualActiva();
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

// --- 2. SISTEMA DE MASCOTA VIVA ---
function abrirSelectorMascota() {
    mostrarPantalla('pantalla-mascota');
    actualizarHeader();

    ['gatito', 'perrito', 'conejito', 'unicornio'].forEach(tipo => {
        const box = document.getElementById(`preview-mascota-${tipo}`);
        if (box && typeof generarSVGMascota === 'function') {
            box.innerHTML = generarSVGMascota(tipo, 'idle', estadoJuego.xp || 0, false, estadoJuego.accesoriosEquipados || []);
        }
    });

    const actual = DATOS_MASCOTAS[estadoJuego.mascota] ? estadoJuego.mascota : 'gatito';
    const cardPrevia = document.getElementById(`card-mascota-${actual}`);
    if (cardPrevia) seleccionarMascota(actual, cardPrevia, false);
}

function seleccionarMascota(tipo, elemento, conVoz = true) {
    mascotaSeleccionadaTemporal = tipo;
    estadoJuego.mascota = tipo;
    reproducirSonido('acierto');
    actualizarHeader();

    ['gatito', 'perrito', 'conejito', 'unicornio'].forEach(t => {
        const c = document.getElementById(`card-mascota-${t}`);
        const prev = document.getElementById(`preview-mascota-${t}`);
        if (c) {
            c.style.borderColor = '#475569';
            c.classList.remove('ring-4', 'ring-emerald-400/60', 'scale-105');
        }
        if (prev && typeof generarSVGMascota === 'function') {
            prev.innerHTML = generarSVGMascota(t, t === tipo ? 'happy' : 'idle', estadoJuego.xp || 0, false, estadoJuego.accesoriosEquipados || []);
        }
    });

    if (elemento) {
        elemento.style.borderColor = '#10b981';
        elemento.classList.add('ring-4', 'ring-emerald-400/60', 'scale-105');
    }

    const datosMascota = DATOS_MASCOTAS[tipo];
    const cajaSaludo = document.getElementById('saludo-mascota-elegida');
    if (cajaSaludo && datosMascota) {
        cajaSaludo.style.display = 'block';
        cajaSaludo.textContent = datosMascota.saludo;
        if (conVoz) hablarEspanol(datosMascota.saludo);
    }

    const btnConfirmar = document.getElementById('btn-confirmar-mascota');
    if (btnConfirmar) btnConfirmar.classList.remove('hidden');
}

function confirmarMascota() {
    if (!mascotaSeleccionadaTemporal) mascotaSeleccionadaTemporal = 'gatito';
    estadoJuego.mascota = mascotaSeleccionadaTemporal;
    reproducirSonido('victoria');
    try { if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } }); } catch (e) {}
    guardarEstado();
    volverAlMapa();
}

function actualizarMascotaEnJuego(emocion = 'idle', frase = "¡Tú puedes, Itzel!") {
    const escenario = document.getElementById('mascota-avatar-juego');
    const globo = document.getElementById('mascota-globo');
    const etapaTag = document.getElementById('mascota-etapa-tag');

    if (escenario && typeof generarSVGMascota === 'function') {
        escenario.innerHTML = generarSVGMascota(estadoJuego.mascota, emocion, estadoJuego.xp || 0, false, estadoJuego.accesoriosEquipados || []);
    }
    if (globo) {
        globo.textContent = frase;
        if (emocion === 'happy') {
            globo.className = "bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-1.5 rounded-xl shadow-md text-center leading-tight w-full relative z-10";
        } else if (emocion === 'sad') {
            globo.className = "bg-amber-300 text-slate-950 text-[10px] font-black px-2 py-1.5 rounded-xl shadow-md text-center leading-tight w-full relative z-10";
        } else {
            globo.className = "bg-white text-slate-900 text-[10px] font-black px-2 py-1.5 rounded-xl shadow-md text-center leading-tight w-full relative z-10";
        }
    }
    if (etapaTag && typeof obtenerEtapaMascota === 'function') {
        etapaTag.textContent = obtenerEtapaMascota(estadoJuego.xp || 0).nombre;
    }
}

// --- 3. CUADERNO DE ERRORES Y RETO RELÁMPAGO ---
function guardarErrorEnCuaderno(q) {
    if (!estadoJuego.erroresPendientes) estadoJuego.erroresPendientes = [];
    const yaExiste = estadoJuego.erroresPendientes.some(item => item.pregunta === q.pregunta);
    if (!yaExiste) {
        estadoJuego.erroresPendientes.push({ ...q, esRepaso: false });
        if (estadoJuego.erroresPendientes.length > 25) {
            estadoJuego.erroresPendientes.shift();
        }
    }
}

function iniciarRepasoErrores() {
    if (!estadoJuego.erroresPendientes || estadoJuego.erroresPendientes.length === 0) {
        reproducirSonido('acierto');
        mostrarModalReforzamiento(`
            <div class="text-center space-y-4">
                <span class="text-5xl block">🌟</span>
                <h2 class="text-xl font-black text-emerald-400">¡Cuaderno Limpio!</h2>
                <p class="text-xs text-slate-200">No tienes errores pendientes por repasar. ¡Sigue así, Itzel!</p>
                <button onclick="cerrarModalReforzamiento()" class="w-full bg-emerald-600 text-white font-black py-3 rounded-2xl text-sm">Volver</button>
            </div>
        `);
        return;
    }

    modoSesionEspecial = 'errores';
    indiceSesionEspecial = 0;
    aciertosSesionEspecial = 0;
    rachaActual = 0;
    estadisticasSesion = {};
    colaPreguntas = [...estadoJuego.erroresPendientes];

    reproducirSonido('entrada');
    mostrarPantalla('pantalla-juego');
    cargarPreguntaActual();
}

function iniciarRetoRelampago() {
    let banco = [];

    const maxM = estadoJuego.nivelMaxDesbloqueado || 1;
    for (let i = 1; i <= maxM; i++) {
        const info = CATALOGO_MATE.find(a => a.num === i);
        if (info) {
            try {
                const d = info.varDatos();
                if (d) banco.push(...(d.matematicas || []), ...(d.lectura || []));
            } catch (e) {}
        }
    }

    const maxI = estadoJuego.inglesMaxDesbloqueado || 1;
    for (let i = 1; i <= maxI; i++) {
        const info = CATALOGO_INGLES.find(a => a.num === i);
        if (info) {
            try {
                const d = info.varDatos();
                if (d) banco.push(...(d.retos || []));
            } catch (e) {}
        }
    }

    if (typeof BANCO_EXAMEN_MATEMATICA !== 'undefined') banco.push(...BANCO_EXAMEN_MATEMATICA);
    if (typeof BANCO_RAZONAMIENTO_MATEMATICO !== 'undefined') banco.push(...BANCO_RAZONAMIENTO_MATEMATICO);
    if (typeof BANCO_LECTURAS_ITZEL !== 'undefined') banco.push(...BANCO_LECTURAS_ITZEL);

    if (banco.length === 0) return;

    const mezcladas = banco.sort(() => Math.random() - 0.5).slice(0, 5);
    modoSesionEspecial = 'relampago';
    indiceSesionEspecial = 0;
    aciertosSesionEspecial = 0;
    rachaActual = 0;
    estadisticasSesion = {};
    colaPreguntas = mezcladas;

    reproducirSonido('entrada');
    mostrarPantalla('pantalla-juego');
    cargarPreguntaActual();
}

// --- 4. LOGIN PROGRAMADOR ---
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
    if (modoSesionEspecial) {
        indiceSesionEspecial = colaPreguntas.length;
        aciertosSesionEspecial = colaPreguntas.length;
        finalizarBloqueNivel();
        return;
    }
    const progObj = (mundoActivo === 'ingles') ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
    const progreso = progObj[nivelJugando];
    progreso.aciertos = totalInicialAula;
    progreso.indice = colaPreguntas.length;
    estadoJuego.xp += 250;
    finalizarBloqueNivel();
}

// --- 5. CÁLCULO DE META Y NAVEGACIÓN ---
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
    const sub = document.getElementById('subtitulo-mapa-mundo');
    if (mundoActivo === 'mate') {
        tm.className = "py-2 px-2 rounded-xl font-extrabold text-xs bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow transition";
        ti.className = "py-2 px-2 rounded-xl font-extrabold text-xs text-slate-300 hover:bg-slate-800 transition";
        if (sub) sub.textContent = "Supera cada aula con al menos 70% de aciertos para avanzar:";
    } else {
        ti.className = "py-2 px-2 rounded-xl font-extrabold text-xs bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow transition";
        tm.className = "py-2 px-2 rounded-xl font-extrabold text-xs text-slate-300 hover:bg-slate-800 transition";
        if (sub) sub.textContent = "Escucha, pronuncia y domina el inglés paso a paso:";
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
    abrirSelectorMascota();
}

function volverAlMapa() {
    modoSesionEspecial = null;
    mostrarPantalla('pantalla-mapa');
    actualizarHeader();
    actualizarMapaVisual();
}

// --- 6. ACTUALIZAR VISUALES (Header y Mapa) ---
function actualizarHeader() {
    if (document.getElementById('score-display')) document.getElementById('score-display').textContent = `${estadoJuego.xp || 0} XP`;
    if (document.getElementById('monedas-display')) document.getElementById('monedas-display').textContent = `🪙 ${estadoJuego.monedas || 0}`;

    const mascotaIcon = document.getElementById('header-mascota-icon');
    const etapaHeader = document.getElementById('etapa-mascota-header');

    if (mascotaIcon && typeof generarSVGMascota === 'function') {
        mascotaIcon.innerHTML = generarSVGMascota(estadoJuego.mascota, 'idle', estadoJuego.xp || 0, true, estadoJuego.accesoriosEquipados || []);
    }
    if (etapaHeader && typeof obtenerEtapaMascota === 'function') {
        etapaHeader.textContent = obtenerEtapaMascota(estadoJuego.xp || 0).nombre;
    }
}

function actualizarMapaVisual() {
    if (document.getElementById('nivel-titulo')) document.getElementById('nivel-titulo').textContent = (mundoActivo === 'ingles') ? "🇺🇸 Academia de Inglés" : "🏫 Mate y Lectura";

    const btnErr = document.getElementById('btn-repasar-errores');
    const cantErr = (estadoJuego.erroresPendientes || []).length;
    if (btnErr) {
        btnErr.textContent = `🧠 Mis Errores (${cantErr})`;
        if (cantErr > 0) {
            btnErr.className = "bg-rose-950/90 hover:bg-rose-900 border-2 border-rose-400 text-rose-200 font-black text-xs py-2.5 px-3 rounded-2xl shadow-md flex items-center justify-center gap-1.5 transition transform active:scale-95";
        } else {
            btnErr.className = "bg-slate-800 hover:bg-slate-700 border border-indigo-400/50 text-indigo-200 font-extrabold text-xs py-2.5 px-3 rounded-2xl shadow-md flex items-center justify-center gap-1.5 transition";
        }
    }

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

// --- 7. JUEGO ---
function intentarNivel(num) {
    modoSesionEspecial = null;
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
    const idx = modoSesionEspecial
        ? indiceSesionEspecial
        : (mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles)[nivelJugando].indice;

    document.getElementById('caja-pista').style.display = 'none';
    document.getElementById('feedback-box').style.display = 'none';

    actualizarMascotaEnJuego('idle', modoSesionEspecial === 'errores' ? "¡Tú puedes corregirlo!" : "¡Tú puedes, Itzel!");

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
    if (q.audioIngles) {
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
    const area = q.area || "General";

    if (!estadisticasSesion[area]) estadisticasSesion[area] = { total: 0, ok: 0 };
    estadisticasSesion[area].total++;
    fb.style.display = 'block';

    if (seleccion === q.correcta) {
        reproducirSonido('acierto');
        btnElem.className = "w-full bg-emerald-600 border-2 border-emerald-300 p-3 rounded-xl font-extrabold text-white text-left px-3 text-sm shadow-lg";
        card.classList.add('anim-acierto');

        rachaActual++; estadisticasSesion[area].ok++;
        estadoJuego.xp += 30;
        estadoJuego.monedas += (modoSesionEspecial === 'errores' ? 10 : 5);

        actualizarMascotaEnJuego('happy', rachaActual >= 3 ? `🔥 ¡Racha x${rachaActual}!` : "¡Súper, Itzel! 🌟");

        fb.className = "rounded-2xl p-2.5 text-center font-bold text-[11px] leading-relaxed border bg-emerald-950/80 border-emerald-500/50 text-emerald-300 mt-2";
        fb.textContent = modoSesionEspecial === 'errores'
            ? "🌟 ¡Error corregido y aprendido! +10 🪙"
            : (rachaActual >= 3 ? `🔥 ¡Racha de ${rachaActual}! +5 🪙` : "🌟 ¡Excelente! +5 🪙");

        try { if (typeof confetti === 'function') confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } }); } catch (e) {}

        if (modoSesionEspecial) {
            aciertosSesionEspecial++;
            indiceSesionEspecial++;
            if (modoSesionEspecial === 'errores' && estadoJuego.erroresPendientes) {
                estadoJuego.erroresPendientes = estadoJuego.erroresPendientes.filter(e => e.pregunta !== q.pregunta);
            }
        } else {
            const mp = mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
            mp[nivelJugando].aciertos++;
            mp[nivelJugando].indice++;
        }

        actualizarHeader(); guardarEstado();

        setTimeout(() => {
            card.classList.remove('anim-acierto');
            cargarPreguntaActual();
        }, 1450);

    } else {
        reproducirSonido('error');
        btnElem.className = "w-full bg-rose-600 border-2 border-rose-300 p-3 rounded-xl font-extrabold text-white text-left px-3 text-sm";
        document.querySelectorAll('#opciones-container button')[q.correcta].className = "w-full bg-emerald-700 border-2 border-emerald-400 p-3 rounded-xl font-extrabold text-white text-left px-3 text-sm";
        card.classList.add('anim-error');

        actualizarMascotaEnJuego('sad', "¡No pasa nada, tú puedes! 💪");
        guardarErrorEnCuaderno(q);

        rachaActual = 0;
        fb.className = "rounded-2xl p-3 text-left font-bold text-[11px] leading-relaxed border-2 bg-rose-950/90 border-amber-400/70 text-rose-100 space-y-2 shadow-xl mt-2";
        fb.innerHTML = `<div>💡 <strong class="text-amber-300">Respuesta correcta:</strong><br><span class="text-white">${q.explicacion || q.opciones[q.correcta]}</span></div>
            <button onclick="avanzarSiguienteDespuesDeError()" class="w-full bg-amber-400 text-slate-950 font-black py-2 rounded-lg mt-1 shadow">¡Entendido! ➡️</button>`;

        if (modoSesionEspecial) {
            indiceSesionEspecial++;
        } else {
            const mp = mundoActivo === 'ingles' ? estadoJuego.progresoIngles : estadoJuego.progresoNiveles;
            if (!q.esRepaso) {
                colaPreguntas.splice(Math.min(mp[nivelJugando].indice + 4, colaPreguntas.length), 0, { ...q, esRepaso: true });
            }
            mp[nivelJugando].indice++;
        }
        actualizarHeader(); guardarEstado();
    }
}

// --- 8. FINAL DEL AULA O SESIÓN DE REFORZAMIENTO ---
function finalizarBloqueNivel() {
    if (modoSesionEspecial) {
        reproducirSonido('victoria');
        try { if (typeof confetti === 'function') confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } }); } catch (e) {}

        const bonoMonedas = Math.max(15, aciertosSesionEspecial * 5);
        const bonoXP = Math.max(30, aciertosSesionEspecial * 15);
        estadoJuego.monedas += bonoMonedas;
        estadoJuego.xp += bonoXP;
        guardarEstado();
        actualizarHeader();

        let tituloEsp = "¡Práctica Completada!";
        if (modoSesionEspecial === 'relampago') tituloEsp = "⚡ ¡Reto Relámpago Superado!";
        else if (modoSesionEspecial === 'errores') tituloEsp = "🧠 ¡Cuaderno de Errores Repasado!";
        else if (modoSesionEspecial === 'reforzamiento_mate') tituloEsp = "🧮 ¡Examen de Matemática Superado!";
        else if (modoSesionEspecial === 'reforzamiento_rm') tituloEsp = "🧩 ¡Reto de Razonamiento RM Superado!";
        else if (modoSesionEspecial === 'reforzamiento_lectura') tituloEsp = "📖 ¡Cuentos y Lecturas Completadas!";

        document.getElementById('victoria-estrellas').textContent = "🏆⭐⭐⭐🏆";
        document.getElementById('victoria-titulo').textContent = tituloEsp;
        document.getElementById('victoria-detalle').textContent = `Lograste ${aciertosSesionEspecial} de ${colaPreguntas.length} aciertos. ¡Ganaste +${bonoMonedas} 🪙 y +${bonoXP} XP!`;
        document.getElementById('mensaje-dinamico-meta').innerHTML = `🐾 <strong>¡Excelente entrenamiento, Itzel!</strong><br>Usa tus monedas en <strong>🛍️ Cuidar Mascota</strong> o sigue practicando.`;
        
        const boleta = document.getElementById('boleta-areas');
        if (boleta) boleta.style.display = 'none';

        modoSesionEspecial = null;
        mostrarPantalla('pantalla-victoria');
        return;
    }

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
        
        document.getElementById('pantalla-juego').style.display = 'none';
        
        if (typeof iniciarMinijuegoTiendita === 'function') {
            iniciarMinijuegoTiendita(1, true);
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

// --- 9. PERSISTENCIA ---
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
            if (!estadoJuego.erroresPendientes) estadoJuego.erroresPendientes = [];
            if (!estadoJuego.accesoriosComprados) estadoJuego.accesoriosComprados = [];
            if (!estadoJuego.accesoriosEquipados) estadoJuego.accesoriosEquipados = [];
        }
    } catch (e) { localStorage.removeItem('itzel_mundo_v7'); }

    if (!DATOS_MASCOTAS[estadoJuego.mascota]) {
        estadoJuego.mascota = 'gatito';
    }

    if (sessionStorage.getItem('itzel_dev_auth') === 'true') modoProgramadorActivo = true;
    aplicarConfiguracionDev();
    mostrarPantalla('pantalla-portada');
}

document.addEventListener('DOMContentLoaded', cargarEstado);
