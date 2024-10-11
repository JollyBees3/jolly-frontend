import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await axios.post("/api/login", { email, password });

      if (response.data.success) {
        // Set user info (assuming the server returns the username)
        setUser(response.data.user.name);
        alert("Login successful!");

        // Redirect to homepage
        navigate("/");

      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error logging in. Please try again later.");
    }
  };

  return (
    <section className="signUp">
      <div className="border shadow-lg w-[30%] h-[90%] ml-[55%] flex flex-col">
        <h1 className="text-[2em] text-center mt-[1em] font-bold mb-[1em]">
          Log In to Library
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[80%] h-[20%] border mb-[1em] pl-[1em]"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[80%] h-[20%] border mb-[1em] pl-[1em]"
            placeholder="Enter your password"
            required
          />
          <button
            type="submit"
            className="border w-[30%] h-[40%] text-[1em] text-white font-bold p-[0.5em] rounded-sm bg-[#000080] hover:bg-[#000060] transition-all"
          >
            Log In
          </button>
        </form>
        <p className="font-bold text-[0.9em] text-center mt-[1em]">
          Don't have an account?
        </p>
        <Link
          to="/signupnav"
          className="font-bold text-[0.9em] text-center text-[#000080] underline"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default LogIn;
