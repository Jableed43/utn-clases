document.addEventListener('DOMContentLoaded', function() {
    //traer elementos con selectores
    var titulo = document.querySelector('.titulo')
    var texto = document.querySelector('.texto')

    //funciones que modifican clases de elementos
    // function toggleRed() {
    //     titulo.classList.toggle('red')
    // }

    function agregarBold(){
        texto.classList.add('black')
    }

    function quitarBold(){
        texto.classList.remove('black')
    }

    //escucha de eventos
    titulo.addEventListener('click', () => {
        titulo.classList.toggle('red')
        console.log('click en titulo')
    })

    texto.addEventListener('mouseover', agregarBold)
    texto.addEventListener('mouseout', quitarBold)
    
})