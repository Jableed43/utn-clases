import React from 'react';

function Propagation() {
  const handleClickPadre = () => {
    console.log('Manejador de clic en el contenedor (padre)');
  };

  const handleClickHijo = (event) => {
    console.log('Manejador de clic en el botón hijo');
    event.stopPropagation(); // Detener event bubbling
  };

  return (
    <div id="contenedor" onClick={handleClickPadre}>
      <button id="botonPadre">Clic en el Padre</button>
      <button id="botonHijo" onClick={handleClickHijo}>Clic en el Hijo</button>
    </div>
  );
}

export default Propagation;

