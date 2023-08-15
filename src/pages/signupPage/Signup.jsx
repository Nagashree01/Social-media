import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Signup.css";

export const Signup = () => {
  const { signupHandler } = useAuth();

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const signupFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignupDetails({ ...signupDetails, [name]: value });
  };

  const signupFormSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupDetails);
  };
  return (
    <div className="signup-layout">
      <form
        className="signup-form-container"
        onSubmit={signupFormSubmitHandler}
      >
        <h1 className="signup-form-heading">Bibliomeet</h1>
        <h1 className="signup-form-heading">Signup</h1>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={signupDetails.firstName}
            required
            onChange={signupFormChangeHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={signupDetails.lastName}
            placeholder="Last Name"
            onChange={signupFormChangeHandler}
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={signupDetails.email}
            placeholder="username"
            onChange={signupFormChangeHandler}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={signupDetails.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={signupFormChangeHandler}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create New Account
        </button>
        <Link to="/login" className="link-login">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
