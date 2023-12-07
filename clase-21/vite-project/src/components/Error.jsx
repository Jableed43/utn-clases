import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h1> Pagina no encontrada </h1>
      <p> Lo sentimos un error inesperado ha ocurrido </p>
      <p>{error.statusText || error.message}</p>
      <p> Error del tipo: {error.status} </p>
    </>
  );
}
