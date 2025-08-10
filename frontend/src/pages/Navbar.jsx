import { useState } from "react";
import {  NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import  useLogout from "../hooks/useLogout.jsx";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const LogoutHandler = useLogout();

  return (
    <nav className="bg-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start w-full  h-16">
          
          {/* Left Section: Logo + NavLinks */}
          <div className="flex items-center gap-10 space-x-6">
            <span className="text-2xl font-bold text-green-600">FinManage</span>
          
            {isLoggedIn && 
              <div className="">
                < DashboardNav />
              </div>}
            
          </div>

          {/* Right Section: Auth NavLinks */}
          {!isLoggedIn?
            <div className="hidden md:flex items-center space-x-6">
            
              <NavLink to="login" className="text-gray-700 hover:text-green-600 transition">Login</NavLink>
              <NavLink to="register" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Register
              </NavLink>
            </div>:
            <div className="hidden md:flex items-center space-x-6">
              
              <button onClick={LogoutHandler} className="px-4 py-2 mt-3  text-blue-300 rounded-lg hover:bg-red-700 transition">
                Logout
              </button>
            </div>
            } 
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <NavLink to="/"  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</NavLink>
          <NavLink to="dashboard"  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</NavLink>
          <NavLink to="login"  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</NavLink>
          <NavLink to="register"  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</NavLink>
        </div>
      )} */}
    </nav>
  );
}
