let avatarSeleccionado = '🦸‍♀️';
let preguntasDelNivel = [];
let indicePregunta = 0;
let aciertosTotales = 0;
let puntosXP = 0;

// Seleccionar Avatar en pantalla 1
function seleccionarAvatar(emoji, elemento) {
    avatarSeleccionado = emoji;
    const cards = document.querySelectorAll('.avatar-card');
    cards.forEach(c => c.classList.remove('border-pink-500', 'bg-pink-900/40'));
    elemento.classList.add('border-pink-500', 'bg-pink-900/40');
}

// Confirmar e ir a la Montaña
function confirmarAvatar() {
    document.getElementById('header-avatar').textContent = avatarSeleccionado;
    guardarEstadoJuego();

    mostrarPantalla('pantalla-mapa');
    document.getElementById('nivel-titulo').textContent = "🌟 Mapa de Niveles";
}

// Iniciar Nivel con animación intermedia
function iniciarNivel(numeroNivel) {
    if (numeroNivel === 1 && typeof nivel1_Grado1 !== 'undefined') {
        preguntasDelNivel = [...nivel1_Grado1.matematicas, ...nivel1_Grado1.lectura];

        // Mostrar pantalla de animación
        document.getElementById('anim-avatar-emoji').textContent = avatarSeleccionado;
        mostrarPantalla('pantalla-animacion');

        // Transición animada de 1.8 segundos al reto
        setTimeout(() => {
            mostrarPantalla('pantalla-juego');
            document.getElementById('nivel-titulo').textContent = "⛰️ Nivel 1: 1.º Primaria";
            cargarPreguntaActual();
        }, 1800);
    }
}

function cargarPreguntaActual() {
    document.getElementById('feedback-msg').textContent = "";

    if (indicePregunta >= preguntasDelNivel.length) {
        alert(`🏆 ¡Felicidades Itzel! Completaste el bloque con ${aciertosTotales} aciertos de 40.`);
        indicePregunta = 0;
        guardarEstadoJuego();
        mostrarPantalla('pantalla-mapa');
        return;
    }

    const q = preguntasDelNivel[indicePregunta];
    const esMatematica = indicePregunta < 20;

    const catTag = document.getElementById('categoria-tag');
    catTag.textContent = esMatematica ? "Matemáticas 🧮" : "Comprensión Lectora 📖";
    catTag.className = esMatematica ? "bg-emerald-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider" : "bg-pink-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider";

    document.getElementById('contador-pregunta').textContent = `Pregunta ${indicePregunta + 1} de 40`;
    document.getElementById('pregunta-texto').textContent = q.pregunta;

    const barra = document.getElementById('barra-exp');
    barra.style.width = `${((indicePregunta) / 40) * 100}%`;

    const contenedor = document.getElementById('opciones-container');
    contenedor.innerHTML = "";

    q.opciones.forEach((opcion, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opcion;
        btn.className = "btn-opcion w-full bg-slate-800/90 hover:bg-slate-700 border border-indigo-500/40 p-3.5 rounded-xl font-semibold transition text-slate-100 text-left px-4 text-sm";
        btn.onclick = () => evaluarRespuesta(idx, q.correcta, btn);
        contenedor.appendChild(btn);
    });
}

function evaluarRespuesta(seleccion, correcta, btnElem) {
    const todosBotones = document.querySelectorAll('#opciones-container button');
    todosBotones.forEach(b => b.disabled = true);

    const feedback = document.getElementById('feedback-msg');

    if (seleccion === correcta) {
        btnElem.className = "w-full bg-emerald-600 border border-emerald-400 p-3.5 rounded-xl font-semibold text-white text-left px-4 text-sm";
        feedback.textContent = "🎉 ¡Excelente acierto, Itzel!";
        feedback.className = "text-center font-bold text-base text-emerald-400";
        aciertosTotales++;
        puntosXP += 25;
        document.getElementById('score-display').textContent = `${puntosXP} XP`;
    } else {
        btnElem.className = "w-full bg-rose-600 border border-rose-400 p-3.5 rounded-xl font-semibold text-white text-left px-4 text-sm";
        todosBotones[correcta].className = "w-full bg-emerald-700 border border-emerald-400 p-3.5 rounded-xl font-semibold text-white text-left px-4 text-sm";
        feedback.textContent = "❌ ¡Casi! La respuesta correcta era la verde.";
        feedback.className = "text-center font-bold text-base text-rose-400";
    }

    // Guardar avance tras cada respuesta
    indicePregunta++;
    guardarEstadoJuego();

    setTimeout(() => {
        cargarPreguntaActual();
    }, 1500);
}

// Alternar pantallas de forma segura
function mostrarPantalla(idPantalla) {
    const pantallas = ['pantalla-avatar', 'pantalla-mapa', 'pantalla-animacion', 'pantalla-juego'];
    pantallas.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === idPantalla) ? 'block' : 'none';
    });
}

// Sistema de Guardado Automático en el Celular
function guardarEstadoJuego() {
    const datosGuardados = {
        avatar: avatarSeleccionado,
        xp: puntosXP,
        indicePregunta: indicePregunta,
        aciertosTotales: aciertosTotales
    };
    localStorage.setItem('itzel_juego_datos', JSON.stringify(datosGuardados));
}

function cargarEstadoJuego() {
    const datos = localStorage.getItem('itzel_juego_datos');
    if (datos) {
        const estado = JSON.parse(datos);
        avatarSeleccionado = estado.avatar || '🦸‍♀️';
        puntosXP = estado.xp || 0;
        indicePregunta = estado.indicePregunta || 0;
        aciertosTotales = estado.aciertosTotales || 0;

        document.getElementById('header-avatar').textContent = avatarSeleccionado;
        document.getElementById('score-display').textContent = `${puntosXP} XP`;

        // Si ya tenía un avatar guardado, ir directamente al mapa
        mostrarPantalla('pantalla-mapa');
        document.getElementById('nivel-titulo').textContent = "🌟 Mapa de Niveles";
    } else {
        mostrarPantalla('pantalla-avatar');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarEstadoJuego();
});
