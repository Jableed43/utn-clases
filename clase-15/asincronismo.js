function operacionAsincronica() {
    return new Promise((resolve, reject) => {
      const exito = true; // Simulamos si la operación fue exitosa o no
      // Simulamos una operación que toma tiempo (por ejemplo, una solicitud HTTP)
      if (exito) {
        resolve("Operación completada con éxito");
      } else {
        reject("La operación ha fallado");
      }
    });
  }
  
  // Llamada a la función asincrónica con .then y .catch
  operacionAsincronica()
    .then(response => {
      console.log("response:", response);
    })
    .catch(error => {
      console.error(error);
    });