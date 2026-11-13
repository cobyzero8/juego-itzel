// js/tiendita.js - Minijuego 1: La Cajera del Minimarket (Cálculo real de vuelto)

let vueltoAcumulado = 0;
let vueltoObjetivo = 0;

function iniciarMinijuegoTiendita() {
    reproducirSonido('entrada');
    
    // Generar un reto de compra realista (ej. un jugo y unas galletas)
    const costoTotal = Math.floor(Math.random() * 8) + 3; // Costo entre S/ 3 y S/ 10
    const pagoCliente = costoTotal > 5 ? 20 : 10; // Si cuesta más de 5, paga con 20. Si no, con 10.
    vueltoObjetivo = pagoCliente - costoTotal;
    vueltoAcumulado = 0;

    const modalHtml = `
    <div id="modal-tiendita" class="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4">
        <div class="bg-slate-900 border-4 border-emerald-500 rounded-3xl p-6 w-full max-w-md shadow-2xl text-center space-y-4">
            <h2 class="text-2xl font-black text-emerald-400">🛒 La Tiendita de Itzel</h2>
            <p class="text-xs text-slate-300 font-bold">¡Un cliente compró algunos productos! Entrégale el vuelto exacto:</p>
            
            <div class="flex items-center justify-between bg-slate-800 p-4 rounded-2xl border border-slate-600 shadow-inner">
                <div class="text-left">
                    <p class="text-[10px] font-bold text-slate-400 uppercase">Costo Total:</p>
                    <p class="text-2xl font-black text-rose-400">S/ ${costoTotal}.00</p>
                </div>
                <div class="text-right">
                    <p class="text-[10px] font-bold text-slate-400 uppercase">Cliente Paga con:</p>
                    <p class="text-2xl font-black text-emerald-400">S/ ${pagoCliente}.00</p>
                </div>
            </div>

            <div class="bg-amber-950/50 p-4 rounded-2xl border-2 border-amber-500/50 shadow-md">
                <p class="text-xs font-extrabold text-amber-300 uppercase mb-3">Bandeja de Vuelto (S/ <span id="vuelto-actual">0</span>)</p>
                <div class="flex justify-center items-end gap-3 h-16">
                    <button onclick="agregarVuelto(5)" class="w-16 h-16 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-full border-4 border-amber-300 font-black text-xl shadow-lg transform active:scale-90 transition">S/5</button>
                    <button onclick="agregarVuelto(2)" class="w-14 h-14 bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-full border-4 border-slate-400 font-black text-lg shadow-lg transform active:scale-90 transition">S/2</button>
                    <button onclick="agregarVuelto(1)" class="w-12 h-12 bg-slate-300 hover:bg-slate-200 text-slate-800 rounded-full border-4 border-slate-400 font-black text-base shadow-lg transform active:scale-90 transition">S/1</button>
                </div>
                <p class="text-[9px] text-slate-400 mt-3 font-semibold">Toca las monedas para sumar el vuelto.</p>
            </div>

            <div class="flex gap-2 pt-2">
                <button onclick="reiniciarVuelto()" class="w-1/3 bg-rose-950 hover:bg-rose-900 border border-rose-500 text-rose-200 font-bold py-3 rounded-xl text-sm transition shadow">Vaciar</button>
                <button onclick="entregarVueltoAlCliente()" class="w-2/3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-black py-3 rounded-xl text-lg shadow-lg transition">✅ Dar Vuelto</button>
            </div>
            <p id="mensaje-tiendita" class="text-xs font-bold h-4 text-amber-300"></p>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function agregarVuelto(valor) {
    vueltoAcumulado += valor;
    document.getElementById('vuelto-actual').textContent = vueltoAcumulado;
    reproducirSonido('acierto'); // Suena a moneda cayendo
}

function reiniciarVuelto() {
    vueltoAcumulado = 0;
    document.getElementById('vuelto-actual').textContent = vueltoAcumulado;
    reproducirSonido('error');
}

function entregarVueltoAlCliente() {
    const msj = document.getElementById('mensaje-tiendita');
    if (vueltoAcumulado === vueltoObjetivo) {
        msj.className = "text-sm font-black h-4 text-emerald-400";
        msj.textContent = "¡Vuelto exacto! +20 XP 🌟";
        reproducirSonido('victoria');
        estadoJuego.xp += 20;
        estadoJuego.monedas += 15; // Ganancia de La Tiendita
        
        // Esperamos 2 segundos de celebración y saltamos a la boleta de victoria
        setTimeout(() => {
            document.getElementById('modal-tiendita').remove();
            mostrarPantalla('pantalla-victoria'); // Abre la boleta del nivel
            guardarEstado();
            actualizarHeader();
        }, 2200);
    } else {
        reproducirSonido('error');
        msj.className = "text-[11px] font-black h-4 text-rose-400";
        msj.textContent = `¡Cuidado! El vuelto correcto era S/ ${vueltoObjetivo}. Inténtalo otra vez.`;
        reiniciarVuelto();
    }
}
