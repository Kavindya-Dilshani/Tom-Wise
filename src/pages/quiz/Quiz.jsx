import React, { useCallback, useState } from "react";
import axios from "axios";
import Timer from "../../components/timer/Timer";
import Alert from "../../components/alert/Alert";
import "./Quiz.css";
import Score from "../../components/score/Score";
import setting from "../../assets/images/setting.png";
import Result from "../result/Result";
import GameOver from "../gameOver/GameOver";
import { apiEndpoints } from "./../../endpoints/endpoints";

const Quiz = ({
  user,
  question,
  fetchQuestion,
  level,
  setActiveView,
  setTimerRunning,
  seconds,
  setSeconds,
  showGameOver,
}) => {
  const { name, userId } = user;
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);

  /**this function updates the answer state */
  const handleAnswerChange = (event) => {
    setAnswer(event?.target?.value);
  };

  /**checks if the answer is correct and updates the score */
  const submitAnswer = () => {
    if (question.solution.toString() === answer) {
      resetTimer();
      setAlertType("correct");
      setScore((prevScore) => prevScore + 100);
      if (level === 5) {
        setShowAlert(false);
        setShowResult(true);
        return;
      }
    } else {
      setAlertType("incorrect");
    }
    setShowAlert(true);
    setAnswer("");
  };

  /**This function resets the alert state */
  const handleTryAgain = () => {
    setAnswer("");
    setAlertType(null);
    setShowAlert(false);
  };

  /**This function saves the score to the server */
  const saveScore = useCallback(async () => {
    try {
      console.log(score);
      const request = { userId, name, score };
      const headers = { "Content-Type": "application/json" };
      await axios.post(apiEndpoints.saveScore, request, headers);
    } catch (error) {
      console.error("Error saving score:", error);
    }
  }, [name, score, userId]);

  /**
   * This function use to reset timer to its initial state
   */
  const resetTimer = () => {
    setTimerRunning(false);
    setSeconds(30);
  };

  /** this function fetches the next question and resets the alert state */
  const getNextQuestion = () => {
    saveScore();
    if (level >= 5) {
      setShowResult(true);
      return;
    }
    setShowAlert(false);
    fetchQuestion();
    setTimerRunning(true);
  };

  return (
    <div className="quiz">
      {!showResult && (
        <>
          {!showGameOver && (
            <>
              {!showAlert && (
                <>
                  <div className="quiz-main">
                    <div className="quiz-container">
                      <div className="row justify-content-center pt-3">
                        <div className="col-3 d-flex justify-content-start align-items-center">
                          <div className="quiz-timer">
                            <Timer minutes={0} seconds={seconds} />
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-start align-items-center">
                          <div className="quiz-score">
                            <Score score={score} name={name} />
                          </div>
                        </div>
                        <div className="col-1 d-flex justify-content-end align-items-center">
                          <div className="game-setting">
                            <span onClick={() => setActiveView("SETTINGS")}>
                              <img
                                src={setting}
                                className="img-fluid"
                                alt="setting"
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="question-box-container d-flex justify-content-center align-items-start mt-4">
                        <div className="question-box d-flex justify-content-center align-items-center">
                          <img src={question?.question} alt="" />
                        </div>
                      </div>
                      <div className="row questions mt-2">
                        <div className="col-3 d-flex justify-content-end align-items-center">
                          <div className="index">{level} of 5 levels</div>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                          <div className="question-input">
                            <input
                              type="text"
                              placeholder="Enter your answer"
                              value={answer}
                              onChange={handleAnswerChange}
                            />
                          </div>
                        </div>
                        <div className="col-3 d-flex justify-content-start align-items-center">
                          <div className="question-button">
                            <button onClick={submitAnswer}>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {showAlert && (
                <Alert
                  type={alertType}
                  correctAnswer={question.answer}
                  onNextQuestion={getNextQuestion}
                  onTryAgain={handleTryAgain}
                />
              )}
            </>
          )}
        </>
      )}

      {showResult && <Result name={name} score={score} saveScore={saveScore} />}
      {showGameOver && <GameOver name={name} score={score} />}
    </div>
  );
};

export default Quiz;
