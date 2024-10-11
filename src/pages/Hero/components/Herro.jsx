import React from "react";
import { Link } from "react-router-dom";

const Herro = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Fallback text for older browsers */}
        Your browser does not support the video tag.
      </video>
      <div className=" hero-overlay relative flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-40 z-10">
        <h1 className="text-3xl mb-5">Welcome to Our Library Website</h1>
        <p className="text-2xl mb-7">
          Discover amazing content and start your journey today...
        </p>
        <Link
          to="/signupnav"
          className="bg-blue-500 border-none py-4 px-6 text-white text-lg rounded transition-colors duration-300 ease-in-out cursor-pointer hover:bg-blue-500"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Herro;
