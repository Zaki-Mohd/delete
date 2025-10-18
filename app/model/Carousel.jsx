'use client';

import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React from 'react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import ElectricBorder from './ElectricBorder.jsx';

const Carousel = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 450px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 400px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }

  .swiper-button-next, .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={`relative w-full max-w-4xl px-5 ${className}`}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 3000,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16, height: '100%' }}
              >
                <div
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 'inherit',
                    color: 'white',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    className="w-full object-cover"
                    src={image.src}
                    alt={image.alt}
                    style={{
                      flex: '1',
                      minHeight: 0,
                    }}
                  />
                  <div style={{ 
                    padding: '1rem', 
                    backgroundColor: 'black', 
                    flex: 1, 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <h3 style={{ margin: 0, color: '#7df9ff' }}>
                      {image.title}
                    </h3>
                    <p
                      style={{
                        margin: '0.5rem 0 0',
                        fontSize: '1rem',
                        color: 'white',
                      }}
                    >
                      {image.description}
                    </p>
                  </div>
                </div>
              </ElectricBorder>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
