import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // ✅ CartContext Import

const HomePage = () => {
  const { addToCart } = useContext(CartContext); // ✅ Use Context

  const products = [
    { id: 1, name: "Watch", price: 50, image: "Product_pics/watch 11.jpg" },
    { id: 2, name: "Watch", price: 70, image: "Product_pics/watch 5.jpg" },
    { id: 3, name: "Watch", price: 50, image: "Product_pics/watch 2.jfif" },
    { id: 4, name: "Watch", price: 90, image: "Product_pics/watch 13.jpg" },
    { id: 5, name: "Watch", price: 100, image: "Product_pics/watch 1.jfif" },
    { id: 6, name: "Watch", price: 100, image: "Product_pics/watch 6.jpg" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6 text-center text-3xl font-bold shadow-lg">
        Welcome to My WatchSphere
      </header>
      
      <section className="text-center py-10">
        <h2 className="text-4xl font-semibold text-gray-800">Discover Amazing Products</h2>
        <p className="text-lg text-gray-600 mt-3">Shop the best products at unbeatable prices!</p>
        <Link to="/products" className="mt-5 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition">Explore Products</Link>
      </section>
      
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Featured Products</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h4 className="text-xl font-semibold">{product.name}</h4>
              <p className="text-gray-600">${product.price}</p>
              <button 
                onClick={() => addToCart(product)} // ✅ Context se addToCart use kar raha hoon
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
