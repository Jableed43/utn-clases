//requerimiento de fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

//url de la api
const initialUrl = "https://rickandmortyapi.com/api/character"

//funcion que hace el llamado a la api con .then
// const fetchCharacters = function(url) {
//   return fetch(url)
//     .then(response => response.json())
//       //data es la respuesta de la api convertida a objeto de js
//     .then(data => {
//         return data
//     })
//     .catch(error => console.log(error))
// } 

//llamado a api con try catch
const fetchCharacters = async function(url) {
try {
  let response = await fetch(url)
  return response.json()
} catch (error) {
  console.error(error)
}
} 

async function ejemplo(){
  try {
      const resultado = await fetchCharacters(initialUrl)
      console.log(resultado.results.filter(character => character.name.includes('Rick')))
  } catch (error) {
      console.error('error:', error)
  }
}

ejemplo()