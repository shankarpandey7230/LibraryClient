import React from "react";
import { Navigate } from "react-router";

const AuthRoute = ({ children }) => {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/signin"></Navigate>;
};

export default AuthRoute;
