import "./SignUp.css";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Validation from "../Validation";
import { useAuth } from "../../utilities/auth/AuthContext";

const SignUp = () => {
  const { isAuthenticated, signup } = useAuth();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // If user already logged; then navigate to play page
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/play");
    }
  }, [isAuthenticated, navigate]);

  /**
   * This function use to handle changes of sign up form input fields
   * @param {onChange event} e
   */
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Prevent default events execution
    e.preventDefault();
    const validationErrors = Validation(values, true);
    // Check for errors
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with sign-up
      signup(
        values.name,
        values.email,
        values.password,
        values.confirmPassword
      );
      // Clear input fields
      setValues({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      // Show validation errors as alerts
      Object.values(validationErrors).forEach((error) => {
        alert(error);
      });
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <div className="signUp">
          <div className="signUp-section">
            <div className="signUp-title">
              <div className="signUp-text">
                <h2>SIGN UP</h2>
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="mb-3 row signUp-container">
                <label htmlFor="inputName" className="col-sm-4 col-form-label">
                  Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row signUp-container">
                <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className=" mb-3 row signUp-container">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-4 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row signUp-container">
                <label
                  htmlFor="confirmRegistrationPassword"
                  className="col-sm-4 col-form-label"
                >
                  Confirm Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmRegistrationPassword"
                    value={values.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-text py-2">
                <p>BY LOGIN IN YOU AGREE TO OUR TERMS & POLICY</p>
              </div>
              <div className="form-buttons mb-4 pt-5">
                <Link to={"/"}>
                  <button type="button" className="form-btn1">
                    Cancel
                  </button>
                </Link>
                <button type="submit" className="form-btn2">
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
