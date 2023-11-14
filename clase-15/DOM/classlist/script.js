document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('.titulo');
    const texto = document.querySelector('.texto');

    // Función para alternar la clase 'red' al hacer clic en el título
    function toggleRed() {
        titulo.classList.toggle('red');
    }

    // Función para agregar la clase 'black' al pasar el ratón sobre el texto
    function agregarBold() {
        texto.classList.add('black');
    }

    // Función para quitar la clase 'black' al quitar el ratón del texto
    function quitarBold() {
        texto.classList.remove('black');
    }

    // Agregar evento de clic para alternar la clase 'black' en el título
    titulo.addEventListener('click', toggleRed);

    // Agregar eventos para agregar y quitar la clase 'black' al pasar y quitar el ratón sobre el texto
    texto.addEventListener('mouseover', agregarBold);
    texto.addEventListener('mouseout', quitarBold);
});
 