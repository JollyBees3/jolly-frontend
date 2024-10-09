import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import book1 from "../../../assets/images/econs.jpg";
import book2 from "../../../assets/images/geo.jpg";
import book3 from "../../../assets/images/agribook.jpg";
import book4 from "../../../assets/images/nov.jpg";
import book5 from "../../../assets/images/book2.jpg";
import book6 from "../../../assets/images/book5.jpg";
import book7 from "../../../assets/images/book3.jpg";
import book8 from "../../../assets/images/book6.jpg";

const FeaturedBooks = () => {
  return (
    <section className="py-12">
      {/* First Section - Heading, Search Bar, and Paragraph */}
      <div className="bg-blue-800 text-white p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Books</h2>

        {/* Search Bar */}
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search for featured books"
              className="w-full p-3 rounded-full text-black focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black"
            />
          </div>
        </div>

        {/* Description Paragraph */}
        <p className="text-lg">
          Explore our selection of featured books carefully curated for readers
          who want to dive into something special!
        </p>
      </div>

      {/* Second Section - Book Grid */}

      <div className="bg-white p-8 grid grid-cols-4 gap-6">
        {/* Book 1 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book1} alt="Book 1" className="w-full h-64 object-cover" />
        </div>

        {/* Book 2 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book2} alt="Book 2" className="w-full h-64 object-cover" />
        </div>

        {/* Book 3 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book3} alt="Book 3" className="w-full h-64 object-cover" />
        </div>

        {/* Book 4 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book4} alt="Book 4" className="w-full h-64 object-cover" />
        </div>

        {/* Book 5 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book5} alt="Book 5" className="w-full h-64 object-cover" />
        </div>

        {/* Book 6 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book6} alt="Book 6" className="w-full h-64 object-cover" />
        </div>

        {/* Book 7 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book7} alt="Book 7" className="w-full h-64 object-cover" />
        </div>

        {/* Book 8 */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={book8} alt="Book 8" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
