import Diagram from "./components/Diagram";
import FormWithBug from "./components/formWithBug/FormWithBug";
import "./App.css";
import { DeathChecker } from "./components/deathOfComponents/DeathChecker";

function App() {
  return (
    <div className="App">
      {/* <FormWithBug /> */}
      <DeathChecker />
    </div>
  );
}

export default App;
