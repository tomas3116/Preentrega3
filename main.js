let historial = [];

function toggleSimulador() {
    const formulario = document.getElementById('formulario');
    const opcionesCepas = document.getElementById('opcionesCepas');
    formulario.classList.toggle('d-none');
    opcionesCepas.classList.toggle('d-none');
}

function seleccionarCepa(cepa) {
    const cepas = document.querySelectorAll('.cepa');
    cepas.forEach(cepaElement => {
        cepaElement.style.backgroundColor = ''; 
    });
    
    const seleccionada = [...cepas].find(cepaElement => cepaElement.textContent === cepa);
    seleccionada.style.backgroundColor = 'rgba(189, 173, 141, 0.8)'; 
    document.getElementById('formulario').classList.remove('d-none');
}

function calcularCosto() {
    const precio = 8000; 
    const cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    let descuento = 0;
    if (cantidad > 12) {
        descuento = 0.12; // 12% descuento
    } else if (cantidad > 8) {
        descuento = 0.10; // 10% descuento
    } else if (cantidad > 4) {
        descuento = 0.05; // 5% descuento
    }

    const costoTotal = precio * cantidad;
    const costoConDescuento = costoTotal * (1 - descuento);
    const resultado = `
        <h4>Detalles de la Compra</h4>
        <p>Costo Total: $${costoTotal.toFixed(2)}</p>
        <p>Descuento Aplicado: ${descuento * 100}%</p>
        <p>Costo Final: $${costoConDescuento.toFixed(2)}</p>
    `;
    
    historial.push({ cantidad, costoFinal: costoConDescuento });
    document.getElementById('resultado').innerHTML = resultado;
}

function limpiarHistorial() {
    historial = [];
    document.getElementById('resultado').innerHTML = '<p>Historial borrado.</p>';
}
