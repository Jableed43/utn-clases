import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Propagation from './components/Propagation.jsx'
import HandlerForm from './components/HandlerForm.jsx'
import FormTest from './components/form-components/FormTest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormTest />
  </React.StrictMode>,
)
