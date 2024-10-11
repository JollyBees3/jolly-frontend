import React from "react";
import Navbar1 from "../../components/Navbar1";
import About from "./components/About";
import Footer from "../../components/Footer";
import Herro from "./components/Herro";
import Categories from "./components/Categories";
import FeaturedBooks from "./components/FeaturedBooks";

const Hero = ({ user, setUser }) => {

  const handleLogout = () => {
    setUser(null); // Log out the user
    alert("Are you sure you want to logout? Click ok to logout!");
  };

  return (
    <div>
      <Navbar1 user={user} setUser={setUser} onLogout={handleLogout}/>
      <Herro />
      <About />
      <Categories />
      <FeaturedBooks />
      <Footer />
    </div>
  );
};

export default Hero;
