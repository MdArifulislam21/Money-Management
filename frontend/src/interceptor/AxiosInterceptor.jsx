import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reduxPages/authSlice";


let refresh = false;

axios.interceptors.response.use(
  resp => resp,
  async error => {
    if (error.response && error.response.status === 401 && !refresh) {
      console.error("Unauthorized access - attempting to refresh token");
      console.log("localStorage.getItem",localStorage.getItem("refresh_token"))
      refresh = true;
      if  (!localStorage.getItem("refresh_token")) {
        console.error("No refresh token found in localStorage");
        localStorage.clear();
        return Promise.reject(error);
      }
      try {
        console.log(localStorage.getItem("refresh_token"));

        const response = await axios.post(
          "http://127.0.0.1:8000/api/token/refresh/",
          {
            refresh: localStorage.getItem("refresh_token")
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
          }
        );

        if (response.status === 200) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
          console.log("Token refreshed successfully", response.data.access);
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          const dispatch = useDispatch();
          dispatch(login(token)); // res
          // Retry original request
          return axios(error.config);
        }
      } catch (err) {
        console.error("Token refresh failed", err);
        localStorage.clear();
      }
    }

    refresh = false;
    return Promise.reject(error);
  }
);
