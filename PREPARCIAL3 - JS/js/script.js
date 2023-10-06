function calcularCambio() {
    const pesoArg = document.getElementById('pesoArg').value;
    const totalDeCambio = document.getElementById('totalDeCambio');
    const monedaExtranjera = document.getElementById('monedaExtranjera').value;

    if (
        !pesoArg || pesoArg < 0
    ) {
        alert('Complete los campos correctamente');
    }

    let totalCotizacion;
    switch (monedaExtranjera) {
        case 'dolar':
            totalCotizacion = pesoArg / 800
            break;
        case 'euros':
            totalCotizacion = pesoArg / 900
            break;
    }
    totalDeCambio.innerHTML = `Total de Cambio: ${totalCotizacion} ${monedaExtranjera}`;
}

function agregarMoneda() {
    const nuevaMoneda = document.getElementById('nuevaMoneda').value;
    const costoNuevaMoneda = document.getElementById('costoNuevaMoneda').value;
    const alertaDeCambio = document.getElementById('alertaDeCambio');

    if (
        !nuevaMoneda || !costoNuevaMoneda || costoNuevaMoneda < 0
    ) {
        alert('Complete los campos correctamente');
    }

    const monedaExtranjeraSelect = document.getElementById('monedaExtranjera');
    const monedaAgregada = document.createElement('option');
    monedaAgregada.text = nuevaMoneda;
    monedaAgregada.value = costoNuevaMoneda;
    monedaExtranjeraSelect.appendChild(monedaAgregada);

    alertaDeCambio.innerHTML = `Moneda: ${nuevaMoneda} - Costo en pesos: $${costoNuevaMoneda}<br>Agregado Correctamente!`

}