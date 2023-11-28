import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Calculadora } from './components/calculadora/Calculadora.jsx'

//crear la raiz del proyecto
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
)
