import { useState } from 'react';

//crear componente de clase
export const Calculadora = () => {
    //estados
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [resultado, setResultado] = useState(0)

    //manejador - handle o handler
    const handleOperation = (operation) => {
       switch (operation) {
        case "suma":
            setResultado(num1 + num2)
            break;
        case "resta":
            setResultado(num1 - num2)
            break;
        case "multiplicacion":
            setResultado(num1 * num2)
            break;
        case "division":
            setResultado(num1 / num2)
            break;
        default:
            setResultado(0)
            break;
       }
    }
// como pasar un texto numerico a tipo numero con Number("2")
    return (
        <div>
            <label>Numero 1</label>
            <input type="number" onChange={(evento) => setNum1(Number(evento.target.value))}  />

            <label>Numero 2</label>
            <input type="number" onChange={(evento) =>  setNum2(Number(evento.target.value)) }  />

            <button onClick={ () => handleOperation('suma')}>Suma</button>
            <button onClick={ () => handleOperation('resta')}>Resta</button>
            <button onClick={ () => handleOperation('multiplicacion')}>Multiplicacion</button>
            <button onClick={ () => handleOperation('division')}>Division</button>

            <div>
                <label>Resultado</label>
                <br />
                <span>{resultado}</span>
            </div>
        </div>
    )
}