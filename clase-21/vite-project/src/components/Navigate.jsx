import { useNavigate } from "react-router-dom";

function Navigate() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-2)}>Ir dos paginas atras</button>

      <button onClick={() => navigate(-1)}>Ir uno hacia atras</button>

      <button onClick={() => navigate(1)}>Ir uno hacia adelante</button>

      <button onClick={() => navigate(2)}>Ir dos paginas hacia adelante</button>
    </>
  );
}

export default Navigate;
