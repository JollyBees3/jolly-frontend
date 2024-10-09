import React from "react";
import logo from "../assets/images/logo4.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="flex flex-row items-center justify-evenly h-14 bg-blue-800 fixed top-0 w-full z-20">
      <NavLink>
        <img src={logo} alt="logo" width={100} height={50} />
      </NavLink>
      <Link
        to="/signup"
        className="bg-[#0000800] border-none text-white text-base rounded-lg cursor-pointer transition-colors duration-300 ease-in-out font-cursive font-medium hover:bg-blue-500 px-6 py-3"
      >
        Sign Up
      </Link>

      <nav>
        <ul className="flex gap-10 list-none text-white font-cursive text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
                : "hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? " hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
                : "hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
            }
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
                : "hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
            }
          >
            Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
                : "hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
            }
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
                : "hover:bg-blue-500 hover:rounded hover:px-4 hover:py-2 transition duration-300 ease-in-out"
            }
          >
            Contact
          </NavLink>
        </ul>
      </nav>
      <Link to={"/cart"}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="h-6 w-6 pt-2 ml-5 cursor-pointer transition-colors duration-300 ease-in-out hover:scale-110 hover:text-whitesmoke hover:text-blue-500 text-white"
        />
      </Link>
    </div>
  );
};

export default Navbar1;
