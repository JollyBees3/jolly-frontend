import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons/faMicroscope'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const categories = [
    { name: 'Fiction', count: 200 },
    { name: 'Non-Fiction', count: 200 },
    { name: 'Mystery', count: 400 },
    { name: 'Science Fiction', count: 500 },
    { name: 'Fantasy', count: 650 },
    { name: 'Biography', count: 300 },
    { name: 'History', count: 220 },
    { name: 'Romance', count: 720 },
    { name: 'Adventure', count: 550 },
    { name: 'Children', count: 350 },
    { name: 'Health', count: 180 },
    { name: 'Self-Help', count: 250 },
    { name: 'Education', count: 900 },
    { name: 'Psychology', count: 100 },
    { name: 'Philosophy', count: 200 },
    { name: 'Technology', count: 420 },
  ];
  
  const Categories = () => {
    return (
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
  
        {/* STEM Categories */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faMicroscope} className="text-4xl text-blue-800 mb-4" />
            <p className="text-lg font-semibold">Science</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faLaptopCode} className="text-4xl text-blue-800 mb-4" />
            <p className="text-lg font-semibold">Technology</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faCog} className="text-4xl text-blue-800 mb-4" />
            <p className="text-lg font-semibold">Engineering</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faCalculator} className="text-4xl text-blue-800 mb-4" />
            <p className="text-lg font-semibold">Mathematics</p>
          </div>
        </div>
  
        {/* Book Categories Loop */}
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-700">Books available: {category.count}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Categories;