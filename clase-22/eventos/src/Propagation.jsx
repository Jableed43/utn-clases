import React from "react";

function Propagation() {
  const handleClickPadre = () => {
    console.log("Click en el padre");
  };

  const handleClickHijo = evento => {
    console.log("Click en el hijo");
    evento.stopPropagation();
  };

  return (
    <div onClick={handleClickPadre}>
      <button>Click en el padre</button>
      <button onClick={handleClickHijo}>Click en el hijo</button>
    </div>
  );
}

export default Propagation;
