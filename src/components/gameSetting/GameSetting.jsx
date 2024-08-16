import "./GameSetting.css";
import { Link } from "react-router-dom";
import close from "../../assets/images/close.png";
import { useState } from "react";
import Hint from "../../pages/hint/Hint";
import Leaderboard from "./../../pages/leaderboard/Leaderboard";
import FunFact from "../../pages/funFact/FunFact";
import { AuthContext } from "../../utilities/auth/AuthContext";
import { useContext } from "react";

const GameSetting = ({ setActiveView }) => {
  const [activeChildView, setActiveChildView] = useState("MENU"); //State to manage active child view //
  const { logout } = useContext(AuthContext); //Accessing logout function from AuthContext //

  return (
    <>
      {/* Render different views based on activeChildView */}
      {activeChildView === "MENU" && (
        <div className="gameSetting">
          <div className="gameSetting-container">
            <div className="gameSetting-title">
              <div className="gameSetting-text">
                <h2>TOM WISE </h2>
              </div>
            </div>
            <div className="button-container">
              <div className="LButton">
                <button
                  type="button"
                  className="LBtn"
                  onClick={() => setActiveChildView("LEADERBOARD")}
                >
                  LEADERBOARD
                </button>
              </div>
              <div className="hints">
                <button
                  type="button"
                  className="HBtn"
                  onClick={() => setActiveChildView("HINTS")}
                >
                  HINTS
                </button>
              </div>
              <div className="funFacts">
                <button
                  type="button"
                  className="FBtn"
                  onClick={() => setActiveChildView("FUN FACTS")}
                >
                  FUN FACTS
                </button>
              </div>
              <div className="continue">
                <button
                  type="button"
                  className="CBtn1"
                  onClick={() => {
                    setActiveView("QUIZ");
                    setActiveChildView("MENU"); // Reset child view to MENU
                  }}
                >
                  CONTINUE
                </button>
              </div>
              <div className="end">
                <Link to={"/"}>
                  <button
                    type="button"
                    className="EBtn2"
                    onClick={() => {
                      logout();
                      setActiveView("Main");
                      setActiveChildView("MENU");
                    }}
                  >
                    END GAME
                  </button>
                </Link>
              </div>
              <div className="gameSetting-close">
                <span
                  onClick={() => {
                    setActiveView("QUIZ");
                    setActiveChildView("MENU");
                  }}
                >
                  <img src={close} className="img-fluid" alt="close1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <>
        {/* Render  components */}
        {activeChildView === "HINTS" && (
          <Hint setActiveChildView={setActiveChildView} />
        )}

        <>
          {activeChildView === "LEADERBOARD" && (
            <Leaderboard setActiveChildView={setActiveChildView} />
          )}
        </>
        <>
          {activeChildView === "FUN FACTS" && (
            <FunFact setActiveChildView={setActiveChildView} />
          )}
        </>
      </>
    </>
  );
};

export default GameSetting;
