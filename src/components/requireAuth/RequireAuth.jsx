import React from "react";

//import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  //   const location = useLocation();
  //   const navigate = useNavigate();

  return token ? children : <Navigate to="/login" />;
};
