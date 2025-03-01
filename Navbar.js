import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          My WatchSphere
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-200">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-200">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="text-white hover:text-gray-200">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;