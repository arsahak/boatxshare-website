import { edatas } from "@/config/Data";
import Image from "next/image";
import Link from "next/link";
import { BiCabinet } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { RiShip2Line } from "react-icons/ri";

const ExclusiveBoatDeals = () => {
  return (
    <div className="bg-white text-black">
      <div className="container py-10 md:py-20">
        <div className="flex md:flex-row flex-col justify-between items-center space-x-4 md:space-x-8 ">
          <h2 className=" font-bold text-2xl md:text-4xl leading-snug text-center md:text-left">
            Exclusive Boat Deals
          </h2>
          <p className="text-base  md:text-lg font-normal text-center md:text-left mt-4 md:mt-0">
            Experience the joy of being on the water with our limited-time
            <br className="hidden md:block" />
            offers! Enjoy unbeatable deals for a thrilling or relaxing getaway.
            <br className="hidden md:block" /> Book now and make your adventure
            unforgettable!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8 mt-14">
          {edatas.map((data, index) => (
            <div key={index} className="rounded-xl bg-white shadow border">
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
                <div className="flex items-center justify-between">
                  <h3 className="text-primary font-medium text-2xl">
                    $2,500/day
                  </h3>{" "}
                  <Link
                    href={`/boat/${data?.id}`}
                    className={`cursor-pointer lg:text-lg duration-300 uppercase bg-primary text-white px-6 py-3 rounded-lg hover:bg-hoverColor transition text-lg`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
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

export default ExclusiveBoatDeals;
