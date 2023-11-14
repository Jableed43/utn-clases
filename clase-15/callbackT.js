// Función asincrónica con un callback y setTimeout
function operacionAsincronicaConCallback(callback) {
    const exito = true; // Simulamos si la operación fue exitosa o no
  
    // Simulamos una operación que toma tiempo (por ejemplo, una solicitud HTTP) de forma asincrónica con setTimeout
    setTimeout(function() {
      if (exito) {
        callback(null, "Operación completada con éxito");
      } else {
        callback("La operación ha fallado", null);
      }
    }, 2000); // Simulamos un tiempo de espera de 2000 milisegundos (2 segundos)
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
  