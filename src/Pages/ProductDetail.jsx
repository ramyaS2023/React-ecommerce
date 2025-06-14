import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux/CartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const found = products.find((item) => item.id === Number(id));
    setProduct(found);
  }, [id, products]);

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };
    dispatch(addToCart(cartProduct)); 
    alert("Product added successfully!");
  };

  if (!product) return <div className="text-center mt-10">Loading product...</div>;

  return (
    <div className="px-6 md:px-16 lg:px-32 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src={product.image} alt={product.title} className="w-full h-auto max-w-md mx-auto" />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl text-red-600 font-semibold">${product.price}</p>

          <div className="flex items-center space-x-2">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 border border-gray-300 rounded px-2 py-1"
            />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleAddToCart} 
            >
              Add to Cart
            </button>
          </div>

          <div className="pt-4 text-sm text-gray-500 space-y-1">
            <p>Delivery & Return</p>
            <p>Ask a Question</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Product Description</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
