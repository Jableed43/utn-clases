import React, { useState } from 'react';

const HandlerForm = () => {
  // Estado para los valores de los inputs y los datos enviados
  const [inputValues, setInputValues] = useState({
    data1: '',
    data2: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  // Manejar cambios en los inputs
  const handleChange = (event, fieldName) => {
    setInputValues({
      ...inputValues,
      [fieldName]: event.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto de evento personalizado
    const customEvent = {
      data1: inputValues.data1,
      data2: inputValues.data2,
    };

    // Manejar el evento personalizado al enviar el formulario
    handleCustomSubmit(customEvent);

    // Limpiar los valores de los inputs después del envío
    setInputValues({
      data1: '',
      data2: '',
    });
  };

  // Manejar clic en el botón de envío
  const handleClick = (additionalData) => {
    console.log('Se ha enviado');
    console.log('Dato adicional:', additionalData);
  };

  // Función para manejar el evento personalizado
  const handleCustomSubmit = (customEvent) => {
    console.log('Se ha enviado');
    console.log('Evento personalizado:', customEvent);

    // Actualizar el estado con los datos enviados
    setSubmittedData(`Dato 1: ${customEvent.data1}, Dato 2: ${customEvent.data2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input para el primer dato */}
      <label>
        Ingresa dato 1:
        <input
          type="text"
          value={inputValues.data1}
          onChange={(e) => handleChange(e, 'data1')}
        />
      </label>

      {/* Input para el segundo dato */}
      <label>
        Ingresa dato 2:
        <input
          type="text"
          value={inputValues.data2}
          onChange={(e) => handleChange(e, 'data2')}
        />
      </label>

      {/* Botón de envío con evento onClick */}
      <button type="submit" onClick={() => handleClick('Información adicional para Click')}>
        Enviar
      </button>

      {/* Mostrar datos enviados si existen */}
      {submittedData && (
        <div>
          <h2>Datos enviados:</h2>
          <p>{submittedData}</p>
        </div>
      )}
    </form>
  );
};

export default HandlerForm;
