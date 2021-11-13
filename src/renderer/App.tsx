import { PageProvider } from "./context/PageProvider";
import Perojeckt from "./components/Perojeckt";

const App = () => {
  return (
    <div className="app">
      <PageProvider>
        <Perojeckt />
      </PageProvider>
    </div>
  );
}

export default App;
