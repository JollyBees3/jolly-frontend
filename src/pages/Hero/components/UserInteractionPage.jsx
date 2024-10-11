import React from "react";
import image1 from "../../../assets/images/add.jpg"; // Update the image paths according to your folder structure
import image2 from "../../../assets/images/delete.jpg";
import image3 from "../../../assets/images/update.jpg";
import image4 from "../../../assets/images/reviewbook.jpg";
import { Link } from "react-router-dom";

const UserInteractionPage = () => {
  return (
    <section className="p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Interact With Us</h1>

      {/* Paragraph */}
      <p className="text-lg text-center mb-12">
        Manage your book collection here. You can add, delete, update books, and
        send reviews for your favorite ones.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Book 1 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <img
            src={image1}
            alt="Book 1"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <Link to="/add-new" className="mb-2">
            <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-500">
              Add Book
            </button>
          </Link>
        </div>

        {/* Book 2 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <img
            src={image2}
            alt="Book 2"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <Link to="/deletebook" className="mb-2">
            <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-500">
              Delete Book
            </button>
          </Link>
        </div>

        {/* Book 3 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <img
            src={image3}
            alt="Book 3"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <Link to="/updatebook" className="mb-2">
            <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-500">
              Update Book
            </button>
          </Link>
        </div>

        {/* Book 4 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <img
            src={image4}
            alt="Book 4"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <Link to="/reviews" className="mb-2">
            <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-500">
              Review Book
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserInteractionPage;
