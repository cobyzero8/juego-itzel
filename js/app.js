/* ============================================================
   MOTOR PRINCIPAL DEL JUEGO CON MAPA Y SELECCIÓN DE AVATAR
   ============================================================ */

let avatarSeleccionado = '🦸‍♀️';
let preguntasDelNivel = [];
let indicePregunta = 0;
let aciertosTotales = 0;
let puntosXP = 0;

// 1. Manejo del Avatar
function seleccionarAvatar(emoji, nombre) {
    avatarSeleccionado = emoji;
    const cards = document.querySelectorAll('.avatar-card');
    cards.forEach(c => c.classList.remove('seleccionado'));
    event.currentTarget.classList.add('seleccionado');
}

function confirmarAvatar() {
    document.getElementById('header-avatar').textContent = avatarSeleccionado;
    localStorage.setItem('itzel_avatar', avatarSeleccionado);
    
    // Cambiar a la pantalla del Mapa
    document.getElementById('pantalla-avatar').classList.add('oculto');
    document.getElementById('pantalla-mapa').classList.remove('oculto');
    document.getElementById('nivel-titulo').textContent = "🌟 Mapa de Niveles";
}

// 2. Iniciar Nivel en el Mapa
function iniciarNivel(numeroNivel) {
    if (numeroNivel === 1) {
        // Combinar las 20 de matemáticas y 20 de lectura del Grado 1
        preguntasDelNivel = [...nivel1_Grado1.matematicas, ...nivel1_Grado1.lectura];
        indicePregunta = 0;
        aciertosTotales = 0;

        document.getElementById('pantalla-mapa').classList.add('oculto');
        document.getElementById('pantalla-juego').classList.remove('oculto');
        
        cargarPreguntaActual();
    }
}

// 3. Renderizar la pregunta en pantalla
function cargarPreguntaActual() {
    const feedback = document.getElementById('feedback-msg');
    feedback.textContent = "";

    if (indicePregunta >= preguntasDelNivel.length) {
        finalizarNivel();
        return;
    }

    const q = preguntasDelNivel[indicePregunta];
    const esMatematica = indicePregunta < 20;

    const catTag = document.getElementById('categoria-tag');
    catTag.textContent = esMatematica ? "Matemáticas 🧮" : "Comprensión Lectora 📖";
    catTag.className = esMatematica ? "bg-emerald-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider" : "bg-pink-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider";

    document.getElementById('contador-pregunta').textContent = `Pregunta ${indicePregunta + 1} de 40`;
    document.getElementById('pregunta-texto').textContent = q.pregunta;

    // Actualizar barra de progreso del bloque
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

// 4. Evaluar la respuesta elegida
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
        feedback.textContent = "❌ ¡Casi lo logras! Aprendamos de esta respuesta.";
        feedback.className = "text-center font-bold text-base text-rose-400";
    }

    setTimeout(() => {
        indicePregunta++;
        cargarPreguntaActual();
    }, 1500);
}

// 5. Pantalla de Resultados al terminar las 40 preguntas
function finalizarNivel() {
    const aprobado = aciertosTotales >= nivel1_Grado1.minimoAciertos;
    
    document.getElementById('pantalla-juego').classList.add('oculto');
    document.getElementById('pantalla-mapa').classList.remove('oculto');

    if (aprobado) {
        alert(`🏆 ¡FELICIDADES ITZEL! 🏆\n\nLograste ${aciertosTotales} aciertos de 40.\n¡Has completado el Nivel 1 (1.º de Primaria) y desbloqueaste el Nivel 2!`);
    } else {
        alert(`¡Buen intento Itzel! 🌟\n\nLograste ${aciertosTotales} aciertos de 40. Necesitas 30 aciertos para pasar de nivel.\n¡Inténtalo de nuevo, tú puedes!`);
    }
}

// Cargar Avatar guardado al iniciar si existe
document.addEventListener('DOMContentLoaded', () => {
    const avatarGuardado = localStorage.getItem('itzel_avatar');
    if (avatarGuardado) {
        avatarSeleccionado = avatarGuardado;
        document.getElementById('header-avatar').textContent = avatarSeleccionado;
    }
});
