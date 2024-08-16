import "./Main.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Main = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-logo">
          {/** Link to sign up page  */}
          <Link to="/login">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
