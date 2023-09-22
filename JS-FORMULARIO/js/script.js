const formLibros = document.getElementById('formLibros');
const codigo = document.getElementById('codigo');
const nombre = document.getElementById('nombre');
const tipo = document.getElementById('tipo');
const editorial = document.getElementById('editorial');
const tiempo = document.getElementById('tiempo');
const autor = document.getElementById('autor');
const limpiar = document.getElementById('limpiar');

limpiar.addEventListener('click', () => {
    formLibros.reset();
});

formLibros.addEventListener('submit', () => {
    if (
        !codigo.value || !nombre.value || tipo.value === '' || !editorial.value || !tiempo.value || !autor.value
    ) {
        alert('Complete los campos');
    }
});