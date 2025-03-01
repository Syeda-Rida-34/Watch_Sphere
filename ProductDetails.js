import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '\Product_pics\Watch 1.jfif', description: 'This is a detailed description of Product 1.' },
  { id: 2, name: 'Product 2', price: 49.99, image: '\Product_pics\Watch 2.jfif', description: 'This is a detailed description of Product 2.' },
  { id: 3, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 3jfif.', description: 'This is a detailed description of Product 3.' },
  { id: 4, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 4.jpg', description: 'This is a detailed description of Product 4.' },
  { id: 5, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 5.jpg', description: 'This is a detailed description of Product 5.' },
  { id: 6, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 6.jfif', description: 'This is a detailed description of Product 6.' },
  { id: 7, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 7.jpg', description: 'This is a detailed description of Product 7.' },
  { id: 8, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 8.jpg', description: 'This is a detailed description of Product 8.' },
  { id: 9, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 9.jfif', description: 'This is a detailed description of Product 9.' },
  { id: 10, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 10.jpg', description: 'This is a detailed description of Product 10.' },
  { id: 11, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 11.jpg', description: 'This is a detailed description of Product 11.' },
  { id: 12, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 12.jpg', description: 'This is a detailed description of Product 12.' },
  { id: 13, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 13.jpg', description: 'This is a detailed description of Product 13.' },
  { id: 14, name: 'Product 3', price: 19.99, image: '\Product_pics\Watch 14.jpg', description: 'This is a detailed description of Product 14.' }, 
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-red-500 text-2xl font-bold">Product not found!</h2>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700">{product.description}</p>
      <p className="text-2xl font-bold mt-2">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
