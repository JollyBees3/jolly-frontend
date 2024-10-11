import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/review.jpg"; // Replace with the actual image path

const ReviewsSection = () => {
  // State for reviews
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", review: "Amazing book!", rating: 5 },
    { id: 2, name: "Jane Smith", review: "Very insightful.", rating: 4 },
  ]);

  // State for form input
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: 0,
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review && newReview.rating) {
      // Add new review to the list
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      // Show success message
      setSuccessMessage("Review submitted successfully!");
      // Clear form input
      setNewReview({ name: "", review: "", rating: 0 });
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  // Calculate average rating
  const averageRating =
    reviews.reduce((total, review) => total + parseInt(review.rating), 0) /
    reviews.length;

  return (
    <section
      className="p-8 bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps the background image in place while scrolling
        color: "white", // Ensures text is visible on the background
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Reviews</h2>

      {/* Reviews List */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white text-black p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h3 className="text-xl font-bold mb-2">{review.name}</h3>
            <p className="text-sm text-gray-700 mb-4">{review.review}</p>
            <div className="flex items-center">
              <span className="font-bold text-yellow-500">{review.rating}★</span>
              <span className="ml-2 text-gray-500">Rating</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Review Form */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-bold mb-4">Add a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Review</label>
            <textarea
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Submit Review
          </button>
        </form>

        {/* Success Alert */}
        {successMessage && (
          <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg">
            {successMessage}
          </div>
        )}
      </div>

      {/* Average Rating */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Average Rating</h3>
        <p className="text-yellow-500 text-4xl font-bold mt-2">
          {averageRating.toFixed(1)}★
        </p>
      </div>

      {/* Back to Home Button */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ReviewsSection;
