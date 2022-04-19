import React from "react";
import { Navigate } from "react-router-dom";
import useUserAuth from "../context/UserAuthContextProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (user && localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;