import Quiz from "../../pages/quiz/Quiz";
import GameSetting from "./../gameSetting/GameSetting";
import Leaderboard from "./../../pages/leaderboard/Leaderboard";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import axios from "axios";
import { apiEndpoints } from "../../endpoints/endpoints";
import { useAuth } from "../../utilities/auth/AuthContext";

const Game = () => {
  const { getUser } = useAuth();
  const [user, setUser] = useState({});
  const [question, setQuestion] = useState(null);
  const [level, setLevel] = useState(0);
  const [activeView, setActiveView] = useState("QUIZ");
  const [showGameOver, setShowGameOver] = useState(false);
  // Timer
  const [seconds, setSeconds] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);

  /**
   * This function use to fetch question from backend
   */
  const fetchQuestion = useCallback(() => {
    const headers = { "Content-Type": "application/json" };
    axios
      .get(apiEndpoints.getQuiz, { headers })
      .then((response) => {
        if (response?.status === 200 && response?.data) {
          setQuestion(response?.data);
          setLevel((prevLevel) => prevLevel + 1);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Trigger fetch question during initial render of this component
  useEffect(() => {
    setUser(getUser());
    fetchQuestion();
  }, [fetchQuestion, getUser]);

  useEffect(() => {
    if (timerRunning) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(timer);
          setShowGameOver(true);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, timerRunning]);

  return (
    <>
      {activeView === "QUIZ" && (
        <Quiz
          question={question}
          level={level}
          fetchQuestion={fetchQuestion}
          user={user}
          setActiveView={setActiveView}
          setTimerRunning={setTimerRunning}
          seconds={seconds}
          setSeconds={setSeconds}
          showGameOver={showGameOver}
        />
      )}
      {activeView === "SETTINGS" && (
        <GameSetting setActiveView={setActiveView} />
      )}
      {activeView === "LEADERBOARD" && (
        <Leaderboard setActiveView={setActiveView} />
      )}
    </>
  );
};

export default Game;
