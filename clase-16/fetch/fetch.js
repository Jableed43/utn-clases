//npm i node-fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const initialUrl = "https://rickandmortyapi.com/api/character";

const fetchCharacters = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error));
};

function accionAResolverEnSegundos(segundos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetchCharacters(initialUrl)
        .then(() => {
          resolve(`La operación se ha completado después de ${segundos} segundos.`);
        })
        .catch((error) => {
          reject('Ocurrió un error durante la espera.');
        });
    }, segundos * 1000);
  });
}

async function ejemplo() {
  try {
    const resultado = await accionAResolverEnSegundos(5);
    console.log(resultado); // No es necesario JSON.parse aquí
  } catch (error) {
    console.error('Error:', error);
  }
}

ejemplo();
