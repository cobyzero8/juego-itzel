/* ============================================================
   MOTOR ÉPICO PERSONALIZADO PARA ITZEL (js/app.js)
   ============================================================ */

let estadoJuego = {
    avatar: 'foto', // Por defecto usa la foto real de Itzel
    xp: 0,
    monedas: 0,
    nivelMaxDesbloqueado: 1,
    progresoNiveles: {
        1: { indice: 0, aciertos: 0, completado: false },
        2: { indice: 0, aciertos: 0, completado: false }
    }
};

let nivelJugando = 1;
let preguntasDelNivel = [];
let rachaActual = 0;

// --- 1. SONIDOS MÁGICOS ---
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

// --- 2. NAVEGACIÓN ENTRE PANTALLAS ---
function mostrarPantalla(idPantalla) {
    const pantallas = ['pantalla-portada', 'pantalla-avatar', 'pantalla-mapa', 'pantalla-animacion', 'pantalla-juego', 'pantalla-victoria'];
    pantallas.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === idPantalla) ? 'block' : 'none';
    });

    const header = document.getElementById('main-header');
    if (header) {
        header.style.display = (idPantalla === 'pantalla-portada') ? 'none' : 'flex';
    }
}

function entrarDesdePortada() {
    reproducirSonido('entrada');
    if (typeof confetti === 'function') {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
    }
    actualizarHeader();
    actualizarMapaVisual();
    mostrarPantalla('pantalla-mapa');
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
    actualizarHeader();
    actualizarMapaVisual();
    mostrarPantalla('pantalla-mapa');
}

function volverAlMapa() {
    actualizarHeader();
    actualizarMapaVisual();
    mostrarPantalla('pantalla-mapa');
}

// --- 3. RENDERIZAR AVATAR (FOTO O EMOJI) ---
function actualizarHeader() {
    const box = document.getElementById('header-avatar-box');
    if (estadoJuego.avatar === 'foto') {
        box.className = "medallon-contenedor w-12 h-12";
        box.innerHTML = `<div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto w-12 h-12">`;
    } else {
        box.className = "text-3xl bg-purple-900/70 p-2 rounded-2xl border-2 border-pink-500/50";
        box.innerHTML = `<span class="avatar-flotante">${estadoJuego.avatar}</span>`;
    }

    document.getElementById('score-display').textContent = `${estadoJuego.xp} XP`;
    document.getElementById('monedas-display').textContent = `🪙 ${estadoJuego.monedas}`;
}

function actualizarMapaVisual() {
    document.getElementById('nivel-titulo').textContent = "⛰️ Montaña del Saber";

    const p1 = estadoJuego.progresoNiveles[1];
    if (p1.completado) {
        document.getElementById('subtitulo-nivel-1').textContent = `✅ ¡Completado! (${p1.aciertos}/40 aciertos)`;
        document.getElementById('tarjeta-nivel-1').classList.remove('nodo-activo');
    } else if (p1.indice > 0) {
        document.getElementById('subtitulo-nivel-1').textContent = `En curso: Reto ${p1.indice + 1} de 40`;
    }

    const card2 = document.getElementById('tarjeta-nivel-2');
    const p2 = estadoJuego.progresoNiveles[2];
    if (estadoJuego.nivelMaxDesbloqueado >= 2) {
        card2.className = "nodo-activo cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl border-2 border-emerald-300 flex justify-between items-center shadow-lg transform active:scale-95 transition";
        document.getElementById('titulo-nivel-2').className = "font-extrabold text-sm text-white";
        document.getElementById('subtitulo-nivel-2').className = "text-[10px] text-emerald-100";
        document.getElementById('subtitulo-nivel-2').textContent = p2.completado
            ? `✅ ¡Completado! (${p2.aciertos}/40 aciertos)`
            : (p2.indice > 0 ? `En curso: Reto ${p2.indice + 1} de 40` : "20 Matemáticas + 20 Lectura");
        document.getElementById('badge-nivel-2').className = "text-xs bg-white text-emerald-900 px-3.5 py-1.5 rounded-full font-extrabold shadow";
        document.getElementById('badge-nivel-2').textContent = "¡JUGAR!";
    }
}

