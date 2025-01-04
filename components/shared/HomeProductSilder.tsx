"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const images = [
    "/assets/home/student-with-goth-style-school.jpg",
    "/assets/home/student-with-goth-style-school.jpg",
    "/assets/home/student-with-goth-style-school.jpg",
  ];

  return (
    <div className="relative">
      <div className="">
        <div className="">
          {/* Previous Button */}
          <div className="absolute z-50 -left-2 md:left-1 top-[45%]">
            <button
              ref={prevButtonRef}
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2  z-50 w-[75px] flex items-center justify-center lg:w-[55px] shadow-lg h-[40px] lg:h-[55px] lg:shadow-none"
            >
              <IoIosArrowBack className="text-gray-100 hover:text-black size-6" />
            </button>
          </div>

          {/* Swiper */}
          <div className="w-[100%]">
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={800}
              modules={[Autoplay, Navigation, Pagination, Keyboard]}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="cursor-pointer">
                    <Image
                      className="w-full h-auto transition-all duration-700 ease-in-out"
                      width={1000}
                      height={1000}
                      src={src}
                      alt={`Gallery Image ${index + 1}`}
                      priority
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button */}
          <div className="absolute z-50 -right-2 md:right-1 top-[45%]">
            <button
              ref={nextButtonRef}
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2  w-[70px] flex items-center justify-center lg:w-[55px] shadow-lg lg:shadow-none h-[40px] lg:h-[55px]"
            >
              <IoIosArrowForward className="text-gray-100 hover:text-black size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductSlider;
