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
    </Layout>
  );
}

export default Home;
