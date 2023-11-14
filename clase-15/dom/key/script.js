document.addEventListener('DOMContentLoaded', function () {
    var campoTexto = document.getElementById('campoTexto');
    var textoGuardado = '';

//ver texto del input

//cuando cambia texto
    campoTexto.addEventListener('change', function (event) {
      textoGuardado = event.target.value;
      console.log('onChange: ' + textoGuardado);
    });
//cuando se tocar tecla
    campoTexto.addEventListener('keydown', function (event) {
      textoGuardado = event.target.value;
      console.log('onKeyDown: ' + textoGuardado);
    });
//cuando se suelta tecla
    campoTexto.addEventListener('keyup', function (event) {
      textoGuardado = event.target.value;
      console.log('onKeyUp: ' + textoGuardado);
    });
//al usar tecla
    campoTexto.addEventListener('keypress', function (event) {
      textoGuardado = event.target.value;
      console.log('onKeyPress: ' + textoGuardado);
    });

// cambiar borde del input

    campoTexto.addEventListener('focus', function () {
      campoTexto.classList.add('focus');
      campoTexto.classList.remove('blur');
    });

    campoTexto.addEventListener('blur', function () {
      campoTexto.classList.remove('focus');
      campoTexto.classList.add('blur')
    });
  });