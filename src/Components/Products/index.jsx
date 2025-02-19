<<<<<<< HEAD
import React from 'react'
import Layout from '../Layout'
=======
import React from "react";
import Layout from "../Layout";
>>>>>>> products

function Products() {
  const products = [
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/a (2).jpg",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/b (2).jpg",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/c (2).jpg",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/j.jpg",
    },
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/h.jpg",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/g.jpg",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/f.jpg",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/e.jpg",
    },
  ];

  return (
<<<<<<< HEAD
  <Layout>
    <h1>Products</h1>
  </Layout>
  )
=======
    <Layout>
      <h1>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <div className="mt-2 flex items-center">
              <span className="text-blue-600 font-bold text-lg">
                ₹{product.price}
              </span>
              <span className="ml-2 text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="ml-2 text-green-600 text-sm">
                {product.discount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
>>>>>>> products
}

export default Products;
