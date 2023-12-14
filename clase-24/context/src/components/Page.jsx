// Page.js
import { useContext } from "react";
import { ThemeContext } from "../Contexts/Contexts";

export function Page() {
  const { theme, styles, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={styles[theme]}>
      <h2>Componente Page (consume y genera)</h2>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
}
