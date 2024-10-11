import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Search Icon
import book1 from "../../../assets/images/48Laws.jpeg";
import book2 from "../../../assets/images/beNot.jpeg";
import book3 from "../../../assets/images/Breath.jpeg";
import book4 from "../../../assets/images/harryPotter.jpeg";
import book5 from "../../../assets/images/notAboutABoy.jpeg";
import book6 from "../../../assets/images/theGreatGatsby.jpeg";
import book7 from "../../../assets/images/thelchemist.jpeg";
import book8 from "../../../assets/images/twistedLove.jpeg";

const FeaturedBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchTerm) {
      // Redirect to a book category or search page
      window.open(`https://www.goodreads.com/search?q=${encodeURIComponent(searchTerm)}`, "_blank");
    }
  };

  const books = [
    { id: 1, image: book1, title: "48 Laws of Power" },
    { id: 2, image: book2, title: "Be Not Afraid" },
    { id: 3, image: book3, title: "Breath" },
    { id: 4, image: book4, title: "Harry Potter" },
    { id: 5, image: book5, title: "Not About A Boy" },
    { id: 6, image: book6, title: "The Great Gatsby" },
    { id: 7, image: book7, title: "The Alchemist" },
    { id: 8, image: book8, title: "Twisted Love" },
  ];

  return (
    <section className="py-12">
      {/* First Section - Heading, Search Bar, and Paragraph */}
      <div className="bg-blue-800 text-white p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Books</h2>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center items-center mb-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search for featured books"
              className="w-full p-3 rounded-full text-black focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} className="text-black" />
            </button>
          </div>
        </form>

        {/* Description Paragraph */}
        <p className="text-lg">
          Explore our selection of featured books carefully curated for readers who want to dive into something special!
        </p>
      </div>

      {/* Second Section - Book Grid */}
      <div className="bg-white p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Wrap the image in a Link that points to the BookDetails page */}
            <Link to={`/bookdetails/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </Link>

            {/* Hover Overlay with Search Icon */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to={"/books/:id"}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-white text-4xl"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
