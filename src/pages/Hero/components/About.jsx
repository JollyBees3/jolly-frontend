import React from "react";
import pic from "../../../assets/images/about2.jpg";
import pic2 from "../../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="flex flex-row items-center justify-around pt-24 px-10">
      <div>
        <img src={pic} alt="About" className="w-[400px] h-[700px]" />
      </div>
      <div>
        <h1 className="text-left mt-1 text-blue-800 text-4xl italic font-medium">
          About Us
        </h1>
        <p>
          Welcome to our library, a sanctuary for readers and knowledge seekers!{" "}
          <br />
          With a diverse collection of over 100,000 books
          <br />
          we strive to foster a love for reading and learning in our community{" "}
          <br />
          Our library offers a welcoming space for everyone
          <br />
          featuring comfortable reading areas, engaging programs, and access to
          the latest digital resources <br />
          Join us as we explore the boundless worlds within our books and
          inspire a lifelong journey of discovery!
        </p>
        <div className="flex justify-around items-center p-7 mb-5 bg-blue-800 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white m-0">1+</h2>
            <p className="text-base text-white">Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white m-0">10k</h2>
            <p className="text-base text-white">Users</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white m-0">100k</h2>
            <p className="text-base text-white">Books</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white m-0">1M</h2>
            <p className="text-base text-white">Downloads</p>
          </div>
        </div>

        <img src={pic2} alt="About" className="w-[730px] h-[380px]" />
      </div>
    </div>
  );
};

export default About;