// --- 4. INICIAR NIVEL CON ANIMACIÓN ---
function intentarNivel(num) {
    if (num > estadoJuego.nivelMaxDesbloqueado) {
        reproducirSonido('error');
        return;
    }

    const datosGrado = (num === 1) ? nivel1_Grado1 : nivel2_Grado2;
    if (typeof datosGrado === 'undefined') return;

    nivelJugando = num;
    preguntasDelNivel = [...datosGrado.matematicas, ...datosGrado.lectura];
    rachaActual = 0;
    document.getElementById('racha-badge').textContent = "🔥 0";

    if (estadoJuego.progresoNiveles[num].indice >= preguntasDelNivel.length) {
        estadoJuego.progresoNiveles[num].indice = 0;
        estadoJuego.progresoNiveles[num].aciertos = 0;
    }

    const animBox = document.getElementById('anim-avatar-box');
    if (estadoJuego.avatar === 'foto') {
        animBox.innerHTML = `<div class="medallon-contenedor w-28 h-28"><div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto w-28 h-28"></div>`;
    } else {
        animBox.innerHTML = `<div class="text-7xl">${estadoJuego.avatar}</div>`;
    }

    document.getElementById('anim-titulo').textContent = `¡Nivel ${num}: ${num}.º de Primaria!`;
    document.getElementById('anim-subtitulo').textContent = `¡Vamos Itzel! Continuando en reto ${estadoJuego.progresoNiveles[num].indice + 1}...`;
    reproducirSonido('acierto');
    mostrarPantalla('pantalla-animacion');

    setTimeout(() => {
        mostrarPantalla('pantalla-juego');
        document.getElementById('nivel-titulo').textContent = `⛰️ Nivel ${num}: ${num}.º Primaria`;
        cargarPreguntaActual();
    }, 1700);
}

// --- 5. PREGUNTAS ---
function cargarPreguntaActual() {
    const progreso = estadoJuego.progresoNiveles[nivelJugando];
    const idx = progreso.indice;
    document.getElementById('feedback-msg').textContent = "";

    if (idx >= preguntasDelNivel.length) {
        finalizarBloqueNivel();
        return;
    }

    const q = preguntasDelNivel[idx];
    const esMatematica = idx < 20;

    const catTag = document.getElementById('categoria-tag');
    catTag.textContent = esMatematica ? "Matemáticas 🧮" : "Comprensión Lectora 📖";
    catTag.className = esMatematica
        ? "bg-emerald-600 text-[10px] px-3 py-1 rounded-full font-extrabold uppercase tracking-wider shadow"
        : "bg-pink-600 text-[10px] px-3 py-1 rounded-full font-extrabold uppercase tracking-wider shadow";

    document.getElementById('contador-pregunta').textContent = `Reto ${idx + 1} / 40`;
    document.getElementById('pregunta-texto').textContent = q.pregunta;
    document.getElementById('barra-exp').style.width = `${(idx / 40) * 100}%`;

    const contenedor = document.getElementById('opciones-container');
    contenedor.innerHTML = "";

    q.opciones.forEach((opcion, i) => {
        const btn = document.createElement('button');
        btn.textContent = opcion;
        btn.className = "btn-opcion w-full bg-slate-800/95 hover:bg-slate-700 border-2 border-indigo-500/40 p-3.5 rounded-2xl font-bold transition text-slate-100 text-left px-4 text-sm";
        btn.onclick = () => evaluarRespuesta(i, q.correcta, btn);
        contenedor.appendChild(btn);
    });
}

