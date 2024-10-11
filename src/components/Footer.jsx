import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Library Name as Heading */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">JB3 Library</h1>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-lg font-semibold mb-2">Quick Links:</span>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link to="/categories" className="hover:text-blue-300">
              Categories
            </Link>
            <Link to="/featuredbooks" className="hover:text-blue-300">
              Featured Books
            </Link>
            <Link to="/about" className="hover:text-blue-300">
              About Us
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-lg font-semibold mb-2">Follow Us:</span>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-white hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-lg font-semibold mb-2 contact us">
            Contact Us:
          </span>
          <p>123 Library Lane, Booktown, BT1234</p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +1 234 567 890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            email@library.com
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} JB3 Library. The website was created
          by JollyBee3.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
