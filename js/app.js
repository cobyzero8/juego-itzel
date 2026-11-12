/* ============================================================
   MOTOR PEDAGÓGICO ADAPTATIVO PARA ITZEL (js/app.js)
   Incluye: Pistas Mágicas, Explicación al Fallar y Repetición
   ============================================================ */

let modoProgramadorActivo = false;

let estadoJuego = {
    avatar: 'foto',
    xp: 0,
    monedas: 0,
    nivelMaxDesbloqueado: 1,
    progresoNiveles: {
        1: { indice: 0, aciertos: 0, completado: false },
        2: { indice: 0, aciertos: 0, completado: false },
        3: { indice: 0, aciertos: 0, completado: false },
        4: { indice: 0, aciertos: 0, completado: false }
    }
};

let nivelJugando = 1;
let colaPreguntas = [];
let totalInicialAula = 30;
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

// --- 2. LOGIN PROGRAMADOR (Usuario: coby / Pass: 123456pp) ---
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
    estadoJuego.nivelMaxDesbloqueado = 10;
    guardarEstado();
    actualizarMapaVisual();
    reproducirSonido('acierto');
}

function testReiniciarJuego() {
    if (!modoProgramadorActivo) return;
    localStorage.removeItem('itzel_mundo_v5');
    location.reload();
}

function testCompletarNivelRapido() {
    if (!modoProgramadorActivo) return;
    const progreso = estadoJuego.progresoNiveles[nivelJugando];
    progreso.aciertos = totalInicialAula;
    progreso.indice = colaPreguntas.length;
    estadoJuego.xp += 250;
    finalizarBloqueNivel();
}

// --- 3. NAVEGACIÓN ---
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
    aplicarConfiguracionDev();
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

// --- 4. CABECERA Y MAPA ---
function actualizarHeader() {
    const box = document.getElementById('header-avatar-box');
    if (estadoJuego.avatar === 'foto') {
        box.className = "medallon-contenedor w-12 h-12";
        box.innerHTML = `<div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto object-top w-12 h-12">`;
    } else {
        box.className = "text-3xl bg-purple-900/70 p-2 rounded-2xl border-2 border-pink-500/50";
        box.innerHTML = `<span class="avatar-flotante">${estadoJuego.avatar}</span>`;
    }

    document.getElementById('score-display').textContent = `${estadoJuego.xp} XP`;
    document.getElementById('monedas-display').textContent = `🪙 ${estadoJuego.monedas}`;
}

function actualizarMapaVisual() {
    document.getElementById('nivel-titulo').textContent = "🏫 Aulas de Aprendizaje";

    const p1 = estadoJuego.progresoNiveles[1];
    if (p1 && p1.completado) {
        document.getElementById('subtitulo-nivel-1').textContent = `✅ ¡Dominada! (${p1.aciertos} aciertos)`;
        document.getElementById('tarjeta-nivel-1').classList.remove('nodo-activo');
    }

    const coloresAula = {
        2: "from-emerald-600 to-teal-600 border-emerald-300 text-emerald-900",
        3: "from-sky-600 to-indigo-600 border-sky-300 text-sky-900",
        4: "from-amber-500 to-orange-600 border-amber-300 text-amber-950"
    };

    [2, 3, 4].forEach(num => {
        const card = document.getElementById(`tarjeta-nivel-${num}`);
        if (!card) return;
        const prog = estadoJuego.progresoNiveles[num] || { indice: 0, aciertos: 0, completado: false };

        if (estadoJuego.nivelMaxDesbloqueado >= num) {
            const estilos = coloresAula[num].split(' ');
            card.className = `nodo-activo cursor-pointer bg-gradient-to-r ${estilos[0]} ${estilos[1]} p-4 rounded-2xl border-2 ${estilos[2]} flex justify-between items-center shadow-lg transform active:scale-95 transition`;
            document.getElementById(`titulo-nivel-${num}`).className = "font-extrabold text-sm text-white";
            document.getElementById(`subtitulo-nivel-${num}`).className = "text-[10px] text-white/90";
            document.getElementById(`subtitulo-nivel-${num}`).textContent = prog.completado
                ? `✅ ¡Dominada! (${prog.aciertos} aciertos)`
                : "Suma, Resta, Mult., Div., Raz. y Lectura";
            document.getElementById(`badge-nivel-${num}`).className = `text-xs bg-white ${estilos[3]} px-3.5 py-1.5 rounded-full font-extrabold shadow`;
            document.getElementById(`badge-nivel-${num}`).textContent = "¡ENTRAR!";
        }
    });
}

