import React from "react";
import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function WebProducts() {
  const products = [
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/a.webp",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
  
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/b.webp",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/c.webp",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/d.webp",
    },
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/e.webp",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
    
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/f.webp",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
     
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/g.webp",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/h.webp",
    },
  ];
  return (
    <Layout>
     
    <div className="text-center py-8 bg-white shadow-sm">
      <h2 className="text-2xl font-bold">All Products</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusantium iusto, 
        consequatur, officiis sapiente iure nisi aspernatur est corporis dolor ratione adipisci.
      </p>
    </div>
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
            <button className="bg-green-600 rounded-sm w-[100%] mt-2.5 font-semibold p-2 text-white">Buy Now</button>
            <button className="bg-red-600 rounded-sm w-[100%] mt-2.5 font-semibold p-2 text-white">Add to Cart</button>
            
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
}

export default WebProducts;
