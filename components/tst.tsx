// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { memo, useEffect, useRef, useState } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import {
//   Autoplay,
//   Keyboard,
//   Mousewheel,
//   Navigation,
//   Pagination,
// } from "swiper/modules";
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
//     image: "/assets/home/hero-img/hero-section-one.jpg",
//   },
//   {
//     subTitle: "Spring-Summer 2025",
//     title: "READY-TO-WEAR COLLECTION",
//     desc: `Heir to the visionary tradition of British Romanticism, John
//             Boorman is one of the great masters of cinematic form. His
//             sense of color, movement, and space perfectly matches his
//             interest in poetry and myth.`,
//     actions: "/",
//     image: "/assets/home/hero-img/hero-section-two.jpg",
//   },
//   {
//     subTitle: "Spring-Summer 2025",
//     title: "READY-TO-WEAR COLLECTION",
//     desc: `Heir to the visionary tradition of British Romanticism, John
//             Boorman is one of the great masters of cinematic form. His
//             sense of color, movement, and space perfectly matches his
//             interest in poetry and myth.`,
//     actions: "/",
//     image: "/assets/home/hero-img/hero-section-three.jpg",
//   },
// ];

// const HeroSectionslider = () => {
//   const { sidlerIndexValue, setSidlerIndexValue } = useState(0);
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

//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   // useEffect(() => {
//   //   if (
//   //     swiperRef.current &&
//   //     swiperRef.current.activeIndex !== silderIndexValue
//   //   ) {
//   //     swiperRef.current.slideTo(sidlerIndexValue);
//   //   }
//   // }, [sidlerIndexValue]);

//   // const handleSlideChange = (swiper: any) => {
//   //   setSidlerIndexValue(swiper.activeIndex);
//   // };

//   const text = "READY-TO-WEAR COLLECTION".split(" ");

//   return (
//     <div className="relative md:overflow-hidden">
//       <div className="relative h-[480px] md:h-[850px]">
//         <Swiper
//           className="mySwiper"
//           cssMode={true}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           initialSlide={sidlerIndexValue}
//           keyboard={true}
//           modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
//           mousewheel={true}
//           // pagination={{ clickable: true }}
//           onBeforeInit={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           // onSlideChange={handleSlideChange}
//         >
//           {sliderData.map((el, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative h-[480px] md:h-[850px]">
//                 <Image
//                   src={el.image}
//                   alt="home-banner"
//                   layout="fill"
//                   objectFit="cover"
//                   priority
//                   className="z-10 hidden md:block"
//                   rel="preload"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <motion.div
//           className="absolute inset-0 z-20 flex items-center my-0"
//           initial="hidden"
//           animate="visible"
//           exit={{ opacity: 0, transition: { duration: 1 } }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           <div className="container">
//             <div className="grid items-center grid-cols-1 md:grid-cols-3">
//               <div className="col-span-2">
//                 <motion.h2
//                   variants={variants}
//                   className="text-xl font-normal text-center text-[#9B8573] md:text-2xl md:text-left mb-4"
//                 >
//                   {/* {el.subTitle} */}
//                   Spring-Summer 2025
//                 </motion.h2>
//                 <motion.h1
//                   className={`text-[50px] md:text-[90px] text-white text-center md:text-left leading-[85px] tracking-normal font-aviano-regular`}
//                 >
//                   {text.map((word, index) => (
//                     <motion.span
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.25, delay: index / 10 }}
//                       key={index}
//                     >
//                       {word}{" "}
//                     </motion.span>
//                   ))}
//                 </motion.h1>
//                 <motion.p
//                   variants={variants}
//                   className="mt-6 text-center text-white text-md md:text-lg md:mt-5 md:text-left font-outfit-sans"
//                 >
//                   {/* {el.desc} */}`Heir to the visionary tradition of British
//                   Romanticism, John Boorman is one of the great masters of
//                   cinematic form. His sense of color, movement, and space
//                   perfectly matches his interest in poetry and myth
//                 </motion.p>
//                 <motion.div
//                   variants={variants}
//                   className="flex justify-center mt-5 md:mt-8 md:justify-start"
//                 >
//                   <Link
//                     href={"/"}
//                     className="flex items-center justify-center px-2 py-2 mb-2 text-sm font-medium text-white border border-white bg-none hover:bg-black md:text-lg md:px-8 me-0 md:me-6 w-44 uppercase font-aviano-regular"
//                   >
//                     Discover
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-center absolute bottom-10 container left-0 right-0">
//             <button
//               className="flex items-center space-x-3 text-white"
//               // onClick={() => setSidlerIndexValue((prev: any) => prev - 1)}
//             >
//               <BsArrowLeft className="size-6" />
//               <h2 className="font-aviano-regular text-lg">Previous</h2>
//             </button>
//             <h2 className="font-aviano-regular text-lg text-white border-b-2 border-white pb-2">
//               See the looks
//             </h2>
//             <button
//               className="flex items-center space-x-3 text-white"
//               // onClick={() => setSidlerIndexValue((prev: any) => prev + 1)}
//             >
//               <h2 className="font-aviano-regular text-lg">Next</h2>
//               <BsArrowRight className="size-6" />
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default memo(HeroSectionslider);
// {
//   /* <motion.div
//                 className="absolute inset-0 z-20 flex items-center my-0"
//                 initial="hidden"
//                 animate="visible"
//                 exit={{ opacity: 0, transition: { duration: 1 } }}
//                 variants={{
//                   visible: { transition: { staggerChildren: 0.2 } },
//                 }}
//               >
//                 <div className="container">
//                   <div className="grid items-center grid-cols-1 md:grid-cols-3">
//                     <div className="col-span-2">
//                       <motion.h2
//                         variants={variants}
//                         className="text-xl font-normal text-center text-[#9B8573] md:text-2xl md:text-left mb-4"
//                       >
//                         {el.subTitle}
//                       </motion.h2>
//                       <motion.h1
//                         className={`text-[50px] md:text-[90px] text-white text-center md:text-left leading-[85px] tracking-normal font-aviano-regular`}
//                       >
//                         {el.title}
//                       </motion.h1>
//                       <motion.p
//                         variants={variants}
//                         className="mt-6 text-center text-white text-md md:text-lg md:mt-5 md:text-left font-outfit-sans"
//                       >
//                         {el.desc}
//                       </motion.p>
//                       <motion.div
//                         variants={variants}
//                         className="flex justify-center mt-5 md:mt-8 md:justify-start"
//                       >
//                         <Link
//                           href={el.actions}
//                           className="flex items-center justify-center px-2 py-2 mb-2 text-sm font-medium text-white border border-white bg-none hover:bg-black md:text-lg md:px-8 me-0 md:me-6 w-44 uppercase font-aviano-regular"
//                         >
//                           Discover
//                         </Link>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center absolute bottom-10 container left-0 right-0">
//                   <button
//                     className="flex items-center space-x-3 text-white"
//                     ref={prevButtonRef}
//                   >
//                     <BsArrowLeft className="size-6" />
//                     <h2 className="font-aviano-regular text-lg">Previous</h2>
//                   </button>
//                   <h2 className="font-aviano-regular text-lg text-white border-b-2 border-white pb-2">
//                     See the looks
//                   </h2>
//                   <button
//                     className="flex items-center space-x-3 text-white"
//                     ref={nextButtonRef}
//                   >
//                     <h2 className="font-aviano-regular text-lg">Next</h2>
//                     <BsArrowRight className="size-6" />
//                   </button>
//                 </div>
//               </motion.div> */
// }
