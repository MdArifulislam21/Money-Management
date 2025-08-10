

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reduxPages/authSlice";

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    // 1. Remove tokens from storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // 2. Update Redux state
    dispatch(logout());

    // 3. Redirect to login
    navigate("/login");
  };

  return logoutHandler;
}
