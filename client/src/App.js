import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main/Main";
import FirstChat from "./screens/FirstChat/FirstChat";
import SeasonPass from "./screens/SeasonPass/SeasonPass";
import GameStart from "./screens/game_start/GameStart";
import UploadImage from "./screens/upload_image/UploadImage";
import Camera from "./screens/camera/Camera";
import NeyroImageGenerate from "./screens/neyro_image_generate/NeyroImageGenerate";
import ImageGenerated from "./screens/image_generated/ImageGenerated";
import Final from "./screens/final/Final";
import Starter from "./screens/starter/Starter";
import "./utils/i18n";
import CallFriend from "./screens/call_friend/CallFriend";
import FriendChat from "./screens/friend_chat/FriendChat";
import AfterChat from "./screens/after_chat/AfterChat";
import Education1 from "./screens/education/Education1";
import Education2 from "./screens/education/Education2";
import Education3 from "./screens/education/Education3";
import { Suspense } from "react";
import Education7 from "./screens/education/Education7";
import EducationGraphickUp from "./screens/education/EducationGraphickUp";
import EducationGraphickDown from "./screens/education/EducationGraphickDown";
import Education4 from "./screens/education/Education4";
import Education5 from "./screens/education/Education5";

function App() {
  return (
    <div className="App">
      <Suspense fallback={() => <p>Loading...</p>}>
        <div className="page">
          <main>
            <Routes>
              <Route path="/" element={<Starter />} />
              <Route path="/main" element={<Main />} />
              <Route path="/sister-chat" element={<FirstChat />} />
              <Route path="/season-pass" element={<SeasonPass />} />
              <Route path="/call-friend" element={<CallFriend />} />
              <Route path="/friend-chat" element={<FriendChat />} />
              <Route path="/after-chat" element={<AfterChat />} />
              <Route path="/education-1" element={<Education1 />} />
              <Route path="/education-2" element={<Education2 />} />
              <Route path="/education-3" element={<Education3 />} />
              <Route path="/education-4" element={<Education4 />} />
              <Route path="/education-5" element={<Education5 />} />
              <Route path="/education-7" element={<Education7 />} />
              <Route
                path="/education-graphick-up"
                element={<EducationGraphickUp />}
              />
              <Route
                path="/education-graphick-down"
                element={<EducationGraphickDown />}
              />
              <Route path="/game-start" element={<GameStart />} />
              <Route path="/upload-image" element={<UploadImage />} />
              <Route path="/upload-image/camera" element={<Camera />} />
              <Route
                path="/neyro-image-generate"
                element={<NeyroImageGenerate />}
              />
              <Route path="/image-generated" element={<ImageGenerated />} />
              <Route path="/final" element={<Final />} />
            </Routes>
          </main>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
