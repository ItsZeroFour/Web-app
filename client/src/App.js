import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main";

function App() {
  return (
    <div className="App">
      <div className="page">
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
