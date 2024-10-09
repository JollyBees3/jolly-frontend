// CartPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Book 1', price: 12.99 },
    { id: 2, name: 'Book 2', price: 15.49 },
    { id: 3, name: 'Book 3', price: 9.99 },
  ]);

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" className="mr-2" />
        Your Cart
      </h2>
      {cartItems.length > 0 ? (
        <div className="bg-white p-4 shadow-lg rounded-lg">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-3 border-b pb-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${cartTotal}</span>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
