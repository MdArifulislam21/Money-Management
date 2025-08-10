

import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './pages/Navbar.jsx';

import ProtectedRoute from "./reduxPages/ProtectedRoute";
import RedirectOnLogin from './hooks/RedirectOnLogin.jsx';
import AuthChecker from "./hooks/AuthChecker.jsx";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./reduxPages/authSlice";


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch(login(token)); // restore state from localStorage
    }
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("Is user logged in?", isLoggedIn);

  return (
    <Router>
      < Navbar />
      <AuthChecker />
      <Routes>
        
        {/* <Route path="/" element={<RedirectOnLogin />} /> */}
        <Route path="/" element={isLoggedIn? <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>:<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" 
          element={<ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />

        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;



