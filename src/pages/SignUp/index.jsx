import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/index";
import Navbar1 from "../../components/Navbar1";
import axios from "axios";
import React, { useState } from "react";



const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = async (event) => {

        event.preventDefault();


        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
           
            const formData = new FormData(event.target);
            const response = await axios.post(`${BASE_URL}/signup`, {
                username: formData.get("username"),
                password: formData.get("password"),
                confirmPassword: formData.get("confirmPassword"),
            });
            alert("You have been successfully registered.")

        } catch (error) {
            console.log(error);
            alert("There was an error during signup. Please try again.");
        }}
        return (
            <section className="signUp">
                <Navbar1/>
                <div className=" border shadow-lg w-[30%] h-[90%] ml-[55%] flex flex-col" >
                    <h1 className=" text-[2em] text-center mt-[0.5em] font-bold">Sign Up to Library</h1>
                    <form onSubmit={handleSubmit} className="h-[100%] mt-[2em] ">
                        <input name="username" type="text" className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto" placeholder="Enter your username" required />
                        <input name="password" type="text" className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto" placeholder="Enter your password" required />
                        <input name="confirmPassword" type="text" className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto" placeholder="Confirm password" required />
                        <button type="submit" className="border w-[30%] h-[13%] text-[1em] text-[white] font-bold p-[0.5em] ml-[35%] rounded-sm bg-[#000080] flex justify-center mb-[0.5em]">Sign Up</button>
                        <p className="font-bold text-[0.9em] text-center">Already have an account? </p>
                        <Link to="/login" className="font-bold text-[0.9em] text-center text-[#000080] underline ml-[45%]">Log In</Link>
                    </form>

                </div>
            </section>
        );
    };

export default SignUp;
