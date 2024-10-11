// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// const Navbar = () => {
//     return (
//         <div className="h-[10vh] shadow-md flex p-[0.3em]">
//                 <div className="border w-[7%]">
//                     <a href=""><FontAwesomeIcon icon={faArrowLeft} fontSize="2.5em" /></a>
//                 </div>
//                 <div className="border w-[20%] mr-[60%]">
//                     <h3 className="text-[1em]">Add Story Info</h3>
//                     <h3 className="text-[1.2em] font-medium">Untitled Story</h3>

//                 </div>
//                 <div className="border w-[40%] flex gap-[2em]">
//                     <button className=" text-[1em] h-[80%] w-[50%] border rounded-sm mt-auto">Cancel</button>
//                     <button className=" text-[1em] h-[80%] w-[50%] border rounded-sm mt-auto">Skip</button>
//                 </div>
//             </div>
//     );

// }
// export default Navbar;

// // SignUpNav.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import backgroundImage from '../../../assets/images/registerbg.png'; // Adjust the path as necessary

// const SignUpNav = ({ setUser }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (name && email && password) {
//       try {
//         // Send a POST request to the signup endpoint
//         const response = await axios.post("/api/signup", {
//           name,
//           email,
//           password,
//         });
        
//         // Handle successful signup
//         if (response.data.success) {
//           setUser(name); // Set the user name
//           alert("Signup successful!");
//           navigate("/"); // Redirect to homepage
//         } else {
//           alert(response.data.message); // Show error message
//         }
//       } catch (error) {
//         alert("An error occurred during signup."); // Show generic error message
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-full max-w-sm ml-80">
//         <nav className="flex justify-between items-center mb-4">
//           <div>
//             <Link to="/" className="mr-4">
//               Home
//             </Link>
//             <Link to="/login" className="text-blue-500">Login</Link>
//           </div>
//         </nav>
//         <form onSubmit={handleSignup} className="flex flex-col items-center space-y-4">
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpNav;
