import "./Result.css";
import { Link } from "react-router-dom";
import happy from "../../assets/images/happy.png";

const Result = ({ name, score, saveScore }) => {
  return (
    <>
      <div className="result">
        <div className="result-section">
          <div className="result-title">
            <div className="result-text">
              <h2>WINNER</h2>
            </div>
          </div>
          <div className="result-images">
            <img src={happy} className="img-fluid" alt="sad" />
          </div>
          <div className="result-name">
            <h1>{name}</h1>
          </div>
          <div className="result-box">
            <div className="result-score">
              <h2>Score</h2>
              <h1>{score}</h1>
            </div>
            <div className="result-button">
              <Link to="/play">
                <button type="button" onClick={() => saveScore()}>
                  Play
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
