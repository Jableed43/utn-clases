// Función que simula una operación asincrónica con setTimeout
function operacionAsincronica() {
  return new Promise((resolve, reject) => {
    const exito = true; // Simulamos si la operación fue exitosa o no

    // Simulamos una operación que toma tiempo (por ejemplo, una solicitud HTTP) con setTimeout
    setTimeout(() => {
      if (exito) {
        resolve("Operación completada con éxito");
      } else {
        reject("La operación ha fallado");
      }
    }, 2000); // Simulamos un tiempo de espera de 2000 milisegundos (2 segundos)
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

console.log('fuera de la operacion asincronica')