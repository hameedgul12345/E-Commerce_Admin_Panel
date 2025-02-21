
import React from 'react'
import Layout from '../Layout'

function Products() {
  const products = [
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/a.webp",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/b.webp",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/c.webp",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/d.webp",
    },
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/e.webp",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/f.webp",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/g.webp",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      description: "This is the best shirt available in the online market",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/h.webp",
    },
  ];

  return (


    <Layout>
      <h1>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product,index) => (
        <div
          key={index}
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
 
}

export default Products;
