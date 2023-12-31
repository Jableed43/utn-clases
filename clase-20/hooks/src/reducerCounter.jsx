import { useReducer } from 'react'

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
        return { count: state.count - 1 }
        default:
            return state;
    }
}

function ReducerComponent() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    const increment = () => {
        dispatch( { type: 'INCREMENT' })
    }

    const decrement = () => {
        dispatch( { type: 'DECREMENT' })
    }

    return (
        <div>
            <p>Contador: {state.count} </p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
}

export default ReducerComponent;