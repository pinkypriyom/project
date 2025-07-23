// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'flowbite';

const Navbar = () => {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();               // clear token + user
    navigate('/login');     // redirect to login
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
        </Link>

        <div className="flex items-center gap-4 md:order-2">
          {user ? (
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full hover:scale-105 transition-all">
                <img className="w-5" src={assets.credit_star} alt="Credit" />
                <span className="text-xs sm:text-sm text-gray-600">Credits left: 50</span>
              </button>

              <span className="text-gray-700 dark:text-white hidden sm:inline">Hi, {user.name}</span>

              <div className="relative group">
                <img src={assets.profile_icon} className="w-10 rounded-full cursor-pointer" alt="Profile" />
                <div className="absolute hidden group-hover:block top-10 right-0 z-10 text-black rounded bg-white border p-2 text-sm shadow">
                  <ul className="list-none m-0">
                    <li
                      onClick={handleLogout}
                      className="cursor-pointer px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p onClick={() => navigate('/buy')} className="cursor-pointer text-sm text-gray-600 dark:text-white">
                Pricing
              </p>
              <button
                onClick={() => navigate('/login')}
                className="bg-zinc-800 text-white px-5 py-2 text-sm rounded-full"
              >
                Login
              </button>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 border md:mt-0 border-gray-100 rounded-lg bg-gray-50 md:bg-white md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-blue-700 md:p-0 dark:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 md:p-0 text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="block py-2 px-3 md:p-0 text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
