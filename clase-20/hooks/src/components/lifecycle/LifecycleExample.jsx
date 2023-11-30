import React, { useState, useEffect } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);

  // Efecto de montaje
  useEffect(() => {
    console.log('Componente montado');

    // Lógica de montaje (puede contener solicitudes de red, suscripciones, etc.)

    // Efecto de desmontaje (limpieza)
    return () => {
      console.log('Componente desmontado');
      
      // Lógica de limpieza (puede contener cancelación de solicitudes o liberación de recursos)
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  // Efecto de actualización
  useEffect(() => {
    console.log('Componente actualizado');

    // Lógica para manejar cambios después de la actualización

  }, [count]); // Este efecto se ejecuta cada vez que 'count' cambia

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}

export default LifecycleExample;
