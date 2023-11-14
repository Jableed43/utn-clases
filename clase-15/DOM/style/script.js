document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('.titulo');
    const texto = document.querySelector('.texto');

    // Función para cambiar el color del título a rojo o de vuelta al hacer clic
    function toggleColorRojo() {
        if (titulo.style.color === 'red') {
            titulo.style.color = '';
        } else {
            titulo.style.color = 'red';
        }
    }

    // Función para cambiar la fuente del texto al pasar el ratón sobre él o de vuelta
    function toggleFuente() {
        if (texto.style.fontFamily === 'Arial, sans-serif') {
            texto.style.fontFamily = '';
        } else {
            texto.style.fontFamily = 'Arial, sans-serif';
        }
    }

    // Agregar evento de clic para cambiar el color del título
    titulo.addEventListener('click', toggleColorRojo);

    // Agregar eventos para cambiar la fuente del texto al pasar el ratón sobre él y revertir al quitar el ratón
    texto.addEventListener('mouseover', toggleFuente);
    texto.addEventListener('mouseout', toggleFuente);
});
