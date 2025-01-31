import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login/logout state
  };

  return (
    <nav className="bg-[#00B894] md:px-10 py-2 md:flex ">
      <div className="container mx-auto flex justify-between items-center flex-1">
        {/* Left-side Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Centered Search Bar for Mobile */}
        <div className="md:hidden flex-grow mx-2">
          <div className="relative w-full">
            <input
              type="text"
              className="p-2 rounded-md pl-10 bg-gray-100 text-black w-full"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 top-2.5 h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.293 13.293a1 1 0 011.414 0l3.293 3.293a1 1 0 010 1.414l-3.293 3.293a1 1 0 01-1.414-1.414L15.586 17H12a7 7 0 111.707-1.707L14.293 13.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Right-side Menu Icons (Mobile) */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 p-4 space-y-4">
          <NavLink className="text-white">Home</NavLink>
          <NavLink to={"/design-templates"} className="text-white">
            Desing Templates
          </NavLink>
          <NavLink to={"/custom-mockup"} className="text-white">
            Custom Mockup
          </NavLink>
          <NavLink className="text-white">Free Mockup</NavLink>
          <NavLink className="text-white">Best Sellers</NavLink>

          {/* Mobile Search */}
          {/* <div className="relative">
            <input 
              type="text" 
              className="p-2 rounded-md pl-10 bg-gray-100 text-black w-full" 
              placeholder="Search..."
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path fillRule="evenodd" d="M14.293 13.293a1 1 0 011.414 0l3.293 3.293a1 1 0 010 1.414l-3.293 3.293a1 1 0 01-1.414-1.414L15.586 17H12a7 7 0 111.707-1.707L14.293 13.293z" clipRule="evenodd" />
            </svg>
          </div> */}
        </div>
      )}

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 items-center">
        <NavLink className="text-white">Home</NavLink>
        <NavLink to={"/design-templates"} className="text-white">
          Desing Templates
        </NavLink>
        <NavLink to={"/custom-mockup"} className="text-white">
          Custom Mockup
        </NavLink>
        <NavLink to={"freemockup"} className="text-white">
          Free Mockup
        </NavLink>
        <NavLink to={"/bestSells"} className="text-white">
          Best Sellers
        </NavLink>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="p-2 rounded-md pl-10 bg-gray-100 text-black w-96"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2 top-2.5 h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.293 13.293a1 1 0 011.414 0l3.293 3.293a1 1 0 010 1.414l-3.293 3.293a1 1 0 01-1.414-1.414L15.586 17H12a7 7 0 111.707-1.707L14.293 13.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Login/Logout Button */}
        <Link
          to={"/login"}
          onClick={toggleLoginLogout}
          className="text-white hover:text-gray-200 p-2 border border-white rounded-md"
        >
          Login
        </Link>
        {!isLoggedIn && (
          <button
            onClick={toggleLoginLogout}
            className="text-white hover:text-gray-200 p-2 border border-white rounded-md"
          >
            Logout
          </button>
        )}

        {/* Profile Icon */}
        {!isLoggedIn && (
          <div className="text-white cursor-pointer">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