// --- 5. INICIAR AULA ---
function intentarNivel(num) {
    if (num > estadoJuego.nivelMaxDesbloqueado) {
        reproducirSonido('error');
        return;
    }

    const mapaDatos = {
        1: typeof nivel1_Grado1 !== 'undefined' ? nivel1_Grado1 : null,
        2: typeof nivel2_Grado2 !== 'undefined' ? nivel2_Grado2 : null,
        3: typeof nivel3_Grado3 !== 'undefined' ? nivel3_Grado3 : null,
        4: typeof nivel4_Grado4 !== 'undefined' ? nivel4_Grado4 : null
    };

    const datosGrado = mapaDatos[num];
    if (!datosGrado) {
        alert(`El Aula ${num} se está preparando. ¡Vamos a llenarla!`);
        return;
    }

    if (!estadoJuego.progresoNiveles[num]) {
        estadoJuego.progresoNiveles[num] = { indice: 0, aciertos: 0, completado: false };
    }

    nivelJugando = num;
    // Cargar todas las preguntas del aula (matemáticas completas + lecturas completas)
    colaPreguntas = [...datosGrado.matematicas, ...datosGrado.lectura];
    totalInicialAula = colaPreguntas.length;
    rachaActual = 0;

    if (estadoJuego.progresoNiveles[num].indice >= colaPreguntas.length) {
        estadoJuego.progresoNiveles[num].indice = 0;
        estadoJuego.progresoNiveles[num].aciertos = 0;
    }

    const animBox = document.getElementById('anim-avatar-box');
    if (estadoJuego.avatar === 'foto') {
        animBox.innerHTML = `<div class="medallon-contenedor w-28 h-28"><div class="medallon-halo"></div><img src="itzel.jpg" alt="Itzel" class="medallon-foto object-top w-28 h-28"></div>`;
    } else {
        animBox.innerHTML = `<div class="text-7xl">${estadoJuego.avatar}</div>`;
    }

    document.getElementById('anim-titulo').textContent = `¡Aula ${num}: ${datosGrado.nombre}!`;
    document.getElementById('anim-subtitulo').textContent = `¡Vamos Itzel! Usa las Pistas Mágicas si necesitas ayuda.`;
    reproducirSonido('acierto');
    mostrarPantalla('pantalla-animacion');

    setTimeout(() => {
        mostrarPantalla('pantalla-juego');
        document.getElementById('nivel-titulo').textContent = `🏫 Aula ${num}`;
        cargarPreguntaActual();
    }, 1500);
}

