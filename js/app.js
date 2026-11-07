let avatarSeleccionado = '🦸‍♀️';
let preguntasDelNivel = [];
let indicePregunta = 0;
let aciertosTotales = 0;
let puntosXP = 0;

// Seleccionar Avatar en pantalla 1
function seleccionarAvatar(emoji, elemento) {
    avatarSeleccionado = emoji;
    const cards = document.querySelectorAll('.avatar-card');
    cards.forEach(c => c.classList.remove('border-pink-500', 'bg-pink-900/30'));
    elemento.classList.add('border-pink-500', 'bg-pink-900/30');
}

// Confirmar e ir a la Montaña
function confirmarAvatar() {
    document.getElementById('header-avatar').textContent = avatarSeleccionado;
    document.getElementById('pantalla-avatar').classList.add('hidden');
    document.getElementById('pantalla-mapa').classList.remove('hidden');
    document.getElementById('nivel-titulo').textContent = "🌟 Mapa de Niveles";
}

// Iniciar Nivel con animación intermedia
function iniciarNivel(numeroNivel) {
    if (numeroNivel === 1 && typeof nivel1_Grado1 !== 'undefined') {
        preguntasDelNivel = [...nivel1_Grado1.matematicas, ...nivel1_Grado1.lectura];
        indicePregunta = 0;
        aciertosTotales = 0;

        // Ocultar mapa y mostrar pantalla de animación
        document.getElementById('pantalla-mapa').classList.add('hidden');
        document.getElementById('anim-avatar-emoji').textContent = avatarSeleccionado;
        document.getElementById('pantalla-animacion').classList.remove('hidden');

        // Esperar 2 segundos de animación antes de iniciar
        setTimeout(() => {
            document.getElementById('pantalla-animacion').classList.add('hidden');
            document.getElementById('pantalla-juego').classList.remove('hidden');
            document.getElementById('nivel-titulo').textContent = "⛰️ Nivel 1: 1.º Primaria";
            cargarPreguntaActual();
        }, 1800);
    }
}

function cargarPreguntaActual() {
    document.getElementById('feedback-msg').textContent = "";

    if (indicePregunta >= preguntasDelNivel.length) {
        alert(`🏆 ¡Felicidades Itzel! Completaste el bloque con ${aciertosTotales} aciertos de 40.`);
        document.getElementById('pantalla-juego').classList.add('hidden');
        document.getElementById('pantalla-mapa').classList.remove('hidden');
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

    setTimeout(() => {
        indicePregunta++;
        cargarPreguntaActual();
    }, 1500);
}
