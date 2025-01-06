// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { memo } from "react";

// const HeroSectionslider = () => {
//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const text = "Where boating connects hearts & horizon".split(" ");

//   return (
//     <div className="relative md:overflow-hidden">
//       <div className="relative h-[650px] md:h-[600px] bg-[#F5F1EB]">
//         <div className="">
//           <Image
//             src={"/assets/home/heroimage.jpg"}
//             alt="home-banner"
//             layout="fill"
//             objectFit="cover bg-top"
//             priority
//             className="z-10 bg-cover bg-top"
//             rel="preload "
//           />
//         </div>
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
//             <div className="flex items-center justify-center mt-14">
//               <div className="w-[80%]">
//                 <motion.h1
//                   className={`text-[50px] md:text-[80px] text-white font-bold text-center  leading-[55px] md:leading-[85px] tracking-normal`}
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
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default memo(HeroSectionslider);


"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import heroImge from '@/public/assets/home/hero-img/heroSea.png'
import { FaRegUser, FaUserSecret } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { IoCalendarNumberOutline } from "react-icons/io5";

const HeroSectionslider = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const text = "Where boating connects hearts & horizon".split(" ");

  return (
    <main className=" relative min-h-screen md:overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImge}
          alt="Ocean background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-16 px-4">
        {/* <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Where boating connects
            <br />
            hearts & horizon
          </h1>
        </div> */}
        <motion.div
          // className="absolute inset-0 z-20 flex items-center my-0"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="container">
            <div className="flex items-center justify-center mt-14">
              <div className="w-[80%]">
                <motion.h1
                  className={`text-[50px] md:text-[80px] text-white font-bold text-center  leading-[55px] md:leading-[85px] tracking-normal`}
                >
                  {text.map((word, index) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: index / 10 }}
                      key={index}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search Form */}
        <div className="absolute mt-10 z-40 left-56 bg-white rounded-[20px] p-10 shadow-lg w-full max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">Where to?</label>
              <div className="flex items-center space-x-2">
                <BiMapPin className="w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder="Dhaka, Bangladesh"
                  className="w-full focus:outline-none placeholder:text-black placeholder:!font-bold"
                  defaultValue="Dhaka, Bangladesh"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">When?</label>
              <div className="flex items-center space-x-2">
                <IoCalendarNumberOutline className="w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder="Jan 23 ± 7"
                  className="w-full focus:outline-none placeholder:text-black placeholder:!font-bold"
                  defaultValue="Jan 23 ± 7"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">Who's in?</label>
              <div className="flex items-center space-x-2">
                <FaRegUser className="w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder="7 Guests"
                  className="w-full focus:outline-none placeholder:text-black placeholder:!font-bold"
                  defaultValue="7 Guests"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-[#00C2FF] text-white px-8 py-2 -mb-14 rounded-md hover:bg-[#00B2FF] transition">
              Search
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default memo(HeroSectionslider);
