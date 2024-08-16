import { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../Validation";
import { useAuth } from "../../utilities/auth/AuthContext";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  /**If user already logged; then navigate to play page/** */
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/play");
    }
  }, [isAuthenticated, navigate]);

  /**
   * This function use to handle email and password change
   * @param {onChange event} e
   */
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /**
   * This function use to handle login form submission
   * @param {onSubmit event} e
   */
  const handleLoginFormSubmission = (e) => {
    // Prevent default events execution
    e.preventDefault();
    const validationErrors = Validation(values, false);
    // Check for errors
    if (Object.keys(validationErrors).length === 0) {
      login(values.email, values.password);
      // Clear input fields
      setValues({ email: "", password: "" });
    } else {
      // Show validation errors as alerts
      Object.values(validationErrors).forEach((error) => {
        alert(error);
      });
    }
  };

  return (
    <>
      {/**Render login form only if user is not authenticated */}
      {!isAuthenticated && (
        <div className="login">
          <div className="login-container">
            <div className="login-title">
              <div className="login-title1">
                <h2>LOGIN</h2>
              </div>
            </div>
            <form onSubmit={handleLoginFormSubmission} autoComplete="off">
              <div className="row mb-3 form-container">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mb-3 form-container">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="login-text py-3">
                <p>BY LOGIN IN YOU AGREE TO OUR TERMS & POLICY</p>
              </div>
              <div className="buttons">
                <Link to={"/signUp"}>
                  <button className="btn1">New User</button>
                </Link>
                <button type="submit" className="btn2">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
