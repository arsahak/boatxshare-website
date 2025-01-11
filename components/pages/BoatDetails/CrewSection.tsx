import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
// import { Star } from 'lucide-react'

export default function CrewSection() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <h2 className="text-2xl font-semibold w-[25%]">Your crew</h2>
        <div className="flex items-center space-x-56  w-[75%]">
          {/* Profile Section */}
          <div className="flex ">
            <div>
              <h1 className="font-semibold mb-3 text-lg">Boat Owner</h1>
              <div className="w-24 h-20">
                <Image
                  src="/assets/home/top/sssman.jpg"
                  alt="image"
                  height={200}
                  width={200}
                  className="w-24 h-20"
                />
              </div>
              <Link href="#" className="text-[#0066FF] text-sm hover:underline">
                See profile
              </Link>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-medium text-lg">Yenisley</span>
                <span className="bg-amber-100 text-amber-700 text-[11px] px-2 py-1 rounded font-medium uppercase">
                  Top choice
                </span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <BiStar className="w-4 h-4 fill-current text-gray-900" />
                <span className="text-base font-semibold text-black">4.8</span>
                <span className="text-base text-gray-500">(129 bookings)</span>
              </div>
            </div>
          </div>
          {/* Stats and Button */}
          <div className="flex flex-col gap-4">
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 text-base">
                <p>
                  <GoDotFill className="text-[6px]" />
                </p>
                <span className="text-gray-700 ">Response rate:</span>
                <span className="font-medium">99%</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <p>
                  <GoDotFill className="text-[6px]" />
                </p>
                <span className="text-gray-700">Avg. response time:</span>
                <span className="font-medium">{"< 1 hour"}</span>
              </div>
            </div>
            <button className=" bg-white border border-[#0066FF] text-[#0066FF] px-2 py-2 rounded text-sm font-medium hover:bg-blue-50 transition-colors w-[70%] ml-3">
              MESSAGE OWNER
            </button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
}
