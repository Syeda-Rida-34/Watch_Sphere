import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // ✅ CartContext Import

const products = [
  { id: 1, name: 'Watch & Bracelet', price: 100, image: '/Product_pics/Watch 1.jfif' },
  { id: 2, name: 'Mens Watch', price: 50, image: '/Product_pics/Watch 2.jfif' },
  { id: 3, name: 'Golden Watch', price: 50, image: '/Product_pics/Watch 3.jfif' },
  { id: 4, name: 'Watch & Bracelet', price: 50, image: '/Product_pics/Watch 4.jfif' },
  { id: 5, name: 'Girls Watch', price: 70, image: '/Product_pics/Watch 5.jpg' },
  { id: 6, name: 'Watch', price: 100, image: '/Product_pics/Watch 6.jpg' },
  { id: 7, name: 'Smart Watch set', price: 90, image: '/Product_pics/Watch 7.jpg' },
  { id: 8, name: 'Smart Watch', price: 90, image: '/Product_pics/Watch 8.jpg' },
  { id: 9, name: 'Watch & Bracelet', price: 100, image: '/Product_pics/Watch 9.jfif' },
  { id: 10, name: 'Smart Magnet Watch', price: 80, image: '/Product_pics/Watch 10.jpg' },
  { id: 11, name: 'Smart Watch', price: 50, image: '/Product_pics/Watch 11.jpg' },
  { id: 12, name: 'Smart watch', price: 80, image: '/Product_pics/Watch 12.jpg' },
  { id: 13, name: 'Smart Watch', price: 90, image: '/Product_pics/Watch 13.jpg' },
  { id: 14, name: 'Smart Watch set', price: 100, image: '/Product_pics/Watch 14.jpg' },
];

const ProductListing = () => {
  const { addToCart } = useContext(CartContext); // ✅ Use Context

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded-lg" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)} // ✅ Context se addToCart use ho raha hai
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
