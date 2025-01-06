// "use client";
// import Image from "next/image";
// import { memo, useEffect, useRef, useState } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const sliderData = [
//   {
//     subTitle: "Spring-Summer 2025",
//     title: "READY-TO-WEAR COLLECTION",
//     desc: `Heir to the visionary tradition of British Romanticism, John
//             Boorman is one of the great masters of cinematic form. His
//             sense of color, movement, and space perfectly matches his
//             interest in poetry and myth.`,
//     actions: "/",
//     image: "/assets/home/hero-img/hero-bluesky.jpg",
//   },
//   {
//     subTitle: "Spring-Summer 2025",
//     title: "READY-TO-WEAR COLLECTION",
//     desc: `Heir to the visionary tradition of British Romanticism, John
//             Boorman is one of the great masters of cinematic form. His
//             sense of color, movement, and space perfectly matches his
//             interest in poetry and myth.`,
//     actions: "/",
//     image: "/assets/home/hero-img/hero-bluesky.jpg",
//   },
//   {
//     subTitle: "Spring-Summer 2025",
//     title: "READY-TO-WEAR COLLECTION",
//     desc: `Heir to the visionary tradition of British Romanticism, John
//             Boorman is one of the great masters of cinematic form. His
//             sense of color, movement, and space perfectly matches his
//             interest in poetry and myth.`,
//     actions: "/",
//     image: "/assets/home/hero-img/hero-bluesky.jpg",
//   },
// ];

// const AmazingExperiencesAwait = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevButtonRef = useRef<HTMLButtonElement | null>(null);
//   const nextButtonRef = useRef<HTMLButtonElement | null>(null);
//   const swiperRef = useRef<any>(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
//       swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//     }
//   }, []);

//   const handleSlideChange = (swiper: any) => {
//     setCurrentIndex(swiper.activeIndex);
//   };

//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="container relative">
//       {/* Navigation Buttons */}
//       <button
//         className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center space-x-3 text-white bg-black/50 p-3 rounded-full z-20"
//         ref={prevButtonRef}
//         onClick={() => swiperRef.current?.slidePrev()}
//       >
//         <BsArrowLeft className="w-6 h-6" />
//       </button>
//       <button
//         className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center space-x-3 text-white bg-black/50 p-3 rounded-full z-20"
//         ref={nextButtonRef}
//         onClick={() => swiperRef.current?.slideNext()}
//       >
//         <BsArrowRight className="w-6 h-6" />
//       </button>

//       {/* Swiper Container */}
//       <Swiper
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         speed={800}
//         modules={[Autoplay, Navigation, Pagination, Keyboard]}
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper;
//           swiper.params.navigation.prevEl = prevButtonRef.current;
//           swiper.params.navigation.nextEl = nextButtonRef.current;
//           swiper.navigation.update();
//         }}
//         onSlideChange={handleSlideChange}
//         className="mt-8"
//       >
//         {sliderData.map((el, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//               {/* Image */}
//               <div className="relative w-full md:w-[500px] h-[300px] md:h-[500px]">
//                 <Image
//                   src={el.image}
//                   alt="home-banner"
//                   layout="fill"
//                   objectFit="cover"
//                   priority
//                   className="rounded-lg"
//                 />
//               </div>
//               {/* Description */}
//               <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
//                 <p className="text-white text-sm md:text-lg">{el?.desc}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default memo(AmazingExperiencesAwait);

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Becky Nelson",
    image: "/assets/home/top/slider-image.jpg",
    text: "Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minister highest his arrived for put and. Hopes lived by rooms oh in no death house. An fail up so shot leaf wise in. Minister highest his arrived for put and. Hopes lived by rooms oh in no death house.",
  },
  {
    id: 2,
    name: "John Smith",
    image: "/assets/home/top/slider-image.jpg",
    text: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn. past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn. ",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "/assets/home/top/slider-image.jpg",
    text: "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.",
  },
];

export function AmazingExperiencesAwait() {
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
    <div className="bg-white py-10 md:py-20">
      <div className="container ">
        <div className="text-center mb-12">
          <div className="flex justify-center flex-col items-center space-x-4 md:space-x-8 ">
            <h2 className=" font-bold text-2xl md:text-4xl leading-snug text-center">
              Top Boating Destinations
            </h2>
            <p className="text-base  md:text-lg font-normal text-center md:mt-0">
              Explore our most iconic locations
            </p>
          </div>
        </div>
        <div className="relative mx-14">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
            loop={true}
            slidesPerView={1}
            className="px-6 bg-white shadow-lg rounded-lg"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col md:flex-row items-center justify-between space-x-4 md:space-x-8">
                  <div className="w-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      height={600}
                      width={600}
                      className="w-[300px] md:w-[600px] h-auto rounded-t-lg md:rounded-l-lg"
                    />
                  </div>
                  <div className="w-full p-8 md:pr-16 rounded-r-lg">
                    <div className="">
                      <h2 className="font-semibold text-2xl md:text-3xl mt-4 text-center md:text-left">
                        {testimonial?.name}
                      </h2>
                      <p className="font-normal text-base md:text-lg mt-4 text-center md:text-left">
                        {testimonial?.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-14 md:-left-24 flex items-center space-x-3 text-primary border border-primary p-2 rounded-lg z-20 hover:bg-primary hover:text-white"
            ref={prevButtonRef}
          >
            <BsArrowLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-14 md:-right-24 flex items-center space-x-3 text-primary border border-primary p-2 rounded-lg z-20 hover:bg-primary hover:text-white"
            ref={nextButtonRef}
          >
            <BsArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
