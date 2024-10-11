
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../../components/Navbar1";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null); // State to manage logged-in user
    const navigate = useNavigate(); // For navigation

    // Hardcoded login credentials
    const hardcodedUsername = "user123";
    const hardcodedPassword = "password123";

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === hardcodedUsername && password === hardcodedPassword) {
            alert("Login Successful");
            setUser(username); // Set the logged-in user
            navigate("/"); // Redirect to home page
        } else {
            alert("Login failed. Please check your credentials.");
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
                        className="w-[80%] h-[20%] border mb-[1em] ml-[10%] mr-auto"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        className="w-[80%] h-[20%] border mb-[1em] ml-[10%] mr-auto"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="border w-[30%] h-[40%] text-[1em] text-[white] font-bold p-[0.5em] pl-[1.7em] ml-[35%] rounded-sm bg-[#000080]">
                        Log In
                    </button>
                </form>
                <p className="font-bold text-[0.9em] text-center">Don't have an account?</p>
                <Link to="../signupnav" className="font-bold text-[0.9em] text-center text-[#000080] underline">
                    Sign Up
                </Link>
            </div>
        </section>
    );
};

export default LogIn;
