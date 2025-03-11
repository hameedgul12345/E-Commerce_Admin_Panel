import React, { useState } from "react";
import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <Layout>
      <Swiper
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="-z-10" // Lower z-index of Swiper
      >
        <SwiperSlide>
          <img src="/slides/slide1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides/slide2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides/slide4.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides/slide5.jpg" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides/slide6.jpg" alt="Slide 6" />
        </SwiperSlide>
      </Swiper>
      <div className="text-center py-8 bg-white shadow-sm">
        <h2 className="text-2xl font-bold">Latest Products</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          accusantium iusto, consequatur, officiis sapiente iure nisi aspernatur
          est corporis dolor ratione adipisci.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
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

export default Home;
