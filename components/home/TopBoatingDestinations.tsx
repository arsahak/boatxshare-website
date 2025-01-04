import { topDestination } from "@/config/Data";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

import Link from "next/link";

const TopBoatingDestinations = () => {
  return (
    <div className="bg-secondary text-black">
      <div className="container py-10 md:py-20">
        <div className="flex justify-center flex-col items-center space-x-4 md:space-x-8 ">
          <h2 className=" font-bold text-4xl leading-normal">
            Top Boating Destinations
          </h2>
          <p className="text-lg font-normal">
            Explore our most iconic locations
          </p>
        </div>
        <div className="grid grid-cols-4 items-center justify-between gap-8 mt-14">
          {topDestination.map((data, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden bg-white shadow h-[500px]"
            >
              <Image
                src={data?.image}
                alt="home-title"
                priority
                width={1000}
                height={800}
                quality={100}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1 right-1 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-medium text-lg">{data?.title}</h2>
                    <h3 className="font-medium text-sm">$2,500</h3>
                  </div>
                  <Link
                    href={`/`}
                    className="cursor-pointer text-lg lg:text-[17px] transition-all duration-300 bg-white p-3 rounded-full"
                  >
                    <GoArrowRight className="text-black" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBoatingDestinations;
