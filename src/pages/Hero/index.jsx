import React from "react";
import Navbar1 from "../../components/Navbar1";
import About from "./components/About";
import Footer from "../../components/Footer";
import Herro from "./components/Herro";
import Categories from "./components/Categories";
import FeaturedBooks from "./components/FeaturedBooks";

const Hero = () => {
  return (
    <div>
      <Navbar1 />
      <Herro />
      <About />
      <Categories />
      <FeaturedBooks />
      <Footer />
    </div>
  );
};

export default Hero;
