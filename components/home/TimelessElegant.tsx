import Image from "next/image";

const TimelessElegant = () => {
  return (
    <div className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="relative h-[250px] sm:h-[400px] md:h-[450px] lg:h-[480px] flex justify-center items-center">
          {/* Background Image */}
          <Image
            src="/assets/home/title-bg.png"
            alt="home-banner"
            width={100}
            height={100}
            className="absolute inset-0 z-10 w-full h-full object-contain"
          />

          {/* Text Content */}
          <div className="relative z-20 text-center font-outfit-sans uppercase">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-800 tracking-wide mt-4 sm:mt-6 lg:mt-8">
              TIMELESS
            </h2>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black mt-2 -mb-4 sm:-mb-6 lg:-mb-8">
              ELEGANT
            </h2>
            <p
              className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-extrabold text-transparent uppercase underline decoration-transparent mt-7 md:mt-9"
              style={{
                WebkitTextStroke: "2px #9B8573", // Adjust stroke width for smaller screens
                WebkitTextFillColor: "transparent",
                textDecoration: "underline",
                textDecorationColor: "transparent",
                textUnderlineOffset: "5px",
              }}
            >
              SOPHISTICATED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelessElegant;
