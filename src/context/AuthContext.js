import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/AuthService";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user || "");

  const signupHandler = async ({ firstName, lastName, username, password }) => {
    try {
      const response = await signupService(
        firstName,
        lastName,
        username,
        password
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async ({ username, password }) => {
    console.log(username);
    try {
      const response = await loginService(username, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    toast.success("Logged Out Successfully");
    setCurrentUser(null);
    setToken(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        token,
        currentUser,
        signupHandler,
        logoutHandler,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
