import { datas } from "@/config/Data";
import Image from "next/image";
import Link from "next/link";
import { BiCabinet } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { RiShip2Line } from "react-icons/ri";

const ExploreOurCollection = () => {
  return (
    <div className="bg-secondary text-black">
      <div className="container py-10 md:pb-20 pt-36">
        <div className="flex justify-between items-center space-x-4 md:space-x-8 ">
          <h2 className=" font-bold text-4xl leading-normal">
            Explore Our Collection <br /> of Premium Luxury Yachts
          </h2>
          <p className="text-lg font-normal">
            Discover our luxurious yachts, meticulously <br /> designed for
            ultimate comfort, perfect for <br />
            both leisurely escapes
          </p>
        </div>
        <div className="grid grid-cols-3 items-center justify-between gap-8 mt-14">
          {datas.map((data, index) => (
            <div
              className=""
              key={index}
              className="rounded-xl bg-white shadow"
            >
              <Image
                src={data?.image}
                alt="home-title"
                priority
                width={1000}
                height={800}
                quality={100}
                className="w-[500px] h-auto rounded-t-xl"
              />
              <div className="p-6">
                <h2 className="font-medium text-2xl mt-3">{data?.title}</h2>
                <p className="font-normal text-lg mt-3">{data?.desc}</p>
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
                    className={`cursor-pointer text-lg lg:text-[17px]  transition-all duration-300  bg-primary text-white py-2.5 px-4 rounded uppercase`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href={`/`}
            className={`cursor-pointer text-lg lg:text-[17px]  transition-all duration-300 py-2.5 border rounded px-8  hover:bg-primary hover:border-primary border-primary mt-14 text-primary hover:!text-white"
          }`}
          >
            View All Yachts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurCollection;
