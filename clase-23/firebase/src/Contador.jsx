// Contador.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, selectCount } from "./features/counter";

function Contador() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(reset())}>Reiniciar</button>
    </div>
  );
}

export default Contador;
