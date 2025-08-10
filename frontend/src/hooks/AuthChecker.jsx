import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reduxPages/authSlice";

export default function AuthChecker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // In real app, validate token with backend before logging in
      dispatch(login(token));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return null; // invisible helper component
}
