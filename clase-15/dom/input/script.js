document.addEventListener('DOMContentLoaded', function() {
    //elementos del html
    var textoInput = document.querySelector('#textoInput')
    var colorInput = document.querySelector('#colorInput')
    var fontSizeInput = document.querySelector('#fontSizeInput')
    var textDecorationSelect = document.querySelector('#textDecorationSelect')
    var resultado = document.querySelector('#resultado')

    //Crear funciones
    function actualizarTexto() {
        const texto = textoInput.value;
        resultado.textContent = texto;
    }

    function actualizarColor(){
        const color = colorInput.value;
        resultado.style.color = color;
    }

    function actualizarFontSize() {
        const fontSize = `${fontSizeInput.value}px`;
        resultado.style.fontSize = fontSize;
    }

    function actualizarDecoracion(){
        resultado.style.textDecoration = textDecorationSelect.value
    }

    //eventos
    textoInput.addEventListener('input', actualizarTexto)
    colorInput.addEventListener('input', actualizarColor)
    fontSizeInput.addEventListener('input', actualizarFontSize)
    textDecorationSelect.addEventListener('change', actualizarDecoracion)
})