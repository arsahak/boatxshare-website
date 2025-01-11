import { edatas } from "@/config/Data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BiCabinet } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { RiShip2Line } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SimilarBoat = () => {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="bg-white text-black relative">
      <div className="container py-10 md:py-20">
        <div className="flex md:flex-row flex-col justify-between items-center space-x-4 md:space-x-8 ">
          <h2 className=" font-bold text-2xl md:text-4xl leading-snug text-center md:text-left">
            Similar Boat
          </h2>
          <p className="text-base  md:text-lg font-normal text-center md:text-left mt-4 md:mt-0">
            Experience the joy of being on the water with our limited-time
            <br />
            offers! Enjoy unbeatable deals for a thrilling or relaxing getaway.
            <br /> Book now and make your adventure unforgettable!
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-14 "
        >
          {edatas?.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <div className="rounded-xl bg-white shadow border">
                  <Image
                    src={data?.image}
                    alt="home-title"
                    priority
                    width={1000}
                    height={800}
                    quality={100}
                    className="w-[500px] md:w-[500px] h-auto rounded-t-xl"
                  />
                  <div className="p-6">
                    <h2 className="font-medium text-2xl mt-4">{data?.title}</h2>
                    <p className="font-normal text-base mt-4">{data?.desc}</p>
                    <div className="border-t-1 border-b-1 border-gray-300 my-4">
                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-2">
                          <IoPeopleOutline className="size-6 text-black" />
                          <p>12 guests</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BiCabinet className="size-6 text-black" />
                          <p>6 Cabins</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RiShip2Line className="size-6 text-black" />
                          <p>30 knots</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevButtonRef}
          className="absolute top-1/2  -translate-y-1/2 bg-white text-primary border border-primary p-2 rounded-lg shadow z-50"
        >
          <BsArrowLeft className="w-6 h-6" />
        </button>
        <button
          ref={nextButtonRef}
          className="absolute top-1/2 -translate-y-1/2 bg-white text-primary border border-primary p-2 rounded-lg shadow z-50"
        >
          <BsArrowRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center mt-10">
          <Link
            href={`/`}
            className="hover:bg-primary text-primary hover:text-white px-14 py-3 rounded-lg  transition text-lg border border-primary "
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimilarBoat;
