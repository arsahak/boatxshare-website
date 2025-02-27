"use client";
import {
  Card,
  Drawer,
  DrawerBody,
  DrawerContent,
  Tab,
  Tabs,
  useDisclosure,
} from "@heroui/react";

import { formatDate } from "@/components/shared/ui/DateFormat";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiCalendar, BiMinus, BiPlus, BiRuler, BiTag } from "react-icons/bi";
import { CgCap } from "react-icons/cg";
import { GiBoatEngine } from "react-icons/gi";
import { GoClock, GoPeople, GoStarFill } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbMessageCog, TbPointFilled, TbRulerMeasure } from "react-icons/tb";
import { toast } from "react-toastify";
import MultiDayPicker from "../MultiDayPicker";
import SingleDayPicker from "../SingleDayPicker";
import Review from "./Review";
import SimilarBoat from "./SimilarBoat";
import ThingsToKnow from "./ThingsToKnow";

const BoatDetails = ({ boatDetails, session }: any) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(true);
  const [calculateTotalCost, setCalculateTotalCost] = useState(0);
  const [paymentFee, setPaymentFee] = useState(0);
  const [calculateCost, setCalculateCost] = useState(0);

  const [singleDay, setSingleDay] = useState(new Date());
  const [multiDay, setMultiDay] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [durationDropdownFlag, setDurationDropdownFlag] = useState(false);
  const [selectDuration, setSelectDuration] = useState(
    boatDetails?.bookingOption[0].duration
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDurationDropdownFlag(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const images = [
    "/assets/home/explor/Container.jpg",
    "/assets/home/explor/Container.jpg",
    "/assets/home/explor/Container.jpg",
    "/assets/home/explor/Container.jpg",
  ];
  const specs = [
    {
      icon: BiCalendar,
      label: "Year",
      value: boatDetails?.boatYear,
    },
    {
      icon: BiRuler,
      label: "Length",
      value: `${boatDetails?.boatLength} ft.`,
    },
    {
      icon: GiBoatEngine,
      label: "Make",
      value: boatDetails?.boatMake,
    },
    {
      icon: BiTag,
      label: "Model",
      value: boatDetails?.boatModel,
    },
    {
      icon: GoPeople,
      label: "Capacity",
      value: boatDetails?.boatPassengers,
    },
  ];

  const [selected, setSelected] = React.useState("singleDay");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [orderInfoDetails, setOrderInfoDetails] = useState({
    boatDetails: boatDetails?._id,
    duration: {
      startDate: "",
      endDate: "",
      totalDays: "",
    },
    groupSize: 1,
    baseCost: 140,
    paymentServiceFee: 14,
    totalFee: 78514,
    orderStatus: "pending",
    paymentStatus: "paid",
  });

  const groupSizeIncrease = () => {
    if (!orderInfoDetails) return;
    setOrderInfoDetails((prev) => ({
      ...prev!,
      groupSize: (prev?.groupSize || 0) + 1,
    }));
  };

  const groupSizeDecrease = () => {
    if (!orderInfoDetails) return;
    setOrderInfoDetails((prev) => ({
      ...prev!,
      groupSize: Math.max((prev?.groupSize || 1) - 1, 1),
    }));
  };

  const handleSubmitFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!session) {
      router.push("/sign-in");
    }

    try {
      // Submit form data
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: session || "",
          },
          body: JSON.stringify(durationValue),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `Error: ${response.status} ${response.statusText}`
        );
      }

      toast.success("Client created successfully!");
      setError(null);
      // router.push("/dashboard");
    } catch (error) {
      console.error("Error creating client data:", error);
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
      setError(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const countTotalCost = (boatDetails, selectDuration, selected, multiDay) => {
    // if (!boatDetails?.bookingOption?.length) return 0;

    return boatDetails.bookingOption.reduce((total, el) => {
      if (Number(el?.duration) === Number(selectDuration)) {
        let value = 0;

        if (selected === "singleDay") {
          value = Number(el?.price);
        } else if (selected === "multiDay") {
          const days = Math.max(1, multiDay.end - multiDay.start); // Ensure at least 1 day
          value = Number(el?.price) * days;
        }

        return value;
      }
      return total;
    }, 0);
  };

  useEffect(() => {
    let totalCost = countTotalCost(
      boatDetails,
      selectDuration,
      selected,
      multiDay
    );

    setCalculateCost(totalCost);
    setCalculateTotalCost(totalCost * 1.1);
    setPaymentFee(totalCost * 0.1);
  }, [boatDetails, selectDuration, selected, multiDay]);

  console.log(
    "check value item",
    countTotalCost(boatDetails, selectDuration, selected, multiDay)
  );

  return (
    <div>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
                <div className="flex w-full flex-col items-center justify-center mt-16">
                  <Tabs
                    aria-label="Options"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    color={"primary"}
                    radius="full"
                    size="lg"
                    className="border rounded-full border-gray-300"
                  >
                    <Tab key="singleDay" title="Single-day" radius={"full"}>
                      <Card>
                        <div className="mt-5">
                          <SingleDayPicker
                            setSingleDay={setSingleDay}
                            singleDay={singleDay}
                          />
                        </div>
                      </Card>
                    </Tab>
                    <Tab key="multiDay" title="Multi-day" radius={"full"}>
                      <Card>
                        <div className="mt-5">
                          <MultiDayPicker
                            setMultiDay={setMultiDay}
                            multiDay={multiDay}
                          />
                        </div>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
      {/* hero */}

      <div className="relative md:overflow-hidden">
        <div className="relative h-[350px] md:h-[400px] bg-[#F5F1EB]">
          <div className="">
            <Image
              src={"/assets/home/hero-img/herobg.jpg"}
              alt="home-banner"
              layout="fill"
              objectFit="cover bg-top"
              priority
              className="z-10 bg-cover bg-top"
              rel="preload "
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center my-0 left-0 right-0">
            <div className="container">
              <div className="flex items-center justify-center mt-28">
                <div className="w-full  -mt-[5%]">
                  <h1
                    className={`text-[50px] md:text-[60px] font-bold  leading-[55px] md:leading-[85px] tracking-normal text-white text-center`}
                  >
                    Catamaran
                  </h1>
                  <p className="text-lg text-white text-center">
                    <span className="cursor-pointer"> Home </span>/{" "}
                    <span className="text-primary">Catamaran</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto">
          <div className="">
            {/* Header */}
            <h2 className=" font-bold text-2xl md:text-4xl leading-snug text-center md:text-left my-10">
              {boatDetails?.title}
            </h2>
            {/* Stats Row */}
            <div className="flex flex-wrap gap-14 mb-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <GoStarFill className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <div>
                    <p className="font-bold">
                      {boatDetails?.ratings.toFixed(1)}
                    </p>
                    <p className="text-sm text-gray-600">{`${boatDetails?.totalBooking} bookings`}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-2">
                  <TbRulerMeasure className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-bold">{boatDetails?.boatLength}'</p>
                    <p className="text-sm text-gray-600">Boat length</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2">
                  <GoPeople className="w-6 h-6 text-gray-700" />
                  <div className="text-left">
                    <p className="font-bold ">
                      Up to {boatDetails?.boatPassengers}
                    </p>
                    <p className="text-sm text-gray-600">Passengers</p>
                  </div>
                </div>
              </div>
              {boatDetails?.boatCaptain && (
                <div className="flex flex-col items-center ">
                  <div className="flex items-center gap-2">
                    <CgCap className="w-6 h-6 text-gray-700" />
                    <div>
                      <p className="font-bold">Captained</p>
                      <p className="text-sm text-gray-600">
                        The boat is insured with a deposit
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-2">
                  <TbMessageCog className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-bold">
                      {boatDetails?.boatLister?.responseRate} %
                    </p>
                    <p className="text-sm text-gray-600">
                      Return & response rate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-2 h-[500px]">
              {/* Large Image */}
              <div className="col-span-2 row-span-2">
                <img
                  src={
                    boatDetails?.gallery[0] && boatDetails.gallery[0] !== ""
                      ? boatDetails.gallery[0]
                      : images[0]
                  }
                  alt="Large"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Small Images */}
              <div className="col-span-2 row-span-2 gap-2 ">
                {/* {images.map((image, index) => ( */}
                <div className="flex flex-col gap-2 h-full">
                  <img
                    src={
                      boatDetails?.gallery[2] && boatDetails.gallery[2] !== ""
                        ? boatDetails.gallery[2]
                        : images[2]
                    }
                    alt={`Small`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <img
                    src={
                      boatDetails?.gallery[3] && boatDetails.gallery[3] !== ""
                        ? boatDetails.gallery[3]
                        : images[3]
                    }
                    alt={`Small`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                {/* ))} */}
              </div>

              {/* Remaining Images */}
              <div className="col-span-2 row-span-2 ">
                {/* {images.map((image, index) => ( */}
                <img
                  src={
                    boatDetails?.gallery[1] && boatDetails.gallery[1] !== ""
                      ? boatDetails.gallery[1]
                      : images[1]
                  }
                  alt={`Small`}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* ))} */}
              </div>
            </div>
          </div>
          {/* content */}
          <div className="grid lg:grid-cols-3 gap-20 mt-10 2xl:mt-20 ">
            {/* Left Column */}
            <div className="space-y-8 lg:col-span-2">
              {/* The Boat Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">The boat</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {boatDetails?.description}
                </p>
              </div>

              {/* Amenities Section */}
              <div className="mb-16">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <ul className="space-y-3">
                  {boatDetails?.boatAmenitiesList?.map(
                    (amenity: any, index: number) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-lg text-gray-800"
                      >
                        <IoIosCheckmarkCircleOutline className="size-4" />
                        {amenity}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Specifications Section */}
              <div className="">
                <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                <div className="space-y-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3">
                      <spec.icon className="w-[18px] h-[18px] stroke-[1.5px] text-gray-500 shrink-0" />
                      <div className="flex items-center gap-10">
                        <span className="text-lg text-gray-700 w-14">
                          {spec.label}
                        </span>
                        <span className="text-lg font-medium">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Section */}
              <div className="">
                <h2 className="text-xl font-semibold mb-3">Booking Option</h2>
                <div className="space-y-4">
                  {boatDetails?.bookingOption?.map(
                    (spec: any, index: number) => (
                      <div key={index} className="flex items-center gap-1">
                        <TbPointFilled className="w-[18px] h-[18px] stroke-[1.5px] text-gray-500 shrink-0" />
                        <div className="flex items-center gap-10">
                          <span className="text-lg text-gray-700 w-32">
                            {spec.duration}
                          </span>
                          <span className="text-lg font-medium">
                            $ {spec.price}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="bg-white rounded-2xl shadow p-6 lg:col-span-1 lg:h-[550px] xl:h-[500px] border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">${selectDuration}</h3>
                  <p className="text-sm text-gray-500">
                    Estimated Cost + With Captain (Separate captain fee)
                  </p>
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-base mb-2">Date</label>
                <button
                  onClick={onOpen}
                  className="w-full p-2 border-1.5 rounded-lg text-base outline-none flex space-x-4"
                >
                  {/* <input
                    type="text"
                    value={}
                    readOnly
                    className="w-full p-3 border-1.5 rounded-lg pr-10 text-sm outline-none"
                  /> */}
                  <BiCalendar className="w-6 h-6 text-gray-600" />
                  <div className="">
                    {selected === "singleDay" ? (
                      <div className="">{formatDate(singleDay)}</div>
                    ) : (
                      <div className="">
                        From {formatDate(multiDay.start)}
                        {"  "} To {"  "}
                        {formatDate(multiDay.end)}
                      </div>
                    )}
                  </div>
                </button>

                {/* <div className="">
                  <DateRangePicker className="max-w-full" />
                </div> */}
              </div>

              {/* Duration and Group Size */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div>
                    <label className="block text-base mb-2">Duration</label>
                  </div>
                  <div className="relative inline-block text-left">
                    {/* Dropdown Button */}
                    {/* <button
                      onClick={() =>
                        setDurationDropdownFlag(!durationDropdownFlag)
                      }
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Menu
                    </button> */}
                    <div className="relative inline-block" ref={dropdownRef}>
                      {/* Dropdown Button */}
                      <button
                        onClick={() =>
                          setDurationDropdownFlag(!durationDropdownFlag)
                        }
                        className="px-4 py-2 border rounded-lg flex items-center gap-2"
                      >
                        <GoClock className="w-5 h-5 text-gray-800" />
                        <span className="text-base capitalize">
                          {selectDuration}
                        </span>
                      </button>

                      {/* Dropdown Menu */}
                      {durationDropdownFlag && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                          <ul className="py-2">
                            {boatDetails?.bookingOption?.map(
                              (el: any, index: number) => (
                                <li
                                  key={index}
                                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between text-black"
                                  onClick={() => {
                                    setSelectDuration(el?.duration);
                                    setDurationDropdownFlag(false);
                                  }}
                                >
                                  <p className="w-16">{el?.duration}</p>
                                  <p>${el?.price}</p>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <Dropdown className="bordered">
                    <DropdownTrigger>
                      <Button variant="bordered">
                        <div className="flex items-center gap-2">
                          <GoClock className="w-5 h-5 text-gray-800" />
                          <span className="text-base capitalize">
                            {selectDuration}
                          </span>
                        </div>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      // value={durationValue}
                      // onChange={(e: any) => setDurationValue(e.target.value)}
                      onAction={(key) => setSelectDuration(key)}
                    >
                      {boatDetails?.bookingOption?.map(
                        (el: any, index: number) => (
                          <DropdownItem key={el?.duration}>
                            <div className="flex items-center space-x-4">
                              <p className="w-16">{el?.duration}</p> -
                              <p>${el?.price}</p>
                            </div>
                          </DropdownItem>
                        )
                      )}
                    </DropdownMenu>
                  </Dropdown> */}
                </div>
                <div className="">
                  <label className="flex items-center text-base mb-2 space-x-2">
                    <span> Group Size</span>
                    <span className="text-gray-400 text-sm">(50 max)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-9 h-9 flex items-center justify-center border rounded-lg hover:bg-gray-100"
                      onClick={groupSizeDecrease}
                    >
                      <BiMinus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">
                      {orderInfoDetails?.groupSize}
                    </span>
                    <button
                      className="w-9 h-9 flex items-center justify-center border rounded-lg hover:bg-gray-100"
                      onClick={groupSizeIncrease}
                    >
                      <BiPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Send Inquiry Button */}
              <button
                className="w-full bg-primary text-white font-medium py-3 rounded-lg mb-6"
                onClick={handleSubmitFormData}
              >
                {loading ? "Loading" : "Confirm Order"}
              </button>

              {/* Price Breakdown */}
              <div className="text-sm space-y-2">
                <p className="text-gray-800">
                  Additional captain fee will be charged separately.
                </p>
                <div className="flex justify-between">
                  <span>Base Cost</span>
                  <span>$399.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Service Fee</span>
                  <span>$51.87</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-medium">
                  <span>Total</span>
                  <span>USD $450.87</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10" />
          {/* review */}
          <Review
            rating={boatDetails?.ratings}
            // reviews={boatDetails?.reviews}
          />
          {/* location */}
          {/* <BoatLocation location="Dinajpur, Dhaka, Bangladesh" /> */}

          {/* <CrewSection boatLister={boatDetails?.boatLister} /> */}
          <ThingsToKnow />
          <SimilarBoat />
        </div>
      </div>
    </div>
  );
};

export default BoatDetails;
