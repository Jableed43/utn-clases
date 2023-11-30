import { useEffect, useState } from "react";

function useCounter(iniciarContador, paso) {
    //creamos un estado
    const [count, setCount] = useState(iniciarContador)

    //funciones que trabajan con los datos
    const aumentar = () => {
        setCount((acumulador) => { return acumulador + paso })
    }

    const disminuir = () => {
        setCount(acumulador => acumulador - paso)
    }

    //nos permite manejar la actualizacion
    useEffect(() => {
        console.log( `El contador se ha actualizado: ${count}` )
    }, [count])

    //retornamos: contador, funcion aumentar y funcion disminuir

    return  { count, aumentar, disminuir }

}

export default useCounter