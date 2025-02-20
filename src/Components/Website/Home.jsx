import React from "react";
import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Home() {
  const products = [
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/a (2).jpg",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
  
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/b (2).jpg",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/c (2).jpg",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/j.jpg",
    },
    {
      id: 1,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/h.jpg",
    },
    {
      id: 2,
      name: "Men's Shirt Slim Blue",
    
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/g.jpg",
    },
    {
      id: 3,
      name: "Men's Shirt Slim Blue",
     
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/f.jpg",
    },
    {
      id: 4,
      name: "Men's Shirt Slim Blue",
      
      price: 3600,
      originalPrice: 4500,
      discount: "20% Off",
      image: "/images/products/e.jpg",
    },
  ];
  return (
    <Layout>
      <Swiper
      
      slidesPerView={2}    // Number of slides visible at a time
      pagination={true}
      navigation={true}
      autoplay={{ delay: 3000 }} // Auto slide every 3s
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <img  src="/slides/slide1.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide2.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide3.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide4.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide5.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide6.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide7.jpg" alt="Slide 1" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img  src="/slides/slide8.jpg" alt="Slide 1" />
      </SwiperSlide>
    </Swiper>
    <div className="text-center py-8 bg-white shadow-sm">
      <h2 className="text-2xl font-bold">Latest Products</h2>
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
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
}

export default Home;
