import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const RedirectOnLogin = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />;
}

export default RedirectOnLogin;