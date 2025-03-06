import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const isAuth = false;

  return isAuth ? children : <Navigate to="/" />;
};

export default AuthRoute;
