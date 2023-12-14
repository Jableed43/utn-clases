/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//los estilos
const styles = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "20px",
  },
  dark: {
    backgroundColor: "#222222",
    color: "#ffffff",
    padding: "20px",
  },
};
//creacion del contexto
const ThemeContext = createContext({
  theme: "light",
  styles: styles,
  toggleTheme: () => {},
});

//provider
const ThemeProvider = ({ children }) => {
  //creo el estado que vamos a manejar
  const [theme, setTheme] = useState("light");

  //escribo la implementacion del toggle
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  //dentro del retorno va el proveedor del contexto que encerrará a otros componenes hijos
  //Le pasa a sus children el estado, los valores y una funcion
  return (
    <ThemeContext.Provider value={(theme, styles, toggleTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
