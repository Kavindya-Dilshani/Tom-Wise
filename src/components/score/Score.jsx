import "./Score.css";
import user from "../../assets/images/user.png";

const Score = ({ score, name }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="score">
            <div className="score-container">
              <h1>Score {score}</h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="score">
            <div className="name-container">
              <img src={user} className="img-fluid" alt="user" />
              <h1>{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
