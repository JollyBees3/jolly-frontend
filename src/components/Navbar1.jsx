import React from "react";
import logo from "../assets/images/logo4.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar1 = ({ user, onLogout }) => {
  return (
    <div className="flex flex-row items-center justify-between h-14 bg-blue-800 fixed top-0 w-full z-20 px-4">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="logo" width={100} height={50} />
      </NavLink>

      {/* User Authentication Section */}
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center space-x-2">
            {/* Display user name */}
            <span className="text-white font-bold">Hello, {user}</span>
            
            {/* User profile icon */}
            <FontAwesomeIcon icon={faUser} className="text-white w-8 h-8" />

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signupnav"
            className="bg-blue-500 text-white text-base rounded-lg cursor-pointer transition-colors duration-300 ease-in-out font-medium hover:bg-blue-500 px-6 py-3"
          >
            Sign Up
          </Link>
        )}
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-10 list-none text-white text-base">
          {["Home", "About", "Books", "Blog", "Contact", "Reviews"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 rounded px-4 py-2 transition duration-300 ease-in-out"
                    : "hover:bg-blue-500 rounded px-4 py-2 transition duration-300 ease-in-out"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Shopping Cart Icon */}
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="h-6 w-6 pt-2 ml-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500 text-white"
        />
      </Link>
    </div>
  );
};

export default Navbar1;
