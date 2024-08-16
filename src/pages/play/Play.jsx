import logo from "../../assets/images/logo.png";
import "./Play.css";
import { Link } from "react-router-dom";

const Play = () => {
  return (
    <>
      <div className="play">
        <div className="main-logo py-5">
          <div className="d-flex justify-content-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="play-button py-5 d-flex justify-content-center">
            {/** Link to quiz page */}
            <Link to={"/game"}>
              <button className="playBtn">LET’S PLAY</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
