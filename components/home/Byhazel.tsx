"use client";
import Image from "next/image";
import { useState } from "react";
import HomeProductSlider from "../shared/HomeProductSilder";

const Byhazel = () => {
  const [selectCategory, setSelectCategory] = useState("all");
  const images = [
    "/assets/home/image-one.jpg",
    "/assets/home/image-two.jpg",
    "/assets/home/image-three.jpg",
    "/assets/home/image-four.jpg",
  ];
  return (
    <div className="bg-sectionbg ">
      <div className="container py-10 md:py-20">
        <div className="font-aviano-regular ">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase ">
              @byhazel
            </h2>
            <h2 className="text-base md:text-xl font-semibold mt-3 uppercase ">
              {` If you weare’em, flaunt’em. Remember to tag us to get featured.
              That’s @BYHAZEL`}
            </h2>
          </div>
          <h2 className="text-base md:text-xl font-normal mt-6 font-outfit-sans text-center md:text-left">
            Filter by category
          </h2>
          <div className="flex items-center flex-wrap space-x-1 md:space-x-3 my-6 font-outfit-sans justify-center md:justify-start">
            <button
              onClick={() => setSelectCategory("all")}
              className={` ${
                selectCategory === "all"
                  ? "bg-[#9B8573] text-white "
                  : "bg-white text-black"
              } border border-black text-sm md:text-lg rounded  py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-3 md:px-4 hover:border-[#9B8573]`}
            >
              All
            </button>
            <button
              onClick={() => setSelectCategory("selvage")}
              className={` ${
                selectCategory === "selvage"
                  ? "bg-[#9B8573] text-white "
                  : "bg-white text-black"
              } border border-black text-sm md:text-lg rounded  py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-3 md:px-4 hover:border-[#9B8573]`}
            >
              Selvage/Dry to worn
            </button>
            <button
              onClick={() => setSelectCategory("women")}
              className={` ${
                selectCategory === "women"
                  ? "bg-[#9B8573] text-white "
                  : "bg-white text-black"
              } border border-black text-sm md:text-lg rounded  py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-3 md:px-4 hover:border-[#9B8573]`}
            >
              Women
            </button>
            <button
              onClick={() => setSelectCategory("worn-ins")}
              className={` ${
                selectCategory === "worn-ins"
                  ? "bg-[#9B8573] text-white "
                  : "bg-white text-black"
              } border border-black text-sm md:text-lg rounded  py-2 placeholder-gray-600  outline-none hover:bg-[#9B8573] hover:text-white px-3 md:px-4 hover:border-[#9B8573]`}
            >
              Worn-ins
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0">
          <div className="w-full lg:w-[32%] xl:w-[32%] 2xl:w-[32%] hover:opacity-80">
            <HomeProductSlider />
          </div>
          <div className="w-full lg:w-[67%] xl:w-[67%] 2xl:w-[68%] ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
              <div className="cursor-pointer">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out hover:opacity-80"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-one.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out hover:opacity-80"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-two.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 mt-5">
              <div className="mt-0 lg:-mt-[46px] xl:-mt-[60px] 2xl:-mt-[77px] cursor-pointer">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out hover:opacity-80"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-three.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  className="w-full h-auto transition-all duration-700 ease-in-out hover:opacity-80"
                  width={1000}
                  height={1000}
                  src={"/assets/home/image-four.jpg"}
                  alt={`Gallery Image}`}
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Byhazel;
