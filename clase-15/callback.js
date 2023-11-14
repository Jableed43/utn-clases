// Función asincrónica con un callback
function operacionAsincronicaConCallback(callback) {
    const exito = false; // Simulamos si la operación fue exitosa o no
  
    // Simulamos una operación que toma tiempo (por ejemplo, una solicitud HTTP) de forma asincrónica
    setImmediate(function() {
      if (exito) {
        callback(null, "Operación completada con éxito");
      } else {
        callback("La operación ha fallado", null);
      }
    });
  }
  
  // Llamada a la función asincrónica con un callback
  operacionAsincronicaConCallback(function(error, resultado) {
    if (error) {
      console.error(error);
    } else {
      console.log("Resultado:", resultado);
    }
  });
  
  console.log("Fuera de la operación asincrónica");
  