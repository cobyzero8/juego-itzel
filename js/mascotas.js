/* ============================================================
   SISTEMA DE MASCOTAS ANIMADAS EVOLUTIVAS (js/mascotas.js)
   Personajes ilustrados con respiración, parpadeo, emociones
   y 3 etapas reales de crecimiento (Bebé -> Joven -> Guardián)
   ============================================================ */

const DATOS_MASCOTAS = {
    gatito: {
        nombre: "Minino Azul",
        descripcion: "Curioso, tierno y mágico",
        saludo: "¡Miau! ¡Hola Itzel! Estaré siempre a tu lado y creceré con cada estrella que ganes."
    },
    perrito: {
        nombre: "Cachorrito",
        descripcion: "Juguetón, valiente y fiel",
        saludo: "¡Guau, guau! ¡Hola Itzel! Seré tu mejor amigo y saltaré de alegría cuando aciertes."
    },
    conejito: {
        nombre: "Conejito Copo",
        descripcion: "Saltarín, dulce y veloz",
        saludo: "¡Hola Itzel! Moveré mis orejitas contigo en cada aula. ¡Vamos a divertirnos!"
    },
    unicornio: {
        nombre: "Pony Estelar",
        descripcion: "Brillante, sabio y soñador",
        saludo: "¡Hola Itzel! Con mi magia y tu inteligencia llegaremos hasta el regalo de papá."
    }
};

// Inyecta estilos de animación y degradados 3D una sola vez al cargar
function inicializarMotorMascotas() {
    if (document.getElementById('estilos-mascotas-vivas')) return;

    const style = document.createElement('style');
    style.id = 'estilos-mascotas-vivas';
    style.textContent = `
        @keyframes mascotaRespirar {
            0%, 100% { transform: translateY(0px) scaleY(1); }
            50% { transform: translateY(-3px) scaleY(1.03); }
        }
        @keyframes mascotaParpadear {
            0%, 92%, 100% { transform: scaleY(1); }
            96% { transform: scaleY(0.08); }
        }
        @keyframes mascotaCola {
            0%, 100% { transform: rotate(-8deg); }
            50% { transform: rotate(12deg); }
        }
        @keyframes mascotaSaltarFeliz {
            0%, 100% { transform: translateY(0) scale(1); }
            25% { transform: translateY(-18px) scale(1.08) rotate(-4deg); }
            50% { transform: translateY(0) scale(0.96); }
            75% { transform: translateY(-12px) scale(1.05) rotate(4deg); }
        }
        @keyframes mascotaAnimoTriste {
            0%, 100% { transform: rotate(0deg) translateY(2px); }
            25% { transform: rotate(-5deg) translateY(4px); }
            75% { transform: rotate(5deg) translateY(4px); }
        }
        @keyframes flotarCorazon {
            0% { opacity: 1; transform: translateY(0) scale(0.7); }
            100% { opacity: 0; transform: translateY(-38px) scale(1.3); }
        }
        .anim-mascota-idle { animation: mascotaRespirar 2.6s ease-in-out infinite; transform-origin: bottom center; }
        .anim-mascota-happy { animation: mascotaSaltarFeliz 0.75s ease-in-out infinite; transform-origin: bottom center; }
        .anim-mascota-sad { animation: mascotaAnimoTriste 1.8s ease-in-out infinite; transform-origin: bottom center; }
        .mascota-ojos-parpadeo { animation: mascotaParpadear 3.8s infinite; transform-origin: center 52px; }
        .mascota-cola-mov { animation: mascotaCola 1.4s ease-in-out infinite; transform-origin: 72px 88px; }
        .particula-amor { animation: flotarCorazon 1.1s ease-out infinite; }
    `;
    document.head.appendChild(style);

    // Degradados compartidos para darle volumen 3D tipo dibujo animado
    const svgDefs = `
    <svg width="0" height="0" style="position:absolute; pointer-events:none;">
        <defs>
            <radialGradient id="grad-gato-azul" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#7dd3fc"/>
                <stop offset="55%" stop-color="#0ea5e9"/>
                <stop offset="100%" stop-color="#0369a1"/>
            </radialGradient>
            <radialGradient id="grad-perro-dorado" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fde68a"/>
                <stop offset="55%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#b45309"/>
            </radialGradient>
            <radialGradient id="grad-conejo-rosa" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="65%" stop-color="#f1f5f9"/>
                <stop offset="100%" stop-color="#cbd5e1"/>
            </radialGradient>
            <radialGradient id="grad-unicornio" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fdf4ff"/>
                <stop offset="60%" stop-color="#f5d0fe"/>
                <stop offset="100%" stop-color="#c084fc"/>
            </radialGradient>
            <linearGradient id="grad-corona" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef08a"/>
                <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
        </defs>
    </svg>`;
    document.body.insertAdjacentHTML('beforeend', svgDefs);
}

