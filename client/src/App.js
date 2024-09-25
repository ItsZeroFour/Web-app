import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main/Main";
import FirstChat from "./screens/FirstChat/FirstChat";

function App() {
  return (
    <div className="App">
      <div className="page">
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sister-chat" element={<FirstChat />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
