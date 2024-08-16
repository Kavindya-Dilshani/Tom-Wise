import React, { useEffect, useState } from "react";
import "./Hint.css";
import close from "../../assets/images/close.png";
import { useLocation } from "react-router-dom";

const Hint = ({ setActiveChildView }) => {
  const [hintText, setHintText] = useState("");
  const location = useLocation();
  const currentQuestion = location.state?.currentQuestion;

  useEffect(() => {
    /**Generate a hint based on whether the answer is odd or even*/
    const generateHint = () => {
      /**Extract the answer from the currentQuestion object */
      const answer = currentQuestion?.answer;

      /**Check if the answer is odd or even */
      if (answer % 2 === 0) {
        setHintText("The answer is even");
      } else {
        setHintText("The answer is odd");
      }
    };

    /**Call the generateHint function when the component mounts or when the currentQuestion changes */
    generateHint();
  }, [currentQuestion]);

  return (
    <div className="hint">
      <div className="hint-container">
        <div className="hint-title">
          <div className="hint-text">
            <h2>HINT</h2>
          </div>
        </div>
        <div className="hint-paragraph">
          <h2>{hintText}</h2>
        </div>
        <div className="hint-close">
          <span onClick={() => setActiveChildView("MENU")}>
            <img src={close} className="img-fluid" alt="close" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hint;
