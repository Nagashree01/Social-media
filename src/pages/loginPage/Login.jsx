import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { loginHandler } = useAuth();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const guestLoginDetails = {
    username: "Dan",
    password: "Park4",
  };

  const loginFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };

  return (
    <div className="login-layout">
      <form onSubmit={loginFormSubmitHandler} className="login-form-container">
        <h1 className="login-form-heading">Bibliomeet</h1>
        <h1 className="login-form-heading">Login</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={loginDetails.username}
            onChange={(e) => loginFormChangeHandler(e)}
            name="username"
            placeholder="username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={loginFormChangeHandler}
            value={loginDetails.password}
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            setLoginDetails(() => ({
              ...loginDetails,
              username: guestLoginDetails.username,
              password: guestLoginDetails.password,
            }));
          }}
        >
          Login as Guest
        </button>
        <Link to="/signup" className="link-login">
          Don't have an account?Sign up
        </Link>
      </form>
    </div>
  );
};
