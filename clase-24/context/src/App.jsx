import ThemeConsumer from "./components/ThemeConsumer";
import { ThemeProvider } from "./Contexts/Contexts";
import Page from "./components/Page";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Aplicacion con contexto de tema</h1>
        <Page />
        <ThemeConsumer />
      </div>
    </ThemeProvider>
  );
}

export default App;
