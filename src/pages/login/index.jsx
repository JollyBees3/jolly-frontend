
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import Navbar1 from "../../components/Navbar1";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null); // State to manage logged-in user
    const navigate = useNavigate(); // For navigation

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                username,
                password,
            });

            if (response.data.success) {
                alert("Login Successful");
                setUser(username); // Set the logged-in user
                navigate("/"); // Redirect to home page
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("There was an error during login. Please try again.");
        }
    };

    return (
        <section className="signUp">
            <Navbar1 user={user} onLogout={() => setUser(null)} />
            <div className="border shadow-lg w-[30%] h-[90%] ml-[55%] flex flex-col">
                <h1 className="text-[2em] text-center mt-[1em] font-bold mb-[1em]">Log In to Library</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        name="username"
                        type="text"
                        className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="border w-[30%] h-[10%] text-[1em] text-[white] font-bold p-[0.5em] pl-[1.7em] ml-[35%] rounded-sm bg-[#000080]">
                        Log In
                    </button>
                </form>
                <p className="font-bold text-[0.9em] text-center">Don't have an account? </p>
                <Link to="../signupnav" className="font-bold text-[0.9em] text-center text-[#000080] underline">Sign Up</Link>
            </div>
        </section>
    );
};

export default LogIn;
