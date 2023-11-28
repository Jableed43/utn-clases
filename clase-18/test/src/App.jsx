import { useState } from 'react'
import './App.css'

function App() {
  //una variable, un seteador de la variable - un estado inicial
  const [contenido, setContenido] = useState('Hola, soy el contenido inicial tada!')

  const cambiarContenido = () => {
    setContenido('Hola, soy contenido nuevo')
  }

  return (
    <div>
      <h1>Ejemplo react</h1>
      <p> {contenido} </p>
      <button onClick={ cambiarContenido }> Cambiar contenido </button>
    </div>
  )
}

export default App
