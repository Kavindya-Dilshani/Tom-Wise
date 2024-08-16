import clock from "../../assets/images/clock.png";
import "./Timer.css";

const Timer = ({ minutes, seconds }) => {
  return (
    <div className="timer">
      <div className="container px-0">
        <div className="timer-container">
          <img src={clock} className="img-fluid" alt="clock" />
          <h1>
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {/**Adding leading zero if minutes less than 10 */}
            {seconds < 10 ? "0" + seconds : seconds}{" "}
            {/**Adding leading zero if seconds less than 10 */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
