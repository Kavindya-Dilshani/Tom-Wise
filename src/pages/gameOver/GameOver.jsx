import "./GameOver.css";
import { Link } from "react-router-dom";
import sad from "../../assets/images/sad.png";

const GameOver = (props) => {
  return (
    <>
      <div className="gameOver">
        <div className="gameOver-container">
          <div className="gameOver-title">
            <div className="gameOver-text">
              <h2>GAME OVER</h2>
            </div>
          </div>
          <div className="gameOver-images">
            <img src={sad} className="img-fluid" alt="sad" />
          </div>
          <div className="gameOver-name">
            <h1>{props.name}</h1>
          </div>
          <div className="gameOver-box">
            <div className="gameOver-score">
              <h2>Score</h2>
              <h1>{props.score}</h1>
            </div>
            <div className="gameOver-button">
              <Link to="/play">
                <button type="button">Try Again</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GameOver;
