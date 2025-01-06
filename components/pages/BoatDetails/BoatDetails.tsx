"use client"
import Image from "next/image";
import { BiAward, BiBadgeCheck, BiCalendar, BiMinus, BiPlus, BiRuler, BiTag } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import BoatLocation from "./BoatLoaction";
import { SiUnicode } from "react-icons/si";
import Review from "./Review";
import SimilarBoat from "./SimilarBoat";
import CrewSection from "./CrewSection";
import { motion } from "framer-motion";
import heroImge from '@/public/assets/home/hero-img/heroSea.png'
import ThingsToKnow from "./ThingsToKnow";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GiBoatEngine } from "react-icons/gi";


const BoatDetails = () => {
    const images = [
        "/assets/home/explor/Container.jpg", // Replace with dynamic image paths
        "/assets/home/explor/Container.jpg",
        "/assets/home/explor/Container.jpg",
        "/assets/home/explor/Container.jpg",
    ];
    const specs = [
        {
          icon: BiCalendar,
          label: "Year",
          value: "2000"
        },
        {
          icon: BiRuler,
          label: "Length",
          value: "37 ft."
        },
        {
          icon: GiBoatEngine,
          label: "Make",
          value: "Rinker Boats"
        },
        {
          icon: BiTag,
          label: "Model",
          value: "340 Fiesta Vee"
        },
        {
          icon: FiUser,
          label: "Capacity",
          value: "12"
        }
      ]
    
    return (
        <div>
            {/* hero */}
            <main className=" relative md:overflow-hidden">
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
                    <div className="container">
                        <div className="flex items-center justify-center mt-14">
                            <div className="w-[80%] text-center text-white">
                                <h1
                                    className={`text-[50px] md:text-[80px] font-bold  leading-[55px] md:leading-[85px] tracking-normal`}
                                >
                                    Catamaran
                                </h1>
                                <p >Home/<span className="text-primary">Catamaran</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="py-10">
                <div className="container mx-auto">
                    <div className="">
                        {/* Header */}
                        <h1 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold mb-6">
                            FREE Hour when you book 4 on 37' Rinker <br /> Fiesta Yacht!!!!
                        </h1>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-10 mb-6">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2">
                                    <BsStar className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                    <div>
                                        <p className="font-bold">4.9</p>
                                        <p className="text-sm text-gray-600">150+ Reviews</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col items-center ">
                                <div className="flex items-center gap-2">
                                    <BiRuler className="w-6 h-6 text-gray-700" />
                                    <div>
                                        <p className="font-bold">87'</p>
                                        <p className="text-sm text-gray-600">Boat length</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center gap-2">
                                    <FiUser className="w-6 h-6 text-gray-700" />
                                    <div>
                                        <p className="font-bold">Up to 12</p>
                                        <p className="text-sm text-gray-600">Passengers</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center ">
                                <div className="flex items-center gap-2">
                                    <BiAward className="w-6 h-6 text-gray-700" />
                                    <div>
                                        <p className="font-bold">Certified</p>
                                        <p className="text-sm text-gray-600">The boat is insured with a deposit</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center ">
                                <div className="flex items-center gap-2">
                                    <BiBadgeCheck className="w-6 h-6 text-gray-700" />
                                    <div>
                                        <p className="font-bold">95%</p>
                                        <p className="text-sm text-gray-600">Return & response rate</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-6 gap-2 h-[500px]">
                            {/* Large Image */}
                            <div className="col-span-2 row-span-2">
                                <Image
                                    width={500}
                                    height={500}
                                    src={images[0]}
                                    alt="Large"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            {/* Small Images */}
                            <div className="col-span-2 row-span-2 gap-2 ">
                                {/* {images.map((image, index) => ( */}
                                <div className="flex flex-col gap-2 h-full">
                                    <Image
                                        // key={index}
                                        width={500}
                                        height={500}
                                        src={images[1]}
                                        alt={`Small`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                    <Image
                                        // key={index}
                                        width={500}
                                        height={500}
                                        src={images[2]}
                                        alt={`Small`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                                {/* ))} */}
                            </div>

                            {/* Remaining Images */}
                            <div className="col-span-2 row-span-2 ">
                                {/* {images.map((image, index) => ( */}
                                <Image
                                    // key={index}
                                    width={500}
                                    height={500}
                                    src={images[3]}
                                    alt={`Small`}
                                    className="w-full h-full object-cover rounded-md"
                                />
                                {/* ))} */}
                            </div>
                        </div>
                    </div>
                    {/* content */}
                    <div className="grid lg:grid-cols-3 gap-8 mt-10 2xl:mt-20 ">
                        {/* Left Column */}
                        <div className="space-y-8 lg:col-span-2">
                            {/* The Boat Section */}
                            <div>
                                <h2 className="text-xl font-semibold mb-3">The boat</h2>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Book 4 hours on our luxurious 37' Rinker Fiesta Yacht and get an extra hour absolutely FREE! That's 5
                                    hours of ultimate fun and relaxation at no extra cost, for $399 per person for full 3Day 2Night in Khulna,
                                    Khulna Division. Book 4 hours on our luxurious 37' Rinker Fiesta Yacht and get an extra hour absolutely FREE!
                                </p>
                            </div>

                            {/* Amenities Section */}
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                                <ul className="space-y-3">
                                    {[
                                        'Spacious deck for lounging and enjoying the sea breeze',
                                        'Comfortable indoor seating with air-conditioning',
                                        'Premium sound system for your favorite tunes',
                                        'Fully equipped kitchen and bathroom onboard',
                                        'Perfect for parties, family gatherings, or a romantic getaway'
                                    ].map((amenity, index) => (
                                        <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                                            <IoIosCheckmarkCircleOutline />
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specifications Section */}
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                                <div className="space-y-4">
                                    {specs.map((spec) => (
                                        <div key={spec.label} className="flex items-center gap-3">
                                            <spec.icon className="w-[18px] h-[18px] stroke-[1.5px] text-gray-500 shrink-0" />
                                            <div className="flex items-center gap-10">
                                                <span className="text-[14px] text-gray-700 w-14">{spec.label}</span>
                                                <span className="text-[14px] font-medium">{spec.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-1 lg:h-[550px] xl:h-[500px]">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-semibold">$450.87</h3>
                                    <p className="text-sm text-gray-500">Estimated Cost + With Captain (Separate captain fee)</p>
                                </div>
                            </div>

                            {/* Date Selection */}
                            <div className="mb-6">
                                <label className="block text-sm mb-2">Date</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value="29 Dec 2024 - 31 Dec 2024"
                                        readOnly
                                        className="w-full p-3 border rounded-lg pr-10 text-sm"
                                    />
                                    <BiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Duration and Group Size */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm mb-2">Duration</label>
                                    <div className="flex items-center gap-2">
                                        <SiUnicode className="w-5 h-5 text-gray-400" />
                                        <span className="text-sm">3 days</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">Group Size <span className="text-gray-400">(50 max)</span></label>
                                    <div className="flex items-center gap-2">
                                        <button className="w-8 h-8 flex items-center justify-center border rounded-lg">
                                            <BiMinus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center">2</span>
                                        <button className="w-8 h-8 flex items-center justify-center border rounded-lg">
                                            <BiPlus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Send Inquiry Button */}
                            <button className="w-full bg-primary text-black font-medium py-3 rounded-lg mb-6">
                                Send Inquiry
                            </button>

                            {/* Price Breakdown */}
                            <div className="text-sm space-y-2">
                                <p className="text-gray-500">Additional captain fee will be charged separately.</p>
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
                    <Review />
                    {/* location */}
                    <BoatLocation />
                    <CrewSection />
                    <ThingsToKnow />
                    <SimilarBoat />
                </div>
            </div>
        </div>
    );
};

export default BoatDetails;