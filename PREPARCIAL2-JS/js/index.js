const calculatePrice = () => {
    const cantidad = document.querySelector('input[type = "number"]').value;
    const capacidad = document.getElementById('capacidad').value;
    const resultado = document.getElementById('result');
    const color = document.getElementById('color').value;
    const capacidadprecio = {
        '128': 150000, '256': 165000, '512': 180000
    };
    const cotizacion = capacidadprecio[capacidad] * cantidad;
    resultado.innerHTML = `Color: ${color}<br>Capacidad: ${capacidad}<br>Cantidad:${cantidad}<br>Cotizacion: ${cotizacion}`;
};