import React from 'react';
import useCounter from './UseCounter.jsx'; // Ajusta la ruta según la estructura de tu proyecto

function Counter() {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
