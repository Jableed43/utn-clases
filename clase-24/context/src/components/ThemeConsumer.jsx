// ThemeConsumer.js
import { useContext } from "react";
import { ThemeContext } from "../Contexts/Contexts";

function ThemeConsumer() {
  const { theme, styles } = useContext(ThemeContext);

  return (
    <div style={styles[theme]}>
      <h2>Componente ThemeConsumer (consume)</h2>
      <p>Tema actual: {theme}</p>
    </div>
  );
}

export default ThemeConsumer;
