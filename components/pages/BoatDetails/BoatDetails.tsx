"use client"
import Image from "next/image";
import { BiAward, BiBadgeCheck, BiCalendar, BiMinus, BiPlus, BiRuler } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import BoatLocation from "./BoatLoaction";
import { SiUnicode } from "react-icons/si";
import Review from "./Review";
import SimilarBoat from "./SimilarBoat";
import CrewSection from "./CrewSection";

const BoatDetails = () => {
    const images = [
        "/assets/home/explor/Container.jpg", // Replace with dynamic image paths
        "/assets/home/explor/Container.jpg",
        "/assets/home/explor/Container.jpg",
        "/assets/home/explor/Container.jpg",
    ];
    return (
        <div className="py-20">
            <div className="max-w-[1320px] mx-auto mt-10">
                <div className=" p-6">
                    {/* Header */}
                    <h1 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold mb-6">
                        FREE Hour when you book 4 on 37' Rinker <br /> Fiesta Yacht!!!!
                    </h1>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-10 mb-6">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2">
                                <BsStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                <div>
                                    <p className="font-bold">4.9</p>
                                    <p className="text-sm text-gray-600">150+ Reviews</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col items-center ">
                            <div className="flex items-center gap-2">
                                <BiRuler className="w-5 h-5 text-gray-700" />
                                <div>
                                    <p className="font-bold">87'</p>
                                    <p className="text-sm text-gray-600">Boat length</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-2">
                                <FiUser className="w-5 h-5 text-gray-700" />
                                <div>
                                    <p className="font-bold">Up to 12</p>
                                    <p className="text-sm text-gray-600">Passengers</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center ">
                            <div className="flex items-center gap-2">
                                <BiAward className="w-5 h-5 text-gray-700" />
                                <div>
                                    <p className="font-bold">Certified</p>
                                    <p className="text-sm text-gray-600">The boat is insured with a deposit</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center ">
                            <div className="flex items-center gap-2">
                                <BiBadgeCheck className="w-5 h-5 text-gray-700" />
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
                <div className="grid md:grid-cols-2 gap-8 p-6">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* The Boat Section */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3">The boat</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Book 4 hours on our luxurious 37' Rinker Fiesta Yacht and get an extra hour absolutely FREE! That's 5
                                hours of ultimate fun and relaxation at no extra cost, for $399 per person for full 3Day 2Night in Khulna,
                                Khulna Division.
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
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications Section */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                            <div className="space-y-3">
                                {[
                                    { label: 'Year', value: '2000' },
                                    { label: 'Length', value: '37 ft.' },
                                    { label: 'Make', value: 'Rinker Boats' },
                                    { label: 'Model', value: '340 Fiesta Vee' },
                                    { label: 'Capacity', value: '12' }
                                ].map((spec, index) => (
                                    <div key={index} className="flex items-center text-sm">
                                        <span className="w-24 text-gray-600">{spec.label}</span>
                                        <span className="font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
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
                        <button className="w-full bg-[#7DDCD9] text-black font-medium py-3 rounded-lg mb-6">
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
                <hr className="my-10"/>
                {/* review */}
                <Review/>
                {/* location */}
                <BoatLocation />
                <CrewSection/>
                <SimilarBoat/>
            </div>
        </div>
    );
};

export default BoatDetails;