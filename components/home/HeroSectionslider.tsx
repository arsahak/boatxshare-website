"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

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
    <div className="relative md:overflow-hidden">
      <div className="relative h-[650px] md:h-[600px] bg-[#F5F1EB]">
        <div className="">
          <Image
            src={"/assets/home/heroimage.jpg"}
            alt="home-banner"
            layout="fill"
            objectFit="cover bg-top"
            priority
            className="z-10 bg-cover bg-top"
            rel="preload "
          />
        </div>
        <motion.div
          className="absolute inset-0 z-20 flex items-center my-0"
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
      </div>
    </div>
  );
};

export default memo(HeroSectionslider);
