import React from 'react';
import { BiMapPin } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { IoCalendarNumberOutline } from 'react-icons/io5';

const SearchForm = () => {
    return (
        <div className=''>
            {/* Search Form */}
        <div className="absolute md:mt-20 z-40 lg:left-16 xl:left-56 top-[500px] md:top-[530px] lg:top-[80%] bg-white rounded-[20px] p-5 lg:p-10 shadow-lg w-full lg:max-w-4xl lg:mx-auto">
          <div className="grid grid-cols-3 gap-4">
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
    );
};

export default SearchForm;