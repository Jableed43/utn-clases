//hooks
import { useState, useEffect } from 'react';

function Lifecycle() {
    
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    useEffect(() => {

        //se ejecuta cuando se monta el componente (un llamado a una api x ej)
        console.log('componente montado')

        return () => {
            console.log('componente desmontado')
            // logica de limpieza, liberar recursos, eliminar un elemento del dom
        }
    }, []) 

    //si el array de dependencias no está, el efecto se ejecuta cuando se monta y se actualiza
    // si el array está vacio el efecto solo se ejecuta una vez al montar el componente

    useEffect(() => {
        console.log('componente actualizado')
    }, [count])
        //este efecto se ejecuta cada vez que count cambia

    return (
        <div>
            <p>Contador: {count} </p>
            <button onClick={handleIncrement}>Incrementar</button>
        </div>
    )
}

export default Lifecycle;