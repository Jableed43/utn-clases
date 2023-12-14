// App.js
import ThemeConsumer from "./Components/ThemeConsumer";
import { ThemeProvider } from "./Contexts/Contexts";
import { Page } from "./components/Page";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Aplicación con Contexto de Tema</h1>
        <Page />
        <ThemeConsumer />
      </div>
    </ThemeProvider>
  );
}

export default App;
