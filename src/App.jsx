import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Play from "./pages/play/Play";
import GameSetting from "./components/gameSetting/GameSetting";
import { AuthProvider } from "./utilities/auth/AuthProvider";
import GameOver from "./pages/gameOver/GameOver";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import { PrivateRoutes } from "./utilities/auth/PrivateRouters"; // Import PrivateRoutes component
import Hint from "./pages/hint/Hint";
import Game from "./components/game/Game";
import FunFact from "./pages/funFact/FunFact";
import { Error } from "./pages/404/Error";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Error />}></Route>

          {/* private routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/play" element={<Play />} />
            <Route path="/game" element={<Game />} />
            <Route path="/gameSetting" element={<GameSetting />} />
            <Route path="/gameOver" element={<GameOver />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/hint" element={<Hint />} />
            <Route path="/funFact" element={<FunFact />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
