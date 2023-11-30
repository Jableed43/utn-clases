import { useState, useEffect } from 'react';

// Hook personalizado para manejar un contador
function useCounter(initialCount, step) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  useEffect(() => {
    console.log(`El contador se ha actualizado: ${count}`);
    // Lógica adicional después de cada actualización del contador (efecto secundario)
  }, [count]);

  return { count, increment, decrement };
}

export default useCounter;
