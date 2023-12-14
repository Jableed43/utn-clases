import { useContext } from "react";
import { ThemeContext } from "../Contexts/Contexts";

function ThemeConsumer() {
  //destructuracion de objetos
  const { theme, styles } = useContext(ThemeContext);

  return (
    <div style={styles[theme]}>
      <h2>Componente Consumer: Consume contexto</h2>
      <p>Tema actual: {theme} </p>
    </div>
  );
}

export default ThemeConsumer;
