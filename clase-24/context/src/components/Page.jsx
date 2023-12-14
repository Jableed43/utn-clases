import { useContext } from "react";
import { ThemeContext } from "../Contexts/Contexts";

function Page() {
  //destructuracion de objetos
  const { theme, styles, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={styles[theme]}>
      <h2>Componente Page: Consume y genera contexto</h2>
      <p>Tema actual: {theme} </p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
}

export default Page;
