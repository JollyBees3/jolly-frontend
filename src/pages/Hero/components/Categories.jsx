import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const categories = [
    {
      name: "Fiction",
      count: 200,
      link: "https://www.goodreads.com/genres/fiction",
    },
    {
      name: "Non-Fiction",
      count: 200,
      link: "https://www.goodreads.com/genres/non-fiction",
    },
    {
      name: "Mystery",
      count: 400,
      link: "https://www.goodreads.com/genres/mystery",
    },
    {
      name: "Science Fiction",
      count: 500,
      link: "https://www.goodreads.com/genres/science-fiction",
    },
    {
      name: "Fantasy",
      count: 650,
      link: "https://www.goodreads.com/genres/fantasy",
    },
    {
      name: "Biography",
      count: 300,
      link: "https://www.goodreads.com/genres/biography",
    },
    {
      name: "History",
      count: 220,
      link: "https://www.goodreads.com/genres/history",
    },
    {
      name: "Romance",
      count: 720,
      link: "https://www.goodreads.com/genres/romance",
    },
    {
      name: "Adventure",
      count: 550,
      link: "https://www.goodreads.com/genres/adventure",
    },
    {
      name: "Children",
      count: 350,
      link: "https://www.goodreads.com/genres/children",
    },
    {
      name: "Health",
      count: 180,
      link: "https://www.goodreads.com/genres/health",
    },
    {
      name: "Self-Help",
      count: 250,
      link: "https://www.goodreads.com/genres/self-help",
    },
    {
      name: "Education",
      count: 900,
      link: "https://www.goodreads.com/genres/education",
    },
    {
      name: "Psychology",
      count: 100,
      link: "https://www.goodreads.com/genres/psychology",
    },
    {
      name: "Philosophy",
      count: 200,
      link: "https://www.goodreads.com/genres/philosophy",
    },
    {
      name: "Technology",
      count: 420,
      link: "https://www.goodreads.com/genres/technology",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Explore Categories
      </h2>
      <p className="text-center mb-8">
        Discover a wide variety of book categories that cater to all interests
        and preferences. Whether you're looking for gripping fiction, insightful
        non-fiction, or educational resources, we have something for everyone!
      </p>

      {/* STEM Categories */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faMicroscope}
            className="text-4xl text-blue-800 mb-4"
          />
          <p className="text-lg font-semibold">Science</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="text-4xl text-blue-800 mb-4"
          />
          <p className="text-lg font-semibold">Technology</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faCog}
            className="text-4xl text-blue-800 mb-4"
          />
          <p className="text-lg font-semibold">Engineering</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faCalculator}
            className="text-4xl text-blue-800 mb-4"
          />
          <p className="text-lg font-semibold">Mathematics</p>
        </div>
      </div>

      {/* Book Categories Loop */}
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:bg-gray-200 transition duration-200"
          >
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-gray-700">Books available: {category.count}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
