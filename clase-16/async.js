function accionAResolverEnSegundos(segundos) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`La operación se ha completado después de ${segundos} segundos.`);
      }, segundos * 1000);
    });
  }
  
  async function ejemplo() {
    try {
      const resultado = await accionAResolverEnSegundos(5);
      console.log(resultado);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  ejemplo();
  