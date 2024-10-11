import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// Import your local images
import prideAndPrejudiceImage from "../../../assets/images/notAboutABoy.jpeg"; // Update the path to your asset
import nineteenEightyFourImage from "../../../assets/images/theGreatGatsby.jpeg"; // Update the path to your asset
import toKillAMockingbirdImage from "../../../assets/images/thelchemist.jpeg"; // Update the path to your asset
import audibleHereImage from "../../../assets/images/beNot.jpeg"; // Update the path to your asset
import catcherInTheRyeImage from "../../../assets/images/twistedLove.jpeg"; // Update the path to your asset

const CartPage = () => {
  const navigate = useNavigate();

  const [availableBooks] = useState([
    {
      id: 1,
      name: "Not About A Boy",
      price: 12.99,
      image: prideAndPrejudiceImage,
    },
    {
      id: 2,
      name: "The Great Gatsby",
      price: 15.49,
      image: nineteenEightyFourImage,
    },
    {
      id: 3,
      name: "The Alchemist",
      price: 12.99,
      image: toKillAMockingbirdImage,
    },
    {
      id: 4,
      name: "Be Not",
      price: 14.99,
      image: audibleHereImage,
    },
    {
      id: 5,
      name: "Twisted Love",
      price: 14.99,
      image: catcherInTheRyeImage,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const cartTotal = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", { state: { cartItems } }); // Pass cart items to CheckoutPage
    } else {
      alert("Your cart is empty! Add items before checking out.");
    }
  };

  const handleBackToHome = () => {
    alert("Going back to home.");
    navigate("/");
  };

  return (
    <div className="container mx-auto my-8">
      <button
        onClick={handleBackToHome}
        className="flex items-center text-blue-500 hover:underline mb-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to Home
      </button>

      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" className="mr-2" />
        Your Cart
      </h2>

      {cartItems.length > 0 ? (
        <div className="bg-white p-4 shadow-lg rounded-lg">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-3 border-b pb-2"
            >
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${cartTotal}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h3 className="text-xl font-semibold mt-8">Available Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {availableBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 border rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.name}
              className="h-40 w-32 mb-2 object-cover"
            />
            <span className="text-center">{book.name}</span>
            <span>${book.price}</span>
            <button
              onClick={() => addToCart(book)}
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
