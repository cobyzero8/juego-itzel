/* ============================================================
   MOTOR PRINCIPAL DEL JUEGO (js/app.js)
   ============================================================ */

let indicePregunta = 0;
let puntosXP = 0;
let nivelActual = 1;

// Cargar progreso guardado en el celular si existe
function cargarProgreso() {
    const progresoGuardado = localStorage.getItem('itzel_game_progress');
    if (progresoGuardado) {
        const datos = JSON.parse(progresoGuardado);
        puntosXP = datos.puntosXP || 0;
        nivelActual = datos.nivelActual || 1;
    }
    actualizarInterfazHeader();
}

// Guardar progreso en el almacenamiento local del celular
function guardarProgreso() {
    const datos = {
        puntosXP: puntosXP,
        nivelActual: nivelActual
    };
    localStorage.setItem('itzel_game_progress', JSON.stringify(datos));
}

// Actualizar textos y barra de experiencia
function actualizarInterfazHeader() {
    const elScore = document.getElementById('score-display');
    const elNivel = document.getElementById('nivel-titulo');
    const elBarra = document.getElementById('barra-exp');

    if (elScore) elScore.textContent = `${puntosXP} XP`;
    if (elNivel) elNivel.textContent = `🌟 Nivel ${nivelActual}: Exploradora`;
    
    if (elBarra) {
        let porcentaje = (puntosXP % 100);
        elBarra.style.width = `${porcentaje}%`;
    }
}

// Renderizar la pregunta actual en pantalla
function mostrarPregunta() {
    const feedback = document.getElementById('feedback-msg');
    if (feedback) feedback.textContent = "";

    // Filtrar preguntas por el nivel actual de la base de datos de primaria
    const preguntasDisponibles = preguntasPrimaria.filter(p => p.nivel === nivelActual);
    
    // Si completó las preguntas de ese nivel, sube de nivel automátiamente
    if (indicePregunta >= preguntasDisponibles.length) {
        indicePregunta = 0;
        nivelActual++;
        guardarProgreso();
        alert(`¡Felicidades Itzel! 🎉 Subiste al Nivel ${nivelActual}`);
        mostrarPregunta();
        return;
    }

    const q = preguntasDisponibles[indicePregunta];

    document.getElementById('categoria-tag').textContent = q.categoria;
    document.getElementById('categoria-tag').className = `${q.tipoColor} text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block`;
    document.getElementById('pregunta-texto').textContent = q.pregunta;

    const contenedorOpciones = document.getElementById('opciones-container');
    contenedorOpciones.innerHTML = "";

    q.opciones.forEach((opcion, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opcion;
        btn.className = "btn-opcion w-full bg-slate-800/90 hover:bg-slate-700 border border-indigo-500/40 p-3.5 rounded-xl font-semibold transition text-slate-100 text-left px-4 text-sm md:text-base";
        btn.onclick = () => evaluarRespuesta(idx, q.correcta, btn);
        contenedorOpciones.appendChild(btn);
    });

    actualizarInterfazHeader();
}

// Evaluar la selección de la niña
function evaluarRespuesta(seleccion, correcta, elementoBtn) {
    const tarjeta = document.getElementById('game-card');
    const feedback = document.getElementById('feedback-msg');
    const todosBotones = document.querySelectorAll('#opciones-container button');

    // Deshabilitar botones para evitar doble clic
    todosBotones.forEach(b => b.disabled = true);

    if (seleccion === correcta) {
        elementoBtn.className = "w-full bg-emerald-600 border border-emerald-400 p-3.5 rounded-xl font-semibold text-white text-left px-4 text-sm md:text-base";
        tarjeta.classList.add('anim-acierto');
        feedback.textContent = "🎉 ¡Excelente trabajo, Itzel!";
        feedback.className = "text-center font-bold text-base text-emerald-400";
        
        puntosXP += 25;
        guardarProgreso();

        setTimeout(() => {
            tarjeta.classList.remove('anim-acierto');
            indicePregunta++;
            mostrarPregunta();
        }, 1400);

    } else {
        elementoBtn.className = "w-full bg-rose-600 border border-rose-400 p-3.5 rounded-xl font-semibold text-white text-left px-4 text-sm md:text-base";
        todosBotones[correcta].className = "w-full bg-emerald-700 border border-emerald-400 p-3.5 rounded-xl font-semibold text-white text-left px-4 text-sm md:text-base";
        tarjeta.classList.add('anim-error');
        feedback.textContent = "❌ ¡Casi! Revisa la respuesta correcta.";
        feedback.className = "text-center font-bold text-base text-rose-400";

        setTimeout(() => {
            tarjeta.classList.remove('anim-error');
            indicePregunta++;
            mostrarPregunta();
        }, 2000);
    }
}

// Inicializar al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    cargarProgreso();
    mostrarPregunta();
});