// --- 6. PREGUNTAS CON PISTA, LECTURA LARGA Y ESCENARIO VISUAL ---
function cargarPreguntaActual() {
    const progreso = estadoJuego.progresoNiveles[nivelJugando];
    const idx = progreso.indice;

    document.getElementById('caja-pista').style.display = 'none';
    document.getElementById('feedback-box').style.display = 'none';

    if (idx >= colaPreguntas.length) {
        finalizarBloqueNivel();
        return;
    }

    const q = colaPreguntas[idx];

    // Etiqueta de sub-área (Suma, Resta, Multiplicación, División, Razonamiento, Lectura)
    const catTag = document.getElementById('categoria-tag');
    catTag.textContent = q.area || (q.textoLectura ? "Lectura 📖" : "Matemáticas 🧮");

    const coloresArea = {
        "Suma ➕": "bg-emerald-600",
        "Resta ➖": "bg-teal-600",
        "Multiplicación ✖️": "bg-indigo-600",
        "División ➗": "bg-purple-600",
        "Razonamiento 🧠": "bg-amber-600",
        "Lectura 📖": "bg-pink-600"
    };
    const bgClase = coloresArea[q.area] || "bg-emerald-600";
    catTag.className = `${bgClase} text-[10px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider shadow`;

    // Guardar pista actual
    document.getElementById('texto-pista').textContent = q.pista || "Observa con calma los dibujos y cuenta paso a paso.";

    // Escenario Visual Animado
    const escenaCaja = document.getElementById('escena-caja');
    const escenaDibujo = document.getElementById('escena-dibujo');
    escenaCaja.classList.remove('escena-visual');
    void escenaCaja.offsetWidth;
    escenaCaja.classList.add('escena-visual');
    escenaDibujo.textContent = q.dibujo || "🌟 ✨ 🎓 ✨ 🌟";

    // Caja de Lectura Mediana / Grande (si la pregunta trae textoLectura)
    const cajaLectura = document.getElementById('caja-lectura');
    if (q.textoLectura) {
        cajaLectura.style.display = 'block';
        document.getElementById('texto-lectura').textContent = q.textoLectura;
    } else {
        cajaLectura.style.display = 'none';
    }

    document.getElementById('contador-pregunta').textContent = `Reto ${idx + 1} / ${colaPreguntas.length}`;
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

function evaluarRespuesta(seleccion, q, btnElem) {
    const todosBotones = document.querySelectorAll('#opciones-container button');
    todosBotones.forEach(b => b.disabled = true);

    const card = document.getElementById('game-card');
    const feedbackBox = document.getElementById('feedback-box');
    const progreso = estadoJuego.progresoNiveles[nivelJugando];

    feedbackBox.style.display = 'block';

    if (seleccion === q.correcta) {
        reproducirSonido('acierto');
        btnElem.className = "w-full bg-emerald-600 border-2 border-emerald-300 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm shadow-lg";
        card.classList.add('anim-acierto');

        rachaActual++;
        progreso.aciertos++;
        estadoJuego.xp += 30;
        estadoJuego.monedas += 5;

        feedbackBox.className = "rounded-2xl p-3 text-center font-bold text-xs leading-relaxed border bg-emerald-950/80 border-emerald-500/50 text-emerald-300";
        feedbackBox.textContent = rachaActual >= 3
            ? `🔥 ¡Súper racha de ${rachaActual}, Itzel! +5 🪙`
            : "🌟 ¡Excelente, Itzel! Lo resolviste muy bien +5 🪙";

        if (typeof confetti === 'function') {
            confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
        }

        progreso.indice++;
        actualizarHeader();
        guardarEstado();

        setTimeout(() => {
            card.classList.remove('anim-acierto');
            cargarPreguntaActual();
        }, 1400);

    } else {
        // ERROR: Enseñar por qué y volver a practicar la pregunta más adelante
        reproducirSonido('error');
        btnElem.className = "w-full bg-rose-600 border-2 border-rose-300 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm";
        todosBotones[q.correcta].className = "w-full bg-emerald-700 border-2 border-emerald-400 p-3.5 rounded-2xl font-extrabold text-white text-left px-4 text-sm";
        card.classList.add('anim-error');

        rachaActual = 0;
        feedbackBox.className = "rounded-2xl p-3 text-left font-bold text-xs leading-relaxed border bg-rose-950/85 border-rose-500/60 text-rose-200";
        feedbackBox.innerHTML = `💡 <strong class="text-amber-300">Aprende el truco:</strong> ${q.explicacion || "Fíjate en la respuesta en verde. ¡La volveremos a practicar en un momento!"}`;

        // Repetición espaciada: si aún no era un repaso, reinsertarla 4 lugares después
        if (!q.esRepaso) {
            const copiaRepaso = { ...q, esRepaso: true };
            const posReinsercion = Math.min(progreso.indice + 4, colaPreguntas.length);
            colaPreguntas.splice(posReinsercion, 0, copiaRepaso);
        }

        progreso.indice++;
        actualizarHeader();
        guardarEstado();

        // Dar más tiempo (3.5 segundos) para que lea la explicación y aprenda
        setTimeout(() => {
            card.classList.remove('anim-error');
            cargarPreguntaActual();
        }, 3500);
    }
}

// --- 7. VICTORIA ---
function finalizarBloqueNivel() {
    const progreso = estadoJuego.progresoNiveles[nivelJugando];
    const aciertos = progreso.aciertos;
    const porcentaje = Math.round((aciertos / colaPreguntas.length) * 100);
    const aprobado = porcentaje >= 70;

    reproducirSonido('victoria');
    if (typeof confetti === 'function') {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    let estrellas = "⭐";
    if (porcentaje >= 90) estrellas = "⭐⭐⭐";
    else if (porcentaje >= 70) estrellas = "⭐⭐";

    document.getElementById('victoria-estrellas').textContent = estrellas;

    if (aprobado) {
        progreso.completado = true;
        if (nivelJugando === estadoJuego.nivelMaxDesbloqueado) {
            estadoJuego.nivelMaxDesbloqueado = nivelJugando + 1;
        }
        estadoJuego.monedas += 50;
        document.getElementById('victoria-titulo').textContent = `¡Aula ${nivelJugando} Dominada! 🎉`;
        document.getElementById('victoria-detalle').textContent = `¡Felicidades Itzel! Lograste ${aciertos} aciertos y ganaste +50 monedas. ¡Ya abriste la siguiente aula!`;
    } else {
        document.getElementById('victoria-titulo').textContent = `¡Sigue practicando, Itzel! 💪`;
        document.getElementById('victoria-detalle').textContent = `Lograste ${aciertos} aciertos. Necesitas al menos 70% para abrir la siguiente aula. ¡Tú puedes!`;
    }

    progreso.indice = 0;
    guardarEstado();
    actualizarHeader();
    mostrarPantalla('pantalla-victoria');
}

// --- 8. PERSISTENCIA ---
function guardarEstado() {
    localStorage.setItem('itzel_mundo_v5', JSON.stringify(estadoJuego));
}

function cargarEstado() {
    const guardado = localStorage.getItem('itzel_mundo_v5');
    if (guardado) {
        estadoJuego = JSON.parse(guardado);
    }
    if (sessionStorage.getItem('itzel_dev_auth') === 'true') {
        modoProgramadorActivo = true;
    }
    aplicarConfiguracionDev();
    mostrarPantalla('pantalla-portada');
}

document.addEventListener('DOMContentLoaded', cargarEstado);
