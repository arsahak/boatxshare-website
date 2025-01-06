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



'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useEffect, useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

interface Testimonial {
  id: number
  name: string
  image: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Becky Nelson',
    image: "/assets/home/hero-img/hero-bluesky.jpg",
    text: 'Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minister highest his arrived for put and. Hopes lived by rooms oh in no death house.'
  },
  {
    id: 2,
    name: 'John Smith',
    image: "/assets/home/hero-img/hero-bluesky.jpg",
    text: 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn.'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    image: "/assets/home/hero-img/hero-bluesky.jpg",
    text: 'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy.'
  }
]

export function AmazingExperiencesAwait() {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null)
  const nextButtonRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2D1A4E] mb-2">
          Top Boating Destinations
        </h2>
        <p className="text-gray-600">Explore our most iconic locations</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          loop={true}
          slidesPerView={1}
          className="px-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="aspect-[4/5] relative w-full h-[300px] md:h-[500px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className='pt-36'>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center space-x-3 text-primary border border-primary p-2 rounded-lg z-20"
          ref={prevButtonRef}
        >
          <BsArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center space-x-3 text-primary border border-primary p-2 rounded-lg z-20"
          ref={nextButtonRef}
        >
          <BsArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
