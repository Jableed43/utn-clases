/* eslint-disable react/prop-types */
// Contexts.js
import { createContext, useState } from "react";

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

const ThemeContext = createContext({
  theme: "light",
  styles: styles,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, styles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
