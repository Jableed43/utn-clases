document.addEventListener('DOMContentLoaded', function() {
    const textoInput = document.getElementById('textoInput');
    const colorInput = document.getElementById('colorInput');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const textDecorationSelect = document.getElementById('textDecorationSelect');
    const resultadoP = document.getElementById('resultado');
  
    // Agregar eventos de cambio a los inputs y select
    textoInput.addEventListener('input', actualizarTexto);
    colorInput.addEventListener('input', actualizarColor);
    fontSizeInput.addEventListener('input', actualizarTamanioFuente);
    textDecorationSelect.addEventListener('change', actualizarDecoracionTexto);
  
    // Función para actualizar el texto en el elemento <p>
    function actualizarTexto() {
      const texto = textoInput.value;
      resultadoP.textContent = texto;
    }
  
    // Función para actualizar el color del texto en el elemento <p>
    function actualizarColor() {
      const color = colorInput.value;
      resultadoP.style.color = color;
    }
  
    // Función para actualizar el tamaño de la fuente en el elemento <p>
    function actualizarTamanioFuente() {
      const fontSize = `${fontSizeInput.value}px`;
      resultadoP.style.fontSize = fontSize;
    }
  
    // Función para actualizar la decoración del texto en el elemento <p>
    function actualizarDecoracionTexto() {
      const textDecoration = textDecorationSelect.value;
      resultadoP.style.textDecoration = textDecoration;
    }
  });
  