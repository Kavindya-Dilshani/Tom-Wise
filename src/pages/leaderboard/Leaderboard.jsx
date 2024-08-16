import { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";
import close from "../../assets/images/close.png";
import firstMedal from "../../assets/images/first.png";
import secondMedal from "../../assets/images/second.png";
import thirdMedal from "../../assets/images/third.png";
import fourthMedal from "../../assets/images/4.png";
import fifthMedal from "../../assets/images/5.png";
import user1 from "../../assets/images/user1.png";

const url = "http://localhost:5000/api/score";

const Leaderboard = ({ setActiveChildView }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  /**This function use to fetch leaderboard data from API */
  const getLeaderboardData = async () => {
    try {
      const response = await axios.get(url);
      setLeaderboardData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  /**Fetch leaderboard data on component mount */
  useEffect(() => {
    getLeaderboardData();
  }, []);

  /**Array  that contains medal images */
  const medalImages = [
    firstMedal,
    secondMedal,
    thirdMedal,
    fourthMedal,
    fifthMedal,
  ];

  /**Array that contains user images  */
  const userImages = Array.from(
    { length: leaderboardData.length },
    () => user1
  );

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        <div className="leaderboard-title">
          <div className="leaderboard-text">
            <h2>LEADERBOARD</h2>
          </div>
        </div>
        {leaderboardData.map((user, index) => (
          <div className="leaderboard-items" key={index}>
            <div className="leaderboard-image">
              <img src={medalImages[index]} alt={`Medal ${index + 1}`} />
              <img src={userImages[index]} alt={`User1`} />
            </div>

            <div className="leaderboard-name">
              <h2>{user.name}</h2>
            </div>
            <div className="leaderboard-score">
              <h2>{user.score}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="leaderboard-close">
        <span onClick={() => setActiveChildView("MENU")}>
          <img src={close} className="img-fluid" alt="close" />
        </span>
      </div>
    </div>
  );
};

export default Leaderboard;
