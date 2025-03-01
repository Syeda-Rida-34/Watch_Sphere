import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // ✅ Import Global Cart Context

const CartPage = () => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  // Sample products with images
  const products = [
    { id: 1, name: 'Watch & Bracelet', price: 100, image: '/Product_pics/watch 1.jfif' },
    { id: 2, name: 'Mens Watch', price: 50, image: '/Product_pics/watch 2.jfif' },
    { id: 3, name: 'Golden Watch', price: 50, image: '/Product_pics/watch 3.jfif' },
  ];

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {/* Product List */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            {/* Checkout Button */}
            <button
              className="mt-2 ml-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              onClick={() => navigate('/checkout')}
            >
              Checkout
            </button>
          </div>
        ))}
      </div>

      {/* Cart Items */}
      {cart.length > 0 ? (
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <p>{item.name} - ${item.price}</p>
              <div>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${totalPrice}</h3>
          <button
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
