import useCounter from "./UseCounter"

function Counter() {
    //destructuracion
    const  { count, aumentar, disminuir }  = useCounter(0, 1)

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default Counter