import Home from "./pages/Home";
import { ModalProvider } from "styled-react-modal";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Home />
      </ModalProvider>
    </div>
  );
}

export default App;
