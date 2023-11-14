document.addEventListener('DOMContentLoaded', function() {
    //capturo titulo
    var titulo = document.querySelector('.titulo');
    //capturo texto
    var texto = document.querySelector('.texto');  

    //genero funcion para modificar titulo
    function cambiarTitulo() {
        if(titulo.style.color === 'red') {
            titulo.style.color = ''
        } else {
            titulo.style.color = 'red'
        }
    }

    //genero funcion para modificar texto
    function cambiarTexto() {
        if(texto.style.fontFamily === 'Arial') {
            texto.style.fontFamily = ''
        } else {
            texto.style.fontFamily = 'Arial'
        }
    }

    //Eventos
    titulo.addEventListener('click', cambiarTitulo)

    texto.addEventListener('mouseover', cambiarTexto)
    texto.addEventListener('mouseout', cambiarTexto)
})