function evaluarRespuesta(seleccion, correcta, btnElem) {
    const todosBotones = document.querySelectorAll('#opciones-container button');
    todosBotones.forEach(b => b.disabled = true);

    const card = document.getElementById('game-card');
    const feedback = document.getElementById('feedback-msg');
    const progreso = estadoJuego.progresoNiveles[nivelJugando];

    if (seleccion === correcta) {
        reproducirSonido('acierto');
        btnElem.className = "w-full bg-emerald-600 border-2 border-emerald-300 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm shadow-lg";
        card.classList.add('anim-acierto');

        rachaActual++;
        progreso.aciertos++;
        estadoJuego.xp += 25;
        estadoJuego.monedas += 5;

        document.getElementById('racha-badge').textContent = `🔥 ${rachaActual}`;
        feedback.textContent = rachaActual >= 3
            ? `🔥 ¡Súper racha de ${rachaActual}, Itzel! +5 🪙`
            : "🌟 ¡Genial, Itzel! Respuesta correcta +5 🪙";
        feedback.className = "text-center font-extrabold text-sm text-emerald-400";

        if (typeof confetti === 'function') {
            confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
        }
    } else {
        reproducirSonido('error');
        btnElem.className = "w-full bg-rose-600 border-2 border-rose-300 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm";
        todosBotones[correcta].className = "w-full bg-emerald-700 border-2 border-emerald-400 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm";
        card.classList.add('anim-error');

        rachaActual = 0;
        document.getElementById('racha-badge').textContent = "🔥 0";
        feedback.textContent = "💡 ¡Casi! Mira la respuesta correcta en verde.";
        feedback.className = "text-center font-extrabold text-sm text-rose-400";
    }

    progreso.indice++;
    actualizarHeader();
    guardarEstado();

    setTimeout(() => {
        card.classList.remove('anim-acierto', 'anim-error');
        cargarPreguntaActual();
    }, 1450);
}

// --- 6. VICTORIA ---
function finalizarBloqueNivel() {
    const progreso = estadoJuego.progresoNiveles[nivelJugando];
    const aciertos = progreso.aciertos;
    const aprobado = aciertos >= 30;

    reproducirSonido('victoria');
    if (typeof confetti === 'function') {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    let estrellas = "⭐";
    if (aciertos >= 38) estrellas = "⭐⭐⭐";
    else if (aciertos >= 30) estrellas = "⭐⭐";

    document.getElementById('victoria-estrellas').textContent = estrellas;

    if (aprobado) {
        progreso.completado = true;
        if (nivelJugando === estadoJuego.nivelMaxDesbloqueado) {
            estadoJuego.nivelMaxDesbloqueado = nivelJugando + 1;
        }
        estadoJuego.monedas += 50;
        document.getElementById('victoria-titulo').textContent = `¡Felicidades, Itzel! 🎉`;
        document.getElementById('victoria-detalle').textContent = `Lograste ${aciertos} de 40 aciertos y ganaste +50 monedas extra. ¡Desbloqueaste el siguiente nivel!`;
    } else {
        document.getElementById('victoria-titulo').textContent = `¡Buen esfuerzo, Itzel! 💪`;
        document.getElementById('victoria-detalle').textContent = `Lograste ${aciertos} de 40 aciertos. Necesitas 30 para abrir el siguiente nivel. ¡Inténtalo de nuevo!`;
    }

    progreso.indice = 0;
    guardarEstado();
    actualizarHeader();
    mostrarPantalla('pantalla-victoria');
}

// --- 7. GUARDADO AUTOMÁTICO ---
function guardarEstado() {
    localStorage.setItem('itzel_mundo_v3', JSON.stringify(estadoJuego));
}

function cargarEstado() {
    const guardado = localStorage.getItem('itzel_mundo_v3');
    if (guardado) {
        estadoJuego = JSON.parse(guardado);
    }
    // Siempre mostramos la Portada Épica al abrir el juego para saludarla con su foto y corona
    mostrarPantalla('pantalla-portada');
}

document.addEventListener('DOMContentLoaded', cargarEstado);