// Calcula la etapa de crecimiento real según XP (1: Bebé, 2: Aventurero, 3: Guardián Real)
function obtenerEtapaMascota(xp = 0) {
    if (xp >= 1000) return { nivel: 3, nombre: "Guardián Real 👑", escala: 1.05 };
    if (xp >= 300)  return { nivel: 2, nombre: "Aventurero ⭐", escala: 0.96 };
    return { nivel: 1, nombre: "Bebé Tierno 🍼", escala: 0.86 };
}

// Genera el dibujo animado completo del personaje con su expresión y accesorios de evolución
function generarSVGMascota(tipo = 'gatito', estado = 'idle', xp = 0, soloCara = false) {
    inicializarMotorMascotas();
    const especie = DATOS_MASCOTAS[tipo] ? tipo : 'gatito';
    const etapa = obtenerEtapaMascota(xp);
    const animClase = estado === 'happy' ? 'anim-mascota-happy' : (estado === 'sad' ? 'anim-mascota-sad' : 'anim-mascota-idle');

    // Colores según especie
    const paleta = {
        gatito:    { piel: 'url(#grad-gato-azul)',   orejaIn: '#f472b6', nariz: '#ec4899', barriga: '#e0f2fe' },
        perrito:   { piel: 'url(#grad-perro-dorado)', orejaIn: '#78350f', nariz: '#451a03', barriga: '#fef3c7' },
        conejito:  { piel: 'url(#grad-conejo-rosa)',  orejaIn: '#f9a8d4', nariz: '#f43f5e', barriga: '#ffffff' },
        unicornio: { piel: 'url(#grad-unicornio)',    orejaIn: '#e879f9', nariz: '#d946ef', barriga: '#fae8ff' }
    }[especie];

    // Ojos según emoción (idle = ojos grandes brillantes, happy = arcos felices ^ ^, sad = ojitos tiernos de ánimo)
    let ojosSVG = '';
    if (estado === 'happy') {
        ojosSVG = `
            <path d="M 38 52 Q 45 43 52 52" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M 68 52 Q 75 43 82 52" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
            <text x="28" y="42" font-size="11">✨</text>
            <text x="84" y="42" font-size="11">✨</text>
        `;
    } else if (estado === 'sad') {
        ojosSVG = `
            <g>
                <circle cx="45" cy="53" r="8" fill="#1e293b"/>
                <circle cx="43" cy="50" r="3" fill="#ffffff"/>
                <circle cx="75" cy="53" r="8" fill="#1e293b"/>
                <circle cx="73" cy="50" r="3" fill="#ffffff"/>
                <path d="M 36 43 L 50 46" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M 84 43 L 70 46" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
            </g>
        `;
    } else {
        ojosSVG = `
            <g class="mascota-ojos-parpadeo">
                <circle cx="45" cy="52" r="8.5" fill="#0f172a"/>
                <circle cx="42.5" cy="49" r="3.2" fill="#ffffff"/>
                <circle cx="47.5" cy="54" r="1.4" fill="#ffffff"/>
                <circle cx="75" cy="52" r="8.5" fill="#0f172a"/>
                <circle cx="72.5" cy="49" r="3.2" fill="#ffffff"/>
                <circle cx="77.5" cy="54" r="1.4" fill="#ffffff"/>
            </g>
        `;
    }

    // Boca según emoción
    let bocaSVG = '';
    if (estado === 'happy') {
        bocaSVG = `<path d="M 52 64 Q 60 76 68 64 Z" fill="#fb7185" stroke="#1e293b" stroke-width="2"/>`;
    } else if (estado === 'sad') {
        bocaSVG = `<path d="M 54 68 Q 60 63 66 68" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>`;
    } else {
        bocaSVG = `<path d="M 53 64 Q 56.5 68 60 64 Q 63.5 68 67 64" fill="none" stroke="#1e293b" stroke-width="2.3" stroke-linecap="round"/>`;
    }

    // Orejas y detalles superiores según especie
    let orejasSVG = '';
    if (especie === 'gatito') {
        orejasSVG = `
            <polygon points="26,38 22,12 46,26" fill="${paleta.piel}" stroke="#0284c7" stroke-width="1.5"/>
            <polygon points="28,34 26,18 41,27" fill="${paleta.orejaIn}"/>
            <polygon points="94,38 98,12 74,26" fill="${paleta.piel}" stroke="#0284c7" stroke-width="1.5"/>
            <polygon points="92,34 94,18 79,27" fill="${paleta.orejaIn}"/>
            <!-- Antenitas mágicas como el gatito azul -->
            <path d="M 53 23 Q 48 10 43 9" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="43" cy="9" r="3.5" fill="#7dd3fc"/>
            <path d="M 67 23 Q 72 10 77 9" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="77" cy="9" r="3.5" fill="#7dd3fc"/>
        `;
    } else if (especie === 'perrito') {
        const rotOreja = estado === 'sad' ? 14 : 0;
        orejasSVG = `
            <ellipse cx="24" cy="46" rx="10" ry="20" transform="rotate(${18 + rotOreja} 24 46)" fill="${paleta.orejaIn}"/>
            <ellipse cx="96" cy="46" rx="10" ry="20" transform="rotate(${-18 - rotOreja} 96 46)" fill="${paleta.orejaIn}"/>
        `;
    } else if (especie === 'conejito') {
        const caida = estado === 'sad' ? 18 : 0;
        orejasSVG = `
            <g transform="rotate(${-caida} 42 28)">
                <ellipse cx="42" cy="16" rx="8" ry="20" fill="${paleta.piel}" stroke="#cbd5e1" stroke-width="1.5"/>
                <ellipse cx="42" cy="16" rx="4.5" ry="14" fill="${paleta.orejaIn}"/>
            </g>
            <g transform="rotate(${caida} 78 28)">
                <ellipse cx="78" cy="16" rx="8" ry="20" fill="${paleta.piel}" stroke="#cbd5e1" stroke-width="1.5"/>
                <ellipse cx="78" cy="16" rx="4.5" ry="14" fill="${paleta.orejaIn}"/>
            </g>
        `;
    } else if (especie === 'unicornio') {
        orejasSVG = `
            <polygon points="30,36 26,15 46,26" fill="${paleta.piel}"/>
            <polygon points="90,36 94,15 74,26" fill="${paleta.piel}"/>
            <!-- Cuerno dorado espiral -->
            <polygon points="54,24 60,3 66,24" fill="url(#grad-corona)" stroke="#ca8a04" stroke-width="1"/>
            <path d="M 55 18 L 65 15 M 57 12 L 63 10" stroke="#fef9c3" stroke-width="1.5"/>
        `;
    }

    // Corona de Guardián Real en Etapa 3 (1000+ XP)
    const coronaSVG = (etapa.nivel >= 3 && especie !== 'unicornio')
        ? `<polygon points="46,22 50,10 60,17 70,10 74,22" fill="url(#grad-corona)" stroke="#b45309" stroke-width="1.2"/>`
        : '';

    // Si solo se pide la carita (para la cabecera superior)
    if (soloCara) {
        return `
        <svg viewBox="0 0 120 95" class="w-full h-full overflow-visible">
            ${orejasSVG}
            ${coronaSVG}
            <ellipse cx="60" cy="52" rx="36" ry="30" fill="${paleta.piel}"/>
            <circle cx="34" cy="60" r="5.5" fill="#fb7185" opacity="0.55"/>
            <circle cx="86" cy="60" r="5.5" fill="#fb7185" opacity="0.55"/>
            ${ojosSVG}
            <ellipse cx="60" cy="59" rx="4" ry="2.8" fill="${paleta.nariz}"/>
            ${bocaSVG}
        </svg>`;
    }

    // Capa de héroe (Etapa 3) y Collar/Pañuelo (Etapas 1 y 2)
    const capaHeroeSVG = etapa.nivel >= 3
        ? `<path d="M 34 80 L 22 114 L 98 114 L 86 80 Z" fill="#e11d48" stroke="#fda4af" stroke-width="1.5"/>`
        : '';

    const accesorioCuelloSVG = etapa.nivel === 1
        ? `<path d="M 42 78 Q 60 92 78 78 Q 60 84 42 78 Z" fill="#f472b6"/>`
        : `<path d="M 41 78 Q 60 86 79 78" fill="none" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
           <circle cx="60" cy="85" r="4.5" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>`;

    // Partículas de corazones cuando acierta
    const particulasFelices = estado === 'happy' ? `
        <text x="10" y="35" font-size="14" class="particula-amor">💖</text>
        <text x="95" y="30" font-size="14" class="particula-amor" style="animation-delay:0.3s;">⭐</text>
    ` : '';

    return `
    <svg viewBox="0 0 120 125" class="w-full h-full overflow-visible ${animClase}">
        ${particulasFelices}
        <!-- Colita animada -->
        <path d="M 78 96 Q 104 84 100 68" fill="none" stroke="${especie === 'gatito' ? '#0284c7' : (especie === 'perrito' ? '#d97706' : '#e879f9')}" stroke-width="7" stroke-linecap="round" class="mascota-cola-mov"/>
        ${capaHeroeSVG}
        <!-- Cuerpo -->
        <ellipse cx="60" cy="96" rx="${22 * etapa.escala}" ry="${20 * etapa.escala}" fill="${paleta.piel}"/>
        <ellipse cx="60" cy="98" rx="${13 * etapa.escala}" ry="${13 * etapa.escala}" fill="${paleta.barriga}"/>
        <!-- Patitas -->
        <ellipse cx="47" cy="113" rx="8" ry="5.5" fill="${paleta.piel}"/>
        <ellipse cx="73" cy="113" rx="8" ry="5.5" fill="${paleta.piel}"/>
        ${accesorioCuelloSVG}
        <!-- Cabeza -->
        ${orejasSVG}
        ${coronaSVG}
        <ellipse cx="60" cy="52" rx="35" ry="29" fill="${paleta.piel}"/>
        <!-- Mejillas sonrojadas -->
        <circle cx="34" cy="60" r="5.5" fill="#fb7185" opacity="0.55"/>
        <circle cx="86" cy="60" r="5.5" fill="#fb7185" opacity="0.55"/>
        <!-- Bigotitos si es gatito -->
        ${especie === 'gatito' ? `
            <line x1="20" y1="56" x2="31" y2="58" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="20" y1="62" x2="31" y2="62" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="100" y1="56" x2="89" y2="58" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="100" y1="62" x2="89" y2="62" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/>
        ` : ''}
        ${ojosSVG}
        <!-- Naricita y boca -->
        <ellipse cx="60" cy="59" rx="4" ry="2.8" fill="${paleta.nariz}"/>
        ${bocaSVG}
    </svg>`;
}
