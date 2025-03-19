import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main/Main";
import FirstChat from "./screens/FirstChat/FirstChat";
import Final from "./screens/final/Final";
import Starter from "./screens/starter/Starter";
import "./utils/i18n";
import AfterChat from "./screens/after_chat/AfterChat";
import { Suspense, useEffect } from "react";
import GroupChat from "./screens/group_chat/GroupChat";
import afterChat1 from "./assets/images/after-chat-1.png";
import afterChat2 from "./assets/images/after-chat-2.png";
import afterChat3 from "./assets/images/after-chat-3.png";
import afterChat4 from "./assets/images/after-chat-4.png";
import afterChat5 from "./assets/images/after-chat-5.png";
import afterChat6 from "./assets/images/after-chat-6.png";
import Payments from "./screens/payments/Payments";
import GraphickFirst from "./screens/graphicks/GraphickFirst";
import Advice from "./screens/advice/Advice";
import AdviceMain from "./screens/advice/Main";
import GraphickMain from "./screens/graphicks/GraphickMain";
import Gift from "./screens/gift/Gift";
import MomChat from "./screens/mom_chat/MomChat";
import Conversion from "./screens/conversion/Conversion";

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function App() {
  useEffect(() => {
    preloadImages([
      afterChat1,
      afterChat2,
      afterChat3,
      afterChat4,
      afterChat5,
      afterChat6,
    ]);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={() => <p>Loading...</p>}>
        <div className="page">
          <main>
            <Routes>
              <Route path="/" element={<Starter />} />
              <Route path="/main" element={<Main />} />
              <Route path="/sister-chat" element={<FirstChat />} />
              <Route path="/after-chat" element={<AfterChat />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/advice" element={<Advice />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/mom" element={<MomChat />} />
              <Route path="/advice-sec" element={<AdviceMain />} />
              <Route path="/graphick-first" element={<GraphickFirst />} />
              <Route path="/graphick-main" element={<GraphickMain />} />
              <Route path="/group-chat" element={<GroupChat />} />
              <Route path="/final" element={<Final />} />
              <Route path="/conversion" element={<Conversion />} />
            </Routes>
          </main>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
