import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve cartItems from the location state
  const cartItems = location.state?.cartItems || [];

  // State to hold user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle checkout submission
  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Thank you for your purchase!");
    navigate("/"); // Redirect to home page
  };

  // Handle back to home
  const handleBackToHome = () => {
    alert("Going back to home.");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      
      {cartItems.length > 0 ? (
        <div>
          <h3 className="text-xl font-semibold mb-2">Your Items:</h3>
          <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-2 border-b pb-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleCheckout} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Shipping Details:</h3>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Address:
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Payment Method:
              <input
                type="text"
                name="paymentMethod"
                value={userDetails.paymentMethod}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </label>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Confirm Purchase
            </button>
          </form>
        </div>
      ) : (
        <p>Your cart is empty. Please add items to checkout.</p>
      )}

      <button
        onClick={handleBackToHome}
        className="mt-4 flex items-center text-blue-500 hover:underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CheckoutPage;
