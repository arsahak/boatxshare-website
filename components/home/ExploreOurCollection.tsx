"use client";
import { Card, Skeleton } from "@heroui/react";
import Link from "next/link";
import { BiCabinet } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { RiShip2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { slugify } from "../shared/ui/slugify";
import { AppDispatch, RootState } from "./store";

const ExploreOurCollection = () => {
  const dispatch: AppDispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.boatList.loading);
  const boatListData = useSelector(
    (state: RootState) => state.boatList.boatListData
  );

  const testValue = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-secondary text-black">
      {/* Search end */}
      <div className="container py-10 md:pb-20 mt-10 md:pt-44">
        <div className="flex md:flex-row flex-col justify-between items-center space-x-4 md:space-x-8 ">
          <h2 className=" font-bold text-2xl md:text-4xl leading-snug text-center md:text-left">
            Explore Our Collection <br /> of Premium Luxury Yachts
          </h2>
          <p className="text-base  md:text-lg font-normal text-center md:text-left mt-4 md:mt-0">
            Discover our luxurious yachts, meticulously <br /> designed for
            ultimate comfort, perfect for <br />
            both leisurely escapes
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8 mt-8 md:mt-14">
            {testValue?.map((el, index) => (
              <Card className="w-full rounded-xl bg-white shadow" radius="lg">
                <Skeleton className="rounded-xl ">
                  <div className="w-[500px] h-[280px] rounded-lg bg-default-300" />
                </Skeleton>
                <div className="space-y-4 mt-6  p-5">
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-5 w-4/5 rounded-lg bg-default-200" />
                  </Skeleton>
                  <Skeleton className="w-full rounded-xl">
                    <div className="h-5 w-full rounded-lg bg-default-200" />
                  </Skeleton>
                  <Skeleton className="w-full rounded-xl">
                    <div className="h-5 w-full rounded-lg bg-default-200" />
                  </Skeleton>
                  <div className="flex items-center justify-between space-x-4 mt-6 mb-4">
                    <Skeleton className="w-4/5 rounded-lg">
                      <div className="h-12 w-4/5 rounded-lg bg-default-300" />
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                      <div className="h-12 w-2/5 rounded-lg bg-default-300" />
                    </Skeleton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8 mt-8 md:mt-14">
            {boatListData?.map((data, index) => (
              <div key={index} className="rounded-xl bg-white shadow">
                <img
                  src={
                    data?.featureImage ||
                    "https://i.ibb.co.com/N2KQMf7F/Frame-1261153133-1.jpg"
                  }
                  alt="home-title"
                  // priority
                  // width={1000}
                  // height={800}
                  // quality={100}
                  className="w-[500px] h-[280px] rounded-t-xl"
                />
                <div className="p-6">
                  <h2 className="font-medium text-2xl mt-4 line-clamp-1">
                    {data?.title}
                  </h2>
                  <p className="font-normal text-base mt-4 line-clamp-2">
                    {data?.description}
                  </p>
                  <div className="border-t-1 border-b-1 border-gray-300 my-4">
                    <div className="flex items-center justify-between py-4">
                      <div className="flex items-center space-x-2">
                        <IoPeopleOutline className="size-6 text-black" />
                        <p>{data?.boatCapacity} guests</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BiCabinet className="size-6 text-black" />
                        <p>{data?.boatLength} Cabins</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RiShip2Line className="size-6 text-black" />
                        <p>{data?.boatPassengers} knots</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-primary font-medium text-2xl">
                      $ {data?.bookingOption[0].price} /{" "}
                      {data?.bookingOption[0]?.duration}
                    </h3>
                    <Link
                      href={`/boat/${slugify(data?.title)}`}
                      className={`cursor-pointer lg:text-lg duration-300 uppercase bg-primary text-white px-6 py-3 rounded-lg hover:bg-hoverColor transition text-lg`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-16">
          <Link
            href={`/`}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-hoverColor transition text-lg"
          >
            View All Yachts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurCollection;
