import "./Alert.css";

const Alert = ({ type, onNextQuestion, onTryAgain }) => {
  return (
    <>
      <div className="alert">
        <div className="alert-container">
          <div className="alert-title">
            <div className="alert-text">
              <h2>TOM WISE</h2>
            </div>
          </div>
          <div className="custom-alert">
            {/* Render if type is 'correct' */}
            {type === "correct" && (
              <>
                <p>Correct Answer</p>
                <button onClick={onNextQuestion}>Next</button>
              </>
            )}
            {/* Render if type is 'incorrect' */}
            {type === "incorrect" && (
              <>
                <p>Wrong Answer!!</p>
                <button onClick={onTryAgain}>Try Again</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
