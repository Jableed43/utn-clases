import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './components/custom-hooks/CounterComponent'
import LifecycleExampleClass from './components/lifecycle/LifecycleExampleClass.jsx'
import LifecycleExample from './components/lifecycle/LifecycleExample.jsx'
import ReducerCounterComponent from './components/useReducer/ReducerCounterComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReducerCounterComponent />
  </React.StrictMode>,
)
