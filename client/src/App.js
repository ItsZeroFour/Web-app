import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main/Main";
import FirstChat from "./screens/FirstChat/FirstChat";
import SeasonPass from "./screens/SeasonPass/SeasonPass";

function App() {
  return (
    <div className="App">
      <div className="page">
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sister-chat" element={<FirstChat />} />
            <Route path="/season-pass" element={<SeasonPass />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
